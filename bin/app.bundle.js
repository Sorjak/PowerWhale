/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var PIXI = __webpack_require__(1),
	    Engine = __webpack_require__(2).Engine;
	    // World  = require("matter-js").World;

	var Game = __webpack_require__(32);

	var GAME_WIDTH = 800;
	var GAME_HEIGHT = 600;

	var rendererOptions = {
	    antialiasing: true,
	    transparent: false,
	    resolution: window.devicePixelRatio,
	    autoResize: true,
	};
	var RENDERER = new PIXI.autoDetectRenderer(GAME_WIDTH, GAME_HEIGHT, rendererOptions);

	var engine = Engine.create($("#pixi-canvas"));

	$("#pixi-canvas").append(RENDERER.view);

	var game = new Game(engine.world);

	var animFrame = null;

	var mainLoop = function() {
	    animFrame = requestAnimationFrame(mainLoop);

	    game.update(PIXI.ticker.shared.deltaTime);

	    RENDERER.render(game.stage);
	}

	game.start().then(function() {
	    Engine.run(engine);
	    mainLoop();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * pixi.js - v4.1.1
	 * Compiled Tue, 01 Nov 2016 17:25:51 UTC
	 *
	 * pixi.js is licensed under the MIT License.
	 * http://www.opensource.org/licenses/mit-license
	 */
	!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.PIXI=t()}}(function(){var t;return function t(e,r,n){function i(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return require(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return i(r?r:t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,r){"use strict";"use restrict";function n(t){var e=32;return t&=-t,t&&e--,65535&t&&(e-=16),16711935&t&&(e-=8),252645135&t&&(e-=4),858993459&t&&(e-=2),1431655765&t&&(e-=1),e}var i=32;r.INT_BITS=i,r.INT_MAX=2147483647,r.INT_MIN=-1<<i-1,r.sign=function(t){return(t>0)-(t<0)},r.abs=function(t){var e=t>>i-1;return(t^e)-e},r.min=function(t,e){return e^(t^e)&-(t<e)},r.max=function(t,e){return t^(t^e)&-(t<e)},r.isPow2=function(t){return!(t&t-1||!t)},r.log2=function(t){var e,r;return e=(t>65535)<<4,t>>>=e,r=(t>255)<<3,t>>>=r,e|=r,r=(t>15)<<2,t>>>=r,e|=r,r=(t>3)<<1,t>>>=r,e|=r,e|t>>1},r.log10=function(t){return t>=1e9?9:t>=1e8?8:t>=1e7?7:t>=1e6?6:t>=1e5?5:t>=1e4?4:t>=1e3?3:t>=100?2:t>=10?1:0},r.popCount=function(t){return t-=t>>>1&1431655765,t=(858993459&t)+(t>>>2&858993459),16843009*(t+(t>>>4)&252645135)>>>24},r.countTrailingZeros=n,r.nextPow2=function(t){return t+=0===t,--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1},r.prevPow2=function(t){return t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t-(t>>>1)},r.parity=function(t){return t^=t>>>16,t^=t>>>8,t^=t>>>4,t&=15,27030>>>t&1};var o=new Array(256);!function(t){for(var e=0;e<256;++e){var r=e,n=e,i=7;for(r>>>=1;r;r>>>=1)n<<=1,n|=1&r,--i;t[e]=n<<i&255}}(o),r.reverse=function(t){return o[255&t]<<24|o[t>>>8&255]<<16|o[t>>>16&255]<<8|o[t>>>24&255]},r.interleave2=function(t,e){return t&=65535,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e&=65535,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1},r.deinterleave2=function(t,e){return t=t>>>e&1431655765,t=858993459&(t|t>>>1),t=252645135&(t|t>>>2),t=16711935&(t|t>>>4),t=65535&(t|t>>>16),t<<16>>16},r.interleave3=function(t,e,r){return t&=1023,t=4278190335&(t|t<<16),t=251719695&(t|t<<8),t=3272356035&(t|t<<4),t=1227133513&(t|t<<2),e&=1023,e=4278190335&(e|e<<16),e=251719695&(e|e<<8),e=3272356035&(e|e<<4),e=1227133513&(e|e<<2),t|=e<<1,r&=1023,r=4278190335&(r|r<<16),r=251719695&(r|r<<8),r=3272356035&(r|r<<4),r=1227133513&(r|r<<2),t|r<<2},r.deinterleave3=function(t,e){return t=t>>>e&1227133513,t=3272356035&(t|t>>>2),t=251719695&(t|t>>>4),t=4278190335&(t|t>>>8),t=1023&(t|t>>>16),t<<22>>22},r.nextCombination=function(t){var e=t|t-1;return e+1|(~e&-~e)-1>>>n(t)+1}},{}],2:[function(t,e,r){"use strict";function n(t,e,r){r=r||2;var n=e&&e.length,o=n?e[0]*r:t.length,a=i(t,0,o,r,!0),u=[];if(!a)return u;var h,l,f,d,p,v,y;if(n&&(a=c(t,e,a,r)),t.length>80*r){h=f=t[0],l=d=t[1];for(var g=r;g<o;g+=r)p=t[g],v=t[g+1],p<h&&(h=p),v<l&&(l=v),p>f&&(f=p),v>d&&(d=v);y=Math.max(f-h,d-l)}return s(a,u,r,h,l,y),u}function i(t,e,r,n,i){var o,s;if(i===D(t,e,r,n)>0)for(o=e;o<r;o+=n)s=P(o,t[o],t[o+1],s);else for(o=r-n;o>=e;o-=n)s=P(o,t[o],t[o+1],s);return s&&T(s,s.next)&&(C(s),s=s.next),s}function o(t,e){if(!t)return t;e||(e=t);var r,n=t;do if(r=!1,n.steiner||!T(n,n.next)&&0!==x(n.prev,n,n.next))n=n.next;else{if(C(n),n=e=n.prev,n===n.next)return null;r=!0}while(r||n!==e);return e}function s(t,e,r,n,i,c,f){if(t){!f&&c&&v(t,n,i,c);for(var d,p,y=t;t.prev!==t.next;)if(d=t.prev,p=t.next,c?u(t,n,i,c):a(t))e.push(d.i/r),e.push(t.i/r),e.push(p.i/r),C(t),t=p.next,y=p.next;else if(t=p,t===y){f?1===f?(t=h(t,e,r),s(t,e,r,n,i,c,2)):2===f&&l(t,e,r,n,i,c):s(o(t),e,r,n,i,c,1);break}}}function a(t){var e=t.prev,r=t,n=t.next;if(x(e,r,n)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(_(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&x(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function u(t,e,r,n){var i=t.prev,o=t,s=t.next;if(x(i,o,s)>=0)return!1;for(var a=i.x<o.x?i.x<s.x?i.x:s.x:o.x<s.x?o.x:s.x,u=i.y<o.y?i.y<s.y?i.y:s.y:o.y<s.y?o.y:s.y,h=i.x>o.x?i.x>s.x?i.x:s.x:o.x>s.x?o.x:s.x,l=i.y>o.y?i.y>s.y?i.y:s.y:o.y>s.y?o.y:s.y,c=g(a,u,e,r,n),f=g(h,l,e,r,n),d=t.nextZ;d&&d.z<=f;){if(d!==t.prev&&d!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,d.x,d.y)&&x(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(d=t.prevZ;d&&d.z>=c;){if(d!==t.prev&&d!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,d.x,d.y)&&x(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0}function h(t,e,r){var n=t;do{var i=n.prev,o=n.next.next;!T(i,o)&&w(i,n,n.next,o)&&S(i,o)&&S(o,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(o.i/r),C(n),C(n.next),n=t=o),n=n.next}while(n!==t);return n}function l(t,e,r,n,i,a){var u=t;do{for(var h=u.next.next;h!==u.prev;){if(u.i!==h.i&&b(u,h)){var l=M(u,h);return u=o(u,u.next),l=o(l,l.next),s(u,e,r,n,i,a),void s(l,e,r,n,i,a)}h=h.next}u=u.next}while(u!==t)}function c(t,e,r,n){var s,a,u,h,l,c=[];for(s=0,a=e.length;s<a;s++)u=e[s]*n,h=s<a-1?e[s+1]*n:t.length,l=i(t,u,h,n,!1),l===l.next&&(l.steiner=!0),c.push(m(l));for(c.sort(f),s=0;s<c.length;s++)d(c[s],r),r=o(r,r.next);return r}function f(t,e){return t.x-e.x}function d(t,e){if(e=p(t,e)){var r=M(e,t);o(r,r.next)}}function p(t,e){var r,n=e,i=t.x,o=t.y,s=-(1/0);do{if(o<=n.y&&o>=n.next.y){var a=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=i&&a>s){if(s=a,a===i){if(o===n.y)return n;if(o===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!r)return null;if(i===s)return r.prev;var u,h=r,l=r.x,c=r.y,f=1/0;for(n=r.next;n!==h;)i>=n.x&&n.x>=l&&_(o<c?i:s,o,l,c,o<c?s:i,o,n.x,n.y)&&(u=Math.abs(o-n.y)/(i-n.x),(u<f||u===f&&n.x>r.x)&&S(n,t)&&(r=n,f=u)),n=n.next;return r}function v(t,e,r,n){var i=t;do null===i.z&&(i.z=g(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,y(i)}function y(t){var e,r,n,i,o,s,a,u,h=1;do{for(r=t,t=null,o=null,s=0;r;){for(s++,n=r,a=0,e=0;e<h&&(a++,n=n.nextZ,n);e++);for(u=h;a>0||u>0&&n;)0===a?(i=n,n=n.nextZ,u--):0!==u&&n?r.z<=n.z?(i=r,r=r.nextZ,a--):(i=n,n=n.nextZ,u--):(i=r,r=r.nextZ,a--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;r=n}o.nextZ=null,h*=2}while(s>1);return t}function g(t,e,r,n,i){return t=32767*(t-r)/i,e=32767*(e-n)/i,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1}function m(t){var e=t,r=t;do e.x<r.x&&(r=e),e=e.next;while(e!==t);return r}function _(t,e,r,n,i,o,s,a){return(i-s)*(e-a)-(t-s)*(o-a)>=0&&(t-s)*(n-a)-(r-s)*(e-a)>=0&&(r-s)*(o-a)-(i-s)*(n-a)>=0}function b(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!E(t,e)&&S(t,e)&&S(e,t)&&O(t,e)}function x(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function T(t,e){return t.x===e.x&&t.y===e.y}function w(t,e,r,n){return!!(T(t,e)&&T(r,n)||T(t,n)&&T(r,e))||x(t,e,r)>0!=x(t,e,n)>0&&x(r,n,t)>0!=x(r,n,e)>0}function E(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&w(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}function S(t,e){return x(t.prev,t,t.next)<0?x(t,e,t.next)>=0&&x(t,t.prev,e)>=0:x(t,e,t.prev)<0||x(t,t.next,e)<0}function O(t,e){var r=t,n=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do r.y>o!=r.next.y>o&&i<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;while(r!==t);return n}function M(t,e){var r=new R(t.i,t.x,t.y),n=new R(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,o.next=n,n.prev=o,n}function P(t,e,r,n){var i=new R(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function C(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function R(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function D(t,e,r,n){for(var i=0,o=e,s=r-n;o<r;o+=n)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return i}e.exports=n,n.deviation=function(t,e,r,n){var i=e&&e.length,o=i?e[0]*r:t.length,s=Math.abs(D(t,0,o,r));if(i)for(var a=0,u=e.length;a<u;a++){var h=e[a]*r,l=a<u-1?e[a+1]*r:t.length;s-=Math.abs(D(t,h,l,r))}var c=0;for(a=0;a<n.length;a+=3){var f=n[a]*r,d=n[a+1]*r,p=n[a+2]*r;c+=Math.abs((t[f]-t[p])*(t[d+1]-t[f+1])-(t[f]-t[d])*(t[p+1]-t[f+1]))}return 0===s&&0===c?0:Math.abs((c-s)/s)},n.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)r.vertices.push(t[i][o][s]);i>0&&(n+=t[i-1].length,r.holes.push(n))}return r}},{}],3:[function(t,e,r){"use strict";function n(){}function i(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function o(){this._events=new n,this._eventsCount=0}var s=Object.prototype.hasOwnProperty,a="~";Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),o.prototype.eventNames=function(){var t,e,r=[];if(0===this._eventsCount)return r;for(e in t=this._events)s.call(t,e)&&r.push(a?e.slice(1):e);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},o.prototype.listeners=function(t,e){var r=a?a+t:t,n=this._events[r];if(e)return!!n;if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,s=new Array(o);i<o;i++)s[i]=n[i].fn;return s},o.prototype.emit=function(t,e,r,n,i,o){var s=a?a+t:t;if(!this._events[s])return!1;var u,h,l=this._events[s],c=arguments.length;if(l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),c){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return l.fn.call(l.context,e,r),!0;case 4:return l.fn.call(l.context,e,r,n),!0;case 5:return l.fn.call(l.context,e,r,n,i),!0;case 6:return l.fn.call(l.context,e,r,n,i,o),!0}for(h=1,u=new Array(c-1);h<c;h++)u[h-1]=arguments[h];l.fn.apply(l.context,u)}else{var f,d=l.length;for(h=0;h<d;h++)switch(l[h].once&&this.removeListener(t,l[h].fn,void 0,!0),c){case 1:l[h].fn.call(l[h].context);break;case 2:l[h].fn.call(l[h].context,e);break;case 3:l[h].fn.call(l[h].context,e,r);break;case 4:l[h].fn.call(l[h].context,e,r,n);break;default:if(!u)for(f=1,u=new Array(c-1);f<c;f++)u[f-1]=arguments[f];l[h].fn.apply(l[h].context,u)}}return!0},o.prototype.on=function(t,e,r){var n=new i(e,r||this),o=a?a+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],n]:this._events[o].push(n):(this._events[o]=n,this._eventsCount++),this},o.prototype.once=function(t,e,r){var n=new i(e,r||this,(!0)),o=a?a+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],n]:this._events[o].push(n):(this._events[o]=n,this._eventsCount++),this},o.prototype.removeListener=function(t,e,r,i){var o=a?a+t:t;if(!this._events[o])return this;if(!e)return 0===--this._eventsCount?this._events=new n:delete this._events[o],this;var s=this._events[o];if(s.fn)s.fn!==e||i&&!s.once||r&&s.context!==r||(0===--this._eventsCount?this._events=new n:delete this._events[o]);else{for(var u=0,h=[],l=s.length;u<l;u++)(s[u].fn!==e||i&&!s[u].once||r&&s[u].context!==r)&&h.push(s[u]);h.length?this._events[o]=1===h.length?h[0]:h:0===--this._eventsCount?this._events=new n:delete this._events[o]}return this},o.prototype.removeAllListeners=function(t){var e;return t?(e=a?a+t:t,this._events[e]&&(0===--this._eventsCount?this._events=new n:delete this._events[e])):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=a,o.EventEmitter=o,"undefined"!=typeof e&&(e.exports=o)},{}],4:[function(e,r,n){!function(e){var n=/iPhone/i,i=/iPod/i,o=/iPad/i,s=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,a=/Android/i,u=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,l=/IEMobile/i,c=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,f=/BlackBerry/i,d=/BB10/i,p=/Opera Mini/i,v=/(CriOS|Chrome)(?=.*\bMobile\b)/i,y=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,g=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),m=function(t,e){return t.test(e)},_=function(t){var e=t||navigator.userAgent,r=e.split("[FBAN");if("undefined"!=typeof r[1]&&(e=r[0]),r=e.split("Twitter"),"undefined"!=typeof r[1]&&(e=r[0]),this.apple={phone:m(n,e),ipod:m(i,e),tablet:!m(n,e)&&m(o,e),device:m(n,e)||m(i,e)||m(o,e)},this.amazon={phone:m(u,e),tablet:!m(u,e)&&m(h,e),device:m(u,e)||m(h,e)},this.android={phone:m(u,e)||m(s,e),tablet:!m(u,e)&&!m(s,e)&&(m(h,e)||m(a,e)),device:m(u,e)||m(h,e)||m(s,e)||m(a,e)},this.windows={phone:m(l,e),tablet:m(c,e),device:m(l,e)||m(c,e)},this.other={blackberry:m(f,e),blackberry10:m(d,e),opera:m(p,e),firefox:m(y,e),chrome:m(v,e),device:m(f,e)||m(d,e)||m(p,e)||m(y,e)||m(v,e)},this.seven_inch=m(g,e),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},b=function(){var t=new _;return t.Class=_,t};"undefined"!=typeof r&&r.exports&&"undefined"==typeof window?r.exports=_:"undefined"!=typeof r&&r.exports&&"undefined"!=typeof window?r.exports=b():"function"==typeof t&&t.amd?t("isMobile",[],e.isMobile=b()):e.isMobile=b()}(this)},{}],5:[function(t,e,r){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function i(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(t){return!1}}var o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=i()?Object.assign:function(t,e){for(var r,i,a=n(t),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var h in r)o.call(r,h)&&(a[h]=r[h]);if(Object.getOwnPropertySymbols){i=Object.getOwnPropertySymbols(r);for(var l=0;l<i.length;l++)s.call(r,i[l])&&(a[i[l]]=r[i[l]])}}return a}},{}],6:[function(t,e,r){var n=new ArrayBuffer(0),i=function(t,e,r,i){this.gl=t,this.buffer=t.createBuffer(),this.type=e||t.ARRAY_BUFFER,this.drawType=i||t.STATIC_DRAW,this.data=n,r&&this.upload(r)};i.prototype.upload=function(t,e,r){r||this.bind();var n=this.gl;t=t||this.data,e=e||0,this.data.byteLength>=t.byteLength?n.bufferSubData(this.type,e,t):n.bufferData(this.type,t,this.drawType),this.data=t},i.prototype.bind=function(){var t=this.gl;t.bindBuffer(this.type,this.buffer)},i.createVertexBuffer=function(t,e,r){return new i(t,t.ARRAY_BUFFER,e,r)},i.createIndexBuffer=function(t,e,r){return new i(t,t.ELEMENT_ARRAY_BUFFER,e,r)},i.create=function(t,e,r,n){return new i(t,e,n)},i.prototype.destroy=function(){this.gl.deleteBuffer(this.buffer)},e.exports=i},{}],7:[function(t,e,r){var n=t("./GLTexture"),i=function(t,e,r){this.gl=t,this.framebuffer=t.createFramebuffer(),this.stencil=null,this.texture=null,this.width=e||100,this.height=r||100};i.prototype.enableTexture=function(t){var e=this.gl;this.texture=t||new n(e),this.texture.bind(),this.bind(),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture.texture,0)},i.prototype.enableStencil=function(){if(!this.stencil){var t=this.gl;this.stencil=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this.stencil),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,this.stencil),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,this.width,this.height)}},i.prototype.clear=function(t,e,r,n){this.bind();var i=this.gl;i.clearColor(t,e,r,n),i.clear(i.COLOR_BUFFER_BIT)},i.prototype.bind=function(){var t=this.gl;this.texture&&this.texture.unbind(),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer)},i.prototype.unbind=function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null)},i.prototype.resize=function(t,e){var r=this.gl;this.width=t,this.height=e,this.texture&&this.texture.uploadData(null,t,e),this.stencil&&(r.bindRenderbuffer(r.RENDERBUFFER,this.stencil),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,t,e))},i.prototype.destroy=function(){var t=this.gl;this.texture&&this.texture.destroy(),t.deleteFramebuffer(this.framebuffer),this.gl=null,this.stencil=null,this.texture=null},i.createRGBA=function(t,e,r){var o=n.fromData(t,null,e,r);o.enableNearestScaling(),o.enableWrapClamp();var s=new i(t,e,r);return s.enableTexture(o),s.unbind(),s},i.createFloat32=function(t,e,r,o){var s=new n.fromData(t,o,e,r);s.enableNearestScaling(),s.enableWrapClamp();var a=new i(t,e,r);return a.enableTexture(s),a.unbind(),a},e.exports=i},{"./GLTexture":9}],8:[function(t,e,r){var n=t("./shader/compileProgram"),i=t("./shader/extractAttributes"),o=t("./shader/extractUniforms"),s=t("./shader/generateUniformAccessObject"),a=function(t,e,r){this.gl=t,this.program=n(t,e,r),this.attributes=i(t,this.program);var a=o(t,this.program);this.uniforms=s(t,a)};a.prototype.bind=function(){this.gl.useProgram(this.program)},a.prototype.destroy=function(){},e.exports=a},{"./shader/compileProgram":14,"./shader/extractAttributes":16,"./shader/extractUniforms":17,"./shader/generateUniformAccessObject":18}],9:[function(t,e,r){var n=function(t,e,r,n,i){this.gl=t,this.texture=t.createTexture(),this.mipmap=!1,this.premultiplyAlpha=!1,this.width=e||0,this.height=r||0,this.format=n||t.RGBA,this.type=i||t.UNSIGNED_BYTE};n.prototype.upload=function(t){this.bind();var e=this.gl;this.width=t.videoWidth||t.width,this.height=t.videoHeight||t.height,e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),e.texImage2D(e.TEXTURE_2D,0,this.format,this.format,this.type,t)};var i=!1;n.prototype.uploadData=function(t,e,r){this.bind();var n=this.gl;if(this.width=e||this.width,this.height=r||this.height,t instanceof Float32Array){if(!i){var o=n.getExtension("OES_texture_float");if(!o)throw new Error("floating point textures not available");i=!0}this.type=n.FLOAT}else this.type=n.UNSIGNED_BYTE;n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),n.texImage2D(n.TEXTURE_2D,0,this.format,this.width,this.height,0,this.format,this.type,t||null)},n.prototype.bind=function(t){var e=this.gl;void 0!==t&&e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)},n.prototype.unbind=function(){var t=this.gl;t.bindTexture(t.TEXTURE_2D,null)},n.prototype.minFilter=function(t){var e=this.gl;this.bind(),this.mipmap?e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t?e.LINEAR_MIPMAP_LINEAR:e.NEAREST_MIPMAP_NEAREST):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t?e.LINEAR:e.NEAREST)},n.prototype.magFilter=function(t){var e=this.gl;this.bind(),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t?e.LINEAR:e.NEAREST)},n.prototype.enableMipmap=function(){var t=this.gl;this.bind(),this.mipmap=!0,t.generateMipmap(t.TEXTURE_2D)},n.prototype.enableLinearScaling=function(){this.minFilter(!0),this.magFilter(!0)},n.prototype.enableNearestScaling=function(){this.minFilter(!1),this.magFilter(!1)},n.prototype.enableWrapClamp=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)},n.prototype.enableWrapRepeat=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT)},n.prototype.enableWrapMirrorRepeat=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.MIRRORED_REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.MIRRORED_REPEAT)},n.prototype.destroy=function(){var t=this.gl;t.deleteTexture(this.texture)},n.fromSource=function(t,e,r){var i=new n(t);return i.premultiplyAlpha=r||!1,i.upload(e),i},n.fromData=function(t,e,r,i){var o=new n(t);return o.uploadData(e,r,i),o},e.exports=n},{}],10:[function(t,e,r){function n(t,e){if(this.nativeVaoExtension=null,n.FORCE_NATIVE||(this.nativeVaoExtension=t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object")),this.nativeState=e,this.nativeVaoExtension){this.nativeVao=this.nativeVaoExtension.createVertexArrayOES();var r=t.getParameter(t.MAX_VERTEX_ATTRIBS);this.nativeState={tempAttribState:new Array(r),attribState:new Array(r)}}this.gl=t,this.attributes=[],this.indexBuffer=null,this.dirty=!1}var i=t("./setVertexAttribArrays");n.prototype.constructor=n,e.exports=n,n.FORCE_NATIVE=!1,n.prototype.bind=function(){return this.nativeVao?(this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),this.dirty&&(this.dirty=!1,this.activate())):this.activate(),this},n.prototype.unbind=function(){return this.nativeVao&&this.nativeVaoExtension.bindVertexArrayOES(null),this},n.prototype.activate=function(){for(var t=this.gl,e=null,r=0;r<this.attributes.length;r++){var n=this.attributes[r];e!==n.buffer&&(n.buffer.bind(),e=n.buffer),t.vertexAttribPointer(n.attribute.location,n.attribute.size,n.type||t.FLOAT,n.normalized||!1,n.stride||0,n.start||0)}return i(t,this.attributes,this.nativeState),this.indexBuffer.bind(),this},n.prototype.addAttribute=function(t,e,r,n,i,o){return this.attributes.push({buffer:t,attribute:e,location:e.location,type:r||this.gl.FLOAT,normalized:n||!1,stride:i||0,start:o||0}),this.dirty=!0,this},n.prototype.addIndex=function(t){return this.indexBuffer=t,this.dirty=!0,this},n.prototype.clear=function(){return this.nativeVao&&this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),this.attributes.length=0,this.indexBuffer=null,this},n.prototype.draw=function(t,e,r){var n=this.gl;return n.drawElements(t,e,n.UNSIGNED_SHORT,r||0),this},n.prototype.destroy=function(){this.gl=null,this.indexBuffer=null,this.attributes=null,this.nativeState=null,this.nativeVao&&this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao),this.nativeVaoExtension=null,this.nativeVao=null}},{"./setVertexAttribArrays":13}],11:[function(t,e,r){var n=function(t,e){var r=t.getContext("webgl",e)||t.getContext("experimental-webgl",e);if(!r)throw new Error("This browser does not support webGL. Try using the canvas renderer");return r};e.exports=n},{}],12:[function(t,e,r){var n={createContext:t("./createContext"),setVertexAttribArrays:t("./setVertexAttribArrays"),GLBuffer:t("./GLBuffer"),GLFramebuffer:t("./GLFramebuffer"),GLShader:t("./GLShader"),GLTexture:t("./GLTexture"),VertexArrayObject:t("./VertexArrayObject"),shader:t("./shader")};"undefined"!=typeof e&&e.exports&&(e.exports=n),"undefined"!=typeof window&&(window.pixi={gl:n})},{"./GLBuffer":6,"./GLFramebuffer":7,"./GLShader":8,"./GLTexture":9,"./VertexArrayObject":10,"./createContext":11,"./setVertexAttribArrays":13,"./shader":19}],13:[function(t,e,r){var n=function(t,e,r){var n;if(r){var i=r.tempAttribState,o=r.attribState;for(n=0;n<i.length;n++)i[n]=!1;for(n=0;n<e.length;n++)i[e[n].attribute.location]=!0;for(n=0;n<o.length;n++)o[n]!==i[n]&&(o[n]=i[n],r.attribState[n]?t.enableVertexAttribArray(n):t.disableVertexAttribArray(n))}else for(n=0;n<e.length;n++){var s=e[n];t.enableVertexAttribArray(s.attribute.location)}};e.exports=n},{}],14:[function(t,e,r){var n=function(t,e,r){var n=i(t,t.VERTEX_SHADER,e),o=i(t,t.FRAGMENT_SHADER,r),s=t.createProgram();return t.attachShader(s,n),t.attachShader(s,o),t.linkProgram(s),t.getProgramParameter(s,t.LINK_STATUS)||(console.error("Pixi.js Error: Could not initialize shader."),console.error("gl.VALIDATE_STATUS",t.getProgramParameter(s,t.VALIDATE_STATUS)),console.error("gl.getError()",t.getError()),""!==t.getProgramInfoLog(s)&&console.warn("Pixi.js Warning: gl.getProgramInfoLog()",t.getProgramInfoLog(s)),t.deleteProgram(s),s=null),t.deleteShader(n),t.deleteShader(o),s},i=function(t,e,r){var n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(console.log(t.getShaderInfoLog(n)),null)};e.exports=n},{}],15:[function(t,e,r){var n=function(t,e){switch(t){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"sampler2D":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"bool":return!1;case"bvec2":return i(2*e);case"bvec3":return i(3*e);case"bvec4":return i(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}},i=function(t){for(var e=new Array(t),r=0;r<e.length;r++)e[r]=!1;return e};e.exports=n},{}],16:[function(t,e,r){var n=t("./mapType"),i=t("./mapSize"),o=function(t,e){for(var r={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),a=0;a<o;a++){var u=t.getActiveAttrib(e,a),h=n(t,u.type);r[u.name]={type:h,size:i(h),location:t.getAttribLocation(e,u.name),pointer:s}}return r},s=function(t,e,r,n){gl.vertexAttribPointer(this.location,this.size,t||gl.FLOAT,e||!1,r||0,n||0)};e.exports=o},{"./mapSize":20,"./mapType":21}],17:[function(t,e,r){var n=t("./mapType"),i=t("./defaultValue"),o=function(t,e){for(var r={},o=t.getProgramParameter(e,t.ACTIVE_UNIFORMS),s=0;s<o;s++){var a=t.getActiveUniform(e,s),u=a.name.replace(/\[.*?\]/,""),h=n(t,a.type);r[u]={type:h,size:a.size,location:t.getUniformLocation(e,u),value:i(h,a.size)}}return r};e.exports=o},{"./defaultValue":15,"./mapType":21}],18:[function(t,e,r){var n=function(t,e){var r={data:{}};r.gl=t;for(var n=Object.keys(e),a=0;a<n.length;a++){var u=n[a],h=u.split("."),l=h[h.length-1],c=s(h,r),f=e[u];c.data[l]=f,c.gl=t,Object.defineProperty(c,l,{get:i(l),set:o(l,f)})}return r},i=function(t){var e=a.replace("%%",t);return new Function(e)},o=function(t,e){var r,n=u.replace(/%%/g,t);return r=1===e.size?h[e.type]:l[e.type],r&&(n+="\nthis.gl."+r+";"),new Function("value",n)},s=function(t,e){for(var r=e,n=0;n<t.length-1;n++){var i=r[t[n]]||{data:{}};r[t[n]]=i,r=i}return r},a=["return this.data.%%.value;"].join("\n"),u=["this.data.%%.value = value;","var location = this.data.%%.location;"].join("\n"),h={float:"uniform1f(location, value)",vec2:"uniform2f(location, value[0], value[1])",vec3:"uniform3f(location, value[0], value[1], value[2])",vec4:"uniform4f(location, value[0], value[1], value[2], value[3])",int:"uniform1i(location, value)",ivec2:"uniform2i(location, value[0], value[1])",ivec3:"uniform3i(location, value[0], value[1], value[2])",ivec4:"uniform4i(location, value[0], value[1], value[2], value[3])",bool:"uniform1i(location, value)",bvec2:"uniform2i(location, value[0], value[1])",bvec3:"uniform3i(location, value[0], value[1], value[2])",bvec4:"uniform4i(location, value[0], value[1], value[2], value[3])",mat2:"uniformMatrix2fv(location, false, value)",mat3:"uniformMatrix3fv(location, false, value)",mat4:"uniformMatrix4fv(location, false, value)",sampler2D:"uniform1i(location, value)"},l={float:"uniform1fv(location, value)",vec2:"uniform2fv(location, value)",vec3:"uniform3fv(location, value)",vec4:"uniform4fv(location, value)",int:"uniform1iv(location, value)",ivec2:"uniform2iv(location, value)",ivec3:"uniform3iv(location, value)",ivec4:"uniform4iv(location, value)",bool:"uniform1iv(location, value)",bvec2:"uniform2iv(location, value)",bvec3:"uniform3iv(location, value)",bvec4:"uniform4iv(location, value)",sampler2D:"uniform1iv(location, value)"};e.exports=n},{}],19:[function(t,e,r){e.exports={compileProgram:t("./compileProgram"),defaultValue:t("./defaultValue"),extractAttributes:t("./extractAttributes"),extractUniforms:t("./extractUniforms"),generateUniformAccessObject:t("./generateUniformAccessObject"),mapSize:t("./mapSize"),mapType:t("./mapType")}},{"./compileProgram":14,"./defaultValue":15,"./extractAttributes":16,"./extractUniforms":17,"./generateUniformAccessObject":18,"./mapSize":20,"./mapType":21}],20:[function(t,e,r){var n=function(t){return i[t]},i={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};e.exports=n},{}],21:[function(t,e,r){var n=function(t,e){if(!i){var r=Object.keys(o);i={};for(var n=0;n<r.length;++n){var s=r[n];i[t[s]]=o[s]}}return i[e]},i=null,o={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D"};e.exports=n},{}],22:[function(t,e,r){(function(t){function e(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return i.exec(t).slice(1)};r.resolve=function(){for(var r="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(r=s+"/"+r,i="/"===s.charAt(0))}return r=e(n(r.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+r||"."},r.normalize=function(t){var i=r.isAbsolute(t),o="/"===s(t,-1);return t=e(n(t.split("/"),function(t){return!!t}),!i).join("/"),t||i||(t="."),t&&o&&(t+="/"),(i?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(n(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},r.relative=function(t,e){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=r.resolve(t).substr(1),e=r.resolve(e).substr(1);for(var i=n(t.split("/")),o=n(e.split("/")),s=Math.min(i.length,o.length),a=s,u=0;u<s;u++)if(i[u]!==o[u]){a=u;break}for(var h=[],u=a;u<i.length;u++)h.push("..");return h=h.concat(o.slice(a)),h.join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t){var e=o(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},r.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},r.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,t("_process"))},{_process:23}],23:[function(t,e,r){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function s(t){if(f===clearTimeout)return clearTimeout(t);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){y&&p&&(y=!1,p.length?v=p.concat(v):g=-1,v.length&&u())}function u(){if(!y){var t=o(a);y=!0;for(var e=v.length;e;){for(p=v,v=[];++g<e;)p&&p[g].run();g=-1,e=v.length}p=null,y=!1,s(t)}}function h(t,e){this.fun=t,this.array=e}function l(){}var c,f,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(t){f=i}}();var p,v=[],y=!1,g=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];
	v.push(new h(t,e)),1!==v.length||y||o(u)},h.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},{}],24:[function(e,r,n){(function(e){!function(i){function o(t){throw new RangeError(L[t])}function s(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function a(t,e){var r=t.split("@"),n="";r.length>1&&(n=r[0]+"@",t=r[1]),t=t.replace(I,".");var i=t.split("."),o=s(i,e).join(".");return n+o}function u(t){for(var e,r,n=[],i=0,o=t.length;i<o;)e=t.charCodeAt(i++),e>=55296&&e<=56319&&i<o?(r=t.charCodeAt(i++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),i--)):n.push(e);return n}function h(t){return s(t,function(t){var e="";return t>65535&&(t-=65536,e+=B(t>>>10&1023|55296),t=56320|1023&t),e+=B(t)}).join("")}function l(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:w}function c(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function f(t,e,r){var n=0;for(t=r?F(t/M):t>>1,t+=F(t/e);t>j*S>>1;n+=w)t=F(t/j);return F(n+(j+1)*t/(t+O))}function d(t){var e,r,n,i,s,a,u,c,d,p,v=[],y=t.length,g=0,m=C,_=P;for(r=t.lastIndexOf(R),r<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&o("not-basic"),v.push(t.charCodeAt(n));for(i=r>0?r+1:0;i<y;){for(s=g,a=1,u=w;i>=y&&o("invalid-input"),c=l(t.charCodeAt(i++)),(c>=w||c>F((T-g)/a))&&o("overflow"),g+=c*a,d=u<=_?E:u>=_+S?S:u-_,!(c<d);u+=w)p=w-d,a>F(T/p)&&o("overflow"),a*=p;e=v.length+1,_=f(g-s,e,0==s),F(g/e)>T-m&&o("overflow"),m+=F(g/e),g%=e,v.splice(g++,0,m)}return h(v)}function p(t){var e,r,n,i,s,a,h,l,d,p,v,y,g,m,_,b=[];for(t=u(t),y=t.length,e=C,r=0,s=P,a=0;a<y;++a)v=t[a],v<128&&b.push(B(v));for(n=i=b.length,i&&b.push(R);n<y;){for(h=T,a=0;a<y;++a)v=t[a],v>=e&&v<h&&(h=v);for(g=n+1,h-e>F((T-r)/g)&&o("overflow"),r+=(h-e)*g,e=h,a=0;a<y;++a)if(v=t[a],v<e&&++r>T&&o("overflow"),v==e){for(l=r,d=w;p=d<=s?E:d>=s+S?S:d-s,!(l<p);d+=w)_=l-p,m=w-p,b.push(B(c(p+_%m,0))),l=F(_/m);b.push(B(c(l,0))),s=f(r,g,n==i),r=0,++n}++r,++e}return b.join("")}function v(t){return a(t,function(t){return D.test(t)?d(t.slice(4).toLowerCase()):t})}function y(t){return a(t,function(t){return A.test(t)?"xn--"+p(t):t})}var g="object"==typeof n&&n&&!n.nodeType&&n,m="object"==typeof r&&r&&!r.nodeType&&r,_="object"==typeof e&&e;_.global!==_&&_.window!==_&&_.self!==_||(i=_);var b,x,T=2147483647,w=36,E=1,S=26,O=38,M=700,P=72,C=128,R="-",D=/^xn--/,A=/[^\x20-\x7E]/,I=/[\x2E\u3002\uFF0E\uFF61]/g,L={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},j=w-E,F=Math.floor,B=String.fromCharCode;if(b={version:"1.4.1",ucs2:{decode:u,encode:h},decode:d,encode:p,toASCII:y,toUnicode:v},"function"==typeof t&&"object"==typeof t.amd&&t.amd)t("punycode",function(){return b});else if(g&&m)if(r.exports==g)m.exports=b;else for(x in b)b.hasOwnProperty(x)&&(g[x]=b[x]);else i.punycode=b}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],25:[function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,r,o){e=e||"&",r=r||"=";var s={};if("string"!=typeof t||0===t.length)return s;var a=/\+/g;t=t.split(e);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var h=t.length;u>0&&h>u&&(h=u);for(var l=0;l<h;++l){var c,f,d,p,v=t[l].replace(a,"%20"),y=v.indexOf(r);y>=0?(c=v.substr(0,y),f=v.substr(y+1)):(c=v,f=""),d=decodeURIComponent(c),p=decodeURIComponent(f),n(s,d)?i(s[d])?s[d].push(p):s[d]=[s[d],p]:s[d]=p}return s};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],26:[function(t,e,r){"use strict";function n(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};e.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?n(s(t),function(s){var a=encodeURIComponent(i(s))+r;return o(t[s])?n(t[s],function(t){return a+encodeURIComponent(i(t))}).join(e):a+encodeURIComponent(i(t[s]))}).join(e):a?encodeURIComponent(i(a))+r+encodeURIComponent(i(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},s=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},{}],27:[function(t,e,r){"use strict";r.decode=r.parse=t("./decode"),r.encode=r.stringify=t("./encode")},{"./decode":25,"./encode":26}],28:[function(t,e,r){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(t,e,r){if(t&&h.isObject(t)&&t instanceof n)return t;var i=new n;return i.parse(t,e,r),i}function o(t){return h.isString(t)&&(t=i(t)),t instanceof n?t.format():n.prototype.format.call(t)}function s(t,e){return i(t,!1,!0).resolve(e)}function a(t,e){return t?i(t,!1,!0).resolveObject(e):e}var u=t("punycode"),h=t("./util");r.parse=i,r.resolve=s,r.resolveObject=a,r.format=o,r.Url=n;var l=/^([a-z0-9.+-]+:)/i,c=/:[0-9]*$/,f=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,d=["<",">",'"',"`"," ","\r","\n","\t"],p=["{","}","|","\\","^","`"].concat(d),v=["'"].concat(p),y=["%","/","?",";","#"].concat(v),g=["/","?","#"],m=255,_=/^[+a-z0-9A-Z_-]{0,63}$/,b=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},T={javascript:!0,"javascript:":!0},w={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},E=t("querystring");n.prototype.parse=function(t,e,r){if(!h.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),i=n!==-1&&n<t.indexOf("#")?"?":"#",o=t.split(i),s=/\\/g;o[0]=o[0].replace(s,"/"),t=o.join(i);var a=t;if(a=a.trim(),!r&&1===t.split("#").length){var c=f.exec(a);if(c)return this.path=a,this.href=a,this.pathname=c[1],c[2]?(this.search=c[2],e?this.query=E.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var d=l.exec(a);if(d){d=d[0];var p=d.toLowerCase();this.protocol=p,a=a.substr(d.length)}if(r||d||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var S="//"===a.substr(0,2);!S||d&&T[d]||(a=a.substr(2),this.slashes=!0)}if(!T[d]&&(S||d&&!w[d])){for(var O=-1,M=0;M<g.length;M++){var P=a.indexOf(g[M]);P!==-1&&(O===-1||P<O)&&(O=P)}var C,R;R=O===-1?a.lastIndexOf("@"):a.lastIndexOf("@",O),R!==-1&&(C=a.slice(0,R),a=a.slice(R+1),this.auth=decodeURIComponent(C)),O=-1;for(var M=0;M<y.length;M++){var P=a.indexOf(y[M]);P!==-1&&(O===-1||P<O)&&(O=P)}O===-1&&(O=a.length),this.host=a.slice(0,O),a=a.slice(O),this.parseHost(),this.hostname=this.hostname||"";var D="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!D)for(var A=this.hostname.split(/\./),M=0,I=A.length;M<I;M++){var L=A[M];if(L&&!L.match(_)){for(var j="",F=0,B=L.length;F<B;F++)j+=L.charCodeAt(F)>127?"x":L[F];if(!j.match(_)){var k=A.slice(0,M),N=A.slice(M+1),U=L.match(b);U&&(k.push(U[1]),N.unshift(U[2])),N.length&&(a="/"+N.join(".")+a),this.hostname=k.join(".");break}}}this.hostname.length>m?this.hostname="":this.hostname=this.hostname.toLowerCase(),D||(this.hostname=u.toASCII(this.hostname));var X=this.port?":"+this.port:"",W=this.hostname||"";this.host=W+X,this.href+=this.host,D&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&(a="/"+a))}if(!x[p])for(var M=0,I=v.length;M<I;M++){var G=v[M];if(a.indexOf(G)!==-1){var Y=encodeURIComponent(G);Y===G&&(Y=escape(G)),a=a.split(G).join(Y)}}var H=a.indexOf("#");H!==-1&&(this.hash=a.substr(H),a=a.slice(0,H));var z=a.indexOf("?");if(z!==-1?(this.search=a.substr(z),this.query=a.substr(z+1),e&&(this.query=E.parse(this.query)),a=a.slice(0,z)):e&&(this.search="",this.query={}),a&&(this.pathname=a),w[p]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var X=this.pathname||"",V=this.search||"";this.path=X+V}return this.href=this.format(),this},n.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=t+this.host:this.hostname&&(i=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&h.isObject(this.query)&&Object.keys(this.query).length&&(o=E.stringify(this.query));var s=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||w[e])&&i!==!1?(i="//"+(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),n&&"#"!==n.charAt(0)&&(n="#"+n),s&&"?"!==s.charAt(0)&&(s="?"+s),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),s=s.replace("#","%23"),e+i+r+s+n},n.prototype.resolve=function(t){return this.resolveObject(i(t,!1,!0)).format()},n.prototype.resolveObject=function(t){if(h.isString(t)){var e=new n;e.parse(t,!1,!0),t=e}for(var r=new n,i=Object.keys(this),o=0;o<i.length;o++){var s=i[o];r[s]=this[s]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var a=Object.keys(t),u=0;u<a.length;u++){var l=a[u];"protocol"!==l&&(r[l]=t[l])}return w[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!w[t.protocol]){for(var c=Object.keys(t),f=0;f<c.length;f++){var d=c[f];r[d]=t[d]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||T[t.protocol])r.pathname=t.pathname;else{for(var p=(t.pathname||"").split("/");p.length&&!(t.host=p.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),r.pathname=p.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var v=r.pathname||"",y=r.search||"";r.path=v+y}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var g=r.pathname&&"/"===r.pathname.charAt(0),m=t.host||t.pathname&&"/"===t.pathname.charAt(0),_=m||g||r.host&&t.pathname,b=_,x=r.pathname&&r.pathname.split("/")||[],p=t.pathname&&t.pathname.split("/")||[],E=r.protocol&&!w[r.protocol];if(E&&(r.hostname="",r.port=null,r.host&&(""===x[0]?x[0]=r.host:x.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===p[0]?p[0]=t.host:p.unshift(t.host)),t.host=null),_=_&&(""===p[0]||""===x[0])),m)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,x=p;else if(p.length)x||(x=[]),x.pop(),x=x.concat(p),r.search=t.search,r.query=t.query;else if(!h.isNullOrUndefined(t.search)){if(E){r.hostname=r.host=x.shift();var S=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");S&&(r.auth=S.shift(),r.host=r.hostname=S.shift())}return r.search=t.search,r.query=t.query,h.isNull(r.pathname)&&h.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!x.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var O=x.slice(-1)[0],M=(r.host||t.host||x.length>1)&&("."===O||".."===O)||""===O,P=0,C=x.length;C>=0;C--)O=x[C],"."===O?x.splice(C,1):".."===O?(x.splice(C,1),P++):P&&(x.splice(C,1),P--);if(!_&&!b)for(;P--;P)x.unshift("..");!_||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),M&&"/"!==x.join("/").substr(-1)&&x.push("");var R=""===x[0]||x[0]&&"/"===x[0].charAt(0);if(E){r.hostname=r.host=R?"":x.length?x.shift():"";var S=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");S&&(r.auth=S.shift(),r.host=r.hostname=S.shift())}return _=_||r.host&&x.length,_&&!R&&x.unshift(""),x.length?r.pathname=x.join("/"):(r.pathname=null,r.path=null),h.isNull(r.pathname)&&h.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var t=this.host,e=c.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},{"./util":29,punycode:24,querystring:27}],29:[function(t,e,r){"use strict";e.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},{}],30:[function(t,e,r){"use strict";e.exports=function(t,e){e=e||{};for(var r={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=r.parser[e.strictMode?"strict":"loose"].exec(t),i={},o=14;o--;)i[r.key[o]]=n[o]||"";return i[r.q.name]={},i[r.key[12]].replace(r.q.parser,function(t,e,n){e&&(i[r.q.name][e]=n)}),i}},{}],31:[function(t,e,r){"use strict";function n(t,e){a.call(this),e=e||u,this.baseUrl=t||"",this.progress=0,this.loading=!1,this._progressChunk=0,this._beforeMiddleware=[],this._afterMiddleware=[],this._boundLoadResource=this._loadResource.bind(this),this._buffer=[],this._numToLoad=0,this._queue=o.queue(this._boundLoadResource,e),this.resources={}}var i=t("parse-uri"),o=t("./async"),s=t("./Resource"),a=t("eventemitter3"),u=10,h=100;n.prototype=Object.create(a.prototype),n.prototype.constructor=n,e.exports=n,n.prototype.add=n.prototype.enqueue=function(t,e,r,n){if(Array.isArray(t)){for(var i=0;i<t.length;++i)this.add(t[i]);return this}if("object"==typeof t&&(n=e||t.callback||t.onComplete,r=t,e=t.url,t=t.name||t.key||t.url),"string"!=typeof e&&(n=r,r=e,e=t),"string"!=typeof e)throw new Error("No url passed to add resource to loader.");if("function"==typeof r&&(n=r,r=null),this.resources[t])throw new Error('Resource with name "'+t+'" already exists.');return e=this._prepareUrl(e),this.resources[t]=new s(t,e,r),"function"==typeof n&&this.resources[t].once("afterMiddleware",n),this._numToLoad++,this._queue.started?(this._queue.push(this.resources[t]),this._progressChunk=(h-this.progress)/(this._queue.length()+this._queue.running())):(this._buffer.push(this.resources[t]),this._progressChunk=h/this._buffer.length),this},n.prototype.before=n.prototype.pre=function(t){return this._beforeMiddleware.push(t),this},n.prototype.after=n.prototype.use=function(t){return this._afterMiddleware.push(t),this},n.prototype.reset=function(){this.progress=0,this.loading=!1,this._progressChunk=0,this._buffer.length=0,this._numToLoad=0,this._queue.kill(),this._queue.started=!1;for(var t in this.resources){var e=this.resources[t];e.off("complete",this._onLoad,this),e.isLoading&&e.abort()}return this.resources={},this},n.prototype.load=function(t){if("function"==typeof t&&this.once("complete",t),this._queue.started)return this;this.emit("start",this),this.loading=!0;for(var e=0;e<this._buffer.length;++e)this._queue.push(this._buffer[e]);return this._buffer.length=0,this},n.prototype._prepareUrl=function(t){var e=i(t,{strictMode:!0});return e.protocol||!e.path||0===e.path.indexOf("//")?t:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&"/"!==t.charAt(0)?this.baseUrl+"/"+t:this.baseUrl+t},n.prototype._loadResource=function(t,e){var r=this;t._dequeue=e,o.eachSeries(this._beforeMiddleware,function(e,n){e.call(r,t,function(){n(t.isComplete?{}:null)})},function(){t.isComplete?r._onLoad(t):(t.once("complete",r._onLoad,r),t.load())})},n.prototype._onComplete=function(){this.loading=!1,this.emit("complete",this,this.resources)},n.prototype._onLoad=function(t){var e=this;o.eachSeries(this._afterMiddleware,function(r,n){r.call(e,t,n)},function(){t.emit("afterMiddleware",t),e._numToLoad--,e.progress+=e._progressChunk,e.emit("progress",e,t),t.error?e.emit("error",t.error,e,t):e.emit("load",e,t),0===e._numToLoad&&(e.progress=100,e._onComplete())}),t._dequeue()},n.LOAD_TYPE=s.LOAD_TYPE,n.XHR_RESPONSE_TYPE=s.XHR_RESPONSE_TYPE},{"./Resource":32,"./async":33,eventemitter3:3,"parse-uri":30}],32:[function(t,e,r){"use strict";function n(t,e,r){if(s.call(this),r=r||{},"string"!=typeof t||"string"!=typeof e)throw new Error("Both name and url are required for constructing a resource.");this.name=t,this.url=e,this.isDataUrl=0===this.url.indexOf("data:"),this.data=null,this.crossOrigin=r.crossOrigin===!0?"anonymous":r.crossOrigin,this.loadType=r.loadType||this._determineLoadType(),this.xhrType=r.xhrType,this.metadata=r.metadata||{},this.error=null,this.xhr=null,this.isJson=!1,this.isXml=!1,this.isImage=!1,this.isAudio=!1,this.isVideo=!1,this.isComplete=!1,this.isLoading=!1,this._dequeue=null,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this._boundXdrOnTimeout=this._xdrOnTimeout.bind(this)}function i(t){return t.toString().replace("object ","")}function o(t,e,r){e&&0===e.indexOf(".")&&(e=e.substring(1)),e&&(t[e]=r)}var s=t("eventemitter3"),a=t("parse-uri"),u=!(!window.XDomainRequest||"withCredentials"in new XMLHttpRequest),h=null,l=0,c=200,f=204;n.prototype=Object.create(s.prototype),n.prototype.constructor=n,e.exports=n,n.prototype.complete=function(){if(this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null)),this.isComplete)throw new Error("Complete called again for an already completed resource.");this.isComplete=!0,this.isLoading=!1,this.emit("complete",this)},n.prototype.abort=function(t){if(!this.error){if(this.error=new Error(t),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if("undefined"!=typeof this.data.src)this.data.src="";else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this.complete()}},n.prototype.load=function(t){if(!this.isLoading)if(this.isComplete){if(t){var e=this;setTimeout(function(){t(e)},1)}}else switch(t&&this.once("complete",t),this.isLoading=!0,this.emit("start",this),this.crossOrigin!==!1&&"string"==typeof this.crossOrigin||(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case n.LOAD_TYPE.IMAGE:this._loadElement("image");break;case n.LOAD_TYPE.AUDIO:this._loadSourceElement("audio");break;case n.LOAD_TYPE.VIDEO:this._loadSourceElement("video");break;case n.LOAD_TYPE.XHR:default:u&&this.crossOrigin?this._loadXdr():this._loadXhr()}},n.prototype._loadElement=function(t){this.metadata.loadElement?this.data=this.metadata.loadElement:"image"===t&&"undefined"!=typeof window.Image?this.data=new Image:this.data=document.createElement(t),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url);var e="is"+t[0].toUpperCase()+t.substring(1);this[e]===!1&&(this[e]=!0),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1)},n.prototype._loadSourceElement=function(t){if(this.metadata.loadElement?this.data=this.metadata.loadElement:"audio"===t&&"undefined"!=typeof window.Audio?this.data=new Audio:this.data=document.createElement(t),null===this.data)return void this.abort("Unsupported element "+t);if(!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var e=0;e<this.url.length;++e)this.data.appendChild(this._createSource(t,this.url[e]));else this.data.appendChild(this._createSource(t,this.url));this["is"+t[0].toUpperCase()+t.substring(1)]=!0,this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load()},n.prototype._loadXhr=function(){"string"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var t=this.xhr=new XMLHttpRequest;t.open("GET",this.url,!0),this.xhrType===n.XHR_RESPONSE_TYPE.JSON||this.xhrType===n.XHR_RESPONSE_TYPE.DOCUMENT?t.responseType=n.XHR_RESPONSE_TYPE.TEXT:t.responseType=this.xhrType,t.addEventListener("error",this._boundXhrOnError,!1),t.addEventListener("abort",this._boundXhrOnAbort,!1),t.addEventListener("progress",this._boundOnProgress,!1),t.addEventListener("load",this._boundXhrOnLoad,!1),t.send()},n.prototype._loadXdr=function(){"string"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var t=this.xhr=new XDomainRequest;t.timeout=5e3,t.onerror=this._boundXhrOnError,t.ontimeout=this._boundXdrOnTimeout,t.onprogress=this._boundOnProgress,t.onload=this._boundXhrOnLoad,t.open("GET",this.url,!0),setTimeout(function(){t.send()},0)},n.prototype._createSource=function(t,e,r){r||(r=t+"/"+e.substr(e.lastIndexOf(".")+1));var n=document.createElement("source");return n.src=e,n.type=r,n},n.prototype._onError=function(t){this.abort("Failed to load element using "+t.target.nodeName)},n.prototype._onProgress=function(t){t&&t.lengthComputable&&this.emit("progress",this,t.loaded/t.total)},n.prototype._xhrOnError=function(){var t=this.xhr;this.abort(i(t)+" Request failed. Status: "+t.status+', text: "'+t.statusText+'"')},n.prototype._xhrOnAbort=function(){this.abort(i(this.xhr)+" Request was aborted by the user.")},n.prototype._xdrOnTimeout=function(){this.abort(i(this.xhr)+" Request timed out.")},n.prototype._xhrOnLoad=function(){var t=this.xhr,e="undefined"==typeof t.status?t.status:c;if(!(e===c||e===f||e===l&&t.responseText.length>0))return void this.abort("["+t.status+"]"+t.statusText+":"+t.responseURL);if(this.xhrType===n.XHR_RESPONSE_TYPE.TEXT)this.data=t.responseText;else if(this.xhrType===n.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(t.responseText),this.isJson=!0}catch(t){return void this.abort("Error trying to parse loaded json:",t)}else if(this.xhrType===n.XHR_RESPONSE_TYPE.DOCUMENT)try{if(window.DOMParser){var r=new DOMParser;this.data=r.parseFromString(t.responseText,"text/xml")}else{var i=document.createElement("div");i.innerHTML=t.responseText,this.data=i}this.isXml=!0}catch(t){return void this.abort("Error trying to parse loaded xml:",t)}else this.data=t.response||t.responseText;this.complete()},n.prototype._determineCrossOrigin=function(t,e){if(0===t.indexOf("data:"))return"";e=e||window.location,h||(h=document.createElement("a")),h.href=t,t=a(h.href,{strictMode:!0});var r=!t.port&&""===e.port||t.port===e.port,n=t.protocol?t.protocol+":":"";return t.host===e.hostname&&r&&n===e.protocol?"":"anonymous"},n.prototype._determineXhrType=function(){return n._xhrTypeMap[this._getExtension()]||n.XHR_RESPONSE_TYPE.TEXT},n.prototype._determineLoadType=function(){return n._loadTypeMap[this._getExtension()]||n.LOAD_TYPE.XHR},n.prototype._getExtension=function(){var t=this.url,e="";if(this.isDataUrl){var r=t.indexOf("/");e=t.substring(r+1,t.indexOf(";",r))}else{var n=t.indexOf("?");n!==-1&&(t=t.substring(0,n)),e=t.substring(t.lastIndexOf(".")+1)}return e.toLowerCase()},n.prototype._getMimeFromXhrType=function(t){switch(t){case n.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case n.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case n.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case n.XHR_RESPONSE_TYPE.JSON:return"application/json";case n.XHR_RESPONSE_TYPE.DEFAULT:case n.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},n.LOAD_TYPE={XHR:1,IMAGE:2,AUDIO:3,VIDEO:4},n.XHR_RESPONSE_TYPE={DEFAULT:"text",BUFFER:"arraybuffer",BLOB:"blob",DOCUMENT:"document",JSON:"json",TEXT:"text"},n._loadTypeMap={gif:n.LOAD_TYPE.IMAGE,png:n.LOAD_TYPE.IMAGE,bmp:n.LOAD_TYPE.IMAGE,jpg:n.LOAD_TYPE.IMAGE,jpeg:n.LOAD_TYPE.IMAGE,tif:n.LOAD_TYPE.IMAGE,tiff:n.LOAD_TYPE.IMAGE,webp:n.LOAD_TYPE.IMAGE,tga:n.LOAD_TYPE.IMAGE,"svg+xml":n.LOAD_TYPE.IMAGE},n._xhrTypeMap={xhtml:n.XHR_RESPONSE_TYPE.DOCUMENT,html:n.XHR_RESPONSE_TYPE.DOCUMENT,htm:n.XHR_RESPONSE_TYPE.DOCUMENT,xml:n.XHR_RESPONSE_TYPE.DOCUMENT,tmx:n.XHR_RESPONSE_TYPE.DOCUMENT,tsx:n.XHR_RESPONSE_TYPE.DOCUMENT,svg:n.XHR_RESPONSE_TYPE.DOCUMENT,gif:n.XHR_RESPONSE_TYPE.BLOB,png:n.XHR_RESPONSE_TYPE.BLOB,bmp:n.XHR_RESPONSE_TYPE.BLOB,jpg:n.XHR_RESPONSE_TYPE.BLOB,jpeg:n.XHR_RESPONSE_TYPE.BLOB,tif:n.XHR_RESPONSE_TYPE.BLOB,tiff:n.XHR_RESPONSE_TYPE.BLOB,webp:n.XHR_RESPONSE_TYPE.BLOB,tga:n.XHR_RESPONSE_TYPE.BLOB,json:n.XHR_RESPONSE_TYPE.JSON,text:n.XHR_RESPONSE_TYPE.TEXT,txt:n.XHR_RESPONSE_TYPE.TEXT},n.setExtensionLoadType=function(t,e){o(n._loadTypeMap,t,e)},n.setExtensionXhrType=function(t,e){o(n._xhrTypeMap,t,e)}},{eventemitter3:3,"parse-uri":30}],33:[function(t,e,r){"use strict";function n(){}function i(t,e,r){var n=0,i=t.length;!function o(s){return s||n===i?void(r&&r(s)):void e(t[n++],o)}()}function o(t){return function(){if(null===t)throw new Error("Callback was already called.");var e=t;t=null,e.apply(this,arguments)}}function s(t,e){function r(t,e,r){if(null!=r&&"function"!=typeof r)throw new Error("task callback must be a function");if(a.started=!0,null==t&&a.idle())return void setTimeout(function(){a.drain()},1);var i={data:t,callback:"function"==typeof r?r:n};e?a._tasks.unshift(i):a._tasks.push(i),setTimeout(function(){a.process()},1)}function i(t){return function(){s-=1,t.callback.apply(t,arguments),null!=arguments[0]&&a.error(arguments[0],t.data),s<=a.concurrency-a.buffer&&a.unsaturated(),a.idle()&&a.drain(),a.process()}}if(null==e)e=1;else if(0===e)throw new Error("Concurrency must not be zero");var s=0,a={_tasks:[],concurrency:e,saturated:n,unsaturated:n,buffer:e/4,empty:n,drain:n,error:n,started:!1,paused:!1,push:function(t,e){r(t,!1,e)},kill:function(){a.drain=n,a._tasks=[]},unshift:function(t,e){r(t,!0,e)},process:function(){for(;!a.paused&&s<a.concurrency&&a._tasks.length;){var e=a._tasks.shift();0===a._tasks.length&&a.empty(),s+=1,s===a.concurrency&&a.saturated(),t(e.data,o(i(e)))}},length:function(){return a._tasks.length},running:function(){return s},idle:function(){return a._tasks.length+s===0},pause:function(){a.paused!==!0&&(a.paused=!0)},resume:function(){if(a.paused!==!1){a.paused=!1;for(var t=1;t<=a.concurrency;t++)a.process()}}};return a}e.exports={eachSeries:i,queue:s}},{}],34:[function(t,e,r){"use strict";e.exports={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encodeBinary:function(t){for(var e,r="",n=new Array(4),i=0,o=0,s=0;i<t.length;){for(e=new Array(3),o=0;o<e.length;o++)i<t.length?e[o]=255&t.charCodeAt(i++):e[o]=0;switch(n[0]=e[0]>>2,n[1]=(3&e[0])<<4|e[1]>>4,n[2]=(15&e[1])<<2|e[2]>>6,n[3]=63&e[2],s=i-(t.length-1)){case 2:n[3]=64,n[2]=64;break;case 1:n[3]=64}for(o=0;o<n.length;o++)r+=this._keyStr.charAt(n[o])}return r}}},{}],35:[function(t,e,r){"use strict";e.exports=t("./Loader"),e.exports.Resource=t("./Resource"),e.exports.middleware={caching:{memory:t("./middlewares/caching/memory")},parsing:{blob:t("./middlewares/parsing/blob")}},e.exports.async=t("./async")},{"./Loader":31,"./Resource":32,"./async":33,"./middlewares/caching/memory":36,"./middlewares/parsing/blob":37}],36:[function(t,e,r){"use strict";var n={};e.exports=function(){return function(t,e){n[t.url]?(t.data=n[t.url],t.complete()):t.once("complete",function(){n[this.url]=this.data}),e()}}},{}],37:[function(t,e,r){"use strict";var n=t("../../Resource"),i=t("../../b64"),o=window.URL||window.webkitURL;e.exports=function(){return function(t,e){if(!t.data)return void e();if(t.xhr&&t.xhrType===n.XHR_RESPONSE_TYPE.BLOB)if(window.Blob&&"string"!=typeof t.data){if(0===t.data.type.indexOf("image")){var r=o.createObjectURL(t.data);return t.blob=t.data,t.data=new Image,t.data.src=r,t.isImage=!0,void(t.data.onload=function(){o.revokeObjectURL(r),t.data.onload=null,e()})}}else{var s=t.xhr.getResponseHeader("content-type");if(s&&0===s.indexOf("image"))return t.data=new Image,t.data.src="data:"+s+";base64,"+i.encodeBinary(t.xhr.responseText),t.isImage=!0,void(t.data.onload=function(){t.data.onload=null,e()})}e()}}},{"../../Resource":32,"../../b64":34}],38:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var s=t("../core"),a=i(s),u=t("ismobilejs"),h=n(u),l=t("./accessibleTarget"),c=n(l);Object.assign(a.DisplayObject.prototype,c.default);var f=9,d=100,p=0,v=0,y=2,g=1,m=-1e3,_=-1e3,b=2,x=function(){function t(e){o(this,t),!h.default.tablet&&!h.default.phone||navigator.isCocoonJS||this.createTouchHook();var r=document.createElement("div");r.style.width=d+"px",r.style.height=d+"px",r.style.position="absolute",r.style.top=p+"px",r.style.left=v+"px",r.style.zIndex=y,this.div=r,this.pool=[],this.renderId=0,this.debug=!1,this.renderer=e,this.children=[],this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this.isActive=!1,this.isMobileAccessabillity=!1,window.addEventListener("keydown",this._onKeyDown,!1)}return t.prototype.createTouchHook=function(){var t=this,e=document.createElement("button");e.style.width=g+"px",e.style.height=g+"px",e.style.position="absolute",e.style.top=m+"px",e.style.left=_+"px",e.style.zIndex=b,e.style.backgroundColor="#FF0000",e.title="HOOK DIV",e.addEventListener("focus",function(){t.isMobileAccessabillity=!0,t.activate(),document.body.removeChild(e)}),document.body.appendChild(e)},t.prototype.activate=function(){this.isActive||(this.isActive=!0,window.document.addEventListener("mousemove",this._onMouseMove,!0),window.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),this.renderer.view.parentNode&&this.renderer.view.parentNode.appendChild(this.div))},t.prototype.deactivate=function(){this.isActive&&!this.isMobileAccessabillity&&(this.isActive=!1,window.document.removeEventListener("mousemove",this._onMouseMove),window.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),this.div.parentNode&&this.div.parentNode.removeChild(this.div))},t.prototype.updateAccessibleObjects=function(t){if(t.visible){t.accessible&&t.interactive&&(t._accessibleActive||this.addChild(t),t.renderId=this.renderId);for(var e=t.children,r=e.length-1;r>=0;r--)this.updateAccessibleObjects(e[r])}},t.prototype.update=function(){if(this.renderer.renderingToScreen){this.updateAccessibleObjects(this.renderer._lastObjectRendered);var t=this.renderer.view.getBoundingClientRect(),e=t.width/this.renderer.width,r=t.height/this.renderer.height,n=this.div;n.style.left=t.left+"px",n.style.top=t.top+"px",n.style.width=this.renderer.width+"px",n.style.height=this.renderer.height+"px";
	for(var i=0;i<this.children.length;i++){var o=this.children[i];if(o.renderId!==this.renderId)o._accessibleActive=!1,a.utils.removeItems(this.children,i,1),this.div.removeChild(o._accessibleDiv),this.pool.push(o._accessibleDiv),o._accessibleDiv=null,i--,0===this.children.length&&this.deactivate();else{n=o._accessibleDiv;var s=o.hitArea,u=o.worldTransform;o.hitArea?(n.style.left=(u.tx+s.x*u.a)*e+"px",n.style.top=(u.ty+s.y*u.d)*r+"px",n.style.width=s.width*u.a*e+"px",n.style.height=s.height*u.d*r+"px"):(s=o.getBounds(),this.capHitArea(s),n.style.left=s.x*e+"px",n.style.top=s.y*r+"px",n.style.width=s.width*e+"px",n.style.height=s.height*r+"px")}}this.renderId++}},t.prototype.capHitArea=function(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0),t.x+t.width>this.renderer.width&&(t.width=this.renderer.width-t.x),t.y+t.height>this.renderer.height&&(t.height=this.renderer.height-t.y)},t.prototype.addChild=function(t){var e=this.pool.pop();e||(e=document.createElement("button"),e.style.width=d+"px",e.style.height=d+"px",e.style.backgroundColor=this.debug?"rgba(255,0,0,0.5)":"transparent",e.style.position="absolute",e.style.zIndex=y,e.style.borderStyle="none",e.addEventListener("click",this._onClick.bind(this)),e.addEventListener("focus",this._onFocus.bind(this)),e.addEventListener("focusout",this._onFocusOut.bind(this))),t.accessibleTitle?e.title=t.accessibleTitle:t.accessibleTitle||t.accessibleHint||(e.title="displayObject "+this.tabIndex),t.accessibleHint&&e.setAttribute("aria-label",t.accessibleHint),t._accessibleActive=!0,t._accessibleDiv=e,e.displayObject=t,this.children.push(t),this.div.appendChild(t._accessibleDiv),t._accessibleDiv.tabIndex=t.tabIndex},t.prototype._onClick=function(t){var e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,"click",e.eventData)},t.prototype._onFocus=function(t){var e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,"mouseover",e.eventData)},t.prototype._onFocusOut=function(t){var e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,"mouseout",e.eventData)},t.prototype._onKeyDown=function(t){t.keyCode===f&&this.activate()},t.prototype._onMouseMove=function(){this.deactivate()},t.prototype.destroy=function(){this.div=null;for(var t=0;t<this.children.length;t++)this.children[t].div=null;window.document.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},t}();r.default=x,a.WebGLRenderer.registerPlugin("accessibility",x),a.CanvasRenderer.registerPlugin("accessibility",x)},{"../core":61,"./accessibleTarget":39,ismobilejs:4}],39:[function(t,e,r){"use strict";r.__esModule=!0,r.default={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:!1}},{}],40:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./accessibleTarget");Object.defineProperty(r,"accessibleTarget",{enumerable:!0,get:function(){return n(i).default}});var o=t("./AccessibilityManager");Object.defineProperty(r,"AccessibilityManager",{enumerable:!0,get:function(){return n(o).default}})},{"./AccessibilityManager":38,"./accessibleTarget":39}],41:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){if(t instanceof Array){if("precision"!==t[0].substring(0,9)){var e=t.slice(0);return e.unshift("precision "+u.PRECISION.DEFAULT+" float;"),e}}else if("precision"!==t.substring(0,9))return"precision "+u.PRECISION.DEFAULT+" float;\n"+t;return t}r.__esModule=!0;var a=t("pixi-gl-core"),u=t("./const"),h=function(t){function e(r,o,a){return n(this,e),i(this,t.call(this,r,s(o),s(a)))}return o(e,t),e}(a.GLShader);r.default=h},{"./const":42,"pixi-gl-core":12}],42:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0,r.SPRITE_MAX_TEXTURES=r.SPRITE_BATCH_SIZE=r.TEXT_GRADIENT=r.TRANSFORM_MODE=r.PRECISION=r.SHAPES=r.SVG_SIZE=r.DATA_URI=r.URL_FILE_EXTENSION=r.DEFAULT_RENDER_OPTIONS=r.FILTER_RESOLUTION=r.RESOLUTION=r.RETINA_PREFIX=r.MIPMAP_TEXTURES=r.GC_MODES=r.WRAP_MODES=r.SCALE_MODES=r.DRAW_MODES=r.BLEND_MODES=r.RENDERER_TYPE=r.TARGET_FPMS=r.DEG_TO_RAD=r.RAD_TO_DEG=r.PI_2=r.VERSION=void 0;var i=t("./utils/maxRecommendedTextures"),o=n(i);r.VERSION="4.1.1",r.PI_2=2*Math.PI,r.RAD_TO_DEG=180/Math.PI,r.DEG_TO_RAD=Math.PI/180,r.TARGET_FPMS=.06,r.RENDERER_TYPE={UNKNOWN:0,WEBGL:1,CANVAS:2},r.BLEND_MODES={NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},r.DRAW_MODES={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},r.SCALE_MODES={DEFAULT:0,LINEAR:0,NEAREST:1},r.WRAP_MODES={DEFAULT:0,CLAMP:0,REPEAT:1,MIRRORED_REPEAT:2},r.GC_MODES={DEFAULT:0,AUTO:0,MANUAL:1},r.MIPMAP_TEXTURES=!0,r.RETINA_PREFIX=/@(.+)x/,r.RESOLUTION=1,r.FILTER_RESOLUTION=1,r.DEFAULT_RENDER_OPTIONS={view:null,antialias:!1,forceFXAA:!1,autoResize:!1,transparent:!1,backgroundColor:0,clearBeforeRender:!0,preserveDrawingBuffer:!1,roundPixels:!1},r.URL_FILE_EXTENSION=/\.(\w{3,4})(?:$|\?|#)/i,r.DATA_URI=/^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i,r.SVG_SIZE=/<svg[^>]*(?:\s(width|height)="(\d*(?:\.\d+)?)(?:px)?")[^>]*(?:\s(width|height)="(\d*(?:\.\d+)?)(?:px)?")[^>]*>/i,r.SHAPES={POLY:0,RECT:1,CIRC:2,ELIP:3,RREC:4},r.PRECISION={DEFAULT:"mediump",LOW:"lowp",MEDIUM:"mediump",HIGH:"highp"},r.TRANSFORM_MODE={DEFAULT:0,STATIC:0,DYNAMIC:1},r.TEXT_GRADIENT={LINEAR_VERTICAL:0,LINEAR_HORIZONTAL:1},r.SPRITE_BATCH_SIZE=4096,r.SPRITE_MAX_TEXTURES=(0,o.default)(32)},{"./utils/maxRecommendedTextures":116}],43:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../math"),o=function(){function t(){n(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-(1/0),this.maxY=-(1/0),this.rect=null}return t.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},t.prototype.clear=function(){this.updateID++,this.minX=1/0,this.minY=1/0,this.maxX=-(1/0),this.maxY=-(1/0)},t.prototype.getRectangle=function(t){return this.minX>this.maxX||this.minY>this.maxY?i.Rectangle.EMPTY:(t=t||new i.Rectangle(0,0,1,1),t.x=this.minX,t.y=this.minY,t.width=this.maxX-this.minX,t.height=this.maxY-this.minY,t)},t.prototype.addPoint=function(t){this.minX=Math.min(this.minX,t.x),this.maxX=Math.max(this.maxX,t.x),this.minY=Math.min(this.minY,t.y),this.maxY=Math.max(this.maxY,t.y)},t.prototype.addQuad=function(t){var e=this.minX,r=this.minY,n=this.maxX,i=this.maxY,o=t[0],s=t[1];e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,o=t[2],s=t[3],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,o=t[4],s=t[5],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,o=t[6],s=t[7],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,this.minX=e,this.minY=r,this.maxX=n,this.maxY=i},t.prototype.addFrame=function(t,e,r,n,i){var o=t.worldTransform,s=o.a,a=o.b,u=o.c,h=o.d,l=o.tx,c=o.ty,f=this.minX,d=this.minY,p=this.maxX,v=this.maxY,y=s*e+u*r+l,g=a*e+h*r+c;f=y<f?y:f,d=g<d?g:d,p=y>p?y:p,v=g>v?g:v,y=s*n+u*r+l,g=a*n+h*r+c,f=y<f?y:f,d=g<d?g:d,p=y>p?y:p,v=g>v?g:v,y=s*e+u*i+l,g=a*e+h*i+c,f=y<f?y:f,d=g<d?g:d,p=y>p?y:p,v=g>v?g:v,y=s*n+u*i+l,g=a*n+h*i+c,f=y<f?y:f,d=g<d?g:d,p=y>p?y:p,v=g>v?g:v,this.minX=f,this.minY=d,this.maxX=p,this.maxY=v},t.prototype.addVertices=function(t,e,r,n){for(var i=t.worldTransform,o=i.a,s=i.b,a=i.c,u=i.d,h=i.tx,l=i.ty,c=this.minX,f=this.minY,d=this.maxX,p=this.maxY,v=r;v<n;v+=2){var y=e[v],g=e[v+1],m=o*y+a*g+h,_=u*g+s*y+l;c=m<c?m:c,f=_<f?_:f,d=m>d?m:d,p=_>p?_:p}this.minX=c,this.minY=f,this.maxX=d,this.maxY=p},t.prototype.addBounds=function(t){var e=this.minX,r=this.minY,n=this.maxX,i=this.maxY;this.minX=t.minX<e?t.minX:e,this.minY=t.minY<r?t.minY:r,this.maxX=t.maxX>n?t.maxX:n,this.maxY=t.maxY>i?t.maxY:i},t.prototype.addBoundsMask=function(t,e){var r=t.minX>e.minX?t.minX:e.minX,n=t.minY>e.minY?t.minY:e.minY,i=t.maxX<e.maxX?t.maxX:e.maxX,o=t.maxY<e.maxY?t.maxY:e.maxY;if(r<=i&&n<=o){var s=this.minX,a=this.minY,u=this.maxX,h=this.maxY;this.minX=r<s?r:s,this.minY=n<a?n:a,this.maxX=i>u?i:u,this.maxY=o>h?o:h}},t.prototype.addBoundsArea=function(t,e){var r=t.minX>e.x?t.minX:e.x,n=t.minY>e.y?t.minY:e.y,i=t.maxX<e.x+e.width?t.maxX:e.x+e.width,o=t.maxY<e.y+e.height?t.maxY:e.y+e.height;if(r<=i&&n<=o){var s=this.minX,a=this.minY,u=this.maxX,h=this.maxY;this.minX=r<s?r:s,this.minY=n<a?n:a,this.maxX=i>u?i:u,this.maxY=o>h?o:h}},t}();r.default=o},{"../math":66}],44:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../utils"),h=t("./DisplayObject"),l=n(h),c=function(t){function e(){i(this,e);var r=o(this,t.call(this));return r.children=[],r}return s(e,t),e.prototype.onChildrenChange=function(){},e.prototype.addChild=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];for(var n=0;n<e.length;++n){var i=e[n];i.parent&&i.parent.removeChild(i),i.parent=this,this.transform._parentID=-1,this._boundsID++,this.children.push(i),this.onChildrenChange(this.children.length-1),i.emit("added",this)}return e[0]},e.prototype.addChildAt=function(t,e){if(e<0||e>this.children.length)throw new Error(t+"addChildAt: The index "+e+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.children.splice(e,0,t),this.onChildrenChange(e),t.emit("added",this),t},e.prototype.swapChildren=function(t,e){if(t!==e){var r=this.getChildIndex(t),n=this.getChildIndex(e);this.children[r]=e,this.children[n]=t,this.onChildrenChange(r<n?r:n)}},e.prototype.getChildIndex=function(t){var e=this.children.indexOf(t);if(e===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return e},e.prototype.setChildIndex=function(t,e){if(e<0||e>=this.children.length)throw new Error("The supplied index is out of bounds");var r=this.getChildIndex(t);(0,u.removeItems)(this.children,r,1),this.children.splice(e,0,t),this.onChildrenChange(e)},e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},e.prototype.removeChild=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];for(var n=0;n<e.length;++n){var i=e[n],o=this.children.indexOf(i);o!==-1&&(i.parent=null,(0,u.removeItems)(this.children,o,1),this.onChildrenChange(o),i.emit("removed",this))}return e[0]},e.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return e.parent=null,(0,u.removeItems)(this.children,t,1),this.onChildrenChange(t),e.emit("removed",this),e},e.prototype.removeChildren=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1],r=t,n="number"==typeof e?e:this.children.length,i=n-r,o=void 0;if(i>0&&i<=n){o=this.children.splice(r,i);for(var s=0;s<o.length;++s)o[s].parent=null;this.onChildrenChange(t);for(var a=0;a<o.length;++a)o[a].emit("removed",this);return o}if(0===i&&0===this.children.length)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,e=this.children.length;t<e;++t){var r=this.children[t];r.visible&&r.updateTransform()}},e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var e=this.children[t];e.visible&&e.renderable&&(e.calculateBounds(),e._mask?(e._mask.calculateBounds(),this._bounds.addBoundsMask(e._bounds,e._mask._bounds)):e.filterArea?this._bounds.addBoundsArea(e._bounds,e.filterArea):this._bounds.addBounds(e._bounds))}this._lastBoundsID=this._boundsID},e.prototype._calculateBounds=function(){},e.prototype.renderWebGL=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable)if(this._mask||this._filters)this.renderAdvancedWebGL(t);else{this._renderWebGL(t);for(var e=0,r=this.children.length;e<r;++e)this.children[e].renderWebGL(t)}},e.prototype.renderAdvancedWebGL=function(t){t.currentRenderer.flush();var e=this._filters,r=this._mask;if(e){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var n=0;n<e.length;n++)e[n].enabled&&this._enabledFilters.push(e[n]);this._enabledFilters.length&&t.filterManager.pushFilter(this,this._enabledFilters)}r&&t.maskManager.pushMask(this,this._mask),t.currentRenderer.start(),this._renderWebGL(t);for(var i=0,o=this.children.length;i<o;i++)this.children[i].renderWebGL(t);t.currentRenderer.flush(),r&&t.maskManager.popMask(this,this._mask),e&&this._enabledFilters&&this._enabledFilters.length&&t.filterManager.popFilter(),t.currentRenderer.start()},e.prototype._renderWebGL=function(t){},e.prototype._renderCanvas=function(t){},e.prototype.renderCanvas=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable){this._mask&&t.maskManager.pushMask(this._mask),this._renderCanvas(t);for(var e=0,r=this.children.length;e<r;++e)this.children[e].renderCanvas(t);this._mask&&t.maskManager.popMask(t)}},e.prototype.destroy=function(e){t.prototype.destroy.call(this);var r="boolean"==typeof e?e:e&&e.children,n=this.removeChildren(0,this.children.length);if(r)for(var i=0;i<n.length;++i)n[i].destroy(e)},a(e,[{key:"width",get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var e=this.getLocalBounds().width;0!==e?this.scale.x=t/e:this.scale.x=1,this._width=t}},{key:"height",get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var e=this.getLocalBounds().height;0!==e?this.scale.y=t/e:this.scale.y=1,this._height=t}}]),e}(l.default);r.default=c,c.prototype.containerUpdateTransform=c.prototype.updateTransform},{"../utils":115,"./DisplayObject":45}],45:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("eventemitter3"),h=n(u),l=t("../const"),c=t("./TransformStatic"),f=n(c),d=t("./Transform"),p=n(d),v=t("./Bounds"),y=n(v),g=t("../math"),m=function(t){function e(){i(this,e);var r=o(this,t.call(this)),n=l.TRANSFORM_MODE.DEFAULT===l.TRANSFORM_MODE.STATIC?f.default:p.default;return r.tempDisplayObjectParent=null,r.transform=new n,r.alpha=1,r.visible=!0,r.renderable=!0,r.parent=null,r.worldAlpha=1,r.filterArea=null,r._filters=null,r._enabledFilters=null,r._bounds=new y.default,r._boundsID=0,r._lastBoundsID=-1,r._boundsRect=null,r._localBoundsRect=null,r._mask=null,r}return s(e,t),e.prototype.updateTransform=function(){this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha,this._bounds.updateID++},e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},e.prototype.getBounds=function(t,e){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._boundsID!==this._lastBoundsID&&this.calculateBounds(),e||(this._boundsRect||(this._boundsRect=new g.Rectangle),e=this._boundsRect),this._bounds.getRectangle(e)},e.prototype.getLocalBounds=function(t){var e=this.transform,r=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform,t||(this._localBoundsRect||(this._localBoundsRect=new g.Rectangle),t=this._localBoundsRect);var n=this.getBounds(!1,t);return this.parent=r,this.transform=e,n},e.prototype.toGlobal=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,e)},e.prototype.toLocal=function(t,e,r,n){return e&&(t=e.toGlobal(t,r,n)),n||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,r)},e.prototype.renderWebGL=function(t){},e.prototype.renderCanvas=function(t){},e.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t},e.prototype.setTransform=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0;return this.position.x=t,this.position.y=e,this.scale.x=r?r:1,this.scale.y=n?n:1,this.rotation=i,this.skew.x=o,this.skew.y=s,this.pivot.x=a,this.pivot.y=u,this},e.prototype.destroy=function(){this.removeAllListeners(),this.parent&&this.parent.removeChild(this),this.transform=null,this.parent=null,this._bounds=null,this._currentBounds=null,this._mask=null,this.filterArea=null,this.interactive=!1,this.interactiveChildren=!1},a(e,[{key:"_tempDisplayObjectParent",get:function(){return null===this.tempDisplayObjectParent&&(this.tempDisplayObjectParent=new e),this.tempDisplayObjectParent}},{key:"x",get:function(){return this.position.x},set:function(t){this.transform.position.x=t}},{key:"y",get:function(){return this.position.y},set:function(t){this.transform.position.y=t}},{key:"worldTransform",get:function(){return this.transform.worldTransform}},{key:"localTransform",get:function(){return this.transform.localTransform}},{key:"position",get:function(){return this.transform.position},set:function(t){this.transform.position.copy(t)}},{key:"scale",get:function(){return this.transform.scale},set:function(t){this.transform.scale.copy(t)}},{key:"pivot",get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copy(t)}},{key:"skew",get:function(){return this.transform.skew},set:function(t){this.transform.skew.copy(t)}},{key:"rotation",get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t}},{key:"worldVisible",get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0}},{key:"mask",get:function(){return this._mask},set:function(t){this._mask&&(this._mask.renderable=!0),this._mask=t,this._mask&&(this._mask.renderable=!1)}},{key:"filters",get:function(){return this._filters&&this._filters.slice()},set:function(t){this._filters=t&&t.slice()}}]),e}(h.default);r.default=m,m.prototype.displayObjectUpdateTransform=m.prototype.updateTransform},{"../const":42,"../math":66,"./Bounds":43,"./Transform":46,"./TransformStatic":48,eventemitter3:3}],46:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../math"),h=t("./TransformBase"),l=n(h),c=function(t){function e(){i(this,e);var r=o(this,t.call(this));return r.position=new u.Point(0,0),r.scale=new u.Point(1,1),r.skew=new u.ObservablePoint(r.updateSkew,r,0,0),r.pivot=new u.Point(0,0),r._rotation=0,r._sr=Math.sin(0),r._cr=Math.cos(0),r._cy=Math.cos(0),r._sy=Math.sin(0),r._nsx=Math.sin(0),r._cx=Math.cos(0),r}return s(e,t),e.prototype.updateSkew=function(){this._cy=Math.cos(this.skew.y),this._sy=Math.sin(this.skew.y),this._nsx=Math.sin(this.skew.x),this._cx=Math.cos(this.skew.x)},e.prototype.updateLocalTransform=function(){var t=this.localTransform,e=this._cr*this.scale.x,r=this._sr*this.scale.x,n=-this._sr*this.scale.y,i=this._cr*this.scale.y;t.a=this._cy*e+this._sy*n,t.b=this._cy*r+this._sy*i,t.c=this._nsx*e+this._cx*n,t.d=this._nsx*r+this._cx*i},e.prototype.updateTransform=function(t){var e=t.worldTransform,r=this.worldTransform,n=this.localTransform,i=this._cr*this.scale.x,o=this._sr*this.scale.x,s=-this._sr*this.scale.y,a=this._cr*this.scale.y;n.a=this._cy*i+this._sy*s,n.b=this._cy*o+this._sy*a,n.c=this._nsx*i+this._cx*s,n.d=this._nsx*o+this._cx*a,n.tx=this.position.x-(this.pivot.x*n.a+this.pivot.y*n.c),n.ty=this.position.y-(this.pivot.x*n.b+this.pivot.y*n.d),r.a=n.a*e.a+n.b*e.c,r.b=n.a*e.b+n.b*e.d,r.c=n.c*e.a+n.d*e.c,r.d=n.c*e.b+n.d*e.d,r.tx=n.tx*e.a+n.ty*e.c+e.tx,r.ty=n.tx*e.b+n.ty*e.d+e.ty,this._worldID++},e.prototype.setFromMatrix=function(t){t.decompose(this)},a(e,[{key:"rotation",get:function(){return this._rotation},set:function(t){this._rotation=t,this._sr=Math.sin(t),this._cr=Math.cos(t)}}]),e}(l.default);r.default=c},{"../math":66,"./TransformBase":47}],47:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../math"),o=function(){function t(){n(this,t),this.worldTransform=new i.Matrix,this.localTransform=new i.Matrix,this._worldID=0,this._parentID=0}return t.prototype.updateLocalTransform=function(){},t.prototype.updateTransform=function(t){var e=t.worldTransform,r=this.worldTransform,n=this.localTransform;r.a=n.a*e.a+n.b*e.c,r.b=n.a*e.b+n.b*e.d,r.c=n.c*e.a+n.d*e.c,r.d=n.c*e.b+n.d*e.d,r.tx=n.tx*e.a+n.ty*e.c+e.tx,r.ty=n.tx*e.b+n.ty*e.d+e.ty,this._worldID++},t}();r.default=o,o.prototype.updateWorldTransform=o.prototype.updateTransform,o.IDENTITY=new o},{"../math":66}],48:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../math"),h=t("./TransformBase"),l=n(h),c=function(t){function e(){i(this,e);var r=o(this,t.call(this));return r.position=new u.ObservablePoint(r.onChange,r,0,0),r.scale=new u.ObservablePoint(r.onChange,r,1,1),r.pivot=new u.ObservablePoint(r.onChange,r,0,0),r.skew=new u.ObservablePoint(r.updateSkew,r,0,0),r._rotation=0,r._sr=Math.sin(0),r._cr=Math.cos(0),r._cy=Math.cos(0),r._sy=Math.sin(0),r._nsx=Math.sin(0),r._cx=Math.cos(0),r._localID=0,r._currentLocalID=0,r}return s(e,t),e.prototype.onChange=function(){this._localID++},e.prototype.updateSkew=function(){this._cy=Math.cos(this.skew._y),this._sy=Math.sin(this.skew._y),this._nsx=Math.sin(this.skew._x),this._cx=Math.cos(this.skew._x),this._localID++},e.prototype.updateLocalTransform=function(){var t=this.localTransform;if(this._localID!==this._currentLocalID){var e=this._cr*this.scale._x,r=this._sr*this.scale._x,n=-this._sr*this.scale._y,i=this._cr*this.scale._y;t.a=this._cy*e+this._sy*n,t.b=this._cy*r+this._sy*i,t.c=this._nsx*e+this._cx*n,t.d=this._nsx*r+this._cx*i,t.tx=this.position._x-(this.pivot._x*t.a+this.pivot._y*t.c),t.ty=this.position._y-(this.pivot._x*t.b+this.pivot._y*t.d),this._currentLocalID=this._localID,this._parentID=-1}},e.prototype.updateTransform=function(t){var e=t.worldTransform,r=this.worldTransform,n=this.localTransform;if(this._localID!==this._currentLocalID){var i=this._cr*this.scale._x,o=this._sr*this.scale._x,s=-this._sr*this.scale._y,a=this._cr*this.scale._y;n.a=this._cy*i+this._sy*s,n.b=this._cy*o+this._sy*a,n.c=this._nsx*i+this._cx*s,n.d=this._nsx*o+this._cx*a,n.tx=this.position._x-(this.pivot._x*n.a+this.pivot._y*n.c),n.ty=this.position._y-(this.pivot._x*n.b+this.pivot._y*n.d),this._currentLocalID=this._localID,this._parentID=-1}this._parentID!==t._worldID&&(r.a=n.a*e.a+n.b*e.c,r.b=n.a*e.b+n.b*e.d,r.c=n.c*e.a+n.d*e.c,r.d=n.c*e.b+n.d*e.d,r.tx=n.tx*e.a+n.ty*e.c+e.tx,r.ty=n.tx*e.b+n.ty*e.d+e.ty,this._parentID=t._worldID,this._worldID++)},e.prototype.setFromMatrix=function(t){t.decompose(this),this._localID++},a(e,[{key:"rotation",get:function(){return this._rotation},set:function(t){this._rotation=t,this._sr=Math.sin(t),this._cr=Math.cos(t),this._localID++}}]),e}(l.default);r.default=c},{"../math":66,"./TransformBase":47}],49:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../display/Container"),u=n(a),h=t("../textures/RenderTexture"),l=n(h),c=t("../textures/Texture"),f=n(c),d=t("./GraphicsData"),p=n(d),v=t("../sprites/Sprite"),y=n(v),g=t("../math"),m=t("../utils"),_=t("../const"),b=t("../display/Bounds"),x=n(b),T=t("./utils/bezierCurveTo"),w=n(T),E=t("../renderers/canvas/CanvasRenderer"),S=n(E),O=void 0,M=new g.Matrix,P=new g.Point,C=new Float32Array(4),R=new Float32Array(4),D=function(t){function e(){i(this,e);var r=o(this,t.call(this));return r.fillAlpha=1,r.lineWidth=0,r.lineColor=0,r.graphicsData=[],r.tint=16777215,r._prevTint=16777215,r.blendMode=_.BLEND_MODES.NORMAL,r.currentPath=null,r._webGL={},r.isMask=!1,r.boundsPadding=0,r._localBounds=new x.default,r.dirty=0,r.fastRectDirty=-1,r.clearDirty=0,r.boundsDirty=-1,r.cachedSpriteDirty=!1,r._spriteRect=null,r._fastRect=!1,r}return s(e,t),e.prototype.clone=function t(){var t=new e;t.renderable=this.renderable,t.fillAlpha=this.fillAlpha,t.lineWidth=this.lineWidth,t.lineColor=this.lineColor,t.tint=this.tint,t.blendMode=this.blendMode,t.isMask=this.isMask,t.boundsPadding=this.boundsPadding,t.dirty=0,t.cachedSpriteDirty=this.cachedSpriteDirty;for(var r=0;r<this.graphicsData.length;++r)t.graphicsData.push(this.graphicsData[r].clone());return t.currentPath=t.graphicsData[t.graphicsData.length-1],t.updateLocalBounds(),t},e.prototype.lineStyle=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(this.lineWidth=t,this.lineColor=e,this.lineAlpha=r,this.currentPath)if(this.currentPath.shape.points.length){var n=new g.Polygon(this.currentPath.shape.points.slice(-2));n.closed=!1,this.drawShape(n)}else this.currentPath.lineWidth=this.lineWidth,this.currentPath.lineColor=this.lineColor,this.currentPath.lineAlpha=this.lineAlpha;return this},e.prototype.moveTo=function(t,e){var r=new g.Polygon([t,e]);return r.closed=!1,this.drawShape(r),this},e.prototype.lineTo=function(t,e){return this.currentPath.shape.points.push(t,e),this.dirty++,this},e.prototype.quadraticCurveTo=function(t,e,r,n){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);var i=20,o=this.currentPath.shape.points,s=0,a=0;0===o.length&&this.moveTo(0,0);for(var u=o[o.length-2],h=o[o.length-1],l=1;l<=i;++l){var c=l/i;s=u+(t-u)*c,a=h+(e-h)*c,o.push(s+(t+(r-t)*c-s)*c,a+(e+(n-e)*c-a)*c)}return this.dirty++,this},e.prototype.bezierCurveTo=function(t,e,r,n,i,o){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);var s=this.currentPath.shape.points,a=s[s.length-2],u=s[s.length-1];return s.length-=2,(0,w.default)(a,u,t,e,r,n,i,o,s),this.dirty++,this},e.prototype.arcTo=function(t,e,r,n,i){this.currentPath?0===this.currentPath.shape.points.length&&this.currentPath.shape.points.push(t,e):this.moveTo(t,e);var o=this.currentPath.shape.points,s=o[o.length-2],a=o[o.length-1],u=a-e,h=s-t,l=n-e,c=r-t,f=Math.abs(u*c-h*l);if(f<1e-8||0===i)o[o.length-2]===t&&o[o.length-1]===e||o.push(t,e);else{var d=u*u+h*h,p=l*l+c*c,v=u*l+h*c,y=i*Math.sqrt(d)/f,g=i*Math.sqrt(p)/f,m=y*v/d,_=g*v/p,b=y*c+g*h,x=y*l+g*u,T=h*(g+m),w=u*(g+m),E=c*(y+_),S=l*(y+_),O=Math.atan2(w-x,T-b),M=Math.atan2(S-x,E-b);this.arc(b+t,x+e,i,O,M,h*l>c*u)}return this.dirty++,this},e.prototype.arc=function(t,e,r,n,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(n===i)return this;!o&&i<=n?i+=2*Math.PI:o&&n<=i&&(n+=2*Math.PI);var s=o?n-i:i-n,a=40*Math.ceil(Math.abs(s)/(2*Math.PI));
	if(0===s)return this;var u=t+Math.cos(n)*r,h=e+Math.sin(n)*r,l=this.currentPath.shape.points;this.currentPath?l[l.length-2]===u&&l[l.length-1]===h||l.push(u,h):this.moveTo(u,h);for(var c=s/(2*a),f=2*c,d=Math.cos(c),p=Math.sin(c),v=a-1,y=v%1/v,g=0;g<=v;++g){var m=g+y*g,_=c+n+f*m,b=Math.cos(_),x=-Math.sin(_);l.push((d*b+p*x)*r+t,(d*-x+p*b)*r+e)}return this.dirty++,this},e.prototype.beginFill=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.filling=!0,this.fillColor=t,this.fillAlpha=e,this.currentPath&&this.currentPath.shape.points.length<=2&&(this.currentPath.fill=this.filling,this.currentPath.fillColor=this.fillColor,this.currentPath.fillAlpha=this.fillAlpha),this},e.prototype.endFill=function(){return this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},e.prototype.drawRect=function(t,e,r,n){return this.drawShape(new g.Rectangle(t,e,r,n)),this},e.prototype.drawRoundedRect=function(t,e,r,n,i){return this.drawShape(new g.RoundedRectangle(t,e,r,n,i)),this},e.prototype.drawCircle=function(t,e,r){return this.drawShape(new g.Circle(t,e,r)),this},e.prototype.drawEllipse=function(t,e,r,n){return this.drawShape(new g.Ellipse(t,e,r,n)),this},e.prototype.drawPolygon=function(t){var e=t,r=!0;if(e instanceof g.Polygon&&(r=e.closed,e=e.points),!Array.isArray(e)){e=new Array(arguments.length);for(var n=0;n<e.length;++n)e[n]=arguments[n]}var i=new g.Polygon(e);return i.closed=r,this.drawShape(i),this},e.prototype.clear=function(){return(this.lineWidth||this.filling||this.graphicsData.length>0)&&(this.lineWidth=0,this.filling=!1,this.dirty++,this.clearDirty++,this.graphicsData.length=0),this},e.prototype.isFastRect=function(){return 1===this.graphicsData.length&&this.graphicsData[0].shape.type===_.SHAPES.RECT&&!this.graphicsData[0].lineWidth},e.prototype._renderWebGL=function(t){this.dirty!==this.fastRectDirty&&(this.fastRectDirty=this.dirty,this._fastRect=this.isFastRect()),this._fastRect?this._renderSpriteRect(t):(t.setObjectRenderer(t.plugins.graphics),t.plugins.graphics.render(this))},e.prototype._renderSpriteRect=function(t){var r=this.graphicsData[0].shape;if(!this._spriteRect){if(!e._SPRITE_TEXTURE){e._SPRITE_TEXTURE=l.default.create(10,10);var n=document.createElement("canvas");n.width=10,n.height=10;var i=n.getContext("2d");i.fillStyle="white",i.fillRect(0,0,10,10),e._SPRITE_TEXTURE=f.default.fromCanvas(n)}this._spriteRect=new y.default(e._SPRITE_TEXTURE)}if(16777215===this.tint)this._spriteRect.tint=this.graphicsData[0].fillColor;else{var o=C,s=R;(0,m.hex2rgb)(this.graphicsData[0].fillColor,o),(0,m.hex2rgb)(this.tint,s),o[0]*=s[0],o[1]*=s[1],o[2]*=s[2],this._spriteRect.tint=(0,m.rgb2hex)(o)}this._spriteRect.alpha=this.graphicsData[0].fillAlpha,this._spriteRect.worldAlpha=this.worldAlpha*this._spriteRect.alpha,e._SPRITE_TEXTURE._frame.width=r.width,e._SPRITE_TEXTURE._frame.height=r.height,this._spriteRect.transform.worldTransform=this.transform.worldTransform,this._spriteRect.anchor.set(-r.x/r.width,-r.y/r.height),this._spriteRect._onAnchorUpdate(),this._spriteRect._renderWebGL(t)},e.prototype._renderCanvas=function(t){this.isMask!==!0&&t.plugins.graphics.render(this)},e.prototype._calculateBounds=function(){this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.updateLocalBounds(),this.dirty++,this.cachedSpriteDirty=!0);var t=this._localBounds;this._bounds.addFrame(this.transform,t.minX,t.minY,t.maxX,t.maxY)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,P);for(var e=this.graphicsData,r=0;r<e.length;++r){var n=e[r];if(n.fill&&n.shape&&n.shape.contains(P.x,P.y))return!0}return!1},e.prototype.updateLocalBounds=function(){var t=1/0,e=-(1/0),r=1/0,n=-(1/0);if(this.graphicsData.length)for(var i=0,o=0,s=0,a=0,u=0,h=0;h<this.graphicsData.length;h++){var l=this.graphicsData[h],c=l.type,f=l.lineWidth;if(i=l.shape,c===_.SHAPES.RECT||c===_.SHAPES.RREC)o=i.x-f/2,s=i.y-f/2,a=i.width+f,u=i.height+f,t=o<t?o:t,e=o+a>e?o+a:e,r=s<r?s:r,n=s+u>n?s+u:n;else if(c===_.SHAPES.CIRC)o=i.x,s=i.y,a=i.radius+f/2,u=i.radius+f/2,t=o-a<t?o-a:t,e=o+a>e?o+a:e,r=s-u<r?s-u:r,n=s+u>n?s+u:n;else if(c===_.SHAPES.ELIP)o=i.x,s=i.y,a=i.width+f/2,u=i.height+f/2,t=o-a<t?o-a:t,e=o+a>e?o+a:e,r=s-u<r?s-u:r,n=s+u>n?s+u:n;else for(var d=i.points,p=0;p<d.length;p+=2)o=d[p],s=d[p+1],t=o-f<t?o-f:t,e=o+f>e?o+f:e,r=s-f<r?s-f:r,n=s+f>n?s+f:n}else t=0,e=0,r=0,n=0;var v=this.boundsPadding;this._localBounds.minX=t-v,this._localBounds.maxX=e+2*v,this._localBounds.minY=r-v,this._localBounds.maxY=n+2*v},e.prototype.drawShape=function(t){this.currentPath&&this.currentPath.shape.points.length<=2&&this.graphicsData.pop(),this.currentPath=null;var e=new p.default(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,t);return this.graphicsData.push(e),e.type===_.SHAPES.POLY&&(e.shape.closed=e.shape.closed||this.filling,this.currentPath=e),this.dirty++,e},e.prototype.generateCanvasTexture=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.getLocalBounds(),n=l.default.create(r.width,r.height,t,e);O||(O=new S.default),M.tx=-r.x,M.ty=-r.y,O.render(this,n,!1,M);var i=f.default.fromCanvas(n.baseTexture._canvasRenderTarget.canvas,t);return i.baseTexture.resolution=e,i.baseTexture.update(),i},e.prototype.closePath=function(){var t=this.currentPath;return t&&t.shape&&t.shape.close(),this},e.prototype.addHole=function(){var t=this.graphicsData.pop();return this.currentPath=this.graphicsData[this.graphicsData.length-1],this.currentPath.addHole(t.shape),this.currentPath=null,this},e.prototype.destroy=function(e){t.prototype.destroy.call(this,e);for(var r=0;r<this.graphicsData.length;++r)this.graphicsData[r].destroy();for(var n in this._webgl)for(var i=0;i<this._webgl[n].data.length;++i)this._webgl[n].data[i].destroy();this._spriteRect&&this._spriteRect.destroy(),this.graphicsData=null,this.currentPath=null,this._webgl=null,this._localBounds=null},e}(u.default);r.default=D,D._SPRITE_TEXTURE=null},{"../const":42,"../display/Bounds":43,"../display/Container":44,"../math":66,"../renderers/canvas/CanvasRenderer":73,"../sprites/Sprite":97,"../textures/RenderTexture":107,"../textures/Texture":108,"../utils":115,"./GraphicsData":50,"./utils/bezierCurveTo":52}],50:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(e,r,i,o,s,a,u){n(this,t),this.lineWidth=e,this.lineColor=r,this.lineAlpha=i,this._lineTint=r,this.fillColor=o,this.fillAlpha=s,this._fillTint=o,this.fill=a,this.holes=[],this.shape=u,this.type=u.type}return t.prototype.clone=function(){return new t(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)},t.prototype.addHole=function(t){this.holes.push(t)},t.prototype.destroy=function(){this.shape=null,this.holes=null},t}();r.default=i},{}],51:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("../../renderers/canvas/CanvasRenderer"),s=n(o),a=t("../../const"),u=function(){function t(e){i(this,t),this.renderer=e}return t.prototype.render=function(t){var e=this.renderer,r=e.context,n=t.worldAlpha,i=t.transform.worldTransform,o=e.resolution;this._prevTint!==this.tint&&(this.dirty=!0),r.setTransform(i.a*o,i.b*o,i.c*o,i.d*o,i.tx*o,i.ty*o),t.dirty&&(this.updateGraphicsTint(t),t.dirty=!1),e.setBlendMode(t.blendMode);for(var s=0;s<t.graphicsData.length;s++){var u=t.graphicsData[s],h=u.shape,l=u._fillTint,c=u._lineTint;if(r.lineWidth=u.lineWidth,u.type===a.SHAPES.POLY){r.beginPath(),this.renderPolygon(h.points,h.closed,r);for(var f=0;f<u.holes.length;f++)this.renderPolygon(u.holes[f].points,!0,r);u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+(0|c).toString(16)).substr(-6),r.stroke())}else if(u.type===a.SHAPES.RECT)(u.fillColor||0===u.fillColor)&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+(0|l).toString(16)).substr(-6),r.fillRect(h.x,h.y,h.width,h.height)),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+(0|c).toString(16)).substr(-6),r.strokeRect(h.x,h.y,h.width,h.height));else if(u.type===a.SHAPES.CIRC)r.beginPath(),r.arc(h.x,h.y,h.radius,0,2*Math.PI),r.closePath(),u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+(0|c).toString(16)).substr(-6),r.stroke());else if(u.type===a.SHAPES.ELIP){var d=2*h.width,p=2*h.height,v=h.x-d/2,y=h.y-p/2;r.beginPath();var g=.5522848,m=d/2*g,_=p/2*g,b=v+d,x=y+p,T=v+d/2,w=y+p/2;r.moveTo(v,w),r.bezierCurveTo(v,w-_,T-m,y,T,y),r.bezierCurveTo(T+m,y,b,w-_,b,w),r.bezierCurveTo(b,w+_,T+m,x,T,x),r.bezierCurveTo(T-m,x,v,w+_,v,w),r.closePath(),u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+(0|c).toString(16)).substr(-6),r.stroke())}else if(u.type===a.SHAPES.RREC){var E=h.x,S=h.y,O=h.width,M=h.height,P=h.radius,C=Math.min(O,M)/2|0;P=P>C?C:P,r.beginPath(),r.moveTo(E,S+P),r.lineTo(E,S+M-P),r.quadraticCurveTo(E,S+M,E+P,S+M),r.lineTo(E+O-P,S+M),r.quadraticCurveTo(E+O,S+M,E+O,S+M-P),r.lineTo(E+O,S+P),r.quadraticCurveTo(E+O,S,E+O-P,S),r.lineTo(E+P,S),r.quadraticCurveTo(E,S,E,S+P),r.closePath(),(u.fillColor||0===u.fillColor)&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+(0|c).toString(16)).substr(-6),r.stroke())}}},t.prototype.updateGraphicsTint=function(t){t._prevTint=t.tint;for(var e=(t.tint>>16&255)/255,r=(t.tint>>8&255)/255,n=(255&t.tint)/255,i=0;i<t.graphicsData.length;++i){var o=t.graphicsData[i],s=0|o.fillColor,a=0|o.lineColor;o._fillTint=((s>>16&255)/255*e*255<<16)+((s>>8&255)/255*r*255<<8)+(255&s)/255*n*255,o._lineTint=((a>>16&255)/255*e*255<<16)+((a>>8&255)/255*r*255<<8)+(255&a)/255*n*255}},t.prototype.renderPolygon=function(t,e,r){r.moveTo(t[0],t[1]);for(var n=1;n<t.length/2;++n)r.lineTo(t[2*n],t[2*n+1]);e&&r.closePath()},t.prototype.destroy=function(){this.renderer=null},t}();r.default=u,s.default.registerPlugin("graphics",u)},{"../../const":42,"../../renderers/canvas/CanvasRenderer":73}],52:[function(t,e,r){"use strict";function n(t,e,r,n,i,o,s,a){var u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:[],h=20,l=0,c=0,f=0,d=0,p=0;u.push(t,e);for(var v=1,y=0;v<=h;++v)y=v/h,l=1-y,c=l*l,f=c*l,d=y*y,p=d*y,u.push(f*t+3*c*y*r+3*l*d*i+p*s,f*e+3*c*y*n+3*l*d*o+p*a);return u}r.__esModule=!0,r.default=n},{}],53:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../../utils"),u=t("../../const"),h=t("../../renderers/webgl/utils/ObjectRenderer"),l=n(h),c=t("../../renderers/webgl/WebGLRenderer"),f=n(c),d=t("./WebGLGraphicsData"),p=n(d),v=t("./shaders/PrimitiveShader"),y=n(v),g=t("./utils/buildPoly"),m=n(g),_=t("./utils/buildRectangle"),b=n(_),x=t("./utils/buildRoundedRectangle"),T=n(x),w=t("./utils/buildCircle"),E=n(w),S=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.graphicsDataPool=[],n.primitiveShader=null,n.gl=r.gl,n.CONTEXT_UID=0,n}return s(e,t),e.prototype.onContextChange=function(){this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.primitiveShader=new y.default(this.gl)},e.prototype.destroy=function(){l.default.prototype.destroy.call(this);for(var t=0;t<this.graphicsDataPool.length;++t)this.graphicsDataPool[t].destroy();this.graphicsDataPool=null},e.prototype.render=function(t){var e=this.renderer,r=e.gl,n=void 0,i=t._webGL[this.CONTEXT_UID];i&&t.dirty===i.dirty||(this.updateGraphics(t),i=t._webGL[this.CONTEXT_UID]);var o=this.primitiveShader;e.bindShader(o),e.state.setBlendMode(t.blendMode);for(var s=0,u=i.data.length;s<u;s++){n=i.data[s];var h=n.shader;e.bindShader(h),h.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),h.uniforms.tint=(0,a.hex2rgb)(t.tint),h.uniforms.alpha=t.worldAlpha,n.vao.bind().draw(r.TRIANGLE_STRIP,n.indices.length).unbind()}},e.prototype.updateGraphics=function(t){var e=this.renderer.gl,r=t._webGL[this.CONTEXT_UID];if(r||(r=t._webGL[this.CONTEXT_UID]={lastIndex:0,data:[],gl:e,clearDirty:-1,dirty:-1}),r.dirty=t.dirty,t.clearDirty!==r.clearDirty){r.clearDirty=t.clearDirty;for(var n=0;n<r.data.length;n++)this.graphicsDataPool.push(r.data[n]);r.data.length=0,r.lastIndex=0}for(var i=void 0,o=r.lastIndex;o<t.graphicsData.length;o++){var s=t.graphicsData[o];i=this.getWebGLData(r,0),s.type===u.SHAPES.POLY&&(0,m.default)(s,i),s.type===u.SHAPES.RECT?(0,b.default)(s,i):s.type===u.SHAPES.CIRC||s.type===u.SHAPES.ELIP?(0,E.default)(s,i):s.type===u.SHAPES.RREC&&(0,T.default)(s,i),r.lastIndex++}for(var a=0;a<r.data.length;a++)i=r.data[a],i.dirty&&i.upload()},e.prototype.getWebGLData=function(t,e){var r=t.data[t.data.length-1];return(!r||r.points.length>32e4)&&(r=this.graphicsDataPool.pop()||new p.default(this.renderer.gl,this.primitiveShader,this.renderer.state.attribsState),r.reset(e),t.data.push(r)),r.dirty=!0,r},e}(l.default);r.default=S,f.default.registerPlugin("graphics",S)},{"../../const":42,"../../renderers/webgl/WebGLRenderer":80,"../../renderers/webgl/utils/ObjectRenderer":90,"../../utils":115,"./WebGLGraphicsData":54,"./shaders/PrimitiveShader":55,"./utils/buildCircle":56,"./utils/buildPoly":58,"./utils/buildRectangle":59,"./utils/buildRoundedRectangle":60}],54:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("pixi-gl-core"),s=n(o),a=function(){function t(e,r,n){i(this,t),this.gl=e,this.color=[0,0,0],this.points=[],this.indices=[],this.buffer=s.default.GLBuffer.createVertexBuffer(e),this.indexBuffer=s.default.GLBuffer.createIndexBuffer(e),this.dirty=!0,this.glPoints=null,this.glIndices=null,this.shader=r,this.vao=new s.default.VertexArrayObject(e,n).addIndex(this.indexBuffer).addAttribute(this.buffer,r.attributes.aVertexPosition,e.FLOAT,!1,24,0).addAttribute(this.buffer,r.attributes.aColor,e.FLOAT,!1,24,8)}return t.prototype.reset=function(){this.points.length=0,this.indices.length=0},t.prototype.upload=function(){this.glPoints=new Float32Array(this.points),this.buffer.upload(this.glPoints),this.glIndices=new Uint16Array(this.indices),this.indexBuffer.upload(this.glIndices),this.dirty=!1},t.prototype.destroy=function(){this.color=null,this.points=null,this.indices=null,this.vao.destroy(),this.buffer.destroy(),this.indexBuffer.destroy(),this.gl=null,this.buffer=null,this.indexBuffer=null,this.glPoints=null,this.glIndices=null},t}();r.default=a},{"pixi-gl-core":12}],55:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../../../Shader"),u=n(a),h=function(t){function e(r){return i(this,e),o(this,t.call(this,r,["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","uniform float alpha;","uniform vec3 tint;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"].join("\n"),["varying vec4 vColor;","void main(void){","   gl_FragColor = vColor;","}"].join("\n")))}return s(e,t),e}(u.default);r.default=h},{"../../../Shader":41}],56:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r=t.shape,n=r.x,i=r.y,o=void 0,h=void 0;t.type===a.SHAPES.CIRC?(o=r.radius,h=r.radius):(o=r.width,h=r.height);var l=Math.floor(30*Math.sqrt(r.radius))||Math.floor(15*Math.sqrt(r.width+r.height)),c=2*Math.PI/l;if(t.fill){var f=(0,u.hex2rgb)(t.fillColor),d=t.fillAlpha,p=f[0]*d,v=f[1]*d,y=f[2]*d,g=e.points,m=e.indices,_=g.length/6;m.push(_);for(var b=0;b<l+1;b++)g.push(n,i,p,v,y,d),g.push(n+Math.sin(c*b)*o,i+Math.cos(c*b)*h,p,v,y,d),m.push(_++,_++);m.push(_-1)}if(t.lineWidth){var x=t.points;t.points=[];for(var T=0;T<l+1;T++)t.points.push(n+Math.sin(c*T)*o,i+Math.cos(c*T)*h);(0,s.default)(t,e),t.points=x}}r.__esModule=!0,r.default=i;var o=t("./buildLine"),s=n(o),a=t("../../../const"),u=t("../../../utils")},{"../../../const":42,"../../../utils":115,"./buildLine":57}],57:[function(t,e,r){"use strict";function n(t,e){var r=t.points;if(0!==r.length){var n=new i.Point(r[0],r[1]),s=new i.Point(r[r.length-2],r[r.length-1]);if(n.x===s.x&&n.y===s.y){r=r.slice(),r.pop(),r.pop(),s=new i.Point(r[r.length-2],r[r.length-1]);var a=s.x+.5*(n.x-s.x),u=s.y+.5*(n.y-s.y);r.unshift(a,u),r.push(a,u)}var h=e.points,l=e.indices,c=r.length/2,f=r.length,d=h.length/6,p=t.lineWidth/2,v=(0,o.hex2rgb)(t.lineColor),y=t.lineAlpha,g=v[0]*y,m=v[1]*y,_=v[2]*y,b=r[0],x=r[1],T=r[2],w=r[3],E=0,S=0,O=-(x-w),M=b-T,P=0,C=0,R=0,D=0,A=Math.sqrt(O*O+M*M);O/=A,M/=A,O*=p,M*=p,h.push(b-O,x-M,g,m,_,y),h.push(b+O,x+M,g,m,_,y);for(var I=1;I<c-1;++I){b=r[2*(I-1)],x=r[2*(I-1)+1],T=r[2*I],w=r[2*I+1],E=r[2*(I+1)],S=r[2*(I+1)+1],O=-(x-w),M=b-T,A=Math.sqrt(O*O+M*M),O/=A,M/=A,O*=p,M*=p,P=-(w-S),C=T-E,A=Math.sqrt(P*P+C*C),P/=A,C/=A,P*=p,C*=p;var L=-M+x-(-M+w),j=-O+T-(-O+b),F=(-O+b)*(-M+w)-(-O+T)*(-M+x),B=-C+S-(-C+w),k=-P+T-(-P+E),N=(-P+E)*(-C+w)-(-P+T)*(-C+S),U=L*k-B*j;if(Math.abs(U)<.1)U+=10.1,h.push(T-O,w-M,g,m,_,y),h.push(T+O,w+M,g,m,_,y);else{var X=(j*N-k*F)/U,W=(B*F-L*N)/U,G=(X-T)*(X-T)+(W-w)*(W-w);G>196*p*p?(R=O-P,D=M-C,A=Math.sqrt(R*R+D*D),R/=A,D/=A,R*=p,D*=p,h.push(T-R,w-D),h.push(g,m,_,y),h.push(T+R,w+D),h.push(g,m,_,y),h.push(T-R,w-D),h.push(g,m,_,y),f++):(h.push(X,W),h.push(g,m,_,y),h.push(T-(X-T),w-(W-w)),h.push(g,m,_,y))}}b=r[2*(c-2)],x=r[2*(c-2)+1],T=r[2*(c-1)],w=r[2*(c-1)+1],O=-(x-w),M=b-T,A=Math.sqrt(O*O+M*M),O/=A,M/=A,O*=p,M*=p,h.push(T-O,w-M),h.push(g,m,_,y),h.push(T+O,w+M),h.push(g,m,_,y),l.push(d);for(var Y=0;Y<f;++Y)l.push(d++);l.push(d-1)}}r.__esModule=!0,r.default=n;var i=t("../../../math"),o=t("../../../utils")},{"../../../math":66,"../../../utils":115}],58:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){t.points=t.shape.points.slice();var r=t.points;if(t.fill&&r.length>=6){for(var n=[],i=t.holes,o=0;o<i.length;o++){var u=i[o];n.push(r.length/2),r=r.concat(u.points)}var l=e.points,c=e.indices,f=r.length/2,d=(0,a.hex2rgb)(t.fillColor),p=t.fillAlpha,v=d[0]*p,y=d[1]*p,g=d[2]*p,m=(0,h.default)(r,n,2);if(!m)return;for(var _=l.length/6,b=0;b<m.length;b+=3)c.push(m[b]+_),c.push(m[b]+_),c.push(m[b+1]+_),c.push(m[b+2]+_),c.push(m[b+2]+_);for(var x=0;x<f;x++)l.push(r[2*x],r[2*x+1],v,y,g,p)}t.lineWidth>0&&(0,s.default)(t,e)}r.__esModule=!0,r.default=i;var o=t("./buildLine"),s=n(o),a=t("../../../utils"),u=t("earcut"),h=n(u)},{"../../../utils":115,"./buildLine":57,earcut:2}],59:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r=t.shape,n=r.x,i=r.y,o=r.width,u=r.height;if(t.fill){var h=(0,a.hex2rgb)(t.fillColor),l=t.fillAlpha,c=h[0]*l,f=h[1]*l,d=h[2]*l,p=e.points,v=e.indices,y=p.length/6;p.push(n,i),p.push(c,f,d,l),p.push(n+o,i),p.push(c,f,d,l),p.push(n,i+u),p.push(c,f,d,l),p.push(n+o,i+u),p.push(c,f,d,l),v.push(y,y,y+1,y+2,y+3,y+3)}if(t.lineWidth){var g=t.points;t.points=[n,i,n+o,i,n+o,i+u,n,i+u,n,i],(0,s.default)(t,e),t.points=g}}r.__esModule=!0,r.default=i;var o=t("./buildLine"),s=n(o),a=t("../../../utils")},{"../../../utils":115,"./buildLine":57}],60:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r=t.shape,n=r.x,i=r.y,s=r.width,u=r.height,c=r.radius,f=[];if(f.push(n,i+c),o(n,i+u-c,n,i+u,n+c,i+u,f),o(n+s-c,i+u,n+s,i+u,n+s,i+u-c,f),o(n+s,i+c,n+s,i,n+s-c,i,f),o(n+c,i,n,i,n,i+c+1e-10,f),t.fill){for(var d=(0,l.hex2rgb)(t.fillColor),p=t.fillAlpha,v=d[0]*p,y=d[1]*p,g=d[2]*p,m=e.points,_=e.indices,b=m.length/6,x=(0,a.default)(f,null,2),T=0,w=x.length;T<w;T+=3)_.push(x[T]+b),_.push(x[T]+b),_.push(x[T+1]+b),_.push(x[T+2]+b),_.push(x[T+2]+b);for(var E=0,S=f.length;E<S;E++)m.push(f[E],f[++E],v,y,g,p)}if(t.lineWidth){var O=t.points;t.points=f,(0,h.default)(t,e),t.points=O}}function o(t,e,r,n,i,o){function s(t,e,r){var n=e-t;return t+n*r}for(var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[],u=20,h=a,l=0,c=0,f=0,d=0,p=0,v=0,y=0,g=0;y<=u;++y)g=y/u,l=s(t,r,g),c=s(e,n,g),f=s(r,i,g),d=s(n,o,g),p=s(l,f,g),v=s(c,d,g),h.push(p,v);return h}r.__esModule=!0,r.default=i;var s=t("earcut"),a=n(s),u=t("./buildLine"),h=n(u),l=t("../../../utils")},{"../../../utils":115,"./buildLine":57,earcut:2}],61:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:800,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:600,r=arguments[2],n=arguments[3];return!n&&N.isWebGLSupported()?new H.default(t,e,r):new G.default(t,e,r)}r.__esModule=!0,r.Filter=r.SpriteMaskFilter=r.Quad=r.RenderTarget=r.ObjectRenderer=r.WebGLManager=r.Shader=r.CanvasRenderTarget=r.TextureUvs=r.VideoBaseTexture=r.BaseRenderTexture=r.RenderTexture=r.BaseTexture=r.Texture=r.CanvasGraphicsRenderer=r.GraphicsRenderer=r.GraphicsData=r.Graphics=r.TextStyle=r.Text=r.SpriteRenderer=r.CanvasTinter=r.CanvasSpriteRenderer=r.Sprite=r.TransformBase=r.TransformStatic=r.Transform=r.Container=r.DisplayObject=r.glCore=r.WebGLRenderer=r.CanvasRenderer=r.ticker=r.utils=void 0;var s=t("./const");Object.keys(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return s[t]}})});var a=t("./math");Object.keys(a).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return a[t]}})});var u=t("pixi-gl-core");Object.defineProperty(r,"glCore",{enumerable:!0,get:function(){return i(u).default}});var h=t("./display/DisplayObject");Object.defineProperty(r,"DisplayObject",{enumerable:!0,get:function(){return i(h).default}});var l=t("./display/Container");Object.defineProperty(r,"Container",{enumerable:!0,get:function(){return i(l).default}});var c=t("./display/Transform");Object.defineProperty(r,"Transform",{enumerable:!0,get:function(){return i(c).default}});var f=t("./display/TransformStatic");Object.defineProperty(r,"TransformStatic",{enumerable:!0,get:function(){return i(f).default}});var d=t("./display/TransformBase");Object.defineProperty(r,"TransformBase",{enumerable:!0,get:function(){return i(d).default}});var p=t("./sprites/Sprite");Object.defineProperty(r,"Sprite",{enumerable:!0,get:function(){return i(p).default}});var v=t("./sprites/canvas/CanvasSpriteRenderer");Object.defineProperty(r,"CanvasSpriteRenderer",{enumerable:!0,get:function(){return i(v).default}});var y=t("./sprites/canvas/CanvasTinter");Object.defineProperty(r,"CanvasTinter",{enumerable:!0,get:function(){return i(y).default}});var g=t("./sprites/webgl/SpriteRenderer");Object.defineProperty(r,"SpriteRenderer",{enumerable:!0,get:function(){return i(g).default}});var m=t("./text/Text");Object.defineProperty(r,"Text",{enumerable:!0,get:function(){return i(m).default}});var _=t("./text/TextStyle");Object.defineProperty(r,"TextStyle",{enumerable:!0,get:function(){return i(_).default}});var b=t("./graphics/Graphics");Object.defineProperty(r,"Graphics",{enumerable:!0,get:function(){return i(b).default}});var x=t("./graphics/GraphicsData");Object.defineProperty(r,"GraphicsData",{enumerable:!0,get:function(){return i(x).default}});var T=t("./graphics/webgl/GraphicsRenderer");Object.defineProperty(r,"GraphicsRenderer",{enumerable:!0,get:function(){return i(T).default}});var w=t("./graphics/canvas/CanvasGraphicsRenderer");Object.defineProperty(r,"CanvasGraphicsRenderer",{enumerable:!0,get:function(){return i(w).default}});var E=t("./textures/Texture");Object.defineProperty(r,"Texture",{enumerable:!0,get:function(){return i(E).default}});var S=t("./textures/BaseTexture");Object.defineProperty(r,"BaseTexture",{enumerable:!0,get:function(){return i(S).default}});var O=t("./textures/RenderTexture");Object.defineProperty(r,"RenderTexture",{enumerable:!0,get:function(){return i(O).default}});var M=t("./textures/BaseRenderTexture");Object.defineProperty(r,"BaseRenderTexture",{enumerable:!0,get:function(){return i(M).default}});var P=t("./textures/VideoBaseTexture");Object.defineProperty(r,"VideoBaseTexture",{enumerable:!0,get:function(){return i(P).default}});var C=t("./textures/TextureUvs");Object.defineProperty(r,"TextureUvs",{enumerable:!0,get:function(){return i(C).default}});var R=t("./renderers/canvas/utils/CanvasRenderTarget");Object.defineProperty(r,"CanvasRenderTarget",{enumerable:!0,get:function(){return i(R).default}});var D=t("./Shader");Object.defineProperty(r,"Shader",{enumerable:!0,get:function(){return i(D).default}});var A=t("./renderers/webgl/managers/WebGLManager");Object.defineProperty(r,"WebGLManager",{enumerable:!0,get:function(){return i(A).default}});var I=t("./renderers/webgl/utils/ObjectRenderer");Object.defineProperty(r,"ObjectRenderer",{enumerable:!0,get:function(){return i(I).default}});var L=t("./renderers/webgl/utils/RenderTarget");Object.defineProperty(r,"RenderTarget",{enumerable:!0,get:function(){return i(L).default}});var j=t("./renderers/webgl/utils/Quad");Object.defineProperty(r,"Quad",{enumerable:!0,get:function(){return i(j).default}});var F=t("./renderers/webgl/filters/spriteMask/SpriteMaskFilter");Object.defineProperty(r,"SpriteMaskFilter",{enumerable:!0,get:function(){return i(F).default}});var B=t("./renderers/webgl/filters/Filter");Object.defineProperty(r,"Filter",{enumerable:!0,get:function(){return i(B).default}}),r.autoDetectRenderer=o;var k=t("./utils"),N=n(k),U=t("./ticker"),X=n(U),W=t("./renderers/canvas/CanvasRenderer"),G=i(W),Y=t("./renderers/webgl/WebGLRenderer"),H=i(Y);r.utils=N,r.ticker=X,r.CanvasRenderer=G.default,r.WebGLRenderer=H.default},{"./Shader":41,"./const":42,"./display/Container":44,"./display/DisplayObject":45,"./display/Transform":46,"./display/TransformBase":47,"./display/TransformStatic":48,"./graphics/Graphics":49,"./graphics/GraphicsData":50,"./graphics/canvas/CanvasGraphicsRenderer":51,"./graphics/webgl/GraphicsRenderer":53,"./math":66,"./renderers/canvas/CanvasRenderer":73,"./renderers/canvas/utils/CanvasRenderTarget":75,"./renderers/webgl/WebGLRenderer":80,"./renderers/webgl/filters/Filter":82,"./renderers/webgl/filters/spriteMask/SpriteMaskFilter":85,"./renderers/webgl/managers/WebGLManager":89,"./renderers/webgl/utils/ObjectRenderer":90,"./renderers/webgl/utils/Quad":91,"./renderers/webgl/utils/RenderTarget":92,"./sprites/Sprite":97,"./sprites/canvas/CanvasSpriteRenderer":98,"./sprites/canvas/CanvasTinter":99,"./sprites/webgl/SpriteRenderer":101,"./text/Text":103,"./text/TextStyle":104,"./textures/BaseRenderTexture":105,"./textures/BaseTexture":106,"./textures/RenderTexture":107,"./textures/Texture":108,"./textures/TextureUvs":109,"./textures/VideoBaseTexture":110,"./ticker":112,"./utils":115,"pixi-gl-core":12}],62:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){return t<0?-1:t>0?1:0}function o(){for(var t=0;t<16;t++){var e=[];d.push(e);for(var r=0;r<16;r++)for(var n=i(u[t]*u[r]+l[t]*h[r]),o=i(h[t]*u[r]+c[t]*h[r]),s=i(u[t]*l[r]+l[t]*c[r]),p=i(h[t]*l[r]+c[t]*c[r]),v=0;v<16;v++)if(u[v]===n&&h[v]===o&&l[v]===s&&c[v]===p){e.push(v);break}}for(var y=0;y<16;y++){var g=new a.default;g.set(u[y],h[y],l[y],c[y],0,0),f.push(g)}}r.__esModule=!0;var s=t("./Matrix"),a=n(s),u=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],h=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],l=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],c=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],f=[],d=[];o();var p={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MIRROR_HORIZONTAL:12,uX:function(t){return u[t]},uY:function(t){return h[t]},vX:function(t){return l[t]},vY:function(t){return c[t]},inv:function(t){return 8&t?15&t:7&-t},add:function(t,e){return d[t][e]},sub:function(t,e){return d[t][p.inv(e)]},rotate180:function(t){return 4^t},isSwapWidthHeight:function(t){return 2===(3&t)},byDirection:function(t,e){return 2*Math.abs(t)<=Math.abs(e)?e>=0?p.S:p.N:2*Math.abs(e)<=Math.abs(t)?t>0?p.E:p.W:e>0?t>0?p.SE:p.SW:t>0?p.NE:p.NW},matrixAppendRotationInv:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=f[p.inv(e)];i.tx=r,i.ty=n,t.append(i)}};r.default=p},{"./Matrix":63}],63:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t("./Point"),a=n(s),u=function(){function t(){i(this,t),this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this.array=null}return t.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},t.prototype.set=function(t,e,r,n,i,o){return this.a=t,this.b=e,this.c=r,this.d=n,this.tx=i,this.ty=o,this},t.prototype.toArray=function(t,e){this.array||(this.array=new Float32Array(9));var r=e||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r},t.prototype.apply=function(t,e){e=e||new a.default;var r=t.x,n=t.y;return e.x=this.a*r+this.c*n+this.tx,e.y=this.b*r+this.d*n+this.ty,e},t.prototype.applyInverse=function(t,e){e=e||new a.default;var r=1/(this.a*this.d+this.c*-this.b),n=t.x,i=t.y;return e.x=this.d*r*n+-this.c*r*i+(this.ty*this.c-this.tx*this.d)*r,e.y=this.a*r*i+-this.b*r*n+(-this.ty*this.a+this.tx*this.b)*r,e},t.prototype.translate=function(t,e){return this.tx+=t,this.ty+=e,this},t.prototype.scale=function(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this},t.prototype.rotate=function(t){var e=Math.cos(t),r=Math.sin(t),n=this.a,i=this.c,o=this.tx;return this.a=n*e-this.b*r,this.b=n*r+this.b*e,this.c=i*e-this.d*r,this.d=i*r+this.d*e,this.tx=o*e-this.ty*r,this.ty=o*r+this.ty*e,this},t.prototype.append=function(t){var e=this.a,r=this.b,n=this.c,i=this.d;return this.a=t.a*e+t.b*n,this.b=t.a*r+t.b*i,this.c=t.c*e+t.d*n,this.d=t.c*r+t.d*i,
	this.tx=t.tx*e+t.ty*n+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this},t.prototype.setTransform=function(t,e,r,n,i,o,s,a,u){var h=Math.sin(s),l=Math.cos(s),c=Math.cos(u),f=Math.sin(u),d=-Math.sin(a),p=Math.cos(a),v=l*i,y=h*i,g=-h*o,m=l*o;return this.a=c*v+f*g,this.b=c*y+f*m,this.c=d*v+p*g,this.d=d*y+p*m,this.tx=t+(r*v+n*g),this.ty=e+(r*y+n*m),this},t.prototype.prepend=function(t){var e=this.tx;if(1!==t.a||0!==t.b||0!==t.c||1!==t.d){var r=this.a,n=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=n*t.a+this.d*t.c,this.d=n*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this},t.prototype.decompose=function(t){var e=this.a,r=this.b,n=this.c,i=this.d,o=Math.atan2(-n,i),s=Math.atan2(r,e),a=Math.abs(1-o/s);return a<1e-5?(t.rotation=s,e<0&&i>=0&&(t.rotation+=t.rotation<=0?Math.PI:-Math.PI),t.skew.x=t.skew.y=0):(t.skew.x=o,t.skew.y=s),t.scale.x=Math.sqrt(e*e+r*r),t.scale.y=Math.sqrt(n*n+i*i),t.position.x=this.tx,t.position.y=this.ty,t},t.prototype.invert=function(){var t=this.a,e=this.b,r=this.c,n=this.d,i=this.tx,o=t*n-e*r;return this.a=n/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-n*i)/o,this.ty=-(t*this.ty-e*i)/o,this},t.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},t.prototype.clone=function(){var e=new t;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},t.prototype.copy=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},o(t,null,[{key:"IDENTITY",get:function(){return new t}},{key:"TEMP_MATRIX",get:function(){return new t}}]),t}();r.default=u},{"./Point":65}],64:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;n(this,t),this._x=i,this._y=o,this.cb=e,this.scope=r}return t.prototype.set=function(t,e){var r=t||0,n=e||(0!==e?r:0);this._x===r&&this._y===n||(this._x=r,this._y=n,this.cb.call(this.scope))},t.prototype.copy=function(t){this._x===t.x&&this._y===t.y||(this._x=t.x,this._y=t.y,this.cb.call(this.scope))},i(t,[{key:"x",get:function(){return this._x},set:function(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))}},{key:"y",get:function(){return this._y},set:function(t){this._y!==t&&(this._y=t,this.cb.call(this.scope))}}]),t}();r.default=o},{}],65:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n(this,t),this.x=e,this.y=r}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.copy=function(t){this.set(t.x,t.y)},t.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},t.prototype.set=function(t,e){this.x=t||0,this.y=e||(0!==e?this.x:0)},t}();r.default=i},{}],66:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./Point");Object.defineProperty(r,"Point",{enumerable:!0,get:function(){return n(i).default}});var o=t("./ObservablePoint");Object.defineProperty(r,"ObservablePoint",{enumerable:!0,get:function(){return n(o).default}});var s=t("./Matrix");Object.defineProperty(r,"Matrix",{enumerable:!0,get:function(){return n(s).default}});var a=t("./GroupD8");Object.defineProperty(r,"GroupD8",{enumerable:!0,get:function(){return n(a).default}});var u=t("./shapes/Circle");Object.defineProperty(r,"Circle",{enumerable:!0,get:function(){return n(u).default}});var h=t("./shapes/Ellipse");Object.defineProperty(r,"Ellipse",{enumerable:!0,get:function(){return n(h).default}});var l=t("./shapes/Polygon");Object.defineProperty(r,"Polygon",{enumerable:!0,get:function(){return n(l).default}});var c=t("./shapes/Rectangle");Object.defineProperty(r,"Rectangle",{enumerable:!0,get:function(){return n(c).default}});var f=t("./shapes/RoundedRectangle");Object.defineProperty(r,"RoundedRectangle",{enumerable:!0,get:function(){return n(f).default}})},{"./GroupD8":62,"./Matrix":63,"./ObservablePoint":64,"./Point":65,"./shapes/Circle":67,"./shapes/Ellipse":68,"./shapes/Polygon":69,"./shapes/Rectangle":70,"./shapes/RoundedRectangle":71}],67:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("./Rectangle"),s=n(o),a=t("../../const"),u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;i(this,t),this.x=e,this.y=r,this.radius=n,this.type=a.SHAPES.CIRC}return t.prototype.clone=function(){return new t(this.x,this.y,this.radius)},t.prototype.contains=function(t,e){if(this.radius<=0)return!1;var r=this.radius*this.radius,n=this.x-t,i=this.y-e;return n*=n,i*=i,n+i<=r},t.prototype.getBounds=function(){return new s.default(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)},t}();r.default=u},{"../../const":42,"./Rectangle":70}],68:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("./Rectangle"),s=n(o),a=t("../../const"),u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;i(this,t),this.x=e,this.y=r,this.width=n,this.height=o,this.type=a.SHAPES.ELIP}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;var r=(t-this.x)/this.width,n=(e-this.y)/this.height;return r*=r,n*=n,r+n<=1},t.prototype.getBounds=function(){return new s.default(this.x-this.width,this.y-this.height,this.width,this.height)},t}();r.default=u},{"../../const":42,"./Rectangle":70}],69:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("../Point"),s=n(o),a=t("../../const"),u=function(){function t(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];if(i(this,t),Array.isArray(r[0])&&(r=r[0]),r[0]instanceof s.default){for(var o=[],u=0,h=r.length;u<h;u++)o.push(r[u].x,r[u].y);r=o}this.closed=!0,this.points=r,this.type=a.SHAPES.POLY}return t.prototype.clone=function(){return new t(this.points.slice())},t.prototype.close=function(){var t=this.points;t[0]===t[t.length-2]&&t[1]===t[t.length-1]||t.push(t[0],t[1])},t.prototype.contains=function(t,e){for(var r=!1,n=this.points.length/2,i=0,o=n-1;i<n;o=++i){var s=this.points[2*i],a=this.points[2*i+1],u=this.points[2*o],h=this.points[2*o+1],l=a>e!=h>e&&t<(u-s)*((e-a)/(h-a))+s;l&&(r=!r)}return r},t}();r.default=u},{"../../const":42,"../Point":65}],70:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../../const"),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;n(this,t),this.x=e,this.y=r,this.width=i,this.height=s,this.type=o.SHAPES.RECT}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},t.prototype.contains=function(t,e){return!(this.width<=0||this.height<=0)&&(t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height)},t.prototype.pad=function(t,e){t=t||0,e=e||(0!==e?t:0),this.x-=t,this.y-=e,this.width+=2*t,this.height+=2*e},t.prototype.fit=function(t){this.x<t.x&&(this.width+=this.x,this.width<0&&(this.width=0),this.x=t.x),this.y<t.y&&(this.height+=this.y,this.height<0&&(this.height=0),this.y=t.y),this.x+this.width>t.x+t.width&&(this.width=t.width-this.x,this.width<0&&(this.width=0)),this.y+this.height>t.y+t.height&&(this.height=t.height-this.y,this.height<0&&(this.height=0))},t.prototype.enlarge=function(e){if(e!==t.EMPTY){var r=Math.min(this.x,e.x),n=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),o=Math.max(this.y+this.height,e.y+e.height);this.x=r,this.width=n-r,this.y=i,this.height=o-i}},i(t,[{key:"left",get:function(){return this.x}},{key:"right",get:function(){return this.x+this.width}},{key:"top",get:function(){return this.y}},{key:"bottom",get:function(){return this.y+this.height}}],[{key:"EMPTY",get:function(){return new t(0,0,0,0)}}]),t}();r.default=s},{"../../const":42}],71:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../const"),o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20;n(this,t),this.x=e,this.y=r,this.width=o,this.height=s,this.radius=a,this.type=i.SHAPES.RREC}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height,this.radius)},t.prototype.contains=function(t,e){return!(this.width<=0||this.height<=0)&&(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height)},t}();r.default=o},{"../../const":42}],72:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../utils"),h=t("../math"),l=t("../const"),c=t("../display/Container"),f=n(c),d=t("../textures/RenderTexture"),p=n(d),v=t("eventemitter3"),y=n(v),g=new h.Matrix,m=function(t){function e(r,n,s,a){i(this,e);var h=o(this,t.call(this));if((0,u.sayHello)(r),a)for(var c in l.DEFAULT_RENDER_OPTIONS)"undefined"==typeof a[c]&&(a[c]=l.DEFAULT_RENDER_OPTIONS[c]);else a=l.DEFAULT_RENDER_OPTIONS;return h.type=l.RENDERER_TYPE.UNKNOWN,h.width=n||800,h.height=s||600,h.view=a.view||document.createElement("canvas"),h.resolution=a.resolution||l.RESOLUTION,h.transparent=a.transparent,h.autoResize=a.autoResize||!1,h.blendModes=null,h.preserveDrawingBuffer=a.preserveDrawingBuffer,h.clearBeforeRender=a.clearBeforeRender,h.roundPixels=a.roundPixels,h._backgroundColor=0,h._backgroundColorRgba=[0,0,0,0],h._backgroundColorString="#000000",h.backgroundColor=a.backgroundColor||h._backgroundColor,h._tempDisplayObjectParent=new f.default,h._lastObjectRendered=h._tempDisplayObjectParent,h}return s(e,t),e.prototype.resize=function(t,e){this.width=t*this.resolution,this.height=e*this.resolution,this.view.width=this.width,this.view.height=this.height,this.autoResize&&(this.view.style.width=this.width/this.resolution+"px",this.view.style.height=this.height/this.resolution+"px")},e.prototype.generateTexture=function(t,e,r){var n=t.getLocalBounds(),i=p.default.create(0|n.width,0|n.height,e,r);return g.tx=-n.x,g.ty=-n.y,this.render(t,i,!1,g,!0),i},e.prototype.destroy=function(t){t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view),this.type=l.RENDERER_TYPE.UNKNOWN,this.width=0,this.height=0,this.view=null,this.resolution=0,this.transparent=!1,this.autoResize=!1,this.blendModes=null,this.preserveDrawingBuffer=!1,this.clearBeforeRender=!1,this.roundPixels=!1,this._backgroundColor=0,this._backgroundColorRgba=null,this._backgroundColorString=null,this.backgroundColor=0,this._tempDisplayObjectParent=null,this._lastObjectRendered=null},a(e,[{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=(0,u.hex2string)(t),(0,u.hex2rgb)(t,this._backgroundColorRgba)}}]),e}(y.default);r.default=m},{"../const":42,"../display/Container":44,"../math":66,"../textures/RenderTexture":107,"../utils":115,eventemitter3:3}],73:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../SystemRenderer"),u=n(a),h=t("./utils/CanvasMaskManager"),l=n(h),c=t("./utils/CanvasRenderTarget"),f=n(c),d=t("./utils/mapCanvasBlendModesToPixi"),p=n(d),v=t("../../utils"),y=t("../../const"),g=function(t){function e(r,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i(this,e);var a=o(this,t.call(this,"Canvas",r,n,s));return a.type=y.RENDERER_TYPE.CANVAS,a.rootContext=a.view.getContext("2d",{alpha:a.transparent}),a.refresh=!0,a.maskManager=new l.default(a),a.smoothProperty="imageSmoothingEnabled",a.rootContext.imageSmoothingEnabled||(a.rootContext.webkitImageSmoothingEnabled?a.smoothProperty="webkitImageSmoothingEnabled":a.rootContext.mozImageSmoothingEnabled?a.smoothProperty="mozImageSmoothingEnabled":a.rootContext.oImageSmoothingEnabled?a.smoothProperty="oImageSmoothingEnabled":a.rootContext.msImageSmoothingEnabled&&(a.smoothProperty="msImageSmoothingEnabled")),a.initPlugins(),a.blendModes=(0,p.default)(),a._activeBlendMode=null,a.context=null,a.renderingToScreen=!1,a.resize(r,n),a}return s(e,t),e.prototype.render=function(t,e,r,n,i){if(this.view){this.renderingToScreen=!e,this.emit("prerender"),e?(e=e.baseTexture||e,e._canvasRenderTarget||(e._canvasRenderTarget=new f.default(e.width,e.height,e.resolution),e.source=e._canvasRenderTarget.canvas,e.valid=!0),this.context=e._canvasRenderTarget.context,this.resolution=e._canvasRenderTarget.resolution):this.context=this.rootContext;var o=this.context;if(e||(this._lastObjectRendered=t),!i){var s=t.parent,a=this._tempDisplayObjectParent.transform.worldTransform;n?n.copy(a):a.identity(),t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=s}o.setTransform(1,0,0,1,0,0),o.globalAlpha=1,o.globalCompositeOperation=this.blendModes[y.BLEND_MODES.NORMAL],navigator.isCocoonJS&&this.view.screencanvas&&(o.fillStyle="black",o.clear()),(void 0!==r?r:this.clearBeforeRender)&&this.renderingToScreen&&(this.transparent?o.clearRect(0,0,this.width,this.height):(o.fillStyle=this._backgroundColorString,o.fillRect(0,0,this.width,this.height)));var u=this.context;this.context=o,t.renderCanvas(this),this.context=u,this.emit("postrender")}},e.prototype.setBlendMode=function(t){this._activeBlendMode!==t&&(this.context.globalCompositeOperation=this.blendModes[t])},e.prototype.destroy=function(e){this.destroyPlugins(),t.prototype.destroy.call(this,e),this.context=null,this.refresh=!0,this.maskManager.destroy(),this.maskManager=null,this.smoothProperty=null},e.prototype.resize=function(e,r){t.prototype.resize.call(this,e,r),this.smoothProperty&&(this.rootContext[this.smoothProperty]=y.SCALE_MODES.DEFAULT===y.SCALE_MODES.LINEAR)},e}(u.default);r.default=g,v.pluginTarget.mixin(g)},{"../../const":42,"../../utils":115,"../SystemRenderer":72,"./utils/CanvasMaskManager":74,"./utils/CanvasRenderTarget":75,"./utils/mapCanvasBlendModesToPixi":77}],74:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../../const"),o=function(){function t(e){n(this,t),this.renderer=e}return t.prototype.pushMask=function(t){var e=this.renderer;e.context.save();var r=t.alpha,n=t.transform.worldTransform,i=e.resolution;e.context.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),t._texture||(this.renderGraphicsShape(t),e.context.clip()),t.worldAlpha=r},t.prototype.renderGraphicsShape=function(t){var e=this.renderer.context,r=t.graphicsData.length;if(0!==r){e.beginPath();for(var n=0;n<r;n++){var o=t.graphicsData[n],s=o.shape;if(o.type===i.SHAPES.POLY){var a=s.points;e.moveTo(a[0],a[1]);for(var u=1;u<a.length/2;u++)e.lineTo(a[2*u],a[2*u+1]);a[0]===a[a.length-2]&&a[1]===a[a.length-1]&&e.closePath()}else if(o.type===i.SHAPES.RECT)e.rect(s.x,s.y,s.width,s.height),e.closePath();else if(o.type===i.SHAPES.CIRC)e.arc(s.x,s.y,s.radius,0,2*Math.PI),e.closePath();else if(o.type===i.SHAPES.ELIP){var h=2*s.width,l=2*s.height,c=s.x-h/2,f=s.y-l/2,d=.5522848,p=h/2*d,v=l/2*d,y=c+h,g=f+l,m=c+h/2,_=f+l/2;e.moveTo(c,_),e.bezierCurveTo(c,_-v,m-p,f,m,f),e.bezierCurveTo(m+p,f,y,_-v,y,_),e.bezierCurveTo(y,_+v,m+p,g,m,g),e.bezierCurveTo(m-p,g,c,_+v,c,_),e.closePath()}else if(o.type===i.SHAPES.RREC){var b=s.x,x=s.y,T=s.width,w=s.height,E=s.radius,S=Math.min(T,w)/2|0;E=E>S?S:E,e.moveTo(b,x+E),e.lineTo(b,x+w-E),e.quadraticCurveTo(b,x+w,b+E,x+w),e.lineTo(b+T-E,x+w),e.quadraticCurveTo(b+T,x+w,b+T,x+w-E),e.lineTo(b+T,x+E),e.quadraticCurveTo(b+T,x,b+T-E,x),e.lineTo(b+E,x),e.quadraticCurveTo(b,x,b,x+E),e.closePath()}}}},t.prototype.popMask=function(t){t.context.restore()},t.prototype.destroy=function(){},t}();r.default=o},{"../../../const":42}],75:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../../../const"),s=function(){function t(e,r,i){n(this,t),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=i||o.RESOLUTION,this.resize(e,r)}return t.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.resize=function(t,e){this.canvas.width=t*this.resolution,this.canvas.height=e*this.resolution},t.prototype.destroy=function(){this.context=null,this.canvas=null},i(t,[{key:"width",get:function(){return this.canvas.width},set:function(t){this.canvas.width=t}},{key:"height",get:function(){return this.canvas.height},set:function(t){this.canvas.height=t}}]),t}();r.default=s},{"../../../const":42}],76:[function(t,e,r){"use strict";function n(t){var e=document.createElement("canvas");e.width=6,e.height=1;var r=e.getContext("2d");return r.fillStyle=t,r.fillRect(0,0,6,1),e}function i(){if("undefined"==typeof document)return!1;var t=n("#ff00ff"),e=n("#ffff00"),r=document.createElement("canvas");r.width=6,r.height=1;var i=r.getContext("2d");i.globalCompositeOperation="multiply",i.drawImage(t,0,0),i.drawImage(e,2,0);var o=i.getImageData(2,0,1,1);if(!o)return!1;var s=o.data;return 255===s[0]&&0===s[1]&&0===s[2]}r.__esModule=!0,r.default=i},{}],77:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,a.default)()?(t[o.BLEND_MODES.NORMAL]="source-over",t[o.BLEND_MODES.ADD]="lighter",t[o.BLEND_MODES.MULTIPLY]="multiply",t[o.BLEND_MODES.SCREEN]="screen",t[o.BLEND_MODES.OVERLAY]="overlay",t[o.BLEND_MODES.DARKEN]="darken",t[o.BLEND_MODES.LIGHTEN]="lighten",t[o.BLEND_MODES.COLOR_DODGE]="color-dodge",t[o.BLEND_MODES.COLOR_BURN]="color-burn",t[o.BLEND_MODES.HARD_LIGHT]="hard-light",t[o.BLEND_MODES.SOFT_LIGHT]="soft-light",t[o.BLEND_MODES.DIFFERENCE]="difference",t[o.BLEND_MODES.EXCLUSION]="exclusion",t[o.BLEND_MODES.HUE]="hue",t[o.BLEND_MODES.SATURATION]="saturate",t[o.BLEND_MODES.COLOR]="color",t[o.BLEND_MODES.LUMINOSITY]="luminosity"):(t[o.BLEND_MODES.NORMAL]="source-over",t[o.BLEND_MODES.ADD]="lighter",t[o.BLEND_MODES.MULTIPLY]="source-over",t[o.BLEND_MODES.SCREEN]="source-over",t[o.BLEND_MODES.OVERLAY]="source-over",t[o.BLEND_MODES.DARKEN]="source-over",t[o.BLEND_MODES.LIGHTEN]="source-over",t[o.BLEND_MODES.COLOR_DODGE]="source-over",t[o.BLEND_MODES.COLOR_BURN]="source-over",t[o.BLEND_MODES.HARD_LIGHT]="source-over",t[o.BLEND_MODES.SOFT_LIGHT]="source-over",t[o.BLEND_MODES.DIFFERENCE]="source-over",t[o.BLEND_MODES.EXCLUSION]="source-over",t[o.BLEND_MODES.HUE]="source-over",t[o.BLEND_MODES.SATURATION]="source-over",t[o.BLEND_MODES.COLOR]="source-over",t[o.BLEND_MODES.LUMINOSITY]="source-over"),t}r.__esModule=!0,r.default=i;var o=t("../../../const"),s=t("./canUseNewCanvasBlendModes"),a=n(s)},{"../../../const":42,"./canUseNewCanvasBlendModes":76}],78:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../const"),o=function(){function t(e){n(this,t),this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=3600,this.checkCountMax=600,this.mode=i.GC_MODES.DEFAULT}return t.prototype.update=function(){this.count++,this.mode!==i.GC_MODES.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run()))},t.prototype.run=function(){for(var t=this.renderer.textureManager,e=t._managedTextures,r=!1,n=0;n<e.length;n++){var i=e[n];!i._glRenderTargets&&this.count-i.touched>this.maxIdle&&(t.destroyTexture(i,!0),e[n]=null,r=!0)}if(r){for(var o=0,s=0;s<e.length;s++)null!==e[s]&&(e[o++]=e[s]);e.length=o}},t.prototype.unload=function(t){var e=this.renderer.textureManager;t._texture&&e.destroyTexture(t._texture,!0);for(var r=t.children.length-1;r>=0;r--)this.unload(t.children[r])},t}();r.default=o},{"../../const":42}],79:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("pixi-gl-core"),s=t("../../const"),a=t("./utils/RenderTarget"),u=n(a),h=t("../../utils"),l=function(){function t(e){i(this,t),this.renderer=e,this.gl=e.gl,this._managedTextures=[]}return t.prototype.bindTexture=function(){},t.prototype.getTexture=function(){},t.prototype.updateTexture=function(t){t=t.baseTexture||t;var e=!!t._glRenderTargets;if(!t.hasLoaded)return null;var r=t._glTextures[this.renderer.CONTEXT_UID];if(r)e?t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width,t.height):r.upload(t.source);else{if(e){var n=new u.default(this.gl,t.width,t.height,t.scaleMode,t.resolution);n.resize(t.width,t.height),t._glRenderTargets[this.renderer.CONTEXT_UID]=n,r=n.texture}else r=new o.GLTexture(this.gl),r.premultiplyAlpha=!0,r.upload(t.source);t._glTextures[this.renderer.CONTEXT_UID]=r,t.on("update",this.updateTexture,this),t.on("dispose",this.destroyTexture,this),this._managedTextures.push(t),t.isPowerOfTwo?(t.mipmap&&r.enableMipmap(),t.wrapMode===s.WRAP_MODES.CLAMP?r.enableWrapClamp():t.wrapMode===s.WRAP_MODES.REPEAT?r.enableWrapRepeat():r.enableWrapMirrorRepeat()):r.enableWrapClamp(),t.scaleMode===s.SCALE_MODES.NEAREST?r.enableNearestScaling():r.enableLinearScaling()}return r},t.prototype.destroyTexture=function(t,e){if(t=t.baseTexture||t,t.hasLoaded&&t._glTextures[this.renderer.CONTEXT_UID]&&(t._glTextures[this.renderer.CONTEXT_UID].destroy(),t.off("update",this.updateTexture,this),t.off("dispose",this.destroyTexture,this),delete t._glTextures[this.renderer.CONTEXT_UID],!e)){var r=this._managedTextures.indexOf(t);r!==-1&&(0,h.removeItems)(this._managedTextures,r,1)}},t.prototype.removeAll=function(){for(var t=0;t<this._managedTextures.length;++t){var e=this._managedTextures[t];e._glTextures[this.renderer.CONTEXT_UID]&&delete e._glTextures[this.renderer.CONTEXT_UID]}},t.prototype.destroy=function(){for(var t=0;t<this._managedTextures.length;++t){var e=this._managedTextures[t];this.destroyTexture(e,!0),e.off("update",this.updateTexture,this),e.off("dispose",this.destroyTexture,this)}this._managedTextures=null},t}();r.default=l},{"../../const":42,"../../utils":115,"./utils/RenderTarget":92,"pixi-gl-core":12}],80:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../SystemRenderer"),u=n(a),h=t("./managers/MaskManager"),l=n(h),c=t("./managers/StencilManager"),f=n(c),d=t("./managers/FilterManager"),p=n(d),v=t("./utils/RenderTarget"),y=n(v),g=t("./utils/ObjectRenderer"),m=n(g),_=t("./TextureManager"),b=n(_),x=t("./TextureGarbageCollector"),T=n(x),w=t("./WebGLState"),E=n(w),S=t("./utils/mapWebGLDrawModesToPixi"),O=n(S),M=t("./utils/validateContext"),P=n(M),C=t("../../utils"),R=t("pixi-gl-core"),D=n(R),A=t("../../const"),I=0,L=function(t){function e(r,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i(this,e);var a=o(this,t.call(this,"WebGL",r,n,s));return a.type=A.RENDERER_TYPE.WEBGL,a.handleContextLost=a.handleContextLost.bind(a),a.handleContextRestored=a.handleContextRestored.bind(a),a.view.addEventListener("webglcontextlost",a.handleContextLost,!1),a.view.addEventListener("webglcontextrestored",a.handleContextRestored,!1),a._contextOptions={alpha:a.transparent,antialias:s.antialias,premultipliedAlpha:a.transparent&&"notMultiplied"!==a.transparent,stencil:!0,preserveDrawingBuffer:s.preserveDrawingBuffer},a._backgroundColorRgba[3]=a.transparent?0:1,a.maskManager=new l.default(a),a.stencilManager=new f.default(a),a.emptyRenderer=new m.default(a),a.currentRenderer=a.emptyRenderer,a.initPlugins(),s.context&&(0,P.default)(s.context),a.gl=s.context||D.default.createContext(a.view,a._contextOptions),a.CONTEXT_UID=I++,a.state=new E.default(a.gl),a.renderingToScreen=!0,a._initContext(),a.filterManager=new p.default(a),a.drawModes=(0,O.default)(a.gl),a._activeShader=null,a._activeRenderTarget=null,a._activeTextureLocation=999,a._activeTexture=null,a.setBlendMode(0),a}return s(e,t),e.prototype._initContext=function(){var t=this.gl;t.isContextLost()&&t.getExtension("WEBGL_lose_context")&&t.getExtension("WEBGL_lose_context").restoreContext(),this.textureManager=new b.default(this),this.textureGC=new T.default(this),this.state.resetToDefault(),this.rootRenderTarget=new y.default(t,this.width,this.height,null,this.resolution,(!0)),this.rootRenderTarget.clearColor=this._backgroundColorRgba,this.bindRenderTarget(this.rootRenderTarget),this.emit("context",t),this.resize(this.width,this.height)},e.prototype.render=function(t,e,r,n,i){if(this.renderingToScreen=!e,this.emit("prerender"),this.gl&&!this.gl.isContextLost()){if(e||(this._lastObjectRendered=t),!i){var o=t.parent;t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=o}this.bindRenderTexture(e,n),this.currentRenderer.start(),(void 0!==r?r:this.clearBeforeRender)&&this._activeRenderTarget.clear(),t.renderWebGL(this),this.currentRenderer.flush(),this.textureGC.update(),this.emit("postrender")}},e.prototype.setObjectRenderer=function(t){this.currentRenderer!==t&&(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())},e.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},e.prototype.resize=function(t,e){u.default.prototype.resize.call(this,t,e),this.rootRenderTarget.resize(t,e),this._activeRenderTarget===this.rootRenderTarget&&(this.rootRenderTarget.activate(),this._activeShader&&(this._activeShader.uniforms.projectionMatrix=this.rootRenderTarget.projectionMatrix.toArray(!0)))},e.prototype.setBlendMode=function(t){this.state.setBlendMode(t)},e.prototype.clear=function(t){this._activeRenderTarget.clear(t)},e.prototype.setTransform=function(t){this._activeRenderTarget.transform=t},e.prototype.bindRenderTexture=function(t,e){var r=void 0;if(t){var n=t.baseTexture,i=this.gl;n._glRenderTargets[this.CONTEXT_UID]?(this._activeTextureLocation=n._id,i.activeTexture(i.TEXTURE0+n._id),i.bindTexture(i.TEXTURE_2D,null)):(this.textureManager.updateTexture(n),i.bindTexture(i.TEXTURE_2D,null)),r=n._glRenderTargets[this.CONTEXT_UID],r.setFrame(t.frame)}else r=this.rootRenderTarget;return r.transform=e,this.bindRenderTarget(r),this},e.prototype.bindRenderTarget=function(t){return t!==this._activeRenderTarget&&(this._activeRenderTarget=t,t.activate(),this._activeShader&&(this._activeShader.uniforms.projectionMatrix=t.projectionMatrix.toArray(!0)),this.stencilManager.setMaskStack(t.stencilMaskStack)),this},e.prototype.bindShader=function(t){return this._activeShader!==t&&(this._activeShader=t,t.bind(),t.uniforms.projectionMatrix=this._activeRenderTarget.projectionMatrix.toArray(!0)),this},e.prototype.bindTexture=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t=t.baseTexture||t;var r=this.gl;return this._activeTextureLocation!==e&&(this._activeTextureLocation=e,r.activeTexture(r.TEXTURE0+e)),this._activeTexture=t,t._glTextures[this.CONTEXT_UID]?(t.touched=this.textureGC.count,t._glTextures[this.CONTEXT_UID].bind()):this.textureManager.updateTexture(t),this},e.prototype.createVao=function(){return new D.default.VertexArrayObject(this.gl,this.state.attribState)},e.prototype.reset=function(){return this.setObjectRenderer(this.emptyRenderer),this._activeShader=null,this._activeRenderTarget=this.rootRenderTarget,this._activeTextureLocation=999,this._activeTexture=null,this.rootRenderTarget.activate(),this.state.resetToDefault(),this},e.prototype.handleContextLost=function(t){t.preventDefault()},e.prototype.handleContextRestored=function(){this._initContext(),this.textureManager.removeAll()},e.prototype.destroy=function(e){this.destroyPlugins(),this.view.removeEventListener("webglcontextlost",this.handleContextLost),this.view.removeEventListener("webglcontextrestored",this.handleContextRestored),this.textureManager.destroy(),t.prototype.destroy.call(this,e),this.uid=0,this.maskManager.destroy(),this.stencilManager.destroy(),this.filterManager.destroy(),
	this.maskManager=null,this.filterManager=null,this.textureManager=null,this.currentRenderer=null,this.handleContextLost=null,this.handleContextRestored=null,this._contextOptions=null,this.gl.useProgram(null),this.gl.getExtension("WEBGL_lose_context")&&this.gl.getExtension("WEBGL_lose_context").loseContext(),this.gl=null},e}(u.default);r.default=L,C.pluginTarget.mixin(L)},{"../../const":42,"../../utils":115,"../SystemRenderer":72,"./TextureGarbageCollector":78,"./TextureManager":79,"./WebGLState":81,"./managers/FilterManager":86,"./managers/MaskManager":87,"./managers/StencilManager":88,"./utils/ObjectRenderer":90,"./utils/RenderTarget":92,"./utils/mapWebGLDrawModesToPixi":95,"./utils/validateContext":96,"pixi-gl-core":12}],81:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("./utils/mapWebGLBlendModesToPixi"),s=n(o),a=0,u=1,h=2,l=3,c=4,f=function(){function t(e){i(this,t),this.activeState=new Uint8Array(16),this.defaultState=new Uint8Array(16),this.defaultState[0]=1,this.stackIndex=0,this.stack=[],this.gl=e,this.maxAttribs=e.getParameter(e.MAX_VERTEX_ATTRIBS),this.attribState={tempAttribState:new Array(this.maxAttribs),attribState:new Array(this.maxAttribs)},this.blendModes=(0,s.default)(e),this.nativeVaoExtension=e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object")}return t.prototype.push=function(){var t=this.stack[++this.stackIndex];t||(t=this.stack[this.stackIndex]=new Uint8Array(16));for(var e=0;e<this.activeState.length;e++)this.activeState[e]=t[e]},t.prototype.pop=function(){var t=this.stack[--this.stackIndex];this.setState(t)},t.prototype.setState=function(t){this.setBlend(t[a]),this.setDepthTest(t[u]),this.setFrontFace(t[h]),this.setCullFace(t[l]),this.setBlendMode(t[c])},t.prototype.setBlend=function(t){t=t?1:0,this.activeState[a]!==t&&(this.activeState[a]=t,this.gl[t?"enable":"disable"](this.gl.BLEND))},t.prototype.setBlendMode=function(t){t!==this.activeState[c]&&(this.activeState[c]=t,this.gl.blendFunc(this.blendModes[t][0],this.blendModes[t][1]))},t.prototype.setDepthTest=function(t){t=t?1:0,this.activeState[u]!==t&&(this.activeState[u]=t,this.gl[t?"enable":"disable"](this.gl.DEPTH_TEST))},t.prototype.setCullFace=function(t){t=t?1:0,this.activeState[l]!==t&&(this.activeState[l]=t,this.gl[t?"enable":"disable"](this.gl.CULL_FACE))},t.prototype.setFrontFace=function(t){t=t?1:0,this.activeState[h]!==t&&(this.activeState[h]=t,this.gl.frontFace(this.gl[t?"CW":"CCW"]))},t.prototype.resetAttributes=function(){for(var t=0;t<this.attribState.tempAttribState.length;t++)this.attribState.tempAttribState[t]=0;for(var e=0;e<this.attribState.attribState.length;e++)this.attribState.attribState[e]=0;for(var r=1;r<this.maxAttribs;r++)this.gl.disableVertexAttribArray(r)},t.prototype.resetToDefault=function(){this.nativeVaoExtension&&this.nativeVaoExtension.bindVertexArrayOES(null),this.resetAttributes();for(var t=0;t<this.activeState.length;++t)this.activeState[t]=32;this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.setState(this.defaultState)},t}();r.default=f},{"./utils/mapWebGLBlendModesToPixi":94}],82:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t("./extractUniformsFromSrc"),a=n(s),u=t("../../../utils"),h=t("../../../const"),l={},c=function(){function t(e,r,n){i(this,t),this.vertexSrc=e||t.defaultVertexSrc,this.fragmentSrc=r||t.defaultFragmentSrc,this.blendMode=h.BLEND_MODES.NORMAL,this.uniformData=n||(0,a.default)(this.vertexSrc,this.fragmentSrc,"projectionMatrix|uSampler"),this.uniforms={};for(var o in this.uniformData)this.uniforms[o]=this.uniformData[o].value;this.glShaders={},l[this.vertexSrc+this.fragmentSrc]||(l[this.vertexSrc+this.fragmentSrc]=(0,u.uid)()),this.glShaderKey=l[this.vertexSrc+this.fragmentSrc],this.padding=4,this.resolution=1,this.enabled=!0}return t.prototype.apply=function(t,e,r,n){t.applyFilter(this,e,r,n)},o(t,null,[{key:"defaultVertexSrc",get:function(){return["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 projectionMatrix;","uniform mat3 filterMatrix;","varying vec2 vTextureCoord;","varying vec2 vFilterCoord;","void main(void){","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;","   vTextureCoord = aTextureCoord ;","}"].join("\n")}},{key:"defaultFragmentSrc",get:function(){return["varying vec2 vTextureCoord;","varying vec2 vFilterCoord;","uniform sampler2D uSampler;","uniform sampler2D filterSampler;","void main(void){","   vec4 masky = texture2D(filterSampler, vFilterCoord);","   vec4 sample = texture2D(uSampler, vTextureCoord);","   vec4 color;","   if(mod(vFilterCoord.x, 1.0) > 0.5)","   {","     color = vec4(1.0, 0.0, 0.0, 1.0);","   }","   else","   {","     color = vec4(0.0, 1.0, 0.0, 1.0);","   }","   gl_FragColor = mix(sample, masky, 0.5);","   gl_FragColor *= sample.a;","}"].join("\n")}}]),t}();r.default=c},{"../../../const":42,"../../../utils":115,"./extractUniformsFromSrc":83}],83:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r){var n=o(t,r),i=o(e,r);return Object.assign(n,i)}function o(t){for(var e=new RegExp("^(projectionMatrix|uSampler|filterArea)$"),r={},n=void 0,i=t.replace(/\s+/g," ").split(/\s*;\s*/),o=0;o<i.length;o++){var s=i[o].trim();if(s.indexOf("uniform")>-1){var a=s.split(" "),h=a[1],l=a[2],c=1;l.indexOf("[")>-1&&(n=l.split(/\[|]/),l=n[0],c*=Number(n[1])),l.match(e)||(r[l]={value:u(h,c),name:l,type:h})}}return r}r.__esModule=!0,r.default=i;var s=t("pixi-gl-core"),a=n(s),u=a.default.shader.defaultValue},{"pixi-gl-core":12}],84:[function(t,e,r){"use strict";function n(t,e,r){var n=t.identity();return n.translate(e.x/r.width,e.y/r.height),n.scale(r.width,r.height),n}function i(t,e,r){var n=t.identity();n.translate(e.x/r.width,e.y/r.height);var i=r.width/e.width,o=r.height/e.height;return n.scale(i,o),n}function o(t,e,r,n){var i=n.worldTransform.copy(s.Matrix.TEMP_MATRIX),o=n._texture.baseTexture,a=t.identity(),u=r.height/r.width;a.translate(e.x/r.width,e.y/r.height),a.scale(1,u);var h=r.width/o.width,l=r.height/o.height;return i.tx/=o.width*h,i.ty/=o.width*h,i.invert(),a.prepend(i),a.scale(1,1/u),a.scale(h,l),a.translate(n.anchor.x,n.anchor.y),a}r.__esModule=!0,r.calculateScreenSpaceMatrix=n,r.calculateNormalizedScreenSpaceMatrix=i,r.calculateSpriteMatrix=o;var s=t("../../../math")},{"../../../math":66}],85:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../Filter"),u=n(a),h=t("../../../../math"),l=function(t){function e(r){i(this,e);var n=new h.Matrix,s=o(this,t.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n","#define GLSLIFY 1\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n"));return r.renderable=!1,s.maskSprite=r,s.maskMatrix=n,s}return s(e,t),e.prototype.apply=function(t,e,r){var n=this.maskSprite;this.uniforms.mask=n._texture,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,n),this.uniforms.alpha=n.worldAlpha,t.applyFilter(this,e,r)},e}(u.default);r.default=l},{"../../../../math":66,"../Filter":82}],86:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var u=t("./WebGLManager"),h=i(u),l=t("../utils/RenderTarget"),c=i(l),f=t("../utils/Quad"),d=i(f),p=t("../../../math"),v=t("../../../Shader"),y=i(v),g=t("../filters/filterTransforms"),m=n(g),_=t("bit-twiddle"),b=i(_),x=function t(){a(this,t),this.renderTarget=null,this.sourceFrame=new p.Rectangle,this.destinationFrame=new p.Rectangle,this.filters=[],this.target=null,this.resolution=1},T=function(t){function e(r){a(this,e);var n=o(this,t.call(this,r));return n.gl=n.renderer.gl,n.quad=new d.default(n.gl,r.state.attribState),n.shaderCache={},n.pool={},n.filterData=null,n}return s(e,t),e.prototype.pushFilter=function(t,e){var r=this.renderer,n=this.filterData;if(!n){n=this.renderer._activeRenderTarget.filterStack;var i=new x;i.sourceFrame=i.destinationFrame=this.renderer._activeRenderTarget.size,i.renderTarget=r._activeRenderTarget,this.renderer._activeRenderTarget.filterData=n={index:0,stack:[i]},this.filterData=n}var o=n.stack[++n.index];o||(o=n.stack[n.index]=new x);var s=e[0].resolution,a=0|e[0].padding,u=t.filterArea||t.getBounds(!0),h=o.sourceFrame,l=o.destinationFrame;h.x=(u.x*s|0)/s,h.y=(u.y*s|0)/s,h.width=(u.width*s|0)/s,h.height=(u.height*s|0)/s,n.stack[0].renderTarget.transform||h.fit(n.stack[0].destinationFrame),h.pad(a),l.width=h.width,l.height=h.height;var c=this.getPotRenderTarget(r.gl,h.width,h.height,s);o.target=t,o.filters=e,o.resolution=s,o.renderTarget=c,c.setFrame(l,h),r.bindRenderTarget(c),r.clear()},e.prototype.popFilter=function(){var t=this.filterData,e=t.stack[t.index-1],r=t.stack[t.index];this.quad.map(r.renderTarget.size,r.sourceFrame).upload();var n=r.filters;if(1===n.length)n[0].apply(this,r.renderTarget,e.renderTarget,!1),this.freePotRenderTarget(r.renderTarget);else{var i=r.renderTarget,o=this.getPotRenderTarget(this.renderer.gl,r.sourceFrame.width,r.sourceFrame.height,r.resolution);o.setFrame(r.destinationFrame,r.sourceFrame);var s=0;for(s=0;s<n.length-1;++s){n[s].apply(this,i,o,!0);var a=i;i=o,o=a}n[s].apply(this,i,e.renderTarget,!1),this.freePotRenderTarget(i),this.freePotRenderTarget(o)}t.index--,0===t.index&&(this.filterData=null)},e.prototype.applyFilter=function(t,e,r,n){var i=this.renderer,o=t.glShaders[i.CONTEXT_UID];if(o||(t.glShaderKey?(o=this.shaderCache[t.glShaderKey],o||(o=new y.default(this.gl,t.vertexSrc,t.fragmentSrc),t.glShaders[i.CONTEXT_UID]=this.shaderCache[t.glShaderKey]=o)):o=t.glShaders[i.CONTEXT_UID]=new y.default(this.gl,t.vertexSrc,t.fragmentSrc),this.quad.initVao(o)),i.bindRenderTarget(r),n){var s=i.gl;s.disable(s.SCISSOR_TEST),i.clear(),s.enable(s.SCISSOR_TEST)}r===i.maskManager.scissorRenderTarget&&i.maskManager.pushScissorMask(null,i.maskManager.scissorData),i.bindShader(o),this.syncUniforms(o,t),e.texture.bind(0),i._activeTextureLocation=0,i.state.setBlendMode(t.blendMode),this.quad.draw()},e.prototype.syncUniforms=function(t,e){var r=e.uniformData,n=e.uniforms,i=1,o=void 0;if(t.uniforms.data.filterArea){o=this.filterData.stack[this.filterData.index];var s=t.uniforms.filterArea;s[0]=o.renderTarget.size.width,s[1]=o.renderTarget.size.height,s[2]=o.sourceFrame.x,s[3]=o.sourceFrame.y,t.uniforms.filterArea=s}if(t.uniforms.data.filterClamp){o=this.filterData.stack[this.filterData.index];var a=t.uniforms.filterClamp;a[0]=0,a[1]=0,a[2]=(o.sourceFrame.width-1)/o.renderTarget.size.width,a[3]=(o.sourceFrame.height-1)/o.renderTarget.size.height,t.uniforms.filterClamp=a}for(var u in r)if("sampler2D"===r[u].type){if(t.uniforms[u]=i,n[u].baseTexture)this.renderer.bindTexture(n[u].baseTexture,i);else{var h=this.renderer.gl;this.renderer._activeTextureLocation=h.TEXTURE0+i,h.activeTexture(h.TEXTURE0+i),n[u].texture.bind()}i++}else if("mat3"===r[u].type)void 0!==n[u].a?t.uniforms[u]=n[u].toArray(!0):t.uniforms[u]=n[u];else if("vec2"===r[u].type)if(void 0!==n[u].x){var l=t.uniforms[u]||new Float32Array(2);l[0]=n[u].x,l[1]=n[u].y,t.uniforms[u]=l}else t.uniforms[u]=n[u];else"float"===r[u].type?t.uniforms.data[u].value!==r[u]&&(t.uniforms[u]=n[u]):t.uniforms[u]=n[u]},e.prototype.getRenderTarget=function(t,e){var r=this.filterData.stack[this.filterData.index],n=this.getPotRenderTarget(this.renderer.gl,r.sourceFrame.width,r.sourceFrame.height,e||r.resolution);return n.setFrame(r.destinationFrame,r.sourceFrame),n},e.prototype.returnRenderTarget=function(t){this.freePotRenderTarget(t)},e.prototype.calculateScreenSpaceMatrix=function(t){var e=this.filterData.stack[this.filterData.index];return m.calculateScreenSpaceMatrix(t,e.sourceFrame,e.renderTarget.size)},e.prototype.calculateNormalizedScreenSpaceMatrix=function(t){var e=this.filterData.stack[this.filterData.index];return m.calculateNormalizedScreenSpaceMatrix(t,e.sourceFrame,e.renderTarget.size,e.destinationFrame)},e.prototype.calculateSpriteMatrix=function(t,e){var r=this.filterData.stack[this.filterData.index];return m.calculateSpriteMatrix(t,r.sourceFrame,r.renderTarget.size,e)},e.prototype.destroy=function(){this.shaderCache=[],this.emptyPool()},e.prototype.getPotRenderTarget=function(t,e,r,n){e=b.default.nextPow2(e*n),r=b.default.nextPow2(r*n);var i=(65535&e)<<16|65535&r;this.pool[i]||(this.pool[i]=[]);var o=this.pool[i].pop()||new c.default(t,e,r,null,1);return o.resolution=n,o.defaultFrame.width=o.size.width=e/n,o.defaultFrame.height=o.size.height=r/n,o},e.prototype.emptyPool=function(){for(var t in this.pool){var e=this.pool[t];if(e)for(var r=0;r<e.length;r++)e[r].destroy(!0)}this.pool={}},e.prototype.freePotRenderTarget=function(t){var e=t.size.width*t.resolution,r=t.size.height*t.resolution,n=(65535&e)<<16|65535&r;this.pool[n].push(t)},e}(h.default);r.default=T},{"../../../Shader":41,"../../../math":66,"../filters/filterTransforms":84,"../utils/Quad":91,"../utils/RenderTarget":92,"./WebGLManager":89,"bit-twiddle":1}],87:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("./WebGLManager"),u=n(a),h=t("../filters/spriteMask/SpriteMaskFilter"),l=n(h),c=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.scissor=!1,n.scissorData=null,n.scissorRenderTarget=null,n.enableScissor=!0,n.alphaMaskPool=[],n.alphaMaskIndex=0,n}return s(e,t),e.prototype.pushMask=function(t,e){if(e.texture)this.pushSpriteMask(t,e);else if(this.enableScissor&&!this.scissor&&!this.renderer.stencilManager.stencilMaskStack.length&&e.isFastRect()){var r=e.worldTransform,n=Math.atan2(r.b,r.a);n=Math.round(n*(180/Math.PI)),n%90?this.pushStencilMask(e):this.pushScissorMask(t,e)}else this.pushStencilMask(e)},e.prototype.popMask=function(t,e){e.texture?this.popSpriteMask(t,e):this.enableScissor&&!this.renderer.stencilManager.stencilMaskStack.length?this.popScissorMask(t,e):this.popStencilMask(t,e)},e.prototype.pushSpriteMask=function(t,e){var r=this.alphaMaskPool[this.alphaMaskIndex];r||(r=this.alphaMaskPool[this.alphaMaskIndex]=[new l.default(e)]),r[0].resolution=this.renderer.resolution,r[0].maskSprite=e,t.filterArea=e.getBounds(!0),this.renderer.filterManager.pushFilter(t,r),this.alphaMaskIndex++},e.prototype.popSpriteMask=function(){this.renderer.filterManager.popFilter(),this.alphaMaskIndex--},e.prototype.pushStencilMask=function(t){this.renderer.currentRenderer.stop(),this.renderer.stencilManager.pushStencil(t)},e.prototype.popStencilMask=function(){this.renderer.currentRenderer.stop(),this.renderer.stencilManager.popStencil()},e.prototype.pushScissorMask=function(t,e){e.renderable=!0;var r=this.renderer._activeRenderTarget,n=e.getBounds();n.fit(r.size),e.renderable=!1,this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);var i=this.renderer.resolution;this.renderer.gl.scissor(n.x*i,(r.root?r.size.height-n.y-n.height:n.y)*i,n.width*i,n.height*i),this.scissorRenderTarget=r,this.scissorData=e,this.scissor=!0},e.prototype.popScissorMask=function(){this.scissorRenderTarget=null,this.scissorData=null,this.scissor=!1;var t=this.renderer.gl;t.disable(t.SCISSOR_TEST)},e}(u.default);r.default=c},{"../filters/spriteMask/SpriteMaskFilter":85,"./WebGLManager":89}],88:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("./WebGLManager"),u=n(a),h=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.stencilMaskStack=null,n}return s(e,t),e.prototype.setMaskStack=function(t){this.stencilMaskStack=t;var e=this.renderer.gl;0===t.length?e.disable(e.STENCIL_TEST):e.enable(e.STENCIL_TEST)},e.prototype.pushStencil=function(t){this.renderer.setObjectRenderer(this.renderer.plugins.graphics),this.renderer._activeRenderTarget.attachStencilBuffer();var e=this.renderer.gl,r=this.stencilMaskStack;0===r.length&&(e.enable(e.STENCIL_TEST),e.clear(e.STENCIL_BUFFER_BIT),e.stencilFunc(e.ALWAYS,1,1)),r.push(t),e.colorMask(!1,!1,!1,!1),e.stencilOp(e.KEEP,e.KEEP,e.INCR),this.renderer.plugins.graphics.render(t),e.colorMask(!0,!0,!0,!0),e.stencilFunc(e.NOTEQUAL,0,r.length),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)},e.prototype.popStencil=function(){this.renderer.setObjectRenderer(this.renderer.plugins.graphics);var t=this.renderer.gl,e=this.stencilMaskStack,r=e.pop();0===e.length?t.disable(t.STENCIL_TEST):(t.colorMask(!1,!1,!1,!1),t.stencilOp(t.KEEP,t.KEEP,t.DECR),this.renderer.plugins.graphics.render(r),t.colorMask(!0,!0,!0,!0),t.stencilFunc(t.NOTEQUAL,0,e.length),t.stencilOp(t.KEEP,t.KEEP,t.KEEP))},e.prototype.destroy=function(){u.default.prototype.destroy.call(this),this.stencilMaskStack.stencilStack=null},e}(u.default);r.default=h},{"./WebGLManager":89}],89:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(e){n(this,t),this.renderer=e,this.renderer.on("context",this.onContextChange,this)}return t.prototype.onContextChange=function(){},t.prototype.destroy=function(){this.renderer.off("context",this.onContextChange,this),this.renderer=null},t}();r.default=i},{}],90:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../managers/WebGLManager"),u=n(a),h=function(t){function e(){return i(this,e),o(this,t.apply(this,arguments))}return s(e,t),e.prototype.start=function(){},e.prototype.stop=function(){this.flush()},e.prototype.flush=function(){},e.prototype.render=function(t){},e}(u.default);r.default=h},{"../managers/WebGLManager":89}],91:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("pixi-gl-core"),s=n(o),a=t("../../../utils/createIndicesForQuads"),u=n(a),h=function(){function t(e,r){i(this,t),this.gl=e,this.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),this.uvs=new Float32Array([0,0,1,0,1,1,0,1]),this.interleaved=new Float32Array(16);for(var n=0;n<4;n++)this.interleaved[4*n]=this.vertices[2*n],this.interleaved[4*n+1]=this.vertices[2*n+1],this.interleaved[4*n+2]=this.uvs[2*n],this.interleaved[4*n+3]=this.uvs[2*n+1];this.indices=(0,u.default)(1),this.vertexBuffer=s.default.GLBuffer.createVertexBuffer(e,this.interleaved,e.STATIC_DRAW),this.indexBuffer=s.default.GLBuffer.createIndexBuffer(e,this.indices,e.STATIC_DRAW),this.vao=new s.default.VertexArrayObject(e,r)}return t.prototype.initVao=function(t){this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer,t.attributes.aVertexPosition,this.gl.FLOAT,!1,16,0).addAttribute(this.vertexBuffer,t.attributes.aTextureCoord,this.gl.FLOAT,!1,16,8)},t.prototype.map=function(t,e){var r=0,n=0;return this.uvs[0]=r,this.uvs[1]=n,this.uvs[2]=r+e.width/t.width,this.uvs[3]=n,this.uvs[4]=r+e.width/t.width,this.uvs[5]=n+e.height/t.height,this.uvs[6]=r,this.uvs[7]=n+e.height/t.height,r=e.x,n=e.y,this.vertices[0]=r,this.vertices[1]=n,this.vertices[2]=r+e.width,this.vertices[3]=n,this.vertices[4]=r+e.width,this.vertices[5]=n+e.height,this.vertices[6]=r,this.vertices[7]=n+e.height,this},t.prototype.draw=function(){return this.vao.bind().draw(this.gl.TRIANGLES,6,0).unbind(),this},t.prototype.upload=function(){for(var t=0;t<4;t++)this.interleaved[4*t]=this.vertices[2*t],this.interleaved[4*t+1]=this.vertices[2*t+1],this.interleaved[4*t+2]=this.uvs[2*t],this.interleaved[4*t+3]=this.uvs[2*t+1];return this.vertexBuffer.upload(this.interleaved),this},t.prototype.destroy=function(){var t=this.gl;t.deleteBuffer(this.vertexBuffer),t.deleteBuffer(this.indexBuffer)},t}();r.default=h},{"../../../utils/createIndicesForQuads":113,"pixi-gl-core":12}],92:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../../math"),o=t("../../../const"),s=t("pixi-gl-core"),a=function(){function t(e,r,a,u,h,l){n(this,t),this.gl=e,this.frameBuffer=null,this.texture=null,this.clearColor=[0,0,0,0],this.size=new i.Rectangle(0,0,1,1),this.resolution=h||o.RESOLUTION,this.projectionMatrix=new i.Matrix,this.transform=null,this.frame=null,this.defaultFrame=new i.Rectangle,this.destinationFrame=null,this.sourceFrame=null,this.stencilBuffer=null,this.stencilMaskStack=[],this.filterData=null,this.scaleMode=u||o.SCALE_MODES.DEFAULT,this.root=l,this.root?(this.frameBuffer=new s.GLFramebuffer(e,100,100),this.frameBuffer.framebuffer=null):(this.frameBuffer=s.GLFramebuffer.createRGBA(e,100,100),this.scaleMode===o.SCALE_MODES.NEAREST?this.frameBuffer.texture.enableNearestScaling():this.frameBuffer.texture.enableLinearScaling(),this.texture=this.frameBuffer.texture),this.setFrame(),this.resize(r,a)}return t.prototype.clear=function(t){var e=t||this.clearColor;this.frameBuffer.clear(e[0],e[1],e[2],e[3])},t.prototype.attachStencilBuffer=function(){this.root||this.frameBuffer.enableStencil()},t.prototype.setFrame=function(t,e){this.destinationFrame=t||this.destinationFrame||this.defaultFrame,this.sourceFrame=e||this.sourceFrame||t},t.prototype.activate=function(){var t=this.gl;this.frameBuffer.bind(),this.calculateProjection(this.destinationFrame,this.sourceFrame),this.transform&&this.projectionMatrix.append(this.transform),this.destinationFrame!==this.sourceFrame?(t.enable(t.SCISSOR_TEST),t.scissor(0|this.destinationFrame.x,0|this.destinationFrame.y,this.destinationFrame.width*this.resolution|0,this.destinationFrame.height*this.resolution|0)):t.disable(t.SCISSOR_TEST),t.viewport(0|this.destinationFrame.x,0|this.destinationFrame.y,this.destinationFrame.width*this.resolution|0,this.destinationFrame.height*this.resolution|0)},t.prototype.calculateProjection=function(t,e){var r=this.projectionMatrix;e=e||t,r.identity(),this.root?(r.a=1/t.width*2,r.d=-1/t.height*2,r.tx=-1-e.x*r.a,r.ty=1-e.y*r.d):(r.a=1/t.width*2,r.d=1/t.height*2,r.tx=-1-e.x*r.a,r.ty=-1-e.y*r.d)},t.prototype.resize=function(t,e){if(t=0|t,e=0|e,this.size.width!==t||this.size.height!==e){this.size.width=t,this.size.height=e,this.defaultFrame.width=t,this.defaultFrame.height=e,this.frameBuffer.resize(t*this.resolution,e*this.resolution);var r=this.frame||this.size;this.calculateProjection(r)}},t.prototype.destroy=function(){this.frameBuffer.destroy(),this.frameBuffer=null,this.texture=null},t}();r.default=a},{"../../../const":42,"../../../math":66,"pixi-gl-core":12}],93:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r=!e;if(r){var n=document.createElement("canvas");n.width=1,n.height=1,e=a.default.createContext(n)}for(var i=e.createShader(e.FRAGMENT_SHADER);;){var s=u.replace(/%forloop%/gi,o(t));if(e.shaderSource(i,s),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS))break;t=t/2|0}return r&&e.getExtension("WEBGL_lose_context")&&e.getExtension("WEBGL_lose_context").loseContext(),t}function o(t){for(var e="",r=0;r<t;++r)r>0&&(e+="\nelse "),r<t-1&&(e+="if(test == "+r+".0){}");return e}r.__esModule=!0,r.default=i;var s=t("pixi-gl-core"),a=n(s),u=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join("\n")},{"pixi-gl-core":12}],94:[function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e[i.BLEND_MODES.NORMAL]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.ADD]=[t.ONE,t.DST_ALPHA],e[i.BLEND_MODES.MULTIPLY]=[t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SCREEN]=[t.ONE,t.ONE_MINUS_SRC_COLOR],e[i.BLEND_MODES.OVERLAY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.DARKEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.LIGHTEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR_DODGE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR_BURN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.HARD_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SOFT_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.DIFFERENCE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.EXCLUSION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.HUE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SATURATION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.LUMINOSITY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e}r.__esModule=!0,r.default=n;var i=t("../../../const")},{"../../../const":42}],95:[function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e[i.DRAW_MODES.POINTS]=t.POINTS,e[i.DRAW_MODES.LINES]=t.LINES,e[i.DRAW_MODES.LINE_LOOP]=t.LINE_LOOP,e[i.DRAW_MODES.LINE_STRIP]=t.LINE_STRIP,e[i.DRAW_MODES.TRIANGLES]=t.TRIANGLES,e[i.DRAW_MODES.TRIANGLE_STRIP]=t.TRIANGLE_STRIP,e[i.DRAW_MODES.TRIANGLE_FAN]=t.TRIANGLE_FAN,e}r.__esModule=!0,r.default=n;var i=t("../../../const")},{"../../../const":42}],96:[function(t,e,r){"use strict";function n(t){var e=t.getContextAttributes();e.stencil||console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")}r.__esModule=!0,r.default=n},{}],97:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../math"),h=t("../utils"),l=t("../const"),c=t("../textures/Texture"),f=n(c),d=t("../display/Container"),p=n(d),v=new u.Point,y=function(t){function e(r){i(this,e);var n=o(this,t.call(this));return n._anchor=new u.ObservablePoint(n._onAnchorUpdate,n),n._texture=null,n._width=0,n._height=0,n._tint=null,n._tintRGB=null,n.tint=16777215,n.blendMode=l.BLEND_MODES.NORMAL,n.shader=null,n.cachedTint=16777215,n.texture=r||f.default.EMPTY,n.vertexData=new Float32Array(8),n.vertexTrimmedData=null,n._transformID=-1,n._textureID=-1,n}return s(e,t),e.prototype._onTextureUpdate=function(){this._textureID=-1,this._width&&(this.scale.x=(0,h.sign)(this.scale.x)*this._width/this.texture.orig.width),this._height&&(this.scale.y=(0,h.sign)(this.scale.y)*this._height/this.texture.orig.height)},e.prototype._onAnchorUpdate=function(){this._transformID=-1},e.prototype.calculateVertices=function(){if(this._transformID!==this.transform._worldID||this._textureID!==this._texture._updateID){this._transformID=this.transform._worldID,this._textureID=this._texture._updateID;var t=this._texture,e=this.transform.worldTransform,r=e.a,n=e.b,i=e.c,o=e.d,s=e.tx,a=e.ty,u=this.vertexData,h=t.trim,l=t.orig,c=this._anchor,f=0,d=0,p=0,v=0;h?(d=h.x-c._x*l.width,f=d+h.width,v=h.y-c._y*l.height,p=v+h.height):(f=l.width*(1-c._x),d=l.width*-c._x,p=l.height*(1-c._y),v=l.height*-c._y),u[0]=r*d+i*v+s,u[1]=o*v+n*d+a,u[2]=r*f+i*v+s,u[3]=o*v+n*f+a,u[4]=r*f+i*p+s,u[5]=o*p+n*f+a,u[6]=r*d+i*p+s,u[7]=o*p+n*d+a}},e.prototype.calculateTrimmedVertices=function(){this.vertexTrimmedData||(this.vertexTrimmedData=new Float32Array(8));var t=this._texture,e=this.vertexTrimmedData,r=t.orig,n=this._anchor,i=this.transform.worldTransform,o=i.a,s=i.b,a=i.c,u=i.d,h=i.tx,l=i.ty,c=r.width*(1-n._x),f=r.width*-n._x,d=r.height*(1-n._y),p=r.height*-n._y;
	e[0]=o*f+a*p+h,e[1]=u*p+s*f+l,e[2]=o*c+a*p+h,e[3]=u*p+s*c+l,e[4]=o*c+a*d+h,e[5]=u*d+s*c+l,e[6]=o*f+a*d+h,e[7]=u*d+s*f+l},e.prototype._renderWebGL=function(t){this.calculateVertices(),t.setObjectRenderer(t.plugins.sprite),t.plugins.sprite.render(this)},e.prototype._renderCanvas=function(t){t.plugins.sprite.render(this)},e.prototype._calculateBounds=function(){var t=this._texture.trim,e=this._texture.orig;!t||t.width===e.width&&t.height===e.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.prototype.getLocalBounds=function(e){return 0===this.children.length?(this._bounds.minX=this._texture.orig.width*-this._anchor._x,this._bounds.minY=this._texture.orig.height*-this._anchor._y,this._bounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._bounds.maxY=this._texture.orig.height*(1-this._anchor._x),e||(this._localBoundsRect||(this._localBoundsRect=new u.Rectangle),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,v);var e=this._texture.orig.width,r=this._texture.orig.height,n=-e*this.anchor.x,i=0;return v.x>n&&v.x<n+e&&(i=-r*this.anchor.y,v.y>i&&v.y<i+r)},e.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this._anchor=null;var r="boolean"==typeof e?e:e&&e.texture;if(r){var n="boolean"==typeof e?e:e&&e.baseTexture;this._texture.destroy(!!n)}this._texture=null,this.shader=null},e.from=function(t){return new e(f.default.from(t))},e.fromFrame=function(t){var r=h.TextureCache[t];if(!r)throw new Error('The frameId "'+t+'" does not exist in the texture cache');return new e(r)},e.fromImage=function(t,r,n){return new e(f.default.fromImage(t,r,n))},a(e,[{key:"width",get:function(){return Math.abs(this.scale.x)*this.texture.orig.width},set:function(t){var e=(0,h.sign)(this.scale.x)||1;this.scale.x=e*t/this.texture.orig.width,this._width=t}},{key:"height",get:function(){return Math.abs(this.scale.y)*this.texture.orig.height},set:function(t){var e=(0,h.sign)(this.scale.y)||1;this.scale.y=e*t/this.texture.orig.height,this._height=t}},{key:"anchor",get:function(){return this._anchor},set:function(t){this._anchor.copy(t)}},{key:"tint",get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(65280&t)+((255&t)<<16)}},{key:"texture",get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture=t,this.cachedTint=16777215,this._textureID=-1,t&&(t.baseTexture.hasLoaded?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))}}]),e}(p.default);r.default=y},{"../const":42,"../display/Container":44,"../math":66,"../textures/Texture":108,"../utils":115}],98:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("../../renderers/canvas/CanvasRenderer"),s=n(o),a=t("../../const"),u=t("../../math"),h=t("./CanvasTinter"),l=n(h),c=new u.Matrix,f=function(){function t(e){i(this,t),this.renderer=e}return t.prototype.render=function(t){var e=t._texture,r=this.renderer,n=e._frame.width,i=e._frame.height,o=t.transform.worldTransform,s=0,h=0;if(!(e.orig.width<=0||e.orig.height<=0)&&e.baseTexture.source&&(r.setBlendMode(t.blendMode),e.valid)){r.context.globalAlpha=t.worldAlpha;var f=e.baseTexture.scaleMode===a.SCALE_MODES.LINEAR;r.smoothProperty&&r.context[r.smoothProperty]!==f&&(r.context[r.smoothProperty]=f),e.trim?(s=e.trim.width/2+e.trim.x-t.anchor.x*e.orig.width,h=e.trim.height/2+e.trim.y-t.anchor.y*e.orig.height):(s=(.5-t.anchor.x)*e.orig.width,h=(.5-t.anchor.y)*e.orig.height),e.rotate&&(o.copy(c),o=c,u.GroupD8.matrixAppendRotationInv(o,e.rotate,s,h),s=0,h=0),s-=n/2,h-=i/2,r.roundPixels?(r.context.setTransform(o.a,o.b,o.c,o.d,o.tx*r.resolution|0,o.ty*r.resolution|0),s=0|s,h=0|h):r.context.setTransform(o.a,o.b,o.c,o.d,o.tx*r.resolution,o.ty*r.resolution);var d=e.baseTexture.resolution;16777215!==t.tint?(t.cachedTint!==t.tint&&(t.cachedTint=t.tint,t.tintedTexture=l.default.getTintedTexture(t,t.tint)),r.context.drawImage(t.tintedTexture,0,0,n*d,i*d,s*r.resolution,h*r.resolution,n*r.resolution,i*r.resolution)):r.context.drawImage(e.baseTexture.source,e._frame.x*d,e._frame.y*d,n*d,i*d,s*r.resolution,h*r.resolution,n*r.resolution,i*r.resolution)}},t.prototype.destroy=function(){this.renderer=null},t}();r.default=f,s.default.registerPlugin("sprite",f)},{"../../const":42,"../../math":66,"../../renderers/canvas/CanvasRenderer":73,"./CanvasTinter":99}],99:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("../../utils"),o=t("../../renderers/canvas/utils/canUseNewCanvasBlendModes"),s=n(o),a={getTintedTexture:function(t,e){var r=t.texture;e=a.roundColor(e);var n="#"+("00000"+(0|e).toString(16)).substr(-6);if(r.tintCache=r.tintCache||{},r.tintCache[n])return r.tintCache[n];var i=a.canvas||document.createElement("canvas");if(a.tintMethod(r,e,i),a.convertTintToImage){var o=new Image;o.src=i.toDataURL(),r.tintCache[n]=o}else r.tintCache[n]=i,a.canvas=null;return i},tintWithMultiply:function(t,e,r){var n=r.getContext("2d"),i=t._frame.clone(),o=t.baseTexture.resolution;i.x*=o,i.y*=o,i.width*=o,i.height*=o,r.width=i.width,r.height=i.height,n.fillStyle="#"+("00000"+(0|e).toString(16)).substr(-6),n.fillRect(0,0,i.width,i.height),n.globalCompositeOperation="multiply",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height),n.globalCompositeOperation="destination-atop",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height)},tintWithOverlay:function(t,e,r){var n=r.getContext("2d"),i=t._frame.clone(),o=t.baseTexture.resolution;i.x*=o,i.y*=o,i.width*=o,i.height*=o,r.width=i.width,r.height=i.height,n.globalCompositeOperation="copy",n.fillStyle="#"+("00000"+(0|e).toString(16)).substr(-6),n.fillRect(0,0,i.width,i.height),n.globalCompositeOperation="destination-atop",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height)},tintWithPerPixel:function(t,e,r){var n=r.getContext("2d"),o=t._frame.clone(),s=t.baseTexture.resolution;o.x*=s,o.y*=s,o.width*=s,o.height*=s,r.width=o.width,r.height=o.height,n.globalCompositeOperation="copy",n.drawImage(t.baseTexture.source,o.x,o.y,o.width,o.height,0,0,o.width,o.height);for(var a=(0,i.hex2rgb)(e),u=a[0],h=a[1],l=a[2],c=n.getImageData(0,0,o.width,o.height),f=c.data,d=0;d<f.length;d+=4)f[d+0]*=u,f[d+1]*=h,f[d+2]*=l;n.putImageData(c,0,0)},roundColor:function(t){var e=a.cacheStepsPerColorChannel,r=(0,i.hex2rgb)(t);return r[0]=Math.min(255,r[0]/e*e),r[1]=Math.min(255,r[1]/e*e),r[2]=Math.min(255,r[2]/e*e),(0,i.rgb2hex)(r)},cacheStepsPerColorChannel:8,convertTintToImage:!1,canUseMultiply:(0,s.default)(),tintMethod:0};a.tintMethod=a.canUseMultiply?a.tintWithMultiply:a.tintWithPerPixel,r.default=a},{"../../renderers/canvas/utils/canUseNewCanvasBlendModes":76,"../../utils":115}],100:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(e){n(this,t),this.vertices=new ArrayBuffer(e),this.float32View=new Float32Array(this.vertices),this.uint32View=new Uint32Array(this.vertices)}return t.prototype.destroy=function(){this.vertices=null,this.positions=null,this.uvs=null,this.colors=null},t}();r.default=i},{}],101:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../../renderers/webgl/utils/ObjectRenderer"),u=n(a),h=t("../../renderers/webgl/WebGLRenderer"),l=n(h),c=t("../../utils/createIndicesForQuads"),f=n(c),d=t("./generateMultiTextureShader"),p=n(d),v=t("../../renderers/webgl/utils/checkMaxIfStatmentsInShader"),y=n(v),g=t("./BatchBuffer"),m=n(g),_=t("../../const"),b=t("pixi-gl-core"),x=n(b),T=t("bit-twiddle"),w=n(T),E=0,S=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));n.vertSize=5,n.vertByteSize=4*n.vertSize,n.size=_.SPRITE_BATCH_SIZE,n.buffers=[];for(var s=1;s<=w.default.nextPow2(n.size);s*=2)n.buffers.push(new m.default(4*s*n.vertByteSize));n.indices=(0,f.default)(n.size),n.shaders=null,n.currentIndex=0,E=0,n.groups=[];for(var a=0;a<n.size;a++)n.groups[a]={textures:[],textureCount:0,ids:[],size:0,start:0,blend:0};return n.sprites=[],n.vertexBuffers=[],n.vaos=[],n.vaoMax=2,n.vertexCount=0,n.renderer.on("prerender",n.onPrerender,n),n}return s(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=(0,y.default)(this.MAX_TEXTURES,t),this.shaders=new Array(this.MAX_TEXTURES),this.shaders[0]=(0,p.default)(t,1),this.shaders[1]=(0,p.default)(t,2),this.indexBuffer=x.default.GLBuffer.createIndexBuffer(t,this.indices,t.STATIC_DRAW);for(var e=this.shaders[1],r=0;r<this.vaoMax;r++)this.vertexBuffers[r]=x.default.GLBuffer.createVertexBuffer(t,null,t.STREAM_DRAW),this.vaos[r]=this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[r],e.attributes.aVertexPosition,t.FLOAT,!1,this.vertByteSize,0).addAttribute(this.vertexBuffers[r],e.attributes.aTextureCoord,t.UNSIGNED_SHORT,!0,this.vertByteSize,8).addAttribute(this.vertexBuffers[r],e.attributes.aColor,t.UNSIGNED_BYTE,!0,this.vertByteSize,12).addAttribute(this.vertexBuffers[r],e.attributes.aTextureId,t.FLOAT,!1,this.vertByteSize,16);this.vao=this.vaos[0],this.currentBlendMode=99999},e.prototype.onPrerender=function(){this.vertexCount=0},e.prototype.render=function(t){this.currentIndex>=this.size&&this.flush(),t.texture._uvs&&(this.sprites[this.currentIndex++]=t)},e.prototype.flush=function(){if(0!==this.currentIndex){var t=this.renderer.gl,e=w.default.nextPow2(this.currentIndex),r=w.default.log2(e),n=this.buffers[r],i=this.sprites,o=this.groups,s=n.float32View,a=n.uint32View,u=0,h=void 0,l=void 0,c=1,f=0,d=o[0],v=void 0,y=void 0,g=void 0,m=void 0,_=i[0].blendMode,b=void 0;d.textureCount=0,d.start=0,d.blend=_,E++;var T=void 0;for(T=0;T<this.currentIndex;T++){var S=i[T];if(h=S._texture.baseTexture,_!==S.blendMode&&(_=S.blendMode,l=null,f=this.MAX_TEXTURES,E++),l!==h&&(l=h,h._enabled!==E&&(f===this.MAX_TEXTURES&&(E++,f=0,d.size=T-d.start,d=o[c++],d.textureCount=0,d.blend=_,d.start=T),h._enabled=E,h._id=f,d.textures[d.textureCount++]=h,f++)),v=S.vertexData,y=S._tintRGB+(255*S.worldAlpha<<24),g=S._texture._uvs.uvsUint32,m=h._id,this.renderer.roundPixels){var O=this.renderer.resolution;s[u]=(v[0]*O|0)/O,s[u+1]=(v[1]*O|0)/O,s[u+5]=(v[2]*O|0)/O,s[u+6]=(v[3]*O|0)/O,s[u+10]=(v[4]*O|0)/O,s[u+11]=(v[5]*O|0)/O,s[u+15]=(v[6]*O|0)/O,s[u+16]=(v[7]*O|0)/O}else s[u]=v[0],s[u+1]=v[1],s[u+5]=v[2],s[u+6]=v[3],s[u+10]=v[4],s[u+11]=v[5],s[u+15]=v[6],s[u+16]=v[7];a[u+2]=g[0],a[u+7]=g[1],a[u+12]=g[2],a[u+17]=g[3],a[u+3]=a[u+8]=a[u+13]=a[u+18]=y,s[u+4]=s[u+9]=s[u+14]=s[u+19]=m,u+=20}for(d.size=T-d.start,this.vertexCount++,this.vaoMax<=this.vertexCount&&(this.vaoMax++,b=this.shaders[1],this.vertexBuffers[this.vertexCount]=x.default.GLBuffer.createVertexBuffer(t,null,t.STREAM_DRAW),this.vaos[this.vertexCount]=this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[this.vertexCount],b.attributes.aVertexPosition,t.FLOAT,!1,this.vertByteSize,0).addAttribute(this.vertexBuffers[this.vertexCount],b.attributes.aTextureCoord,t.UNSIGNED_SHORT,!0,this.vertByteSize,8).addAttribute(this.vertexBuffers[this.vertexCount],b.attributes.aColor,t.UNSIGNED_BYTE,!0,this.vertByteSize,12).addAttribute(this.vertexBuffers[this.vertexCount],b.attributes.aTextureId,t.FLOAT,!1,this.vertByteSize,16)),this.vertexBuffers[this.vertexCount].upload(n.vertices,0),this.vao=this.vaos[this.vertexCount].bind(),T=0;T<c;T++){var M=o[T],P=M.textureCount;b=this.shaders[P-1],b||(b=this.shaders[P-1]=(0,p.default)(t,P)),this.renderer.bindShader(b);for(var C=0;C<P;C++)this.renderer.bindTexture(M.textures[C],C);this.renderer.state.setBlendMode(M.blend),t.drawElements(t.TRIANGLES,6*M.size,t.UNSIGNED_SHORT,6*M.start*2)}this.currentIndex=0}},e.prototype.start=function(){},e.prototype.stop=function(){this.flush(),this.vao.unbind()},e.prototype.destroy=function(){for(var e=0;e<this.vaoMax;e++)this.vertexBuffers[e].destroy(),this.vaos[e].destroy();this.indexBuffer.destroy(),this.renderer.off("prerender",this.onPrerender,this),t.prototype.destroy.call(this);for(var r=0;r<this.shaders.length;r++)this.shaders[r]&&this.shaders[r].destroy();this.vertexBuffers=null,this.vaos=null,this.indexBuffer=null,this.indices=null,this.sprites=null;for(var n=0;n<this.buffers.length;n++)this.buffers[n].destroy()},e}(u.default);r.default=S,l.default.registerPlugin("sprite",S)},{"../../const":42,"../../renderers/webgl/WebGLRenderer":80,"../../renderers/webgl/utils/ObjectRenderer":90,"../../renderers/webgl/utils/checkMaxIfStatmentsInShader":93,"../../utils/createIndicesForQuads":113,"./BatchBuffer":100,"./generateMultiTextureShader":102,"bit-twiddle":1,"pixi-gl-core":12}],102:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r="#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",n=u;n=n.replace(/%count%/gi,e),n=n.replace(/%forloop%/gi,o(e));for(var i=new a.default(t,r,n),s=[],h=0;h<e;h++)s[h]=h;return i.bind(),i.uniforms.uSamplers=s,i}function o(t){var e="";e+="\n",e+="\n";for(var r=0;r<t;r++)r>0&&(e+="\nelse "),r<t-1&&(e+="if(textureId == "+r+".0)"),e+="\n{",e+="\n\tcolor = texture2D(uSamplers["+r+"], vTextureCoord);",e+="\n}";return e+="\n",e+="\n"}r.__esModule=!0,r.default=i;var s=t("../../Shader"),a=n(s),u=["varying vec2 vTextureCoord;","varying vec4 vColor;","varying float vTextureId;","uniform sampler2D uSamplers[%count%];","void main(void){","vec4 color;","float textureId = floor(vTextureId+0.5);","%forloop%","gl_FragColor = color * vColor;","}"].join("\n")},{"../../Shader":41}],103:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../sprites/Sprite"),h=n(u),l=t("../textures/Texture"),c=n(l),f=t("../math"),d=t("../utils"),p=t("../const"),v=t("./TextStyle"),y=n(v),g={texture:!0,children:!1,baseTexture:!0},m=function(t){function e(r,n){i(this,e);var s=document.createElement("canvas");s.width=3,s.height=3;var a=c.default.fromCanvas(s);a.orig=new f.Rectangle,a.trim=new f.Rectangle;var u=o(this,t.call(this,a));return u.canvas=s,u.context=u.canvas.getContext("2d"),u.resolution=p.RESOLUTION,u._text=null,u._style=null,u._styleListener=null,u._font="",u.text=r,u.style=n,u.localStyleID=-1,u}return s(e,t),e.prototype.updateText=function(t){var e=this._style;if(this.localStyleID!==e.styleID&&(this.dirty=!0,this.localStyleID=e.styleID),this.dirty||!t){var r="number"==typeof e.fontSize?e.fontSize+"px":e.fontSize;this._font=e.fontStyle+" "+e.fontVariant+" "+e.fontWeight+" "+r+" "+e.fontFamily,this.context.font=this._font;for(var n=e.wordWrap?this.wordWrap(this._text):this._text,i=n.split(/(?:\r\n|\r|\n)/),o=new Array(i.length),s=0,a=this.determineFontProperties(this._font),u=0;u<i.length;u++){var h=this.context.measureText(i[u]).width+(i[u].length-1)*e.letterSpacing;o[u]=h,s=Math.max(s,h)}var l=s+e.strokeThickness;e.dropShadow&&(l+=e.dropShadowDistance),l+=2*e.padding,this.canvas.width=Math.ceil((l+this.context.lineWidth)*this.resolution);var c=this.style.lineHeight||a.fontSize+e.strokeThickness,f=Math.max(c,a.fontSize+e.strokeThickness)+(i.length-1)*c;e.dropShadow&&(f+=e.dropShadowDistance),this.canvas.height=Math.ceil((f+2*this._style.padding)*this.resolution),this.context.scale(this.resolution,this.resolution),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=this._font,this.context.strokeStyle=e.stroke,this.context.lineWidth=e.strokeThickness,this.context.textBaseline=e.textBaseline,this.context.lineJoin=e.lineJoin,this.context.miterLimit=e.miterLimit;var d=void 0,p=void 0;if(e.dropShadow){e.dropShadowBlur>0?(this.context.shadowColor=e.dropShadowColor,this.context.shadowBlur=e.dropShadowBlur):this.context.fillStyle=e.dropShadowColor;for(var v=Math.cos(e.dropShadowAngle)*e.dropShadowDistance,y=Math.sin(e.dropShadowAngle)*e.dropShadowDistance,g=0;g<i.length;g++)d=e.strokeThickness/2,p=e.strokeThickness/2+g*c+a.ascent,"right"===e.align?d+=s-o[g]:"center"===e.align&&(d+=(s-o[g])/2),e.fill&&(this.drawLetterSpacing(i[g],d+v+e.padding,p+y+e.padding),e.stroke&&e.strokeThickness&&(this.context.strokeStyle=e.dropShadowColor,this.drawLetterSpacing(i[g],d+v+e.padding,p+y+e.padding,!0),this.context.strokeStyle=e.stroke))}this.context.fillStyle=this._generateFillStyle(e,i);for(var m=0;m<i.length;m++)d=e.strokeThickness/2,p=e.strokeThickness/2+m*c+a.ascent,"right"===e.align?d+=s-o[m]:"center"===e.align&&(d+=(s-o[m])/2),e.stroke&&e.strokeThickness&&this.drawLetterSpacing(i[m],d+e.padding,p+e.padding,!0),e.fill&&this.drawLetterSpacing(i[m],d+e.padding,p+e.padding);this.updateTexture()}},e.prototype.drawLetterSpacing=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=this._style,o=i.letterSpacing;if(0===o)return void(n?this.context.strokeText(t,e,r):this.context.fillText(t,e,r));for(var s=String.prototype.split.call(t,""),a=e,u=0,h="";u<t.length;)h=s[u++],n?this.context.strokeText(h,a,r):this.context.fillText(h,a,r),a+=this.context.measureText(h).width+o},e.prototype.updateTexture=function(){var t=this._texture,e=this._style;t.baseTexture.hasLoaded=!0,t.baseTexture.resolution=this.resolution,t.baseTexture.realWidth=this.canvas.width,t.baseTexture.realHeight=this.canvas.height,t.baseTexture.width=this.canvas.width/this.resolution,t.baseTexture.height=this.canvas.height/this.resolution,t.trim.width=t._frame.width=this.canvas.width/this.resolution,t.trim.height=t._frame.height=this.canvas.height/this.resolution,t.trim.x=-e.padding,t.trim.y=-e.padding,t.orig.width=t._frame.width-2*e.padding,t.orig.height=t._frame.height-2*e.padding,this._onTextureUpdate(),t.baseTexture.emit("update",t.baseTexture),this.dirty=!1},e.prototype.renderWebGL=function(e){this.resolution!==e.resolution&&(this.resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype.renderWebGL.call(this,e)},e.prototype._renderCanvas=function(e){this.resolution!==e.resolution&&(this.resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype._renderCanvas.call(this,e)},e.prototype.determineFontProperties=function(t){var r=e.fontPropertiesCache[t];if(!r){r={};var n=e.fontPropertiesCanvas,i=e.fontPropertiesContext;i.font=t;var o=Math.ceil(i.measureText("|MÉq").width),s=Math.ceil(i.measureText("M").width),a=2*s;s=1.4*s|0,n.width=o,n.height=a,i.fillStyle="#f00",i.fillRect(0,0,o,a),i.font=t,i.textBaseline="alphabetic",i.fillStyle="#000",i.fillText("|MÉq",0,s);var u=i.getImageData(0,0,o,a).data,h=u.length,l=4*o,c=0,f=0,d=!1;for(c=0;c<s;++c){for(var p=0;p<l;p+=4)if(255!==u[f+p]){d=!0;break}if(d)break;f+=l}for(r.ascent=s-c,f=h-l,d=!1,c=a;c>s;--c){for(var v=0;v<l;v+=4)if(255!==u[f+v]){d=!0;break}if(d)break;f-=l}r.descent=c-s,r.fontSize=r.ascent+r.descent,e.fontPropertiesCache[t]=r}return r},e.prototype.wordWrap=function(t){for(var e="",r=t.split("\n"),n=this._style.wordWrapWidth,i=0;i<r.length;i++){for(var o=n,s=r[i].split(" "),a=0;a<s.length;a++){var u=this.context.measureText(s[a]).width;if(this._style.breakWords&&u>n)for(var h=s[a].split(""),l=0;l<h.length;l++){var c=this.context.measureText(h[l]).width;c>o?(e+="\n"+h[l],o=n-c):(0===l&&(e+=" "),e+=h[l],o-=c)}else{var f=u+this.context.measureText(" ").width;0===a||f>o?(a>0&&(e+="\n"),e+=s[a],o=n-u):(o-=f,e+=" "+s[a])}}i<r.length-1&&(e+="\n")}return e},e.prototype._calculateBounds=function(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)},e.prototype._onStyleChange=function(){this.dirty=!0},e.prototype._generateFillStyle=function(t,e){if(!Array.isArray(t.fill))return t.fill;if(navigator.isCocoonJS)return t.fill[0];var r=void 0,n=void 0,i=void 0,o=void 0,s=this.canvas.width/this.resolution,a=this.canvas.height/this.resolution;if(t.fillGradientType===p.TEXT_GRADIENT.LINEAR_VERTICAL){r=this.context.createLinearGradient(s/2,0,s/2,a),n=(t.fill.length+1)*e.length,i=0;for(var u=0;u<e.length;u++){i+=1;for(var h=0;h<t.fill.length;h++)o=i/n,r.addColorStop(o,t.fill[h]),i++}}else{r=this.context.createLinearGradient(0,a/2,s,a/2),n=t.fill.length+1,i=1;for(var l=0;l<t.fill.length;l++)o=i/n,r.addColorStop(o,t.fill[l]),i++}return r},e.prototype.destroy=function(e){"boolean"==typeof e&&(e={children:e}),e=Object.assign({},g,e),t.prototype.destroy.call(this,e),this.context=null,this.canvas=null,this._style=null},a(e,[{key:"width",get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this.texture.orig.width},set:function(t){this.updateText(!0);var e=(0,d.sign)(this.scale.x)||1;this.scale.x=e*t/this.texture.orig.width,this._width=t}},{key:"height",get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var e=(0,d.sign)(this.scale.y)||1;this.scale.y=e*t/this.texture.orig.height,this._height=t}},{key:"style",get:function(){return this._style},set:function(t){t=t||{},t instanceof y.default?this._style=t:this._style=new y.default(t),this.localStyleID=-1,this.dirty=!0}},{key:"text",get:function(){return this._text},set:function(t){t=t||" ",t=t.toString(),this._text!==t&&(this._text=t,this.dirty=!0)}}]),e}(h.default);r.default=m,m.fontPropertiesCache={},m.fontPropertiesCanvas=document.createElement("canvas"),m.fontPropertiesContext=m.fontPropertiesCanvas.getContext("2d")},{"../const":42,"../math":66,"../sprites/Sprite":97,"../textures/Texture":108,"../utils":115,"./TextStyle":104}],104:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){if("number"==typeof t)return(0,a.hex2string)(t);if(Array.isArray(t))for(var e=0;e<t.length;++e)"number"==typeof t[e]&&(t[e]=(0,a.hex2string)(t[e]));return t}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t("../const"),a=t("../utils"),u={align:"left",breakWords:!1,dropShadow:!1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"#000000",dropShadowDistance:5,fill:"black",fillGradientType:s.TEXT_GRADIENT.LINEAR_VERTICAL,fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",wordWrap:!1,wordWrapWidth:100},h=function(){function t(e){n(this,t),this.styleID=0,Object.assign(this,u,e)}return t.prototype.clone=function(){var e={};for(var r in this._defaults)e[r]=this[r];return new t(e)},t.prototype.reset=function(){Object.assign(this,this._defaults)},o(t,[{key:"align",get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.styleID++)}},{key:"breakWords",get:function(){return this._breakWords},set:function(t){this._breakWords!==t&&(this._breakWords=t,this.styleID++)}},{key:"dropShadow",get:function(){return this._dropShadow},set:function(t){this._dropShadow!==t&&(this._dropShadow=t,this.styleID++)}},{key:"dropShadowAngle",get:function(){return this._dropShadowAngle},set:function(t){this._dropShadowAngle!==t&&(this._dropShadowAngle=t,this.styleID++)}},{key:"dropShadowBlur",get:function(){return this._dropShadowBlur},set:function(t){this._dropShadowBlur!==t&&(this._dropShadowBlur=t,this.styleID++)}},{key:"dropShadowColor",get:function(){return this._dropShadowColor},set:function(t){var e=i(t);this._dropShadowColor!==e&&(this._dropShadowColor=e,this.styleID++)}},{key:"dropShadowDistance",get:function(){return this._dropShadowDistance},set:function(t){this._dropShadowDistance!==t&&(this._dropShadowDistance=t,this.styleID++)}},{key:"fill",get:function(){return this._fill},set:function(t){var e=i(t);this._fill!==e&&(this._fill=e,this.styleID++)}},{key:"fillGradientType",get:function(){return this._fillGradientType},set:function(t){this._fillGradientType!==t&&(this._fillGradientType=t,this.styleID++)}},{key:"fontFamily",get:function(){return this._fontFamily},set:function(t){this.fontFamily!==t&&(this._fontFamily=t,this.styleID++)}},{key:"fontSize",get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.styleID++)}},{key:"fontStyle",get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this.styleID++)}},{key:"fontVariant",get:function(){return this._fontVariant},set:function(t){this._fontVariant!==t&&(this._fontVariant=t,this.styleID++)}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this.styleID++)}},{key:"letterSpacing",get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.styleID++)}},{key:"lineHeight",get:function(){return this._lineHeight},set:function(t){this._lineHeight!==t&&(this._lineHeight=t,this.styleID++)}},{key:"lineJoin",get:function(){return this._lineJoin},set:function(t){this._lineJoin!==t&&(this._lineJoin=t,this.styleID++)}},{key:"miterLimit",get:function(){return this._miterLimit},set:function(t){this._miterLimit!==t&&(this._miterLimit=t,this.styleID++)}},{key:"padding",get:function(){return this._padding},set:function(t){this._padding!==t&&(this._padding=t,this.styleID++)}},{key:"stroke",get:function(){return this._stroke},set:function(t){var e=i(t);this._stroke!==e&&(this._stroke=e,this.styleID++)}},{key:"strokeThickness",get:function(){return this._strokeThickness},set:function(t){this._strokeThickness!==t&&(this._strokeThickness=t,this.styleID++)}},{key:"textBaseline",get:function(){return this._textBaseline},set:function(t){this._textBaseline!==t&&(this._textBaseline=t,this.styleID++)}},{key:"wordWrap",get:function(){return this._wordWrap},set:function(t){this._wordWrap!==t&&(this._wordWrap=t,this.styleID++)}},{key:"wordWrapWidth",get:function(){return this._wordWrapWidth},set:function(t){this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.styleID++)}}]),t}();r.default=h},{"../const":42,"../utils":115}],105:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("./BaseTexture"),u=n(a),h=t("../const"),l=function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=arguments[2],a=arguments[3];i(this,e);var u=o(this,t.call(this,null,s));return u.resolution=a||h.RESOLUTION,u.width=r,u.height=n,u.realWidth=u.width*u.resolution,u.realHeight=u.height*u.resolution,u.scaleMode=s||h.SCALE_MODES.DEFAULT,u.hasLoaded=!0,u._glRenderTargets={},u._canvasRenderTarget=null,u.valid=!1,u}return s(e,t),e.prototype.resize=function(t,e){t===this.width&&e===this.height||(this.valid=t>0&&e>0,this.width=t,this.height=e,this.realWidth=this.width*this.resolution,this.realHeight=this.height*this.resolution,this.valid&&this.emit("update",this))},e.prototype.destroy=function(){t.prototype.destroy.call(this,!0),this.renderer=null},e}(u.default);r.default=l},{"../const":42,"./BaseTexture":106}],106:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=t("../utils"),h=t("../const"),l=t("eventemitter3"),c=n(l),f=t("../utils/determineCrossOrigin"),d=n(f),p=t("bit-twiddle"),v=n(p),y=function(t){function e(r,n,s){i(this,e);var a=o(this,t.call(this));return a.uid=(0,u.uid)(),a.touched=0,a.resolution=s||h.RESOLUTION,a.width=100,a.height=100,a.realWidth=100,a.realHeight=100,a.scaleMode=n||h.SCALE_MODES.DEFAULT,a.hasLoaded=!1,a.isLoading=!1,a.source=null,a.origSource=null,a.imageType=null,a.sourceScale=1,a.premultipliedAlpha=!0,a.imageUrl=null,a.isPowerOfTwo=!1,a.mipmap=h.MIPMAP_TEXTURES,a.wrapMode=h.WRAP_MODES.DEFAULT,a._glTextures={},a._enabled=0,a._id=0,r&&a.loadSource(r),a}return s(e,t),e.prototype.update=function(){"svg"!==this.imageType&&(this.realWidth=this.source.naturalWidth||this.source.videoWidth||this.source.width,this.realHeight=this.source.naturalHeight||this.source.videoHeight||this.source.height,this.width=this.realWidth/this.resolution,this.height=this.realHeight/this.resolution,this.isPowerOfTwo=v.default.isPow2(this.realWidth)&&v.default.isPow2(this.realHeight)),this.emit("update",this)},e.prototype.loadSource=function(t){var e=this,r=this.isLoading;this.hasLoaded=!1,this.isLoading=!1,r&&this.source&&(this.source.onload=null,this.source.onerror=null);var n=!this.source;if(this.source=t,(t.src&&t.complete||t.getContext)&&t.width&&t.height)this._updateImageType(),"svg"===this.imageType?this._loadSvgSource():this._sourceLoaded(),
	n&&this.emit("loaded",this);else if(!t.getContext){var i=function(){e.isLoading=!0;var n=e;if(t.onload=function(){if(n._updateImageType(),t.onload=null,t.onerror=null,n.isLoading)return n.isLoading=!1,n._sourceLoaded(),"svg"===n.imageType?void n._loadSvgSource():void n.emit("loaded",n)},t.onerror=function(){t.onload=null,t.onerror=null,n.isLoading&&(n.isLoading=!1,n.emit("error",n))},t.complete&&t.src){if(t.onload=null,t.onerror=null,"svg"===n.imageType)return n._loadSvgSource(),{v:void 0};e.isLoading=!1,t.width&&t.height?(e._sourceLoaded(),r&&e.emit("loaded",e)):r&&e.emit("error",e)}}();if("object"===("undefined"==typeof i?"undefined":a(i)))return i.v}},e.prototype._updateImageType=function(){if(this.imageUrl){var t=(0,u.decomposeDataUri)(this.imageUrl),e=void 0;if(t&&"image"===t.mediaType){var r=t.subType.split("+")[0];if(e=(0,u.getUrlFileExtension)("."+r),!e)throw new Error("Invalid image type in data URI.")}else if(e=(0,u.getUrlFileExtension)(this.imageUrl),!e)throw new Error("Invalid image type in URL.");this.imageType=e}},e.prototype._loadSvgSource=function(){if("svg"===this.imageType){var t=(0,u.decomposeDataUri)(this.imageUrl);t?this._loadSvgSourceUsingDataUri(t):this._loadSvgSourceUsingXhr()}},e.prototype._loadSvgSourceUsingDataUri=function(t){var e=void 0;if("base64"===t.encoding){if(!atob)throw new Error("Your browser doesn't support base64 conversions.");e=atob(t.data)}else e=t.data;this._loadSvgSourceUsingString(e)},e.prototype._loadSvgSourceUsingXhr=function(){var t=this,e=new XMLHttpRequest;e.onload=function(){if(e.readyState!==e.DONE||200!==e.status)throw new Error("Failed to load SVG using XHR.");t._loadSvgSourceUsingString(e.response)},e.onerror=function(){return t.emit("error",t)},e.open("GET",this.imageUrl,!0),e.send()},e.prototype._loadSvgSourceUsingString=function(t){var e=(0,u.getSvgSize)(t),r=e.width,n=e.height;if(!r||!n)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");this.realWidth=Math.round(r*this.sourceScale),this.realHeight=Math.round(n*this.sourceScale),this.width=this.realWidth/this.resolution,this.height=this.realHeight/this.resolution,this.isPowerOfTwo=v.default.isPow2(this.realWidth)&&v.default.isPow2(this.realHeight);var i=document.createElement("canvas");i.width=this.realWidth,i.height=this.realHeight,i._pixiId="canvas_"+(0,u.uid)(),i.getContext("2d").drawImage(this.source,0,0,r,n,0,0,this.realWidth,this.realHeight),this.origSource=this.source,this.source=i,u.BaseTextureCache[i._pixiId]=this,this.isLoading=!1,this._sourceLoaded(),this.emit("loaded",this)},e.prototype._sourceLoaded=function(){this.hasLoaded=!0,this.update()},e.prototype.destroy=function(){this.imageUrl&&(delete u.BaseTextureCache[this.imageUrl],delete u.TextureCache[this.imageUrl],this.imageUrl=null,navigator.isCocoonJS||(this.source.src="")),this.source&&this.source._pixiId&&delete u.BaseTextureCache[this.source._pixiId],this.source=null,this.dispose()},e.prototype.dispose=function(){this.emit("dispose",this)},e.prototype.updateSourceImage=function(t){this.source.src=t,this.loadSource(this.source)},e.fromImage=function(t,r,n,i){var o=u.BaseTextureCache[t];if(!o){var s=new Image;void 0===r&&0!==t.indexOf("data:")&&(s.crossOrigin=(0,d.default)(t)),o=new e(s,n),o.imageUrl=t,i&&(o.sourceScale=i),o.resolution=(0,u.getResolutionOfUrl)(t),s.src=t,u.BaseTextureCache[t]=o}return o},e.fromCanvas=function(t,r){t._pixiId||(t._pixiId="canvas_"+(0,u.uid)());var n=u.BaseTextureCache[t._pixiId];return n||(n=new e(t,r),u.BaseTextureCache[t._pixiId]=n),n},e}(c.default);r.default=y},{"../const":42,"../utils":115,"../utils/determineCrossOrigin":114,"bit-twiddle":1,eventemitter3:3}],107:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("./BaseRenderTexture"),u=n(a),h=t("./Texture"),l=n(h),c=function(t){function e(r,n){i(this,e);var s=null;if(!(r instanceof u.default)){var a=arguments[1],h=arguments[2],l=arguments[3]||0,c=arguments[4]||1;console.warn("Please use RenderTexture.create("+a+", "+h+") instead of the ctor directly."),s=arguments[0],n=null,r=new u.default(a,h,l,c)}var f=o(this,t.call(this,r,n));return f.legacyRenderer=s,f.valid=!0,f._updateUvs(),f}return s(e,t),e.prototype.resize=function(t,e,r){this.valid=t>0&&e>0,this._frame.width=this.orig.width=t,this._frame.height=this.orig.height=e,r||this.baseTexture.resize(t,e),this._updateUvs()},e.create=function(t,r,n,i){return new e(new u.default(t,r,n,i))},e}(l.default);r.default=c},{"./BaseRenderTexture":105,"./Texture":108}],108:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("./BaseTexture"),h=n(u),l=t("./VideoBaseTexture"),c=n(l),f=t("./TextureUvs"),d=n(f),p=t("eventemitter3"),v=n(p),y=t("../math"),g=t("../utils"),m=function(t){function e(r,n,s,a,u){i(this,e);var h=o(this,t.call(this));if(h.noFrame=!1,n||(h.noFrame=!0,n=new y.Rectangle(0,0,1,1)),r instanceof e&&(r=r.baseTexture),h.baseTexture=r,h._frame=n,h.trim=a,h.valid=!1,h.requiresUpdate=!1,h._uvs=null,h.orig=s||n,h._rotate=Number(u||0),u===!0)h._rotate=2;else if(h._rotate%2!==0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return r.hasLoaded?(h.noFrame&&(n=new y.Rectangle(0,0,r.width,r.height),r.on("update",h.onBaseTextureUpdated,h)),h.frame=n):r.once("loaded",h.onBaseTextureLoaded,h),h._updateID=0,h.transform=null,h}return s(e,t),e.prototype.update=function(){this.baseTexture.update()},e.prototype.onBaseTextureLoaded=function(t){this._updateID++,this.noFrame?this.frame=new y.Rectangle(0,0,t.width,t.height):this.frame=this._frame,this.baseTexture.on("update",this.onBaseTextureUpdated,this),this.emit("update",this)},e.prototype.onBaseTextureUpdated=function(t){this._updateID++,this._frame.width=t.width,this._frame.height=t.height,this.emit("update",this)},e.prototype.destroy=function(t){this.baseTexture&&(t&&(g.TextureCache[this.baseTexture.imageUrl]&&delete g.TextureCache[this.baseTexture.imageUrl],this.baseTexture.destroy()),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture.off("loaded",this.onBaseTextureLoaded,this),this.baseTexture=null),this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,this.off("dispose",this.dispose,this),this.off("update",this.update,this)},e.prototype.clone=function(){return new e(this.baseTexture,this.frame,this.orig,this.trim,this.rotate)},e.prototype._updateUvs=function(){this._uvs||(this._uvs=new d.default),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},e.fromImage=function(t,r,n,i){var o=g.TextureCache[t];return o||(o=new e(h.default.fromImage(t,r,n,i)),g.TextureCache[t]=o),o},e.fromFrame=function(t){var e=g.TextureCache[t];if(!e)throw new Error('The frameId "'+t+'" does not exist in the texture cache');return e},e.fromCanvas=function(t,r){return new e(h.default.fromCanvas(t,r))},e.fromVideo=function(t,r){return"string"==typeof t?e.fromVideoUrl(t,r):new e(c.default.fromVideo(t,r))},e.fromVideoUrl=function(t,r){return new e(c.default.fromUrl(t,r))},e.from=function(t){if("string"==typeof t){var r=g.TextureCache[t];if(!r){var n=null!==t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/);return n?e.fromVideoUrl(t):e.fromImage(t)}return r}return t instanceof HTMLImageElement?new e(new h.default(t)):t instanceof HTMLCanvasElement?e.fromCanvas(t):t instanceof HTMLVideoElement?e.fromVideo(t):t instanceof h.default?new e(t):t},e.addTextureToCache=function(t,e){g.TextureCache[e]=t},e.removeTextureFromCache=function(t){var e=g.TextureCache[t];return delete g.TextureCache[t],delete g.BaseTextureCache[t],e},a(e,[{key:"frame",get:function(){return this._frame},set:function(t){if(this._frame=t,this.noFrame=!1,t.x+t.width>this.baseTexture.width||t.y+t.height>this.baseTexture.height)throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this);this.valid=t&&t.width&&t.height&&this.baseTexture.hasLoaded,this.trim||this.rotate||(this.orig=t),this.valid&&this._updateUvs()}},{key:"rotate",get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this._updateUvs()}},{key:"width",get:function(){return this.orig?this.orig.width:0}},{key:"height",get:function(){return this.orig?this.orig.height:0}}]),e}(v.default);r.default=m,m.EMPTY=new m(new h.default),m.EMPTY.destroy=function(){},m.EMPTY.on=function(){},m.EMPTY.once=function(){},m.EMPTY.emit=function(){}},{"../math":66,"../utils":115,"./BaseTexture":106,"./TextureUvs":109,"./VideoBaseTexture":110,eventemitter3:3}],109:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("../math/GroupD8"),s=n(o),a=function(){function t(){i(this,t),this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsUint32=new Uint32Array(4)}return t.prototype.set=function(t,e,r){var n=e.width,i=e.height;if(r){var o=t.width/2/n,a=t.height/2/i,u=t.x/n+o,h=t.y/i+a;r=s.default.add(r,s.default.NW),this.x0=u+o*s.default.uX(r),this.y0=h+a*s.default.uY(r),r=s.default.add(r,2),this.x1=u+o*s.default.uX(r),this.y1=h+a*s.default.uY(r),r=s.default.add(r,2),this.x2=u+o*s.default.uX(r),this.y2=h+a*s.default.uY(r),r=s.default.add(r,2),this.x3=u+o*s.default.uX(r),this.y3=h+a*s.default.uY(r)}else this.x0=t.x/n,this.y0=t.y/i,this.x1=(t.x+t.width)/n,this.y1=t.y/i,this.x2=(t.x+t.width)/n,this.y2=(t.y+t.height)/i,this.x3=t.x/n,this.y3=(t.y+t.height)/i;this.uvsUint32[0]=(65535*this.y0&65535)<<16|65535*this.x0&65535,this.uvsUint32[1]=(65535*this.y1&65535)<<16|65535*this.x1&65535,this.uvsUint32[2]=(65535*this.y2&65535)<<16|65535*this.x2&65535,this.uvsUint32[3]=(65535*this.y3&65535)<<16|65535*this.x3&65535},t}();r.default=a},{"../math/GroupD8":62}],110:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){e||(e="video/"+t.substr(t.lastIndexOf(".")+1));var r=document.createElement("source");return r.src=t,r.type=e,r}r.__esModule=!0;var h=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),l=t("./BaseTexture"),c=i(l),f=t("../utils"),d=t("../ticker"),p=n(d),v=function(t){function e(r,n){if(o(this,e),!r)throw new Error("No video source element specified.");(r.readyState===r.HAVE_ENOUGH_DATA||r.readyState===r.HAVE_FUTURE_DATA)&&r.width&&r.height&&(r.complete=!0);var i=s(this,t.call(this,r,n));return i.width=r.videoWidth,i.height=r.videoHeight,i._autoUpdate=!0,i._isAutoUpdating=!1,i.autoPlay=!0,i.update=i.update.bind(i),i._onCanPlay=i._onCanPlay.bind(i),r.addEventListener("play",i._onPlayStart.bind(i)),r.addEventListener("pause",i._onPlayStop.bind(i)),i.hasLoaded=!1,i.__loaded=!1,i._isSourceReady()?i._onCanPlay():(r.addEventListener("canplay",i._onCanPlay),r.addEventListener("canplaythrough",i._onCanPlay)),i}return a(e,t),e.prototype._isSourcePlaying=function(){var t=this.source;return t.currentTime>0&&t.paused===!1&&t.ended===!1&&t.readyState>2},e.prototype._isSourceReady=function(){return 3===this.source.readyState||4===this.source.readyState},e.prototype._onPlayStart=function(){this.hasLoaded||this._onCanPlay(),!this._isAutoUpdating&&this.autoUpdate&&(p.shared.add(this.update,this),this._isAutoUpdating=!0)},e.prototype._onPlayStop=function(){this._isAutoUpdating&&(p.shared.remove(this.update,this),this._isAutoUpdating=!1)},e.prototype._onCanPlay=function(){this.hasLoaded=!0,this.source&&(this.source.removeEventListener("canplay",this._onCanPlay),this.source.removeEventListener("canplaythrough",this._onCanPlay),this.width=this.source.videoWidth,this.height=this.source.videoHeight,this.__loaded||(this.__loaded=!0,this.emit("loaded",this)),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.source.play())},e.prototype.destroy=function(){this._isAutoUpdating&&p.shared.remove(this.update,this),this.source&&this.source._pixiId&&(delete f.BaseTextureCache[this.source._pixiId],delete this.source._pixiId),t.prototype.destroy.call(this)},e.fromVideo=function(t,r){t._pixiId||(t._pixiId="video_"+(0,f.uid)());var n=f.BaseTextureCache[t._pixiId];return n||(n=new e(t,r),f.BaseTextureCache[t._pixiId]=n),n},e.fromUrl=function(t,r){var n=document.createElement("video");if(n.setAttribute("webkit-playsinline",""),n.setAttribute("playsinline",""),Array.isArray(t))for(var i=0;i<t.length;++i)n.appendChild(u(t[i].src||t[i],t[i].mime));else n.appendChild(u(t.src||t,t.mime));return n.load(),e.fromVideo(n,r)},h(e,[{key:"autoUpdate",get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isAutoUpdating?(p.shared.remove(this.update,this),this._isAutoUpdating=!1):this._autoUpdate&&!this._isAutoUpdating&&(p.shared.add(this.update,this),this._isAutoUpdating=!0))}}]),e}(c.default);r.default=v,v.fromUrls=v.fromUrl},{"../ticker":112,"../utils":115,"./BaseTexture":106}],111:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t("../const"),a=t("eventemitter3"),u=n(a),h="tick",l=function(){function t(){var e=this;i(this,t),this._emitter=new u.default,this._requestId=null,this._maxElapsedMS=100,this.autoStart=!1,this.deltaTime=1,this.elapsedMS=1/s.TARGET_FPMS,this.lastTime=0,this.speed=1,this.started=!1,this._tick=function(t){e._requestId=null,e.started&&(e.update(t),e.started&&null===e._requestId&&e._emitter.listeners(h,!0)&&(e._requestId=requestAnimationFrame(e._tick)))}}return t.prototype._requestIfNeeded=function(){null===this._requestId&&this._emitter.listeners(h,!0)&&(this.lastTime=performance.now(),this._requestId=requestAnimationFrame(this._tick))},t.prototype._cancelIfNeeded=function(){null!==this._requestId&&(cancelAnimationFrame(this._requestId),this._requestId=null)},t.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},t.prototype.add=function(t,e){return this._emitter.on(h,t,e),this._startIfPossible(),this},t.prototype.addOnce=function(t,e){return this._emitter.once(h,t,e),this._startIfPossible(),this},t.prototype.remove=function(t,e){return this._emitter.off(h,t,e),this._emitter.listeners(h,!0)||this._cancelIfNeeded(),this},t.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},t.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},t.prototype.update=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:performance.now(),e=void 0;t>this.lastTime?(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),this.deltaTime=e*s.TARGET_FPMS*this.speed,this._emitter.emit(h,this.deltaTime)):this.deltaTime=this.elapsedMS=0,this.lastTime=t},o(t,[{key:"FPS",get:function(){return 1e3/this.elapsedMS}},{key:"minFPS",get:function(){return 1e3/this._maxElapsedMS},set:function(t){var e=Math.min(Math.max(0,t)/1e3,s.TARGET_FPMS);this._maxElapsedMS=1/e}}]),t}();r.default=l},{"../const":42,eventemitter3:3}],112:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0,r.Ticker=r.shared=void 0;var i=t("./Ticker"),o=n(i),s=new o.default;s.autoStart=!0,r.shared=s,r.Ticker=o.default},{"./Ticker":111}],113:[function(t,e,r){"use strict";function n(t){for(var e=6*t,r=new Uint16Array(e),n=0,i=0;n<e;n+=6,i+=4)r[n+0]=i+0,r[n+1]=i+1,r[n+2]=i+2,r[n+3]=i+0,r[n+4]=i+2,r[n+5]=i+3;return r}r.__esModule=!0,r.default=n},{}],114:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;if(0===t.indexOf("data:"))return"";e=e||window.location,a||(a=document.createElement("a")),a.href=t,t=s.default.parse(a.href);var r=!t.port&&""===e.port||t.port===e.port;return t.hostname===e.hostname&&r&&t.protocol===e.protocol?"":"anonymous"}r.__esModule=!0,r.default=i;var o=t("url"),s=n(o),a=void 0},{url:28}],115:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(){return++T}function o(t,e){return e=e||[],e[0]=(t>>16&255)/255,e[1]=(t>>8&255)/255,e[2]=(255&t)/255,e}function s(t){return t=t.toString(16),t="000000".substr(0,6-t.length)+t,"#"+t}function a(t){return(255*t[0]<<16)+(255*t[1]<<8)+255*t[2]}function u(t){var e=g.RETINA_PREFIX.exec(t);return e?parseFloat(e[1]):1}function h(t){var e=g.DATA_URI.exec(t);if(e)return{mediaType:e[1]?e[1].toLowerCase():void 0,subType:e[2]?e[2].toLowerCase():void 0,encoding:e[3]?e[3].toLowerCase():void 0,data:e[4]}}function l(t){var e=g.URL_FILE_EXTENSION.exec(t);if(e)return e[1].toLowerCase()}function c(t){var e=g.SVG_SIZE.exec(t),r={};return e&&(r[e[1]]=Math.round(parseFloat(e[2])),r[e[3]]=Math.round(parseFloat(e[4]))),r}function f(){w=!0}function d(t){if(!w){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var e=["\n %c %c %c Pixi.js "+g.VERSION+" - ✰ "+t+" ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n","background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];window.console.log.apply(console,e)}else window.console&&window.console.log("Pixi.js "+g.VERSION+" - "+t+" - http://www.pixijs.com/");w=!0}}function p(){var t={stencil:!0,failIfMajorPerformanceCaveat:!0};try{if(!window.WebGLRenderingContext)return!1;var e=document.createElement("canvas"),r=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),n=!(!r||!r.getContextAttributes().stencil);if(r){var i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch(t){return!1}}function v(t){return 0===t?0:t<0?-1:1}function y(t,e,r){var n=t.length;if(!(e>=n||0===r)){r=e+r>n?n-e:r;for(var i=n-r,o=e;o<i;++o)t[o]=t[o+r];t.length=i}}r.__esModule=!0,r.BaseTextureCache=r.TextureCache=r.pluginTarget=r.EventEmitter=void 0,r.uid=i,r.hex2rgb=o,r.hex2string=s,r.rgb2hex=a,r.getResolutionOfUrl=u,r.decomposeDataUri=h,r.getUrlFileExtension=l,r.getSvgSize=c,r.skipHello=f,r.sayHello=d,r.isWebGLSupported=p,r.sign=v,r.removeItems=y;var g=t("../const"),m=t("eventemitter3"),_=n(m),b=t("./pluginTarget"),x=n(b),T=0,w=!1;r.EventEmitter=_.default,r.pluginTarget=x.default;r.TextureCache={},r.BaseTextureCache={}},{"../const":42,"./pluginTarget":117,eventemitter3:3}],116:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){return s.default.tablet||s.default.phone?2:t}r.__esModule=!0,r.default=i;var o=t("ismobilejs"),s=n(o)},{ismobilejs:4}],117:[function(t,e,r){"use strict";function n(t){t.__plugins={},t.registerPlugin=function(e,r){t.__plugins[e]=r},t.prototype.initPlugins=function(){this.plugins=this.plugins||{};for(var e in t.__plugins)this.plugins[e]=new t.__plugins[e](this)},t.prototype.destroyPlugins=function(){for(var t in this.plugins)this.plugins[t].destroy(),this.plugins[t]=null;this.plugins=null}}r.__esModule=!0,r.default={mixin:function(t){n(t)}}},{}],118:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){}var o=t("./core"),s=n(o),a=t("./mesh"),u=n(a),h=t("./particles"),l=n(h),c=t("./extras"),f=n(c),d=t("./filters"),p=n(d);s.SpriteBatch=function(){throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")},s.AssetLoader=function(){throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")},Object.defineProperties(s,{Stage:{enumerable:!0,get:function(){return i("You do not need to use a PIXI Stage any more, you can simply render any container."),s.Container}},DisplayObjectContainer:{enumerable:!0,get:function(){return i("DisplayObjectContainer has been shortened to Container, please use Container from now on."),s.Container}},Strip:{enumerable:!0,get:function(){return i("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."),u.Mesh}},Rope:{enumerable:!0,get:function(){return i("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."),u.Rope}},ParticleContainer:{enumerable:!0,get:function(){return i("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."),l.ParticleContainer}},MovieClip:{enumerable:!0,get:function(){return i("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on."),f.MovieClip}},TilingSprite:{enumerable:!0,get:function(){return i("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."),f.TilingSprite}},BitmapText:{enumerable:!0,get:function(){return i("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."),f.BitmapText}},blendModes:{enumerable:!0,get:function(){return i("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."),s.BLEND_MODES}},scaleModes:{enumerable:!0,get:function(){return i("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."),s.SCALE_MODES}},BaseTextureCache:{enumerable:!0,get:function(){return i("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."),s.utils.BaseTextureCache}},TextureCache:{enumerable:!0,get:function(){return i("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."),s.utils.TextureCache}},math:{enumerable:!0,get:function(){return i("The math namespace is deprecated, please access members already accessible on PIXI."),s}},AbstractFilter:{enumerable:!0,get:function(){return i("AstractFilter has been renamed to Filter, please use PIXI.Filter"),s.Filter}},TransformManual:{enumerable:!0,get:function(){return i("TransformManual has been renamed to TransformBase, please update your pixi-spine"),s.TransformBase}}}),s.DisplayObject.prototype.generateTexture=function(t,e,r){return i("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"),t.generateTexture(this,e,r)},s.Graphics.prototype.generateTexture=function(t,e){return i("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"),this.generateCanvasTexture(t,e)},s.RenderTexture.prototype.render=function(t,e,r,n){this.legacyRenderer.render(t,this,r,e,!n),i("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)")},s.RenderTexture.prototype.getImage=function(t){return i("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"),this.legacyRenderer.extract.image(t)},s.RenderTexture.prototype.getBase64=function(t){return i("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"),this.legacyRenderer.extract.base64(t)},s.RenderTexture.prototype.getCanvas=function(t){return i("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"),this.legacyRenderer.extract.canvas(t)},s.RenderTexture.prototype.getPixels=function(t){return i("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"),this.legacyRenderer.pixels(t)},s.Sprite.prototype.setTexture=function(t){this.texture=t,i("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")},f.BitmapText.prototype.setText=function(t){this.text=t,i("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")},s.Text.prototype.setText=function(t){this.text=t,i("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")},s.Text.prototype.setStyle=function(t){this.style=t,i("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")},Object.defineProperties(s.TextStyle.prototype,{font:{get:function(){i("text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on");var t="number"==typeof this._fontSize?this._fontSize+"px":this._fontSize;return this._fontStyle+" "+this._fontVariant+" "+this._fontWeight+" "+t+" "+this._fontFamily},set:function(t){i("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"),t.indexOf("italic")>1?this._fontStyle="italic":t.indexOf("oblique")>-1?this._fontStyle="oblique":this._fontStyle="normal",t.indexOf("small-caps")>-1?this._fontVariant="small-caps":this._fontVariant="normal";var e=t.split(" "),r=-1;this._fontSize=26;for(var n=0;n<e.length;++n)if(e[n].match(/(px|pt|em|%)/)){r=n,this._fontSize=e[n];break}this._fontWeight="normal";for(var o=0;o<r;++o)if(e[o].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)){this._fontWeight=e[o];break}if(r>-1&&r<e.length-1){this._fontFamily="";for(var s=r+1;s<e.length;++s)this._fontFamily+=e[s]+" ";this._fontFamily=this._fontFamily.slice(0,-1)}else this._fontFamily="Arial";this.styleID++}}}),s.Texture.prototype.setFrame=function(t){this.frame=t,i("setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;")},Object.defineProperties(p,{AbstractFilter:{get:function(){return i("AstractFilter has been renamed to Filter, please use PIXI.Filter"),s.AbstractFilter}},SpriteMaskFilter:{get:function(){return i("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."),s.SpriteMaskFilter}}}),s.utils.uuid=function(){return i("utils.uuid() is deprecated, please use utils.uid() from now on."),s.utils.uid()},s.utils.canUseNewCanvasBlendModes=function(){return i("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"),s.CanvasTinter.canUseMultiply}},{"./core":61,"./extras":129,"./filters":140,"./mesh":158,"./particles":161}],119:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("../../core"),s=n(o),a=new s.Rectangle,u=function(){function t(e){i(this,t),this.renderer=e,e.extract=this}return t.prototype.image=function t(e){var t=new Image;return t.src=this.base64(e),t},t.prototype.base64=function(t){return this.canvas(t).toDataURL()},t.prototype.canvas=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,o=void 0;t&&(o=t instanceof s.RenderTexture?t:e.generateTexture(t)),o?(r=o.baseTexture._canvasRenderTarget.context,n=o.baseTexture._canvasRenderTarget.resolution,i=o.frame):(r=e.rootContext,i=a,i.width=this.renderer.width,i.height=this.renderer.height);var u=i.width*n,h=i.height*n,l=new s.CanvasRenderTarget(u,h),c=r.getImageData(i.x*n,i.y*n,u,h);return l.context.putImageData(c,0,0),l.canvas},t.prototype.pixels=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,o=void 0;return t&&(o=t instanceof s.RenderTexture?t:e.generateTexture(t)),o?(r=o.baseTexture._canvasRenderTarget.context,n=o.baseTexture._canvasRenderTarget.resolution,i=o.frame):(r=e.rootContext,i=a,i.width=e.width,i.height=e.height),r.getImageData(0,0,i.width*n,i.height*n).data},t.prototype.destroy=function(){this.renderer.extract=null,this.renderer=null},t}();r.default=u,s.CanvasRenderer.registerPlugin("extract",u)},{"../../core":61}],120:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./webgl/WebGLExtract");Object.defineProperty(r,"webgl",{enumerable:!0,get:function(){return n(i).default}});var o=t("./canvas/CanvasExtract");Object.defineProperty(r,"canvas",{enumerable:!0,get:function(){return n(o).default}})},{"./canvas/CanvasExtract":119,"./webgl/WebGLExtract":121}],121:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("../../core"),s=n(o),a=new s.Rectangle,u=4,h=function(){function t(e){i(this,t),this.renderer=e,e.extract=this}return t.prototype.image=function t(e){var t=new Image;return t.src=this.base64(e),t},t.prototype.base64=function(t){return this.canvas(t).toDataURL()},t.prototype.canvas=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,o=!1,h=void 0;t&&(h=t instanceof s.RenderTexture?t:this.renderer.generateTexture(t)),h?(r=h.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID],n=r.resolution,i=h.frame,o=!1):(r=this.renderer.rootRenderTarget,n=r.resolution,o=!0,i=a,i.width=r.size.width,i.height=r.size.height);var l=i.width*n,c=i.height*n,f=new s.CanvasRenderTarget(l,c);if(r){e.bindRenderTarget(r);var d=new Uint8Array(u*l*c),p=e.gl;p.readPixels(i.x*n,i.y*n,l,c,p.RGBA,p.UNSIGNED_BYTE,d);var v=f.context.getImageData(0,0,l,c);v.data.set(d),f.context.putImageData(v,0,0),
	o&&(f.context.scale(1,-1),f.context.drawImage(f.canvas,0,-c))}return f.canvas},t.prototype.pixels=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,o=void 0;t&&(o=t instanceof s.RenderTexture?t:this.renderer.generateTexture(t)),o?(r=o.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID],n=r.resolution,i=o.frame):(r=this.renderer.rootRenderTarget,n=r.resolution,i=a,i.width=r.size.width,i.height=r.size.height);var h=i.width*n,l=i.height*n,c=new Uint8Array(u*h*l);if(r){e.bindRenderTarget(r);var f=e.gl;f.readPixels(i.x*n,i.y*n,h,l,f.RGBA,f.UNSIGNED_BYTE,c)}return c},t.prototype.destroy=function(){this.renderer.extract=null,this.renderer=null},t}();r.default=h,s.WebGLRenderer.registerPlugin("extract",h)},{"../../core":61}],122:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("../core"),l=i(h),c=t("../core/math/ObservablePoint"),f=n(c),d=function(t){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e);var i=s(this,t.call(this));return i.textWidth=0,i.textHeight=0,i._glyphs=[],i._font={tint:void 0!==n.tint?n.tint:16777215,align:n.align||"left",name:null,size:0},i.font=n.font,i._text=r,i.maxWidth=0,i.maxLineHeight=0,i._anchor=new f.default(function(){i.dirty=!0},i,0,0),i.dirty=!1,i.updateText(),i}return a(e,t),e.prototype.updateText=function(){for(var t=e.fonts[this._font.name],r=this._font.size/t.size,n=new l.Point,i=[],o=[],s=null,a=0,u=0,h=0,c=-1,f=0,d=0,p=0;p<this.text.length;p++){var v=this.text.charCodeAt(p);if(/(\s)/.test(this.text.charAt(p))&&(c=p,f=a),/(?:\r\n|\r|\n)/.test(this.text.charAt(p)))o.push(a),u=Math.max(u,a),h++,n.x=0,n.y+=t.lineHeight,s=null;else if(c!==-1&&this.maxWidth>0&&n.x*r>this.maxWidth)l.utils.removeItems(i,c,p-c),p=c,c=-1,o.push(f),u=Math.max(u,f),h++,n.x=0,n.y+=t.lineHeight,s=null;else{var y=t.chars[v];y&&(s&&y.kerning[s]&&(n.x+=y.kerning[s]),i.push({texture:y.texture,line:h,charCode:v,position:new l.Point(n.x+y.xOffset,n.y+y.yOffset)}),a=n.x+(y.texture.width+y.xOffset),n.x+=y.xAdvance,d=Math.max(d,y.yOffset+y.texture.height),s=v)}}o.push(a),u=Math.max(u,a);for(var g=[],m=0;m<=h;m++){var _=0;"right"===this._font.align?_=u-o[m]:"center"===this._font.align&&(_=(u-o[m])/2),g.push(_)}for(var b=i.length,x=this.tint,T=0;T<b;T++){var w=this._glyphs[T];w?w.texture=i[T].texture:(w=new l.Sprite(i[T].texture),this._glyphs.push(w)),w.position.x=(i[T].position.x+g[i[T].line])*r,w.position.y=i[T].position.y*r,w.scale.x=w.scale.y=r,w.tint=x,w.parent||this.addChild(w)}for(var E=b;E<this._glyphs.length;++E)this.removeChild(this._glyphs[E]);if(this.textWidth=u*r,this.textHeight=(n.y+t.lineHeight)*r,0!==this.anchor.x||0!==this.anchor.y)for(var S=0;S<b;S++)this._glyphs[S].x-=this.textWidth*this.anchor.x,this._glyphs[S].y-=this.textHeight*this.anchor.y;this.maxLineHeight=d*r},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype.getLocalBounds=function(){return this.validate(),t.prototype.getLocalBounds.call(this)},e.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},u(e,[{key:"tint",get:function(){return this._font.tint},set:function(t){this._font.tint="number"==typeof t&&t>=0?t:16777215,this.dirty=!0}},{key:"align",get:function(){return this._font.align},set:function(t){this._font.align=t||"left",this.dirty=!0}},{key:"anchor",get:function(){return this._anchor},set:function(t){"number"==typeof t?this._anchor.set(t):this._anchor.copy(t)}},{key:"font",get:function(){return this._font},set:function(t){t&&("string"==typeof t?(t=t.split(" "),this._font.name=1===t.length?t[0]:t.slice(1).join(" "),this._font.size=t.length>=2?parseInt(t[0],10):e.fonts[this._font.name].size):(this._font.name=t.name,this._font.size="number"==typeof t.size?t.size:parseInt(t.size,10)),this.dirty=!0)}},{key:"text",get:function(){return this._text},set:function(t){t=t.toString()||" ",this._text!==t&&(this._text=t,this.dirty=!0)}}]),e}(l.Container);r.default=d,d.fonts={}},{"../core":61,"../core/math/ObservablePoint":64}],123:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../core"),h=n(u),l=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r[0]instanceof h.Texture?r[0]:r[0].texture));return n._textures=null,n._durations=null,n.textures=r,n.animationSpeed=1,n.loop=!0,n.onComplete=null,n.onFrameChange=null,n._currentTime=0,n.playing=!1,n}return s(e,t),e.prototype.stop=function(){this.playing&&(this.playing=!1,h.ticker.shared.remove(this.update,this))},e.prototype.play=function(){this.playing||(this.playing=!0,h.ticker.shared.add(this.update,this))},e.prototype.gotoAndStop=function(t){this.stop();var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&(this._texture=this._textures[this.currentFrame],this._textureID=-1,this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.gotoAndPlay=function(t){this._currentTime=t,this.play()},e.prototype.update=function(t){var e=this.animationSpeed*t,r=this.currentFrame;if(null!==this._durations){var n=this._currentTime%1*this._durations[this.currentFrame];for(n+=e/60*1e3;n<0;)this._currentTime--,n+=this._durations[this.currentFrame];var i=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);n>=this._durations[this.currentFrame];)n-=this._durations[this.currentFrame]*i,this._currentTime+=i;this._currentTime+=n/this._durations[this.currentFrame]}else this._currentTime+=e;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this._texture=this._textures[this.currentFrame],this._textureID=-1,this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.destroy=function(){this.stop(),t.prototype.destroy.call(this)},e.fromFrames=function(t){for(var r=[],n=0;n<t.length;++n)r.push(h.Texture.fromFrame(t[n]));return new e(r)},e.fromImages=function(t){for(var r=[],n=0;n<t.length;++n)r.push(h.Texture.fromImage(t[n]));return new e(r)},a(e,[{key:"totalFrames",get:function(){return this._textures.length}},{key:"textures",get:function(){return this._textures},set:function(t){if(t[0]instanceof h.Texture)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}}},{key:"currentFrame",get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t}}]),e}(h.Sprite);r.default=l},{"../core":61}],124:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t("../core/math/Matrix"),a=n(s),u=new a.default,h=function(){function t(e,r){i(this,t),this._texture=e,this.mapCoord=new a.default,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._lastTextureID=-1,this.clampOffset=0,this.clampMargin="undefined"==typeof r?.5:r}return t.prototype.update=function(t){var e=this.texture;if(e&&e.valid&&(t||this._lastTextureID!==this.texture._updateID)){this._lastTextureID=this.texture._updateID;var r=this.texture._uvs;this.mapCoord.set(r.x1-r.x0,r.y1-r.y0,r.x3-r.x0,r.y3-r.y0,r.x0,r.y0);var n=e.orig,i=e.trim;i&&(u.set(n.width/i.width,0,0,n.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(u));var o=e.baseTexture,s=this.uClampFrame,a=this.clampMargin/o.resolution,h=this.clampOffset;s[0]=(e._frame.x+a+h)/o.width,s[1]=(e._frame.y+a+h)/o.height,s[2]=(e._frame.x+e._frame.width-a+h)/o.width,s[3]=(e._frame.y+e._frame.height-a+h)/o.height,this.uClampOffset[0]=h/o.realWidth,this.uClampOffset[1]=h/o.realHeight}},o(t,[{key:"texture",get:function(){return this._texture},set:function(t){this._texture=t,this._lastTextureID=-1}}]),t}();r.default=h},{"../core/math/Matrix":63}],125:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("../core"),l=i(h),c=t("../core/sprites/canvas/CanvasTinter"),f=n(c),d=t("./TextureTransform"),p=n(d),v=new l.Point,y=function(t){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;o(this,e);var a=s(this,t.call(this,r));return a.tileTransform=new l.TransformStatic,a._width=n,a._height=i,a._canvasPattern=null,a.uvTransform=r.transform||new p.default(r),a}return a(e,t),e.prototype._onTextureUpdate=function(){this.uvTransform&&(this.uvTransform.texture=this._texture)},e.prototype._renderWebGL=function(t){var e=this._texture;e&&e.valid&&(this.tileTransform.updateLocalTransform(),this.uvTransform.update(),t.setObjectRenderer(t.plugins.tilingSprite),t.plugins.tilingSprite.render(this))},e.prototype._renderCanvas=function(t){var e=this._texture;if(e.baseTexture.hasLoaded){var r=t.context,n=this.worldTransform,i=t.resolution,o=e.baseTexture,s=e.baseTexture.resolution,a=this.tilePosition.x/this.tileScale.x%e._frame.width,u=this.tilePosition.y/this.tileScale.y%e._frame.height;if(!this._canvasPattern){var h=new l.CanvasRenderTarget(e._frame.width,e._frame.height,s);16777215!==this.tint?(this.cachedTint!==this.tint&&(this.cachedTint=this.tint,this.tintedTexture=f.default.getTintedTexture(this,this.tint)),h.context.drawImage(this.tintedTexture,0,0)):h.context.drawImage(o.source,-e._frame.x,-e._frame.y),this._canvasPattern=h.context.createPattern(h.canvas,"repeat")}r.globalAlpha=this.worldAlpha,r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),r.scale(this.tileScale.x/s,this.tileScale.y/s),r.translate(a+this.anchor.x*-this._width,u+this.anchor.y*-this._height);var c=t.blendModes[this.blendMode];c!==t.context.globalCompositeOperation&&(r.globalCompositeOperation=c),r.fillStyle=this._canvasPattern,r.fillRect(-a,-u,this._width/this.tileScale.x*s,this._height/this.tileScale.y*s)}},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,e=this._height*-this._anchor._y,r=this._width*(1-this._anchor._x),n=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,e,r,n)},e.prototype.getLocalBounds=function(e){return 0===this.children.length?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._x),e||(this._localBoundsRect||(this._localBoundsRect=new l.Rectangle),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,v);var e=this._width,r=this._height,n=-e*this.anchor._x;if(v.x>n&&v.x<n+e){var i=-r*this.anchor._y;if(v.y>i&&v.y<i+r)return!0}return!1},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.tileTransform=null,this.uvTransform=null},e.from=function(t,r,n){return new e(l.Texture.from(t),r,n)},e.fromFrame=function(t,r,n){var i=l.utils.TextureCache[t];if(!i)throw new Error('The frameId "'+t+'" does not exist in the texture cache '+this);return new e(i,r,n)},e.fromImage=function(t,r,n,i,o){return new e(l.Texture.fromImage(t,i,o),r,n)},u(e,[{key:"clampMargin",get:function(){return this.uvTransform.clampMargin},set:function(t){this.uvTransform.clampMargin=t,this.uvTransform.update(!0)}},{key:"tileScale",get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copy(t)}},{key:"tilePosition",get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copy(t)}},{key:"width",get:function(){return this._width},set:function(t){this._width=t}},{key:"height",get:function(){return this._height},set:function(t){this._height=t}}]),e}(l.Sprite);r.default=y},{"../core":61,"../core/sprites/canvas/CanvasTinter":99,"./TextureTransform":124}],126:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=t("../core"),s=n(o),a=s.DisplayObject,u=new s.Matrix;a.prototype._cacheAsBitmap=!1,a.prototype._cacheData=!1;var h=function t(){i(this,t),this.originalRenderWebGL=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalHitTest=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.sprite=null};Object.defineProperties(a.prototype,{cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(t){if(this._cacheAsBitmap!==t){this._cacheAsBitmap=t;var e=void 0;t?(this._cacheData||(this._cacheData=new h),e=this._cacheData,e.originalRenderWebGL=this.renderWebGL,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this._calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.renderWebGL=this._renderCachedWebGL,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.renderWebGL=e.originalRenderWebGL,this.renderCanvas=e.originalRenderCanvas,this._calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)}}}}),a.prototype._renderCachedWebGL=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(t),this._cacheData.sprite._transformID=-1,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderWebGL(t))},a.prototype._initCachedDisplayObject=function(t){if(!this._cacheData||!this._cacheData.sprite){var e=this.alpha;this.alpha=1,t.currentRenderer.flush();var r=this.getLocalBounds().clone();if(this._filters){var n=this._filters[0].padding;r.pad(n)}var i=t._activeRenderTarget,o=t.filterManager.filterStack,a=s.RenderTexture.create(0|r.width,0|r.height),h=u;h.tx=-r.x,h.ty=-r.y,this.transform.worldTransform.identity(),this.renderWebGL=this._cacheData.originalRenderWebGL,t.render(this,a,!0,h,!0),t.bindRenderTarget(i),t.filterManager.filterStack=o,this.renderWebGL=this._renderCachedWebGL,this.updateTransform=this.displayObjectUpdateTransform,this._mask=null,this.filterArea=null;var l=new s.Sprite(a);l.transform.worldTransform=this.transform.worldTransform,l.anchor.x=-(r.x/r.width),l.anchor.y=-(r.y/r.height),l.alpha=e,l._bounds=this._bounds,this._calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._cacheData.sprite=l,this.transform._parentID=-1,this.updateTransform(),this.containsPoint=l.containsPoint.bind(l)}},a.prototype._renderCachedCanvas=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite.renderCanvas(t))},a.prototype._initCachedDisplayObjectCanvas=function(t){if(!this._cacheData||!this._cacheData.sprite){var e=this.getLocalBounds(),r=this.alpha;this.alpha=1;var n=t.context,i=s.RenderTexture.create(0|e.width,0|e.height),o=u;this.transform.worldTransform.copy(o),o.invert(),o.tx-=e.x,o.ty-=e.y,this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,i,!0,o,!1),t.context=n,this.renderCanvas=this._renderCachedCanvas,this._calculateBounds=this._calculateCachedBounds,this._mask=null,this.filterArea=null;var a=new s.Sprite(i);a.transform.worldTransform=this.transform.worldTransform,a.anchor.x=-(e.x/e.width),a.anchor.y=-(e.y/e.height),a._bounds=this._bounds,a.alpha=r,this.updateTransform(),this.updateTransform=this.displayObjectUpdateTransform,this._cacheData.sprite=a,this.containsPoint=a.containsPoint.bind(a)}},a.prototype._calculateCachedBounds=function(){this._cacheData.sprite._calculateBounds()},a.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds()},a.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null},a.prototype._cacheAsBitmapDestroy=function(){this.cacheAsBitmap=!1,this.destroy()}},{"../core":61}],127:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var i=t("../core"),o=n(i);o.DisplayObject.prototype.name=null,o.Container.prototype.getChildByName=function(t){for(var e=0;e<this.children.length;e++)if(this.children[e].name===t)return this.children[e];return null}},{"../core":61}],128:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var i=t("../core"),o=n(i);o.DisplayObject.prototype.getGlobalPosition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new o.Point,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.parent?this.parent.toGlobal(this.position,t,e):(t.x=this.position.x,t.y=this.position.y),t}},{"../core":61}],129:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./TextureTransform");Object.defineProperty(r,"TextureTransform",{enumerable:!0,get:function(){return n(i).default}});var o=t("./MovieClip");Object.defineProperty(r,"MovieClip",{enumerable:!0,get:function(){return n(o).default}});var s=t("./TilingSprite");Object.defineProperty(r,"TilingSprite",{enumerable:!0,get:function(){return n(s).default}});var a=t("./webgl/TilingSpriteRenderer");Object.defineProperty(r,"TilingSpriteRenderer",{enumerable:!0,get:function(){return n(a).default}});var u=t("./BitmapText");Object.defineProperty(r,"BitmapText",{enumerable:!0,get:function(){return n(u).default}});var h=t("./cacheAsBitmap");Object.defineProperty(r,"cacheAsBitmap",{enumerable:!0,get:function(){return n(h).default}});var l=t("./getChildByName");Object.defineProperty(r,"getChildByName",{enumerable:!0,get:function(){return n(l).default}});var c=t("./getGlobalPosition");Object.defineProperty(r,"getGlobalPosition",{enumerable:!0,get:function(){return n(c).default}})},{"./BitmapText":122,"./MovieClip":123,"./TextureTransform":124,"./TilingSprite":125,"./cacheAsBitmap":126,"./getChildByName":127,"./getGlobalPosition":128,"./webgl/TilingSpriteRenderer":130}],130:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0,r.TilingSpriteRenderer=void 0;var a=t("../../core"),u=n(a),h=t("../../core/const"),l=new u.Matrix,c=new Float32Array(4),f=r.TilingSpriteRenderer=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.shader=null,n.simpleShader=null,n.quad=null,n}return s(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=new u.Shader(t,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n","#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    vec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n    gl_FragColor = sample * color ;\n}\n"),this.simpleShader=new u.Shader(t,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n","#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    vec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n    gl_FragColor = sample * color;\n}\n"),this.quad=new u.Quad(t),this.quad.initVao(this.shader)},e.prototype.render=function(t){var e=this.quad,r=e.vertices;r[0]=r[6]=t._width*-t.anchor.x,r[1]=r[3]=t._height*-t.anchor.y,r[2]=r[4]=t._width*(1-t.anchor.x),r[5]=r[7]=t._height*(1-t.anchor.y),r=e.uvs,r[0]=r[6]=-t.anchor.x,r[1]=r[3]=-t.anchor.y,r[2]=r[4]=1-t.anchor.x,r[5]=r[7]=1-t.anchor.y,e.upload();var n=this.renderer,i=t._texture,o=i.baseTexture,s=t.tileTransform.localTransform,a=t.uvTransform,f=o.isPowerOfTwo&&i.frame.width===o.width&&i.frame.height===o.height;f&&(o._glTextures[n.CONTEXT_UID]?f=o.wrapMode!==h.WRAP_MODES.CLAMP:o.wrapMode===h.WRAP_MODES.CLAMP&&(o.wrapMode=h.WRAP_MODES.REPEAT));var d=f?this.simpleShader:this.shader;n.bindShader(d);var p=i.width,v=i.height,y=t._width,g=t._height;l.set(s.a*p/y,s.b*p/g,s.c*v/y,s.d*v/g,s.tx/y,s.ty/g),l.invert(),f?l.append(a.mapCoord):(d.uniforms.uMapCoord=a.mapCoord.toArray(!0),d.uniforms.uClampFrame=a.uClampFrame,d.uniforms.uClampOffset=a.uClampOffset),d.uniforms.uTransform=l.toArray(!0);var m=c;u.utils.hex2rgb(t.tint,m),m[3]=t.worldAlpha,d.uniforms.uColor=m,d.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),n.bindTexture(i),n.setBlendMode(t.blendMode),e.draw()},e}(u.ObjectRenderer);u.WebGLRenderer.registerPlugin("tilingSprite",f)},{"../../core":61,"../../core/const":42}],131:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("../../core"),l=i(h),c=t("./BlurXFilter"),f=n(c),d=t("./BlurYFilter"),p=n(d),v=function(t){function e(r,n,i){o(this,e);var a=s(this,t.call(this));return a.blurXFilter=new f.default,a.blurYFilter=new p.default,a.resolution=1,a.padding=0,a.resolution=i||1,a.quality=n||4,a.blur=r||8,a}return a(e,t),e.prototype.apply=function(t,e,r){var n=t.getRenderTarget(!0);this.blurXFilter.apply(t,e,n,!0),this.blurYFilter.apply(t,n,r,!1),t.returnRenderTarget(n)},u(e,[{key:"blur",get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}},{key:"quality",get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t}},{key:"blurX",get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}},{key:"blurY",get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}}]),e}(l.Filter);r.default=v},{"../../core":61,"./BlurXFilter":132,"./BlurYFilter":133}],132:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("../../core"),l=i(h),c=t("./generateBlurVertSource"),f=n(c),d=t("./generateBlurFragSource"),p=n(d),v=t("./getMaxBlurKernelSize"),y=n(v),g=function(t){function e(r,n,i){o(this,e);var a=(0,f.default)(5,!0),u=(0,p.default)(5),h=s(this,t.call(this,a,u));return h.resolution=i||1,h._quality=0,h.quality=n||4,h.strength=r||8,h.firstRun=!0,h}return a(e,t),e.prototype.apply=function(t,e,r,n){if(this.firstRun){var i=t.renderer.gl,o=(0,y.default)(i);this.vertexSrc=(0,f.default)(o,!0),this.fragmentSrc=(0,p.default)(o),this.firstRun=!1}if(this.uniforms.strength=1/r.size.width*(r.size.width/e.size.width),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,1===this.passes)t.applyFilter(this,e,r,n);else{for(var s=t.getRenderTarget(!0),a=e,u=s,h=0;h<this.passes-1;h++){t.applyFilter(this,a,u,!0);var l=u;u=a,a=l}t.applyFilter(this,a,r,n),t.returnRenderTarget(s)}},u(e,[{key:"blur",get:function(){return this.strength},set:function(t){this.padding=2*Math.abs(t),this.strength=t}},{key:"quality",get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t}}]),e}(l.Filter);r.default=g},{"../../core":61,"./generateBlurFragSource":134,"./generateBlurVertSource":135,"./getMaxBlurKernelSize":136}],133:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("../../core"),l=i(h),c=t("./generateBlurVertSource"),f=n(c),d=t("./generateBlurFragSource"),p=n(d),v=t("./getMaxBlurKernelSize"),y=n(v),g=function(t){function e(r,n,i){o(this,e);var a=(0,f.default)(5,!1),u=(0,
	p.default)(5),h=s(this,t.call(this,a,u));return h.resolution=i||1,h._quality=0,h.quality=n||4,h.strength=r||8,h.firstRun=!0,h}return a(e,t),e.prototype.apply=function(t,e,r,n){if(this.firstRun){var i=t.renderer.gl,o=(0,y.default)(i);this.vertexSrc=(0,f.default)(o,!1),this.fragmentSrc=(0,p.default)(o),this.firstRun=!1}if(this.uniforms.strength=1/r.size.height*(r.size.height/e.size.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,1===this.passes)t.applyFilter(this,e,r,n);else{for(var s=t.getRenderTarget(!0),a=e,u=s,h=0;h<this.passes-1;h++){t.applyFilter(this,a,u,!0);var l=u;u=a,a=l}t.applyFilter(this,a,r,n),t.returnRenderTarget(s)}},u(e,[{key:"blur",get:function(){return this.strength},set:function(t){this.padding=2*Math.abs(t),this.strength=t}},{key:"quality",get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t}}]),e}(l.Filter);r.default=g},{"../../core":61,"./generateBlurFragSource":134,"./generateBlurVertSource":135,"./getMaxBlurKernelSize":136}],134:[function(t,e,r){"use strict";function n(t){for(var e=i[t],r=e.length,n=o,s="",a="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",u=void 0,h=0;h<t;h++){var l=a.replace("%index%",h);u=h,h>=r&&(u=t-h-1),l=l.replace("%value%",e[u]),s+=l,s+="\n"}return n=n.replace("%blur%",s),n=n.replace("%size%",t)}r.__esModule=!0,r.default=n;var i={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},o=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join("\n")},{}],135:[function(t,e,r){"use strict";function n(t,e){var r=Math.ceil(t/2),n=i,o="",s=void 0;s=e?"vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);":"vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";for(var a=0;a<t;a++){var u=s.replace("%index%",a);u=u.replace("%sampleIndex%",a-(r-1)+".0"),o+=u,o+="\n"}return n=n.replace("%blur%",o),n=n.replace("%size%",t)}r.__esModule=!0,r.default=n;var i=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform float strength;","uniform mat3 projectionMatrix;","varying vec2 vBlurTexCoords[%size%];","void main(void)","{","gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);","%blur%","}"].join("\n")},{}],136:[function(t,e,r){"use strict";function n(t){for(var e=t.getParameter(t.MAX_VARYING_VECTORS),r=15;r>e;)r-=2;return r}r.__esModule=!0,r.default=n},{}],137:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../../core"),h=n(u),l=function(t){function e(){i(this,e);var r=o(this,t.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n//    gl_FragColor = vec4(m[0]);\n}\n"));return r.uniforms.m=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],r}return s(e,t),e.prototype._loadMatrix=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t;e&&(this._multiply(r,this.uniforms.m,t),r=this._colorMatrix(r)),this.uniforms.m=r},e.prototype._multiply=function(t,e,r){return t[0]=e[0]*r[0]+e[1]*r[5]+e[2]*r[10]+e[3]*r[15],t[1]=e[0]*r[1]+e[1]*r[6]+e[2]*r[11]+e[3]*r[16],t[2]=e[0]*r[2]+e[1]*r[7]+e[2]*r[12]+e[3]*r[17],t[3]=e[0]*r[3]+e[1]*r[8]+e[2]*r[13]+e[3]*r[18],t[4]=e[0]*r[4]+e[1]*r[9]+e[2]*r[14]+e[3]*r[19],t[5]=e[5]*r[0]+e[6]*r[5]+e[7]*r[10]+e[8]*r[15],t[6]=e[5]*r[1]+e[6]*r[6]+e[7]*r[11]+e[8]*r[16],t[7]=e[5]*r[2]+e[6]*r[7]+e[7]*r[12]+e[8]*r[17],t[8]=e[5]*r[3]+e[6]*r[8]+e[7]*r[13]+e[8]*r[18],t[9]=e[5]*r[4]+e[6]*r[9]+e[7]*r[14]+e[8]*r[19],t[10]=e[10]*r[0]+e[11]*r[5]+e[12]*r[10]+e[13]*r[15],t[11]=e[10]*r[1]+e[11]*r[6]+e[12]*r[11]+e[13]*r[16],t[12]=e[10]*r[2]+e[11]*r[7]+e[12]*r[12]+e[13]*r[17],t[13]=e[10]*r[3]+e[11]*r[8]+e[12]*r[13]+e[13]*r[18],t[14]=e[10]*r[4]+e[11]*r[9]+e[12]*r[14]+e[13]*r[19],t[15]=e[15]*r[0]+e[16]*r[5]+e[17]*r[10]+e[18]*r[15],t[16]=e[15]*r[1]+e[16]*r[6]+e[17]*r[11]+e[18]*r[16],t[17]=e[15]*r[2]+e[16]*r[7]+e[17]*r[12]+e[18]*r[17],t[18]=e[15]*r[3]+e[16]*r[8]+e[17]*r[13]+e[18]*r[18],t[19]=e[15]*r[4]+e[16]*r[9]+e[17]*r[14]+e[18]*r[19],t},e.prototype._colorMatrix=function(t){var e=new Float32Array(t);return e[4]/=255,e[9]/=255,e[14]/=255,e[19]/=255,e},e.prototype.brightness=function(t,e){var r=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.greyscale=function(t,e){var r=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.blackAndWhite=function(t){var e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.hue=function(t,e){t=(t||0)/180*Math.PI;var r=Math.cos(t),n=Math.sin(t),i=Math.sqrt,o=1/3,s=i(o),a=r+(1-r)*o,u=o*(1-r)-s*n,h=o*(1-r)+s*n,l=o*(1-r)+s*n,c=r+o*(1-r),f=o*(1-r)-s*n,d=o*(1-r)-s*n,p=o*(1-r)+s*n,v=r+o*(1-r),y=[a,u,h,0,0,l,c,f,0,0,d,p,v,0,0,0,0,0,1,0];this._loadMatrix(y,e)},e.prototype.contrast=function(t,e){var r=(t||0)+1,n=-128*(r-1),i=[r,0,0,0,n,0,r,0,0,n,0,0,r,0,n,0,0,0,1,0];this._loadMatrix(i,e)},e.prototype.saturate=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1],r=2*t/3+1,n=(r-1)*-.5,i=[r,n,n,0,0,n,r,n,0,0,n,n,r,0,0,0,0,0,1,0];this._loadMatrix(i,e)},e.prototype.desaturate=function(){this.saturate(-1)},e.prototype.negative=function(t){var e=[0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.sepia=function(t){var e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.technicolor=function(t){var e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.polaroid=function(t){var e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.toBGR=function(t){var e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.kodachrome=function(t){var e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.browni=function(t){var e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.vintage=function(t){var e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.colorTone=function(t,e,r,n,i){t=t||.2,e=e||.15,r=r||16770432,n=n||3375104;var o=(r>>16&255)/255,s=(r>>8&255)/255,a=(255&r)/255,u=(n>>16&255)/255,h=(n>>8&255)/255,l=(255&n)/255,c=[.3,.59,.11,0,0,o,s,a,t,0,u,h,l,e,0,o-u,s-h,a-l,0,0];this._loadMatrix(c,i)},e.prototype.night=function(t,e){t=t||.1;var r=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,2*t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.predator=function(t,e){var r=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.lsd=function(t){var e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},a(e,[{key:"matrix",get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t}}]),e}(h.Filter);r.default=l,l.prototype.grayscale=l.prototype.greyscale},{"../../core":61}],138:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../../core"),h=n(u),l=function(t){function e(r,n){i(this,e);var s=new h.Matrix;r.renderable=!1;var a=o(this,t.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}","#define GLSLIFY 1\nvarying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"));return a.maskSprite=r,a.maskMatrix=s,a.uniforms.mapSampler=r.texture,a.uniforms.filterMatrix=s.toArray(!0),a.uniforms.scale={x:1,y:1},null!==n&&void 0!==n||(n=20),a.scale=new h.Point(n,n),a}return s(e,t),e.prototype.apply=function(t,e,r){var n=1/r.destinationFrame.width*(r.size.width/e.size.width);this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x*n,this.uniforms.scale.y=this.scale.y*n,t.applyFilter(this,e,r)},a(e,[{key:"map",get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t}}]),e}(h.Filter);r.default=l},{"../../core":61}],139:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../../core"),u=n(a),h=function(t){function e(){return i(this,e),o(this,t.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}",'#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n      vec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'))}return s(e,t),e}(u.Filter);r.default=h},{"../../core":61}],140:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./fxaa/FXAAFilter");Object.defineProperty(r,"FXAAFilter",{enumerable:!0,get:function(){return n(i).default}});var o=t("./noise/NoiseFilter");Object.defineProperty(r,"NoiseFilter",{enumerable:!0,get:function(){return n(o).default}});var s=t("./displacement/DisplacementFilter");Object.defineProperty(r,"DisplacementFilter",{enumerable:!0,get:function(){return n(s).default}});var a=t("./blur/BlurFilter");Object.defineProperty(r,"BlurFilter",{enumerable:!0,get:function(){return n(a).default}});var u=t("./blur/BlurXFilter");Object.defineProperty(r,"BlurXFilter",{enumerable:!0,get:function(){return n(u).default}});var h=t("./blur/BlurYFilter");Object.defineProperty(r,"BlurYFilter",{enumerable:!0,get:function(){return n(h).default}});var l=t("./colormatrix/ColorMatrixFilter");Object.defineProperty(r,"ColorMatrixFilter",{enumerable:!0,get:function(){return n(l).default}});var c=t("./void/VoidFilter");Object.defineProperty(r,"VoidFilter",{enumerable:!0,get:function(){return n(c).default}})},{"./blur/BlurFilter":131,"./blur/BlurXFilter":132,"./blur/BlurYFilter":133,"./colormatrix/ColorMatrixFilter":137,"./displacement/DisplacementFilter":138,"./fxaa/FXAAFilter":139,"./noise/NoiseFilter":141,"./void/VoidFilter":142}],141:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../../core"),h=n(u),l=function(t){function e(){i(this,e);var r=o(this,t.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n"));return r.noise=.5,r}return s(e,t),a(e,[{key:"noise",get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t}}]),e}(h.Filter);r.default=l},{"../../core":61}],142:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../../core"),u=n(a),h=function(t){function e(){i(this,e);var r=o(this,t.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"));return r.glShaderKey="void",r}return s(e,t),e}(u.Filter);r.default=h},{"../../core":61}],143:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("../core"),s=n(o),a=function(){function t(){i(this,t),this.global=new s.Point,this.target=null,this.originalEvent=null}return t.prototype.getLocalPosition=function(t,e,r){return t.worldTransform.applyInverse(r||this.global,e)},t}();r.default=a},{"../core":61}],144:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(){n(this,t),this.stopped=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return t.prototype.stopPropagation=function(){this.stopped=!0},t.prototype._reset=function(){this.stopped=!1,this.currentTarget=null,this.target=null},t}();r.default=i},{}],145:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=t("../core"),h=i(u),l=t("./InteractionData"),c=n(l),f=t("./InteractionEvent"),d=n(f),p=t("eventemitter3"),v=n(p),y=t("./interactiveTarget"),g=n(y),m=t("ismobilejs"),_=n(m);Object.assign(h.DisplayObject.prototype,g.default);var b=function(t){function e(r,n){o(this,e);var i=s(this,t.call(this));return n=n||{},i.renderer=r,i.autoPreventDefault=void 0===n.autoPreventDefault||n.autoPreventDefault,i.interactionFrequency=n.interactionFrequency||10,i.mouse=new c.default,i.mouse.global.set(-999999),i.pointer=new c.default,i.pointer.global.set(-999999),i.eventData=new d.default,i.interactiveDataPool=[],i.interactionDOMElement=null,i.moveWhenInside=!1,i.eventsAdded=!1,i.mouseOverRenderer=!1,i.supportsTouchEvents="ontouchstart"in window,i.supportsPointerEvents=!!window.PointerEvent,i.normalizeTouchEvents=!i.supportsPointerEvents&&i.supportsTouchEvents,i.normalizeMouseEvents=!i.supportsPointerEvents&&!_.default.any,i.onMouseUp=i.onMouseUp.bind(i),i.processMouseUp=i.processMouseUp.bind(i),i.onMouseDown=i.onMouseDown.bind(i),i.processMouseDown=i.processMouseDown.bind(i),i.onMouseMove=i.onMouseMove.bind(i),i.processMouseMove=i.processMouseMove.bind(i),i.onMouseOut=i.onMouseOut.bind(i),i.processMouseOverOut=i.processMouseOverOut.bind(i),i.onMouseOver=i.onMouseOver.bind(i),i.onPointerUp=i.onPointerUp.bind(i),i.processPointerUp=i.processPointerUp.bind(i),i.onPointerDown=i.onPointerDown.bind(i),i.processPointerDown=i.processPointerDown.bind(i),i.onPointerMove=i.onPointerMove.bind(i),i.processPointerMove=i.processPointerMove.bind(i),i.onPointerOut=i.onPointerOut.bind(i),i.processPointerOverOut=i.processPointerOverOut.bind(i),i.onPointerOver=i.onPointerOver.bind(i),i.onTouchStart=i.onTouchStart.bind(i),i.processTouchStart=i.processTouchStart.bind(i),i.onTouchEnd=i.onTouchEnd.bind(i),i.processTouchEnd=i.processTouchEnd.bind(i),i.onTouchMove=i.onTouchMove.bind(i),i.processTouchMove=i.processTouchMove.bind(i),i.defaultCursorStyle="inherit",i.currentCursorStyle="inherit",i._tempPoint=new h.Point,i.resolution=1,i.setTargetElement(i.renderer.view,i.renderer.resolution),i}return a(e,t),e.prototype.setTargetElement=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.removeEvents(),this.interactionDOMElement=t,this.resolution=e,this.addEvents()},e.prototype.addEvents=function(){this.interactionDOMElement&&(h.ticker.shared.add(this.update,this),window.navigator.msPointerEnabled?(this.interactionDOMElement.style["-ms-content-zooming"]="none",this.interactionDOMElement.style["-ms-touch-action"]="none"):this.supportsPointerEvents&&(this.interactionDOMElement.style["touch-action"]="none"),window.document.addEventListener("mousemove",this.onMouseMove,!0),this.interactionDOMElement.addEventListener("mousedown",this.onMouseDown,!0),this.interactionDOMElement.addEventListener("mouseout",this.onMouseOut,!0),this.interactionDOMElement.addEventListener("mouseover",this.onMouseOver,!0),window.addEventListener("mouseup",this.onMouseUp,!0),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onTouchStart,!0),this.interactionDOMElement.addEventListener("touchend",this.onTouchEnd,!0),this.interactionDOMElement.addEventListener("touchmove",this.onTouchMove,!0)),this.supportsPointerEvents?(window.document.addEventListener("pointermove",this.onPointerMove,!0),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,!0),this.interactionDOMElement.addEventListener("pointerout",this.onPointerOut,!0),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,!0),window.addEventListener("pointerup",this.onPointerUp,!0)):(this.normalizeTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,!0),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,!0),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,!0)),this.normalizeMouseEvents&&(window.document.addEventListener("mousemove",this.onPointerMove,!0),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,!0),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,!0),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,!0),window.addEventListener("mouseup",this.onPointerUp,!0))),this.eventsAdded=!0)},e.prototype.removeEvents=function(){this.interactionDOMElement&&(h.ticker.shared.remove(this.update,this),window.navigator.msPointerEnabled?(this.interactionDOMElement.style["-ms-content-zooming"]="",this.interactionDOMElement.style["-ms-touch-action"]=""):this.supportsPointerEvents&&(this.interactionDOMElement.style["touch-action"]=""),window.document.removeEventListener("mousemove",this.onMouseMove,!0),this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,!0),this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,!0),this.interactionDOMElement.removeEventListener("mouseover",this.onMouseOver,!0),window.removeEventListener("mouseup",this.onMouseUp,!0),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,!0),this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,!0),this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,!0)),this.supportsPointerEvents?(window.document.removeEventListener("pointermove",this.onPointerMove,!0),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,!0),
	this.interactionDOMElement.removeEventListener("pointerout",this.onPointerOut,!0),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,!0),window.removeEventListener("pointerup",this.onPointerUp,!0)):(this.normalizeTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,!0),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,!0),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,!0)),this.normalizeMouseEvents&&(window.document.removeEventListener("mousemove",this.onPointerMove,!0),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,!0),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,!0),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,!0),window.removeEventListener("mouseup",this.onPointerUp,!0))),this.interactionDOMElement=null,this.eventsAdded=!1)},e.prototype.update=function(t){if(this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.interactionDOMElement)){if(this.didMove)return void(this.didMove=!1);this.cursor=this.defaultCursorStyle,this.eventData._reset(),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,!0),this.currentCursorStyle!==this.cursor&&(this.currentCursorStyle=this.cursor,this.interactionDOMElement.style.cursor=this.cursor)}},e.prototype.dispatchEvent=function(t,e,r){r.stopped||(r.currentTarget=t,r.type=e,t.emit(e,r),t[e]&&t[e](r))},e.prototype.mapPositionToPoint=function(t,e,r){var n=void 0;n=this.interactionDOMElement.parentElement?this.interactionDOMElement.getBoundingClientRect():{x:0,y:0,width:0,height:0},t.x=(e-n.left)*(this.interactionDOMElement.width/n.width)/this.resolution,t.y=(r-n.top)*(this.interactionDOMElement.height/n.height)/this.resolution},e.prototype.processInteractive=function(t,e,r,n,i){if(!e||!e.visible)return!1;i=e.interactive||i;var o=!1,s=i;if(e.hitArea&&(s=!1),n&&e._mask&&(e._mask.containsPoint(t)||(n=!1)),n&&e.filterArea&&(e.filterArea.contains(t.x,t.y)||(n=!1)),e.interactiveChildren&&e.children)for(var a=e.children,u=a.length-1;u>=0;u--){var h=a[u];if(this.processInteractive(t,h,r,n,s)){if(!h.parent)continue;o=!0,s=!1,n=!1}}return i&&(n&&!o&&(e.hitArea?(e.worldTransform.applyInverse(t,this._tempPoint),o=e.hitArea.contains(this._tempPoint.x,this._tempPoint.y)):e.containsPoint&&(o=e.containsPoint(t))),e.interactive&&(o&&!this.eventData.target&&(this.eventData.target=e,this.mouse.target=e,this.pointer.target=e),r(e,o))),o},e.prototype.onMouseDown=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData._reset(),this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.autoPreventDefault&&this.mouse.originalEvent.preventDefault(),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseDown,!0);var e=2===t.button||3===t.which;this.emit(e?"rightdown":"mousedown",this.eventData)},e.prototype.processMouseDown=function(t,e){var r=this.mouse.originalEvent,n=2===r.button||3===r.which;e&&(t[n?"_isRightDown":"_isLeftDown"]=!0,this.dispatchEvent(t,n?"rightdown":"mousedown",this.eventData))},e.prototype.onMouseUp=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData._reset(),this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseUp,!0);var e=2===t.button||3===t.which;this.emit(e?"rightup":"mouseup",this.eventData)},e.prototype.processMouseUp=function(t,e){var r=this.mouse.originalEvent,n=2===r.button||3===r.which,i=n?"_isRightDown":"_isLeftDown";e?(this.dispatchEvent(t,n?"rightup":"mouseup",this.eventData),t[i]&&(t[i]=!1,this.dispatchEvent(t,n?"rightclick":"click",this.eventData))):t[i]&&(t[i]=!1,this.dispatchEvent(t,n?"rightupoutside":"mouseupoutside",this.eventData))},e.prototype.onMouseMove=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData._reset(),this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.didMove=!0,this.cursor=this.defaultCursorStyle,this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseMove,!0),this.emit("mousemove",this.eventData),this.currentCursorStyle!==this.cursor&&(this.currentCursorStyle=this.cursor,this.interactionDOMElement.style.cursor=this.cursor)},e.prototype.processMouseMove=function(t,e){this.processMouseOverOut(t,e),this.moveWhenInside&&!e||this.dispatchEvent(t,"mousemove",this.eventData)},e.prototype.onMouseOut=function(t){this.mouseOverRenderer=!1,this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData._reset(),this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.interactionDOMElement.style.cursor=this.defaultCursorStyle,this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,!1),this.emit("mouseout",this.eventData)},e.prototype.processMouseOverOut=function(t,e){e&&this.mouseOverRenderer?(t._mouseOver||(t._mouseOver=!0,this.dispatchEvent(t,"mouseover",this.eventData)),t.buttonMode&&(this.cursor=t.defaultCursor)):t._mouseOver&&(t._mouseOver=!1,this.dispatchEvent(t,"mouseout",this.eventData))},e.prototype.onMouseOver=function(t){this.mouseOverRenderer=!0,this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData._reset(),this.emit("mouseover",this.eventData)},e.prototype.onPointerDown=function(t){this.normalizeToPointerData(t),this.pointer.originalEvent=t,this.eventData.data=this.pointer,this.eventData._reset(),this.mapPositionToPoint(this.pointer.global,t.clientX,t.clientY),this.autoPreventDefault&&this.pointer.originalEvent.preventDefault(),this.processInteractive(this.pointer.global,this.renderer._lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",this.eventData)},e.prototype.processPointerDown=function(t,e){e&&(t._pointerDown=!0,this.dispatchEvent(t,"pointerdown",this.eventData))},e.prototype.onPointerUp=function(t){this.normalizeToPointerData(t),this.pointer.originalEvent=t,this.eventData.data=this.pointer,this.eventData._reset(),this.mapPositionToPoint(this.pointer.global,t.clientX,t.clientY),this.processInteractive(this.pointer.global,this.renderer._lastObjectRendered,this.processPointerUp,!0),this.emit("pointerup",this.eventData)},e.prototype.processPointerUp=function(t,e){e?(this.dispatchEvent(t,"pointerup",this.eventData),t._pointerDown&&(t._pointerDown=!1,this.dispatchEvent(t,"pointertap",this.eventData))):t._pointerDown&&(t._pointerDown=!1,this.dispatchEvent(t,"pointerupoutside",this.eventData))},e.prototype.onPointerMove=function(t){this.normalizeToPointerData(t),this.pointer.originalEvent=t,this.eventData.data=this.pointer,this.eventData._reset(),this.mapPositionToPoint(this.pointer.global,t.clientX,t.clientY),this.processInteractive(this.pointer.global,this.renderer._lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",this.eventData)},e.prototype.processPointerMove=function(t,e){this.pointer.originalEvent.changedTouches||this.processPointerOverOut(t,e),this.moveWhenInside&&!e||this.dispatchEvent(t,"pointermove",this.eventData)},e.prototype.onPointerOut=function(t){this.normalizeToPointerData(t),this.pointer.originalEvent=t,this.eventData.data=this.pointer,this.eventData._reset(),this.mapPositionToPoint(this.pointer.global,t.clientX,t.clientY),this.processInteractive(this.pointer.global,this.renderer._lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",this.eventData)},e.prototype.processPointerOverOut=function(t,e){e&&this.mouseOverRenderer?t._pointerOver||(t._pointerOver=!0,this.dispatchEvent(t,"pointerover",this.eventData)):t._pointerOver&&(t._pointerOver=!1,this.dispatchEvent(t,"pointerout",this.eventData))},e.prototype.onPointerOver=function(t){this.pointer.originalEvent=t,this.eventData.data=this.pointer,this.eventData._reset(),this.emit("pointerover",this.eventData)},e.prototype.onTouchStart=function(t){this.autoPreventDefault&&t.preventDefault();for(var e=t.changedTouches,r=e.length,n=0;n<r;n++){var i=e[n],o=this.getTouchData(i);o.originalEvent=t,this.eventData.data=o,this.eventData._reset(),this.processInteractive(o.global,this.renderer._lastObjectRendered,this.processTouchStart,!0),this.emit("touchstart",this.eventData),this.returnTouchData(o)}},e.prototype.processTouchStart=function(t,e){e&&(t._touchDown=!0,this.dispatchEvent(t,"touchstart",this.eventData))},e.prototype.onTouchEnd=function(t){this.autoPreventDefault&&t.preventDefault();for(var e=t.changedTouches,r=e.length,n=0;n<r;n++){var i=e[n],o=this.getTouchData(i);o.originalEvent=t,this.eventData.data=o,this.eventData._reset(),this.processInteractive(o.global,this.renderer._lastObjectRendered,this.processTouchEnd,!0),this.emit("touchend",this.eventData),this.returnTouchData(o)}},e.prototype.processTouchEnd=function(t,e){e?(this.dispatchEvent(t,"touchend",this.eventData),t._touchDown&&(t._touchDown=!1,this.dispatchEvent(t,"tap",this.eventData))):t._touchDown&&(t._touchDown=!1,this.dispatchEvent(t,"touchendoutside",this.eventData))},e.prototype.onTouchMove=function(t){this.autoPreventDefault&&t.preventDefault();for(var e=t.changedTouches,r=e.length,n=0;n<r;n++){var i=e[n],o=this.getTouchData(i);o.originalEvent=t,this.eventData.data=o,this.eventData._reset(),this.processInteractive(o.global,this.renderer._lastObjectRendered,this.processTouchMove,this.moveWhenInside),this.emit("touchmove",this.eventData),this.returnTouchData(o)}},e.prototype.processTouchMove=function(t,e){this.moveWhenInside&&!e||this.dispatchEvent(t,"touchmove",this.eventData)},e.prototype.getTouchData=function(t){var e=this.interactiveDataPool.pop()||new c.default;return e.identifier=t.identifier,this.mapPositionToPoint(e.global,t.clientX,t.clientY),navigator.isCocoonJS&&(e.global.x=e.global.x/this.resolution,e.global.y=e.global.y/this.resolution),t.globalX=e.global.x,t.globalY=e.global.y,e},e.prototype.returnTouchData=function(t){this.interactiveDataPool.push(t)},e.prototype.normalizeToPointerData=function(t){this.normalizeTouchEvents&&t.changedTouches?("undefined"==typeof t.button&&(t.button=t.touches.length?1:0),"undefined"==typeof t.buttons&&(t.buttons=t.touches.length?1:0),"undefined"==typeof t.isPrimary&&(t.isPrimary=1===t.touches.length),"undefined"==typeof t.width&&(t.width=t.changedTouches[0].radiusX||1),"undefined"==typeof t.height&&(t.height=t.changedTouches[0].radiusY||1),"undefined"==typeof t.tiltX&&(t.tiltX=0),"undefined"==typeof t.tiltY&&(t.tiltY=0),"undefined"==typeof t.pointerType&&(t.pointerType="touch"),"undefined"==typeof t.pointerId&&(t.pointerId=t.changedTouches[0].identifier||0),"undefined"==typeof t.pressure&&(t.pressure=t.changedTouches[0].force||.5),"undefined"==typeof t.rotation&&(t.rotation=t.changedTouches[0].rotationAngle||0),"undefined"==typeof t.clientX&&(t.clientX=t.changedTouches[0].clientX),"undefined"==typeof t.clientY&&(t.clientY=t.changedTouches[0].clientY),"undefined"==typeof t.pageX&&(t.pageX=t.changedTouches[0].pageX),"undefined"==typeof t.pageY&&(t.pageY=t.changedTouches[0].pageY),"undefined"==typeof t.screenX&&(t.screenX=t.changedTouches[0].screenX),"undefined"==typeof t.screenY&&(t.screenY=t.changedTouches[0].screenY),"undefined"==typeof t.layerX&&(t.layerX=t.offsetX=t.clientX),"undefined"==typeof t.layerY&&(t.layerY=t.offsetY=t.clientY)):this.normalizeMouseEvents&&("undefined"==typeof t.isPrimary&&(t.isPrimary=!0),"undefined"==typeof t.width&&(t.width=1),"undefined"==typeof t.height&&(t.height=1),"undefined"==typeof t.tiltX&&(t.tiltX=0),"undefined"==typeof t.tiltY&&(t.tiltY=0),"undefined"==typeof t.pointerType&&(t.pointerType="mouse"),"undefined"==typeof t.pointerId&&(t.pointerId=1),"undefined"==typeof t.pressure&&(t.pressure=.5),"undefined"==typeof t.rotation&&(t.rotation=0))},e.prototype.destroy=function(){this.removeEvents(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactiveDataPool=null,this.interactionDOMElement=null,this.onMouseDown=null,this.processMouseDown=null,this.onMouseUp=null,this.processMouseUp=null,this.onMouseMove=null,this.processMouseMove=null,this.onMouseOut=null,this.processMouseOverOut=null,this.onMouseOver=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.onTouchStart=null,this.processTouchStart=null,this.onTouchEnd=null,this.processTouchEnd=null,this.onTouchMove=null,this.processTouchMove=null,this._tempPoint=null},e}(v.default);r.default=b,h.WebGLRenderer.registerPlugin("interaction",b),h.CanvasRenderer.registerPlugin("interaction",b)},{"../core":61,"./InteractionData":143,"./InteractionEvent":144,"./interactiveTarget":147,eventemitter3:3,ismobilejs:4}],146:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./InteractionData");Object.defineProperty(r,"InteractionData",{enumerable:!0,get:function(){return n(i).default}});var o=t("./InteractionManager");Object.defineProperty(r,"InteractionManager",{enumerable:!0,get:function(){return n(o).default}});var s=t("./interactiveTarget");Object.defineProperty(r,"interactiveTarget",{enumerable:!0,get:function(){return n(s).default}})},{"./InteractionData":143,"./InteractionManager":145,"./interactiveTarget":147}],147:[function(t,e,r){"use strict";r.__esModule=!0,r.default={interactive:!1,interactiveChildren:!0,hitArea:null,buttonMode:!1,defaultCursor:"pointer",_over:!1,_isLeftDown:!1,_isRightDown:!1,_pointerOver:!1,_pointerDown:!1,_touchDown:!1}},{}],148:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){var r={},n=t.data.getElementsByTagName("info")[0],i=t.data.getElementsByTagName("common")[0];r.font=n.getAttribute("face"),r.size=parseInt(n.getAttribute("size"),10),r.lineHeight=parseInt(i.getAttribute("lineHeight"),10),r.chars={};for(var o=t.data.getElementsByTagName("char"),s=0;s<o.length;s++){var u=parseInt(o[s].getAttribute("id"),10),l=new a.Rectangle(parseInt(o[s].getAttribute("x"),10)+e.frame.x,parseInt(o[s].getAttribute("y"),10)+e.frame.y,parseInt(o[s].getAttribute("width"),10),parseInt(o[s].getAttribute("height"),10));r.chars[u]={xOffset:parseInt(o[s].getAttribute("xoffset"),10),yOffset:parseInt(o[s].getAttribute("yoffset"),10),xAdvance:parseInt(o[s].getAttribute("xadvance"),10),kerning:{},texture:new a.Texture(e.baseTexture,l)}}for(var c=t.data.getElementsByTagName("kerning"),f=0;f<c.length;f++){var d=parseInt(c[f].getAttribute("first"),10),p=parseInt(c[f].getAttribute("second"),10),v=parseInt(c[f].getAttribute("amount"),10);r.chars[p]&&(r.chars[p].kerning[d]=v)}t.bitmapFont=r,h.BitmapText.fonts[r.font]=r}r.__esModule=!0,r.parse=i,r.default=function(){return function(t,e){if(!t.data||!t.isXml)return void e();if(0===t.data.getElementsByTagName("page").length||0===t.data.getElementsByTagName("info").length||null===t.data.getElementsByTagName("info")[0].getAttribute("face"))return void e();var r=t.isDataUrl?"":s.dirname(t.url);t.isDataUrl&&("."===r&&(r=""),this.baseUrl&&r&&("/"===this.baseUrl.charAt(this.baseUrl.length-1)&&(r+="/"),r=r.replace(this.baseUrl,""))),r&&"/"!==r.charAt(r.length-1)&&(r+="/");var n=r+t.data.getElementsByTagName("page")[0].getAttribute("file");if(a.utils.TextureCache[n])i(t,a.utils.TextureCache[n]),e();else{var o={crossOrigin:t.crossOrigin,loadType:u.Resource.LOAD_TYPE.IMAGE,metadata:t.metadata.imageMetadata};this.add(t.name+"_image",n,o,function(r){i(t,r.texture),e()})}}};var o=t("path"),s=n(o),a=t("../core"),u=t("resource-loader"),h=t("../extras")},{"../core":61,"../extras":129,path:22,"resource-loader":35}],149:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./loader");Object.defineProperty(r,"Loader",{enumerable:!0,get:function(){return n(i).default}});var o=t("./bitmapFontParser");Object.defineProperty(r,"bitmapFontParser",{enumerable:!0,get:function(){return n(o).default}}),Object.defineProperty(r,"parseBitmapFontData",{enumerable:!0,get:function(){return o.parse}});var s=t("./spritesheetParser");Object.defineProperty(r,"spritesheetParser",{enumerable:!0,get:function(){return n(s).default}});var a=t("./textureParser");Object.defineProperty(r,"textureParser",{enumerable:!0,get:function(){return n(a).default}});var u=t("resource-loader");Object.defineProperty(r,"Resource",{enumerable:!0,get:function(){return u.Resource}})},{"./bitmapFontParser":148,"./loader":150,"./spritesheetParser":151,"./textureParser":152,"resource-loader":35}],150:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("resource-loader"),u=n(a),h=t("./textureParser"),l=n(h),c=t("./spritesheetParser"),f=n(c),d=t("./bitmapFontParser"),p=n(d),v=function(t){function e(r,n){i(this,e);for(var s=o(this,t.call(this,r,n)),a=0;a<e._pixiMiddleware.length;++a)s.use(e._pixiMiddleware[a]());return s}return s(e,t),e.addPixiMiddleware=function(t){e._pixiMiddleware.push(t)},e}(u.default);r.default=v,v._pixiMiddleware=[u.default.middleware.parsing.blob,l.default,f.default,p.default];var y=u.default.Resource;y.setExtensionXhrType("fnt",y.XHR_RESPONSE_TYPE.DOCUMENT)},{"./bitmapFontParser":148,"./spritesheetParser":151,"./textureParser":152,"resource-loader":35}],151:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0,r.default=function(){return function(t,e){var r=void 0,n=t.name+"_image";if(!t.data||!t.isJson||!t.data.frames||this.resources[n])return void e();var i={crossOrigin:t.crossOrigin,loadType:o.Resource.LOAD_TYPE.IMAGE,metadata:t.metadata.imageMetadata};r=t.isDataUrl?t.data.meta.image:a.default.dirname(t.url.replace(this.baseUrl,""))+"/"+t.data.meta.image,this.add(n,r,i,function(r){function n(e,n){for(var i=e;i-e<n&&i<u.length;){var o=u[i],s=a[o].frame;if(s){var l=null,f=null,d=new h.Rectangle(0,0,a[o].sourceSize.w/c,a[o].sourceSize.h/c);l=a[o].rotated?new h.Rectangle(s.x/c,s.y/c,s.h/c,s.w/c):new h.Rectangle(s.x/c,s.y/c,s.w/c,s.h/c),a[o].trimmed&&(f=new h.Rectangle(a[o].spriteSourceSize.x/c,a[o].spriteSourceSize.y/c,a[o].spriteSourceSize.w/c,a[o].spriteSourceSize.h/c)),t.textures[o]=new h.Texture(r.texture.baseTexture,l,d,f,a[o].rotated?2:0),h.utils.TextureCache[o]=t.textures[o]}i++}}function i(){return f*l<u.length}function o(t){n(f*l,l),f++,setTimeout(t,0)}function s(){o(function(){i()?s():e()})}t.textures={};var a=t.data.frames,u=Object.keys(a),c=h.utils.getResolutionOfUrl(t.url),f=0;u.length<=l?(n(0,l),e()):s()})}};var o=t("resource-loader"),s=t("path"),a=i(s),u=t("../core"),h=n(u),l=1e3},{"../core":61,path:22,"resource-loader":35}],152:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}r.__esModule=!0,r.default=function(){return function(t,e){if(t.data&&t.isImage){var r=new o.BaseTexture(t.data,null,o.utils.getResolutionOfUrl(t.url));r.imageUrl=t.url,t.texture=new o.Texture(r),o.utils.BaseTextureCache[t.name]=r,o.utils.TextureCache[t.name]=t.texture,t.name!==t.url&&(o.utils.BaseTextureCache[t.url]=r,o.utils.TextureCache[t.url]=t.texture)}e()}};var i=t("../core"),o=n(i)},{"../core":61}],153:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../core"),h=n(u),l=new h.Point,c=new h.Polygon,f=function(t){function e(r,n,s,a,u){i(this,e);var l=o(this,t.call(this));return l._texture=null,l.uvs=s||new Float32Array([0,0,1,0,1,1,0,1]),l.vertices=n||new Float32Array([0,0,100,0,100,100,0,100]),l.indices=a||new Uint16Array([0,1,3,2]),l.dirty=0,l.indexDirty=0,l.blendMode=h.BLEND_MODES.NORMAL,l.canvasPadding=0,l.drawMode=u||e.DRAW_MODES.TRIANGLE_MESH,l.texture=r,l.shader=null,l.tintRgb=new Float32Array([1,1,1]),l._glDatas={},l}return s(e,t),e.prototype._renderWebGL=function(t){t.setObjectRenderer(t.plugins.mesh),t.plugins.mesh.render(this)},e.prototype._renderCanvas=function(t){t.plugins.mesh.render(this)},e.prototype._onTextureUpdate=function(){},e.prototype._calculateBounds=function(){this._bounds.addVertices(this.transform,this.vertices,0,this.vertices.length)},e.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,l);for(var r=this.vertices,n=c.points,i=this.indices,o=this.indices.length,s=this.drawMode===e.DRAW_MODES.TRIANGLES?3:1,a=0;a+2<o;a+=s){var u=2*i[a],h=2*i[a+1],f=2*i[a+2];if(n[0]=r[u],n[1]=r[u+1],n[2]=r[h],n[3]=r[h+1],n[4]=r[f],n[5]=r[f+1],c.contains(l.x,l.y))return!0}return!1},a(e,[{key:"texture",get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture=t,t&&(t.baseTexture.hasLoaded?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))}},{key:"tint",get:function(){return h.utils.rgb2hex(this.tintRgb)},set:function(t){this.tintRgb=h.utils.hex2rgb(t,this.tintRgb)}}]),e}(h.Container);r.default=f,f.DRAW_MODES={TRIANGLE_MESH:0,TRIANGLES:1}},{"../core":61}],154:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("./Plane"),h=n(u),l=10,c=function(t){function e(r,n,s,a,u){i(this,e);var h=o(this,t.call(this,r,4,4)),c=h.uvs;return c[6]=c[14]=c[22]=c[30]=1,c[25]=c[27]=c[29]=c[31]=1,h._origWidth=r.width,h._origHeight=r.height,h._uvw=1/h._origWidth,h._uvh=1/h._origHeight,h.width=r.width,h.height=r.height,c[2]=c[10]=c[18]=c[26]=h._uvw*n,c[4]=c[12]=c[20]=c[28]=1-h._uvw*a,c[9]=c[11]=c[13]=c[15]=h._uvh*s,c[17]=c[19]=c[21]=c[23]=1-h._uvh*u,h.leftWidth="undefined"!=typeof n?n:l,h.rightWidth="undefined"!=typeof a?a:l,h.topHeight="undefined"!=typeof s?s:l,h.bottomHeight="undefined"!=typeof u?u:l,h}return s(e,t),e.prototype.updateHorizontalVertices=function(){var t=this.vertices;t[9]=t[11]=t[13]=t[15]=this._topHeight,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight,t[25]=t[27]=t[29]=t[31]=this._height},e.prototype.updateVerticalVertices=function(){var t=this.vertices;t[2]=t[10]=t[18]=t[26]=this._leftWidth,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth,t[6]=t[14]=t[22]=t[30]=this._width},e.prototype._renderCanvas=function(t){var e=t.context;e.globalAlpha=this.worldAlpha;var r=this.worldTransform,n=t.resolution;t.roundPixels?e.setTransform(r.a*n,r.b*n,r.c*n,r.d*n,r.tx*n|0,r.ty*n|0):e.setTransform(r.a*n,r.b*n,r.c*n,r.d*n,r.tx*n,r.ty*n);var i=this._texture.baseTexture,o=i.source,s=i.width,a=i.height;this.drawSegment(e,o,s,a,0,1,10,11),this.drawSegment(e,o,s,a,2,3,12,13),this.drawSegment(e,o,s,a,4,5,14,15),this.drawSegment(e,o,s,a,8,9,18,19),this.drawSegment(e,o,s,a,10,11,20,21),this.drawSegment(e,o,s,a,12,13,22,23),this.drawSegment(e,o,s,a,16,17,26,27),this.drawSegment(e,o,s,a,18,19,28,29),this.drawSegment(e,o,s,a,20,21,30,31)},e.prototype.drawSegment=function(t,e,r,n,i,o,s,a){var u=this.uvs,h=this.vertices,l=(u[s]-u[i])*r,c=(u[a]-u[o])*n,f=h[s]-h[i],d=h[a]-h[o];l<1&&(l=1),c<1&&(c=1),f<1&&(f=1),d<1&&(d=1),t.drawImage(e,u[i]*r,u[o]*n,l,c,h[i],h[o],f,d)},a(e,[{key:"width",get:function(){return this._width},set:function(t){this._width=t,this.updateVerticalVertices()}},{key:"height",get:function(){return this._height},set:function(t){this._height=t,this.updateHorizontalVertices()}},{key:"leftWidth",get:function(){return this._leftWidth},set:function(t){this._leftWidth=t;var e=this.uvs,r=this.vertices;e[2]=e[10]=e[18]=e[26]=this._uvw*t,r[2]=r[10]=r[18]=r[26]=t,this.dirty=!0}},{key:"rightWidth",get:function(){return this._rightWidth},set:function(t){this._rightWidth=t;var e=this.uvs,r=this.vertices;e[4]=e[12]=e[20]=e[28]=1-this._uvw*t,r[4]=r[12]=r[20]=r[28]=this._width-t,this.dirty=!0}},{key:"topHeight",get:function(){return this._topHeight},set:function(t){this._topHeight=t;var e=this.uvs,r=this.vertices;e[9]=e[11]=e[13]=e[15]=this._uvh*t,r[9]=r[11]=r[13]=r[15]=t,this.dirty=!0}},{key:"bottomHeight",get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t;var e=this.uvs,r=this.vertices;e[17]=e[19]=e[21]=e[23]=1-this._uvh*t,r[17]=r[19]=r[21]=r[23]=this._height-t,this.dirty=!0}}]),e}(h.default);r.default=c},{"./Plane":155}],155:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("./Mesh"),u=n(a),h=function(t){function e(r,n,s){i(this,e);var a=o(this,t.call(this,r));return a._ready=!0,a.verticesX=n||10,a.verticesY=s||10,a.drawMode=u.default.DRAW_MODES.TRIANGLES,a.refresh(),a}return s(e,t),e.prototype.refresh=function(){for(var t=this.verticesX*this.verticesY,e=[],r=[],n=[],i=[],o=this.texture,s=this.verticesX-1,a=this.verticesY-1,u=o.width/s,h=o.height/a,l=0;l<t;l++){var c=l%this.verticesX,f=l/this.verticesX|0;e.push(c*u,f*h),n.push(o._uvs.x0+(o._uvs.x1-o._uvs.x0)*(c/(this.verticesX-1)),o._uvs.y0+(o._uvs.y3-o._uvs.y0)*(f/(this.verticesY-1)))}for(var d=s*a,p=0;p<d;p++){var v=p%s,y=p/s|0,g=y*this.verticesX+v,m=y*this.verticesX+v+1,_=(y+1)*this.verticesX+v,b=(y+1)*this.verticesX+v+1;i.push(g,m,_),i.push(m,b,_)}this.vertices=new Float32Array(e),this.uvs=new Float32Array(n),this.colors=new Float32Array(r),this.indices=new Uint16Array(i),this.indexDirty=!0},e.prototype._onTextureUpdate=function(){u.default.prototype._onTextureUpdate.call(this),this._ready&&this.refresh()},e}(u.default);r.default=h},{"./Mesh":153}],156:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=t("./Mesh"),h=i(u),l=t("../core"),c=n(l),f=function(t){function e(r,n){o(this,e);var i=s(this,t.call(this,r));return i.points=n,i.vertices=new Float32Array(4*n.length),i.uvs=new Float32Array(4*n.length),i.colors=new Float32Array(2*n.length),i.indices=new Uint16Array(2*n.length),i._ready=!0,i.refresh(),i}return a(e,t),e.prototype.refresh=function(){var t=this.points;if(!(t.length<1)&&this._texture._uvs){var e=this.uvs,r=this.indices,n=this.colors,i=this._texture._uvs,o=new c.Point(i.x0,i.y0),s=new c.Point(i.x2-i.x0,i.y2-i.y0);e[0]=0+o.x,e[1]=0+o.y,e[2]=0+o.x,e[3]=Number(s.y)+o.y,n[0]=1,n[1]=1,r[0]=0,r[1]=1;for(var a=t.length,u=1;u<a;u++){var h=4*u,l=u/(a-1);e[h]=l*s.x+o.x,e[h+1]=0+o.y,e[h+2]=l*s.x+o.x,e[h+3]=Number(s.y)+o.y,h=2*u,n[h]=1,n[h+1]=1,h=2*u,r[h]=h,r[h+1]=h+1}this.dirty=!0,this.indexDirty=!0}},e.prototype._onTextureUpdate=function(){t.prototype._onTextureUpdate.call(this),this._ready&&this.refresh()},e.prototype.updateTransform=function(){var t=this.points;if(!(t.length<1)){for(var e=t[0],r=void 0,n=0,i=0,o=this.vertices,s=t.length,a=0;a<s;a++){var u=t[a],h=4*a;r=a<t.length-1?t[a+1]:u,i=-(r.x-e.x),n=r.y-e.y;var l=10*(1-a/(s-1));l>1&&(l=1);var c=Math.sqrt(n*n+i*i),f=this._texture.height/2;n/=c,i/=c,n*=f,i*=f,o[h]=u.x+n,o[h+1]=u.y+i,o[h+2]=u.x-n,o[h+3]=u.y-i,e=u}this.containerUpdateTransform()}},e}(h.default);r.default=f},{"../core":61,"./Mesh":153}],157:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var s=t("../../core"),a=i(s),u=t("../Mesh"),h=n(u),l=function(){function t(e){o(this,t),this.renderer=e}return t.prototype.render=function(t){var e=this.renderer,r=e.context,n=t.worldTransform,i=e.resolution;e.roundPixels?r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i|0,n.ty*i|0):r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),t.drawMode===h.default.DRAW_MODES.TRIANGLE_MESH?this._renderTriangleMesh(t):this._renderTriangles(t)},t.prototype._renderTriangleMesh=function(t){for(var e=t.vertices.length/2,r=0;r<e-2;r++){var n=2*r;this._renderDrawTriangle(t,n,n+2,n+4)}},t.prototype._renderTriangles=function(t){for(var e=t.indices,r=e.length,n=0;n<r;n+=3){var i=2*e[n],o=2*e[n+1],s=2*e[n+2];this._renderDrawTriangle(t,i,o,s)}},t.prototype._renderDrawTriangle=function(t,e,r,n){var i=this.renderer.context,o=t.uvs,s=t.vertices,a=t._texture;
	if(a.valid){var u=a.baseTexture,h=u.source,l=u.width,c=u.height,f=o[e]*u.width,d=o[r]*u.width,p=o[n]*u.width,v=o[e+1]*u.height,y=o[r+1]*u.height,g=o[n+1]*u.height,m=s[e],_=s[r],b=s[n],x=s[e+1],T=s[r+1],w=s[n+1];if(t.canvasPadding>0){var E=t.canvasPadding/t.worldTransform.a,S=t.canvasPadding/t.worldTransform.d,O=(m+_+b)/3,M=(x+T+w)/3,P=m-O,C=x-M,R=Math.sqrt(P*P+C*C);m=O+P/R*(R+E),x=M+C/R*(R+S),P=_-O,C=T-M,R=Math.sqrt(P*P+C*C),_=O+P/R*(R+E),T=M+C/R*(R+S),P=b-O,C=w-M,R=Math.sqrt(P*P+C*C),b=O+P/R*(R+E),w=M+C/R*(R+S)}i.save(),i.beginPath(),i.moveTo(m,x),i.lineTo(_,T),i.lineTo(b,w),i.closePath(),i.clip();var D=f*y+v*p+d*g-y*p-v*d-f*g,A=m*y+v*b+_*g-y*b-v*_-m*g,I=f*_+m*p+d*b-_*p-m*d-f*b,L=f*y*b+v*_*p+m*d*g-m*y*p-v*d*b-f*_*g,j=x*y+v*w+T*g-y*w-v*T-x*g,F=f*T+x*p+d*w-T*p-x*d-f*w,B=f*y*w+v*T*p+x*d*g-x*y*p-v*d*w-f*T*g;i.transform(A/D,j/D,I/D,F/D,L/D,B/D),i.drawImage(h,0,0,l*u.resolution,c*u.resolution,0,0,l,c),i.restore()}},t.prototype.renderMeshFlat=function(t){var e=this.renderer.context,r=t.vertices,n=r.length/2;e.beginPath();for(var i=1;i<n-2;++i){var o=2*i,s=r[o],a=r[o+1],u=r[o+2],h=r[o+3],l=r[o+4],c=r[o+5];e.moveTo(s,a),e.lineTo(u,h),e.lineTo(l,c)}e.fillStyle="#FF0000",e.fill(),e.closePath()},t.prototype.destroy=function(){this.renderer=null},t}();r.default=l,a.CanvasRenderer.registerPlugin("mesh",l)},{"../../core":61,"../Mesh":153}],158:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./Mesh");Object.defineProperty(r,"Mesh",{enumerable:!0,get:function(){return n(i).default}});var o=t("./webgl/MeshRenderer");Object.defineProperty(r,"MeshRenderer",{enumerable:!0,get:function(){return n(o).default}});var s=t("./canvas/CanvasMeshRenderer");Object.defineProperty(r,"CanvasMeshRenderer",{enumerable:!0,get:function(){return n(s).default}});var a=t("./Plane");Object.defineProperty(r,"Plane",{enumerable:!0,get:function(){return n(a).default}});var u=t("./NineSlicePlane");Object.defineProperty(r,"NineSlicePlane",{enumerable:!0,get:function(){return n(u).default}});var h=t("./Rope");Object.defineProperty(r,"Rope",{enumerable:!0,get:function(){return n(h).default}})},{"./Mesh":153,"./NineSlicePlane":154,"./Plane":155,"./Rope":156,"./canvas/CanvasMeshRenderer":157,"./webgl/MeshRenderer":159}],159:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0,r.MeshRenderer=void 0;var u=t("../../core"),h=i(u),l=t("pixi-gl-core"),c=n(l),f=t("../Mesh"),d=n(f),p=r.MeshRenderer=function(t){function e(r){o(this,e);var n=s(this,t.call(this,r));return n.shader=null,n}return a(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=new h.Shader(t,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n}\n","#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform float alpha;\nuniform vec3 tint;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);\n}\n")},e.prototype.render=function(t){var e=this.renderer,r=e.gl,n=t._texture;if(n.valid){var i=t._glDatas[e.CONTEXT_UID];i||(i={shader:this.shader,vertexBuffer:c.default.GLBuffer.createVertexBuffer(r,t.vertices,r.STREAM_DRAW),uvBuffer:c.default.GLBuffer.createVertexBuffer(r,t.uvs,r.STREAM_DRAW),indexBuffer:c.default.GLBuffer.createIndexBuffer(r,t.indices,r.STATIC_DRAW),vao:new c.default.VertexArrayObject(r),dirty:t.dirty,indexDirty:t.indexDirty},i.vao=new c.default.VertexArrayObject(r).addIndex(i.indexBuffer).addAttribute(i.vertexBuffer,i.shader.attributes.aVertexPosition,r.FLOAT,!1,8,0).addAttribute(i.uvBuffer,i.shader.attributes.aTextureCoord,r.FLOAT,!1,8,0),t._glDatas[e.CONTEXT_UID]=i),t.dirty!==i.dirty&&(i.dirty=t.dirty,i.uvBuffer.upload()),t.indexDirty!==i.indexDirty&&(i.indexDirty=t.indexDirty,i.indexBuffer.upload()),i.vertexBuffer.upload(),e.bindShader(i.shader),e.bindTexture(n,0),e.state.setBlendMode(t.blendMode),i.shader.uniforms.translationMatrix=t.worldTransform.toArray(!0),i.shader.uniforms.alpha=t.worldAlpha,i.shader.uniforms.tint=t.tintRgb;var o=t.drawMode===d.default.DRAW_MODES.TRIANGLE_MESH?r.TRIANGLE_STRIP:r.TRIANGLES;i.vao.bind().draw(o,t.indices.length).unbind()}},e}(h.ObjectRenderer);h.WebGLRenderer.registerPlugin("mesh",p)},{"../../core":61,"../Mesh":153,"pixi-gl-core":12}],160:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../core"),u=n(a),h=function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500,n=arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16384;i(this,e);var a=o(this,t.call(this)),h=16384;return s>h&&(s=h),s>r&&(s=r),a._properties=[!1,!0,!1,!1,!1],a._maxSize=r,a._batchSize=s,a._glBuffers={},a._bufferToUpdate=0,a.interactiveChildren=!1,a.blendMode=u.BLEND_MODES.NORMAL,a.roundPixels=!0,a.baseTexture=null,a.setProperties(n),a}return s(e,t),e.prototype.setProperties=function(t){t&&(this._properties[0]="scale"in t?!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="alpha"in t?!!t.alpha:this._properties[4])},e.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},e.prototype.renderWebGL=function(t){var e=this;this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable&&(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.hasLoaded||this.baseTexture.once("update",function(){return e.onChildrenChange(0)})),t.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},e.prototype.onChildrenChange=function(t){var e=Math.floor(t/this._batchSize);e<this._bufferToUpdate&&(this._bufferToUpdate=e)},e.prototype.renderCanvas=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable){var e=t.context,r=this.worldTransform,n=!0,i=0,o=0,s=0,a=0,u=t.blendModes[this.blendMode];u!==e.globalCompositeOperation&&(e.globalCompositeOperation=u),e.globalAlpha=this.worldAlpha,this.displayObjectUpdateTransform();for(var h=0;h<this.children.length;++h){var l=this.children[h];if(l.visible){var c=l.texture.frame;if(e.globalAlpha=this.worldAlpha*l.alpha,l.rotation%(2*Math.PI)===0)n&&(e.setTransform(r.a,r.b,r.c,r.d,r.tx*t.resolution,r.ty*t.resolution),n=!1),i=l.anchor.x*(-c.width*l.scale.x)+l.position.x+.5,o=l.anchor.y*(-c.height*l.scale.y)+l.position.y+.5,s=c.width*l.scale.x,a=c.height*l.scale.y;else{n||(n=!0),l.displayObjectUpdateTransform();var f=l.worldTransform;t.roundPixels?e.setTransform(f.a,f.b,f.c,f.d,f.tx*t.resolution|0,f.ty*t.resolution|0):e.setTransform(f.a,f.b,f.c,f.d,f.tx*t.resolution,f.ty*t.resolution),i=l.anchor.x*-c.width+.5,o=l.anchor.y*-c.height+.5,s=c.width,a=c.height}var d=l.texture.baseTexture.resolution;e.drawImage(l.texture.baseTexture.source,c.x*d,c.y*d,c.width*d,c.height*d,i*d,o*d,s*d,a*d)}}}},e.prototype.destroy=function(e){if(t.prototype.destroy.call(this,e),this._buffers)for(var r=0;r<this._buffers.length;++r)this._buffers[r].destroy();this._properties=null,this._buffers=null},e}(u.Container);r.default=h},{"../core":61}],161:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./ParticleContainer");Object.defineProperty(r,"ParticleContainer",{enumerable:!0,get:function(){return n(i).default}});var o=t("./webgl/ParticleRenderer");Object.defineProperty(r,"ParticleRenderer",{enumerable:!0,get:function(){return n(o).default}})},{"./ParticleContainer":160,"./webgl/ParticleRenderer":163}],162:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("pixi-gl-core"),s=n(o),a=t("../../core/utils/createIndicesForQuads"),u=n(a),h=function(){function t(e,r,n,o){i(this,t),this.gl=e,this.vertSize=2,this.vertByteSize=4*this.vertSize,this.size=o,this.dynamicProperties=[],this.staticProperties=[];for(var s=0;s<r.length;++s){var a=r[s];a={attribute:a.attribute,size:a.size,uploadFunction:a.uploadFunction,offset:a.offset},n[s]?this.dynamicProperties.push(a):this.staticProperties.push(a)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.initBuffers()}return t.prototype.initBuffers=function(){var t=this.gl,e=0;this.indices=(0,u.default)(this.size),this.indexBuffer=s.default.GLBuffer.createIndexBuffer(t,this.indices,t.STATIC_DRAW),this.dynamicStride=0;for(var r=0;r<this.dynamicProperties.length;++r){var n=this.dynamicProperties[r];n.offset=e,e+=n.size,this.dynamicStride+=n.size}this.dynamicData=new Float32Array(this.size*this.dynamicStride*4),this.dynamicBuffer=s.default.GLBuffer.createVertexBuffer(t,this.dynamicData,t.STREAM_DRAW);var i=0;this.staticStride=0;for(var o=0;o<this.staticProperties.length;++o){var a=this.staticProperties[o];a.offset=i,i+=a.size,this.staticStride+=a.size}this.staticData=new Float32Array(this.size*this.staticStride*4),this.staticBuffer=s.default.GLBuffer.createVertexBuffer(t,this.staticData,t.STATIC_DRAW),this.vao=new s.default.VertexArrayObject(t).addIndex(this.indexBuffer);for(var h=0;h<this.dynamicProperties.length;++h){var l=this.dynamicProperties[h];this.vao.addAttribute(this.dynamicBuffer,l.attribute,t.FLOAT,!1,4*this.dynamicStride,4*l.offset)}for(var c=0;c<this.staticProperties.length;++c){var f=this.staticProperties[c];this.vao.addAttribute(this.staticBuffer,f.attribute,t.FLOAT,!1,4*this.staticStride,4*f.offset)}},t.prototype.uploadDynamic=function(t,e,r){for(var n=0;n<this.dynamicProperties.length;n++){var i=this.dynamicProperties[n];i.uploadFunction(t,e,r,this.dynamicData,this.dynamicStride,i.offset)}this.dynamicBuffer.upload()},t.prototype.uploadStatic=function(t,e,r){for(var n=0;n<this.staticProperties.length;n++){var i=this.staticProperties[n];i.uploadFunction(t,e,r,this.staticData,this.staticStride,i.offset)}this.staticBuffer.upload()},t.prototype.bind=function(){this.vao.bind()},t.prototype.destroy=function(){this.dynamicProperties=null,this.dynamicData=null,this.dynamicBuffer.destroy(),this.staticProperties=null,this.staticData=null,this.staticBuffer.destroy()},t}();r.default=h},{"../../core/utils/createIndicesForQuads":113,"pixi-gl-core":12}],163:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=t("../../core"),h=i(u),l=t("./ParticleShader"),c=n(l),f=t("./ParticleBuffer"),d=n(f),p=function(t){function e(r){o(this,e);var n=s(this,t.call(this,r));return n.shader=null,n.indexBuffer=null,n.properties=null,n.tempMatrix=new h.Matrix,n.CONTEXT_UID=0,n}return a(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.shader=new c.default(t),this.properties=[{attribute:this.shader.attributes.aVertexPosition,size:2,uploadFunction:this.uploadVertices,offset:0},{attribute:this.shader.attributes.aPositionCoord,size:2,uploadFunction:this.uploadPosition,offset:0},{attribute:this.shader.attributes.aRotation,size:1,uploadFunction:this.uploadRotation,offset:0},{attribute:this.shader.attributes.aTextureCoord,size:2,uploadFunction:this.uploadUvs,offset:0},{attribute:this.shader.attributes.aColor,size:1,uploadFunction:this.uploadAlpha,offset:0}]},e.prototype.start=function(){this.renderer.bindShader(this.shader)},e.prototype.render=function(t){var e=t.children,r=t._maxSize,n=t._batchSize,i=e.length;if(0!==i){i>r&&(i=r);var o=t._glBuffers[this.renderer.CONTEXT_UID];o||(o=t._glBuffers[this.renderer.CONTEXT_UID]=this.generateBuffers(t)),this.renderer.setBlendMode(t.blendMode);var s=this.renderer.gl,a=t.worldTransform.copy(this.tempMatrix);a.prepend(this.renderer._activeRenderTarget.projectionMatrix),this.shader.uniforms.projectionMatrix=a.toArray(!0),this.shader.uniforms.uAlpha=t.worldAlpha;var u=e[0]._texture.baseTexture;this.renderer.bindTexture(u);for(var h=0,l=0;h<i;h+=n,l+=1){var c=i-h;c>n&&(c=n);var f=o[l];f.uploadDynamic(e,h,c),t._bufferToUpdate===l&&(f.uploadStatic(e,h,c),t._bufferToUpdate=l+1),f.vao.bind().draw(s.TRIANGLES,6*c).unbind()}}},e.prototype.generateBuffers=function(t){for(var e=this.renderer.gl,r=[],n=t._maxSize,i=t._batchSize,o=t._properties,s=0;s<n;s+=i)r.push(new d.default(e,this.properties,o,i));return r},e.prototype.uploadVertices=function(t,e,r,n,i,o){for(var s=0,a=0,u=0,h=0,l=0;l<r;++l){var c=t[e+l],f=c._texture,d=c.scale.x,p=c.scale.y,v=f.trim,y=f.orig;v?(a=v.x-c.anchor.x*y.width,s=a+v.width,h=v.y-c.anchor.y*y.height,u=h+v.height):(s=y.width*(1-c.anchor.x),a=y.width*-c.anchor.x,u=y.height*(1-c.anchor.y),h=y.height*-c.anchor.y),n[o]=a*d,n[o+1]=h*p,n[o+i]=s*d,n[o+i+1]=h*p,n[o+2*i]=s*d,n[o+2*i+1]=u*p,n[o+3*i]=a*d,n[o+3*i+1]=u*p,o+=4*i}},e.prototype.uploadPosition=function(t,e,r,n,i,o){for(var s=0;s<r;s++){var a=t[e+s].position;n[o]=a.x,n[o+1]=a.y,n[o+i]=a.x,n[o+i+1]=a.y,n[o+2*i]=a.x,n[o+2*i+1]=a.y,n[o+3*i]=a.x,n[o+3*i+1]=a.y,o+=4*i}},e.prototype.uploadRotation=function(t,e,r,n,i,o){for(var s=0;s<r;s++){var a=t[e+s].rotation;n[o]=a,n[o+i]=a,n[o+2*i]=a,n[o+3*i]=a,o+=4*i}},e.prototype.uploadUvs=function(t,e,r,n,i,o){for(var s=0;s<r;++s){var a=t[e+s]._texture._uvs;a?(n[o]=a.x0,n[o+1]=a.y0,n[o+i]=a.x1,n[o+i+1]=a.y1,n[o+2*i]=a.x2,n[o+2*i+1]=a.y2,n[o+3*i]=a.x3,n[o+3*i+1]=a.y3,o+=4*i):(n[o]=0,n[o+1]=0,n[o+i]=0,n[o+i+1]=0,n[o+2*i]=0,n[o+2*i+1]=0,n[o+3*i]=0,n[o+3*i+1]=0,o+=4*i)}},e.prototype.uploadAlpha=function(t,e,r,n,i,o){for(var s=0;s<r;s++){var a=t[e+s].alpha;n[o]=a,n[o+i]=a,n[o+2*i]=a,n[o+3*i]=a,o+=4*i}},e.prototype.destroy=function(){this.renderer.gl&&this.renderer.gl.deleteBuffer(this.indexBuffer),t.prototype.destroy.call(this),this.shader.destroy(),this.indices=null,this.tempMatrix=null},e}(h.ObjectRenderer);r.default=p,h.WebGLRenderer.registerPlugin("particle",p)},{"../../core":61,"./ParticleBuffer":162,"./ParticleShader":164}],164:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../../core/Shader"),u=n(a),h=function(t){function e(r){return i(this,e),o(this,t.call(this,r,["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","varying float vColor;","void main(void){","   vec2 v = aVertexPosition;","   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);","   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);","   v = v + aPositionCoord;","   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"].join("\n"),["varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","uniform float uAlpha;","void main(void){","  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;","  if (color.a == 0.0) discard;","  gl_FragColor = color;","}"].join("\n")))}return s(e,t),e}(u.default);r.default=h},{"../../core/Shader":41}],165:[function(t,e,r){"use strict";Math.sign||(Math.sign=function(t){return t=Number(t),0===t||isNaN(t)?t:t>0?1:-1})},{}],166:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=t("object-assign"),o=n(i);Object.assign||(Object.assign=o.default)},{"object-assign":5}],167:[function(t,e,r){"use strict";t("./Object.assign"),t("./requestAnimationFrame"),t("./Math.sign"),window.ArrayBuffer||(window.ArrayBuffer=Array),window.Float32Array||(window.Float32Array=Array),window.Uint32Array||(window.Uint32Array=Array),window.Uint16Array||(window.Uint16Array=Array)},{"./Math.sign":165,"./Object.assign":166,"./requestAnimationFrame":168}],168:[function(t,e,r){(function(t){"use strict";var e=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return(new Date).getTime()}),t.performance&&t.performance.now||!function(){var e=Date.now();t.performance||(t.performance={}),t.performance.now=function(){return Date.now()-e}}();for(var r=Date.now(),n=["ms","moz","webkit","o"],i=0;i<n.length&&!t.requestAnimationFrame;++i){var o=n[i];t.requestAnimationFrame=t[o+"RequestAnimationFrame"],t.cancelAnimationFrame=t[o+"CancelAnimationFrame"]||t[o+"CancelRequestAnimationFrame"]}t.requestAnimationFrame||(t.requestAnimationFrame=function(t){if("function"!=typeof t)throw new TypeError(t+"is not a function");var n=Date.now(),i=e+r-n;return i<0&&(i=0),r=n,setTimeout(function(){r=Date.now(),t(performance.now())},i)}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(t){return clearTimeout(t)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],169:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(e instanceof u.BaseTexture){var r=e.source,n=0===r.width?t.canvas.width:Math.min(t.canvas.width,r.width),i=0===r.height?t.canvas.height:Math.min(t.canvas.height,r.height);return t.ctx.drawImage(r,0,0,n,i,0,0,t.canvas.width,t.canvas.height),!0}return!1}function s(t,e){if(t instanceof u.BaseTexture)return e.indexOf(t)===-1&&e.push(t),!0;if(t._texture&&t._texture instanceof u.Texture){var r=t._texture.baseTexture;return e.indexOf(r)===-1&&e.push(r),!0}return!1}r.__esModule=!0;var a=t("../../core"),u=n(a),h=u.ticker.shared,l=16,c=4,f=function(){function t(e){i(this,t),this.renderer=e,this.canvas=document.createElement("canvas"),this.canvas.width=l,this.canvas.height=l,this.ctx=this.canvas.getContext("2d"),this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.register(s,o)}return t.prototype.upload=function(e,r){"function"==typeof e&&(r=e,e=null),e&&this.add(e),this.queue.length?(this.numLeft=t.UPLOADS_PER_FRAME,r&&this.completes.push(r),this.ticking||(this.ticking=!0,h.add(this.tick,this))):r&&r()},t.prototype.tick=function(){for(;this.queue.length&&this.numLeft>0;){for(var e=this.queue[0],r=!1,n=0,i=this.uploadHooks.length;n<i;n++)if(this.uploadHooks[n](this,e)){this.numLeft--,this.queue.shift(),r=!0;break}r||this.queue.shift()}if(this.queue.length)this.numLeft=t.UPLOADS_PER_FRAME;else{this.ticking=!1,h.remove(this.tick,this);var o=this.completes.slice(0);this.completes.length=0;for(var s=0,a=o.length;s<a;s++)o[s]()}},t.prototype.register=function(t,e){return t&&this.addHooks.push(t),e&&this.uploadHooks.push(e),this},t.prototype.add=function(t){for(var e=0,r=this.addHooks.length;e<r&&!this.addHooks[e](t,this.queue);e++);if(t instanceof u.Container)for(var n=t.children.length-1;n>=0;n--)this.add(t.children[n]);return this},t.prototype.destroy=function(){this.ticking&&h.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.ctx=null,this.canvas=null},t}();r.default=f,f.UPLOADS_PER_FRAME=c,u.CanvasRenderer.registerPlugin("prepare",f)},{"../../core":61}],170:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./webgl/WebGLPrepare");Object.defineProperty(r,"webgl",{enumerable:!0,get:function(){return n(i).default}});var o=t("./canvas/CanvasPrepare");Object.defineProperty(r,"canvas",{enumerable:!0,get:function(){return n(o).default}})},{"./canvas/CanvasPrepare":169,"./webgl/WebGLPrepare":171}],171:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){return e instanceof l.BaseTexture&&(t.textureManager.updateTexture(e),!0)}function s(t,e){return e instanceof l.Graphics&&(t.plugins.graphics.updateGraphics(e),!0)}function a(t,e){if(t instanceof l.BaseTexture)return e.indexOf(t)===-1&&e.push(t),!0;if(t._texture&&t._texture instanceof l.Texture){var r=t._texture.baseTexture;return e.indexOf(r)===-1&&e.push(r),!0}return!1}function u(t,e){return t instanceof l.Graphics&&(e.push(t),!0)}r.__esModule=!0;var h=t("../../core"),l=n(h),c=l.ticker.shared,f=4,d=function(){function t(e){i(this,t),this.renderer=e,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.register(a,o).register(u,s)}return t.prototype.upload=function(e,r){"function"==typeof e&&(r=e,e=null),e&&this.add(e),this.queue.length?(this.numLeft=t.UPLOADS_PER_FRAME,r&&this.completes.push(r),this.ticking||(this.ticking=!0,c.add(this.tick,this))):r&&r()},t.prototype.tick=function(){for(;this.queue.length&&this.numLeft>0;){for(var e=this.queue[0],r=!1,n=0,i=this.uploadHooks.length;n<i;n++)if(this.uploadHooks[n](this.renderer,e)){this.numLeft--,this.queue.shift(),r=!0;break}r||this.queue.shift()}if(this.queue.length)this.numLeft=t.UPLOADS_PER_FRAME;else{this.ticking=!1,c.remove(this.tick,this);var o=this.completes.slice(0);this.completes.length=0;for(var s=0,a=o.length;s<a;s++)o[s]()}},t.prototype.register=function(t,e){return t&&this.addHooks.push(t),e&&this.uploadHooks.push(e),this},t.prototype.add=function(t){for(var e=0,r=this.addHooks.length;e<r&&!this.addHooks[e](t,this.queue);e++);if(t instanceof l.Container)for(var n=t.children.length-1;n>=0;n--)this.add(t.children[n]);return this},t.prototype.destroy=function(){this.ticking&&c.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null},t}();r.default=d,d.UPLOADS_PER_FRAME=f,l.WebGLRenderer.registerPlugin("prepare",d)},{"../../core":61}],172:[function(t,e,r){(function(e){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}r.__esModule=!0,r.loader=r.prepare=r.particles=r.mesh=r.loaders=r.interaction=r.filters=r.extras=r.extract=r.accessibility=void 0;var i=t("./deprecation");Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return i[t]}})});var o=t("./core");Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return o[t]}})}),t("./polyfill");var s=t("./accessibility"),a=n(s),u=t("./extract"),h=n(u),l=t("./extras"),c=n(l),f=t("./filters"),d=n(f),p=t("./interaction"),v=n(p),y=t("./loaders"),g=n(y),m=t("./mesh"),_=n(m),b=t("./particles"),x=n(b),T=t("./prepare"),w=n(T);r.accessibility=a,r.extract=h,r.extras=c,r.filters=d,r.interaction=v,r.loaders=g,r.mesh=_,r.particles=x,r.prepare=w;var E=new g.Loader;r.loader=E,e.PIXI=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./accessibility":40,"./core":61,"./deprecation":118,"./extract":120,"./extras":129,"./filters":140,"./interaction":146,"./loaders":149,"./mesh":158,"./particles":161,"./polyfill":167,"./prepare":170}]},{},[172])(172)});
	//# sourceMappingURL=pixi.min.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Matter = module.exports = {};
	Matter.version = 'master';

	Matter.Body = __webpack_require__(3);
	Matter.Composite = __webpack_require__(10);
	Matter.World = __webpack_require__(18);

	Matter.Contact = __webpack_require__(14);
	Matter.Detector = __webpack_require__(15);
	Matter.Grid = __webpack_require__(12);
	Matter.Pairs = __webpack_require__(20);
	Matter.Pair = __webpack_require__(13);
	Matter.Query = __webpack_require__(21);
	Matter.Resolver = __webpack_require__(23);
	Matter.SAT = __webpack_require__(16);

	Matter.Constraint = __webpack_require__(19);
	Matter.MouseConstraint = __webpack_require__(24);

	Matter.Common = __webpack_require__(6);
	Matter.Engine = __webpack_require__(26);
	Matter.Events = __webpack_require__(8);
	Matter.Mouse = __webpack_require__(25);
	Matter.Runner = __webpack_require__(28);
	Matter.Sleeping = __webpack_require__(7);

	// @if DEBUG
	Matter.Metrics = __webpack_require__(27);
	// @endif

	Matter.Bodies = __webpack_require__(22);
	Matter.Composites = __webpack_require__(29);

	Matter.Axes = __webpack_require__(17);
	Matter.Bounds = __webpack_require__(11);
	Matter.Svg = __webpack_require__(30);
	Matter.Vector = __webpack_require__(5);
	Matter.Vertices = __webpack_require__(4);

	Matter.Render = __webpack_require__(9);
	Matter.RenderPixi = __webpack_require__(31);

	// aliases

	Matter.World.add = Matter.Composite.add;
	Matter.World.remove = Matter.Composite.remove;
	Matter.World.addComposite = Matter.Composite.addComposite;
	Matter.World.addBody = Matter.Composite.addBody;
	Matter.World.addConstraint = Matter.Composite.addConstraint;
	Matter.World.clear = Matter.Composite.clear;
	Matter.Engine.run = Matter.Runner.run;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Body` module contains methods for creating and manipulating body models.
	* A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
	* Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

	* @class Body
	*/

	var Body = {};

	module.exports = Body;

	var Vertices = __webpack_require__(4);
	var Vector = __webpack_require__(5);
	var Sleeping = __webpack_require__(7);
	var Render = __webpack_require__(9);
	var Common = __webpack_require__(6);
	var Bounds = __webpack_require__(11);
	var Axes = __webpack_require__(17);

	(function() {

	    Body._inertiaScale = 4;
	    Body._nextCollidingGroupId = 1;
	    Body._nextNonCollidingGroupId = -1;
	    Body._nextCategory = 0x0001;

	    /**
	     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * All properties have default values, and many are pre-calculated automatically based on other properties.
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {} options
	     * @return {body} body
	     */
	    Body.create = function(options) {
	        var defaults = {
	            id: Common.nextId(),
	            type: 'body',
	            label: 'Body',
	            parts: [],
	            angle: 0,
	            vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
	            position: { x: 0, y: 0 },
	            force: { x: 0, y: 0 },
	            torque: 0,
	            positionImpulse: { x: 0, y: 0 },
	            constraintImpulse: { x: 0, y: 0, angle: 0 },
	            totalContacts: 0,
	            speed: 0,
	            angularSpeed: 0,
	            velocity: { x: 0, y: 0 },
	            angularVelocity: 0,
	            isSensor: false,
	            isStatic: false,
	            isSleeping: false,
	            motion: 0,
	            sleepThreshold: 60,
	            density: 0.001,
	            restitution: 0,
	            friction: 0.1,
	            frictionStatic: 0.5,
	            frictionAir: 0.01,
	            collisionFilter: {
	                category: 0x0001,
	                mask: 0xFFFFFFFF,
	                group: 0
	            },
	            slop: 0.05,
	            timeScale: 1,
	            render: {
	                visible: true,
	                opacity: 1,
	                sprite: {
	                    xScale: 1,
	                    yScale: 1,
	                    xOffset: 0,
	                    yOffset: 0
	                },
	                lineWidth: 1.5
	            }
	        };

	        var body = Common.extend(defaults, options);

	        _initProperties(body, options);

	        return body;
	    };

	    /**
	     * Returns the next unique group index for which bodies will collide.
	     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
	     * See `body.collisionFilter` for more information.
	     * @method nextGroup
	     * @param {bool} [isNonColliding=false]
	     * @return {Number} Unique group index
	     */
	    Body.nextGroup = function(isNonColliding) {
	        if (isNonColliding)
	            return Body._nextNonCollidingGroupId--;

	        return Body._nextCollidingGroupId++;
	    };

	    /**
	     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
	     * There are 32 available. See `body.collisionFilter` for more information.
	     * @method nextCategory
	     * @return {Number} Unique category bitfield
	     */
	    Body.nextCategory = function() {
	        Body._nextCategory = Body._nextCategory << 1;
	        return Body._nextCategory;
	    };

	    /**
	     * Initialises body properties.
	     * @method _initProperties
	     * @private
	     * @param {body} body
	     * @param {} options
	     */
	    var _initProperties = function(body, options) {
	        // init required properties (order is important)
	        Body.set(body, {
	            bounds: body.bounds || Bounds.create(body.vertices),
	            positionPrev: body.positionPrev || Vector.clone(body.position),
	            anglePrev: body.anglePrev || body.angle,
	            vertices: body.vertices,
	            parts: body.parts || [body],
	            isStatic: body.isStatic,
	            isSleeping: body.isSleeping,
	            parent: body.parent || body
	        });

	        Vertices.rotate(body.vertices, body.angle, body.position);
	        Axes.rotate(body.axes, body.angle);
	        Bounds.update(body.bounds, body.vertices, body.velocity);

	        // allow options to override the automatically calculated properties
	        Body.set(body, {
	            axes: options.axes || body.axes,
	            area: options.area || body.area,
	            mass: options.mass || body.mass,
	            inertia: options.inertia || body.inertia
	        });

	        // render properties
	        var defaultFillStyle = (body.isStatic ? '#eeeeee' : Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58'])),
	            defaultStrokeStyle = Common.shadeColor(defaultFillStyle, -20);
	        body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
	        body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
	        body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
	        body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
	    };

	    /**
	     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
	     * Prefer to use the actual setter functions in performance critical situations.
	     * @method set
	     * @param {body} body
	     * @param {} settings A property name (or map of properties and values) to set on the body.
	     * @param {} value The value to set if `settings` is a single property name.
	     */
	    Body.set = function(body, settings, value) {
	        var property;

	        if (typeof settings === 'string') {
	            property = settings;
	            settings = {};
	            settings[property] = value;
	        }

	        for (property in settings) {
	            value = settings[property];

	            if (!settings.hasOwnProperty(property))
	                continue;

	            switch (property) {

	            case 'isStatic':
	                Body.setStatic(body, value);
	                break;
	            case 'isSleeping':
	                Sleeping.set(body, value);
	                break;
	            case 'mass':
	                Body.setMass(body, value);
	                break;
	            case 'density':
	                Body.setDensity(body, value);
	                break;
	            case 'inertia':
	                Body.setInertia(body, value);
	                break;
	            case 'vertices':
	                Body.setVertices(body, value);
	                break;
	            case 'position':
	                Body.setPosition(body, value);
	                break;
	            case 'angle':
	                Body.setAngle(body, value);
	                break;
	            case 'velocity':
	                Body.setVelocity(body, value);
	                break;
	            case 'angularVelocity':
	                Body.setAngularVelocity(body, value);
	                break;
	            case 'parts':
	                Body.setParts(body, value);
	                break;
	            default:
	                body[property] = value;

	            }
	        }
	    };

	    /**
	     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
	     * @method setStatic
	     * @param {body} body
	     * @param {bool} isStatic
	     */
	    Body.setStatic = function(body, isStatic) {
	        for (var i = 0; i < body.parts.length; i++) {
	            var part = body.parts[i];
	            part.isStatic = isStatic;

	            if (isStatic) {
	                part.restitution = 0;
	                part.friction = 1;
	                part.mass = part.inertia = part.density = Infinity;
	                part.inverseMass = part.inverseInertia = 0;

	                part.positionPrev.x = part.position.x;
	                part.positionPrev.y = part.position.y;
	                part.anglePrev = part.angle;
	                part.angularVelocity = 0;
	                part.speed = 0;
	                part.angularSpeed = 0;
	                part.motion = 0;
	            }
	        }
	    };

	    /**
	     * Sets the mass of the body. Inverse mass and density are automatically updated to reflect the change.
	     * @method setMass
	     * @param {body} body
	     * @param {number} mass
	     */
	    Body.setMass = function(body, mass) {
	        body.mass = mass;
	        body.inverseMass = 1 / body.mass;
	        body.density = body.mass / body.area;
	    };

	    /**
	     * Sets the density of the body. Mass is automatically updated to reflect the change.
	     * @method setDensity
	     * @param {body} body
	     * @param {number} density
	     */
	    Body.setDensity = function(body, density) {
	        Body.setMass(body, density * body.area);
	        body.density = density;
	    };

	    /**
	     * Sets the moment of inertia (i.e. second moment of area) of the body of the body. 
	     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
	     * @method setInertia
	     * @param {body} body
	     * @param {number} inertia
	     */
	    Body.setInertia = function(body, inertia) {
	        body.inertia = inertia;
	        body.inverseInertia = 1 / body.inertia;
	    };

	    /**
	     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
	     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
	     * They are then automatically translated to world space based on `body.position`.
	     *
	     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
	     * Vertices must form a convex hull, concave hulls are not supported.
	     *
	     * @method setVertices
	     * @param {body} body
	     * @param {vector[]} vertices
	     */
	    Body.setVertices = function(body, vertices) {
	        // change vertices
	        if (vertices[0].body === body) {
	            body.vertices = vertices;
	        } else {
	            body.vertices = Vertices.create(vertices, body);
	        }

	        // update properties
	        body.axes = Axes.fromVertices(body.vertices);
	        body.area = Vertices.area(body.vertices);
	        Body.setMass(body, body.density * body.area);

	        // orient vertices around the centre of mass at origin (0, 0)
	        var centre = Vertices.centre(body.vertices);
	        Vertices.translate(body.vertices, centre, -1);

	        // update inertia while vertices are at origin (0, 0)
	        Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));

	        // update geometry
	        Vertices.translate(body.vertices, body.position);
	        Bounds.update(body.bounds, body.vertices, body.velocity);
	    };

	    /**
	     * Sets the parts of the `body` and updates mass, inertia and centroid.
	     * Each part will have its parent set to `body`.
	     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
	     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
	     * @method setParts
	     * @param {body} body
	     * @param [body] parts
	     * @param {bool} [autoHull=true]
	     */
	    Body.setParts = function(body, parts, autoHull) {
	        var i;

	        // add all the parts, ensuring that the first part is always the parent body
	        parts = parts.slice(0);
	        body.parts.length = 0;
	        body.parts.push(body);
	        body.parent = body;

	        for (i = 0; i < parts.length; i++) {
	            var part = parts[i];
	            if (part !== body) {
	                part.parent = body;
	                body.parts.push(part);
	            }
	        }

	        if (body.parts.length === 1)
	            return;

	        autoHull = typeof autoHull !== 'undefined' ? autoHull : true;

	        // find the convex hull of all parts to set on the parent body
	        if (autoHull) {
	            var vertices = [];
	            for (i = 0; i < parts.length; i++) {
	                vertices = vertices.concat(parts[i].vertices);
	            }

	            Vertices.clockwiseSort(vertices);

	            var hull = Vertices.hull(vertices),
	                hullCentre = Vertices.centre(hull);

	            Body.setVertices(body, hull);
	            Vertices.translate(body.vertices, hullCentre);
	        }

	        // sum the properties of all compound parts of the parent body
	        var total = _totalProperties(body);

	        body.area = total.area;
	        body.parent = body;
	        body.position.x = total.centre.x;
	        body.position.y = total.centre.y;
	        body.positionPrev.x = total.centre.x;
	        body.positionPrev.y = total.centre.y;

	        Body.setMass(body, total.mass);
	        Body.setInertia(body, total.inertia);
	        Body.setPosition(body, total.centre);
	    };

	    /**
	     * Sets the position of the body instantly. Velocity, angle, force etc. are unchanged.
	     * @method setPosition
	     * @param {body} body
	     * @param {vector} position
	     */
	    Body.setPosition = function(body, position) {
	        var delta = Vector.sub(position, body.position);
	        body.positionPrev.x += delta.x;
	        body.positionPrev.y += delta.y;

	        for (var i = 0; i < body.parts.length; i++) {
	            var part = body.parts[i];
	            part.position.x += delta.x;
	            part.position.y += delta.y;
	            Vertices.translate(part.vertices, delta);
	            Bounds.update(part.bounds, part.vertices, body.velocity);
	        }
	    };

	    /**
	     * Sets the angle of the body instantly. Angular velocity, position, force etc. are unchanged.
	     * @method setAngle
	     * @param {body} body
	     * @param {number} angle
	     */
	    Body.setAngle = function(body, angle) {
	        var delta = angle - body.angle;
	        body.anglePrev += delta;

	        for (var i = 0; i < body.parts.length; i++) {
	            var part = body.parts[i];
	            part.angle += delta;
	            Vertices.rotate(part.vertices, delta, body.position);
	            Axes.rotate(part.axes, delta);
	            Bounds.update(part.bounds, part.vertices, body.velocity);
	            if (i > 0) {
	                Vector.rotateAbout(part.position, delta, body.position, part.position);
	            }
	        }
	    };

	    /**
	     * Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
	     * @method setVelocity
	     * @param {body} body
	     * @param {vector} velocity
	     */
	    Body.setVelocity = function(body, velocity) {
	        body.positionPrev.x = body.position.x - velocity.x;
	        body.positionPrev.y = body.position.y - velocity.y;
	        body.velocity.x = velocity.x;
	        body.velocity.y = velocity.y;
	        body.speed = Vector.magnitude(body.velocity);
	    };

	    /**
	     * Sets the angular velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
	     * @method setAngularVelocity
	     * @param {body} body
	     * @param {number} velocity
	     */
	    Body.setAngularVelocity = function(body, velocity) {
	        body.anglePrev = body.angle - velocity;
	        body.angularVelocity = velocity;
	        body.angularSpeed = Math.abs(body.angularVelocity);
	    };

	    /**
	     * Moves a body by a given vector relative to its current position, without imparting any velocity.
	     * @method translate
	     * @param {body} body
	     * @param {vector} translation
	     */
	    Body.translate = function(body, translation) {
	        Body.setPosition(body, Vector.add(body.position, translation));
	    };

	    /**
	     * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
	     * @method rotate
	     * @param {body} body
	     * @param {number} rotation
	     */
	    Body.rotate = function(body, rotation) {
	        Body.setAngle(body, body.angle + rotation);
	    };

	    /**
	     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
	     * @method scale
	     * @param {body} body
	     * @param {number} scaleX
	     * @param {number} scaleY
	     * @param {vector} [point]
	     */
	    Body.scale = function(body, scaleX, scaleY, point) {
	        for (var i = 0; i < body.parts.length; i++) {
	            var part = body.parts[i];

	            // scale vertices
	            Vertices.scale(part.vertices, scaleX, scaleY, body.position);

	            // update properties
	            part.axes = Axes.fromVertices(part.vertices);

	            if (!body.isStatic) {
	                part.area = Vertices.area(part.vertices);
	                Body.setMass(part, body.density * part.area);

	                // update inertia (requires vertices to be at origin)
	                Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
	                Body.setInertia(part, Vertices.inertia(part.vertices, part.mass));
	                Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });
	            }

	            // update bounds
	            Bounds.update(part.bounds, part.vertices, body.velocity);
	        }

	        // handle circles
	        if (body.circleRadius) { 
	            if (scaleX === scaleY) {
	                body.circleRadius *= scaleX;
	            } else {
	                // body is no longer a circle
	                body.circleRadius = null;
	            }
	        }

	        if (!body.isStatic) {
	            var total = _totalProperties(body);
	            body.area = total.area;
	            Body.setMass(body, total.mass);
	            Body.setInertia(body, total.inertia);
	        }
	    };

	    /**
	     * Performs a simulation step for the given `body`, including updating position and angle using Verlet integration.
	     * @method update
	     * @param {body} body
	     * @param {number} deltaTime
	     * @param {number} timeScale
	     * @param {number} correction
	     */
	    Body.update = function(body, deltaTime, timeScale, correction) {
	        var deltaTimeSquared = Math.pow(deltaTime * timeScale * body.timeScale, 2);

	        // from the previous step
	        var frictionAir = 1 - body.frictionAir * timeScale * body.timeScale,
	            velocityPrevX = body.position.x - body.positionPrev.x,
	            velocityPrevY = body.position.y - body.positionPrev.y;

	        // update velocity with Verlet integration
	        body.velocity.x = (velocityPrevX * frictionAir * correction) + (body.force.x / body.mass) * deltaTimeSquared;
	        body.velocity.y = (velocityPrevY * frictionAir * correction) + (body.force.y / body.mass) * deltaTimeSquared;

	        body.positionPrev.x = body.position.x;
	        body.positionPrev.y = body.position.y;
	        body.position.x += body.velocity.x;
	        body.position.y += body.velocity.y;

	        // update angular velocity with Verlet integration
	        body.angularVelocity = ((body.angle - body.anglePrev) * frictionAir * correction) + (body.torque / body.inertia) * deltaTimeSquared;
	        body.anglePrev = body.angle;
	        body.angle += body.angularVelocity;

	        // track speed and acceleration
	        body.speed = Vector.magnitude(body.velocity);
	        body.angularSpeed = Math.abs(body.angularVelocity);

	        // transform the body geometry
	        for (var i = 0; i < body.parts.length; i++) {
	            var part = body.parts[i];

	            Vertices.translate(part.vertices, body.velocity);
	            
	            if (i > 0) {
	                part.position.x += body.velocity.x;
	                part.position.y += body.velocity.y;
	            }

	            if (body.angularVelocity !== 0) {
	                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
	                Axes.rotate(part.axes, body.angularVelocity);
	                if (i > 0) {
	                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
	                }
	            }

	            Bounds.update(part.bounds, part.vertices, body.velocity);
	        }
	    };

	    /**
	     * Applies a force to a body from a given world-space position, including resulting torque.
	     * @method applyForce
	     * @param {body} body
	     * @param {vector} position
	     * @param {vector} force
	     */
	    Body.applyForce = function(body, position, force) {
	        body.force.x += force.x;
	        body.force.y += force.y;
	        var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
	        body.torque += offset.x * force.y - offset.y * force.x;
	    };

	    /**
	     * Returns the sums of the properties of all compound parts of the parent body.
	     * @method _totalProperties
	     * @private
	     * @param {body} body
	     * @return {}
	     */
	    var _totalProperties = function(body) {
	        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
	        // http://output.to/sideway/default.asp?qno=121100087

	        var properties = {
	            mass: 0,
	            area: 0,
	            inertia: 0,
	            centre: { x: 0, y: 0 }
	        };

	        // sum the properties of all compound parts of the parent body
	        for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
	            var part = body.parts[i];
	            properties.mass += part.mass;
	            properties.area += part.area;
	            properties.inertia += part.inertia;
	            properties.centre = Vector.add(properties.centre, 
	                                           Vector.mult(part.position, part.mass !== Infinity ? part.mass : 1));
	        }

	        properties.centre = Vector.div(properties.centre, 
	                                       properties.mass !== Infinity ? properties.mass : body.parts.length);

	        return properties;
	    };

	    /*
	    *
	    *  Events Documentation
	    *
	    */

	    /**
	    * Fired when a body starts sleeping (where `this` is the body).
	    *
	    * @event sleepStart
	    * @this {body} The body that has started sleeping
	    * @param {} event An event object
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when a body ends sleeping (where `this` is the body).
	    *
	    * @event sleepEnd
	    * @this {body} The body that has ended sleeping
	    * @param {} event An event object
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
	     *
	     * @property id
	     * @type number
	     */

	    /**
	     * A `String` denoting the type of object.
	     *
	     * @property type
	     * @type string
	     * @default "body"
	     * @readOnly
	     */

	    /**
	     * An arbitrary `String` name to help the user identify and manage bodies.
	     *
	     * @property label
	     * @type string
	     * @default "Body"
	     */

	    /**
	     * An array of bodies that make up this body. 
	     * The first body in the array must always be a self reference to the current body instance.
	     * All bodies in the `parts` array together form a single rigid compound body.
	     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
	     * Parts themselves should never be added to a `World`, only the parent body should be.
	     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
	     *
	     * @property parts
	     * @type body[]
	     */

	    /**
	     * A self reference if the body is _not_ a part of another body.
	     * Otherwise this is a reference to the body that this is a part of.
	     * See `body.parts`.
	     *
	     * @property parent
	     * @type body
	     */

	    /**
	     * A `Number` specifying the angle of the body, in radians.
	     *
	     * @property angle
	     * @type number
	     * @default 0
	     */

	    /**
	     * An array of `Vector` objects that specify the convex hull of the rigid body.
	     * These should be provided about the origin `(0, 0)`. E.g.
	     *
	     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
	     *
	     * When passed via `Body.create`, the vertices are translated relative to `body.position` (i.e. world-space, and constantly updated by `Body.update` during simulation).
	     * The `Vector` objects are also augmented with additional properties required for efficient collision detection. 
	     *
	     * Other properties such as `inertia` and `bounds` are automatically calculated from the passed vertices (unless provided via `options`).
	     * Concave hulls are not currently supported. The module `Matter.Vertices` contains useful methods for working with vertices.
	     *
	     * @property vertices
	     * @type vector[]
	     */

	    /**
	     * A `Vector` that specifies the current world-space position of the body.
	     *
	     * @property position
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
	     *
	     * @property force
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
	     *
	     * @property torque
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Number` that _measures_ the current speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.velocity`).
	     *
	     * @readOnly
	     * @property speed
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Number` that _measures_ the current angular speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.angularVelocity`).
	     *
	     * @readOnly
	     * @property angularSpeed
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Vector` that _measures_ the current velocity of the body after the last `Body.update`. It is read-only. 
	     * If you need to modify a body's velocity directly, you should either apply a force or simply change the body's `position` (as the engine uses position-Verlet integration).
	     *
	     * @readOnly
	     * @property velocity
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A `Number` that _measures_ the current angular velocity of the body after the last `Body.update`. It is read-only. 
	     * If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's `angle` (as the engine uses position-Verlet integration).
	     *
	     * @readOnly
	     * @property angularVelocity
	     * @type number
	     * @default 0
	     */

	    /**
	     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
	     * If you need to set a body as static after its creation, you should use `Body.setStatic` as this requires more than just setting this flag.
	     *
	     * @property isStatic
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
	     *
	     * @property isSensor
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
	     * If you need to set a body as sleeping, you should use `Sleeping.set` as this requires more than just setting this flag.
	     *
	     * @property isSleeping
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A `Number` that _measures_ the amount of movement a body currently has (a combination of `speed` and `angularSpeed`). It is read-only and always positive.
	     * It is used and updated by the `Matter.Sleeping` module during simulation to decide if a body has come to rest.
	     *
	     * @readOnly
	     * @property motion
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
	     *
	     * @property sleepThreshold
	     * @type number
	     * @default 60
	     */

	    /**
	     * A `Number` that defines the density of the body, that is its mass per unit area.
	     * If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object.
	     * This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
	     *
	     * @property density
	     * @type number
	     * @default 0.001
	     */

	    /**
	     * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead.
	     * If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
	     *
	     * @property mass
	     * @type number
	     */

	    /**
	     * A `Number` that defines the inverse mass of the body (`1 / mass`).
	     * If you modify this value, you must also modify the `body.mass` property.
	     *
	     * @property inverseMass
	     * @type number
	     */

	    /**
	     * A `Number` that defines the moment of inertia (i.e. second moment of area) of the body.
	     * It is automatically calculated from the given convex hull (`vertices` array) and density in `Body.create`.
	     * If you modify this value, you must also modify the `body.inverseInertia` property (`1 / inertia`).
	     *
	     * @property inertia
	     * @type number
	     */

	    /**
	     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
	     * If you modify this value, you must also modify the `body.inertia` property.
	     *
	     * @property inverseInertia
	     * @type number
	     */

	    /**
	     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
	     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
	     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
	     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
	     *
	     *     Math.max(bodyA.restitution, bodyB.restitution)
	     *
	     * @property restitution
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
	     * A value of `0` means that the body may slide indefinitely.
	     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
	     *
	     * The effects of the value may be non-linear. 
	     * High values may be unstable depending on the body.
	     * The engine uses a Coulomb friction model including static and kinetic friction.
	     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
	     *
	     *     Math.min(bodyA.friction, bodyB.friction)
	     *
	     * @property friction
	     * @type number
	     * @default 0.1
	     */

	    /**
	     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
	     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
	     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
	     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
	     *
	     * @property frictionStatic
	     * @type number
	     * @default 0.5
	     */

	    /**
	     * A `Number` that defines the air friction of the body (air resistance). 
	     * A value of `0` means the body will never slow as it moves through space.
	     * The higher the value, the faster a body slows when moving through space.
	     * The effects of the value are non-linear. 
	     *
	     * @property frictionAir
	     * @type number
	     * @default 0.01
	     */

	    /**
	     * An `Object` that specifies the collision filtering properties of this body.
	     *
	     * Collisions between two bodies will obey the following rules:
	     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
	     *   they will always collide if the value is positive, and they will never collide
	     *   if the value is negative.
	     * - If the two bodies have different values of `collisionFilter.group` or if one
	     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
	     *
	     * Each body belongs to a collision category, given by `collisionFilter.category`. This
	     * value is used as a bit field and the category should have only one bit set, meaning that
	     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
	     * different collision categories available.
	     *
	     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
	     * the categories it collides with (the value is the bitwise AND value of all these categories).
	     *
	     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
	     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
	     * are both true.
	     *
	     * @property collisionFilter
	     * @type object
	     */

	    /**
	     * An Integer `Number`, that specifies the collision group this body belongs to.
	     * See `body.collisionFilter` for more information.
	     *
	     * @property collisionFilter.group
	     * @type object
	     * @default 0
	     */

	    /**
	     * A bit field that specifies the collision category this body belongs to.
	     * The category value should have only one bit set, for example `0x0001`.
	     * This means there are up to 32 unique collision categories available.
	     * See `body.collisionFilter` for more information.
	     *
	     * @property collisionFilter.category
	     * @type object
	     * @default 1
	     */

	    /**
	     * A bit mask that specifies the collision categories this body may collide with.
	     * See `body.collisionFilter` for more information.
	     *
	     * @property collisionFilter.mask
	     * @type object
	     * @default -1
	     */

	    /**
	     * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
	     * Avoid changing this value unless you understand the purpose of `slop` in physics engines.
	     * The default should generally suffice, although very large bodies may require larger values for stable stacking.
	     *
	     * @property slop
	     * @type number
	     * @default 0.05
	     */

	    /**
	     * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
	     *
	     * @property timeScale
	     * @type number
	     * @default 1
	     */

	    /**
	     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
	     *
	     * @property render
	     * @type object
	     */

	    /**
	     * A flag that indicates if the body should be rendered.
	     *
	     * @property render.visible
	     * @type boolean
	     * @default true
	     */

	    /**
	     * Sets the opacity to use when rendering.
	     *
	     * @property render.opacity
	     * @type number
	     * @default 1
	    */

	    /**
	     * An `Object` that defines the sprite properties to use when rendering, if any.
	     *
	     * @property render.sprite
	     * @type object
	     */

	    /**
	     * An `String` that defines the path to the image to use as the sprite texture, if any.
	     *
	     * @property render.sprite.texture
	     * @type string
	     */
	     
	    /**
	     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
	     *
	     * @property render.sprite.xScale
	     * @type number
	     * @default 1
	     */

	    /**
	     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
	     *
	     * @property render.sprite.yScale
	     * @type number
	     * @default 1
	     */

	     /**
	      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
	      *
	      * @property render.sprite.xOffset
	      * @type number
	      * @default 0
	      */

	     /**
	      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
	      *
	      * @property render.sprite.yOffset
	      * @type number
	      * @default 0
	      */

	    /**
	     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
	     * A value of `0` means no outline will be rendered.
	     *
	     * @property render.lineWidth
	     * @type number
	     * @default 1.5
	     */

	    /**
	     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
	     * It is the same as when using a canvas, so it accepts CSS style property values.
	     *
	     * @property render.fillStyle
	     * @type string
	     * @default a random colour
	     */

	    /**
	     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
	     * It is the same as when using a canvas, so it accepts CSS style property values.
	     *
	     * @property render.strokeStyle
	     * @type string
	     * @default a random colour
	     */

	    /**
	     * An array of unique axis vectors (edge normals) used for collision detection.
	     * These are automatically calculated from the given convex hull (`vertices` array) in `Body.create`.
	     * They are constantly updated by `Body.update` during the simulation.
	     *
	     * @property axes
	     * @type vector[]
	     */
	     
	    /**
	     * A `Number` that _measures_ the area of the body's convex hull, calculated at creation by `Body.create`.
	     *
	     * @property area
	     * @type string
	     * @default 
	     */

	    /**
	     * A `Bounds` object that defines the AABB region for the body.
	     * It is automatically calculated from the given convex hull (`vertices` array) in `Body.create` and constantly updated by `Body.update` during simulation.
	     *
	     * @property bounds
	     * @type bounds
	     */

	})();


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
	* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
	* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Vertices
	*/

	var Vertices = {};

	module.exports = Vertices;

	var Vector = __webpack_require__(5);
	var Common = __webpack_require__(6);

	(function() {

	    /**
	     * Creates a new set of `Matter.Body` compatible vertices.
	     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
	     *
	     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
	     *
	     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
	     * but with some additional references required for efficient collision detection routines.
	     *
	     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
	     *
	     * @method create
	     * @param {vector[]} points
	     * @param {body} body
	     */
	    Vertices.create = function(points, body) {
	        var vertices = [];

	        for (var i = 0; i < points.length; i++) {
	            var point = points[i],
	                vertex = {
	                    x: point.x,
	                    y: point.y,
	                    index: i,
	                    body: body,
	                    isInternal: false
	                };

	            vertices.push(vertex);
	        }

	        return vertices;
	    };

	    /**
	     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
	     * into a `Matter.Vertices` object for the given `Matter.Body`.
	     * For parsing SVG paths, see `Svg.pathToVertices`.
	     * @method fromPath
	     * @param {string} path
	     * @param {body} body
	     * @return {vertices} vertices
	     */
	    Vertices.fromPath = function(path, body) {
	        var pathPattern = /L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/ig,
	            points = [];

	        path.replace(pathPattern, function(match, x, y) {
	            points.push({ x: parseFloat(x), y: parseFloat(y) });
	        });

	        return Vertices.create(points, body);
	    };

	    /**
	     * Returns the centre (centroid) of the set of vertices.
	     * @method centre
	     * @param {vertices} vertices
	     * @return {vector} The centre point
	     */
	    Vertices.centre = function(vertices) {
	        var area = Vertices.area(vertices, true),
	            centre = { x: 0, y: 0 },
	            cross,
	            temp,
	            j;

	        for (var i = 0; i < vertices.length; i++) {
	            j = (i + 1) % vertices.length;
	            cross = Vector.cross(vertices[i], vertices[j]);
	            temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
	            centre = Vector.add(centre, temp);
	        }

	        return Vector.div(centre, 6 * area);
	    };

	    /**
	     * Returns the average (mean) of the set of vertices.
	     * @method mean
	     * @param {vertices} vertices
	     * @return {vector} The average point
	     */
	    Vertices.mean = function(vertices) {
	        var average = { x: 0, y: 0 };

	        for (var i = 0; i < vertices.length; i++) {
	            average.x += vertices[i].x;
	            average.y += vertices[i].y;
	        }

	        return Vector.div(average, vertices.length);
	    };

	    /**
	     * Returns the area of the set of vertices.
	     * @method area
	     * @param {vertices} vertices
	     * @param {bool} signed
	     * @return {number} The area
	     */
	    Vertices.area = function(vertices, signed) {
	        var area = 0,
	            j = vertices.length - 1;

	        for (var i = 0; i < vertices.length; i++) {
	            area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
	            j = i;
	        }

	        if (signed)
	            return area / 2;

	        return Math.abs(area) / 2;
	    };

	    /**
	     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
	     * @method inertia
	     * @param {vertices} vertices
	     * @param {number} mass
	     * @return {number} The polygon's moment of inertia
	     */
	    Vertices.inertia = function(vertices, mass) {
	        var numerator = 0,
	            denominator = 0,
	            v = vertices,
	            cross,
	            j;

	        // find the polygon's moment of inertia, using second moment of area
	        // http://www.physicsforums.com/showthread.php?t=25293
	        for (var n = 0; n < v.length; n++) {
	            j = (n + 1) % v.length;
	            cross = Math.abs(Vector.cross(v[j], v[n]));
	            numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
	            denominator += cross;
	        }

	        return (mass / 6) * (numerator / denominator);
	    };

	    /**
	     * Translates the set of vertices in-place.
	     * @method translate
	     * @param {vertices} vertices
	     * @param {vector} vector
	     * @param {number} scalar
	     */
	    Vertices.translate = function(vertices, vector, scalar) {
	        var i;
	        if (scalar) {
	            for (i = 0; i < vertices.length; i++) {
	                vertices[i].x += vector.x * scalar;
	                vertices[i].y += vector.y * scalar;
	            }
	        } else {
	            for (i = 0; i < vertices.length; i++) {
	                vertices[i].x += vector.x;
	                vertices[i].y += vector.y;
	            }
	        }

	        return vertices;
	    };

	    /**
	     * Rotates the set of vertices in-place.
	     * @method rotate
	     * @param {vertices} vertices
	     * @param {number} angle
	     * @param {vector} point
	     */
	    Vertices.rotate = function(vertices, angle, point) {
	        if (angle === 0)
	            return;

	        var cos = Math.cos(angle),
	            sin = Math.sin(angle);

	        for (var i = 0; i < vertices.length; i++) {
	            var vertice = vertices[i],
	                dx = vertice.x - point.x,
	                dy = vertice.y - point.y;
	                
	            vertice.x = point.x + (dx * cos - dy * sin);
	            vertice.y = point.y + (dx * sin + dy * cos);
	        }

	        return vertices;
	    };

	    /**
	     * Returns `true` if the `point` is inside the set of `vertices`.
	     * @method contains
	     * @param {vertices} vertices
	     * @param {vector} point
	     * @return {boolean} True if the vertices contains point, otherwise false
	     */
	    Vertices.contains = function(vertices, point) {
	        for (var i = 0; i < vertices.length; i++) {
	            var vertice = vertices[i],
	                nextVertice = vertices[(i + 1) % vertices.length];
	            if ((point.x - vertice.x) * (nextVertice.y - vertice.y) + (point.y - vertice.y) * (vertice.x - nextVertice.x) > 0) {
	                return false;
	            }
	        }

	        return true;
	    };

	    /**
	     * Scales the vertices from a point (default is centre) in-place.
	     * @method scale
	     * @param {vertices} vertices
	     * @param {number} scaleX
	     * @param {number} scaleY
	     * @param {vector} point
	     */
	    Vertices.scale = function(vertices, scaleX, scaleY, point) {
	        if (scaleX === 1 && scaleY === 1)
	            return vertices;

	        point = point || Vertices.centre(vertices);

	        var vertex,
	            delta;

	        for (var i = 0; i < vertices.length; i++) {
	            vertex = vertices[i];
	            delta = Vector.sub(vertex, point);
	            vertices[i].x = point.x + delta.x * scaleX;
	            vertices[i].y = point.y + delta.y * scaleY;
	        }

	        return vertices;
	    };

	    /**
	     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
	     * The radius parameter is a single number or an array to specify the radius for each vertex.
	     * @method chamfer
	     * @param {vertices} vertices
	     * @param {number[]} radius
	     * @param {number} quality
	     * @param {number} qualityMin
	     * @param {number} qualityMax
	     */
	    Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
	        radius = radius || [8];

	        if (!radius.length)
	            radius = [radius];

	        // quality defaults to -1, which is auto
	        quality = (typeof quality !== 'undefined') ? quality : -1;
	        qualityMin = qualityMin || 2;
	        qualityMax = qualityMax || 14;

	        var newVertices = [];

	        for (var i = 0; i < vertices.length; i++) {
	            var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1],
	                vertex = vertices[i],
	                nextVertex = vertices[(i + 1) % vertices.length],
	                currentRadius = radius[i < radius.length ? i : radius.length - 1];

	            if (currentRadius === 0) {
	                newVertices.push(vertex);
	                continue;
	            }

	            var prevNormal = Vector.normalise({ 
	                x: vertex.y - prevVertex.y, 
	                y: prevVertex.x - vertex.x
	            });

	            var nextNormal = Vector.normalise({ 
	                x: nextVertex.y - vertex.y, 
	                y: vertex.x - nextVertex.x
	            });

	            var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)),
	                radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius),
	                midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)),
	                scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));

	            var precision = quality;

	            if (quality === -1) {
	                // automatically decide precision
	                precision = Math.pow(currentRadius, 0.32) * 1.75;
	            }

	            precision = Common.clamp(precision, qualityMin, qualityMax);

	            // use an even value for precision, more likely to reduce axes by using symmetry
	            if (precision % 2 === 1)
	                precision += 1;

	            var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)),
	                theta = alpha / precision;

	            for (var j = 0; j < precision; j++) {
	                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
	            }
	        }

	        return newVertices;
	    };

	    /**
	     * Sorts the input vertices into clockwise order in place.
	     * @method clockwiseSort
	     * @param {vertices} vertices
	     * @return {vertices} vertices
	     */
	    Vertices.clockwiseSort = function(vertices) {
	        var centre = Vertices.mean(vertices);

	        vertices.sort(function(vertexA, vertexB) {
	            return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
	        });

	        return vertices;
	    };

	    /**
	     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
	     * @method isConvex
	     * @param {vertices} vertices
	     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
	     */
	    Vertices.isConvex = function(vertices) {
	        // http://paulbourke.net/geometry/polygonmesh/

	        var flag = 0,
	            n = vertices.length,
	            i,
	            j,
	            k,
	            z;

	        if (n < 3)
	            return null;

	        for (i = 0; i < n; i++) {
	            j = (i + 1) % n;
	            k = (i + 2) % n;
	            z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
	            z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);

	            if (z < 0) {
	                flag |= 1;
	            } else if (z > 0) {
	                flag |= 2;
	            }

	            if (flag === 3) {
	                return false;
	            }
	        }

	        if (flag !== 0){
	            return true;
	        } else {
	            return null;
	        }
	    };

	    /**
	     * Returns the convex hull of the input vertices as a new array of points.
	     * @method hull
	     * @param {vertices} vertices
	     * @return [vertex] vertices
	     */
	    Vertices.hull = function(vertices) {
	        // http://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain

	        var upper = [],
	            lower = [], 
	            vertex,
	            i;

	        // sort vertices on x-axis (y-axis for ties)
	        vertices = vertices.slice(0);
	        vertices.sort(function(vertexA, vertexB) {
	            var dx = vertexA.x - vertexB.x;
	            return dx !== 0 ? dx : vertexA.y - vertexB.y;
	        });

	        // build lower hull
	        for (i = 0; i < vertices.length; i++) {
	            vertex = vertices[i];

	            while (lower.length >= 2 
	                   && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
	                lower.pop();
	            }

	            lower.push(vertex);
	        }

	        // build upper hull
	        for (i = vertices.length - 1; i >= 0; i--) {
	            vertex = vertices[i];

	            while (upper.length >= 2 
	                   && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
	                upper.pop();
	            }

	            upper.push(vertex);
	        }

	        // concatenation of the lower and upper hulls gives the convex hull
	        // omit last points because they are repeated at the beginning of the other list
	        upper.pop();
	        lower.pop();

	        return upper.concat(lower);
	    };

	})();


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	* The `Matter.Vector` module contains methods for creating and manipulating vectors.
	* Vectors are the basis of all the geometry related operations in the engine.
	* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Vector
	*/

	// TODO: consider params for reusing vector objects

	var Vector = {};

	module.exports = Vector;

	(function() {

	    /**
	     * Creates a new vector.
	     * @method create
	     * @param {number} x
	     * @param {number} y
	     * @return {vector} A new vector
	     */
	    Vector.create = function(x, y) {
	        return { x: x || 0, y: y || 0 };
	    };

	    /**
	     * Returns a new vector with `x` and `y` copied from the given `vector`.
	     * @method clone
	     * @param {vector} vector
	     * @return {vector} A new cloned vector
	     */
	    Vector.clone = function(vector) {
	        return { x: vector.x, y: vector.y };
	    };

	    /**
	     * Returns the magnitude (length) of a vector.
	     * @method magnitude
	     * @param {vector} vector
	     * @return {number} The magnitude of the vector
	     */
	    Vector.magnitude = function(vector) {
	        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
	    };

	    /**
	     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
	     * @method magnitudeSquared
	     * @param {vector} vector
	     * @return {number} The squared magnitude of the vector
	     */
	    Vector.magnitudeSquared = function(vector) {
	        return (vector.x * vector.x) + (vector.y * vector.y);
	    };

	    /**
	     * Rotates the vector about (0, 0) by specified angle.
	     * @method rotate
	     * @param {vector} vector
	     * @param {number} angle
	     * @return {vector} A new vector rotated about (0, 0)
	     */
	    Vector.rotate = function(vector, angle) {
	        var cos = Math.cos(angle), sin = Math.sin(angle);
	        return {
	            x: vector.x * cos - vector.y * sin,
	            y: vector.x * sin + vector.y * cos
	        };
	    };

	    /**
	     * Rotates the vector about a specified point by specified angle.
	     * @method rotateAbout
	     * @param {vector} vector
	     * @param {number} angle
	     * @param {vector} point
	     * @param {vector} [output]
	     * @return {vector} A new vector rotated about the point
	     */
	    Vector.rotateAbout = function(vector, angle, point, output) {
	        var cos = Math.cos(angle), sin = Math.sin(angle);
	        if (!output) output = {};
	        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
	        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
	        output.x = x;
	        return output;
	    };

	    /**
	     * Normalises a vector (such that its magnitude is `1`).
	     * @method normalise
	     * @param {vector} vector
	     * @return {vector} A new vector normalised
	     */
	    Vector.normalise = function(vector) {
	        var magnitude = Vector.magnitude(vector);
	        if (magnitude === 0)
	            return { x: 0, y: 0 };
	        return { x: vector.x / magnitude, y: vector.y / magnitude };
	    };

	    /**
	     * Returns the dot-product of two vectors.
	     * @method dot
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @return {number} The dot product of the two vectors
	     */
	    Vector.dot = function(vectorA, vectorB) {
	        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
	    };

	    /**
	     * Returns the cross-product of two vectors.
	     * @method cross
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @return {number} The cross product of the two vectors
	     */
	    Vector.cross = function(vectorA, vectorB) {
	        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
	    };

	    /**
	     * Returns the cross-product of three vectors.
	     * @method cross3
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @param {vector} vectorC
	     * @return {number} The cross product of the three vectors
	     */
	    Vector.cross3 = function(vectorA, vectorB, vectorC) {
	        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
	    };

	    /**
	     * Adds the two vectors.
	     * @method add
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @param {vector} [output]
	     * @return {vector} A new vector of vectorA and vectorB added
	     */
	    Vector.add = function(vectorA, vectorB, output) {
	        if (!output) output = {};
	        output.x = vectorA.x + vectorB.x;
	        output.y = vectorA.y + vectorB.y;
	        return output;
	    };

	    /**
	     * Subtracts the two vectors.
	     * @method sub
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @param {vector} [output]
	     * @return {vector} A new vector of vectorA and vectorB subtracted
	     */
	    Vector.sub = function(vectorA, vectorB, output) {
	        if (!output) output = {};
	        output.x = vectorA.x - vectorB.x;
	        output.y = vectorA.y - vectorB.y;
	        return output;
	    };

	    /**
	     * Multiplies a vector and a scalar.
	     * @method mult
	     * @param {vector} vector
	     * @param {number} scalar
	     * @return {vector} A new vector multiplied by scalar
	     */
	    Vector.mult = function(vector, scalar) {
	        return { x: vector.x * scalar, y: vector.y * scalar };
	    };

	    /**
	     * Divides a vector and a scalar.
	     * @method div
	     * @param {vector} vector
	     * @param {number} scalar
	     * @return {vector} A new vector divided by scalar
	     */
	    Vector.div = function(vector, scalar) {
	        return { x: vector.x / scalar, y: vector.y / scalar };
	    };

	    /**
	     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
	     * @method perp
	     * @param {vector} vector
	     * @param {bool} [negate=false]
	     * @return {vector} The perpendicular vector
	     */
	    Vector.perp = function(vector, negate) {
	        negate = negate === true ? -1 : 1;
	        return { x: negate * -vector.y, y: negate * vector.x };
	    };

	    /**
	     * Negates both components of a vector such that it points in the opposite direction.
	     * @method neg
	     * @param {vector} vector
	     * @return {vector} The negated vector
	     */
	    Vector.neg = function(vector) {
	        return { x: -vector.x, y: -vector.y };
	    };

	    /**
	     * Returns the angle in radians between the two vectors relative to the x-axis.
	     * @method angle
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @return {number} The angle in radians
	     */
	    Vector.angle = function(vectorA, vectorB) {
	        return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
	    };

	    /**
	     * Temporary vector pool (not thread-safe).
	     * @property _temp
	     * @type {vector[]}
	     * @private
	     */
	    Vector._temp = [Vector.create(), Vector.create(), 
	                    Vector.create(), Vector.create(), 
	                    Vector.create(), Vector.create()];

	})();

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	* The `Matter.Common` module contains utility functions that are common to all modules.
	*
	* @class Common
	*/

	var Common = {};

	module.exports = Common;

	(function() {

	    Common._nextId = 0;
	    Common._seed = 0;

	    /**
	     * Extends the object in the first argument using the object in the second argument.
	     * @method extend
	     * @param {} obj
	     * @param {boolean} deep
	     * @return {} obj extended
	     */
	    Common.extend = function(obj, deep) {
	        var argsStart,
	            args,
	            deepClone;

	        if (typeof deep === 'boolean') {
	            argsStart = 2;
	            deepClone = deep;
	        } else {
	            argsStart = 1;
	            deepClone = true;
	        }

	        args = Array.prototype.slice.call(arguments, argsStart);

	        for (var i = 0; i < args.length; i++) {
	            var source = args[i];

	            if (source) {
	                for (var prop in source) {
	                    if (deepClone && source[prop] && source[prop].constructor === Object) {
	                        if (!obj[prop] || obj[prop].constructor === Object) {
	                            obj[prop] = obj[prop] || {};
	                            Common.extend(obj[prop], deepClone, source[prop]);
	                        } else {
	                            obj[prop] = source[prop];
	                        }
	                    } else {
	                        obj[prop] = source[prop];
	                    }
	                }
	            }
	        }
	        
	        return obj;
	    };

	    /**
	     * Creates a new clone of the object, if deep is true references will also be cloned.
	     * @method clone
	     * @param {} obj
	     * @param {bool} deep
	     * @return {} obj cloned
	     */
	    Common.clone = function(obj, deep) {
	        return Common.extend({}, deep, obj);
	    };

	    /**
	     * Returns the list of keys for the given object.
	     * @method keys
	     * @param {} obj
	     * @return {string[]} keys
	     */
	    Common.keys = function(obj) {
	        if (Object.keys)
	            return Object.keys(obj);

	        // avoid hasOwnProperty for performance
	        var keys = [];
	        for (var key in obj)
	            keys.push(key);
	        return keys;
	    };

	    /**
	     * Returns the list of values for the given object.
	     * @method values
	     * @param {} obj
	     * @return {array} Array of the objects property values
	     */
	    Common.values = function(obj) {
	        var values = [];
	        
	        if (Object.keys) {
	            var keys = Object.keys(obj);
	            for (var i = 0; i < keys.length; i++) {
	                values.push(obj[keys[i]]);
	            }
	            return values;
	        }
	        
	        // avoid hasOwnProperty for performance
	        for (var key in obj)
	            values.push(obj[key]);
	        return values;
	    };

	    /**
	     * Returns a hex colour string made by lightening or darkening color by percent.
	     * @method shadeColor
	     * @param {string} color
	     * @param {number} percent
	     * @return {string} A hex colour
	     */
	    Common.shadeColor = function(color, percent) {   
	        // http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color
	        var colorInteger = parseInt(color.slice(1),16), 
	            amount = Math.round(2.55 * percent), 
	            R = (colorInteger >> 16) + amount, 
	            B = (colorInteger >> 8 & 0x00FF) + amount, 
	            G = (colorInteger & 0x0000FF) + amount;
	        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R :255) * 0x10000 
	                + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 
	                + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
	    };

	    /**
	     * Shuffles the given array in-place.
	     * The function uses a seeded random generator.
	     * @method shuffle
	     * @param {array} array
	     * @return {array} array shuffled randomly
	     */
	    Common.shuffle = function(array) {
	        for (var i = array.length - 1; i > 0; i--) {
	            var j = Math.floor(Common.random() * (i + 1));
	            var temp = array[i];
	            array[i] = array[j];
	            array[j] = temp;
	        }
	        return array;
	    };

	    /**
	     * Randomly chooses a value from a list with equal probability.
	     * The function uses a seeded random generator.
	     * @method choose
	     * @param {array} choices
	     * @return {object} A random choice object from the array
	     */
	    Common.choose = function(choices) {
	        return choices[Math.floor(Common.random() * choices.length)];
	    };

	    /**
	     * Returns true if the object is a HTMLElement, otherwise false.
	     * @method isElement
	     * @param {object} obj
	     * @return {boolean} True if the object is a HTMLElement, otherwise false
	     */
	    Common.isElement = function(obj) {
	        // http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
	        try {
	            return obj instanceof HTMLElement;
	        }
	        catch(e){
	            return (typeof obj==="object") &&
	              (obj.nodeType===1) && (typeof obj.style === "object") &&
	              (typeof obj.ownerDocument ==="object");
	        }
	    };

	    /**
	     * Returns true if the object is an array.
	     * @method isArray
	     * @param {object} obj
	     * @return {boolean} True if the object is an array, otherwise false
	     */
	    Common.isArray = function(obj) {
	        return Object.prototype.toString.call(obj) === '[object Array]';
	    };
	    
	    /**
	     * Returns the given value clamped between a minimum and maximum value.
	     * @method clamp
	     * @param {number} value
	     * @param {number} min
	     * @param {number} max
	     * @return {number} The value clamped between min and max inclusive
	     */
	    Common.clamp = function(value, min, max) {
	        if (value < min)
	            return min;
	        if (value > max)
	            return max;
	        return value;
	    };
	    
	    /**
	     * Returns the sign of the given value.
	     * @method sign
	     * @param {number} value
	     * @return {number} -1 if negative, +1 if 0 or positive
	     */
	    Common.sign = function(value) {
	        return value < 0 ? -1 : 1;
	    };
	    
	    /**
	     * Returns the current timestamp (high-res if available).
	     * @method now
	     * @return {number} the current timestamp (high-res if available)
	     */
	    Common.now = function() {
	        // http://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
	        // https://gist.github.com/davidwaterston/2982531

	        var performance = window.performance || {};

	        performance.now = (function() {
	            return performance.now    ||
	            performance.webkitNow     ||
	            performance.msNow         ||
	            performance.oNow          ||
	            performance.mozNow        ||
	            function() { return +(new Date()); };
	        })();
	              
	        return performance.now();
	    };

	    
	    /**
	     * Returns a random value between a minimum and a maximum value inclusive.
	     * The function uses a seeded random generator.
	     * @method random
	     * @param {number} min
	     * @param {number} max
	     * @return {number} A random number between min and max inclusive
	     */
	    Common.random = function(min, max) {
	        min = (typeof min !== "undefined") ? min : 0;
	        max = (typeof max !== "undefined") ? max : 1;
	        return min + _seededRandom() * (max - min);
	    };

	    /**
	     * Converts a CSS hex colour string into an integer.
	     * @method colorToNumber
	     * @param {string} colorString
	     * @return {number} An integer representing the CSS hex string
	     */
	    Common.colorToNumber = function(colorString) {
	        colorString = colorString.replace('#','');

	        if (colorString.length == 3) {
	            colorString = colorString.charAt(0) + colorString.charAt(0)
	                        + colorString.charAt(1) + colorString.charAt(1)
	                        + colorString.charAt(2) + colorString.charAt(2);
	        }

	        return parseInt(colorString, 16);
	    };

	    /**
	     * A wrapper for console.log, for providing errors and warnings.
	     * @method log
	     * @param {string} message
	     * @param {string} type
	     */
	    Common.log = function(message, type) {
	        if (!console || !console.log || !console.warn)
	            return;

	        switch (type) {

	        case 'warn':
	            console.warn('Matter.js:', message);
	            break;
	        case 'error':
	            console.log('Matter.js:', message);
	            break;

	        }
	    };

	    /**
	     * Returns the next unique sequential ID.
	     * @method nextId
	     * @return {Number} Unique sequential ID
	     */
	    Common.nextId = function() {
	        return Common._nextId++;
	    };

	    /**
	     * A cross browser compatible indexOf implementation.
	     * @method indexOf
	     * @param {array} haystack
	     * @param {object} needle
	     */
	    Common.indexOf = function(haystack, needle) {
	        if (haystack.indexOf)
	            return haystack.indexOf(needle);

	        for (var i = 0; i < haystack.length; i++) {
	            if (haystack[i] === needle)
	                return i;
	        }

	        return -1;
	    };

	    var _seededRandom = function() {
	        // https://gist.github.com/ngryman/3830489
	        Common._seed = (Common._seed * 9301 + 49297) % 233280;
	        return Common._seed / 233280;
	    };

	})();


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
	*
	* @class Sleeping
	*/

	var Sleeping = {};

	module.exports = Sleeping;

	var Events = __webpack_require__(8);

	(function() {

	    Sleeping._motionWakeThreshold = 0.18;
	    Sleeping._motionSleepThreshold = 0.08;
	    Sleeping._minBias = 0.9;

	    /**
	     * Puts bodies to sleep or wakes them up depending on their motion.
	     * @method update
	     * @param {body[]} bodies
	     * @param {number} timeScale
	     */
	    Sleeping.update = function(bodies, timeScale) {
	        var timeFactor = timeScale * timeScale * timeScale;

	        // update bodies sleeping status
	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                motion = body.speed * body.speed + body.angularSpeed * body.angularSpeed;

	            // wake up bodies if they have a force applied
	            if (body.force.x !== 0 || body.force.y !== 0) {
	                Sleeping.set(body, false);
	                continue;
	            }

	            var minMotion = Math.min(body.motion, motion),
	                maxMotion = Math.max(body.motion, motion);
	        
	            // biased average motion estimation between frames
	            body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
	            
	            if (body.sleepThreshold > 0 && body.motion < Sleeping._motionSleepThreshold * timeFactor) {
	                body.sleepCounter += 1;
	                
	                if (body.sleepCounter >= body.sleepThreshold)
	                    Sleeping.set(body, true);
	            } else if (body.sleepCounter > 0) {
	                body.sleepCounter -= 1;
	            }
	        }
	    };

	    /**
	     * Given a set of colliding pairs, wakes the sleeping bodies involved.
	     * @method afterCollisions
	     * @param {pair[]} pairs
	     * @param {number} timeScale
	     */
	    Sleeping.afterCollisions = function(pairs, timeScale) {
	        var timeFactor = timeScale * timeScale * timeScale;

	        // wake up bodies involved in collisions
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            
	            // don't wake inactive pairs
	            if (!pair.isActive)
	                continue;

	            var collision = pair.collision,
	                bodyA = collision.bodyA.parent, 
	                bodyB = collision.bodyB.parent;
	        
	            // don't wake if at least one body is static
	            if ((bodyA.isSleeping && bodyB.isSleeping) || bodyA.isStatic || bodyB.isStatic)
	                continue;
	        
	            if (bodyA.isSleeping || bodyB.isSleeping) {
	                var sleepingBody = (bodyA.isSleeping && !bodyA.isStatic) ? bodyA : bodyB,
	                    movingBody = sleepingBody === bodyA ? bodyB : bodyA;

	                if (!sleepingBody.isStatic && movingBody.motion > Sleeping._motionWakeThreshold * timeFactor) {
	                    Sleeping.set(sleepingBody, false);
	                }
	            }
	        }
	    };
	  
	    /**
	     * Set a body as sleeping or awake.
	     * @method set
	     * @param {body} body
	     * @param {boolean} isSleeping
	     */
	    Sleeping.set = function(body, isSleeping) {
	        var wasSleeping = body.isSleeping;

	        if (isSleeping) {
	            body.isSleeping = true;
	            body.sleepCounter = body.sleepThreshold;

	            body.positionImpulse.x = 0;
	            body.positionImpulse.y = 0;

	            body.positionPrev.x = body.position.x;
	            body.positionPrev.y = body.position.y;

	            body.anglePrev = body.angle;
	            body.speed = 0;
	            body.angularSpeed = 0;
	            body.motion = 0;

	            if (!wasSleeping) {
	                Events.trigger(body, 'sleepStart');
	            }
	        } else {
	            body.isSleeping = false;
	            body.sleepCounter = 0;

	            if (wasSleeping) {
	                Events.trigger(body, 'sleepEnd');
	            }
	        }
	    };

	})();


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Events` module contains methods to fire and listen to events on other objects.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Events
	*/

	var Events = {};

	module.exports = Events;

	var Common = __webpack_require__(6);

	(function() {

	    /**
	     * Subscribes a callback function to the given object's `eventName`.
	     * @method on
	     * @param {} object
	     * @param {string} eventNames
	     * @param {function} callback
	     */
	    Events.on = function(object, eventNames, callback) {
	        var names = eventNames.split(' '),
	            name;

	        for (var i = 0; i < names.length; i++) {
	            name = names[i];
	            object.events = object.events || {};
	            object.events[name] = object.events[name] || [];
	            object.events[name].push(callback);
	        }

	        return callback;
	    };

	    /**
	     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
	     * @method off
	     * @param {} object
	     * @param {string} eventNames
	     * @param {function} callback
	     */
	    Events.off = function(object, eventNames, callback) {
	        if (!eventNames) {
	            object.events = {};
	            return;
	        }

	        // handle Events.off(object, callback)
	        if (typeof eventNames === 'function') {
	            callback = eventNames;
	            eventNames = Common.keys(object.events).join(' ');
	        }

	        var names = eventNames.split(' ');

	        for (var i = 0; i < names.length; i++) {
	            var callbacks = object.events[names[i]],
	                newCallbacks = [];

	            if (callback && callbacks) {
	                for (var j = 0; j < callbacks.length; j++) {
	                    if (callbacks[j] !== callback)
	                        newCallbacks.push(callbacks[j]);
	                }
	            }

	            object.events[names[i]] = newCallbacks;
	        }
	    };

	    /**
	     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
	     * @method trigger
	     * @param {} object
	     * @param {string} eventNames
	     * @param {} event
	     */
	    Events.trigger = function(object, eventNames, event) {
	        var names,
	            name,
	            callbacks,
	            eventClone;

	        if (object.events) {
	            if (!event)
	                event = {};

	            names = eventNames.split(' ');

	            for (var i = 0; i < names.length; i++) {
	                name = names[i];
	                callbacks = object.events[name];

	                if (callbacks) {
	                    eventClone = Common.clone(event, false);
	                    eventClone.name = name;
	                    eventClone.source = object;

	                    for (var j = 0; j < callbacks.length; j++) {
	                        callbacks[j].apply(object, [eventClone]);
	                    }
	                }
	            }
	        }
	    };

	})();


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Render` module is a simple HTML5 canvas based renderer for visualising instances of `Matter.Engine`.
	* It is intended for development and debugging purposes, but may also be suitable for simple games.
	* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
	*
	* @class Render
	*/

	var Render = {};

	module.exports = Render;

	var Common = __webpack_require__(6);
	var Composite = __webpack_require__(10);
	var Bounds = __webpack_require__(11);
	var Events = __webpack_require__(8);
	var Grid = __webpack_require__(12);
	var Vector = __webpack_require__(5);

	(function() {
	    
	    var _requestAnimationFrame,
	        _cancelAnimationFrame;

	    if (typeof window !== 'undefined') {
	        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
	                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame 
	                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };
	   
	        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
	                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
	    }

	    /**
	     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * All properties have default values, and many are pre-calculated automatically based on other properties.
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {object} [options]
	     * @return {render} A new renderer
	     */
	    Render.create = function(options) {
	        var defaults = {
	            controller: Render,
	            engine: null,
	            element: null,
	            canvas: null,
	            mouse: null,
	            frameRequestId: null,
	            options: {
	                width: 800,
	                height: 600,
	                pixelRatio: 1,
	                background: '#fafafa',
	                wireframeBackground: '#222',
	                hasBounds: !!options.bounds,
	                enabled: true,
	                wireframes: true,
	                showSleeping: true,
	                showDebug: false,
	                showBroadphase: false,
	                showBounds: false,
	                showVelocity: false,
	                showCollisions: false,
	                showSeparations: false,
	                showAxes: false,
	                showPositions: false,
	                showAngleIndicator: false,
	                showIds: false,
	                showShadows: false,
	                showVertexNumbers: false,
	                showConvexHulls: false,
	                showInternalEdges: false,
	                showMousePosition: false
	            }
	        };

	        var render = Common.extend(defaults, options);

	        if (render.canvas) {
	            render.canvas.width = render.options.width || render.canvas.width;
	            render.canvas.height = render.options.height || render.canvas.height;
	        }

	        render.mouse = options.mouse;
	        render.engine = options.engine;
	        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
	        render.context = render.canvas.getContext('2d');
	        render.textures = {};

	        render.bounds = render.bounds || { 
	            min: { 
	                x: 0,
	                y: 0
	            }, 
	            max: { 
	                x: render.canvas.width,
	                y: render.canvas.height
	            }
	        };

	        if (render.options.pixelRatio !== 1) {
	            Render.setPixelRatio(render, render.options.pixelRatio);
	        }

	        if (Common.isElement(render.element)) {
	            render.element.appendChild(render.canvas);
	        } else {
	            Common.log('Render.create: options.element was undefined, render.canvas was created but not appended', 'warn');
	        }

	        return render;
	    };

	    /**
	     * Continuously updates the render canvas on the `requestAnimationFrame` event.
	     * @method run
	     * @param {render} render
	     */
	    Render.run = function(render) {
	        (function loop(time){
	            render.frameRequestId = _requestAnimationFrame(loop);
	            Render.world(render);
	        })();
	    };

	    /**
	     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
	     * @method stop
	     * @param {render} render
	     */
	    Render.stop = function(render) {
	        _cancelAnimationFrame(render.frameRequestId);
	    };

	    /**
	     * Sets the pixel ratio of the renderer and updates the canvas.
	     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
	     * @method setPixelRatio
	     * @param {render} render
	     * @param {number} pixelRatio
	     */
	    Render.setPixelRatio = function(render, pixelRatio) {
	        var options = render.options,
	            canvas = render.canvas;

	        if (pixelRatio === 'auto') {
	            pixelRatio = _getPixelRatio(canvas);
	        }

	        options.pixelRatio = pixelRatio;
	        canvas.setAttribute('data-pixel-ratio', pixelRatio);
	        canvas.width = options.width * pixelRatio;
	        canvas.height = options.height * pixelRatio;
	        canvas.style.width = options.width + 'px';
	        canvas.style.height = options.height + 'px';
	        render.context.scale(pixelRatio, pixelRatio);
	    };

	    /**
	     * Renders the given `engine`'s `Matter.World` object.
	     * This is the entry point for all rendering and should be called every time the scene changes.
	     * @method world
	     * @param {render} render
	     */
	    Render.world = function(render) {
	        var engine = render.engine,
	            world = engine.world,
	            canvas = render.canvas,
	            context = render.context,
	            options = render.options,
	            allBodies = Composite.allBodies(world),
	            allConstraints = Composite.allConstraints(world),
	            background = options.wireframes ? options.wireframeBackground : options.background,
	            bodies = [],
	            constraints = [],
	            i;

	        var event = {
	            timestamp: engine.timing.timestamp
	        };

	        Events.trigger(render, 'beforeRender', event);

	        // apply background if it has changed
	        if (render.currentBackground !== background)
	            _applyBackground(render, background);

	        // clear the canvas with a transparent fill, to allow the canvas background to show
	        context.globalCompositeOperation = 'source-in';
	        context.fillStyle = "transparent";
	        context.fillRect(0, 0, canvas.width, canvas.height);
	        context.globalCompositeOperation = 'source-over';

	        // handle bounds
	        if (options.hasBounds) {
	            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
	                boundsHeight = render.bounds.max.y - render.bounds.min.y,
	                boundsScaleX = boundsWidth / options.width,
	                boundsScaleY = boundsHeight / options.height;

	            // filter out bodies that are not in view
	            for (i = 0; i < allBodies.length; i++) {
	                var body = allBodies[i];
	                if (Bounds.overlaps(body.bounds, render.bounds))
	                    bodies.push(body);
	            }

	            // filter out constraints that are not in view
	            for (i = 0; i < allConstraints.length; i++) {
	                var constraint = allConstraints[i],
	                    bodyA = constraint.bodyA,
	                    bodyB = constraint.bodyB,
	                    pointAWorld = constraint.pointA,
	                    pointBWorld = constraint.pointB;

	                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
	                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

	                if (!pointAWorld || !pointBWorld)
	                    continue;

	                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
	                    constraints.push(constraint);
	            }

	            // transform the view
	            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
	            context.translate(-render.bounds.min.x, -render.bounds.min.y);
	        } else {
	            constraints = allConstraints;
	            bodies = allBodies;
	        }

	        if (!options.wireframes || (engine.enableSleeping && options.showSleeping)) {
	            // fully featured rendering of bodies
	            Render.bodies(render, bodies, context);
	        } else {
	            if (options.showConvexHulls)
	                Render.bodyConvexHulls(render, bodies, context);

	            // optimised method for wireframes only
	            Render.bodyWireframes(render, bodies, context);
	        }

	        if (options.showBounds)
	            Render.bodyBounds(render, bodies, context);

	        if (options.showAxes || options.showAngleIndicator)
	            Render.bodyAxes(render, bodies, context);
	        
	        if (options.showPositions)
	            Render.bodyPositions(render, bodies, context);

	        if (options.showVelocity)
	            Render.bodyVelocity(render, bodies, context);

	        if (options.showIds)
	            Render.bodyIds(render, bodies, context);

	        if (options.showSeparations)
	            Render.separations(render, engine.pairs.list, context);

	        if (options.showCollisions)
	            Render.collisions(render, engine.pairs.list, context);

	        if (options.showVertexNumbers)
	            Render.vertexNumbers(render, bodies, context);

	        if (options.showMousePosition)
	            Render.mousePosition(render, render.mouse, context);

	        Render.constraints(constraints, context);

	        if (options.showBroadphase && engine.broadphase.controller === Grid)
	            Render.grid(render, engine.broadphase, context);

	        if (options.showDebug)
	            Render.debug(render, context);

	        if (options.hasBounds) {
	            // revert view transforms
	            context.setTransform(options.pixelRatio, 0, 0, options.pixelRatio, 0, 0);
	        }

	        Events.trigger(render, 'afterRender', event);
	    };

	    /**
	     * Description
	     * @private
	     * @method debug
	     * @param {render} render
	     * @param {RenderingContext} context
	     */
	    Render.debug = function(render, context) {
	        var c = context,
	            engine = render.engine,
	            world = engine.world,
	            metrics = engine.metrics,
	            options = render.options,
	            bodies = Composite.allBodies(world),
	            space = "    ";

	        if (engine.timing.timestamp - (render.debugTimestamp || 0) >= 500) {
	            var text = "";

	            if (metrics.timing) {
	                text += "fps: " + Math.round(metrics.timing.fps) + space;
	            }

	            // @if DEBUG
	            if (metrics.extended) {
	                if (metrics.timing) {
	                    text += "delta: " + metrics.timing.delta.toFixed(3) + space;
	                    text += "correction: " + metrics.timing.correction.toFixed(3) + space;
	                }

	                text += "bodies: " + bodies.length + space;

	                if (engine.broadphase.controller === Grid)
	                    text += "buckets: " + metrics.buckets + space;

	                text += "\n";

	                text += "collisions: " + metrics.collisions + space;
	                text += "pairs: " + engine.pairs.list.length + space;
	                text += "broad: " + metrics.broadEff + space;
	                text += "mid: " + metrics.midEff + space;
	                text += "narrow: " + metrics.narrowEff + space;
	            }
	            // @endif            

	            render.debugString = text;
	            render.debugTimestamp = engine.timing.timestamp;
	        }

	        if (render.debugString) {
	            c.font = "12px Arial";

	            if (options.wireframes) {
	                c.fillStyle = 'rgba(255,255,255,0.5)';
	            } else {
	                c.fillStyle = 'rgba(0,0,0,0.5)';
	            }

	            var split = render.debugString.split('\n');

	            for (var i = 0; i < split.length; i++) {
	                c.fillText(split[i], 50, 50 + i * 18);
	            }
	        }
	    };

	    /**
	     * Description
	     * @private
	     * @method constraints
	     * @param {constraint[]} constraints
	     * @param {RenderingContext} context
	     */
	    Render.constraints = function(constraints, context) {
	        var c = context;

	        for (var i = 0; i < constraints.length; i++) {
	            var constraint = constraints[i];

	            if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
	                continue;

	            var bodyA = constraint.bodyA,
	                bodyB = constraint.bodyB;

	            if (bodyA) {
	                c.beginPath();
	                c.moveTo(bodyA.position.x + constraint.pointA.x, bodyA.position.y + constraint.pointA.y);
	            } else {
	                c.beginPath();
	                c.moveTo(constraint.pointA.x, constraint.pointA.y);
	            }

	            if (bodyB) {
	                c.lineTo(bodyB.position.x + constraint.pointB.x, bodyB.position.y + constraint.pointB.y);
	            } else {
	                c.lineTo(constraint.pointB.x, constraint.pointB.y);
	            }

	            c.lineWidth = constraint.render.lineWidth;
	            c.strokeStyle = constraint.render.strokeStyle;
	            c.stroke();
	        }
	    };
	    
	    /**
	     * Description
	     * @private
	     * @method bodyShadows
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyShadows = function(render, bodies, context) {
	        var c = context,
	            engine = render.engine;

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            if (!body.render.visible)
	                continue;

	            if (body.circleRadius) {
	                c.beginPath();
	                c.arc(body.position.x, body.position.y, body.circleRadius, 0, 2 * Math.PI);
	                c.closePath();
	            } else {
	                c.beginPath();
	                c.moveTo(body.vertices[0].x, body.vertices[0].y);
	                for (var j = 1; j < body.vertices.length; j++) {
	                    c.lineTo(body.vertices[j].x, body.vertices[j].y);
	                }
	                c.closePath();
	            }

	            var distanceX = body.position.x - render.options.width * 0.5,
	                distanceY = body.position.y - render.options.height * 0.2,
	                distance = Math.abs(distanceX) + Math.abs(distanceY);

	            c.shadowColor = 'rgba(0,0,0,0.15)';
	            c.shadowOffsetX = 0.05 * distanceX;
	            c.shadowOffsetY = 0.05 * distanceY;
	            c.shadowBlur = 1 + 12 * Math.min(1, distance / 1000);

	            c.fill();

	            c.shadowColor = null;
	            c.shadowOffsetX = null;
	            c.shadowOffsetY = null;
	            c.shadowBlur = null;
	        }
	    };

	    /**
	     * Description
	     * @private
	     * @method bodies
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodies = function(render, bodies, context) {
	        var c = context,
	            engine = render.engine,
	            options = render.options,
	            showInternalEdges = options.showInternalEdges || !options.wireframes,
	            body,
	            part,
	            i,
	            k;

	        for (i = 0; i < bodies.length; i++) {
	            body = bodies[i];

	            if (!body.render.visible)
	                continue;

	            // handle compound parts
	            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
	                part = body.parts[k];

	                if (!part.render.visible)
	                    continue;

	                if (options.showSleeping && body.isSleeping) {
	                    c.globalAlpha = 0.5 * part.render.opacity;
	                } else if (part.render.opacity !== 1) {
	                    c.globalAlpha = part.render.opacity;
	                }

	                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
	                    // part sprite
	                    var sprite = part.render.sprite,
	                        texture = _getTexture(render, sprite.texture);

	                    c.translate(part.position.x, part.position.y); 
	                    c.rotate(part.angle);

	                    c.drawImage(
	                        texture,
	                        texture.width * -sprite.xOffset * sprite.xScale, 
	                        texture.height * -sprite.yOffset * sprite.yScale, 
	                        texture.width * sprite.xScale, 
	                        texture.height * sprite.yScale
	                    );

	                    // revert translation, hopefully faster than save / restore
	                    c.rotate(-part.angle);
	                    c.translate(-part.position.x, -part.position.y); 
	                } else {
	                    // part polygon
	                    if (part.circleRadius) {
	                        c.beginPath();
	                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
	                    } else {
	                        c.beginPath();
	                        c.moveTo(part.vertices[0].x, part.vertices[0].y);

	                        for (var j = 1; j < part.vertices.length; j++) {
	                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
	                                c.lineTo(part.vertices[j].x, part.vertices[j].y);
	                            } else {
	                                c.moveTo(part.vertices[j].x, part.vertices[j].y);
	                            }

	                            if (part.vertices[j].isInternal && !showInternalEdges) {
	                                c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
	                            }
	                        }
	                        
	                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
	                        c.closePath();
	                    }

	                    if (!options.wireframes) {
	                        c.fillStyle = part.render.fillStyle;
	                        c.lineWidth = part.render.lineWidth;
	                        c.strokeStyle = part.render.strokeStyle;
	                        c.fill();
	                    } else {
	                        c.lineWidth = 1;
	                        c.strokeStyle = '#bbb';
	                    }

	                    c.stroke();
	                }

	                c.globalAlpha = 1;
	            }
	        }
	    };

	    /**
	     * Optimised method for drawing body wireframes in one pass
	     * @private
	     * @method bodyWireframes
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyWireframes = function(render, bodies, context) {
	        var c = context,
	            showInternalEdges = render.options.showInternalEdges,
	            body,
	            part,
	            i,
	            j,
	            k;

	        c.beginPath();

	        // render all bodies
	        for (i = 0; i < bodies.length; i++) {
	            body = bodies[i];

	            if (!body.render.visible)
	                continue;

	            // handle compound parts
	            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
	                part = body.parts[k];

	                c.moveTo(part.vertices[0].x, part.vertices[0].y);

	                for (j = 1; j < part.vertices.length; j++) {
	                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
	                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
	                    } else {
	                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
	                    }

	                    if (part.vertices[j].isInternal && !showInternalEdges) {
	                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
	                    }
	                }
	                
	                c.lineTo(part.vertices[0].x, part.vertices[0].y);
	            }
	        }

	        c.lineWidth = 1;
	        c.strokeStyle = '#bbb';
	        c.stroke();
	    };

	    /**
	     * Optimised method for drawing body convex hull wireframes in one pass
	     * @private
	     * @method bodyConvexHulls
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyConvexHulls = function(render, bodies, context) {
	        var c = context,
	            body,
	            part,
	            i,
	            j,
	            k;

	        c.beginPath();

	        // render convex hulls
	        for (i = 0; i < bodies.length; i++) {
	            body = bodies[i];

	            if (!body.render.visible || body.parts.length === 1)
	                continue;

	            c.moveTo(body.vertices[0].x, body.vertices[0].y);

	            for (j = 1; j < body.vertices.length; j++) {
	                c.lineTo(body.vertices[j].x, body.vertices[j].y);
	            }
	            
	            c.lineTo(body.vertices[0].x, body.vertices[0].y);
	        }

	        c.lineWidth = 1;
	        c.strokeStyle = 'rgba(255,255,255,0.2)';
	        c.stroke();
	    };

	    /**
	     * Renders body vertex numbers.
	     * @private
	     * @method vertexNumbers
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.vertexNumbers = function(render, bodies, context) {
	        var c = context,
	            i,
	            j,
	            k;

	        for (i = 0; i < bodies.length; i++) {
	            var parts = bodies[i].parts;
	            for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
	                var part = parts[k];
	                for (j = 0; j < part.vertices.length; j++) {
	                    c.fillStyle = 'rgba(255,255,255,0.2)';
	                    c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
	                }
	            }
	        }
	    };

	    /**
	     * Renders mouse position.
	     * @private
	     * @method mousePosition
	     * @param {render} render
	     * @param {mouse} mouse
	     * @param {RenderingContext} context
	     */
	    Render.mousePosition = function(render, mouse, context) {
	        var c = context;
	        c.fillStyle = 'rgba(255,255,255,0.8)';
	        c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
	    };

	    /**
	     * Draws body bounds
	     * @private
	     * @method bodyBounds
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyBounds = function(render, bodies, context) {
	        var c = context,
	            engine = render.engine,
	            options = render.options;

	        c.beginPath();

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            if (body.render.visible) {
	                var parts = bodies[i].parts;
	                for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
	                    var part = parts[j];
	                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
	                }
	            }
	        }

	        if (options.wireframes) {
	            c.strokeStyle = 'rgba(255,255,255,0.08)';
	        } else {
	            c.strokeStyle = 'rgba(0,0,0,0.1)';
	        }

	        c.lineWidth = 1;
	        c.stroke();
	    };

	    /**
	     * Draws body angle indicators and axes
	     * @private
	     * @method bodyAxes
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyAxes = function(render, bodies, context) {
	        var c = context,
	            engine = render.engine,
	            options = render.options,
	            part,
	            i,
	            j,
	            k;

	        c.beginPath();

	        for (i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                parts = body.parts;

	            if (!body.render.visible)
	                continue;

	            if (options.showAxes) {
	                // render all axes
	                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
	                    part = parts[j];
	                    for (k = 0; k < part.axes.length; k++) {
	                        var axis = part.axes[k];
	                        c.moveTo(part.position.x, part.position.y);
	                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
	                    }
	                }
	            } else {
	                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
	                    part = parts[j];
	                    for (k = 0; k < part.axes.length; k++) {
	                        // render a single axis indicator
	                        c.moveTo(part.position.x, part.position.y);
	                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2, 
	                                 (part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2);
	                    }
	                }
	            }
	        }

	        if (options.wireframes) {
	            c.strokeStyle = 'indianred';
	        } else {
	            c.strokeStyle = 'rgba(0,0,0,0.8)';
	            c.globalCompositeOperation = 'overlay';
	        }

	        c.lineWidth = 1;
	        c.stroke();
	        c.globalCompositeOperation = 'source-over';
	    };

	    /**
	     * Draws body positions
	     * @private
	     * @method bodyPositions
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyPositions = function(render, bodies, context) {
	        var c = context,
	            engine = render.engine,
	            options = render.options,
	            body,
	            part,
	            i,
	            k;

	        c.beginPath();

	        // render current positions
	        for (i = 0; i < bodies.length; i++) {
	            body = bodies[i];

	            if (!body.render.visible)
	                continue;

	            // handle compound parts
	            for (k = 0; k < body.parts.length; k++) {
	                part = body.parts[k];
	                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
	                c.closePath();
	            }
	        }

	        if (options.wireframes) {
	            c.fillStyle = 'indianred';
	        } else {
	            c.fillStyle = 'rgba(0,0,0,0.5)';
	        }
	        c.fill();

	        c.beginPath();

	        // render previous positions
	        for (i = 0; i < bodies.length; i++) {
	            body = bodies[i];
	            if (body.render.visible) {
	                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
	                c.closePath();
	            }
	        }

	        c.fillStyle = 'rgba(255,165,0,0.8)';
	        c.fill();
	    };

	    /**
	     * Draws body velocity
	     * @private
	     * @method bodyVelocity
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyVelocity = function(render, bodies, context) {
	        var c = context;

	        c.beginPath();

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            if (!body.render.visible)
	                continue;

	            c.moveTo(body.position.x, body.position.y);
	            c.lineTo(body.position.x + (body.position.x - body.positionPrev.x) * 2, body.position.y + (body.position.y - body.positionPrev.y) * 2);
	        }

	        c.lineWidth = 3;
	        c.strokeStyle = 'cornflowerblue';
	        c.stroke();
	    };

	    /**
	     * Draws body ids
	     * @private
	     * @method bodyIds
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyIds = function(render, bodies, context) {
	        var c = context,
	            i,
	            j;

	        for (i = 0; i < bodies.length; i++) {
	            if (!bodies[i].render.visible)
	                continue;

	            var parts = bodies[i].parts;
	            for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
	                var part = parts[j];
	                c.font = "12px Arial";
	                c.fillStyle = 'rgba(255,255,255,0.5)';
	                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
	            }
	        }
	    };

	    /**
	     * Description
	     * @private
	     * @method collisions
	     * @param {render} render
	     * @param {pair[]} pairs
	     * @param {RenderingContext} context
	     */
	    Render.collisions = function(render, pairs, context) {
	        var c = context,
	            options = render.options,
	            pair,
	            collision,
	            corrected,
	            bodyA,
	            bodyB,
	            i,
	            j;

	        c.beginPath();

	        // render collision positions
	        for (i = 0; i < pairs.length; i++) {
	            pair = pairs[i];

	            if (!pair.isActive)
	                continue;

	            collision = pair.collision;
	            for (j = 0; j < pair.activeContacts.length; j++) {
	                var contact = pair.activeContacts[j],
	                    vertex = contact.vertex;
	                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
	            }
	        }

	        if (options.wireframes) {
	            c.fillStyle = 'rgba(255,255,255,0.7)';
	        } else {
	            c.fillStyle = 'orange';
	        }
	        c.fill();

	        c.beginPath();
	            
	        // render collision normals
	        for (i = 0; i < pairs.length; i++) {
	            pair = pairs[i];

	            if (!pair.isActive)
	                continue;

	            collision = pair.collision;

	            if (pair.activeContacts.length > 0) {
	                var normalPosX = pair.activeContacts[0].vertex.x,
	                    normalPosY = pair.activeContacts[0].vertex.y;

	                if (pair.activeContacts.length === 2) {
	                    normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
	                    normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
	                }
	                
	                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
	                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
	                } else {
	                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
	                }

	                c.lineTo(normalPosX, normalPosY);
	            }
	        }

	        if (options.wireframes) {
	            c.strokeStyle = 'rgba(255,165,0,0.7)';
	        } else {
	            c.strokeStyle = 'orange';
	        }

	        c.lineWidth = 1;
	        c.stroke();
	    };

	    /**
	     * Description
	     * @private
	     * @method separations
	     * @param {render} render
	     * @param {pair[]} pairs
	     * @param {RenderingContext} context
	     */
	    Render.separations = function(render, pairs, context) {
	        var c = context,
	            options = render.options,
	            pair,
	            collision,
	            corrected,
	            bodyA,
	            bodyB,
	            i,
	            j;

	        c.beginPath();

	        // render separations
	        for (i = 0; i < pairs.length; i++) {
	            pair = pairs[i];

	            if (!pair.isActive)
	                continue;

	            collision = pair.collision;
	            bodyA = collision.bodyA;
	            bodyB = collision.bodyB;

	            var k = 1;

	            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
	            if (bodyB.isStatic) k = 0;

	            c.moveTo(bodyB.position.x, bodyB.position.y);
	            c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);

	            k = 1;

	            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
	            if (bodyA.isStatic) k = 0;

	            c.moveTo(bodyA.position.x, bodyA.position.y);
	            c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
	        }

	        if (options.wireframes) {
	            c.strokeStyle = 'rgba(255,165,0,0.5)';
	        } else {
	            c.strokeStyle = 'orange';
	        }
	        c.stroke();
	    };

	    /**
	     * Description
	     * @private
	     * @method grid
	     * @param {render} render
	     * @param {grid} grid
	     * @param {RenderingContext} context
	     */
	    Render.grid = function(render, grid, context) {
	        var c = context,
	            options = render.options;

	        if (options.wireframes) {
	            c.strokeStyle = 'rgba(255,180,0,0.1)';
	        } else {
	            c.strokeStyle = 'rgba(255,180,0,0.5)';
	        }

	        c.beginPath();

	        var bucketKeys = Common.keys(grid.buckets);

	        for (var i = 0; i < bucketKeys.length; i++) {
	            var bucketId = bucketKeys[i];

	            if (grid.buckets[bucketId].length < 2)
	                continue;

	            var region = bucketId.split(',');
	            c.rect(0.5 + parseInt(region[0], 10) * grid.bucketWidth, 
	                    0.5 + parseInt(region[1], 10) * grid.bucketHeight, 
	                    grid.bucketWidth, 
	                    grid.bucketHeight);
	        }

	        c.lineWidth = 1;
	        c.stroke();
	    };

	    /**
	     * Description
	     * @private
	     * @method inspector
	     * @param {inspector} inspector
	     * @param {RenderingContext} context
	     */
	    Render.inspector = function(inspector, context) {
	        var engine = inspector.engine,
	            selected = inspector.selected,
	            render = inspector.render,
	            options = render.options,
	            bounds;

	        if (options.hasBounds) {
	            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
	                boundsHeight = render.bounds.max.y - render.bounds.min.y,
	                boundsScaleX = boundsWidth / render.options.width,
	                boundsScaleY = boundsHeight / render.options.height;
	            
	            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
	            context.translate(-render.bounds.min.x, -render.bounds.min.y);
	        }

	        for (var i = 0; i < selected.length; i++) {
	            var item = selected[i].data;

	            context.translate(0.5, 0.5);
	            context.lineWidth = 1;
	            context.strokeStyle = 'rgba(255,165,0,0.9)';
	            context.setLineDash([1,2]);

	            switch (item.type) {

	            case 'body':

	                // render body selections
	                bounds = item.bounds;
	                context.beginPath();
	                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3), 
	                             Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
	                context.closePath();
	                context.stroke();

	                break;

	            case 'constraint':

	                // render constraint selections
	                var point = item.pointA;
	                if (item.bodyA)
	                    point = item.pointB;
	                context.beginPath();
	                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
	                context.closePath();
	                context.stroke();

	                break;

	            }

	            context.setLineDash([]);
	            context.translate(-0.5, -0.5);
	        }

	        // render selection region
	        if (inspector.selectStart !== null) {
	            context.translate(0.5, 0.5);
	            context.lineWidth = 1;
	            context.strokeStyle = 'rgba(255,165,0,0.6)';
	            context.fillStyle = 'rgba(255,165,0,0.1)';
	            bounds = inspector.selectBounds;
	            context.beginPath();
	            context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y), 
	                         Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
	            context.closePath();
	            context.stroke();
	            context.fill();
	            context.translate(-0.5, -0.5);
	        }

	        if (options.hasBounds)
	            context.setTransform(1, 0, 0, 1, 0, 0);
	    };

	    /**
	     * Description
	     * @method _createCanvas
	     * @private
	     * @param {} width
	     * @param {} height
	     * @return canvas
	     */
	    var _createCanvas = function(width, height) {
	        var canvas = document.createElement('canvas');
	        canvas.width = width;
	        canvas.height = height;
	        canvas.oncontextmenu = function() { return false; };
	        canvas.onselectstart = function() { return false; };
	        return canvas;
	    };

	    /**
	     * Gets the pixel ratio of the canvas.
	     * @method _getPixelRatio
	     * @private
	     * @param {HTMLElement} canvas
	     * @return {Number} pixel ratio
	     */
	    var _getPixelRatio = function(canvas) {
	        var context = canvas.getContext('2d'),
	            devicePixelRatio = window.devicePixelRatio || 1,
	            backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
	                                      || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio
	                                      || context.backingStorePixelRatio || 1;

	        return devicePixelRatio / backingStorePixelRatio;
	    };

	    /**
	     * Gets the requested texture (an Image) via its path
	     * @method _getTexture
	     * @private
	     * @param {render} render
	     * @param {string} imagePath
	     * @return {Image} texture
	     */
	    var _getTexture = function(render, imagePath) {
	        var image = render.textures[imagePath];

	        if (image)
	            return image;

	        image = render.textures[imagePath] = new Image();
	        image.src = imagePath;

	        return image;
	    };

	    /**
	     * Applies the background to the canvas using CSS.
	     * @method applyBackground
	     * @private
	     * @param {render} render
	     * @param {string} background
	     */
	    var _applyBackground = function(render, background) {
	        var cssBackground = background;

	        if (/(jpg|gif|png)$/.test(background))
	            cssBackground = 'url(' + background + ')';

	        render.canvas.style.background = cssBackground;
	        render.canvas.style.backgroundSize = "contain";
	        render.currentBackground = background;
	    };

	    /*
	    *
	    *  Events Documentation
	    *
	    */

	    /**
	    * Fired before rendering
	    *
	    * @event beforeRender
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired after rendering
	    *
	    * @event afterRender
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * A back-reference to the `Matter.Render` module.
	     *
	     * @property controller
	     * @type render
	     */

	    /**
	     * A reference to the `Matter.Engine` instance to be used.
	     *
	     * @property engine
	     * @type engine
	     */

	    /**
	     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
	     *
	     * @property element
	     * @type HTMLElement
	     * @default null
	     */

	    /**
	     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
	     *
	     * @property canvas
	     * @type HTMLCanvasElement
	     * @default null
	     */

	    /**
	     * The configuration options of the renderer.
	     *
	     * @property options
	     * @type {}
	     */

	    /**
	     * The target width in pixels of the `render.canvas` to be created.
	     *
	     * @property options.width
	     * @type number
	     * @default 800
	     */

	    /**
	     * The target height in pixels of the `render.canvas` to be created.
	     *
	     * @property options.height
	     * @type number
	     * @default 600
	     */

	    /**
	     * A flag that specifies if `render.bounds` should be used when rendering.
	     *
	     * @property options.hasBounds
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A `Bounds` object that specifies the drawing view region. 
	     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
	     * This allows for creating views that can pan or zoom around the scene.
	     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
	     *
	     * @property bounds
	     * @type bounds
	     */

	    /**
	     * The 2d rendering context from the `render.canvas` element.
	     *
	     * @property context
	     * @type CanvasRenderingContext2D
	     */

	    /**
	     * The sprite texture cache.
	     *
	     * @property textures
	     * @type {}
	     */

	})();


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Composite` module contains methods for creating and manipulating composite bodies.
	* A composite body is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`, therefore composites form a tree structure.
	* It is important to use the functions in this module to modify composites, rather than directly modifying their properties.
	* Note that the `Matter.World` object is also a type of `Matter.Composite` and as such all composite methods here can also operate on a `Matter.World`.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Composite
	*/

	var Composite = {};

	module.exports = Composite;

	var Events = __webpack_require__(8);
	var Common = __webpack_require__(6);
	var Body = __webpack_require__(3);

	(function() {

	    /**
	     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properites section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {} [options]
	     * @return {composite} A new composite
	     */
	    Composite.create = function(options) {
	        return Common.extend({ 
	            id: Common.nextId(),
	            type: 'composite',
	            parent: null,
	            isModified: false,
	            bodies: [], 
	            constraints: [], 
	            composites: [],
	            label: 'Composite'
	        }, options);
	    };

	    /**
	     * Sets the composite's `isModified` flag. 
	     * If `updateParents` is true, all parents will be set (default: false).
	     * If `updateChildren` is true, all children will be set (default: false).
	     * @method setModified
	     * @param {composite} composite
	     * @param {boolean} isModified
	     * @param {boolean} [updateParents=false]
	     * @param {boolean} [updateChildren=false]
	     */
	    Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
	        composite.isModified = isModified;

	        if (updateParents && composite.parent) {
	            Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
	        }

	        if (updateChildren) {
	            for(var i = 0; i < composite.composites.length; i++) {
	                var childComposite = composite.composites[i];
	                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
	            }
	        }
	    };

	    /**
	     * Generic add function. Adds one or many body(s), constraint(s) or a composite(s) to the given composite.
	     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
	     * @method add
	     * @param {composite} composite
	     * @param {} object
	     * @return {composite} The original composite with the objects added
	     */
	    Composite.add = function(composite, object) {
	        var objects = [].concat(object);

	        Events.trigger(composite, 'beforeAdd', { object: object });

	        for (var i = 0; i < objects.length; i++) {
	            var obj = objects[i];

	            switch (obj.type) {

	            case 'body':
	                // skip adding compound parts
	                if (obj.parent !== obj) {
	                    Common.log('Composite.add: skipped adding a compound body part (you must add its parent instead)', 'warn');
	                    break;
	                }

	                Composite.addBody(composite, obj);
	                break;
	            case 'constraint':
	                Composite.addConstraint(composite, obj);
	                break;
	            case 'composite':
	                Composite.addComposite(composite, obj);
	                break;
	            case 'mouseConstraint':
	                Composite.addConstraint(composite, obj.constraint);
	                break;

	            }
	        }

	        Events.trigger(composite, 'afterAdd', { object: object });

	        return composite;
	    };

	    /**
	     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
	     * Optionally searching its children recursively.
	     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
	     * @method remove
	     * @param {composite} composite
	     * @param {} object
	     * @param {boolean} [deep=false]
	     * @return {composite} The original composite with the objects removed
	     */
	    Composite.remove = function(composite, object, deep) {
	        var objects = [].concat(object);

	        Events.trigger(composite, 'beforeRemove', { object: object });

	        for (var i = 0; i < objects.length; i++) {
	            var obj = objects[i];

	            switch (obj.type) {

	            case 'body':
	                Composite.removeBody(composite, obj, deep);
	                break;
	            case 'constraint':
	                Composite.removeConstraint(composite, obj, deep);
	                break;
	            case 'composite':
	                Composite.removeComposite(composite, obj, deep);
	                break;
	            case 'mouseConstraint':
	                Composite.removeConstraint(composite, obj.constraint);
	                break;

	            }
	        }

	        Events.trigger(composite, 'afterRemove', { object: object });

	        return composite;
	    };

	    /**
	     * Adds a composite to the given composite.
	     * @private
	     * @method addComposite
	     * @param {composite} compositeA
	     * @param {composite} compositeB
	     * @return {composite} The original compositeA with the objects from compositeB added
	     */
	    Composite.addComposite = function(compositeA, compositeB) {
	        compositeA.composites.push(compositeB);
	        compositeB.parent = compositeA;
	        Composite.setModified(compositeA, true, true, false);
	        return compositeA;
	    };

	    /**
	     * Removes a composite from the given composite, and optionally searching its children recursively.
	     * @private
	     * @method removeComposite
	     * @param {composite} compositeA
	     * @param {composite} compositeB
	     * @param {boolean} [deep=false]
	     * @return {composite} The original compositeA with the composite removed
	     */
	    Composite.removeComposite = function(compositeA, compositeB, deep) {
	        var position = Common.indexOf(compositeA.composites, compositeB);
	        if (position !== -1) {
	            Composite.removeCompositeAt(compositeA, position);
	            Composite.setModified(compositeA, true, true, false);
	        }

	        if (deep) {
	            for (var i = 0; i < compositeA.composites.length; i++){
	                Composite.removeComposite(compositeA.composites[i], compositeB, true);
	            }
	        }

	        return compositeA;
	    };

	    /**
	     * Removes a composite from the given composite.
	     * @private
	     * @method removeCompositeAt
	     * @param {composite} composite
	     * @param {number} position
	     * @return {composite} The original composite with the composite removed
	     */
	    Composite.removeCompositeAt = function(composite, position) {
	        composite.composites.splice(position, 1);
	        Composite.setModified(composite, true, true, false);
	        return composite;
	    };

	    /**
	     * Adds a body to the given composite.
	     * @private
	     * @method addBody
	     * @param {composite} composite
	     * @param {body} body
	     * @return {composite} The original composite with the body added
	     */
	    Composite.addBody = function(composite, body) {
	        composite.bodies.push(body);
	        Composite.setModified(composite, true, true, false);
	        return composite;
	    };

	    /**
	     * Removes a body from the given composite, and optionally searching its children recursively.
	     * @private
	     * @method removeBody
	     * @param {composite} composite
	     * @param {body} body
	     * @param {boolean} [deep=false]
	     * @return {composite} The original composite with the body removed
	     */
	    Composite.removeBody = function(composite, body, deep) {
	        var position = Common.indexOf(composite.bodies, body);
	        if (position !== -1) {
	            Composite.removeBodyAt(composite, position);
	            Composite.setModified(composite, true, true, false);
	        }

	        if (deep) {
	            for (var i = 0; i < composite.composites.length; i++){
	                Composite.removeBody(composite.composites[i], body, true);
	            }
	        }

	        return composite;
	    };

	    /**
	     * Removes a body from the given composite.
	     * @private
	     * @method removeBodyAt
	     * @param {composite} composite
	     * @param {number} position
	     * @return {composite} The original composite with the body removed
	     */
	    Composite.removeBodyAt = function(composite, position) {
	        composite.bodies.splice(position, 1);
	        Composite.setModified(composite, true, true, false);
	        return composite;
	    };

	    /**
	     * Adds a constraint to the given composite.
	     * @private
	     * @method addConstraint
	     * @param {composite} composite
	     * @param {constraint} constraint
	     * @return {composite} The original composite with the constraint added
	     */
	    Composite.addConstraint = function(composite, constraint) {
	        composite.constraints.push(constraint);
	        Composite.setModified(composite, true, true, false);
	        return composite;
	    };

	    /**
	     * Removes a constraint from the given composite, and optionally searching its children recursively.
	     * @private
	     * @method removeConstraint
	     * @param {composite} composite
	     * @param {constraint} constraint
	     * @param {boolean} [deep=false]
	     * @return {composite} The original composite with the constraint removed
	     */
	    Composite.removeConstraint = function(composite, constraint, deep) {
	        var position = Common.indexOf(composite.constraints, constraint);
	        if (position !== -1) {
	            Composite.removeConstraintAt(composite, position);
	        }

	        if (deep) {
	            for (var i = 0; i < composite.composites.length; i++){
	                Composite.removeConstraint(composite.composites[i], constraint, true);
	            }
	        }

	        return composite;
	    };

	    /**
	     * Removes a body from the given composite.
	     * @private
	     * @method removeConstraintAt
	     * @param {composite} composite
	     * @param {number} position
	     * @return {composite} The original composite with the constraint removed
	     */
	    Composite.removeConstraintAt = function(composite, position) {
	        composite.constraints.splice(position, 1);
	        Composite.setModified(composite, true, true, false);
	        return composite;
	    };

	    /**
	     * Removes all bodies, constraints and composites from the given composite.
	     * Optionally clearing its children recursively.
	     * @method clear
	     * @param {composite} composite
	     * @param {boolean} keepStatic
	     * @param {boolean} [deep=false]
	     */
	    Composite.clear = function(composite, keepStatic, deep) {
	        if (deep) {
	            for (var i = 0; i < composite.composites.length; i++){
	                Composite.clear(composite.composites[i], keepStatic, true);
	            }
	        }
	        
	        if (keepStatic) {
	            composite.bodies = composite.bodies.filter(function(body) { return body.isStatic; });
	        } else {
	            composite.bodies.length = 0;
	        }

	        composite.constraints.length = 0;
	        composite.composites.length = 0;
	        Composite.setModified(composite, true, true, false);

	        return composite;
	    };

	    /**
	     * Returns all bodies in the given composite, including all bodies in its children, recursively.
	     * @method allBodies
	     * @param {composite} composite
	     * @return {body[]} All the bodies
	     */
	    Composite.allBodies = function(composite) {
	        var bodies = [].concat(composite.bodies);

	        for (var i = 0; i < composite.composites.length; i++)
	            bodies = bodies.concat(Composite.allBodies(composite.composites[i]));

	        return bodies;
	    };

	    /**
	     * Returns all constraints in the given composite, including all constraints in its children, recursively.
	     * @method allConstraints
	     * @param {composite} composite
	     * @return {constraint[]} All the constraints
	     */
	    Composite.allConstraints = function(composite) {
	        var constraints = [].concat(composite.constraints);

	        for (var i = 0; i < composite.composites.length; i++)
	            constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));

	        return constraints;
	    };

	    /**
	     * Returns all composites in the given composite, including all composites in its children, recursively.
	     * @method allComposites
	     * @param {composite} composite
	     * @return {composite[]} All the composites
	     */
	    Composite.allComposites = function(composite) {
	        var composites = [].concat(composite.composites);

	        for (var i = 0; i < composite.composites.length; i++)
	            composites = composites.concat(Composite.allComposites(composite.composites[i]));

	        return composites;
	    };

	    /**
	     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
	     * @method get
	     * @param {composite} composite
	     * @param {number} id
	     * @param {string} type
	     * @return {object} The requested object, if found
	     */
	    Composite.get = function(composite, id, type) {
	        var objects,
	            object;

	        switch (type) {
	        case 'body':
	            objects = Composite.allBodies(composite);
	            break;
	        case 'constraint':
	            objects = Composite.allConstraints(composite);
	            break;
	        case 'composite':
	            objects = Composite.allComposites(composite).concat(composite);
	            break;
	        }

	        if (!objects)
	            return null;

	        object = objects.filter(function(object) { 
	            return object.id.toString() === id.toString(); 
	        });

	        return object.length === 0 ? null : object[0];
	    };

	    /**
	     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
	     * @method move
	     * @param {compositeA} compositeA
	     * @param {object[]} objects
	     * @param {compositeB} compositeB
	     * @return {composite} Returns compositeA
	     */
	    Composite.move = function(compositeA, objects, compositeB) {
	        Composite.remove(compositeA, objects);
	        Composite.add(compositeB, objects);
	        return compositeA;
	    };

	    /**
	     * Assigns new ids for all objects in the composite, recursively.
	     * @method rebase
	     * @param {composite} composite
	     * @return {composite} Returns composite
	     */
	    Composite.rebase = function(composite) {
	        var objects = Composite.allBodies(composite)
	                        .concat(Composite.allConstraints(composite))
	                        .concat(Composite.allComposites(composite));

	        for (var i = 0; i < objects.length; i++) {
	            objects[i].id = Common.nextId();
	        }

	        Composite.setModified(composite, true, true, false);

	        return composite;
	    };

	    /**
	     * Translates all children in the composite by a given vector relative to their current positions, 
	     * without imparting any velocity.
	     * @method translate
	     * @param {composite} composite
	     * @param {vector} translation
	     * @param {bool} [recursive=true]
	     */
	    Composite.translate = function(composite, translation, recursive) {
	        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

	        for (var i = 0; i < bodies.length; i++) {
	            Body.translate(bodies[i], translation);
	        }

	        Composite.setModified(composite, true, true, false);

	        return composite;
	    };

	    /**
	     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
	     * @method rotate
	     * @param {composite} composite
	     * @param {number} rotation
	     * @param {vector} point
	     * @param {bool} [recursive=true]
	     */
	    Composite.rotate = function(composite, rotation, point, recursive) {
	        var cos = Math.cos(rotation),
	            sin = Math.sin(rotation),
	            bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                dx = body.position.x - point.x,
	                dy = body.position.y - point.y;
	                
	            Body.setPosition(body, {
	                x: point.x + (dx * cos - dy * sin),
	                y: point.y + (dx * sin + dy * cos)
	            });

	            Body.rotate(body, rotation);
	        }

	        Composite.setModified(composite, true, true, false);

	        return composite;
	    };

	    /**
	     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
	     * @method scale
	     * @param {composite} composite
	     * @param {number} scaleX
	     * @param {number} scaleY
	     * @param {vector} point
	     * @param {bool} [recursive=true]
	     */
	    Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
	        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                dx = body.position.x - point.x,
	                dy = body.position.y - point.y;
	                
	            Body.setPosition(body, {
	                x: point.x + dx * scaleX,
	                y: point.y + dy * scaleY
	            });

	            Body.scale(body, scaleX, scaleY);
	        }

	        Composite.setModified(composite, true, true, false);

	        return composite;
	    };

	    /*
	    *
	    *  Events Documentation
	    *
	    */

	    /**
	    * Fired when a call to `Composite.add` is made, before objects have been added.
	    *
	    * @event beforeAdd
	    * @param {} event An event object
	    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when a call to `Composite.add` is made, after objects have been added.
	    *
	    * @event afterAdd
	    * @param {} event An event object
	    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when a call to `Composite.remove` is made, before objects have been removed.
	    *
	    * @event beforeRemove
	    * @param {} event An event object
	    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when a call to `Composite.remove` is made, after objects have been removed.
	    *
	    * @event afterRemove
	    * @param {} event An event object
	    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
	     *
	     * @property id
	     * @type number
	     */

	    /**
	     * A `String` denoting the type of object.
	     *
	     * @property type
	     * @type string
	     * @default "composite"
	     * @readOnly
	     */

	    /**
	     * An arbitrary `String` name to help the user identify and manage composites.
	     *
	     * @property label
	     * @type string
	     * @default "Composite"
	     */

	    /**
	     * A flag that specifies whether the composite has been modified during the current step.
	     * Most `Matter.Composite` methods will automatically set this flag to `true` to inform the engine of changes to be handled.
	     * If you need to change it manually, you should use the `Composite.setModified` method.
	     *
	     * @property isModified
	     * @type boolean
	     * @default false
	     */

	    /**
	     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
	     *
	     * @property parent
	     * @type composite
	     * @default null
	     */

	    /**
	     * An array of `Body` that are _direct_ children of this composite.
	     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
	     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
	     *
	     * @property bodies
	     * @type body[]
	     * @default []
	     */

	    /**
	     * An array of `Constraint` that are _direct_ children of this composite.
	     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
	     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
	     *
	     * @property constraints
	     * @type constraint[]
	     * @default []
	     */

	    /**
	     * An array of `Composite` that are _direct_ children of this composite.
	     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
	     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
	     *
	     * @property composites
	     * @type composite[]
	     * @default []
	     */

	})();


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
	*
	* @class Bounds
	*/

	var Bounds = {};

	module.exports = Bounds;

	(function() {

	    /**
	     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
	     * @method create
	     * @param {vertices} vertices
	     * @return {bounds} A new bounds object
	     */
	    Bounds.create = function(vertices) {
	        var bounds = { 
	            min: { x: 0, y: 0 }, 
	            max: { x: 0, y: 0 }
	        };

	        if (vertices)
	            Bounds.update(bounds, vertices);
	        
	        return bounds;
	    };

	    /**
	     * Updates bounds using the given vertices and extends the bounds given a velocity.
	     * @method update
	     * @param {bounds} bounds
	     * @param {vertices} vertices
	     * @param {vector} velocity
	     */
	    Bounds.update = function(bounds, vertices, velocity) {
	        bounds.min.x = Infinity;
	        bounds.max.x = -Infinity;
	        bounds.min.y = Infinity;
	        bounds.max.y = -Infinity;

	        for (var i = 0; i < vertices.length; i++) {
	            var vertex = vertices[i];
	            if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
	            if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
	            if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
	            if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
	        }
	        
	        if (velocity) {
	            if (velocity.x > 0) {
	                bounds.max.x += velocity.x;
	            } else {
	                bounds.min.x += velocity.x;
	            }
	            
	            if (velocity.y > 0) {
	                bounds.max.y += velocity.y;
	            } else {
	                bounds.min.y += velocity.y;
	            }
	        }
	    };

	    /**
	     * Returns true if the bounds contains the given point.
	     * @method contains
	     * @param {bounds} bounds
	     * @param {vector} point
	     * @return {boolean} True if the bounds contain the point, otherwise false
	     */
	    Bounds.contains = function(bounds, point) {
	        return point.x >= bounds.min.x && point.x <= bounds.max.x 
	               && point.y >= bounds.min.y && point.y <= bounds.max.y;
	    };

	    /**
	     * Returns true if the two bounds intersect.
	     * @method overlaps
	     * @param {bounds} boundsA
	     * @param {bounds} boundsB
	     * @return {boolean} True if the bounds overlap, otherwise false
	     */
	    Bounds.overlaps = function(boundsA, boundsB) {
	        return (boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x
	                && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y);
	    };

	    /**
	     * Translates the bounds by the given vector.
	     * @method translate
	     * @param {bounds} bounds
	     * @param {vector} vector
	     */
	    Bounds.translate = function(bounds, vector) {
	        bounds.min.x += vector.x;
	        bounds.max.x += vector.x;
	        bounds.min.y += vector.y;
	        bounds.max.y += vector.y;
	    };

	    /**
	     * Shifts the bounds to the given position.
	     * @method shift
	     * @param {bounds} bounds
	     * @param {vector} position
	     */
	    Bounds.shift = function(bounds, position) {
	        var deltaX = bounds.max.x - bounds.min.x,
	            deltaY = bounds.max.y - bounds.min.y;
	            
	        bounds.min.x = position.x;
	        bounds.max.x = position.x + deltaX;
	        bounds.min.y = position.y;
	        bounds.max.y = position.y + deltaY;
	    };
	    
	})();


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
	*
	* @class Grid
	*/

	var Grid = {};

	module.exports = Grid;

	var Pair = __webpack_require__(13);
	var Detector = __webpack_require__(15);
	var Common = __webpack_require__(6);

	(function() {

	    /**
	     * Creates a new grid.
	     * @method create
	     * @param {} options
	     * @return {grid} A new grid
	     */
	    Grid.create = function(options) {
	        var defaults = {
	            controller: Grid,
	            detector: Detector.collisions,
	            buckets: {},
	            pairs: {},
	            pairsList: [],
	            bucketWidth: 48,
	            bucketHeight: 48
	        };

	        return Common.extend(defaults, options);
	    };

	    /**
	     * The width of a single grid bucket.
	     *
	     * @property bucketWidth
	     * @type number
	     * @default 48
	     */

	    /**
	     * The height of a single grid bucket.
	     *
	     * @property bucketHeight
	     * @type number
	     * @default 48
	     */

	    /**
	     * Updates the grid.
	     * @method update
	     * @param {grid} grid
	     * @param {body[]} bodies
	     * @param {engine} engine
	     * @param {boolean} forceUpdate
	     */
	    Grid.update = function(grid, bodies, engine, forceUpdate) {
	        var i, col, row,
	            world = engine.world,
	            buckets = grid.buckets,
	            bucket,
	            bucketId,
	            gridChanged = false;

	        // @if DEBUG
	        var metrics = engine.metrics;
	        metrics.broadphaseTests = 0;
	        // @endif

	        for (i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            if (body.isSleeping && !forceUpdate)
	                continue;

	            // don't update out of world bodies
	            if (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x
	                || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y)
	                continue;

	            var newRegion = _getRegion(grid, body);

	            // if the body has changed grid region
	            if (!body.region || newRegion.id !== body.region.id || forceUpdate) {

	                // @if DEBUG
	                metrics.broadphaseTests += 1;
	                // @endif

	                if (!body.region || forceUpdate)
	                    body.region = newRegion;

	                var union = _regionUnion(newRegion, body.region);

	                // update grid buckets affected by region change
	                // iterate over the union of both regions
	                for (col = union.startCol; col <= union.endCol; col++) {
	                    for (row = union.startRow; row <= union.endRow; row++) {
	                        bucketId = _getBucketId(col, row);
	                        bucket = buckets[bucketId];

	                        var isInsideNewRegion = (col >= newRegion.startCol && col <= newRegion.endCol
	                                                && row >= newRegion.startRow && row <= newRegion.endRow);

	                        var isInsideOldRegion = (col >= body.region.startCol && col <= body.region.endCol
	                                                && row >= body.region.startRow && row <= body.region.endRow);

	                        // remove from old region buckets
	                        if (!isInsideNewRegion && isInsideOldRegion) {
	                            if (isInsideOldRegion) {
	                                if (bucket)
	                                    _bucketRemoveBody(grid, bucket, body);
	                            }
	                        }

	                        // add to new region buckets
	                        if (body.region === newRegion || (isInsideNewRegion && !isInsideOldRegion) || forceUpdate) {
	                            if (!bucket)
	                                bucket = _createBucket(buckets, bucketId);
	                            _bucketAddBody(grid, bucket, body);
	                        }
	                    }
	                }

	                // set the new region
	                body.region = newRegion;

	                // flag changes so we can update pairs
	                gridChanged = true;
	            }
	        }

	        // update pairs list only if pairs changed (i.e. a body changed region)
	        if (gridChanged)
	            grid.pairsList = _createActivePairsList(grid);
	    };

	    /**
	     * Clears the grid.
	     * @method clear
	     * @param {grid} grid
	     */
	    Grid.clear = function(grid) {
	        grid.buckets = {};
	        grid.pairs = {};
	        grid.pairsList = [];
	    };

	    /**
	     * Finds the union of two regions.
	     * @method _regionUnion
	     * @private
	     * @param {} regionA
	     * @param {} regionB
	     * @return {} region
	     */
	    var _regionUnion = function(regionA, regionB) {
	        var startCol = Math.min(regionA.startCol, regionB.startCol),
	            endCol = Math.max(regionA.endCol, regionB.endCol),
	            startRow = Math.min(regionA.startRow, regionB.startRow),
	            endRow = Math.max(regionA.endRow, regionB.endRow);

	        return _createRegion(startCol, endCol, startRow, endRow);
	    };

	    /**
	     * Gets the region a given body falls in for a given grid.
	     * @method _getRegion
	     * @private
	     * @param {} grid
	     * @param {} body
	     * @return {} region
	     */
	    var _getRegion = function(grid, body) {
	        var bounds = body.bounds,
	            startCol = Math.floor(bounds.min.x / grid.bucketWidth),
	            endCol = Math.floor(bounds.max.x / grid.bucketWidth),
	            startRow = Math.floor(bounds.min.y / grid.bucketHeight),
	            endRow = Math.floor(bounds.max.y / grid.bucketHeight);

	        return _createRegion(startCol, endCol, startRow, endRow);
	    };

	    /**
	     * Creates a region.
	     * @method _createRegion
	     * @private
	     * @param {} startCol
	     * @param {} endCol
	     * @param {} startRow
	     * @param {} endRow
	     * @return {} region
	     */
	    var _createRegion = function(startCol, endCol, startRow, endRow) {
	        return { 
	            id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
	            startCol: startCol, 
	            endCol: endCol, 
	            startRow: startRow, 
	            endRow: endRow 
	        };
	    };

	    /**
	     * Gets the bucket id at the given position.
	     * @method _getBucketId
	     * @private
	     * @param {} column
	     * @param {} row
	     * @return {string} bucket id
	     */
	    var _getBucketId = function(column, row) {
	        return column + ',' + row;
	    };

	    /**
	     * Creates a bucket.
	     * @method _createBucket
	     * @private
	     * @param {} buckets
	     * @param {} bucketId
	     * @return {} bucket
	     */
	    var _createBucket = function(buckets, bucketId) {
	        var bucket = buckets[bucketId] = [];
	        return bucket;
	    };

	    /**
	     * Adds a body to a bucket.
	     * @method _bucketAddBody
	     * @private
	     * @param {} grid
	     * @param {} bucket
	     * @param {} body
	     */
	    var _bucketAddBody = function(grid, bucket, body) {
	        // add new pairs
	        for (var i = 0; i < bucket.length; i++) {
	            var bodyB = bucket[i];

	            if (body.id === bodyB.id || (body.isStatic && bodyB.isStatic))
	                continue;

	            // keep track of the number of buckets the pair exists in
	            // important for Grid.update to work
	            var pairId = Pair.id(body, bodyB),
	                pair = grid.pairs[pairId];

	            if (pair) {
	                pair[2] += 1;
	            } else {
	                grid.pairs[pairId] = [body, bodyB, 1];
	            }
	        }

	        // add to bodies (after pairs, otherwise pairs with self)
	        bucket.push(body);
	    };

	    /**
	     * Removes a body from a bucket.
	     * @method _bucketRemoveBody
	     * @private
	     * @param {} grid
	     * @param {} bucket
	     * @param {} body
	     */
	    var _bucketRemoveBody = function(grid, bucket, body) {
	        // remove from bucket
	        bucket.splice(Common.indexOf(bucket, body), 1);

	        // update pair counts
	        for (var i = 0; i < bucket.length; i++) {
	            // keep track of the number of buckets the pair exists in
	            // important for _createActivePairsList to work
	            var bodyB = bucket[i],
	                pairId = Pair.id(body, bodyB),
	                pair = grid.pairs[pairId];

	            if (pair)
	                pair[2] -= 1;
	        }
	    };

	    /**
	     * Generates a list of the active pairs in the grid.
	     * @method _createActivePairsList
	     * @private
	     * @param {} grid
	     * @return [] pairs
	     */
	    var _createActivePairsList = function(grid) {
	        var pairKeys,
	            pair,
	            pairs = [];

	        // grid.pairs is used as a hashmap
	        pairKeys = Common.keys(grid.pairs);

	        // iterate over grid.pairs
	        for (var k = 0; k < pairKeys.length; k++) {
	            pair = grid.pairs[pairKeys[k]];

	            // if pair exists in at least one bucket
	            // it is a pair that needs further collision testing so push it
	            if (pair[2] > 0) {
	                pairs.push(pair);
	            } else {
	                delete grid.pairs[pairKeys[k]];
	            }
	        }

	        return pairs;
	    };
	    
	})();


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
	*
	* @class Pair
	*/

	var Pair = {};

	module.exports = Pair;

	var Contact = __webpack_require__(14);

	(function() {
	    
	    /**
	     * Creates a pair.
	     * @method create
	     * @param {collision} collision
	     * @param {number} timestamp
	     * @return {pair} A new pair
	     */
	    Pair.create = function(collision, timestamp) {
	        var bodyA = collision.bodyA,
	            bodyB = collision.bodyB,
	            parentA = collision.parentA,
	            parentB = collision.parentB;

	        var pair = {
	            id: Pair.id(bodyA, bodyB),
	            bodyA: bodyA,
	            bodyB: bodyB,
	            contacts: {},
	            activeContacts: [],
	            separation: 0,
	            isActive: true,
	            isSensor: bodyA.isSensor || bodyB.isSensor,
	            timeCreated: timestamp,
	            timeUpdated: timestamp,
	            inverseMass: parentA.inverseMass + parentB.inverseMass,
	            friction: Math.min(parentA.friction, parentB.friction),
	            frictionStatic: Math.max(parentA.frictionStatic, parentB.frictionStatic),
	            restitution: Math.max(parentA.restitution, parentB.restitution),
	            slop: Math.max(parentA.slop, parentB.slop)
	        };

	        Pair.update(pair, collision, timestamp);

	        return pair;
	    };

	    /**
	     * Updates a pair given a collision.
	     * @method update
	     * @param {pair} pair
	     * @param {collision} collision
	     * @param {number} timestamp
	     */
	    Pair.update = function(pair, collision, timestamp) {
	        var contacts = pair.contacts,
	            supports = collision.supports,
	            activeContacts = pair.activeContacts,
	            parentA = collision.parentA,
	            parentB = collision.parentB;
	        
	        pair.collision = collision;
	        pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
	        pair.friction = Math.min(parentA.friction, parentB.friction);
	        pair.frictionStatic = Math.max(parentA.frictionStatic, parentB.frictionStatic);
	        pair.restitution = Math.max(parentA.restitution, parentB.restitution);
	        pair.slop = Math.max(parentA.slop, parentB.slop);
	        activeContacts.length = 0;
	        
	        if (collision.collided) {
	            for (var i = 0; i < supports.length; i++) {
	                var support = supports[i],
	                    contactId = Contact.id(support),
	                    contact = contacts[contactId];

	                if (contact) {
	                    activeContacts.push(contact);
	                } else {
	                    activeContacts.push(contacts[contactId] = Contact.create(support));
	                }
	            }

	            pair.separation = collision.depth;
	            Pair.setActive(pair, true, timestamp);
	        } else {
	            if (pair.isActive === true)
	                Pair.setActive(pair, false, timestamp);
	        }
	    };
	    
	    /**
	     * Set a pair as active or inactive.
	     * @method setActive
	     * @param {pair} pair
	     * @param {bool} isActive
	     * @param {number} timestamp
	     */
	    Pair.setActive = function(pair, isActive, timestamp) {
	        if (isActive) {
	            pair.isActive = true;
	            pair.timeUpdated = timestamp;
	        } else {
	            pair.isActive = false;
	            pair.activeContacts.length = 0;
	        }
	    };

	    /**
	     * Get the id for the given pair.
	     * @method id
	     * @param {body} bodyA
	     * @param {body} bodyB
	     * @return {string} Unique pairId
	     */
	    Pair.id = function(bodyA, bodyB) {
	        if (bodyA.id < bodyB.id) {
	            return bodyA.id + '_' + bodyB.id;
	        } else {
	            return bodyB.id + '_' + bodyA.id;
	        }
	    };

	})();


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
	*
	* @class Contact
	*/

	var Contact = {};

	module.exports = Contact;

	(function() {

	    /**
	     * Creates a new contact.
	     * @method create
	     * @param {vertex} vertex
	     * @return {contact} A new contact
	     */
	    Contact.create = function(vertex) {
	        return {
	            id: Contact.id(vertex),
	            vertex: vertex,
	            normalImpulse: 0,
	            tangentImpulse: 0
	        };
	    };
	    
	    /**
	     * Generates a contact id.
	     * @method id
	     * @param {vertex} vertex
	     * @return {string} Unique contactID
	     */
	    Contact.id = function(vertex) {
	        return vertex.body.id + '_' + vertex.index;
	    };

	})();


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Detector` module contains methods for detecting collisions given a set of pairs.
	*
	* @class Detector
	*/

	// TODO: speculative contacts

	var Detector = {};

	module.exports = Detector;

	var SAT = __webpack_require__(16);
	var Pair = __webpack_require__(13);
	var Bounds = __webpack_require__(11);

	(function() {

	    /**
	     * Finds all collisions given a list of pairs.
	     * @method collisions
	     * @param {pair[]} broadphasePairs
	     * @param {engine} engine
	     * @return {array} collisions
	     */
	    Detector.collisions = function(broadphasePairs, engine) {
	        var collisions = [],
	            pairsTable = engine.pairs.table;

	        // @if DEBUG
	        var metrics = engine.metrics;
	        // @endif
	        
	        for (var i = 0; i < broadphasePairs.length; i++) {
	            var bodyA = broadphasePairs[i][0], 
	                bodyB = broadphasePairs[i][1];

	            if ((bodyA.isStatic || bodyA.isSleeping) && (bodyB.isStatic || bodyB.isSleeping))
	                continue;
	            
	            if (!Detector.canCollide(bodyA.collisionFilter, bodyB.collisionFilter))
	                continue;

	            // @if DEBUG
	            metrics.midphaseTests += 1;
	            // @endif

	            // mid phase
	            if (Bounds.overlaps(bodyA.bounds, bodyB.bounds)) {
	                for (var j = bodyA.parts.length > 1 ? 1 : 0; j < bodyA.parts.length; j++) {
	                    var partA = bodyA.parts[j];

	                    for (var k = bodyB.parts.length > 1 ? 1 : 0; k < bodyB.parts.length; k++) {
	                        var partB = bodyB.parts[k];

	                        if ((partA === bodyA && partB === bodyB) || Bounds.overlaps(partA.bounds, partB.bounds)) {
	                            // find a previous collision we could reuse
	                            var pairId = Pair.id(partA, partB),
	                                pair = pairsTable[pairId],
	                                previousCollision;

	                            if (pair && pair.isActive) {
	                                previousCollision = pair.collision;
	                            } else {
	                                previousCollision = null;
	                            }

	                            // narrow phase
	                            var collision = SAT.collides(partA, partB, previousCollision);

	                            // @if DEBUG
	                            metrics.narrowphaseTests += 1;
	                            if (collision.reused)
	                                metrics.narrowReuseCount += 1;
	                            // @endif

	                            if (collision.collided) {
	                                collisions.push(collision);
	                                // @if DEBUG
	                                metrics.narrowDetections += 1;
	                                // @endif
	                            }
	                        }
	                    }
	                }
	            }
	        }

	        return collisions;
	    };

	    /**
	     * Returns `true` if both supplied collision filters will allow a collision to occur.
	     * See `body.collisionFilter` for more information.
	     * @method canCollide
	     * @param {} filterA
	     * @param {} filterB
	     * @return {bool} `true` if collision can occur
	     */
	    Detector.canCollide = function(filterA, filterB) {
	        if (filterA.group === filterB.group && filterA.group !== 0)
	            return filterA.group > 0;

	        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
	    };

	})();


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
	*
	* @class SAT
	*/

	// TODO: true circles and curves

	var SAT = {};

	module.exports = SAT;

	var Vertices = __webpack_require__(4);
	var Vector = __webpack_require__(5);

	(function() {

	    /**
	     * Detect collision between two bodies using the Separating Axis Theorem.
	     * @method collides
	     * @param {body} bodyA
	     * @param {body} bodyB
	     * @param {collision} previousCollision
	     * @return {collision} collision
	     */
	    SAT.collides = function(bodyA, bodyB, previousCollision) {
	        var overlapAB,
	            overlapBA, 
	            minOverlap,
	            collision,
	            prevCol = previousCollision,
	            canReusePrevCol = false;

	        if (prevCol) {
	            // estimate total motion
	            var parentA = bodyA.parent,
	                parentB = bodyB.parent,
	                motion = parentA.speed * parentA.speed + parentA.angularSpeed * parentA.angularSpeed
	                       + parentB.speed * parentB.speed + parentB.angularSpeed * parentB.angularSpeed;

	            // we may be able to (partially) reuse collision result 
	            // but only safe if collision was resting
	            canReusePrevCol = prevCol && prevCol.collided && motion < 0.2;

	            // reuse collision object
	            collision = prevCol;
	        } else {
	            collision = { collided: false, bodyA: bodyA, bodyB: bodyB };
	        }

	        if (prevCol && canReusePrevCol) {
	            // if we can reuse the collision result
	            // we only need to test the previously found axis
	            var axisBodyA = collision.axisBody,
	                axisBodyB = axisBodyA === bodyA ? bodyB : bodyA,
	                axes = [axisBodyA.axes[prevCol.axisNumber]];

	            minOverlap = _overlapAxes(axisBodyA.vertices, axisBodyB.vertices, axes);
	            collision.reused = true;

	            if (minOverlap.overlap <= 0) {
	                collision.collided = false;
	                return collision;
	            }
	        } else {
	            // if we can't reuse a result, perform a full SAT test

	            overlapAB = _overlapAxes(bodyA.vertices, bodyB.vertices, bodyA.axes);

	            if (overlapAB.overlap <= 0) {
	                collision.collided = false;
	                return collision;
	            }

	            overlapBA = _overlapAxes(bodyB.vertices, bodyA.vertices, bodyB.axes);

	            if (overlapBA.overlap <= 0) {
	                collision.collided = false;
	                return collision;
	            }

	            if (overlapAB.overlap < overlapBA.overlap) {
	                minOverlap = overlapAB;
	                collision.axisBody = bodyA;
	            } else {
	                minOverlap = overlapBA;
	                collision.axisBody = bodyB;
	            }

	            // important for reuse later
	            collision.axisNumber = minOverlap.axisNumber;
	        }

	        collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
	        collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
	        collision.collided = true;
	        collision.normal = minOverlap.axis;
	        collision.depth = minOverlap.overlap;
	        collision.parentA = collision.bodyA.parent;
	        collision.parentB = collision.bodyB.parent;
	        
	        bodyA = collision.bodyA;
	        bodyB = collision.bodyB;

	        // ensure normal is facing away from bodyA
	        if (Vector.dot(collision.normal, Vector.sub(bodyB.position, bodyA.position)) > 0) 
	            collision.normal = Vector.neg(collision.normal);

	        collision.tangent = Vector.perp(collision.normal);

	        collision.penetration = { 
	            x: collision.normal.x * collision.depth, 
	            y: collision.normal.y * collision.depth 
	        };

	        // find support points, there is always either exactly one or two
	        var verticesB = _findSupports(bodyA, bodyB, collision.normal),
	            supports = collision.supports || [];
	        supports.length = 0;

	        // find the supports from bodyB that are inside bodyA
	        if (Vertices.contains(bodyA.vertices, verticesB[0]))
	            supports.push(verticesB[0]);

	        if (Vertices.contains(bodyA.vertices, verticesB[1]))
	            supports.push(verticesB[1]);

	        // find the supports from bodyA that are inside bodyB
	        if (supports.length < 2) {
	            var verticesA = _findSupports(bodyB, bodyA, Vector.neg(collision.normal));
	                
	            if (Vertices.contains(bodyB.vertices, verticesA[0]))
	                supports.push(verticesA[0]);

	            if (supports.length < 2 && Vertices.contains(bodyB.vertices, verticesA[1]))
	                supports.push(verticesA[1]);
	        }

	        // account for the edge case of overlapping but no vertex containment
	        if (supports.length < 1)
	            supports = [verticesB[0]];
	        
	        collision.supports = supports;

	        return collision;
	    };

	    /**
	     * Find the overlap between two sets of vertices.
	     * @method _overlapAxes
	     * @private
	     * @param {} verticesA
	     * @param {} verticesB
	     * @param {} axes
	     * @return result
	     */
	    var _overlapAxes = function(verticesA, verticesB, axes) {
	        var projectionA = Vector._temp[0], 
	            projectionB = Vector._temp[1],
	            result = { overlap: Number.MAX_VALUE },
	            overlap,
	            axis;

	        for (var i = 0; i < axes.length; i++) {
	            axis = axes[i];

	            _projectToAxis(projectionA, verticesA, axis);
	            _projectToAxis(projectionB, verticesB, axis);

	            overlap = Math.min(projectionA.max - projectionB.min, projectionB.max - projectionA.min);

	            if (overlap <= 0) {
	                result.overlap = overlap;
	                return result;
	            }

	            if (overlap < result.overlap) {
	                result.overlap = overlap;
	                result.axis = axis;
	                result.axisNumber = i;
	            }
	        }

	        return result;
	    };

	    /**
	     * Projects vertices on an axis and returns an interval.
	     * @method _projectToAxis
	     * @private
	     * @param {} projection
	     * @param {} vertices
	     * @param {} axis
	     */
	    var _projectToAxis = function(projection, vertices, axis) {
	        var min = Vector.dot(vertices[0], axis),
	            max = min;

	        for (var i = 1; i < vertices.length; i += 1) {
	            var dot = Vector.dot(vertices[i], axis);

	            if (dot > max) { 
	                max = dot; 
	            } else if (dot < min) { 
	                min = dot; 
	            }
	        }

	        projection.min = min;
	        projection.max = max;
	    };
	    
	    /**
	     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
	     * @method _findSupports
	     * @private
	     * @param {} bodyA
	     * @param {} bodyB
	     * @param {} normal
	     * @return [vector]
	     */
	    var _findSupports = function(bodyA, bodyB, normal) {
	        var nearestDistance = Number.MAX_VALUE,
	            vertexToBody = Vector._temp[0],
	            vertices = bodyB.vertices,
	            bodyAPosition = bodyA.position,
	            distance,
	            vertex,
	            vertexA,
	            vertexB;

	        // find closest vertex on bodyB
	        for (var i = 0; i < vertices.length; i++) {
	            vertex = vertices[i];
	            vertexToBody.x = vertex.x - bodyAPosition.x;
	            vertexToBody.y = vertex.y - bodyAPosition.y;
	            distance = -Vector.dot(normal, vertexToBody);

	            if (distance < nearestDistance) {
	                nearestDistance = distance;
	                vertexA = vertex;
	            }
	        }

	        // find next closest vertex using the two connected to it
	        var prevIndex = vertexA.index - 1 >= 0 ? vertexA.index - 1 : vertices.length - 1;
	        vertex = vertices[prevIndex];
	        vertexToBody.x = vertex.x - bodyAPosition.x;
	        vertexToBody.y = vertex.y - bodyAPosition.y;
	        nearestDistance = -Vector.dot(normal, vertexToBody);
	        vertexB = vertex;

	        var nextIndex = (vertexA.index + 1) % vertices.length;
	        vertex = vertices[nextIndex];
	        vertexToBody.x = vertex.x - bodyAPosition.x;
	        vertexToBody.y = vertex.y - bodyAPosition.y;
	        distance = -Vector.dot(normal, vertexToBody);
	        if (distance < nearestDistance) {
	            vertexB = vertex;
	        }

	        return [vertexA, vertexB];
	    };

	})();


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
	*
	* @class Axes
	*/

	var Axes = {};

	module.exports = Axes;

	var Vector = __webpack_require__(5);
	var Common = __webpack_require__(6);

	(function() {

	    /**
	     * Creates a new set of axes from the given vertices.
	     * @method fromVertices
	     * @param {vertices} vertices
	     * @return {axes} A new axes from the given vertices
	     */
	    Axes.fromVertices = function(vertices) {
	        var axes = {};

	        // find the unique axes, using edge normal gradients
	        for (var i = 0; i < vertices.length; i++) {
	            var j = (i + 1) % vertices.length, 
	                normal = Vector.normalise({ 
	                    x: vertices[j].y - vertices[i].y, 
	                    y: vertices[i].x - vertices[j].x
	                }),
	                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);
	            
	            // limit precision
	            gradient = gradient.toFixed(3).toString();
	            axes[gradient] = normal;
	        }

	        return Common.values(axes);
	    };

	    /**
	     * Rotates a set of axes by the given angle.
	     * @method rotate
	     * @param {axes} axes
	     * @param {number} angle
	     */
	    Axes.rotate = function(axes, angle) {
	        if (angle === 0)
	            return;
	        
	        var cos = Math.cos(angle),
	            sin = Math.sin(angle);

	        for (var i = 0; i < axes.length; i++) {
	            var axis = axes[i],
	                xx;
	            xx = axis.x * cos - axis.y * sin;
	            axis.y = axis.x * sin + axis.y * cos;
	            axis.x = xx;
	        }
	    };

	})();


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.World` module contains methods for creating and manipulating the world composite.
	* A `Matter.World` is a `Matter.Composite` body, which is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`.
	* A `Matter.World` has a few additional properties including `gravity` and `bounds`.
	* It is important to use the functions in the `Matter.Composite` module to modify the world composite, rather than directly modifying its properties.
	* There are also a few methods here that alias those in `Matter.Composite` for easier readability.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class World
	* @extends Composite
	*/

	var World = {};

	module.exports = World;

	var Composite = __webpack_require__(10);
	var Constraint = __webpack_require__(19);
	var Common = __webpack_require__(6);

	(function() {

	    /**
	     * Creates a new world composite. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @constructor
	     * @param {} options
	     * @return {world} A new world
	     */
	    World.create = function(options) {
	        var composite = Composite.create();

	        var defaults = {
	            label: 'World',
	            gravity: {
	                x: 0,
	                y: 1,
	                scale: 0.001
	            },
	            bounds: { 
	                min: { x: -Infinity, y: -Infinity }, 
	                max: { x: Infinity, y: Infinity } 
	            }
	        };
	        
	        return Common.extend(composite, defaults, options);
	    };

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * The gravity to apply on the world.
	     *
	     * @property gravity
	     * @type object
	     */

	    /**
	     * The gravity x component.
	     *
	     * @property gravity.x
	     * @type object
	     * @default 0
	     */

	    /**
	     * The gravity y component.
	     *
	     * @property gravity.y
	     * @type object
	     * @default 1
	     */

	    /**
	     * The gravity scale factor.
	     *
	     * @property gravity.scale
	     * @type object
	     * @default 0.001
	     */

	    /**
	     * A `Bounds` object that defines the world bounds for collision detection.
	     *
	     * @property bounds
	     * @type bounds
	     * @default { min: { x: -Infinity, y: -Infinity }, max: { x: Infinity, y: Infinity } }
	     */

	    // World is a Composite body
	    // see src/module/Outro.js for these aliases:
	    
	    /**
	     * An alias for Composite.clear
	     * @method clear
	     * @param {world} world
	     * @param {boolean} keepStatic
	     */

	    /**
	     * An alias for Composite.add
	     * @method addComposite
	     * @param {world} world
	     * @param {composite} composite
	     * @return {world} The original world with the objects from composite added
	     */
	    
	     /**
	      * An alias for Composite.addBody
	      * @method addBody
	      * @param {world} world
	      * @param {body} body
	      * @return {world} The original world with the body added
	      */

	     /**
	      * An alias for Composite.addConstraint
	      * @method addConstraint
	      * @param {world} world
	      * @param {constraint} constraint
	      * @return {world} The original world with the constraint added
	      */

	})();


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
	* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
	* The stiffness of constraints can be modified to create springs or elastic.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Constraint
	*/

	// TODO: fix instability issues with torque
	// TODO: linked constraints
	// TODO: breakable constraints
	// TODO: collision constraints
	// TODO: allow constrained bodies to sleep
	// TODO: handle 0 length constraints properly
	// TODO: impulse caching and warming

	var Constraint = {};

	module.exports = Constraint;

	var Vertices = __webpack_require__(4);
	var Vector = __webpack_require__(5);
	var Sleeping = __webpack_require__(7);
	var Bounds = __webpack_require__(11);
	var Axes = __webpack_require__(17);
	var Common = __webpack_require__(6);

	(function() {

	    var _minLength = 0.000001,
	        _minDifference = 0.001;

	    /**
	     * Creates a new constraint.
	     * All properties have default values, and many are pre-calculated automatically based on other properties.
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {} options
	     * @return {constraint} constraint
	     */
	    Constraint.create = function(options) {
	        var constraint = options;

	        // if bodies defined but no points, use body centre
	        if (constraint.bodyA && !constraint.pointA)
	            constraint.pointA = { x: 0, y: 0 };
	        if (constraint.bodyB && !constraint.pointB)
	            constraint.pointB = { x: 0, y: 0 };

	        // calculate static length using initial world space points
	        var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA,
	            initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB,
	            length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
	    
	        constraint.length = constraint.length || length || _minLength;

	        // render
	        var render = {
	            visible: true,
	            lineWidth: 2,
	            strokeStyle: '#666'
	        };
	        
	        constraint.render = Common.extend(render, constraint.render);

	        // option defaults
	        constraint.id = constraint.id || Common.nextId();
	        constraint.label = constraint.label || 'Constraint';
	        constraint.type = 'constraint';
	        constraint.stiffness = constraint.stiffness || 1;
	        constraint.angularStiffness = constraint.angularStiffness || 0;
	        constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
	        constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;

	        return constraint;
	    };

	    /**
	     * Solves all constraints in a list of collisions.
	     * @private
	     * @method solveAll
	     * @param {constraint[]} constraints
	     * @param {number} timeScale
	     */
	    Constraint.solveAll = function(constraints, timeScale) {
	        for (var i = 0; i < constraints.length; i++) {
	            Constraint.solve(constraints[i], timeScale);
	        }
	    };

	    /**
	     * Solves a distance constraint with Gauss-Siedel method.
	     * @private
	     * @method solve
	     * @param {constraint} constraint
	     * @param {number} timeScale
	     */
	    Constraint.solve = function(constraint, timeScale) {
	        var bodyA = constraint.bodyA,
	            bodyB = constraint.bodyB,
	            pointA = constraint.pointA,
	            pointB = constraint.pointB;

	        // update reference angle
	        if (bodyA && !bodyA.isStatic) {
	            constraint.pointA = Vector.rotate(pointA, bodyA.angle - constraint.angleA);
	            constraint.angleA = bodyA.angle;
	        }
	        
	        // update reference angle
	        if (bodyB && !bodyB.isStatic) {
	            constraint.pointB = Vector.rotate(pointB, bodyB.angle - constraint.angleB);
	            constraint.angleB = bodyB.angle;
	        }

	        var pointAWorld = pointA,
	            pointBWorld = pointB;

	        if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
	        if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);

	        if (!pointAWorld || !pointBWorld)
	            return;

	        var delta = Vector.sub(pointAWorld, pointBWorld),
	            currentLength = Vector.magnitude(delta);

	        // prevent singularity
	        if (currentLength === 0)
	            currentLength = _minLength;

	        // solve distance constraint with Gauss-Siedel method
	        var difference = (currentLength - constraint.length) / currentLength,
	            normal = Vector.div(delta, currentLength),
	            force = Vector.mult(delta, difference * 0.5 * constraint.stiffness * timeScale * timeScale);
	        
	        // if difference is very small, we can skip
	        if (Math.abs(1 - (currentLength / constraint.length)) < _minDifference * timeScale)
	            return;

	        var velocityPointA,
	            velocityPointB,
	            offsetA,
	            offsetB,
	            oAn,
	            oBn,
	            bodyADenom,
	            bodyBDenom;
	    
	        if (bodyA && !bodyA.isStatic) {
	            // point body offset
	            offsetA = { 
	                x: pointAWorld.x - bodyA.position.x + force.x, 
	                y: pointAWorld.y - bodyA.position.y + force.y
	            };
	            
	            // update velocity
	            bodyA.velocity.x = bodyA.position.x - bodyA.positionPrev.x;
	            bodyA.velocity.y = bodyA.position.y - bodyA.positionPrev.y;
	            bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
	            
	            // find point velocity and body mass
	            velocityPointA = Vector.add(bodyA.velocity, Vector.mult(Vector.perp(offsetA), bodyA.angularVelocity));
	            oAn = Vector.dot(offsetA, normal);
	            bodyADenom = bodyA.inverseMass + bodyA.inverseInertia * oAn * oAn;
	        } else {
	            velocityPointA = { x: 0, y: 0 };
	            bodyADenom = bodyA ? bodyA.inverseMass : 0;
	        }
	            
	        if (bodyB && !bodyB.isStatic) {
	            // point body offset
	            offsetB = { 
	                x: pointBWorld.x - bodyB.position.x - force.x, 
	                y: pointBWorld.y - bodyB.position.y - force.y 
	            };
	            
	            // update velocity
	            bodyB.velocity.x = bodyB.position.x - bodyB.positionPrev.x;
	            bodyB.velocity.y = bodyB.position.y - bodyB.positionPrev.y;
	            bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;

	            // find point velocity and body mass
	            velocityPointB = Vector.add(bodyB.velocity, Vector.mult(Vector.perp(offsetB), bodyB.angularVelocity));
	            oBn = Vector.dot(offsetB, normal);
	            bodyBDenom = bodyB.inverseMass + bodyB.inverseInertia * oBn * oBn;
	        } else {
	            velocityPointB = { x: 0, y: 0 };
	            bodyBDenom = bodyB ? bodyB.inverseMass : 0;
	        }
	        
	        var relativeVelocity = Vector.sub(velocityPointB, velocityPointA),
	            normalImpulse = Vector.dot(normal, relativeVelocity) / (bodyADenom + bodyBDenom);
	    
	        if (normalImpulse > 0) normalImpulse = 0;
	    
	        var normalVelocity = {
	            x: normal.x * normalImpulse, 
	            y: normal.y * normalImpulse
	        };

	        var torque;
	 
	        if (bodyA && !bodyA.isStatic) {
	            torque = Vector.cross(offsetA, normalVelocity) * bodyA.inverseInertia * (1 - constraint.angularStiffness);

	            // keep track of applied impulses for post solving
	            bodyA.constraintImpulse.x -= force.x;
	            bodyA.constraintImpulse.y -= force.y;
	            bodyA.constraintImpulse.angle += torque;

	            // apply forces
	            bodyA.position.x -= force.x;
	            bodyA.position.y -= force.y;
	            bodyA.angle += torque;
	        }

	        if (bodyB && !bodyB.isStatic) {
	            torque = Vector.cross(offsetB, normalVelocity) * bodyB.inverseInertia * (1 - constraint.angularStiffness);

	            // keep track of applied impulses for post solving
	            bodyB.constraintImpulse.x += force.x;
	            bodyB.constraintImpulse.y += force.y;
	            bodyB.constraintImpulse.angle -= torque;
	            
	            // apply forces
	            bodyB.position.x += force.x;
	            bodyB.position.y += force.y;
	            bodyB.angle -= torque;
	        }

	    };

	    /**
	     * Performs body updates required after solving constraints.
	     * @private
	     * @method postSolveAll
	     * @param {body[]} bodies
	     */
	    Constraint.postSolveAll = function(bodies) {
	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                impulse = body.constraintImpulse;

	            if (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
	                continue;
	            }

	            Sleeping.set(body, false);

	            // update geometry and reset
	            for (var j = 0; j < body.parts.length; j++) {
	                var part = body.parts[j];
	                
	                Vertices.translate(part.vertices, impulse);

	                if (j > 0) {
	                    part.position.x += impulse.x;
	                    part.position.y += impulse.y;
	                }

	                if (impulse.angle !== 0) {
	                    Vertices.rotate(part.vertices, impulse.angle, body.position);
	                    Axes.rotate(part.axes, impulse.angle);
	                    if (j > 0) {
	                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
	                    }
	                }

	                Bounds.update(part.bounds, part.vertices, body.velocity);
	            }

	            impulse.angle = 0;
	            impulse.x = 0;
	            impulse.y = 0;
	        }
	    };

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
	     *
	     * @property id
	     * @type number
	     */

	    /**
	     * A `String` denoting the type of object.
	     *
	     * @property type
	     * @type string
	     * @default "constraint"
	     * @readOnly
	     */

	    /**
	     * An arbitrary `String` name to help the user identify and manage bodies.
	     *
	     * @property label
	     * @type string
	     * @default "Constraint"
	     */

	    /**
	     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
	     *
	     * @property render
	     * @type object
	     */

	    /**
	     * A flag that indicates if the constraint should be rendered.
	     *
	     * @property render.visible
	     * @type boolean
	     * @default true
	     */

	    /**
	     * A `Number` that defines the line width to use when rendering the constraint outline.
	     * A value of `0` means no outline will be rendered.
	     *
	     * @property render.lineWidth
	     * @type number
	     * @default 2
	     */

	    /**
	     * A `String` that defines the stroke style to use when rendering the constraint outline.
	     * It is the same as when using a canvas, so it accepts CSS style property values.
	     *
	     * @property render.strokeStyle
	     * @type string
	     * @default a random colour
	     */

	    /**
	     * The first possible `Body` that this constraint is attached to.
	     *
	     * @property bodyA
	     * @type body
	     * @default null
	     */

	    /**
	     * The second possible `Body` that this constraint is attached to.
	     *
	     * @property bodyB
	     * @type body
	     * @default null
	     */

	    /**
	     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
	     *
	     * @property pointA
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
	     *
	     * @property pointB
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
	     * A value of `1` means the constraint should be very stiff.
	     * A value of `0.2` means the constraint acts like a soft spring.
	     *
	     * @property stiffness
	     * @type number
	     * @default 1
	     */

	    /**
	     * A `Number` that specifies the target resting length of the constraint. 
	     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
	     *
	     * @property length
	     * @type number
	     */

	})();


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
	*
	* @class Pairs
	*/

	var Pairs = {};

	module.exports = Pairs;

	var Pair = __webpack_require__(13);
	var Common = __webpack_require__(6);

	(function() {
	    
	    var _pairMaxIdleLife = 1000;

	    /**
	     * Creates a new pairs structure.
	     * @method create
	     * @param {object} options
	     * @return {pairs} A new pairs structure
	     */
	    Pairs.create = function(options) {
	        return Common.extend({ 
	            table: {},
	            list: [],
	            collisionStart: [],
	            collisionActive: [],
	            collisionEnd: []
	        }, options);
	    };

	    /**
	     * Updates pairs given a list of collisions.
	     * @method update
	     * @param {object} pairs
	     * @param {collision[]} collisions
	     * @param {number} timestamp
	     */
	    Pairs.update = function(pairs, collisions, timestamp) {
	        var pairsList = pairs.list,
	            pairsTable = pairs.table,
	            collisionStart = pairs.collisionStart,
	            collisionEnd = pairs.collisionEnd,
	            collisionActive = pairs.collisionActive,
	            activePairIds = [],
	            collision,
	            pairId,
	            pair,
	            i;

	        // clear collision state arrays, but maintain old reference
	        collisionStart.length = 0;
	        collisionEnd.length = 0;
	        collisionActive.length = 0;

	        for (i = 0; i < collisions.length; i++) {
	            collision = collisions[i];

	            if (collision.collided) {
	                pairId = Pair.id(collision.bodyA, collision.bodyB);
	                activePairIds.push(pairId);

	                pair = pairsTable[pairId];
	                
	                if (pair) {
	                    // pair already exists (but may or may not be active)
	                    if (pair.isActive) {
	                        // pair exists and is active
	                        collisionActive.push(pair);
	                    } else {
	                        // pair exists but was inactive, so a collision has just started again
	                        collisionStart.push(pair);
	                    }

	                    // update the pair
	                    Pair.update(pair, collision, timestamp);
	                } else {
	                    // pair did not exist, create a new pair
	                    pair = Pair.create(collision, timestamp);
	                    pairsTable[pairId] = pair;

	                    // push the new pair
	                    collisionStart.push(pair);
	                    pairsList.push(pair);
	                }
	            }
	        }

	        // deactivate previously active pairs that are now inactive
	        for (i = 0; i < pairsList.length; i++) {
	            pair = pairsList[i];
	            if (pair.isActive && Common.indexOf(activePairIds, pair.id) === -1) {
	                Pair.setActive(pair, false, timestamp);
	                collisionEnd.push(pair);
	            }
	        }
	    };
	    
	    /**
	     * Finds and removes pairs that have been inactive for a set amount of time.
	     * @method removeOld
	     * @param {object} pairs
	     * @param {number} timestamp
	     */
	    Pairs.removeOld = function(pairs, timestamp) {
	        var pairsList = pairs.list,
	            pairsTable = pairs.table,
	            indexesToRemove = [],
	            pair,
	            collision,
	            pairIndex,
	            i;

	        for (i = 0; i < pairsList.length; i++) {
	            pair = pairsList[i];
	            collision = pair.collision;
	            
	            // never remove sleeping pairs
	            if (collision.bodyA.isSleeping || collision.bodyB.isSleeping) {
	                pair.timeUpdated = timestamp;
	                continue;
	            }

	            // if pair is inactive for too long, mark it to be removed
	            if (timestamp - pair.timeUpdated > _pairMaxIdleLife) {
	                indexesToRemove.push(i);
	            }
	        }

	        // remove marked pairs
	        for (i = 0; i < indexesToRemove.length; i++) {
	            pairIndex = indexesToRemove[i] - i;
	            pair = pairsList[pairIndex];
	            delete pairsTable[pair.id];
	            pairsList.splice(pairIndex, 1);
	        }
	    };

	    /**
	     * Clears the given pairs structure.
	     * @method clear
	     * @param {pairs} pairs
	     * @return {pairs} pairs
	     */
	    Pairs.clear = function(pairs) {
	        pairs.table = {};
	        pairs.list.length = 0;
	        pairs.collisionStart.length = 0;
	        pairs.collisionActive.length = 0;
	        pairs.collisionEnd.length = 0;
	        return pairs;
	    };

	})();


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Query` module contains methods for performing collision queries.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Query
	*/

	var Query = {};

	module.exports = Query;

	var Vector = __webpack_require__(5);
	var SAT = __webpack_require__(16);
	var Bounds = __webpack_require__(11);
	var Bodies = __webpack_require__(22);
	var Vertices = __webpack_require__(4);

	(function() {

	    /**
	     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
	     * @method ray
	     * @param {body[]} bodies
	     * @param {vector} startPoint
	     * @param {vector} endPoint
	     * @param {number} [rayWidth]
	     * @return {object[]} Collisions
	     */
	    Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
	        rayWidth = rayWidth || 1e-100;

	        var rayAngle = Vector.angle(startPoint, endPoint),
	            rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)),
	            rayX = (endPoint.x + startPoint.x) * 0.5,
	            rayY = (endPoint.y + startPoint.y) * 0.5,
	            ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }),
	            collisions = [];

	        for (var i = 0; i < bodies.length; i++) {
	            var bodyA = bodies[i];
	            
	            if (Bounds.overlaps(bodyA.bounds, ray.bounds)) {
	                for (var j = bodyA.parts.length === 1 ? 0 : 1; j < bodyA.parts.length; j++) {
	                    var part = bodyA.parts[j];

	                    if (Bounds.overlaps(part.bounds, ray.bounds)) {
	                        var collision = SAT.collides(part, ray);
	                        if (collision.collided) {
	                            collision.body = collision.bodyA = collision.bodyB = bodyA;
	                            collisions.push(collision);
	                            break;
	                        }
	                    }
	                }
	            }
	        }

	        return collisions;
	    };

	    /**
	     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
	     * @method region
	     * @param {body[]} bodies
	     * @param {bounds} bounds
	     * @param {bool} [outside=false]
	     * @return {body[]} The bodies matching the query
	     */
	    Query.region = function(bodies, bounds, outside) {
	        var result = [];

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                overlaps = Bounds.overlaps(body.bounds, bounds);
	            if ((overlaps && !outside) || (!overlaps && outside))
	                result.push(body);
	        }

	        return result;
	    };

	    /**
	     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
	     * @method point
	     * @param {body[]} bodies
	     * @param {vector} point
	     * @return {body[]} The bodies matching the query
	     */
	    Query.point = function(bodies, point) {
	        var result = [];

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];
	            
	            if (Bounds.contains(body.bounds, point)) {
	                for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
	                    var part = body.parts[j];

	                    if (Bounds.contains(part.bounds, point)
	                        && Vertices.contains(part.vertices, point)) {
	                        result.push(body);
	                        break;
	                    }
	                }
	            }
	        }

	        return result;
	    };

	})();


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Bodies` module contains factory methods for creating rigid body models 
	* with commonly used body configurations (such as rectangles, circles and other polygons).
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Bodies
	*/

	// TODO: true circle bodies

	var Bodies = {};

	module.exports = Bodies;

	var Vertices = __webpack_require__(4);
	var Common = __webpack_require__(6);
	var Body = __webpack_require__(3);
	var Bounds = __webpack_require__(11);
	var Vector = __webpack_require__(5);

	(function() {

	    /**
	     * Creates a new rigid body model with a rectangle hull. 
	     * The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
	     * @method rectangle
	     * @param {number} x
	     * @param {number} y
	     * @param {number} width
	     * @param {number} height
	     * @param {object} [options]
	     * @return {body} A new rectangle body
	     */
	    Bodies.rectangle = function(x, y, width, height, options) {
	        options = options || {};

	        var rectangle = { 
	            label: 'Rectangle Body',
	            position: { x: x, y: y },
	            vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
	        };

	        if (options.chamfer) {
	            var chamfer = options.chamfer;
	            rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, 
	                                    chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
	            delete options.chamfer;
	        }

	        return Body.create(Common.extend({}, rectangle, options));
	    };
	    
	    /**
	     * Creates a new rigid body model with a trapezoid hull. 
	     * The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
	     * @method trapezoid
	     * @param {number} x
	     * @param {number} y
	     * @param {number} width
	     * @param {number} height
	     * @param {number} slope
	     * @param {object} [options]
	     * @return {body} A new trapezoid body
	     */
	    Bodies.trapezoid = function(x, y, width, height, slope, options) {
	        options = options || {};

	        slope *= 0.5;
	        var roof = (1 - (slope * 2)) * width;
	        
	        var x1 = width * slope,
	            x2 = x1 + roof,
	            x3 = x2 + x1,
	            verticesPath;

	        if (slope < 0.5) {
	            verticesPath = 'L 0 0 L ' + x1 + ' ' + (-height) + ' L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
	        } else {
	            verticesPath = 'L 0 0 L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
	        }

	        var trapezoid = { 
	            label: 'Trapezoid Body',
	            position: { x: x, y: y },
	            vertices: Vertices.fromPath(verticesPath)
	        };

	        if (options.chamfer) {
	            var chamfer = options.chamfer;
	            trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, 
	                                    chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
	            delete options.chamfer;
	        }

	        return Body.create(Common.extend({}, trapezoid, options));
	    };

	    /**
	     * Creates a new rigid body model with a circle hull. 
	     * The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
	     * @method circle
	     * @param {number} x
	     * @param {number} y
	     * @param {number} radius
	     * @param {object} [options]
	     * @param {number} [maxSides]
	     * @return {body} A new circle body
	     */
	    Bodies.circle = function(x, y, radius, options, maxSides) {
	        options = options || {};

	        var circle = {
	            label: 'Circle Body',
	            circleRadius: radius
	        };
	        
	        // approximate circles with polygons until true circles implemented in SAT
	        maxSides = maxSides || 25;
	        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

	        // optimisation: always use even number of sides (half the number of unique axes)
	        if (sides % 2 === 1)
	            sides += 1;

	        return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
	    };

	    /**
	     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
	     * The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
	     * @method polygon
	     * @param {number} x
	     * @param {number} y
	     * @param {number} sides
	     * @param {number} radius
	     * @param {object} [options]
	     * @return {body} A new regular polygon body
	     */
	    Bodies.polygon = function(x, y, sides, radius, options) {
	        options = options || {};

	        if (sides < 3)
	            return Bodies.circle(x, y, radius, options);

	        var theta = 2 * Math.PI / sides,
	            path = '',
	            offset = theta * 0.5;

	        for (var i = 0; i < sides; i += 1) {
	            var angle = offset + (i * theta),
	                xx = Math.cos(angle) * radius,
	                yy = Math.sin(angle) * radius;

	            path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
	        }

	        var polygon = { 
	            label: 'Polygon Body',
	            position: { x: x, y: y },
	            vertices: Vertices.fromPath(path)
	        };

	        if (options.chamfer) {
	            var chamfer = options.chamfer;
	            polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
	                                    chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
	            delete options.chamfer;
	        }

	        return Body.create(Common.extend({}, polygon, options));
	    };

	    /**
	     * Creates a body using the supplied vertices (or an array containing multiple sets of vertices).
	     * If the vertices are convex, they will pass through as supplied.
	     * Otherwise if the vertices are concave, they will be decomposed if [poly-decomp.js](https://github.com/schteppe/poly-decomp.js) is available.
	     * Note that this process is not guaranteed to support complex sets of vertices (e.g. those with holes may fail).
	     * By default the decomposition will discard collinear edges (to improve performance).
	     * It can also optionally discard any parts that have an area less than `minimumArea`.
	     * If the vertices can not be decomposed, the result will fall back to using the convex hull.
	     * The options parameter is an object that specifies any `Matter.Body` properties you wish to override the defaults.
	     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
	     * @method fromVertices
	     * @param {number} x
	     * @param {number} y
	     * @param [[vector]] vertexSets
	     * @param {object} [options]
	     * @param {bool} [flagInternal=false]
	     * @param {number} [removeCollinear=0.01]
	     * @param {number} [minimumArea=10]
	     * @return {body}
	     */
	    Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea) {
	        var body,
	            parts,
	            isConvex,
	            vertices,
	            i,
	            j,
	            k,
	            v,
	            z;

	        options = options || {};
	        parts = [];

	        flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
	        removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
	        minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;

	        if (!window.decomp) {
	            Common.log('Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull.', 'warn');
	        }

	        // ensure vertexSets is an array of arrays
	        if (!Common.isArray(vertexSets[0])) {
	            vertexSets = [vertexSets];
	        }

	        for (v = 0; v < vertexSets.length; v += 1) {
	            vertices = vertexSets[v];
	            isConvex = Vertices.isConvex(vertices);

	            if (isConvex || !window.decomp) {
	                if (isConvex) {
	                    vertices = Vertices.clockwiseSort(vertices);
	                } else {
	                    // fallback to convex hull when decomposition is not possible
	                    vertices = Vertices.hull(vertices);
	                }

	                parts.push({
	                    position: { x: x, y: y },
	                    vertices: vertices
	                });
	            } else {
	                // initialise a decomposition
	                var concave = new decomp.Polygon();
	                for (i = 0; i < vertices.length; i++) {
	                    concave.vertices.push([vertices[i].x, vertices[i].y]);
	                }

	                // vertices are concave and simple, we can decompose into parts
	                concave.makeCCW();
	                if (removeCollinear !== false)
	                    concave.removeCollinearPoints(removeCollinear);

	                // use the quick decomposition algorithm (Bayazit)
	                var decomposed = concave.quickDecomp();

	                // for each decomposed chunk
	                for (i = 0; i < decomposed.length; i++) {
	                    var chunk = decomposed[i],
	                        chunkVertices = [];

	                    // convert vertices into the correct structure
	                    for (j = 0; j < chunk.vertices.length; j++) {
	                        chunkVertices.push({ x: chunk.vertices[j][0], y: chunk.vertices[j][1] });
	                    }

	                    // skip small chunks
	                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
	                        continue;

	                    // create a compound part
	                    parts.push({
	                        position: Vertices.centre(chunkVertices),
	                        vertices: chunkVertices
	                    });
	                }
	            }
	        }

	        // create body parts
	        for (i = 0; i < parts.length; i++) {
	            parts[i] = Body.create(Common.extend(parts[i], options));
	        }

	        // flag internal edges (coincident part edges)
	        if (flagInternal) {
	            var coincident_max_dist = 5;

	            for (i = 0; i < parts.length; i++) {
	                var partA = parts[i];

	                for (j = i + 1; j < parts.length; j++) {
	                    var partB = parts[j];

	                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
	                        var pav = partA.vertices,
	                            pbv = partB.vertices;

	                        // iterate vertices of both parts
	                        for (k = 0; k < partA.vertices.length; k++) {
	                            for (z = 0; z < partB.vertices.length; z++) {
	                                // find distances between the vertices
	                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
	                                    db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

	                                // if both vertices are very close, consider the edge concident (internal)
	                                if (da < coincident_max_dist && db < coincident_max_dist) {
	                                    pav[k].isInternal = true;
	                                    pbv[z].isInternal = true;
	                                }
	                            }
	                        }

	                    }
	                }
	            }
	        }

	        if (parts.length > 1) {
	            // create the parent body to be returned, that contains generated compound parts
	            body = Body.create(Common.extend({ parts: parts.slice(0) }, options));
	            Body.setPosition(body, { x: x, y: y });

	            return body;
	        } else {
	            return parts[0];
	        }
	    };

	})();

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Resolver` module contains methods for resolving collision pairs.
	*
	* @class Resolver
	*/

	var Resolver = {};

	module.exports = Resolver;

	var Vertices = __webpack_require__(4);
	var Vector = __webpack_require__(5);
	var Common = __webpack_require__(6);
	var Bounds = __webpack_require__(11);

	(function() {

	    Resolver._restingThresh = 4;
	    Resolver._restingThreshTangent = 6;
	    Resolver._positionDampen = 0.9;
	    Resolver._positionWarming = 0.8;
	    Resolver._frictionNormalMultiplier = 5;

	    /**
	     * Prepare pairs for position solving.
	     * @method preSolvePosition
	     * @param {pair[]} pairs
	     */
	    Resolver.preSolvePosition = function(pairs) {
	        var i,
	            pair,
	            activeCount;

	        // find total contacts on each body
	        for (i = 0; i < pairs.length; i++) {
	            pair = pairs[i];
	            
	            if (!pair.isActive)
	                continue;
	            
	            activeCount = pair.activeContacts.length;
	            pair.collision.parentA.totalContacts += activeCount;
	            pair.collision.parentB.totalContacts += activeCount;
	        }
	    };

	    /**
	     * Find a solution for pair positions.
	     * @method solvePosition
	     * @param {pair[]} pairs
	     * @param {number} timeScale
	     */
	    Resolver.solvePosition = function(pairs, timeScale) {
	        var i,
	            pair,
	            collision,
	            bodyA,
	            bodyB,
	            normal,
	            bodyBtoA,
	            contactShare,
	            positionImpulse,
	            contactCount = {},
	            tempA = Vector._temp[0],
	            tempB = Vector._temp[1],
	            tempC = Vector._temp[2],
	            tempD = Vector._temp[3];

	        // find impulses required to resolve penetration
	        for (i = 0; i < pairs.length; i++) {
	            pair = pairs[i];
	            
	            if (!pair.isActive || pair.isSensor)
	                continue;

	            collision = pair.collision;
	            bodyA = collision.parentA;
	            bodyB = collision.parentB;
	            normal = collision.normal;

	            // get current separation between body edges involved in collision
	            bodyBtoA = Vector.sub(Vector.add(bodyB.positionImpulse, bodyB.position, tempA), 
	                                    Vector.add(bodyA.positionImpulse, 
	                                        Vector.sub(bodyB.position, collision.penetration, tempB), tempC), tempD);

	            pair.separation = Vector.dot(normal, bodyBtoA);
	        }
	        
	        for (i = 0; i < pairs.length; i++) {
	            pair = pairs[i];

	            if (!pair.isActive || pair.isSensor || pair.separation < 0)
	                continue;
	            
	            collision = pair.collision;
	            bodyA = collision.parentA;
	            bodyB = collision.parentB;
	            normal = collision.normal;
	            positionImpulse = (pair.separation - pair.slop) * timeScale;

	            if (bodyA.isStatic || bodyB.isStatic)
	                positionImpulse *= 2;
	            
	            if (!(bodyA.isStatic || bodyA.isSleeping)) {
	                contactShare = Resolver._positionDampen / bodyA.totalContacts;
	                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
	                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
	            }

	            if (!(bodyB.isStatic || bodyB.isSleeping)) {
	                contactShare = Resolver._positionDampen / bodyB.totalContacts;
	                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
	                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
	            }
	        }
	    };

	    /**
	     * Apply position resolution.
	     * @method postSolvePosition
	     * @param {body[]} bodies
	     */
	    Resolver.postSolvePosition = function(bodies) {
	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            // reset contact count
	            body.totalContacts = 0;

	            if (body.positionImpulse.x !== 0 || body.positionImpulse.y !== 0) {
	                // update body geometry
	                for (var j = 0; j < body.parts.length; j++) {
	                    var part = body.parts[j];
	                    Vertices.translate(part.vertices, body.positionImpulse);
	                    Bounds.update(part.bounds, part.vertices, body.velocity);
	                    part.position.x += body.positionImpulse.x;
	                    part.position.y += body.positionImpulse.y;
	                }

	                // move the body without changing velocity
	                body.positionPrev.x += body.positionImpulse.x;
	                body.positionPrev.y += body.positionImpulse.y;

	                if (Vector.dot(body.positionImpulse, body.velocity) < 0) {
	                    // reset cached impulse if the body has velocity along it
	                    body.positionImpulse.x = 0;
	                    body.positionImpulse.y = 0;
	                } else {
	                    // warm the next iteration
	                    body.positionImpulse.x *= Resolver._positionWarming;
	                    body.positionImpulse.y *= Resolver._positionWarming;
	                }
	            }
	        }
	    };

	    /**
	     * Prepare pairs for velocity solving.
	     * @method preSolveVelocity
	     * @param {pair[]} pairs
	     */
	    Resolver.preSolveVelocity = function(pairs) {
	        var i,
	            j,
	            pair,
	            contacts,
	            collision,
	            bodyA,
	            bodyB,
	            normal,
	            tangent,
	            contact,
	            contactVertex,
	            normalImpulse,
	            tangentImpulse,
	            offset,
	            impulse = Vector._temp[0],
	            tempA = Vector._temp[1];
	        
	        for (i = 0; i < pairs.length; i++) {
	            pair = pairs[i];
	            
	            if (!pair.isActive || pair.isSensor)
	                continue;
	            
	            contacts = pair.activeContacts;
	            collision = pair.collision;
	            bodyA = collision.parentA;
	            bodyB = collision.parentB;
	            normal = collision.normal;
	            tangent = collision.tangent;

	            // resolve each contact
	            for (j = 0; j < contacts.length; j++) {
	                contact = contacts[j];
	                contactVertex = contact.vertex;
	                normalImpulse = contact.normalImpulse;
	                tangentImpulse = contact.tangentImpulse;

	                if (normalImpulse !== 0 || tangentImpulse !== 0) {
	                    // total impulse from contact
	                    impulse.x = (normal.x * normalImpulse) + (tangent.x * tangentImpulse);
	                    impulse.y = (normal.y * normalImpulse) + (tangent.y * tangentImpulse);
	                    
	                    // apply impulse from contact
	                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
	                        offset = Vector.sub(contactVertex, bodyA.position, tempA);
	                        bodyA.positionPrev.x += impulse.x * bodyA.inverseMass;
	                        bodyA.positionPrev.y += impulse.y * bodyA.inverseMass;
	                        bodyA.anglePrev += Vector.cross(offset, impulse) * bodyA.inverseInertia;
	                    }

	                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
	                        offset = Vector.sub(contactVertex, bodyB.position, tempA);
	                        bodyB.positionPrev.x -= impulse.x * bodyB.inverseMass;
	                        bodyB.positionPrev.y -= impulse.y * bodyB.inverseMass;
	                        bodyB.anglePrev -= Vector.cross(offset, impulse) * bodyB.inverseInertia;
	                    }
	                }
	            }
	        }
	    };

	    /**
	     * Find a solution for pair velocities.
	     * @method solveVelocity
	     * @param {pair[]} pairs
	     * @param {number} timeScale
	     */
	    Resolver.solveVelocity = function(pairs, timeScale) {
	        var timeScaleSquared = timeScale * timeScale,
	            impulse = Vector._temp[0],
	            tempA = Vector._temp[1],
	            tempB = Vector._temp[2],
	            tempC = Vector._temp[3],
	            tempD = Vector._temp[4],
	            tempE = Vector._temp[5];
	        
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            
	            if (!pair.isActive || pair.isSensor)
	                continue;
	            
	            var collision = pair.collision,
	                bodyA = collision.parentA,
	                bodyB = collision.parentB,
	                normal = collision.normal,
	                tangent = collision.tangent,
	                contacts = pair.activeContacts,
	                contactShare = 1 / contacts.length;

	            // update body velocities
	            bodyA.velocity.x = bodyA.position.x - bodyA.positionPrev.x;
	            bodyA.velocity.y = bodyA.position.y - bodyA.positionPrev.y;
	            bodyB.velocity.x = bodyB.position.x - bodyB.positionPrev.x;
	            bodyB.velocity.y = bodyB.position.y - bodyB.positionPrev.y;
	            bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
	            bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;

	            // resolve each contact
	            for (var j = 0; j < contacts.length; j++) {
	                var contact = contacts[j],
	                    contactVertex = contact.vertex,
	                    offsetA = Vector.sub(contactVertex, bodyA.position, tempA),
	                    offsetB = Vector.sub(contactVertex, bodyB.position, tempB),
	                    velocityPointA = Vector.add(bodyA.velocity, Vector.mult(Vector.perp(offsetA), bodyA.angularVelocity), tempC),
	                    velocityPointB = Vector.add(bodyB.velocity, Vector.mult(Vector.perp(offsetB), bodyB.angularVelocity), tempD), 
	                    relativeVelocity = Vector.sub(velocityPointA, velocityPointB, tempE),
	                    normalVelocity = Vector.dot(normal, relativeVelocity);

	                var tangentVelocity = Vector.dot(tangent, relativeVelocity),
	                    tangentSpeed = Math.abs(tangentVelocity),
	                    tangentVelocityDirection = Common.sign(tangentVelocity);

	                // raw impulses
	                var normalImpulse = (1 + pair.restitution) * normalVelocity,
	                    normalForce = Common.clamp(pair.separation + normalVelocity, 0, 1) * Resolver._frictionNormalMultiplier;

	                // coulomb friction
	                var tangentImpulse = tangentVelocity,
	                    maxFriction = Infinity;

	                if (tangentSpeed > pair.friction * pair.frictionStatic * normalForce * timeScaleSquared) {
	                    maxFriction = tangentSpeed;
	                    tangentImpulse = Common.clamp(
	                        pair.friction * tangentVelocityDirection * timeScaleSquared,
	                        -maxFriction, maxFriction
	                    );
	                }

	                // modify impulses accounting for mass, inertia and offset
	                var oAcN = Vector.cross(offsetA, normal),
	                    oBcN = Vector.cross(offsetB, normal),
	                    share = contactShare / (bodyA.inverseMass + bodyB.inverseMass + bodyA.inverseInertia * oAcN * oAcN  + bodyB.inverseInertia * oBcN * oBcN);

	                normalImpulse *= share;
	                tangentImpulse *= share;

	                // handle high velocity and resting collisions separately
	                if (normalVelocity < 0 && normalVelocity * normalVelocity > Resolver._restingThresh * timeScaleSquared) {
	                    // high normal velocity so clear cached contact normal impulse
	                    contact.normalImpulse = 0;
	                } else {
	                    // solve resting collision constraints using Erin Catto's method (GDC08)
	                    // impulse constraint tends to 0
	                    var contactNormalImpulse = contact.normalImpulse;
	                    contact.normalImpulse = Math.min(contact.normalImpulse + normalImpulse, 0);
	                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
	                }

	                // handle high velocity and resting collisions separately
	                if (tangentVelocity * tangentVelocity > Resolver._restingThreshTangent * timeScaleSquared) {
	                    // high tangent velocity so clear cached contact tangent impulse
	                    contact.tangentImpulse = 0;
	                } else {
	                    // solve resting collision constraints using Erin Catto's method (GDC08)
	                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
	                    var contactTangentImpulse = contact.tangentImpulse;
	                    contact.tangentImpulse = Common.clamp(contact.tangentImpulse + tangentImpulse, -maxFriction, maxFriction);
	                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
	                }

	                // total impulse from contact
	                impulse.x = (normal.x * normalImpulse) + (tangent.x * tangentImpulse);
	                impulse.y = (normal.y * normalImpulse) + (tangent.y * tangentImpulse);
	                
	                // apply impulse from contact
	                if (!(bodyA.isStatic || bodyA.isSleeping)) {
	                    bodyA.positionPrev.x += impulse.x * bodyA.inverseMass;
	                    bodyA.positionPrev.y += impulse.y * bodyA.inverseMass;
	                    bodyA.anglePrev += Vector.cross(offsetA, impulse) * bodyA.inverseInertia;
	                }

	                if (!(bodyB.isStatic || bodyB.isSleeping)) {
	                    bodyB.positionPrev.x -= impulse.x * bodyB.inverseMass;
	                    bodyB.positionPrev.y -= impulse.y * bodyB.inverseMass;
	                    bodyB.anglePrev -= Vector.cross(offsetB, impulse) * bodyB.inverseInertia;
	                }
	            }
	        }
	    };

	})();


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
	* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class MouseConstraint
	*/

	var MouseConstraint = {};

	module.exports = MouseConstraint;

	var Vertices = __webpack_require__(4);
	var Sleeping = __webpack_require__(7);
	var Mouse = __webpack_require__(25);
	var Events = __webpack_require__(8);
	var Detector = __webpack_require__(15);
	var Constraint = __webpack_require__(19);
	var Composite = __webpack_require__(10);
	var Common = __webpack_require__(6);
	var Bounds = __webpack_require__(11);

	(function() {

	    /**
	     * Creates a new mouse constraint.
	     * All properties have default values, and many are pre-calculated automatically based on other properties.
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {engine} engine
	     * @param {} options
	     * @return {MouseConstraint} A new MouseConstraint
	     */
	    MouseConstraint.create = function(engine, options) {
	        var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);

	        if (!mouse) {
	            if (engine && engine.render && engine.render.canvas) {
	                mouse = Mouse.create(engine.render.canvas);
	            } else if (options && options.element) {
	                mouse = Mouse.create(options.element);
	            } else {
	                mouse = Mouse.create();
	                Common.log('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected', 'warn');
	            }
	        }

	        var constraint = Constraint.create({ 
	            label: 'Mouse Constraint',
	            pointA: mouse.position,
	            pointB: { x: 0, y: 0 },
	            length: 0.01, 
	            stiffness: 0.1,
	            angularStiffness: 1,
	            render: {
	                strokeStyle: '#90EE90',
	                lineWidth: 3
	            }
	        });

	        var defaults = {
	            type: 'mouseConstraint',
	            mouse: mouse,
	            element: null,
	            body: null,
	            constraint: constraint,
	            collisionFilter: {
	                category: 0x0001,
	                mask: 0xFFFFFFFF,
	                group: 0
	            }
	        };

	        var mouseConstraint = Common.extend(defaults, options);

	        Events.on(engine, 'tick', function() {
	            var allBodies = Composite.allBodies(engine.world);
	            MouseConstraint.update(mouseConstraint, allBodies);
	            _triggerEvents(mouseConstraint);
	        });

	        return mouseConstraint;
	    };

	    /**
	     * Updates the given mouse constraint.
	     * @private
	     * @method update
	     * @param {MouseConstraint} mouseConstraint
	     * @param {body[]} bodies
	     */
	    MouseConstraint.update = function(mouseConstraint, bodies) {
	        var mouse = mouseConstraint.mouse,
	            constraint = mouseConstraint.constraint,
	            body = mouseConstraint.body;

	        if (mouse.button === 0) {
	            if (!constraint.bodyB) {
	                for (var i = 0; i < bodies.length; i++) {
	                    body = bodies[i];
	                    if (Bounds.contains(body.bounds, mouse.position) 
	                            && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
	                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
	                            var part = body.parts[j];
	                            if (Vertices.contains(part.vertices, mouse.position)) {
	                                constraint.pointA = mouse.position;
	                                constraint.bodyB = mouseConstraint.body = body;
	                                constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
	                                constraint.angleB = body.angle;

	                                Sleeping.set(body, false);
	                                Events.trigger(mouseConstraint, 'startdrag', { mouse: mouse, body: body });

	                                break;
	                            }
	                        }
	                    }
	                }
	            } else {
	                Sleeping.set(constraint.bodyB, false);
	                constraint.pointA = mouse.position;
	            }
	        } else {
	            constraint.bodyB = mouseConstraint.body = null;
	            constraint.pointB = null;

	            if (body)
	                Events.trigger(mouseConstraint, 'enddrag', { mouse: mouse, body: body });
	        }
	    };

	    /**
	     * Triggers mouse constraint events.
	     * @method _triggerEvents
	     * @private
	     * @param {mouse} mouseConstraint
	     */
	    var _triggerEvents = function(mouseConstraint) {
	        var mouse = mouseConstraint.mouse,
	            mouseEvents = mouse.sourceEvents;

	        if (mouseEvents.mousemove)
	            Events.trigger(mouseConstraint, 'mousemove', { mouse: mouse });

	        if (mouseEvents.mousedown)
	            Events.trigger(mouseConstraint, 'mousedown', { mouse: mouse });

	        if (mouseEvents.mouseup)
	            Events.trigger(mouseConstraint, 'mouseup', { mouse: mouse });

	        // reset the mouse state ready for the next step
	        Mouse.clearSourceEvents(mouse);
	    };

	    /*
	    *
	    *  Events Documentation
	    *
	    */

	    /**
	    * Fired when the mouse has moved (or a touch moves) during the last step
	    *
	    * @event mousemove
	    * @param {} event An event object
	    * @param {mouse} event.mouse The engine's mouse instance
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when the mouse is down (or a touch has started) during the last step
	    *
	    * @event mousedown
	    * @param {} event An event object
	    * @param {mouse} event.mouse The engine's mouse instance
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when the mouse is up (or a touch has ended) during the last step
	    *
	    * @event mouseup
	    * @param {} event An event object
	    * @param {mouse} event.mouse The engine's mouse instance
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when the user starts dragging a body
	    *
	    * @event startdrag
	    * @param {} event An event object
	    * @param {mouse} event.mouse The engine's mouse instance
	    * @param {body} event.body The body being dragged
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when the user ends dragging a body
	    *
	    * @event enddrag
	    * @param {} event An event object
	    * @param {mouse} event.mouse The engine's mouse instance
	    * @param {body} event.body The body that has stopped being dragged
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * A `String` denoting the type of object.
	     *
	     * @property type
	     * @type string
	     * @default "constraint"
	     * @readOnly
	     */

	    /**
	     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
	     *
	     * @property mouse
	     * @type mouse
	     * @default mouse
	     */

	    /**
	     * The `Body` that is currently being moved by the user, or `null` if no body.
	     *
	     * @property body
	     * @type body
	     * @default null
	     */

	    /**
	     * The `Constraint` object that is used to move the body during interaction.
	     *
	     * @property constraint
	     * @type constraint
	     */

	    /**
	     * An `Object` that specifies the collision filter properties.
	     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
	     * See `body.collisionFilter` for more information.
	     *
	     * @property collisionFilter
	     * @type object
	     */

	})();


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
	*
	* @class Mouse
	*/

	var Mouse = {};

	module.exports = Mouse;

	var Common = __webpack_require__(6);

	(function() {

	    /**
	     * Creates a mouse input.
	     * @method create
	     * @param {HTMLElement} element
	     * @return {mouse} A new mouse
	     */
	    Mouse.create = function(element) {
	        var mouse = {};

	        if (!element) {
	            Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
	        }
	        
	        mouse.element = element || document.body;
	        mouse.absolute = { x: 0, y: 0 };
	        mouse.position = { x: 0, y: 0 };
	        mouse.mousedownPosition = { x: 0, y: 0 };
	        mouse.mouseupPosition = { x: 0, y: 0 };
	        mouse.offset = { x: 0, y: 0 };
	        mouse.scale = { x: 1, y: 1 };
	        mouse.wheelDelta = 0;
	        mouse.button = -1;
	        mouse.pixelRatio = mouse.element.getAttribute('data-pixel-ratio') || 1;

	        mouse.sourceEvents = {
	            mousemove: null,
	            mousedown: null,
	            mouseup: null,
	            mousewheel: null
	        };
	        
	        mouse.mousemove = function(event) { 
	            var position = _getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
	                touches = event.changedTouches;

	            if (touches) {
	                mouse.button = 0;
	                event.preventDefault();
	            }

	            mouse.absolute.x = position.x;
	            mouse.absolute.y = position.y;
	            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
	            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
	            mouse.sourceEvents.mousemove = event;
	        };
	        
	        mouse.mousedown = function(event) {
	            var position = _getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
	                touches = event.changedTouches;

	            if (touches) {
	                mouse.button = 0;
	                event.preventDefault();
	            } else {
	                mouse.button = event.button;
	            }

	            mouse.absolute.x = position.x;
	            mouse.absolute.y = position.y;
	            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
	            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
	            mouse.mousedownPosition.x = mouse.position.x;
	            mouse.mousedownPosition.y = mouse.position.y;
	            mouse.sourceEvents.mousedown = event;
	        };
	        
	        mouse.mouseup = function(event) {
	            var position = _getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
	                touches = event.changedTouches;

	            if (touches) {
	                event.preventDefault();
	            }
	            
	            mouse.button = -1;
	            mouse.absolute.x = position.x;
	            mouse.absolute.y = position.y;
	            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
	            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
	            mouse.mouseupPosition.x = mouse.position.x;
	            mouse.mouseupPosition.y = mouse.position.y;
	            mouse.sourceEvents.mouseup = event;
	        };

	        mouse.mousewheel = function(event) {
	            mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
	            event.preventDefault();
	        };

	        Mouse.setElement(mouse, mouse.element);

	        return mouse;
	    };

	    /**
	     * Sets the element the mouse is bound to (and relative to).
	     * @method setElement
	     * @param {mouse} mouse
	     * @param {HTMLElement} element
	     */
	    Mouse.setElement = function(mouse, element) {
	        mouse.element = element;

	        element.addEventListener('mousemove', mouse.mousemove);
	        element.addEventListener('mousedown', mouse.mousedown);
	        element.addEventListener('mouseup', mouse.mouseup);
	        
	        element.addEventListener('mousewheel', mouse.mousewheel);
	        element.addEventListener('DOMMouseScroll', mouse.mousewheel);

	        element.addEventListener('touchmove', mouse.mousemove);
	        element.addEventListener('touchstart', mouse.mousedown);
	        element.addEventListener('touchend', mouse.mouseup);
	    };

	    /**
	     * Clears all captured source events.
	     * @method clearSourceEvents
	     * @param {mouse} mouse
	     */
	    Mouse.clearSourceEvents = function(mouse) {
	        mouse.sourceEvents.mousemove = null;
	        mouse.sourceEvents.mousedown = null;
	        mouse.sourceEvents.mouseup = null;
	        mouse.sourceEvents.mousewheel = null;
	        mouse.wheelDelta = 0;
	    };

	    /**
	     * Sets the mouse position offset.
	     * @method setOffset
	     * @param {mouse} mouse
	     * @param {vector} offset
	     */
	    Mouse.setOffset = function(mouse, offset) {
	        mouse.offset.x = offset.x;
	        mouse.offset.y = offset.y;
	        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
	        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
	    };

	    /**
	     * Sets the mouse position scale.
	     * @method setScale
	     * @param {mouse} mouse
	     * @param {vector} scale
	     */
	    Mouse.setScale = function(mouse, scale) {
	        mouse.scale.x = scale.x;
	        mouse.scale.y = scale.y;
	        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
	        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
	    };
	    
	    /**
	     * Gets the mouse position relative to an element given a screen pixel ratio.
	     * @method _getRelativeMousePosition
	     * @private
	     * @param {} event
	     * @param {} element
	     * @param {number} pixelRatio
	     * @return {}
	     */
	    var _getRelativeMousePosition = function(event, element, pixelRatio) {
	        var elementBounds = element.getBoundingClientRect(),
	            rootNode = (document.documentElement || document.body.parentNode || document.body),
	            scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : rootNode.scrollLeft,
	            scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : rootNode.scrollTop,
	            touches = event.changedTouches,
	            x, y;
	        
	        if (touches) {
	            x = touches[0].pageX - elementBounds.left - scrollX;
	            y = touches[0].pageY - elementBounds.top - scrollY;
	        } else {
	            x = event.pageX - elementBounds.left - scrollX;
	            y = event.pageY - elementBounds.top - scrollY;
	        }

	        return { 
	            x: x / (element.clientWidth / element.width * pixelRatio),
	            y: y / (element.clientHeight / element.height * pixelRatio)
	        };
	    };

	})();


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Engine` module contains methods for creating and manipulating engines.
	* An engine is a controller that manages updating the simulation of the world.
	* See `Matter.Runner` for an optional game loop utility.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Engine
	*/

	var Engine = {};

	module.exports = Engine;

	var World = __webpack_require__(18);
	var Sleeping = __webpack_require__(7);
	var Resolver = __webpack_require__(23);
	var Render = __webpack_require__(9);
	var Pairs = __webpack_require__(20);
	var Metrics = __webpack_require__(27);
	var Grid = __webpack_require__(12);
	var Events = __webpack_require__(8);
	var Composite = __webpack_require__(10);
	var Constraint = __webpack_require__(19);
	var Common = __webpack_require__(6);
	var Body = __webpack_require__(3);

	(function() {

	    /**
	     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * All properties have default values, and many are pre-calculated automatically based on other properties.
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {object} [options]
	     * @return {engine} engine
	     */
	    Engine.create = function(element, options) {
	        // options may be passed as the first (and only) argument
	        options = Common.isElement(element) ? options : element;
	        element = Common.isElement(element) ? element : null;
	        options = options || {};

	        if (element || options.render) {
	            Common.log('Engine.create: engine.render is deprecated (see docs)', 'warn');
	        }

	        var defaults = {
	            positionIterations: 6,
	            velocityIterations: 4,
	            constraintIterations: 2,
	            enableSleeping: false,
	            events: [],
	            timing: {
	                timestamp: 0,
	                timeScale: 1
	            },
	            broadphase: {
	                controller: Grid
	            }
	        };

	        var engine = Common.extend(defaults, options);

	        // @deprecated
	        if (element || engine.render) {
	            var renderDefaults = {
	                element: element,
	                controller: Render
	            };
	            
	            engine.render = Common.extend(renderDefaults, engine.render);
	        }

	        // @deprecated
	        if (engine.render && engine.render.controller) {
	            engine.render = engine.render.controller.create(engine.render);
	        }

	        // @deprecated
	        if (engine.render) {
	            engine.render.engine = engine;
	        }

	        engine.world = options.world || World.create(engine.world);
	        engine.pairs = Pairs.create();
	        engine.broadphase = engine.broadphase.controller.create(engine.broadphase);
	        engine.metrics = engine.metrics || { extended: false };

	        // @if DEBUG
	        engine.metrics = Metrics.create(engine.metrics);
	        // @endif

	        return engine;
	    };

	    /**
	     * Moves the simulation forward in time by `delta` ms.
	     * The `correction` argument is an optional `Number` that specifies the time correction factor to apply to the update.
	     * This can help improve the accuracy of the simulation in cases where `delta` is changing between updates.
	     * The value of `correction` is defined as `delta / lastDelta`, i.e. the percentage change of `delta` over the last step.
	     * Therefore the value is always `1` (no correction) when `delta` constant (or when no correction is desired, which is the default).
	     * See the paper on <a href="http://lonesock.net/article/verlet.html">Time Corrected Verlet</a> for more information.
	     *
	     * Triggers `beforeUpdate` and `afterUpdate` events.
	     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
	     * @method update
	     * @param {engine} engine
	     * @param {number} [delta=16.666]
	     * @param {number} [correction=1]
	     */
	    Engine.update = function(engine, delta, correction) {
	        delta = delta || 1000 / 60;
	        correction = correction || 1;

	        var world = engine.world,
	            timing = engine.timing,
	            broadphase = engine.broadphase,
	            broadphasePairs = [],
	            i;

	        // increment timestamp
	        timing.timestamp += delta * timing.timeScale;

	        // create an event object
	        var event = {
	            timestamp: timing.timestamp
	        };

	        Events.trigger(engine, 'beforeUpdate', event);

	        // get lists of all bodies and constraints, no matter what composites they are in
	        var allBodies = Composite.allBodies(world),
	            allConstraints = Composite.allConstraints(world);

	        // @if DEBUG
	        // reset metrics logging
	        Metrics.reset(engine.metrics);
	        // @endif

	        // if sleeping enabled, call the sleeping controller
	        if (engine.enableSleeping)
	            Sleeping.update(allBodies, timing.timeScale);

	        // applies gravity to all bodies
	        _bodiesApplyGravity(allBodies, world.gravity);

	        // update all body position and rotation by integration
	        _bodiesUpdate(allBodies, delta, timing.timeScale, correction, world.bounds);

	        // update all constraints
	        for (i = 0; i < engine.constraintIterations; i++) {
	            Constraint.solveAll(allConstraints, timing.timeScale);
	        }
	        Constraint.postSolveAll(allBodies);

	        // broadphase pass: find potential collision pairs
	        if (broadphase.controller) {

	            // if world is dirty, we must flush the whole grid
	            if (world.isModified)
	                broadphase.controller.clear(broadphase);

	            // update the grid buckets based on current bodies
	            broadphase.controller.update(broadphase, allBodies, engine, world.isModified);
	            broadphasePairs = broadphase.pairsList;
	        } else {

	            // if no broadphase set, we just pass all bodies
	            broadphasePairs = allBodies;
	        }

	        // clear all composite modified flags
	        if (world.isModified) {
	            Composite.setModified(world, false, false, true);
	        }

	        // narrowphase pass: find actual collisions, then create or update collision pairs
	        var collisions = broadphase.detector(broadphasePairs, engine);

	        // update collision pairs
	        var pairs = engine.pairs,
	            timestamp = timing.timestamp;
	        Pairs.update(pairs, collisions, timestamp);
	        Pairs.removeOld(pairs, timestamp);

	        // wake up bodies involved in collisions
	        if (engine.enableSleeping)
	            Sleeping.afterCollisions(pairs.list, timing.timeScale);

	        // trigger collision events
	        if (pairs.collisionStart.length > 0)
	            Events.trigger(engine, 'collisionStart', { pairs: pairs.collisionStart });

	        // iteratively resolve position between collisions
	        Resolver.preSolvePosition(pairs.list);
	        for (i = 0; i < engine.positionIterations; i++) {
	            Resolver.solvePosition(pairs.list, timing.timeScale);
	        }
	        Resolver.postSolvePosition(allBodies);

	        // iteratively resolve velocity between collisions
	        Resolver.preSolveVelocity(pairs.list);
	        for (i = 0; i < engine.velocityIterations; i++) {
	            Resolver.solveVelocity(pairs.list, timing.timeScale);
	        }

	        // trigger collision events
	        if (pairs.collisionActive.length > 0)
	            Events.trigger(engine, 'collisionActive', { pairs: pairs.collisionActive });

	        if (pairs.collisionEnd.length > 0)
	            Events.trigger(engine, 'collisionEnd', { pairs: pairs.collisionEnd });

	        // @if DEBUG
	        // update metrics log
	        Metrics.update(engine.metrics, engine);
	        // @endif

	        // clear force buffers
	        _bodiesClearForces(allBodies);

	        Events.trigger(engine, 'afterUpdate', event);

	        return engine;
	    };
	    
	    /**
	     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
	     * @method merge
	     * @param {engine} engineA
	     * @param {engine} engineB
	     */
	    Engine.merge = function(engineA, engineB) {
	        Common.extend(engineA, engineB);
	        
	        if (engineB.world) {
	            engineA.world = engineB.world;

	            Engine.clear(engineA);

	            var bodies = Composite.allBodies(engineA.world);

	            for (var i = 0; i < bodies.length; i++) {
	                var body = bodies[i];
	                Sleeping.set(body, false);
	                body.id = Common.nextId();
	            }
	        }
	    };

	    /**
	     * Clears the engine including the world, pairs and broadphase.
	     * @method clear
	     * @param {engine} engine
	     */
	    Engine.clear = function(engine) {
	        var world = engine.world;
	        
	        Pairs.clear(engine.pairs);

	        var broadphase = engine.broadphase;
	        if (broadphase.controller) {
	            var bodies = Composite.allBodies(world);
	            broadphase.controller.clear(broadphase);
	            broadphase.controller.update(broadphase, bodies, engine, true);
	        }
	    };

	    /**
	     * Zeroes the `body.force` and `body.torque` force buffers.
	     * @method bodiesClearForces
	     * @private
	     * @param {body[]} bodies
	     */
	    var _bodiesClearForces = function(bodies) {
	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            // reset force buffers
	            body.force.x = 0;
	            body.force.y = 0;
	            body.torque = 0;
	        }
	    };

	    /**
	     * Applys a mass dependant force to all given bodies.
	     * @method bodiesApplyGravity
	     * @private
	     * @param {body[]} bodies
	     * @param {vector} gravity
	     */
	    var _bodiesApplyGravity = function(bodies, gravity) {
	        var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001;

	        if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0) {
	            return;
	        }
	        
	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            if (body.isStatic || body.isSleeping)
	                continue;

	            // apply gravity
	            body.force.y += body.mass * gravity.y * gravityScale;
	            body.force.x += body.mass * gravity.x * gravityScale;
	        }
	    };

	    /**
	     * Applys `Body.update` to all given `bodies`.
	     * @method updateAll
	     * @private
	     * @param {body[]} bodies
	     * @param {number} deltaTime 
	     * The amount of time elapsed between updates
	     * @param {number} timeScale
	     * @param {number} correction 
	     * The Verlet correction factor (deltaTime / lastDeltaTime)
	     * @param {bounds} worldBounds
	     */
	    var _bodiesUpdate = function(bodies, deltaTime, timeScale, correction, worldBounds) {
	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            if (body.isStatic || body.isSleeping)
	                continue;

	            Body.update(body, deltaTime, timeScale, correction);
	        }
	    };

	    /**
	     * An alias for `Runner.run`, see `Matter.Runner` for more information.
	     * @method run
	     * @param {engine} engine
	     */

	    /**
	    * Fired just before an update
	    *
	    * @event beforeUpdate
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired after engine update and all collision events
	    *
	    * @event afterUpdate
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
	    *
	    * @event collisionStart
	    * @param {} event An event object
	    * @param {} event.pairs List of affected pairs
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
	    *
	    * @event collisionActive
	    * @param {} event An event object
	    * @param {} event.pairs List of affected pairs
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
	    *
	    * @event collisionEnd
	    * @param {} event An event object
	    * @param {} event.pairs List of affected pairs
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * An integer `Number` that specifies the number of position iterations to perform each update.
	     * The higher the value, the higher quality the simulation will be at the expense of performance.
	     *
	     * @property positionIterations
	     * @type number
	     * @default 6
	     */

	    /**
	     * An integer `Number` that specifies the number of velocity iterations to perform each update.
	     * The higher the value, the higher quality the simulation will be at the expense of performance.
	     *
	     * @property velocityIterations
	     * @type number
	     * @default 4
	     */

	    /**
	     * An integer `Number` that specifies the number of constraint iterations to perform each update.
	     * The higher the value, the higher quality the simulation will be at the expense of performance.
	     * The default value of `2` is usually very adequate.
	     *
	     * @property constraintIterations
	     * @type number
	     * @default 2
	     */

	    /**
	     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
	     * Sleeping can improve stability and performance, but often at the expense of accuracy.
	     *
	     * @property enableSleeping
	     * @type boolean
	     * @default false
	     */

	    /**
	     * An `Object` containing properties regarding the timing systems of the engine. 
	     *
	     * @property timing
	     * @type object
	     */

	    /**
	     * A `Number` that specifies the global scaling factor of time for all bodies.
	     * A value of `0` freezes the simulation.
	     * A value of `0.1` gives a slow-motion effect.
	     * A value of `1.2` gives a speed-up effect.
	     *
	     * @property timing.timeScale
	     * @type number
	     * @default 1
	     */

	    /**
	     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
	     * It is incremented on every `Engine.update` by the given `delta` argument. 
	     *
	     * @property timing.timestamp
	     * @type number
	     * @default 0
	     */

	    /**
	     * An instance of a `Render` controller. The default value is a `Matter.Render` instance created by `Engine.create`.
	     * One may also develop a custom renderer module based on `Matter.Render` and pass an instance of it to `Engine.create` via `options.render`.
	     *
	     * A minimal custom renderer object must define at least three functions: `create`, `clear` and `world` (see `Matter.Render`).
	     * It is also possible to instead pass the _module_ reference via `options.render.controller` and `Engine.create` will instantiate one for you.
	     *
	     * @property render
	     * @type render
	     * @deprecated see Demo.js for an example of creating a renderer
	     * @default a Matter.Render instance
	     */

	    /**
	     * An instance of a broadphase controller. The default value is a `Matter.Grid` instance created by `Engine.create`.
	     *
	     * @property broadphase
	     * @type grid
	     * @default a Matter.Grid instance
	     */

	    /**
	     * A `World` composite object that will contain all simulated bodies and constraints.
	     *
	     * @property world
	     * @type world
	     * @default a Matter.World instance
	     */

	})();


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// @if DEBUG
	/**
	* _Internal Class_, not generally used outside of the engine's internals.
	*
	*/

	var Metrics = {};

	module.exports = Metrics;

	var Composite = __webpack_require__(10);
	var Common = __webpack_require__(6);

	(function() {

	    /**
	     * Creates a new metrics.
	     * @method create
	     * @private
	     * @return {metrics} A new metrics
	     */
	    Metrics.create = function(options) {
	        var defaults = {
	            extended: false,
	            narrowDetections: 0,
	            narrowphaseTests: 0,
	            narrowReuse: 0,
	            narrowReuseCount: 0,
	            midphaseTests: 0,
	            broadphaseTests: 0,
	            narrowEff: 0.0001,
	            midEff: 0.0001,
	            broadEff: 0.0001,
	            collisions: 0,
	            buckets: 0,
	            bodies: 0,
	            pairs: 0
	        };

	        return Common.extend(defaults, false, options);
	    };

	    /**
	     * Resets metrics.
	     * @method reset
	     * @private
	     * @param {metrics} metrics
	     */
	    Metrics.reset = function(metrics) {
	        if (metrics.extended) {
	            metrics.narrowDetections = 0;
	            metrics.narrowphaseTests = 0;
	            metrics.narrowReuse = 0;
	            metrics.narrowReuseCount = 0;
	            metrics.midphaseTests = 0;
	            metrics.broadphaseTests = 0;
	            metrics.narrowEff = 0;
	            metrics.midEff = 0;
	            metrics.broadEff = 0;
	            metrics.collisions = 0;
	            metrics.buckets = 0;
	            metrics.pairs = 0;
	            metrics.bodies = 0;
	        }
	    };

	    /**
	     * Updates metrics.
	     * @method update
	     * @private
	     * @param {metrics} metrics
	     * @param {engine} engine
	     */
	    Metrics.update = function(metrics, engine) {
	        if (metrics.extended) {
	            var world = engine.world,
	                bodies = Composite.allBodies(world);

	            metrics.collisions = metrics.narrowDetections;
	            metrics.pairs = engine.pairs.list.length;
	            metrics.bodies = bodies.length;
	            metrics.midEff = (metrics.narrowDetections / (metrics.midphaseTests || 1)).toFixed(2);
	            metrics.narrowEff = (metrics.narrowDetections / (metrics.narrowphaseTests || 1)).toFixed(2);
	            metrics.broadEff = (1 - (metrics.broadphaseTests / (bodies.length || 1))).toFixed(2);
	            metrics.narrowReuse = (metrics.narrowReuseCount / (metrics.narrowphaseTests || 1)).toFixed(2);
	            //var broadphase = engine.broadphase[engine.broadphase.current];
	            //if (broadphase.instance)
	            //    metrics.buckets = Common.keys(broadphase.instance.buckets).length;
	        }
	    };

	})();
	// @endif


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Runner` module is an optional utility which provides a game loop, 
	* that handles continuously updating a `Matter.Engine` for you within a browser.
	* It is intended for development and debugging purposes, but may also be suitable for simple games.
	* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
	* Instead just call `Engine.update(engine, delta)` in your own loop.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Runner
	*/

	var Runner = {};

	module.exports = Runner;

	var Events = __webpack_require__(8);
	var Engine = __webpack_require__(26);
	var Common = __webpack_require__(6);

	(function() {

	    var _requestAnimationFrame,
	        _cancelAnimationFrame;

	    if (typeof window !== 'undefined') {
	        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
	                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame 
	                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };
	   
	        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
	                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
	    }

	    /**
	     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * @method create
	     * @param {} options
	     */
	    Runner.create = function(options) {
	        var defaults = {
	            fps: 60,
	            correction: 1,
	            deltaSampleSize: 60,
	            counterTimestamp: 0,
	            frameCounter: 0,
	            deltaHistory: [],
	            timePrev: null,
	            timeScalePrev: 1,
	            frameRequestId: null,
	            isFixed: false,
	            enabled: true
	        };

	        var runner = Common.extend(defaults, options);

	        runner.delta = runner.delta || 1000 / runner.fps;
	        runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
	        runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
	        runner.fps = 1000 / runner.delta;

	        return runner;
	    };

	    /**
	     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
	     * @method run
	     * @param {engine} engine
	     */
	    Runner.run = function(runner, engine) {
	        // create runner if engine is first argument
	        if (typeof runner.positionIterations !== 'undefined') {
	            engine = runner;
	            runner = Runner.create();
	        }

	        (function render(time){
	            runner.frameRequestId = _requestAnimationFrame(render);

	            if (time && runner.enabled) {
	                Runner.tick(runner, engine, time);
	            }
	        })();

	        return runner;
	    };

	    /**
	     * A game loop utility that updates the engine and renderer by one step (a 'tick').
	     * Features delta smoothing, time correction and fixed or dynamic timing.
	     * Triggers `beforeTick`, `tick` and `afterTick` events on the engine.
	     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
	     * @method tick
	     * @param {runner} runner
	     * @param {engine} engine
	     * @param {number} time
	     */
	    Runner.tick = function(runner, engine, time) {
	        var timing = engine.timing,
	            correction = 1,
	            delta;

	        // create an event object
	        var event = {
	            timestamp: timing.timestamp
	        };

	        Events.trigger(runner, 'beforeTick', event);
	        Events.trigger(engine, 'beforeTick', event); // @deprecated

	        if (runner.isFixed) {
	            // fixed timestep
	            delta = runner.delta;
	        } else {
	            // dynamic timestep based on wall clock between calls
	            delta = (time - runner.timePrev) || runner.delta;
	            runner.timePrev = time;

	            // optimistically filter delta over a few frames, to improve stability
	            runner.deltaHistory.push(delta);
	            runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
	            delta = Math.min.apply(null, runner.deltaHistory);
	            
	            // limit delta
	            delta = delta < runner.deltaMin ? runner.deltaMin : delta;
	            delta = delta > runner.deltaMax ? runner.deltaMax : delta;

	            // correction for delta
	            correction = delta / runner.delta;

	            // update engine timing object
	            runner.delta = delta;
	        }

	        // time correction for time scaling
	        if (runner.timeScalePrev !== 0)
	            correction *= timing.timeScale / runner.timeScalePrev;

	        if (timing.timeScale === 0)
	            correction = 0;

	        runner.timeScalePrev = timing.timeScale;
	        runner.correction = correction;

	        // fps counter
	        runner.frameCounter += 1;
	        if (time - runner.counterTimestamp >= 1000) {
	            runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
	            runner.counterTimestamp = time;
	            runner.frameCounter = 0;
	        }

	        Events.trigger(runner, 'tick', event);
	        Events.trigger(engine, 'tick', event); // @deprecated

	        // if world has been modified, clear the render scene graph
	        if (engine.world.isModified 
	            && engine.render
	            && engine.render.controller
	            && engine.render.controller.clear) {
	            engine.render.controller.clear(engine.render);
	        }

	        // update
	        Events.trigger(runner, 'beforeUpdate', event);
	        Engine.update(engine, delta, correction);
	        Events.trigger(runner, 'afterUpdate', event);

	        // render
	        // @deprecated
	        if (engine.render && engine.render.controller) {
	            Events.trigger(runner, 'beforeRender', event);
	            Events.trigger(engine, 'beforeRender', event); // @deprecated

	            engine.render.controller.world(engine.render);

	            Events.trigger(runner, 'afterRender', event);
	            Events.trigger(engine, 'afterRender', event); // @deprecated
	        }

	        Events.trigger(runner, 'afterTick', event);
	        Events.trigger(engine, 'afterTick', event); // @deprecated
	    };

	    /**
	     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
	     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
	     * @method stop
	     * @param {runner} runner
	     */
	    Runner.stop = function(runner) {
	        _cancelAnimationFrame(runner.frameRequestId);
	    };

	    /**
	     * Alias for `Runner.run`.
	     * @method start
	     * @param {runner} runner
	     * @param {engine} engine
	     */
	    Runner.start = function(runner, engine) {
	        Runner.run(runner, engine);
	    };

	    /*
	    *
	    *  Events Documentation
	    *
	    */

	    /**
	    * Fired at the start of a tick, before any updates to the engine or timing
	    *
	    * @event beforeTick
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired after engine timing updated, but just before update
	    *
	    * @event tick
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired at the end of a tick, after engine update and after rendering
	    *
	    * @event afterTick
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired before update
	    *
	    * @event beforeUpdate
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired after update
	    *
	    * @event afterUpdate
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired before rendering
	    *
	    * @event beforeRender
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    * @deprecated
	    */

	    /**
	    * Fired after rendering
	    *
	    * @event afterRender
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    * @deprecated
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * A flag that specifies whether the runner is running or not.
	     *
	     * @property enabled
	     * @type boolean
	     * @default true
	     */

	    /**
	     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
	     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
	     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
	     *
	     * @property isFixed
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A `Number` that specifies the time step between updates in milliseconds.
	     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
	     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
	     *
	     * @property delta
	     * @type number
	     * @default 1000 / 60
	     */

	})();


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Composites` module contains factory methods for creating composite bodies
	* with commonly used configurations (such as stacks and chains).
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Composites
	*/

	var Composites = {};

	module.exports = Composites;

	var Composite = __webpack_require__(10);
	var Constraint = __webpack_require__(19);
	var Common = __webpack_require__(6);
	var Body = __webpack_require__(3);
	var Bodies = __webpack_require__(22);

	(function() {

	    /**
	     * Create a new composite containing bodies created in the callback in a grid arrangement.
	     * This function uses the body's bounds to prevent overlaps.
	     * @method stack
	     * @param {number} xx
	     * @param {number} yy
	     * @param {number} columns
	     * @param {number} rows
	     * @param {number} columnGap
	     * @param {number} rowGap
	     * @param {function} callback
	     * @return {composite} A new composite containing objects created in the callback
	     */
	    Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
	        var stack = Composite.create({ label: 'Stack' }),
	            x = xx,
	            y = yy,
	            lastBody,
	            i = 0;

	        for (var row = 0; row < rows; row++) {
	            var maxHeight = 0;
	            
	            for (var column = 0; column < columns; column++) {
	                var body = callback(x, y, column, row, lastBody, i);
	                    
	                if (body) {
	                    var bodyHeight = body.bounds.max.y - body.bounds.min.y,
	                        bodyWidth = body.bounds.max.x - body.bounds.min.x; 

	                    if (bodyHeight > maxHeight)
	                        maxHeight = bodyHeight;
	                    
	                    Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });

	                    x = body.bounds.max.x + columnGap;

	                    Composite.addBody(stack, body);
	                    
	                    lastBody = body;
	                    i += 1;
	                } else {
	                    x += columnGap;
	                }
	            }
	            
	            y += maxHeight + rowGap;
	            x = xx;
	        }

	        return stack;
	    };
	    
	    /**
	     * Chains all bodies in the given composite together using constraints.
	     * @method chain
	     * @param {composite} composite
	     * @param {number} xOffsetA
	     * @param {number} yOffsetA
	     * @param {number} xOffsetB
	     * @param {number} yOffsetB
	     * @param {object} options
	     * @return {composite} A new composite containing objects chained together with constraints
	     */
	    Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
	        var bodies = composite.bodies;
	        
	        for (var i = 1; i < bodies.length; i++) {
	            var bodyA = bodies[i - 1],
	                bodyB = bodies[i],
	                bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
	                bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, 
	                bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
	                bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
	        
	            var defaults = {
	                bodyA: bodyA,
	                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
	                bodyB: bodyB,
	                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
	            };
	            
	            var constraint = Common.extend(defaults, options);
	        
	            Composite.addConstraint(composite, Constraint.create(constraint));
	        }

	        composite.label += ' Chain';
	        
	        return composite;
	    };

	    /**
	     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
	     * @method mesh
	     * @param {composite} composite
	     * @param {number} columns
	     * @param {number} rows
	     * @param {boolean} crossBrace
	     * @param {object} options
	     * @return {composite} The composite containing objects meshed together with constraints
	     */
	    Composites.mesh = function(composite, columns, rows, crossBrace, options) {
	        var bodies = composite.bodies,
	            row,
	            col,
	            bodyA,
	            bodyB,
	            bodyC;
	        
	        for (row = 0; row < rows; row++) {
	            for (col = 1; col < columns; col++) {
	                bodyA = bodies[(col - 1) + (row * columns)];
	                bodyB = bodies[col + (row * columns)];
	                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));
	            }

	            if (row > 0) {
	                for (col = 0; col < columns; col++) {
	                    bodyA = bodies[col + ((row - 1) * columns)];
	                    bodyB = bodies[col + (row * columns)];
	                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));

	                    if (crossBrace && col > 0) {
	                        bodyC = bodies[(col - 1) + ((row - 1) * columns)];
	                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
	                    }

	                    if (crossBrace && col < columns - 1) {
	                        bodyC = bodies[(col + 1) + ((row - 1) * columns)];
	                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
	                    }
	                }
	            }
	        }

	        composite.label += ' Mesh';
	        
	        return composite;
	    };
	    
	    /**
	     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
	     * This function uses the body's bounds to prevent overlaps.
	     * @method pyramid
	     * @param {number} xx
	     * @param {number} yy
	     * @param {number} columns
	     * @param {number} rows
	     * @param {number} columnGap
	     * @param {number} rowGap
	     * @param {function} callback
	     * @return {composite} A new composite containing objects created in the callback
	     */
	    Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
	        return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
	            var actualRows = Math.min(rows, Math.ceil(columns / 2)),
	                lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
	            
	            if (row > actualRows)
	                return;
	            
	            // reverse row order
	            row = actualRows - row;
	            
	            var start = row,
	                end = columns - 1 - row;

	            if (column < start || column > end)
	                return;
	            
	            // retroactively fix the first body's position, since width was unknown
	            if (i === 1) {
	                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
	            }

	            var xOffset = lastBody ? column * lastBodyWidth : 0;
	            
	            return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
	        });
	    };

	    /**
	     * Creates a composite with a Newton's Cradle setup of bodies and constraints.
	     * @method newtonsCradle
	     * @param {number} xx
	     * @param {number} yy
	     * @param {number} number
	     * @param {number} size
	     * @param {number} length
	     * @return {composite} A new composite newtonsCradle body
	     */
	    Composites.newtonsCradle = function(xx, yy, number, size, length) {
	        var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

	        for (var i = 0; i < number; i++) {
	            var separation = 1.9,
	                circle = Bodies.circle(xx + i * (size * separation), yy + length, size, 
	                            { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }),
	                constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });

	            Composite.addBody(newtonsCradle, circle);
	            Composite.addConstraint(newtonsCradle, constraint);
	        }

	        return newtonsCradle;
	    };
	    
	    /**
	     * Creates a composite with simple car setup of bodies and constraints.
	     * @method car
	     * @param {number} xx
	     * @param {number} yy
	     * @param {number} width
	     * @param {number} height
	     * @param {number} wheelSize
	     * @return {composite} A new composite car body
	     */
	    Composites.car = function(xx, yy, width, height, wheelSize) {
	        var group = Body.nextGroup(true),
	            wheelBase = -20,
	            wheelAOffset = -width * 0.5 + wheelBase,
	            wheelBOffset = width * 0.5 - wheelBase,
	            wheelYOffset = 0;
	    
	        var car = Composite.create({ label: 'Car' }),
	            body = Bodies.trapezoid(xx, yy, width, height, 0.3, { 
	                collisionFilter: {
	                    group: group
	                },
	                friction: 0.01,
	                chamfer: {
	                    radius: 10
	                }
	            });
	    
	        var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, { 
	            collisionFilter: {
	                group: group
	            },
	            friction: 0.8,
	            density: 0.01
	        });
	                    
	        var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, { 
	            collisionFilter: {
	                group: group
	            },
	            friction: 0.8,
	            density: 0.01
	        });
	                    
	        var axelA = Constraint.create({
	            bodyA: body,
	            pointA: { x: wheelAOffset, y: wheelYOffset },
	            bodyB: wheelA,
	            stiffness: 0.2
	        });
	                        
	        var axelB = Constraint.create({
	            bodyA: body,
	            pointA: { x: wheelBOffset, y: wheelYOffset },
	            bodyB: wheelB,
	            stiffness: 0.2
	        });
	        
	        Composite.addBody(car, body);
	        Composite.addBody(car, wheelA);
	        Composite.addBody(car, wheelB);
	        Composite.addConstraint(car, axelA);
	        Composite.addConstraint(car, axelB);

	        return car;
	    };

	    /**
	     * Creates a simple soft body like object.
	     * @method softBody
	     * @param {number} xx
	     * @param {number} yy
	     * @param {number} columns
	     * @param {number} rows
	     * @param {number} columnGap
	     * @param {number} rowGap
	     * @param {boolean} crossBrace
	     * @param {number} particleRadius
	     * @param {} particleOptions
	     * @param {} constraintOptions
	     * @return {composite} A new composite softBody
	     */
	    Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
	        particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
	        constraintOptions = Common.extend({ stiffness: 0.4 }, constraintOptions);

	        var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
	            return Bodies.circle(x, y, particleRadius, particleOptions);
	        });

	        Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);

	        softBody.label = 'Soft Body';

	        return softBody;
	    };

	})();


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
	*
	* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Svg
	*/

	var Svg = {};

	module.exports = Svg;

	var Bounds = __webpack_require__(11);

	(function() {

	    /**
	     * Converts an SVG path into an array of vector points.
	     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
	     * See `Bodies.fromVertices` which provides support for this.
	     * Note that this function is not guaranteed to support complex paths (such as those with holes).
	     * @method pathToVertices
	     * @param {SVGPathElement} path
	     * @param {Number} [sampleLength=15]
	     * @return {Vector[]} points
	     */
	    Svg.pathToVertices = function(path, sampleLength) {
	        // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
	        var i, il, total, point, segment, segments, 
	            segmentsQueue, lastSegment, 
	            lastPoint, segmentIndex, points = [],
	            lx, ly, length = 0, x = 0, y = 0;

	        sampleLength = sampleLength || 15;

	        var addPoint = function(px, py, pathSegType) {
	            // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
	            var isRelative = pathSegType % 2 === 1 && pathSegType > 1;

	            // when the last point doesn't equal the current point add the current point
	            if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
	                if (lastPoint && isRelative) {
	                    lx = lastPoint.x;
	                    ly = lastPoint.y;
	                } else {
	                    lx = 0;
	                    ly = 0;
	                }

	                var point = {
	                    x: lx + px,
	                    y: ly + py
	                };

	                // set last point
	                if (isRelative || !lastPoint) {
	                    lastPoint = point;
	                }

	                points.push(point);

	                x = lx + px;
	                y = ly + py;
	            }
	        };

	        var addSegmentPoint = function(segment) {
	            var segType = segment.pathSegTypeAsLetter.toUpperCase();

	            // skip path ends
	            if (segType === 'Z') 
	                return;

	            // map segment to x and y
	            switch (segType) {

	            case 'M':
	            case 'L':
	            case 'T':
	            case 'C':
	            case 'S':
	            case 'Q':
	                x = segment.x;
	                y = segment.y;
	                break;
	            case 'H':
	                x = segment.x;
	                break;
	            case 'V':
	                y = segment.y;
	                break;
	            }

	            addPoint(x, y, segment.pathSegType);
	        };

	        // ensure path is absolute
	        _svgPathToAbsolute(path);

	        // get total length
	        total = path.getTotalLength();

	        // queue segments
	        segments = [];
	        for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
	            segments.push(path.pathSegList.getItem(i));

	        segmentsQueue = segments.concat();

	        // sample through path
	        while (length < total) {
	            // get segment at position
	            segmentIndex = path.getPathSegAtLength(length);
	            segment = segments[segmentIndex];

	            // new segment
	            if (segment != lastSegment) {
	                while (segmentsQueue.length && segmentsQueue[0] != segment)
	                    addSegmentPoint(segmentsQueue.shift());

	                lastSegment = segment;
	            }

	            // add points in between when curving
	            // TODO: adaptive sampling
	            switch (segment.pathSegTypeAsLetter.toUpperCase()) {

	            case 'C':
	            case 'T':
	            case 'S':
	            case 'Q':
	            case 'A':
	                point = path.getPointAtLength(length);
	                addPoint(point.x, point.y, 0);
	                break;

	            }

	            // increment by sample value
	            length += sampleLength;
	        }

	        // add remaining segments not passed by sampling
	        for (i = 0, il = segmentsQueue.length; i < il; ++i)
	            addSegmentPoint(segmentsQueue[i]);

	        return points;
	    };

	    var _svgPathToAbsolute = function(path) {
	        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
	        var x0, y0, x1, y1, x2, y2, segs = path.pathSegList,
	            x = 0, y = 0, len = segs.numberOfItems;

	        for (var i = 0; i < len; ++i) {
	            var seg = segs.getItem(i),
	                segType = seg.pathSegTypeAsLetter;

	            if (/[MLHVCSQTA]/.test(segType)) {
	                if ('x' in seg) x = seg.x;
	                if ('y' in seg) y = seg.y;
	            } else {
	                if ('x1' in seg) x1 = x + seg.x1;
	                if ('x2' in seg) x2 = x + seg.x2;
	                if ('y1' in seg) y1 = y + seg.y1;
	                if ('y2' in seg) y2 = y + seg.y2;
	                if ('x' in seg) x += seg.x;
	                if ('y' in seg) y += seg.y;

	                switch (segType) {

	                case 'm':
	                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
	                    break;
	                case 'l':
	                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
	                    break;
	                case 'h':
	                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
	                    break;
	                case 'v':
	                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
	                    break;
	                case 'c':
	                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
	                    break;
	                case 's':
	                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
	                    break;
	                case 'q':
	                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
	                    break;
	                case 't':
	                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
	                    break;
	                case 'a':
	                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
	                    break;
	                case 'z':
	                case 'Z':
	                    x = x0;
	                    y = y0;
	                    break;

	                }
	            }

	            if (segType == 'M' || segType == 'm') {
	                x0 = x;
	                y0 = y;
	            }
	        }
	    };

	})();

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* The `Matter.RenderPixi` module is an example renderer using pixi.js.
	* See also `Matter.Render` for a canvas based renderer.
	*
	* @class RenderPixi
	* @deprecated the Matter.RenderPixi module will soon be removed from the Matter.js core.
	* It will likely be moved to its own repository (but maintenance will be limited).
	*/

	var RenderPixi = {};

	module.exports = RenderPixi;

	var Composite = __webpack_require__(10);
	var Common = __webpack_require__(6);

	(function() {

	    var _requestAnimationFrame,
	        _cancelAnimationFrame;

	    if (typeof window !== 'undefined') {
	        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
	                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame 
	                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };
	   
	        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
	                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
	    }
	    
	    /**
	     * Creates a new Pixi.js WebGL renderer
	     * @method create
	     * @param {object} options
	     * @return {RenderPixi} A new renderer
	     * @deprecated
	     */
	    RenderPixi.create = function(options) {
	        Common.log('RenderPixi.create: Matter.RenderPixi is deprecated (see docs)', 'warn');

	        var defaults = {
	            controller: RenderPixi,
	            engine: null,
	            element: null,
	            frameRequestId: null,
	            canvas: null,
	            renderer: null,
	            container: null,
	            spriteContainer: null,
	            pixiOptions: null,
	            options: {
	                width: 800,
	                height: 600,
	                background: '#fafafa',
	                wireframeBackground: '#222',
	                hasBounds: false,
	                enabled: true,
	                wireframes: true,
	                showSleeping: true,
	                showDebug: false,
	                showBroadphase: false,
	                showBounds: false,
	                showVelocity: false,
	                showCollisions: false,
	                showAxes: false,
	                showPositions: false,
	                showAngleIndicator: false,
	                showIds: false,
	                showShadows: false
	            }
	        };

	        var render = Common.extend(defaults, options),
	            transparent = !render.options.wireframes && render.options.background === 'transparent';

	        // init pixi
	        render.pixiOptions = render.pixiOptions || {
	            view: render.canvas,
	            transparent: transparent,
	            antialias: true,
	            backgroundColor: options.background
	        };

	        render.mouse = options.mouse;
	        render.engine = options.engine;
	        render.renderer = render.renderer || new PIXI.WebGLRenderer(render.options.width, render.options.height, render.pixiOptions);
	        render.container = render.container || new PIXI.Container();
	        render.spriteContainer = render.spriteContainer || new PIXI.Container();
	        render.canvas = render.canvas || render.renderer.view;
	        render.bounds = render.bounds || { 
	            min: {
	                x: 0,
	                y: 0
	            }, 
	            max: { 
	                x: render.options.width,
	                y: render.options.height
	            }
	        };

	        // caches
	        render.textures = {};
	        render.sprites = {};
	        render.primitives = {};

	        // use a sprite batch for performance
	        render.container.addChild(render.spriteContainer);

	        // insert canvas
	        if (Common.isElement(render.element)) {
	            render.element.appendChild(render.canvas);
	        } else {
	            Common.log('No "render.element" passed, "render.canvas" was not inserted into document.', 'warn');
	        }

	        // prevent menus on canvas
	        render.canvas.oncontextmenu = function() { return false; };
	        render.canvas.onselectstart = function() { return false; };

	        return render;
	    };

	    /**
	     * Continuously updates the render canvas on the `requestAnimationFrame` event.
	     * @method run
	     * @param {render} render
	     * @deprecated
	     */
	    RenderPixi.run = function(render) {
	        (function loop(time){
	            render.frameRequestId = _requestAnimationFrame(loop);
	            RenderPixi.world(render);
	        })();
	    };

	    /**
	     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
	     * @method stop
	     * @param {render} render
	     * @deprecated
	     */
	    RenderPixi.stop = function(render) {
	        _cancelAnimationFrame(render.frameRequestId);
	    };

	    /**
	     * Clears the scene graph
	     * @method clear
	     * @param {RenderPixi} render
	     * @deprecated
	     */
	    RenderPixi.clear = function(render) {
	        var container = render.container,
	            spriteContainer = render.spriteContainer;

	        // clear stage container
	        while (container.children[0]) { 
	            container.removeChild(container.children[0]); 
	        }

	        // clear sprite batch
	        while (spriteContainer.children[0]) { 
	            spriteContainer.removeChild(spriteContainer.children[0]); 
	        }

	        var bgSprite = render.sprites['bg-0'];

	        // clear caches
	        render.textures = {};
	        render.sprites = {};
	        render.primitives = {};

	        // set background sprite
	        render.sprites['bg-0'] = bgSprite;
	        if (bgSprite)
	            container.addChildAt(bgSprite, 0);

	        // add sprite batch back into container
	        render.container.addChild(render.spriteContainer);

	        // reset background state
	        render.currentBackground = null;

	        // reset bounds transforms
	        container.scale.set(1, 1);
	        container.position.set(0, 0);
	    };

	    /**
	     * Sets the background of the canvas 
	     * @method setBackground
	     * @param {RenderPixi} render
	     * @param {string} background
	     * @deprecated
	     */
	    RenderPixi.setBackground = function(render, background) {
	        if (render.currentBackground !== background) {
	            var isColor = background.indexOf && background.indexOf('#') !== -1,
	                bgSprite = render.sprites['bg-0'];

	            if (isColor) {
	                // if solid background color
	                var color = Common.colorToNumber(background);
	                render.renderer.backgroundColor = color;

	                // remove background sprite if existing
	                if (bgSprite)
	                    render.container.removeChild(bgSprite); 
	            } else {
	                // initialise background sprite if needed
	                if (!bgSprite) {
	                    var texture = _getTexture(render, background);

	                    bgSprite = render.sprites['bg-0'] = new PIXI.Sprite(texture);
	                    bgSprite.position.x = 0;
	                    bgSprite.position.y = 0;
	                    render.container.addChildAt(bgSprite, 0);
	                }
	            }

	            render.currentBackground = background;
	        }
	    };

	    /**
	     * Description
	     * @method world
	     * @param {engine} engine
	     * @deprecated
	     */
	    RenderPixi.world = function(render) {
	        var engine = render.engine,
	            world = engine.world,
	            renderer = render.renderer,
	            container = render.container,
	            options = render.options,
	            bodies = Composite.allBodies(world),
	            allConstraints = Composite.allConstraints(world),
	            constraints = [],
	            i;

	        if (options.wireframes) {
	            RenderPixi.setBackground(render, options.wireframeBackground);
	        } else {
	            RenderPixi.setBackground(render, options.background);
	        }

	        // handle bounds
	        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
	            boundsHeight = render.bounds.max.y - render.bounds.min.y,
	            boundsScaleX = boundsWidth / render.options.width,
	            boundsScaleY = boundsHeight / render.options.height;

	        if (options.hasBounds) {
	            // Hide bodies that are not in view
	            for (i = 0; i < bodies.length; i++) {
	                var body = bodies[i];
	                body.render.sprite.visible = Bounds.overlaps(body.bounds, render.bounds);
	            }

	            // filter out constraints that are not in view
	            for (i = 0; i < allConstraints.length; i++) {
	                var constraint = allConstraints[i],
	                    bodyA = constraint.bodyA,
	                    bodyB = constraint.bodyB,
	                    pointAWorld = constraint.pointA,
	                    pointBWorld = constraint.pointB;

	                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
	                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

	                if (!pointAWorld || !pointBWorld)
	                    continue;

	                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
	                    constraints.push(constraint);
	            }

	            // transform the view
	            container.scale.set(1 / boundsScaleX, 1 / boundsScaleY);
	            container.position.set(-render.bounds.min.x * (1 / boundsScaleX), -render.bounds.min.y * (1 / boundsScaleY));
	        } else {
	            constraints = allConstraints;
	        }

	        for (i = 0; i < bodies.length; i++)
	            RenderPixi.body(render, bodies[i]);

	        for (i = 0; i < constraints.length; i++)
	            RenderPixi.constraint(render, constraints[i]);

	        renderer.render(container);
	    };


	    /**
	     * Description
	     * @method constraint
	     * @param {engine} engine
	     * @param {constraint} constraint
	     * @deprecated
	     */
	    RenderPixi.constraint = function(render, constraint) {
	        var engine = render.engine,
	            bodyA = constraint.bodyA,
	            bodyB = constraint.bodyB,
	            pointA = constraint.pointA,
	            pointB = constraint.pointB,
	            container = render.container,
	            constraintRender = constraint.render,
	            primitiveId = 'c-' + constraint.id,
	            primitive = render.primitives[primitiveId];

	        // initialise constraint primitive if not existing
	        if (!primitive)
	            primitive = render.primitives[primitiveId] = new PIXI.Graphics();

	        // don't render if constraint does not have two end points
	        if (!constraintRender.visible || !constraint.pointA || !constraint.pointB) {
	            primitive.clear();
	            return;
	        }

	        // add to scene graph if not already there
	        if (Common.indexOf(container.children, primitive) === -1)
	            container.addChild(primitive);

	        // render the constraint on every update, since they can change dynamically
	        primitive.clear();
	        primitive.beginFill(0, 0);
	        primitive.lineStyle(constraintRender.lineWidth, Common.colorToNumber(constraintRender.strokeStyle), 1);
	        
	        if (bodyA) {
	            primitive.moveTo(bodyA.position.x + pointA.x, bodyA.position.y + pointA.y);
	        } else {
	            primitive.moveTo(pointA.x, pointA.y);
	        }

	        if (bodyB) {
	            primitive.lineTo(bodyB.position.x + pointB.x, bodyB.position.y + pointB.y);
	        } else {
	            primitive.lineTo(pointB.x, pointB.y);
	        }

	        primitive.endFill();
	    };
	    
	    /**
	     * Description
	     * @method body
	     * @param {engine} engine
	     * @param {body} body
	     * @deprecated
	     */
	    RenderPixi.body = function(render, body) {
	        var engine = render.engine,
	            bodyRender = body.render;

	        if (!bodyRender.visible)
	            return;

	        if (bodyRender.sprite && bodyRender.sprite.texture) {
	            var spriteId = 'b-' + body.id,
	                sprite = render.sprites[spriteId],
	                spriteContainer = render.spriteContainer;

	            // initialise body sprite if not existing
	            if (!sprite)
	                sprite = render.sprites[spriteId] = _createBodySprite(render, body);

	            // add to scene graph if not already there
	            if (Common.indexOf(spriteContainer.children, sprite) === -1)
	                spriteContainer.addChild(sprite);

	            // update body sprite
	            sprite.position.x = body.position.x;
	            sprite.position.y = body.position.y;
	            sprite.rotation = body.angle;
	            sprite.scale.x = bodyRender.sprite.xScale || 1;
	            sprite.scale.y = bodyRender.sprite.yScale || 1;
	        } else {
	            var primitiveId = 'b-' + body.id,
	                primitive = render.primitives[primitiveId],
	                container = render.container;

	            // initialise body primitive if not existing
	            if (!primitive) {
	                primitive = render.primitives[primitiveId] = _createBodyPrimitive(render, body);
	                primitive.initialAngle = body.angle;
	            }

	            // add to scene graph if not already there
	            if (Common.indexOf(container.children, primitive) === -1)
	                container.addChild(primitive);

	            // update body primitive
	            primitive.position.x = body.position.x;
	            primitive.position.y = body.position.y;
	            primitive.rotation = body.angle - primitive.initialAngle;
	        }
	    };

	    /**
	     * Creates a body sprite
	     * @method _createBodySprite
	     * @private
	     * @param {RenderPixi} render
	     * @param {body} body
	     * @return {PIXI.Sprite} sprite
	     * @deprecated
	     */
	    var _createBodySprite = function(render, body) {
	        var bodyRender = body.render,
	            texturePath = bodyRender.sprite.texture,
	            texture = _getTexture(render, texturePath),
	            sprite = new PIXI.Sprite(texture);

	        sprite.anchor.x = body.render.sprite.xOffset;
	        sprite.anchor.y = body.render.sprite.yOffset;

	        return sprite;
	    };

	    /**
	     * Creates a body primitive
	     * @method _createBodyPrimitive
	     * @private
	     * @param {RenderPixi} render
	     * @param {body} body
	     * @return {PIXI.Graphics} graphics
	     * @deprecated
	     */
	    var _createBodyPrimitive = function(render, body) {
	        var bodyRender = body.render,
	            options = render.options,
	            primitive = new PIXI.Graphics(),
	            fillStyle = Common.colorToNumber(bodyRender.fillStyle),
	            strokeStyle = Common.colorToNumber(bodyRender.strokeStyle),
	            strokeStyleIndicator = Common.colorToNumber(bodyRender.strokeStyle),
	            strokeStyleWireframe = Common.colorToNumber('#bbb'),
	            strokeStyleWireframeIndicator = Common.colorToNumber('#CD5C5C'),
	            part;

	        primitive.clear();

	        // handle compound parts
	        for (var k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
	            part = body.parts[k];

	            if (!options.wireframes) {
	                primitive.beginFill(fillStyle, 1);
	                primitive.lineStyle(bodyRender.lineWidth, strokeStyle, 1);
	            } else {
	                primitive.beginFill(0, 0);
	                primitive.lineStyle(1, strokeStyleWireframe, 1);
	            }

	            primitive.moveTo(part.vertices[0].x - body.position.x, part.vertices[0].y - body.position.y);

	            for (var j = 1; j < part.vertices.length; j++) {
	                primitive.lineTo(part.vertices[j].x - body.position.x, part.vertices[j].y - body.position.y);
	            }

	            primitive.lineTo(part.vertices[0].x - body.position.x, part.vertices[0].y - body.position.y);

	            primitive.endFill();

	            // angle indicator
	            if (options.showAngleIndicator || options.showAxes) {
	                primitive.beginFill(0, 0);

	                if (options.wireframes) {
	                    primitive.lineStyle(1, strokeStyleWireframeIndicator, 1);
	                } else {
	                    primitive.lineStyle(1, strokeStyleIndicator);
	                }

	                primitive.moveTo(part.position.x - body.position.x, part.position.y - body.position.y);
	                primitive.lineTo(((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2 - body.position.x), 
	                                 ((part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2 - body.position.y));

	                primitive.endFill();
	            }
	        }

	        return primitive;
	    };

	    /**
	     * Gets the requested texture (a PIXI.Texture) via its path
	     * @method _getTexture
	     * @private
	     * @param {RenderPixi} render
	     * @param {string} imagePath
	     * @return {PIXI.Texture} texture
	     * @deprecated
	     */
	    var _getTexture = function(render, imagePath) {
	        var texture = render.textures[imagePath];

	        if (!texture)
	            texture = render.textures[imagePath] = PIXI.Texture.fromImage(imagePath);

	        return texture;
	    };

	})();


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var Player  = __webpack_require__(33);
	var World   = __webpack_require__(2).World;

	function Game(world) {
	    console.log(world);
	    this.width = world.bounds.max.x - world.bounds.min.x;
	    this.height = world.bounds.max.y - world.bounds.min.y;

	    world.bounds.min.x = -300;
	    world.bounds.min.y = -300;
	    world.bounds.max.x = 1100;
	    world.bounds.max.y = 900;

	    this.stage = null;
	    this.world = world;

	    this.entities = [];

	}

	Game.prototype.start = function() {
	    var self = this;

	    return new Promise(function(resolve, reject) {
	        self.world.gravity.y = 0;

	        self.stage = new PIXI.Container();
	        self.stage.interactive = true;

	        self._bindListeners();

	        var background = new PIXI.Graphics();
	        background.beginFill(0x111111);
	        background.drawRect(0, 0, self.width, self.height);
	        self.stage.addChild(background);

	        var player = new Player();
	        player.init(self.stage).then(function() {
	            self.entities.push(player);
	            World.addBody(self.world, player.body);
	        });

	        resolve(true);

	    });
	};

	Game.prototype.update = function(deltaTime) {
	    for (var i = this.entities.length - 1; i >= 0; i--) {
	        var e = this.entities[i];
	        e.update(deltaTime);
	    };
	};

	Game.prototype.onDown = function(event) {
	    var self = this;
	    // Check if we are the target of the click.
	    if (event.data.target.parent == null) {
	        var player = self.getEntitiesByTag("player")[0];
	        player.follow(event.data.global);
	    }
	};

	Game.prototype.onUp = function(event) {

	};

	Game.prototype.getEntitiesByTag = function(tag) {
	    var output = [];
	    for (var i = this.entities.length - 1; i >= 0; i--) {
	        var entity = this.entities[i];

	        if (entity.tags.includes(tag)) {
	            output.push(entity);
	        }
	    }

	    return output;
	};

	Game.prototype._bindListeners = function() {
	    var self = this;

	    this.stage.on('mousedown', function(e) {
	        self.onDown(e);
	    });
	    this.stage.on('touchstart', function(e) {
	        self.onDown(e);
	    });

	    this.stage.on('mouseup', function(e) {
	        self.onUp(e);
	    });
	}




	module.exports = Game;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var Entity = __webpack_require__(34),
	    Body   = __webpack_require__(2).Body,
	    Vector = __webpack_require__(2).Vector;

	function Player() {
	    Entity.call(this);

	    this.tags.push("player");
	}

	Player.prototype = Object.create(Entity.prototype);
	Player.prototype.constructor = Player;

	Player.prototype.init = function(stage) {
	    var self = this;

	    return Entity.prototype.init.call(this, stage, "../images/whale_blue.png")
	    .then(function() {
	        Body.translate(self.body, {x: 300, y: 400});
	    });
	};

	Player.prototype.update = function(deltaTime) {
	    var self = this;


	    Entity.prototype.update.call(self, deltaTime);
	};

	Player.prototype.onDown = function(event) {
	    var self = this;

	    var rawMousePos = event.data.global;

	    var localX = self.body.position.x - rawMousePos.x;
	    var localY = self.body.position.y - rawMousePos.y;
	    var worldMouse = { x : self.body.position.x + localX, y : self.body.position.y + localY};

	    var forceMagnitude = 0.009 * self.body.mass;

	    var normalForce = Vector.normalise(Vector.sub(worldMouse, self.body.position));
	    var finalForce = Vector.mult(normalForce, forceMagnitude);

	    Body.applyForce(self.body, worldMouse, finalForce);

	    Entity.prototype.onDown.call(self, event);
	};

	Player.prototype.onUp = function(event) {
	    var self = this;

	    Entity.prototype.onUp.call(self, event);
	};

	Player.prototype.follow = function(target) {
	    var self = this;

	    var vecToTarget = Vector.normalise( Vector.sub(target, self.body.position) );
	    var angleVector = Vector.normalise( {x: Math.cos(self.body.angle), y: Math.sin(self.body.angle)} );
	    var headingVector = Vector.normalise(Vector.add(self.body.position, angleVector));

	    // var angleDelta = headingVector vecToTarget;

	    var tailVector = Vector.add( self.body.position, Vector.neg(vecToTarget) );

	    // console.log( angleDelta);
	    Body.applyForce(self.body, tailVector, Vector.mult(vecToTarget, self.body.mass * 0.009) )

	};

	module.exports = Player;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var Bodies = __webpack_require__(2).Bodies,
	    Body   = __webpack_require__(2).Body;

	function Entity() {
	    this.sprite = null;
	    this.body   = null;

	    this.tags = [];
	}

	// PUBLIC METHODS

	Entity.prototype.init = function(stage, image_path) {
	    var self = this;

	    return new Promise(function(resolve, reject) {

	        self.sprite = new PIXI.Sprite.fromImage(image_path);
	        self.sprite.anchor = new PIXI.Point(.5, .5);
	        self.sprite.interactive = true;

	        self._bindListeners();

	        stage.addChild(self.sprite);

	        self.body = Bodies.rectangle(
	            0, 0, self.sprite.width, self.sprite.height
	        );

	        resolve(true);
	    });
	};

	Entity.prototype.update = function(deltaTime) {
	    var self = this;

	    self.sprite.position = self.body.position;
	    self.sprite.rotation = self.body.angle;
	};

	Entity.prototype.onDown = function(event) {};

	Entity.prototype.onUp = function(event) {};

	// PRIVATE METHODS

	Entity.prototype._bindListeners = function () {
	    var self = this;

	    this.sprite.on('mousedown', function(e) {
	        self.onDown(e);
	    });
	    this.sprite.on('touchstart', function(e) {
	        self.onDown(e);
	    });

	    this.sprite.on('mouseup', function(e) {
	        self.onUp(e);
	    });
	};

	module.exports = Entity;

/***/ }
/******/ ]);