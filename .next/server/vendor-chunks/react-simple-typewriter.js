"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-simple-typewriter";
exports.ids = ["vendor-chunks/react-simple-typewriter"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-simple-typewriter/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-simple-typewriter/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("Object.defineProperty(exports, \"__esModule\", ({value:!0}));var e=__webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\"),t=__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"),r=function(){return r=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)};function o(e,t){var o,n;switch(t.type){case\"TYPE\":return r(r({},e),{speed:t.speed,text:null===(o=t.payload)||void 0===o?void 0:o.substring(0,e.text.length+1)});case\"DELAY\":return r(r({},e),{speed:t.payload});case\"DELETE\":return r(r({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length-1)});case\"COUNT\":return r(r({},e),{count:e.count+1});default:return e}}var n=function(e){var r=e.words,n=void 0===r?[\"Hello World!\",\"This is\",\"a simple Typewriter\"]:r,i=e.loop,s=void 0===i?1:i,u=e.typeSpeed,l=void 0===u?80:u,c=e.deleteSpeed,d=void 0===c?50:c,a=e.delaySpeed,p=void 0===a?1500:a,y=e.onLoopDone,f=e.onType,v=e.onDelete,m=e.onDelay,h=t.useReducer(o,{speed:l,text:\"\",count:0}),T=h[0],g=T.speed,_=T.text,x=T.count,D=h[1],C=t.useRef(0),E=t.useRef(!1),S=t.useRef(!1),b=t.useRef(!1),k=t.useRef(!1),w=t.useCallback((function(){var e=x%n.length,t=n[e];S.current?(D({type:\"DELETE\",payload:t,speed:d}),\"\"===_&&(S.current=!1,D({type:\"COUNT\"}))):(D({type:\"TYPE\",payload:t,speed:l}),b.current=!0,_===t&&(D({type:\"DELAY\",payload:p}),b.current=!1,k.current=!0,setTimeout((function(){k.current=!1,S.current=!0}),p),s>0&&(C.current+=1,C.current/n.length===s&&(k.current=!1,E.current=!0)))),b.current&&f&&f(C.current),S.current&&v&&v(),k.current&&m&&m()}),[x,p,d,s,l,n,_,f,v,m]);return t.useEffect((function(){var e=setTimeout(w,g);return E.current&&clearTimeout(e),function(){return clearTimeout(e)}}),[w,g]),t.useEffect((function(){y&&E.current&&y()}),[y]),[_,{isType:b.current,isDelay:k.current,isDelete:S.current,isDone:E.current}]};var i=\"styles-module_blinkingCursor__yugAC\",s=\"styles-module_blinking__9VXRT\";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&\"undefined\"!=typeof document){var o=document.head||document.getElementsByTagName(\"head\")[0],n=document.createElement(\"style\");n.type=\"text/css\",\"top\"===r&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(\".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}\");var u=t.memo((function(t){var o=t.cursorBlinking,n=void 0===o||o,u=t.cursorStyle,l=void 0===u?\"|\":u,c=t.cursorColor,d=void 0===c?\"inherit\":c;return e.jsx(\"span\",r({style:{color:d},className:\"\".concat(i,\" \").concat(n?s:\"\")},{children:l}))}));exports.Cursor=u,exports.Typewriter=function(t){var r=t.words,o=void 0===r?[\"Hello World!\",\"This is\",\"a simple Typewriter\"]:r,i=t.loop,s=void 0===i?1:i,l=t.typeSpeed,c=void 0===l?80:l,d=t.deleteSpeed,a=void 0===d?50:d,p=t.delaySpeed,y=void 0===p?1500:p,f=t.cursor,v=void 0!==f&&f,m=t.cursorStyle,h=void 0===m?\"|\":m,T=t.cursorColor,g=void 0===T?\"inherit\":T,_=t.cursorBlinking,x=void 0===_||_,D=t.onLoopDone,C=t.onType,E=t.onDelay,S=t.onDelete,b=n({words:o,loop:s,typeSpeed:c,deleteSpeed:a,delaySpeed:y,onLoopDone:D,onType:C,onDelay:E,onDelete:S})[0];return e.jsxs(e.Fragment,{children:[e.jsx(\"span\",{children:b}),v&&e.jsx(u,{cursorStyle:h,cursorColor:g,cursorBlinking:x})]})},exports.useTypewriter=n;\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXIvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYSw4Q0FBMkMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxNQUFNLG1CQUFPLENBQUMsZ0lBQW1CLElBQUksbUJBQU8sQ0FBQyx3R0FBTyxlQUFlLG9DQUFvQyxpQ0FBaUMsSUFBSSx1RkFBdUYsU0FBUywwQkFBMEIsZ0JBQWdCLFFBQVEsZUFBZSx3QkFBd0IsS0FBSywwRkFBMEYsRUFBRSx5QkFBeUIsS0FBSyxnQkFBZ0IsRUFBRSwwQkFBMEIsS0FBSywwRkFBMEYsRUFBRSx5QkFBeUIsS0FBSyxnQkFBZ0IsRUFBRSxrQkFBa0Isa0JBQWtCLGtSQUFrUix3QkFBd0IsbUpBQW1KLHdCQUF3QixjQUFjLGdDQUFnQywyQkFBMkIsYUFBYSxRQUFRLDhCQUE4QiwwQkFBMEIsdUJBQXVCLG1EQUFtRCwwQkFBMEIsOElBQThJLHlCQUF5QiwrQkFBK0Isc0JBQXNCLDZDQUE2Qyx3QkFBd0IsaUNBQWlDLGtCQUFrQixXQUFXLHVFQUF1RSxHQUFHLDhFQUE4RSxlQUFlLGlCQUFpQixFQUFFLGlCQUFpQixvQ0FBb0MsZ0dBQWdHLHlLQUF5Syx1Q0FBdUMsY0FBYyxhQUFhLFNBQVMsb0JBQW9CLFVBQVUsa0JBQWtCLE1BQU0sK0JBQStCLHVCQUF1QixtQ0FBbUMsMENBQTBDLHNDQUFzQyxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsMEJBQTBCLG1IQUFtSCx1QkFBdUIsT0FBTyxRQUFRLDJDQUEyQyxFQUFFLFdBQVcsR0FBRyxHQUFHLGNBQWMsR0FBRyxrQkFBa0IsYUFBYSwrWUFBK1ksaUdBQWlHLEtBQUssMEJBQTBCLHdCQUF3QixXQUFXLGNBQWMsNkNBQTZDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQjtBQUNoZ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXIvZGlzdC9pbmRleC5qcz9iNTMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBlPXJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKSx0PXJlcXVpcmUoXCJyZWFjdFwiKSxyPWZ1bmN0aW9uKCl7cmV0dXJuIHI9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LHI9MSxvPWFyZ3VtZW50cy5sZW5ndGg7cjxvO3IrKylmb3IodmFyIG4gaW4gdD1hcmd1bWVudHNbcl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbikmJihlW25dPXRbbl0pO3JldHVybiBlfSxyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07ZnVuY3Rpb24gbyhlLHQpe3ZhciBvLG47c3dpdGNoKHQudHlwZSl7Y2FzZVwiVFlQRVwiOnJldHVybiByKHIoe30sZSkse3NwZWVkOnQuc3BlZWQsdGV4dDpudWxsPT09KG89dC5wYXlsb2FkKXx8dm9pZCAwPT09bz92b2lkIDA6by5zdWJzdHJpbmcoMCxlLnRleHQubGVuZ3RoKzEpfSk7Y2FzZVwiREVMQVlcIjpyZXR1cm4gcihyKHt9LGUpLHtzcGVlZDp0LnBheWxvYWR9KTtjYXNlXCJERUxFVEVcIjpyZXR1cm4gcihyKHt9LGUpLHtzcGVlZDp0LnNwZWVkLHRleHQ6bnVsbD09PShuPXQucGF5bG9hZCl8fHZvaWQgMD09PW4/dm9pZCAwOm4uc3Vic3RyaW5nKDAsZS50ZXh0Lmxlbmd0aC0xKX0pO2Nhc2VcIkNPVU5UXCI6cmV0dXJuIHIocih7fSxlKSx7Y291bnQ6ZS5jb3VudCsxfSk7ZGVmYXVsdDpyZXR1cm4gZX19dmFyIG49ZnVuY3Rpb24oZSl7dmFyIHI9ZS53b3JkcyxuPXZvaWQgMD09PXI/W1wiSGVsbG8gV29ybGQhXCIsXCJUaGlzIGlzXCIsXCJhIHNpbXBsZSBUeXBld3JpdGVyXCJdOnIsaT1lLmxvb3Ascz12b2lkIDA9PT1pPzE6aSx1PWUudHlwZVNwZWVkLGw9dm9pZCAwPT09dT84MDp1LGM9ZS5kZWxldGVTcGVlZCxkPXZvaWQgMD09PWM/NTA6YyxhPWUuZGVsYXlTcGVlZCxwPXZvaWQgMD09PWE/MTUwMDphLHk9ZS5vbkxvb3BEb25lLGY9ZS5vblR5cGUsdj1lLm9uRGVsZXRlLG09ZS5vbkRlbGF5LGg9dC51c2VSZWR1Y2VyKG8se3NwZWVkOmwsdGV4dDpcIlwiLGNvdW50OjB9KSxUPWhbMF0sZz1ULnNwZWVkLF89VC50ZXh0LHg9VC5jb3VudCxEPWhbMV0sQz10LnVzZVJlZigwKSxFPXQudXNlUmVmKCExKSxTPXQudXNlUmVmKCExKSxiPXQudXNlUmVmKCExKSxrPXQudXNlUmVmKCExKSx3PXQudXNlQ2FsbGJhY2soKGZ1bmN0aW9uKCl7dmFyIGU9eCVuLmxlbmd0aCx0PW5bZV07Uy5jdXJyZW50PyhEKHt0eXBlOlwiREVMRVRFXCIscGF5bG9hZDp0LHNwZWVkOmR9KSxcIlwiPT09XyYmKFMuY3VycmVudD0hMSxEKHt0eXBlOlwiQ09VTlRcIn0pKSk6KEQoe3R5cGU6XCJUWVBFXCIscGF5bG9hZDp0LHNwZWVkOmx9KSxiLmN1cnJlbnQ9ITAsXz09PXQmJihEKHt0eXBlOlwiREVMQVlcIixwYXlsb2FkOnB9KSxiLmN1cnJlbnQ9ITEsay5jdXJyZW50PSEwLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ay5jdXJyZW50PSExLFMuY3VycmVudD0hMH0pLHApLHM+MCYmKEMuY3VycmVudCs9MSxDLmN1cnJlbnQvbi5sZW5ndGg9PT1zJiYoay5jdXJyZW50PSExLEUuY3VycmVudD0hMCkpKSksYi5jdXJyZW50JiZmJiZmKEMuY3VycmVudCksUy5jdXJyZW50JiZ2JiZ2KCksay5jdXJyZW50JiZtJiZtKCl9KSxbeCxwLGQscyxsLG4sXyxmLHYsbV0pO3JldHVybiB0LnVzZUVmZmVjdCgoZnVuY3Rpb24oKXt2YXIgZT1zZXRUaW1lb3V0KHcsZyk7cmV0dXJuIEUuY3VycmVudCYmY2xlYXJUaW1lb3V0KGUpLGZ1bmN0aW9uKCl7cmV0dXJuIGNsZWFyVGltZW91dChlKX19KSxbdyxnXSksdC51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7eSYmRS5jdXJyZW50JiZ5KCl9KSxbeV0pLFtfLHtpc1R5cGU6Yi5jdXJyZW50LGlzRGVsYXk6ay5jdXJyZW50LGlzRGVsZXRlOlMuY3VycmVudCxpc0RvbmU6RS5jdXJyZW50fV19O3ZhciBpPVwic3R5bGVzLW1vZHVsZV9ibGlua2luZ0N1cnNvcl9feXVnQUNcIixzPVwic3R5bGVzLW1vZHVsZV9ibGlua2luZ19fOVZYUlRcIjshZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD17fSk7dmFyIHI9dC5pbnNlcnRBdDtpZihlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe3ZhciBvPWRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtuLnR5cGU9XCJ0ZXh0L2Nzc1wiLFwidG9wXCI9PT1yJiZvLmZpcnN0Q2hpbGQ/by5pbnNlcnRCZWZvcmUobixvLmZpcnN0Q2hpbGQpOm8uYXBwZW5kQ2hpbGQobiksbi5zdHlsZVNoZWV0P24uc3R5bGVTaGVldC5jc3NUZXh0PWU6bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKSl9fShcIi5zdHlsZXMtbW9kdWxlX2JsaW5raW5nQ3Vyc29yX195dWdBQ3tjb2xvcjppbmhlcml0O2ZvbnQ6aW5oZXJpdDtsZWZ0OjNweDtsaW5lLWhlaWdodDppbmhlcml0O29wYWNpdHk6MTtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MH0uc3R5bGVzLW1vZHVsZV9ibGlua2luZ19fOVZYUlR7YW5pbWF0aW9uLWR1cmF0aW9uOi44czthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1uYW1lOnN0eWxlcy1tb2R1bGVfYmxpbmtfX3JxZmFmfUBrZXlmcmFtZXMgc3R5bGVzLW1vZHVsZV9ibGlua19fcnFmYWZ7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MH19XCIpO3ZhciB1PXQubWVtbygoZnVuY3Rpb24odCl7dmFyIG89dC5jdXJzb3JCbGlua2luZyxuPXZvaWQgMD09PW98fG8sdT10LmN1cnNvclN0eWxlLGw9dm9pZCAwPT09dT9cInxcIjp1LGM9dC5jdXJzb3JDb2xvcixkPXZvaWQgMD09PWM/XCJpbmhlcml0XCI6YztyZXR1cm4gZS5qc3goXCJzcGFuXCIscih7c3R5bGU6e2NvbG9yOmR9LGNsYXNzTmFtZTpcIlwiLmNvbmNhdChpLFwiIFwiKS5jb25jYXQobj9zOlwiXCIpfSx7Y2hpbGRyZW46bH0pKX0pKTtleHBvcnRzLkN1cnNvcj11LGV4cG9ydHMuVHlwZXdyaXRlcj1mdW5jdGlvbih0KXt2YXIgcj10LndvcmRzLG89dm9pZCAwPT09cj9bXCJIZWxsbyBXb3JsZCFcIixcIlRoaXMgaXNcIixcImEgc2ltcGxlIFR5cGV3cml0ZXJcIl06cixpPXQubG9vcCxzPXZvaWQgMD09PWk/MTppLGw9dC50eXBlU3BlZWQsYz12b2lkIDA9PT1sPzgwOmwsZD10LmRlbGV0ZVNwZWVkLGE9dm9pZCAwPT09ZD81MDpkLHA9dC5kZWxheVNwZWVkLHk9dm9pZCAwPT09cD8xNTAwOnAsZj10LmN1cnNvcix2PXZvaWQgMCE9PWYmJmYsbT10LmN1cnNvclN0eWxlLGg9dm9pZCAwPT09bT9cInxcIjptLFQ9dC5jdXJzb3JDb2xvcixnPXZvaWQgMD09PVQ/XCJpbmhlcml0XCI6VCxfPXQuY3Vyc29yQmxpbmtpbmcseD12b2lkIDA9PT1ffHxfLEQ9dC5vbkxvb3BEb25lLEM9dC5vblR5cGUsRT10Lm9uRGVsYXksUz10Lm9uRGVsZXRlLGI9bih7d29yZHM6byxsb29wOnMsdHlwZVNwZWVkOmMsZGVsZXRlU3BlZWQ6YSxkZWxheVNwZWVkOnksb25Mb29wRG9uZTpELG9uVHlwZTpDLG9uRGVsYXk6RSxvbkRlbGV0ZTpTfSlbMF07cmV0dXJuIGUuanN4cyhlLkZyYWdtZW50LHtjaGlsZHJlbjpbZS5qc3goXCJzcGFuXCIse2NoaWxkcmVuOmJ9KSx2JiZlLmpzeCh1LHtjdXJzb3JTdHlsZTpoLGN1cnNvckNvbG9yOmcsY3Vyc29yQmxpbmtpbmc6eH0pXX0pfSxleHBvcnRzLnVzZVR5cGV3cml0ZXI9bjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-simple-typewriter/dist/index.js\n");

/***/ })

};
;