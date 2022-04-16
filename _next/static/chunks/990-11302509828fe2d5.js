(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{3321:function(e,t,r){"use strict";r.d(t,{Z:function(){return z}});var n=r(3366),o=r(7462),a=r(7294),i=r(6010),l=r(7925),s=r(7192),c=r(1796),u=r(1496),d=r(1657),p=r(6054),f=r(8216),m=r(8979);function g(e){return(0,m.Z)("MuiButton",e)}var v=(0,r(6087).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var h=a.createContext({}),b=r(5893);const x=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),y=(0,u.ZP)(p.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,f.Z)(r.color)}`],t[`size${(0,f.Z)(r.size)}`],t[`${r.variant}Size${(0,f.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,r.disableElevation&&t.disableElevation,r.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var r,n;return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${v.focusVisible}`]:(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${v.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(r=(n=e.palette).getContrastText)?void 0:r.call(n,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.startIcon,t[`iconSize${(0,f.Z)(r.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e)))),$=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.endIcon,t[`iconSize${(0,f.Z)(r.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e))));var z=a.forwardRef((function(e,t){const r=a.useContext(h),c=(0,l.Z)(r,e),u=(0,d.Z)({props:c,name:"MuiButton"}),{children:p,color:m="primary",component:v="button",className:S,disabled:z=!1,disableElevation:Z=!1,disableFocusRipple:k=!1,endIcon:C,focusVisibleClassName:M,fullWidth:I=!1,size:R="medium",startIcon:W,type:E,variant:N="text"}=u,L=(0,n.Z)(u,x),P=(0,o.Z)({},u,{color:m,component:v,disabled:z,disableElevation:Z,disableFocusRipple:k,fullWidth:I,size:R,type:E,variant:N}),j=(e=>{const{color:t,disableElevation:r,fullWidth:n,size:a,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,f.Z)(t)}`,`size${(0,f.Z)(a)}`,`${i}Size${(0,f.Z)(a)}`,"inherit"===t&&"colorInherit",r&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,f.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,f.Z)(a)}`]},u=(0,s.Z)(c,g,l);return(0,o.Z)({},l,u)})(P),O=W&&(0,b.jsx)(w,{className:j.startIcon,ownerState:P,children:W}),A=C&&(0,b.jsx)($,{className:j.endIcon,ownerState:P,children:C});return(0,b.jsxs)(y,(0,o.Z)({ownerState:P,className:(0,i.Z)(S,r.className),component:v,disabled:z,focusRipple:!k,focusVisibleClassName:(0,i.Z)(j.focusVisible,M),ref:t,type:E},L,{classes:j,children:[O,p,A]}))}))},6886:function(e,t,r){"use strict";r.d(t,{ZP:function(){return w}});var n=r(3366),o=r(7462),a=r(7294),i=r(6010),l=r(5408),s=r(9707),c=r(7192),u=r(1496),d=r(1657);var p=a.createContext(),f=r(8979);function m(e){return(0,f.Z)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var v=(0,r(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]),h=r(5893);const b=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function x(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function S(e,t,r={}){if(!t||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[r[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:n,sm:o,md:a,lg:i,xl:l}=e;return[Number(n)>0&&(r[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`),Number(o)>0&&(r[`spacing-sm-${String(o)}`]||`spacing-sm-${String(o)}`),Number(a)>0&&(r[`spacing-md-${String(a)}`]||`spacing-md-${String(a)}`),Number(i)>0&&(r[`spacing-lg-${String(i)}`]||`spacing-lg-${String(i)}`),Number(l)>0&&(r[`spacing-xl-${String(l)}`]||`spacing-xl-${String(l)}`)]}const y=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:r,direction:n,item:o,lg:a,md:i,sm:l,spacing:s,wrap:c,xl:u,xs:d,zeroMinWidth:p}=e.ownerState;return[t.root,r&&t.container,o&&t.item,p&&t.zeroMinWidth,...S(s,r,t),"row"!==n&&t[`direction-xs-${String(n)}`],"wrap"!==c&&t[`wrap-xs-${String(c)}`],!1!==d&&t[`grid-xs-${String(d)}`],!1!==l&&t[`grid-sm-${String(l)}`],!1!==i&&t[`grid-md-${String(i)}`],!1!==a&&t[`grid-lg-${String(a)}`],!1!==u&&t[`grid-xl-${String(u)}`]]}})((({ownerState:e})=>(0,o.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const r=(0,l.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,l.k9)({theme:e},r,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${v.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:r,rowSpacing:n}=t;let o={};if(r&&0!==n){const t=(0,l.P$)({values:n,breakpoints:e.breakpoints.values});o=(0,l.k9)({theme:e},t,(t=>{const r=e.spacing(t);return"0px"!==r?{marginTop:`-${x(r)}`,[`& > .${v.item}`]:{paddingTop:x(r)}}:{}}))}return o}),(function({theme:e,ownerState:t}){const{container:r,columnSpacing:n}=t;let o={};if(r&&0!==n){const t=(0,l.P$)({values:n,breakpoints:e.breakpoints.values});o=(0,l.k9)({theme:e},t,(t=>{const r=e.spacing(t);return"0px"!==r?{width:`calc(100% + ${x(r)})`,marginLeft:`-${x(r)}`,[`& > .${v.item}`]:{paddingLeft:x(r)}}:{}}))}return o}),(function({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce(((n,a)=>{let i={};if(t[a]&&(r=t[a]),!r)return n;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,l.P$)({values:t.columns,breakpoints:e.breakpoints.values}),c="object"===typeof s?s[a]:s;if(void 0===c||null===c)return n;const u=Math.round(r/c*1e8)/1e6+"%";let d={};if(t.container&&t.item&&0!==t.columnSpacing){const r=e.spacing(t.columnSpacing);if("0px"!==r){const e=`calc(${u} + ${x(r)})`;d={flexBasis:e,maxWidth:e}}}i=(0,o.Z)({flexBasis:u,flexGrow:0,maxWidth:u},d)}return 0===e.breakpoints.values[a]?Object.assign(n,i):n[e.breakpoints.up(a)]=i,n}),{})}));var w=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiGrid"}),l=(0,s.Z)(r),{className:u,columns:f,columnSpacing:g,component:v="div",container:x=!1,direction:w="row",item:$=!1,lg:z=!1,md:Z=!1,rowSpacing:k,sm:C=!1,spacing:M=0,wrap:I="wrap",xl:R=!1,xs:W=!1,zeroMinWidth:E=!1}=l,N=(0,n.Z)(l,b),L=k||M,P=g||M,j=a.useContext(p),O=x?f||12:j,A=(0,o.Z)({},l,{columns:O,container:x,direction:w,item:$,lg:z,md:Z,sm:C,rowSpacing:L,columnSpacing:P,wrap:I,xl:R,xs:W,zeroMinWidth:E}),T=(e=>{const{classes:t,container:r,direction:n,item:o,lg:a,md:i,sm:l,spacing:s,wrap:u,xl:d,xs:p,zeroMinWidth:f}=e,g={root:["root",r&&"container",o&&"item",f&&"zeroMinWidth",...S(s,r),"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==u&&`wrap-xs-${String(u)}`,!1!==p&&`grid-xs-${String(p)}`,!1!==l&&`grid-sm-${String(l)}`,!1!==i&&`grid-md-${String(i)}`,!1!==a&&`grid-lg-${String(a)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,c.Z)(g,m,t)})(A);return(0,h.jsx)(p.Provider,{value:O,children:(0,h.jsx)(y,(0,o.Z)({ownerState:A,className:(0,i.Z)(T.root,u),as:v,ref:t},N))})}))},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(s){l=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},l=r(1003),s=r(880),c=r(9246);var u={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=s.useRouter(),a=i.default.useMemo((function(){var t=o(l.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),p=a.href,f=a.as,m=e.children,g=e.replace,v=e.shallow,h=e.scroll,b=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var x=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,S=o(c.useIntersection({rootMargin:"200px"}),2),y=S[0],w=S[1],$=i.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);i.default.useEffect((function(){var e=w&&r&&l.isLocalURL(p),t="undefined"!==typeof b?b:n&&n.locale,o=u[p+"%"+f+(t?"%"+t:"")];e&&!o&&d(n,p,f,{locale:t})}),[f,p,w,b,r,n]);var z={ref:$,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:i}))}(e,n,p,f,g,v,h,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(p)&&d(n,p,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof b?b:n&&n.locale,k=n&&n.isLocaleDomain&&l.getDomainLocale(f,Z,n&&n.locales,n&&n.domainLocales);z.href=k||l.addBasePath(l.addLocale(f,Z,n&&n.defaultLocale))}return i.default.cloneElement(t,z)};t.default=p},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(s){l=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,u=a.useRef(),d=o(a.useState(!1),2),p=d[0],f=d[1],m=o(a.useState(t?t.current:null),2),g=m[0],v=m[1],h=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||p||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=s.get(n):(t=s.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),s.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&f(e)}),{root:g,rootMargin:r}))}),[n,g,r,p]);return a.useEffect((function(){if(!l&&!p){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&v(t.current)}),[t]),[h,p]};var a=r(7294),i=r(4686),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},1664:function(e,t,r){e.exports=r(1551)}}]);