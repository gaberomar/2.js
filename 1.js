!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Clappr")):"function"==typeof define&&define.amd?define(["Clappr"],t):"object"==typeof exports?exports.LevelSelector=t(require("Clappr")):e.LevelSelector=t(e.Clappr)}(this,function(e){return function(e){function t(n){if(l[n])return l[n].exports;var o=l[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var l={};return t.m=e,t.c=l,t.p="<%=baseUrl%>/",t(0)}([/*!******************!*\
  !*** ./index.js ***!
  \******************/
function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l(1),e.exports=t["default"]},/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),s=function(e,t,l){for(var n=!0;n;){var o=e,r=t,i=l;n=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,r);if(void 0!==s){if("value"in s)return s.value;var a=s.get;if(void 0===a)return;return a.call(i)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=r,l=i,n=!0,s=c=void 0}},a=l(2),c=l(3),u=n(c),v=l(4),h=n(v),f=-1,d=function(e){function t(){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return r(t,e),i(t,[{key:"bindEvents",value:function(){this.listenTo(this.core,a.Events.CORE_READY,this.bindPlaybackEvents),this.listenTo(this.core.mediaControl,a.Events.MEDIACONTROL_CONTAINERCHANGED,this.reload),this.listenTo(this.core.mediaControl,a.Events.MEDIACONTROL_RENDERED,this.render),this.listenTo(this.core.mediaControl,a.Events.MEDIACONTROL_HIDE,this.hideSelectLevelMenu)}},{key:"unBindEvents",value:function(){this.stopListening(this.core,a.Events.CORE_READY),this.stopListening(this.core.mediaControl,a.Events.MEDIACONTROL_CONTAINERCHANGED),this.stopListening(this.core.mediaControl,a.Events.MEDIACONTROL_RENDERED),this.stopListening(this.core.mediaControl,a.Events.MEDIACONTROL_HIDE),this.stopListening(this.core.getCurrentPlayback(),a.Events.PLAYBACK_LEVELS_AVAILABLE),this.stopListening(this.core.getCurrentPlayback(),a.Events.PLAYBACK_LEVEL_SWITCH_START),this.stopListening(this.core.getCurrentPlayback(),a.Events.PLAYBACK_LEVEL_SWITCH_END),this.stopListening(this.core.getCurrentPlayback(),a.Events.PLAYBACK_BITRATE)}},{key:"bindPlaybackEvents",value:function(){var e=this.core.getCurrentPlayback();this.listenTo(e,a.Events.PLAYBACK_LEVELS_AVAILABLE,this.fillLevels),this.listenTo(e,a.Events.PLAYBACK_LEVEL_SWITCH_START,this.startLevelSwitch),this.listenTo(e,a.Events.PLAYBACK_LEVEL_SWITCH_END,this.stopLevelSwitch),this.listenTo(e,a.Events.PLAYBACK_BITRATE,this.updateCurrentLevel);var t=e.levels&&e.levels.length>0;t&&this.fillLevels(e.levels)}},{key:"reload",value:function(){this.unBindEvents(),this.bindEvents(),this.bindPlaybackEvents()}},{key:"shouldRender",value:function(){if(!this.core.getCurrentContainer())return!1;var e=this.core.getCurrentPlayback();if(!e)return!1;var t=void 0!==e.currentLevel,l=!!(this.levels&&this.levels.length>1);return t&&l}},{key:"render",value:function(){if(this.shouldRender()){var e=a.Styler.getStyleFor(h["default"],{baseUrl:this.core.options.baseUrl});this.$el.html(this.template({levels:this.levels,title:this.getTitle()})),this.$el.append(e),this.core.mediaControl.$(".media-control-right-panel").append(this.el),this.highlightCurrentLevel()}return this}},{key:"fillLevels",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?f:arguments[1];void 0===this.selectedLevelId&&(this.selectedLevelId=t),this.levels=e,this.configureLevelsLabels(),this.render()}},{key:"configureLevelsLabels",value:function(){if(void 0!==this.core.options.levelSelectorConfig)for(var e in this.core.options.levelSelectorConfig.labels||{}){e=parseInt(e,10);var t=!!this.findLevelBy(e);t&&this.changeLevelLabelBy(e,this.core.options.levelSelectorConfig.labels[e])}}},{key:"findLevelBy",value:function(e){var t;return this.levels.forEach(function(l){l.id===e&&(t=l)}),t}},{key:"changeLevelLabelBy",value:function(e,t){var l=this;this.levels.forEach(function(n,o){n.id===e&&(l.levels[o].label=t)})}},{key:"onLevelSelect",value:function(e){return this.selectedLevelId=parseInt(e.target.dataset.levelSelectorSelect,10),this.core.getCurrentPlayback().currentLevel==this.selectedLevelId?!1:(this.core.getCurrentPlayback().currentLevel=this.selectedLevelId,this.toggleContextMenu(),e.stopPropagation(),!1)}},{key:"onShowLevelSelectMenu",value:function(e){this.toggleContextMenu()}},{key:"hideSelectLevelMenu",value:function(){this.$(".level_selector ul").hide()}},{key:"toggleContextMenu",value:function(){this.$(".level_selector ul").toggle()}},{key:"buttonElement",value:function(){return this.$(".level_selector button")}},{key:"levelElement",value:function(e){return this.$(".level_selector ul a"+(isNaN(e)?"":'[data-level-selector-select="'+e+'"]')).parent()}},{key:"getTitle",value:function(){return(this.core.options.levelSelectorConfig||{}).title}},{key:"startLevelSwitch",value:function(){this.buttonElement().addClass("changing")}},{key:"stopLevelSwitch",value:function(){this.buttonElement().removeClass("changing")}},{key:"updateText",value:function(e){e===f?this.buttonElement().text(this.currentLevel?"AUTO ("+this.currentLevel.label+")":"AUTO"):this.buttonElement().text(this.findLevelBy(e).label)}},{key:"updateCurrentLevel",value:function(e){var t=this.findLevelBy(e.level);this.currentLevel=t?t:null,this.highlightCurrentLevel()}},{key:"highlightCurrentLevel",value:function(){this.levelElement().removeClass("current"),this.currentLevel&&this.levelElement(this.currentLevel.id).addClass("current"),this.updateText(this.selectedLevelId)}},{key:"name",get:function(){return"level_selector"}},{key:"template",get:function(){return(0,a.template)(u["default"])}},{key:"attributes",get:function(){return{"class":this.name,"data-level-selector":""}}},{key:"events",get:function(){return{"click [data-level-selector-select]":"onLevelSelect","click [data-level-selector-button]":"onShowLevelSelectMenu"}}}],[{key:"version",get:function(){return VERSION}}]),t}(a.UICorePlugin);t["default"]=d,e.exports=t["default"]},/*!*************************!*\
  !*** external "Clappr" ***!
  \*************************/
