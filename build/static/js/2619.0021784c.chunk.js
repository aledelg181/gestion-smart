"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[2619],{1379:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(26240),i=r(69392),o=r(75429),a=r(88446),s=r(1062),c=r(70579);const d=e=>{let{title:t,link:r,icon:d}=e;const p=(0,n.A)();return(0,c.jsx)(i.A,{title:t||"Reference",placement:"left",children:(0,c.jsxs)(o.A,{disableRipple:!0,children:[!d&&(0,c.jsx)(s.A,{component:a.A,href:r,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,"aria-label":"'ui material icon'",children:(0,c.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,c.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:p.palette.primary[800]}),(0,c.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:p.palette.primary.main}),(0,c.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:p.palette.primary[800]}),(0,c.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:p.palette.primary.main})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0",children:(0,c.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),d&&(0,c.jsx)(s.A,{component:a.A,href:r,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"ui material icon",children:d})]})})}},66853:(e,t,r)=>{r.d(t,{A:()=>h});var n=r(65043),i=r(26240),o=r(12110),a=r(79958),s=r(85865),c=r(39336),d=r(26494),p=r(70579);const l=n.forwardRef(((e,t)=>{let{children:r,content:n,contentClass:l,darkTitle:h,secondary:u,sx:f={},contentSX:g={},title:v,...x}=e;const m=(0,i.A)();return(0,p.jsxs)(o.A,{ref:t,sx:{border:"1px solid",borderColor:"dark"===m.palette.mode?m.palette.dark.light+15:m.palette.grey[200],":hover":{boxShadow:"dark"===m.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"},...f},...x,children:[!h&&v&&(0,p.jsx)(a.A,{sx:{p:2.5},title:(0,p.jsx)(s.A,{variant:"h5",children:v}),action:u}),h&&v&&(0,p.jsx)(a.A,{sx:{p:2.5},title:(0,p.jsx)(s.A,{variant:"h4",children:v}),action:u}),v&&(0,p.jsx)(c.A,{sx:{opacity:1,borderColor:"dark"===m.palette.mode?m.palette.dark.light+15:m.palette.grey[200]}}),n&&(0,p.jsx)(d.A,{sx:{p:2.5,...g},className:l||"",children:r}),!n&&r]})}));l.defaultProps={content:!0};const h=l},72619:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(68903),i=r(65043),o=r(65173),a=r.n(o),s=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}var l=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(d(t)),t.handleErrored=t.handleErrored.bind(d(t)),t.handleChange=t.handleChange.bind(d(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(d(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,p(t,r);var o=n.prototype;return o.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},o.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&void 0!==this._widgetId?e(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},o.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&void 0!==this._widgetId)return e(this._widgetId);this._executeRequested=!0},o.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},o.reset=function(){var e=this.getCaptchaFunction("reset");e&&void 0!==this._widgetId&&e(this._widgetId)},o.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},o.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},o.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&void 0===this._widgetId){var t=document.createElement("div");this._widgetId=e(t,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(t)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.handleRecaptchaRef=function(e){this.captcha=e},o.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated,function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,s));return i.createElement("div",c({},t,{ref:this.handleRecaptchaRef}))},n}(i.Component);l.displayName="ReCAPTCHA",l.propTypes={sitekey:a().string.isRequired,onChange:a().func,grecaptcha:a().object,theme:a().oneOf(["dark","light"]),type:a().oneOf(["image","audio"]),tabindex:a().number,onExpired:a().func,onErrored:a().func,size:a().oneOf(["compact","normal","invisible"]),stoken:a().string,hl:a().string,badge:a().oneOf(["bottomright","bottomleft","inline"]),isolated:a().bool},l.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var h=r(80219),u=r.n(h);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}var g={},v=0;var x="onloadcallback";function m(){return"undefined"!==typeof window&&window.recaptchaOptions||{}}const b=(y=function(){var e=m(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+x+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+x+"&render=explicit"},w=(w={callbackName:x,globalName:"grecaptcha",attributes:m().nonce?{nonce:m().nonce}:{}})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,n;function o(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}n=t,(r=o).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var a=o.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+v++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"===typeof y?y():y,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=g[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[w.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=w,i=n.globalName,o=n.callbackName,a=n.scriptId;if(i&&"undefined"!==typeof window[i]&&(g[t]={loaded:!0,observers:{}}),g[t]){var s=g[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},g[t]={loaded:!1,observers:c};var d=document.createElement("script");for(var p in d.src=t,d.async=!0,w.attributes)d.setAttribute(p,w.attributes[p]);a&&(d.id=a);var l=function(e){if(g[t]){var r=g[t].observers;for(var n in r)e(r[n])&&delete r[n]}};o&&"undefined"!==typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=g[t];e&&(e.loaded=!0,l((function(t){return!o&&(t(e),!0)})))},d.onerror=function(){var e=g[t];e&&(e.errored=!0,l((function(t){return t(e),!0})))},document.body.appendChild(d)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===w.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=g[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===w.removeOnUnmount&&delete g[e])},a.render=function(){var t=w.globalName,r=this.props,n=(r.asyncScriptOnLoad,r.forwardedRef),o=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(o[t]="undefined"!==typeof window[t]?window[t]:void 0),o.ref=n,(0,i.createElement)(e,o)},o}(i.Component),n=(0,i.forwardRef)((function(e,t){return(0,i.createElement)(r,f({},e,{forwardedRef:t}))}));return n.displayName="AsyncScriptLoader("+t+")",n.propTypes={asyncScriptOnLoad:a().func},u()(n,e)})(l);var y,w;const L=b;var j=r(66853),R=r(82330),_=r(1379),k=r(13440),A=r(8212),C=r(70579);const O=()=>(0,C.jsx)(R.A,{title:"ReCaptcha",secondary:(0,C.jsx)(_.A,{icon:(0,C.jsx)(A.A,{fontSize:"small"}),link:"https://www.npmjs.com/package/react-google-recaptcha"}),children:(0,C.jsx)(n.Ay,{container:!0,spacing:k.iL,children:(0,C.jsx)(n.Ay,{item:!0,xs:12,md:12,lg:6,children:(0,C.jsx)(j.A,{sx:{overflowX:"auto"},title:"ReCaptcha Example",children:(0,C.jsx)(L,{sitekey:"6LdzqbcaAAAAALrGEZWQHIHUhzJZc8O-KSTdTTh_",onChange:()=>{}})})})})})},8212:(e,t,r)=>{var n=r(24994);t.A=void 0;var i=n(r(40039)),o=r(70579),a=(0,i.default)((0,o.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.A=a}}]);
//# sourceMappingURL=2619.0021784c.chunk.js.map