+function(t){"use strict";function i(){var t=document.createElement("bootstrap"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var e in i)if(void 0!==t.style[e])return{end:i[e]};return!1}t.fn.emulateTransitionEnd=function(i){var e=!1,s=this;t(this).one("bsTransitionEnd",function(){e=!0});var o=function(){e||t(s).trigger(t.support.transition.end)};return setTimeout(o,i),this},t(function(){t.support.transition=i(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(i){if(t(i.target).is(this))return i.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(t){"use strict";function i(i){var e=i.attr("data-target");e||(e=i.attr("href"),e=e&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var s=e&&t(e);return s&&s.length?s:i.parent()}function e(e){e&&3===e.which||(t(o).remove(),t(n).each(function(){var s=t(this),o=i(s),n={relatedTarget:this};o.hasClass("open")&&(e&&"click"==e.type&&/input|textarea/i.test(e.target.tagName)&&t.contains(o[0],e.target)||(o.trigger(e=t.Event("hide.bs.dropdown",n)),e.isDefaultPrevented()||(s.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",n)))))}))}function s(i){return this.each(function(){var e=t(this),s=e.data("bs.dropdown");s||e.data("bs.dropdown",s=new a(this)),"string"==typeof i&&s[i].call(e)})}var o=".dropdown-backdrop",n='[data-toggle="dropdown"]',a=function(i){t(i).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(s){var o=t(this);if(!o.is(".disabled, :disabled")){var n=i(o),a=n.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(n.trigger(s=t.Event("show.bs.dropdown",r)),s.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),n.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var s=t(this);if(e.preventDefault(),e.stopPropagation(),!s.is(".disabled, :disabled")){var o=i(s),a=o.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&o.find(n).trigger("focus"),s.trigger("click");var r=" li:not(.disabled):visible a",h=o.find(".dropdown-menu"+r);if(h.length){var d=h.index(e.target);38==e.which&&d>0&&d--,40==e.which&&d<h.length-1&&d++,~d||(d=0),h.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=s,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",n,a.prototype.toggle).on("keydown.bs.dropdown.data-api",n,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),function(t,i,e,s){function o(i,e){var n=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var a=(this.position+"").toLowerCase().match(/\S+/g)||[];if(a.length<1&&a.push("center"),1==a.length&&a.push(a[0]),"top"!=a[0]&&"bottom"!=a[0]&&"left"!=a[1]&&"right"!=a[1]||(a=[a[1],a[0]]),this.positionX!=s&&(a[0]=this.positionX.toLowerCase()),this.positionY!=s&&(a[1]=this.positionY.toLowerCase()),n.positionX=a[0],n.positionY=a[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var r=this.$element.find(">.parallax-slider"),h=!1;0==r.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=r.prependTo(this.$mirror),h=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){n.naturalHeight&&n.naturalWidth||(n.naturalHeight=this.naturalHeight||this.height||1,n.naturalWidth=this.naturalWidth||this.width||1),n.aspectRatio=n.naturalWidth/n.naturalHeight,o.isSetup||o.setup(),o.sliders.push(n),o.isFresh=!1,o.requestRender()}),h||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||r.length>0)&&this.$slider.trigger("load")}function n(s){return this.each(function(){var n=t(this),a="object"==typeof s&&s;this==i||this==e||n.is("body")?o.configure(a):n.data("px.parallax")?"object"==typeof s&&t.extend(n.data("px.parallax"),a):(a=t.extend({},n.data(),a),n.data("px.parallax",new o(this,a))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),n=i.setTimeout(function(){e(s+o)},o);return t=s+o,n}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,i=o.docHeight,e=Math.min(this.boxOffsetTop,i-t),s=Math.max(this.boxOffsetTop+this.boxHeight-t,0),n=this.boxHeight+(e-s)*(1-this.speed)|0,a=(this.boxOffsetTop-e)*(1-this.speed)|0;if(n*this.aspectRatio>=this.boxWidth){this.imageWidth=n*this.aspectRatio|0,this.imageHeight=n,this.offsetBaseTop=a;var r=this.imageWidth-this.boxWidth;"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-r:isNaN(this.positionX)?this.offsetLeft=-r/2|0:this.offsetLeft=Math.max(this.positionX,-r)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var r=this.imageHeight-n;"top"==this.positionY?this.offsetBaseTop=a:"bottom"==this.positionY?this.offsetBaseTop=a-r:isNaN(this.positionY)?this.offsetBaseTop=a-r/2|0:this.offsetBaseTop=a+Math.max(this.positionY,-r)}},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var s=t(e),n=t(i),a=function(){o.winHeight=n.height(),o.winWidth=n.width(),o.docHeight=s.height(),o.docWidth=s.width()},r=function(){var t=n.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,n.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};n.on("resize.px.parallax load.px.parallax",function(){a(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){r(),o.requestRender()}),a(),r(),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(e){var s,n=t(e).data("px.parallax");for(n.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==n&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var a=t.fn.parallax;t.fn.parallax=n,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=a,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),console.log("Loading configuration file..."),window.CONFIG={namespace:"Lightwords",debug:!0,debuggers:["breakpoints"],search:!0,breadcrumbs:!0,stickyHeader:!0,parallaxHero:!0,rippleEffect:!0,rippleSelector:".btn"},console.log(CONFIG),function(t){window[CONFIG.namespace]?console.error("OUCH! window."+CONFIG.namespace+" already exists!"):(window[CONFIG.namespace]={},Lightwords.CONFIG=CONFIG),t(function(){var i=t("body"),e=[];Lightwords.CONFIG.debug&&(i.addClass("debug"),e.push("debug"),Lightwords.CONFIG.debuggers&&Lightwords.CONFIG.debuggers.forEach(function(t){i.addClass("debug--"+t),e.push("debug--"+t)})),Lightwords.CONFIG.search||(i.addClass("has-no-search"),e.push("has-no-search")),Lightwords.CONFIG.breadcrumbs||(i.addClass("has-no-breadcrumbs"),e.push("has-no-breadcrumbs")),Lightwords.CONFIG.stickyHeader&&(i.addClass("sticky-header"),e.push("sticky-header")),Lightwords.CONFIG.parallaxHero&&(i.addClass("parallax-hero"),e.push("parallax-hero")),console.log("Configuring body classes",e)})}(jQuery),function(t){t(function(){var t=document.querySelectorAll("[data-toggle]");Array.prototype.forEach.call(t,function(t){var i=document.querySelectorAll(t.getAttribute("data-toggle")),e=t.getAttribute("data-toggle-classname");Array.prototype.forEach.call(i,function(i){t.addEventListener("click",function(){s(this,i,e)})});var s=function(t,i,e){var s="active";t.classList.contains(s)?t.classList.remove(s):t.classList.add(s),i.classList.contains(e)?i.classList.remove(e):i.classList.add(e)}}),console.log("toggler.js is loaded")})}(jQuery),function(t){t(function(){Lightwords.CONFIG.rippleEffect&&(t(Lightwords.CONFIG.rippleSelector).addClass("ripple"),t(".ripple").click(function(i){var e=t(this);0==e.find(".ink").length&&e.append("<span class='ink'></span>");var s=e.find(".ink");if(s.removeClass("animate"),!s.height()&&!s.width()){var o=Math.max(e.outerWidth(),e.outerHeight());s.css({height:o,width:o})}var n=i.pageX-e.offset().left-s.width()/2,a=i.pageY-e.offset().top-s.height()/2;s.css({top:a+"px",left:n+"px"}).addClass("animate")})),console.log("ripple.js is loaded")})}(jQuery),function(t){t(function(){function i(t){t>2?o.removeAttr("disabled"):o.attr("disabled","disabled")}function e(e){i(t(this).val().length)}var s=(t(".searchform"),t(".searchform input[type='text']")),o=t(".searchform input[type='submit']");i(s.val().length),s.on("keyup",e),console.log("search.js is loaded")})}(jQuery),function(t){t(function(){var i=t(".parallax-hero .hero"),e=t(".parallax-hero .hero > img");e.css({display:"none"}),i.css({height:"56.25vw"}),i.parallax({imageSrc:e.attr("src"),positionY:"top",positionX:"center",speed:.5,androidFix:!0}),console.log("parallax.js is loaded")})}(jQuery),function(t){console.log("main.js in action 😀"),t(function(){})}(jQuery);