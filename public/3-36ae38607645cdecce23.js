(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{253:function(e,t,n){"use strict";n(119),n(21),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=h(n(0)),o=n(496),s=h(n(497)),l=h(n(498)),u=h(n(499)),c=h(n(11));function h(e){return e&&e.__esModule?e:{default:e}}var d=["fullscreenchange","MSFullscreenChange","mozfullscreenchange","webkitfullscreenchange"],f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.slideToIndex=function(e,t){var r=n.state,i=r.currentIndex;if(!r.isTransitioning){t&&n._intervalId&&(n.pause(!1),n.play(!1));var a=n.props.items.length-1,o=e;e<0?o=a:e>a&&(o=0),n.setState({previousIndex:i,currentIndex:o,isTransitioning:o!==i,offsetPercentage:0,style:{transition:"all "+n.props.slideDuration+"ms ease-out"}},n._onSliding)}},n._onSliding=function(){var e=n.state.isTransitioning;n._transitionTimer=window.setTimeout(function(){e&&(n.setState({isTransitioning:!e}),n.props.onSlide&&n.props.onSlide(n.state.currentIndex))},n.props.slideDuration+50)},n._handleScreenChange=function(){var e=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;n.props.onScreenChange&&n.props.onScreenChange(e),n.setState({isFullscreen:!!e})},n._toggleFullScreen=function(){n.state.isFullscreen?n.exitFullScreen():n.fullScreen()},n._togglePlay=function(){n._intervalId?n.pause():n.play()},n._initGalleryResizing=function(e){e&&(n._imageGallerySlideWrapper=e,n.resizeObserver=new u.default(n._createResizeObserver),n.resizeObserver.observe(e))},n._createResizeObserver=(0,l.default)(function(e){e&&e.forEach(function(){n._handleResize()})},300),n._handleResize=function(){var e=n.state.currentIndex;n._imageGallery&&n.setState({galleryWidth:n._imageGallery.offsetWidth}),n._imageGallerySlideWrapper&&n.setState({gallerySlideWrapperHeight:n._imageGallerySlideWrapper.offsetHeight}),n._thumbnailsWrapper&&(n._isThumbnailVertical()?n.setState({thumbnailsWrapperHeight:n._thumbnailsWrapper.offsetHeight}):n.setState({thumbnailsWrapperWidth:n._thumbnailsWrapper.offsetWidth})),n._setThumbsTranslate(-n._getThumbsTranslate(e))},n._handleKeyDown=function(e){if(!n.props.disableArrowKeys){switch(parseInt(e.keyCode||e.which||0)){case 37:n._canSlideLeft()&&!n._intervalId&&n._slideLeft();break;case 39:n._canSlideRight()&&!n._intervalId&&n._slideRight();break;case 27:n.state.isFullscreen&&!n.props.useBrowserFullscreen&&n.exitFullScreen()}}},n._handleImageError=function(e){n.props.defaultImage&&-1===e.target.src.indexOf(n.props.defaultImage)&&(e.target.src=n.props.defaultImage)},n._handleOnSwiped=function(e){var t=e.event,r=e.dir,i=e.velocity;if(!n.props.disableSwipe){var a=n.state,s=a.scrollingUpDown,l=a.scrollingLeftRight,u=n.props.isRTL;if(n.props.stopPropagation&&t.stopPropagation(),s&&n.setState({scrollingUpDown:!1}),l&&n.setState({scrollingLeftRight:!1}),!s){var c=(r===o.LEFT?1:-1)*(u?-1:1),h=i>n.props.flickThreshold;n._handleOnSwipedTo(c,h)}}},n._handleSwiping=function(e){var t=e.event,r=e.absX,i=e.dir;if(!n.props.disableSwipe){var a=n.state,s=a.galleryWidth,l=a.isTransitioning,u=a.scrollingUpDown,c=a.scrollingLeftRight,h=n.props.swipingTransitionDuration;if(n._setScrollDirection(i),n.props.stopPropagation&&t.stopPropagation(),(n.props.preventDefaultTouchmoveEvent||c)&&t.cancelable&&t.preventDefault(),l||u)n.setState({offsetPercentage:0});else{var d=i===o.RIGHT?1:-1,f=r/s*100;Math.abs(f)>=100&&(f=100);var p={transition:"transform "+h+"ms ease-out"};n.setState({offsetPercentage:d*f,style:p})}}},n._slideLeft=function(){n.props.isRTL?n._slideNext():n._slidePrevious()},n._slideRight=function(){n.props.isRTL?n._slidePrevious():n._slideNext()},n._slidePrevious=function(e){n.slideToIndex(n.state.currentIndex-1,e)},n._slideNext=function(e){n.slideToIndex(n.state.currentIndex+1,e)},n._renderItem=function(e){var t=n.props.onImageError||n._handleImageError;return a.default.createElement("div",{className:"image-gallery-image"},e.imageSet?a.default.createElement("picture",{onLoad:n.props.onImageLoad,onError:t},e.imageSet.map(function(e,t){return a.default.createElement("source",{key:t,media:e.media,srcSet:e.srcSet,type:e.type})}),a.default.createElement("img",{alt:e.originalAlt,src:e.original})):a.default.createElement("img",{src:e.original,alt:e.originalAlt,srcSet:e.srcSet,sizes:e.sizes,title:e.originalTitle,onLoad:n.props.onImageLoad,onError:t}),e.description&&a.default.createElement("span",{className:"image-gallery-description"},e.description))},n._renderThumbInner=function(e){var t=n.props.onThumbnailError||n._handleImageError;return a.default.createElement("div",{className:"image-gallery-thumbnail-inner"},a.default.createElement("img",{src:e.thumbnail,alt:e.thumbnailAlt,title:e.thumbnailTitle,onError:t}),e.thumbnailLabel&&a.default.createElement("div",{className:"image-gallery-thumbnail-label"},e.thumbnailLabel))},n._onThumbnailClick=function(e,t){n.slideToIndex(t,e),n.props.onThumbnailClick&&n.props.onThumbnailClick(e,t)},n._onThumbnailMouseOver=function(e,t){n._thumbnailMouseOverTimer&&(window.clearTimeout(n._thumbnailMouseOverTimer),n._thumbnailMouseOverTimer=null),n._thumbnailMouseOverTimer=window.setTimeout(function(){n.slideToIndex(t),n.pause()},300)},n._onThumbnailMouseLeave=function(){n._thumbnailMouseOverTimer&&(window.clearTimeout(n._thumbnailMouseOverTimer),n._thumbnailMouseOverTimer=null,n.props.autoPlay&&n.play())},n.state={currentIndex:e.startIndex,thumbsTranslate:0,offsetPercentage:0,galleryWidth:0,thumbnailsWrapperWidth:0,thumbnailsWrapperHeight:0,isFullscreen:!1,isPlaying:!1},n._unthrottledSlideToIndex=n.slideToIndex,n.slideToIndex=(0,s.default)(n._unthrottledSlideToIndex,e.slideDuration,{trailing:!1}),e.lazyLoad&&(n._lazyLoaded=[]),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),i(t,[{key:"componentDidUpdate",value:function(e,t){var n=e.items.length!==this.props.items.length,r=e.items!==this.props.items,i=e.startIndex!==this.props.startIndex;n&&this._handleResize(),t.currentIndex!==this.state.currentIndex&&this._slideThumbnailBar(t.currentIndex),e.slideDuration!==this.props.slideDuration&&(this.slideToIndex=(0,s.default)(this._unthrottledSlideToIndex,this.props.slideDuration,{trailing:!1})),!this.props.lazyLoad||e.lazyLoad&&!r||(this._lazyLoaded=[]),(i||r)&&this.setState({currentIndex:this.props.startIndex})}},{key:"componentDidMount",value:function(){this.props.autoPlay&&this.play(),window.addEventListener("keydown",this._handleKeyDown),this._onScreenChangeEvent()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this._handleKeyDown),this._offScreenChangeEvent(),this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null),this.resizeObserver&&this._imageGallerySlideWrapper&&this.resizeObserver.unobserve(this._imageGallerySlideWrapper),this._transitionTimer&&window.clearTimeout(this._transitionTimer),this._createResizeObserver&&this._createResizeObserver()}},{key:"play",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this._intervalId){var n=this.props,r=n.slideInterval,i=n.slideDuration;this.setState({isPlaying:!0}),this._intervalId=window.setInterval(function(){e.props.infinite||e._canSlideRight()?e.slideToIndex(e.state.currentIndex+1):e.pause()},Math.max(r,i)),this.props.onPlay&&t&&this.props.onPlay(this.state.currentIndex)}}},{key:"pause",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null,this.setState({isPlaying:!1}),this.props.onPause&&e&&this.props.onPause(this.state.currentIndex))}},{key:"setModalFullscreen",value:function(e){this.setState({modalFullscreen:e}),this.props.onScreenChange&&this.props.onScreenChange(e)}},{key:"fullScreen",value:function(){var e=this._imageGallery;this.props.useBrowserFullscreen?e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():this.setModalFullscreen(!0):this.setModalFullscreen(!0),this.setState({isFullscreen:!0})}},{key:"exitFullScreen",value:function(){this.state.isFullscreen&&(this.props.useBrowserFullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():this.setModalFullscreen(!1):this.setModalFullscreen(!1),this.setState({isFullscreen:!1}))}},{key:"getCurrentIndex",value:function(){return this.state.currentIndex}},{key:"_onScreenChangeEvent",value:function(){var e=this;d.map(function(t){document.addEventListener(t,e._handleScreenChange)})}},{key:"_offScreenChangeEvent",value:function(){var e=this;d.map(function(t){document.removeEventListener(t,e._handleScreenChange)})}},{key:"_isThumbnailVertical",value:function(){var e=this.props.thumbnailPosition;return"left"===e||"right"===e}},{key:"_setScrollDirection",value:function(e){var t=this.state,n=t.scrollingUpDown,r=t.scrollingLeftRight;n||r||(e===o.LEFT||e===o.RIGHT?this.setState({scrollingLeftRight:!0}):this.setState({scrollingUpDown:!0}))}},{key:"_handleOnSwipedTo",value:function(e,t){var n=this.state,r=n.currentIndex,i=n.isTransitioning,a=r;!this._sufficientSwipeOffset()&&!t||i||(a+=e),e<0?this._canSlideLeft()||(a=r):this._canSlideRight()||(a=r),this._unthrottledSlideToIndex(a)}},{key:"_sufficientSwipeOffset",value:function(){return Math.abs(this.state.offsetPercentage)>this.props.swipeThreshold}},{key:"_canNavigate",value:function(){return this.props.items.length>=2}},{key:"_canSlideLeft",value:function(){return this.props.infinite||(this.props.isRTL?this._canSlideNext():this._canSlidePrevious())}},{key:"_canSlideRight",value:function(){return this.props.infinite||(this.props.isRTL?this._canSlidePrevious():this._canSlideNext())}},{key:"_canSlidePrevious",value:function(){return this.state.currentIndex>0}},{key:"_canSlideNext",value:function(){return this.state.currentIndex<this.props.items.length-1}},{key:"_slideThumbnailBar",value:function(e){var t=this.state,n=t.thumbsTranslate,r=t.currentIndex;if(0===this.state.currentIndex)this._setThumbsTranslate(0);else{var i=Math.abs(e-r),a=this._getThumbsTranslate(i);a>0&&(e<r?this._setThumbsTranslate(n-a):e>r&&this._setThumbsTranslate(n+a))}}},{key:"_setThumbsTranslate",value:function(e){this.setState({thumbsTranslate:e})}},{key:"_getThumbsTranslate",value:function(e){if(this.props.disableThumbnailScroll)return 0;var t=this.state,n=t.thumbnailsWrapperWidth,r=t.thumbnailsWrapperHeight,i=void 0;if(this._thumbnails){if(this._isThumbnailVertical()){if(this._thumbnails.scrollHeight<=r)return 0;i=this._thumbnails.scrollHeight-r}else{if(this._thumbnails.scrollWidth<=n||n<=0)return 0;i=this._thumbnails.scrollWidth-n}return e*(i/(this._thumbnails.children.length-1))}}},{key:"_getAlignmentClassName",value:function(e){var t=this.state.currentIndex,n="";switch(e){case t-1:n=" left";break;case t:n=" center";break;case t+1:n=" right"}return this.props.items.length>=3&&this.props.infinite&&(0===e&&t===this.props.items.length-1?n=" right":e===this.props.items.length-1&&0===t&&(n=" left")),n}},{key:"_isGoingFromFirstToLast",value:function(){var e=this.state,t=e.currentIndex,n=e.previousIndex,r=this.props.items.length-1;return 0===n&&t===r}},{key:"_isGoingFromLastToFirst",value:function(){var e=this.state,t=e.currentIndex;return e.previousIndex===this.props.items.length-1&&0===t}},{key:"_getTranslateXForTwoSlide",value:function(e){var t=this.state,n=t.currentIndex,r=t.offsetPercentage,i=t.previousIndex,a=-100*n+100*e+r;return r>0?this.direction="left":r<0&&(this.direction="right"),0===n&&1===e&&r>0?a=-100+r:1===n&&0===e&&r<0&&(a=100+r),n!==i?0===i&&0===e&&0===r&&"left"===this.direction?a=100:1===i&&1===e&&0===r&&"right"===this.direction&&(a=-100):0===n&&1===e&&0===r&&"left"===this.direction?a=-100:1===n&&0===e&&0===r&&"right"===this.direction&&(a=100),a}},{key:"_getThumbnailBarHeight",value:function(){return this._isThumbnailVertical()?{height:this.state.gallerySlideWrapperHeight}:{}}},{key:"_shouldPushSlideOnInfiniteMode",value:function(e){return!this._slideIsTransitioning(e)||this._ignoreIsTransitioning()&&!this._isFirstOrLastSlide(e)}},{key:"_slideIsTransitioning",value:function(e){var t=this.state,n=t.isTransitioning,r=t.previousIndex,i=t.currentIndex;return n&&!(e===r||e===i)}},{key:"_isFirstOrLastSlide",value:function(e){return e===this.props.items.length-1||0===e}},{key:"_ignoreIsTransitioning",value:function(){var e=this.state,t=e.previousIndex,n=e.currentIndex,r=this.props.items.length-1;return Math.abs(t-n)>1&&!(0===t&&n===r)&&!(t===r&&0===n)}},{key:"_getSlideStyle",value:function(e){var t=this.state,n=t.currentIndex,r=t.offsetPercentage,i=this.props,a=i.infinite,o=i.items,s=i.useTranslate3D,l=i.isRTL,u=-100*n,c=o.length-1,h=(u+100*e)*(l?-1:1)+r;a&&o.length>2&&(0===n&&e===c?h=-100*(l?-1:1)+r:n===c&&0===e&&(h=100*(l?-1:1)+r)),a&&2===o.length&&(h=this._getTranslateXForTwoSlide(e));var d="translate("+h+"%, 0)";return s&&(d="translate3d("+h+"%, 0, 0)"),{WebkitTransform:d,MozTransform:d,msTransform:d,OTransform:d,transform:d}}},{key:"_getThumbnailStyle",value:function(){var e=void 0,t=this.props,n=t.useTranslate3D,r=t.isRTL,i=this.state.thumbsTranslate,a=r?-1*i:i;return this._isThumbnailVertical()?(e="translate(0, "+i+"px)",n&&(e="translate3d(0, "+i+"px, 0)")):(e="translate("+a+"px, 0)",n&&(e="translate3d("+a+"px, 0, 0)")),{WebkitTransform:e,MozTransform:e,msTransform:e,OTransform:e,transform:e}}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentIndex,i=t.isFullscreen,s=t.modalFullscreen,l=t.isPlaying,u=this.props,c=u.infinite,h=u.slideOnThumbnailOver,d=u.isRTL,f=u.lazyLoad,p=this._getThumbnailStyle(),m=this.props.thumbnailPosition,v=this._slideLeft,g=this._slideRight,b=[],_=[],y=[];this.props.items.forEach(function(t,i){var o=e._getAlignmentClassName(i),s=t.originalClass?" "+t.originalClass:"",l=t.thumbnailClass?" "+t.thumbnailClass:"",u=t.renderItem||e.props.renderItem||e._renderItem,d=t.renderThumbInner||e.props.renderThumbInner||e._renderThumbInner,p=!f||o||e._lazyLoaded[i];p&&f&&!e._lazyLoaded[i]&&(e._lazyLoaded[i]=!0);var m=e._getSlideStyle(i),v=a.default.createElement("div",{key:i,className:"image-gallery-slide"+o+s,style:r(m,e.state.style),onClick:e.props.onClick,onTouchMove:e.props.onTouchMove,onTouchEnd:e.props.onTouchEnd,onTouchStart:e.props.onTouchStart,onMouseOver:e.props.onMouseOver,onMouseLeave:e.props.onMouseLeave,role:e.props.onClick&&"button"},p?u(t):a.default.createElement("div",{style:{height:"100%"}}));if(c?e._shouldPushSlideOnInfiniteMode(i)&&b.push(v):b.push(v),e.props.showThumbnails&&_.push(a.default.createElement("a",{key:i,role:"button","aria-pressed":n===i?"true":"false","aria-label":"Go to Slide "+(i+1),className:"image-gallery-thumbnail"+(n===i?" active":"")+l,onMouseLeave:h?e._onThumbnailMouseLeave:void 0,onMouseOver:function(t){return h?e._onThumbnailMouseOver(t,i):void 0},onClick:function(t){return e._onThumbnailClick(t,i)}},d(t))),e.props.showBullets){y.push(a.default.createElement("button",{key:i,type:"button",className:["image-gallery-bullet",n===i?"active":"",t.bulletClass||""].join(" "),onClick:function(r){return t.bulletOnClick&&t.bulletOnClick({item:t,itemIndex:i,currentIndex:n}),e.slideToIndex.call(e,i,r)},"aria-pressed":n===i?"true":"false","aria-label":"Go to Slide "+(i+1)}))}});var T=a.default.createElement("div",{ref:this._initGalleryResizing,className:"image-gallery-slide-wrapper "+m+" "+(d?"image-gallery-rtl":"")},this.props.renderCustomControls&&this.props.renderCustomControls(),this.props.showFullscreenButton&&this.props.renderFullscreenButton(this._toggleFullScreen,i),this.props.showPlayButton&&this.props.renderPlayPauseButton(this._togglePlay,l),this._canNavigate()?[this.props.showNav&&a.default.createElement("span",{key:"navigation"},this.props.renderLeftNav(v,!this._canSlideLeft()),this.props.renderRightNav(g,!this._canSlideRight())),a.default.createElement(o.Swipeable,{className:"image-gallery-swipe",key:"swipeable",delta:0,onSwiping:this._handleSwiping,onSwiped:this._handleOnSwiped},a.default.createElement("div",{className:"image-gallery-slides"},b))]:a.default.createElement("div",{className:"image-gallery-slides"},b),this.props.showBullets&&a.default.createElement("div",{className:"image-gallery-bullets"},a.default.createElement("div",{className:"image-gallery-bullets-container",role:"navigation","aria-label":"Bullet Navigation"},y)),this.props.showIndex&&a.default.createElement("div",{className:"image-gallery-index"},a.default.createElement("span",{className:"image-gallery-index-current"},this.state.currentIndex+1),a.default.createElement("span",{className:"image-gallery-index-separator"},this.props.indexSeparator),a.default.createElement("span",{className:"image-gallery-index-total"},this.props.items.length))),w=["image-gallery",this.props.additionalClass,s?"fullscreen-modal":""].filter(function(e){return"string"==typeof e}).join(" ");return a.default.createElement("div",{ref:function(t){return e._imageGallery=t},className:w,"aria-live":"polite"},a.default.createElement("div",{className:"image-gallery-content"+(i?" fullscreen":"")},("bottom"===m||"right"===m)&&T,this.props.showThumbnails&&a.default.createElement("div",{className:"image-gallery-thumbnails-wrapper "+m+" "+(!this._isThumbnailVertical()&&d?"thumbnails-wrapper-rtl":""),style:this._getThumbnailBarHeight()},a.default.createElement("div",{className:"image-gallery-thumbnails",ref:function(t){return e._thumbnailsWrapper=t}},a.default.createElement("div",{ref:function(t){return e._thumbnails=t},className:"image-gallery-thumbnails-container",style:p,"aria-label":"Thumbnail Navigation"},_))),("top"===m||"left"===m)&&T))}}]),t}();f.propTypes={flickThreshold:c.default.number,items:c.default.array.isRequired,showNav:c.default.bool,autoPlay:c.default.bool,lazyLoad:c.default.bool,infinite:c.default.bool,showIndex:c.default.bool,showBullets:c.default.bool,showThumbnails:c.default.bool,showPlayButton:c.default.bool,showFullscreenButton:c.default.bool,disableThumbnailScroll:c.default.bool,disableArrowKeys:c.default.bool,disableSwipe:c.default.bool,useBrowserFullscreen:c.default.bool,preventDefaultTouchmoveEvent:c.default.bool,defaultImage:c.default.string,indexSeparator:c.default.string,thumbnailPosition:c.default.string,startIndex:c.default.number,slideDuration:c.default.number,slideInterval:c.default.number,slideOnThumbnailOver:c.default.bool,swipeThreshold:c.default.number,swipingTransitionDuration:c.default.number,onSlide:c.default.func,onScreenChange:c.default.func,onPause:c.default.func,onPlay:c.default.func,onClick:c.default.func,onImageLoad:c.default.func,onImageError:c.default.func,onTouchMove:c.default.func,onTouchEnd:c.default.func,onTouchStart:c.default.func,onMouseOver:c.default.func,onMouseLeave:c.default.func,onThumbnailError:c.default.func,onThumbnailClick:c.default.func,renderCustomControls:c.default.func,renderLeftNav:c.default.func,renderRightNav:c.default.func,renderPlayPauseButton:c.default.func,renderFullscreenButton:c.default.func,renderItem:c.default.func,stopPropagation:c.default.bool,additionalClass:c.default.string,useTranslate3D:c.default.bool,isRTL:c.default.bool},f.defaultProps={items:[],showNav:!0,autoPlay:!1,lazyLoad:!1,infinite:!0,showIndex:!1,showBullets:!1,showThumbnails:!0,showPlayButton:!0,showFullscreenButton:!0,disableThumbnailScroll:!1,disableArrowKeys:!1,disableSwipe:!1,useTranslate3D:!0,isRTL:!1,useBrowserFullscreen:!0,preventDefaultTouchmoveEvent:!1,flickThreshold:.4,stopPropagation:!1,indexSeparator:" / ",thumbnailPosition:"bottom",startIndex:0,slideDuration:450,swipingTransitionDuration:0,slideInterval:3e3,swipeThreshold:30,renderLeftNav:function(e,t){return a.default.createElement("button",{type:"button",className:"image-gallery-left-nav",disabled:t,onClick:e,"aria-label":"Previous Slide"})},renderRightNav:function(e,t){return a.default.createElement("button",{type:"button",className:"image-gallery-right-nav",disabled:t,onClick:e,"aria-label":"Next Slide"})},renderPlayPauseButton:function(e,t){return a.default.createElement("button",{type:"button",className:"image-gallery-play-button"+(t?" active":""),onClick:e,"aria-label":"Play or Pause Slideshow"})},renderFullscreenButton:function(e,t){return a.default.createElement("button",{type:"button",className:"image-gallery-fullscreen-button"+(t?" active":""),onClick:e,"aria-label":"Open Fullscreen"})}},t.default=f},496:function(e,t,n){"use strict";n.r(t),n.d(t,"DOWN",function(){return f}),n.d(t,"LEFT",function(){return c}),n.d(t,"RIGHT",function(){return h}),n.d(t,"Swipeable",function(){return S}),n.d(t,"UP",function(){return d}),n.d(t,"useSwipeable",function(){return w});n(21);var r=n(0),i=n.n(r),a=n(11),o=n.n(a);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},u={xy:[0,0],swiping:!1,lastEventData:void 0,start:void 0},c="Left",h="Right",d="Up",f="Down",p="touchstart",m="touchmove",v="touchend",g="mousemove",b="mouseup";function _(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function y(e,t){var n=function(t){t.touches&&t.touches.length>1||e(function(e,n){n.trackMouse&&(document.addEventListener(g,r),document.addEventListener(b,o));var i=t.touches?t.touches[0]:t,a=_([i.clientX,i.clientY],n.rotationAngle);return s({},e,u,{xy:a,start:t.timeStamp||0})})},r=function(t){e(function(e,n){if(!e.xy[0]||!e.xy[1]||t.touches&&t.touches.length>1)return e;var r=t.touches?t.touches[0]:t,i=_([r.clientX,r.clientY],n.rotationAngle),a=i[0],o=i[1],l=e.xy[0]-a,u=e.xy[1]-o,p=Math.abs(l),m=Math.abs(u),v=(t.timeStamp||0)-e.start,g=Math.sqrt(p*p+m*m)/(v||1);if(p<n.delta&&m<n.delta&&!e.swiping)return e;var b=function(e,t,n,r){return e>t?n>0?c:h:r>0?d:f}(p,m,l,u),y={event:t,absX:p,absY:m,deltaX:l,deltaY:u,velocity:g,dir:b};n.onSwiping&&n.onSwiping(y);var T=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+b])&&(T=!0),T&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&t.cancelable&&t.preventDefault(),s({},e,{lastEventData:y,swiping:!0})})},i=function(t){e(function(e,n){if(e.swiping){var r=s({},e.lastEventData,{event:t});n.onSwiped&&n.onSwiped(r),n["onSwiped"+r.dir]&&n["onSwiped"+r.dir](r)}return s({},e,u)})},a=function(){document.removeEventListener(g,r),document.removeEventListener(b,o)},o=function(e){a(),i(e)},l=function(e){if(e&&e.addEventListener){var t=[[p,n],[m,r],[v,i]];return t.forEach(function(t){var n=t[0],r=t[1];return e.addEventListener(n,r)}),function(){return t.forEach(function(t){var n=t[0],r=t[1];return e.removeEventListener(n,r)})}}},y={ref:function(t){null!==t&&e(function(e,n){if(e.el===t)return e;var r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=null),n.trackTouch&&t&&(r.cleanUpTouch=l(t)),s({},e,{el:t},r)})}};return t.trackMouse&&(y.onMouseDown=n),[y,l]}function T(e,t,n){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=n(e.el)),s({},e,r)}function w(e){var t=e.trackMouse,n=i.a.useRef(s({},u,{type:"hook"})),r=i.a.useRef();r.current=s({},l,e);var a=i.a.useMemo(function(){return y(function(e){return n.current=e(n.current,r.current)},{trackMouse:t})},[t]),o=a[0],c=a[1];return n.current=T(n.current,r.current,c),o}var S=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this)._set=function(e){n.transientState=e(n.transientState,n.props)},n.transientState=s({},u,{type:"class"}),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r=e.nodeName,a=void 0===r?"div":r,o=e.innerRef,l=e.children,u=e.trackMouse,c=y(this._set,{trackMouse:u}),h=c[0],d=c[1];this.transientState=T(this.transientState,this.props,d);var f=o?function(e){return o(e),h.ref(e)}:h.ref;return i.a.createElement(a,s({},h,{className:t,style:n,ref:f}),l)},r}(i.a.PureComponent);S.propTypes={onSwiped:o.a.func,onSwiping:o.a.func,onSwipedUp:o.a.func,onSwipedRight:o.a.func,onSwipedDown:o.a.func,onSwipedLeft:o.a.func,delta:o.a.number,preventDefaultTouchmoveEvent:o.a.bool,nodeName:o.a.string,trackMouse:o.a.bool,trackTouch:o.a.bool,innerRef:o.a.func,rotationAngle:o.a.number},S.defaultProps=l},497:function(e,t,n){(function(t){n(12),n(85),n(13);var r="Expected a function",i=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,f=h||d||Function("return this")(),p=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return f.Date.now()};function b(e,t,n){var i,a,o,s,l,u,c=0,h=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=a;return i=a=void 0,c=t,s=e.apply(r,n)}function b(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=o}function T(){var e=g();if(b(e))return w(e);l=setTimeout(T,function(e){var n=t-(e-u);return d?v(n,o-(e-c)):n}(e))}function w(e){return l=void 0,f&&i?p(e):(i=a=void 0,s)}function S(){var e=g(),n=b(e);if(i=arguments,a=this,u=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(T,t),h?p(e):s}(u);if(d)return l=setTimeout(T,t),p(u)}return void 0===l&&(l=setTimeout(T,t)),s}return t=y(t)||0,_(n)&&(h=!!n.leading,o=(d="maxWait"in n)?m(y(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=u=a=l=void 0},S.flush=function(){return void 0===l?s:w(g())},S}function _(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==a}(e))return i;if(_(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=l.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return _(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:i,maxWait:t,trailing:a})}}).call(this,n(121))},498:function(e,t,n){(function(t){n(12),n(85),n(13);var r="Expected a function",i=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,f=h||d||Function("return this")(),p=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return f.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==a}(e))return i;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=l.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,n){var i,a,o,s,l,u,c=0,h=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=a;return i=a=void 0,c=t,s=e.apply(r,n)}function y(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=o}function T(){var e=g();if(y(e))return w(e);l=setTimeout(T,function(e){var n=t-(e-u);return d?v(n,o-(e-c)):n}(e))}function w(e){return l=void 0,f&&i?p(e):(i=a=void 0,s)}function S(){var e=g(),n=y(e);if(i=arguments,a=this,u=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(T,t),h?p(e):s}(u);if(d)return l=setTimeout(T,t),p(u)}return void 0===l&&(l=setTimeout(T,t)),s}return t=_(t)||0,b(n)&&(h=!!n.leading,o=(d="maxWait"in n)?m(_(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=u=a=l=void 0},S.flush=function(){return void 0===l?s:w(g())},S}}).call(this,n(121))},499:function(e,t,n){"use strict";n.r(t),function(e){n(125),n(45),n(29),n(22),n(13),n(60),n(68);var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,a=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(a):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},s=2;var l=20,u=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,h=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function a(){n&&(n=!1,e()),r&&u()}function l(){o(a)}function u(){var e=Date.now();if(n){if(e-i<s)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=e}return u}(this.refresh.bind(this),l)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;u.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),d=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},f=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||a},p=y(0,0,0,0);function m(e){return parseFloat(e)||0}function v(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){return t+m(e["border-"+n+"-width"])},0)}function g(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=f(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],a=e["padding-"+i];t[i]=m(a)}return t}(r),a=i.left+i.right,o=i.top+i.bottom,s=m(r.width),l=m(r.height);if("border-box"===r.boxSizing&&(Math.round(s+a)!==t&&(s-=v(r,"left","right")+a),Math.round(l+o)!==n&&(l-=v(r,"top","bottom")+o)),!function(e){return e===f(e).document.documentElement}(e)){var u=Math.round(s+a)-t,c=Math.round(l+o)-n;1!==Math.abs(u)&&(s-=u),1!==Math.abs(c)&&(l-=c)}return y(i.left,i.top,s,l)}var b="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof f(e).SVGGraphicsElement}:function(e){return e instanceof f(e).SVGElement&&"function"==typeof e.getBBox};function _(e){return i?b(e)?function(e){var t=e.getBBox();return y(0,0,t.width,t.height)}(e):g(e):p}function y(e,t,n,r){return{x:e,y:t,width:n,height:r}}var T=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=_(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),w=function(){return function(e,t){var n,r,i,a,o,s,l,u=(r=(n=t).x,i=n.y,a=n.width,o=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(s.prototype),d(l,{x:r,y:i,width:a,height:o,top:i,right:r+a,bottom:o+i,left:r}),l);d(this,{target:e,contentRect:u})}}(),S=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new T(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new w(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),E="undefined"!=typeof WeakMap?new WeakMap:new r,x=function(){return function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=h.getInstance(),r=new S(t,n,this);E.set(this,r)}}();["observe","unobserve","disconnect"].forEach(function(e){x.prototype[e]=function(){var t;return(t=E.get(this))[e].apply(t,arguments)}});var I=void 0!==a.ResizeObserver?a.ResizeObserver:x;t.default=I}.call(this,n(121))}}]);
//# sourceMappingURL=3-36ae38607645cdecce23.js.map