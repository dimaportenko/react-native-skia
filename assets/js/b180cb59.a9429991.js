"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3926],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>N});var r=t(7294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,p=function(e,a){if(null==e)return{};var t,r,p={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=r.createContext({}),i=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},c=function(e){var a=i(e.components);return r.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,p=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(t),N=p,k=m["".concat(o,".").concat(N)]||m[N]||d[N]||s;return t?r.createElement(k,n(n({ref:a},c),{},{components:t})):r.createElement(k,n({ref:a},c))}));function N(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var s=t.length,n=new Array(s);n[0]=m;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,n[1]=l;for(var i=2;i<s;i++)n[i]=t[i];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},932:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=t(7462),p=(t(7294),t(3905));const s={id:"hello-world",title:"Hello World",sidebar_label:"Hello World",slug:"/getting-started/hello-world"},n=void 0,l={unversionedId:"getting-started/hello-world",id:"getting-started/hello-world",title:"Hello World",description:"React Native Skia provides a declarative API using its own React Renderer.",source:"@site/docs/getting-started/hello-world.md",sourceDirName:"getting-started",slug:"/getting-started/hello-world",permalink:"/react-native-skia/docs/getting-started/hello-world",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/getting-started/hello-world.md",tags:[],version:"current",frontMatter:{id:"hello-world",title:"Hello World",sidebar_label:"Hello World",slug:"/getting-started/hello-world"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/react-native-skia/docs/getting-started/installation"},next:{title:"Web",permalink:"/react-native-skia/docs/getting-started/web"}},o={},i=[{value:"Result",id:"result",level:3}],c={toc:i};function d(e){let{components:a,...s}=e;return(0,p.kt)("wrapper",(0,r.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"React Native Skia provides a declarative API using its own React Renderer."),(0,p.kt)("div",{className:"shiki-twoslash-fragment"},(0,p.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,p.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,p.kt)("div",{parentName:"pre",className:"code-container"},(0,p.kt)("code",{parentName:"div"},(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"react"'),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," { ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")," } "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const App: () => JSX.Element"},"App")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const width: 256"},"width")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const height: 256"},"height")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const width: 256"},"width")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"*"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0.33"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.width?: string | number | undefined"},"width")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.height?: string | number | undefined"},"height")," }}>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:'(property) blendMode?: AnimatedProp<"color" | "clear" | "src" | "dst" | "srcOver" | "dstOver" | "srcIn" | "dstIn" | "srcOut" | "dstOut" | "srcATop" | "dstATop" | "xor" | "plus" | "modulate" | "screen" | "overlay" | ... 12 more ... | undefined, any>'},"blendMode")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"multiply"'),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cx: AnimatedProp<number, any>"},"cx")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cy: AnimatedProp<number, any>"},"cy")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"cyan"'),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cx: AnimatedProp<number, any>"},"cx")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const width: 256"},"width")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"-"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cy: AnimatedProp<number, any>"},"cy")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"magenta"'),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cx: AnimatedProp<number, any>"},"cx")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const width: 256"},"width")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"/"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"2"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cy: AnimatedProp<number, any>"},"cy")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const width: 256"},"width")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"-"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"yellow"'),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};")),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"default"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const App: () => JSX.Element"},"App"),";"))))),(0,p.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,p.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,p.kt)("div",{parentName:"pre",className:"code-container"},(0,p.kt)("code",{parentName:"div"},(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"react"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const App: () => JSX.Element"},"App")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const width: 256"},"width")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const height: 256"},"height")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const width: 256"},"width")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"*"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0.33"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.width?: string | number | undefined"},"width")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.height?: string | number | undefined"},"height")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:'(property) blendMode?: AnimatedProp<"color" | "clear" | "src" | "dst" | "srcOver" | "dstOver" | "srcIn" | "dstIn" | "srcOut" | "dstOut" | "srcATop" | "dstATop" | "xor" | "plus" | "modulate" | "screen" | "overlay" | ... 12 more ... | undefined, any>'},"blendMode")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"multiply"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cx: AnimatedProp<number, any>"},"cx")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cy: AnimatedProp<number, any>"},"cy")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"cyan"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cx: AnimatedProp<number, any>"},"cx")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const width: 256"},"width")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"-"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cy: AnimatedProp<number, any>"},"cy")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"magenta"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cx: AnimatedProp<number, any>"},"cx")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const width: 256"},"width")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"2"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) cy: AnimatedProp<number, any>"},"cy")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const width: 256"},"width")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"-"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const r: number"},"r")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"yellow"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"export"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"default"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const App: () => JSX.Element"},"App")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,p.kt)("h3",{id:"result"},"Result"),(0,p.kt)("img",{src:t(6013).Z,width:"256",height:"256",alt:"Hello World"}))}d.isMDXComponent=!0},6013:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/blend-modes-c1ada79f014371551d71e6d3302f0425.png"}}]);