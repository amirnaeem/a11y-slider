/* a11y-slider - v0.4.1
* https://github.com/mmahandev/a11y-slider
* Copyright (c) 2020 mmahandev. Licensed MIT */
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var i=function(e){return e&&e.Math==Math&&e},n=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||Function("return this")(),r=function(e){try{return!!e()}catch(e){return!0}},o=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,l={f:a&&!s.call({1:2},1)?function(e){var t=a(this,e);return!!t&&t.enumerable}:s},u=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},c={}.toString,d=function(e){return c.call(e).slice(8,-1)},h="".split,f=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==d(e)?h.call(e,""):Object(e)}:Object,p=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},v=function(e){return f(p(e))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!y(e))return e;var i,n;if(t&&"function"==typeof(i=e.toString)&&!y(n=i.call(e)))return n;if("function"==typeof(i=e.valueOf)&&!y(n=i.call(e)))return n;if(!t&&"function"==typeof(i=e.toString)&&!y(n=i.call(e)))return n;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,g=function(e,t){return m.call(e,t)},_=n.document,S=y(_)&&y(_.createElement),E=function(e){return S?_.createElement(e):{}},w=!o&&!r((function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,L={f:o?A:function(e,t){if(e=v(e),t=b(t,!0),w)try{return A(e,t)}catch(e){}if(g(e,t))return u(!l.f.call(e,t),e[t])}},O=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},x=Object.defineProperty,C={f:o?x:function(e,t,i){if(O(e),t=b(t,!0),O(i),w)try{return x(e,t,i)}catch(e){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(e[t]=i.value),e}},k=o?function(e,t,i){return C.f(e,t,u(1,i))}:function(e,t,i){return e[t]=i,e},j=function(e,t){try{k(n,e,t)}catch(i){n[e]=t}return t},T=n["__core-js_shared__"]||j("__core-js_shared__",{}),N=Function.toString;"function"!=typeof T.inspectSource&&(T.inspectSource=function(e){return N.call(e)});var P,D,M,I=T.inspectSource,H=n.WeakMap,B="function"==typeof H&&/native code/.test(I(H)),F=t((function(e){(e.exports=function(e,t){return T[e]||(T[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),R=0,V=Math.random(),W=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++R+V).toString(36)},q=F("keys"),z=function(e){return q[e]||(q[e]=W(e))},G={},Y=n.WeakMap;if(B){var X=new Y,U=X.get,K=X.has,$=X.set;P=function(e,t){return $.call(X,e,t),t},D=function(e){return U.call(X,e)||{}},M=function(e){return K.call(X,e)}}else{var J=z("state");G[J]=!0,P=function(e,t){return k(e,J,t),t},D=function(e){return g(e,J)?e[J]:{}},M=function(e){return g(e,J)}}var Q,Z,ee={set:P,get:D,has:M,enforce:function(e){return M(e)?D(e):P(e,{})},getterFor:function(e){return function(t){var i;if(!y(t)||(i=D(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return i}}},te=t((function(e){var t=ee.get,i=ee.enforce,r=String(String).split("String");(e.exports=function(e,t,o,s){var a=!!s&&!!s.unsafe,l=!!s&&!!s.enumerable,u=!!s&&!!s.noTargetGet;"function"==typeof o&&("string"!=typeof t||g(o,"name")||k(o,"name",t),i(o).source=r.join("string"==typeof t?t:"")),e!==n?(a?!u&&e[t]&&(l=!0):delete e[t],l?e[t]=o:k(e,t,o)):l?e[t]=o:j(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||I(this)}))})),ie=n,ne=function(e){return"function"==typeof e?e:void 0},re=function(e,t){return arguments.length<2?ne(ie[e])||ne(n[e]):ie[e]&&ie[e][t]||n[e]&&n[e][t]},oe=Math.ceil,se=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?se:oe)(e)},le=Math.min,ue=function(e){return e>0?le(ae(e),9007199254740991):0},ce=Math.max,de=Math.min,he=function(e,t){var i=ae(e);return i<0?ce(i+t,0):de(i,t)},fe=function(e){return function(t,i,n){var r,o=v(t),s=ue(o.length),a=he(n,s);if(e&&i!=i){for(;s>a;)if((r=o[a++])!=r)return!0}else for(;s>a;a++)if((e||a in o)&&o[a]===i)return e||a||0;return!e&&-1}},pe={includes:fe(!0),indexOf:fe(!1)},ve=pe.indexOf,ye=function(e,t){var i,n=v(e),r=0,o=[];for(i in n)!g(G,i)&&g(n,i)&&o.push(i);for(;t.length>r;)g(n,i=t[r++])&&(~ve(o,i)||o.push(i));return o},be=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],me=be.concat("length","prototype"),ge={f:Object.getOwnPropertyNames||function(e){return ye(e,me)}},_e={f:Object.getOwnPropertySymbols},Se=re("Reflect","ownKeys")||function(e){var t=ge.f(O(e)),i=_e.f;return i?t.concat(i(e)):t},Ee=function(e,t){for(var i=Se(t),n=C.f,r=L.f,o=0;o<i.length;o++){var s=i[o];g(e,s)||n(e,s,r(t,s))}},we=/#|\.prototype\./,Ae=function(e,t){var i=Oe[Le(e)];return i==Ce||i!=xe&&("function"==typeof t?r(t):!!t)},Le=Ae.normalize=function(e){return String(e).replace(we,".").toLowerCase()},Oe=Ae.data={},xe=Ae.NATIVE="N",Ce=Ae.POLYFILL="P",ke=Ae,je=L.f,Te=function(e,t){var i,r,o,s,a,l=e.target,u=e.global,c=e.stat;if(i=u?n:c?n[l]||j(l,{}):(n[l]||{}).prototype)for(r in t){if(s=t[r],o=e.noTargetGet?(a=je(i,r))&&a.value:i[r],!ke(u?r:l+(c?".":"#")+r,e.forced)&&void 0!==o){if(typeof s==typeof o)continue;Ee(s,o)}(e.sham||o&&o.sham)&&k(s,"sham",!0),te(i,r,s,e)}},Ne=Array.isArray||function(e){return"Array"==d(e)},Pe=function(e){return Object(p(e))},De=function(e,t,i){var n=b(t);n in e?C.f(e,n,u(0,i)):e[n]=i},Me=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())})),Ie=Me&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,He=F("wks"),Be=n.Symbol,Fe=Ie?Be:Be&&Be.withoutSetter||W,Re=function(e){return g(He,e)||(Me&&g(Be,e)?He[e]=Be[e]:He[e]=Fe("Symbol."+e)),He[e]},Ve=Re("species"),We=function(e,t){var i;return Ne(e)&&("function"!=typeof(i=e.constructor)||i!==Array&&!Ne(i.prototype)?y(i)&&null===(i=i[Ve])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===t?0:t)},qe=re("navigator","userAgent")||"",ze=n.process,Ge=ze&&ze.versions,Ye=Ge&&Ge.v8;Ye?Z=(Q=Ye.split("."))[0]+Q[1]:qe&&(!(Q=qe.match(/Edge\/(\d+)/))||Q[1]>=74)&&(Q=qe.match(/Chrome\/(\d+)/))&&(Z=Q[1]);var Xe=Z&&+Z,Ue=Re("species"),Ke=function(e){return Xe>=51||!r((function(){var t=[];return(t.constructor={})[Ue]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},$e=Re("isConcatSpreadable"),Je=Xe>=51||!r((function(){var e=[];return e[$e]=!1,e.concat()[0]!==e})),Qe=Ke("concat"),Ze=function(e){if(!y(e))return!1;var t=e[$e];return void 0!==t?!!t:Ne(e)};Te({target:"Array",proto:!0,forced:!Je||!Qe},{concat:function(e){var t,i,n,r,o,s=Pe(this),a=We(s,0),l=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?s:arguments[t],Ze(o)){if(l+(r=ue(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(i=0;i<r;i++,l++)i in o&&De(a,l,o[i])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");De(a,l++,o)}return a.length=l,a}});var et=function(e,t,i){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(i){case 0:return function(){return e.call(t)};case 1:return function(i){return e.call(t,i)};case 2:return function(i,n){return e.call(t,i,n)};case 3:return function(i,n,r){return e.call(t,i,n,r)}}return function(){return e.apply(t,arguments)}},tt=[].push,it=function(e){var t=1==e,i=2==e,n=3==e,r=4==e,o=6==e,s=5==e||o;return function(a,l,u,c){for(var d,h,p=Pe(a),v=f(p),y=et(l,u,3),b=ue(v.length),m=0,g=c||We,_=t?g(a,b):i?g(a,0):void 0;b>m;m++)if((s||m in v)&&(h=y(d=v[m],m,p),e))if(t)_[m]=h;else if(h)switch(e){case 3:return!0;case 5:return d;case 6:return m;case 2:tt.call(_,d)}else if(r)return!1;return o?-1:n||r?r:_}},nt={forEach:it(0),map:it(1),filter:it(2),some:it(3),every:it(4),find:it(5),findIndex:it(6)},rt=function(e,t){var i=[][e];return!!i&&r((function(){i.call(null,t||function(){throw 1},1)}))},ot=Object.defineProperty,st={},at=function(e){throw e},lt=function(e,t){if(g(st,e))return st[e];t||(t={});var i=[][e],n=!!g(t,"ACCESSORS")&&t.ACCESSORS,s=g(t,0)?t[0]:at,a=g(t,1)?t[1]:void 0;return st[e]=!!i&&!r((function(){if(n&&!o)return!0;var e={length:-1};n?ot(e,1,{enumerable:!0,get:at}):e[1]=1,i.call(e,s,a)}))},ut=nt.forEach,ct=rt("forEach"),dt=lt("forEach"),ht=ct&&dt?[].forEach:function(e){return ut(this,e,arguments.length>1?arguments[1]:void 0)};Te({target:"Array",proto:!0,forced:[].forEach!=ht},{forEach:ht});var ft=pe.indexOf,pt=[].indexOf,vt=!!pt&&1/[1].indexOf(1,-0)<0,yt=rt("indexOf"),bt=lt("indexOf",{ACCESSORS:!0,1:0});Te({target:"Array",proto:!0,forced:vt||!yt||!bt},{indexOf:function(e){return vt?pt.apply(this,arguments)||0:ft(this,e,arguments.length>1?arguments[1]:void 0)}});var mt=nt.map,gt=Ke("map"),_t=lt("map");Te({target:"Array",proto:!0,forced:!gt||!_t},{map:function(e){return mt(this,e,arguments.length>1?arguments[1]:void 0)}});var St,Et=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,i={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),t=i instanceof Array}catch(e){}return function(i,n){return O(i),function(e){if(!y(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(n),t?e.call(i,n):i.__proto__=n,i}}():void 0),wt=function(e,t,i){var n,r;return Et&&"function"==typeof(n=t.constructor)&&n!==i&&y(r=n.prototype)&&r!==i.prototype&&Et(e,r),e},At=Object.keys||function(e){return ye(e,be)},Lt=o?Object.defineProperties:function(e,t){O(e);for(var i,n=At(t),r=n.length,o=0;r>o;)C.f(e,i=n[o++],t[i]);return e},Ot=re("document","documentElement"),xt=z("IE_PROTO"),Ct=function(){},kt=function(e){return"<script>"+e+"<\/script>"},jt=function(){try{St=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;jt=St?function(e){e.write(kt("")),e.close();var t=e.parentWindow.Object;return e=null,t}(St):((t=E("iframe")).style.display="none",Ot.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(kt("document.F=Object")),e.close(),e.F);for(var i=be.length;i--;)delete jt.prototype[be[i]];return jt()};G[xt]=!0;var Tt=Object.create||function(e,t){var i;return null!==e?(Ct.prototype=O(e),i=new Ct,Ct.prototype=null,i[xt]=e):i=jt(),void 0===t?i:Lt(i,t)},Nt="\t\n\v\f\r                　\u2028\u2029\ufeff",Pt="["+Nt+"]",Dt=RegExp("^"+Pt+Pt+"*"),Mt=RegExp(Pt+Pt+"*$"),It=function(e){return function(t){var i=String(p(t));return 1&e&&(i=i.replace(Dt,"")),2&e&&(i=i.replace(Mt,"")),i}},Ht={start:It(1),end:It(2),trim:It(3)},Bt=ge.f,Ft=L.f,Rt=C.f,Vt=Ht.trim,Wt=n.Number,qt=Wt.prototype,zt="Number"==d(Tt(qt)),Gt=function(e){var t,i,n,r,o,s,a,l,u=b(e,!1);if("string"==typeof u&&u.length>2)if(43===(t=(u=Vt(u)).charCodeAt(0))||45===t){if(88===(i=u.charCodeAt(2))||120===i)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(s=(o=u.slice(2)).length,a=0;a<s;a++)if((l=o.charCodeAt(a))<48||l>r)return NaN;return parseInt(o,n)}return+u};if(ke("Number",!Wt(" 0o1")||!Wt("0b1")||Wt("+0x1"))){for(var Yt,Xt=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof Xt&&(zt?r((function(){qt.valueOf.call(i)})):"Number"!=d(i))?wt(new Wt(Gt(t)),i,Xt):Gt(t)},Ut=o?Bt(Wt):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Kt=0;Ut.length>Kt;Kt++)g(Wt,Yt=Ut[Kt])&&!g(Xt,Yt)&&Rt(Xt,Yt,Ft(Wt,Yt));Xt.prototype=qt,qt.constructor=Xt,te(n,"Number",Xt)}var $t=Ht.trim,Jt=n.parseInt,Qt=/^[+-]?0[Xx]/,Zt=8!==Jt(Nt+"08")||22!==Jt(Nt+"0x16")?function(e,t){var i=$t(String(e));return Jt(i,t>>>0||(Qt.test(i)?16:10))}:Jt;Te({target:"Number",stat:!0,forced:Number.parseInt!=Zt},{parseInt:Zt});var ei=Object.assign,ti=Object.defineProperty,ii=!ei||r((function(){if(o&&1!==ei({b:1},ei(ti({},"a",{enumerable:!0,get:function(){ti(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},i=Symbol();return e[i]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=ei({},e)[i]||"abcdefghijklmnopqrst"!=At(ei({},t)).join("")}))?function(e,t){for(var i=Pe(e),n=arguments.length,r=1,s=_e.f,a=l.f;n>r;)for(var u,c=f(arguments[r++]),d=s?At(c).concat(s(c)):At(c),h=d.length,p=0;h>p;)u=d[p++],o&&!a.call(c,u)||(i[u]=c[u]);return i}:ei;Te({target:"Object",stat:!0,forced:Object.assign!==ii},{assign:ii});var ni=l.f,ri=function(e){return function(t){for(var i,n=v(t),r=At(n),s=r.length,a=0,l=[];s>a;)i=r[a++],o&&!ni.call(n,i)||l.push(e?[i,n[i]]:n[i]);return l}},oi={entries:ri(!0),values:ri(!1)}.entries;Te({target:"Object",stat:!0},{entries:function(e){return oi(e)}});for(var si in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var ai=n[si],li=ai&&ai.prototype;if(li&&li.forEach!==ht)try{k(li,"forEach",ht)}catch(e){li.forEach=ht}}function ui(e){return(ui="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ci(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function di(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function hi(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function fi(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?hi(Object(i),!0).forEach((function(t){di(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):hi(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function pi(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function vi(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var i=[],n=!0,r=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var yi=function(e,t,i){var n;return void 0===t&&(t=50),void 0===i&&(i={isImmediate:!1}),function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];var s=this,a=i.isImmediate&&void 0===n;void 0!==n&&clearTimeout(n),n=setTimeout((function(){n=void 0,i.isImmediate||e.apply(s,r)}),t),a&&e.apply(s,r)}},bi=Ke("slice"),mi=lt("slice",{ACCESSORS:!0,0:0,1:2}),gi=Re("species"),_i=[].slice,Si=Math.max;Te({target:"Array",proto:!0,forced:!bi||!mi},{slice:function(e,t){var i,n,r,o=v(this),s=ue(o.length),a=he(e,s),l=he(void 0===t?s:t,s);if(Ne(o)&&("function"!=typeof(i=o.constructor)||i!==Array&&!Ne(i.prototype)?y(i)&&null===(i=i[gi])&&(i=void 0):i=void 0,i===Array||void 0===i))return _i.call(o,a,l);for(n=new(void 0===i?Array:i)(Si(l-a,0)),r=0;a<l;a++,r++)a in o&&De(n,r,o[a]);return n.length=r,n}});var Ei={};Ei[Re("toStringTag")]="z";var wi="[object z]"===String(Ei),Ai=Re("toStringTag"),Li="Arguments"==d(function(){return arguments}()),Oi=wi?d:function(e){var t,i,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(i=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),Ai))?i:Li?d(t):"Object"==(n=d(t))&&"function"==typeof t.callee?"Arguments":n},xi=wi?{}.toString:function(){return"[object "+Oi(this)+"]"};wi||te(Object.prototype,"toString",xi,{unsafe:!0});var Ci=function(){var e=O(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},ki=RegExp.prototype,ji=ki.toString,Ti=r((function(){return"/a/b"!=ji.call({source:"a",flags:"b"})})),Ni="toString"!=ji.name;(Ti||Ni)&&te(RegExp.prototype,"toString",(function(){var e=O(this),t=String(e.source),i=e.flags;return"/"+t+"/"+String(void 0===i&&e instanceof RegExp&&!("flags"in ki)?Ci.call(e):i)}),{unsafe:!0});var Pi,Di,Mi,Ii,Hi=function(e){return(new DOMParser).parseFromString(e,"text/html").body.firstChild},Bi=function(e){var t=e.charCode||e.keyCode,i=e.type;return"click"===i||"keydown"===i&&(32===t||13===t)&&(e.preventDefault(),!0)},Fi=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&null!=e&&!isNaN(Number(e.toString()))},Ri=function(e){return"object"===ui(e)&&null!==e},Vi=function(e,t){if(void 0!==e){var i=function(e){if(Array.isArray(e))return!0;var t=Object.prototype.toString.call(e);return"[object HTMLCollection]"===t||"[object NodeList]"===t||!("object"!==ui(e)||!e.hasOwnProperty("length")||e.length<0)&&(0===e.length||!(!e[0]||!e[0].nodeType))}(e)?e:[e];Array.prototype.slice.call(i).forEach((function(e){e instanceof HTMLElement&&t&&t(e)}))}},Wi=function(e,t,i){var n=!!window.getComputedStyle,r=window.getComputedStyle||function(){},o=function(){if(!n)return!1;var e=document.body||document.documentElement,t=document.createElement("div");t.style.cssText="width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;",e.appendChild(t);var i="10px"===r(t,null).width;return e.removeChild(t),i}(),s=function(e){return e=parseFloat(e),t=e,!isNaN(parseFloat(t))&&isFinite(t)?e:0;var t};return function(e,t,i){if(n){i=i||r(e,null);var a=s(i[t]);return o||"width"!==t?o||"height"!==t||(a+=s(i.paddingTop)+s(i.paddingBottom)+s(i.borderTopWidth)+s(i.borderBottomWidth)):a+=s(i.paddingLeft)+s(i.paddingRight)+s(i.borderLeftWidth)+s(i.borderRightWidth),a}return s(e.style[t])}(e,t,i)};!function(e){e[e.Prev=0]="Prev",e[e.Next=1]="Next"}(Pi||(Pi={})),function(e){e[e.Enabled=1]="Enabled",e[e.Disabled=0]="Disabled"}(Di||(Di={})),function(e){e[e.Enable=0]="Enable",e[e.Disable=1]="Disable"}(Mi||(Mi={})),function(e){e[e.Yes=0]="Yes",e[e.No=0]="No"}(Ii||(Ii={}));var qi=function(){function e(t,i){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!(t instanceof HTMLElement))throw new Error("The required input [element] must be an HTMLElement");if(void 0!==i&&!Ri(i))throw new Error("The required input [options] must be an Object");this.slider=t,this.slides=t.children,this.sliderContainer=Hi('<div class="a11y-slider-container"></div>'),this._activeClass="a11y-slider-active",this._visibleClass="a11y-slider-visible",this._dotsClass="a11y-slider-dots",this._sliderClass="a11y-slider",this._focusable="a, area, input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]",this._autoplayTimer=Ii.No,this.autoplayBtn=Hi('<button type="button" class="a11y-slider-autoplay">Toggle slider autoplay</button>'),this._pauseOnMouseLeave=!1,this._skipBtns=[],this.dots=null,this.activeSlide=this.slides[0],this.visibleSlides=[],this.sliderEnabled=Di.Disabled,this._hasCustomArrows=!!(i&&i.prevArrow||i&&i.nextArrow),this.options={container:!0,arrows:!0,prevArrow:i&&i.prevArrow||Hi('<button type="button" class="a11y-slider-prev">Previous slide</button>'),nextArrow:i&&i.nextArrow||Hi('<button type="button" class="a11y-slider-next">Next slide</button>'),dots:!0,adaptiveHeight:!1,skipBtn:!0,slidesToShow:null,autoplay:!1,autoplaySpeed:4e3,autoplayHoverPause:!0,centerMode:!1,infinite:!0,disable:!1,responsive:null,customPaging:null},this.options=fi({},this.options,{},i),this._handlePrev=this._handlePrev.bind(this),this._handleNext=this._handleNext.bind(this),this._handleAutoplay=this._handleAutoplay.bind(this),this._handleAutoplayHover=this._handleAutoplayHover.bind(this),this._checkShouldEnableDebounced=yi(this._checkShouldEnable.bind(this),250),this._updateHeightDebounced=yi(this._updateHeight.bind(this),250),this._generateDotsDebounced=yi(this._generateDots.bind(this),250),this._updateScrollPosition=yi((function(){return n.scrollToSlide(n.activeSlide)}),250),this._handleScroll=yi(this._handleScroll.bind(this),10),this._scrollFinish=yi(this._scrollFinish.bind(this),175),this._init()}var t,i,n;return t=e,(i=[{key:"_init",value:function(){var e=this;setTimeout((function(){return e.slider.scrollLeft=0}),1),Ri(this.options.responsive)&&this._checkResponsive(),this._checkShouldEnable(),window.addEventListener("resize",this._checkShouldEnableDebounced),this._dispatchEvent("init",{a11ySlider:this})}},{key:"_checkShouldEnable",value:function(){var e=this,t=!0;!0===this.options.disable&&(t=!1),this.slides.length<=1&&(t=!1),Fi(this.options.slidesToShow)?this.slides.length===this.options.slidesToShow&&(t=!1):this._getActiveAndVisible(null,(function(i){i.length===e.slides.length&&(t=!1)})),t&&this.sliderEnabled===Di.Disabled?this._enableSlider():t||this.sliderEnabled!==Di.Enabled||this._disableSlider(),!t&&this._hasCustomArrows&&(Vi(this.options.prevArrow,(function(e){e.classList.add("a11y-slider-hide")})),Vi(this.options.nextArrow,(function(e){e.classList.add("a11y-slider-hide")})))}},{key:"_enableSlider",value:function(){var e=this;this.sliderEnabled=Di.Enabled,this.options.container&&(this.slider.insertAdjacentElement("beforebegin",this.sliderContainer),this.sliderContainer.insertAdjacentElement("afterbegin",this.slider)),this.options.skipBtn&&this._addSkipBtn(),this.options.arrows&&!this._hasCustomArrows&&(this.options.prevArrow instanceof HTMLElement&&this.slider.insertAdjacentElement("beforebegin",this.options.prevArrow),this.options.nextArrow instanceof HTMLElement&&this.slider.insertAdjacentElement("beforebegin",this.options.nextArrow)),Vi(this.options.prevArrow,(function(t){t.addEventListener("click",e._handlePrev,{passive:!0}),t.addEventListener("keypress",e._handlePrev,{passive:!0}),e._hasCustomArrows&&t.classList.remove("a11y-slider-hide")})),Vi(this.options.nextArrow,(function(t){t.addEventListener("click",e._handleNext,{passive:!0}),t.addEventListener("keypress",e._handleNext,{passive:!0}),e._hasCustomArrows&&t.classList.remove("a11y-slider-hide")})),this.options.dots&&this._generateDots(),this.slider.addEventListener("scroll",this._handleScroll,!1),this._setCSS(),!0===this.options.adaptiveHeight&&(this._updateHeight(this.activeSlide),window.addEventListener("resize",this._updateHeightDebounced.bind(this))),this.options.autoplay&&this._enableAutoplay(),window.addEventListener("resize",this._updateScrollPosition)}},{key:"_disableSlider",value:function(){var e=this;this.sliderEnabled=Di.Disabled,document.body.contains(this.sliderContainer)&&(this.sliderContainer.insertAdjacentElement("beforebegin",this.slider),this.sliderContainer.parentNode&&this.sliderContainer.parentNode.removeChild(this.sliderContainer)),this._removeSkipBtn(),Vi(this.options.prevArrow,(function(t){t.removeEventListener("click",e._handlePrev),t.removeEventListener("keypress",e._handlePrev),e._hasCustomArrows?t.classList.add("a11y-slider-hide"):t.parentNode&&t.parentNode.removeChild(t)})),Vi(this.options.nextArrow,(function(t){t.removeEventListener("click",e._handleNext),t.removeEventListener("keypress",e._handleNext),e._hasCustomArrows?t.classList.add("a11y-slider-hide"):t.parentNode&&t.parentNode.removeChild(t)})),this._removeDots(),this.slider.removeEventListener("scroll",this._handleScroll,!1),this._removeCSS(),window.removeEventListener("resize",this._updateHeightDebounced),this._updateHeight(!1),this.options.autoplay&&this._disableAutoplay(),window.removeEventListener("resize",this._updateScrollPosition)}},{key:"_setCSS",value:function(e){var t=this;this._addSlidesWidth(),this._getActiveAndVisible(e||null),this.slider.classList.add(this._sliderClass),Vi(this.slides,(function(e){e.classList.remove(t._activeClass),e.classList.remove(t._visibleClass)})),this.activeSlide.classList.add(this._activeClass),Vi(this.visibleSlides,(function(e){e.classList.add(t._visibleClass)})),this._updateDots(this.activeSlide),this._updateA11Y()}},{key:"_removeCSS",value:function(){var e=this;this._removeSlidesWidth(),this.slider.classList.remove(this._sliderClass),Vi(this.slides,(function(t){t.classList.remove(e._activeClass),t.classList.remove(e._visibleClass)})),this._removeA11Y()}},{key:"_checkResponsive",value:function(){var e=this;if(Ri(this.options.responsive)){var t=this.options,i=(t.responsive,pi(t,["responsive"])),n=[],r=Object.entries(this.options.responsive).sort((function(e,t){return e[1]-t[1]}));n.push({mql:window.matchMedia("screen and (max-width: ".concat(Number.parseInt(r[0][0])-1,"px)")),options:i}),r.forEach((function(t,i){var o=vi(t,2),s=o[0],a=o[1],l=fi({},e.options),u="screen and (min-width: ".concat(s,"px)");i!==r.length-1&&(u=u.concat(" and (max-width: ".concat(Number.parseInt(r[i+1][0])-1,"px)"))),n.forEach((function(e){Object.assign(l,e.options)})),Object.assign(l,a),n.push({mql:window.matchMedia(u),options:l})})),n.map((function(t){t.mql.matches&&Object.assign(e.options,t.options),t.mql.addListener((function(){t.mql.matches&&e.updateOptions(t.options)}))}))}}},{key:"_addSlidesWidth",value:function(){if(Fi(this.options.slidesToShow)){var e=100/this.options.slidesToShow;this.slider.style.display="flex",Vi(this.slides,(function(t){t.style.width="".concat(e,"%"),t.style.flex="0 0 auto"}))}else this._removeSlidesWidth()}},{key:"_removeSlidesWidth",value:function(){this.slider.style.removeProperty("display"),Vi(this.slides,(function(e){e.style.removeProperty("width"),e.style.removeProperty("flex")}))}},{key:"_updateA11Y",value:function(){var e=this;if(this._removeA11Y(),Vi(this.slides,(function(t){var i=t.querySelectorAll(e._focusable);t.classList.contains(e._visibleClass)||(t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true")),Vi(i,(function(i){t.classList.contains(e._visibleClass)||i.setAttribute("tabindex","-1")}))})),!1===this.options.infinite){var t=this.slider.firstElementChild,i=this.slider.lastElementChild,n=this.visibleSlides[0],r=this.visibleSlides[this.visibleSlides.length-1];n===t&&Vi(this.options.prevArrow,(function(e){e.setAttribute("disabled","")})),r===i&&Vi(this.options.nextArrow,(function(e){e.setAttribute("disabled","")}))}}},{key:"_removeA11Y",value:function(){var e=this;Vi(this.slides,(function(t){var i=t.querySelectorAll(e._focusable);t.removeAttribute("tabindex"),t.removeAttribute("aria-hidden"),Vi(i,(function(e){e.removeAttribute("tabindex")}))})),Vi(this.options.prevArrow,(function(e){return e.removeAttribute("disabled")})),Vi(this.options.nextArrow,(function(e){return e.removeAttribute("disabled")}))}},{key:"_addSkipBtn",value:function(){var e=Hi('<button class="a11y-slider-sr-only" type="button" tabindex="0">Click to skip slider carousel</button>'),t=Hi('<div class="a11y-slider-sr-only" tabindex="-1">End of slider carousel</div>'),i=function(e){!0===Bi(e)&&t.focus()};e.addEventListener("click",i,{passive:!0}),e.addEventListener("keypress",i,{passive:!0}),this.slider.insertAdjacentElement("beforebegin",e),this.slider.insertAdjacentElement("afterend",t),this._skipBtns=[],this._skipBtns.push(e,t)}},{key:"_removeSkipBtn",value:function(){Vi(this._skipBtns,(function(e){e.parentNode&&e.parentNode.removeChild(e)}))}},{key:"_generateDots",value:function(){var e=this;if(!1!==this.options.dots&&(this._removeDots(),this.sliderEnabled!==Di.Disabled)){this.dots=Hi('<ul class="'.concat(this._dotsClass,'"></ul>'));for(var t=function(t){var i=Hi("<li></li>"),n=void 0;e.options.customPaging?n=Hi(e.options.customPaging(t,e)):(n=Hi('<button type="button"></button>')).textContent="Move slider to item #".concat(t+1);var r=function(i){!0===Bi(i)&&(e.scrollToSlide(e.slides[t]),e._toggleAutoplay(Mi.Disable))};n.addEventListener("click",r,{passive:!0}),n.addEventListener("keypress",r,{passive:!0}),i.insertAdjacentElement("beforeend",n),e.dots.insertAdjacentElement("beforeend",i)},i=0;i<this._getDotCount();i++)t(i);this._updateDots(this.activeSlide),this.slider.insertAdjacentElement("afterend",this.dots),window.addEventListener("resize",this._generateDotsDebounced)}}},{key:"_getDotCount",value:function(){return this.slides.length-(this.options.slidesToShow||this.visibleSlides.length)+1}},{key:"_removeDots",value:function(){window.removeEventListener("resize",this._generateDotsDebounced),this.dots instanceof HTMLElement&&this.dots.parentNode&&this.dots.parentNode.removeChild(this.dots)}},{key:"_updateDots",value:function(e){if(this.dots instanceof HTMLElement){var t,i=Array.prototype.indexOf.call(e.parentNode&&e.parentNode.children,e);i>this.dots.children.length&&(i=this.dots.children.length-1),Vi(this.dots.children,(function(e){var t;return null===(t=e.querySelector("button"))||void 0===t?void 0:t.classList.remove("active")})),null===(t=this.dots.children[i].querySelector("button"))||void 0===t||t.classList.add("active")}}},{key:"_enableAutoplay",value:function(){this.autoplayBtn.addEventListener("click",this._handleAutoplay,{passive:!0}),this.autoplayBtn.addEventListener("keypress",this._handleAutoplay,{passive:!0}),this.options.autoplayHoverPause&&(this.slider.addEventListener("mouseenter",this._handleAutoplayHover,{passive:!0}),this.slider.addEventListener("mouseleave",this._handleAutoplayHover,{passive:!0})),this.slider.insertAdjacentElement("beforebegin",this.autoplayBtn),this._toggleAutoplay(Mi.Enable)}},{key:"_disableAutoplay",value:function(){var e;this._toggleAutoplay(Mi.Disable),this.autoplayBtn.removeEventListener("click",this._handleAutoplay),this.autoplayBtn.removeEventListener("keypress",this._handleAutoplay),this.slider.removeEventListener("mouseenter",this._handleAutoplayHover),this.slider.removeEventListener("mouseleave",this._handleAutoplayHover),null===(e=this.autoplayBtn.parentNode)||void 0===e||e.removeChild(this.autoplayBtn)}},{key:"_toggleAutoplay",value:function(e){var t=this;e===Mi.Enable?(t._autoplayTimer=window.setInterval((function(){t._goPrevOrNext(Pi.Next)}),t.options.autoplaySpeed),t.autoplayBtn.setAttribute("data-autoplaying","true")):e===Mi.Disable&&(window.clearInterval(t._autoplayTimer),t._autoplayTimer=Ii.No,t.autoplayBtn.setAttribute("data-autoplaying","false"))}},{key:"_goPrevOrNext",value:function(e){var t=this;this._getActiveAndVisible(null,(function(i,n){var r=t.slider.firstElementChild,o=t.slider.lastElementChild,s=i[0],a=i[i.length-1];e===Pi.Next?a===o?!0===t.options.infinite&&t.scrollToSlide(r):t.scrollToSlide(n&&n.nextElementSibling):e===Pi.Prev&&(s===r?!0===t.options.infinite&&t.scrollToSlide(o):t.scrollToSlide(n&&n.previousElementSibling))}))}},{key:"scrollToSlide",value:function(e){var t,i=this,n=!!HTMLElement.prototype.scrollTo,r=this.slider.scrollLeft;if(Fi(e))t=this.slides[e];else{if(!(e instanceof HTMLElement))throw new Error("scrollToSlide only accepts an HTMLElement or number");t=e}this._dispatchEvent("beforeChange",{currentSlide:this.activeSlide,nextSlide:t,a11ySlider:this}),!0===this.options.adaptiveHeight&&this._updateHeight(t),n?this.slider.scroll({left:t.offsetLeft,behavior:"smooth"}):this.slider.scrollLeft=t.offsetLeft,setTimeout((function(){i.slider.scrollLeft===r&&i.sliderEnabled===Di.Enabled&&i._setCSS(t)}),50),this._updateDots(t)}},{key:"updateOptions",value:function(e){Object.assign(this.options,e),this._disableSlider(),this._checkShouldEnable()}},{key:"_updateHeight",value:function(e){if(e instanceof HTMLElement){var t=Wi(e,"height");this.slider.style.height="".concat(t,"px")}else this.slider.style.height=""}},{key:"refreshHeight",value:function(){this._updateHeight(this.activeSlide)}},{key:"_getActiveAndVisible",value:function(e,t){var i=!this.slider.classList.contains(this._sliderClass),n=this.slider.style.borderWidth;this.slider.style.borderWidth="0px",i&&this.slider.classList.add(this._sliderClass);var r=[],o=Math.round(this.slider.getBoundingClientRect().width),s=this.slider.scrollLeft-1<0?0:this.slider.scrollLeft-1;if(Vi(this.slides,(function(e){var t=e.offsetLeft;t>=s&&t<s+o&&r.push(e)})),this.slider.style.borderWidth=n,i&&this.slider.classList.remove(this._sliderClass),this.visibleSlides=r,e)this.activeSlide=e;else if(!0===this.options.centerMode)this.activeSlide=this.visibleSlides[Math.floor((this.visibleSlides.length-1)/2)];else{var a;this.activeSlide=null!==(a=r[0])&&void 0!==a?a:this.slides[0]}t&&t(this.visibleSlides,this.activeSlide)}},{key:"_handlePrev",value:function(e){!0===Bi(e)&&(this._goPrevOrNext(Pi.Prev),this._toggleAutoplay(Mi.Disable))}},{key:"_handleNext",value:function(e){!0===Bi(e)&&(this._goPrevOrNext(Pi.Next),this._toggleAutoplay(Mi.Disable))}},{key:"_handleAutoplay",value:function(e){!0===Bi(e)&&(this._autoplayTimer===Ii.No?this._toggleAutoplay(Mi.Enable):this._toggleAutoplay(Mi.Disable))}},{key:"_handleAutoplayHover",value:function(e){"mouseenter"===e.type?this._autoplayTimer!==Ii.No&&(this._toggleAutoplay(Mi.Disable),this._pauseOnMouseLeave=!0):"mouseleave"===e.type&&this._pauseOnMouseLeave&&this._autoplayTimer===Ii.No&&(this._toggleAutoplay(Mi.Enable),this._pauseOnMouseLeave=!1)}},{key:"_handleScroll",value:function(){this._scrollFinish()}},{key:"_scrollFinish",value:function(){this._setCSS(),this._dispatchEvent("afterChange",{currentSlide:this.activeSlide,a11ySlider:this})}},{key:"_dispatchEvent",value:function(e,t){var i=function(e,t){var i=document.createEvent("CustomEvent");return t=t||{bubbles:!1,cancelable:!1,detail:void 0},i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}(e,{detail:t});this.slider.dispatchEvent(i)}},{key:"destroy",value:function(){this._disableSlider(),window.removeEventListener("resize",this._checkShouldEnableDebounced),this._dispatchEvent("destroy",{a11ySlider:this})}}])&&ci(t.prototype,i),n&&ci(t,n),e}();export default qi;
