(this["webpackJsonpmovie-searcher"]=this["webpackJsonpmovie-searcher"]||[]).push([[3],{89:function(e,t,n){"use strict";var o=n(15),r=n(0),i=n.n(r),s=n(16),l=n(18);function a(){var e=Object(o.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]);return a=function(){return e},e}function c(){var e=Object(o.a)(["\nposition: relative;\ndisplay: flex;\nwidth: 355px;\nheight: 533px;\nmargin: 0;\nbackground-size: cover;\n@media (max-width: 500px) {\n\twidth: 225px;\n\theight: 337px;\n}\n"]);return c=function(){return e},e}var h=s.a.div(c()),u=Object(s.a)(l.b)(a());t.a=function(e){var t=e.movie;if(void 0===t)return i.a.createElement(u,{to:"/"},i.a.createElement(h,null,i.a.createElement("h3",null,"Loading...")));var n=t.id,o=t.posterUrl;return i.a.createElement(u,{to:"/movie/".concat(n)},i.a.createElement(h,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(o,")")}}))}},90:function(e,t,n){"use strict";var o=n(13),r=n(15),i=n(0),s=n.n(i),l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var a=function(){return(a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var c={Pixel:"Pixel",Percent:"Percent"},h={unit:c.Percent,value:.8};var u=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&n.props.refreshFunction&&n.props.refreshFunction(),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="none")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||(n.isElementAtBottom(t,n.props.scrollThreshold)&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1},n.throttledOnScrollListener=function(e,t,n,o){var r,i=!1,s=0;function l(){r&&clearTimeout(r)}function a(){var a=this,c=Date.now()-s,h=arguments;function u(){s=Date.now(),n.apply(a,h)}i||(o&&!r&&u(),l(),void 0===o&&c>e?u():!0!==t&&(r=setTimeout(o?function(){r=void 0}:u,void 0===o?e-c:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),a.cancel=function(){l(),i=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.props.key===e.key&&this.props.dataLength===e.dataLength||(this.actionTriggered=!1,this.setState({showLoader:!1,pullToRefreshThresholdBreached:!1}))},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=function(e){return"number"===typeof e?{unit:c.Percent,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:c.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:c.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),h):(console.warn("scrollThreshold should be string or number"),h)}(t);return o.unit===c.Pixel?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=a({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return s.a.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},s.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&s.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},s.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(i.Component),p=n(89);function d(){var e=Object(r.a)(["\nlist-style: none;\nmargin: auto;\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill, minmax(355px, 1fr));\ngrid-gap: 20px;\nalign-items: center;\npadding: 25px 0;\n@media (max-width: 500px) {\n\tgrid-template-columns: 1fr;\n}\n"]);return d=function(){return e},e}var f=n(16).a.ul(d());t.a=function(e){var t=e.fetchData,n=e.movies,r=n.data,i=n.isLoading,l=n.currentPage,a=n.totalPages,c=r.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(p.a,{movie:e}))}));if(n.query){var h=n.query;return s.a.createElement(u,{dataLength:c.length,next:function(){return t(l,h)},hasMore:!i&&l<=a,loader:s.a.createElement("h3",{style:{display:"inline-block",height:"1100px"},key:l},"Loading...")},s.a.createElement(f,null,i?[].concat(Object(o.a)(c),[s.a.createElement("h3",{key:l+100},"Loading...")]):c))}return s.a.createElement(u,{dataLength:c.length,next:function(){return t(l)},hasMore:!i&&l<=a,loader:s.a.createElement("h3",{style:{display:"inline-block",height:"1100px"},key:l},"Loading...")},s.a.createElement(f,null,i?[].concat(Object(o.a)(c),[s.a.createElement("h3",{key:l+100},"Loading...")]):c))}},92:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(21),s=n(23),l=n(90);t.default=Object(i.b)((function(e){return{movies:e.favouriteMovies,languageSelect:e.languageSelect}}),(function(e){return{fetchFavourite:function(t){return e(s.f(t))},clearFavs:function(){return e(s.c())}}}))((function(e){var t=e.languageSelect.language,n=e.fetchFavourite,i=e.clearFavs;return Object(o.useEffect)((function(){return Object.keys(localStorage).forEach((function(e){n(localStorage.getItem(e))})),function(){return i()}}),[t,n,i]),r.a.createElement(l.a,e)}))}}]);
//# sourceMappingURL=3.64df65ec.chunk.js.map