function(t,l){t.exports=e},/*!****************************************!*\
  !*** ./src/public/level-selector.html ***!
  \****************************************/
function(e,t){e.exports='<button data-level-selector-button>\n  Auto\n</button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href="#" data-level-selector-select="-1">AUTO</a></li>\n  <% for (var i = 0; i < levels.length; i++) { %>\n    <li><a href="#" data-level-selector-select="<%= levels[i].id %>"><%= levels[i].label %></a></li>\n  <% }; %>\n</ul>\n'},/*!*******************************!*\
  !*** ./src/public/style.scss ***!
  \*******************************/
function(e,t,l){t=e.exports=l(5)(),t.push([e.id,".level_selector[data-level-selector]{float:right;margin-top:5px;position:relative}.level_selector[data-level-selector] button{background-color:transparent;color:#fff;font-family:Roboto,Open Sans,Arial,sans-serif;-webkit-font-smoothing:antialiased;border:none;font-size:10px}.level_selector[data-level-selector] button:hover{color:#c9c9c9}.level_selector[data-level-selector] button.changing{-webkit-animation:pulse .5s infinite alternate}.level_selector[data-level-selector]>ul{list-style-type:none;position:absolute;bottom:25px;border:1px solid #000;display:none;background-color:#e6e6e6}.level_selector[data-level-selector] li{font-size:10px}.level_selector[data-level-selector] li[data-title]{background-color:#c3c2c2;padding:5px}.level_selector[data-level-selector] li a{color:#444;padding:2px 10px;display:block;text-decoration:none}.level_selector[data-level-selector] li a:hover{background-color:#555;color:#fff}.level_selector[data-level-selector] li a:hover a{color:#fff;text-decoration:none}.level_selector[data-level-selector] li.current a{color:red}@-webkit-keyframes pulse{0%{color:#fff}50%{color:#ff0101}to{color:#b80000}}",""])},/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var l=this[t];l[2]?e.push("@media "+l[2]+"{"+l[1]+"}"):e.push(l[1])}return e.join("")},e.i=function(t,l){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(l&&!i[2]?i[2]=l:l&&(i[2]="("+i[2]+") and ("+l+")"),e.push(i))}},e}}])});
//# sourceMappingURL=level-selector.min.js.map
