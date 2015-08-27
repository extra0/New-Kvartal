/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.4 (Thu, 10 Jan 2013)
 * @requires jQuery v1.6 or later
 */
!function(e,t,i,n){"use strict";var o=i(e),a=i(t),r=i.fancybox=function(){r.open.apply(this,arguments)},s=navigator.userAgent.match(/msie/),l=null,c=t.createTouch!==n,d=function(e){return e&&e.hasOwnProperty&&e instanceof i},p=function(e){return e&&"string"===i.type(e)},h=function(e){return p(e)&&e.indexOf("%")>0},f=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},u=function(e,t){var i=parseInt(e,10)||0;return t&&h(e)&&(i=r.getViewport()[t]/100*i),Math.ceil(i)},g=function(e,t){return u(e,t)+"px"};i.extend(r,{version:"2.1.4",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!c,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(s?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(i.isPlainObject(t)||(t={}),!1!==r.close(!0))?(i.isArray(e)||(e=d(e)?i(e).get():[e]),i.each(e,function(o,a){var s,l,c,h,f,u,g,m={};"object"===i.type(a)&&(a.nodeType&&(a=i(a)),d(a)?(m={href:a.data("fancybox-href")||a.attr("href"),title:a.data("fancybox-title")||a.attr("title"),isDom:!0,element:a},i.metadata&&i.extend(!0,m,a.metadata())):m=a),s=t.href||m.href||(p(a)?a:null),l=t.title!==n?t.title:m.title||"",c=t.content||m.content,h=c?"html":t.type||m.type,!h&&m.isDom&&(h=a.data("fancybox-type"),h||(f=a.prop("class").match(/fancybox\.(\w+)/),h=f?f[1]:null)),p(s)&&(h||(r.isImage(s)?h="image":r.isSWF(s)?h="swf":"#"===s.charAt(0)?h="inline":p(a)&&(h="html",c=a)),"ajax"===h&&(u=s.split(/\s+/,2),s=u.shift(),g=u.shift())),c||("inline"===h?s?c=i(p(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):m.isDom&&(c=a):"html"===h?c=s:h||s||!m.isDom||(h="inline",c=a)),i.extend(m,{href:s,type:h,content:c,title:l,selector:g}),e[o]=m}),r.opts=i.extend(!0,{},r.defaults,t),t.keys!==n&&(r.opts.keys=t.keys?i.extend({},r.defaults.keys,t.keys):!1),r.group=e,r._start(r.opts.index)):void 0},cancel:function(){var e=r.coming;e&&!1!==r.trigger("onCancel")&&(r.hideLoading(),r.ajaxLoad&&r.ajaxLoad.abort(),r.ajaxLoad=null,r.imgPreload&&(r.imgPreload.onload=r.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),r.coming=null,r.current||r._afterZoomOut(e))},close:function(e){r.cancel(),!1!==r.trigger("beforeClose")&&(r.unbindEvents(),r.isActive&&(r.isOpen&&e!==!0?(r.isOpen=r.isOpened=!1,r.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),r.wrap.stop(!0,!0).removeClass("fancybox-opened"),r.transitions[r.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),r._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(r.player.timer)},n=function(){t(),r.current&&r.player.isActive&&(r.player.timer=setTimeout(r.next,r.current.playSpeed))},o=function(){t(),i("body").unbind(".player"),r.player.isActive=!1,r.trigger("onPlayEnd")},a=function(){r.current&&(r.current.loop||r.current.index<r.group.length-1)&&(r.player.isActive=!0,i("body").bind({"afterShow.player onUpdate.player":n,"onCancel.player beforeClose.player":o,"beforeLoad.player":t}),n(),r.trigger("onPlayStart"))};e===!0||!r.player.isActive&&e!==!1?a():o()},next:function(e){var t=r.current;t&&(p(e)||(e=t.direction.next),r.jumpto(t.index+1,e,"next"))},prev:function(e){var t=r.current;t&&(p(e)||(e=t.direction.prev),r.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var o=r.current;o&&(e=u(e),r.direction=t||o.direction[e>=o.index?"next":"prev"],r.router=i||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==n&&(r.cancel(),r._start(e)))},reposition:function(e,t){var n,o=r.current,a=o?o.wrap:null;a&&(n=r._getPosition(t),e&&"scroll"===e.type?(delete n.position,a.stop(!0,!0).animate(n,200)):(a.css(n),o.pos=i.extend({},o.dim,n)))},update:function(e){var t=e&&e.type,i=!t||"orientationchange"===t;i&&(clearTimeout(l),l=null),r.isOpen&&!l&&(l=setTimeout(function(){var n=r.current;n&&!r.isClosing&&(r.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&n.autoResize)&&r._setDimension(),"scroll"===t&&n.canShrink||r.reposition(e),r.trigger("onUpdate"),l=null)},i&&!c?0:300))},toggle:function(e){r.isOpen&&(r.current.fitToView="boolean"===i.type(e)?e:!r.current.fitToView,c&&(r.wrap.removeAttr("style").addClass("fancybox-tmp"),r.trigger("onUpdate")),r.update())},hideLoading:function(){a.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var e,t;r.hideLoading(),e=i('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"),a.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),r.cancel())}),r.defaults.fixed||(t=r.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=r.current&&r.current.locked||!1,i={x:o.scrollLeft(),y:o.scrollTop()};return t?(i.w=t[0].clientWidth,i.h=t[0].clientHeight):(i.w=c&&e.innerWidth?e.innerWidth:o.width(),i.h=c&&e.innerHeight?e.innerHeight:o.height()),i},unbindEvents:function(){r.wrap&&d(r.wrap)&&r.wrap.unbind(".fb"),a.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var e,t=r.current;t&&(o.bind("orientationchange.fb"+(c?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),r.update),e=t.keys,e&&a.bind("keydown.fb",function(o){var a=o.which||o.keyCode,s=o.target||o.srcElement;return 27===a&&r.coming?!1:void(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||s&&(s.type||i(s).is("[contenteditable]"))||i.each(e,function(e,s){return t.group.length>1&&s[a]!==n?(r[e](s[a]),o.preventDefault(),!1):i.inArray(a,s)>-1?(r[e](),o.preventDefault(),!1):void 0}))}),i.fn.mousewheel&&t.mouseWheel&&r.wrap.bind("mousewheel.fb",function(e,n,o,a){for(var s=e.target||null,l=i(s),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=f(l[0]),l=i(l).parent();0===n||c||r.group.length>1&&!t.canShrink&&(a>0||o>0?r.prev(a>0?"down":"left"):(0>a||0>o)&&r.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var n,o=t||r.coming||r.current;if(o){if(i.isFunction(o[e])&&(n=o[e].apply(o,Array.prototype.slice.call(arguments,1))),n===!1)return!1;o.helpers&&i.each(o.helpers,function(t,n){n&&r.helpers[t]&&i.isFunction(r.helpers[t][e])&&(n=i.extend(!0,{},r.helpers[t].defaults,n),r.helpers[t][e](n,o))}),i.event.trigger(e+".fb")}},isImage:function(e){return p(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(e){return p(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,n,o,a,s,l={};if(e=u(e),t=r.group[e]||null,!t)return!1;if(l=i.extend(!0,{},r.opts,t),a=l.margin,s=l.padding,"number"===i.type(a)&&(l.margin=[a,a,a,a]),"number"===i.type(s)&&(l.padding=[s,s,s,s]),l.modal&&i.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),l.autoSize&&(l.autoWidth=l.autoHeight=!0),"auto"===l.width&&(l.autoWidth=!0),"auto"===l.height&&(l.autoHeight=!0),l.group=r.group,l.index=e,r.coming=l,!1===r.trigger("beforeLoad"))return void(r.coming=null);if(o=l.type,n=l.href,!o)return r.coming=null,r.current&&r.router&&"jumpto"!==r.router?(r.current.index=e,r[r.router](r.direction)):!1;if(r.isActive=!0,("image"===o||"swf"===o)&&(l.autoHeight=l.autoWidth=!1,l.scrolling="visible"),"image"===o&&(l.aspectRatio=!0),"iframe"===o&&c&&(l.scrolling="scroll"),l.wrap=i(l.tpl.wrap).addClass("fancybox-"+(c?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body"),i.extend(l,{skin:i(".fancybox-skin",l.wrap),outer:i(".fancybox-outer",l.wrap),inner:i(".fancybox-inner",l.wrap)}),i.each(["Top","Right","Bottom","Left"],function(e,t){l.skin.css("padding"+t,g(l.padding[e]))}),r.trigger("onReady"),"inline"===o||"html"===o){if(!l.content||!l.content.length)return r._error("content")}else if(!n)return r._error("href");"image"===o?r._loadImage():"ajax"===o?r._loadAjax():"iframe"===o?r._loadIframe():r._afterLoad()},_error:function(e){i.extend(r.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:r.coming.tpl.error}),r._afterLoad()},_loadImage:function(){var e=r.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,r.coming.width=this.width,r.coming.height=this.height,r._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,r._error("image")},e.src=r.coming.href,e.complete!==!0&&r.showLoading()},_loadAjax:function(){var e=r.coming;r.showLoading(),r.ajaxLoad=i.ajax(i.extend({},e.ajax,{url:e.href,error:function(e,t){r.coming&&"abort"!==t?r._error("ajax",e):r.hideLoading()},success:function(t,i){"success"===i&&(e.content=t,r._afterLoad())}}))},_loadIframe:function(){var e=r.coming,t=i(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",c?"auto":e.iframe.scrolling).attr("src",e.href);i(e.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(r.showLoading(),t.one("load",function(){i(this).data("ready",1),c||i(this).bind("load.fb",r.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),r._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||r._afterLoad()},_preloadImages:function(){var e,t,i=r.group,n=r.current,o=i.length,a=n.preload?Math.min(n.preload,o-1):0;for(t=1;a>=t;t+=1)e=i[(n.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,n,o,a,s,l=r.coming,c=r.current,p="fancybox-placeholder";if(r.hideLoading(),l&&r.isActive!==!1){if(!1===r.trigger("afterLoad",l,c))return l.wrap.stop(!0).trigger("onReset").remove(),void(r.coming=null);switch(c&&(r.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),r.unbindEvents(),e=l,t=l.content,n=l.type,o=l.scrolling,i.extend(r,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:c}),a=e.href,n){case"inline":case"ajax":case"html":e.selector?t=i("<div>").html(t).find(e.selector):d(t)&&(t.data(p)||t.data(p,i('<div class="'+p+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){i(this).find(t).length&&t.hide().replaceAll(t.data(p)).data(p,!1)}));break;case"image":t=e.tpl.image.replace("{href}",a);break;case"swf":t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',s="",i.each(e.swf,function(e,i){t+='<param name="'+e+'" value="'+i+'"></param>',s+=" "+e+'="'+i+'"'}),t+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+s+"></embed></object>"}d(t)&&t.parent().is(e.inner)||e.inner.append(t),r.trigger("beforeShow"),e.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),r._setDimension(),r.reposition(),r.isOpen=!1,r.coming=null,r.bindEvents(),r.isOpened?c.prevMethod&&r.transitions[c.prevMethod]():i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),r.transitions[r.isOpened?e.nextMethod:e.openMethod](),r._preloadImages()}},_setDimension:function(){var e,t,n,o,a,s,l,c,d,p,f,m,y,v,x,w=r.getViewport(),b=0,k=!1,C=!1,W=r.wrap,O=r.skin,S=r.inner,_=r.current,E=_.width,T=_.height,j=_.minWidth,L=_.minHeight,P=_.maxWidth,M=_.maxHeight,A=_.scrolling,H=_.scrollOutside?_.scrollbarWidth:0,R=_.margin,I=u(R[1]+R[3]),D=u(R[0]+R[2]);if(W.add(O).add(S).width("auto").height("auto").removeClass("fancybox-tmp"),e=u(O.outerWidth(!0)-O.width()),t=u(O.outerHeight(!0)-O.height()),n=I+e,o=D+t,a=h(E)?(w.w-n)*u(E)/100:E,s=h(T)?(w.h-o)*u(T)/100:T,"iframe"===_.type){if(v=_.content,_.autoHeight&&1===v.data("ready"))try{v[0].contentWindow.document.location&&(S.width(a).height(9999),x=v.contents().find("body"),H&&x.css("overflow-x","hidden"),s=x.height())}catch(z){}}else(_.autoWidth||_.autoHeight)&&(S.addClass("fancybox-tmp"),_.autoWidth||S.width(a),_.autoHeight||S.height(s),_.autoWidth&&(a=S.width()),_.autoHeight&&(s=S.height()),S.removeClass("fancybox-tmp"));if(E=u(a),T=u(s),d=a/s,j=u(h(j)?u(j,"w")-n:j),P=u(h(P)?u(P,"w")-n:P),L=u(h(L)?u(L,"h")-o:L),M=u(h(M)?u(M,"h")-o:M),l=P,c=M,_.fitToView&&(P=Math.min(w.w-n,P),M=Math.min(w.h-o,M)),m=w.w-I,y=w.h-D,_.aspectRatio?(E>P&&(E=P,T=u(E/d)),T>M&&(T=M,E=u(T*d)),j>E&&(E=j,T=u(E/d)),L>T&&(T=L,E=u(T*d))):(E=Math.max(j,Math.min(E,P)),_.autoHeight&&"iframe"!==_.type&&(S.width(E),T=S.height()),T=Math.max(L,Math.min(T,M))),_.fitToView)if(S.width(E).height(T),W.width(E+e),p=W.width(),f=W.height(),_.aspectRatio)for(;(p>m||f>y)&&E>j&&T>L&&!(b++>19);)T=Math.max(L,Math.min(M,T-10)),E=u(T*d),j>E&&(E=j,T=u(E/d)),E>P&&(E=P,T=u(E/d)),S.width(E).height(T),W.width(E+e),p=W.width(),f=W.height();else E=Math.max(j,Math.min(E,E-(p-m))),T=Math.max(L,Math.min(T,T-(f-y)));H&&"auto"===A&&s>T&&m>E+e+H&&(E+=H),S.width(E).height(T),W.width(E+e),p=W.width(),f=W.height(),k=(p>m||f>y)&&E>j&&T>L,C=_.aspectRatio?l>E&&c>T&&a>E&&s>T:(l>E||c>T)&&(a>E||s>T),i.extend(_,{dim:{width:g(p),height:g(f)},origWidth:a,origHeight:s,canShrink:k,canExpand:C,wPadding:e,hPadding:t,wrapSpace:f-O.outerHeight(!0),skinSpace:O.height()-T}),!v&&_.autoHeight&&T>L&&M>T&&!C&&S.height("auto")},_getPosition:function(e){var t=r.current,i=r.getViewport(),n=t.margin,o=r.wrap.width()+n[1]+n[3],a=r.wrap.height()+n[0]+n[2],s={position:"absolute",top:n[0],left:n[3]};return t.autoCenter&&t.fixed&&!e&&a<=i.h&&o<=i.w?s.position="fixed":t.locked||(s.top+=i.y,s.left+=i.x),s.top=g(Math.max(s.top,s.top+(i.h-a)*t.topRatio)),s.left=g(Math.max(s.left,s.left+(i.w-o)*t.leftRatio)),s},_afterZoomIn:function(){var e=r.current;e&&(r.isOpen=r.isOpened=!0,r.wrap.css("overflow","visible").addClass("fancybox-opened"),r.update(),(e.closeClick||e.nextClick&&r.group.length>1)&&r.inner.css("cursor","pointer").bind("click.fb",function(t){i(t.target).is("a")||i(t.target).parent().is("a")||(t.preventDefault(),r[e.closeClick?"close":"next"]())}),e.closeBtn&&i(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb",function(e){e.preventDefault(),r.close()}),e.arrows&&r.group.length>1&&((e.loop||e.index>0)&&i(e.tpl.prev).appendTo(r.outer).bind("click.fb",r.prev),(e.loop||e.index<r.group.length-1)&&i(e.tpl.next).appendTo(r.outer).bind("click.fb",r.next)),r.trigger("afterShow"),e.loop||e.index!==e.group.length-1?r.opts.autoPlay&&!r.player.isActive&&(r.opts.autoPlay=!1,r.play()):r.play(!1))},_afterZoomOut:function(e){e=e||r.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(r,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),r.trigger("afterClose",e)}}),r.transitions={getOrigPosition:function(){var e=r.current,t=e.element,i=e.orig,n={},o=50,a=50,s=e.hPadding,l=e.wPadding,c=r.getViewport();return!i&&e.isDom&&t.is(":visible")&&(i=t.find("img:first"),i.length||(i=t)),d(i)?(n=i.offset(),i.is("img")&&(o=i.outerWidth(),a=i.outerHeight())):(n.top=c.y+(c.h-a)*e.topRatio,n.left=c.x+(c.w-o)*e.leftRatio),("fixed"===r.wrap.css("position")||e.locked)&&(n.top-=c.y,n.left-=c.x),n={top:g(n.top-s*e.topRatio),left:g(n.left-l*e.leftRatio),width:g(o+l),height:g(a+s)}},step:function(e,t){var i,n,o,a=t.prop,s=r.current,l=s.wrapSpace,c=s.skinSpace;("width"===a||"height"===a)&&(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),r.isClosing&&(i=1-i),n="width"===a?s.wPadding:s.hPadding,o=e-n,r.skin[a](u("width"===a?o:o-l*i)),r.inner[a](u("width"===a?o:o-l*i-c*i)))},zoomIn:function(){var e=r.current,t=e.pos,n=e.openEffect,o="elastic"===n,a=i.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===n&&(t.opacity=.1),r.wrap.css(t).animate(a,{duration:"none"===n?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:r._afterZoomIn})},zoomOut:function(){var e=r.current,t=e.closeEffect,i="elastic"===t,n={opacity:.1};i&&(n=this.getOrigPosition(),e.closeOpacity&&(n.opacity=.1)),r.wrap.animate(n,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:r._afterZoomOut})},changeIn:function(){var e,t=r.current,i=t.nextEffect,n=t.pos,o={opacity:1},a=r.direction,s=200;n.opacity=.1,"elastic"===i&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(n[e]=g(u(n[e])-s),o[e]="+="+s+"px"):(n[e]=g(u(n[e])+s),o[e]="-="+s+"px")),"none"===i?r._afterZoomIn():r.wrap.css(n).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:r._afterZoomIn})},changeOut:function(){var e=r.previous,t=e.prevEffect,n={opacity:.1},o=r.direction,a=200;"elastic"===t&&(n["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+a+"px"),e.wrap.animate(n,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},r.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!c,fixed:!0},overlay:null,fixed:!1,create:function(e){e=i.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=i('<div class="fancybox-overlay"></div>').appendTo("body"),this.fixed=!1,e.fixed&&r.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=i.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(o.bind("resize.overlay",i.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){i(e.target).hasClass("fancybox-overlay")&&(r.isActive?r.close():t.close())}),this.overlay.css(e.css).show()},close:function(){i(".fancybox-overlay").remove(),o.unbind("resize.overlay"),this.overlay=null,this.margin!==!1&&(i("body").css("margin-right",this.margin),this.margin=!1),this.el&&this.el.removeClass("fancybox-lock")},update:function(){var e,i="100%";this.overlay.width(i).height("100%"),s?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),a.width()>e&&(i=a.width())):a.width()>o.width()&&(i=a.width()),this.overlay.width(i).height(a.height())},onReady:function(e,n){i(".fancybox-overlay").stop(!0,!0),this.overlay||(this.margin=a.height()>o.height()||"scroll"===i("body").css("overflow-y")?i("body").css("margin-right"):!1,this.el=i(t.all&&!t.querySelector?"html":"body"),this.create(e)),e.locked&&this.fixed&&(n.locked=this.overlay.append(n.wrap),n.fixed=!1),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){t.locked&&(this.el.addClass("fancybox-lock"),this.margin!==!1&&i("body").css("margin-right",u(this.margin)+t.scrollbarWidth)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!r.isActive&&this.overlay.fadeOut(e.speedOut,i.proxy(this.close,this))}},r.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t,n,o=r.current,a=o.title,l=e.type;if(i.isFunction(a)&&(a=a.call(o.element,o)),p(a)&&""!==i.trim(a)){switch(t=i('<div class="fancybox-title fancybox-title-'+l+'-wrap">'+a+"</div>"),l){case"inside":n=r.skin;break;case"outside":n=r.wrap;break;case"over":n=r.inner;break;default:n=r.skin,t.appendTo("body"),s&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),r.current.margin[2]+=Math.abs(u(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](n)}}},i.fn.fancybox=function(e){var t,n=i(this),o=this.selector||"",s=function(a){var s,l,c=i(this).blur(),d=t;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(s=e.groupAttr||"data-fancybox-group",l=c.attr(s),l||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(c=o.length?i(o):n,c=c.filter("["+s+'="'+l+'"]'),d=c.index(this)),e.index=d,r.open(c,e)!==!1&&a.preventDefault())};return e=e||{},t=e.index||0,o&&e.live!==!1?a.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",s):n.unbind("click.fb-start").bind("click.fb-start",s),this.filter("[data-fancybox-start=1]").trigger("click"),this},a.ready(function(){i.scrollbarWidth===n&&(i.scrollbarWidth=function(){var e=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),n=t.innerWidth()-t.height(99).innerWidth();return e.remove(),n}),i.support.fixedPosition===n&&(i.support.fixedPosition=function(){var e=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),i.extend(r.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")})})}(window,document,jQuery);
 
 /**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);

/*
    Masked Input plugin for jQuery
    Version: 1.3.1
*/
!(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
!function(e,t,n,i){var o=n("html"),a=n(e),r=n(t),s=n.fancybox=function(){s.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),c=null,d=t.createTouch!==i,p=function(e){return e&&e.hasOwnProperty&&e instanceof n},h=function(e){return e&&"string"===n.type(e)},f=function(e){return h(e)&&0<e.indexOf("%")},u=function(e,t){var n=parseInt(e,10)||0;return t&&f(e)&&(n*=s.getViewport()[t]/100),Math.ceil(n)},g=function(e,t){return u(e,t)+"px"};n.extend(s,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!d,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(n.isPlainObject(t)||(t={}),!1!==s.close(!0))?(n.isArray(e)||(e=p(e)?n(e).get():[e]),n.each(e,function(o,a){var r,l,c,d,f,u={};"object"===n.type(a)&&(a.nodeType&&(a=n(a)),p(a)?(u={href:a.data("fancybox-href")||a.attr("href"),title:a.data("fancybox-title")||a.attr("title"),isDom:!0,element:a},n.metadata&&n.extend(!0,u,a.metadata())):u=a),r=t.href||u.href||(h(a)?a:null),l=t.title!==i?t.title:u.title||"",d=(c=t.content||u.content)?"html":t.type||u.type,!d&&u.isDom&&(d=a.data("fancybox-type"),d||(d=(d=a.prop("class").match(/fancybox\.(\w+)/))?d[1]:null)),h(r)&&(d||(s.isImage(r)?d="image":s.isSWF(r)?d="swf":"#"===r.charAt(0)?d="inline":h(a)&&(d="html",c=a)),"ajax"===d&&(f=r.split(/\s+/,2),r=f.shift(),f=f.shift())),c||("inline"===d?r?c=n(h(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):u.isDom&&(c=a):"html"===d?c=r:!d&&!r&&u.isDom&&(d="inline",c=a)),n.extend(u,{href:r,type:d,content:c,title:l,selector:f}),e[o]=u}),s.opts=n.extend(!0,{},s.defaults,t),t.keys!==i&&(s.opts.keys=t.keys?n.extend({},s.defaults.keys,t.keys):!1),s.group=e,s._start(s.opts.index)):void 0},cancel:function(){var e=s.coming;e&&!1!==s.trigger("onCancel")&&(s.hideLoading(),s.ajaxLoad&&s.ajaxLoad.abort(),s.ajaxLoad=null,s.imgPreload&&(s.imgPreload.onload=s.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),s.coming=null,s.current||s._afterZoomOut(e))},close:function(e){s.cancel(),!1!==s.trigger("beforeClose")&&(s.unbindEvents(),s.isActive&&(s.isOpen&&!0!==e?(s.isOpen=s.isOpened=!1,s.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),s.wrap.stop(!0,!0).removeClass("fancybox-opened"),s.transitions[s.current.closeMethod]()):(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),s._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(s.player.timer)},n=function(){t(),s.current&&s.player.isActive&&(s.player.timer=setTimeout(s.next,s.current.playSpeed))},i=function(){t(),r.unbind(".player"),s.player.isActive=!1,s.trigger("onPlayEnd")};!0===e||!s.player.isActive&&!1!==e?s.current&&(s.current.loop||s.current.index<s.group.length-1)&&(s.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":i,"onUpdate.player":n,"beforeLoad.player":t}),n(),s.trigger("onPlayStart")):i()},next:function(e){var t=s.current;t&&(h(e)||(e=t.direction.next),s.jumpto(t.index+1,e,"next"))},prev:function(e){var t=s.current;t&&(h(e)||(e=t.direction.prev),s.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var o=s.current;o&&(e=u(e),s.direction=t||o.direction[e>=o.index?"next":"prev"],s.router=n||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==i&&(s.cancel(),s._start(e)))},reposition:function(e,t){var i,o=s.current,a=o?o.wrap:null;a&&(i=s._getPosition(t),e&&"scroll"===e.type?(delete i.position,a.stop(!0,!0).animate(i,200)):(a.css(i),o.pos=n.extend({},o.dim,i)))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(c),c=null),s.isOpen&&!c&&(c=setTimeout(function(){var i=s.current;i&&!s.isClosing&&(s.wrap.removeClass("fancybox-tmp"),(n||"load"===t||"resize"===t&&i.autoResize)&&s._setDimension(),"scroll"===t&&i.canShrink||s.reposition(e),s.trigger("onUpdate"),c=null)},n&&!d?0:300))},toggle:function(e){s.isOpen&&(s.current.fitToView="boolean"===n.type(e)?e:!s.current.fitToView,d&&(s.wrap.removeAttr("style").addClass("fancybox-tmp"),s.trigger("onUpdate")),s.update())},hideLoading:function(){r.unbind(".loading"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;s.hideLoading(),e=n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"),r.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),s.cancel())}),s.defaults.fixed||(t=s.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=s.current&&s.current.locked||!1,n={x:a.scrollLeft(),y:a.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=d&&e.innerWidth?e.innerWidth:a.width(),n.h=d&&e.innerHeight?e.innerHeight:a.height()),n},unbindEvents:function(){s.wrap&&p(s.wrap)&&s.wrap.unbind(".fb"),r.unbind(".fb"),a.unbind(".fb")},bindEvents:function(){var e,t=s.current;t&&(a.bind("orientationchange.fb"+(d?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),s.update),(e=t.keys)&&r.bind("keydown.fb",function(o){var a=o.which||o.keyCode,r=o.target||o.srcElement;return 27===a&&s.coming?!1:void!(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||r&&(r.type||n(r).is("[contenteditable]"))||!n.each(e,function(e,r){return 1<t.group.length&&r[a]!==i?(s[e](r[a]),o.preventDefault(),!1):-1<n.inArray(a,r)?(s[e](),o.preventDefault(),!1):void 0}))}),n.fn.mousewheel&&t.mouseWheel&&s.wrap.bind("mousewheel.fb",function(e,i,o,a){for(var r=n(e.target||null),l=!1;r.length&&!l&&!r.is(".fancybox-skin")&&!r.is(".fancybox-wrap");)l=r[0]&&!(r[0].style.overflow&&"hidden"===r[0].style.overflow)&&(r[0].clientWidth&&r[0].scrollWidth>r[0].clientWidth||r[0].clientHeight&&r[0].scrollHeight>r[0].clientHeight),r=n(r).parent();0!==i&&!l&&1<s.group.length&&!t.canShrink&&(a>0||o>0?s.prev(a>0?"down":"left"):(0>a||0>o)&&s.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var i,o=t||s.coming||s.current;if(o){if(n.isFunction(o[e])&&(i=o[e].apply(o,Array.prototype.slice.call(arguments,1))),!1===i)return!1;o.helpers&&n.each(o.helpers,function(t,i){i&&s.helpers[t]&&n.isFunction(s.helpers[t][e])&&s.helpers[t][e](n.extend(!0,{},s.helpers[t].defaults,i),o)}),r.trigger(e)}},isImage:function(e){return h(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return h(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,i,o={};if(e=u(e),t=s.group[e]||null,!t)return!1;if(o=n.extend(!0,{},s.opts,t),t=o.margin,i=o.padding,"number"===n.type(t)&&(o.margin=[t,t,t,t]),"number"===n.type(i)&&(o.padding=[i,i,i,i]),o.modal&&n.extend(!0,o,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),o.autoSize&&(o.autoWidth=o.autoHeight=!0),"auto"===o.width&&(o.autoWidth=!0),"auto"===o.height&&(o.autoHeight=!0),o.group=s.group,o.index=e,s.coming=o,!1===s.trigger("beforeLoad"))s.coming=null;else{if(i=o.type,t=o.href,!i)return s.coming=null,s.current&&s.router&&"jumpto"!==s.router?(s.current.index=e,s[s.router](s.direction)):!1;if(s.isActive=!0,("image"===i||"swf"===i)&&(o.autoHeight=o.autoWidth=!1,o.scrolling="visible"),"image"===i&&(o.aspectRatio=!0),"iframe"===i&&d&&(o.scrolling="scroll"),o.wrap=n(o.tpl.wrap).addClass("fancybox-"+(d?"mobile":"desktop")+" fancybox-type-"+i+" fancybox-tmp "+o.wrapCSS).appendTo(o.parent||"body"),n.extend(o,{skin:n(".fancybox-skin",o.wrap),outer:n(".fancybox-outer",o.wrap),inner:n(".fancybox-inner",o.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,t){o.skin.css("padding"+t,g(o.padding[e]))}),s.trigger("onReady"),"inline"===i||"html"===i){if(!o.content||!o.content.length)return s._error("content")}else if(!t)return s._error("href");"image"===i?s._loadImage():"ajax"===i?s._loadAjax():"iframe"===i?s._loadIframe():s._afterLoad()}},_error:function(e){n.extend(s.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:s.coming.tpl.error}),s._afterLoad()},_loadImage:function(){var e=s.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,s.coming.width=this.width/s.opts.pixelRatio,s.coming.height=this.height/s.opts.pixelRatio,s._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,s._error("image")},e.src=s.coming.href,!0!==e.complete&&s.showLoading()},_loadAjax:function(){var e=s.coming;s.showLoading(),s.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){s.coming&&"abort"!==t?s._error("ajax",e):s.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,s._afterLoad())}}))},_loadIframe:function(){var e=s.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",d?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(s.showLoading(),t.one("load",function(){n(this).data("ready",1),d||n(this).bind("load.fb",s.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),s._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||s._afterLoad()},_preloadImages:function(){var e,t,n=s.group,i=s.current,o=n.length,a=i.preload?Math.min(i.preload,o-1):0;for(t=1;a>=t;t+=1)e=n[(i.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,i,o,a,r=s.coming,l=s.current;if(s.hideLoading(),r&&!1!==s.isActive)if(!1===s.trigger("afterLoad",r,l))r.wrap.stop(!0).trigger("onReset").remove(),s.coming=null;else{switch(l&&(s.trigger("beforeChange",l),l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),s.unbindEvents(),e=r.content,t=r.type,i=r.scrolling,n.extend(s,{wrap:r.wrap,skin:r.skin,outer:r.outer,inner:r.inner,current:r,previous:l}),o=r.href,t){case"inline":case"ajax":case"html":r.selector?e=n("<div>").html(e).find(r.selector):p(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),r.wrap.bind("onReset",function(){n(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=r.tpl.image.replace("{href}",o);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+o+'"></param>',a="",n.each(r.swf,function(t,n){e+='<param name="'+t+'" value="'+n+'"></param>',a+=" "+t+'="'+n+'"'}),e+='<embed src="'+o+'" type="application/x-shockwave-flash" width="100%" height="100%"'+a+"></embed></object>"}(!p(e)||!e.parent().is(r.inner))&&r.inner.append(e),s.trigger("beforeShow"),r.inner.css("overflow","yes"===i?"scroll":"no"===i?"hidden":i),s._setDimension(),s.reposition(),s.isOpen=!1,s.coming=null,s.bindEvents(),s.isOpened?l.prevMethod&&s.transitions[l.prevMethod]():n(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove(),s.transitions[s.isOpened?r.nextMethod:r.openMethod](),s._preloadImages()}},_setDimension:function(){var e,t,i,o,a,r,l,c,d,p=s.getViewport(),h=0,m=!1,y=!1,m=s.wrap,x=s.skin,v=s.inner,w=s.current,y=w.width,b=w.height,k=w.minWidth,C=w.minHeight,O=w.maxWidth,W=w.maxHeight,_=w.scrolling,S=w.scrollOutside?w.scrollbarWidth:0,T=w.margin,L=u(T[1]+T[3]),E=u(T[0]+T[2]);if(m.add(x).add(v).width("auto").height("auto").removeClass("fancybox-tmp"),T=u(x.outerWidth(!0)-x.width()),e=u(x.outerHeight(!0)-x.height()),t=L+T,i=E+e,o=f(y)?(p.w-t)*u(y)/100:y,a=f(b)?(p.h-i)*u(b)/100:b,"iframe"===w.type){if(d=w.content,w.autoHeight&&1===d.data("ready"))try{d[0].contentWindow.document.location&&(v.width(o).height(9999),r=d.contents().find("body"),S&&r.css("overflow-x","hidden"),a=r.outerHeight(!0))}catch(R){}}else(w.autoWidth||w.autoHeight)&&(v.addClass("fancybox-tmp"),w.autoWidth||v.width(o),w.autoHeight||v.height(a),w.autoWidth&&(o=v.width()),w.autoHeight&&(a=v.height()),v.removeClass("fancybox-tmp"));if(y=u(o),b=u(a),c=o/a,k=u(f(k)?u(k,"w")-t:k),O=u(f(O)?u(O,"w")-t:O),C=u(f(C)?u(C,"h")-i:C),W=u(f(W)?u(W,"h")-i:W),r=O,l=W,w.fitToView&&(O=Math.min(p.w-t,O),W=Math.min(p.h-i,W)),t=p.w-L,E=p.h-E,w.aspectRatio?(y>O&&(y=O,b=u(y/c)),b>W&&(b=W,y=u(b*c)),k>y&&(y=k,b=u(y/c)),C>b&&(b=C,y=u(b*c))):(y=Math.max(k,Math.min(y,O)),w.autoHeight&&"iframe"!==w.type&&(v.width(y),b=v.height()),b=Math.max(C,Math.min(b,W))),w.fitToView)if(v.width(y).height(b),m.width(y+T),p=m.width(),L=m.height(),w.aspectRatio)for(;(p>t||L>E)&&y>k&&b>C&&!(19<h++);)b=Math.max(C,Math.min(W,b-10)),y=u(b*c),k>y&&(y=k,b=u(y/c)),y>O&&(y=O,b=u(y/c)),v.width(y).height(b),m.width(y+T),p=m.width(),L=m.height();else y=Math.max(k,Math.min(y,y-(p-t))),b=Math.max(C,Math.min(b,b-(L-E)));S&&"auto"===_&&a>b&&t>y+T+S&&(y+=S),v.width(y).height(b),m.width(y+T),p=m.width(),L=m.height(),m=(p>t||L>E)&&y>k&&b>C,y=w.aspectRatio?r>y&&l>b&&o>y&&a>b:(r>y||l>b)&&(o>y||a>b),n.extend(w,{dim:{width:g(p),height:g(L)},origWidth:o,origHeight:a,canShrink:m,canExpand:y,wPadding:T,hPadding:e,wrapSpace:L-x.outerHeight(!0),skinSpace:x.height()-b}),!d&&w.autoHeight&&b>C&&W>b&&!y&&v.height("auto")},_getPosition:function(e){var t=s.current,n=s.getViewport(),i=t.margin,o=s.wrap.width()+i[1]+i[3],a=s.wrap.height()+i[0]+i[2],i={position:"absolute",top:i[0],left:i[3]};return t.autoCenter&&t.fixed&&!e&&a<=n.h&&o<=n.w?i.position="fixed":t.locked||(i.top+=n.y,i.left+=n.x),i.top=g(Math.max(i.top,i.top+(n.h-a)*t.topRatio)),i.left=g(Math.max(i.left,i.left+(n.w-o)*t.leftRatio)),i},_afterZoomIn:function(){var e=s.current;e&&(s.isOpen=s.isOpened=!0,s.wrap.css("overflow","visible").addClass("fancybox-opened"),s.update(),(e.closeClick||e.nextClick&&1<s.group.length)&&s.inner.css("cursor","pointer").bind("click.fb",function(t){!n(t.target).is("a")&&!n(t.target).parent().is("a")&&(t.preventDefault(),s[e.closeClick?"close":"next"]())}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb",function(e){e.preventDefault(),s.close()}),e.arrows&&1<s.group.length&&((e.loop||0<e.index)&&n(e.tpl.prev).appendTo(s.outer).bind("click.fb",s.prev),(e.loop||e.index<s.group.length-1)&&n(e.tpl.next).appendTo(s.outer).bind("click.fb",s.next)),s.trigger("afterShow"),e.loop||e.index!==e.group.length-1?s.opts.autoPlay&&!s.player.isActive&&(s.opts.autoPlay=!1,s.play()):s.play(!1))},_afterZoomOut:function(e){e=e||s.current,n(".fancybox-wrap").trigger("onReset").remove(),n.extend(s,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),s.trigger("afterClose",e)}}),s.transitions={getOrigPosition:function(){var e=s.current,t=e.element,n=e.orig,i={},o=50,a=50,r=e.hPadding,l=e.wPadding,c=s.getViewport();return!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),p(n)?(i=n.offset(),n.is("img")&&(o=n.outerWidth(),a=n.outerHeight())):(i.top=c.y+(c.h-a)*e.topRatio,i.left=c.x+(c.w-o)*e.leftRatio),("fixed"===s.wrap.css("position")||e.locked)&&(i.top-=c.y,i.left-=c.x),i={top:g(i.top-r*e.topRatio),left:g(i.left-l*e.leftRatio),width:g(o+l),height:g(a+r)}},step:function(e,t){var n,i,o=t.prop;i=s.current;var a=i.wrapSpace,r=i.skinSpace;("width"===o||"height"===o)&&(n=t.end===t.start?1:(e-t.start)/(t.end-t.start),s.isClosing&&(n=1-n),i="width"===o?i.wPadding:i.hPadding,i=e-i,s.skin[o](u("width"===o?i:i-a*n)),s.inner[o](u("width"===o?i:i-a*n-r*n)))},zoomIn:function(){var e=s.current,t=e.pos,i=e.openEffect,o="elastic"===i,a=n.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1),s.wrap.css(t).animate(a,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:s._afterZoomIn})},zoomOut:function(){var e=s.current,t=e.closeEffect,n="elastic"===t,i={opacity:.1};n&&(i=this.getOrigPosition(),e.closeOpacity&&(i.opacity=.1)),s.wrap.animate(i,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:s._afterZoomOut})},changeIn:function(){var e,t=s.current,n=t.nextEffect,i=t.pos,o={opacity:1},a=s.direction;i.opacity=.1,"elastic"===n&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(i[e]=g(u(i[e])-200),o[e]="+=200px"):(i[e]=g(u(i[e])+200),o[e]="-=200px")),"none"===n?s._afterZoomIn():s.wrap.css(i).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:s._afterZoomIn})},changeOut:function(){var e=s.previous,t=e.prevEffect,i={opacity:.1},o=s.direction;"elastic"===t&&(i["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"=200px"),e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},s.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!d,fixed:!0},overlay:null,fixed:!1,el:n("html"),create:function(e){e=n.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=n('<div class="fancybox-overlay"></div>').appendTo(s.coming?s.coming.parent:e.parent),this.fixed=!1,e.fixed&&s.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=n.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(a.bind("resize.overlay",n.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){return n(e.target).hasClass("fancybox-overlay")?(s.isActive?s.close():t.close(),!1):void 0}),this.overlay.css(e.css).show()},close:function(){var e,t;a.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(n(".fancybox-margin").removeClass("fancybox-margin"),e=a.scrollTop(),t=a.scrollLeft(),this.el.removeClass("fancybox-lock"),a.scrollTop(e).scrollLeft(t)),n(".fancybox-overlay").remove().hide(),n.extend(this,{overlay:null,fixed:!1})},update:function(){var e,n="100%";this.overlay.width(n).height("100%"),l?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),r.width()>e&&(n=r.width())):r.width()>a.width()&&(n=r.width()),this.overlay.width(n).height(r.height())},onReady:function(e,t){var i=this.overlay;n(".fancybox-overlay").stop(!0,!0),i||this.create(e),e.locked&&this.fixed&&t.fixed&&(i||(this.margin=r.height()>a.height()?n("html").css("margin-right").replace("px",""):!1),t.locked=this.overlay.append(t.wrap),t.fixed=!1),!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var i,o;t.locked&&(!1!==this.margin&&(n("*").filter(function(){return"fixed"===n(this).css("position")&&!n(this).hasClass("fancybox-overlay")&&!n(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),i=a.scrollTop(),o=a.scrollLeft(),this.el.addClass("fancybox-lock"),a.scrollTop(i).scrollLeft(o)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!s.coming&&this.overlay.fadeOut(e.speedOut,n.proxy(this.close,this))}},s.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=s.current,i=t.title,o=e.type;if(n.isFunction(i)&&(i=i.call(t.element,t)),h(i)&&""!==n.trim(i)){switch(t=n('<div class="fancybox-title fancybox-title-'+o+'-wrap">'+i+"</div>"),o){case"inside":o=s.skin;break;case"outside":o=s.wrap;break;case"over":o=s.inner;break;default:o=s.skin,t.appendTo("body"),l&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),s.current.margin[2]+=Math.abs(u(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](o)}}},n.fn.fancybox=function(e){var t,i=n(this),o=this.selector||"",a=function(a){var r,l,c=n(this).blur(),d=t;!(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(r=e.groupAttr||"data-fancybox-group",l=c.attr(r),l||(r="rel",l=c.get(0)[r]),l&&""!==l&&"nofollow"!==l&&(c=o.length?n(o):i,c=c.filter("["+r+'="'+l+'"]'),d=c.index(this)),e.index=d,!1===s.open(c,e)||!a.preventDefault()))};return e=e||{},t=e.index||0,o&&!1!==e.live?r.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",a):i.unbind("click.fb-start").bind("click.fb-start",a),this.filter("[data-fancybox-start=1]").trigger("click"),this},r.ready(function(){var t,a;if(n.scrollbarWidth===i&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),t=t.innerWidth()-t.height(99).innerWidth();return e.remove(),t}),n.support.fixedPosition===i){t=n.support,a=n('<div style="position:fixed;top:20px;"></div>').appendTo("body");var r=20===a[0].offsetTop||15===a[0].offsetTop;a.remove(),t.fixedPosition=r}n.extend(s.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")}),t=n(e).width(),o.addClass("fancybox-lock-test"),a=n(e).width(),o.removeClass("fancybox-lock-test"),n("<style type='text/css'>.fancybox-margin{margin-right:"+(a-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery);
/*!	
 * Maximage Version: 2.0.8 (16-Jan-2012) - http://www.aaronvanderzwan.com/maximage/2.0/
 */
(function(a){a.fn.maximage=function(d,e){var c;if(typeof d=="object"||d===undefined){c=a.extend(a.fn.maximage.defaults,d||{})}if(typeof d=="string"){c=a.fn.maximage.defaults}a.Body=a("body");a.Window=a(window);a.Scroll=a("html, body");a.Events={RESIZE:"resize"};this.each(function(){var m=a(this),f=0,j=[];var i={setup:function(){if(a.Slides.length>0){var r,p=a.Slides.length;for(r=0;r<p;r++){var q=a.Slides[r];m.append('<div class="mc-image '+q.theclass+'" title="'+q.alt+'" style="background-image:url(\''+q.url+"');"+q.style+'" data-href="'+q.datahref+'">'+q.content+"</div>")}i.preload(0);i.resize()}},preload:function(q){var p=a("<img/>");p.load(function(){if(f==0){g.setup();c.onFirstImageLoaded()}if(f==(a.Slides.length-1)){c.onImagesLoaded(m)}else{f++;i.preload(f)}});p[0].src=a.Slides[q].url;j.push(p[0])},resize:function(){a.Window.bind(a.Events.RESIZE,function(){a.Scroll.addClass("mc-hide-scrolls");a.Window.data("h",k.sizes().h).data("w",k.sizes().w);m.height(a.Window.data("h")).width(a.Window.data("w")).children().height(a.Window.data("h")).width(a.Window.data("w"));m.children().each(function(){this.cycleH=a.Window.data("h");this.cycleW=a.Window.data("w")});a(a.Scroll).removeClass("mc-hide-scrolls")})}};var h={setup:function(){var u,s,q,r,p=a.Slides.length;if(a.BrowserTests.msie&&!c.overrideMSIEStop){document.execCommand("Stop",false)}m.html("");a.Body.addClass("mc-old-browser");if(a.Slides.length>0){a.Scroll.addClass("mc-hide-scrolls");a.Window.data("h",k.sizes().h).data("w",k.sizes().w);a("body").append(a("<div></div>").attr("class","mc-loader").css({position:"absolute",left:"-9999px"}));for(r=0;r<p;r++){if(a.Slides[r].content.length==0){u='<img src="'+a.Slides[r].url+'" />'}else{u=a.Slides[r].content}q=a("<div>"+u+"</div>").attr("class","mc-image mc-image-n"+r+" "+a.Slides[r].theclass);m.append(q);if(a(".mc-image-n"+r).children("img").length==0){}else{a("div.mc-loader").append(a(".mc-image-n"+r).children("img").first().clone().addClass("not-loaded"))}}h.preload();h.windowResize()}},preload:function(){var p=setInterval(function(){a(".mc-loader").children("img").each(function(r){var q=a(this);if(q.hasClass("not-loaded")){if(q.height()>0){a(this).removeClass("not-loaded");var s=a("div.mc-image-n"+r).children("img").first();s.data("h",q.height()).data("w",q.width()).data("ar",(q.width()/q.height()));h.onceLoaded(r)}}});if(a(".not-loaded").length==0){a(".mc-loader").remove();clearInterval(p)}},1000)},onceLoaded:function(p){h.maximage(p);if(p==0){m.css({visibility:"visible"});c.onFirstImageLoaded()}else{if(p==a.Slides.length-1){g.setup();a(a.Scroll).removeClass("mc-hide-scrolls");c.onImagesLoaded(m);if(c.debug){b(" - Final Maximage - ");b(m)}}}},maximage:function(q){a("div.mc-image-n"+q).height(a.Window.data("h")).width(a.Window.data("w")).children("img").first().each(function(){n.maxcover(a(this))})},windowResize:function(){a.Window.bind(a.Events.RESIZE,function(){clearTimeout(this.id);this.id=setTimeout(h.doneResizing,200)})},doneResizing:function(){a(a.Scroll).addClass("mc-hide-scrolls");a.Window.data("h",k.sizes().h).data("w",k.sizes().w);m.height(a.Window.data("h")).width(a.Window.data("w"));m.find(".mc-image").each(function(q){h.maximage(q)});var p=m.data("cycle.opts");if(p!=undefined){p.height=a.Window.data("h");p.width=a.Window.data("w");jQuery.each(p.elements,function(q,r){r.cycleW=a.Window.data("w");r.cycleH=a.Window.data("h")})}a(a.Scroll).removeClass("mc-hide-scrolls")}};var g={setup:function(){var q,p;m.addClass("mc-cycle");a.Window.data("h",k.sizes().h).data("w",k.sizes().w);jQuery.easing.easeForCSSTransition=function(v,w,u,A,z,y){return u+A};var r=a.extend({fit:1,containerResize:0,height:a.Window.data("h"),width:a.Window.data("w"),slideResize:false,easing:(a.BrowserTests.cssTransitions&&c.cssTransitions?"easeForCSSTransition":"swing")},c.cycleOptions);m.cycle(r)}};var n={center:function(p){if(c.verticalCenter){p.css({marginTop:((p.height()-a.Window.data("h"))/2)*-1})}if(c.horizontalCenter){p.css({marginLeft:((p.width()-a.Window.data("w"))/2)*-1})}},fill:function(p){var q=p.is("object")?p.parent().first():p;if(typeof c.backgroundSize=="function"){c.backgroundSize(p)}else{if(c.backgroundSize=="cover"){if(a.Window.data("w")/a.Window.data("h")<q.data("ar")){p.height(a.Window.data("h")).width((a.Window.data("h")*q.data("ar")).toFixed(0))}else{p.height((a.Window.data("w")/q.data("ar")).toFixed(0)).width(a.Window.data("w"))}}else{if(c.backgroundSize=="contain"){if(a.Window.data("w")/a.Window.data("h")<q.data("ar")){p.height((a.Window.data("w")/q.data("ar")).toFixed(0)).width(a.Window.data("w"))}else{p.height(a.Window.data("h")).width((a.Window.data("h")*q.data("ar")).toFixed(0))}}else{b("The backgroundSize option was not recognized for older browsers.")}}}},maxcover:function(p){n.fill(p);n.center(p)},maxcontain:function(p){n.fill(p);n.center(p)}};var k={browser_tests:function(){var q=a("<div />")[0],u=["Moz","Webkit","Khtml","O","ms"],t="transition",s={cssTransitions:false,cssBackgroundSize:("backgroundSize" in q.style&&c.cssBackgroundSize),html5Video:false,msie:false};if(c.cssTransitions){if(typeof q.style[t]=="string"){s.cssTransitions=true}t=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<u.length;r++){if(u[r]+t in q.style){s.cssTransitions=true}}}if(!!document.createElement("video").canPlayType){s.html5Video=true}s.msie=(k.msie()!==undefined);if(c.debug){b(" - Browser Test - ");b(s)}return s},construct_slide_object:function(){var r=new Object(),p=new Array(),q="";m.children().each(function(t){var s=a(this).is("img")?a(this).clone():a(this).find("img").first().clone();r={};r.url=s.attr("src");r.title=s.attr("title")!=undefined?s.attr("title"):"";r.alt=s.attr("alt")!=undefined?s.attr("alt"):"";r.theclass=s.attr("class")!=undefined?s.attr("class"):"";r.styles=s.attr("style")!=undefined?s.attr("style"):"";r.orig=s.clone();r.datahref=s.attr("data-href")!=undefined?s.attr("data-href"):"";r.content="";if(a(this).find("img").length>0){if(a.BrowserTests.cssBackgroundSize){a(this).find("img").first().remove()}r.content=a(this).html()}s[0].src="";if(a.BrowserTests.cssBackgroundSize){a(this).remove()}p.push(r)});if(c.debug){b(" - Slide Object - ");b(p)}return p},msie:function(){var r,p=3,s=document.createElement("div"),q=s.getElementsByTagName("i");while(s.innerHTML="<!--[if gt IE "+(++p)+"]><i></i><![endif]-->",q[0]){}return p>4?p:r},sizes:function(){var p={h:0,w:0};if(c.fillElement=="window"){p.h=a.Window.height();p.w=a.Window.width()}else{var q=m.parents(c.fillElement).first();if(q.height()==0||q.data("windowHeight")==true){q.data("windowHeight",true);p.h=a.Window.height()}else{p.h=q.height()}if(q.width()==0||q.data("windowWidth")==true){q.data("windowWidth",true);p.w=a.Window.width()}else{p.w=q.width()}}return p}};a.BrowserTests=k.browser_tests();if(typeof d=="string"){if(a.BrowserTests.html5Video||!m.is("video")){var l,o=m.is("object")?m.parent().first():m;if(!a.Body.hasClass("mc-old-browser")){a.Body.addClass("mc-old-browser")}a.Window.data("h",k.sizes().h).data("w",k.sizes().w);o.data("h",m.height()).data("w",m.width()).data("ar",m.width()/m.height());a.Window.bind(a.Events.RESIZE,function(){a.Window.data("h",k.sizes().h).data("w",k.sizes().w);l=m.data("resizer");clearTimeout(l);l=setTimeout(n[d](m),200);m.data("resizer",l)});n[d](m)}}else{a.Slides=k.construct_slide_object();if(a.BrowserTests.cssBackgroundSize){if(c.debug){b(" - Using Modern - ")}i.setup()}else{if(c.debug){b(" - Using Old - ")}h.setup()}}});function b(f){if(window.console&&window.console.log){window.console.log(f)}}};a.fn.maximage.defaults={debug:false,cssBackgroundSize:true,cssTransitions:true,verticalCenter:true,horizontalCenter:true,scaleInterval:20,backgroundSize:"cover",fillElement:"window",overrideMSIEStop:false,onFirstImageLoaded:function(){},onImagesLoaded:function(){}}})(jQuery);
/**
 * jQuery Masonry v2.1.05
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
//  */
// (function(a,b,c){"use strict";var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,c){var d=this,f=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){b.event.handle.apply(d,f)},c==="execAsap"?0:50)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()},b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[];var d=this.element[0].style;this.originalStyle={height:d.height||""};var e=this.options.containerStyle;for(var f in e)this.originalStyle[f]=d[f]||"";this.element.css(e),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={x:parseInt(this.element.css("padding-"+this.horizontalDirection),10),y:parseInt(this.element.css("padding-top"),10)},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var g=this;setTimeout(function(){g.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){g.resize()}),this.reloadItems()},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,b){for(var c=0,d=a.length;c<d;c++)this._placeBrick(a[c]);var e={};e.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var f=0;c=this.cols;while(--c){if(this.colYs[c]!==0)break;f++}e.width=(this.cols-f)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:e});var g=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",h=this.options.animationOptions,i;for(c=0,d=this.styleQueue.length;c<d;c++)i=this.styleQueue[c],i.$el[g](i.style,h);this.styleQueue=[],b&&b.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.isFluid?this.options.columnWidth(b):this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a){var c=b(a),d,e,f,g,h;d=Math.ceil(c.outerWidth(!0)/this.columnWidth),d=Math.min(d,this.cols);if(d===1)f=this.colYs;else{e=this.cols+1-d,f=[];for(h=0;h<e;h++)g=this.colYs.slice(h,h+d),f[h]=Math.max.apply(Math,g)}var i=Math.min.apply(Math,f),j=0;for(var k=0,l=f.length;k<l;k++)if(f[k]===i){j=k;break}var m={top:i+this.offset.y};m[this.horizontalDirection]=this.columnWidth*j+this.offset.x,this.styleQueue.push({$el:c,style:m});var n=i+c.outerHeight(!0),o=this.cols+1-l;for(k=0;k<o;k++)this.colYs[j+k]=n},resize:function(){var a=this.cols;this._getColumns(),(this.isFluid||this.cols!==a)&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(0);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var f=function(b){a.console&&a.console.error(b)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d){f("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(d[a])||a.charAt(0)==="_"){f("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);

// window.JSON||(window.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(a,b){"use strict";var c=a.History=a.History||{},d=a.jQuery;if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&&c.originalEvent&&c.originalEvent[a]||d&&d[a]||b;return e},onDomLoad:function(a){d(a)}},typeof c.init!="undefined"&&c.init()}(window),function(a,b){"use strict";var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if(typeof g.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");g.initHtml4=function(){if(typeof g.initHtml4.initialized!="undefined")return!1;g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var b=g.getHashByIndex(),c;return c=a===b,c},g.saveHash=function(a){return g.isLastHash(a)?!1:(g.savedHashes.push(a),!0)},g.getHashByIndex=function(a){var b=null;return typeof a=="undefined"?b=g.savedHashes[g.savedHashes.length-1]:a<0?b=g.savedHashes[g.savedHashes.length+a]:b=g.savedHashes[a],b},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var d=g.getHashByState(a),e;return e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e,!0},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};return g.discardedHashes[a]=d,!0},g.discardedState=function(a){var b=g.getHashByState(a),c;return c=g.discardedStates[b]||!1,c},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);return g.discardedState(a)&&delete g.discardedStates[b],!0},g.emulated.hashChange&&(g.hashChangeInit=function(){g.checkerFunction=null;var b="",d,e,h,i;return g.isInternetExplorer()?(d="historyjs-iframe",e=c.createElement("iframe"),e.setAttribute("id",d),e.style.display="none",c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h="",i=!1,g.checkerFunction=function(){if(i)return!1;i=!0;var c=g.getHash()||"",d=g.unescapeHash(e.contentWindow.document.location.hash)||"";return c!==b?(b=c,d!==c&&(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,"hashchange")):d!==h&&(h=d,g.setHash(d,!1)),i=!1,!0}):g.checkerFunction=function(){var c=g.getHash();return c!==b&&(b=c,g.Adapter.trigger(a,"hashchange")),!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval)),!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&&(g.onHashChange=function(b){var d=b&&b.newURL||c.location.href,e=g.getHashByUrl(d),f=null,h=null,i=null,j;return g.isLastHash(e)?(g.busy(!1),!1):(g.doubleCheckComplete(),g.saveHash(e),e&&g.isTraditionalAnchor(e)?(g.Adapter.trigger(a,"anchorchange"),g.busy(!1),!1):(f=g.extractState(g.getFullUrl(e||c.location.href,!1),!0),g.isLastSavedState(f)?(g.busy(!1),!1):(h=g.getHashByState(f),j=g.discardedState(f),j?(g.getHashByIndex(-2)===g.getHashByState(j.forwardState)?g.back(!1):g.forward(!1),!1):(g.pushState(f.data,f.title,f.url,!1),!0))))},g.Adapter.bind(a,"hashchange",g.onHashChange),g.pushState=function(b,d,e,f){if(g.getHashByUrl(e))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(f!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:f}),!1;g.busy(!0);var h=g.createStateObject(b,d,e),i=g.getHashByState(h),j=g.getState(!1),k=g.getHashByState(j),l=g.getHash();return g.storeState(h),g.expectedStateId=h.id,g.recycleState(h),g.setTitle(h),i===k?(g.busy(!1),!1):i!==l&&i!==g.getShortUrl(c.location.href)?(g.setHash(i,!1),!1):(g.saveState(h),g.Adapter.trigger(a,"statechange"),g.busy(!1),!0)},g.replaceState=function(a,b,c,d){if(g.getHashByUrl(c))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(d!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:d}),!1;g.busy(!0);var e=g.createStateObject(a,b,c),f=g.getState(!1),h=g.getStateByIndex(-2);return g.discardState(f,e,h),g.pushState(e.data,e.title,e.url,!1),!0}),g.emulated.pushState&&g.getHash()&&!g.emulated.hashChange&&g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,"hashchange")})},typeof g.init!="undefined"&&g.init()}(window),function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=a.sessionStorage||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode;if(typeof m.init!="undefined")throw new Error("History.js Core has already been loaded...");m.init=function(){return typeof m.Adapter=="undefined"?!1:(typeof m.initCore!="undefined"&&m.initCore(),typeof m.initHtml4!="undefined"&&m.initHtml4(),!0)},m.initCore=function(){if(typeof m.initCore.initialized!="undefined")return!1;m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if(typeof b!="undefined"&&b!==null){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var a=typeof c!="undefined"&&typeof c.log!="undefined"&&typeof c.log.apply!="undefined",b=d.getElementById("log"),e,f,g,h,i;a?(h=Array.prototype.slice.call(arguments),e=h.shift(),typeof c.debug!="undefined"?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e="\n"+arguments[0]+"\n";for(f=1,g=arguments.length;f<g;++f){i=arguments[f];if(typeof i=="object"&&typeof k!="undefined")try{i=k.stringify(i)}catch(j){}e+="\n"+i+"\n"}return b?(b.value+=e+"\n-----\n",b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached=typeof m.getInternetExplorerMajorVersion.cached!="undefined"?m.getInternetExplorerMajorVersion.cached:function(){var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");while((b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0]);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached=typeof m.isInternetExplorer.cached!="undefined"?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated={pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7)},m.isEmptyObject=function(a){for(var b in a)return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);if(d.location.port||!1)a+=":"+d.location.port;return a+="/",a},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";return a.length===1&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a=m.getState(!1,!1),b=(a||{}).url||d.location.href,c;return c=b.replace(/\/+$/,"").replace(/[^\/]+$/,function(a,b,c){return/\./.test(a)?a:a+"/"}),c},m.getBasePageUrl=function(){var a=d.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a,b,c){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b=typeof b=="undefined"?!0:b,/[a-z]+\:\/\//.test(a)||(d==="/"?c=m.getRootUrl()+a.replace(/^\/+/,""):d==="#"?c=m.getPageUrl().replace(/#.*/,"")+a:d==="?"?c=m.getPageUrl().replace(/[\?#].*/,"")+a:b?c=m.getBaseUrl()+a.replace(/^(\.\/)+/,""):c=m.getBasePageUrl()+a.replace(/^(\.\/)+/,"")),c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),m.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),b},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){typeof a=="undefined"&&(a=!0),typeof b=="undefined"&&(b=!0);var c=m.getLastSavedState();return!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var b=m.extractId(a.url),c;if(!b){c=m.getStateString(a);if(typeof m.stateToId[c]!="undefined")b=m.stateToId[c];else if(typeof m.store.stateToId[c]!="undefined")b=m.store.stateToId[c];else{for(;;){b=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof m.idToState[b]=="undefined"&&typeof m.store.idToState[b]=="undefined")break}m.stateToId[c]=b,m.idToState[b]=a}}return b},m.normalizeState=function(a){var b,c;if(!a||typeof a!="object")a={};if(typeof a.normalized!="undefined")return a;if(!a.data||typeof a.data!="object")a.data={};b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(m.unescapeString(a.url||d.location.href)),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_suid.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data);if(b.title||c)b.hash=m.getShortUrl(b.url).replace(/\??\&_suid.*/,""),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id;return b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl),b},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d),d},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c),d},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id,c},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash,c},m.extractId=function(a){var b,c,d;return c=/(.*)\&_suid=([0-9]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||""):"",b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var c=null,d,e;return b=b||!1,d=m.extractId(a),d&&(c=m.getStateById(d)),c||(e=m.getFullUrl(a),d=m.getIdByUrl(e)||!1,d&&(c=m.getStateById(d)),!c&&b&&!m.isTraditionalAnchor(a)&&(c=m.createStateObject(null,null,e))),c},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var b=!1,c;return c=m.extractState(a.url),b=c&&c.id!==a.id,b},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var b=!1,c,d,e;return m.savedStates.length&&(c=a.id,d=m.getLastSavedState(),e=d.id,b=c===e),b},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return typeof a=="undefined"?b=m.savedStates[m.savedStates.length-1]:a<0?b=m.savedStates[m.savedStates.length+a]:b=m.savedStates[a],b},m.getHash=function(){var a=m.unescapeHash(d.location.hash);return a},m.unescapeString=function(b){var c=b,d;for(;;){d=a.unescape(c);if(d===c)break;c=d}return c},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=m.unescapeString(b),b},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){var c,e,f;return b!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(c=m.escapeHash(a),m.busy(!0),e=m.extractState(a,!0),e&&!m.emulated.pushState?m.pushState(e.data,e.title,e.url,!1):d.location.hash!==c&&(m.bugs.setHash?(f=m.getPageUrl(),m.pushState(null,null,f+"#"+c,!1)):d.location.hash=c),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.escape(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=m.unescapeHash(b),b},m.setTitle=function(a){var b=a.title,c;b||(c=m.getStateByIndex(0),c&&c.url===a.url&&(b=c.title||m.options.initialTitle));try{d.getElementsByTagName("title")[0].innerHTML=b.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return d.title=b,m},m.queues=[],m.busy=function(a){typeof a!="undefined"?m.busy.flag=a:typeof m.busy.flag=="undefined"&&(m.busy.flag=!1);if(!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(m.busy.flag)return;for(a=m.queues.length-1;a>=0;--a){c=m.queues[a];if(c.length===0)continue;d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay)}};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return typeof a=="function"&&(a={callback:a}),typeof b!="undefined"&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var b=m.extractState(d.location.href),c;if(!m.isLastSavedState(b))c=b;else return;return c||(c=m.createStateObject()),m.Adapter.trigger(a,"popstate"),m},m.back=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a>0)for(c=1;c<=a;++c)m.forward(b);else{if(!(a<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(c=-1;c>=a;--c)m.back(b)}return m};if(m.emulated.pushState){var o=function(){};m.pushState=m.pushState||o,m.replaceState=m.replaceState||o}else m.onPopState=function(b,c){var e=!1,f=!1,g,h;return m.doubleCheckComplete(),g=m.getHash(),g?(h=m.extractState(g||d.location.href,!0),h?m.replaceState(h.data,h.title,h.url,!1):(m.Adapter.trigger(a,"anchorchange"),m.busy(!1)),m.expectedStateId=!1,!1):(e=m.Adapter.extractEventData("state",b,c)||!1,e?f=m.getStateById(e):m.expectedStateId?f=m.getStateById(m.expectedStateId):f=m.extractState(d.location.href),f||(f=m.createStateObject(null,null,d.location.href)),m.expectedStateId=!1,m.isLastSavedState(f)?(m.busy(!1),!1):(m.storeState(f),m.saveState(f),m.setTitle(f),m.Adapter.trigger(a,"statechange"),m.busy(!1),!0))},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0};if(f){try{m.store=k.parse(f.getItem("History.store"))||{}}catch(p){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,"beforeunload",m.clearAllIntervals),m.Adapter.bind(a,"unload",m.clearAllIntervals),m.saveState(m.storeState(m.extractState(d.location.href,!0))),f&&(m.onUnload=function(){var a,b;try{a=k.parse(f.getItem("History.store"))||{}}catch(c){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState){if(!m.idToState.hasOwnProperty(b))continue;a.idToState[b]=m.idToState[b]}for(b in m.urlToId){if(!m.urlToId.hasOwnProperty(b))continue;a.urlToId[b]=m.urlToId[b]}for(b in m.stateToId){if(!m.stateToId.hasOwnProperty(b))continue;a.stateToId[b]=m.stateToId[b]}m.store=a,m.normalizeStore(),f.setItem("History.store",k.stringify(a))},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload));if(!m.emulated.pushState){m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval));if(e.vendor==="Apple Computer, Inc."||(e.appCodeName||"")==="Mozilla")m.Adapter.bind(a,"hashchange",function(){m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"hashchange")})}},m.init()}(window)

// /* url() v1.7.2 - http://github.com/websanova/js-url */window.url=(function(){function b(c){return !isNaN(parseFloat(c))&&isFinite(c)}return function a(p,d){var c=d||window.location.toString();if(c.substring(0,2)==="//"){c="http:"+c}else{if(c.split("://").length===1){c="http://"+c}}d=c.split("/");var g={auth:""},o=d[2].split("@");if(o.length===1){o=o[0].split(":")}else{g.auth=o[0];o=o[1].split(":")}g.protocol=d[0],g.hostname=o[0],g.port=(o[1]||"80"),g.pathname="/"+d.slice(3,d.length).join("/").split("?")[0].split("#")[0];var e=g.pathname;if(e.split(".").length===1&&e[e.length-1]!=="/"){e+="/"}var k=g.hostname,l=k.split("."),m=e.split("/");if(!p){return c}else{if(p==="hostname"){return k}else{if(p==="domain"){return l.slice(-2).join(".")}else{if(p==="tld"){return l.slice(-1).join(".")}else{if(p==="sub"){return l.slice(0,l.length-2).join(".")}else{if(p==="port"){return g.port||"80"}else{if(p==="protocol"){return g.protocol.split(":")[0]}else{if(p==="auth"){return g.auth}else{if(p==="user"){return g.auth.split(":")[0]}else{if(p==="pass"){return g.auth.split(":")[1]||""}else{if(p==="path"){return e}else{if(p[0]==="."){p=p.substring(1);if(b(p)){p=parseInt(p);return l[p<0?l.length+p:p-1]||""}}else{if(b(p)){p=parseInt(p);return m[p<0?m.length-1+p:p]||""}else{if(p==="file"){return m.slice(-1)[0]}else{if(p==="filename"){return m.slice(-1)[0].split(".")[0]}else{if(p==="fileext"){return m.slice(-1)[0].split(".")[1]||""}else{if(p[0]==="?"||p[0]==="#"){var h=c,f=null;if(p[0]==="?"){h=(h.split("?")[1]||"").split("#")[0]}else{if(p[0]==="#"){h=(h.split("#")[1]||"")}}if(!p[1]){return h}p=p.substring(1);h=h.split("&");for(var j=0,n=h.length;j<n;j++){f=h[j].split("=");if(f[0]===p){return f[1]}}}}}}}}}}}}}}}}}}}return""}})();

// (function() {

// 	var event = jQuery.event,

// 		//helper that finds handlers by type and calls back a function, this is basically handle
// 		// events - the events object
// 		// types - an array of event types to look for
// 		// callback(type, handlerFunc, selector) - a callback
// 		// selector - an optional selector to filter with, if there, matches by selector
// 		//     if null, matches anything, otherwise, matches with no selector
// 		findHelper = function( events, types, callback, selector ) {
// 			var t, type, typeHandlers, all, h, handle, 
// 				namespaces, namespace,
// 				match;
// 			for ( t = 0; t < types.length; t++ ) {
// 				type = types[t];
// 				all = type.indexOf(".") < 0;
// 				if (!all ) {
// 					namespaces = type.split(".");
// 					type = namespaces.shift();
// 					namespace = new RegExp("(^|\\.)" + namespaces.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)");
// 				}
// 				typeHandlers = (events[type] || []).slice(0);

// 				for ( h = 0; h < typeHandlers.length; h++ ) {
// 					handle = typeHandlers[h];
					
// 					match = (all || namespace.test(handle.namespace));
					
// 					if(match){
// 						if(selector){
// 							if (handle.selector === selector  ) {
// 								callback(type, handle.origHandler || handle.handler);
// 							}
// 						} else if (selector === null){
// 							callback(type, handle.origHandler || handle.handler, handle.selector);
// 						}
// 						else if (!handle.selector ) {
// 							callback(type, handle.origHandler || handle.handler);
							
// 						} 
// 					}
					
					
// 				}
// 			}
// 		};

// 	/**
// 	 * Finds event handlers of a given type on an element.
// 	 * @param {HTMLElement} el
// 	 * @param {Array} types an array of event names
// 	 * @param {String} [selector] optional selector
// 	 * @return {Array} an array of event handlers
// 	 */
// 	event.find = function( el, types, selector ) {
// 		var events = ( $._data(el) || {} ).events,
// 			handlers = [],
// 			t, liver, live;

// 		if (!events ) {
// 			return handlers;
// 		}
// 		findHelper(events, types, function( type, handler ) {
// 			handlers.push(handler);
// 		}, selector);
// 		return handlers;
// 	};
// 	/**
// 	 * Finds all events.  Group by selector.
// 	 * @param {HTMLElement} el the element
// 	 * @param {Array} types event types
// 	 */
// 	event.findBySelector = function( el, types ) {
// 		var events = $._data(el).events,
// 			selectors = {},
// 			//adds a handler for a given selector and event
// 			add = function( selector, event, handler ) {
// 				var select = selectors[selector] || (selectors[selector] = {}),
// 					events = select[event] || (select[event] = []);
// 				events.push(handler);
// 			};

// 		if (!events ) {
// 			return selectors;
// 		}
// 		//first check live:
// 		/*$.each(events.live || [], function( i, live ) {
// 			if ( $.inArray(live.origType, types) !== -1 ) {
// 				add(live.selector, live.origType, live.origHandler || live.handler);
// 			}
// 		});*/
// 		//then check straight binds
// 		findHelper(events, types, function( type, handler, selector ) {
// 			add(selector || "", type, handler);
// 		}, null);

// 		return selectors;
// 	};
// 	event.supportTouch = "ontouchend" in document;
	
// 	$.fn.respondsTo = function( events ) {
// 		if (!this.length ) {
// 			return false;
// 		} else {
// 			//add default ?
// 			return event.find(this[0], $.isArray(events) ? events : [events]).length > 0;
// 		}
// 	};
// 	$.fn.triggerHandled = function( event, data ) {
// 		event = (typeof event == "string" ? $.Event(event) : event);
// 		this.trigger(event, data);
// 		return event.handled;
// 	};
// 	/**
// 	 * Only attaches one event handler for all types ...
// 	 * @param {Array} types llist of types that will delegate here
// 	 * @param {Object} startingEvent the first event to start listening to
// 	 * @param {Object} onFirst a function to call 
// 	 */
// 	event.setupHelper = function( types, startingEvent, onFirst ) {
// 		if (!onFirst ) {
// 			onFirst = startingEvent;
// 			startingEvent = null;
// 		}
// 		var add = function( handleObj ) {

// 			var bySelector, selector = handleObj.selector || "";
// 			if ( selector ) {
// 				bySelector = event.find(this, types, selector);
// 				if (!bySelector.length ) {
// 					$(this).delegate(selector, startingEvent, onFirst);
// 				}
// 			}
// 			else {
// 				//var bySelector = event.find(this, types, selector);
// 				if (!event.find(this, types, selector).length ) {
// 					event.add(this, startingEvent, onFirst, {
// 						selector: selector,
// 						delegate: this
// 					});
// 				}

// 			}

// 		},
// 			remove = function( handleObj ) {
// 				var bySelector, selector = handleObj.selector || "";
// 				if ( selector ) {
// 					bySelector = event.find(this, types, selector);
// 					if (!bySelector.length ) {
// 						$(this).undelegate(selector, startingEvent, onFirst);
// 					}
// 				}
// 				else {
// 					if (!event.find(this, types, selector).length ) {
// 						event.remove(this, startingEvent, onFirst, {
// 							selector: selector,
// 							delegate: this
// 						});
// 					}
// 				}
// 			};
// 		$.each(types, function() {
// 			event.special[this] = {
// 				add: add,
// 				remove: remove,
// 				setup: function() {},
// 				teardown: function() {}
// 			};
// 		});
// 	};
// })(jQuery);
// (function($){
// var isPhantom = /Phantom/.test(navigator.userAgent),
// 	supportTouch = !isPhantom && "ontouchend" in document,
// 	scrollEvent = "touchmove scroll",
// 	// Use touch events or map it to mouse events
// 	touchStartEvent = supportTouch ? "touchstart" : "mousedown",
// 	touchStopEvent = supportTouch ? "touchend" : "mouseup",
// 	touchMoveEvent = supportTouch ? "touchmove" : "mousemove",
// 	data = function(event){
// 		var d = event.originalEvent.touches ?
// 			event.originalEvent.touches[ 0 ] :
// 			event;
// 		return {
// 			time: (new Date).getTime(),
// 			coords: [ d.pageX, d.pageY ],
// 			origin: $( event.target )
// 		};
// 	};

// /**
//  * @add jQuery.event.swipe
//  */
// var swipe = $.event.swipe = {
// 	/**
// 	 * @attribute delay
// 	 * Delay is the upper limit of time the swipe motion can take in milliseconds.  This defaults to 500.
// 	 * 
// 	 * A user must perform the swipe motion in this much time.
// 	 */
// 	delay : 500,
// 	/**
// 	 * @attribute max
// 	 * The maximum distance the pointer must travel in pixels.  The default is 75 pixels.
// 	 */
// 	max : 75,
// 	/**
// 	 * @attribute min
// 	 * The minimum distance the pointer must travel in pixels.  The default is 30 pixels.
// 	 */
// 	min : 30
// };

// $.event.setupHelper( [

// /**
//  * @hide
//  * @attribute swipe
//  */
// "swipe",
// /**
//  * @hide
//  * @attribute swipeleft
//  */
// 'swipeleft',
// /**
//  * @hide
//  * @attribute swiperight
//  */
// 'swiperight',
// /**
//  * @hide
//  * @attribute swipeup
//  */
// 'swipeup',
// /**
//  * @hide
//  * @attribute swipedown
//  */
// 'swipedown'], touchStartEvent, function(ev){
// 	var
// 		// update with data when the event was started
// 		start = data(ev),
// 		stop,
// 		delegate = ev.delegateTarget || ev.currentTarget,
// 		selector = ev.handleObj.selector,
// 		entered = this;
	
// 	function moveHandler(event){
// 		if ( !start ) {
// 			return;
// 		}
// 		// update stop with the data from the current event
// 		stop = data(event);

// 		// prevent scrolling
// 		if ( Math.abs( start.coords[0] - stop.coords[0] ) > 10 ) {
// 			event.preventDefault();
// 		}
// 	};

// 	// Attach to the touch move events
// 	$(document.documentElement).bind(touchMoveEvent, moveHandler)
// 		.one(touchStopEvent, function(event){
// 			$(this).unbind( touchMoveEvent, moveHandler);
// 			// if start and stop contain data figure out if we have a swipe event
// 			if ( start && stop ) {
// 				// calculate the distance between start and stop data
// 				var deltaX = Math.abs(start.coords[0] - stop.coords[0]),
// 					deltaY = Math.abs(start.coords[1] - stop.coords[1]),
// 					distance = Math.sqrt(deltaX*deltaX+deltaY*deltaY);

// 				// check if the delay and distance are matched
// 				if ( stop.time - start.time < swipe.delay && distance >= swipe.min ) {
// 					var events = ['swipe'];
// 					// check if we moved horizontally
// 					if( deltaX >= swipe.min && deltaY < swipe.min) {
// 						// based on the x coordinate check if we moved left or right
// 						events.push( start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight" );
// 					} else
// 					// check if we moved vertically
// 					if(deltaY >= swipe.min && deltaX < swipe.min){
// 						// based on the y coordinate check if we moved up or down
// 						events.push( start.coords[1] < stop.coords[1] ? "swipedown" : "swipeup" );
// 					}

// 					// trigger swipe events on this guy
// 					$.each($.event.find(delegate, events, selector), function(){
// 						this.call(entered, ev, {start : start, end: stop})
// 					})
				
// 				}
// 			}
// 			// reset start and stop
// 			start = stop = undefined;
// 		})
// });

// })(jQuery)

// /**
//  * gamma.js v1.0.0
//  * http://www.codrops.com
//  *
//  * Licensed under the MIT license.
//  * http://www.opensource.org/licenses/mit-license.php
//  * 
//  * Copyright 2012, Codrops
//  * http://www.codrops.com
//  */
 
// /**
//  * Return a new JSON object of the old string.
//  * Turns:
//  * 		file.js?a=1&amp;b.c=3.0&b.d=four&a_false_value=false&a_null_value=null
//  * Into:
//  * 		{"a":1,"b":{"c":3,"d":"four"},"a_false_value":false,"a_null_value":null}
//  * @version 1.1.0
//  * @date July 16, 2010
//  * @since 1.0.0, June 30, 2010
//  * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
//  * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
//  * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
//  * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
//  */
// String.prototype.queryStringToJSON = String.prototype.queryStringToJSON || function ( )
// {	// Turns a params string or url into an array of params
// 	// Prepare
// 	var params = String(this);
// 	// Remove url if need be
// 	params = params.substring(params.indexOf('?')+1);
// 	// params = params.substring(params.indexOf('#')+1);
// 	// Change + to %20, the %20 is fixed up later with the decode
// 	params = params.replace(/\+/g, '%20');
// 	// Do we have JSON string
// 	if ( params.substring(0,1) === '{' && params.substring(params.length-1) === '}' )
// 	{	// We have a JSON string
// 		return eval(decodeURIComponent(params));
// 	}
// 	// We have a params string
// 	params = params.split(/\&(amp\;)?/);
// 	var json = {};
// 	// We have params
// 	for ( var i = 0, n = params.length; i < n; ++i )
// 	{
// 		// Adjust
// 		var param = params[i] || null;
// 		if ( param === null ) { continue; }
// 		param = param.split('=');
// 		if ( param === null ) { continue; }
// 		// ^ We now have "var=blah" into ["var","blah"]

// 		// Get
// 		var key = param[0] || null;
// 		if ( key === null ) { continue; }
// 		if ( typeof param[1] === 'undefined' ) { continue; }
// 		var value = param[1];
// 		// ^ We now have the parts

// 		// Fix
// 		key = decodeURIComponent(key);
// 		value = decodeURIComponent(value);
// 		try {
// 		    // value can be converted
// 		    value = eval(value);
// 		} catch ( e ) {
// 		    // value is a normal string
// 		}

// 		// Set
// 		// window.console.log({'key':key,'value':value}, split);
// 		var keys = key.split('.');
// 		if ( keys.length === 1 )
// 		{	// Simple
// 			json[key] = value;
// 		}
// 		else
// 		{	// Advanced (Recreating an object)
// 			var path = '',
// 				cmd = '';
// 			// Ensure Path Exists
// 			$.each(keys,function(ii,key){
// 				path += '["'+key.replace(/"/g,'\\"')+'"]';
// 				jsonCLOSUREGLOBAL = json; // we have made this a global as closure compiler struggles with evals
// 				cmd = 'if ( typeof jsonCLOSUREGLOBAL'+path+' === "undefined" ) jsonCLOSUREGLOBAL'+path+' = {}';
// 				eval(cmd);
// 				json = jsonCLOSUREGLOBAL;
// 				delete jsonCLOSUREGLOBAL;
// 			});
// 			// Apply Value
// 			jsonCLOSUREGLOBAL = json; // we have made this a global as closure compiler struggles with evals
// 			valueCLOSUREGLOBAL = value; // we have made this a global as closure compiler struggles with evals
// 			cmd = 'jsonCLOSUREGLOBAL'+path+' = valueCLOSUREGLOBAL';
// 			eval(cmd);
// 			json = jsonCLOSUREGLOBAL;
// 			delete jsonCLOSUREGLOBAL;
// 			delete valueCLOSUREGLOBAL;
// 		}
// 		// ^ We now have the parts added to your JSON object
// 	}
// 	return json;
// };

// // checks if an element is partially inside the viewport
// // inspired by James Padolsey's snippet (http://remysharp.com/2009/01/26/element-in-view-event-plugin/#comment-127058)
// $.extend( $.expr[':'], {

// 	inViewport : function( el ) {

// 		var scrollTop = ( document.documentElement.scrollTop || document.body.scrollTop ),
// 			elOffsetTop = $( el ).offset().top,
// 			elH = $( el ).height()
// 			winH = ( window.innerHeight && window.innerHeight < $( window ).height() ) ? window.innerHeight : $( window ).height();

// 		return ( elOffsetTop + elH ) > scrollTop && elOffsetTop < ( scrollTop + winH );

// 	}

// });

// // HTML5 PageVisibility API
// // http://www.html5rocks.com/en/tutorials/pagevisibility/intro/
// // by Joe Marini (@joemarini)
// function getHiddenProp(){
//     var prefixes = ['webkit','moz','ms','o'];
    
//     // if 'hidden' is natively supported just return it
//     if ('hidden' in document) return 'hidden';
    
//     // otherwise loop over all the known prefixes until we find one
//     for (var i = 0; i < prefixes.length; i++){
//         if ((prefixes[i] + 'Hidden') in document) 
//             return prefixes[i] + 'Hidden';
//     }

//     // otherwise it's not supported
//     return null;
// }
// function isHidden() {
//     var prop = getHiddenProp();
//     if (!prop) return false;
    
//     return document[prop];
// }

// var Gamma = (function() {

// 	var $window = $( window ),
// 		$body = $( 'body' ),
// 		$document = $( document ),
// 		Modernizr = window.Modernizr,
// 		// https://github.com/twitter/bootstrap/issues/2870
// 		transEndEventNames = {
// 			'WebkitTransition' : 'webkitTransitionEnd',
// 			'MozTransition' : 'transitionend',
// 			'OTransition' : 'oTransitionEnd',
// 			'msTransition' : 'MSTransitionEnd',
// 			'transition' : 'transitionend'
// 		},
// 		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
// 		// default settings
// 		defaults = {
// 			// default value for masonry column count
// 			columns : 4,
// 			// transition properties for the images in ms (transition to/from singleview)
// 			speed : 300,
// 			easing : 'ease',
// 			// if set to true the overlay's opacity will animate (transition to/from singleview)
// 			overlayAnimated : true,
// 			// if true, the navigate next function is called when the image (singleview) is clicked
// 			nextOnClickImage : true,
// 			// circular navigation
// 			circular : true,
// 			// transition settings for the image in the single view.
// 			// These includes:
// 			// - ajusting its position and size when the window is resized
// 			// - fading out the image when navigating
// 			svImageTransitionSpeedFade : 300,
// 			svImageTransitionEasingFade : 'ease-in-out',
// 			svImageTransitionSpeedResize : 300,
// 			svImageTransitionEasingResize : 'ease-in-out',
// 			svMarginsVH : {
// 				vertical : 140,
// 				horizontal : 120
// 			},
// 			// allow keybord and swipe navigation
// 			keyboard : true,
// 			swipe : true,
// 			// slideshow interval (ms)
// 			interval : 4000,
// 			// if History API is not supported this value will turn false
// 			historyapi : true
// 		},
// 		init = function( settings, callback ) {

// 			Gamma.settings = $.extend( true, {}, defaults, settings );

// 			// cache some elements..
// 			_config();
// 			// build the layout
// 			_layout();
// 			// init masonry
// 			_initMasonry( function() {

// 				// remove loading status
// 				Gamma.container.removeClass( 'gamma-loading' );
// 				// show items
// 				Gamma.items.show();

// 				// opens the single view if an image id is passed in the url
// 				// we will assume for this demo that the id is the index of the item 
// 				// where the image is
// 				// example: http://www.sitename.com/gamma/?img=12
// 				if( Gamma.settings.historyapi ) {

// 					_goto();

// 				}

// 				// init window events
// 				_initEvents( 'window' );

// 				if( callback ) {

// 					callback.call();

// 				}

// 			} );

// 		},
// 		_config = function() {

// 			Gamma.container = $( '#gamma-container' );
// 			Gamma.overlay = Gamma.container.find( 'div.gamma-overlay' );
// 			Gamma.controls = Gamma.container.children( 'div.gamma-options' );
// 			Gamma.gallery = Gamma.container.children( 'ul.gamma-gallery' );
// 			Gamma.items = Gamma.gallery.children();
// 			Gamma.itemsCount = Gamma.items.length;
// 			Gamma.columns = Gamma.settings.columns;
// 			// true if any animation (including preloading an image) running
// 			Gamma.isAnimating = true;
// 			Gamma.svMargins = Gamma.settings.svMarginsVH;
// 			var History = window.History; // Note: We are using a capital H instead of a lower h
// 			if ( !History.enabled && Gamma.settings.historyapi ) {

// 				Gamma.settings.historyapi = false;
			
// 			}
// 			Gamma.supportTransitions = Modernizr.csstransitions;

// 		},
// 		_createSingleView = function() {

// 			// the single view will include the image, navigation buttons and close, play, and pause buttons

// 			if( !Gamma.singleview ) {

// 				$( '<div class="gamma-single-view"><div class="gamma-options gamma-options-single"><div class="gamma-buttons"><button class="gamma-btn-close"></button></div></div></div>' )
// 				.appendTo( Gamma.container );

// 				Gamma.singleview = Gamma.container.children( 'div.gamma-single-view' );
// 				Gamma.svclose = Gamma.singleview.find( 'button.gamma-btn-close' );

// 				_initEvents( 'singleview' );

// 				_createSingleViewNavigation();
			
// 			}
// 			else if( !Gamma.nav ) {

// 				_createSingleViewNavigation();

// 			}

// 		},
// 		_createSingleViewNavigation = function() {

// 			if( Gamma.itemsCount > 1 ) {

// 				Gamma.svplay = $( '<button class="gamma-btn-ssplay"></button>' ).insertAfter( Gamma.svclose );
// 				Gamma.nav = $( '<nav class="gamma-nav"><span class="gamma-prev"></span><span class="gamma-next"></span></nav>' ).appendTo( Gamma.singleview );
// 				Gamma.svnavnext = Gamma.nav.find( 'span.gamma-next' );
// 				Gamma.svnavprev = Gamma.nav.find( 'span.gamma-prev' );

// 				_initEvents( 'singleviewnavigation' );

// 			}

// 		},
// 		// controller: "goes to" a specific image or back to the grid
// 		_goto = function( anim, id ) {

// 			if( Gamma.settings.historyapi ) {
				
// 				// get the url from history state (e.g. id=3) and extract the id
// 				id = id || History.getState().url.queryStringToJSON().id;

// 			}

// 			var isSingleview = ( id != undefined ),
// 				anim = anim || false;

// 			// back history to a state with no id
// 			if( Gamma.settings.historyapi && Gamma.isSV && id === undefined ) {

// 				_closesingleview();

// 			}

// 			if( isSingleview ) {

// 				var $item = Gamma.items.eq( Math.abs( id ) );

// 				if( $item.length ) {

// 					if( Gamma.svImage ) {

// 						// navigating
// 						if( Gamma.supportTransitions ) {

// 							_setTransition( Gamma.svImage , 'all', Gamma.settings.svImageTransitionSpeedFade , Gamma.settings.svImageTransitionEasingFade );
						
// 						}

// 						_applyAnimation( Gamma.svImage, { opacity : 0 }, Gamma.settings.svImageTransitionSpeedFade, Gamma.supportTransitions, function() {
						
// 							$( this ).remove();
// 							anim = false;
// 							_singleviewitem( $item, anim );

// 						} );

// 						if( Gamma.svDescription ) {
				
// 							_applyAnimation( Gamma.svDescription, { opacity : 0 }, 400, Gamma.supportTransitions );
						
// 						}

// 					}
// 					else {

// 						if( Gamma.svDescription ) {
				
// 							Gamma.svDescription.empty();
						
// 						}
// 						_singleviewitem( $item, anim );

// 					}

// 				}

// 			}

// 		},
// 		// saves the history state / or if history not supported goes to specific image
// 		_saveState = function( id ) {

// 			if( !Gamma.settings.historyapi && id != undefined ) {

// 				Gamma.isSV ? _goto( false, id ) : _goto( true, id );

// 			}
// 			else if( id === undefined ) {

// 				History.pushState( null, null, url('protocol') + '://' + url('hostname') + url('path') );

// 			}
// 			// adds a new state to the history object
// 			// this will trigger the statechange on the window
// 			else if( History.getState().url.queryStringToJSON().id !== id ) {
					
// 				History.pushState( null, null, '?id=' + id );
			
// 			}
		
// 		},
// 		// transform initial html structure into a list of images (well mostly)
// 		_layout = function( $items ) {

// 			if( Gamma.itemsCount > 0 ) {

// 				_createSingleView();

// 			}

// 			_setMasonry();

// 			var $items = $items || Gamma.items.hide();

// 			// replace each div element with an image element with the right source
// 			$items.each( function() {

// 				var $item = $( this ),
// 					$picEl = $item.children(),
// 					sources = _getImgSources( $picEl ),
// 					source = _chooseImgSource( sources, $item.outerWidth( true ) ),
// 					description = $picEl.data( 'description' );

// 				// data is saved in the <li> element
// 				$item.data( {
// 					description : description,
// 					source : sources,
// 					maxwidth : $picEl.data( 'maxWidth' ),
// 					maxheight : $picEl.data( 'maxHeight' )
// 				} );

// 				$( '<div/>' ).addClass( 'gamma-description' ).html( description ).insertAfter( $picEl );

// 				$( '<img/>' ).attr( {
// 					alt : $picEl.data( 'alt' ),
// 					title : $picEl.data( 'title' ),
// 					src : source.src
// 				} ).insertAfter( $picEl );

// 				$picEl.remove();

// 			} );

// 		},
// 		// gets all possible image sources of an element
// 		_getImgSources = function( $el ) {

// 			var theSources = [];
// 			$el.children( 'div' ).each( function( i ) {

// 				var $source = $( this );
// 				theSources.push( {
// 					width : $source.data( 'minWidth' ) || 0,
// 					src : $source.data( 'src' ),
// 					pos : i
// 				} );

// 			} );
			
// 			return theSources;

// 		},
// 		// change the number of masonry columns based on the current container's width and the settings.viewport configuration
// 		_setMasonry = function() {

// 			var containerW = Gamma.container.width();

// 			if( Gamma.settings.viewport ) {

// 				for( var i = 0, len = Gamma.settings.viewport.length; i < len; ++i ) {

// 					var viewport = Gamma.settings.viewport[i];

// 					if( containerW > viewport.width ) {

// 						Gamma.columns = viewport.columns;
// 						break;

// 					}

// 				}

// 			}

// 			// set the widths (%) for each of the <li>
// 			Gamma.items.css( 'width', Math.floor( containerW / Gamma.columns ) * 100 / containerW + '%' );

// 		},
// 		// initialize masonry
// 		_initMasonry = function( callback ) {

// 			Gamma.gallery.imagesLoaded( function() {

// 				Gamma.gallery.masonry( {
// 					itemSelector : 'li',
// 					columnWidth : function( containerWidth ) {
// 						return containerWidth / Gamma.columns;
// 					}
// 				} );

// 				if( callback ) {

// 					callback.call();

// 				}

// 			} );

// 		},
// 		// reloads masonry grid
// 		_reloadMasonry = function( timeout ) {

// 			clearTimeout( Gamma.masonrytimeout );
// 			timeout = timeout || 0;
// 			Gamma.masonrytimeout = setTimeout( function() { Gamma.gallery.masonry( 'reload' ); }, timeout );

// 		},
// 		// choose a source based on the item's size and on the configuration set by the user in the initial HTML
// 		_chooseImgSource = function( sources, w ) {

// 			if( w <= 0 ) {
// 				w = 1;
// 			}

// 			for( var i = 0, len = sources.length; i < len; ++i ) {

// 				var source = sources[i];


// 				if( w > source.width ) {

// 					return source;

// 				}

// 			}

// 		},
// 		// show or hide a specific control button
// 		_toggleControl = function( $control, status, animStyle ) {

// 			animStyle ? $control.css( animStyle ) : status === 'on' ? $control.show() : $control.hide();

// 		},
// 		// triggered on the events for the nav buttons, keyboard, swipe
// 		_onnavigate = function( dir ) {

// 			if( !Gamma.slideshow ) {

// 				_navigate( dir );

// 			}

// 		},
// 		// goes to next or previous image
// 		_navigate = function( dir ) {

// 			if( !Gamma.isSV || Gamma.isAnimating ) {

// 				return false;

// 			}

// 			var current = Gamma.current;

// 			if( dir === 'next' ) {

// 				Gamma.current = Gamma.current < Gamma.itemsCount - 1 ? ++Gamma.current :
// 					Gamma.settings.circular ? 0 : Gamma.current;

// 			}
// 			else if( dir === 'prev' ) {

// 				Gamma.current = Gamma.current > 0 ? --Gamma.current :
// 					Gamma.settings.circular ? Gamma.itemsCount - 1 : Gamma.current;
				
// 			}

// 			if( current === Gamma.current ) {

// 				return false;

// 			}

// 			Gamma.isAnimating = true;

// 			// get positions, dimentions and source for the new item
// 			_saveState( Gamma.current );

// 		},
// 		// resize the window event
// 		_resize = function() {

// 			_setMasonry();

// 			_resizeGrid();

// 			// change the size, position and source of the image (single view) accordingly
// 			if( Gamma.isSV ) {

// 				_svResizeImage();

// 			}

// 			// seems that sometimes the masonry columns stay out of order.
// 			// just to make sure this doesnt happen
// 			_reloadMasonry( 200 );

// 		},
// 		// resizes the masonry grid
// 		// change the source of the images (grid) accordingly
// 		_resizeGrid = function() {

// 			Gamma.items.each( function() {

// 				var $item = $( this ),
// 					source = _chooseImgSource( $item.data( 'source' ), Gamma.items.outerWidth( true ) );

// 				$item.find( 'img' ).attr( 'src', source.src );

// 			} );

// 		}
// 		// resize and chooses (if necessary) a new source for the image in the single view
// 		_svResizeImage = function( callback ) {

// 			// need to know which source to load for the image.
// 			// also need to know the final size and position.
// 			var finalConfig = _getFinalImgConfig( {

// 					sources : Gamma.svImage.data( 'source' ),
// 					imgMaxW : Gamma.svImage.data( 'maxwidth' ),
// 					imgMaxH : Gamma.svImage.data( 'maxheight' ),
// 					wrapper : { width : $window.width() - Gamma.svMargins.horizontal, height : $window.height() - Gamma.svMargins.vertical },
// 					image : { width : Gamma.svImage.width(), height : Gamma.svImage.height() }

// 				} ),
// 				source = finalConfig.source,
// 				finalSizePosition = finalConfig.finalSizePosition,

// 				currentSrc = Gamma.svImage.attr('src'),

// 				finalStyle = {
// 					width : finalSizePosition.width,
// 					height : finalSizePosition.height,
// 					left : finalSizePosition.left + Gamma.svMargins.horizontal / 2,
// 					top : finalSizePosition.top + Gamma.svMargins.vertical / 2
// 				};

// 			_applyAnimation( Gamma.svImage, finalStyle, Gamma.settings.svImageTransitionSpeedResize, Gamma.supportTransitions, function() {

// 				if( Gamma.supportTransitions ) {
// 					$( this ).off( transEndEventName );
// 				}

// 				// if source changes, change reset Gamma.svImage
// 				if( currentSrc !== source.src ) {

// 					// going to load a new image..
// 					Gamma.isAnimating = true;

// 					var w = Gamma.svImage.width(),
// 						h = Gamma.svImage.height(),
// 						l = Gamma.svImage.position().left,
// 						t = Gamma.svImage.position().top;

// 					Gamma.svImage = $( '<img/>' ).load( function() {

// 						var $img = $( this );

// 						if( Gamma.supportTransitions ) {

// 							_setTransition( $img , 'all', Gamma.settings.svImageTransitionSpeedResize , Gamma.settings.svImageTransitionEasingResize );

// 						}

// 						_applyAnimation( $img.next(), { opacity : 0 }, 500, Gamma.supportTransitions, function() {

// 							var $img = $( this );
// 							if( Gamma.supportTransitions ) {
// 								$( this ).off( transEndEventName );
// 							}
// 							$img.remove();
// 							Gamma.isAnimating = false;

// 						} );

// 					} )
// 					.css( { width : w, height : h, left : l, top : t } )
// 					.data( Gamma.svImage.data() )
// 					.insertBefore( Gamma.svImage )
// 					.attr( 'src', source.src );

// 				}

// 				if( callback ) {

// 					callback.call();

// 				}

// 			} );

// 		},
// 		// gets the position and sizes of the image given its container properties
// 		_getFinalImgConfig = function( properties ) {

// 			var sources = properties.sources,
// 				imgMaxW = properties.imgMaxW || 0,
// 				imgMaxH = properties.imgMaxH || 0,
// 				source = _chooseImgSource( sources, properties.wrapper.width ), 
// 				// calculate final size and position of image
// 				finalSizePosition = _getFinalSizePosition( properties.image, properties.wrapper );

// 			// check for new source
// 			if( finalSizePosition.checksource ) {

// 				source = _chooseImgSource( sources, finalSizePosition.width );

// 			}

// 			// we still need to check one more detail:
// 			// if the source is the largest one provided in the html rules,
// 			// then we need to check if the final width/height are eventually bigger
// 			// than the original image sizes. If so, we will show the image 
// 			// with its original size, avoiding like this that the image gets pixelated
// 			if( source.pos === 0 && ( imgMaxW !== 0 && finalSizePosition.width > imgMaxW || imgMaxH !== 0 && finalSizePosition.height > imgMaxH ) ) {

// 				if( imgMaxW !== 0 && finalSizePosition.width > imgMaxW ) {

// 					var ratio = finalSizePosition.width / imgMaxW;
// 					finalSizePosition.width = imgMaxW;
// 					finalSizePosition.height /= ratio;

// 				}
// 				else if( imgMaxH !== 0 && finalSizePosition.height > imgMaxH ) {

// 					var ratio = finalSizePosition.height / imgMaxH;
// 					finalSizePosition.height = imgMaxH;
// 					finalSizePosition.width /= ratio;
					
// 				}

// 				finalSizePosition.left = properties.wrapper.width / 2 - finalSizePosition.width / 2;
// 				finalSizePosition.top = properties.wrapper.height / 2 - finalSizePosition.height / 2;

// 			}

// 			return {
// 				source : source,
// 				finalSizePosition : finalSizePosition
// 			};

// 		},
// 		// triggered when one grid image is clicked
// 		_singleview = function() {

// 			var id = $( this ).index();
// 			_saveState( id );

// 		},
// 		// shows the item
// 		_singleviewitem = function( $item, anim ) {

// 			Gamma.isSV = true;

// 			var id = $item.index(),
// 				data = $item.data(),
// 				$img = $item.children( 'img' );
				
// 			if( anim ) {

// 				Gamma.fly = $( '<img/>' ).attr( 'src', $img.attr( 'src' ) ).addClass( 'gamma-img-fly' ).css( {
// 					width : $img.width(),
// 					height : $img.height(),
// 					left : $item.offset().left + ( $item.outerWidth( true ) - $item.width() ) / 2,
// 					top : $item.offset().top + ( $item.outerHeight( true ) - $item.height() ) / 2
// 				} ).appendTo( $body );

// 				if( Gamma.supportTransitions ) {

// 					_setTransition( Gamma.fly );

// 				}

// 			}
				
// 			// need to know which source to load for the image.
// 			// also need to know the final size and position.
// 			var	finalConfig = _getFinalImgConfig( {

// 					sources : $item.data( 'source' ),
// 					imgMaxW : $item.data( 'maxwidth' ),
// 					imgMaxH : $item.data( 'maxheight' ),
// 					wrapper : { width : $window.width() - Gamma.svMargins.horizontal, height : $window.height() - Gamma.svMargins.vertical },
// 					image : { width : $img.width(), height : $img.height() }

// 				} ),	
// 				source = finalConfig.source,
// 				finalSizePosition = finalConfig.finalSizePosition;

// 			Gamma.current = id;

// 			// transition: overlay opacity
// 			Gamma.overlay.show();

// 			if( Gamma.settings.overlayAnimated && anim && Gamma.supportTransitions ) {

// 				_setTransition( Gamma.overlay , 'opacity' );

// 			}
			
// 			setTimeout( function() {

// 				_applyAnimation( Gamma.overlay, { 'opacity' : 1 }, Gamma.settings.speed, Gamma.supportTransitions || !anim, function() {

// 					if( !Gamma.isSV ) {

// 						return false;
					
// 					}
// 					if( Gamma.supportTransitions ) {
// 						$( this ).off( transEndEventName );
// 					}
					
// 					// set the overflow-y to hidden
// 					$body.css( 'overflow-y', 'hidden' );
// 					// force repaint. Chrome in Windows does not remove overflow..
// 					// http://stackoverflow.com/a/3485654/989439
// 					var el = Gamma.overlay[0];
// 					el.style.display='none';
// 					el.offsetHeight; // no need to store this anywhere, the reference is enough
// 					el.style.display='block';

// 				} );

// 				$item.css( 'visibility', 'hidden' );

// 				if( !anim ) {

// 					_loadSVItemFromGrid( data, finalSizePosition, source.src );

// 				}
// 				else {

// 					var styleCSS = {
// 							width : finalSizePosition.width,
// 							height : finalSizePosition.height,
// 							left : finalSizePosition.left + $window.scrollLeft() + Gamma.svMargins.horizontal / 2,
// 							top : finalSizePosition.top + $window.scrollTop() + Gamma.svMargins.vertical / 2
// 						}, 
// 						cond = Gamma.supportTransitions;

// 					_applyAnimation( Gamma.fly, styleCSS, Gamma.settings.speed, cond, function() {
						
// 						if( cond ) {
// 							$( this ).off( transEndEventName );
// 						}

// 						_loadSVItemFromGrid( data, finalSizePosition, source.src );

// 					} );

// 				}

// 			}, 25 );

// 		},
// 		// load new image for the new item to show
// 		_loadSVItemFromGrid = function( data, position, src ) {

// 			// show single view
// 			Gamma.singleview.show();

// 			// add description
// 			if( !Gamma.svDescription ) {
				
// 				Gamma.svDescription = $( '<div/>' )
// 										.addClass( 'gamma-description' )
// 										.appendTo( Gamma.singleview ).wrap( '<div class="gamma-description-wrapper"></div>' );

// 				if( Gamma.supportTransitions ) {

// 					_setTransition( Gamma.svDescription , 'opacity', Gamma.settings.svImageTransitionSpeedFade / 2 , Gamma.settings.svImageTransitionEasingFade );

// 				}

// 			}
// 			Gamma.svDescription.html( data.description );

// 			// loading status: give a little amount of time before displaying it
// 			var loadingtimeout = setTimeout( function() { Gamma.singleview.addClass( 'gamma-loading' );	}, Gamma.settings.svImageTransitionSpeedFade + 250 );
			
// 			// preload the new image
// 			Gamma.svImage = $( '<img/>' ).load( function() {

// 				var $img = $( this );

// 				// remove loading status
// 				clearTimeout( loadingtimeout );
// 				Gamma.singleview.removeClass( 'gamma-loading' );

// 				setTimeout( function() {

// 					_applyAnimation( Gamma.svDescription, { 'opacity' : 1 }, Gamma.settings.svImageTransitionSpeedFade / 2, Gamma.supportTransitions );

// 				}, 25 );

// 				$img.css( {
// 					width : position.width,
// 					height : position.height,
// 					left : position.left + Gamma.svMargins.horizontal / 2,
// 					top : position.top + Gamma.svMargins.vertical / 2
// 				} ).appendTo( Gamma.singleview );

// 				if( Gamma.supportTransitions ) {

// 					_setTransition( $img , 'all', Gamma.settings.svImageTransitionSpeedResize , Gamma.settings.svImageTransitionEasingResize );

// 				}

// 				if( Gamma.fly ) {
					
// 					if( Gamma.supportTransitions ) {

// 						_setTransition( Gamma.fly, 'opacity', 1000 );

// 					}
// 					setTimeout( function() {

// 						_applyAnimation( Gamma.fly, { 'opacity' : 0 }, 1000, Gamma.supportTransitions, function() {

// 							var $this = $( this );

// 							if( Gamma.supportTransitions ) {
// 								$this.off( transEndEventName );
// 							}
// 							$this.remove();
// 							Gamma.fly = null;
// 							Gamma.isAnimating = false;

// 						} );

// 					}, 25 );

// 				}
// 				else {

// 					Gamma.isAnimating = false;

// 				}

// 			} ).data( data ).attr( 'src', src );

// 		},
// 		// given the wrapper's width and height, calculates the final width, height, left and top for the image to fit inside
// 		_getFinalSizePosition = function( imageSize, wrapperSize ) {

// 			// image size
// 			var imgW = imageSize.width,
// 				imgH = imageSize.height,

// 				// container size
// 				wrapperW = wrapperSize.width,
// 				wrapperH = wrapperSize.height,

// 				finalW, finalH, finalL, finalT,
// 				// flag to indicate we could check for another source (smaller) for the image
// 				checksource = false;

// 			// check which image side is bigger
// 			if( imgW > imgH ) {

// 				finalW = wrapperW;
// 				// calculate the height given the finalW
// 				var ratio = imgW / wrapperW;

// 				finalH = imgH / ratio;
				
// 				if( finalH > wrapperH ) {

// 					checksource = true;
// 					ratio = finalH / wrapperH;
// 					finalW /= ratio;
// 					finalH = wrapperH;
				
// 				}

// 			}
// 			else {

// 				finalH = wrapperH;
// 				// calculate the width given the finalH
// 				var ratio = imgH / wrapperH;

// 				finalW = imgW / ratio;

// 				checksource = true;
				
// 				if( finalW > wrapperW ) {

// 					checksource = false;

// 					ratio = finalW / wrapperW;
// 					finalW = wrapperW;
// 					finalH /= ratio;
				
// 				}

// 			}

// 			return {
// 				width : finalW,
// 				height : finalH,
// 				left : wrapperW / 2 - finalW / 2,
// 				top : wrapperH / 2 - finalH / 2,
// 				checksource : checksource
// 			};

// 		},
// 		// closes the single view
// 		_closesingleview = function() {

// 			if( Gamma.isAnimating || Gamma.fly ) {

// 				return false;

// 			}

// 			Gamma.isSV = false;

// 			if( Gamma.slideshow ) {

// 				_stopSlideshow();

// 			}

// 			var $item = Gamma.items.eq( Gamma.current ),
// 				$img = $item.children( 'img' );

// 			Gamma.items.not( $item ).css( 'visibility', 'visible' );

// 			// scroll window to item's position if item is not "partially" visible
// 			var wst = $window.scrollTop();

// 			if( !$item.is( ':inViewport' ) ) {

// 				wst = $item.offset().top + ( $item.outerHeight( true ) - $item.height() ) / 2;

// 				var diff = $document.height() - $window.height();

// 				if( wst > diff ) {
					
// 					wst = diff;
// 				}

// 				$window.scrollTop( wst );

// 			}

// 			var l = Gamma.svImage.position().left + $window.scrollLeft(),
// 				t = Gamma.svImage.position().top + wst;

// 			Gamma.svImage.appendTo( $body ).css( {
// 				position : 'absolute',
// 				zIndex : 10000,
// 				left : l,
// 				top : t 
// 			} );
			
// 			if( Gamma.supportTransitions ) {

// 				_setTransition( Gamma.svImage  );

// 			}

// 			Gamma.singleview.hide();
// 			Gamma.svDescription.empty().css( 'opacity', 0 );
// 			$body.css( 'overflow-y', 'scroll' );

// 			setTimeout( function() {

// 				var styleCSS = {
// 					width : $img.width(),
// 					height : $img.height(),
// 					left : $item.offset().left + ( $item.outerWidth( true ) - $item.width() ) / 2,
// 					top : $item.offset().top + ( $item.outerHeight( true ) - $item.height() ) / 2
// 				}
// 				_applyAnimation( Gamma.svImage, styleCSS, Gamma.settings.speed, Gamma.supportTransitions, function() {
						
// 					$item.css( 'visibility', 'visible' );
// 					$( this ).remove();
// 					Gamma.svImage = null;

// 				} );

// 				// transition: overlay opacity
// 				if( Gamma.settings.overlayAnimated ) {

// 					if( Gamma.supportTransitions ) {

// 						_setTransition( Gamma.overlay , 'opacity' );

// 					}

// 					_applyAnimation( Gamma.overlay, { 'opacity' : 0 }, Gamma.settings.speed, Gamma.supportTransitions, function() {
							
// 						var $this = $( this );

// 						if( Gamma.supportTransitions ) {
// 							$this.off( transEndEventName );
// 						}

// 						$this.hide();

// 					} );

// 				}
// 				else {

// 					Gamma.overlay.hide();

// 				}

// 				_saveState();

// 			}, 25 );

// 		},
// 		// the slideshow is active only if the page is visible
// 		_visChange = function() {

// 			if( Gamma.slideshow ) {

// 				isHidden() ? ( _stopSlideshow( true ), Gamma.slideshow = true ) : _prepareSlideshow();

// 			}

// 		},
// 		// before slideshow starts
// 		_prepareSlideshow = function() {

// 			if( Gamma.isAnimating && !Gamma.slideshow ) {
// 				return false;
// 			}
// 			Gamma.isAnimating = true;

// 			clearTimeout( Gamma.slideshowtimeout );

// 			Gamma.slideshow = true;
// 			// container is the window
// 			Gamma.svMargins = {
// 				vertical : 0,
// 				horizontal : 0
// 			};
// 			_toggleControl( Gamma.svclose, 'off' );
// 			_toggleControl( Gamma.svnavprev, 'off', { left : -40 } );
// 			_toggleControl( Gamma.svnavnext, 'off', { right : -40 } );
			
// 			_svResizeImage( function() {

// 				Gamma.isAnimating = false;

// 				Gamma.svplay.addClass( 'gamma-btn-sspause' );
// 				_startSlideshow();

// 			} );

// 		},
// 		_preloadNext = function() {

// 			// preload image for Gamma.current + 1
// 			var next = Gamma.current < Gamma.itemsCount - 1 ? Gamma.current + 1 :
// 				Gamma.settings.circular ? 0 : Gamma.current,
// 				$item = Gamma.items.eq( next ),
// 				$img = $item.children( 'img' ),
// 				finalConfig = _getFinalImgConfig( {

// 					sources : $item.data( 'source' ),
// 					imgMaxW : $item.data( 'maxwidth' ),
// 					imgMaxH : $item.data( 'maxheight' ),
// 					wrapper : { width : $window.width() - Gamma.svMargins.horizontal, height : $window.height() - Gamma.svMargins.vertical },
// 					image : { width : $img.width(), height : $img.height() }

// 				} ),	
// 				source = finalConfig.source;

// 			$( '<img/>' ).attr( 'src', source.src );

// 		},
// 		// starts slideshow
// 		_startSlideshow = function() {

// 			_preloadNext();

// 			Gamma.slideshowtimeout = setTimeout( function() {

// 				_navigate( 'next' );
// 				_startSlideshow();

// 			}, Gamma.settings.interval );

// 		},
// 		// stops slideshow
// 		_stopSlideshow = function( pause ) {

// 			if( Gamma.isAnimating ) {
// 				return false;
// 			}
// 			Gamma.isAnimating = true;

// 			clearTimeout( Gamma.slideshowtimeout );
// 			if( !pause ) {

// 				Gamma.slideshow = false;
// 				Gamma.svplay.removeClass( 'gamma-btn-sspause' );
// 				Gamma.svMargins = Gamma.settings.svMarginsVH;
// 				_toggleControl( Gamma.svclose, 'on' );
// 				_toggleControl( Gamma.svnavprev, 'on', { left : 20 } );
// 				_toggleControl( Gamma.svnavnext, 'on', { right : 20 } );
// 				_svResizeImage( function() {

// 					Gamma.isAnimating = false;

// 				} );
			
// 			}

// 		},
// 		// initializes events according to type
// 		_initEvents = function( type ) {

// 			switch( type ) {

// 				case 'window' : 

// 					if( Gamma.settings.historyapi ) {

// 						$window.on( 'statechange.gamma', function() {

// 							_goto( true );

// 						} );

// 					}

// 					$window.on( 'smartresize.gamma', _resize );

// 					// use the property name to generate the prefixed event name
// 					var visProp = getHiddenProp();
					
// 					// HTML5 PageVisibility API
// 					// http://www.html5rocks.com/en/tutorials/pagevisibility/intro/
// 					// by Joe Marini (@joemarini)
// 					if (visProp) {

// 						var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
// 						document.addEventListener(evtname, _visChange);
					
// 					}
					
// 					break;

// 				case 'singleview' : 

// 					Gamma.gallery.on( 'click.gamma', 'li', _singleview );
// 					Gamma.svclose.on( 'click.gamma', _closesingleview );

// 					break;

// 				case 'singleviewnavigation' : 

// 					Gamma.svnavnext.on( 'click.gamma', function() { _onnavigate( 'next' ); } );
// 					Gamma.svnavprev.on( 'click.gamma', function() { _onnavigate( 'prev' ); } );

// 					if( Gamma.settings.nextOnClickImage ) {

// 						Gamma.singleview.on( 'click.gamma', 'img', function() { _onnavigate( 'next' ); } );

// 					}

// 					if ( Gamma.settings.keyboard ) {
						
// 						$document.on( 'keydown.gamma', function( event ) {

// 							var keyCode = event.keyCode || event.which,
// 								arrow = {
// 									left: 37,
// 									up: 38,
// 									right: 39,
// 									down: 40
// 								};

// 							switch (keyCode) {
								
// 								case arrow.left :

// 									_onnavigate( 'prev' );
// 									break;
								
// 								case arrow.right :
									
// 									_onnavigate( 'next' );
// 									break;

// 							}

// 						} );

// 					}

// 					if( Gamma.settings.swipe ) {

// 						Gamma.singleview.on( {
// 							'swipeleft.gamma' : function() {

// 								_onnavigate( 'next' );
							
// 							},
// 							'swiperight.gamma' : function() {

// 								_onnavigate( 'prev' );
							
// 							}
// 						} );

// 					}

// 					Gamma.svplay.on( 'click.gamma', function() {

// 						if( Gamma.slideshow ) {

// 							_stopSlideshow();

// 						}
// 						else if( !Gamma.isAnimating ) {
								
// 							_prepareSlideshow();

// 						}

// 					} );

// 					break;

// 			};

// 		},
// 		// sets a transition for an element
// 		_setTransition = function( el , property, speed, easing ) {

// 			if( !property ) {

// 				property = 'all';

// 			}
// 			if( !speed ) {

// 				speed = Gamma.settings.speed;

// 			}
// 			if( !easing ) {

// 				easing = Gamma.settings.easing;

// 			}

// 			el.css( 'transition', property + ' ' + speed + 'ms ' + easing );

// 		},
// 		// apply a transition or fallback to jquery animate based on condition (cond)
// 		_applyAnimation = function( el, styleCSS, speed, cond, fncomplete ) {

// 			$.fn.applyStyle = cond ? $.fn.css : $.fn.animate;

// 			if( fncomplete && cond ) {

// 				el.on( transEndEventName, fncomplete );

// 			}

// 			fncomplete = fncomplete || function() { return false; };

// 			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms', complete : fncomplete } ) );

// 		},
// 		// public method: adds more items
// 		add = function( $newitems ) {

// 			Gamma.gallery.append( $newitems );
// 			Gamma.items = Gamma.gallery.children();
// 			Gamma.itemsCount = Gamma.items.length;
// 			_layout( $newitems );
// 			_reloadMasonry();

// 		};

// 	return {
// 		init : init,
// 		add : add
// 	}

// })();