/*! For license information please see c4f5d8e4.deb8b7d0.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[195],{6691:function(t,e,n){"use strict";n.d(e,{l:function(){return g},n:function(){return w}});var r=n(7294),i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function s(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}s(".styles-module_carousel-base__3keqD {\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\toutline: none;\n}\n\n.styles-module_item-provider__YgMwz {\n\toverflow: hidden;\n\twidth: 100%;\n\tcursor: pointer;\n}\n\n.styles-module_item-container__a8zaY img {\n\t-webkit-user-select: none;\n\t        user-select: none;\n\t-webkit-user-drag: none;\n}\n\n.styles-module_item-tracker__3bypy {\n\theight: 100%;\n\tdisplay: flex;\n}\n\n.styles-module_carousel-arrow__26sRw {\n\tz-index: 1;\n}\n");var o,a,l=function(t){return r.createElement("button",{className:"styles-module_carousel-arrow__26sRw",onClick:t.onClick,"data-direction":t.direction})};(a=o||(o={}))[a.Right=-1]="Right",a[a.Left=1]="Left";var u=function(){function t(t,e){this.arr=t,this.currentIndex=e}return t.prototype.next=function(){var t=this.currentIndex,e=this.arr;return this.currentIndex=t<e.length-1?t+1:0,this.current()},t.prototype.prev=function(){var t=this.currentIndex,e=this.arr;return this.currentIndex=t>0&&t<e.length?t-1:e.length-1,this.current()},t.prototype.current=function(){return this.arr[this.currentIndex]},t}(),c=function(t,e,n){return n*t*e},f=function(t,e,n,r){var i=t>e;return n?{left:i,right:i}:{left:i&&0!==r,right:i&&r+e<t}},d=function(t,e,n){if(!n)return t;for(var r=Array.from(t),i=new u(t,0),s=0;s<e;s++)r.unshift(i.prev());return r};function h(t){return t.nativeEvent instanceof MouseEvent?t.nativeEvent.pageX:t.nativeEvent instanceof TouchEvent?t.nativeEvent.changedTouches[0].pageX:0}var v=function(t){var e=(0,r.useState)(200),n=e[0],s=e[1],a=(0,r.useCallback)((function(e){if(null!==e){var n=e.getBoundingClientRect().width/t.show;s(n),t.widthCallBack(n)}}),[n]);t.responsive&&function(t){var e=(0,r.useState)(window.innerWidth),i=e[0],o=e[1];(0,r.useLayoutEffect)((function(){var t=function(){var t=i-window.innerWidth;o(window.innerWidth),function(t){s(n-t)}(t)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[])}();var l=(0,r.useState)({initial:t.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0}),u=l[0],c=l[1],f=function(e){e.persist(),c(i(i({},u),{isDown:!0,start:h(e),initial:t.transform,finished:!1}))},d=function(e){if(e.persist(),!u.finished){if(Math.abs(u.drag)<n*t.swipeOn)return t.dragCallback(t.transform),c({initial:t.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0});t.slideCallback(u.drag>0?o.Right:o.Left),c(i(i({},u),{drag:0,isDown:!1,finished:!0,pointers:!0}))}},v=function(t){if(t.persist(),u.isDown){var e=h(t);c(i(i({},u),{drag:u.start-e,pointers:!1}))}},m=t.swiping?{onTouchCancel:d,onTouchEnd:d,onTouchMove:v,onTouchStart:f,onMouseDown:f,onMouseLeave:d,onMouseUp:d,onMouseMove:v}:{};return r.createElement("div",{ref:a,className:"styles-module_item-provider__YgMwz"},r.createElement("div",i({"data-testid":"trackList"},m,{className:"styles-module_item-tracker__3bypy",style:{transform:"translateX("+(t.transform-u.drag)+"px)",transition:"transform "+t.transition+"s ease 0s",width:n*t.items.length}}),t.items.map((function(t,e){return r.createElement("div",{key:e,style:{width:n,pointerEvents:u.pointers?"all":"none"},className:"styles-module_item-container__a8zaY"},t)}))))},m={children:[],show:1,slide:1,transition:.5,swiping:!1,swipeOn:1,responsive:!1,infinite:!0,className:"",useArrowKeys:!1,a11y:{},dynamic:!1,paginationCallback:null,pageCount:0,rightArrow:null,leftArrow:null},g=function(t){var e,n,s,a,h=i(i({},m),t),g=(0,r.useState)(d(h.children,h.slide,h.infinite)),p=g[0],w=g[1],y=(0,r.useState)(0),_=y[0],b=y[1],k=(0,r.useState)({transform:0,transition:0,isSliding:!1}),L=k[0],E=k[1],C=(0,r.useState)(0),x=C[0],S=C[1],R=(0,r.useState)(f(h.children.length,h.show,h.infinite,x)),T=R[0],M=R[1],A=(s=t.children,a=(0,r.useRef)(),(0,r.useEffect)((function(){a.current=s})),a.current),I=(0,r.useState)(0),N=I[0],D=I[1],W=(0,r.useRef)(d(h.children,h.slide,h.infinite)),z=(0,r.useRef)(!1);h.dynamic&&(0,r.useEffect)((function(){var t=function(t,e,n,r,i){if(n&&n.length<e.length)return d(e,r,i);var s=t.map((function(t){return e.find((function(e){return t.key===e.key}))}));return s.some((function(t){return void 0===t}))?d(e,r,i):s}(W.current,h.children,A,h.slide,h.infinite);w(t),W.current=t,N<h.pageCount&&A&&(null==A?void 0:A.length)<h.children.length&&(O(o.Right),D(N+1))}),[h.children]);var O=function(t){if(!(L.isSliding||t===o.Right&&!T.right||t===o.Left&&!T.left)){if(h.paginationCallback&&t===o.Right&&N<h.pageCount-1&&!z.current)return z.current=!0,void h.paginationCallback(t);var e=h.children,n=function(t,e,n,r){var i=t-r*e;return i<0?n+i:n<=i?i-n:i}(x,h.slide,e.length,t),r=h.infinite?function(t,e,n,r,i,s){var a=new u(t,n),l=Array.from(e);switch(+s){case o.Left:for(var c=i;c>=0;c--)(i-c<0||!l[c-i])&&l.unshift(a.current()),a.prev();break;case o.Right:for(c=0;c<r+i;c++)l[2*i+c]||l.push(a.current()),a.next()}return l}(e,p,n,h.show,h.slide,t):p;h.infinite&&t===o.Right&&(w(r),W.current=r),E({transform:L.transform+c(_,h.slide,t),transition:h.transition,isSliding:!0}),S(n),M(f(e.length,h.show,h.infinite,n)),setTimeout((function(){if(h.infinite){var e=function(t,e,n){return n===o.Left?t.slice(0,-1*e):t.slice(e)}(t===o.Right?W.current:r,h.slide,t);w(e),W.current=e}E({transform:h.infinite?c(_,h.slide,o.Right):L.transform+c(_,h.slide,t),transition:0,isSliding:!1})}),1e3*h.transition),z.current=!1}};return r.createElement("div",i({},h.a11y,{"data-testid":"carousel",tabIndex:0},h.useArrowKeys?{onKeyDown:function(t){37===t.keyCode?O(o.Left):39===t.keyCode&&O(o.Right)}}:{},{className:"styles-module_carousel-base__3keqD "+h.className}),T.left&&r.createElement("div",{onClick:function(){return O(o.Left)}},null!==(e=h.leftArrow)&&void 0!==e?e:r.createElement(l,{direction:"left"})),r.createElement(v,i({},h,{transition:L.transition,items:W.current,transform:L.transform,slideCallback:function(t){O(t)},dragCallback:function(t){E({transform:t,transition:h.transition,isSliding:!1}),setTimeout((function(){return E(i(i({},L),{transition:0}))}),1e3*h.transition)},widthCallBack:function(t){b(t),E({transform:h.infinite?c(t,h.slide,o.Right):0,transition:0,isSliding:!1})}})),T.right&&r.createElement("div",{onClick:function(){return O(o.Right)}},null!==(n=h.rightArrow)&&void 0!==n?n:r.createElement(l,{direction:"right"})))},p="styles-module_sliding__3T6T6";s(".styles-module_sliderBase__swkx1 {\n\twidth: 100%;\n\tposition: relative;\n}\n\n.styles-module_slider__o0fqa {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tscrollbar-width: none; /* Firefox 64 */\n\t-ms-overflow-style: none; /* Internet Explorer 11 */\n}\n\n.styles-module_slider__o0fqa::-webkit-scrollbar {\n\t/** WebKit */\n\tdisplay: none;\n}\n\n.styles-module_slider__o0fqa > * {\n\tflex: 0 0 auto;\n}\n\n.styles-module_sliding__3T6T6 > * {\n\tpointer-events: none;\n}\n");var w=function(t){var e=t.children,n=t.className,i=t.leftIcon,s=t.rightIcon,a=(0,r.useRef)(null),l=(0,r.useState)(!1),u=l[0],c=l[1],f=(0,r.useState)({startX:0,scrollLeft:0}),d=f[0],h=f[1],v=function(){var t=a.current;return{left:!!t&&t.scrollLeft>0,right:!!t&&t.scrollWidth>t.scrollLeft+t.offsetWidth}},m=(0,r.useState)(v()),g=m[0],w=m[1],y=function(t){w(v())},_=(0,r.useCallback)((function(t){null!==t&&(Object.defineProperty(a,"current",{value:t}),w(v()),t.addEventListener("scroll",y))}),[a,e]),b=function(t){c(!1),w(v()),a.current.classList.remove(p)},k=function(t,e,n){for(var r=0,i=0;r<=t;i++)window.setTimeout(L,r,i*e/100+n),r+=t/100},L=function(t){a.current.scrollLeft=t},E=function(t,e,n){return r.createElement("div",{"data-arrow":e,onClick:function(){return function(t){var e=function(t){for(var e,n,r=a.current,i=t===o.Left?r.scrollLeft+r.offsetWidth:r.scrollLeft,s=0,l=0,u=Array.from(r.children);l<u.length;l++){var c=(e=u[l],n=getComputedStyle(e),e.offsetWidth+(parseInt(n.marginLeft,10)||0)+(parseInt(n.marginRight,10)||0));if((s+=c)>=i){var f=t===o.Left?s-i:c;return(r.offsetWidth-f)*t}}return r.offsetWidth}(t),n=a.current.scrollLeft;k(500,e,n)}(t)}},null!=n?n:r.createElement("button",null))};return r.createElement("div",{className:"styles-module_sliderBase__swkx1 "+n,"data-testid":"carousel"},g.left&&E(o.Right,"left",i),g.right&&E(o.Left,"right",s),r.createElement("div",{ref:_,onMouseDown:function(t){c(!0),h({startX:t.pageX-a.current.offsetLeft,scrollLeft:a.current.scrollLeft})},onMouseLeave:b,onMouseUp:b,onMouseMove:function(t){if(u){t.preventDefault(),a.current.classList.add(p);var e=t.pageX-a.current.offsetLeft-d.startX;a.current.scrollLeft=d.scrollLeft-e}},className:"styles-module_slider__o0fqa"},e))}},5239:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});n(7462);var r=n(7294),i=(n(4184),n(7019),n(9960),n(2263),n(4996),n(6691),n(6775));var s=function(){return r.createElement(i.l_,{to:"/react-carousel/docs/installation"})}},4184:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var s=typeof n;if("string"===s||"number"===s)t.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&t.push(o)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&t.push(a);else t.push(n.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()}}]);