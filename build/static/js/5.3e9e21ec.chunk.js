(this.webpackJsonpcookingBuddy=this.webpackJsonpcookingBuddy||[]).push([[5],{36:function(e,t,r){var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of s(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),d={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(d,{callPlayer:()=>C,getConfig:()=>R,getSDK:()=>A,isBlobUrl:()=>M,isMediaStream:()=>I,lazy:()=>m,omit:()=>j,parseEndTime:()=>T,parseStartTime:()=>O,queryString:()=>S,randomString:()=>k,supportsWebKitPresentationMode:()=>L}),e.exports=(n=d,c(a({},"__esModule",{value:!0}),n));var y=p(r(0)),h=p(r(45)),f=p(r(39));const m=e=>y.default.lazy((async()=>{const t=await e();return"function"===typeof t.default?t:t.default})),b=/[?&#](?:start|t)=([0-9hms]+)/,g=/[?&#]end=([0-9hms]+)/,P=/(\d+)(h|m|s)/g,w=/^\d+$/;function v(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(P))return function(e){let t=0,r=P.exec(e);for(;null!==r;){const[,n,o]=r;"h"===o&&(t+=60*parseInt(n,10)*60),"m"===o&&(t+=60*parseInt(n,10)),"s"===o&&(t+=parseInt(n,10)),r=P.exec(e)}return t}(e);if(w.test(e))return parseInt(e)}}function O(e){return v(e,b)}function T(e){return v(e,g)}function k(){return Math.random().toString(36).substr(2,5)}function S(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function _(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const E={},A=function(e){0;return e}((function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>!0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:h.default;const a=_(t);return a&&n(a)?Promise.resolve(a):new Promise(((n,a)=>{if(E[e])return void E[e].push({resolve:n,reject:a});E[e]=[{resolve:n,reject:a}];const i=t=>{E[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),i(_(t))}}o(e,(n=>{n?(E[e].forEach((e=>e.reject(n))),E[e]=null):r||i(_(t))}))}))}));function R(e,t){return(0,f.default)(t.config,e.config)}function j(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];const o=[].concat(...r),a={},i=Object.keys(e);for(const s of i)-1===o.indexOf(s)&&(a[s]=e[s]);return a}function C(e){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return this.player[e](...r)}function I(e){return"undefined"!==typeof window&&"undefined"!==typeof window.MediaStream&&e instanceof window.MediaStream}function M(e){return/^blob:/.test(e)}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("video");const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"===typeof e.webkitSetPresentationMode&&t}},39:function(e,t,r){"use strict";var n=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function i(e,t,r){return e.concat(t).map((function(e){return a(e,r)}))}function s(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function l(e,t){try{return t in e}catch(r){return!1}}function u(e,t,r){var n={};return r.isMergeableObject(e)&&s(e).forEach((function(t){n[t]=a(e[t],r)})),s(t).forEach((function(o){(function(e,t){return l(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(l(e,o)&&r.isMergeableObject(t[o])?n[o]=function(e,t){if(!t.customMerge)return c;var r=t.customMerge(e);return"function"===typeof r?r:c}(o,r)(e[o],t[o],r):n[o]=a(t[o],r))})),n}function c(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||i,r.isMergeableObject=r.isMergeableObject||n,r.cloneUnlessOtherwiseSpecified=a;var o=Array.isArray(t);return o===Array.isArray(e)?o?r.arrayMerge(e,t,r):u(e,t,r):a(t,r)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return c(e,r,t)}),{})};var p=c;e.exports=p},40:function(e,t){var r="undefined"!==typeof Element,n="function"===typeof Map,o="function"===typeof Set,a="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=t.length)return!1;for(l=s;0!==l--;)if(!i(e[l],t[l]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!t.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!i(l.value[1],t.get(l.value[0])))return!1;return!0}if(o&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!t.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((s=e.length)!=t.length)return!1;for(l=s;0!==l--;)if(e[l]!==t[l])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof t.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof t.toString)return e.toString()===t.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(l=s;0!==l--;)if(!Object.prototype.hasOwnProperty.call(t,u[l]))return!1;if(r&&e instanceof Element)return!1;for(l=s;0!==l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],t[u[l]]))return!1;return!0}return e!==e&&t!==t}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},41:function(e,t,r){var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of s(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(p,{defaultProps:()=>k,propTypes:()=>O}),e.exports=(n=p,c(a({},"__esModule",{value:!0}),n));var d=((e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)))(r(8));const{string:y,bool:h,number:f,array:m,oneOfType:b,shape:g,object:P,func:w,node:v}=d.default,O={url:b([y,m,P]),playing:h,loop:h,controls:h,volume:f,muted:h,playbackRate:f,width:b([y,f]),height:b([y,f]),style:P,progressInterval:f,playsinline:h,pip:h,stopOnUnmount:h,light:b([h,y,P]),playIcon:v,previewTabIndex:f,previewAriaLabel:y,fallback:v,oEmbedUrl:y,wrapper:b([y,w,g({render:w.isRequired})]),config:g({soundcloud:g({options:P}),youtube:g({playerVars:P,embedOptions:P,onUnstarted:w}),facebook:g({appId:y,version:y,playerId:y,attributes:P}),dailymotion:g({params:P}),vimeo:g({playerOptions:P,title:y}),mux:g({attributes:P,version:y}),file:g({attributes:P,tracks:m,forceVideo:h,forceAudio:h,forceHLS:h,forceSafariHLS:h,forceDisableHls:h,forceDASH:h,forceFLV:h,hlsOptions:P,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:g({options:P,playerId:y,customControls:m}),mixcloud:g({options:P}),twitch:g({options:P,playerId:y}),vidyard:g({options:P})}),onReady:w,onStart:w,onPlay:w,onPause:w,onBuffer:w,onBufferEnd:w,onEnded:w,onError:w,onDuration:w,onSeek:w,onPlaybackRateChange:w,onPlaybackQualityChange:w,onProgress:w,onClickPreview:w,onEnablePIP:w,onDisablePIP:w},T=()=>{},k={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:T},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:T,onStart:T,onPlay:T,onPause:T,onBuffer:T,onBufferEnd:T,onEnded:T,onError:T,onDuration:T,onSeek:T,onPlaybackRateChange:T,onPlaybackQualityChange:T,onProgress:T,onClickPreview:T,onEnablePIP:T,onDisablePIP:T}},42:function(e,t,r){var n=r(43).createReactPlayer,o=r(47).default;e.exports=n([{key:"youtube",canPlay:o.canPlay,lazyPlayer:o}])},43:function(e,t,r){(function(t){var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of s(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(y,{createReactPlayer:()=>E}),e.exports=(n=y,c(a({},"__esModule",{value:!0}),n));var h=p(r(0)),f=p(r(39)),m=p(r(44)),b=p(r(40)),g=r(41),P=r(36),w=p(r(46));const v=(0,P.lazy)((()=>r.e(2).then(r.t.bind(null,50,7)))),O="undefined"!==typeof window&&window.document&&"undefined"!==typeof document,T="undefined"!==typeof t&&t.window&&t.window.document,k=Object.keys(g.propTypes),S=O||T?h.Suspense:()=>null,_=[],E=(e,t)=>{var r;return r=class extends h.Component{constructor(){var r;super(...arguments),r=this,d(this,"state",{showPreview:!!this.props.light}),d(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),d(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),d(this,"showPreview",(()=>{this.setState({showPreview:!0})})),d(this,"getDuration",(()=>this.player?this.player.getDuration():null)),d(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),d(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),d(this,"getInternalPlayer",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return r.player?r.player.getInternalPlayer(e):null})),d(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),d(this,"handleReady",(()=>{this.props.onReady(this)})),d(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[..._,...e])if(t.canPlay(r))return t;return t||null}))),d(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return f.default.all([g.defaultProps.config,g.defaultProps.config[t]||{},r,r[t]||{}])}))),d(this,"getAttributes",(0,m.default)((e=>(0,P.omit)(this.props,k)))),d(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return h.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,b.default)(this.props,e)||!(0,b.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:o,previewAriaLabel:a}=this.props;return h.default.createElement(v,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:a,oEmbedUrl:o,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:o,wrapper:a}=this.props,{showPreview:i}=this.state,s=this.getAttributes(e),l="string"===typeof a?this.references.wrapper:void 0;return h.default.createElement(a,{ref:l,style:{...t,width:r,height:n},...s},h.default.createElement(S,{fallback:o},i?this.renderPreview(e):this.renderActivePlayer(e)))}},d(r,"displayName","ReactPlayer"),d(r,"propTypes",g.propTypes),d(r,"defaultProps",g.defaultProps),d(r,"addCustomPlayer",(e=>{_.push(e)})),d(r,"removeCustomPlayers",(()=>{_.length=0})),d(r,"canPlay",(t=>{for(const r of[..._,...e])if(r.canPlay(t))return!0;return!1})),d(r,"canEnablePIP",(t=>{for(const r of[..._,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}}).call(this,r(12))},44:function(e,t,r){"use strict";r.r(t);var n=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function o(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(o=e[r],a=t[r],!(o===a||n(o)&&n(a)))return!1;var o,a;return!0}t.default=function(e,t){var r;void 0===t&&(t=o);var n,a=[],i=!1;return function(){for(var o=[],s=0;s<arguments.length;s++)o[s]=arguments[s];return i&&r===this&&t(o,a)||(n=e.apply(this,o),i=!0,r=this,a=o),n}}},45:function(e,t){function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?r:n)(i,o),i.onload||r(i,o),a.appendChild(i)}},46:function(e,t,r){var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of s(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>g}),e.exports=(n=y,c(a({},"__esModule",{value:!0}),n));var h=p(r(0)),f=p(r(40)),m=r(41),b=r(36);class g extends h.Component{constructor(){var e;super(...arguments),e=this,d(this,"mounted",!1),d(this,"isReady",!1),d(this,"isPlaying",!1),d(this,"isLoading",!0),d(this,"loadOnReady",null),d(this,"startOnPlay",!0),d(this,"seekOnPlay",null),d(this,"onDurationCalled",!1),d(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),d(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),d(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),d(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),d(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),d(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),d(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),d(this,"handleError",(function(){e.isLoading=!1,e.props.onError(...arguments)})),d(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),d(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:o,playbackRate:a,pip:i,loop:s,activePlayer:l,disableDeferredLoading:u}=this.props;if(!(0,f.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!u&&!(0,b.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==o&&(o?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==a&&this.player.setPlaybackRate&&this.player.setPlaybackRate(a),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?h.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}d(g,"displayName","Player"),d(g,"propTypes",m.propTypes),d(g,"defaultProps",m.defaultProps)},47:function(e,t,r){var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of s(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p=(e,t,r)=>(((e,t,r)=>{t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>P}),e.exports=(n=d,c(a({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)))(r(0)),h=r(36),f=r(48);const m=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,b=/user\/([a-zA-Z0-9_-]+)\/?/,g=/youtube-nocookie\.com/;class P extends y.Component{constructor(){super(...arguments),p(this,"callPlayer",h.callPlayer),p(this,"parsePlaylist",(e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(m.test(e)){const[,t]=e.match(m);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(b.test(e)){const[,t]=e.match(b);return{listType:"user_uploads",list:t}}return{}})),p(this,"onStateChange",(e=>{const{data:t}=e,{onPlay:r,onPause:n,onBuffer:o,onBufferEnd:a,onEnded:i,onReady:s,loop:l,config:{playerVars:u,onUnstarted:c}}=this.props,{UNSTARTED:p,PLAYING:d,PAUSED:y,BUFFERING:h,ENDED:f,CUED:m}=window.YT.PlayerState;if(t===p&&c(),t===d&&(r(),a()),t===y&&n(),t===h&&o(),t===f){const e=!!this.callPlayer("getPlaylist");l&&!e&&(u.start?this.seekTo(u.start):this.play()),i()}t===m&&s()})),p(this,"mute",(()=>{this.callPlayer("mute")})),p(this,"unmute",(()=>{this.callPlayer("unMute")})),p(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||m.test(e)?null:e.match(f.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:r,muted:n,playsinline:o,controls:a,loop:i,config:s,onError:l}=this.props,{playerVars:u,embedOptions:c}=s,p=this.getID(e);if(t)return m.test(e)||b.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:p,startSeconds:(0,h.parseStartTime)(e)||u.start,endSeconds:(0,h.parseEndTime)(e)||u.end});(0,h.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(e=>e.loaded)).then((t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:p,playerVars:{autoplay:r?1:0,mute:n?1:0,controls:a?1:0,start:(0,h.parseStartTime)(e),end:(0,h.parseEndTime)(e),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(e),...u},events:{onReady:()=>{i&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>l(e.data)},host:g.test(e)?"https://www.youtube-nocookie.com":void 0,...c}))}),l),c.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return y.default.createElement("div",{style:t},y.default.createElement("div",{ref:this.ref}))}}p(P,"displayName","YouTube"),p(P,"canPlay",f.canPlay.youtube)},48:function(e,t,r){var n,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>k,DASH_EXTENSIONS:()=>E,FLV_EXTENSIONS:()=>A,HLS_EXTENSIONS:()=>_,MATCH_URL_DAILYMOTION:()=>w,MATCH_URL_FACEBOOK:()=>h,MATCH_URL_FACEBOOK_WATCH:()=>f,MATCH_URL_KALTURA:()=>T,MATCH_URL_MIXCLOUD:()=>v,MATCH_URL_MUX:()=>y,MATCH_URL_SOUNDCLOUD:()=>p,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>P,MATCH_URL_TWITCH_VIDEO:()=>g,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>d,MATCH_URL_WISTIA:()=>b,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>S,canPlay:()=>j}),e.exports=(n=l,((e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let l of i(t))s.call(e,l)||l===r||o(e,l,{get:()=>t[l],enumerable:!(n=a(t,l))||n.enumerable});return e})(o({},"__esModule",{value:!0}),n));var u=r(36);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,p=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,d=/vimeo\.com\/(?!progressive_redirect).+/,y=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,h=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,f=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,b=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,g=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,P=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,w=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,v=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,T=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,k=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,S=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,_=/\.(m3u8)($|\?)/i,E=/\.(mpd)($|\?)/i,A=/\.(flv)($|\?)/i,R=e=>{if(e instanceof Array){for(const t of e){if("string"===typeof t&&R(t))return!0;if(R(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(k.test(e)||S.test(e)||_.test(e)||E.test(e)||A.test(e))},j={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>p.test(e)&&!k.test(e),vimeo:e=>d.test(e)&&!S.test(e)&&!_.test(e),mux:e=>y.test(e),facebook:e=>h.test(e)||f.test(e),streamable:e=>m.test(e),wistia:e=>b.test(e),twitch:e=>g.test(e)||P.test(e),dailymotion:e=>w.test(e),mixcloud:e=>v.test(e),vidyard:e=>O.test(e),kaltura:e=>T.test(e),file:R}}}]);
//# sourceMappingURL=5.3e9e21ec.chunk.js.map