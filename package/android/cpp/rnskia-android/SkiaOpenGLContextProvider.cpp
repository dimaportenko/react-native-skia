#include "SkiaOpenGLContextProvider.h"

#include "EGL/egl.h"
#include "GLES2/gl2.h"

#include "gltoolkit/Config.h"
#include "gltoolkit/Display.h"
#include "gltoolkit/Surface.h"

#include <RNSkLog.h>

namespace RNSkia {

std::mutex SkiaOpenGLContextProvider::mtx;
std::unique_ptr<SkiaOpenGLContextProvider> SkiaOpenGLContextProvider::instance =
    nullptr;

void customRenderTargetReleaseProc(void* releaseContext) {
  // We know that our releaseContext is our Context instance wrapped in a unique_ptr.
  // The unique_ptr's destructor will handle the deletion.
  std::unique_ptr<Context> context(static_cast<Context*>(releaseContext));
}

SkiaOpenGLContextProvider::SkiaOpenGLContextProvider() {
  // 1. Create root context
  auto display = std::make_unique<Display>();
  ConfigDescriptor desc;
  desc.api = API::kOpenGLES2;
  desc.color_format = ColorFormat::kRGBA8888;
  desc.depth_bits = DepthBits::kZero;
  desc.stencil_bits = StencilBits::kEight;
  desc.samples = Samples::kFour;
  desc.surface_type = SurfaceType::kPBuffer;
  auto config = display->ChooseConfig(desc);
  if (!config) {
    desc.samples = Samples::kOne;
    config = display->ChooseConfig(desc);
    if (config) {
        RNSkLogger::logToConsole("Falling back to a single sample (device doesn't support MSAA)");
    } else {
        RNSkLogger::logToConsole("Couldn't choose an offscreen config");
        return;
    }
  }

  rootContext = display->CreateContext(*config, nullptr);
  if (!rootContext) {
    RNSkLogger::logToConsole("Couldn't create the root context");
    return;
  }
  auto surface = display->CreatePixelBufferSurface(*config, 1, 1);
  if (!rootContext->MakeCurrent(*surface)) {
    RNSkLogger::logToConsole("Couldn't create the root context");
    return;
  }
  // 2. Create uiThreadContext
  auto backendInterface = GrGLMakeNativeInterface();
  uiThreadContext = GrDirectContext::MakeGL(backendInterface);
  if (!uiThreadContext) {
    RNSkLogger::logToConsole("Could not create uiThreadContext");
    return;
  }

  // 3. Create jsThreadContext
  jsThreadContext = GrDirectContext::MakeGL(backendInterface);
  if (!jsThreadContext) {
    RNSkLogger::logToConsole("Could not create jsThreadContext");
    return;
  }
}

SkiaOpenGLContextProvider::~SkiaOpenGLContextProvider() {
  uiThreadContext->releaseResourcesAndAbandonContext();
  uiThreadContext.reset();

  jsThreadContext->releaseResourcesAndAbandonContext();
  jsThreadContext.reset();
}

sk_sp<SkSurface> SkiaOpenGLContextProvider::MakeOffscreenSurface(
    sk_sp<GrDirectContext> grContext, int width, int height) {
  auto display = std::make_unique<Display>();
  ConfigDescriptor desc;
  desc.api = API::kOpenGLES2;
  desc.color_format = ColorFormat::kRGBA8888;
  desc.depth_bits = DepthBits::kZero;
  desc.stencil_bits = StencilBits::kEight;
  desc.samples = Samples::kFour;
  desc.surface_type = SurfaceType::kPBuffer;
  auto config = display->ChooseConfig(desc);
    if (!config) {
    desc.samples = Samples::kOne;
    config = display->ChooseConfig(desc);
    if (config) {
        RNSkLogger::logToConsole("Falling back to a single sample (device doesn't support MSAA)");
    } else {
        RNSkLogger::logToConsole("Couldn't choose an offscreen config");
        return nullptr;
    }
  }
  // Create a new PBuffer surface with desired width and height
  auto eglSurface = display->CreatePixelBufferSurface(*config, width, height);
  auto context = display->CreateContext(*config, rootContext.get());
  if (!context->MakeCurrent(*eglSurface)) {
    RNSkLogger::logToConsole("Couldn't make context current");
    return nullptr;
  }

  GrGLFramebufferInfo info;
  info.fFBOID = 0;
  info.fFormat = 0x8058;//GL_RGBA8;

  auto samples = static_cast<int>(desc.samples);
  int stencilBits = static_cast<int>(desc.stencil_bits);

  GrBackendRenderTarget backendRT(width, height, samples, stencilBits, info);

  sk_sp<SkSurface> surface = SkSurface::MakeFromBackendRenderTarget(
      grContext.get(), backendRT, kBottomLeft_GrSurfaceOrigin,
      kRGBA_8888_SkColorType, nullptr, nullptr);
     // &customRenderTargetReleaseProc, context.get());
  if (!surface) {
    RNSkLogger::logToConsole("Failed to create offscreen surface");
  }

  return surface;
}

} // namespace RNSkia