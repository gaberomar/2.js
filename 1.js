!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Clappr=e():t.Clappr=e()}
(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{}
,id:r,loaded:!1}
;return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}
var n={}
;return e.m=t,e.c=n,e.p="<%=baseUrl%>/",e(0)}
([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
Object.defineProperty(e,"__esModule",{value:!0}
);var i=n(92),o=r(i),a=n(2),s=r(a),l=n(1),u=r(l),c=n(7),f=r(c),d=n(19),h=r(d),p=n(17),y=r(p),g=n(23),v=r(g),m=n(20),b=r(m),_=n(13),E=r(_),T=n(14),w=r(T),A=n(11),S=r(A),k=n(33),L=r(k),O=n(34),R=r(O),C=n(35),P=r(C),D=n(16),I=r(D),x=n(36),N=r(x),M=n(21),F=r(M),j=n(24),B=r(j),U=n(37),G=r(U),Y=n(38),$=r(Y),V=n(39),K=r(V),H=n(40),z=r(H),W=n(22),q=r(W),X=n(41),Z=r(X),J=n(42),Q=r(J),tt=n(43),et=r(tt),nt=n(25),rt=r(nt),it=n(8),ot=r(it),at=n(26),st=r(at),lt=n(9),ut=r(lt),ct=n(6),ft=r(ct),dt="0.2.61";e["default"]={Player:o["default"],Mediator:I["default"],Events:u["default"],Browser:S["default"],PlayerInfo:F["default"],MediaControl:N["default"],ContainerPlugin:h["default"],UIContainerPlugin:b["default"],CorePlugin:y["default"],UICorePlugin:v["default"],Playback:f["default"],Container:L["default"],Core:R["default"],Loader:P["default"],BaseObject:E["default"],UIObject:w["default"],Utils:s["default"],BaseFlashPlayback:B["default"],Flash:G["default"],FlasHLS:$["default"],HLS:K["default"],HTML5Audio:z["default"],HTML5Video:q["default"],HTMLImg:Z["default"],NoOp:Q["default"],Poster:et["default"],Log:rt["default"],Styler:ot["default"],Vendor:st["default"],version:dt,template:ut["default"],$:ft["default"]}
,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
,a=n(25),s=r(a),l=n(2),u=n(80),c=r(u),f=Array.prototype.slice,d=/\s+/,h=function(t,e,n,r){if(!n)return!0;if("object"===("undefined"==typeof n?"undefined":o(n))){for(var i in n)t[e].apply(t,[i,n[i]].concat(r));return!1}
if(d.test(n)){for(var a=n.split(d),s=0,l=a.length;s<l;s++)t[e].apply(t,[a[s]].concat(r));return!1}
return!0}
,p=function(t,e){var n=void 0,r=-1,i=t.length,o=e[0],a=e[1],s=e[2];switch(e.length){case 0:for(;++r<i;)(n=t[r]).callback.call(n.ctx);return;case 1:for(;++r<i;)(n=t[r]).callback.call(n.ctx,o);return;case 2:for(;++r<i;)(n=t[r]).callback.call(n.ctx,o,a);return;case 3:for(;++r<i;)(n=t[r]).callback.call(n.ctx,o,a,s);return;default:for(;++r<i;)(n=t[r]).callback.apply(n.ctx,e);return}}
,y=function(){function t(){i(this,t)}
return t.prototype.on=function(t,e,n){if(!h(this,"on",t,[e,n])||!e)return this;this._events||(this._events={}
);var r=this._events[t]||(this._events[t]=[]);return r.push({callback:e,context:n,ctx:n||this}
),this}
,t.prototype.once=function e(t,n,r){if(!h(this,"once",t,[n,r])||!n)return this;var i=this,e=(0,c["default"])(function(){i.off(t,e),n.apply(this,arguments)}
);return e._callback=n,this.on(t,e,r)}
,t.prototype.off=function(t,e,n){var r=void 0,i=void 0,o=void 0,a=void 0,s=void 0,l=void 0,u=void 0,c=void 0;if(!this._events||!h(this,"off",t,[e,n]))return this;if(!t&&!e&&!n)return this._events=void 0,this;for(a=t?[t]:Object.keys(this._events),s=0,l=a.length;s<l;s++)if(t=a[s],o=this._events[t]){if(this._events[t]=r=[],e||n)for(u=0,c=o.length;u<c;u++)i=o[u],(e&&e!==i.callback&&e!==i.callback._callback||n&&n!==i.context)&&r.push(i);r.length||delete this._events[t]}
return this}
,t.prototype.trigger=function(t){var e=this.name||this.constructor.name;try{if(s["default"].debug.apply(s["default"],[e].concat(Array.prototype.slice.call(arguments))),!this._events)return this;var n=f.call(arguments,1);if(!h(this,"trigger",t,n))return this;var r=this._events[t],i=this._events.all;r&&p(r,n),i&&p(i,arguments)}
catch(o){s["default"].error.apply(s["default"],[e,"error on event",t,"trigger","-",o])}
return this}
,t.prototype.stopListening=function(t,e,n){var r=this._listeningTo;if(!r)return this;var i=!e&&!n;n||"object"!==("undefined"==typeof e?"undefined":o(e))||(n=this),t&&((r={}
)[t._listenId]=t);for(var a in r)t=r[a],t.off(e,n,this),(i||0===Object.keys(t._events).length)&&delete this._listeningTo[a];return this}
,t}
();e["default"]=y;var g={listenTo:"on",listenToOnce:"once"}
;Object.keys(g).forEach(function(t){y.prototype[t]=function(e,n,r){var i=this._listeningTo||(this._listeningTo={}
),a=e._listenId||(e._listenId=(0,l.uniqueId)("l"));return i[a]=e,r||"object"!==("undefined"==typeof n?"undefined":o(n))||(r=this),e[g[t]](n,r,this),this}}
),y.PLAYER_READY="ready",y.PLAYER_RESIZE="resize",y.PLAYER_FULLSCREEN="fullscreen",y.PLAYER_PLAY="play",y.PLAYER_PAUSE="pause",y.PLAYER_STOP="stop",y.PLAYER_ENDED="ended",y.PLAYER_SEEK="seek",y.PLAYER_ERROR="error",y.PLAYER_TIMEUPDATE="timeupdate",y.PLAYER_VOLUMEUPDATE="volumeupdate",y.PLAYBACK_PROGRESS="playback:progress",y.PLAYBACK_TIMEUPDATE="playback:timeupdate",y.PLAYBACK_READY="playback:ready",y.PLAYBACK_BUFFERING="playback:buffering",y.PLAYBACK_BUFFERFULL="playback:bufferfull",y.PLAYBACK_SETTINGSUPDATE="playback:settingsupdate",y.PLAYBACK_LOADEDMETADATA="playback:loadedmetadata",y.PLAYBACK_HIGHDEFINITIONUPDATE="playback:highdefinitionupdate",y.PLAYBACK_BITRATE="playback:bitrate",y.PLAYBACK_LEVELS_AVAILABLE="playback:levels:available",y.PLAYBACK_LEVEL_SWITCH_START="playback:levels:switch:start",y.PLAYBACK_LEVEL_SWITCH_END="playback:levels:switch:end",y.PLAYBACK_PLAYBACKSTATE="playback:playbackstate",y.PLAYBACK_DVR="playback:dvr",y.PLAYBACK_MEDIACONTROL_DISABLE="playback:mediacontrol:disable",y.PLAYBACK_MEDIACONTROL_ENABLE="playback:mediacontrol:enable",y.PLAYBACK_ENDED="playback:ended",y.PLAYBACK_PLAY_INTENT="playback:play:intent",y.PLAYBACK_PLAY="playback:play",y.PLAYBACK_PAUSE="playback:pause",y.PLAYBACK_STOP="playback:stop",y.PLAYBACK_ERROR="playback:error",y.PLAYBACK_STATS_ADD="playback:stats:add",y.PLAYBACK_FRAGMENT_LOADED="playback:fragment:loaded",y.PLAYBACK_LEVEL_SWITCH="playback:level:switch",y.CORE_OPTIONS_CHANGE="core:options:change",y.CORE_READY="core:ready",y.CORE_FULLSCREEN="core:fullscreen",y.CONTAINER_PLAYBACKSTATE="container:playbackstate",y.CONTAINER_PLAYBACKDVRSTATECHANGED="container:dvr",y.CONTAINER_BITRATE="container:bitrate",y.CONTAINER_STATS_REPORT="container:stats:report",y.CONTAINER_DESTROYED="container:destroyed",y.CONTAINER_READY="container:ready",y.CONTAINER_ERROR="container:error",y.CONTAINER_LOADEDMETADATA="container:loadedmetadata",y.CONTAINER_TIMEUPDATE="container:timeupdate",y.CONTAINER_PROGRESS="container:progress",y.CONTAINER_PLAY="container:play",y.CONTAINER_STOP="container:stop",y.CONTAINER_PAUSE="container:pause",y.CONTAINER_ENDED="container:ended",y.CONTAINER_CLICK="container:click",y.CONTAINER_DBLCLICK="container:dblclick",y.CONTAINER_CONTEXTMENU="container:contextmenu",y.CONTAINER_MOUSE_ENTER="container:mouseenter",y.CONTAINER_MOUSE_LEAVE="container:mouseleave",y.CONTAINER_SEEK="container:seek",y.CONTAINER_VOLUME="container:volume",y.CONTAINER_FULLSCREEN="container:fullscreen",y.CONTAINER_STATE_BUFFERING="container:state:buffering",y.CONTAINER_STATE_BUFFERFULL="container:state:bufferfull",y.CONTAINER_SETTINGSUPDATE="container:settingsupdate",y.CONTAINER_HIGHDEFINITIONUPDATE="container:highdefinitionupdate",y.CONTAINER_MEDIACONTROL_SHOW="container:mediacontrol:show",y.CONTAINER_MEDIACONTROL_HIDE="container:mediacontrol:hide",y.CONTAINER_MEDIACONTROL_DISABLE="container:mediacontrol:disable",y.CONTAINER_MEDIACONTROL_ENABLE="container:mediacontrol:enable",y.CONTAINER_STATS_ADD="container:stats:add",y.CONTAINER_OPTIONS_CHANGE="container:options:change",y.MEDIACONTROL_RENDERED="mediacontrol:rendered",y.MEDIACONTROL_FULLSCREEN="mediacontrol:fullscreen",y.MEDIACONTROL_SHOW="mediacontrol:show",y.MEDIACONTROL_HIDE="mediacontrol:hide",y.MEDIACONTROL_MOUSEMOVE_SEEKBAR="mediacontrol:mousemove:seekbar",y.MEDIACONTROL_MOUSELEAVE_SEEKBAR="mediacontrol:mouseleave:seekbar",y.MEDIACONTROL_PLAYING="mediacontrol:playing",y.MEDIACONTROL_NOTPLAYING="mediacontrol:notplaying",y.MEDIACONTROL_CONTAINERCHANGED="mediacontrol:containerchanged",y.CORE_CONTAINERS_CREATED="core:containers:created",t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
function s(t,e){if(e)for(var n in e){var r=Object.getOwnPropertyDescriptor(e,n);r?Object.defineProperty(t,n,r):t[n]=e[n]}
return t}
function l(t,e){var n=function(t){function n(){i(this,n);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];var l=o(this,t.call.apply(t,[this].concat(a)));return e.initialize&&e.initialize.apply(l,a),l}
return a(n,t),n}
(t);return s(n.prototype,e),n}
function u(t,e){if(!isFinite(t))return"--:--";t=1e3*t,t=parseInt(t/1e3);var n=t%60;t=parseInt(t/60);var r=t%60;t=parseInt(t/60);var i=t%24,o=parseInt(t/24),a="";return o&&o>0&&(a+=o+":",i<1&&(a+="00:")),(i&&i>0||e)&&(a+=("0"+i).slice(-2)+":"),a+=("0"+r).slice(-2)+":",a+=("0"+n).slice(-2),a.trim()}
function c(){var t=arguments.length<=0||void 0===arguments[0]?"t":arguments[0],e=0,n=T.params[t]||T.hashParams[t]||"",r=n.match(/[0-9]+[hms]+/g)||[];return r.length>0?!function(){var t={h:3600,m:60,s:1}
;r.forEach(function(n){if(n){var r=n[n.length-1],i=parseInt(n.slice(0,n.length-1),10);e+=i*t[r]}}
)}
():n&&(e=parseInt(n,10)),e}
function f(t){w[t]||(w[t]=0);var e=++w[t];return t+e}
function d(t){return t-parseFloat(t)+1>=0}
function h(){var t=document.getElementsByTagName("script");return t[t.length-1].src}
function p(){return window.navigator&&window.navigator.language}
function y(){return window.performance&&window.performance.now?performance.now():Date.now()}
function g(t,e){var n=t.indexOf(e);n>=0&&t.splice(n,1)}
Object.defineProperty(e,"__esModule",{value:!0}
),e.cancelAnimationFrame=e.requestAnimationFrame=e.QueryString=e.Config=e.Fullscreen=void 0;var v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
();e.extend=l,e.formatTime=u,e.seekStringToSeconds=c,e.uniqueId=f,e.isNumber=d,e.currentScriptUrl=h,e.getBrowserLanguage=p,e.now=y,e.removeArrayItem=g;var m=n(11),b=r(m),_=e.Fullscreen={isFullscreen:function(){return!!(document.webkitFullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)}
,requestFullscreen:function(t){t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():t.querySelector&&t.querySelector("video")&&t.querySelector("video").webkitEnterFullScreen&&t.querySelector("video").webkitEnterFullScreen()}
,cancelFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}
,fullscreenEnabled:function(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}}
,E=e.Config=function(){function t(){i(this,t)}
return t._defaultConfig=function(){return{volume:{value:100,parse:parseInt}}}
,t._defaultValueFor=function(t){try{return this._defaultConfig()[t].parse(this._defaultConfig()[t].value)}
catch(e){return}}
,t._createKeyspace=function(t){return"clappr."+document.domain+"."+t}
,t.restore=function(t){return b["default"].hasLocalstorage&&localStorage[this._createKeyspace(t)]?this._defaultConfig()[t].parse(localStorage[this._createKeyspace(t)]):this._defaultValueFor(t)}
,t.persist=function(t,e){if(b["default"].hasLocalstorage)try{return localStorage[this._createKeyspace(t)]=e,!0}
catch(n){return!1}}
,t}
(),T=e.QueryString=function(){function t(){i(this,t)}
return t.parse=function(t){for(var e=void 0,n=/\+/g,r=/([^&=]+)=?([^&]*)/g,i=function(t){return decodeURIComponent(t.replace(n," "))}
,o={}
;e=r.exec(t);)o[i(e[1]).toLowerCase()]=i(e[2]);return o}
,v(t,null,[{key:"params",get:function(){var t=window.location.search.substring(1);return t!==this.query&&(this._urlParams=this.parse(t),this.query=t),this._urlParams}}
,{key:"hashParams",get:function(){var t=window.location.hash.substring(1);return t!==this.hash&&(this._hashParams=this.parse(t),this.hash=t),this._hashParams}}
]),t}
(),w={}
,A=e.requestAnimationFrame=(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}
).bind(window),S=e.cancelAnimationFrame=(window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout).bind(window);e["default"]={Config:E,Fullscreen:_,QueryString:T,extend:l,formatTime:u,seekStringToSeconds:c,uniqueId:f,currentScriptUrl:h,isNumber:d,requestAnimationFrame:A,cancelAnimationFrame:S,getBrowserLanguage:p,now:y,removeArrayItem:g}}
,function(t,e){"use strict";t.exports={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",LEVEL_SWITCH:"hlsLevelSwitch",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded"}}
,function(t,e){"use strict";function n(){}
function r(t,e){return e="["+t+"] > "+e}
function i(t){var e=window.console[t];return e?function(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];i[0]&&(i[0]=r(t,i[0])),e.apply(window.console,i)}
:n}
function o(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];n.forEach(function(e){u[e]=t[e]?t[e].bind(t):i(e)}
)}
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var s="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":a(t)}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":"undefined"==typeof t?"undefined":a(t)}
,l={trace:n,debug:n,log:n,warn:n,info:n,error:n}
,u=l;e.enableLogs=function(t){if(t===!0||"object"===("undefined"==typeof t?"undefined":s(t))){o(t,"debug","log","info","warn","error");try{u.log()}
catch(e){u=l}}
else u=l}
,e.logger=u}
,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}
);e.ErrorTypes={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",OTHER_ERROR:"otherError"}
,e.ErrorDetails={MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",MANIFEST_INCOMPATIBLE_CODECS_ERROR:"manifestIncompatibleCodecsError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOOP_LOADING_ERROR:"fragLoopLoadingError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError",BUFFER_SEEK_OVER_HOLE:"bufferSeekOverHole",INTERNAL_EXCEPTION:"internalException"}}
,function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
,r=function(){function t(t){return null==t?String(t):q[X.call(t)]||"object"}
function e(e){return"function"==t(e)}
function r(t){return null!=t&&t==t.window}
function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}
function o(e){return"object"==t(e)}
function a(t){return o(t)&&!r(t)&&Object.getPrototypeOf(t)==Object.prototype}
function s(t){return"number"==typeof t.length}
function l(t){return P.call(t,function(t){return null!=t}
)}
function u(t){return t.length>0?S.fn.concat.apply([],t):t}
function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}
function f(t){return t in N?N[t]:N[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}
function d(t,e){return"number"!=typeof e||M[c(t)]?e:e+"px"}
function h(t){var e,n;return x[t]||(e=I.createElement(t),I.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),x[t]=n),x[t]}
function p(t){return"children"in t?D.call(t.children):S.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0}
)}
function y(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}
function g(t,e,n){for(A in e)n&&(a(e[A])||tt(e[A]))?(a(e[A])&&!a(t[A])&&(t[A]={}
),tt(e[A])&&!tt(t[A])&&(t[A]=[]),g(t[A],e[A],n)):e[A]!==w&&(t[A]=e[A])}
function v(t,e){return null==e?S(t):S(t).filter(e)}
function m(t,n,r,i){return e(n)?n.call(t,r,i):n}
function b(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}
function _(t,e){var n=t.className||"",r=n&&n.baseVal!==w;return e===w?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}
function E(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?S.parseJSON(t):t):t}
catch(e){return t}}
function T(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)T(t.childNodes[n],e)}
var w,A,S,k,L,O,R=[],C=R.concat,P=R.filter,D=R.slice,I=window.document,x={}
,N={}
,M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1}
,F=/^\s*<(\w+|!)[^>]*>/,j=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,B=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,U=/^(?:body|html)$/i,G=/([A-Z])/g,Y=["val","css","html","text","data","width","height","offset"],$=["after","prepend","before","append"],V=I.createElement("table"),K=I.createElement("tr"),H={tr:I.createElement("tbody"),tbody:V,thead:V,tfoot:V,td:K,th:K,"*":I.createElement("div")}
,z=/complete|loaded|interactive/,W=/^[\w-]*$/,q={}
,X=q.toString,Z={}
,J=I.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"}
,tt=Array.isArray||function(t){return t instanceof Array}
;return Z.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=J).appendChild(t),r=~Z.qsa(i,e).indexOf(t),o&&J.removeChild(t),r}
,L=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""}
)}
,O=function(t){return P.call(t,function(e,n){return t.indexOf(e)==n}
)}
,Z.fragment=function(t,e,n){var r,i,o;return j.test(t)&&(r=S(I.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(B,"<$1></$2>")),e===w&&(e=F.test(t)&&RegExp.$1),e in H||(e="*"),o=H[e],o.innerHTML=""+t,r=S.each(D.call(o.childNodes),function(){o.removeChild(this)}
)),a(n)&&(i=S(r),S.each(n,function(t,e){Y.indexOf(t)>-1?i[t](e):i.attr(t,e)}
)),r}
,Z.Z=function(t,e){return new y(t,e)}
,Z.isZ=function(t){return t instanceof Z.Z}
,Z.init=function(t,n){var r;if(!t)return Z.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&F.test(t))r=Z.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return S(n).find(t);r=Z.qsa(I,t)}
else{if(e(t))return S(I).ready(t);if(Z.isZ(t))return t;if(tt(t))r=l(t);else if(o(t))r=[t],t=null;else if(F.test(t))r=Z.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return S(n).find(t);r=Z.qsa(I,t)}}
return Z.Z(r,t)}
,S=function(t,e){return Z.init(t,e)}
,S.extend=function(t){var e,n=D.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){g(t,n,e)}
),t}
,Z.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=W.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:D.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))}
,S.contains=I.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}
:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1}
,S.type=t,S.isFunction=e,S.isWindow=r,S.isArray=tt,S.isPlainObject=a,S.isEmptyObject=function(t){var e;for(e in t)return!1;return!0}
,S.inArray=function(t,e,n){return R.indexOf.call(e,t,n)}
,S.camelCase=L,S.trim=function(t){return null==t?"":String.prototype.trim.call(t)}
,S.uuid=0,S.support={}
,S.expr={}
,S.noop=function(){}
,S.map=function(t,e){var n,r,i,o=[];if(s(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)}
,S.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}
else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t}
,S.grep=function(t,e){return P.call(t,e)}
,window.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){q["[object "+e+"]"]=e.toLowerCase()}
),S.fn={constructor:Z.Z,length:0,forEach:R.forEach,reduce:R.reduce,push:R.push,sort:R.sort,splice:R.splice,indexOf:R.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=Z.isZ(e)?e.toArray():e;return C.apply(Z.isZ(this)?this.toArray():this,n)}
,map:function(t){return S(S.map(this,function(e,n){return t.call(e,n,e)}
))}
,slice:function(){return S(D.apply(this,arguments))}
,ready:function(t){return z.test(I.readyState)&&I.body?t(S):I.addEventListener("DOMContentLoaded",function(){t(S)}
,!1),this}
,get:function(t){return t===w?D.call(this):this[t>=0?t:t+this.length]}
,toArray:function(){return this.get()}
,size:function(){return this.length}
,remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)}
)}
,each:function(t){return R.every.call(this,function(e,n){return t.call(e,n,e)!==!1}
),this}
,filter:function(t){return e(t)?this.not(this.not(t)):S(P.call(this,function(e){return Z.matches(e,t)}
))}
,add:function(t,e){return S(O(this.concat(S(t,e))))}
,is:function(t){return this.length>0&&Z.matches(this[0],t)}
,not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)}
);else{var r="string"==typeof t?this.filter(t):s(t)&&e(t.item)?D.call(t):S(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)}
)}
return S(n)}
,has:function(t){return this.filter(function(){return o(t)?S.contains(this,t):S(this).find(t).size()}
)}
,eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)}
,first:function(){var t=this[0];return t&&!o(t)?t:S(t)}
,last:function(){var t=this[this.length-1];return t&&!o(t)?t:S(t)}
,find:function(t){var e,r=this;return e=t?"object"==("undefined"==typeof t?"undefined":n(t))?S(t).filter(function(){var t=this;return R.some.call(r,function(e){return S.contains(e,t)}
)}
):1==this.length?S(Z.qsa(this[0],t)):this.map(function(){return Z.qsa(this,t)}
):S()}
,closest:function(t,e){var r=this[0],o=!1;for("object"==("undefined"==typeof t?"undefined":n(t))&&(o=S(t));r&&!(o?o.indexOf(r)>=0:Z.matches(r,t));)r=r!==e&&!i(r)&&r.parentNode;return S(r)}
,parents:function(t){for(var e=[],n=this;n.length>0;)n=S.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0}
);return v(e,t)}
,parent:function(t){return v(O(this.pluck("parentNode")),t)}
,children:function(t){return v(this.map(function(){return p(this)}
),t)}
,contents:function(){return this.map(function(){return this.contentDocument||D.call(this.childNodes)}
)}
,siblings:function(t){return v(this.map(function(t,e){return P.call(p(e.parentNode),function(t){return t!==e}
)}
),t)}
,empty:function(){return this.each(function(){this.innerHTML=""}
)}
,pluck:function(t){return S.map(this,function(e){return e[t]}
)}
,show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))}
)}
,replaceWith:function(t){return this.before(t).remove()}
,wrap:function(t){var n=e(t);if(this[0]&&!n)var r=S(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){S(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)}
)}
,wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var e;(e=t.children()).length;)t=e.first();S(t).append(this)}
return this}
,wrapInner:function(t){var n=e(t);return this.each(function(e){var r=S(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)}
)}
,unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}
),this}
,clone:function(){return this.map(function(){return this.cloneNode(!0)}
)}
,hide:function(){return this.css("display","none")}
,toggle:function(t){return this.each(function(){var e=S(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()}
)}
,prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")}
,next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")}
,html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;S(this).empty().append(m(this,t,e,n))}
):0 in this?this[0].innerHTML:null}
,text:function(t){return 0 in arguments?this.each(function(e){var n=m(this,t,e,this.textContent);this.textContent=null==n?"":""+n}
):0 in this?this[0].textContent:null}
,attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(o(t))for(A in t)b(this,A,t[A]);else b(this,t,m(this,e,n,this.getAttribute(t)))}
):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w}
,removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){b(this,t)}
,this)}
)}
,prop:function(t,e){return t=Q[t]||t,1 in arguments?this.each(function(n){this[t]=m(this,e,n,this[t])}
):this[0]&&this[0][t]}
,data:function(t,e){var n="data-"+t.replace(G,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?E(r):w}
,val:function(t){return 0 in arguments?this.each(function(e){this.value=m(this,t,e,this.value)}
):this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}
).pluck("value"):this[0].value)}
,offset:function(t){if(t)return this.each(function(e){var n=S(this),r=m(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left}
;"static"==n.css("position")&&(o.position="relative"),n.css(o)}
);if(!this.length)return null;if(!S.contains(I.documentElement,this[0]))return{top:0,left:0}
;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}}
,css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[L(e)]||r.getPropertyValue(e);if(tt(e)){var o={}
;return S.each(e,function(t,e){o[e]=i.style[L(e)]||r.getPropertyValue(e)}
),o}}
var a="";if("string"==t(e))n||0===n?a=c(e)+":"+d(e,n):this.each(function(){this.style.removeProperty(c(e))}
);else for(A in e)e[A]||0===e[A]?a+=c(A)+":"+d(A,e[A])+";":this.each(function(){this.style.removeProperty(c(A))}
);return this.each(function(){this.style.cssText+=";"+a}
)}
,index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])}
,hasClass:function(t){return!!t&&R.some.call(this,function(t){return this.test(_(t))}
,f(t))}
,addClass:function(t){return t?this.each(function(e){if("className"in this){k=[];var n=_(this),r=m(this,t,e,n);r.split(/\s+/g).forEach(function(t){S(this).hasClass(t)||k.push(t)}
,this),k.length&&_(this,n+(n?" ":"")+k.join(" "))}}
):this}
,removeClass:function(t){return this.each(function(e){if("className"in this){if(t===w)return _(this,"");k=_(this),m(this,t,e,k).split(/\s+/g).forEach(function(t){k=k.replace(f(t)," ")}
),_(this,k.trim())}}
)}
,toggleClass:function(t,e){return t?this.each(function(n){var r=S(this),i=m(this,t,n,_(this));i.split(/\s+/g).forEach(function(t){(e===w?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)}
)}
):this}
,scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}
:function(){this.scrollTo(this.scrollX,t)}
)}}
,scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}
:function(){this.scrollTo(t,this.scrollY)}
)}}
,position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=U.test(e[0].nodeName)?{top:0,left:0}
:e.offset();return n.top-=parseFloat(S(t).css("margin-top"))||0,n.left-=parseFloat(S(t).css("margin-left"))||0,r.top+=parseFloat(S(e[0]).css("border-top-width"))||0,r.left+=parseFloat(S(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}}
,offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||I.body;t&&!U.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t}
)}}
,S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()}
);S.fn[t]=function(n){var o,a=this[0];return n===w?r(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=S(this),a.css(t,m(this,n,e,a[t]()))}
)}}
),$.forEach(function(e,n){var r=n%2;S.fn[e]=function(){var e,i,o=S.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Z.fragment(n)}
),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=S.contains(I.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return S(t).remove();i.insertBefore(t,e),s&&T(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)}
)}
)}
)}
,S.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return S(t)[e](this),this}}
),Z.Z.prototype=y.prototype=S.fn,Z.uniq=O,Z.deserializeValue=E,S.zepto=Z,S}
();window.Zepto=r,void 0===window.$&&(window.$=r),function(t){function e(t){return t._zid||(t._zid=d++)}
function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)}
)}
function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}
function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?:|$)")}
function o(t,e){return t.del&&!m&&t.e in b||!!e}
function a(t){return _[t]||m&&b[t]||t}
function s(n,i,s,l,c,d,h){var p=e(n),y=g[p]||(g[p]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=c,i.e in _&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}
),i.del=d;var p=d||s;i.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=l;var e=p.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}}
,i.i=y.length,y.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,h))}
)}
function l(t,r,i,s,l){var u=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete g[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,l))}
)}
)}
function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(A,function(t,r){var i=n[t];e[t]=function(){return this[r]=E,i&&i.apply(n,arguments)}
,e[r]=T}
),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=E)),e}
function c(t){var e,n={originalEvent:t}
;for(e in t)w.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}
var f,d=1,h=Array.prototype.slice,p=t.isFunction,y=function(t){return"string"==typeof t}
,g={}
,v={}
,m="onfocusin"in window,b={focus:"focusin",blur:"focusout"}
,_={mouseenter:"mouseover",mouseleave:"mouseout"}
;v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:l}
,t.proxy=function(n,r){var i=2 in arguments&&h.call(arguments,2);if(p(n)){var o=function(){return n.apply(r,i?i.concat(h.call(arguments)):arguments)}
;return o._zid=e(n),o}
if(y(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")}
,t.fn.bind=function(t,e,n){return this.on(t,e,n)}
,t.fn.unbind=function(t,e){return this.off(t,e)}
,t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)}
;var E=function(){return!0}
,T=function(){return!1}
,w=/^([A-Z]|returnValue$|layer[XY]$)/,A={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"}
;t.fn.delegate=function(t,e,n){return this.on(e,t,n)}
,t.fn.undelegate=function(t,e,n){return this.off(e,t,n)}
,t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this}
,t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this}
,t.fn.on=function(e,n,r,i,o){var a,u,d=this;return e&&!y(e)?(t.each(e,function(t,e){d.on(t,n,r,e,o)}
),d):(y(n)||p(i)||i===!1||(i=r,r=n,n=f),(i===f||r===!1)&&(i=r,r=f),i===!1&&(i=T),d.each(function(f,d){o&&(a=function(t){return l(d,t.type,i),i.apply(this,arguments)}
),n&&(u=function(e){var r,o=t(e.target).closest(n,d).get(0);return o&&o!==d?(r=t.extend(c(e),{currentTarget:o,liveFired:d}
),(a||i).apply(o,[r].concat(h.call(arguments,1)))):void 0}
),s(d,e,i,r,n,u||a)}
))}
,t.fn.off=function(e,n,r){var i=this;return e&&!y(e)?(t.each(e,function(t,e){i.off(t,n,e)}
),i):(y(n)||p(r)||r===!1||(r=n,n=f),r===!1&&(r=T),i.each(function(){l(this,e,r,n)}
))}
,t.fn.trigger=function(e,n){return e=y(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)}
)}
,t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=c(y(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(i),!i.isImmediatePropagationStopped()&&void 0}
)}
),o}
,"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}
),t.Event=function(t,e){y(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),u(n)}}
(r),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}
function n(t,n,r,i){return t.global?e(n||m,r,i):void 0}
function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}
function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}
function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)!==!1&&n(e,r,"ajaxBeforeSend",[t,e])!==!1&&void n(e,r,"ajaxSend",[t,e])}
function a(t,e,r,i){var o=r.context,a="success";r.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),n(r,o,"ajaxSuccess",[e,r,t]),l(a,e,r)}
function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),l(e,r,i)}
function l(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}
function u(){}
function c(t){return t&&(t=t.split(";",2)[0]),t&&(t==w?"html":t==T?"json":_.test(t)?"script":E.test(t)&&"xml")||"text"}
function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}
/,"?")}
function d(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}
function h(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}
function p(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,l){o=t.type(l),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(l.name,l.value):"array"==o||!r&&"object"==o?p(e,l,r,n):e.add(n,l)}
)}
var y,g,v=0,m=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,_=/^(?:text|application)\/javascript/i,E=/^(?:text|application)\/xml/i,T="application/json",w="text/html",A=/^\s*$/,S=m.createElement("a");S.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,l=e.jsonpCallback,u=(t.isFunction(l)?l():l)||"jsonp"+ ++v,c=m.createElement("script"),f=window[u],d=function(e){t(c).triggerHandler("error",e||"abort")}
,h={abort:d}
;return n&&n.promise(h),t(c).on("load error",function(o,l){clearTimeout(i),t(c).off().remove(),"error"!=o.type&&r?a(r[0],h,e,n):s(null,l||"error",h,e,n),window[u]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}
),o(h,e)===!1?(d("abort"),h):(window[u]=function(){r=arguments}
,c.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),m.head.appendChild(c),e.timeout>0&&(i=setTimeout(function(){d("timeout")}
,e.timeout)),h)}
,t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest}
,accepts:{script:"text/javascript,application/javascript,application/x-javascript",json:T,xml:"application/xml,text/xml",html:w,text:"text/plain"}
,crossDomain:!1,timeout:0,processData:!0,cache:!0}
,t.ajax=function(e){var n,i,l=t.extend({}
,e||{}
),h=t.Deferred&&t.Deferred();for(y in t.ajaxSettings)void 0===l[y]&&(l[y]=t.ajaxSettings[y]);r(l),l.crossDomain||(n=m.createElement("a"),n.href=l.url,n.href=n.href,l.crossDomain=S.protocol+"//"+S.host!=n.protocol+"//"+n.host),l.url||(l.url=window.location.toString()),(i=l.url.indexOf("#"))>-1&&(l.url=l.url.slice(0,i)),d(l);var p=l.dataType,v=/\?.+=\?/.test(l.url);if(v&&(p="jsonp"),l.cache!==!1&&(e&&e.cache===!0||"script"!=p&&"jsonp"!=p)||(l.url=f(l.url,"_="+Date.now())),"jsonp"==p)return v||(l.url=f(l.url,l.jsonp?l.jsonp+"=?":l.jsonp===!1?"":"callback=?")),t.ajaxJSONP(l,h);var b,_=l.accepts[p],E={}
,T=function(t,e){E[t.toLowerCase()]=[t,e]}
,w=/^([\w-]+:)\/\//.test(l.url)?RegExp.$1:window.location.protocol,k=l.xhr(),L=k.setRequestHeader;if(h&&h.promise(k),l.crossDomain||T("X-Requested-With","XMLHttpRequest"),T("Accept",_||"*
/*"),(_=l.mimeType||_)&&(_.indexOf(",")>-1&&(_=_.split(",",2)[0]),k.overrideMimeType&&k.overrideMimeType(_)),(l.contentType||l.contentType!==!1&&l.data&&"GET"!=l.type.toUpperCase())&&T("Content-Type",l.contentType||"application/x-www-form-urlencoded"),l.headers)for(g in l.headers)T(g,l.headers[g]);if(k.setRequestHeader=T,k.onreadystatechange=function(){if(4==k.readyState){k.onreadystatechange=u,clearTimeout(b);var e,n=!1;if(k.status>=200&&k.status<300||304==k.status||0==k.status&&"file:"==w){p=p||c(l.mimeType||k.getResponseHeader("content-type")),e=k.responseText;try{"script"==p?(0,eval)(e):"xml"==p?e=k.responseXML:"json"==p&&(e=A.test(e)?null:t.parseJSON(e))}
catch(r){n=r}
n?s(n,"parsererror",k,l,h):a(e,k,l,h)}
else s(k.statusText||null,k.status?"error":"abort",k,l,h)}}
,o(k,l)===!1)return k.abort(),s(null,"abort",k,l,h),k;if(l.xhrFields)for(g in l.xhrFields)k[g]=l.xhrFields[g];var O=!("async"in l)||l.async;k.open(l.type,l.url,O,l.username,l.password);for(g in E)L.apply(k,E[g]);return l.timeout>0&&(b=setTimeout(function(){k.onreadystatechange=u,k.abort(),s(null,"timeout",k,l,h)}
,l.timeout)),k.send(l.data?l.data:null),k}
,t.get=function(){return t.ajax(h.apply(null,arguments))}
,t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)}
,t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)}
,t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=h(e,n,r),l=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(b,"")).find(i):e),l&&l.apply(o,arguments)}
,t.ajax(s),this}
;var k=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(k(e)+"="+k(n))}
,p(r,e,n),r.join("&").replace(/%20/g,"+")}}
(r),function(t){t.Callbacks=function(e){e=t.extend({}
,e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function d(t){for(n=e.memory&&t,r=!0,s=o||0,o=0,a=l.length,i=!0;l&&a>s;++s)if(l[s].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}
i=!1,l&&(u?u.length&&d(u.shift()):n?l.length=0:f.disable())}
,f={add:function(){if(l){var r=l.length,s=function u(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&f.has(n)||l.push(n):n&&n.length&&"string"!=typeof n&&u(n)}
)}
;s(arguments),i?a=l.length:n&&(o=r,c(n))}
return this}
,remove:function(){return l&&t.each(arguments,function(e,n){for(var r;(r=t.inArray(n,l,r))>-1;)l.splice(r,1),i&&(a>=r&&--a,s>=r&&--s)}
),this}
,has:function(e){return!(!l||!(e?t.inArray(e,l)>-1:l.length))}
,empty:function(){return a=l.length=0,this}
,disable:function(){return l=u=n=void 0,this}
,disabled:function(){return!l}
,lock:function(){return u=void 0,n||f.disable(),this}
,locked:function(){return!u}
,fireWith:function(t,e){return!l||r&&!u||(e=e||[],e=[t,e.slice?e.slice():e],i?u.push(e):c(e)),this}
,fire:function(){return f.fireWith(this,arguments)}
,fired:function(){return!!r}}
;return f}}
(r),function(t){function e(n){var r=[["resolve","done",t.Callbacks({once:1,memory:1}
),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}
),"rejected"],["notify","progress",t.Callbacks({memory:1}
)]],i="pending",o={state:function(){return i}
,always:function(){return a.done(arguments).fail(arguments),this}
,then:function(){var n=arguments;return e(function(e){t.each(r,function(r,i){var s=t.isFunction(n[r])&&n[r];a[i[1]](function(){var n=s&&s.apply(this,arguments);if(n&&t.isFunction(n.promise))n.promise().done(e.resolve).fail(e.reject).progress(e.notify);else{var r=this===o?e.promise():this,a=s?[n]:arguments;e[i[0]+"With"](r,a)}}
)}
),n=null}
).promise()}
,promise:function(e){return null!=e?t.extend(e,o):o}}
,a={}
;return t.each(r,function(t,e){var n=e[2],s=e[3];o[e[1]]=n.add,s&&n.add(function(){i=s}
,r[1^t][2].disable,r[2][2].lock),a[e[0]]=function(){return a[e[0]+"With"](this===a?o:this,arguments),this}
,a[e[0]+"With"]=n.fireWith}
),o.promise(a),n&&n.call(a,a),a}
var n=Array.prototype.slice;t.when=function(r){var i,o,a,s=n.call(arguments),l=s.length,u=0,c=1!==l||r&&t.isFunction(r.promise)?l:0,f=1===c?r:e(),d=function(t,e,r){return function(o){e[t]=this,r[t]=arguments.length>1?n.call(arguments):o,r===i?f.notifyWith(e,r):--c||f.resolveWith(e,r)}}
;if(l>1)for(i=new Array(l),o=new Array(l),a=new Array(l);l>u;++u)s[u]&&t.isFunction(s[u].promise)?s[u].promise().done(d(u,a,s)).fail(f.reject).progress(d(u,o,i)):--c;return c||f.resolveWith(a,s),f.promise()}
,t.Deferred=e}
(r),function(t){function e(t,e,n,r){return Math.abs(t-e)>=Math.abs(n-r)?t-e>0?"Left":"Right":n-r>0?"Up":"Down"}
function n(){c=null,d.last&&(d.el.trigger("longTap"),d={}
)}
function r(){c&&clearTimeout(c),c=null}
function i(){s&&clearTimeout(s),l&&clearTimeout(l),u&&clearTimeout(u),c&&clearTimeout(c),s=l=u=c=null,d={}}
function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}
function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}
var s,l,u,c,f,d={}
,h=750;t(document).ready(function(){var p,y,g,v,m=0,b=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(d.el.trigger("swipe"),d.el.trigger("swipe"+e))}
).on("touchstart MSPointerDown pointerdown",function(e){(!(v=a(e,"down"))||o(e))&&(g=v?e:e.touches[0],e.touches&&1===e.touches.length&&d.x2&&(d.x2=void 0,d.y2=void 0),p=Date.now(),y=p-(d.last||p),d.el=t("tagName"in g.target?g.target:g.target.parentNode),s&&clearTimeout(s),d.x1=g.pageX,d.y1=g.pageY,y>0&&250>=y&&(d.isDoubleTap=!0),d.last=p,c=setTimeout(n,h),f&&v&&f.addPointer(e.pointerId))}
).on("touchmove MSPointerMove pointermove",function(t){(!(v=a(t,"move"))||o(t))&&(g=v?t:t.touches[0],r(),d.x2=g.pageX,d.y2=g.pageY,m+=Math.abs(d.x1-d.x2),b+=Math.abs(d.y1-d.y2))}
).on("touchend MSPointerUp pointerup",function(n){(!(v=a(n,"up"))||o(n))&&(r(),d.x2&&Math.abs(d.x1-d.x2)>30||d.y2&&Math.abs(d.y1-d.y2)>30?u=setTimeout(function(){d.el.trigger("swipe"),d.el.trigger("swipe"+e(d.x1,d.x2,d.y1,d.y2)),d={}}
,0):"last"in d&&(30>m&&30>b?l=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=i,d.el.trigger(e),d.isDoubleTap?(d.el&&d.el.trigger("doubleTap"),d={}
):s=setTimeout(function(){s=null,d.el&&d.el.trigger("singleTap"),d={}}
,250)}
,0):d={}
),m=b=0)}
).on("touchcancel MSPointerCancel pointercancel",i),t(window).on("scroll",i)}
),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}}
)}
(r),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}
function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,r,i=s.exec(t);if(i&&i[2]in a&&(n=a[i[2]],r=i[3],t=i[1],r)){var o=Number(r);r=isNaN(o)?r.replace(/^["']|["']$/g,""):o}
return e(t,n,r)}
var r=t.zepto,i=r.qsa,o=r.matches,a=t.expr[":"]={visible:function(){return e(this)?this:void 0}
,hidden:function(){return e(this)?void 0:this}
,selected:function(){return this.selected?this:void 0}
,checked:function(){return this.checked?this:void 0}
,parent:function(){return this.parentNode}
,first:function(t){return 0===t?this:void 0}
,last:function(t,e){return t===e.length-1?this:void 0}
,eq:function(t,e,n){return t===n?this:void 0}
,contains:function(e,n,r){return t(this).text().indexOf(r)>-1?this:void 0}
,has:function(t,e,n){return r.qsa(this,n).length?this:void 0}}
,s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),l=/^\s*>/,u="Zepto"+ +new Date;r.qsa=function(e,o){return n(o,function(n,a,s){try{var c;!n&&a?n="*":l.test(n)&&(c=t(e).addClass(u),n="."+u+" "+n);var f=i(e,n)}
catch(d){throw console.error("error performing selector:%o",o),d}
finally{c&&c.removeClass(u)}
return a?r.uniq(t.map(f,function(t,e){return a.call(t,e,f,s)}
)):f}
)}
,r.matches=function(t,e){return n(e,function(e,n,r){return!(e&&!o(t,e)||n&&n.call(t,null,r)!==t)}
)}}
(r),function(){try{getComputedStyle(void 0)}
catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}
catch(n){return null}}}}
(),t.exports=r}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(2),u=n(14),c=r(u),f=function(t){function e(n,r){i(this,e);var a=o(this,t.call(this,n));return a.settings={}
,a._i18n=r,a}
return a(e,t),s(e,[{key:"ended",get:function(){return!1}}
,{key:"i18n",get:function(){return this._i18n}}
,{key:"buffering",get:function(){return!1}}
]),e.prototype.play=function(){}
,e.prototype.pause=function(){}
,e.prototype.stop=function(){}
,e.prototype.seek=function(t){}
,e.prototype.seekPercentage=function(t){}
,e.prototype.getStartTimeOffset=function(){return 0}
,e.prototype.getDuration=function(){return 0}
,e.prototype.isPlaying=function(){return!1}
,e.prototype.getPlaybackType=function(){return e.NO_OP}
,e.prototype.isHighDefinitionInUse=function(){return!1}
,e.prototype.volume=function(t){}
,e.prototype.destroy=function(){this.$el.remove()}
,s(e,[{key:"isReady",get:function(){return!1}}
]),e}
(c["default"]);e["default"]=f,f.extend=function(t){return(0,l.extend)(f,t)}
,f.canPlay=function(t,e){return!1}
,f.VOD="vod",f.AOD="aod",f.LIVE="live",f.NO_OP="no_op",f.type="playback",t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
Object.defineProperty(e,"__esModule",{value:!0}
);var i=n(6),o=r(i),a=n(9),s=r(a),l={getStyleFor:function(t){var e=arguments.length<=1||void 0===arguments[1]?{baseUrl:""}
:arguments[1];return(0,o["default"])('<style class="clappr-style"></style>').html((0,s["default"])(t.toString())(e))}}
;e["default"]=l,t.exports=e["default"]}
,function(t,e){"use strict";var n={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g}
,r=/(.)^/,i={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"}
,o=/\\|'|\r|\n|\t|\u2028|\u2029/g,a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}
,s=new RegExp("[&<>\"']","g"),l=function(t){return null===t?"":(""+t).replace(s,function(t){return a[t]}
)}
,u=0,c=function(t,e){var a,s=new RegExp([(n.escape||r).source,(n.interpolate||r).source,(n.evaluate||r).source].join("|")+"|$","g"),c=0,f="__p+='";t.replace(s,function(e,n,r,a,s){return f+=t.slice(c,s).replace(o,function(t){return"\\"+i[t]}
),n&&(f+="'+\n((__t=("+n+"))==null?'':escapeExpr(__t))+\n'"),r&&(f+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),a&&(f+="';\n"+a+"\n__p+='"),c=s+e.length,e}
),f+="';\n",n.variable||(f="with(obj||{}
){\n"+f+"}
\n"),f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'')}
;\n"+f+"return __p;\n//# sourceURL=/microtemplates/source["+u++ +"]";try{a=new Function(n.variable||"obj","escapeExpr",f)}
catch(d){throw d.source=f,d}
if(e)return a(e,l);var h=function(t){return a.call(this,t,l)}
;return h.source="function("+(n.variable||"obj")+"){\n"+f+"}
",h}
;c.settings=n,t.exports=c}
,function(t,e){"use strict";t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}}
,t}}
,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}
);var n={}
,r=function(){try{return localStorage.setItem("clappr","clappr"),localStorage.removeItem("clappr"),!0}
catch(t){return!1}}
,i=function(){try{var t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return!!t}
catch(e){return!(!navigator.mimeTypes||void 0===navigator.mimeTypes["application/x-shockwave-flash"]||!navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)}}
,o=function(){var t=navigator.userAgent,e=t.match(/\b(playstation 4|nx|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],n=void 0;return/trident/i.test(e[1])?(n=/\brv[:]+(\d+)/g.exec(t)||[],{name:"IE",version:parseInt(n[1]||"")}
):"Chrome"===e[1]&&(n=t.match(/\bOPR\/(\d+)/),null!=n)?{name:"Opera",version:parseInt(n[1])}
:(e=e[2]?[e[1],e[2]]:[navigator.appName,navigator.appVersion,"-?"],(n=t.match(/version\/(\d+)/i))&&e.splice(1,1,n[1]),{name:e[0],version:parseInt(e[1])}
)}
,a=o();n.isSafari=/safari/i.test(navigator.userAgent)&&navigator.userAgent.indexOf("Chrome")===-1,n.isChrome=/chrome/i.test(navigator.userAgent),n.isFirefox=/firefox/i.test(navigator.userAgent),n.isLegacyIE=!!window.ActiveXObject,n.isIE=n.isLegacyIE||/trident.*rv:1\d/i.test(navigator.userAgent),n.isIE11=/trident.*rv:11/i.test(navigator.userAgent),n.isChromecast=n.isChrome&&/CrKey/i.test(navigator.userAgent),n.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini/i.test(navigator.userAgent),n.isiOS=/iPad|iPhone|iPod/i.test(navigator.userAgent),n.isAndroid=/Android/i.test(navigator.userAgent),n.isWindowsPhone=/Windows Phone/i.test(navigator.userAgent),n.isWin8App=/MSAppHost/i.test(navigator.userAgent),n.isWiiU=/WiiU/i.test(navigator.userAgent),n.isPS4=/PlayStation 4/i.test(navigator.userAgent),n.hasLocalstorage=r(),n.hasFlash=i(),n.name=a.name,n.version=a.version,e["default"]=n,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var a="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":o(t)}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":"undefined"==typeof t?"undefined":o(t)}
,s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(4),u=n(5),c=n(3),f=r(c),d=function(){function t(e){i(this,t),this.hls=e,this.onEvent=this.onEvent.bind(this);for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.handledEvents=r,this.useGenericHandler=!0,this.registerListeners()}
return s(t,[{key:"destroy",value:function(){this.unregisterListeners()}}
,{key:"isEventHandler",value:function(){return"object"===a(this.handledEvents)&&this.handledEvents.length&&"function"==typeof this.onEvent}}
,{key:"registerListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(t){if("hlsEventGeneric"===t)throw new Error("Forbidden event name:"+t);this.hls.on(t,this.onEvent)}
.bind(this))}}
,{key:"unregisterListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(t){this.hls.off(t,this.onEvent)}
.bind(this))}}
,{key:"onEvent",value:function(t,e){this.onEventGeneric(t,e)}}
,{key:"onEventGeneric",value:function(t,e){var n=function(t,e){var n="on"+t.replace("hls","");if("function"!=typeof this[n])throw new Error("Event "+t+" has no generic handler in this "+this.constructor.name+" class (tried "+n+")");return this[n].bind(this,e)}
;try{n.call(this,t,e).call()}
catch(r){l.logger.error("internal error happened while processing "+t+":"+r.message),this.hls.trigger(f["default"].ERROR,{type:u.ErrorTypes.OTHER_ERROR,details:u.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:t,err:r}
)}}}
]),t}
();e["default"]=d}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(2),u=n(1),c=r(u),f=function(t){function e(){var n=arguments.length<=0||void 0===arguments[0]?{}
:arguments[0];i(this,e);var r=o(this,t.call(this,n));return r._options=n,r.uniqueId=(0,l.uniqueId)("o"),r}
return a(e,t),s(e,[{key:"options",get:function(){return this._options}}
]),e}
(c["default"]);e["default"]=f,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(2),u=n(6),c=r(u),f=n(81),d=r(f),h=n(13),p=r(h),y=/^(\S+)\s*(.*)$/,g=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.cid=(0,l.uniqueId)("c"),r._ensureElement(),r.delegateEvents(),r}
return a(e,t),s(e,[{key:"tagName",get:function(){return"div"}}
,{key:"events",get:function(){return{}}}
,{key:"attributes",get:function(){return{}}}
]),e.prototype.$=function(t){return this.$el.find(t)}
,e.prototype.render=function(){return this}
,e.prototype.remove=function(){return this.$el.remove(),this.stopListening(),this.undelegateEvents(),this}
,e.prototype.setElement=function(t,e){return this.$el&&this.undelegateEvents(),this.$el=t instanceof c["default"]?t:(0,c["default"])(t),this.el=this.$el[0],e!==!1&&this.delegateEvents(),this}
,e.prototype.delegateEvents=function(t){if(!t&&!(t=(0,d["default"])(this,"events")))return this;this.undelegateEvents();for(var e in t){var n=t[e];if(n&&n.constructor!==Function&&(n=this[t[e]]),n){var r=e.match(y),i=r[1],o=r[2];i+=".delegateEvents"+this.cid,""===o?this.$el.on(i,n.bind(this)):this.$el.on(i,o,n.bind(this))}}
return this}
,e.prototype.undelegateEvents=function(){return this.$el.off(".delegateEvents"+this.cid),this}
,e.prototype._ensureElement=function(){if(this.el)this.setElement((0,d["default"])(this,"el"),!1);else{var t=c["default"].extend({}
,(0,d["default"])(this,"attributes"));this.id&&(t.id=(0,d["default"])(this,"id")),this.className&&(t["class"]=(0,d["default"])(this,"className"));var e=(0,c["default"])("<"+(0,d["default"])(this,"tagName")+">").attr(t);this.setElement(e,!1)}}
,e}
(p["default"]);e["default"]=g,t.exports=e["default"]}
,function(t,e,n){(function(t,n){"use strict";function r(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}
function i(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}
function o(t){return function(e){return null==e?void 0:e[t]}}
function a(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}
function s(t){return function(e){return t(e)}}
function l(t,e){return null==t?void 0:t[e]}
function u(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}
catch(n){}
return e}
function c(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}
),n}
function f(t,e){return function(n){return t(e(n))}}
function d(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}
),n}
function h(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function p(){this.__data__=hn?hn(null):{}}
function y(t){return this.has(t)&&delete this.__data__[t]}
function g(t){var e=this.__data__;if(hn){var n=e[t];return n===Vt?void 0:n}
return Ze.call(e,t)?e[t]:void 0}
function v(t){var e=this.__data__;return hn?void 0!==e[t]:Ze.call(e,t)}
function m(t,e){var n=this.__data__;return n[t]=hn&&void 0===e?Vt:e,this}
function b(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function _(){this.__data__=[]}
function E(t){var e=this.__data__,n=U(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():rn.call(e,n,1),!0}
function T(t){var e=this.__data__,n=U(e,t);return n<0?void 0:e[n][1]}
function w(t){return U(this.__data__,t)>-1}
function A(t,e){var n=this.__data__,r=U(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}
function S(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function k(){this.__data__={hash:new h,map:new(un||b),string:new h}}
function L(t){return at(this,t)["delete"](t)}
function O(t){return at(this,t).get(t)}
function R(t){return at(this,t).has(t)}
function C(t,e){return at(this,t).set(t,e),this}
function P(t){var e=-1,n=t?t.length:0;for(this.__data__=new S;++e<n;)this.add(t[e])}
function D(t){return this.__data__.set(t,Vt),this}
function I(t){return this.__data__.has(t)}
function x(t){this.__data__=new b(t)}
function N(){this.__data__=new b}
function M(t){return this.__data__["delete"](t)}
function F(t){return this.__data__.get(t)}
function j(t){return this.__data__.has(t)}
function B(t,e){var n=this.__data__;if(n instanceof b){var r=n.__data__;if(!un||r.length<Yt-1)return r.push([t,e]),this;n=this.__data__=new S(r)}
return n.set(t,e),this}
function U(t,e){for(var n=t.length;n--;)if(Tt(t[n][0],e))return n;return-1}
function G(t,e){e=dt(e,t)?[e]:et(e);for(var n=0,r=e.length;null!=t&&n<r;)t=t[mt(e[n++])];return n&&n==r?t:void 0}
function Y(t){return Je.call(t)}
function $(t,e){return null!=t&&(Ze.call(t,e)||"object"==("undefined"==typeof t?"undefined":Gt(t))&&e in t&&null===An(t))}
function V(t,e){return null!=t&&e in Object(t)}
function K(t,e,n,r,i){return t===e||(null==t||null==e||!Ot(t)&&!Rt(e)?t!==t&&e!==e:H(t,e,K,n,r,i))}
function H(t,e,n,r,i,o){var a=On(t),s=On(e),l=Jt,c=Jt;a||(l=Sn(t),l=l==Zt?ae:l),s||(c=Sn(e),c=c==Zt?ae:c);var f=l==ae&&!u(t),d=c==ae&&!u(e),h=l==c;if(h&&!f)return o||(o=new x),a||Rn(t)?rt(t,e,n,r,i,o):it(t,e,l,n,r,i,o);if(!(i&Ht)){var p=f&&Ze.call(t,"__wrapped__"),y=d&&Ze.call(e,"__wrapped__");if(p||y){var g=p?t.value():t,v=y?e.value():e;return o||(o=new x),n(g,v,r,i,o)}}
return!!h&&(o||(o=new x),ot(t,e,n,r,i,o))}
function z(t,e,n,r){var i=n.length,o=i,a=!r;if(null==t)return!o;for(t=Object(t);i--;){var s=n[i];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}
for(;++i<o;){s=n[i];var l=s[0],u=t[l],c=s[1];if(a&&s[2]){if(void 0===u&&!(l in t))return!1}
else{var f=new x;if(r)var d=r(u,c,l,t,e,f);if(!(void 0===d?K(c,u,r,Kt|Ht,f):d))return!1}}
return!0}
function W(t){if(!Ot(t)||pt(t))return!1;var e=kt(t)||u(t)?Qe:De;return e.test(bt(t))}
function q(t){return Rt(t)&&Lt(t.length)&&!!Ne[Je.call(t)]}
function X(t){return"function"==typeof t?t:null==t?Bt:"object"==("undefined"==typeof t?"undefined":Gt(t))?On(t)?J(t[0],t[1]):Z(t):Ut(t)}
function Z(t){var e=st(t);return 1==e.length&&e[0][2]?vt(e[0][0],e[0][1]):function(n){return n===t||z(n,t,e)}}
function J(t,e){return dt(t)&&gt(e)?vt(mt(t),e):function(n){var r=Mt(n,t);return void 0===r&&r===e?Ft(n,t):K(e,r,void 0,Kt|Ht)}}
function Q(t){return function(e){return G(e,t)}}
function tt(t){if("string"==typeof t)return t;if(Pt(t))return En?En.call(t):"";var e=t+"";return"0"==e&&1/t==-zt?"-0":e}
function et(t){return On(t)?t:kn(t)}
function nt(t){return function(e,n,r){var i=Object(e);if(!At(e)){var o=X(n,3);e=jt(e),n=function(t){return o(i[t],t,i)}}
var a=t(e,n,r);return a>-1?i[o?e[a]:a]:void 0}}
function rt(t,e,n,i,o,a){var s=o&Ht,l=t.length,u=e.length;if(l!=u&&!(s&&u>l))return!1;var c=a.get(t);if(c&&a.get(e))return c==e;var f=-1,d=!0,h=o&Kt?new P:void 0;for(a.set(t,e),a.set(e,t);++f<l;){var p=t[f],y=e[f];if(i)var g=s?i(y,p,f,e,t,a):i(p,y,f,t,e,a);if(void 0!==g){if(g)continue;d=!1;break}
if(h){if(!r(e,function(t,e){if(!h.has(e)&&(p===t||n(p,t,i,o,a)))return h.add(e)}
)){d=!1;break}}
else if(p!==y&&!n(p,y,i,o,a)){d=!1;break}}
return a["delete"](t),d}
function it(t,e,n,r,i,o,a){switch(n){case pe:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case he:return!(t.byteLength!=e.byteLength||!r(new en(t),new en(e)));case Qt:case te:case oe:return Tt(+t,+e);case ee:return t.name==e.name&&t.message==e.message;case le:case ce:return t==e+"";case ie:var s=c;case ue:var l=o&Ht;if(s||(s=d),t.size!=e.size&&!l)return!1;var u=a.get(t);if(u)return u==e;o|=Kt,a.set(t,e);var f=rt(s(t),s(e),r,i,o,a);return a["delete"](t),f;case fe:if(_n)return _n.call(t)==_n.call(e)}
return!1}
function ot(t,e,n,r,i,o){var a=i&Ht,s=jt(t),l=s.length,u=jt(e),c=u.length;if(l!=c&&!a)return!1;for(var f=l;f--;){var d=s[f];if(!(a?d in e:$(e,d)))return!1}
var h=o.get(t);if(h&&o.get(e))return h==e;var p=!0;o.set(t,e),o.set(e,t);for(var y=a;++f<l;){d=s[f];var g=t[d],v=e[d];if(r)var m=a?r(v,g,d,e,t,o):r(g,v,d,t,e,o);if(!(void 0===m?g===v||n(g,v,r,i,o):m)){p=!1;break}
y||(y="constructor"==d)}
if(p&&!y){var b=t.constructor,_=e.constructor;b!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _)&&(p=!1)}
return o["delete"](t),p}
function at(t,e){var n=t.__data__;return ht(e)?n["string"==typeof e?"string":"hash"]:n.map}
function st(t){for(var e=jt(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,gt(i)]}
return e}
function lt(t,e){var n=l(t,e);return W(n)?n:void 0}
function ut(t,e,n){e=dt(e,t)?[e]:et(e);for(var r,i=-1,o=e.length;++i<o;){var a=mt(e[i]);if(!(r=null!=t&&n(t,a)))break;t=t[a]}
if(r)return r;var o=t?t.length:0;return!!o&&Lt(o)&&ft(a,o)&&(On(t)||Ct(t)||wt(t))}
function ct(t){var e=t?t.length:void 0;return Lt(e)&&(On(t)||Ct(t)||wt(t))?a(e,String):null}
function ft(t,e){return e=null==e?Wt:e,!!e&&("number"==typeof t||xe.test(t))&&t>-1&&t%1==0&&t<e}
function dt(t,e){if(On(t))return!1;var n="undefined"==typeof t?"undefined":Gt(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Pt(t))||(Se.test(t)||!Ae.test(t)||null!=e&&t in Object(e))}
function ht(t){var e="undefined"==typeof t?"undefined":Gt(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}
function pt(t){return!!qe&&qe in t}
function yt(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||ze;return t===n}
function gt(t){return t===t&&!Ot(t)}
function vt(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}
function mt(t){if("string"==typeof t||Pt(t))return t;var e=t+"";return"0"==e&&1/t==-zt?"-0":e}
function bt(t){if(null!=t){try{return Xe.call(t)}
catch(e){}
try{return t+""}
catch(e){}}
return""}
function _t(t,e,n){var r=t?t.length:0;if(!r)return-1;var o=null==n?0:It(n);return o<0&&(o=sn(r+o,0)),i(t,X(e,3),o)}
function Et(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError($t);var n=function r(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=t.apply(this,n);return r.cache=o.set(i,a),a}
;return n.cache=new(Et.Cache||S),n}
function Tt(t,e){return t===e||t!==t&&e!==e}
function wt(t){return St(t)&&Ze.call(t,"callee")&&(!nn.call(t,"callee")||Je.call(t)==Zt)}
function At(t){return null!=t&&Lt(wn(t))&&!kt(t)}
function St(t){return Rt(t)&&At(t)}
function kt(t){var e=Ot(t)?Je.call(t):"";return e==ne||e==re}
function Lt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Wt}
function Ot(t){var e="undefined"==typeof t?"undefined":Gt(t);return!!t&&("object"==e||"function"==e)}
function Rt(t){return!!t&&"object"==("undefined"==typeof t?"undefined":Gt(t))}
function Ct(t){return"string"==typeof t||!On(t)&&Rt(t)&&Je.call(t)==ce}
function Pt(t){return"symbol"==("undefined"==typeof t?"undefined":Gt(t))||Rt(t)&&Je.call(t)==fe}
function Dt(t){if(!t)return 0===t?t:0;if(t=xt(t),t===zt||t===-zt){var e=t<0?-1:1;return e*qt}
return t===t?t:0}
function It(t){var e=Dt(t),n=e%1;return e===e?n?e-n:e:0}
function xt(t){if("number"==typeof t)return t;if(Pt(t))return Xt;if(Ot(t)){var e=kt(t.valueOf)?t.valueOf():t;t=Ot(e)?e+"":e}
if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Oe,"");var n=Pe.test(t);return n||Ie.test(t)?Me(t.slice(2),n?2:8):Ce.test(t)?Xt:+t}
function Nt(t){return null==t?"":tt(t)}
function Mt(t,e,n){var r=null==t?void 0:G(t,e);return void 0===r?n:r}
function Ft(t,e){return null!=t&&ut(t,e,V)}
function jt(t){var e=yt(t);if(!e&&!At(t))return Tn(t);var n=ct(t),r=!!n,i=n||[],o=i.length;for(var a in t)!$(t,a)||r&&("length"==a||ft(a,o))||e&&"constructor"==a||i.push(a);return i}
function Bt(t){return t}
function Ut(t){return dt(t)?o(mt(t)):Q(t)}
var Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
,Yt=200,$t="Expected a function",Vt="__lodash_hash_undefined__",Kt=1,Ht=2,zt=1/0,Wt=9007199254740991,qt=1.7976931348623157e308,Xt=NaN,Zt="[object Arguments]",Jt="[object Array]",Qt="[object Boolean]",te="[object Date]",ee="[object Error]",ne="[object Function]",re="[object GeneratorFunction]",ie="[object Map]",oe="[object Number]",ae="[object Object]",se="[object Promise]",le="[object RegExp]",ue="[object Set]",ce="[object String]",fe="[object Symbol]",de="[object WeakMap]",he="[object ArrayBuffer]",pe="[object DataView]",ye="[object Float32Array]",ge="[object Float64Array]",ve="[object Int8Array]",me="[object Int16Array]",be="[object Int32Array]",_e="[object Uint8Array]",Ee="[object Uint8ClampedArray]",Te="[object Uint16Array]",we="[object Uint32Array]",Ae=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Se=/^\w*$/,ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g,Le=/[\\^$.*+?()[\]{}
|]/g,Oe=/^\s+|\s+$/g,Re=/\\(\\)?/g,Ce=/^[-+]0x[0-9a-f]+$/i,Pe=/^0b[01]+$/i,De=/^\[object .+?Constructor\]$/,Ie=/^0o[0-7]+$/i,xe=/^(?:0|[1-9]\d*)$/,Ne={}
;Ne[ye]=Ne[ge]=Ne[ve]=Ne[me]=Ne[be]=Ne[_e]=Ne[Ee]=Ne[Te]=Ne[we]=!0,Ne[Zt]=Ne[Jt]=Ne[he]=Ne[Qt]=Ne[pe]=Ne[te]=Ne[ee]=Ne[ne]=Ne[ie]=Ne[oe]=Ne[ae]=Ne[le]=Ne[ue]=Ne[ce]=Ne[de]=!1;var Me=parseInt,Fe="object"==("undefined"==typeof t?"undefined":Gt(t))&&t&&t.Object===Object&&t,je="object"==("undefined"==typeof self?"undefined":Gt(self))&&self&&self.Object===Object&&self,Be=Fe||je||Function("return this")(),Ue=Fe&&"object"==Gt(e)&&e,Ge=Ue&&"object"==Gt(n)&&n,Ye=Ge&&Ge.exports===Ue,$e=Ye&&Fe.process,Ve=function(){try{return $e&&$e.binding("util")}
catch(t){}}
(),Ke=Ve&&Ve.isTypedArray,He=Array.prototype,ze=Object.prototype,We=Be["__core-js_shared__"],qe=function(){var t=/[^.]+$/.exec(We&&We.keys&&We.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}
(),Xe=Function.prototype.toString,Ze=ze.hasOwnProperty,Je=ze.toString,Qe=RegExp("^"+Xe.call(Ze).replace(Le,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tn=Be.Symbol,en=Be.Uint8Array,nn=ze.propertyIsEnumerable,rn=He.splice,on=Object.getPrototypeOf,an=Object.keys,sn=Math.max,ln=lt(Be,"DataView"),un=lt(Be,"Map"),cn=lt(Be,"Promise"),fn=lt(Be,"Set"),dn=lt(Be,"WeakMap"),hn=lt(Object,"create"),pn=bt(ln),yn=bt(un),gn=bt(cn),vn=bt(fn),mn=bt(dn),bn=tn?tn.prototype:void 0,_n=bn?bn.valueOf:void 0,En=bn?bn.toString:void 0;h.prototype.clear=p,h.prototype["delete"]=y,h.prototype.get=g,h.prototype.has=v,h.prototype.set=m,b.prototype.clear=_,b.prototype["delete"]=E,b.prototype.get=T,b.prototype.has=w,b.prototype.set=A,S.prototype.clear=k,S.prototype["delete"]=L,S.prototype.get=O,S.prototype.has=R,S.prototype.set=C,P.prototype.add=P.prototype.push=D,P.prototype.has=I,x.prototype.clear=N,x.prototype["delete"]=M,x.prototype.get=F,x.prototype.has=j,x.prototype.set=B;var Tn=f(an,Object),wn=o("length"),An=f(on,Object),Sn=Y;(ln&&Sn(new ln(new ArrayBuffer(1)))!=pe||un&&Sn(new un)!=ie||cn&&Sn(cn.resolve())!=se||fn&&Sn(new fn)!=ue||dn&&Sn(new dn)!=de)&&(Sn=function(t){var e=Je.call(t),n=e==ae?t.constructor:void 0,r=n?bt(n):void 0;if(r)switch(r){case pn:return pe;case yn:return ie;case gn:return se;case vn:return ue;case mn:return de}
return e}
);var kn=Et(function(t){var e=[];return Nt(t).replace(ke,function(t,n,r,i){e.push(r?i.replace(Re,"$1"):n||t)}
),e}
),Ln=nt(_t);Et.Cache=S;var On=Array.isArray,Rn=Ke?s(Ke):q;n.exports=Ln}
).call(e,function(){return this}
(),n(18)(t))}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=n(1),a=r(o),s=new a["default"],l=function u(){i(this,u)}
;e["default"]=l,l.on=function(t,e,n){s.on(t,e,n)}
,l.once=function(t,e,n){s.once(t,e,n)}
,l.off=function(t,e,n){s.off(t,e,n)}
,l.trigger=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];s.trigger.apply(s,[t].concat(n))}
,l.stopListening=function(t,e,n){s.stopListening(t,e,n)}
,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=n(2),l=n(13),u=r(l),c=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n.options));return r.core=n,r.enabled=!0,r.bindEvents(),r}
return a(e,t),e.prototype.bindEvents=function(){}
,e.prototype.enable=function(){this.enabled||(this.bindEvents(),this.enabled=!0)}
,e.prototype.disable=function(){this.enabled&&(this.stopListening(),this.enabled=!1)}
,e.prototype.getExternalInterface=function(){return{}}
,e.prototype.destroy=function(){this.stopListening()}
,e}
(u["default"]);e["default"]=c,c.extend=function(t){return(0,s.extend)(c,t)}
,c.type="core",t.exports=e["default"]}
,function(t,e){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){}
,t.paths=[],t.children=[],t.webpackPolyfill=1),t}}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=n(13),l=r(s),u=n(2),c=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n.options));return r.container=n,r.enabled=!0,r.bindEvents(),r}
return a(e,t),e.prototype.enable=function(){this.enabled||(this.bindEvents(),this.enabled=!0)}
,e.prototype.disable=function(){this.enabled&&(this.stopListening(),this.enabled=!1)}
,e.prototype.bindEvents=function(){}
,e.prototype.destroy=function(){this.stopListening()}
,e}
(l["default"]);e["default"]=c,c.extend=function(t){return(0,u.extend)(c,t)}
,c.type="container",t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=n(2),l=n(14),u=r(l),c=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n.options));return r.container=n,r.enabled=!0,r.bindEvents(),r}
return a(e,t),e.prototype.enable=function(){this.enabled||(this.bindEvents(),this.$el.show(),this.enabled=!0)}
,e.prototype.disable=function(){this.stopListening(),this.$el.hide(),this.enabled=!1}
,e.prototype.bindEvents=function(){}
,e.prototype.destroy=function(){this.remove()}
,e}
(u["default"]);e["default"]=c,c.extend=function(t){return(0,s.extend)(c,t)}
,c.type="container",t.exports=e["default"]}
,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var r=function i(){n(this,i),this.options={}
,this.playbackPlugins=[],this.currentSize={width:0,height:0}}
;r._players={}
,r.getInstance=function(t){return r._players[t]||(r._players[t]=new r)}
,e["default"]=r,t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(99)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=n(2),l=n(14),u=r(l),c=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n.options));return r.core=n,r.enabled=!0,r.bindEvents(),r.render(),r}
return a(e,t),e.prototype.bindEvents=function(){}
,e.prototype.getExternalInterface=function(){return{}}
,e.prototype.enable=function(){this.enabled||(this.bindEvents(),this.$el.show(),this.enabled=!0)}
,e.prototype.disable=function(){this.stopListening(),this.$el.hide(),this.enabled=!1}
,e.prototype.destroy=function(){this.remove()}
,e.prototype.render=function(){return this}
,e}
(u["default"]);e["default"]=c,c.extend=function(t){return(0,s.extend)(c,t)}
,c.type="core",t.exports=e["default"]}
,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}
),e["default"]=n(93),t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(111)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
Object.defineProperty(e,"__esModule",{value:!0}
);var i=n(123),o=r(i);e["default"]={Kibo:o["default"]}
,t.exports=e["default"]}
,function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M1.425.35L14.575 8l-13.15 7.65V.35z"></path></svg>'}
,function(t,e){"use strict";function n(){this._events=this._events||{}
,this._maxListeners=this._maxListeners||void 0}
function r(t){return"function"==typeof t}
function i(t){return"number"==typeof t}
function o(t){return"object"===("undefined"==typeof t?"undefined":s(t))&&null!==t}
function a(t){return void 0===t}
var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!i(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this}
,n.prototype.emit=function(t){var e,n,i,s,l,u;if(this._events||(this._events={}
),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;var c=new Error('Uncaught,unspecified "error" event. ('+e+")");throw c.context=e,c}
if(n=this._events[t],a(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}
else if(o(n))for(s=Array.prototype.slice.call(arguments,1),u=n.slice(),i=u.length,l=0;l<i;l++)u[l].apply(this,s);return!0}
,n.prototype.addListener=function(t,e){var i;if(!r(e))throw TypeError("listener must be a function");return this._events||(this._events={}
),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned&&(i=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning:possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())),this}
,n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}
if(!r(e))throw TypeError("listener must be a function");var i=!1;return n.listener=e,this.on(t,n),this}
,n.prototype.removeListener=function(t,e){var n,i,a,s;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],a=n.length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(n)){for(s=a;s-- >0;)if(n[s]===e||n[s].listener&&n[s].listener===e){i=s;break}
if(i<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}
return this}
,n.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}
:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={}
,this}
if(n=this._events[t],r(n))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this}
,n.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]}
,n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}
return 0}
,n.listenerCount=function(t,e){return t.listenerCount(e)}}
,function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),o=n(4),a=n(5),s=function(){function t(){r(this,t)}
return i(t,null,[{key:"getAudioConfig",value:function(t,e,n,r){var i,s,l,u,c,f=navigator.userAgent.toLowerCase(),d=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];return i=((192&e[n+2])>>>6)+1,s=(60&e[n+2])>>>2,s>d.length-1?void t.trigger(Event.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+s}
):(u=(1&e[n+2])<<2,u|=(192&e[n+3])>>>6,o.logger.log("manifest codec:"+r+",ADTS data:type:"+i+",sampleingIndex:"+s+"["+d[s]+"Hz],channelConfig:"+u),f.indexOf("firefox")!==-1?s>=6?(i=5,c=new Array(4),l=s-3):(i=2,c=new Array(2),l=s):f.indexOf("android")!==-1?(i=2,c=new Array(2),l=s):(i=5,c=new Array(4),r&&(r.indexOf("mp4a.40.29")!==-1||r.indexOf("mp4a.40.5")!==-1)||!r&&s>=6?l=s-3:((r&&r.indexOf("mp4a.40.2")!==-1&&s>=6&&1===u||!r&&1===u)&&(i=2,c=new Array(2)),l=s)),c[0]=i<<3,c[0]|=(14&s)>>1,c[1]|=(1&s)<<7,c[1]|=u<<3,5===i&&(c[1]|=(14&l)>>1,c[2]=(1&l)<<7,c[2]|=8,c[3]=0),{config:c,samplerate:d[s],channelCount:u,codec:"mp4a.40."+i}
)}}
]),t}
();e["default"]=s}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),a=n(3),s=r(a),l=n(5),u=n(56),c=r(u),f=n(61),d=r(f),h=n(69),p=r(h),y=n(70),g=r(y),v=function(){function t(e,n){i(this,t),this.hls=e,this.typeSupported=n}
return o(t,[{key:"destroy",value:function(){var t=this.demuxer;t&&t.destroy()}}
,{key:"push",value:function(t,e,n,r,i,o,a,u){var f=this.demuxer;if(!f){var h=this.hls;if(d["default"].probe(t))f=this.typeSupported.mp2t===!0?new d["default"](h,g["default"]):new d["default"](h,p["default"]);else{if(!c["default"].probe(t))return void h.trigger(s["default"].ERROR,{type:l.ErrorTypes.MEDIA_ERROR,details:l.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"}
);f=new c["default"](h,p["default"])}
this.demuxer=f}
f.push(t,e,n,r,i,o,a,u)}}
]),t}
();e["default"]=v}
,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),i=function(){function t(){n(this,t)}
return r(t,null,[{key:"bufferInfo",value:function(t,e,n){if(t){var r,i=t.buffered,o=[];for(r=0;r<i.length;r++)o.push({start:i.start(r),end:i.end(r)}
);return this.bufferedInfo(o,e,n)}
return{len:0,start:0,end:0,nextStart:void 0}}}
,{key:"bufferedInfo",value:function(t,e,n){var r,i,o,a,s,l=[];for(t.sort(function(t,e){var n=t.start-e.start;return n?n:e.end-t.end}
),s=0;s<t.length;s++){var u=l.length;if(u){var c=l[u-1].end;t[s].start-c<n?t[s].end>c&&(l[u-1].end=t[s].end):l.push(t[s])}
else l.push(t[s])}
for(s=0,r=0,i=o=e;s<l.length;s++){var f=l[s].start,d=l[s].end;if(e+n>=f&&e<d)i=f,o=d,r=o-e;else if(e+n<f){a=f;break}}
return{len:r,start:i,end:o,nextStart:a}}}
]),t}
();e["default"]=i}
,function(t,e){"use strict";function n(){f&&u&&(f=!1,u.length?c=u.concat(c):d=-1,c.length&&r())}
function r(){if(!f){var t=a.call(null,n);f=!0;for(var e=c.length;e;){for(u=c,c=[];++d<e;)u&&u[d].run();d=-1,e=c.length}
u=null,f=!1,s.call(null,t)}}
function i(t,e){this.fun=t,this.array=e}
function o(){}
var a,s,l=t.exports={}
;!function(){try{a=setTimeout}
catch(t){a=function(){throw new Error("setTimeout is not defined")}}
try{s=clearTimeout}
catch(t){s=function(){throw new Error("clearTimeout is not defined")}}}
();var u,c=[],f=!1,d=-1;l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new i(t,e)),1!==c.length||f||a.call(null,r,0)}
,i.prototype.run=function(){this.fun.apply(null,this.array)}
,l.title="browser",l.browser=!0,l.env={}
,l.argv=[],l.version="",l.versions={}
,l.on=o,l.addListener=o,l.once=o,l.off=o,l.removeListener=o,l.removeAllListeners=o,l.emit=o,l.binding=function(t){throw new Error("process.binding is not supported")}
,l.cwd=function(){return"/"}
,l.chdir=function(t){throw new Error("process.chdir is not supported")}
,l.umask=function(){return 0}}
,function(t,e,n){"use strict";t.exports=n(84)}
,function(t,e,n){"use strict";t.exports=n(87)}
,function(t,e,n){"use strict";t.exports=n(90)}
,function(t,e,n){"use strict";t.exports=n(91)}
,function(t,e,n){"use strict";t.exports=n(94)}
,function(t,e,n){"use strict";t.exports=n(95)}
,function(t,e,n){"use strict";t.exports=n(97)}
,function(t,e,n){"use strict";t.exports=n(98)}
,function(t,e,n){"use strict";t.exports=n(100)}
,function(t,e,n){"use strict";t.exports=n(101)}
,function(t,e,n){"use strict";t.exports=n(112)}
,function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M1.712 14.76H6.43V1.24H1.71v13.52zm7.86-13.52v13.52h4.716V1.24H9.573z"></path></svg>'}
,function(t,e,n){t.exports=n.p+"a8c874b93b3d848f39a71260c57e3863.cur"}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":s(e))&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+("undefined"==typeof e?"undefined":s(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(3),c=r(u),f=n(12),d=r(f),h=n(31),p=r(h),y=n(5),g=n(4),v=n(49),m=r(v),b=function(t){function e(t){i(this,e);var n=o(this,Object.getPrototypeOf(e).call(this,t,c["default"].FRAG_LOADING,c["default"].FRAG_LOADED,c["default"].ERROR));return n.lastLoadedFragLevel=0,n._autoLevelCapping=-1,n._nextAutoLevel=-1,n.hls=t,n.onCheck=n.abandonRulesCheck.bind(n),n}
return a(e,t),l(e,[{key:"destroy",value:function(){this.clearTimer(),d["default"].prototype.destroy.call(this)}}
,{key:"onFragLoading",value:function(t){if(this.timer||(this.timer=setInterval(this.onCheck,100)),!this.bwEstimator){var e=this.hls,n=t.frag.level,r=e.levels[n].details.live,i=e.config,o=void 0,a=void 0;r?(o=i.abrEwmaFastLive,a=i.abrEwmaSlowLive):(o=i.abrEwmaFastVoD,a=i.abrEwmaSlowVoD),this.bwEstimator=new m["default"](e,a,o,i.abrEwmaDefaultEstimate)}
var s=t.frag;s.trequest=performance.now(),this.fragCurrent=s}}
,{key:"abandonRulesCheck",value:function(){var t=this.hls,e=t.media,n=this.fragCurrent;if(!n.loader||n.loader.stats&&n.loader.stats.aborted)return g.logger.warn("frag loader destroy or aborted,disarm abandonRulesCheck"),void this.clearTimer();if(e&&(!e.paused||!e.readyState)&&n.autoLevel&&n.level){var r=performance.now()-n.trequest;if(r>500*n.duration){var i=t.levels,o=Math.max(1,1e3*n.loaded/r),a=Math.max(n.loaded,Math.round(n.duration*i[n.level].bitrate/8)),s=e.currentTime,l=(a-n.loaded)/o,u=p["default"].bufferInfo(e,s,t.config.maxBufferHole).end-s;if(u<2*n.duration&&l>u){var f=void 0,d=void 0;for(d=n.level-1;d>=0&&(f=n.duration*i[d].bitrate/(6.4*o),g.logger.log("fragLoadedDelay/bufferStarvationDelay/fragLevelNextLoadedDelay["+d+"]:"+l.toFixed(1)+"/"+u.toFixed(1)+"/"+f.toFixed(1)),!(f<u));d--);f<l&&(d=Math.max(0,d),t.nextLoadLevel=d,this.bwEstimator.sample(r,n.loaded),g.logger.warn("loading too slow,abort fragment loading and switch to level "+d),n.loader.abort(),this.clearTimer(),t.trigger(c["default"].FRAG_LOAD_EMERGENCY_ABORTED,{frag:n}
))}}}}}
,{key:"onFragLoaded",value:function(t){var e=t.stats;void 0===e.aborted&&1===t.frag.loadCounter&&this.bwEstimator.sample(performance.now()-e.trequest,e.loaded),this.clearTimer(),this.lastLoadedFragLevel=t.frag.level,this._nextAutoLevel=-1}}
,{key:"onError",value:function(t){switch(t.details){case y.ErrorDetails.FRAG_LOAD_ERROR:case y.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer()}}}
,{key:"clearTimer",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}}
,{key:"autoLevelCapping",get:function(){return this._autoLevelCapping}
,set:function(t){this._autoLevelCapping=t}}
,{key:"nextAutoLevel",get:function(){var t,e,n=this.hls,r=n.levels,i=n.config;if(e=this._autoLevelCapping===-1&&r&&r.length?r.length-1:this._autoLevelCapping,this._nextAutoLevel!==-1)return Math.min(this._nextAutoLevel,e);var o=this.bwEstimator?this.bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,a=void 0;for(t=0;t<=e;t++)if(a=t<=this.lastLoadedFragLevel?i.abrBandWidthFactor*o:i.abrBandWidthUpFactor*o,a<r[t].bitrate)return Math.max(0,t-1);return t-1}
,set:function(t){this._nextAutoLevel=t}}
]),e}
(d["default"]);e["default"]=b}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":s(e))&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+("undefined"==typeof e?"undefined":s(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(3),c=r(u),f=n(12),d=r(f),h=n(4),p=n(5),y=function(t){function e(t){i(this,e);var n=o(this,Object.getPrototypeOf(e).call(this,t,c["default"].MEDIA_ATTACHING,c["default"].MEDIA_DETACHING,c["default"].BUFFER_RESET,c["default"].BUFFER_APPENDING,c["default"].BUFFER_CODECS,c["default"].BUFFER_EOS,c["default"].BUFFER_FLUSHING,c["default"].LEVEL_UPDATED));return n._msDuration=null,n._levelDuration=null,n.onsbue=n.onSBUpdateEnd.bind(n),n.onsbe=n.onSBUpdateError.bind(n),n}
return a(e,t),l(e,[{key:"destroy",value:function(){d["default"].prototype.destroy.call(this)}}
,{key:"onMediaAttaching",value:function(t){var e=this.media=t.media;if(e){var n=this.mediaSource=new MediaSource;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),n.addEventListener("sourceopen",this.onmso),n.addEventListener("sourceended",this.onmse),n.addEventListener("sourceclose",this.onmsc),e.src=URL.createObjectURL(n)}}}
,{key:"onMediaDetaching",value:function(){var t=this.mediaSource;if(t){if("open"===t.readyState)try{t.endOfStream()}
catch(e){h.logger.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}
t.removeEventListener("sourceopen",this.onmso),t.removeEventListener("sourceended",this.onmse),t.removeEventListener("sourceclose",this.onmsc);try{this.media.src="",this.media.removeAttribute("src")}
catch(e){h.logger.warn("onMediaDetaching:"+e.message+" while unlinking video.src")}
this.mediaSource=null,this.media=null,this.pendingTracks=null,this.sourceBuffer=null}
this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(c["default"].MEDIA_DETACHED)}}
,{key:"onMediaSourceOpen",value:function(){h.logger.log("media source opened"),this.hls.trigger(c["default"].MEDIA_ATTACHED,{media:this.media}
),this.mediaSource.removeEventListener("sourceopen",this.onmso);var t=this.pendingTracks;t&&(this.onBufferCodecs(t),this.pendingTracks=null,this.doAppending())}}
,{key:"onMediaSourceClose",value:function(){h.logger.log("media source closed")}}
,{key:"onMediaSourceEnded",value:function(){h.logger.log("media source ended")}}
,{key:"onSBUpdateEnd",value:function(){this._needsFlush&&this.doFlush(),this._needsEos&&this.onBufferEos(),this.hls.trigger(c["default"].BUFFER_APPENDED),this.doAppending()}}
,{key:"onSBUpdateError",value:function(t){h.logger.error("sourceBuffer error:"+t),this.hls.trigger(c["default"].ERROR,{type:p.ErrorTypes.MEDIA_ERROR,details:p.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1}
)}}
,{key:"onBufferReset",value:function(){var t=this.sourceBuffer;if(t){for(var e in t){var n=t[e];try{this.mediaSource.removeSourceBuffer(n),n.removeEventListener("updateend",this.onsbue),n.removeEventListener("error",this.onsbe)}
catch(r){}}
this.sourceBuffer=null}
this.flushRange=[],this.appended=0}}
,{key:"onBufferCodecs",value:function(t){var e=this.mediaSource;if(!e||"open"!==e.readyState)return void(this.pendingTracks=t);if(!this.sourceBuffer){var n={}
;for(var r in t){var i=t[r],o=i.levelCodec||i.codec,a=i.container+";codecs="+o;h.logger.log("creating sourceBuffer with mimeType:"+a);var s=n[r]=e.addSourceBuffer(a);s.addEventListener("updateend",this.onsbue),s.addEventListener("error",this.onsbe)}
this.sourceBuffer=n}}}
,{key:"onBufferAppending",value:function(t){this.segments?this.segments.push(t):this.segments=[t],this.doAppending()}}
,{key:"onBufferAppendFail",value:function(t){h.logger.error("sourceBuffer error:"+t.event),this.hls.trigger(c["default"].ERROR,{type:p.ErrorTypes.MEDIA_ERROR,details:p.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1,frag:this.fragCurrent}
)}}
,{key:"onBufferEos",value:function(){var t=this.sourceBuffer,e=this.mediaSource;e&&"open"===e.readyState&&(t.audio&&t.audio.updating||t.video&&t.video.updating?this._needsEos=!0:(h.logger.log("all media data available,signal endOfStream() to MediaSource and stop loading fragment"),e.endOfStream(),this._needsEos=!1))}}
,{key:"onBufferFlushing",value:function(t){this.flushRange.push({start:t.startOffset,end:t.endOffset}
),this.flushBufferCounter=0,this.doFlush()}}
,{key:"onLevelUpdated",value:function(t){var e=t.details;0!==e.fragments.length&&(this._levelDuration=e.totalduration+e.fragments[0].start,this.updateMediaElementDuration())}}
,{key:"updateMediaElementDuration",value:function(){if(null!==this._levelDuration){var t=this.media,e=this.mediaSource,n=this.sourceBuffer;if(t&&e&&n&&0!==t.readyState&&"open"===e.readyState){for(var r in n)if(n[r].updating)return;null===this._msDuration&&(this._msDuration=e.duration),this._levelDuration>this._msDuration&&(h.logger.log("Updating mediasource duration to "+this._levelDuration),e.duration=this._levelDuration,this._msDuration=this._levelDuration)}}}}
,{key:"doFlush",value:function(){for(;this.flushRange.length;){var t=this.flushRange[0];if(!this.flushBuffer(t.start,t.end))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}
if(0===this.flushRange.length){this._needsFlush=!1;var e=0,n=this.sourceBuffer;if(n)for(var r in n)e+=n[r].buffered.length;this.appended=e,this.hls.trigger(c["default"].BUFFER_FLUSHED)}}}
,{key:"doAppending",value:function(){var t=this.hls,e=this.sourceBuffer,n=this.segments;if(e){if(this.media.error)return n=[],void h.logger.error("trying to append although a media error occured,flush segment and abort");for(var r in e)if(e[r].updating)return;if(n.length){var i=n.shift();try{e[i.type].appendBuffer(i.data),this.appendError=0,this.appended++}
catch(o){h.logger.error("error while trying to append buffer:"+o.message),n.unshift(i);var a={type:p.ErrorTypes.MEDIA_ERROR}
;if(22===o.code)return this.segments=[],a.details=p.ErrorDetails.BUFFER_FULL_ERROR,void t.trigger(c["default"].ERROR,a);if(this.appendError?this.appendError++:this.appendError=1,a.details=p.ErrorDetails.BUFFER_APPEND_ERROR,a.frag=this.fragCurrent,this.appendError>t.config.appendErrorMaxRetry)return h.logger.log("fail "+t.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),n=[],a.fatal=!0,void t.trigger(c["default"].ERROR,a);a.fatal=!1,t.trigger(c["default"].ERROR,a)}}}}}
,{key:"flushBuffer",value:function(t,e){var n,r,i,o,a,s;if(this.flushBufferCounter<this.appended&&this.sourceBuffer)for(var l in this.sourceBuffer){if(n=this.sourceBuffer[l],n.updating)return h.logger.warn("cannot flush,sb updating in progress"),!1;for(r=0;r<n.buffered.length;r++)if(i=n.buffered.start(r),o=n.buffered.end(r),navigator.userAgent.toLowerCase().indexOf("firefox")!==-1&&e===Number.POSITIVE_INFINITY?(a=t,s=e):(a=Math.max(i,t),s=Math.min(o,e)),Math.min(s,o)-a>.5)return this.flushBufferCounter++,h.logger.log("flush "+l+" ["+a+","+s+"],of ["+i+","+o+"],pos:"+this.media.currentTime),n.remove(a,s),!1}
else h.logger.warn("abort flushing too many retries");return h.logger.log("buffer flushed"),!0}}
]),e}
(d["default"]);e["default"]=y}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":s(e))&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+("undefined"==typeof e?"undefined":s(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(3),c=r(u),f=n(12),d=r(f),h=function(t){function e(t){return i(this,e),o(this,Object.getPrototypeOf(e).call(this,t,c["default"].MEDIA_ATTACHING,c["default"].MANIFEST_PARSED))}
return a(e,t),l(e,[{key:"destroy",value:function(){this.hls.config.capLevelToPlayerSize&&(this.media=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer)))}}
,{key:"onMediaAttaching",value:function(t){this.media=t.media instanceof HTMLVideoElement?t.media:null}}
,{key:"onManifestParsed",value:function(t){this.hls.config.capLevelToPlayerSize&&(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.levels=t.levels,this.hls.firstLevel=this.getMaxLevel(t.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}}
,{key:"detectPlayerSize",value:function(){if(this.media){var t=this.levels?this.levels.length:0;t&&(this.hls.autoLevelCapping=this.getMaxLevel(t-1),this.hls.autoLevelCapping>this.autoLevelCapping&&this.hls.streamController.nextLevelSwitch(),this.autoLevelCapping=this.hls.autoLevelCapping)}}}
,{key:"getMaxLevel",value:function(t){var e=void 0,n=void 0,r=void 0,i=this.mediaWidth,o=this.mediaHeight,a=0,s=0;for(n=0;n<=t&&(r=this.levels[n],e=n,a=r.width,s=r.height,!(i<=a||o<=s));n++);return e}}
,{key:"contentScaleFactor",get:function(){var t=1;try{t=window.devicePixelRatio}
catch(e){}
return t}}
,{key:"mediaWidth",get:function(){var t=void 0;return this.media&&(t=this.media.width||this.media.clientWidth||this.media.offsetWidth,t*=this.contentScaleFactor),t}}
,{key:"mediaHeight",get:function(){var t=void 0;return this.media&&(t=this.media.height||this.media.clientHeight||this.media.offsetHeight,t*=this.contentScaleFactor),t}}
]),e}
(d["default"]);e["default"]=h}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),a=n(74),s=r(a),l=function(){function t(e,n,r,o){i(this,t),this.hls=e,this.defaultEstimate_=o,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new s["default"](n),this.fast_=new s["default"](r)}
return o(t,[{key:"sample",value:function(t,e){t=Math.max(t,this.minDelayMs_);var n=8e3*e/t,r=t/1e3;this.fast_.sample(r,n),this.slow_.sample(r,n)}}
,{key:"getEstimate",value:function(){return!this.fast_||!this.slow_||this.fast_.getTotalWeight()<this.minWeight_?this.defaultEstimate_:Math.min(this.fast_.getEstimate(),this.slow_.getEstimate())}}
,{key:"destroy",value:function(){}}
]),t}
();e["default"]=l}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":s(e))&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+("undefined"==typeof e?"undefined":s(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(3),c=r(u),f=n(12),d=r(f),h=n(4),p=n(5),y=function(t){function e(t){i(this,e);var n=o(this,Object.getPrototypeOf(e).call(this,t,c["default"].MANIFEST_LOADED,c["default"].LEVEL_LOADED,c["default"].ERROR));return n.ontick=n.tick.bind(n),n._manualLevel=n._autoLevelCapping=-1,n}
return a(e,t),l(e,[{key:"destroy",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),this._manualLevel=-1}}
,{key:"startLoad",value:function(){this.canload=!0,this.timer&&this.tick()}}
,{key:"stopLoad",value:function(){this.canload=!1}}
,{key:"onManifestLoaded",value:function(t){var e,n,r=[],i=[],o={}
,a=!1,s=!1,l=this.hls;if(t.levels.forEach(function(t){t.videoCodec&&(a=!0),t.audioCodec&&(s=!0);var e=o[t.bitrate];void 0===e?(o[t.bitrate]=r.length,t.url=[t.url],t.urlId=0,r.push(t)):r[e].url.push(t.url)}
),a&&s?r.forEach(function(t){t.videoCodec&&i.push(t)}
):i=r,i=i.filter(function(t){var e=function(t){return MediaSource.isTypeSupported("audio/mp4;codecs="+t)}
,n=function(t){return MediaSource.isTypeSupported("video/mp4;codecs="+t)}
,r=t.audioCodec,i=t.videoCodec;return(!r||e(r))&&(!i||n(i))}
),i.length){for(e=i[0].bitrate,i.sort(function(t,e){return t.bitrate-e.bitrate}
),this._levels=i,n=0;n<i.length;n++)if(i[n].bitrate===e){this._firstLevel=n,h.logger.log("manifest loaded,"+i.length+" level(s) found,first bitrate:"+e);break}
l.trigger(c["default"].MANIFEST_PARSED,{levels:this._levels,firstLevel:this._firstLevel,stats:t.stats}
)}
else l.trigger(c["default"].ERROR,{type:p.ErrorTypes.MEDIA_ERROR,details:p.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:l.url,reason:"no level with compatible codecs found in manifest"}
)}}
,{key:"setLevelInternal",value:function(t){var e=this._levels;if(t>=0&&t<e.length){this.timer&&(clearTimeout(this.timer),this.timer=null),this._level=t,h.logger.log("switching to level "+t),this.hls.trigger(c["default"].LEVEL_SWITCH,{level:t}
);var n=e[t];if(void 0===n.details||n.details.live===!0){h.logger.log("(re)loading playlist for level "+t);var r=n.urlId;this.hls.trigger(c["default"].LEVEL_LOADING,{url:n.url[r],level:t,id:r}
)}}
else this.hls.trigger(c["default"].ERROR,{type:p.ErrorTypes.OTHER_ERROR,details:p.ErrorDetails.LEVEL_SWITCH_ERROR,level:t,fatal:!1,reason:"invalid level idx"}
)}}
,{key:"onError",value:function(t){if(!t.fatal){var e=t.details,n=this.hls,r=void 0,i=void 0,o=!1;switch(e){case p.ErrorDetails.FRAG_LOAD_ERROR:case p.ErrorDetails.FRAG_LOAD_TIMEOUT:case p.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case p.ErrorDetails.KEY_LOAD_ERROR:case p.ErrorDetails.KEY_LOAD_TIMEOUT:r=t.frag.level;break;case p.ErrorDetails.LEVEL_LOAD_ERROR:case p.ErrorDetails.LEVEL_LOAD_TIMEOUT:r=t.level,o=!0}
if(void 0!==r)if(i=this._levels[r],i.urlId<i.url.length-1)i.urlId++,i.details=void 0,h.logger.warn("level controller,"+e+" for level "+r+":switching to redundant stream id "+i.urlId);else{var a=this._manualLevel===-1&&r;a?(h.logger.warn("level controller,"+e+":emergency switch-down for next fragment"),n.abrController.nextAutoLevel=0):i&&i.details&&i.details.live?(h.logger.warn("level controller,"+e+" on live stream,discard"),o&&(this._level=void 0)):e!==p.ErrorDetails.FRAG_LOAD_ERROR&&e!==p.ErrorDetails.FRAG_LOAD_TIMEOUT&&(h.logger.error("cannot recover "+e+" error"),this._level=void 0,this.timer&&(clearTimeout(this.timer),this.timer=null),t.fatal=!0,n.trigger(c["default"].ERROR,t))}}}}
,{key:"onLevelLoaded",value:function(t){if(t.level===this._level){var e=t.details;if(e.live){var n=1e3*e.targetduration,r=this._levels[t.level],i=r.details;i&&e.endSN===i.endSN&&(n/=2,h.logger.log("same live playlist,reload twice faster")),n-=performance.now()-t.stats.trequest,n=Math.max(1e3,Math.round(n)),h.logger.log("live playlist,reload in "+n+" ms"),this.timer=setTimeout(this.ontick,n)}
else this.timer=null}}}
,{key:"tick",value:function(){var t=this._level;if(void 0!==t&&this.canload){var e=this._levels[t],n=e.urlId;this.hls.trigger(c["default"].LEVEL_LOADING,{url:e.url[n],level:t,id:n}
)}}}
,{key:"levels",get:function(){return this._levels}}
,{key:"level",get:function(){return this._level}
,set:function(t){var e=this._levels;e&&e.length>t&&(this._level===t&&void 0!==e[t].details||this.setLevelInternal(t))}}
,{key:"manualLevel",get:function(){return this._manualLevel}
,set:function(t){this._manualLevel=t,void 0===this._startLevel&&(this._startLevel=t),t!==-1&&(this.level=t)}}
,{key:"firstLevel",get:function(){return this._firstLevel}
,set:function(t){this._firstLevel=t}}
,{key:"startLevel",get:function(){return void 0===this._startLevel?this._firstLevel:this._startLevel}
,set:function(t){this._startLevel=t}}
,{key:"nextLoadLevel",get:function(){return this._manualLevel!==-1?this._manualLevel:this.hls.abrController.nextAutoLevel}
,set:function(t){this.level=t,this._manualLevel===-1&&(this.hls.abrController.nextAutoLevel=t)}}
]),e}
(d["default"]);e["default"]=y}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":s(e))&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+("undefined"==typeof e?"undefined":s(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(58),c=r(u),f=n(3),d=r(f),h=n(12),p=r(h),y=n(4),g=n(72),v=r(g),m=n(31),b=r(m),_=n(62),E=r(_),T=n(5),w={STOPPED:"STOPPED",STARTING:"STARTING",IDLE:"IDLE",PAUSED:"PAUSED",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_LEVEL:"WAITING_LEVEL",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR"}
,A=function(t){function e(t){i(this,e);var n=o(this,Object.getPrototypeOf(e).call(this,t,d["default"].MEDIA_ATTACHED,d["default"].MEDIA_DETACHING,d["default"].MANIFEST_LOADING,d["default"].MANIFEST_PARSED,d["default"].LEVEL_LOADED,d["default"].KEY_LOADED,d["default"].FRAG_LOADED,d["default"].FRAG_LOAD_EMERGENCY_ABORTED,d["default"].FRAG_PARSING_INIT_SEGMENT,d["default"].FRAG_PARSING_DATA,d["default"].FRAG_PARSED,d["default"].ERROR,d["default"].BUFFER_APPENDED,d["default"].BUFFER_FLUSHED));return n.config=t.config,n.audioCodecSwap=!1,n.ticks=0,n.ontick=n.tick.bind(n),n}
return a(e,t),l(e,[{key:"destroy",value:function(){this.stopLoad(),this.timer&&(clearInterval(this.timer),this.timer=null),p["default"].prototype.destroy.call(this),this.state=w.STOPPED}}
,{key:"startLoad",value:function(t){if(this.levels){var e=this.media,n=this.lastCurrentTime;this.stopLoad(),this.demuxer=new c["default"](this.hls),this.timer||(this.timer=setInterval(this.ontick,100)),this.level=-1,this.fragLoadError=0,e&&n>0?(y.logger.log("configure startPosition @"+n),this.lastPaused||(y.logger.log("resuming video"),e.play()),this.state=w.IDLE):(this.lastCurrentTime=this.startPosition?this.startPosition:t,this.state=w.STARTING),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}
else y.logger.warn("cannot start loading as manifest not parsed yet"),this.state=w.STOPPED}}
,{key:"stopLoad",value:function(){var t=this.fragCurrent;t&&(t.loader&&t.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=w.STOPPED}}
,{key:"tick",value:function(){this.ticks++,1===this.ticks&&(this.doTick(),this.ticks>1&&setTimeout(this.tick,1),this.ticks=0)}}
,{key:"doTick",value:function(){var t,e,n,r=this.hls,i=r.config,o=this.media,a=o&&o.seeking;switch(this.state){case w.ERROR:case w.PAUSED:break;case w.STARTING:var s=r.startLevel;s===-1&&(s=0,this.fragBitrateTest=!0),this.level=r.nextLoadLevel=s,this.state=w.WAITING_LEVEL,this.loadedmetadata=!1;break;case w.IDLE:if(!o&&(this.startFragRequested||!i.startFragPrefetch))break;t=this.loadedmetadata?o.currentTime:this.nextLoadPosition,e=r.nextLoadLevel;var l,u=b["default"].bufferInfo(o,t,i.maxBufferHole),c=u.len,f=u.end,h=this.fragPrevious;if(this.levels[e].hasOwnProperty("bitrate")?(l=Math.max(8*i.maxBufferSize/this.levels[e].bitrate,i.maxBufferLength),l=Math.min(l,i.maxMaxBufferLength)):l=i.maxBufferLength,c<l){if(r.nextLoadLevel=e,this.level=e,n=this.levels[e].details,"undefined"==typeof n||n.live&&this.levelLastLoaded!==e){this.state=w.WAITING_LEVEL;break}
var p=n.fragments,g=p.length,m=p[0].start,_=p[g-1].start+p[g-1].duration,E=void 0;if(n.live){var A=void 0!==i.liveMaxLatencyDuration?i.liveMaxLatencyDuration:i.liveMaxLatencyDurationCount*n.targetduration;if(f<Math.max(m,_-A)){var S=void 0!==i.liveSyncDuration?i.liveSyncDuration:i.liveSyncDurationCount*n.targetduration,k=m+Math.max(0,n.totalduration-S);y.logger.log("buffer end:"+f+" is located too far from the end of live sliding playlist,reset currentTime to:"+k.toFixed(3)),f=k,o&&o.readyState&&o.duration>k&&(o.currentTime=k)}
if(n.PTSKnown&&f>_)break;if(this.startFragRequested&&!n.PTSKnown){if(h){var L=h.sn+1;L>=n.startSN&&L<=n.endSN&&(E=p[L-n.startSN],y.logger.log("live playlist,switching playlist,load frag with next SN:"+E.sn))}
E||(E=p[Math.min(g-1,Math.round(g/2))],y.logger.log("live playlist,switching playlist,unknown,load middle frag:"+E.sn))}}
else f<m&&(E=p[0]);if(E||!function(){var t=i.maxFragLookUpTolerance;f<_?((f>_-t||a)&&(t=0),E=v["default"].search(p,function(e){return e.start+e.duration-t<=f?1:e.start-t>f?-1:0}
)):E=p[g-1]}
(),E){if(m=E.start,h&&E.level===h.level&&E.sn===h.sn){if(!(E.sn<n.endSN)){n.live||(this.hls.trigger(d["default"].BUFFER_EOS),a||(this.state=w.ENDED));break}
var O=h.deltaPTS,R=E.sn-n.startSN;if(O&&O>i.maxBufferHole&&h.dropped?(E=p[R-1],y.logger.warn("SN just loaded,with large PTS gap between audio and video,maybe frag is not starting with a keyframe ? load previous one to try to overcome this"),h.loadCounter--):(E=p[R+1],y.logger.log("SN just loaded,load next one:"+E.sn)),!E)break}
if(null!=E.decryptdata.uri&&null==E.decryptdata.key)y.logger.log("Loading key for "+E.sn+" of ["+n.startSN+","+n.endSN+"],level "+e),this.state=w.KEY_LOADING,r.trigger(d["default"].KEY_LOADING,{frag:E}
);else{if(y.logger.log("Loading "+E.sn+" of ["+n.startSN+","+n.endSN+"],level "+e+",currentTime:"+t+",bufferEnd:"+f.toFixed(3)),void 0!==this.fragLoadIdx?this.fragLoadIdx++:this.fragLoadIdx=0,E.loadCounter){E.loadCounter++;var C=i.fragLoadingLoopThreshold;if(E.loadCounter>C&&Math.abs(this.fragLoadIdx-E.loadIdx)<C)return void r.trigger(d["default"].ERROR,{type:T.ErrorTypes.MEDIA_ERROR,details:T.ErrorDetails.FRAG_LOOP_LOADING_ERROR,fatal:!1,frag:E}
)}
else E.loadCounter=1;E.loadIdx=this.fragLoadIdx,this.fragCurrent=E,this.startFragRequested=!0,E.autoLevel=r.autoLevelEnabled,r.trigger(d["default"].FRAG_LOADING,{frag:E}
),this.state=w.FRAG_LOADING}}}
break;case w.WAITING_LEVEL:e=this.levels[this.level],e&&e.details&&(this.state=w.IDLE);break;case w.FRAG_LOADING_WAITING_RETRY:var P=performance.now(),D=this.retryDate;(!D||P>=D||a)&&(y.logger.log("mediaController:retryDate reached,switch back to IDLE state"),this.state=w.IDLE);break;case w.STOPPED:case w.FRAG_LOADING:case w.PARSING:case w.PARSED:case w.ENDED:}
this._checkBuffer(),this._checkFragmentChanged()}}
,{key:"getBufferRange",value:function(t){var e,n,r=this.bufferRange;if(r)for(e=r.length-1;e>=0;e--)if(n=r[e],t>=n.start&&t<=n.end)return n;return null}}
,{key:"followingBufferRange",value:function(t){return t?this.getBufferRange(t.end+.5):null}}
,{key:"isBuffered",value:function(t){var e=this.media;if(e)for(var n=e.buffered,r=0;r<n.length;r++)if(t>=n.start(r)&&t<=n.end(r))return!0;return!1}}
,{key:"_checkFragmentChanged",value:function(){var t,e,n=this.media;if(n&&n.seeking===!1&&(e=n.currentTime,e>n.playbackRate*this.lastCurrentTime&&(this.lastCurrentTime=e),this.isBuffered(e)?t=this.getBufferRange(e):this.isBuffered(e+.1)&&(t=this.getBufferRange(e+.1)),t)){var r=t.frag;r!==this.fragPlaying&&(this.fragPlaying=r,this.hls.trigger(d["default"].FRAG_CHANGED,{frag:r}
))}}}
,{key:"immediateLevelSwitch",value:function(){if(y.logger.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var t=this.media,e=void 0;t?(e=t.paused,t.pause()):e=!0,this.previouslyPaused=e}
var n=this.fragCurrent;n&&n.loader&&n.loader.abort(),this.fragCurrent=null,this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,this.state=w.PAUSED,this.hls.trigger(d["default"].BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY}
)}}
,{key:"immediateLevelSwitchEnd",value:function(){this.immediateSwitch=!1;var t=this.media;t&&t.readyState&&(t.currentTime-=1e-4,this.previouslyPaused||t.play())}}
,{key:"nextLevelSwitch",value:function(){var t=this.media;if(t&&t.readyState){var e=void 0,n=void 0,r=void 0;if(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,n=this.getBufferRange(t.currentTime),n&&n.start>1&&(this.state=w.PAUSED,this.hls.trigger(d["default"].BUFFER_FLUSHING,{startOffset:0,endOffset:n.start-1}
)),t.paused)e=0;else{var i=this.hls.nextLoadLevel,o=this.levels[i],a=this.fragLastKbps;e=a&&this.fragCurrent?this.fragCurrent.duration*o.bitrate/(1e3*a)+1:0}
if(r=this.getBufferRange(t.currentTime+e),r&&(r=this.followingBufferRange(r))){var s=this.fragCurrent;s&&s.loader&&s.loader.abort(),this.fragCurrent=null,this.state=w.PAUSED,this.hls.trigger(d["default"].BUFFER_FLUSHING,{startOffset:r.start,endOffset:Number.POSITIVE_INFINITY}
)}}}}
,{key:"onMediaAttached",value:function(t){var e=this.media=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),e.addEventListener("seeking",this.onvseeking),e.addEventListener("seeked",this.onvseeked),e.addEventListener("ended",this.onvended);var n=this.config;this.levels&&n.autoStartLoad&&this.hls.startLoad(n.startPosition)}}
,{key:"onMediaDetaching",value:function(){var t=this.media;t&&t.ended&&(y.logger.log("MSE detaching and video ended,reset startPosition"),this.startPosition=this.lastCurrentTime=0);var e=this.levels;e&&e.forEach(function(t){t.details&&t.details.fragments.forEach(function(t){t.loadCounter=void 0}
)}
),t&&(t.removeEventListener("seeking",this.onvseeking),t.removeEventListener("seeked",this.onvseeked),t.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=null,this.loadedmetadata=!1,this.stopLoad()}}
,{key:"onMediaSeeking",value:function(){if(this.state===w.FRAG_LOADING){if(0===b["default"].bufferInfo(this.media,this.media.currentTime,this.config.maxBufferHole).len){y.logger.log("seeking outside of buffer while fragment load in progress,cancel fragment load");var t=this.fragCurrent;t&&(t.loader&&t.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.state=w.IDLE}}
else this.state===w.ENDED&&(this.state=w.IDLE);this.media&&(this.lastCurrentTime=this.media.currentTime),void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold),this.tick()}}
,{key:"onMediaSeeked",value:function(){this.tick()}}
,{key:"onMediaEnded",value:function(){y.logger.log("media ended"),this.startPosition=this.lastCurrentTime=0}}
,{key:"onManifestLoading",value:function(){y.logger.log("trigger BUFFER_RESET"),this.hls.trigger(d["default"].BUFFER_RESET),this.bufferRange=[],this.stalled=!1}}
,{key:"onManifestParsed",value:function(t){var e,n=!1,r=!1;t.levels.forEach(function(t){e=t.audioCodec,e&&(e.indexOf("mp4a.40.2")!==-1&&(n=!0),e.indexOf("mp4a.40.5")!==-1&&(r=!0))}
),this.audioCodecSwitch=n&&r,this.audioCodecSwitch&&y.logger.log("both AAC/HE-AAC audio found in levels;declaring level codec as HE-AAC"),this.levels=t.levels,this.startLevelLoaded=!1,this.startFragRequested=!1;var i=this.config;i.autoStartLoad&&this.hls.startLoad(i.startPosition)}}
,{key:"onLevelLoaded",value:function(t){var e=t.details,n=t.level,r=this.levels[n],i=e.totalduration,o=0;if(y.logger.log("level "+n+" loaded ["+e.startSN+","+e.endSN+"],duration:"+i),this.levelLastLoaded=n,e.live){var a=r.details;a?(E["default"].mergeDetails(a,e),o=e.fragments[0].start,e.PTSKnown?y.logger.log("live playlist sliding:"+o.toFixed(3)):y.logger.log("live playlist - outdated PTS,unknown sliding")):(e.PTSKnown=!1,y.logger.log("live playlist - first load,unknown sliding"))}
else e.PTSKnown=!1;if(r.details=e,this.hls.trigger(d["default"].LEVEL_UPDATED,{details:e,level:n}
),this.startFragRequested===!1){if(this.startPosition===-1){var s=e.startTimeOffset;if(isNaN(s))if(e.live){var l=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*e.targetduration;this.startPosition=Math.max(0,o+i-l)}
else this.startPosition=0;else y.logger.log("start time offset found in playlist,adjust startPosition to "+s),this.startPosition=s}
this.nextLoadPosition=this.startPosition}
this.state===w.WAITING_LEVEL&&(this.state=w.IDLE),this.tick()}}
,{key:"onKeyLoaded",value:function(){this.state===w.KEY_LOADING&&(this.state=w.IDLE,this.tick())}}
,{key:"onFragLoaded",value:function(t){var e=this.fragCurrent;if(this.state===w.FRAG_LOADING&&e&&t.frag.level===e.level&&t.frag.sn===e.sn)if(y.logger.log("Loaded  "+e.sn+" of level "+e.level),this.fragBitrateTest===!0)this.state=w.IDLE,this.fragBitrateTest=!1,this.startFragRequested=!1,t.stats.tparsed=t.stats.tbuffered=performance.now(),this.hls.trigger(d["default"].FRAG_BUFFERED,{stats:t.stats,frag:e}
);else{this.state=w.PARSING,this.stats=t.stats;var n=this.levels[this.level],r=n.details,i=r.totalduration,o=void 0===e.startDTS||isNaN(e.startDTS)?e.start:e.startDTS,a=e.level,s=e.sn,l=n.audioCodec||this.config.defaultAudioCodec;this.audioCodecSwap&&(y.logger.log("swapping playlist audio codec"),void 0===l&&(l=this.lastAudioCodec),l&&(l=l.indexOf("mp4a.40.5")!==-1?"mp4a.40.2":"mp4a.40.5")),this.pendingAppending=0,y.logger.log("Demuxing "+s+" of ["+r.startSN+","+r.endSN+"],level "+a+",cc "+e.cc);var u=this.demuxer;u&&u.push(t.payload,l,n.videoCodec,o,e.cc,a,s,i,e.decryptdata)}
this.fragLoadError=0}}
,{key:"onFragParsingInitSegment",value:function(t){if(this.state===w.PARSING){var e,n,r=t.tracks;if(n=r.audio){var i=this.levels[this.level].audioCodec,o=navigator.userAgent.toLowerCase();i&&this.audioCodecSwap&&(y.logger.log("swapping playlist audio codec"),i=i.indexOf("mp4a.40.5")!==-1?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==n.metadata.channelCount&&o.indexOf("firefox")===-1&&(i="mp4a.40.5"),o.indexOf("android")!==-1&&(i="mp4a.40.2",y.logger.log("Android:force audio codec to"+i)),n.levelCodec=i}
if(n=r.video,n&&(n.levelCodec=this.levels[this.level].videoCodec),t.unique){var a={codec:"",levelCodec:""}
;for(e in t.tracks)n=r[e],a.container=n.container,a.codec&&(a.codec+=",",a.levelCodec+=","),n.codec&&(a.codec+=n.codec),n.levelCodec&&(a.levelCodec+=n.levelCodec);r={audiovideo:a}}
this.hls.trigger(d["default"].BUFFER_CODECS,r);for(e in r){n=r[e],y.logger.log("track:"+e+",container:"+n.container+",codecs[level/parsed]=["+n.levelCodec+"/"+n.codec+"]");var s=n.initSegment;s&&(this.pendingAppending++,this.hls.trigger(d["default"].BUFFER_APPENDING,{type:e,data:s}
))}
this.tick()}}}
,{key:"onFragParsingData",value:function(t){var e=this;if(this.state===w.PARSING){this.tparse2=Date.now();var n=this.levels[this.level],r=this.fragCurrent;y.logger.log("parsed "+t.type+",PTS:["+t.startPTS.toFixed(3)+","+t.endPTS.toFixed(3)+"],DTS:["+t.startDTS.toFixed(3)+"/"+t.endDTS.toFixed(3)+"],nb:"+t.nb+",dropped:"+(t.dropped||0));var i=E["default"].updateFragPTSDTS(n.details,r.sn,t.startPTS,t.endPTS,t.startDTS,t.endDTS),o=this.hls;o.trigger(d["default"].LEVEL_PTS_UPDATED,{details:n.details,level:this.level,drift:i}
),"video"===t.type&&(r.dropped=t.dropped),[t.data1,t.data2].forEach(function(n){n&&(e.pendingAppending++,o.trigger(d["default"].BUFFER_APPENDING,{type:t.type,data:n}
))}
),this.nextLoadPosition=t.endPTS,this.bufferRange.push({type:t.type,start:t.startPTS,end:t.endPTS,frag:r}
),this.tick()}
else y.logger.warn("not in PARSING state but "+this.state+",ignoring FRAG_PARSING_DATA event")}}
,{key:"onFragParsed",value:function(){this.state===w.PARSING&&(this.stats.tparsed=performance.now(),this.state=w.PARSED,this._checkAppendedParsed())}}
,{key:"onBufferAppended",value:function(){switch(this.state){case w.PARSING:case w.PARSED:this.pendingAppending--,this._checkAppendedParsed()}}}
,{key:"_checkAppendedParsed",value:function(){if(this.state===w.PARSED&&0===this.pendingAppending){var t=this.fragCurrent,e=this.stats;t&&(this.fragPrevious=t,e.tbuffered=performance.now(),this.fragLastKbps=Math.round(8*e.length/(e.tbuffered-e.tfirst)),this.hls.trigger(d["default"].FRAG_BUFFERED,{stats:e,frag:t}
),y.logger.log("media buffered:"+this.timeRangesToString(this.media.buffered)),this.state=w.IDLE),this.tick()}}}
,{key:"onError",value:function(t){switch(t.details){case T.ErrorDetails.FRAG_LOAD_ERROR:case T.ErrorDetails.FRAG_LOAD_TIMEOUT:if(!t.fatal){var e=this.fragLoadError;if(e?e++:e=1,e<=this.config.fragLoadingMaxRetry){this.fragLoadError=e,t.frag.loadCounter=0;var n=Math.min(Math.pow(2,e-1)*this.config.fragLoadingRetryDelay,64e3);y.logger.warn("mediaController:frag loading failed,retry in "+n+" ms"),this.retryDate=performance.now()+n,this.state=w.FRAG_LOADING_WAITING_RETRY}
else y.logger.error("mediaController:"+t.details+" reaches max retry,redispatch as fatal ..."),t.fatal=!0,this.hls.trigger(d["default"].ERROR,t),this.state=w.ERROR}
break;case T.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case T.ErrorDetails.LEVEL_LOAD_ERROR:case T.ErrorDetails.LEVEL_LOAD_TIMEOUT:case T.ErrorDetails.KEY_LOAD_ERROR:case T.ErrorDetails.KEY_LOAD_TIMEOUT:this.state!==w.ERROR&&(this.state=t.fatal?w.ERROR:w.IDLE,y.logger.warn("mediaController:"+t.details+" while loading frag,switch to "+this.state+" state ..."));break;case T.ErrorDetails.BUFFER_FULL_ERROR:this.state!==w.PARSING&&this.state!==w.PARSED||(this.config.maxMaxBufferLength/=2,y.logger.warn("reduce max buffer length to "+this.config.maxMaxBufferLength+"s and switch to IDLE state"),this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,this.state=w.IDLE)}}}
,{key:"_checkBuffer",value:function(){var t=this.media;if(t&&t.readyState){var e=t.currentTime,n=t.buffered;if(!this.loadedmetadata&&n.length){this.loadedmetadata=!0;var r=this.startPosition;if(!e&&e!==r&&r){y.logger.log("target start position:"+r);var i=n.start(0),o=n.end(0);(r<i||r>o)&&(r=i,y.logger.log("target start position not buffered,seek to buffered.start(0) "+i)),y.logger.log("adjust currentTime from "+e+" to "+r),t.currentTime=r}}
else{var a=b["default"].bufferInfo(t,e,0),s=!(t.paused||t.ended||0===t.buffered.length),l=.4,u=e>t.playbackRate*this.lastCurrentTime;if(this.stalled&&u&&(this.stalled=!1,y.logger.log("playback not stuck anymore @"+e)),s&&a.len<=l&&(u?(l=0,this.seekHoleNudgeDuration=0):this.stalled?this.seekHoleNudgeDuration+=this.config.seekHoleNudgeDuration:(this.seekHoleNudgeDuration=0,y.logger.log("playback seems stuck @"+e),this.hls.trigger(d["default"].ERROR,{type:T.ErrorTypes.MEDIA_ERROR,details:T.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1}
),this.stalled=!0),a.len<=l)){var c=a.nextStart,f=c-e;if(c&&f<this.config.maxSeekHole&&f>0){y.logger.log("adjust currentTime from "+t.currentTime+" to next buffered @ "+c+" + nudge "+this.seekHoleNudgeDuration);var h=c+this.seekHoleNudgeDuration-t.currentTime;t.currentTime=c+this.seekHoleNudgeDuration,this.hls.trigger(d["default"].ERROR,{type:T.ErrorTypes.MEDIA_ERROR,details:T.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,hole:h}
)}}}}}}
,{key:"onFragLoadEmergencyAborted",value:function(){this.state=w.IDLE,this.tick()}}
,{key:"onBufferFlushed",value:function(){var t,e,n=[];for(e=0;e<this.bufferRange.length;e++)t=this.bufferRange[e],this.isBuffered((t.start+t.end)/2)&&n.push(t);this.bufferRange=n,this.immediateSwitch&&this.immediateLevelSwitchEnd(),this.state=w.IDLE,this.fragPrevious=null}}
,{key:"swapAudioCodec",value:function(){this.audioCodecSwap=!this.audioCodecSwap}}
,{key:"timeRangesToString",value:function(t){for(var e="",n=t.length,r=0;r<n;r++)e+="["+t.start(r)+","+t.end(r)+"]";return e}}
,{key:"currentLevel",get:function(){if(this.media){var t=this.getBufferRange(this.media.currentTime);if(t)return t.frag.level}
return-1}}
,{key:"nextBufferRange",get:function(){return this.media?this.followingBufferRange(this.getBufferRange(this.media.currentTime)):null}}
,{key:"nextLevel",get:function(){var t=this.nextBufferRange;return t?t.frag.level:-1}}
]),e}
(p["default"]);e["default"]=A}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":s(e))&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+("undefined"==typeof e?"undefined":s(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(3),c=r(u),f=n(12),d=r(f),h=n(73),p=r(h),y=function(t){function e(t){i(this,e);var n=o(this,Object.getPrototypeOf(e).call(this,t,c["default"].MEDIA_ATTACHING,c["default"].MEDIA_DETACHING,c["default"].FRAG_PARSING_USERDATA,c["default"].MANIFEST_LOADING,c["default"].FRAG_LOADED));return n.hls=t,n.config=t.config,n.config.enableCEA708Captions&&(n.cea708Interpreter=new p["default"]),n}
return a(e,t),l(e,[{key:"destroy",value:function(){d["default"].prototype.destroy.call(this)}}
,{key:"onMediaAttaching",value:function(t){var e=this.media=t.media;this.cea708Interpreter.attach(e)}}
,{key:"onMediaDetaching",value:function(){this.cea708Interpreter.detach()}}
,{key:"onManifestLoading",value:function(){this.lastPts=Number.POSITIVE_INFINITY}}
,{key:"onFragLoaded",value:function(t){var e=t.frag.start;e<=this.lastPts&&this.cea708Interpreter.clear(),this.lastPts=e}}
,{key:"onFragParsingUserdata",value:function(t){for(var e=0;e<t.samples.length;e++)this.cea708Interpreter.push(t.samples[e].pts,t.samples[e].bytes)}}
]),e}
(d["default"]);e["default"]=y}
,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),i=function(){function t(e){n(this,t),this._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],this._precompute();var r,i,o,a,s,l=this._tables[0][4],u=this._tables[1],c=e.length,f=1;if(4!==c&&6!==c&&8!==c)throw new Error("Invalid aes key size="+c);for(a=e.slice(0),s=[],this._key=[a,s],r=c;r<4*c+28;r++)o=a[r-1],(r%c===0||8===c&&r%c===4)&&(o=l[o>>>24]<<24^l[o>>16&255]<<16^l[o>>8&255]<<8^l[255&o],r%c===0&&(o=o<<8^o>>>24^f<<24,f=f<<1^283*(f>>7))),a[r]=a[r-c]^o;for(i=0;r;i++,r--)o=a[3&i?r:r-4],r<=4||i<4?s[i]=o:s[i]=u[0][l[o>>>24]]^u[1][l[o>>16&255]]^u[2][l[o>>8&255]]^u[3][l[255&o]]}
return r(t,[{key:"_precompute",value:function(){var t,e,n,r,i,o,a,s,l,u=this._tables[0],c=this._tables[1],f=u[4],d=c[4],h=[],p=[];for(t=0;t<256;t++)p[(h[t]=t<<1^283*(t>>7))^t]=t;for(e=n=0;!f[e];e^=r||1,n=p[n]||1)for(a=n^n<<1^n<<2^n<<3^n<<4,a=a>>8^255&a^99,f[e]=a,d[a]=e,o=h[i=h[r=h[e]]],l=16843009*o^65537*i^257*r^16843008*e,s=257*h[a]^16843008*a,t=0;t<4;t++)u[t][e]=s=s<<24^s>>>8,c[t][a]=l=l<<24^l>>>8;for(t=0;t<5;t++)u[t]=u[t].slice(0),c[t]=c[t].slice(0)}}
,{key:"decrypt",value:function(t,e,n,r,i,o){var a,s,l,u,c=this._key[1],f=t^c[0],d=r^c[1],h=n^c[2],p=e^c[3],y=c.length/4-2,g=4,v=this._tables[1],m=v[0],b=v[1],_=v[2],E=v[3],T=v[4];for(u=0;u<y;u++)a=m[f>>>24]^b[d>>16&255]^_[h>>8&255]^E[255&p]^c[g],s=m[d>>>24]^b[h>>16&255]^_[p>>8&255]^E[255&f]^c[g+1],l=m[h>>>24]^b[p>>16&255]^_[f>>8&255]^E[255&d]^c[g+2],p=m[p>>>24]^b[f>>16&255]^_[d>>8&255]^E[255&h]^c[g+3],g+=4,f=a,d=s,h=l;for(u=0;u<4;u++)i[(3&-u)+o]=T[f>>>24]<<24^T[d>>16&255]<<16^T[h>>8&255]<<8^T[255&p]^c[g++],a=f,f=d,d=h,h=p,p=a}}
]),t}
();e["default"]=i}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),a=n(53),s=r(a),l=function(){function t(e,n){i(this,t),this.key=e,this.iv=n}
return o(t,[{key:"ntoh",value:function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24}}
,{key:"doDecrypt",value:function(t,e,n){var r,i,o,a,l,u,c,f,d,h=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),p=new s["default"](Array.prototype.slice.call(e)),y=new Uint8Array(t.byteLength),g=new Int32Array(y.buffer);for(r=~~n[0],i=~~n[1],o=~~n[2],a=~~n[3],d=0;d<h.length;d+=4)l=~~this.ntoh(h[d]),u=~~this.ntoh(h[d+1]),c=~~this.ntoh(h[d+2]),f=~~this.ntoh(h[d+3]),p.decrypt(l,u,c,f,g,d),g[d]=this.ntoh(g[d]^r),g[d+1]=this.ntoh(g[d+1]^i),g[d+2]=this.ntoh(g[d+2]^o),g[d+3]=this.ntoh(g[d+3]^a),r=l,i=u,o=c,a=f;return y}}
,{key:"localDecrypt",value:function(t,e,n,r){var i=this.doDecrypt(t,e,n);r.set(i,t.byteOffset)}}
,{key:"decrypt",value:function(t){var e=32e3,n=new Int32Array(t),r=new Uint8Array(t.byteLength),i=0,o=this.key,a=this.iv;for(this.localDecrypt(n.subarray(i,i+e),o,a,r),i=e;i<n.length;i+=e)a=new Uint32Array([this.ntoh(n[i-4]),this.ntoh(n[i-3]),this.ntoh(n[i-2]),this.ntoh(n[i-1])]),this.localDecrypt(n.subarray(i,i+e),o,a,r);return r}}
]),t}
();e["default"]=l}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),a=n(54),s=r(a),l=n(5),u=n(4),c=function(){function t(e){i(this,t),this.hls=e;try{var n=window?window.crypto:crypto;this.subtle=n.subtle||n.webkitSubtle,this.disableWebCrypto=!this.subtle}
catch(r){this.disableWebCrypto=!0}}
return o(t,[{key:"destroy",value:function(){}}
,{key:"decrypt",value:function(t,e,n,r){this.disableWebCrypto&&this.hls.config.enableSoftwareAES?this.decryptBySoftware(t,e,n,r):this.decryptByWebCrypto(t,e,n,r)}}
,{key:"decryptByWebCrypto",value:function(t,e,n,r){var i=this;u.logger.log("decrypting by WebCrypto API"),this.subtle.importKey("raw",e,{name:"AES-CBC",length:128}
,!1,["decrypt"]).then(function(o){i.subtle.decrypt({name:"AES-CBC",iv:n.buffer}
,o,t).then(r)["catch"](function(o){i.onWebCryptoError(o,t,e,n,r)}
)}
)["catch"](function(o){i.onWebCryptoError(o,t,e,n,r)}
)}}
,{key:"decryptBySoftware",value:function(t,e,n,r){u.logger.log("decrypting by JavaScript Implementation");var i=new DataView(e.buffer),o=new Uint32Array([i.getUint32(0),i.getUint32(4),i.getUint32(8),i.getUint32(12)]);i=new DataView(n.buffer);var a=new Uint32Array([i.getUint32(0),i.getUint32(4),i.getUint32(8),i.getUint32(12)]),l=new s["default"](o,a);r(l.decrypt(t).buffer)}}
,{key:"onWebCryptoError",value:function(t,e,n,r,i){this.hls.config.enableSoftwareAES?(u.logger.log("disabling to use WebCrypto API"),this.disableWebCrypto=!0,this.decryptBySoftware(e,n,r,i)):(u.logger.error("decrypting error:"+t.message),this.hls.trigger(Event.ERROR,{type:l.ErrorTypes.MEDIA_ERROR,details:l.ErrorDetails.FRAG_DECRYPT_ERROR,fatal:!0,reason:t.message}
))}}
]),t}
();e["default"]=c}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),a=n(29),s=r(a),l=n(4),u=n(60),c=r(u),f=function(){function t(e,n){i(this,t),this.observer=e,this.remuxerClass=n,this.remuxer=new this.remuxerClass(e),this._aacTrack={container:"audio/adts",type:"audio",id:-1,sequenceNumber:0,samples:[],len:0}}
return o(t,[{key:"push",value:function(t,e,n,r,i,o,a,u){var f,d,h,p,y,g,v,m,b,_=this._aacTrack,E=new c["default"](t),T=90*E.timeStamp;for(y=E.length,m=t.length;y<m-1&&(255!==t[y]||240!==(240&t[y+1]));y++);for(_.audiosamplerate||(f=s["default"].getAudioConfig(this.observer,t,y,e),_.config=f.config,_.audiosamplerate=f.samplerate,_.channelCount=f.channelCount,_.codec=f.codec,_.duration=u,l.logger.log("parsed codec:"+_.codec+",rate:"+f.samplerate+",nb channel:"+f.channelCount)),p=0,h=9216e4/_.audiosamplerate;y+5<m&&(g=1&t[y+1]?7:9,d=(3&t[y+3])<<11|t[y+4]<<3|(224&t[y+5])>>>5,d-=g,d>0&&y+g+d<=m);)for(v=T+p*h,b={unit:t.subarray(y+g,y+g+d),pts:v,dts:v}
,_.samples.push(b),_.len+=d,y+=d+g,p++;y<m-1&&(255!==t[y]||240!==(240&t[y+1]));y++);this.remuxer.remux(this._aacTrack,{samples:[]}
,{samples:[{pts:T,dts:T,unit:E.payload}
]}
,{samples:[]}
,r)}}
,{key:"destroy",value:function(){}}
],[{key:"probe",value:function(t){var e,n,r=new c["default"](t);if(r.hasTimeStamp)for(e=r.length,n=t.length;e<n-1;e++)if(255===t[e]&&240===(240&t[e+1]))return!0;return!1}}
]),t}
();e["default"]=f}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
Object.defineProperty(e,"__esModule",{value:!0}
);var i=n(30),o=r(i),a=n(3),s=r(a),l=n(28),u=r(l),c=function(t){var e=new u["default"];e.trigger=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e.emit.apply(e,[t,t].concat(r))}
,e.off=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e.removeListener.apply(e,[t].concat(r))}
,t.addEventListener("message",function(n){var r=n.data;switch(r.cmd){case"init":t.demuxer=new o["default"](e,r.typeSupported);break;case"demux":t.demuxer.push(new Uint8Array(r.data),r.audioCodec,r.videoCodec,r.timeOffset,r.cc,r.level,r.sn,r.duration)}}
),e.on(s["default"].FRAG_PARSING_INIT_SEGMENT,function(e,n){t.postMessage({event:e,tracks:n.tracks,unique:n.unique}
)}
),e.on(s["default"].FRAG_PARSING_DATA,function(e,n){var r={event:e,type:n.type,startPTS:n.startPTS,endPTS:n.endPTS,startDTS:n.startDTS,endDTS:n.endDTS,data1:n.data1.buffer,data2:n.data2.buffer,nb:n.nb,dropped:n.dropped}
;t.postMessage(r,[r.data1,r.data2])}
),e.on(s["default"].FRAG_PARSED,function(e){t.postMessage({event:e}
)}
),e.on(s["default"].ERROR,function(e,n){t.postMessage({event:e,data:n}
)}
),e.on(s["default"].FRAG_PARSING_METADATA,function(e,n){var r={event:e,samples:n.samples}
;t.postMessage(r)}
),e.on(s["default"].FRAG_PARSING_USERDATA,function(e,n){var r={event:e,samples:n.samples}
;t.postMessage(r)}
)}
;e["default"]=c}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),a=n(3),s=r(a),l=n(30),u=r(l),c=n(57),f=r(c),d=n(4),h=n(55),p=r(h),y=function(){function t(e){i(this,t),this.hls=e;var r={mp4:MediaSource.isTypeSupported("video/mp4"),mp2t:e.config.enableMP2TPassThrough&&MediaSource.isTypeSupported("video/mp2t")}
;if(e.config.enableWorker&&"undefined"!=typeof Worker){d.logger.log("demuxing in webworker");try{var o=n(83);this.w=o(f["default"]),this.onwmsg=this.onWorkerMessage.bind(this),this.w.addEventListener("message",this.onwmsg),this.w.postMessage({cmd:"init",typeSupported:r}
)}
catch(a){d.logger.error("error while initializing DemuxerWorker,fallback on DemuxerInline"),this.demuxer=new u["default"](e,r)}}
else this.demuxer=new u["default"](e,r);this.demuxInitialized=!0}
return o(t,[{key:"destroy",value:function(){this.w?(this.w.removeEventListener("message",this.onwmsg),this.w.terminate(),this.w=null):(this.demuxer.destroy(),this.demuxer=null),this.decrypter&&(this.decrypter.destroy(),this.decrypter=null)}}
,{key:"pushDecrypted",value:function(t,e,n,r,i,o,a,s){this.w?this.w.postMessage({cmd:"demux",data:t,audioCodec:e,videoCodec:n,timeOffset:r,cc:i,level:o,sn:a,duration:s}
,[t]):this.demuxer.push(new Uint8Array(t),e,n,r,i,o,a,s)}}
,{key:"push",value:function(t,e,n,r,i,o,a,s,l){if(t.byteLength>0&&null!=l&&null!=l.key&&"AES-128"===l.method){null==this.decrypter&&(this.decrypter=new p["default"](this.hls));var u=this;this.decrypter.decrypt(t,l.key,l.iv,function(t){u.pushDecrypted(t,e,n,r,i,o,a,s)}
)}
else this.pushDecrypted(t,e,n,r,i,o,a,s)}}
,{key:"onWorkerMessage",value:function(t){var e=t.data;switch(e.event){case s["default"].FRAG_PARSING_INIT_SEGMENT:var n={}
;n.tracks=e.tracks,n.unique=e.unique,this.hls.trigger(s["default"].FRAG_PARSING_INIT_SEGMENT,n);break;case s["default"].FRAG_PARSING_DATA:this.hls.trigger(s["default"].FRAG_PARSING_DATA,{data1:new Uint8Array(e.data1),data2:new Uint8Array(e.data2),startPTS:e.startPTS,endPTS:e.endPTS,startDTS:e.startDTS,endDTS:e.endDTS,type:e.type,nb:e.nb,dropped:e.dropped}
);break;case s["default"].FRAG_PARSING_METADATA:this.hls.trigger(s["default"].FRAG_PARSING_METADATA,{samples:e.samples}
);break;case s["default"].FRAG_PARSING_USERDATA:this.hls.trigger(s["default"].FRAG_PARSING_USERDATA,{samples:e.samples}
);break;default:this.hls.trigger(e.event,e.data)}}}
]),t}
();e["default"]=y}
,function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),o=n(4),a=function(){function t(e){r(this,t),this.data=e,this.bytesAvailable=this.data.byteLength,this.word=0,this.bitsAvailable=0}
return i(t,[{key:"loadWord",value:function(){var t=this.data.byteLength-this.bytesAvailable,e=new Uint8Array(4),n=Math.min(4,this.bytesAvailable);if(0===n)throw new Error("no bytes available");e.set(this.data.subarray(t,t+n)),this.word=new DataView(e.buffer).getUint32(0),this.bitsAvailable=8*n,this.bytesAvailable-=n}}
,{key:"skipBits",value:function(t){var e;this.bitsAvailable>t?(this.word<<=t,this.bitsAvailable-=t):(t-=this.bitsAvailable,e=t>>3,t-=e>>3,this.bytesAvailable-=e,this.loadWord(),this.word<<=t,this.bitsAvailable-=t)}}
,{key:"readBits",value:function(t){var e=Math.min(this.bitsAvailable,t),n=this.word>>>32-e;return t>32&&o.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=e,this.bitsAvailable>0?this.word<<=e:this.bytesAvailable>0&&this.loadWord(),e=t-e,e>0?n<<e|this.readBits(e):n}}
,{key:"skipLZ",value:function(){var t;for(t=0;t<this.bitsAvailable;++t)if(0!==(this.word&2147483648>>>t))return this.word<<=t,this.bitsAvailable-=t,t;return this.loadWord(),t+this.skipLZ()}}
,{key:"skipUEG",value:function(){this.skipBits(1+this.skipLZ())}}
,{key:"skipEG",value:function(){this.skipBits(1+this.skipLZ())}}
,{key:"readUEG",value:function(){var t=this.skipLZ();return this.readBits(t+1)-1}}
,{key:"readEG",value:function(){var t=this.readUEG();return 1&t?1+t>>>1:-1*(t>>>1)}}
,{key:"readBoolean",value:function(){return 1===this.readBits(1)}}
,{key:"readUByte",value:function(){return this.readBits(8)}}
,{key:"readUShort",value:function(){return this.readBits(16)}}
,{key:"readUInt",value:function(){return this.readBits(32)}}
,{key:"skipScalingList",value:function(t){var e,n,r=8,i=8;for(e=0;e<t;e++)0!==i&&(n=this.readEG(),i=(r+n+256)%256),r=0===i?r:i}}
,{key:"readSPS",value:function(){var t,e,n,r,i,o,a,s,l,u=0,c=0,f=0,d=0,h=1;if(this.readUByte(),t=this.readUByte(),e=this.readBits(5),this.skipBits(3),n=this.readUByte(),this.skipUEG(),100===t||110===t||122===t||244===t||44===t||83===t||86===t||118===t||128===t){var p=this.readUEG();if(3===p&&this.skipBits(1),this.skipUEG(),this.skipUEG(),this.skipBits(1),this.readBoolean())for(s=3!==p?8:12,l=0;l<s;l++)this.readBoolean()&&(l<6?this.skipScalingList(16):this.skipScalingList(64))}
this.skipUEG();var y=this.readUEG();if(0===y)this.readUEG();else if(1===y)for(this.skipBits(1),this.skipEG(),this.skipEG(),r=this.readUEG(),l=0;l<r;l++)this.skipEG();if(this.skipUEG(),this.skipBits(1),i=this.readUEG(),o=this.readUEG(),a=this.readBits(1),0===a&&this.skipBits(1),this.skipBits(1),this.readBoolean()&&(u=this.readUEG(),c=this.readUEG(),f=this.readUEG(),d=this.readUEG()),this.readBoolean()&&this.readBoolean()){var g=void 0,v=this.readUByte();switch(v){case 1:g=[1,1];break;case 2:g=[12,11];break;case 3:g=[10,11];break;case 4:g=[16,11];break;case 5:g=[40,33];break;case 6:g=[24,11];break;case 7:g=[20,11];break;case 8:g=[32,11];break;case 9:g=[80,33];break;case 10:g=[18,11];break;case 11:g=[15,11];break;case 12:g=[64,33];break;case 13:g=[160,99];break;case 14:g=[4,3];break;case 15:g=[3,2];break;case 16:g=[2,1];break;case 255:g=[this.readUByte()<<8|this.readUByte(),this.readUByte()<<8|this.readUByte()]}
g&&(h=g[0]/g[1])}
return{width:Math.ceil((16*(i+1)-2*u-2*c)*h),height:(2-a)*(o+1)*16-(a?2:4)*(f+d)}}}
,{key:"readSliceType",value:function(){return this.readUByte(),this.readUEG(),this.readUEG()}}
]),t}
();e["default"]=a}
,function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),o=n(4),a=function(){function t(e){r(this,t),this._hasTimeStamp=!1;for(var n,i,a,s,l,u,c,f,d=0;;)if(c=this.readUTF(e,d,3),d+=3,"ID3"===c)d+=3,n=127&e[d++],i=127&e[d++],a=127&e[d++],s=127&e[d++],l=(n<<21)+(i<<14)+(a<<7)+s,u=d+l,this._parseID3Frames(e,d,u),d=u;else{if("3DI"!==c)return d-=3,f=d,void(f&&(this.hasTimeStamp||o.logger.warn("ID3 tag found,but no timestamp"),this._length=f,this._payload=e.subarray(0,f)));d+=7,o.logger.log("3DI footer found,end:"+d)}}
return i(t,[{key:"readUTF",value:function(t,e,n){var r="",i=e,o=e+n;do r+=String.fromCharCode(t[i++]);while(i<o);return r}}
,{key:"_parseID3Frames",value:function(t,e,n){for(var r,i,a,s,l;e+8<=n;)switch(r=this.readUTF(t,e,4),e+=4,i=t[e++]<<24+t[e++]<<16+t[e++]<<8+t[e++],s=t[e++]<<8+t[e++],a=e,r){case"PRIV":if("com.apple.streaming.transportStreamTimestamp"===this.readUTF(t,e,44)){e+=44,e+=4;var u=1&t[e++];this._hasTimeStamp=!0,l=((t[e++]<<23)+(t[e++]<<15)+(t[e++]<<7)+t[e++])/45,u&&(l+=47721858.84),l=Math.round(l),o.logger.trace("ID3 timestamp found:"+l),this._timeStamp=l}}}}
,{key:"hasTimeStamp",get:function(){return this._hasTimeStamp}}
,{key:"timeStamp",get:function(){return this._timeStamp}}
,{key:"length",get:function(){return this._length}}
,{key:"payload",get:function(){return this._payload}}
]),t}
();e["default"]=a}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),a=n(29),s=r(a),l=n(3),u=r(l),c=n(59),f=r(c),d=n(4),h=n(5),p=function(){function t(e,n){i(this,t),this.observer=e,this.remuxerClass=n,this.lastCC=0,this.remuxer=new this.remuxerClass(e)}
return o(t,[{key:"switchLevel",value:function(){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack={container:"video/mp2t",type:"video",id:-1,sequenceNumber:0,samples:[],len:0,nbNalu:0,dropped:0}
,this._aacTrack={container:"video/mp2t",type:"audio",id:-1,sequenceNumber:0,samples:[],len:0}
,this._id3Track={type:"id3",id:-1,sequenceNumber:0,samples:[],len:0}
,this._txtTrack={type:"text",id:-1,sequenceNumber:0,samples:[],len:0}
,this.aacOverFlow=null,this.aacLastPTS=null,this.avcNaluState=0,this.remuxer.switchLevel()}}
,{key:"insertDiscontinuity",value:function(){this.switchLevel(),this.remuxer.insertDiscontinuity()}}
,{key:"push",value:function(t,e,n,r,i,o,a,s){var l,c,f,p,y,g,v,m,b=t.length,_=this.remuxer.passthrough,E=!1;this.audioCodec=e,this.videoCodec=n,this.timeOffset=r,this._duration=s,this.contiguous=!1,i!==this.lastCC&&(d.logger.log("discontinuity detected"),this.insertDiscontinuity(),this.lastCC=i),o!==this.lastLevel?(d.logger.log("level switch detected"),this.switchLevel(),this.lastLevel=o):a===this.lastSN+1&&(this.contiguous=!0),this.lastSN=a;var T=this.pmtParsed,w=this._avcTrack.id,A=this._aacTrack.id,S=this._id3Track.id;for(b-=b%188,p=0;p<b;p+=188)if(71===t[p]){if(y=!!(64&t[p+1]),g=((31&t[p+1])<<8)+t[p+2],v=(48&t[p+3])>>4,v>1){if(m=p+5+t[p+4],m===p+188)continue}
else m=p+4;if(T)if(g===w){if(y){if(l&&(this._parseAVCPES(this._parsePES(l)),_&&this._avcTrack.codec&&(A===-1||this._aacTrack.codec)))return void this.remux(t);l={data:[],size:0}}
l&&(l.data.push(t.subarray(m,p+188)),l.size+=p+188-m)}
else if(g===A){if(y){if(c&&(this._parseAACPES(this._parsePES(c)),_&&this._aacTrack.codec&&(w===-1||this._avcTrack.codec)))return void this.remux(t);c={data:[],size:0}}
c&&(c.data.push(t.subarray(m,p+188)),c.size+=p+188-m)}
else g===S&&(y&&(f&&this._parseID3PES(this._parsePES(f)),f={data:[],size:0}
),f&&(f.data.push(t.subarray(m,p+188)),f.size+=p+188-m));else y&&(m+=t[m]+1),0===g?this._parsePAT(t,m):g===this._pmtId?(this._parsePMT(t,m),T=this.pmtParsed=!0,w=this._avcTrack.id,A=this._aacTrack.id,S=this._id3Track.id,E&&(d.logger.log("reparse from beginning"),E=!1,p=-188)):(d.logger.log("unknown PID found before PAT/PMT"),E=!0)}
else this.observer.trigger(u["default"].ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"}
);l&&this._parseAVCPES(this._parsePES(l)),c&&this._parseAACPES(this._parsePES(c)),f&&this._parseID3PES(this._parsePES(f)),this.remux(null)}}
,{key:"remux",value:function(t){this.remuxer.remux(this._aacTrack,this._avcTrack,this._id3Track,this._txtTrack,this.timeOffset,this.contiguous,t)}}
,{key:"destroy",value:function(){this.switchLevel(),this._initPTS=this._initDTS=void 0,this._duration=0}}
,{key:"_parsePAT",value:function(t,e){this._pmtId=(31&t[e+10])<<8|t[e+11]}}
,{key:"_parsePMT",value:function(t,e){var n,r,i,o;for(n=(15&t[e+1])<<8|t[e+2],r=e+3+n-4,i=(15&t[e+10])<<8|t[e+11],e+=12+i;e<r;){switch(o=(31&t[e+1])<<8|t[e+2],t[e]){case 15:this._aacTrack.id=o;break;case 21:this._id3Track.id=o;break;case 27:this._avcTrack.id=o;break;default:d.logger.log("unkown stream type:"+t[e])}
e+=((15&t[e+3])<<8|t[e+4])+5}}}
,{key:"_parsePES",value:function(t){var e,n,r,i,o,a,s,l,u,c=0,f=t.data;if(e=f[0],r=(e[0]<<16)+(e[1]<<8)+e[2],1===r){for(i=(e[4]<<8)+e[5],n=e[7],192&n&&(s=536870912*(14&e[9])+4194304*(255&e[10])+16384*(254&e[11])+128*(255&e[12])+(254&e[13])/2,s>4294967295&&(s-=8589934592),64&n?(l=536870912*(14&e[14])+4194304*(255&e[15])+16384*(254&e[16])+128*(255&e[17])+(254&e[18])/2,l>4294967295&&(l-=8589934592)):l=s),o=e[8],u=o+9,t.size-=u,a=new Uint8Array(t.size);f.length;){e=f.shift();var d=e.byteLength;if(u){if(u>d){u-=d;continue}
e=e.subarray(u),d-=u,u=0}
a.set(e,c),c+=d}
return{data:a,pts:s,dts:l,len:i}}
return null}}
,{key:"_parseAVCPES",value:function(t){var e,n,r,i,o=this,a=this._avcTrack,s=a.samples,l=this._parseAVCNALu(t.data),u=[],c=!1,h=!1,p=0;if(0===l.length&&s.length>0){var y=s[s.length-1],g=y.units.units[y.units.units.length-1],v=new Uint8Array(g.data.byteLength+t.data.byteLength);v.set(g.data,0),v.set(t.data,g.data.byteLength),g.data=v,y.units.length+=t.data.byteLength,a.len+=t.data.byteLength}
t.data=null;var m="",b=function(){u.length&&(h===!0||a.sps&&(s.length||this.contiguous)?(n={units:{units:u,length:p}
,pts:t.pts,dts:t.dts,key:h}
,s.push(n),a.len+=p,a.nbNalu+=u.length):a.dropped++,u=[],p=0)}
.bind(this);l.forEach(function(n){switch(n.type){case 1:r=!0,c&&(m+="NDR ");break;case 5:r=!0,c&&(m+="IDR "),h=!0;break;case 6:r=!0,c&&(m+="SEI "),e=new f["default"](n.data),e.readUByte();var s=e.readUByte();if(4===s){var l=0;do l=e.readUByte();while(255===l);var d=e.readUByte();if(181===d){var y=e.readUShort();if(49===y){var g=e.readUInt();if(1195456820===g){var v=e.readUByte();if(3===v){var _=e.readUByte(),E=e.readUByte(),T=31&_,w=[_,E];for(i=0;i<T;i++)w.push(e.readUByte()),w.push(e.readUByte()),w.push(e.readUByte());o._txtTrack.samples.push({type:3,pts:t.pts,bytes:w}
)}}}}}
break;case 7:if(r=!0,c&&(m+="SPS "),!a.sps){e=new f["default"](n.data);var A=e.readSPS();a.width=A.width,a.height=A.height,a.sps=[n.data],a.duration=o._duration;var S=n.data.subarray(1,4),k="avc1.";for(i=0;i<3;i++){var L=S[i].toString(16);L.length<2&&(L="0"+L),k+=L}
a.codec=k}
break;case 8:r=!0,c&&(m+="PPS "),a.pps||(a.pps=[n.data]);break;case 9:r=!1,c&&(m+="AUD "),b();break;default:r=!1,m+="unknown NAL "+n.type+" "}
r&&(u.push(n),p+=n.data.byteLength)}
),(c||m.length)&&d.logger.log(m),b()}}
,{key:"_parseAVCNALu",value:function(t){for(var e,n,r,i,o,a,s=0,l=t.byteLength,u=this.avcNaluState,c=[];s<l;)switch(e=t[s++],u){case 0:0===e&&(u=1);break;case 1:u=0===e?2:0;break;case 2:case 3:if(0===e)u=3;else if(1===e&&s<l){if(i=31&t[s],o)r={data:t.subarray(o,s-u-1),type:a}
,c.push(r);else{var f=this.avcNaluState;if(f&&s<=4-f){var d=this._avcTrack,h=d.samples;if(h.length){var p=h[h.length-1],y=p.units.units,g=y[y.length-1];g.state&&(g.data=g.data.subarray(0,g.data.byteLength-f),p.units.length-=f,d.len-=f)}}
if(n=s-u-1,n>0){var v=this._avcTrack,m=v.samples;if(m.length){var b=m[m.length-1],_=b.units.units,E=_[_.length-1],T=new Uint8Array(E.data.byteLength+n);T.set(E.data,0),T.set(t.subarray(0,n),E.data.byteLength),E.data=T,b.units.length+=n,v.len+=n}}}
o=s,a=i,u=0}
else u=0}
return o&&(r={data:t.subarray(o,l),type:a,state:u}
,c.push(r),this.avcNaluState=u),c}}
,{key:"_parseAACPES",value:function(t){var e,n,r,i,o,a,l,c,f,p=this._aacTrack,y=t.data,g=t.pts,v=0,m=this._duration,b=this.audioCodec,_=this.aacOverFlow,E=this.aacLastPTS;if(_){var T=new Uint8Array(_.byteLength+y.byteLength);T.set(_,0),T.set(y,_.byteLength),y=T}
for(o=v,c=y.length;o<c-1&&(255!==y[o]||240!==(240&y[o+1]));o++);if(o){var w,A;if(o<c-1?(w="AAC PES did not start with ADTS header,offset:"+o,A=!1):(w="no ADTS header found in AAC PES",A=!0),this.observer.trigger(u["default"].ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.FRAG_PARSING_ERROR,fatal:A,reason:w}
),A)return}
if(p.audiosamplerate||(e=s["default"].getAudioConfig(this.observer,y,o,b),p.config=e.config,p.audiosamplerate=e.samplerate,p.channelCount=e.channelCount,p.codec=e.codec,p.duration=m,d.logger.log("parsed codec:"+p.codec+",rate:"+e.samplerate+",nb channel:"+e.channelCount)),i=0,r=9216e4/p.audiosamplerate,_&&E){var S=E+r;Math.abs(S-g)>1&&(d.logger.log("AAC:align PTS for overlapping frames by "+Math.round((S-g)/90)),g=S)}
for(;o+5<c&&(a=1&y[o+1]?7:9,n=(3&y[o+3])<<11|y[o+4]<<3|(224&y[o+5])>>>5,n-=a,n>0&&o+a+n<=c);)for(l=g+i*r,f={unit:y.subarray(o+a,o+a+n),pts:l,dts:l}
,p.samples.push(f),p.len+=n,o+=n+a,i++;o<c-1&&(255!==y[o]||240!==(240&y[o+1]));o++);_=o<c?y.subarray(o,c):null,this.aacOverFlow=_,this.aacLastPTS=l}}
,{key:"_parseID3PES",value:function(t){this._id3Track.samples.push(t)}}
],[{key:"probe",value:function(t){return t.length>=564&&71===t[0]&&71===t[188]&&71===t[376]}}
]),t}
();e["default"]=p}
,function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),o=n(4),a=function(){function t(){r(this,t)}
return i(t,null,[{key:"mergeDetails",value:function(e,n){var r,i=Math.max(e.startSN,n.startSN)-n.startSN,a=Math.min(e.endSN,n.endSN)-n.startSN,s=n.startSN-e.startSN,l=e.fragments,u=n.fragments,c=0;if(a<i)return void(n.PTSKnown=!1);for(var f=i;f<=a;f++){var d=l[s+f],h=u[f];h&&d&&(c=d.cc-h.cc,isNaN(d.startPTS)||(h.start=h.startPTS=d.startPTS,h.endPTS=d.endPTS,h.duration=d.duration,r=h))}
if(c)for(o.logger.log("discontinuity sliding from playlist,take drift into account"),f=0;f<u.length;f++)u[f].cc+=c;if(r)t.updateFragPTSDTS(n,r.sn,r.startPTS,r.endPTS,r.startDTS,r.endDTS);else if(s>=0&&s<l.length){var p=l[s].start;for(f=0;f<u.length;f++)u[f].start+=p}
n.PTSKnown=e.PTSKnown}}
,{key:"updateFragPTSDTS",value:function(e,n,r,i,o,a){var s,l,u,c;if(n<e.startSN||n>e.endSN)return 0;if(s=n-e.startSN,l=e.fragments,u=l[s],!isNaN(u.startPTS)){var f=Math.abs(u.startPTS-r);isNaN(u.deltaPTS)?u.deltaPTS=f:u.deltaPTS=Math.max(f,u.deltaPTS),r=Math.min(r,u.startPTS),i=Math.max(i,u.endPTS),o=Math.min(o,u.startDTS),a=Math.max(a,u.endDTS)}
var d=r-u.start;for(u.start=u.startPTS=r,u.endPTS=i,u.startDTS=o,u.endDTS=a,u.duration=i-r,c=s;c>0;c--)t.updatePTS(l,c,c-1);for(c=s;c<l.length-1;c++)t.updatePTS(l,c,c+1);return e.PTSKnown=!0,d}}
,{key:"updatePTS",value:function(t,e,n){var r=t[e],i=t[n],a=i.startPTS;isNaN(a)?n>e?i.start=r.start+r.duration:i.start=r.start-i.duration:n>e?(r.duration=a-r.start,r.duration<0&&o.logger.error("negative duration computed for frag "+r.sn+",level "+r.level+",there should be some duration drift between playlist and fragment!")):(i.duration=r.start-a,i.duration<0&&o.logger.error("negative duration computed for frag "+i.sn+",level "+i.level+",there should be some duration drift between playlist and fragment!"))}}
]),t}
();e["default"]=a}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),a=n(3),s=r(a),l=n(5),u=n(67),c=r(u),f=n(65),d=r(f),h=n(46),p=r(h),y=n(47),g=r(y),v=n(48),m=r(v),b=n(51),_=r(b),E=n(50),T=r(E),w=n(52),A=r(w),S=n(4),k=n(76),L=r(k),O=n(28),R=r(O),C=n(66),P=r(C),D=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}
:arguments[0];i(this,t);var n=t.DefaultConfig;if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config:don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for(var r in n)r in e||(e[r]=n[r]);if(void 0!==e.liveMaxLatencyDurationCount&&e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount)throw new Error('Illegal hls.js config:"liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==e.liveMaxLatencyDuration&&(e.liveMaxLatencyDuration<=e.liveSyncDuration||void 0===e.liveSyncDuration))throw new Error('Illegal hls.js config:"liveMaxLatencyDuration" must be gt "liveSyncDuration"');(0,S.enableLogs)(e.debug),this.config=e;var o=this.observer=new R["default"];o.trigger=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];o.emit.apply(o,[t,t].concat(n))}
,o.off=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];o.removeListener.apply(o,[t].concat(n))}
,this.on=o.on.bind(o),this.off=o.off.bind(o),this.trigger=o.trigger.bind(o),this.playlistLoader=new c["default"](this),this.fragmentLoader=new d["default"](this),this.levelController=new T["default"](this),this.abrController=new e.abrController(this),this.bufferController=new e.bufferController(this),this.capLevelController=new e.capLevelController(this),this.streamController=new e.streamController(this),this.timelineController=new e.timelineController(this),this.keyLoader=new P["default"](this)}
return o(t,null,[{key:"isSupported",value:function(){return window.MediaSource&&"function"==typeof window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.42E01E,mp4a.40.2"')}}
,{key:"Events",get:function(){return s["default"]}}
,{key:"ErrorTypes",get:function(){return l.ErrorTypes}}
,{key:"ErrorDetails",get:function(){return l.ErrorDetails}}
,{key:"DefaultConfig",get:function(){return t.defaultConfig||(t.defaultConfig={autoStartLoad:!0,startPosition:-1,debug:!1,capLevelToPlayerSize:!1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,maxSeekHole:2,seekHoleNudgeDuration:.01,stalledInBufferedNudgeThreshold:10,maxFragLookUpTolerance:.2,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingLoopThreshold:3,startFragPrefetch:!1,appendErrorMaxRetry:3,loader:L["default"],fLoader:void 0,pLoader:void 0,abrController:p["default"],bufferController:g["default"],capLevelController:m["default"],streamController:_["default"],timelineController:A["default"],enableCEA708Captions:!0,enableMP2TPassThrough:!1,abrEwmaFastLive:5,abrEwmaSlowLive:9,abrEwmaFastVoD:4,abrEwmaSlowVoD:15,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.8,abrBandWidthUpFactor:.7}
),t.defaultConfig}
,set:function(e){t.defaultConfig=e}}
]),o(t,[{key:"destroy",value:function(){S.logger.log("destroy"),this.trigger(s["default"].DESTROYING),this.detachMedia(),this.playlistLoader.destroy(),this.fragmentLoader.destroy(),this.levelController.destroy(),this.abrController.destroy(),this.bufferController.destroy(),this.capLevelController.destroy(),this.streamController.destroy(),this.timelineController.destroy(),this.keyLoader.destroy(),this.url=null,this.observer.removeAllListeners()}}
,{key:"attachMedia",value:function(t){S.logger.log("attachMedia"),this.media=t,this.trigger(s["default"].MEDIA_ATTACHING,{media:t}
)}}
,{key:"detachMedia",value:function(){S.logger.log("detachMedia"),this.trigger(s["default"].MEDIA_DETACHING),this.media=null}}
,{key:"loadSource",value:function(t){S.logger.log("loadSource:"+t),this.url=t,this.trigger(s["default"].MANIFEST_LOADING,{url:t}
)}}
,{key:"startLoad",value:function(){var t=arguments.length<=0||void 0===arguments[0]?-1:arguments[0];S.logger.log("startLoad"),this.levelController.startLoad(),this.streamController.startLoad(t)}}
,{key:"stopLoad",value:function(){S.logger.log("stopLoad"),this.levelController.stopLoad(),this.streamController.stopLoad()}}
,{key:"swapAudioCodec",value:function(){S.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()}}
,{key:"recoverMediaError",value:function(){S.logger.log("recoverMediaError");var t=this.media;this.detachMedia(),this.attachMedia(t)}}
,{key:"levels",get:function(){return this.levelController.levels}}
,{key:"currentLevel",get:function(){return this.streamController.currentLevel}
,set:function(t){S.logger.log("set currentLevel:"+t),this.loadLevel=t,this.streamController.immediateLevelSwitch()}}
,{key:"nextLevel",get:function(){return this.streamController.nextLevel}
,set:function(t){S.logger.log("set nextLevel:"+t),this.levelController.manualLevel=t,this.streamController.nextLevelSwitch()}}
,{key:"loadLevel",get:function(){return this.levelController.level}
,set:function(t){S.logger.log("set loadLevel:"+t),this.levelController.manualLevel=t}}
,{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel}
,set:function(t){this.levelController.nextLoadLevel=t}}
,{key:"firstLevel",get:function(){return this.levelController.firstLevel}
,set:function(t){S.logger.log("set firstLevel:"+t),this.levelController.firstLevel=t}}
,{key:"startLevel",get:function(){return this.levelController.startLevel}
,set:function(t){S.logger.log("set startLevel:"+t),this.levelController.startLevel=t}}
,{key:"autoLevelCapping",get:function(){return this.abrController.autoLevelCapping}
,set:function(t){S.logger.log("set autoLevelCapping:"+t),this.abrController.autoLevelCapping=t}}
,{key:"autoLevelEnabled",get:function(){return this.levelController.manualLevel===-1}}
,{key:"manualLevel",get:function(){return this.levelController.manualLevel}}
]),t}
();e["default"]=D}
,function(t,e,n){"use strict";t.exports=n(63)["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":s(e))&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+("undefined"==typeof e?"undefined":s(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(3),c=r(u),f=n(12),d=r(f),h=n(5),p=function(t){function e(t){return i(this,e),o(this,Object.getPrototypeOf(e).call(this,t,c["default"].FRAG_LOADING))}
return a(e,t),l(e,[{key:"destroy",value:function(){this.loader&&(this.loader.destroy(),this.loader=null),d["default"].prototype.destroy.call(this)}}
,{key:"onFragLoading",value:function(t){var e=t.frag;this.frag=e,this.frag.loaded=0;var n=this.hls.config;e.loader=this.loader="undefined"!=typeof n.fLoader?new n.fLoader(n):new n.loader(n),this.loader.load(e.url,"arraybuffer",this.loadsuccess.bind(this),this.loaderror.bind(this),this.loadtimeout.bind(this),n.fragLoadingTimeOut,1,0,this.loadprogress.bind(this),e)}}
,{key:"loadsuccess",value:function(t,e){var n=t.currentTarget.response;e.length=n.byteLength,this.frag.loader=void 0,this.hls.trigger(c["default"].FRAG_LOADED,{payload:n,frag:this.frag,stats:e}
)}}
,{key:"loaderror",value:function(t){this.loader&&this.loader.abort(),this.hls.trigger(c["default"].ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:this.frag,response:t}
)}}
,{key:"loadtimeout",value:function(){this.loader&&this.loader.abort(),this.hls.trigger(c["default"].ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:this.frag}
)}}
,{key:"loadprogress",value:function(t,e){this.frag.loaded=e.loaded,this.hls.trigger(c["default"].FRAG_LOAD_PROGRESS,{frag:this.frag,stats:e}
)}}
]),e}
(d["default"]);e["default"]=p}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":s(e))&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+("undefined"==typeof e?"undefined":s(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(3),c=r(u),f=n(12),d=r(f),h=n(5),p=function(t){function e(t){i(this,e);var n=o(this,Object.getPrototypeOf(e).call(this,t,c["default"].KEY_LOADING));return n.decryptkey=null,n.decrypturl=null,n}
return a(e,t),l(e,[{key:"destroy",value:function(){this.loader&&(this.loader.destroy(),this.loader=null),d["default"].prototype.destroy.call(this)}}
,{key:"onKeyLoading",value:function(t){var e=this.frag=t.frag,n=e.decryptdata,r=n.uri;if(r!==this.decrypturl||null===this.decryptkey){var i=this.hls.config;e.loader=this.loader=new i.loader(i),this.decrypturl=r,this.decryptkey=null,e.loader.load(r,"arraybuffer",this.loadsuccess.bind(this),this.loaderror.bind(this),this.loadtimeout.bind(this),i.fragLoadingTimeOut,i.fragLoadingMaxRetry,i.fragLoadingRetryDelay,this.loadprogress.bind(this),e)}
else this.decryptkey&&(n.key=this.decryptkey,this.hls.trigger(c["default"].KEY_LOADED,{frag:e}
))}}
,{key:"loadsuccess",value:function(t){var e=this.frag;this.decryptkey=e.decryptdata.key=new Uint8Array(t.currentTarget.response),e.loader=void 0,this.hls.trigger(c["default"].KEY_LOADED,{frag:e}
)}}
,{key:"loaderror",value:function(t){this.loader&&this.loader.abort(),this.hls.trigger(c["default"].ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:this.frag,response:t}
)}}
,{key:"loadtimeout",value:function(){this.loader&&this.loader.abort(),this.hls.trigger(c["default"].ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:this.frag}
)}}
,{key:"loadprogress",value:function(){}}
]),e}
(d["default"]);e["default"]=p}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":s(e))&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+("undefined"==typeof e?"undefined":s(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
;Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(3),c=r(u),f=n(12),d=r(f),h=n(5),p=n(75),y=r(p),g=n(71),v=r(g),m=n(4),b=function(t){function e(t){return i(this,e),o(this,Object.getPrototypeOf(e).call(this,t,c["default"].MANIFEST_LOADING,c["default"].LEVEL_LOADING))}
return a(e,t),l(e,[{key:"destroy",value:function(){this.loader&&(this.loader.destroy(),this.loader=null),this.url=this.id=null,d["default"].prototype.destroy.call(this)}}
,{key:"onManifestLoading",value:function(t){this.load(t.url,null)}}
,{key:"onLevelLoading",value:function(t){this.load(t.url,t.level,t.id)}}
,{key:"load",value:function(t,e,n){var r,i,o,a=this.hls.config;if(this.loading&&this.loader){if(this.url===t&&this.id===e&&this.id2===n)return;this.loader.abort()}
this.url=t,this.id=e,this.id2=n,null===this.id?(r=a.manifestLoadingMaxRetry,i=a.manifestLoadingTimeOut,o=a.manifestLoadingRetryDelay):(r=a.levelLoadingMaxRetry,i=a.levelLoadingTimeOut,o=a.levelLoadingRetryDelay),this.loader="undefined"!=typeof a.pLoader?new a.pLoader(a):new a.loader(a),this.loading=!0,this.loader.load(t,"",this.loadsuccess.bind(this),this.loaderror.bind(this),this.loadtimeout.bind(this),i,r,o)}}
,{key:"resolve",value:function(t,e){return y["default"].buildAbsoluteURL(e,t)}}
,{key:"parseMasterPlaylist",value:function(t,e){for(var n=[],r=void 0,i=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g;null!=(r=i.exec(t));){var o={}
,a=o.attrs=new v["default"](r[1]);o.url=this.resolve(r[2],e);var s=a.decimalResolution("RESOLUTION");s&&(o.width=s.width,o.height=s.height),o.bitrate=a.decimalInteger("AVERAGE-BANDWIDTH")||a.decimalInteger("BANDWIDTH"),o.name=a.NAME;var l=a.CODECS;if(l){l=l.split(",");for(var u=0;u<l.length;u++){var c=l[u];c.indexOf("avc1")!==-1?o.videoCodec=this.avc1toavcoti(c):o.audioCodec=c}}
n.push(o)}
return n}}
,{key:"createInitializationVector",value:function(t){for(var e=new Uint8Array(16),n=12;n<16;n++)e[n]=t>>8*(15-n)&255;return e}}
,{key:"fragmentDecryptdataFromLevelkey",value:function(t,e){var n=t;return t&&t.method&&t.uri&&!t.iv&&(n=this.cloneObj(t),n.iv=this.createInitializationVector(e)),n}}
,{key:"avc1toavcoti",value:function(t){var e,n=t.split(".");return n.length>2?(e=n.shift()+".",e+=parseInt(n.shift()).toString(16),e+=("000"+parseInt(n.shift()).toString(16)).substr(-4)):e=t,e}}
,{key:"cloneObj",value:function(t){return JSON.parse(JSON.stringify(t))}}
,{key:"parseLevelPlaylist",value:function(t,e,n){var r,i,o,a=0,s=0,l={version:null,type:null,url:e,fragments:[],live:!0,startSN:0}
,u={method:null,key:null,iv:null,uri:null}
,c=0,f=null,d=null,h=null,p=null,y=null,g=null;for(o=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE):(\d+))|(?:#EXT-X-(TARGETDURATION):(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT(INF):(\d+(?:\.\d+)?)(?:,(.*))?)|(?:(?!#)()(\S.+))|(?:#EXT-X-(BYTERANGE):(\d+(?:@\d+(?:\.\d+)?))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(PROGRAM-DATE-TIME):(.+))|(?:#EXT-X-(VERSION):(\d+))|(?:(#)(.*):(.*))|(?:(#)(.*)))(?:.*)\r?\n?/g;null!==(i=o.exec(t));)switch(i.shift(),i=i.filter(function(t){return void 0!==t}
),i[0]){case"VERSION":l.version=parseInt(i[1]);break;case"PLAYLIST-TYPE":l.type=i[1].toUpperCase();break;case"MEDIA-SEQUENCE":a=l.startSN=parseInt(i[1]);break;case"TARGETDURATION":l.targetduration=parseFloat(i[1]);break;case"EXTM3U":break;case"ENDLIST":l.live=!1;break;case"DIS":c++;break;case"BYTERANGE":var b=i[1].split("@");g=1===b.length?y:parseInt(b[1]),y=parseInt(b[0])+g;break;case"INF":h=parseFloat(i[1]),p=i[2]?i[2]:null;break;case"":if(!isNaN(h)){var _=a++;r=this.fragmentDecryptdataFromLevelkey(u,_);var E=i[1]?this.resolve(i[1],e):null;d={url:E,duration:h,title:p,start:s,sn:_,level:n,cc:c,decryptdata:r,programDateTime:f}
,null!==g&&(d.byteRangeStartOffset=g,d.byteRangeEndOffset=y),l.fragments.push(d),s+=h,h=null,p=null,g=null,f=null}
break;case"KEY":var T=i[1],w=new v["default"](T),A=w.enumeratedString("METHOD"),S=w.URI,k=w.hexadecimalInteger("IV");A&&(u={method:null,key:null,iv:null,uri:null}
,S&&"AES-128"===A&&(u.method=A,u.uri=this.resolve(S,e),u.key=null,u.iv=k));break;case"START":var L=i[1],O=new v["default"](L),R=O.decimalFloatingPoint("TIME-OFFSET");R&&(l.startTimeOffset=R);break;case"PROGRAM-DATE-TIME":f=new Date(Date.parse(i[1]));break;case"#":i.shift();break;default:m.logger.warn("line parsed but not handled:"+i)}
return d&&!d.url&&(l.fragments.pop(),s-=d.duration),l.totalduration=s,l.endSN=a-1,l}}
,{key:"loadsuccess",value:function(t,e){var n,r=t.currentTarget,i=r.responseText,o=r.responseURL,a=this.id,s=this.id2,l=this.hls;if(this.loading=!1,void 0===o&&(o=this.url),e.tload=performance.now(),e.mtime=new Date(r.getResponseHeader("Last-Modified")),0===i.indexOf("#EXTM3U"))if(i.indexOf("#EXTINF:")>0)if(null===this.id)l.trigger(c["default"].MANIFEST_LOADED,{levels:[{url:o}
],url:o,stats:e}
);else{var u=this.parseLevelPlaylist(i,o,a);e.tparsed=performance.now(),l.trigger(c["default"].LEVEL_LOADED,{details:u,level:a,id:s,stats:e}
)}
else n=this.parseMasterPlaylist(i,o),n.length?l.trigger(c["default"].MANIFEST_LOADED,{levels:n,url:o,stats:e}
):l.trigger(c["default"].ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:o,reason:"no level found in manifest"}
);else l.trigger(c["default"].ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:o,reason:"no EXTM3U delimiter"}
)}}
,{key:"loaderror",value:function(t){var e,n;null===this.id?(e=h.ErrorDetails.MANIFEST_LOAD_ERROR,n=!0):(e=h.ErrorDetails.LEVEL_LOAD_ERROR,n=!1),this.loader&&this.loader.abort(),this.loading=!1,this.hls.trigger(c["default"].ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:e,fatal:n,url:this.url,loader:this.loader,response:t.currentTarget,level:this.id,id:this.id2}
)}}
,{key:"loadtimeout",value:function(){var t,e;null===this.id?(t=h.ErrorDetails.MANIFEST_LOAD_TIMEOUT,e=!0):(t=h.ErrorDetails.LEVEL_LOAD_TIMEOUT,e=!1),this.loader&&this.loader.abort(),this.loading=!1,this.hls.trigger(c["default"].ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:t,fatal:e,url:this.url,loader:this.loader,level:this.id,id:this.id2}
)}}
]),e}
(d["default"]);e["default"]=b}
,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),i=function(){function t(){n(this,t)}
return r(t,null,[{key:"init",value:function(){t.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]}
;var e;for(e in t.types)t.types.hasOwnProperty(e)&&(t.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var n=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);t.HDLR_TYPES={video:n,audio:r}
;var i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),o=new Uint8Array([0,0,0,0,0,0,0,0]);t.STTS=t.STSC=t.STCO=o,t.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),t.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),t.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),t.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var a=new Uint8Array([105,115,111,109]),s=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);t.FTYP=t.box(t.types.ftyp,a,l,a,s),t.DINF=t.box(t.types.dinf,t.box(t.types.dref,i))}}
,{key:"box",value:function(t){for(var e,n=Array.prototype.slice.call(arguments,1),r=8,i=n.length,o=i;i--;)r+=n[i].byteLength;for(e=new Uint8Array(r),e[0]=r>>24&255,e[1]=r>>16&255,e[2]=r>>8&255,e[3]=255&r,e.set(t,4),i=0,r=8;i<o;i++)e.set(n[i],r),r+=n[i].byteLength;return e}}
,{key:"hdlr",value:function(e){return t.box(t.types.hdlr,t.HDLR_TYPES[e])}}
,{key:"mdat",value:function(e){return t.box(t.types.mdat,e)}}
,{key:"mdhd",value:function(e,n){return n*=e,t.box(t.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))}}
,{key:"mdia",value:function(e){return t.box(t.types.mdia,t.mdhd(e.timescale,e.duration),t.hdlr(e.type),t.minf(e))}}
,{key:"mfhd",value:function(e){return t.box(t.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))}}
,{key:"minf",value:function(e){return"audio"===e.type?t.box(t.types.minf,t.box(t.types.smhd,t.SMHD),t.DINF,t.stbl(e)):t.box(t.types.minf,t.box(t.types.vmhd,t.VMHD),t.DINF,t.stbl(e))}}
,{key:"moof",value:function(e,n,r){return t.box(t.types.moof,t.mfhd(e),t.traf(r,n))}}
,{key:"moov",value:function(e){for(var n=e.length,r=[];n--;)r[n]=t.trak(e[n]);return t.box.apply(null,[t.types.moov,t.mvhd(e[0].timescale,e[0].duration)].concat(r).concat(t.mvex(e)))}}
,{key:"mvex",value:function(e){for(var n=e.length,r=[];n--;)r[n]=t.trex(e[n]);return t.box.apply(null,[t.types.mvex].concat(r))}}
,{key:"mvhd",value:function(e,n){n*=e;var r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,e>>24&255,e>>16&255,e>>8&255,255&e,n>>24&255,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t.box(t.types.mvhd,r)}}
,{key:"sdtp",value:function(e){var n,r,i=e.samples||[],o=new Uint8Array(4+i.length);for(r=0;r<i.length;r++)n=i[r].flags,o[r+4]=n.dependsOn<<4|n.isDependedOn<<2|n.hasRedundancy;return t.box(t.types.sdtp,o)}}
,{key:"stbl",value:function(e){return t.box(t.types.stbl,t.stsd(e),t.box(t.types.stts,t.STTS),t.box(t.types.stsc,t.STSC),t.box(t.types.stsz,t.STSZ),t.box(t.types.stco,t.STCO))}}
,{key:"avc1",value:function(e){var n,r,i,o=[],a=[];for(n=0;n<e.sps.length;n++)r=e.sps[n],i=r.byteLength,o.push(i>>>8&255),o.push(255&i),o=o.concat(Array.prototype.slice.call(r));for(n=0;n<e.pps.length;n++)r=e.pps[n],i=r.byteLength,a.push(i>>>8&255),a.push(255&i),a=a.concat(Array.prototype.slice.call(r));var s=t.box(t.types.avcC,new Uint8Array([1,o[3],o[4],o[5],255,224|e.sps.length].concat(o).concat([e.pps.length]).concat(a))),l=e.width,u=e.height;return t.box(t.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),s,t.box(t.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))}}
,{key:"esds",value:function(t){var e=t.config.length;return new Uint8Array([0,0,0,0,3,23+e,0,1,0,4,15+e,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([e]).concat(t.config).concat([6,1,2]))}}
,{key:"mp4a",value:function(e){var n=e.audiosamplerate;return t.box(t.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,n>>8&255,255&n,0,0]),t.box(t.types.esds,t.esds(e)))}}
,{key:"stsd",value:function(e){return"audio"===e.type?t.box(t.types.stsd,t.STSD,t.mp4a(e)):t.box(t.types.stsd,t.STSD,t.avc1(e))}}
,{key:"tkhd",value:function(e){var n=e.id,r=e.duration*e.timescale,i=e.width,o=e.height;return t.box(t.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,n>>24&255,n>>16&255,n>>8&255,255&n,0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,255&i,0,0,o>>8&255,255&o,0,0]))}}
,{key:"traf",value:function(e,n){var r=t.sdtp(e),i=e.id;return t.box(t.types.traf,t.box(t.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,255&i])),t.box(t.types.tfdt,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),t.trun(e,r.length+16+16+8+16+8+8),r)}}
,{key:"trak",value:function(e){return e.duration=e.duration||4294967295,t.box(t.types.trak,t.tkhd(e),t.mdia(e))}}
,{key:"trex",value:function(e){var n=e.id;return t.box(t.types.trex,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}}
,{key:"trun",value:function(e,n){var r,i,o,a,s,l,u=e.samples||[],c=u.length,f=12+16*c,d=new Uint8Array(f);for(n+=8+f,d.set([0,0,15,1,c>>>24&255,c>>>16&255,c>>>8&255,255&c,n>>>24&255,n>>>16&255,n>>>8&255,255&n],0),r=0;r<c;r++)i=u[r],o=i.duration,a=i.size,s=i.flags,l=i.cts,d.set([o>>>24&255,o>>>16&255,o>>>8&255,255&o,a>>>24&255,a>>>16&255,a>>>8&255,255&a,s.isLeading<<2|s.dependsOn,s.isDependedOn<<6|s.hasRedundancy<<4|s.paddingValue<<1|s.isNonSync,61440&s.degradPrio,15&s.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*r);return t.box(t.types.trun,d)}}
,{key:"initSegment",value:function(e){t.types||t.init();var n,r=t.moov(e);return n=new Uint8Array(t.FTYP.byteLength+r.byteLength),n.set(t.FTYP),n.set(r,t.FTYP.byteLength),n}}
]),t}
();e["default"]=i}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),a=n(3),s=r(a),l=n(4),u=n(68),c=r(u),f=n(5),d=function(){function t(e){i(this,t),this.observer=e,this.ISGenerated=!1,this.PES2MP4SCALEFACTOR=4,this.PES_TIMESCALE=9e4,this.MP4_TIMESCALE=this.PES_TIMESCALE/this.PES2MP4SCALEFACTOR}
return o(t,[{key:"destroy",value:function(){}}
,{key:"insertDiscontinuity",value:function(){this._initPTS=this._initDTS=void 0}}
,{key:"switchLevel",value:function(){this.ISGenerated=!1}}
,{key:"remux",value:function(t,e,n,r,i,o){this.ISGenerated||this.generateIS(t,e,i),this.ISGenerated&&(e.samples.length&&this.remuxVideo(e,i,o),t.samples.length&&this.remuxAudio(t,i,o)),n.samples.length&&this.remuxID3(n,i),r.samples.length&&this.remuxText(r,i),this.observer.trigger(s["default"].FRAG_PARSED)}}
,{key:"generateIS",value:function(t,e,n){var r,i,o=this.observer,a=t.samples,u=e.samples,d=this.PES_TIMESCALE,h={}
,p={tracks:h,unique:!1}
,y=void 0===this._initPTS;y&&(r=i=1/0),t.config&&a.length&&(t.timescale=t.audiosamplerate,t.timescale*t.duration>Math.pow(2,32)&&!function(){var e=function n(t,e){return e?n(e,t%e):t}
;t.timescale=t.audiosamplerate/e(t.audiosamplerate,1024)}
(),l.logger.log("audio mp4 timescale:"+t.timescale),h.audio={container:"audio/mp4",codec:t.codec,initSegment:c["default"].initSegment([t]),metadata:{channelCount:t.channelCount}}
,y&&(r=i=a[0].pts-d*n)),e.sps&&e.pps&&u.length&&(e.timescale=this.MP4_TIMESCALE,h.video={container:"video/mp4",codec:e.codec,initSegment:c["default"].initSegment([e]),metadata:{width:e.width,height:e.height}}
,y&&(r=Math.min(r,u[0].pts-d*n),i=Math.min(i,u[0].dts-d*n))),Object.keys(h).length?(o.trigger(s["default"].FRAG_PARSING_INIT_SEGMENT,p),this.ISGenerated=!0,y&&(this._initPTS=r,this._initDTS=i)):o.trigger(s["default"].ERROR,{type:f.ErrorTypes.MEDIA_ERROR,details:f.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"}
)}}
,{key:"remuxVideo",value:function(t,e,n){var r,i,o,a,u,f,d,h,p,y,g,v,m,b,_,E=8,T=this.PES_TIMESCALE,w=this.PES2MP4SCALEFACTOR,A=[],S=t.samples.reduce(function(t,e){return Math.max(Math.min(t,e.pts-e.dts),-18e3)}
,0);for(S<0&&l.logger.warn("PTS < DTS detected in video samples,shifting DTS by "+Math.round(S/90)+" ms to overcome this issue"),f=new Uint8Array(t.len+4*t.nbNalu+8),r=new DataView(f.buffer),r.setUint32(0,f.byteLength),f.set(c["default"].types.mdat,4);t.samples.length;){for(i=t.samples.shift(),a=0;i.units.units.length;)u=i.units.units.shift(),r.setUint32(E,u.data.byteLength),E+=4,f.set(u.data,E),E+=u.data.byteLength,a+=4+u.data.byteLength;if(g=i.pts-this._initDTS,v=i.dts-this._initDTS+S,v=Math.min(g,v),void 0!==y){m=this._PTSNormalize(g,y),b=this._PTSNormalize(v,y);var k=(b-y)/w;k<=0&&(l.logger.log("invalid sample duration at PTS/DTS:"+i.pts+"/"+i.dts+":"+k),k=1),o.duration=k}
else{var L=void 0,O=void 0;L=n?this.nextAvcDts:e*T,m=this._PTSNormalize(g,L),b=this._PTSNormalize(v,L),O=Math.round((b-L)/90),n&&O&&(O>1?l.logger.log("AVC:"+O+" ms hole between fragments detected,filling it"):O<-1&&l.logger.log("AVC:"+-O+" ms overlapping between fragments detected"),b=L,m=Math.max(m-O,b),l.logger.log("Video/PTS/DTS adjusted:"+m+"/"+b+",delta:"+O)),h=Math.max(0,m),p=Math.max(0,b)}
o={size:a,duration:0,cts:(m-b)/w,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0}}
,_=o.flags,i.key===!0?(_.dependsOn=2,_.isNonSync=0):(_.dependsOn=1,_.isNonSync=1),A.push(o),y=b}
var R=0;A.length>=2&&(R=A[A.length-2].duration,o.duration=R),this.nextAvcDts=b+R*w;var C=t.dropped;t.len=0,t.nbNalu=0,t.dropped=0,A.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1&&(_=A[0].flags,_.dependsOn=2,_.isNonSync=0),t.samples=A,d=c["default"].moof(t.sequenceNumber++,p/w,t),t.samples=[],this.observer.trigger(s["default"].FRAG_PARSING_DATA,{data1:d,data2:f,startPTS:h/T,endPTS:(m+w*R)/T,startDTS:p/T,endDTS:this.nextAvcDts/T,type:"video",nb:A.length,dropped:C}
)}}
,{key:"remuxAudio",value:function(t,e,n){var r,i,o,a,u,f,d,h,p,y,g,v,m,b=8,_=this.PES_TIMESCALE,E=t.timescale,T=_/E,w=1024*t.timescale/t.audiosamplerate,A=[],S=[];for(t.samples.sort(function(t,e){return t.pts-e.pts}
),S=t.samples;S.length;){if(i=S.shift(),a=i.unit,y=i.pts-this._initDTS,g=i.dts-this._initDTS,void 0!==p)v=this._PTSNormalize(y,p),m=this._PTSNormalize(g,p),o.duration=(m-p)/T,Math.abs(o.duration-w)>w/10&&l.logger.log("invalid AAC sample duration at PTS "+Math.round(y/90)+",should be 1024,found:"+Math.round(o.duration*t.audiosamplerate/t.timescale)),o.duration=w,v=m=w*T+p;else{var k=void 0,L=void 0;if(k=n?this.nextAacPts:e*_,v=this._PTSNormalize(y,k),m=this._PTSNormalize(g,k),L=Math.round(1e3*(v-k)/_),n&&L){if(L>0)l.logger.log(L+" ms hole between AAC samples detected,filling it");else if(L<-12){l.logger.log(-L+" ms overlapping between AAC samples detected,drop frame"),t.len-=a.byteLength;continue}
v=m=k}
if(d=Math.max(0,v),h=Math.max(0,m),!(t.len>0))return;u=new Uint8Array(t.len+8),r=new DataView(u.buffer),r.setUint32(0,u.byteLength),u.set(c["default"].types.mdat,4)}
u.set(a,b),b+=a.byteLength,o={size:a.byteLength,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}}
,A.push(o),p=m}
var O=0,R=A.length;R>=2&&(O=A[R-2].duration,o.duration=O),R&&(this.nextAacPts=v+T*O,t.len=0,t.samples=A,f=c["default"].moof(t.sequenceNumber++,h/T,t),t.samples=[],this.observer.trigger(s["default"].FRAG_PARSING_DATA,{data1:f,data2:u,startPTS:d/_,endPTS:this.nextAacPts/_,startDTS:h/_,endDTS:(m+T*O)/_,type:"audio",nb:R}
))}}
,{key:"remuxID3",value:function(t,e){var n,r=t.samples.length;if(r){for(var i=0;i<r;i++)n=t.samples[i],n.pts=(n.pts-this._initPTS)/this.PES_TIMESCALE,n.dts=(n.dts-this._initDTS)/this.PES_TIMESCALE;this.observer.trigger(s["default"].FRAG_PARSING_METADATA,{samples:t.samples}
)}
t.samples=[],e=e}}
,{key:"remuxText",value:function(t,e){t.samples.sort(function(t,e){return t.pts-e.pts}
);var n,r=t.samples.length;if(r){for(var i=0;i<r;i++)n=t.samples[i],n.pts=(n.pts-this._initPTS)/this.PES_TIMESCALE;this.observer.trigger(s["default"].FRAG_PARSING_USERDATA,{samples:t.samples}
)}
t.samples=[],e=e}}
,{key:"_PTSNormalize",value:function(t,e){var n;if(void 0===e)return t;for(n=e<t?-8589934592:8589934592;Math.abs(t-e)>4294967296;)t+=n;return t}}
,{key:"passthrough",get:function(){return!1}}
]),t}
();e["default"]=d}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),a=n(3),s=r(a),l=function(){function t(e){i(this,t),this.observer=e,this.ISGenerated=!1}
return o(t,[{key:"destroy",value:function(){}}
,{key:"insertDiscontinuity",value:function(){}}
,{key:"switchLevel",value:function(){this.ISGenerated=!1}}
,{key:"remux",value:function(t,e,n,r,i,o){var a=this.observer;if(!this.ISGenerated){var l={}
,u={tracks:l,unique:!0}
,c=e,f=c.codec;f&&(u.tracks.video={container:c.container,codec:f,metadata:{width:c.width,height:c.height}}
),c=t,f=c.codec,f&&(u.tracks.audio={container:c.container,codec:f,metadata:{channelCount:c.channelCount}}
),this.ISGenerated=!0,a.trigger(s["default"].FRAG_PARSING_INIT_SEGMENT,u)}
a.trigger(s["default"].FRAG_PARSING_DATA,{data1:o,startPTS:i,startDTS:i,type:"audiovideo",nb:1,dropped:0}
)}}
,{key:"passthrough",get:function(){return!0}}
]),t}
();e["default"]=l}
,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),i=function(){function t(e){n(this,t),"string"==typeof e&&(e=t.parseAttrList(e));for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r])}
return r(t,[{key:"decimalInteger",value:function(t){var e=parseInt(this[t],10);return e>Number.MAX_SAFE_INTEGER?1/0:e}}
,{key:"hexadecimalInteger",value:function(t){if(this[t]){var e=(this[t]||"0x").slice(2);e=(1&e.length?"0":"")+e;for(var n=new Uint8Array(e.length/2),r=0;r<e.length/2;r++)n[r]=parseInt(e.slice(2*r,2*r+2),16);return n}
return null}}
,{key:"hexadecimalIntegerAsNumber",value:function(t){var e=parseInt(this[t],16);return e>Number.MAX_SAFE_INTEGER?1/0:e}}
,{key:"decimalFloatingPoint",value:function(t){return parseFloat(this[t])}}
,{key:"enumeratedString",value:function(t){return this[t]}}
,{key:"decimalResolution",value:function(t){var e=/^(\d+)x(\d+)$/.exec(this[t]);if(null!==e)return{width:parseInt(e[1],10),height:parseInt(e[2],10)}}}
],[{key:"parseAttrList",value:function(t){for(var e,n=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,r={}
;null!==(e=n.exec(t));){var i=e[2],o='"';0===i.indexOf(o)&&i.lastIndexOf(o)===i.length-1&&(i=i.slice(1,-1)),r[e[1]]=i}
return r}}
]),t}
();e["default"]=i}
,function(t,e){"use strict";var n={search:function(t,e){for(var n=0,r=t.length-1,i=null,o=null;n<=r;){i=(n+r)/2|0,o=t[i];var a=e(o);if(a>0)n=i+1;else{if(!(a<0))return o;r=i-1}}
return null}}
;t.exports=n}
,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),i=function(){function t(){n(this,t)}
return r(t,[{key:"attach",value:function(t){this.media=t,this.display=[],this.memory=[]}}
,{key:"detach",value:function(){this.clear()}}
,{key:"destroy",value:function(){}}
,{key:"_createCue",value:function(){var t=window.VTTCue||window.TextTrackCue,e=this.cue=new t((-1),(-1),"");e.text="",e.pauseOnExit=!1,e.startTime=Number.MAX_VALUE,e.endTime=Number.MAX_VALUE,this.memory.push(e)}}
,{key:"clear",value:function(){var t=this._textTrack;if(t&&t.cues)for(;t.cues.length>0;)t.removeCue(t.cues[0])}}
,{key:"push",value:function(t,e){this.cue||this._createCue();for(var n,r,i,o,a,s=31&e[0],l=2,u=0;u<s;u++)if(n=e[l++],r=127&e[l++],i=127&e[l++],o=0!==(4&n),a=3&n,(0!==r||0!==i)&&o&&0===a){if(32&r||64&r)this.cue.text+=this._fromCharCode(r)+this._fromCharCode(i);else if((17===r||25===r)&&i>=48&&i<=63)switch(i){case 48:this.cue.text+="Â®";break;case 49:this.cue.text+="Â°";break;case 50:this.cue.text+="Â½";break;case 51:this.cue.text+="Â¿";break;case 52:this.cue.text+="â„¢";break;case 53:this.cue.text+="Â¢";break;case 54:this.cue.text+="";break;case 55:this.cue.text+="Â£";break;case 56:this.cue.text+="â™ª";break;case 57:this.cue.text+=" ";break;case 58:this.cue.text+="Ã¨";break;case 59:this.cue.text+="Ã¢";break;case 60:this.cue.text+="Ãª";break;case 61:this.cue.text+="Ã®";break;case 62:this.cue.text+="Ã´";break;case 63:this.cue.text+="Ã»"}
if((17===r||25===r)&&i>=32&&i<=47)switch(i){case 32:break;case 33:break;case 34:break;case 35:break;case 36:break;case 37:break;case 38:break;case 39:break;case 40:break;case 41:break;case 42:break;case 43:break;case 44:break;case 45:break;case 46:break;case 47:}
if((20===r||28===r)&&i>=32&&i<=47)switch(i){case 32:this._clearActiveCues(t);break;case 33:this.cue.text=this.cue.text.substr(0,this.cue.text.length-1);break;case 34:break;case 35:break;case 36:break;case 37:break;case 38:break;case 39:break;case 40:break;case 41:this._clearActiveCues(t);break;case 42:break;case 43:break;case 44:this._clearActiveCues(t);break;case 45:break;case 46:this._text="";break;case 47:this._flipMemory(t)}
if((23===r||31===r)&&i>=33&&i<=35)switch(i){case 33:break;case 34:break;case 35:}}}}
,{key:"_fromCharCode",value:function(t){switch(t){case 42:return"Ã¡";case 2:return"Ã¡";case 2:return"Ã©";case 4:return"Ã­";case 5:return"Ã³";case 6:return"Ãº";case 3:return"Ã§";case 4:return"Ã·";case 5:return"Ã‘";case 6:return"Ã±";case 7:return"â–ˆ";default:return String.fromCharCode(t)}}}
,{key:"_flipMemory",value:function(t){this._clearActiveCues(t),this._flushCaptions(t)}}
,{key:"_flushCaptions",value:function(t){this._has708||(this._textTrack=this.media.addTextTrack("captions","English","en"),this._has708=!0);var e=!0,n=!1,r=void 0;try{for(var i,o=this.memory[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;a.startTime=t,this._textTrack.addCue(a),this.display.push(a)}}
catch(s){n=!0,r=s}
finally{try{!e&&o["return"]&&o["return"]()}
finally{if(n)throw r}}
this.memory=[],this.cue=null}}
,{key:"_clearActiveCues",value:function(t){var e=!0,n=!1,r=void 0;try{for(var i,o=this.display[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;a.endTime=t}}
catch(s){n=!0,r=s}
finally{try{!e&&o["return"]&&o["return"]()}
finally{if(n)throw r}}
this.display=[]}}
,{key:"_clearBufferedCues",value:function(){}}
]),t}
();e["default"]=i}
,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),i=function(){function t(e){n(this,t),this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=0,this.totalWeight_=0}
return r(t,[{key:"sample",value:function(t,e){var n=Math.pow(this.alpha_,t);this.estimate_=e*(1-n)+n*this.estimate_,this.totalWeight_+=t}}
,{key:"getTotalWeight",value:function(){return this.totalWeight_}}
,{key:"getEstimate",value:function(){if(this.alpha_){var t=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/t}
return this.estimate_}}
]),t}
();e["default"]=i}
,function(t,e){"use strict";var n={buildAbsoluteURL:function(t,e){if(e=e.trim(),/^[a-z]+:/i.test(e))return e;var r=null,i=null,o=/^([^#]*)(.*)$/.exec(e);o&&(i=o[2],e=o[1]);var a=/^([^\?]*)(.*)$/.exec(e);a&&(r=a[2],e=a[1]);var s=/^([^#]*)(.*)$/.exec(t);s&&(t=s[1]);var l=/^([^\?]*)(.*)$/.exec(t);l&&(t=l[1]);var u=/^(([a-z]+:)?\/\/[a-z0-9\.\-_~]+(:[0-9]+)?)?(\/.*)$/i.exec(t);if(!u)throw new Error("Error trying to parse base URL.");var c=u[2]||"",f=u[1]||"",d=u[4],h=null;return h=/^\/\//.test(e)?c+"//"+n.buildAbsolutePath("",e.substring(2)):/^\//.test(e)?f+"/"+n.buildAbsolutePath("",e.substring(1)):n.buildAbsolutePath(f+d,e),r&&(h+=r),i&&(h+=i),h}
,buildAbsolutePath:function(t,e){for(var n,r,i=e,o="",a=t.replace(/[^\/]*$/,i.replace(/(\/|^)(?:\.?\/+)+/g,"$1")),s=0;r=a.indexOf("/../",s),r>-1;s=r+n)n=/^\/(?:\.\.\/)*/
.exec(a.slice(r))[0].length,o=(o+a.substring(s,r)).replace(new RegExp("(?:\\/+[^\\/]*){0,"+(n-1)/3+"}
$"),"/");return o+a.substr(s)}}
;t.exports=n}
,function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),o=n(4),a=function(){function t(e){r(this,t),e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}
return i(t,[{key:"destroy",value:function(){this.abort(),this.loader=null}}
,{key:"abort",value:function(){var t=this.loader,e=this.timeoutHandle;t&&4!==t.readyState&&(this.stats.aborted=!0,t.abort()),e&&window.clearTimeout(e)}}
,{key:"load",value:function(t,e,n,r,i,o,a,s){var l=arguments.length<=8||void 0===arguments[8]?null:arguments[8],u=arguments.length<=9||void 0===arguments[9]?null:arguments[9];this.url=t,!u||isNaN(u.byteRangeStartOffset)||isNaN(u.byteRangeEndOffset)||(this.byteRange=u.byteRangeStartOffset+"-"+(u.byteRangeEndOffset-1)),this.responseType=e,this.onSuccess=n,this.onProgress=l,this.onTimeout=i,this.onError=r,this.stats={trequest:performance.now(),retry:0}
,this.timeout=o,this.maxRetry=a,this.retryDelay=s,this.loadInternal()}}
,{key:"loadInternal",value:function(){var t;t="undefined"!=typeof XDomainRequest?this.loader=new XDomainRequest:this.loader=new XMLHttpRequest,t.onloadend=this.loadend.bind(this),t.onprogress=this.loadprogress.bind(this),t.open("GET",this.url,!0),this.byteRange&&t.setRequestHeader("Range","bytes="+this.byteRange),t.responseType=this.responseType;var e=this.stats;e.tfirst=0,e.loaded=0,this.xhrSetup&&this.xhrSetup(t,this.url),this.timeoutHandle=window.setTimeout(this.loadtimeout.bind(this),this.timeout),t.send()}}
,{key:"loadend",value:function(t){var e=t.currentTarget,n=e.status,r=this.stats;r.aborted||(n>=200&&n<300?(window.clearTimeout(this.timeoutHandle),r.tload=Math.max(r.tfirst,performance.now()),this.onSuccess(t,r)):r.retry>=this.maxRetry||n>=400&&n<499?(window.clearTimeout(this.timeoutHandle),o.logger.error(n+" while loading "+this.url),this.onError(t)):(o.logger.warn(n+" while loading "+this.url+",retrying in "+this.retryDelay+"..."),this.destroy(),window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,64e3),r.retry++))}}
,{key:"loadtimeout",value:function(t){o.logger.warn("timeout while loading "+this.url),this.onTimeout(t,this.stats)}}
,{key:"loadprogress",value:function(t){var e=this.stats;0===e.tfirst&&(e.tfirst=Math.max(performance.now(),e.trequest)),e.loaded=t.loaded,this.onProgress&&this.onProgress(t,e)}}
]),t}
();e["default"]=a}
,function(t,e,n){(function(t,n){"use strict";function r(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}
function i(t){return function(e){return null==e?void 0:e[t]}}
function o(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}
function a(t){return function(e){return t(e)}}
function s(t,e){return null==t?void 0:t[e]}
function l(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}
catch(n){}
return e}
function u(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}
),n}
function c(t,e){return function(n){return t(e(n))}}
function f(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}
),n}
function d(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function h(){this.__data__=Se?Se(null):{}}
function p(t){return this.has(t)&&delete this.__data__[t]}
function y(t){var e=this.__data__;if(Se){var n=e[t];return n===gt?void 0:n}
return fe.call(e,t)?e[t]:void 0}
function g(t){var e=this.__data__;return Se?void 0!==e[t]:fe.call(e,t)}
function v(t,e){var n=this.__data__;return n[t]=Se&&void 0===e?gt:e,this}
function m(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function b(){this.__data__=[]}
function _(t){var e=this.__data__,n=B(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():ve.call(e,n,1),!0}
function E(t){var e=this.__data__,n=B(e,t);return n<0?void 0:e[n][1]}
function T(t){return B(this.__data__,t)>-1}
function w(t,e){var n=this.__data__,r=B(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}
function A(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function S(){this.__data__={hash:new d,map:new(Ee||m),string:new d}}
function k(t){return q(this,t)["delete"](t)}
function L(t){return q(this,t).get(t)}
function O(t){return q(this,t).has(t)}
function R(t,e){return q(this,t).set(t,e),this}
function C(t){var e=-1,n=t?t.length:0;for(this.__data__=new A;++e<n;)this.add(t[e])}
function P(t){return this.__data__.set(t,gt),this}
function D(t){return this.__data__.has(t)}
function I(t){this.__data__=new m(t)}
function x(){this.__data__=new m}
function N(t){return this.__data__["delete"](t)}
function M(t){return this.__data__.get(t)}
function F(t){return this.__data__.has(t)}
function j(t,e){var n=this.__data__;if(n instanceof m){var r=n.__data__;if(!Ee||r.length<yt-1)return r.push([t,e]),this;n=this.__data__=new A(r)}
return n.set(t,e),this}
function B(t,e){for(var n=t.length;n--;)if(rt(t[n][0],e))return n;return-1}
function U(t){return de.call(t)}
function G(t,e){return null!=t&&(fe.call(t,e)||"object"==("undefined"==typeof t?"undefined":pt(t))&&e in t&&null===Ne(t))}
function Y(t,e,n,r,i){return t===e||(null==t||null==e||!ct(t)&&!ft(e)?t!==t&&e!==e:$(t,e,Y,n,r,i))}
function $(t,e,n,r,i,o){var a=Fe(t),s=Fe(e),u=Et,c=Et;a||(u=Me(t),u=u==_t?Rt:u),s||(c=Me(e),c=c==_t?Rt:c);var f=u==Rt&&!l(t),d=c==Rt&&!l(e),h=u==c;if(h&&!f)return o||(o=new I),a||je(t)?H(t,e,n,r,i,o):z(t,e,u,n,r,i,o);if(!(i&mt)){var p=f&&fe.call(t,"__wrapped__"),y=d&&fe.call(e,"__wrapped__");if(p||y){var g=p?t.value():t,v=y?e.value():e;return o||(o=new I),n(g,v,r,i,o)}}
return!!h&&(o||(o=new I),W(t,e,n,r,i,o))}
function V(t){if(!ct(t)||tt(t))return!1;var e=lt(t)||l(t)?he:Wt;return e.test(nt(t))}
function K(t){return ft(t)&&ut(t.length)&&!!Xt[de.call(t)]}
function H(t,e,n,i,o,a){var s=o&mt,l=t.length,u=e.length;if(l!=u&&!(s&&u>l))return!1;var c=a.get(t);if(c&&a.get(e))return c==e;var f=-1,d=!0,h=o&vt?new C:void 0;for(a.set(t,e),a.set(e,t);++f<l;){var p=t[f],y=e[f];if(i)var g=s?i(y,p,f,e,t,a):i(p,y,f,t,e,a);if(void 0!==g){if(g)continue;d=!1;break}
if(h){if(!r(e,function(t,e){if(!h.has(e)&&(p===t||n(p,t,i,o,a)))return h.add(e)}
)){d=!1;break}}
else if(p!==y&&!n(p,y,i,o,a)){d=!1;break}}
return a["delete"](t),d}
function z(t,e,n,r,i,o,a){switch(n){case Ft:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Mt:return!(t.byteLength!=e.byteLength||!r(new ye(t),new ye(e)));case Tt:case wt:case Ot:return rt(+t,+e);case At:return t.name==e.name&&t.message==e.message;case Pt:case It:return t==e+"";case Lt:var s=u;case Dt:var l=o&mt;if(s||(s=f),t.size!=e.size&&!l)return!1;var c=a.get(t);if(c)return c==e;o|=vt,a.set(t,e);var d=H(s(t),s(e),r,i,o,a);return a["delete"](t),d;case xt:if(De)return De.call(t)==De.call(e)}
return!1}
function W(t,e,n,r,i,o){var a=i&mt,s=ht(t),l=s.length,u=ht(e),c=u.length;if(l!=c&&!a)return!1;for(var f=l;f--;){var d=s[f];if(!(a?d in e:G(e,d)))return!1}
var h=o.get(t);if(h&&o.get(e))return h==e;var p=!0;o.set(t,e),o.set(e,t);for(var y=a;++f<l;){d=s[f];var g=t[d],v=e[d];if(r)var m=a?r(v,g,d,e,t,o):r(g,v,d,t,e,o);if(!(void 0===m?g===v||n(g,v,r,i,o):m)){p=!1;break}
y||(y="constructor"==d)}
if(p&&!y){var b=t.constructor,_=e.constructor;b!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _)&&(p=!1)}
return o["delete"](t),p}
function q(t,e){var n=t.__data__;return Q(e)?n["string"==typeof e?"string":"hash"]:n.map}
function X(t,e){var n=s(t,e);return V(n)?n:void 0}
function Z(t){var e=t?t.length:void 0;return ut(e)&&(Fe(t)||dt(t)||it(t))?o(e,String):null}
function J(t,e){return e=null==e?bt:e,!!e&&("number"==typeof t||qt.test(t))&&t>-1&&t%1==0&&t<e}
function Q(t){var e="undefined"==typeof t?"undefined":pt(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}
function tt(t){return!!ue&&ue in t}
function et(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||se;return t===n}
function nt(t){if(null!=t){try{return ce.call(t)}
catch(e){}
try{return t+""}
catch(e){}}
return""}
function rt(t,e){return t===e||t!==t&&e!==e}
function it(t){return at(t)&&fe.call(t,"callee")&&(!ge.call(t,"callee")||de.call(t)==_t)}
function ot(t){return null!=t&&ut(xe(t))&&!lt(t)}
function at(t){return ft(t)&&ot(t)}
function st(t,e){return Y(t,e)}
function lt(t){var e=ct(t)?de.call(t):"";return e==St||e==kt}
function ut(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=bt}
function ct(t){var e="undefined"==typeof t?"undefined":pt(t);return!!t&&("object"==e||"function"==e)}
function ft(t){return!!t&&"object"==("undefined"==typeof t?"undefined":pt(t))}
function dt(t){return"string"==typeof t||!Fe(t)&&ft(t)&&de.call(t)==It}
function ht(t){var e=et(t);if(!e&&!ot(t))return Ie(t);var n=Z(t),r=!!n,i=n||[],o=i.length;for(var a in t)!G(t,a)||r&&("length"==a||J(a,o))||e&&"constructor"==a||i.push(a);return i}
var pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
,yt=200,gt="__lodash_hash_undefined__",vt=1,mt=2,bt=9007199254740991,_t="[object Arguments]",Et="[object Array]",Tt="[object Boolean]",wt="[object Date]",At="[object Error]",St="[object Function]",kt="[object GeneratorFunction]",Lt="[object Map]",Ot="[object Number]",Rt="[object Object]",Ct="[object Promise]",Pt="[object RegExp]",Dt="[object Set]",It="[object String]",xt="[object Symbol]",Nt="[object WeakMap]",Mt="[object ArrayBuffer]",Ft="[object DataView]",jt="[object Float32Array]",Bt="[object Float64Array]",Ut="[object Int8Array]",Gt="[object Int16Array]",Yt="[object Int32Array]",$t="[object Uint8Array]",Vt="[object Uint8ClampedArray]",Kt="[object Uint16Array]",Ht="[object Uint32Array]",zt=/[\\^$.*+?()[\]{}
|]/g,Wt=/^\[object .+?Constructor\]$/,qt=/^(?:0|[1-9]\d*)$/,Xt={}
;Xt[jt]=Xt[Bt]=Xt[Ut]=Xt[Gt]=Xt[Yt]=Xt[$t]=Xt[Vt]=Xt[Kt]=Xt[Ht]=!0,Xt[_t]=Xt[Et]=Xt[Mt]=Xt[Tt]=Xt[Ft]=Xt[wt]=Xt[At]=Xt[St]=Xt[Lt]=Xt[Ot]=Xt[Rt]=Xt[Pt]=Xt[Dt]=Xt[It]=Xt[Nt]=!1;var Zt="object"==("undefined"==typeof t?"undefined":pt(t))&&t&&t.Object===Object&&t,Jt="object"==("undefined"==typeof self?"undefined":pt(self))&&self&&self.Object===Object&&self,Qt=Zt||Jt||Function("return this")(),te=Zt&&"object"==pt(e)&&e,ee=te&&"object"==pt(n)&&n,ne=ee&&ee.exports===te,re=ne&&Zt.process,ie=function(){try{return re&&re.binding("util")}
catch(t){}}
(),oe=ie&&ie.isTypedArray,ae=Array.prototype,se=Object.prototype,le=Qt["__core-js_shared__"],ue=function(){var t=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}
(),ce=Function.prototype.toString,fe=se.hasOwnProperty,de=se.toString,he=RegExp("^"+ce.call(fe).replace(zt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pe=Qt.Symbol,ye=Qt.Uint8Array,ge=se.propertyIsEnumerable,ve=ae.splice,me=Object.getPrototypeOf,be=Object.keys,_e=X(Qt,"DataView"),Ee=X(Qt,"Map"),Te=X(Qt,"Promise"),we=X(Qt,"Set"),Ae=X(Qt,"WeakMap"),Se=X(Object,"create"),ke=nt(_e),Le=nt(Ee),Oe=nt(Te),Re=nt(we),Ce=nt(Ae),Pe=pe?pe.prototype:void 0,De=Pe?Pe.valueOf:void 0;d.prototype.clear=h,d.prototype["delete"]=p,d.prototype.get=y,d.prototype.has=g,d.prototype.set=v,m.prototype.clear=b,m.prototype["delete"]=_,m.prototype.get=E,m.prototype.has=T,m.prototype.set=w,A.prototype.clear=S,A.prototype["delete"]=k,A.prototype.get=L,A.prototype.has=O,A.prototype.set=R,C.prototype.add=C.prototype.push=P,C.prototype.has=D,I.prototype.clear=x,I.prototype["delete"]=N,I.prototype.get=M,I.prototype.has=F,I.prototype.set=j;var Ie=c(be,Object),xe=i("length"),Ne=c(me,Object),Me=U;(_e&&Me(new _e(new ArrayBuffer(1)))!=Ft||Ee&&Me(new Ee)!=Lt||Te&&Me(Te.resolve())!=Ct||we&&Me(new we)!=Dt||Ae&&Me(new Ae)!=Nt)&&(Me=function(t){var e=de.call(t),n=e==Rt?t.constructor:void 0,r=n?nt(n):void 0;if(r)switch(r){case ke:return Ft;case Le:return Lt;case Oe:return Ct;case Re:return Dt;case Ce:return Nt}
return e}
);var Fe=Array.isArray,je=oe?a(oe):K;n.exports=st}
).call(e,function(){return this}
(),n(18)(t))}
,function(t,e){"use strict";function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}
catch(n){}
return e}
function r(t,e){return function(n){return t(e(n))}}
function i(t){return!!t&&"object"==("undefined"==typeof t?"undefined":a(t))}
function o(t){if(!i(t)||d.call(t)!=s||n(t))return!1;var e=p(t);if(null===e)return!0;var r=c.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&u.call(r)==f}
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
,s="[object Object]",l=Object.prototype,u=Function.prototype.toString,c=l.hasOwnProperty,f=u.call(Object),d=l.toString,h=Object.getPrototypeOf,p=r(h,Object);t.exports=o}
,function(t,e,n){(function(t,n){"use strict";function r(t,e){return t.set(e[0],e[1]),t}
function i(t,e){return t.add(e),t}
function o(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}
return t.apply(e,n)}
function a(t,e){for(var n=-1,r=t?t.length:0;++n<r&&e(t[n],n,t)!==!1;);return t}
function s(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}
function l(t,e,n,r){var i=-1,o=t?t.length:0;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}
function u(t){return function(e){return null==e?void 0:e[t]}}
function c(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}
function f(t){return function(e){return t(e)}}
function d(t,e){return null==t?void 0:t[e]}
function h(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}
catch(n){}
return e}
function p(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}
function y(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}
),n}
function g(t,e){return function(n){return t(e(n))}}
function v(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}
),n}
function m(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function b(){this.__data__=un?un(null):{}}
function _(t){return this.has(t)&&delete this.__data__[t]}
function E(t){var e=this.__data__;if(un){var n=e[t];return n===Kt?void 0:n}
return Ue.call(e,t)?e[t]:void 0}
function T(t){var e=this.__data__;return un?void 0!==e[t]:Ue.call(e,t)}
function w(t,e){var n=this.__data__;return n[t]=un&&void 0===e?Kt:e,this}
function A(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function S(){this.__data__=[]}
function k(t){var e=this.__data__,n=V(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Ze.call(e,n,1),!0}
function L(t){var e=this.__data__,n=V(e,t);return n<0?void 0:e[n][1]}
function O(t){return V(this.__data__,t)>-1}
function R(t,e){var n=this.__data__,r=V(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}
function C(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function P(){this.__data__={hash:new m,map:new(on||A),string:new m}}
function D(t){return gt(this,t)["delete"](t)}
function I(t){return gt(this,t).get(t)}
function x(t){return gt(this,t).has(t)}
function N(t,e){return gt(this,t).set(t,e),this}
function M(t){this.__data__=new A(t)}
function F(){this.__data__=new A}
function j(t){return this.__data__["delete"](t)}
function B(t){return this.__data__.get(t)}
function U(t){return this.__data__.has(t)}
function G(t,e){var n=this.__data__;if(n instanceof A){var r=n.__data__;if(!on||r.length<Vt-1)return r.push([t,e]),this;n=this.__data__=new C(r)}
return n.set(t,e),this}
function Y(t,e,n){(void 0===n||Ot(t[e],n))&&("number"!=typeof e||void 0!==n||e in t)||(t[e]=n)}
function $(t,e,n){var r=t[e];Ue.call(t,e)&&Ot(r,n)&&(void 0!==n||e in t)||(t[e]=n)}
function V(t,e){for(var n=t.length;n--;)if(Ot(t[n][0],e))return n;return-1}
function K(t,e){return t&&dt(e,Bt(e),t)}
function H(t,e,n,r,i,o,s){var l;if(r&&(l=o?r(t,i,o,s):r(t)),void 0!==l)return l;if(!xt(t))return t;var u=Tn(t);if(u){if(l=mt(t),!e)return ft(t,l)}
else{var c=En(t),f=c==Jt||c==Qt;if(wn(t))return rt(t,e);if(c==ne||c==zt||f&&!o){if(h(t))return o?t:{}
;if(l=bt(f?{}
:t),!e)return ht(t,K(l,t))}
else{if(!Se[c])return o?t:{}
;l=_t(t,c,H,e)}}
s||(s=new M);var d=s.get(t);if(d)return d;if(s.set(t,l),!u)var p=n?yt(t):Bt(t);return a(p||t,function(i,o){p&&(o=i,i=t[o]),$(l,o,H(i,e,n,r,o,t,s))}
),n||s["delete"](t),l}
function z(t){return xt(t)?qe(t):{}}
function W(t,e,n){var r=e(t);return Tn(t)?r:s(r,n(t))}
function q(t){return Ye.call(t)}
function X(t,e){return null!=t&&(Ue.call(t,e)||"object"==("undefined"==typeof t?"undefined":$t(t))&&e in t&&null===bn(t))}
function Z(t){if(!xt(t)||St(t))return!1;var e=Dt(t)||h(t)?$e:Te;return e.test(Lt(t))}
function J(t){return Nt(t)&&It(t.length)&&!!Ae[Ye.call(t)]}
function Q(t){t=null==t?t:Object(t);var e=[];for(var n in t)e.push(n);return e}
function tt(t,e,n,r,i){if(t!==e){if(!Tn(e)&&!An(e))var o=Ut(e);a(o||e,function(a,s){if(o&&(s=a,a=e[s]),xt(a))i||(i=new M),et(t,e,s,n,tt,r,i);else{var l=r?r(t[s],a,s+"",t,e,i):void 0;void 0===l&&(l=a),Y(t,s,l)}}
)}}
function et(t,e,n,r,i,o,a){var s=t[n],l=e[n],u=a.get(l);if(u)return void Y(t,n,u);var c=o?o(s,l,n+"",t,e,a):void 0,f=void 0===c;f&&(c=l,Tn(l)||An(l)?Tn(s)?c=s:Pt(s)?c=ft(s):(f=!1,c=H(l,!0)):Mt(l)||Rt(l)?Rt(s)?c=jt(s):!xt(s)||r&&Dt(s)?(f=!1,c=H(l,!0)):c=s:f=!1),f&&(a.set(l,c),i(c,l,r,o,a),a["delete"](l)),Y(t,n,c)}
function nt(t,e){return e=nn(void 0===e?t.length-1:e,0),function(){for(var n=arguments,r=-1,i=nn(n.length-e,0),a=Array(i);++r<i;)a[r]=n[e+r];r=-1;for(var s=Array(e+1);++r<e;)s[r]=n[r];return s[e]=a,o(t,this,s)}}
function rt(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}
function it(t){var e=new t.constructor(t.byteLength);return new ze(e).set(new ze(t)),e}
function ot(t,e){var n=e?it(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}
function at(t,e,n){var i=e?n(y(t),!0):y(t);return l(i,r,new t.constructor)}
function st(t){var e=new t.constructor(t.source,Ee.exec(t));return e.lastIndex=t.lastIndex,e}
function lt(t,e,n){var r=e?n(v(t),!0):v(t);return l(r,i,new t.constructor)}
function ut(t){return gn?Object(gn.call(t)):{}}
function ct(t,e){var n=e?it(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}
function ft(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}
function dt(t,e,n,r){n||(n={}
);for(var i=-1,o=e.length;++i<o;){var a=e[i],s=r?r(n[a],t[a],a,n,t):void 0;$(n,a,void 0===s?t[a]:s)}
return n}
function ht(t,e){return dt(t,_n(t),e)}
function pt(t){return nt(function(e,n){var r=-1,i=n.length,o=i>1?n[i-1]:void 0,a=i>2?n[2]:void 0;for(o=t.length>3&&"function"==typeof o?(i--,o):void 0,a&&wt(n[0],n[1],a)&&(o=i<3?void 0:o,i=1),e=Object(e);++r<i;){var s=n[r];s&&t(e,s,r,o)}
return e}
)}
function yt(t){return W(t,Bt,_n)}
function gt(t,e){var n=t.__data__;return At(e)?n["string"==typeof e?"string":"hash"]:n.map}
function vt(t,e){var n=d(t,e);return Z(n)?n:void 0}
function mt(t){var e=t.length,n=t.constructor(e);return e&&"string"==typeof t[0]&&Ue.call(t,"index")&&(n.index=t.index,n.input=t.input),n}
function bt(t){return"function"!=typeof t.constructor||kt(t)?{}
:z(bn(t))}
function _t(t,e,n,r){var i=t.constructor;switch(e){case ue:return it(t);case qt:case Xt:return new i((+t));case ce:return ot(t,r);case fe:case de:case he:case pe:case ye:case ge:case ve:case me:case be:return ct(t,r);case te:return at(t,r,n);case ee:case ae:return new i(t);case ie:return st(t);case oe:return lt(t,r,n);case se:return ut(t)}}
function Et(t){var e=t?t.length:void 0;return It(e)&&(Tn(t)||Ft(t)||Rt(t))?c(e,String):null}
function Tt(t,e){return e=null==e?Ht:e,!!e&&("number"==typeof t||we.test(t))&&t>-1&&t%1==0&&t<e}
function wt(t,e,n){if(!xt(n))return!1;var r="undefined"==typeof e?"undefined":$t(e);return!!("number"==r?Ct(n)&&Tt(e,n.length):"string"==r&&e in n)&&Ot(n[e],t)}
function At(t){var e="undefined"==typeof t?"undefined":$t(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}
function St(t){return!!je&&je in t}
function kt(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||Me;return t===n}
function Lt(t){if(null!=t){try{return Be.call(t)}
catch(e){}
try{return t+""}
catch(e){}}
return""}
function Ot(t,e){return t===e||t!==t&&e!==e}
function Rt(t){return Pt(t)&&Ue.call(t,"callee")&&(!Xe.call(t,"callee")||Ye.call(t)==zt)}
function Ct(t){return null!=t&&It(mn(t))&&!Dt(t)}
function Pt(t){return Nt(t)&&Ct(t)}
function Dt(t){var e=xt(t)?Ye.call(t):"";return e==Jt||e==Qt}
function It(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Ht}
function xt(t){var e="undefined"==typeof t?"undefined":$t(t);return!!t&&("object"==e||"function"==e)}
function Nt(t){return!!t&&"object"==("undefined"==typeof t?"undefined":$t(t))}
function Mt(t){if(!Nt(t)||Ye.call(t)!=ne||h(t))return!1;var e=bn(t);if(null===e)return!0;var n=Ue.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Be.call(n)==Ge}
function Ft(t){return"string"==typeof t||!Tn(t)&&Nt(t)&&Ye.call(t)==ae}
function jt(t){return dt(t,Ut(t))}
function Bt(t){var e=kt(t);if(!e&&!Ct(t))return vn(t);var n=Et(t),r=!!n,i=n||[],o=i.length;for(var a in t)!X(t,a)||r&&("length"==a||Tt(a,o))||e&&"constructor"==a||i.push(a);return i}
function Ut(t){for(var e=-1,n=kt(t),r=Q(t),i=r.length,o=Et(t),a=!!o,s=o||[],l=s.length;++e<i;){var u=r[e];a&&("length"==u||Tt(u,l))||"constructor"==u&&(n||!Ue.call(t,u))||s.push(u)}
return s}
function Gt(){return[]}
function Yt(){return!1}
var $t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
,Vt=200,Kt="__lodash_hash_undefined__",Ht=9007199254740991,zt="[object Arguments]",Wt="[object Array]",qt="[object Boolean]",Xt="[object Date]",Zt="[object Error]",Jt="[object Function]",Qt="[object GeneratorFunction]",te="[object Map]",ee="[object Number]",ne="[object Object]",re="[object Promise]",ie="[object RegExp]",oe="[object Set]",ae="[object String]",se="[object Symbol]",le="[object WeakMap]",ue="[object ArrayBuffer]",ce="[object DataView]",fe="[object Float32Array]",de="[object Float64Array]",he="[object Int8Array]",pe="[object Int16Array]",ye="[object Int32Array]",ge="[object Uint8Array]",ve="[object Uint8ClampedArray]",me="[object Uint16Array]",be="[object Uint32Array]",_e=/[\\^$.*+?()[\]{}
|]/g,Ee=/\w*$/,Te=/^\[object .+?Constructor\]$/,we=/^(?:0|[1-9]\d*)$/,Ae={}
;Ae[fe]=Ae[de]=Ae[he]=Ae[pe]=Ae[ye]=Ae[ge]=Ae[ve]=Ae[me]=Ae[be]=!0,Ae[zt]=Ae[Wt]=Ae[ue]=Ae[qt]=Ae[ce]=Ae[Xt]=Ae[Zt]=Ae[Jt]=Ae[te]=Ae[ee]=Ae[ne]=Ae[ie]=Ae[oe]=Ae[ae]=Ae[le]=!1;var Se={}
;Se[zt]=Se[Wt]=Se[ue]=Se[ce]=Se[qt]=Se[Xt]=Se[fe]=Se[de]=Se[he]=Se[pe]=Se[ye]=Se[te]=Se[ee]=Se[ne]=Se[ie]=Se[oe]=Se[ae]=Se[se]=Se[ge]=Se[ve]=Se[me]=Se[be]=!0,Se[Zt]=Se[Jt]=Se[le]=!1;var ke="object"==("undefined"==typeof t?"undefined":$t(t))&&t&&t.Object===Object&&t,Le="object"==("undefined"==typeof self?"undefined":$t(self))&&self&&self.Object===Object&&self,Oe=ke||Le||Function("return this")(),Re=ke&&"object"==$t(e)&&e,Ce=Re&&"object"==$t(n)&&n,Pe=Ce&&Ce.exports===Re,De=Pe&&ke.process,Ie=function(){try{return De&&De.binding("util")}
catch(t){}}
(),xe=Ie&&Ie.isTypedArray,Ne=Array.prototype,Me=Object.prototype,Fe=Oe["__core-js_shared__"],je=function(){var t=/[^.]+$/.exec(Fe&&Fe.keys&&Fe.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}
(),Be=Function.prototype.toString,Ue=Me.hasOwnProperty,Ge=Be.call(Object),Ye=Me.toString,$e=RegExp("^"+Be.call(Ue).replace(_e,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ve=Pe?Oe.Buffer:void 0,Ke=Oe.Reflect,He=Oe.Symbol,ze=Oe.Uint8Array,We=Ke?Ke.enumerate:void 0,qe=Object.create,Xe=Me.propertyIsEnumerable,Ze=Ne.splice,Je=Object.getPrototypeOf,Qe=Object.getOwnPropertySymbols,tn=Ve?Ve.isBuffer:void 0,en=Object.keys,nn=Math.max,rn=vt(Oe,"DataView"),on=vt(Oe,"Map"),an=vt(Oe,"Promise"),sn=vt(Oe,"Set"),ln=vt(Oe,"WeakMap"),un=vt(Object,"create"),cn=Lt(rn),fn=Lt(on),dn=Lt(an),hn=Lt(sn),pn=Lt(ln),yn=He?He.prototype:void 0,gn=yn?yn.valueOf:void 0;m.prototype.clear=b,m.prototype["delete"]=_,m.prototype.get=E,m.prototype.has=T,m.prototype.set=w,A.prototype.clear=S,A.prototype["delete"]=k,A.prototype.get=L,A.prototype.has=O,A.prototype.set=R,C.prototype.clear=P,C.prototype["delete"]=D,C.prototype.get=I,C.prototype.has=x,C.prototype.set=N,M.prototype.clear=F,M.prototype["delete"]=j,M.prototype.get=B,M.prototype.has=U,M.prototype.set=G;var vn=g(en,Object);We&&!Xe.call({valueOf:1}
,"valueOf")&&(Q=function(t){return p(We(t))}
);var mn=u("length"),bn=g(Je,Object),_n=Qe?g(Qe,Object):Gt,En=q;(rn&&En(new rn(new ArrayBuffer(1)))!=ce||on&&En(new on)!=te||an&&En(an.resolve())!=re||sn&&En(new sn)!=oe||ln&&En(new ln)!=le)&&(En=function(t){var e=Ye.call(t),n=e==ne?t.constructor:void 0,r=n?Lt(n):void 0;if(r)switch(r){case cn:return ce;case fn:return te;case dn:return re;case hn:return oe;case pn:return le}
return e}
);var Tn=Array.isArray,wn=tn||Yt,An=xe?f(xe):J,Sn=pt(function(t,e,n){tt(t,e,n)}
);n.exports=Sn}
).call(e,function(){return this}
(),n(18)(t))}
,function(t,e){"use strict";function n(t,e){var n;if("function"!=typeof e)throw new TypeError(d);return t=u(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=void 0),n}}
function r(t){return n(2,t)}
function i(t){var e=o(t)?S.call(t):"";return e==g||e==v}
function o(t){var e="undefined"==typeof t?"undefined":f(t);return!!t&&("object"==e||"function"==e)}
function a(t){return!!t&&"object"==("undefined"==typeof t?"undefined":f(t))}
function s(t){return"symbol"==("undefined"==typeof t?"undefined":f(t))||a(t)&&S.call(t)==m}
function l(t){if(!t)return 0===t?t:0;if(t=c(t),t===h||t===-h){var e=t<0?-1:1;return e*p}
return t===t?t:0}
function u(t){var e=l(t),n=e%1;return e===e?n?e-n:e:0}
function c(t){if("number"==typeof t)return t;if(s(t))return y;if(o(t)){var e=i(t.valueOf)?t.valueOf():t;t=o(e)?e+"":e}
if("string"!=typeof t)return 0===t?t:+t;t=t.replace(b,"");var n=E.test(t);return n||T.test(t)?w(t.slice(2),n?2:8):_.test(t)?y:+t}
var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
,d="Expected a function",h=1/0,p=1.7976931348623157e308,y=NaN,g="[object Function]",v="[object GeneratorFunction]",m="[object Symbol]",b=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,T=/^0o[0-7]+$/i,w=parseInt,A=Object.prototype,S=A.toString;t.exports=r}
,function(t,e){(function(e){"use strict";function n(t,e){return null==t?void 0:t[e]}
function r(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}
catch(n){}
return e}
function i(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function o(){this.__data__=pt?pt(null):{}}
function a(t){return this.has(t)&&delete this.__data__[t]}
function s(t){var e=this.__data__;if(pt){var n=e[t];return n===$?void 0:n}
return lt.call(e,t)?e[t]:void 0}
function l(t){var e=this.__data__;return pt?void 0!==e[t]:lt.call(e,t)}
function u(t,e){var n=this.__data__;return n[t]=pt&&void 0===e?$:e,this}
function c(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function f(){this.__data__=[]}
function d(t){var e=this.__data__,n=T(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():dt.call(e,n,1),!0}
function h(t){var e=this.__data__,n=T(e,t);return n<0?void 0:e[n][1]}
function p(t){return T(this.__data__,t)>-1}
function y(t,e){var n=this.__data__,r=T(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}
function g(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function v(){this.__data__={hash:new i,map:new(ht||c),string:new i}}
function m(t){return k(this,t)["delete"](t)}
function b(t){return k(this,t).get(t)}
function _(t){return k(this,t).has(t)}
function E(t,e){return k(this,t).set(t,e),this}
function T(t,e){for(var n=t.length;n--;)if(x(t[n][0],e))return n;return-1}
function w(t){if(!M(t)||C(t))return!1;var e=N(t)||r(t)?ct:Q;return e.test(D(t))}
function A(t){if("string"==typeof t)return t;if(j(t))return gt?gt.call(t):"";var e=t+"";return"0"==e&&1/t==-V?"-0":e}
function S(t){return mt(t)?t:vt(t)}
function k(t,e){var n=t.__data__;return R(e)?n["string"==typeof e?"string":"hash"]:n.map}
function L(t,e){var r=n(t,e);return w(r)?r:void 0}
function O(t,e){if(mt(t))return!1;var n="undefined"==typeof t?"undefined":G(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!j(t))||(q.test(t)||!W.test(t)||null!=e&&t in Object(e))}
function R(t){var e="undefined"==typeof t?"undefined":G(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}
function C(t){return!!at&&at in t}
function P(t){if("string"==typeof t||j(t))return t;var e=t+"";return"0"==e&&1/t==-V?"-0":e}
function D(t){if(null!=t){try{return st.call(t)}
catch(e){}
try{return t+""}
catch(e){}}
return""}
function I(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(Y);var n=function r(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=t.apply(this,n);return r.cache=o.set(i,a),a}
;return n.cache=new(I.Cache||g),n}
function x(t,e){return t===e||t!==t&&e!==e}
function N(t){var e=M(t)?ut.call(t):"";return e==K||e==H}
function M(t){var e="undefined"==typeof t?"undefined":G(t);return!!t&&("object"==e||"function"==e)}
function F(t){return!!t&&"object"==("undefined"==typeof t?"undefined":G(t))}
function j(t){return"symbol"==("undefined"==typeof t?"undefined":G(t))||F(t)&&ut.call(t)==z}
function B(t){return null==t?"":A(t)}
function U(t,e,n){e=O(e,t)?[e]:S(e);var r=-1,i=e.length;for(i||(t=void 0,i=1);++r<i;){var o=null==t?void 0:t[P(e[r])];void 0===o&&(r=i,o=n),t=N(o)?o.call(t):o}
return t}
var G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
,Y="Expected a function",$="__lodash_hash_undefined__",V=1/0,K="[object Function]",H="[object GeneratorFunction]",z="[object Symbol]",W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,q=/^\w*$/,X=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g,Z=/[\\^$.*+?()[\]{}
|]/g,J=/\\(\\)?/g,Q=/^\[object .+?Constructor\]$/,tt="object"==("undefined"==typeof e?"undefined":G(e))&&e&&e.Object===Object&&e,et="object"==("undefined"==typeof self?"undefined":G(self))&&self&&self.Object===Object&&self,nt=tt||et||Function("return this")(),rt=Array.prototype,it=Object.prototype,ot=nt["__core-js_shared__"],at=function(){var t=/[^.]+$/.exec(ot&&ot.keys&&ot.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}
(),st=Function.prototype.toString,lt=it.hasOwnProperty,ut=it.toString,ct=RegExp("^"+st.call(lt).replace(Z,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ft=nt.Symbol,dt=rt.splice,ht=L(nt,"Map"),pt=L(Object,"create"),yt=ft?ft.prototype:void 0,gt=yt?yt.toString:void 0;i.prototype.clear=o,i.prototype["delete"]=a,i.prototype.get=s,i.prototype.has=l,i.prototype.set=u,c.prototype.clear=f,c.prototype["delete"]=d,c.prototype.get=h,c.prototype.has=p,c.prototype.set=y,g.prototype.clear=v,g.prototype["delete"]=m,g.prototype.get=b,g.prototype.has=_,g.prototype.set=E;var vt=I(function(t){var e=[];return B(t).replace(X,function(t,n,r,i){e.push(r?i.replace(J,"$1"):n||t)}
),e}
);I.Cache=g;var mt=Array.isArray;t.exports=U}
).call(e,function(){return this}
())}
,function(t,e,n){(function(t,n){"use strict";function r(t,e){var n=t?t.length:0;return!!n&&s(t,e,0)>-1}
function i(t,e,n){for(var r=-1,i=t?t.length:0;++r<i;)if(n(e,t[r]))return!0;return!1}
function o(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}
function a(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}
function s(t,e,n){if(e!==e)return a(t,l,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}
function l(t){return t!==t}
function u(t){return function(e){return null==e?void 0:e[t]}}
function c(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}
function f(t){return function(e){return t(e)}}
function d(t,e){return t.has(e)}
function h(t,e){return null==t?void 0:t[e]}
function p(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}
catch(n){}
return e}
function y(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}
),n}
function g(t,e){return function(n){return t(e(n))}}
function v(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}
),n}
function m(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function b(){this.__data__=ln?ln(null):{}}
function _(t){return this.has(t)&&delete this.__data__[t]}
function E(t){var e=this.__data__;if(ln){var n=e[t];return n===zt?void 0:n}
return ze.call(e,t)?e[t]:void 0}
function T(t){var e=this.__data__;return ln?void 0!==e[t]:ze.call(e,t)}
function w(t,e){var n=this.__data__;return n[t]=ln&&void 0===e?zt:e,this}
function A(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function S(){this.__data__=[]}
function k(t){var e=this.__data__,n=K(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Qe.call(e,n,1),!0}
function L(t){var e=this.__data__,n=K(e,t);return n<0?void 0:e[n][1]}
function O(t){return K(this.__data__,t)>-1}
function R(t,e){var n=this.__data__,r=K(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}
function C(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function P(){this.__data__={hash:new m,map:new(rn||A),string:new m}}
function D(t){return ft(this,t)["delete"](t)}
function I(t){return ft(this,t).get(t)}
function x(t){return ft(this,t).has(t)}
function N(t,e){return ft(this,t).set(t,e),this}
function M(t){var e=-1,n=t?t.length:0;for(this.__data__=new C;++e<n;)this.add(t[e])}
function F(t){return this.__data__.set(t,zt),this}
function j(t){return this.__data__.has(t)}
function B(t){this.__data__=new A(t)}
function U(){this.__data__=new A}
function G(t){return this.__data__["delete"](t)}
function Y(t){return this.__data__.get(t)}
function $(t){return this.__data__.has(t)}
function V(t,e){var n=this.__data__;if(n instanceof A){var r=n.__data__;if(!rn||r.length<Kt-1)return r.push([t,e]),this;n=this.__data__=new C(r)}
return n.set(t,e),this}
function K(t,e){for(var n=t.length;n--;)if(Lt(t[n][0],e))return n;return-1}
function H(t,e){e=vt(e,t)?[e]:st(e);for(var n=0,r=e.length;null!=t&&n<r;)t=t[wt(e[n++])];return n&&n==r?t:void 0}
function z(t){return We.call(t)}
function W(t,e){return null!=t&&(ze.call(t,e)||"object"==("undefined"==typeof t?"undefined":Vt(t))&&e in t&&null===_n(t))}
function q(t,e){return null!=t&&e in Object(t)}
function X(t,e,n,r,i){return t===e||(null==t||null==e||!It(t)&&!xt(e)?t!==t&&e!==e:Z(t,e,X,n,r,i))}
function Z(t,e,n,r,i,o){var a=wn(t),s=wn(e),l=Qt,u=Qt;a||(l=En(t),l=l==Jt?se:l),s||(u=En(e),u=u==Jt?se:u);var c=l==se&&!p(t),f=u==se&&!p(e),d=l==u;if(d&&!c)return o||(o=new B),a||An(t)?lt(t,e,n,r,i,o):ut(t,e,l,n,r,i,o);if(!(i&qt)){var h=c&&ze.call(t,"__wrapped__"),y=f&&ze.call(e,"__wrapped__");if(h||y){var g=h?t.value():t,v=y?e.value():e;return o||(o=new B),n(g,v,r,i,o)}}
return!!d&&(o||(o=new B),ct(t,e,n,r,i,o))}
function J(t,e,n,r){var i=n.length,o=i,a=!r;if(null==t)return!o;for(t=Object(t);i--;){var s=n[i];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}
for(;++i<o;){s=n[i];var l=s[0],u=t[l],c=s[1];if(a&&s[2]){if(void 0===u&&!(l in t))return!1}
else{var f=new B;if(r)var d=r(u,c,l,t,e,f);if(!(void 0===d?X(c,u,r,Wt|qt,f):d))return!1}}
return!0}
function Q(t){if(!It(t)||bt(t))return!1;var e=Pt(t)||p(t)?qe:Ce;return e.test(At(t))}
function tt(t){return xt(t)&&Dt(t.length)&&!!De[We.call(t)]}
function et(t){return"function"==typeof t?t:null==t?Gt:"object"==("undefined"==typeof t?"undefined":Vt(t))?wn(t)?rt(t[0],t[1]):nt(t):$t(t)}
function nt(t){var e=dt(t);return 1==e.length&&e[0][2]?Tt(e[0][0],e[0][1]):function(n){return n===t||J(n,t,e)}}
function rt(t,e){return vt(t)&&Et(e)?Tt(wt(t),e):function(n){var r=jt(n,t);return void 0===r&&r===e?Bt(n,t):X(e,r,void 0,Wt|qt)}}
function it(t){return function(e){return H(e,t)}}
function ot(t){if("string"==typeof t)return t;if(Mt(t))return gn?gn.call(t):"";var e=t+"";return"0"==e&&1/t==-Xt?"-0":e}
function at(t,e,n){var o=-1,a=r,s=t.length,l=!0,u=[],c=u;if(n)l=!1,a=i;else if(s>=Kt){var f=e?null:mn(t);if(f)return v(f);l=!1,a=d,c=new M}
else c=e?[]:u;t:for(;++o<s;){var h=t[o],p=e?e(h):h;if(h=n||0!==h?h:0,l&&p===p){for(var y=c.length;y--;)if(c[y]===p)continue t;e&&c.push(p),u.push(h)}
else a(c,p,n)||(c!==u&&c.push(p),u.push(h))}
return u}
function st(t){return wn(t)?t:Tn(t)}
function lt(t,e,n,r,i,a){var s=i&qt,l=t.length,u=e.length;if(l!=u&&!(s&&u>l))return!1;var c=a.get(t);if(c&&a.get(e))return c==e;var f=-1,d=!0,h=i&Wt?new M:void 0;for(a.set(t,e),a.set(e,t);++f<l;){var p=t[f],y=e[f];if(r)var g=s?r(y,p,f,e,t,a):r(p,y,f,t,e,a);if(void 0!==g){if(g)continue;d=!1;break}
if(h){if(!o(e,function(t,e){if(!h.has(e)&&(p===t||n(p,t,r,i,a)))return h.add(e)}
)){d=!1;break}}
else if(p!==y&&!n(p,y,r,i,a)){d=!1;break}}
return a["delete"](t),d}
function ut(t,e,n,r,i,o,a){switch(n){case ye:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case pe:return!(t.byteLength!=e.byteLength||!r(new Ze(t),new Ze(e)));case te:case ee:case ae:return Lt(+t,+e);case ne:return t.name==e.name&&t.message==e.message;case ue:case fe:return t==e+"";case oe:var s=y;case ce:var l=o&qt;if(s||(s=v),t.size!=e.size&&!l)return!1;var u=a.get(t);if(u)return u==e;o|=Wt,a.set(t,e);var c=lt(s(t),s(e),r,i,o,a);return a["delete"](t),c;case de:if(yn)return yn.call(t)==yn.call(e)}
return!1}
function ct(t,e,n,r,i,o){var a=i&qt,s=Ut(t),l=s.length,u=Ut(e),c=u.length;if(l!=c&&!a)return!1;for(var f=l;f--;){var d=s[f];if(!(a?d in e:W(e,d)))return!1}
var h=o.get(t);if(h&&o.get(e))return h==e;var p=!0;o.set(t,e),o.set(e,t);for(var y=a;++f<l;){d=s[f];var g=t[d],v=e[d];if(r)var m=a?r(v,g,d,e,t,o):r(g,v,d,t,e,o);if(!(void 0===m?g===v||n(g,v,r,i,o):m)){p=!1;break}
y||(y="constructor"==d)}
if(p&&!y){var b=t.constructor,_=e.constructor;b!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _)&&(p=!1)}
return o["delete"](t),p}
function ft(t,e){var n=t.__data__;return mt(e)?n["string"==typeof e?"string":"hash"]:n.map}
function dt(t){for(var e=Ut(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,Et(i)]}
return e}
function ht(t,e){var n=h(t,e);return Q(n)?n:void 0}
function pt(t,e,n){e=vt(e,t)?[e]:st(e);for(var r,i=-1,o=e.length;++i<o;){var a=wt(e[i]);if(!(r=null!=t&&n(t,a)))break;t=t[a]}
if(r)return r;var o=t?t.length:0;return!!o&&Dt(o)&&gt(a,o)&&(wn(t)||Nt(t)||Ot(t))}
function yt(t){var e=t?t.length:void 0;return Dt(e)&&(wn(t)||Nt(t)||Ot(t))?c(e,String):null}
function gt(t,e){return e=null==e?Zt:e,!!e&&("number"==typeof t||Pe.test(t))&&t>-1&&t%1==0&&t<e}
function vt(t,e){if(wn(t))return!1;var n="undefined"==typeof t?"undefined":Vt(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Mt(t))||(ke.test(t)||!Se.test(t)||null!=e&&t in Object(e))}
function mt(t){var e="undefined"==typeof t?"undefined":Vt(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}
function bt(t){return!!Ke&&Ke in t}
function _t(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||$e;return t===n}
function Et(t){return t===t&&!It(t)}
function Tt(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}
function wt(t){if("string"==typeof t||Mt(t))return t;var e=t+"";return"0"==e&&1/t==-Xt?"-0":e}
function At(t){if(null!=t){try{return He.call(t)}
catch(e){}
try{return t+""}
catch(e){}}
return""}
function St(t,e){return t&&t.length?at(t,et(e,2)):[]}
function kt(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(Ht);var n=function r(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=t.apply(this,n);return r.cache=o.set(i,a),a}
;return n.cache=new(kt.Cache||C),n}
function Lt(t,e){return t===e||t!==t&&e!==e}
function Ot(t){return Ct(t)&&ze.call(t,"callee")&&(!Je.call(t,"callee")||We.call(t)==Jt)}
function Rt(t){return null!=t&&Dt(bn(t))&&!Pt(t)}
function Ct(t){return xt(t)&&Rt(t)}
function Pt(t){var e=It(t)?We.call(t):"";return e==re||e==ie}
function Dt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Zt}
function It(t){var e="undefined"==typeof t?"undefined":Vt(t);return!!t&&("object"==e||"function"==e)}
function xt(t){return!!t&&"object"==("undefined"==typeof t?"undefined":Vt(t))}
function Nt(t){return"string"==typeof t||!wn(t)&&xt(t)&&We.call(t)==fe}
function Mt(t){return"symbol"==("undefined"==typeof t?"undefined":Vt(t))||xt(t)&&We.call(t)==de}
function Ft(t){return null==t?"":ot(t)}
function jt(t,e,n){var r=null==t?void 0:H(t,e);return void 0===r?n:r}
function Bt(t,e){return null!=t&&pt(t,e,q)}
function Ut(t){var e=_t(t);if(!e&&!Rt(t))return vn(t);var n=yt(t),r=!!n,i=n||[],o=i.length;for(var a in t)!W(t,a)||r&&("length"==a||gt(a,o))||e&&"constructor"==a||i.push(a);return i}
function Gt(t){return t}
function Yt(){}
function $t(t){return vt(t)?u(wt(t)):it(t)}
var Vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}
:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}
,Kt=200,Ht="Expected a function",zt="__lodash_hash_undefined__",Wt=1,qt=2,Xt=1/0,Zt=9007199254740991,Jt="[object Arguments]",Qt="[object Array]",te="[object Boolean]",ee="[object Date]",ne="[object Error]",re="[object Function]",ie="[object GeneratorFunction]",oe="[object Map]",ae="[object Number]",se="[object Object]",le="[object Promise]",ue="[object RegExp]",ce="[object Set]",fe="[object String]",de="[object Symbol]",he="[object WeakMap]",pe="[object ArrayBuffer]",ye="[object DataView]",ge="[object Float32Array]",ve="[object Float64Array]",me="[object Int8Array]",be="[object Int16Array]",_e="[object Int32Array]",Ee="[object Uint8Array]",Te="[object Uint8ClampedArray]",we="[object Uint16Array]",Ae="[object Uint32Array]",Se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ke=/^\w*$/,Le=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g,Oe=/[\\^$.*+?()[\]{}
|]/g,Re=/\\(\\)?/g,Ce=/^\[object .+?Constructor\]$/,Pe=/^(?:0|[1-9]\d*)$/,De={}
;De[ge]=De[ve]=De[me]=De[be]=De[_e]=De[Ee]=De[Te]=De[we]=De[Ae]=!0,De[Jt]=De[Qt]=De[pe]=De[te]=De[ye]=De[ee]=De[ne]=De[re]=De[oe]=De[ae]=De[se]=De[ue]=De[ce]=De[fe]=De[he]=!1;var Ie="object"==("undefined"==typeof t?"undefined":Vt(t))&&t&&t.Object===Object&&t,xe="object"==("undefined"==typeof self?"undefined":Vt(self))&&self&&self.Object===Object&&self,Ne=Ie||xe||Function("return this")(),Me=Ie&&"object"==Vt(e)&&e,Fe=Me&&"object"==Vt(n)&&n,je=Fe&&Fe.exports===Me,Be=je&&Ie.process,Ue=function(){try{return Be&&Be.binding("util")}
catch(t){}}
(),Ge=Ue&&Ue.isTypedArray,Ye=Array.prototype,$e=Object.prototype,Ve=Ne["__core-js_shared__"],Ke=function(){var t=/[^.]+$/.exec(Ve&&Ve.keys&&Ve.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}
(),He=Function.prototype.toString,ze=$e.hasOwnProperty,We=$e.toString,qe=RegExp("^"+He.call(ze).replace(Oe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Xe=Ne.Symbol,Ze=Ne.Uint8Array,Je=$e.propertyIsEnumerable,Qe=Ye.splice,tn=Object.getPrototypeOf,en=Object.keys,nn=ht(Ne,"DataView"),rn=ht(Ne,"Map"),on=ht(Ne,"Promise"),an=ht(Ne,"Set"),sn=ht(Ne,"WeakMap"),ln=ht(Object,"create"),un=At(nn),cn=At(rn),fn=At(on),dn=At(an),hn=At(sn),pn=Xe?Xe.prototype:void 0,yn=pn?pn.valueOf:void 0,gn=pn?pn.toString:void 0;m.prototype.clear=b,m.prototype["delete"]=_,m.prototype.get=E,m.prototype.has=T,m.prototype.set=w,A.prototype.clear=S,A.prototype["delete"]=k,A.prototype.get=L,A.prototype.has=O,A.prototype.set=R,C.prototype.clear=P,C.prototype["delete"]=D,C.prototype.get=I,C.prototype.has=x,C.prototype.set=N,M.prototype.add=M.prototype.push=F,M.prototype.has=j,B.prototype.clear=U,B.prototype["delete"]=G,B.prototype.get=Y,B.prototype.has=$,B.prototype.set=V;var vn=g(en,Object),mn=an&&1/v(new an([,-0]))[1]==Xt?function(t){return new an(t)}
:Yt,bn=u("length"),_n=g(tn,Object),En=z;(nn&&En(new nn(new ArrayBuffer(1)))!=ye||rn&&En(new rn)!=oe||on&&En(on.resolve())!=le||an&&En(new an)!=ce||sn&&En(new sn)!=he)&&(En=function(t){var e=We.call(t),n=e==se?t.constructor:void 0,r=n?At(n):void 0;if(r)switch(r){case un:return ye;case cn:return oe;case fn:return le;case dn:return ce;case hn:return he}
return e}
);var Tn=kt(function(t){var e=[];return Ft(t).replace(Le,function(t,n,r,i){e.push(r?i.replace(Re,"$1"):n||t)}
),e}
);kt.Cache=C;var wn=Array.isArray,An=Ge?f(Ge):tt;n.exports=St}
).call(e,function(){return this}
(),n(18)(t))}
,function(t,e){"use strict";function n(t){return(t+"").replace(/[.?*+^$[\]\\(){}
|-]/g,"\\$&")}
var r=arguments[2],i=r.m,o=arguments[0].id,a=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{}
,id:r,loaded:!1}
;return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}
var n={}
;e.m=t,e.c=n,e.oe=function(t){throw t}
,e.p="";var r=e(e.s=entryModule);return r["default"]||r}
;t.exports=function(t){for(var e,s=[],l=[],u=Object.keys(i),c=0,f=u.length;c<f;c++){var d=u[c];if(i[d]){var h=i[d].toString();s[d]=h;var p=h.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);if(p){var y=p[1];if(h.indexOf(y+"("+o+")")>-1)for(var g,v=new RegExp(n(y)+"\\((\\d+)\\)","g");g=v.exec(h);)g[1]!=""+o&&l.push(g[1])}}}
var m=t.toString().replace(/"use strict";\n\n/,""),b=m.replace(/^function\s?\((.*)\)(\s?)\{(\n"use strict";\n)?/,"function($1)$2{"),_=m.replace(/^function\s?\((.*)\)(\s?)\{(\n"use strict";\n)?/,"function ($1)$2{"),e=l.find(function(e){var n=i[e].toString();if(n.indexOf(b)>-1||n.indexOf(_)>-1){var o=r(e);return(!o||o!==t&&o["default"]!==t)&&(i[e]=n.substring(0,n.length-1)+"\n"+m.match(/function\s?(.+?)\s?\(.*/)[1]+"();\n}
"),!0}
return!1}
);if("undefined"==typeof e)throw new Error("webworkify-webpack:Could not locate module containing worker function!");var E="window ={}
;\nvar fn = ("+a.toString().replace("entryModule",e)+")(["+s.join(",")+']);\n(typeof fn === "function") && fn(self);',T=window.URL||window.webkitURL||window.mozURL||window.msURL;return new Worker(T.createObjectURL(new Blob([E],{type:"text/javascript"}
)))}}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(1),u=r(l),c=n(14),f=r(c),d=n(8),h=r(d),p=n(124),y=r(p),g=n(15),v=r(g),m=n(6),b=r(m),_=function(t){function e(n,r){i(this,e);var a=o(this,t.call(this,n));return a._i18n=r,a.currentTime=0,a.volume=100,a.playback=n.playback,a.settings=b["default"].extend({}
,a.playback.settings),a.isReady=!1,a.mediaControlDisabled=!1,a.plugins=[a.playback],a.bindEvents(),a}
return a(e,t),s(e,[{key:"name",get:function(){return"Container"}}
,{key:"attributes",get:function(){return{"class":"container","data-container":""}}}
,{key:"events",get:function(){return{click:"clicked",dblclick:"dblClicked",doubleTap:"dblClicked",contextmenu:"onContextMenu",mouseenter:"mouseEnter",mouseleave:"mouseLeave"}}}
,{key:"ended",get:function(){return this.playback.ended}}
,{key:"buffering",get:function(){return this.playback.buffering}}
,{key:"i18n",get:function(){return this._i18n}}
]),e.prototype.bindEvents=function(){this.listenTo(this.playback,u["default"].PLAYBACK_PROGRESS,this.progress),this.listenTo(this.playback,u["default"].PLAYBACK_TIMEUPDATE,this.timeUpdated),this.listenTo(this.playback,u["default"].PLAYBACK_READY,this.ready),this.listenTo(this.playback,u["default"].PLAYBACK_BUFFERING,this.onBuffering),this.listenTo(this.playback,u["default"].PLAYBACK_BUFFERFULL,this.bufferfull),this.listenTo(this.playback,u["default"].PLAYBACK_SETTINGSUPDATE,this.settingsUpdate),this.listenTo(this.playback,u["default"].PLAYBACK_LOADEDMETADATA,this.loadedMetadata),this.listenTo(this.playback,u["default"].PLAYBACK_HIGHDEFINITIONUPDATE,this.highDefinitionUpdate),this.listenTo(this.playback,u["default"].PLAYBACK_BITRATE,this.updateBitrate),this.listenTo(this.playback,u["default"].PLAYBACK_PLAYBACKSTATE,this.playbackStateChanged),this.listenTo(this.playback,u["default"].PLAYBACK_DVR,this.playbackDvrStateChanged),this.listenTo(this.playback,u["default"].PLAYBACK_MEDIACONTROL_DISABLE,this.disableMediaControl),this.listenTo(this.playback,u["default"].PLAYBACK_MEDIACONTROL_ENABLE,this.enableMediaControl),this.listenTo(this.playback,u["default"].PLAYBACK_ENDED,this.onEnded),this.listenTo(this.playback,u["default"].PLAYBACK_PLAY,this.playing),this.listenTo(this.playback,u["default"].PLAYBACK_PAUSE,this.paused),this.listenTo(this.playback,u["default"].PLAYBACK_STOP,this.stopped),this.listenTo(this.playback,u["default"].PLAYBACK_ERROR,this.error)}
,e.prototype.playbackStateChanged=function(t){this.trigger(u["default"].CONTAINER_PLAYBACKSTATE,t)}
,e.prototype.playbackDvrStateChanged=function(t){this.settings=this.playback.settings,this.dvrInUse=t,this.trigger(u["default"].CONTAINER_PLAYBACKDVRSTATECHANGED,t)}
,e.prototype.updateBitrate=function(t){this.trigger(u["default"].CONTAINER_BITRATE,t)}
,e.prototype.statsReport=function(t){this.trigger(u["default"].CONTAINER_STATS_REPORT,t)}
,e.prototype.getPlaybackType=function(){return this.playback.getPlaybackType()}
,e.prototype.isDvrEnabled=function(){return!!this.playback.dvrEnabled}
,e.prototype.isDvrInUse=function(){return!!this.dvrInUse}
,e.prototype.destroy=function(){this.trigger(u["default"].CONTAINER_DESTROYED,this,this.name),this.stopListening(),this.plugins.forEach(function(t){return t.destroy()}
),this.$el.remove()}
,e.prototype.setStyle=function(t){this.$el.css(t)}
,e.prototype.animate=function(t,e){return this.$el.animate(t,e).promise()}
,e.prototype.ready=function(){this.isReady=!0,this.trigger(u["default"].CONTAINER_READY,this.name)}
,e.prototype.isPlaying=function(){return this.playback.isPlaying()}
,e.prototype.getStartTimeOffset=function(){return this.playback.getStartTimeOffset()}
,e.prototype.getCurrentTime=function(){return this.currentTime}
,e.prototype.getDuration=function(){return this.playback.getDuration()}
,e.prototype.error=function(t){this.isReady||this.ready(),this.trigger(u["default"].CONTAINER_ERROR,{error:t,container:this}
,this.name)}
,e.prototype.loadedMetadata=function(t){this.trigger(u["default"].CONTAINER_LOADEDMETADATA,t)}
,e.prototype.timeUpdated=function(t){this.currentTime=t.current,this.trigger(u["default"].CONTAINER_TIMEUPDATE,t,this.name)}
,e.prototype.progress=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];this.trigger.apply(this,[u["default"].CONTAINER_PROGRESS].concat(e,[this.name]))}
,e.prototype.playing=function(){this.trigger(u["default"].CONTAINER_PLAY,this.name)}
,e.prototype.paused=function(){this.trigger(u["default"].CONTAINER_PAUSE,this.name)}
,e.prototype.play=function(){this.playback.play()}
,e.prototype.stop=function(){this.playback.stop(),this.currentTime=0}
,e.prototype.pause=function(){this.playback.pause()}
,e.prototype.onEnded=function(){this.trigger(u["default"].CONTAINER_ENDED,this,this.name),this.currentTime=0}
,e.prototype.stopped=function(){this.trigger(u["default"].CONTAINER_STOP)}
,e.prototype.clicked=function(){this.options.chromeless&&!this.options.allowUserInteraction||this.trigger(u["default"].CONTAINER_CLICK,this,this.name)}
,e.prototype.dblClicked=function(){this.options.chromeless&&!this.options.allowUserInteraction||this.trigger(u["default"].CONTAINER_DBLCLICK,this,this.name)}
,e.prototype.onContextMenu=function(){this.options.chromeless&&!this.options.allowUserInteraction||this.trigger(u["default"].CONTAINER_CONTEXTMENU,this,this.name)}
,e.prototype.seek=function(t){this.trigger(u["default"].CONTAINER_SEEK,t,this.name),this.playback.seek(t)}
,e.prototype.seekPercentage=function(t){var e=this.getDuration();if(t>=0&&t<=100){var n=e*(t/100);this.seek(n)}}
,e.prototype.setVolume=function(t){this.volume=parseInt(t,10),this.trigger(u["default"].CONTAINER_VOLUME,t,this.name),this.playback.volume(t)}
,e.prototype.fullscreen=function(){this.trigger(u["default"].CONTAINER_FULLSCREEN,this.name)}
,e.prototype.onBuffering=function(){this.trigger(u["default"].CONTAINER_STATE_BUFFERING,this.name)}
,e.prototype.bufferfull=function(){this.trigger(u["default"].CONTAINER_STATE_BUFFERFULL,this.name)}
,e.prototype.addPlugin=function(t){this.plugins.push(t)}
,e.prototype.hasPlugin=function(t){return!!this.getPlugin(t)}
,e.prototype.getPlugin=function(t){return(0,v["default"])(this.plugins,function(e){return e.name===t}
)}
,e.prototype.mouseEnter=function(){this.options.chromeless&&!this.options.allowUserInteraction||this.trigger(u["default"].CONTAINER_MOUSE_ENTER)}
,e.prototype.mouseLeave=function(){this.options.chromeless&&!this.options.allowUserInteraction||this.trigger(u["default"].CONTAINER_MOUSE_LEAVE)}
,e.prototype.settingsUpdate=function(){this.settings=this.playback.settings,this.trigger(u["default"].CONTAINER_SETTINGSUPDATE)}
,e.prototype.highDefinitionUpdate=function(t){this.trigger(u["default"].CONTAINER_HIGHDEFINITIONUPDATE,t)}
,e.prototype.isHighDefinitionInUse=function(){return this.playback.isHighDefinitionInUse()}
,e.prototype.disableMediaControl=function(){this.mediaControlDisabled||(this.mediaControlDisabled=!0,this.trigger(u["default"].CONTAINER_MEDIACONTROL_DISABLE))}
,e.prototype.enableMediaControl=function(){this.mediaControlDisabled&&(this.mediaControlDisabled=!1,this.trigger(u["default"].CONTAINER_MEDIACONTROL_ENABLE))}
,e.prototype.updateStyle=function(){!this.options.chromeless||this.options.allowUserInteraction?this.$el.removeClass("chromeless"):this.$el.addClass("chromeless")}
,e.prototype.configure=function(t){this._options=b["default"].extend(this._options,t),this.updateStyle(),this.trigger(u["default"].CONTAINER_OPTIONS_CHANGE)}
,e.prototype.render=function(){var t=h["default"].getStyleFor(y["default"]);return this.$el.append(t),this.$el.append(this.playback.render().el),this.updateStyle(),this}
,e}
(f["default"]);e["default"]=_,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(13),u=r(l),c=n(1),f=r(c),d=n(33),h=r(d),p=n(6),y=r(p),g=n(15),v=r(g),m=n(78),b=r(m),_=function(t){function e(n,r,a){i(this,e);var s=o(this,t.call(this,n));return s._i18n=a,s.loader=r,s}
return a(e,t),s(e,[{key:"options",get:function(){return this._options}
,set:function(t){this._options=t}}
]),e.prototype.createContainers=function(){var t=this;return y["default"].Deferred(function(e){e.resolve(t.options.sources.map(function(e){return t.createContainer(e)}
))}
)}
,e.prototype.findPlaybackPlugin=function(t,e){return(0,v["default"])(this.loader.playbackPlugins,function(n){return n.canPlay(t,e)}
)}
,e.prototype.createContainer=function(t){var e=null,n=this.options.mimeType;(0,b["default"])(t)?(e=t.source.toString(),t.mimeType&&(n=t.mimeType)):e=t.toString(),e.match(/^\/\//)&&(e=window.location.protocol+e);var r=y["default"].extend({}
,this.options,{src:e,mimeType:n}
),i=this.findPlaybackPlugin(e,n),o=new i(r,this._i18n);r=y["default"].extend({}
,r,{playback:o}
);var a=new h["default"](r,this._i18n),s=y["default"].Deferred();return s.promise(a),this.addContainerPlugins(a),this.listenToOnce(a,f["default"].CONTAINER_READY,function(){return s.resolve(a)}
),a}
,e.prototype.addContainerPlugins=function(t){this.loader.containerPlugins.forEach(function(e){t.addPlugin(new e(t))}
)}
,e}
(u["default"]);e["default"]=_,t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(85)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(2),u=n(1),c=r(u),f=n(8),d=r(f),h=n(14),p=r(h),y=n(11),g=r(y),v=n(86),m=r(v),b=n(36),_=r(b),E=n(16),T=r(E),w=n(21),A=r(w),S=n(15),k=r(S),L=n(6),O=r(L),R=n(125),C=r(R),P=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.playerInfo=A["default"].getInstance(n.playerId),r.firstResize=!0,r.plugins=[],r.containers=[],r.setupMediaControl(null),r._boundFullscreenHandler=function(){return r.handleFullscreenChange()}
,(0,O["default"])(document).bind("fullscreenchange",r._boundFullscreenHandler),(0,O["default"])(document).bind("MSFullscreenChange",r._boundFullscreenHandler),(0,O["default"])(document).bind("mozfullscreenchange",r._boundFullscreenHandler),r}
return a(e,t),s(e,[{key:"events",get:function(){return{webkitfullscreenchange:"handleFullscreenChange",mousemove:"showMediaControl",mouseleave:"hideMediaControl"}}}
,{key:"attributes",get:function(){return{"data-player":"",tabindex:9999}}}
,{key:"isReady",get:function(){return!!this.ready}}
,{key:"i18n",get:function(){return this.getPlugin("strings")||{t:function(t){return t}}}}
]),e.prototype.createContainers=function(t){var e=this;this.defer=O["default"].Deferred(),this.defer.promise(this),this.containerFactory=new m["default"](t,t.loader,this.i18n),this.containerFactory.createContainers().then(function(t){return e.setupContainers(t)}
).then(function(t){return e.resolveOnContainersReady(t)}
)}
,e.prototype.updateSize=function(){l.Fullscreen.isFullscreen()?this.setFullscreen():this.setPlayerSize()}
,e.prototype.setFullscreen=function(){g["default"].isiOS||(this.$el.addClass("fullscreen"),this.$el.removeAttr("style"),this.playerInfo.previousSize={width:this.options.width,height:this.options.height}
,this.playerInfo.currentSize={width:(0,O["default"])(window).width(),height:(0,O["default"])(window).height()}
)}
,e.prototype.setPlayerSize=function(){this.$el.removeClass("fullscreen"),this.playerInfo.currentSize=this.playerInfo.previousSize,this.playerInfo.previousSize={width:(0,O["default"])(window).width(),height:(0,O["default"])(window).height()}
,this.resize(this.playerInfo.currentSize)}
,e.prototype.resize=function(t){(0,l.isNumber)(t.height)||(0,l.isNumber)(t.width)?(this.el.style.height=t.height+"px",this.el.style.width=t.width+"px"):(this.el.style.height=""+t.height,this.el.style.width=""+t.width),this.playerInfo.previousSize={width:this.options.width,height:this.options.height}
,this.options.width=t.width,this.options.height=t.height,this.playerInfo.currentSize=t,this.triggerResize(this.playerInfo.currentSize)}
,e.prototype.enableResizeObserver=function(){var t=this,e=function(){t.playerInfo.computedSize.width==t.el.clientWidth&&t.playerInfo.computedSize.height==t.el.clientHeight||(t.playerInfo.computedSize={width:t.el.clientWidth,height:t.el.clientHeight}
,t.triggerResize(t.playerInfo.computedSize))}
;this.resizeObserverInterval=setInterval(e,500)}
,e.prototype.triggerResize=function(t){var e=this.firstResize||this.oldHeight!==t.height||this.oldWidth!==t.width;e&&(T["default"].trigger(this.options.playerId+":"+c["default"].PLAYER_RESIZE,t),this.oldHeight=t.height,this.oldWidth=t.width,this.firstResize=!1)}
,e.prototype.disableResizeObserver=function(){this.resizeObserverInterval&&clearInterval(this.resizeObserverInterval)}
,e.prototype.resolveOnContainersReady=function(t){var e=this;O["default"].when.apply(O["default"],t).done(function(){e.defer.resolve(e),e.ready=!0,e.trigger(c["default"].CORE_READY)}
)}
,e.prototype.addPlugin=function(t){this.plugins.push(t)}
,e.prototype.hasPlugin=function(t){return!!this.getPlugin(t)}
,e.prototype.getPlugin=function(t){return(0,k["default"])(this.plugins,function(e){return e.name===t}
)}
,e.prototype.load=function(t,e){var n=this;this.options.mimeType=e,t=t&&t.constructor===Array?t:[t],this.containers.forEach(function(t){return t.destroy()}
),this.mediaControl.container=null,this.containerFactory.options=O["default"].extend(this.options,{sources:t}
),this.containerFactory.createContainers().then(function(t){n.setupContainers(t)}
)}
,e.prototype.destroy=function(){this.disableResizeObserver(),this.containers.forEach(function(t){return t.destroy()}
),this.plugins.forEach(function(t){return t.destroy()}
),this.$el.remove(),this.mediaControl.destroy(),(0,O["default"])(document).unbind("fullscreenchange",this._boundFullscreenHandler),(0,O["default"])(document).unbind("MSFullscreenChange",this._boundFullscreenHandler),(0,O["default"])(document).unbind("mozfullscreenchange",this._boundFullscreenHandler)}
,e.prototype.handleFullscreenChange=function(){this.trigger(c["default"].CORE_FULLSCREEN,l.Fullscreen.isFullscreen()),this.updateSize(),this.mediaControl.show()}
,e.prototype.setMediaControlContainer=function(t){this.mediaControl.setContainer(t),this.mediaControl.render()}
,e.prototype.disableMediaControl=function(){this.mediaControl.disable(),this.$el.removeClass("nocursor")}
,e.prototype.enableMediaControl=function(){this.mediaControl.enable()}
,e.prototype.removeContainer=function(t){this.stopListening(t),this.containers=this.containers.filter(function(e){return e!==t}
)}
,e.prototype.appendContainer=function(t){this.listenTo(t,c["default"].CONTAINER_DESTROYED,this.removeContainer),this.containers.push(t)}
,e.prototype.setupContainers=function(t){return t.map(this.appendContainer.bind(this)),this.trigger(c["default"].CORE_CONTAINERS_CREATED),this.renderContainers(),this.setupMediaControl(this.getCurrentContainer()),this.render(),this.$el.appendTo(this.options.parentElement),this.containers}
,e.prototype.renderContainers=function(){var t=this;this.containers.map(function(e){return t.el.appendChild(e.render().el)}
)}
,e.prototype.createContainer=function(t,e){var n=this.containerFactory.createContainer(t,e);return this.appendContainer(n),this.el.appendChild(n.render().el),n}
,e.prototype.setupMediaControl=function(t){this.mediaControl?this.mediaControl.setContainer(t):(this.mediaControl=this.createMediaControl(O["default"].extend({container:t,focusElement:this.el}
,this.options)),this.listenTo(this.mediaControl,c["default"].MEDIACONTROL_FULLSCREEN,this.toggleFullscreen),this.listenTo(this.mediaControl,c["default"].MEDIACONTROL_SHOW,this.onMediaControlShow.bind(this,!0)),this.listenTo(this.mediaControl,c["default"].MEDIACONTROL_HIDE,this.onMediaControlShow.bind(this,!1)))}
,e.prototype.createMediaControl=function(t){return t.mediacontrol&&t.mediacontrol.external?new t.mediacontrol.external(t).render():new _["default"](t).render()}
,e.prototype.getCurrentContainer=function(){return this.mediaControl&&this.mediaControl.container?this.mediaControl.container:this.containers[0]}
,e.prototype.getCurrentPlayback=function(){var t=this.getCurrentContainer();return t&&t.playback}
,e.prototype.getPlaybackType=function(){var t=this.getCurrentContainer();return t&&t.getPlaybackType()}
,e.prototype.toggleFullscreen=function(){l.Fullscreen.isFullscreen()?(l.Fullscreen.cancelFullscreen(),g["default"].isiOS||this.$el.removeClass("fullscreen nocursor")):(l.Fullscreen.requestFullscreen(this.el),g["default"].isiOS||this.$el.addClass("fullscreen")),this.mediaControl.show()}
,e.prototype.showMediaControl=function(t){this.mediaControl.show(t)}
,e.prototype.hideMediaControl=function(){this.mediaControl.hide(this.options.hideMediaControlDelay)}
,e.prototype.onMediaControlShow=function(t){this.getCurrentContainer().trigger(t?c["default"].CONTAINER_MEDIACONTROL_SHOW:c["default"].CONTAINER_MEDIACONTROL_HIDE),t?this.$el.removeClass("nocursor"):l.Fullscreen.isFullscreen()&&this.$el.addClass("nocursor")}
,e.prototype.configure=function(t){var e=this;this._options=O["default"].extend(this._options,t);var n=t.source||t.sources;n?this.load(n,t.mimeType||this.options.mimeType):(this.trigger(c["default"].CORE_OPTIONS_CHANGE),this.containers.forEach(function(t){t.configure(e.options)}
))}
,e.prototype.render=function(){var t=d["default"].getStyleFor(C["default"],{baseUrl:this.options.baseUrl}
);this.$el.append(t),this.$el.append(this.mediaControl.render().el),this.options.width=this.options.width||this.$el.width(),this.options.height=this.options.height||this.$el.height();var e={width:this.options.width,height:this.options.height}
;return this.playerInfo.previousSize=this.playerInfo.currentSize=this.playerInfo.computedSize=e,this.updateSize(),this.previousSize={width:this.$el.width(),height:this.$el.height()}
,this.enableResizeObserver(),this}
,e}
(p["default"]);e["default"]=P,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(13),u=r(l),c=n(34),f=r(c),d=function(t){function e(n){i(this,e);var r=o(this,t.call(this));return r.player=n,r._options=n.options,r}
return a(e,t),s(e,[{key:"loader",get:function(){return this.player.loader}}
]),e.prototype.create=function(){return this.options.loader=this.loader,this.core=new f["default"](this.options),this.addCorePlugins(),this.core.createContainers(this.options),this.core}
,e.prototype.addCorePlugins=function(){var t=this;return this.loader.corePlugins.forEach(function(e){var n=new e(t.core);t.core.addPlugin(n),t.setupExternalInterface(n)}
),this.core}
,e.prototype.setupExternalInterface=function(t){var e=t.getExternalInterface();for(var n in e)this.player[n]=e[n].bind(t)}
,e}
(u["default"]);e["default"]=d,t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(88)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=n(13),l=r(s),u=n(21),c=r(u),f=n(82),d=r(f),h=n(22),p=r(h),y=n(37),g=r(y),v=n(40),m=r(v),b=n(38),_=r(b),E=n(39),T=r(E),w=n(41),A=r(w),S=n(42),k=r(S),L=n(116),O=r(L),R=n(118),C=r(R),P=n(121),D=r(P),I=n(43),x=r(I),N=n(110),M=r(N),F=n(103),j=r(F),B=n(105),U=r(B),G=n(108),Y=r(G),$=n(113),V=r($),K=n(115),H=r(K),z=n(106),W=r(z),q=n(120),X=r(q),Z=function(t){function e(n,r){i(this,e);var a=o(this,t.call(this));return a.playerId=r,a.playbackPlugins=[T["default"],p["default"],m["default"],g["default"],_["default"],A["default"],k["default"]],a.containerPlugins=[O["default"],D["default"],x["default"],C["default"],M["default"],j["default"]],a.corePlugins=[U["default"],Y["default"],V["default"],H["default"],W["default"],X["default"]],n&&(Array.isArray(n)||a.validateExternalPluginsType(n),a.addExternalPlugins(n)),a}
return a(e,t),e.prototype.groupPluginsByType=function(t){return Array.isArray(t)&&(t=t.reduce(function(t,e){return t[e.type]||(t[e.type]=[]),t[e.type].push(e),t}
,{}
)),t}
,e.prototype.addExternalPlugins=function(t){t=this.groupPluginsByType(t);var e=function(t){return t.prototype.name}
;t.playback&&(this.playbackPlugins=(0,d["default"])(t.playback.concat(this.playbackPlugins),e)),t.container&&(this.containerPlugins=(0,d["default"])(t.container.concat(this.containerPlugins),e)),t.core&&(this.corePlugins=(0,d["default"])(t.core.concat(this.corePlugins),e)),c["default"].getInstance(this.playerId).playbackPlugins=this.playbackPlugins}
,e.prototype.validateExternalPluginsType=function(t){var e=["playback","container","core"];e.forEach(function(e){(t[e]||[]).forEach(function(t){var n="external "+t.type+" plugin on "+e+" array";if(t.type!==e)throw new ReferenceError(n)}
)}
)}
,e}
(l["default"]);e["default"]=Z,t.exports=e["default"]}
,function(t,e,n){(function(r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(2),c=n(26),f=n(1),d=i(f),h=n(8),p=i(h),y=n(14),g=i(y),v=n(11),m=i(v),b=n(16),_=i(b),E=n(9),T=i(E),w=n(7),A=i(w),S=n(6),k=i(S),L=n(126),O=i(L),R=n(136),C=i(R),P=n(27),D=i(P),I=n(44),x=i(I),N=n(145),M=i(N),F=n(146),j=i(F),B=n(147),U=i(B),G=n(148),Y=i(G),$=n(149),V=i($),K=n(150),H=i(K),z=function(t){function e(n){o(this,e);var r=a(this,t.call(this,n));r.persistConfig=r.options.persistConfig,r.container=n.container,r.currentPositionValue=null,r.currentDurationValue=null;var i=r.persistConfig?u.Config.restore("volume"):100;return r.setVolume(r.options.mute?0:i),r.keepVisible=!1,r.addEventListeners(),r.settings={left:["play","stop","pause"],right:["volume"],"default":["position","seekbar","duration"]}
,r.container?k["default"].isEmptyObject(r.container.settings)||(r.settings=k["default"].extend({}
,r.container.settings)):r.settings={}
,r.disabled=!1,(r.container&&r.container.mediaControlDisabled||r.options.chromeless)&&r.disable(),r.stopDragHandler=function(t){return r.stopDrag(t)}
,r.updateDragHandler=function(t){return r.updateDrag(t)}
,(0,k["default"])(document).bind("mouseup",r.stopDragHandler),(0,k["default"])(document).bind("mousemove",r.updateDragHandler),r}
return s(e,t),l(e,[{key:"name",get:function(){return"MediaControl"}}
,{key:"attributes",get:function(){return{"class":"media-control","data-media-control":""}}}
,{key:"events",get:function(){return{"click [data-play]":"play","click [data-pause]":"pause","click [data-playpause]":"togglePlayPause","click [data-stop]":"stop","click [data-playstop]":"togglePlayStop","click [data-fullscreen]":"toggleFullscreen","click .bar-container[data-seekbar]":"seek","click .bar-container[data-volume]":"onVolumeClick","click .drawer-icon[data-volume]":"toggleMute","mouseenter .drawer-container[data-volume]":"showVolumeBar","mouseleave .drawer-container[data-volume]":"hideVolumeBar","mousedown .bar-container[data-volume]":"startVolumeDrag","mousemove .bar-container[data-volume]":"mousemoveOnVolumeBar","mousedown .bar-scrubber[data-seekbar]":"startSeekDrag","mousemove .bar-container[data-seekbar]":"mousemoveOnSeekBar","mouseleave .bar-container[data-seekbar]":"mouseleaveOnSeekBar","mouseenter .media-control-layer[data-controls]":"setUserKeepVisible","mouseleave .media-control-layer[data-controls]":"resetUserKeepVisible"}}}
,{key:"template",get:function(){return(0,T["default"])(C["default"])}}
,{key:"stylesheet",get:function(){return p["default"].getStyleFor(O["default"],{baseUrl:this.options.baseUrl}
)}}
,{key:"volume",get:function(){return this.container&&this.container.isReady?this.container.volume:this.intendedVolume}}
,{key:"muted",get:function(){return 0===this.volume}}
]),e.prototype.addEventListeners=function(){this.container&&(_["default"].on(this.options.playerId+":"+d["default"].PLAYER_RESIZE,this.playerResize,this),this.listenTo(this.container,d["default"].CONTAINER_PLAY,this.changeTogglePlay),this.listenTo(this.container,d["default"].CONTAINER_PAUSE,this.changeTogglePlay),this.listenTo(this.container,d["default"].CONTAINER_DBLCLICK,this.toggleFullscreen),this.listenTo(this.container,d["default"].CONTAINER_TIMEUPDATE,this.onTimeUpdate),this.listenTo(this.container,d["default"].CONTAINER_PROGRESS,this.updateProgressBar),this.listenTo(this.container,d["default"].CONTAINER_SETTINGSUPDATE,this.settingsUpdate),this.listenTo(this.container,d["default"].CONTAINER_PLAYBACKDVRSTATECHANGED,this.settingsUpdate),this.listenTo(this.container,d["default"].CONTAINER_HIGHDEFINITIONUPDATE,this.highDefinitionUpdate),this.listenTo(this.container,d["default"].CONTAINER_MEDIACONTROL_DISABLE,this.disable),this.listenTo(this.container,d["default"].CONTAINER_MEDIACONTROL_ENABLE,this.enable),this.listenTo(this.container,d["default"].CONTAINER_ENDED,this.ended),this.listenTo(this.container,d["default"].CONTAINER_VOLUME,this.onVolumeChanged))}
,e.prototype.disable=function(){this.disabled=!0,this.hide(),this.$el.hide()}
,e.prototype.enable=function(){this.options.chromeless||(this.disabled=!1,this.show())}
,e.prototype.play=function(){this.container.play()}
,e.prototype.pause=function(){this.container.pause()}
,e.prototype.stop=function(){this.container.stop()}
,e.prototype.onVolumeChanged=function(){this.updateVolumeUI()}
,e.prototype.updateVolumeUI=function(){if(this.rendered){this.$volumeBarContainer.find(".bar-fill-2").css({}
);var t=this.$volumeBarContainer.width(),e=this.$volumeBarBackground.width(),n=(t-e)/2,r=e*this.volume/100+n;this.$volumeBarFill.css({width:this.volume+"%"}
),this.$volumeBarScrubber.css({left:r}
),this.$volumeBarContainer.find(".segmented-bar-element").removeClass("fill");var i=Math.ceil(this.volume/10);this.$volumeBarContainer.find(".segmented-bar-element").slice(0,i).addClass("fill"),this.$volumeIcon.html(""),this.$volumeIcon.removeClass("muted"),this.muted?(this.$volumeIcon.append(U["default"]),this.$volumeIcon.addClass("muted")):this.$volumeIcon.append(j["default"]),this.applyButtonStyle(this.$volumeIcon)}}
,e.prototype.changeTogglePlay=function(){this.$playPauseToggle.html(""),this.$playStopToggle.html(""),this.container&&this.container.isPlaying()?(this.$playPauseToggle.append(x["default"]),this.$playStopToggle.append(M["default"]),this.trigger(d["default"].MEDIACONTROL_PLAYING)):(this.$playPauseToggle.append(D["default"]),this.$playStopToggle.append(D["default"]),this.trigger(d["default"].MEDIACONTROL_NOTPLAYING)),this.applyButtonStyle(this.$playPauseToggle),this.applyButtonStyle(this.$playStopToggle)}
,e.prototype.mousemoveOnSeekBar=function(t){if(this.container.settings.seekEnabled){var e=t.pageX-this.$seekBarContainer.offset().left-this.$seekBarHover.width()/2;this.$seekBarHover.css({left:e}
)}
this.trigger(d["default"].MEDIACONTROL_MOUSEMOVE_SEEKBAR,t)}
,e.prototype.mouseleaveOnSeekBar=function(t){this.trigger(d["default"].MEDIACONTROL_MOUSELEAVE_SEEKBAR,t)}
,e.prototype.onVolumeClick=function(t){this.setVolume(this.getVolumeFromUIEvent(t))}
,e.prototype.mousemoveOnVolumeBar=function(t){this.draggingVolumeBar&&this.setVolume(this.getVolumeFromUIEvent(t))}
,e.prototype.playerResize=function(t){this.$fullscreenToggle.html(""),u.Fullscreen.isFullscreen()?this.$fullscreenToggle.append(V["default"]):this.$fullscreenToggle.append(Y["default"]),this.applyButtonStyle(this.$fullscreenToggle),this.$el.removeClass("w320"),(t.width<=320||this.options.hideVolumeBar)&&this.$el.addClass("w320")}
,e.prototype.togglePlayPause=function(){return this.container.isPlaying()?this.container.pause():this.container.play(),!1}
,e.prototype.togglePlayStop=function(){this.container.isPlaying()?this.container.stop():this.container.play()}
,e.prototype.startSeekDrag=function(t){this.container.settings.seekEnabled&&(this.draggingSeekBar=!0,this.$el.addClass("dragging"),this.$seekBarLoaded.addClass("media-control-notransition"),this.$seekBarPosition.addClass("media-control-notransition"),this.$seekBarScrubber.addClass("media-control-notransition"),t&&t.preventDefault())}
,e.prototype.startVolumeDrag=function(t){this.draggingVolumeBar=!0,this.$el.addClass("dragging"),t&&t.preventDefault()}
,e.prototype.stopDrag=function(t){this.draggingSeekBar&&this.seek(t),this.$el.removeClass("dragging"),this.$seekBarLoaded.removeClass("media-control-notransition"),this.$seekBarPosition.removeClass("media-control-notransition"),this.$seekBarScrubber.removeClass("media-control-notransition dragging"),this.draggingSeekBar=!1,this.draggingVolumeBar=!1}
,e.prototype.updateDrag=function(t){if(this.draggingSeekBar){t.preventDefault();var e=t.pageX-this.$seekBarContainer.offset().left,n=e/this.$seekBarContainer.width()*100;n=Math.min(100,Math.max(n,0)),this.setSeekPercentage(n)}
else this.draggingVolumeBar&&(t.preventDefault(),this.setVolume(this.getVolumeFromUIEvent(t)))}
,e.prototype.getVolumeFromUIEvent=function(t){var e=t.pageX-this.$volumeBarContainer.offset().left,n=e/this.$volumeBarContainer.width()*100;return n}
,e.prototype.toggleMute=function(){this.setVolume(this.muted?100:0)}
,e.prototype.setVolume=function(t){var e=this;t=Math.min(100,Math.max(t,0)),this.intendedVolume=t,this.persistConfig&&u.Config.persist("volume",t);var n=function(){e.container.isReady?e.container.setVolume(t):e.listenToOnce(e.container,d["default"].CONTAINER_READY,function(){e.container.setVolume(t)}
)}
;this.container?n():this.listenToOnce(this,d["default"].MEDIACONTROL_CONTAINERCHANGED,function(){n()}
)}
,e.prototype.toggleFullscreen=function(){this.trigger(d["default"].MEDIACONTROL_FULLSCREEN,this.name),this.container.fullscreen(),this.resetUserKeepVisible()}
,e.prototype.setContainer=function(t){this.container&&this.stopListening(this.container),_["default"].off(this.options.playerId+":"+d["default"].PLAYER_RESIZE,this.playerResize,this),this.container=t,this.setVolume(this.intendedVolume),this.changeTogglePlay(),this.addEventListeners(),this.settingsUpdate(),this.container.trigger(d["default"].CONTAINER_PLAYBACKDVRSTATECHANGED,this.container.isDvrInUse()),this.container.mediaControlDisabled&&this.disable(),this.trigger(d["default"].MEDIACONTROL_CONTAINERCHANGED)}
,e.prototype.showVolumeBar=function(){this.hideVolumeId&&clearTimeout(this.hideVolumeId),this.$volumeBarContainer.removeClass("volume-bar-hide")}
,e.prototype.hideVolumeBar=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?400:arguments[0];this.$volumeBarContainer&&(this.draggingVolumeBar?this.hideVolumeId=setTimeout(function(){return t.hideVolumeBar()}
,e):(this.hideVolumeId&&clearTimeout(this.hideVolumeId),this.hideVolumeId=setTimeout(function(){return t.$volumeBarContainer.addClass("volume-bar-hide")}
,e)))}
,e.prototype.ended=function(){this.changeTogglePlay()}
,e.prototype.updateProgressBar=function(t){var e=t.start/t.total*100,n=t.current/t.total*100;this.$seekBarLoaded.css({left:e+"%",width:n-e+"%"}
)}
,e.prototype.onTimeUpdate=function(t){if(!this.draggingSeekBar){var e=t.current<0?t.total:t.current;this.currentPositionValue=e,this.currentDurationValue=t.total,this.renderSeekBar()}}
,e.prototype.renderSeekBar=function(){if(null!==this.currentPositionValue&&null!==this.currentDurationValue){this.currentSeekBarPercentage=100,(this.container.getPlaybackType()!==A["default"].LIVE||this.container.isDvrInUse())&&(this.currentSeekBarPercentage=this.currentPositionValue/this.currentDurationValue*100),this.setSeekPercentage(this.currentSeekBarPercentage);var t=(0,u.formatTime)(this.currentPositionValue),e=(0,u.formatTime)(this.currentDurationValue);t!==this.displayedPosition&&(this.$position.text(t),this.displayedPosition=t),e!==this.displayedDuration&&(this.$duration.text(e),this.displayedDuration=e)}}
,e.prototype.seek=function(t){if(this.container.settings.seekEnabled){var e=t.pageX-this.$seekBarContainer.offset().left,n=e/this.$seekBarContainer.width()*100;return n=Math.min(100,Math.max(n,0)),this.container.seekPercentage(n),this.setSeekPercentage(n),!1}}
,e.prototype.setKeepVisible=function(){this.keepVisible=!0}
,e.prototype.resetKeepVisible=function(){this.keepVisible=!1}
,e.prototype.setUserKeepVisible=function(){this.userKeepVisible=!0}
,e.prototype.resetUserKeepVisible=function(){this.userKeepVisible=!1}
,e.prototype.isVisible=function(){return!this.$el.hasClass("media-control-hide")}
,e.prototype.show=function(t){var e=this;if(!this.disabled){var n=2e3;(!t||t.clientX!==this.lastMouseX&&t.clientY!==this.lastMouseY||navigator.userAgent.match(/firefox/i))&&(clearTimeout(this.hideId),this.$el.show(),this.trigger(d["default"].MEDIACONTROL_SHOW,this.name),this.$el.removeClass("media-control-hide"),this.hideId=setTimeout(function(){return e.hide()}
,n),t&&(this.lastMouseX=t.clientX,this.lastMouseY=t.clientY))}}
,e.prototype.hide=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=e||2e3;clearTimeout(this.hideId),this.isVisible()&&this.options.hideMediaControl!==!1&&(e||this.userKeepVisible||this.keepVisible||this.draggingSeekBar||this.draggingVolumeBar?this.hideId=setTimeout(function(){return t.hide()}
,n):(this.trigger(d["default"].MEDIACONTROL_HIDE,this.name),this.$el.addClass("media-control-hide"),this.hideVolumeBar(0)))}
,e.prototype.settingsUpdate=function(){var t=k["default"].extend({}
,this.container.settings);t&&!u.Fullscreen.fullscreenEnabled()&&(t["default"]&&(0,u.removeArrayItem)(t["default"],"fullscreen"),t.left&&(0,u.removeArrayItem)(t.left,"fullscreen"),t.right&&(0,u.removeArrayItem)(t.right,"fullscreen"));var e=JSON.stringify(this.settings)!==JSON.stringify(t);this.container.getPlaybackType()&&e&&(this.settings=t,this.render())}
,e.prototype.highDefinitionUpdate=function(t){var e=t?"addClass":"removeClass";this.$hdIndicator[e]("enabled")}
,e.prototype.createCachedElements=function(){var t=this.$el.find(".media-control-layer");this.$duration=t.find(".media-control-indicator[data-duration]"),this.$fullscreenToggle=t.find("button.media-control-button[data-fullscreen]"),this.$playPauseToggle=t.find("button.media-control-button[data-playpause]"),this.$playStopToggle=t.find("button.media-control-button[data-playstop]"),this.$position=t.find(".media-control-indicator[data-position]"),this.$seekBarContainer=t.find(".bar-container[data-seekbar]"),this.$seekBarHover=t.find(".bar-hover[data-seekbar]"),this.$seekBarLoaded=t.find(".bar-fill-1[data-seekbar]"),this.$seekBarPosition=t.find(".bar-fill-2[data-seekbar]"),this.$seekBarScrubber=t.find(".bar-scrubber[data-seekbar]"),this.$volumeBarContainer=t.find(".bar-container[data-volume]"),this.$volumeContainer=t.find(".drawer-container[data-volume]"),this.$volumeIcon=t.find(".drawer-icon[data-volume]"),this.$volumeBarBackground=this.$el.find(".bar-background[data-volume]"),this.$volumeBarFill=this.$el.find(".bar-fill-1[data-volume]"),this.$volumeBarScrubber=this.$el.find(".bar-scrubber[data-volume]"),this.$hdIndicator=this.$el.find("button.media-control-button[data-hd-indicator]"),this.resetIndicators(),this.initializeIcons()}
,e.prototype.resetIndicators=function(){this.displayedPosition=this.$position.text(),this.displayedDuration=this.$duration.text()}
,e.prototype.initializeIcons=function(){var t=this.$el.find(".media-control-layer");t.find("button.media-control-button[data-play]").append(D["default"]),t.find("button.media-control-button[data-pause]").append(x["default"]),t.find("button.media-control-button[data-stop]").append(M["default"]),this.$playPauseToggle.append(D["default"]),this.$playStopToggle.append(D["default"]),this.$volumeIcon.append(j["default"]),this.$fullscreenToggle.append(Y["default"]),this.$hdIndicator.append(H["default"])}
,e.prototype.setSeekPercentage=function(t){t=Math.max(Math.min(t,100),0),this.displayedSeekBarPercentage!==t&&(this.displayedSeekBarPercentage=t,this.$seekBarPosition.removeClass("media-control-notransition"),this.$seekBarScrubber.removeClass("media-control-notransition"),this.$seekBarPosition.css({width:t+"%"}
),this.$seekBarScrubber.css({left:t+"%"}
))}
,e.prototype.seekRelative=function(t){if(this.container.settings.seekEnabled){var e=this.container.getCurrentTime(),n=this.container.getDuration(),r=Math.min(Math.max(e+t,0),n);r=Math.min(100*r/n,100),this.container.seekPercentage(r)}}
,e.prototype.bindKeyEvents=function(){var t=this;this.unbindKeyEvents(),this.kibo=new c.Kibo(this.options.focusElement),this.kibo.down(["space"],function(){return t.togglePlayPause()}
),this.kibo.down(["left"],function(){return t.seekRelative(-15)}
),this.kibo.down(["right"],function(){return t.seekRelative(15)}
);var e=[1,2,3,4,5,6,7,8,9,0];e.forEach(function(e){t.kibo.down(e.toString(),function(){return t.container.settings.seekEnabled&&t.container.seekPercentage(10*e)}
)}
)}
,e.prototype.unbindKeyEvents=function(){this.kibo&&(this.kibo.off("space"),this.kibo.off("left"),this.kibo.off("right"),this.kibo.off([1,2,3,4,5,6,7,8,9,0]))}
,e.prototype.parseColors=function(){if(this.options.mediacontrol){this.buttonsColor=this.options.mediacontrol.buttons;var t=this.options.mediacontrol.seekbar;this.$el.find(".bar-fill-2[data-seekbar]").css("background-color",t),this.$el.find(".media-control-icon svg path").css("fill",this.buttonsColor),this.$el.find(".segmented-bar-element[data-volume]").css("boxShadow","inset 2px 0 0 "+this.buttonsColor)}}
,e.prototype.applyButtonStyle=function(t){this.buttonsColor&&t&&(0,k["default"])(t).find("svg path").css("fill",this.buttonsColor)}
,e.prototype.destroy=function(){this.remove(),(0,k["default"])(document).unbind("mouseup",this.stopDragHandler),(0,k["default"])(document).unbind("mousemove",this.updateDragHandler),this.unbindKeyEvents()}
,e.prototype.render=function(){var t=this,e=1e3;this.$el.html(this.template({settings:this.settings}
)),this.$el.append(this.stylesheet),this.createCachedElements(),this.$playPauseToggle.addClass("paused"),this.$playStopToggle.addClass("stopped"),this.changeTogglePlay(),this.hideId=setTimeout(function(){return t.hide()}
,e),this.disabled&&this.hide(),m["default"].isSafari&&m["default"].isMobile&&this.$volumeContainer.css("display","none"),this.$seekBarPosition.addClass("media-control-notransition"),this.$seekBarScrubber.addClass("media-control-notransition");var n=0;return this.displayedSeekBarPercentage&&(n=this.displayedSeekBarPercentage),this.displayedSeekBarPercentage=null,this.setSeekPercentage(n),r.nextTick(function(){t.container.settings.seekEnabled||t.$seekBarContainer.addClass("seek-disabled"),t.options.disableKeyboardShortcuts||t.bindKeyEvents(),t.playerResize({width:t.options.width,height:t.options.height}
),t.hideVolumeBar(0)}
),this.parseColors(),this.highDefinitionUpdate(),this.rendered=!0,this.updateVolumeUI(),this.trigger(d["default"].MEDIACONTROL_RENDERED),this}
,e}
(g["default"]);e["default"]=z,z.extend=function(t){return(0,u.extend)(z,t)}
,t.exports=e["default"]}
).call(e,n(32))}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(2),u=n(13),c=r(u),f=n(1),d=r(f),h=n(11),p=r(h),y=n(89),g=r(y),v=n(35),m=r(v),b=n(21),_=r(b),E=n(6),T=r(E),w=n(15),A=r(w),S=(0,l.currentScriptUrl)().replace(/\/[^\/]+$/,""),k=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n)),a={playerId:(0,l.uniqueId)(""),persistConfig:!0,width:640,height:360,baseUrl:S,allowUserInteraction:p["default"].isMobile}
;return r._options=T["default"].extend(a,n),r.options.sources=r._normalizeSources(n),r.options.chromeless||(r.options.allowUserInteraction=!0),r.options.allowUserInteraction||(r.options.disableKeyboardShortcuts=!0),r._registerOptionEventListeners(),r._coreFactory=new g["default"](r),r.playerInfo=_["default"].getInstance(r.options.playerId),r.playerInfo.currentSize={width:n.width,height:n.height}
,r.playerInfo.options=r.options,r.options.parentId?r.setParentId(r.options.parentId):r.options.parent&&r.attachTo(r.options.parent),r}
return a(e,t),s(e,[{key:"loader",set:function(t){this._loader=t}
,get:function(){return this._loader||(this._loader=new m["default"](this.options.plugins||{}
,this.options.playerId)),this._loader}}
,{key:"ended",get:function(){return this.core.mediaControl.container.ended}}
,{key:"buffering",get:function(){return this.core.mediaControl.container.buffering}}
,{key:"isReady",get:function(){return!!this._ready}}
,{key:"eventsMapping",get:function(){return{onReady:d["default"].PLAYER_READY,onResize:d["default"].PLAYER_RESIZE,onPlay:d["default"].PLAYER_PLAY,onPause:d["default"].PLAYER_PAUSE,onStop:d["default"].PLAYER_STOP,onEnded:d["default"].PLAYER_ENDED,onSeek:d["default"].PLAYER_SEEK,onError:d["default"].PLAYER_ERROR,onTimeUpdate:d["default"].PLAYER_TIMEUPDATE,onVolumeUpdate:d["default"].PLAYER_VOLUMEUPDATE}}}
]),e.prototype.setParentId=function(t){var e=document.querySelector(t);return e&&this.attachTo(e),this}
,e.prototype.attachTo=function(t){return this.options.parentElement=t,this.core=this._coreFactory.create(),this._addEventListeners(),this}
,e.prototype._addEventListeners=function(){return this.core.isReady?this._onReady():this.listenToOnce(this.core,d["default"].CORE_READY,this._onReady),this.listenTo(this.core.mediaControl,d["default"].MEDIACONTROL_CONTAINERCHANGED,this._containerChanged),this.listenTo(this.core,d["default"].CORE_FULLSCREEN,this._onFullscreenChange),this}
,e.prototype._addContainerEventListeners=function(){var t=this.core.mediaControl.container;return t&&(this.listenTo(t,d["default"].CONTAINER_PLAY,this._onPlay),this.listenTo(t,d["default"].CONTAINER_PAUSE,this._onPause),this.listenTo(t,d["default"].CONTAINER_STOP,this._onStop),this.listenTo(t,d["default"].CONTAINER_ENDED,this._onEnded),this.listenTo(t,d["default"].CONTAINER_SEEK,this._onSeek),this.listenTo(t,d["default"].CONTAINER_ERROR,this._onError),this.listenTo(t,d["default"].CONTAINER_TIMEUPDATE,this._onTimeUpdate),this.listenTo(t,d["default"].CONTAINER_VOLUME,this._onVolumeUpdate)),this}
,e.prototype._registerOptionEventListeners=function(){var t=this,e=this.options.events||{}
;return Object.keys(e).forEach(function(n){var r=t.eventsMapping[n];if(r){var i=e[n];i="function"==typeof i&&i,i&&t.on(r,i)}}
),this}
,e.prototype._containerChanged=function(){this.stopListening(),this._addEventListeners()}
,e.prototype._onReady=function(){this._ready=!0,this._addContainerEventListeners(),this.trigger(d["default"].PLAYER_READY)}
,e.prototype._onFullscreenChange=function(t){this.trigger(d["default"].PLAYER_FULLSCREEN,t)}
,e.prototype._onVolumeUpdate=function(t){this.trigger(d["default"].PLAYER_VOLUMEUPDATE,t)}
,e.prototype._onPlay=function(){this.trigger(d["default"].PLAYER_PLAY)}
,e.prototype._onPause=function(){this.trigger(d["default"].PLAYER_PAUSE)}
,e.prototype._onStop=function(){this.trigger(d["default"].PLAYER_STOP,this.getCurrentTime())}
,e.prototype._onEnded=function(){this.trigger(d["default"].PLAYER_ENDED)}
,e.prototype._onSeek=function(t){this.trigger(d["default"].PLAYER_SEEK,t)}
,e.prototype._onTimeUpdate=function(t){this.trigger(d["default"].PLAYER_TIMEUPDATE,t)}
,e.prototype._onError=function(t){this.trigger(d["default"].PLAYER_ERROR,t)}
,e.prototype._normalizeSources=function(t){var e=t.sources||(void 0!==t.source?[t.source]:[]);return 0===e.length?[{source:"",mimeType:""}
]:e}
,e.prototype.resize=function(t){return this.core.resize(t),this}
,e.prototype.load=function(t,e,n){return void 0!==n&&this.configure({autoPlay:!!n}
),this.core.load(t,e),this}
,e.prototype.destroy=function(){return this.core.destroy(),this}
,e.prototype.play=function(){return this.core.mediaControl.container.play(),this}
,e.prototype.pause=function(){return this.core.mediaControl.container.pause(),this}
,e.prototype.stop=function(){return this.core.mediaControl.container.stop(),this}
,e.prototype.seek=function(t){return this.core.mediaControl.container.seek(t),this}
,e.prototype.seekPercentage=function(t){return this.core.mediaControl.container.seekPercentage(t),this}
,e.prototype.setVolume=function(t){return this.core&&this.core.mediaControl&&this.core.mediaControl.setVolume(t),this}
,e.prototype.getVolume=function(){return this.core&&this.core.mediaControl?this.core.mediaControl.volume:0}
,e.prototype.mute=function(){return this._mutedVolume=this.getVolume(),this.setVolume(0),this}
,e.prototype.unmute=function(){return this.setVolume("number"==typeof this._mutedVolume?this._mutedVolume:100),this._mutedVolume=null,this}
,e.prototype.isPlaying=function(){return this.core.mediaControl.container.isPlaying()}
,e.prototype.isDvrEnabled=function(){return this.core.mediaControl.container.isDvrEnabled()}
,e.prototype.isDvrInUse=function(){return this.core.mediaControl.container.isDvrInUse()}
,e.prototype.configure=function(t){return this.core.configure(t),this}
,e.prototype.getPlugin=function(t){var e=this.core.plugins.concat(this.core.mediaControl.container.plugins);return(0,A["default"])(e,function(e){return e.name===t}
)}
,e.prototype.getCurrentTime=function(){return this.core.mediaControl.container.getCurrentTime()}
,e.prototype.getStartTimeOffset=function(){return this.core.mediaControl.container.getStartTimeOffset()}
,e.prototype.getDuration=function(){return this.core.mediaControl.container.getDuration()}
,e}
(c["default"]);e["default"]=k,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(7),u=r(l),c=n(8),f=r(c),d=n(9),h=r(d),p=n(11),y=r(p),g=n(137),v=r(g),m=n(127),b=r(m),_="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",E=function(t){function e(){return i(this,e),o(this,t.apply(this,arguments))}
return a(e,t),e.prototype.setElement=function(t){this.$el=t,this.el=t[0]}
,e.prototype._setupFirefox=function(){var t=this.$("embed");t.attr("data-flash-playback",this.name),t.addClass(this.attributes["class"]),this.setElement(t)}
,e.prototype.render=function(){return this.$el.html(this.template({cid:this.cid,swfPath:this.swfPath,baseUrl:this.baseUrl,playbackId:this.uniqueId,wmode:this.wmode,callbackName:"window.Clappr.flashlsCallbacks."+this.cid}
)),y["default"].isIE&&(this.$("embed").remove(),y["default"].isLegacyIE&&this.$el.attr("classid",_)),y["default"].isFirefox&&this._setupFirefox(),this.el.id=this.cid,this.$el.append(f["default"].getStyleFor(b["default"])),this}
,s(e,[{key:"tagName",get:function(){return"object"}}
,{key:"swfPath",get:function(){return""}}
,{key:"wmode",get:function(){return"transparent"}}
,{key:"template",get:function(){return(0,h["default"])(v["default"])}}
,{key:"attributes",get:function(){var t="application/x-shockwave-flash";return y["default"].isLegacyIE&&(t=""),{"class":"clappr-flash-playback",type:t,width:"100%",height:"100%","data-flash-playback":this.name}}}
]),e}
(u["default"]);e["default"]=E,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(2),u=n(24),c=r(u),f=n(11),d=r(f),h=n(16),p=r(h),y=n(9),g=r(y),v=n(6),m=r(v),b=n(1),_=r(b),E=n(7),T=r(E),w=n(152),A=r(w),S=60,k=function(t){function e(){i(this,e);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var s=o(this,t.call.apply(t,[this].concat(r)));return s._src=s.options.src,s._baseUrl=s.options.baseUrl,s._autoPlay=s.options.autoPlay,s.settings={"default":["seekbar"]}
,s.settings.left=["playpause","position","duration"],s.settings.right=["fullscreen","volume"],s.settings.seekEnabled=!0,s._isReadyState=!1,s._addListeners(),s}
return a(e,t),s(e,[{key:"name",get:function(){return"flash"}}
,{key:"swfPath",get:function(){return(0,g["default"])(A["default"])({baseUrl:this._baseUrl}
)}}
,{key:"ended",get:function(){return"ENDED"===this._currentState}}
,{key:"buffering",get:function(){return!!this._bufferingState&&"ENDED"!==this._currentState}}
]),e.prototype._bootstrap=function(){var t=this;this.el.playerPlay?(this.el.width="100%",this.el.height="100%","PLAYING"===this._currentState?this._firstPlay():(this._currentState="IDLE",this._autoPlay&&this.play()),(0,m["default"])('<div style="position:absolute;top:0;left:0;width:100%;height:100%" />').insertAfter(this.$el),this.getDuration()>0?this._metadataLoaded():p["default"].once(this.uniqueId+":timeupdate",this._metadataLoaded,this)):(this._attempts=this._attempts||0,++this._attempts<=S?setTimeout(function(){return t._bootstrap()}
,50):this.trigger(_["default"].PLAYBACK_ERROR,{message:"Max number of attempts reached"}
,this.name))}
,e.prototype._metadataLoaded=function(){this._isReadyState=!0,this.trigger(_["default"].PLAYBACK_READY,this.name),this.trigger(_["default"].PLAYBACK_SETTINGSUPDATE,this.name)}
,e.prototype.getPlaybackType=function(){return T["default"].VOD}
,e.prototype.isHighDefinitionInUse=function(){return!1}
,e.prototype._updateTime=function(){this.trigger(_["default"].PLAYBACK_TIMEUPDATE,{current:this.el.getPosition(),total:this.el.getDuration()}
,this.name)}
,e.prototype._addListeners=function(){p["default"].on(this.uniqueId+":progress",this._progress,this),p["default"].on(this.uniqueId+":timeupdate",this._updateTime,this),p["default"].on(this.uniqueId+":statechanged",this._checkState,this),p["default"].on(this.uniqueId+":flashready",this._bootstrap,this)}
,e.prototype.stopListening=function(){t.prototype.stopListening.call(this),p["default"].off(this.uniqueId+":progress"),p["default"].off(this.uniqueId+":timeupdate"),p["default"].off(this.uniqueId+":statechanged"),p["default"].off(this.uniqueId+":flashready")}
,e.prototype._checkState=function(){this._isIdle||"PAUSED"===this._currentState||("PLAYING_BUFFERING"!==this._currentState&&"PLAYING_BUFFERING"===this.el.getState()?(this._bufferingState=!0,this.trigger(_["default"].PLAYBACK_BUFFERING,this.name),this._currentState="PLAYING_BUFFERING"):"PLAYING"===this.el.getState()?(this._bufferingState=!1,this.trigger(_["default"].PLAYBACK_BUFFERFULL,this.name),this._currentState="PLAYING"):"IDLE"===this.el.getState()?this._currentState="IDLE":"ENDED"===this.el.getState()&&(this.trigger(_["default"].PLAYBACK_ENDED,this.name),this.trigger(_["default"].PLAYBACK_TIMEUPDATE,{current:0,total:this.el.getDuration()}
,this.name),this._currentState="ENDED",this._isIdle=!0))}
,e.prototype._progress=function(){"IDLE"!==this._currentState&&"ENDED"!==this._currentState&&this.trigger(_["default"].PLAYBACK_PROGRESS,{start:0,current:this.el.getBytesLoaded(),total:this.el.getBytesTotal()}
)}
,e.prototype._firstPlay=function(){var t=this;this.el.playerPlay?(this._isIdle=!1,this.el.playerPlay(this._src),this.listenToOnce(this,_["default"].PLAYBACK_BUFFERFULL,function(){return t._checkInitialSeek()}
),this._currentState="PLAYING"):this.listenToOnce(this,_["default"].PLAYBACK_READY,this._firstPlay)}
,e.prototype._checkInitialSeek=function(){var t=(0,l.seekStringToSeconds)(window.location.href);0!==t&&this.seekSeconds(t)}
,e.prototype.play=function(){this.trigger(_["default"].PLAYBACK_PLAY_INTENT),"PAUSED"===this._currentState||"PLAYING_BUFFERING"===this._currentState?(this._currentState="PLAYING",this.el.playerResume(),this.trigger(_["default"].PLAYBACK_PLAY,this.name)):"PLAYING"!==this._currentState&&(this._firstPlay(),this.trigger(_["default"].PLAYBACK_PLAY,this.name))}
,e.prototype.volume=function(t){var e=this;this.isReady?this.el.playerVolume(t):this.listenToOnce(this,_["default"].PLAYBACK_BUFFERFULL,function(){return e.volume(t)}
)}
,e.prototype.pause=function(){this._currentState="PAUSED",this.el.playerPause(),this.trigger(_["default"].PLAYBACK_PAUSE,this.name)}
,e.prototype.stop=function(){this.el.playerStop(),this.trigger(_["default"].PLAYBACK_STOP),this.trigger(_["default"].PLAYBACK_TIMEUPDATE,{current:0,total:0}
,this.name)}
,e.prototype.isPlaying=function(){return!!(this.isReady&&this._currentState.indexOf("PLAYING")>-1)}
,e.prototype.getDuration=function(){return this.el.getDuration()}
,e.prototype.seekPercentage=function(t){var e=this;if(this.el.getDuration()>0){var n=this.el.getDuration()*(t/100);this.seek(n)}
else this.listenToOnce(this,_["default"].PLAYBACK_BUFFERFULL,function(){return e.seekPercentage(t)}
)}
,e.prototype.seek=function(t){var e=this;this.isReady&&this.el.playerSeek?(this.el.playerSeek(t),this.trigger(_["default"].PLAYBACK_TIMEUPDATE,{current:t,total:this.el.getDuration()}
,this.name),"PAUSED"===this._currentState&&this.el.playerPause()):this.listenToOnce(this,_["default"].PLAYBACK_BUFFERFULL,function(){return e.seek(t)}
)}
,e.prototype.destroy=function(){clearInterval(this.bootstrapId),t.prototype.stopListening.call(this),this.$el.remove()}
,s(e,[{key:"isReady",get:function(){return this._isReadyState}}
]),e}
(c["default"]);e["default"]=k,k.canPlay=function(t){if(d["default"].hasFlash&&t&&t.constructor===String){var e=t.split("?")[0].match(/.*\.(.*)$/)||[];return e.length>1&&!d["default"].isMobile&&e[1].toLowerCase().match(/^(mp4|mov|f4v|3gpp|3gp)$/)}
return!1}
,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(24),u=r(l),c=n(1),f=r(c),d=n(9),h=r(d),p=n(7),y=r(p),g=n(16),v=r(g),m=n(11),b=r(m),_=n(96),E=r(_),T=n(153),w=r(T),A=n(6),S=r(A),k=60,L=-1,O=function(t){function e(){i(this,e);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var s=o(this,t.call.apply(t,[this].concat(r)));return s._src=s.options.src,s._baseUrl=s.options.baseUrl,s._initHlsParameters(s.options),s.highDefinition=!1,s._autoPlay=s.options.autoPlay,s._loop=s.options.loop,s._defaultSettings={left:["playstop"],"default":["seekbar"],right:["fullscreen","volume","hd-indicator"],seekEnabled:!1}
,s.settings=S["default"].extend({}
,s._defaultSettings),s._playbackType=y["default"].LIVE,s._hasEnded=!1,s._addListeners(),s}
return a(e,t),s(e,[{key:"name",get:function(){return"flashls"}}
,{key:"swfPath",get:function(){return(0,h["default"])(w["default"])({baseUrl:this._baseUrl}
)}}
,{key:"levels",get:function(){return this._levels||[]}}
,{key:"currentLevel",get:function(){return null===this._currentLevel||void 0===this._currentLevel?L:this._currentLevel}
,set:function(t){this._currentLevel=t,this.trigger(f["default"].PLAYBACK_LEVEL_SWITCH_START),this.el.playerSetCurrentLevel(t)}}
,{key:"ended",get:function(){return this._hasEnded}}
,{key:"buffering",get:function(){return!!this._bufferingState&&!this._hasEnded}}
]),e.prototype._initHlsParameters=function(t){this._autoStartLoad=void 0===t.autoStartLoad||t.autoStartLoad,this._capLevelToStage=void 0!==t.capLevelToStage&&t.capLevelToStage,this._maxLevelCappingMode=void 0===t.maxLevelCappingMode?"downscale":t.maxLevelCappingMode,this._minBufferLength=void 0===t.minBufferLength?-1:t.minBufferLength,this._minBufferLengthCapping=void 0===t.minBufferLengthCapping?-1:t.minBufferLengthCapping,this._maxBufferLength=void 0===t.maxBufferLength?120:t.maxBufferLength,this._maxBackBufferLength=void 0===t.maxBackBufferLength?30:t.maxBackBufferLength,this._lowBufferLength=void 0===t.lowBufferLength?3:t.lowBufferLength,this._mediaTimePeriod=void 0===t.mediaTimePeriod?100:t.mediaTimePeriod,this._fpsDroppedMonitoringPeriod=void 0===t.fpsDroppedMonitoringPeriod?5e3:t.fpsDroppedMonitoringPeriod,this._fpsDroppedMonitoringThreshold=void 0===t.fpsDroppedMonitoringThreshold?.2:t.fpsDroppedMonitoringThreshold,this._capLevelonFPSDrop=void 0!==t.capLevelonFPSDrop&&t.capLevelonFPSDrop,this._smoothAutoSwitchonFPSDrop=void 0===t.smoothAutoSwitchonFPSDrop?this.capLevelonFPSDrop:t.smoothAutoSwitchonFPSDrop,this._switchDownOnLevelError=void 0===t.switchDownOnLevelError||t.switchDownOnLevelError,this._seekMode=void 0===t.seekMode?"ACCURATE":t.seekMode,this._keyLoadMaxRetry=void 0===t.keyLoadMaxRetry?3:t.keyLoadMaxRetry,this._keyLoadMaxRetryTimeout=void 0===t.keyLoadMaxRetryTimeout?64e3:t.keyLoadMaxRetryTimeout,this._fragmentLoadMaxRetry=void 0===t.fragmentLoadMaxRetry?3:t.fragmentLoadMaxRetry,this._fragmentLoadMaxRetryTimeout=void 0===t.fragmentLoadMaxRetryTimeout?4e3:t.fragmentLoadMaxRetryTimeout,this._fragmentLoadSkipAfterMaxRetry=void 0===t.fragmentLoadSkipAfterMaxRetry||t.fragmentLoadSkipAfterMaxRetry,this._maxSkippedFragments=void 0===t.maxSkippedFragments?5:t.maxSkippedFragments,this._flushLiveURLCache=void 0!==t.flushLiveURLCache&&t.flushLiveURLCache,this._initialLiveManifestSize=void 0===t.initialLiveManifestSize?1:t.initialLiveManifestSize,this._manifestLoadMaxRetry=void 0===t.manifestLoadMaxRetry?3:t.manifestLoadMaxRetry,this._manifestLoadMaxRetryTimeout=void 0===t.manifestLoadMaxRetryTimeout?64e3:t.manifestLoadMaxRetryTimeout,this._manifestRedundantLoadmaxRetry=void 0===t.manifestRedundantLoadmaxRetry?3:t.manifestRedundantLoadmaxRetry,this._startFromBitrate=void 0===t.startFromBitrate?-1:t.startFromBitrate,this._startFromLevel=void 0===t.startFromLevel?-1:t.startFromLevel,this._autoStartMaxDuration=void 0===t.autoStartMaxDuration?-1:t.autoStartMaxDuration,this._seekFromLevel=void 0===t.seekFromLevel?-1:t.seekFromLevel,this._useHardwareVideoDecoder=void 0!==t.useHardwareVideoDecoder&&t.useHardwareVideoDecoder,this._hlsLogEnabled=void 0===t.hlsLogEnabled||t.hlsLogEnabled,this._logDebug=void 0!==t.logDebug&&t.logDebug,this._logDebug2=void 0!==t.logDebug2&&t.logDebug2,this._logWarn=void 0===t.logWarn||t.logWarn,this._logError=void 0===t.logError||t.logError,this._hlsMinimumDvrSize=void 0===t.hlsMinimumDvrSize?60:t.hlsMinimumDvrSize}
,e.prototype._addListeners=function(){var t=this;v["default"].on(this.cid+":flashready",function(){return t._bootstrap()}
),v["default"].on(this.cid+":timeupdate",function(e){return t._updateTime(e)}
),v["default"].on(this.cid+":playbackstate",function(e){return t._setPlaybackState(e)}
),v["default"].on(this.cid+":levelchanged",function(e){return t._levelChanged(e)}
),v["default"].on(this.cid+":error",function(e,n,r){return t._flashPlaybackError(e,n,r)}
),v["default"].on(this.cid+":fragmentloaded",function(e){return t._onFragmentLoaded(e)}
),v["default"].on(this.cid+":levelendlist",function(e){return t._onLevelEndlist(e)}
)}
,e.prototype.stopListening=function(){t.prototype.stopListening.call(this),v["default"].off(this.cid+":flashready"),v["default"].off(this.cid+":timeupdate"),v["default"].off(this.cid+":playbackstate"),v["default"].off(this.cid+":levelchanged"),v["default"].off(this.cid+":playbackerror"),v["default"].off(this.cid+":fragmentloaded"),v["default"].off(this.cid+":manifestloaded"),v["default"].off(this.cid+":levelendlist")}
,e.prototype._bootstrap=function(){var t=this;this.el.playerLoad?(this.el.width="100%",this.el.height="100%",this._isReadyState=!0,this._srcLoaded=!1,this._currentState="IDLE",this._setFlashSettings(),this._updatePlaybackType(),(this._autoPlay||this._shouldPlayOnManifestLoaded)&&this.play(),this.trigger(f["default"].PLAYBACK_READY,this.name)):(this._bootstrapAttempts=this._bootstrapAttempts||0,++this._bootstrapAttempts<=k?setTimeout(function(){return t._bootstrap()}
,50):this.trigger(f["default"].PLAYBACK_ERROR,{message:"Max number of attempts reached"}
,this.name))}
,e.prototype._setFlashSettings=function(){this.el.playerSetAutoStartLoad(this._autoStartLoad),this.el.playerSetCapLevelToStage(this._capLevelToStage),this.el.playerSetMaxLevelCappingMode(this._maxLevelCappingMode),this.el.playerSetMinBufferLength(this._minBufferLength),this.el.playerSetMinBufferLengthCapping(this._minBufferLengthCapping),this.el.playerSetMaxBufferLength(this._maxBufferLength),this.el.playerSetMaxBackBufferLength(this._maxBackBufferLength),this.el.playerSetLowBufferLength(this._lowBufferLength),this.el.playerSetMediaTimePeriod(this._mediaTimePeriod),this.el.playerSetFpsDroppedMonitoringPeriod(this._fpsDroppedMonitoringPeriod),this.el.playerSetFpsDroppedMonitoringThreshold(this._fpsDroppedMonitoringThreshold),this.el.playerSetCapLevelonFPSDrop(this._capLevelonFPSDrop),this.el.playerSetSmoothAutoSwitchonFPSDrop(this._smoothAutoSwitchonFPSDrop),this.el.playerSetSwitchDownOnLevelError(this._switchDownOnLevelError),this.el.playerSetSeekMode(this._seekMode),this.el.playerSetKeyLoadMaxRetry(this._keyLoadMaxRetry),this.el.playerSetKeyLoadMaxRetryTimeout(this._keyLoadMaxRetryTimeout),this.el.playerSetFragmentLoadMaxRetry(this._fragmentLoadMaxRetry),this.el.playerSetFragmentLoadMaxRetryTimeout(this._fragmentLoadMaxRetryTimeout),this.el.playerSetFragmentLoadSkipAfterMaxRetry(this._fragmentLoadSkipAfterMaxRetry),this.el.playerSetMaxSkippedFragments(this._maxSkippedFragments),this.el.playerSetFlushLiveURLCache(this._flushLiveURLCache),this.el.playerSetInitialLiveManifestSize(this._initialLiveManifestSize),this.el.playerSetManifestLoadMaxRetry(this._manifestLoadMaxRetry),this.el.playerSetManifestLoadMaxRetryTimeout(this._manifestLoadMaxRetryTimeout),this.el.playerSetManifestRedundantLoadmaxRetry(this._manifestRedundantLoadmaxRetry),this.el.playerSetStartFromBitrate(this._startFromBitrate),this.el.playerSetStartFromLevel(this._startFromLevel),this.el.playerSetAutoStartMaxDuration(this._autoStartMaxDuration),this.el.playerSetSeekFromLevel(this._seekFromLevel),this.el.playerSetUseHardwareVideoDecoder(this._useHardwareVideoDecoder),this.el.playerSetLogInfo(this._hlsLogEnabled),this.el.playerSetLogDebug(this._logDebug),this.el.playerSetLogDebug2(this._logDebug2),this.el.playerSetLogWarn(this._logWarn),this.el.playerSetLogError(this._logError)}
,e.prototype.setAutoStartLoad=function(t){this._autoStartLoad=t,this.el.playerSetAutoStartLoad(this._autoStartLoad)}
,e.prototype.setCapLevelToStage=function(t){this._capLevelToStage=t,this.el.playerSetCapLevelToStage(this._capLevelToStage)}
,e.prototype.setMaxLevelCappingMode=function(t){this._maxLevelCappingMode=t,this.el.playerSetMaxLevelCappingMode(this._maxLevelCappingMode)}
,e.prototype.setSetMinBufferLength=function(t){this._minBufferLength=t,this.el.playerSetMinBufferLength(this._minBufferLength)}
,e.prototype.setMinBufferLengthCapping=function(t){this._minBufferLengthCapping=t,this.el.playerSetMinBufferLengthCapping(this._minBufferLengthCapping)}
,e.prototype.setMaxBufferLength=function(t){this._maxBufferLength=t,this.el.playerSetMaxBufferLength(this._maxBufferLength)}
,e.prototype.setMaxBackBufferLength=function(t){this._maxBackBufferLength=t,this.el.playerSetMaxBackBufferLength(this._maxBackBufferLength)}
,e.prototype.setLowBufferLength=function(t){this._lowBufferLength=t,this.el.playerSetLowBufferLength(this._lowBufferLength)}
,e.prototype.setMediaTimePeriod=function(t){this._mediaTimePeriod=t,this.el.playerSetMediaTimePeriod(this._mediaTimePeriod)}
,e.prototype.setFpsDroppedMonitoringPeriod=function(t){this._fpsDroppedMonitoringPeriod=t,this.el.playerSetFpsDroppedMonitoringPeriod(this._fpsDroppedMonitoringPeriod)}
,e.prototype.setFpsDroppedMonitoringThreshold=function(t){this._fpsDroppedMonitoringThreshold=t,this.el.playerSetFpsDroppedMonitoringThreshold(this._fpsDroppedMonitoringThreshold)}
,e.prototype.setCapLevelonFPSDrop=function(t){this._capLevelonFPSDrop=t,this.el.playerSetCapLevelonFPSDrop(this._capLevelonFPSDrop)}
,e.prototype.setSmoothAutoSwitchonFPSDrop=function(t){this._smoothAutoSwitchonFPSDrop=t,this.el.playerSetSmoothAutoSwitchonFPSDrop(this._smoothAutoSwitchonFPSDrop)}
,e.prototype.setSwitchDownOnLevelError=function(t){this._switchDownOnLevelError=t,this.el.playerSetSwitchDownOnLevelError(this._switchDownOnLevelError)}
,e.prototype.setSeekMode=function(t){this._seekMode=t,this.el.playerSetSeekMode(this._seekMode)}
,e.prototype.setKeyLoadMaxRetry=function(t){this._keyLoadMaxRetry=t,this.el.playerSetKeyLoadMaxRetry(this._keyLoadMaxRetry)}
,e.prototype.setKeyLoadMaxRetryTimeout=function(t){this._keyLoadMaxRetryTimeout=t,this.el.playerSetKeyLoadMaxRetryTimeout(this._keyLoadMaxRetryTimeout)}
,e.prototype.setFragmentLoadMaxRetry=function(t){this._fragmentLoadMaxRetry=t,this.el.playerSetFragmentLoadMaxRetry(this._fragmentLoadMaxRetry)}
,e.prototype.setFragmentLoadMaxRetryTimeout=function(t){this._fragmentLoadMaxRetryTimeout=t,this.el.playerSetFragmentLoadMaxRetryTimeout(this._fragmentLoadMaxRetryTimeout)}
,e.prototype.setFragmentLoadSkipAfterMaxRetry=function(t){this._fragmentLoadSkipAfterMaxRetry=t,this.el.playerSetFragmentLoadSkipAfterMaxRetry(this._fragmentLoadSkipAfterMaxRetry)}
,e.prototype.setMaxSkippedFragments=function(t){this._maxSkippedFragments=t,this.el.playerSetMaxSkippedFragments(this._maxSkippedFragments)}
,e.prototype.setFlushLiveURLCache=function(t){this._flushLiveURLCache=t,this.el.playerSetFlushLiveURLCache(this._flushLiveURLCache)}
,e.prototype.setInitialLiveManifestSize=function(t){this._initialLiveManifestSize=t,this.el.playerSetInitialLiveManifestSize(this._initialLiveManifestSize)}
,e.prototype.setManifestLoadMaxRetry=function(t){this._manifestLoadMaxRetry=t,this.el.playerSetManifestLoadMaxRetry(this._manifestLoadMaxRetry)}
,e.prototype.setManifestLoadMaxRetryTimeout=function(t){this._manifestLoadMaxRetryTimeout=t,this.el.playerSetManifestLoadMaxRetryTimeout(this._manifestLoadMaxRetryTimeout)}
,e.prototype.setManifestRedundantLoadmaxRetry=function(t){this._manifestRedundantLoadmaxRetry=t,this.el.playerSetManifestRedundantLoadmaxRetry(this._manifestRedundantLoadmaxRetry)}
,e.prototype.setStartFromBitrate=function(t){this._startFromBitrate=t,this.el.playerSetStartFromBitrate(this._startFromBitrate)}
,e.prototype.setStartFromLevel=function(t){this._startFromLevel=t,this.el.playerSetStartFromLevel(this._startFromLevel)}
,e.prototype.setAutoStartMaxDuration=function(t){this._autoStartMaxDuration=t,this.el.playerSetAutoStartMaxDuration(this._autoStartMaxDuration)}
,e.prototype.setSeekFromLevel=function(t){this._seekFromLevel=t,this.el.playerSetSeekFromLevel(this._seekFromLevel)}
,e.prototype.setUseHardwareVideoDecoder=function(t){this._useHardwareVideoDecoder=t,this.el.playerSetUseHardwareVideoDecoder(this._useHardwareVideoDecoder)}
,e.prototype.setSetLogInfo=function(t){this._hlsLogEnabled=t,this.el.playerSetLogInfo(this._hlsLogEnabled)}
,e.prototype.setLogDebug=function(t){this._logDebug=t,this.el.playerSetLogDebug(this._logDebug)}
,e.prototype.setLogDebug2=function(t){this._logDebug2=t,this.el.playerSetLogDebug2(this._logDebug2)}
,e.prototype.setLogWarn=function(t){this._logWarn=t,this.el.playerSetLogWarn(this._logWarn)}
,e.prototype.setLogError=function(t){this._logError=t,this.el.playerSetLogError(this._logError)}
,e.prototype._levelChanged=function(t){var e=this.el.getLevels()[t];e&&(this.highDefinition=e.height>=720||e.bitrate/1e3>=2e3,this.trigger(f["default"].PLAYBACK_HIGHDEFINITIONUPDATE,this.highDefinition),this._levels&&0!==this._levels.length||this._fillLevels(),this.trigger(f["default"].PLAYBACK_BITRATE,{height:e.height,width:e.width,bandwidth:e.bandwidth,bitrate:e.bitrate,level:t}
),this.trigger(f["default"].PLAYBACK_LEVEL_SWITCH_END))}
,e.prototype._updateTime=function(t){if("IDLE"!==this._currentState){var e=this._normalizeDuration(t.duration),n=Math.min(Math.max(t.position,0),e),r=this._dvrEnabled,i=this._playbackType===y["default"].LIVE;this._dvrEnabled=i&&e>this._hlsMinimumDvrSize,100!==e&&void 0!==i&&(this._dvrEnabled!==r&&(this._updateSettings(),this.trigger(f["default"].PLAYBACK_SETTINGSUPDATE,this.name)),!i||this._dvrEnabled&&this._dvrInUse||(n=e),this.trigger(f["default"].PLAYBACK_TIMEUPDATE,{current:n,total:e}
,this.name))}}
,e.prototype.play=function(){this.trigger(f["default"].PLAYBACK_PLAY_INTENT),"PAUSED"===this._currentState?this.el.playerResume():this._srcLoaded||"PLAYING"===this._currentState?this.el.playerPlay():this._firstPlay()}
,e.prototype.getPlaybackType=function(){return this._playbackType?this._playbackType:null}
,e.prototype.getCurrentLevelIndex=function(){return this._currentLevel}
,e.prototype.getCurrentLevel=function(){return this.levels[this.currentLevel]}
,e.prototype.getCurrentBitrate=function(){return this.levels[this.currentLevel].bitrate}
,e.prototype.setCurrentLevel=function(t){this.currentLevel=t}
,e.prototype.isHighDefinitionInUse=function(){return this.highDefinition}
,e.prototype.getLevels=function(){return this.levels}
,e.prototype._setPlaybackState=function(t){["PLAYING_BUFFERING","PAUSED_BUFFERING"].indexOf(t)>=0?(this._bufferingState=!0,this.trigger(f["default"].PLAYBACK_BUFFERING,this.name),this._updateCurrentState(t)):["PLAYING","PAUSED"].indexOf(t)>=0?(["PLAYING_BUFFERING","PAUSED_BUFFERING","IDLE"].indexOf(this._currentState)>=0&&(this._bufferingState=!1,this.trigger(f["default"].PLAYBACK_BUFFERFULL,this.name)),this._updateCurrentState(t)):"IDLE"===t&&(this._srcLoaded=!1,this._loop&&["PLAYING_BUFFERING","PLAYING"].indexOf(this._currentState)>=0?(this.play(),this.seek(0)):(this._updateCurrentState(t),this._hasEnded=!0,this.trigger(f["default"].PLAYBACK_TIMEUPDATE,{current:0,total:this.getDuration()}
,this.name),this.trigger(f["default"].PLAYBACK_ENDED,this.name)))}
,e.prototype._updateCurrentState=function(t){this._currentState=t,"IDLE"!==t&&(this._hasEnded=!1),this._updatePlaybackType(),"PLAYING"===t?this.trigger(f["default"].PLAYBACK_PLAY,this.name):"PAUSED"===t&&this.trigger(f["default"].PLAYBACK_PAUSE,this.name)}
,e.prototype._updatePlaybackType=function(){this._playbackType=this.el.getType(),this._playbackType&&(this._playbackType=this._playbackType.toLowerCase(),this._playbackType===y["default"].VOD?this._startReportingProgress():this._stopReportingProgress()),this.trigger(f["default"].PLAYBACK_PLAYBACKSTATE,{type:this._playbackType}
)}
,e.prototype._startReportingProgress=function(){this._reportingProgress||(this._reportingProgress=!0)}
,e.prototype._stopReportingProgress=function(){this._reportingProgress=!1}
,e.prototype._onFragmentLoaded=function(t){if(this.trigger(f["default"].PLAYBACK_FRAGMENT_LOADED,t),this._reportingProgress&&this.el.getPosition){var e=this.el.getPosition()+this.el.getbufferLength();this.trigger(f["default"].PLAYBACK_PROGRESS,{start:this.el.getPosition(),current:e,total:this.el.getDuration()}
)}}
,e.prototype._onLevelEndlist=function(){this._updatePlaybackType()}
,e.prototype._firstPlay=function(){var t=this;this._shouldPlayOnManifestLoaded=!0,this.el.playerLoad&&(v["default"].once(this.cid+":manifestloaded",function(e,n){return t._manifestLoaded(e,n)}
),this._setFlashSettings(),this.el.playerLoad(this._src),this._srcLoaded=!0)}
,e.prototype.volume=function(t){var e=this;this.isReady?this.el.playerVolume(t):this.listenToOnce(this,f["default"].PLAYBACK_BUFFERFULL,function(){return e.volume(t)}
)}
,e.prototype.pause=function(){(this._playbackType!==y["default"].LIVE||this._dvrEnabled)&&(this.el.playerPause(),this._playbackType===y["default"].LIVE&&this._dvrEnabled&&this._updateDvr(!0))}
,e.prototype.stop=function(){this._srcLoaded=!1,this.el.playerStop(),this.trigger(f["default"].PLAYBACK_STOP),this.trigger(f["default"].PLAYBACK_TIMEUPDATE,{current:0,total:0}
,this.name)}
,e.prototype.isPlaying=function(){return!!this._currentState&&!!this._currentState.match(/playing/i)}
,e.prototype.getDuration=function(){return this._normalizeDuration(this.el.getDuration())}
,e.prototype._normalizeDuration=function(t){return this._playbackType===y["default"].LIVE&&(t=Math.max(0,t-10)),t}
,e.prototype.seekPercentage=function(t){var e=this.el.getDuration(),n=0;t>0&&(n=e*t/100),this.seek(n)}
,e.prototype.seek=function(t){var e=this.getDuration();if(this._playbackType===y["default"].LIVE){var n=e-t>3;this._updateDvr(n)}
this.el.playerSeek(t),this.trigger(f["default"].PLAYBACK_TIMEUPDATE,{current:t,total:e}
,this.name)}
,e.prototype._updateDvr=function(t){var e=!!this._dvrInUse;this._dvrInUse=t,this._dvrInUse!==e&&(this._updateSettings(),this.trigger(f["default"].PLAYBACK_DVR,this._dvrInUse),this.trigger(f["default"].PLAYBACK_STATS_ADD,{dvr:this._dvrInUse}
))}
,e.prototype._flashPlaybackError=function(t,e,n){this.trigger(f["default"].PLAYBACK_ERROR,{code:t,url:e,message:n}
),this.trigger(f["default"].PLAYBACK_STOP)}
,e.prototype._manifestLoaded=function(t,e){this._shouldPlayOnManifestLoaded&&(this._shouldPlayOnManifestLoaded=!1,this.el.playerPlay()),this._fillLevels(),this.trigger(f["default"].PLAYBACK_LOADEDMETADATA,{duration:t,data:e}
)}
,e.prototype._fillLevels=function(){var t=this.el.getLevels(),e=t.length;this._levels=[];for(var n=0;n<e;n++)this._levels.push({id:n,label:t[n].height+"p",level:t[n]}
);this.trigger(f["default"].PLAYBACK_LEVELS_AVAILABLE,this._levels)}
,e.prototype.destroy=function(){this.stopListening(),this.$el.remove()}
,e.prototype._updateSettings=function(){this.settings=S["default"].extend({}
,this._defaultSettings),this._playbackType===y["default"].VOD||this._dvrInUse?(this.settings.left=["playpause","position","duration"],this.settings.seekEnabled=!0):this._dvrEnabled?(this.settings.left=["playpause"],this.settings.seekEnabled=!0):this.settings.seekEnabled=!1}
,e.prototype._createCallbacks=function(){var t=this;window.Clappr||(window.Clappr={}
),window.Clappr.flashlsCallbacks||(window.Clappr.flashlsCallbacks={}
),this.flashlsEvents=new E["default"](this.cid),window.Clappr.flashlsCallbacks[this.cid]=function(e,n){t.flashlsEvents[e].apply(t.flashlsEvents,n)}}
,e.prototype.render=function(){return t.prototype.render.call(this),this._createCallbacks(),this}
,s(e,[{key:"isReady",get:function(){return this._isReadyState}}
]),e}
(u["default"]);e["default"]=O,O.canPlay=function(t,e){var n=t.split("?")[0].match(/.*\.(.*)$/)||[];return b["default"].hasFlash&&(n.length>1&&"m3u8"===n[1].toLowerCase()||"application/x-mpegURL"===e||"application/vnd.apple.mpegurl"===e)}
,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var o=n(16),a=r(o),s=function(){function t(e){i(this,t),this.instanceId=e}
return t.prototype.ready=function(){a["default"].trigger(this.instanceId+":flashready")}
,t.prototype.videoSize=function(t,e){a["default"].trigger(this.instanceId+":videosizechanged",t,e)}
,t.prototype.complete=function(){a["default"].trigger(this.instanceId+":complete")}
,t.prototype.error=function(t,e,n){a["default"].trigger(this.instanceId+":error",t,e,n)}
,t.prototype.manifest=function(t,e){a["default"].trigger(this.instanceId+":manifestloaded",t,e)}
,t.prototype.audioLevelLoaded=function(t){a["default"].trigger(this.instanceId+":audiolevelloaded",t)}
,t.prototype.levelLoaded=function(t){a["default"].trigger(this.instanceId+":levelloaded",t)}
,t.prototype.levelEndlist=function(t){a["default"].trigger(this.instanceId+":levelendlist",t)}
,t.prototype.fragmentLoaded=function(t){a["default"].trigger(this.instanceId+":fragmentloaded",t)}
,t.prototype.fragmentPlaying=function(t){a["default"].trigger(this.instanceId+":fragmentplaying",t)}
,t.prototype.position=function(t){a["default"].trigger(this.instanceId+":timeupdate",t)}
,t.prototype.state=function(t){a["default"].trigger(this.instanceId+":playbackstate",t)}
,t.prototype.seekState=function(t){a["default"].trigger(this.instanceId+":seekstate",t)}
,t.prototype["switch"]=function(t){a["default"].trigger(this.instanceId+":levelchanged",t)}
,t.prototype.audioTracksListChange=function(t){a["default"].trigger(this.instanceId+":audiotracklistchanged",t)}
,t.prototype.audioTrackChange=function(t){a["default"].trigger(this.instanceId+":audiotrackchanged",t)}
,t}
();e["default"]=s,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}
return Array.from(t)}
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(22),c=r(u),f=n(64),d=r(f),h=n(77),p=r(h),y=n(1),g=r(y),v=n(7),m=r(v),b=n(11),_=r(b),E=n(2),T=n(25),w=r(T),A=-1,S=function(t){function e(){o(this,e);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];var s=a(this,t.call.apply(t,[this].concat(r)));return s.options.playback||(s.options.playback=s.options),s._minDvrSize="undefined"==typeof s.options.hlsMinimumDvrSize?60:s.options.hlsMinimumDvrSize,s._extrapolatedWindowNumSegments=s.options.playback&&"undefined"!=typeof s.options.playback.extrapolatedWindowNumSegments?s.options.playback.extrapolatedWindowNumSegments:2,s._playbackType=m["default"].VOD,s._lastTimeUpdate=null,s._playableRegionStartTime=0,s._localStartTimeCorrelation=null,s._playableRegionDuration=0,s._durationExcludesAfterLiveSyncPoint=!1,s._segmentTargetDuration=null,s._playlistType=null,s._recoverAttemptsRemaining=s.options.hlsRecoverAttempts||16,s._startTimeUpdateTimer(),s}
return s(e,t),l(e,[{key:"name",get:function(){return"hls"}}
,{key:"levels",get:function(){return this._levels||[]}}
,{key:"currentLevel",get:function(){return null===this._currentLevel||void 0===this._currentLevel?A:this._currentLevel}
,set:function(t){this._currentLevel=t,this.trigger(g["default"].PLAYBACK_LEVEL_SWITCH_START),this._hls.currentLevel=this._currentLevel}}
,{key:"_duration",get:function(){return this._playableRegionDuration}}
,{key:"_startTime",get:function(){return this._playbackType===m["default"].LIVE&&"EVENT"!==this._playlistType?this._extrapolatedStartTime:this._playableRegionStartTime}}
,{key:"_now",get:function(){return(0,E.now)()}}
,{key:"_extrapolatedStartTime",get:function(){if(!this._localStartTimeCorrelation)return this._playableRegionStartTime;var t=this._localStartTimeCorrelation,e=this._now-t.local,n=(t.remote+e)/1e3;return Math.min(n,this._playableRegionStartTime+this._extrapolatedWindowDuration)}}
,{key:"_extrapolatedWindowDuration",get:function(){return null===this._segmentTargetDuration?0:this._extrapolatedWindowNumSegments*this._segmentTargetDuration}}
]),e.prototype._setupHls=function(){var t=this;this._hls=new d["default"](this.options.playback.hlsjsConfig||{}
),this._hls.on(d["default"].Events.MEDIA_ATTACHED,function(){return t._hls.loadSource(t.options.src)}
),this._hls.on(d["default"].Events.LEVEL_LOADED,function(e,n){return t._updatePlaybackType(e,n)}
),this._hls.on(d["default"].Events.LEVEL_UPDATED,function(e,n){return t._onLevelUpdated(e,n)}
),this._hls.on(d["default"].Events.LEVEL_SWITCH,function(e,n){return t._onLevelSwitch(e,n)}
),this._hls.on(d["default"].Events.FRAG_LOADED,function(e,n){return t._onFragmentLoaded(e,n)}
),this._hls.on(d["default"].Events.ERROR,function(e,n){return t._onHLSJSError(e,n)}
),this._hls.attachMedia(this.el)}
,e.prototype._recover=function(t,e){this._recoveredDecodingError?this._recoveredAudioCodecError?(w["default"].error("hlsjs:failed to recover"),this.trigger(g["default"].PLAYBACK_ERROR,"hlsjs:could not recover from error,evt "+t+",data "+e+" ",this.name)):(this._recoveredAudioCodecError=!0,this._hls.swapAudioCodec(),this._hls.recoverMediaError()):(this._recoveredDecodingError=!0,this._hls.recoverMediaError())}
,e.prototype._setupSrc=function(t){}
,e.prototype._startTimeUpdateTimer=function(){var t=this;this._timeUpdateTimer=setInterval(function(){t._onTimeUpdate()}
,100)}
,e.prototype._stopTimeUpdateTimer=function(){clearInterval(this._timeUpdateTimer)}
,e.prototype.getDuration=function(){return this._duration}
,e.prototype.getCurrentTime=function(){return Math.max(0,this.el.currentTime-this._startTime)}
,e.prototype.getStartTimeOffset=function(){return this._startTime}
,e.prototype.seekPercentage=function(t){var e=this._playableRegionDuration;t>0&&(e=this._duration*(t/100)),this.seek(e)}
,e.prototype.seek=function(e){e<0&&(w["default"].warn("Attempt to seek to a negative time. Resetting to live point. Use seekToLivePoint() to seek to the live point."),e=this.getDuration()),this.dvrEnabled&&this._updateDvr(e<this.getDuration()-3),e+=this._startTime,t.prototype.seek.call(this,e)}
,e.prototype.seekToLivePoint=function(){this.seek(this.getDuration())}
,e.prototype._updateDvr=function(t){this.trigger(g["default"].PLAYBACK_DVR,t),this.trigger(g["default"].PLAYBACK_STATS_ADD,{dvr:t}
)}
,e.prototype._updateSettings=function(){this._playbackType===m["default"].VOD?this.settings.left=["playpause","position","duration"]:this.dvrEnabled?this.settings.left=["playpause"]:this.settings.left=["playstop"],this.settings.seekEnabled=this.isSeekEnabled(),this.trigger(g["default"].PLAYBACK_SETTINGSUPDATE)}
,e.prototype._onHLSJSError=function(t,e){if(e.fatal)if(this._recoverAttemptsRemaining>0)switch(this._recoverAttemptsRemaining-=1,e.type){case d["default"].ErrorTypes.NETWORK_ERROR:w["default"].warn("hlsjs:trying to recover from network error,evt "+t+",data "+e+" "),this._hls.startLoad();break;case d["default"].ErrorTypes.MEDIA_ERROR:w["default"].warn("hlsjs:trying to recover from media error,evt "+t+",data "+e+" "),this._recover(t,e);break;default:w["default"].error("hlsjs:trying to recover from error,evt "+t+",data "+e+" "),this.trigger(g["default"].PLAYBACK_ERROR,"hlsjs:could not recover from error,evt "+t+",data "+e+" ",this.name)}
else w["default"].error("hlsjs:could not recover from error after maximum number of attempts,evt "+t+",data "+e+" "),this.trigger(g["default"].PLAYBACK_ERROR,{evt:t,data:e}
,this.name);else w["default"].warn("hlsjs:non-fatal error occurred,evt "+t+",data "+e+" ")}
,e.prototype._onTimeUpdate=function(){var t={current:this.getCurrentTime(),total:this.getDuration()}
;(0,p["default"])(t,this._lastTimeUpdate)||(this._lastTimeUpdate=t,this.trigger(g["default"].PLAYBACK_TIMEUPDATE,t,this.name))}
,e.prototype._onProgress=function(){if(this.el.buffered.length){for(var t=[],e=0,n=0;n<this.el.buffered.length;n++)t=[].concat(i(t),[{start:Math.max(0,this.el.buffered.start(n)-this._playableRegionStartTime),end:Math.max(0,this.el.buffered.end(n)-this._playableRegionStartTime)}
]),this.el.currentTime>=t[n].start&&this.el.currentTime<=t[n].end&&(e=n);var r={start:t[e].start,current:t[e].end,total:this.getDuration()}
;this.trigger(g["default"].PLAYBACK_PROGRESS,r,t)}}
,e.prototype.play=function(){this._hls||this._setupHls(),t.prototype.play.call(this)}
,e.prototype.pause=function(){this._hls&&(t.prototype.pause.call(this),this.dvrEnabled&&this._updateDvr(!0))}
,e.prototype.stop=function(){this._hls&&(t.prototype.stop.call(this),this._hls.destroy(),delete this._hls)}
,e.prototype.destroy=function(){this._stopTimeUpdateTimer(),t.prototype.destroy.call(this)}
,e.prototype._updatePlaybackType=function(t,e){this._playbackType=e.details.live?m["default"].LIVE:m["default"].VOD,this._fillLevels(),this._onLevelUpdated(t,e)}
,e.prototype._fillLevels=function(){this._levels=this._hls.levels.map(function(t,e){return{id:e,level:t,label:t.bitrate/1e3+"Kbps"}}
),this.trigger(g["default"].PLAYBACK_LEVELS_AVAILABLE,this._levels)}
,e.prototype._onLevelUpdated=function(t,e){this._segmentTargetDuration=e.details.targetduration,this._playlistType=e.details.type||null;var n=!1,r=!1,i=e.details.fragments,o=this._playableRegionStartTime;if(i.length>0&&this._playableRegionStartTime!==i[0].start&&(n=!0,this._playableRegionStartTime=i[0].start),i.length>0&&n)if(this._localStartTimeCorrelation){var a=this._localStartTimeCorrelation,s=this._now-a.local,l=(a.remote+s)/1e3;l<i[0].start?this._localStartTimeCorrelation={local:this._now,remote:1e3*i[0].start}
:l>o+this._extrapolatedWindowDuration&&(this._localStartTimeCorrelation={local:this._now,remote:1e3*Math.max(i[0].start,o+this._extrapolatedWindowDuration)}
)}
else this._localStartTimeCorrelation={local:this._now,remote:1e3*(i[0].start+this._extrapolatedWindowDuration/2)}
;var u=e.details.totalduration;if(this._playbackType===m["default"].LIVE){var c=e.details.targetduration,f=this.options.playback||{}
,h=f.liveSyncDurationCount||d["default"].DefaultConfig.liveSyncDurationCount,p=c*h;p+=this._extrapolatedWindowDuration,p<=u?(u-=p,this._durationExcludesAfterLiveSyncPoint=!0):this._durationExcludesAfterLiveSyncPoint=!1}
u!==this._playableRegionDuration&&(r=!0,this._playableRegionDuration=u),r&&this._onDurationChange(),n&&this._onProgress()}
,e.prototype._onFragmentLoaded=function(t,e){this.trigger(g["default"].PLAYBACK_FRAGMENT_LOADED,e)}
,e.prototype._onLevelSwitch=function(t,e){this.levels.length||this._fillLevels(),this.trigger(g["default"].PLAYBACK_LEVEL_SWITCH_END),this.trigger(g["default"].PLAYBACK_LEVEL_SWITCH,e);var n=this._hls.levels[e.level];n&&(this.highDefinition=n.height>=720||n.bitrate/1e3>=2e3,this.trigger(g["default"].PLAYBACK_HIGHDEFINITIONUPDATE,this.highDefinition),this.trigger(g["default"].PLAYBACK_BITRATE,{height:n.height,width:n.width,bandwidth:n.bandwidth,bitrate:n.bitrate,level:e.level}
))}
,e.prototype.getPlaybackType=function(){return this._playbackType}
,e.prototype.isSeekEnabled=function(){return this._playbackType===m["default"].VOD||this.dvrEnabled}
,l(e,[{key:"dvrEnabled",get:function(){return this._durationExcludesAfterLiveSyncPoint&&this._duration>=this._minDvrSize&&this.getPlaybackType()===m["default"].LIVE}}
]),e}
(c["default"]);e["default"]=S,S.canPlay=function(t,e){var n=t.split("?")[0].match(/.*\.(.*)$/)||[],r=n.length>1&&"m3u8"===n[1].toLowerCase()||"application/x-mpegURL"===e||"application/vnd.apple.mpegurl"===e;return!(!d["default"].isSupported()||!r||_["default"].isSafari)}
,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(1),u=r(l),c=n(7),f=r(c),d=n(22),h=r(d),p=function(t){function e(){return i(this,e),o(this,t.apply(this,arguments))}
return a(e,t),e.prototype.updateSettings=function(){this.settings.left=["playpause","position","duration"],this.settings.seekEnabled=this.isSeekEnabled(),this.trigger(u["default"].PLAYBACK_SETTINGSUPDATE)}
,e.prototype.getPlaybackType=function(){return f["default"].AOD}
,s(e,[{key:"name",get:function(){return"html5_audio"}}
,{key:"tagName",get:function(){return"audio"}}
]),e}
(h["default"]);e["default"]=p,p.canPlay=function(t,e){var n={wav:["audio/wav"],mp3:["audio/mp3",'audio/mpeg;codecs="mp3"'],aac:['audio/mp4;codecs="mp4a.40.5"'],oga:["audio/ogg"]}
;return h["default"]._canPlay("audio",n,t,e)}
,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
function s(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}
return Array.from(t)}
Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(2),c=n(7),f=r(c),d=n(9),h=r(d),p=n(8),y=r(p),g=n(11),v=r(g),m=n(1),b=r(m),_=n(128),E=r(_),T=n(138),w=r(T),A=n(15),S=r(A),k=n(6),L=r(k),O={mp4:["avc1.42E01E","avc1.58A01E","avc1.4D401E","avc1.64001E","mp4v.20.8","mp4v.20.240","mp4a.40.2"].map(function(t){return'video/mp4;codecs="'+t+',mp4a.40.2"'}
),ogg:['video/ogg;codecs="theora,vorbis"','video/ogg;codecs="dirac"','video/ogg;codecs="theora,speex"'],"3gpp":['video/3gpp;codecs="mp4v.20.8,samr"'],webm:['video/webm;codecs="vp8,vorbis"'],mkv:['video/x-matroska;codecs="theora,vorbis"'],m3u8:["application/x-mpegurl"]}
;O.ogv=O.ogg,O["3gp"]=O["3gpp"];var R={wav:["audio/wav"],mp3:["audio/mp3",'audio/mpeg;codecs="mp3"'],aac:['audio/mp4;codecs="mp4a.40.5"'],oga:["audio/ogg"]}
,C=Object.keys(R).reduce(function(t,e){return[].concat(s(t),s(R[e]))}
,[]),P=function(t){function e(){i(this,e);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var s=o(this,t.call.apply(t,[this].concat(r)));s._loadStarted=!1,s._playheadMoving=!1,s._playheadMovingTimer=null,s._stopped=!1,s._setupSrc(s.options.src),s.options.playback||(s.options.playback=s.options||{}
),s.options.playback.disableContextMenu=s.options.playback.disableContextMenu||s.options.disableVideoTagContextMenu;var l=s.options.playback,u=l.preload||(v["default"].isSafari?"auto":s.options.preload);return L["default"].extend(s.el,{loop:s.options.loop,poster:s.options.poster,preload:u||"metadata",controls:(l.controls||s.options.useVideoTagDefaultControls)&&"controls",crossOrigin:l.crossOrigin,"x-webkit-playsinline":l.playInline}
),s.settings={"default":["seekbar"]}
,s.settings.left=["playpause","position","duration"],s.settings.right=["fullscreen","volume","hd-indicator"],s.options.autoPlay&&s.play(),s}
return a(e,t),l(e,[{key:"name",get:function(){return"html5_video"}}
,{key:"tagName",get:function(){return this.isAudioOnly?"audio":"video"}}
,{key:"template",get:function(){return(0,h["default"])(w["default"])}}
,{key:"isAudioOnly",get:function(){var t=this.options.src,n=e._mimeTypesForUrl(t,R,this.options.mimeType);return this.options.playback&&this.options.playback.audioOnly||this.options.audioOnly||C.indexOf(n[0])>=0}}
,{key:"attributes",get:function(){return{"data-html5-video":""}}}
,{key:"events",get:function(){return{canplay:"_onCanPlay",canplaythrough:"_handleBufferingEvents",durationchange:"_onDurationChange",ended:"_onEnded",error:"_onError",loadeddata:"_onLoadedData",loadedmetadata:"_onLoadedMetadata",pause:"_onPause",playing:"_onPlaying",progress:"_onProgress",seeked:"_handleBufferingEvents",seeking:"_handleBufferingEvents",stalled:"_handleBufferingEvents",timeupdate:"_onTimeUpdate",waiting:"_onWaiting"}}}
,{key:"ended",get:function(){return this.el.ended}}
,{key:"buffering",get:function(){return!!this._bufferingState}}
]),e.prototype._setupSrc=function(t){this._src=t,this.el.src=t}
,e.prototype._onLoadedMetadata=function(t){this._handleBufferingEvents(),this.trigger(b["default"].PLAYBACK_LOADEDMETADATA,{duration:t.target.duration,data:t}
),this._updateSettings();var e="undefined"==typeof this._options.autoSeekFromUrl||this._options.autoSeekFromUrl;this.getPlaybackType()!==f["default"].LIVE&&e&&this._checkInitialSeek()}
,e.prototype._onDurationChange=function(){this._updateSettings(),this._onTimeUpdate(),this._onProgress()}
,e.prototype._updateSettings=function(){this.getPlaybackType()===f["default"].VOD||this.getPlaybackType()===f["default"].AOD?this.settings.left=["playpause","position","duration"]:this.settings.left=["playstop"],this.settings.seekEnabled=this.isSeekEnabled(),this.trigger(b["default"].PLAYBACK_SETTINGSUPDATE)}
,e.prototype.isSeekEnabled=function(){return isFinite(this.getDuration())}
,e.prototype.getPlaybackType=function(){var t="audio"===this.tagName?f["default"].AOD:f["default"].VOD;return[0,void 0,1/0].indexOf(this.el.duration)>=0?f["default"].LIVE:t}
,e.prototype.isHighDefinitionInUse=function(){return!1}
,e.prototype.play=function(){this.trigger(b["default"].PLAYBACK_PLAY_INTENT),this._stopped=!1,this._handleBufferingEvents(),this.el.play()}
,e.prototype.pause=function(){this.el.pause()}
,e.prototype.stop=function(){this.pause(),this._stopped=!0,this.el.currentTime=0,this._stopPlayheadMovingChecks(),this._handleBufferingEvents(),this.trigger(b["default"].PLAYBACK_STOP)}
,e.prototype.volume=function(t){this.el.volume=t/100}
,e.prototype.mute=function(){this.el.volume=0}
,e.prototype.unmute=function(){this.el.volume=1}
,e.prototype.isMuted=function(){return!!this.el.volume}
,e.prototype.isPlaying=function(){return!this.el.paused&&!this.el.ended}
,e.prototype._startPlayheadMovingChecks=function(){null===this._playheadMovingTimer&&(this._playheadMovingTimeOnCheck=null,this._determineIfPlayheadMoving(),this._playheadMovingTimer=setInterval(this._determineIfPlayheadMoving.bind(this),500))}
,e.prototype._stopPlayheadMovingChecks=function(){null!==this._playheadMovingTimer&&(clearInterval(this._playheadMovingTimer),this._playheadMovingTimer=null,this._playheadMoving=!1)}
,e.prototype._determineIfPlayheadMoving=function(){var t=this._playheadMovingTimeOnCheck,e=this.el.currentTime;this._playheadMoving=t!==e,this._playheadMovingTimeOnCheck=e,this._handleBufferingEvents()}
,e.prototype._onWaiting=function(){this._loadStarted=!0,this._handleBufferingEvents()}
,e.prototype._onLoadedData=function(){this._loadStarted=!0,this._handleBufferingEvents()}
,e.prototype._onCanPlay=function(){this._handleBufferingEvents()}
,e.prototype._onPlaying=function(){this._startPlayheadMovingChecks(),this._handleBufferingEvents(),this.trigger(b["default"].PLAYBACK_PLAY)}
,e.prototype._onPause=function(){this._stopPlayheadMovingChecks(),this._handleBufferingEvents(),this.trigger(b["default"].PLAYBACK_PAUSE)}
,e.prototype._onEnded=function(){this._handleBufferingEvents(),this.trigger(b["default"].PLAYBACK_ENDED,this.name)}
,e.prototype._handleBufferingEvents=function(){var t=!this.el.ended&&!this.el.paused,e=this._loadStarted&&!this.el.ended&&!this._stopped&&(t&&!this._playheadMoving||this.el.readyState<this.el.HAVE_FUTURE_DATA);this._bufferingState!==e&&(this._bufferingState=e,e?this.trigger(b["default"].PLAYBACK_BUFFERING,this.name):this.trigger(b["default"].PLAYBACK_BUFFERFULL,this.name))}
,e.prototype._onError=function(){this.trigger(b["default"].PLAYBACK_ERROR,this.el.error,this.name)}
,e.prototype.destroy=function(){this.$el.remove(),this.el.src="",this._src=null}
,e.prototype.seek=function(t){this.el.currentTime=t}
,e.prototype.seekPercentage=function(t){var e=this.el.duration*(t/100);this.seek(e)}
,e.prototype._checkInitialSeek=function(){var t=(0,u.seekStringToSeconds)(window.location.href);0!==t&&this.seek(t)}
,e.prototype.getCurrentTime=function(){return this.el.currentTime}
,e.prototype.getDuration=function(){return this.el.duration}
,e.prototype._onTimeUpdate=function(){this._handleBufferingEvents(),this.getPlaybackType()===f["default"].LIVE?this.trigger(b["default"].PLAYBACK_TIMEUPDATE,{current:1,total:1}
,this.name):this.trigger(b["default"].PLAYBACK_TIMEUPDATE,{current:this.el.currentTime,total:this.el.duration}
,this.name)}
,e.prototype._onProgress=function(){if(this.el.buffered.length){for(var t=[],e=0,n=0;n<this.el.buffered.length;n++)t=[].concat(s(t),[{start:this.el.buffered.start(n),end:this.el.buffered.end(n)}
]),this.el.currentTime>=t[n].start&&this.el.currentTime<=t[n].end&&(e=n);var r={start:t[e].start,current:t[e].end,total:this.el.duration}
;this.trigger(b["default"].PLAYBACK_PROGRESS,r,t)}}
,e.prototype._typeFor=function(t){var e=t.split("?")[0].match(/.*\.(.*)$/)||[],n=e.length>1&&"m3u8"===e[1];return n?"application/vnd.apple.mpegurl":"video/mp4"}
,e.prototype._ready=function(){this._isReadyState||(this._isReadyState=!0,this.trigger(b["default"].PLAYBACK_READY,this.name))}
,e.prototype.render=function(){var t=y["default"].getStyleFor(E["default"]);return this._src&&this.$el.html(this.template({src:this._src,type:this._typeFor(this._src)}
)),this.options.playback.disableContextMenu&&this.$el.on("contextmenu",function(){return!1}
),this.$el.append(t),this._ready(),this}
,l(e,[{key:"isReady",get:function(){return this._isReadyState}}
]),e}
(f["default"]);e["default"]=P,P._mimeTypesForUrl=function(t,e,n){var r=(t.split("?")[0].match(/.*\.(.*)$/)||[])[1],i=n||r&&e[r.toLowerCase()]||[];return i.constructor===Array?i:[i]}
,P._canPlay=function(t,e,n,r){var i=P._mimeTypesForUrl(n,e,r),o=document.createElement(t);return!!(0,S["default"])(i,function(t){return!!o.canPlayType(t).replace(/no/,"")}
)}
,P.canPlay=function(t,e){return P._canPlay("audio",R,t,e)||P._canPlay("video",O,t,e)}
,t.exports=P,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(7),u=r(l),c=n(8),f=r(c),d=n(129),h=r(d),p=n(1),y=r(p),g=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.el.src=n.src,r}
return a(e,t),e.prototype.getPlaybackType=function(){return u["default"].NO_OP}
,s(e,[{key:"name",get:function(){return"html_img"}}
,{key:"tagName",get:function(){return"img"}}
,{key:"attributes",get:function(){return{"data-html-img":""}}}
,{key:"events",get:function(){return{load:"_onLoad",abort:"_onError",error:"_onError"}}}
]),e.prototype.render=function(){var t=f["default"].getStyleFor(h["default"]);return this.$el.append(t),this.trigger(y["default"].PLAYBACK_READY,this.name),this}
,e.prototype._onLoad=function(){this.trigger(y["default"].PLAYBACK_ENDED,this.name)}
,e.prototype._onError=function(t){var e="error"===t.type?"load error":"loading aborted";this.trigger(y["default"].PLAYBACK_ERROR,{message:e}
,this.name)}
,e}
(u["default"]);e["default"]=g,g.canPlay=function(t){return/\.(png|jpg|jpeg|gif|bmp|tiff|pgm|pnm|webp)(|\?.*)$/i.test(t)}
,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(2),u=n(7),c=r(u),f=n(9),d=r(f),h=n(8),p=r(h),y=n(1),g=r(y),v=n(130),m=r(v),b=n(139),_=r(b),E=function(t){function e(){i(this,e);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var s=o(this,t.call.apply(t,[this].concat(r)));return s._noiseFrameNum=-1,s}
return a(e,t),s(e,[{key:"name",get:function(){return"no_op"}}
,{key:"template",get:function(){return(0,d["default"])(_["default"])}}
,{key:"attributes",get:function(){return{"data-no-op":""}}}
]),e.prototype.render=function(){var t=p["default"].getStyleFor(m["default"]),e=this.options.playbackNotSupportedMessage||this.i18n.t("playback_not_supported");return this.$el.html(this.template({message:e}
)),this.$el.append(t),this._animate(),this.trigger(g["default"].PLAYBACK_READY,this.name),this}
,e.prototype._noise=function(){if(this._noiseFrameNum=(this._noiseFrameNum+1)%5,!this._noiseFrameNum){var t=this.context.createImageData(this.context.canvas.width,this.context.canvas.height),e=void 0;try{e=new Uint32Array(t.data.buffer)}
catch(n){e=new Uint32Array(this.context.canvas.width*this.context.canvas.height*4);for(var r=t.data,i=0;i<r.length;i++)e[i]=r[i]}
for(var o=e.length,a=6*Math.random()+4,s=0,l=0,u=0;u<o;){if(s<0){s=a*Math.random();var c=Math.pow(Math.random(),.4);l=255*c<<24}
s-=1,e[u++]=l}
this.context.putImageData(t,0,0)}}
,e.prototype._loop=function(){var t=this;this._stop||(this._noise(),this._animationHandle=(0,l.requestAnimationFrame)(function(){return t._loop()}
))}
,e.prototype.destroy=function(){this._animationHandle&&((0,l.cancelAnimationFrame)(this._animationHandle),this._stop=!0)}
,e.prototype._animate=function(){this.canvas=this.$el.find("canvas[data-no-op-canvas]")[0],this.context=this.canvas.getContext("2d"),this._loop()}
,e}
(c["default"]);e["default"]=E,E.canPlay=function(t){return!0}
,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(19),u=r(l),c=n(1),f=r(c),d=n(7),h=r(d),p=function(t){function e(n){return i(this,e),o(this,t.call(this,n))}
return a(e,t),s(e,[{key:"name",get:function(){return"click_to_pause"}}
]),e.prototype.bindEvents=function(){this.listenTo(this.container,f["default"].CONTAINER_CLICK,this.click),this.listenTo(this.container,f["default"].CONTAINER_SETTINGSUPDATE,this.settingsUpdate)}
,e.prototype.click=function(){(this.container.getPlaybackType()!==h["default"].LIVE||this.container.isDvrEnabled())&&(this.container.isPlaying()?this.container.pause():this.container.play())}
,e.prototype.settingsUpdate=function(){this.container.$el.removeClass("pointer-enabled"),(this.container.getPlaybackType()!==h["default"].LIVE||this.container.isDvrEnabled())&&this.container.$el.addClass("pointer-enabled")}
,e}
(u["default"]);e["default"]=p,t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(102)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(23),u=r(l),c=n(9),f=r(c),d=n(7),h=r(d),p=n(8),y=r(p),g=n(1),v=r(g),m=n(131),b=r(m),_=n(140),E=r(_),T=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.settingsUpdate(),r}
return a(e,t),s(e,[{key:"template",get:function(){return(0,f["default"])(E["default"])}}
,{key:"name",get:function(){return"dvr_controls"}}
,{key:"events",get:function(){return{"click .live-button":"click"}}}
,{key:"attributes",get:function(){return{"class":"dvr-controls","data-dvr-controls":""}}}
]),e.prototype.bindEvents=function(){this.listenTo(this.core.mediaControl,v["default"].MEDIACONTROL_CONTAINERCHANGED,this.containerChanged),this.listenTo(this.core.mediaControl,v["default"].MEDIACONTROL_RENDERED,this.settingsUpdate),this.listenTo(this.core,v["default"].CORE_OPTIONS_CHANGE,this.render),this.core.getCurrentContainer()&&(this.listenToOnce(this.core.getCurrentContainer(),v["default"].CONTAINER_TIMEUPDATE,this.render),this.listenTo(this.core.getCurrentContainer(),v["default"].CONTAINER_PLAYBACKDVRSTATECHANGED,this.dvrChanged))}
,e.prototype.containerChanged=function(){this.stopListening(),this.bindEvents()}
,e.prototype.dvrChanged=function(t){this.settingsUpdate(),this.core.mediaControl.$el.addClass("live"),t?(this.core.mediaControl.$el.addClass("dvr"),this.core.mediaControl.$el.find(".media-control-indicator[data-position],.media-control-indicator[data-duration]").hide()):this.core.mediaControl.$el.removeClass("dvr")}
,e.prototype.click=function(){var t=this.core.mediaControl,e=t.container;e.isPlaying()||e.play(),t.$el.hasClass("dvr")&&e.seek(e.getDuration())}
,e.prototype.settingsUpdate=function(){var t=this;this.stopListening(),this.shouldRender()&&(this.render(),this.$el.click(function(){return t.click()}
)),this.bindEvents()}
,e.prototype.shouldRender=function(){var t=void 0===this.core.options.useDvrControls||!!this.core.options.useDvrControls;return t&&this.core.getPlaybackType()===h["default"].LIVE}
,e.prototype.render=function(){return this.style=this.style||y["default"].getStyleFor(b["default"],{baseUrl:this.core.options.baseUrl}
),this.$el.html(this.template({live:this.core.i18n.t("live"),backToLive:this.core.i18n.t("back_to_live")}
)),this.$el.append(this.style),this.shouldRender()&&(this.core.mediaControl.$el.addClass("live"),this.core.mediaControl.$(".media-control-left-panel[data-media-control]").append(this.$el)),this}
,e}
(u["default"]);e["default"]=T,t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(104)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(1),u=r(l),c=n(17),f=r(c),d=n(2),h=function(t){function e(){return i(this,e),o(this,t.apply(this,arguments))}
return a(e,t),e.prototype.bindEvents=function(){this.listenTo(this.core.mediaControl,u["default"].MEDIACONTROL_CONTAINERCHANGED,this.containerChanged);var t=this.core.getCurrentContainer();t&&(this.listenTo(t,u["default"].CONTAINER_ENDED,this.ended),this.listenTo(t,u["default"].CONTAINER_STOP,this.ended))}
,e.prototype.containerChanged=function(){this.stopListening(),this.bindEvents()}
,e.prototype.ended=function(){var t="undefined"==typeof this.core.options.exitFullscreenOnEnd||this.core.options.exitFullscreenOnEnd;t&&d.Fullscreen.isFullscreen()&&this.core.toggleFullscreen()}
,s(e,[{key:"name",get:function(){return"end_video"}}
]),e}
(f["default"]);e["default"]=h,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(17),u=r(l),c=n(1),f=r(c),d=n(6),h=r(d),p=n(27),y=r(p),g=n(44),v=r(g),m=(0,h["default"])('link[rel="shortcut icon"]'),b=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.configure(),r}
return a(e,t),s(e,[{key:"name",get:function(){return"favicon"}}
,{key:"oldIcon",get:function(){return m}}
]),e.prototype.configure=function(){this.core.options.changeFavicon?this.enabled||(this.stopListening(this.core,f["default"].CORE_OPTIONS_CHANGE),this.enable()):this.enabled&&(this.disable(),this.listenTo(this.core,f["default"].CORE_OPTIONS_CHANGE,this.configure))}
,e.prototype.bindEvents=function(){this.listenTo(this.core,f["default"].CORE_OPTIONS_CHANGE,this.configure),this.listenTo(this.core.mediaControl,f["default"].MEDIACONTROL_CONTAINERCHANGED,this.containerChanged),this.core.mediaControl.container&&this.containerChanged()}
,e.prototype.containerChanged=function(){this.stopListening(this.core.mediaControl.container),this.listenTo(this.core.mediaControl.container,f["default"].CONTAINER_PLAY,this.setPlayIcon),this.listenTo(this.core.mediaControl.container,f["default"].CONTAINER_PAUSE,this.setPauseIcon),this.listenTo(this.core.mediaControl.container,f["default"].CONTAINER_STOP,this.resetIcon),this.listenTo(this.core.mediaControl.container,f["default"].CONTAINER_ENDED,this.resetIcon),this.listenTo(this.core.mediaControl.container,f["default"].CONTAINER_ERROR,this.resetIcon),this.resetIcon()}
,e.prototype.disable=function(){t.prototype.disable.call(this),this.resetIcon()}
,e.prototype.destroy=function(){t.prototype.destroy.call(this),this.resetIcon()}
,e.prototype.createIcon=function(t){var e=(0,h["default"])("<canvas/>");e[0].width=16,e[0].height=16;var n=e[0].getContext("2d");n.fillStyle="#000";var r=(0,h["default"])(t).find("path").attr("d"),i=new Path2D(r);n.fill(i);var o=(0,h["default"])('<link rel="shortcut icon" type="image/png"/>');return o.attr("href",e[0].toDataURL("image/png")),o}
,e.prototype.setPlayIcon=function(){this.playIcon||(this.playIcon=this.createIcon(y["default"])),this.changeIcon(this.playIcon)}
,e.prototype.setPauseIcon=function(){this.pauseIcon||(this.pauseIcon=this.createIcon(v["default"])),this.changeIcon(this.pauseIcon)}
,e.prototype.resetIcon=function(){(0,h["default"])('link[rel="shortcut icon"]').remove(),(0,h["default"])("head").append(this.oldIcon)}
,e.prototype.changeIcon=function(t){t&&((0,h["default"])('link[rel="shortcut icon"]').remove(),(0,h["default"])("head").append(t))}
,e}
(u["default"]);e["default"]=b,t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(107)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(19),u=r(l),c=n(1),f=r(c),d=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.container.options.gaAccount&&(r.account=r.container.options.gaAccount,r.trackerName=r.container.options.gaTrackerName?r.container.options.gaTrackerName+".":"Clappr.",r.domainName=r.container.options.gaDomainName,r.currentHDState=void 0,r.embedScript()),r}
return a(e,t),s(e,[{key:"name",get:function(){return"google_analytics"}}
]),e.prototype.embedScript=function(){var t=this;if(window._gat)this.addEventListeners();else{var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("async","async"),e.setAttribute("src","//www.google-analytics.com/ga.js"),e.onload=function(){return t.addEventListeners()}
,document.body.appendChild(e)}}
,e.prototype.addEventListeners=function(){var t=this;this.container&&(this.listenTo(this.container,f["default"].CONTAINER_READY,this.onReady),this.listenTo(this.container,f["default"].CONTAINER_PLAY,this.onPlay),this.listenTo(this.container,f["default"].CONTAINER_STOP,this.onStop),this.listenTo(this.container,f["default"].CONTAINER_PAUSE,this.onPause),this.listenTo(this.container,f["default"].CONTAINER_ENDED,this.onEnded),this.listenTo(this.container,f["default"].CONTAINER_STATE_BUFFERING,this.onBuffering),this.listenTo(this.container,f["default"].CONTAINER_STATE_BUFFERFULL,this.onBufferFull),this.listenTo(this.container,f["default"].CONTAINER_ERROR,this.onError),this.listenTo(this.container,f["default"].CONTAINER_PLAYBACKSTATE,this.onPlaybackChanged),this.listenTo(this.container,f["default"].CONTAINER_VOLUME,function(e){return t.onVolumeChanged(e)}
),this.listenTo(this.container,f["default"].CONTAINER_SEEK,function(e){return t.onSeek(e)}
),this.listenTo(this.container,f["default"].CONTAINER_FULL_SCREEN,this.onFullscreen),this.listenTo(this.container,f["default"].CONTAINER_HIGHDEFINITIONUPDATE,this.onHD),this.listenTo(this.container,f["default"].CONTAINER_PLAYBACKDVRSTATECHANGED,this.onDVR)),_gaq.push([this.trackerName+"_setAccount",this.account]),this.domainName&&_gaq.push([this.trackerName+"_setDomainName",this.domainName])}
,e.prototype.onReady=function(){this.push(["Video","Playback",this.container.playback.name])}
,e.prototype.onPlay=function(){this.push(["Video","Play",this.container.playback.src])}
,e.prototype.onStop=function(){this.push(["Video","Stop",this.container.playback.src])}
,e.prototype.onEnded=function(){this.push(["Video","Ended",this.container.playback.src])}
,e.prototype.onBuffering=function(){this.push(["Video","Buffering",this.container.playback.src])}
,e.prototype.onBufferFull=function(){this.push(["Video","Bufferfull",this.container.playback.src])}
,e.prototype.onError=function(){this.push(["Video","Error",this.container.playback.src])}
,e.prototype.onHD=function(t){var e=t?"ON":"OFF";e!==this.currentHDState&&(this.currentHDState=e,this.push(["Video","HD - "+e,this.container.playback.src]))}
,e.prototype.onPlaybackChanged=function(t){null!==t.type&&this.push(["Video","Playback Type - "+t.type,this.container.playback.src])}
,e.prototype.onDVR=function(t){var e=t?"ON":"OFF";this.push(["Interaction","DVR - "+e,this.container.playback.src])}
,e.prototype.onPause=function(){this.push(["Video","Pause",this.container.playback.src])}
,e.prototype.onSeek=function(){this.push(["Video","Seek",this.container.playback.src])}
,e.prototype.onVolumeChanged=function(){this.push(["Interaction","Volume",this.container.playback.src])}
,e.prototype.onFullscreen=function(){this.push(["Interaction","Fullscreen",this.container.playback.src])}
,e.prototype.push=function(t){var e=[this.trackerName+"_trackEvent"].concat(t);_gaq.push(e)}
,e}
(u["default"]);e["default"]=d,t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(109)}
,function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0}
);var i=n(26),o="font-weight:bold;font-size:13px;",a="color:#006600;"+o,s="color:#0000ff;"+o,l="color:#ff8000;"+o,u="color:#ff0000;"+o,c=0,f=1,d=2,h=3,p=h,y=[s,a,l,u,u],g=["debug","info","warn","error","disabled"],v=function(){function t(){var e=this,n=arguments.length<=0||void 0===arguments[0]?f:arguments[0],o=arguments.length<=1||void 0===arguments[1]?p:arguments[1];r(this,t),this.kibo=new i.Kibo,this.kibo.down(["ctrl shift d"],function(){return e.onOff()}
),this.BLACKLIST=["timeupdate","playback:timeupdate","playback:progress","container:hover","container:timeupdate","container:progress"],this.level=n,this.offLevel=o}
return t.prototype.debug=function(t){this.log(t,c,Array.prototype.slice.call(arguments,1))}
,t.prototype.info=function(t){this.log(t,f,Array.prototype.slice.call(arguments,1))}
,t.prototype.warn=function(t){this.log(t,d,Array.prototype.slice.call(arguments,1))}
,t.prototype.error=function(t){this.log(t,h,Array.prototype.slice.call(arguments,1))}
,t.prototype.onOff=function(){this.level===this.offLevel?this.level=this.previousLevel:(this.previousLevel=this.level,this.level=this.offLevel),window.console&&window.console.log&&window.console.log("%c[Clappr.Log] set log level to "+g[this.level],l)}
,t.prototype.level=function(t){this.level=t}
,t.prototype.log=function(t,e,n){if(!(this.BLACKLIST.indexOf(n[0])>=0||e<this.level)){n||(n=t,t=null);var r=y[e],i="";t&&(i="["+t+"]"),window.console&&window.console.log&&window.console.log.apply(console,["%c["+g[e]+"]"+i,r].concat(n))}}
,t}
();e["default"]=v,v.LEVEL_DEBUG=c,v.LEVEL_INFO=f,v.LEVEL_WARN=d,v.LEVEL_ERROR=h,v.getInstance=function(){return void 0===this._instance&&(this._instance=new this,this._instance.previousLevel=this._instance.level,this._instance.level=this._instance.offLevel),this._instance}
,v.setLevel=function(t){this.getInstance().level=t}
,v.debug=function(){this.getInstance().debug.apply(this.getInstance(),arguments)}
,v.info=function(){this.getInstance().info.apply(this.getInstance(),arguments)}
,v.warn=function(){this.getInstance().warn.apply(this.getInstance(),arguments)}
,v.error=function(){this.getInstance().error.apply(this.getInstance(),arguments)}
,t.exports=e["default"]}
,function(t,e,n){(function(r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),u=n(20),c=i(u),f=n(1),d=i(f),h=n(8),p=i(h),y=n(9),g=i(y),v=n(132),m=i(v),b=n(141),_=i(b),E=n(27),T=i(E),w=function(t){function e(n){o(this,e);var i=a(this,t.call(this,n));return i.hasStartedPlaying=!1,i.playRequested=!1,i.render(),r.nextTick(function(){return i.update()}
),i}
return s(e,t),l(e,[{key:"name",get:function(){return"poster"}}
,{key:"template",get:function(){return(0,g["default"])(_["default"])}}
,{key:"shouldRender",get:function(){return"html_img"!==this.container.playback.name}}
,{key:"attributes",get:function(){return{"class":"player-poster","data-poster":""}}}
,{key:"events",get:function(){return{click:"clicked"}}}
,{key:"showOnVideoEnd",get:function(){return!this.options.poster||this.options.poster.showOnVideoEnd||void 0===this.options.poster.showOnVideoEnd}}
]),e.prototype.bindEvents=function(){this.listenTo(this.container,d["default"].CONTAINER_STOP,this.onStop),this.listenTo(this.container,d["default"].CONTAINER_PLAY,this.onPlay),this.listenTo(this.container,d["default"].CONTAINER_STATE_BUFFERING,this.update),this.listenTo(this.container,d["default"].CONTAINER_STATE_BUFFERFULL,this.update),this.listenTo(this.container,d["default"].CONTAINER_OPTIONS_CHANGE,this.render),this.showOnVideoEnd&&this.listenTo(this.container,d["default"].CONTAINER_ENDED,this.onStop)}
,e.prototype.stopListening=function(){t.prototype.stopListening.call(this)}
,e.prototype.onPlay=function(){this.hasStartedPlaying=!0,this.update()}
,e.prototype.onStop=function(){this.hasStartedPlaying=!1,this.playRequested=!1,this.update()}
,e.prototype.showPlayButton=function(t){!t||this.options.chromeless&&!this.options.allowUserInteraction?(this.$playButton.hide(),this.$el.removeClass("clickable")):(this.$playButton.show(),this.$el.addClass("clickable"))}
,e.prototype.clicked=function(){return this.options.chromeless&&!this.options.allowUserInteraction||(this.playRequested=!0,this.update(),this.container.play()),!1}
,e.prototype.shouldHideOnPlay=function(){return!("html5_audio"==this.container.playback.name||this.container.playback.isAudioOnly)}
,e.prototype.update=function(){if(this.shouldRender){var t=!this.playRequested&&!this.hasStartedPlaying&&!this.container.buffering;this.showPlayButton(t),this.hasStartedPlaying?(this.container.enableMediaControl(),this.shouldHideOnPlay()&&this.$el.hide()):(this.container.disableMediaControl(),this.$el.show())}}
,e.prototype.render=function(){if(this.shouldRender){var t=p["default"].getStyleFor(m["default"],{baseUrl:this.options.baseUrl}
);if(this.$el.html(this.template()),this.$el.append(t),this.options.poster){var e=this.options.poster.url||this.options.poster;this.$el.css({"background-image":"url("+e+")"}
)}
this.container.$el.append(this.el),this.$playWrapper=this.$el.find(".play-wrapper"),this.$playWrapper.append(T["default"]),this.$playButton=this.$playWrapper.find("svg"),this.$playButton.addClass("poster-icon"),this.$playButton.attr("data-poster","");var n=this.options.mediacontrol&&this.options.mediacontrol.buttons;return n&&this.$el.find("svg path").css("fill",n),this.options.mediacontrol&&this.options.mediacontrol.buttons&&(n=this.options.mediacontrol.buttons,this.$playButton.css("color",n)),this.update(),this}}
,e}
(c["default"]);e["default"]=w,t.exports=e["default"]}
).call(e,n(32))}
,function(t,e,n){"use strict";t.exports=n(114)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(2),u=n(23),c=r(u),f=n(8),d=r(f),h=n(9),p=r(h),y=n(1),g=r(y),v=n(7),m=r(v),b=n(133),_=r(b),E=n(142),T=r(E),w=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.hoveringOverSeekBar=!1,r.hoverPosition=null,r.duration=null,r.actualLiveTime=!!r.mediaControl.options.actualLiveTime,r.actualLiveTime&&(r.mediaControl.options.actualLiveServerTime?r.actualLiveServerTimeDiff=(new Date).getTime()-new Date(r.mediaControl.options.actualLiveServerTime).getTime():r.actualLiveServerTimeDiff=0),r}
return a(e,t),s(e,[{key:"name",get:function(){return"seek_time"}}
,{key:"template",get:function(){return(0,p["default"])(T["default"])}}
,{key:"attributes",get:function(){return{"class":"seek-time","data-seek-time":""}}}
,{key:"mediaControl",get:function(){return this.core.mediaControl}}
,{key:"mediaControlContainer",get:function(){return this.mediaControl.container}}
,{key:"isLiveStreamWithDvr",get:function(){return this.mediaControlContainer&&this.mediaControlContainer.getPlaybackType()===m["default"].LIVE&&this.mediaControlContainer.isDvrEnabled()}}
,{key:"durationShown",get:function(){return this.isLiveStreamWithDvr&&!this.useActualLiveTime}}
,{key:"useActualLiveTime",get:function(){return this.actualLiveTime&&this.isLiveStreamWithDvr}}
]),e.prototype.bindEvents=function(){this.listenTo(this.mediaControl,g["default"].MEDIACONTROL_RENDERED,this.render),this.listenTo(this.mediaControl,g["default"].MEDIACONTROL_MOUSEMOVE_SEEKBAR,this.showTime),this.listenTo(this.mediaControl,g["default"].MEDIACONTROL_MOUSELEAVE_SEEKBAR,this.hideTime),this.listenTo(this.mediaControl,g["default"].MEDIACONTROL_CONTAINERCHANGED,this.onContainerChanged),this.mediaControlContainer&&(this.listenTo(this.mediaControlContainer,g["default"].CONTAINER_PLAYBACKDVRSTATECHANGED,this.update),this.listenTo(this.mediaControlContainer,g["default"].CONTAINER_TIMEUPDATE,this.updateDuration))}
,e.prototype.onContainerChanged=function(){this.stopListening(),this.bindEvents()}
,e.prototype.updateDuration=function(t){this.duration=t.total,this.update()}
,e.prototype.showTime=function(t){this.hoveringOverSeekBar=!0,this.calculateHoverPosition(t),this.update()}
,e.prototype.hideTime=function(){this.hoveringOverSeekBar=!1,this.update()}
,e.prototype.calculateHoverPosition=function(t){var e=t.pageX-this.mediaControl.$seekBarContainer.offset().left;this.hoverPosition=Math.min(1,Math.max(e/this.mediaControl.$seekBarContainer.width(),0))}
,e.prototype.getSeekTime=function(){var t=void 0,e=void 0;if(this.useActualLiveTime){var n=new Date((new Date).getTime()-this.actualLiveServerTimeDiff),r=new Date(n);e=(r-n.setHours(0,0,0,0))/1e3,t=e-this.duration+this.hoverPosition*this.duration,t<0&&(t+=86400)}
else t=this.hoverPosition*this.duration;return{seekTime:t,secondsSinceMidnight:e}}
,e.prototype.update=function(){if(this.rendered)if(this.shouldBeVisible()){var t=this.getSeekTime(),e=(0,l.formatTime)(t.seekTime,this.useActualLiveTime);if(e!==this.displayedSeekTime&&(this.$seekTimeEl.text(e),this.displayedSeekTime=e),this.durationShown){this.$durationEl.show();var n=(0,l.formatTime)(this.actualLiveTime?t.secondsSinceMidnight:this.duration,this.actualLiveTime);n!==this.displayedDuration&&(this.$durationEl.text(n),this.displayedDuration=n)}
else this.$durationEl.hide();this.$el.show();var r=this.mediaControl.$seekBarContainer.width(),i=this.$el.width(),o=this.hoverPosition*r;o-=i/2,o=Math.max(0,Math.min(o,r-i)),this.$el.css("left",o)}
else this.$el.hide(),this.$el.css("left","-100%")}
,e.prototype.shouldBeVisible=function(){return this.mediaControlContainer&&this.mediaControlContainer.settings.seekEnabled&&this.hoveringOverSeekBar&&null!==this.hoverPosition&&null!==this.duration}
,e.prototype.render=function(){this.rendered=!0,this.displayedDuration=null,this.displayedSeekTime=null;var t=d["default"].getStyleFor(_["default"]);this.$el.html(this.template()),this.$el.append(t),this.$el.hide(),this.mediaControl.$el.append(this.el),this.$seekTimeEl=this.$el.find("[data-seek-time]"),this.$durationEl=this.$el.find("[data-duration]"),this.$durationEl.hide(),this.update()}
,e}
(c["default"]);e["default"]=w,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(17),u=r(l),c=n(1),f=r(c),d=n(15),h=r(d),p=function(t){function e(){return i(this,e),o(this,t.apply(this,arguments))}
return a(e,t),e.prototype.bindEvents=function(){this.listenTo(this.core,f["default"].CORE_CONTAINERS_CREATED,this.onContainersCreated)}
,e.prototype.onContainersCreated=function(){var t=(0,h["default"])(this.core.containers,function(t){return"no_op"!==t.playback.name}
)||this.core.containers[0];t&&this.core.containers.forEach(function(e){e!==t&&e.destroy()}
)}
,s(e,[{key:"name",get:function(){return"sources"}}
]),e}
(u["default"]);e["default"]=p,t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(117)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(20),u=r(l),c=n(1),f=r(c),d=n(8),h=r(d),p=n(9),y=r(p),g=n(143),v=r(g),m=n(134),b=r(m),_=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.template=(0,y["default"])(v["default"]),r.showTimeout=null,r.listenTo(r.container,f["default"].CONTAINER_STATE_BUFFERING,r.onBuffering),r.listenTo(r.container,f["default"].CONTAINER_STATE_BUFFERFULL,r.onBufferFull),r.listenTo(r.container,f["default"].CONTAINER_STOP,r.onStop),r.listenTo(r.container,f["default"].CONTAINER_ENDED,r.onStop),r.listenTo(r.container,f["default"].CONTAINER_ERROR,r.onStop),r.render(),r}
return a(e,t),s(e,[{key:"name",get:function(){return"spinner"}}
,{key:"attributes",get:function(){return{"data-spinner":"","class":"spinner-three-bounce"}}}
]),e.prototype.onBuffering=function(){this.show()}
,e.prototype.onBufferFull=function(){this.hide()}
,e.prototype.onStop=function(){this.hide()}
,e.prototype.show=function(){var t=this;null===this.showTimeout&&(this.showTimeout=setTimeout(function(){return t.$el.show()}
,300))}
,e.prototype.hide=function(){null!==this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null),this.$el.hide()}
,e.prototype.render=function(){this.$el.html(this.template());var t=h["default"].getStyleFor(b["default"]);return this.container.$el.append(t),this.container.$el.append(this.$el),this.$el.hide(),this.container.buffering&&this.onBuffering(),this}
,e}
(u["default"]);e["default"]=_,t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(119)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(19),u=r(l),c=n(1),f=r(c),d=n(6),h=r(d),p=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.setInitialAttrs(),r.reportInterval=r.options.reportInterval||5e3,r.state="IDLE",r}
return a(e,t),s(e,[{key:"name",get:function(){return"stats"}}
]),e.prototype.bindEvents=function(){this.listenTo(this.container.playback,f["default"].PLAYBACK_PLAY,this.onPlay),this.listenTo(this.container,f["default"].CONTAINER_STOP,this.onStop),this.listenTo(this.container,f["default"].CONTAINER_ENDED,this.onStop),this.listenTo(this.container,f["default"].CONTAINER_DESTROYED,this.onStop),this.listenTo(this.container,f["default"].CONTAINER_STATE_BUFFERING,this.onBuffering),this.listenTo(this.container,f["default"].CONTAINER_STATE_BUFFERFULL,this.onBufferFull),this.listenTo(this.container,f["default"].CONTAINER_STATS_ADD,this.onStatsAdd),this.listenTo(this.container,f["default"].CONTAINER_BITRATE,this.onStatsAdd),this.listenTo(this.container.playback,f["default"].PLAYBACK_STATS_ADD,this.onStatsAdd)}
,e.prototype.setInitialAttrs=function(){this.firstPlay=!0,this.startupTime=0,this.rebufferingTime=0,this.watchingTime=0,this.rebuffers=0,this.externalMetrics={}}
,e.prototype.onPlay=function(){this.state="PLAYING",this.watchingTimeInit=Date.now(),this.intervalId||(this.intervalId=setInterval(this.report.bind(this),this.reportInterval))}
,e.prototype.onStop=function(){clearInterval(this.intervalId),this.report(),this.intervalId=void 0,this.state="STOPPED"}
,e.prototype.onBuffering=function(){this.firstPlay?this.startupTimeInit=Date.now():this.rebufferingTimeInit=Date.now(),this.state="BUFFERING",this.rebuffers++}
,e.prototype.onBufferFull=function(){this.firstPlay&&this.startupTimeInit?(this.firstPlay=!1,this.startupTime=Date.now()-this.startupTimeInit,this.watchingTimeInit=Date.now()):this.rebufferingTimeInit&&(this.rebufferingTime+=this.getRebufferingTime()),this.rebufferingTimeInit=void 0,this.state="PLAYING"}
,e.prototype.getRebufferingTime=function(){return Date.now()-this.rebufferingTimeInit}
,e.prototype.getWatchingTime=function(){var t=Date.now()-this.watchingTimeInit;return t-this.rebufferingTime}
,e.prototype.isRebuffering=function(){return!!this.rebufferingTimeInit}
,e.prototype.onStatsAdd=function(t){h["default"].extend(this.externalMetrics,t)}
,e.prototype.getStats=function(){var t={startupTime:this.startupTime,rebuffers:this.rebuffers,rebufferingTime:this.isRebuffering()?this.rebufferingTime+this.getRebufferingTime():this.rebufferingTime,watchingTime:this.isRebuffering()?this.getWatchingTime()-this.getRebufferingTime():this.getWatchingTime()}
;return h["default"].extend(t,this.externalMetrics),t}
,e.prototype.report=function(){this.container.statsReport(this.getStats())}
,e}
(u["default"]);e["default"]=p,t.exports=e["default"]}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(2),u=n(17),c=r(u),f=n(79),d=r(f),h=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r._initializeMessages(),r}
return a(e,t),s(e,[{key:"name",get:function(){return"strings"}}
]),e.prototype.t=function(t){var e=this._language(),n=e&&this._messages[e]||this._messages.en;return n[t]||t}
,e.prototype._language=function(){return this.core.options.language||(0,l.getBrowserLanguage)()}
,e.prototype._initializeMessages=function(){this._messages=(0,d["default"])({en:{live:"live",back_to_live:"back to live",playback_not_supported:"Your browser does not support the playback of this video. Please try using a different browser."}
,pt:{live:"ao vivo",back_to_live:"voltar para o ao vivo",playback_not_supported:"Seu navegador nÃ£o supporta a reproduÃ§Ã£o deste video. Por favor,tente usar um navegador diferente."}
,es:{live:"vivo",back_to_live:"volver en vivo",playback_not_supported:"Su navegador no soporta la reproducciÃ³n de un video. Por favor,trate de usar un navegador diferente."}}
,this.core.options.strings||{}
),this._messages["pt-BR"]=this._messages.pt,this._messages["en-US"]=this._messages.en,this._messages["es-419"]=this._messages.es}
,e}
(c["default"]);e["default"]=h,t.exports=e["default"]}
,function(t,e,n){"use strict";t.exports=n(122)}
,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function,not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}
),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0}
);var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}
(),l=n(20),u=r(l),c=n(1),f=r(c),d=n(8),h=r(d),p=n(9),y=r(p),g=n(135),v=r(g),m=n(144),b=r(m),_=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.configure(),r}
return a(e,t),s(e,[{key:"name",get:function(){return"watermark"}}
,{key:"template",get:function(){return(0,y["default"])(b["default"])}}
]),e.prototype.bindEvents=function(){this.listenTo(this.container,f["default"].CONTAINER_PLAY,this.onPlay),this.listenTo(this.container,f["default"].CONTAINER_STOP,this.onStop),this.listenTo(this.container,f["default"].CONTAINER_OPTIONS_CHANGE,this.configure)}
,e.prototype.configure=function(){this.position=this.options.position||"bottom-right",this.options.watermark?(this.imageUrl=this.options.watermark,this.imageLink=this.options.watermarkLink,this.render()):this.$el.remove()}
,e.prototype.onPlay=function(){this.hidden||this.$el.show()}
,e.prototype.onStop=function(){this.$el.hide()}
,e.prototype.render=function(){this.$el.hide();var t={position:this.position,imageUrl:this.imageUrl,imageLink:this.imageLink}
;this.$el.html(this.template(t));var e=h["default"].getStyleFor(v["default"]);return this.container.$el.append(e),this.container.$el.append(this.$el),this}
,e}
(u["default"]);e["default"]=_,t.exports=e["default"]}
,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}
);var n=function(t){this.element=t||window.document,this.initialize()}
;n.KEY_NAMES_BY_CODE={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"caps_lock",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12"}
,n.KEY_CODES_BY_NAME={}
,function(){for(var t in n.KEY_NAMES_BY_CODE)Object.prototype.hasOwnProperty.call(n.KEY_NAMES_BY_CODE,t)&&(n.KEY_CODES_BY_NAME[n.KEY_NAMES_BY_CODE[t]]=+t)}
(),n.MODIFIERS=["shift","ctrl","alt"],n.registerEvent=function(){return document.addEventListener?function(t,e,n){t.addEventListener(e,n,!1)}
:document.attachEvent?function(t,e,n){t.attachEvent("on"+e,n)}
:void 0}
(),n.unregisterEvent=function(){return document.removeEventListener?function(t,e,n){t.removeEventListener(e,n,!1)}
:document.detachEvent?function(t,e,n){t.detachEvent("on"+e,n)}
:void 0}
(),n.stringContains=function(t,e){return t.indexOf(e)!==-1}
,n.neatString=function(t){return t.replace(/^\s+|\s+$/g,"").replace(/\s+/g," ")}
,n.capitalize=function(t){return t.toLowerCase().replace(/^./,function(t){return t.toUpperCase()}
)}
,n.isString=function(t){return n.stringContains(Object.prototype.toString.call(t),"String")}
,n.arrayIncludes=function(){return Array.prototype.indexOf?function(t,e){return t.indexOf(e)!==-1}
:function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return!0;return!1}}
(),n.extractModifiers=function(t){var e,r;for(e=[],r=0;r<n.MODIFIERS.length;r++)n.stringContains(t,n.MODIFIERS[r])&&e.push(n.MODIFIERS[r]);return e}
,n.extractKey=function(t){var e,r;for(e=n.neatString(t).split(" "),r=0;r<e.length;r++)if(!n.arrayIncludes(n.MODIFIERS,e[r]))return e[r]}
,n.modifiersAndKey=function(t){var e,r;return n.stringContains(t,"any")?n.neatString(t).split(" ").slice(0,2).join(" "):(e=n.extractModifiers(t),r=n.extractKey(t),r&&!n.arrayIncludes(n.MODIFIERS,r)&&e.push(r),e.join(" "))}
,n.keyName=function(t){return n.KEY_NAMES_BY_CODE[t+""]}
,n.keyCode=function(t){return+n.KEY_CODES_BY_NAME[t]}
,n.prototype.initialize=function(){var t,e=this;for(this.lastKeyCode=-1,this.lastModifiers={}
,t=0;t<n.MODIFIERS.length;t++)this.lastModifiers[n.MODIFIERS[t]]=!1;this.keysDown={any:[]}
,this.keysUp={any:[]}
,this.downHandler=this.handler("down"),this.upHandler=this.handler("up"),n.registerEvent(this.element,"keydown",this.downHandler),n.registerEvent(this.element,"keyup",this.upHandler),n.registerEvent(window,"unload",function r(){n.unregisterEvent(e.element,"keydown",e.downHandler),n.unregisterEvent(e.element,"keyup",e.upHandler),n.unregisterEvent(window,"unload",r)}
)}
,n.prototype.handler=function(t){var e=this;return function(r){var i,o,a;for(r=r||window.event,e.lastKeyCode=r.keyCode,i=0;i<n.MODIFIERS.length;i++)e.lastModifiers[n.MODIFIERS[i]]=r[n.MODIFIERS[i]+"Key"];for(n.arrayIncludes(n.MODIFIERS,n.keyName(e.lastKeyCode))&&(e.lastModifiers[n.keyName(e.lastKeyCode)]=!0),o=e["keys"+n.capitalize(t)],i=0;i<o.any.length;i++)o.any[i](r)===!1&&r.preventDefault&&r.preventDefault();if(a=e.lastModifiersAndKey(),o[a])for(i=0;i<o[a].length;i++)o[a][i](r)===!1&&r.preventDefault&&r.preventDefault()}}
,n.prototype.registerKeys=function(t,e,r){var i,o,a=this["keys"+n.capitalize(t)];for(n.isString(e)&&(e=[e]),i=0;i<e.length;i++)o=e[i],o=n.modifiersAndKey(o+""),a[o]?a[o].push(r):a[o]=[r];return this}
,n.prototype.unregisterKeys=function(t,e,r){var i,o,a,s=this["keys"+n.capitalize(t)];for(n.isString(e)&&(e=[e]),i=0;i<e.length;i++)if(a=e[i],a=n.modifiersAndKey(a+""),null===r)delete s[a];else if(s[a])for(o=0;o<s[a].length;o++)if(String(s[a][o])===String(r)){s[a].splice(o,1);break}
return this}
,n.prototype.off=function(t){return this.unregisterKeys("down",t,null)}
,n.prototype.delegate=function(t,e,n){return null!==n||void 0!==n?this.registerKeys(t,e,n):this.unregisterKeys(t,e,n)}
,n.prototype.down=function(t,e){return this.delegate("down",t,e)}
,n.prototype.up=function(t,e){return this.delegate("up",t,e)}
,n.prototype.lastKey=function(t){return t?this.lastModifiers[t]:n.keyName(this.lastKeyCode)}
,n.prototype.lastModifiersAndKey=function(){var t,e;for(t=[],e=0;e<n.MODIFIERS.length;e++)this.lastKey(n.MODIFIERS[e])&&t.push(n.MODIFIERS[e]);return n.arrayIncludes(t,this.lastKey())||t.push(this.lastKey()),t.join(" ")}
,e["default"]=n,t.exports=e["default"]}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,".container[data-container]{position:absolute;background-color:#000;height:100%;width:100%}
.container[data-container] .chromeless{cursor:default}
[data-player]:not(.nocursor) .container[data-container]:not(.chromeless).pointer-enabled{cursor:pointer}
",""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,'@font-face{font-family:Roboto;font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url('+n(151)+') format("truetype")}
[data-player]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-transform:translateZ(0);transform:translateZ(0);position:relative;margin:0;padding:0;border:0;font-style:normal;font-weight:400;text-align:center;overflow:hidden;font-size:100%;font-family:Roboto,Open Sans,Arial,sans-serif;text-shadow:0 0 0;box-sizing:border-box}
[data-player] a,[data-player] abbr,[data-player] acronym,[data-player] address,[data-player] applet,[data-player] article,[data-player] aside,[data-player] audio,[data-player] b,[data-player] big,[data-player] blockquote,[data-player] canvas,[data-player] caption,[data-player] center,[data-player] cite,[data-player] code,[data-player] dd,[data-player] del,[data-player] details,[data-player] dfn,[data-player] div,[data-player] dl,[data-player] dt,[data-player] em,[data-player] embed,[data-player] fieldset,[data-player] figcaption,[data-player] figure,[data-player] footer,[data-player] form,[data-player] h1,[data-player] h2,[data-player] h3,[data-player] h4,[data-player] h5,[data-player] h6,[data-player] header,[data-player] hgroup,[data-player] i,[data-player] iframe,[data-player] img,[data-player] ins,[data-player] kbd,[data-player] label,[data-player] legend,[data-player] li,[data-player] mark,[data-player] menu,[data-player] nav,[data-player] object,[data-player] ol,[data-player] output,[data-player] p,[data-player] pre,[data-player] q,[data-player] ruby,[data-player] s,[data-player] samp,[data-player] section,[data-player] small,[data-player] span,[data-player] strike,[data-player] strong,[data-player] sub,[data-player] summary,[data-player] sup,[data-player] table,[data-player] tbody,[data-player] td,[data-player] tfoot,[data-player] th,[data-player] thead,[data-player] time,[data-player] tr,[data-player] tt,[data-player] u,[data-player] ul,[data-player] var,[data-player] video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}
[data-player] table{border-collapse:collapse;border-spacing:0}
[data-player] caption,[data-player] td,[data-player] th{text-align:left;font-weight:400;vertical-align:middle}
[data-player] blockquote,[data-player] q{quotes:none}
[data-player] blockquote:after,[data-player] blockquote:before,[data-player] q:after,[data-player] q:before{content:"";content:none}
[data-player] a img{border:none}
[data-player]:focus{outline:0}
[data-player] *{max-width:none;box-sizing:inherit;float:none}
[data-player] div{display:block}
[data-player].fullscreen{width:100%!important;height:100%!important;top:0;left:0}
[data-player].nocursor{cursor:none}
.clappr-style{display:none!important}
',""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,".media-control-notransition{-webkit-transition:none!important;transition:none!important}
.media-control[data-media-control]{position:absolute;width:100%;height:100%;z-index:9999;pointer-events:none}
.media-control[data-media-control].dragging{pointer-events:auto;cursor:-webkit-grabbing!important;cursor:grabbing!important;cursor:url("+n(45)+"),move}
.media-control[data-media-control].dragging *{cursor:-webkit-grabbing!important;cursor:grabbing!important;cursor:url("+n(45)+'),move}
.media-control[data-media-control] .media-control-background[data-background]{position:absolute;height:40%;width:100%;bottom:0;background:-webkit-linear-gradient(transparent,rgba(0,0,0,.9));background:linear-gradient(transparent,rgba(0,0,0,.9));-webkit-transition:opacity .6s ease-out;transition:opacity .6s ease-out}
.media-control[data-media-control] .media-control-icon{line-height:0;letter-spacing:0;speak:none;color:#fff;opacity:.5;vertical-align:middle;text-align:left;-webkit-transition:all .1s ease;transition:all .1s ease}
.media-control[data-media-control] .media-control-icon:hover{color:#fff;opacity:.75;text-shadow:hsla(0,0%,100%,.8) 0 0 5px}
.media-control[data-media-control].media-control-hide .media-control-background[data-background]{opacity:0}
.media-control[data-media-control].media-control-hide .media-control-layer[data-controls]{bottom:-50px}
.media-control[data-media-control].media-control-hide .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar]{opacity:0}
.media-control[data-media-control] .media-control-layer[data-controls]{position:absolute;bottom:7px;width:100%;height:32px;font-size:0;vertical-align:middle;pointer-events:auto;-webkit-transition:bottom .4s ease-out;transition:bottom .4s ease-out}
.media-control[data-media-control] .media-control-layer[data-controls] .media-control-left-panel[data-media-control]{position:absolute;top:0;left:4px;height:100%}
.media-control[data-media-control] .media-control-layer[data-controls] .media-control-center-panel[data-media-control]{height:100%;text-align:center;line-height:32px}
.media-control[data-media-control] .media-control-layer[data-controls] .media-control-right-panel[data-media-control]{position:absolute;top:0;right:4px;height:100%}
.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button{background-color:transparent;border:0;margin:0 6px;padding:0;cursor:pointer;display:inline-block;width:32px;height:100%}
.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg{width:100%;height:22px}
.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg path{fill:#fff}
.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button:focus{outline:none}
.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-pause],.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-play],.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-stop]{float:left;height:100%}
.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-fullscreen]{float:right;background-color:transparent;border:0;height:100%}
.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator]{cursor:default;float:right;background-color:transparent;border:0;height:100%;display:none}
.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled{opacity:1;display:block}
.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled:hover{opacity:1;text-shadow:none}
.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playpause],.media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playstop]{float:left}
.media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration],.media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position]{display:inline-block;font-size:10px;color:#fff;cursor:default;line-height:32px;position:relative}
.media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position]{margin:0 6px 0 7px}
.media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration]{color:hsla(0,0%,100%,.5);margin-right:6px}
.media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration]:before{content:"|";margin-right:7px}
.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar]{position:absolute;top:-20px;left:0;display:inline-block;vertical-align:middle;width:100%;height:25px;cursor:pointer}
.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar]{width:100%;height:1px;position:relative;top:12px;background-color:#666}
.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-1[data-seekbar]{position:absolute;top:0;left:0;width:0;height:100%;background-color:#c2c2c2;-webkit-transition:all .1s ease-out;transition:all .1s ease-out}
.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar]{position:absolute;top:0;left:0;width:0;height:100%;background-color:#005aff;-webkit-transition:all .1s ease-out;transition:all .1s ease-out}
.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-hover[data-seekbar]{opacity:0;position:absolute;top:-3px;width:5px;height:7px;background-color:hsla(0,0%,100%,.5);-webkit-transition:opacity .1s ease;transition:opacity .1s ease}
.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar]:hover .bar-background[data-seekbar] .bar-hover[data-seekbar]{opacity:1}
.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled{cursor:default}
.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled:hover .bar-background[data-seekbar] .bar-hover[data-seekbar]{opacity:0}
.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar]{position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:2px;left:0;width:20px;height:20px;opacity:1;-webkit-transition:all .1s ease-out;transition:all .1s ease-out}
.media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] .bar-scrubber-icon[data-seekbar]{position:absolute;left:6px;top:6px;width:8px;height:8px;border-radius:10px;box-shadow:0 0 0 6px hsla(0,0%,100%,.2);background-color:#fff}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume]{float:right;display:inline-block;height:32px;cursor:pointer;margin:0 6px;box-sizing:border-box}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume]{float:left;bottom:0}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume]{background-color:transparent;border:0;box-sizing:content-box;width:32px;height:32px;opacity:.5}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume]:hover{opacity:.75}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg{height:24px;position:relative;top:3px}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg path{fill:#fff}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume].muted svg{margin-left:2px}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume]{float:left;position:relative;overflow:hidden;top:6px;width:42px;height:18px;padding:3px 0;-webkit-transition:width .2s ease-out;transition:width .2s ease-out}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume]{height:1px;position:relative;top:7px;margin:0 3px;background-color:#666}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-1[data-volume]{position:absolute;top:0;left:0;width:0;height:100%;background-color:#c2c2c2;-webkit-transition:all .1s ease-out;transition:all .1s ease-out}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-2[data-volume]{position:absolute;top:0;left:0;width:0;height:100%;background-color:#005aff;-webkit-transition:all .1s ease-out;transition:all .1s ease-out}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-hover[data-volume]{opacity:0;position:absolute;top:-3px;width:5px;height:7px;background-color:hsla(0,0%,100%,.5);-webkit-transition:opacity .1s ease;transition:opacity .1s ease}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume]{position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:0;left:0;width:20px;height:20px;opacity:1;-webkit-transition:all .1s ease-out;transition:all .1s ease-out}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume] .bar-scrubber-icon[data-volume]{position:absolute;left:6px;top:6px;width:8px;height:8px;border-radius:10px;box-shadow:0 0 0 6px hsla(0,0%,100%,.2);background-color:#fff}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]{float:left;width:4px;padding-left:2px;height:12px;opacity:.5;box-shadow:inset 2px 0 0 #fff;-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume].fill{box-shadow:inset 2px 0 0 #fff;opacity:1}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:nth-of-type(1){padding-left:0}
.media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:hover{-webkit-transform:scaleY(1.5);transform:scaleY(1.5)}
.media-control[data-media-control].w320 .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume].volume-bar-hide{width:0;height:12px;top:9px;padding:0}
',""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,".clappr-flash-playback[data-flash-playback]{display:block;position:absolute;top:0;left:0;height:100%;width:100%;pointer-events:none}
",""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,"[data-html5-video]{position:absolute;height:100%;width:100%;display:block}
",""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,"[data-html-img]{max-width:100%;max-height:100%}
",""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,"[data-no-op]{z-index:1000;position:absolute;height:100%;width:100%;text-align:center}
[data-no-op] p[data-no-op-msg]{position:absolute;text-align:center;font-size:25px;left:0;right:0;color:#fff;margin:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}
[data-no-op] canvas[data-no-op-canvas]{background-color:#777;height:100%;width:100%}
",""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,'.dvr-controls[data-dvr-controls]{display:inline-block;float:left;color:#fff;line-height:32px;font-size:10px;font-weight:700;margin-left:6px}
.dvr-controls[data-dvr-controls] .live-info{cursor:default;font-family:Roboto,Open Sans,Arial,sans-serif;text-transform:uppercase}
.dvr-controls[data-dvr-controls] .live-info:before{content:"";display:inline-block;position:relative;width:7px;height:7px;border-radius:3.5px;margin-right:3.5px;background-color:#ff0101}
.dvr-controls[data-dvr-controls] .live-info.disabled{opacity:.3}
.dvr-controls[data-dvr-controls] .live-info.disabled:before{background-color:#fff}
.dvr-controls[data-dvr-controls] .live-button{cursor:pointer;outline:none;display:none;border:0;color:#fff;background-color:transparent;height:32px;padding:0;opacity:.7;font-family:Roboto,Open Sans,Arial,sans-serif;text-transform:uppercase;-webkit-transition:all .1s ease;transition:all .1s ease}
.dvr-controls[data-dvr-controls] .live-button:before{content:"";display:inline-block;position:relative;width:7px;height:7px;border-radius:3.5px;margin-right:3.5px;background-color:#fff}
.dvr-controls[data-dvr-controls] .live-button:hover{opacity:1;text-shadow:hsla(0,0%,100%,.75) 0 0 5px}
.dvr .dvr-controls[data-dvr-controls] .live-info{display:none}
.dvr .dvr-controls[data-dvr-controls] .live-button{display:block}
.dvr.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar]{background-color:#005aff}
.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar]{background-color:#ff0101}
',""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,".player-poster[data-poster]{position:absolute;height:100%;width:100%;z-index:998;top:0;left:0;display:flex;justify-content:center;align-items:center;background-color:#000;background-size:cover;background-repeat:no-repeat;background-position:50% 50%}
.player-poster[data-poster].clickable{cursor:pointer}
.player-poster[data-poster]:hover .play-wrapper[data-poster]{opacity:1}
.player-poster[data-poster] .play-wrapper[data-poster]{width:100%;height:25%;margin:0 auto;opacity:.75;-webkit-transition:opacity .1s ease;transition:opacity .1s ease}
.player-poster[data-poster] .play-wrapper[data-poster] svg{height:100%}
.player-poster[data-poster] .play-wrapper[data-poster] svg path{fill:#fff}
",""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,'.seek-time[data-seek-time]{position:absolute;white-space:nowrap;height:20px;line-height:20px;font-size:0;left:-100%;bottom:55px;background-color:rgba(2,2,2,.5);z-index:9999;-webkit-transition:opacity .1s ease;transition:opacity .1s ease}
.seek-time[data-seek-time].hidden[data-seek-time]{opacity:0}
.seek-time[data-seek-time] [data-seek-time]{display:inline-block;color:#fff;font-size:10px;padding-left:7px;padding-right:7px;vertical-align:top}
.seek-time[data-seek-time] [data-duration]{display:inline-block;color:hsla(0,0%,100%,.5);font-size:10px;padding-right:7px;vertical-align:top}
.seek-time[data-seek-time] [data-duration]:before{content:"|";margin-right:7px}
',""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,".spinner-three-bounce[data-spinner]{position:absolute;margin:0 auto;width:70px;text-align:center;z-index:999;left:0;right:0;margin-left:auto;margin-right:auto;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}
.spinner-three-bounce[data-spinner]>div{width:18px;height:18px;background-color:#fff;border-radius:100%;display:inline-block;-webkit-animation:bouncedelay 1.4s infinite ease-in-out;animation:bouncedelay 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}
.spinner-three-bounce[data-spinner] [data-bounce1]{-webkit-animation-delay:-.32s;animation-delay:-.32s}
.spinner-three-bounce[data-spinner] [data-bounce2]{-webkit-animation-delay:-.16s;animation-delay:-.16s}
@-webkit-keyframes bouncedelay{0%,80%,to{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}
@keyframes bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}
",""])}
,function(t,e,n){e=t.exports=n(10)(),e.push([t.id,"[data-watermark]{position:absolute;min-width:70px;max-width:200px;width:12%;text-align:center;z-index:10}
[data-watermark] a{outline:none;cursor:pointer}
[data-watermark] img{max-width:100%}
[data-watermark-bottom-left]{bottom:10px;left:10px}
[data-watermark-bottom-right]{bottom:10px;right:42px}
[data-watermark-top-left]{top:10px;left:10px}
[data-watermark-top-right]{top:10px;right:37px}
",""])}
,function(t,e){t.exports='<div class="media-control-background" data-background></div>\n<div class="media-control-layer" data-controls>\n  <%  var renderBar = function(name){%>\n      <div class="bar-container" data-<%= name %>>\n        <div class="bar-background" data-<%= name %>>\n          <div class="bar-fill-1" data-<%= name %>></div>\n          <div class="bar-fill-2" data-<%= name %>></div>\n          <div class="bar-hover" data-<%= name %>></div>\n        </div>\n        <div class="bar-scrubber" data-<%= name %>>\n          <div class="bar-scrubber-icon" data-<%= name %>></div>\n        </div>\n      </div>\n  <%}
;%>\n  <%  var renderSegmentedBar = function(name,segments){\n      segments = segments || 10;%>\n    <div class="bar-container" data-<%= name %>>\n    <% for (var i = 0;i < segments;i++){%>\n      <div class="segmented-bar-element" data-<%= name %>></div>\n    <%}
%>\n    </div>\n  <%}
;%>\n  <% var renderDrawer = function(name,renderContent){%>\n      <div class="drawer-container" data-<%= name %>>\n        <div class="drawer-icon-container" data-<%= name %>>\n          <div class="drawer-icon media-control-icon" data-<%= name %>></div>\n          <span class="drawer-text" data-<%= name %>></span>\n        </div>\n        <% renderContent(name);%>\n      </div>\n  <%}
;%>\n  <% var renderIndicator = function(name){%>\n      <div class="media-control-indicator" data-<%= name %>></div>\n  <%}
;%>\n  <% var renderButton = function(name){%>\n      <button type="button" class="media-control-button media-control-icon" data-<%= name %>></button>\n  <%}
;%>\n  <%  var templates ={\n        bar:renderBar,\n        segmentedBar:renderSegmentedBar,\n}
;\n      var render = function(settingsList){\n        settingsList.forEach(function(setting){\n          if(setting === "seekbar"){\n            renderBar(setting);\n}
else if (setting === "volume"){\n            renderDrawer(setting,settings.volumeBarTemplate ? templates[settings.volumeBarTemplate]:function(name){return renderSegmentedBar(name)}
);\n}
else if (setting === "duration" || setting === "position"){\n            renderIndicator(setting);\n}
else{\n            renderButton(setting);\n}
\n}
);\n}
;%>\n  <% if (settings.default && settings.default.length){%>\n  <div class="media-control-center-panel" data-media-control>\n    <% render(settings.default);%>\n  </div>\n  <%}
%>\n  <% if (settings.left && settings.left.length){%>\n  <div class="media-control-left-panel" data-media-control>\n    <% render(settings.left);%>\n  </div>\n  <%}
%>\n  <% if (settings.right && settings.right.length){%>\n  <div class="media-control-right-panel" data-media-control>\n    <% render(settings.right);%>\n  </div>\n  <%}
%>\n</div>\n'}
,function(t,e){t.exports='<param name="movie" value="<%= swfPath %>?inline=1">\n<param name="quality" value="autohigh">\n<param name="swliveconnect" value="true">\n<param name="allowScriptAccess" value="always">\n<param name="bgcolor" value="#000000">\n<param name="allowFullScreen" value="false">\n<param name="wmode" value="<%= wmode %>">\n<param name="tabindex" value="1">\n<param name="FlashVars" value="playbackId=<%= playbackId %>&callback=<%= callbackName %>">\n<embed\n  name="<%= cid %>"\n  type="application/x-shockwave-flash"\n  disabled="disabled"\n  tabindex="-1"\n  enablecontextmenu="false"\n  allowScriptAccess="always"\n  quality="autohigh"\n  pluginspage="http://www.macromedia.com/go/getflashplayer"\n  wmode="<%= wmode %>"\n  swliveconnect="true"\n  allowfullscreen="false"\n  bgcolor="#000000"\n  FlashVars="playbackId=<%= playbackId %>&callback=<%= callbackName %>"\n  src="<%= swfPath %>"\n  width="100%"\n  height="100%">\n</embed>\n'}
,function(t,e){t.exports='<source src="<%=src%>" type="<%=type%>">\n'}
,function(t,e){t.exports="<canvas data-no-op-canvas></canvas>\n<p data-no-op-msg><%=message%><p>\n"}
,function(t,e){t.exports='<div class="live-info"><%= live %></div>\n<button type="button" class="live-button"><%= backToLive %></button>\n'}
,function(t,e){t.exports='<div class="play-wrapper" data-poster></div>\n'}
,function(t,e){t.exports="<span data-seek-time></span>\n<span data-duration></span>\n"}
,function(t,e){t.exports="<div data-bounce1></div><div data-bounce2></div><div data-bounce3></div>\n"}
,function(t,e){t.exports="<div data-watermark data-watermark-<%=position %>>\n<% if(typeof imageLink !== 'undefined'){%>\n<a target=_blank href=\"<%= imageLink %>\">\n<%}
%>\n<img src=\"<%= imageUrl %>\">\n<% if(typeof imageLink !== 'undefined'){%>\n</a>\n<%}
%>\n</div>\n"}
,function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M1.712 1.24h12.6v13.52h-12.6z"></path></svg>'}
,function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M11.5 11h-.002v1.502L7.798 10H4.5V6h3.297l3.7-2.502V4.5h.003V11zM11 4.49L7.953 6.5H5v3h2.953L11 11.51V4.49z"></path></svg>'}
,function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M9.75 11.51L6.7 9.5H3.75v-3H6.7L9.75 4.49v.664l.497.498V3.498L6.547 6H3.248v4h3.296l3.7 2.502v-2.154l-.497.5v.662zm3-5.165L12.404 6l-1.655 1.653L9.093 6l-.346.345L10.402 8 8.747 9.654l.346.347 1.655-1.653L12.403 10l.348-.346L11.097 8l1.655-1.655z"></path></svg>'}
,function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M7.156 8L4 11.156V8.5H3V13h4.5v-1H4.844L8 8.844 7.156 8zM8.5 3v1h2.657L8 7.157 8.846 8 12 4.844V7.5h1V3H8.5z"></path></svg>'}
,function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M13.5 3.344l-.844-.844L9.5 5.656V3h-1v4.5H13v-1h-2.656L13.5 3.344zM3 9.5h2.656L2.5 12.656l.844.844L6.5 10.344V13h1V8.5H3v1z"></path></svg>'}
,function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M5.375 7.062H2.637V4.26H.502v7.488h2.135V8.9h2.738v2.848h2.133V4.26H5.375v2.802zm5.97-2.81h-2.84v7.496h2.798c2.65 0 4.195-1.607 4.195-3.77v-.022c0-2.162-1.523-3.704-4.154-3.704zm2.06 3.758c0 1.21-.81 1.896-2.03 1.896h-.83V6.093h.83c1.22 0 2.03.696 2.03 1.896v.02z"></path></svg>'}
,function(t,e,n){t.exports=n.p+"38861cba61c66739c1452c3a71e39852.ttf"}
,function(t,e,n){t.exports=n.p+"4b76590b32dab62bc95c1b7951efae78.swf"}
,function(t,e,n){t.exports=n.p+"809981e5b09d5336c45d72d0869ada2a.swf"}
])}
);//# sourceMappingURL=clappr.min.js.map
