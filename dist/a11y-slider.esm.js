/* a11y-slider - v0.0.8
* https://github.com/mmahandev/a11y-slider
* Copyright (c) 2020 mmahandev. Licensed MIT */
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var i="object",n=function(t){return t&&t.Math==Math&&t},r=n(typeof globalThis==i&&globalThis)||n(typeof window==i&&window)||n(typeof self==i&&self)||n(typeof t==i&&t)||Function("return this")(),o=r,s={}.hasOwnProperty,a=function(t,e){return s.call(t,e)},l=function(t){try{return!!t()}catch(t){return!0}},u=!l((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),c=function(t){return"object"==typeof t?null!==t:"function"==typeof t},d=r.document,h=c(d)&&c(d.createElement),f=function(t){return h?d.createElement(t):{}},v=!u&&!l((function(){return 7!=Object.defineProperty(f("div"),"a",{get:function(){return 7}}).a})),y=function(t){if(!c(t))throw TypeError(String(t)+" is not an object");return t},p=function(t,e){if(!c(t))return t;var i,n;if(e&&"function"==typeof(i=t.toString)&&!c(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!c(n=i.call(t)))return n;if(!e&&"function"==typeof(i=t.toString)&&!c(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")},b=Object.defineProperty,_={f:u?b:function(t,e,i){if(y(t),e=p(e,!0),y(i),v)try{return b(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},m=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},g=u?function(t,e,i){return _.f(t,e,m(1,i))}:function(t,e,i){return t[e]=i,t},S=function(t,e){try{g(r,t,e)}catch(i){r[t]=e}return e},E=e((function(t){var e=r["__core-js_shared__"]||S("__core-js_shared__",{});(t.exports=function(t,i){return e[t]||(e[t]=void 0!==i?i:{})})("versions",[]).push({version:"3.2.1",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),L=0,k=Math.random(),A=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++L+k).toString(36)},w=!!Object.getOwnPropertySymbols&&!l((function(){return!String(Symbol())})),x=r.Symbol,C=E("wks"),O=function(t){return C[t]||(C[t]=w&&x[t]||(w?x:A)("Symbol."+t))},T={f:O},P=_.f;!function(t){var e=o.Symbol||(o.Symbol={});a(e,t)||P(e,t,{value:T.f(t)})}("iterator");var j,N,B,D={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor,H={f:M&&!D.call({1:2},1)?function(t){var e=M(this,t);return!!e&&e.enumerable}:D},I={}.toString,F="".split,R=l((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==function(t){return I.call(t).slice(8,-1)}(t)?F.call(t,""):Object(t)}:Object,G=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},V=function(t){return R(G(t))},q=Object.getOwnPropertyDescriptor,z={f:u?q:function(t,e){if(t=V(t),e=p(e,!0),v)try{return q(t,e)}catch(t){}if(a(t,e))return m(!H.f.call(t,e),t[e])}},Y=E("native-function-to-string",Function.toString),W=r.WeakMap,U="function"==typeof W&&/native code/.test(Y.call(W)),K=E("keys"),J=function(t){return K[t]||(K[t]=A(t))},Q={},X=r.WeakMap;if(U){var Z=new X,$=Z.get,tt=Z.has,et=Z.set;j=function(t,e){return et.call(Z,t,e),e},N=function(t){return $.call(Z,t)||{}},B=function(t){return tt.call(Z,t)}}else{var it=J("state");Q[it]=!0,j=function(t,e){return g(t,it,e),e},N=function(t){return a(t,it)?t[it]:{}},B=function(t){return a(t,it)}}var nt={set:j,get:N,has:B,enforce:function(t){return B(t)?N(t):j(t,{})},getterFor:function(t){return function(e){var i;if(!c(e)||(i=N(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}},rt=e((function(t){var e=nt.get,i=nt.enforce,n=String(Y).split("toString");E("inspectSource",(function(t){return Y.call(t)})),(t.exports=function(t,e,o,s){var l=!!s&&!!s.unsafe,u=!!s&&!!s.enumerable,c=!!s&&!!s.noTargetGet;"function"==typeof o&&("string"!=typeof e||a(o,"name")||g(o,"name",e),i(o).source=n.join("string"==typeof e?e:"")),t!==r?(l?!c&&t[e]&&(u=!0):delete t[e],u?t[e]=o:g(t,e,o)):u?t[e]=o:S(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||Y.call(this)}))})),ot=function(t){return"function"==typeof t?t:void 0},st=function(t,e){return arguments.length<2?ot(o[t])||ot(r[t]):o[t]&&o[t][e]||r[t]&&r[t][e]},at=Math.ceil,lt=Math.floor,ut=function(t){return isNaN(t=+t)?0:(t>0?lt:at)(t)},ct=Math.min,dt=Math.max,ht=Math.min,ft=function(t){return function(e,i,n){var r,o,s=V(e),a=(r=s.length)>0?ct(ut(r),9007199254740991):0,l=function(t,e){var i=ut(t);return i<0?dt(i+e,0):ht(i,e)}(n,a);if(t&&i!=i){for(;a>l;)if((o=s[l++])!=o)return!0}else for(;a>l;l++)if((t||l in s)&&s[l]===i)return t||l||0;return!t&&-1}},vt={includes:ft(!0),indexOf:ft(!1)}.indexOf,yt=function(t,e){var i,n=V(t),r=0,o=[];for(i in n)!a(Q,i)&&a(n,i)&&o.push(i);for(;e.length>r;)a(n,i=e[r++])&&(~vt(o,i)||o.push(i));return o},pt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],bt=pt.concat("length","prototype"),_t={f:Object.getOwnPropertyNames||function(t){return yt(t,bt)}},mt={f:Object.getOwnPropertySymbols},gt=st("Reflect","ownKeys")||function(t){var e=_t.f(y(t)),i=mt.f;return i?e.concat(i(t)):e},St=function(t,e){for(var i=gt(e),n=_.f,r=z.f,o=0;o<i.length;o++){var s=i[o];a(t,s)||n(t,s,r(e,s))}},Et=/#|\.prototype\./,Lt=function(t,e){var i=At[kt(t)];return i==xt||i!=wt&&("function"==typeof e?l(e):!!e)},kt=Lt.normalize=function(t){return String(t).replace(Et,".").toLowerCase()},At=Lt.data={},wt=Lt.NATIVE="N",xt=Lt.POLYFILL="P",Ct=Lt,Ot=z.f,Tt=function(t,e){var i,n,o,s,a,l=t.target,u=t.global,c=t.stat;if(i=u?r:c?r[l]||S(l,{}):(r[l]||{}).prototype)for(n in e){if(s=e[n],o=t.noTargetGet?(a=Ot(i,n))&&a.value:i[n],!Ct(u?n:l+(c?".":"#")+n,t.forced)&&void 0!==o){if(typeof s==typeof o)continue;St(s,o)}(t.sham||o&&o.sham)&&g(s,"sham",!0),rt(i,n,s,t)}},Pt=Object.keys||function(t){return yt(t,pt)},jt=function(t){return Object(G(t))},Nt=Object.assign,Bt=!Nt||l((function(){var t={},e={},i=Symbol();return t[i]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=Nt({},t)[i]||"abcdefghijklmnopqrst"!=Pt(Nt({},e)).join("")}))?function(t,e){for(var i=jt(t),n=arguments.length,r=1,o=mt.f,s=H.f;n>r;)for(var a,l=R(arguments[r++]),c=o?Pt(l).concat(o(l)):Pt(l),d=c.length,h=0;d>h;)a=c[h++],u&&!s.call(l,a)||(i[a]=l[a]);return i}:Nt;Tt({target:"Object",stat:!0,forced:Object.assign!==Bt},{assign:Bt});var Dt,Mt,Ht,It=function(t){return function(e,i){var n,r,o=String(G(e)),s=ut(i),a=o.length;return s<0||s>=a?t?"":void 0:(n=o.charCodeAt(s))<55296||n>56319||s+1===a||(r=o.charCodeAt(s+1))<56320||r>57343?t?o.charAt(s):n:t?o.slice(s,s+2):r-56320+(n-55296<<10)+65536}},Ft={codeAt:It(!1),charAt:It(!0)},Rt=!l((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Gt=J("IE_PROTO"),Vt=Object.prototype,qt=Rt?Object.getPrototypeOf:function(t){return t=jt(t),a(t,Gt)?t[Gt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Vt:null},zt=O("iterator"),Yt=!1;[].keys&&("next"in(Ht=[].keys())?(Mt=qt(qt(Ht)))!==Object.prototype&&(Dt=Mt):Yt=!0),null==Dt&&(Dt={}),a(Dt,zt)||g(Dt,zt,(function(){return this}));var Wt={IteratorPrototype:Dt,BUGGY_SAFARI_ITERATORS:Yt},Ut=u?Object.defineProperties:function(t,e){y(t);for(var i,n=Pt(e),r=n.length,o=0;r>o;)_.f(t,i=n[o++],e[i]);return t},Kt=st("document","documentElement"),Jt=J("IE_PROTO"),Qt=function(){},Xt=function(){var t,e=f("iframe"),i=pt.length;for(e.style.display="none",Kt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Xt=t.F;i--;)delete Xt.prototype[pt[i]];return Xt()},Zt=Object.create||function(t,e){var i;return null!==t?(Qt.prototype=y(t),i=new Qt,Qt.prototype=null,i[Jt]=t):i=Xt(),void 0===e?i:Ut(i,e)};Q[Jt]=!0;var $t=_.f,te=O("toStringTag"),ee=function(t,e,i){t&&!a(t=i?t:t.prototype,te)&&$t(t,te,{configurable:!0,value:e})},ie=Wt.IteratorPrototype,ne=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,i={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),e=i instanceof Array}catch(t){}return function(i,n){return y(i),function(t){if(!c(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),e?t.call(i,n):i.__proto__=n,i}}():void 0),re=Wt.IteratorPrototype,oe=Wt.BUGGY_SAFARI_ITERATORS,se=O("iterator"),ae=function(){return this},le=function(t,e,i,n,r,o,s){!function(t,e,i){var n=e+" Iterator";t.prototype=Zt(ie,{next:m(1,i)}),ee(t,n,!1)}(i,e,n);var a,l,u,c=function(t){if(t===r&&y)return y;if(!oe&&t in f)return f[t];switch(t){case"keys":case"values":case"entries":return function(){return new i(this,t)}}return function(){return new i(this)}},d=e+" Iterator",h=!1,f=t.prototype,v=f[se]||f["@@iterator"]||r&&f[r],y=!oe&&v||c(r),p="Array"==e&&f.entries||v;if(p&&(a=qt(p.call(new t)),re!==Object.prototype&&a.next&&(qt(a)!==re&&(ne?ne(a,re):"function"!=typeof a[se]&&g(a,se,ae)),ee(a,d,!0))),"values"==r&&v&&"values"!==v.name&&(h=!0,y=function(){return v.call(this)}),f[se]!==y&&g(f,se,y),r)if(l={values:c("values"),keys:o?y:c("keys"),entries:c("entries")},s)for(u in l)!oe&&!h&&u in f||rt(f,u,l[u]);else Tt({target:e,proto:!0,forced:oe||h},l);return l},ue=Ft.charAt,ce=nt.set,de=nt.getterFor("String Iterator");le(String,"String",(function(t){ce(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=de(this),i=e.string,n=e.index;return n>=i.length?{value:void 0,done:!0}:(t=ue(i,n),e.index+=t.length,{value:t,done:!1})}));var he={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},fe=O("unscopables"),ve=Array.prototype;null==ve[fe]&&g(ve,fe,Zt(null));var ye=function(t){ve[fe][t]=!0},pe=nt.set,be=nt.getterFor("Array Iterator"),_e=le(Array,"Array",(function(t,e){pe(this,{type:"Array Iterator",target:V(t),index:0,kind:e})}),(function(){var t=be(this),e=t.target,i=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:n,done:!1}:"values"==i?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values");ye("keys"),ye("values"),ye("entries");var me=O("iterator"),ge=O("toStringTag"),Se=_e.values;for(var Ee in he){var Le=r[Ee],ke=Le&&Le.prototype;if(ke){if(ke[me]!==Se)try{g(ke,me,Se)}catch(t){ke[me]=Se}if(ke[ge]||g(ke,ge,Ee),he[Ee])for(var Ae in _e)if(ke[Ae]!==_e[Ae])try{g(ke,Ae,_e[Ae])}catch(t){ke[Ae]=_e[Ae]}}}function we(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var xe,Ce,Oe,Te,Pe=function(t,e,i){var n;return void 0===e&&(e=50),void 0===i&&(i={isImmediate:!1}),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var s=this,a=i.isImmediate&&void 0===n;void 0!==n&&clearTimeout(n),n=setTimeout((function(){n=void 0,i.isImmediate||t.apply(s,r)}),e),a&&t.apply(s,r)}},je=function(t){return(new DOMParser).parseFromString(t,"text/html").body.firstChild},Ne=function(t){var e=t.charCode||t.keyCode,i=t.type;return"click"===i||"keydown"===i&&(32===e||13===e)&&(t.preventDefault(),!0)},Be=function(t,e){var i=t instanceof HTMLElement?[t]:t,n=!0,r=!1,o=void 0;try{for(var s,a=i[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var l=s.value;l instanceof HTMLElement&&e&&e(l)}}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}};!function(t){t[t.Prev=0]="Prev",t[t.Next=1]="Next"}(xe||(xe={})),function(t){t[t.Enabled=0]="Enabled",t[t.Disabled=1]="Disabled"}(Ce||(Ce={})),function(t){t[t.Enable=0]="Enable",t[t.Disable=1]="Disable"}(Oe||(Oe={})),function(t){t[t.Yes=0]="Yes",t[t.No=0]="No"}(Te||(Te={}));var De=function(){function t(e,i){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.slider=e,this.slides=e.children,this.sliderContainer=je('<div class="a11y-slider-container"></div>'),this._activeClass="a11y-slider-active",this._visibleClass="a11y-slider-visible",this._dotsClass="a11y-slider-dots",this._sliderClass="a11y-slider",this._focusable="a, area, input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]",this._autoplayTimer=Te.No,this._autoplayBtn=je('<button type="button" class="a11y-slider-autoplay">Toggle slider autoplay</button>'),this._pauseOnMouseLeave=!1,this.dots=null,this.activeSlide=this.slides[0],this.visibleSlides=[],this.sliderEnabled=Ce.Disabled,this._hasCustomBtns=!!(i&&i.prevBtn||i&&i.nextBtn),this.options={container:!0,navBtns:!0,prevBtn:i&&i.prevBtn||je('<button type="button" class="a11y-slider-prev">Previous slide</button>'),nextBtn:i&&i.nextBtn||je('<button type="button" class="a11y-slider-next">Next slide</button>'),dots:!0,adaptiveHeight:!1,skipBtn:!0,slidesToShow:!1,autoplay:!1,autoplaySpeed:4e3,autoplayHoverPause:!0},Object.assign(this.options,i),this._handlePrev=this._handlePrev.bind(this),this._handleNext=this._handleNext.bind(this),this._handleAutoplay=this._handleAutoplay.bind(this),this._handleAutoplayHover=this._handleAutoplayHover.bind(this),this._checkShouldEnableDebounced=Pe(this._checkShouldEnable.bind(this),250),this._updateHeightDebounced=Pe(this._updateHeight.bind(this),250),this._updateScrollPosition=Pe((function(){return n.scrollToSlide(n.activeSlide)}),250),this._handleScroll=Pe(this._handleScroll.bind(this),150),this._init()}var e,i,n;return e=t,(i=[{key:"_init",value:function(){this._checkShouldEnable(),window.addEventListener("resize",this._checkShouldEnableDebounced),this._dispatchEvent("init",{a11ySlider:this})}},{key:"_checkShouldEnable",value:function(){var t=this,e=!0;this.slides.length<=1&&(e=!1),this._getActiveAndVisible((function(i){i.length===t.slides.length&&(e=!1)})),this.slides.length===this.options.slidesToShow&&(e=!1),e&&this.sliderEnabled===Ce.Disabled?this._enableSlider():e||this.sliderEnabled!==Ce.Enabled||this._disableSlider(),!e&&this._hasCustomBtns&&(Be(this.options.prevBtn,(function(t){t.classList.add("a11y-slider-hide")})),Be(this.options.nextBtn,(function(t){t.classList.add("a11y-slider-hide")})))}},{key:"_enableSlider",value:function(){var t=this;this.sliderEnabled=Ce.Enabled,this.options.container&&(this.slider.insertAdjacentElement("beforebegin",this.sliderContainer),this.sliderContainer.insertAdjacentElement("afterbegin",this.slider)),this.options.skipBtn&&this._addSkipBtn(),this.options.navBtns&&!this._hasCustomBtns&&(this.options.prevBtn instanceof HTMLElement&&this.slider.insertAdjacentElement("beforebegin",this.options.prevBtn),this.options.nextBtn instanceof HTMLElement&&this.slider.insertAdjacentElement("beforebegin",this.options.nextBtn)),Be(this.options.prevBtn,(function(e){e.addEventListener("click",t._handlePrev,{passive:!0}),e.addEventListener("keypress",t._handlePrev,{passive:!0}),t._hasCustomBtns&&e.classList.remove("a11y-slider-hide")})),Be(this.options.nextBtn,(function(e){e.addEventListener("click",t._handleNext,{passive:!0}),e.addEventListener("keypress",t._handleNext,{passive:!0}),t._hasCustomBtns&&e.classList.remove("a11y-slider-hide")})),this.options.dots&&this._generateDots(),this.slider.addEventListener("scroll",this._handleScroll,!1),this._setCSS(),!0===this.options.adaptiveHeight&&(this._updateHeight(this.activeSlide),window.addEventListener("resize",this._updateHeightDebounced.bind(this))),this.options.autoplay&&this._enableAutoplay(),window.addEventListener("resize",this._updateScrollPosition)}},{key:"_disableSlider",value:function(){var t=this;this.sliderEnabled=Ce.Disabled,document.body.contains(this.sliderContainer)&&(this.sliderContainer.insertAdjacentElement("beforebegin",this.slider),this.sliderContainer.parentNode&&this.sliderContainer.parentNode.removeChild(this.sliderContainer)),this._removeSkipBtn(),Be(this.options.prevBtn,(function(e){e.removeEventListener("click",t._handlePrev),e.removeEventListener("keypress",t._handlePrev),t._hasCustomBtns?e.classList.add("a11y-slider-hide"):e.parentNode&&e.parentNode.removeChild(e)})),Be(this.options.nextBtn,(function(e){e.removeEventListener("click",t._handleNext),e.removeEventListener("keypress",t._handleNext),t._hasCustomBtns?e.classList.add("a11y-slider-hide"):e.parentNode&&e.parentNode.removeChild(e)})),this._removeDots(),this.slider.removeEventListener("scroll",this._handleScroll,!1),this._removeCSS(),window.removeEventListener("resize",this._updateHeightDebounced),this._updateHeight(!1),this.options.autoplay&&this._disableAutoplay(),window.removeEventListener("resize",this._updateScrollPosition)}},{key:"_setCSS",value:function(){this._updateItemsCSS(),this._getActiveAndVisible(),this.slider.classList.add(this._sliderClass);var t=!0,e=!1,i=void 0;try{for(var n,r=this.slides[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var o=n.value;o.classList.remove(this._activeClass),o.classList.remove(this._visibleClass)}}catch(t){e=!0,i=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw i}}this.activeSlide.classList.add(this._activeClass);var s=!0,a=!1,l=void 0;try{for(var u,c=this.visibleSlides[Symbol.iterator]();!(s=(u=c.next()).done);s=!0)u.value.classList.add(this._visibleClass)}catch(t){a=!0,l=t}finally{try{s||null==c.return||c.return()}finally{if(a)throw l}}this._updateDots(this.activeSlide),this._addFocusable()}},{key:"_removeCSS",value:function(){this._removeItemsCSS(),this.slider.classList.remove(this._sliderClass);var t=!0,e=!1,i=void 0;try{for(var n,r=this.slides[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var o=n.value;o.classList.remove(this._activeClass),o.classList.remove(this._visibleClass)}}catch(t){e=!0,i=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw i}}this._removeFocusable()}},{key:"_updateItemsCSS",value:function(){if("number"==typeof(d=this.options.slidesToShow)&&isFinite(d)&&Math.floor(d)===d){var t=100/this.options.slidesToShow;this.slider.style.display="flex";var e=!0,i=!1,n=void 0;try{for(var r,o=this.slides[Symbol.iterator]();!(e=(r=o.next()).done);e=!0)r.value.style.width="".concat(t,"%")}catch(t){i=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(i)throw n}}}else{this.slider.style.removeProperty("display");var s=!0,a=!1,l=void 0;try{for(var u,c=this.slides[Symbol.iterator]();!(s=(u=c.next()).done);s=!0)u.value.style.removeProperty("width")}catch(t){a=!0,l=t}finally{try{s||null==c.return||c.return()}finally{if(a)throw l}}}var d}},{key:"_removeItemsCSS",value:function(){this.slider.style.removeProperty("display");var t=!0,e=!1,i=void 0;try{for(var n,r=this.slides[Symbol.iterator]();!(t=(n=r.next()).done);t=!0)n.value.style.removeProperty("width")}catch(t){e=!0,i=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw i}}}},{key:"_addFocusable",value:function(){this._removeFocusable();var t=!0,e=!1,i=void 0;try{for(var n,r=this.slides[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var o=n.value,s=o.querySelectorAll(this._focusable);o.classList.contains(this._visibleClass)||(o.setAttribute("tabindex","-1"),o.setAttribute("aria-hidden","true"));var a=!0,l=!1,u=void 0;try{for(var c,d=s[Symbol.iterator]();!(a=(c=d.next()).done);a=!0){var h=c.value;o.classList.contains(this._visibleClass)||h.setAttribute("tabindex","-1")}}catch(t){l=!0,u=t}finally{try{a||null==d.return||d.return()}finally{if(l)throw u}}}}catch(t){e=!0,i=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw i}}}},{key:"_removeFocusable",value:function(){var t=!0,e=!1,i=void 0;try{for(var n,r=this.slides[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var o=n.value,s=o.querySelectorAll(this._focusable);o.removeAttribute("tabindex"),o.removeAttribute("aria-hidden");var a=!0,l=!1,u=void 0;try{for(var c,d=s[Symbol.iterator]();!(a=(c=d.next()).done);a=!0)c.value.removeAttribute("tabindex")}catch(t){l=!0,u=t}finally{try{a||null==d.return||d.return()}finally{if(l)throw u}}}}catch(t){e=!0,i=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw i}}}},{key:"_addSkipBtn",value:function(){var t=je('<button class="a11y-slider-sr-only" type="button" tabindex="0">Click to skip slider carousel</button>'),e=je('<div class="a11y-slider-sr-only" tabindex="-1">End of slider carousel</div>'),i=function(t){!0===Ne(t)&&e.focus()};t.addEventListener("click",i,{passive:!0}),t.addEventListener("keypress",i,{passive:!0}),this.slider.insertAdjacentElement("beforebegin",t),this.slider.insertAdjacentElement("afterend",e)}},{key:"_removeSkipBtn",value:function(){var t=document.querySelectorAll("a11y-slider-sr-only"),e=!0,i=!1,n=void 0;try{for(var r,o=t[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var s=r.value;s instanceof HTMLElement&&s.parentNode&&s.parentNode.removeChild(s)}}catch(t){i=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(i)throw n}}}},{key:"_generateDots",value:function(){var t=this;this.dots=je('<ul class="'.concat(this._dotsClass,'"></ul>'));for(var e=function(e){var i=je("<li></li>"),n=je('<button type="button"></button>');n.textContent="Move slider to item #".concat(e+1);var r=function(i){!0===Ne(i)&&(t.scrollToSlide(t.slides[e]),t._toggleAutoplay(Oe.Disable))};n.addEventListener("click",r,{passive:!0}),n.addEventListener("keypress",r,{passive:!0}),i.insertAdjacentElement("beforeend",n),t.dots.insertAdjacentElement("beforeend",i)},i=0;i<this._getDotCount();i++)e(i);this.slider.insertAdjacentElement("afterend",this.dots)}},{key:"_getDotCount",value:function(){return this.slides.length-(this.options.slidesToShow||this.visibleSlides.length)+1}},{key:"_removeDots",value:function(){this.dots instanceof HTMLElement&&this.dots.parentNode&&this.dots.parentNode.removeChild(this.dots)}},{key:"_updateDots",value:function(t){if(this.dots instanceof HTMLElement){var e=Array.prototype.indexOf.call(t.parentNode&&t.parentNode.children,t);e>this.dots.children.length&&(e=this.dots.children.length-1);var i=!0,n=!1,r=void 0;try{for(var o,s=this.dots.children[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)o.value.querySelector("button").classList.remove("active")}catch(t){n=!0,r=t}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}this.dots.children[e].querySelector("button").classList.add("active")}}},{key:"_enableAutoplay",value:function(){this._autoplayBtn.addEventListener("click",this._handleAutoplay,{passive:!0}),this._autoplayBtn.addEventListener("keypress",this._handleAutoplay,{passive:!0}),this.slider.addEventListener("mouseenter",this._handleAutoplayHover,{passive:!0}),this.slider.addEventListener("mouseleave",this._handleAutoplayHover,{passive:!0}),this.slider.insertAdjacentElement("beforebegin",this._autoplayBtn),this._toggleAutoplay(Oe.Enable)}},{key:"_disableAutoplay",value:function(){this._toggleAutoplay(Oe.Disable),this._autoplayBtn.removeEventListener("click",this._handleAutoplay),this._autoplayBtn.removeEventListener("keypress",this._handleAutoplay),this.slider.removeEventListener("mouseenter",this._handleAutoplayHover),this.slider.removeEventListener("mouseleave",this._handleAutoplayHover),this._autoplayBtn.parentNode&&this._autoplayBtn.parentNode.removeChild(this._autoplayBtn)}},{key:"_toggleAutoplay",value:function(t){var e=this;t===Oe.Enable?(e._autoplayTimer=window.setInterval((function(){e._goPrevOrNext(xe.Next)}),e.options.autoplaySpeed),e._autoplayBtn.setAttribute("data-autoplaying","true")):t===Oe.Disable&&(window.clearInterval(e._autoplayTimer),e._autoplayTimer=Te.No,e._autoplayBtn.setAttribute("data-autoplaying","false"))}},{key:"_goPrevOrNext",value:function(t){var e=this;this._getActiveAndVisible((function(i,n){var r=e.slider.firstElementChild,o=e.slider.lastElementChild,s=i[0],a=i[i.length-1];t===xe.Next?a===o?e.scrollToSlide(r):e.scrollToSlide(n&&n.nextElementSibling):t===xe.Prev&&(s===r?e.scrollToSlide(o):e.scrollToSlide(n&&n.previousElementSibling))}))}},{key:"scrollToSlide",value:function(t){var e=!!HTMLElement.prototype.scrollTo;this._dispatchEvent("beforeChange",{currentSlide:this.activeSlide,nextSlide:t,a11ySlider:this}),!0===this.options.adaptiveHeight&&this._updateHeight(t),e?this.slider.scroll({left:t.offsetLeft,behavior:"smooth"}):this.slider.scrollLeft=t.offsetLeft,this._updateDots(t)}},{key:"updateOptions",value:function(t){Object.assign(this.options,t),this._disableSlider(),this._checkShouldEnable()}},{key:"_updateHeight",value:function(t){if(t instanceof HTMLElement){var e=t.offsetHeight;this.slider.style.height="".concat(e,"px")}else this.slider.style.height=""}},{key:"refreshHeight",value:function(){this._updateHeight(this.activeSlide)}},{key:"_getActiveAndVisible",value:function(t){var e=[],i=!0,n=!1,r=void 0;try{for(var o,s=this.slides[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var a=o.value,l=this.slider.clientWidth,u=this.slider.scrollLeft,c=a.offsetLeft;c>=u&&c<u+l&&e.push(a)}}catch(t){n=!0,r=t}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}this.visibleSlides=e,this.activeSlide=e[0],t&&t(this.visibleSlides,this.activeSlide)}},{key:"_handlePrev",value:function(t){!0===Ne(t)&&(this._goPrevOrNext(xe.Prev),this._toggleAutoplay(Oe.Disable))}},{key:"_handleNext",value:function(t){!0===Ne(t)&&(this._goPrevOrNext(xe.Next),this._toggleAutoplay(Oe.Disable))}},{key:"_handleAutoplay",value:function(t){!0===Ne(t)&&(this._autoplayTimer===Te.No?this._toggleAutoplay(Oe.Enable):this._toggleAutoplay(Oe.Disable))}},{key:"_handleAutoplayHover",value:function(t){"mouseenter"===t.type?this._autoplayTimer!==Te.No&&(this._toggleAutoplay(Oe.Disable),this._pauseOnMouseLeave=!0):"mouseleave"===t.type&&this._pauseOnMouseLeave&&this._autoplayTimer===Te.No&&(this._toggleAutoplay(Oe.Enable),this._pauseOnMouseLeave=!1)}},{key:"_handleScroll",value:function(){this._setCSS(),this._dispatchEvent("afterChange",{currentSlide:this.activeSlide,a11ySlider:this})}},{key:"_dispatchEvent",value:function(t,e){var i=function(t,e){var i=document.createEvent("CustomEvent");return e=e||{bubbles:!1,cancelable:!1,detail:void 0},i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}(t,{detail:e});this.slider.dispatchEvent(i)}},{key:"destroy",value:function(){this._disableSlider(),window.removeEventListener("resize",this._checkShouldEnableDebounced),this._dispatchEvent("destroy",{a11ySlider:this})}}])&&we(e.prototype,i),n&&we(e,n),t}();export default De;
