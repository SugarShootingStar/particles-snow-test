(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=116},129:function(t,e,n){"use strict";var r=n(34);n.n(r).a},130:function(t,e,n){(t.exports=n(37)(!1)).push([t.i,"\n.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.__nuxt-error-page .error{max-width:450px\n}\n.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px\n}\n.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px\n}\n.__nuxt-error-page a{color:#7f828b!important;text-decoration:none\n}\n.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px\n}",""])},131:function(t,e,n){"use strict";var r=n(35);n.n(r).a},132:function(t,e,n){(t.exports=n(37)(!1)).push([t.i,"\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{transition:none\n}\n.nuxt-progress-failed{background-color:red\n}",""])},133:function(t,e,n){"use strict";var r=n(36);n.n(r).a},134:function(t,e,n){(t.exports=n(37)(!1)).push([t.i,"\nhtml{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box\n}\n*,:after,:before{box-sizing:border-box;margin:0\n}\n.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px\n}\n.button--green:hover{color:#fff;background-color:#3b8070\n}\n.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px\n}\n.button--grey:hover{color:#fff;background-color:#35495e\n}",""])},136:function(t,e,n){"use strict";n.r(e);n(54),n(61),n(64);var r=n(20),o=n.n(r),i=(n(47),n(48),n(90),n(3)),a=n.n(i),s=(n(91),n(92),n(33),n(70),n(95),n(71),n(69),n(100),n(112),n(0)),u=(n(78),n(116)),c=u.keys();function p(t){var e=u(t);return e.default||e}var l={},f=!0,h=!1,d=void 0;try{for(var x,m=c[Symbol.iterator]();!(f=(x=m.next()).done);f=!0){var v=x.value;l[v.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=p(v)}}catch(t){h=!0,d=t}finally{try{f||null==m.return||m.return()}finally{if(h)throw d}}var g=l,y=(n(117),n(118),n(119),n(121),n(123),n(124),n(127),n(21)),b=n.n(y),w=function(){return{}};function _(t,e){var n=t.options.data||w;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),b()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function C(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function k(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function $(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function R(t){return Promise.all($(t,function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=C(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function E(t){return T.apply(this,arguments)}function T(){return(T=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:return t.abrupt("return",b()({},e,{meta:k(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function S(t,e){return j.apply(this,arguments)}function j(){return(j=a()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/particles-snow-test/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=o()(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},n=t,i=o()(n),t=302),"object"===i&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=U(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,E(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,E(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function A(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function O(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function N(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?M:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p=i[c.name||"pathMatch"],l=void 0;if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(l=s(p[f]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=D.exec(t));){var u=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var l=t[i],f=n[2],h=n[3],d=n[4],x=n[5],m=n[6],v=n[7];a&&(r.push(a),a="");var g=null!=f&&null!=l&&l!==f,y="+"===m||"*"===m,b="?"===m||"*"===m,w=n[2]||s,_=d||x;r.push({name:h||o++,prefix:f||"",delimiter:w,optional:b,repeat:y,partial:g,asterisk:!!v,pattern:_?L(_):v?".*":"[^"+z(w)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,e))}function q(t,e){var n={},r=b()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function P(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function z(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function L(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,i=t.split("/"),a=(n?n+"://":"//")+i.shift(),s=i.filter(Boolean).join("/");return 2===(i=s.split("#")).length&&(s=i[0],o=i[1]),a+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=o?"#"+o:""}var I=n(79),B=n.n(I),H=n(53),J=function(){return n.e(2).then(n.bind(null,146)).then(function(t){return t.default||t})};s.a.use(H.a),window.history.scrollRestoration="manual";var K=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var F=n(80),Q=n.n(F).a,V={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var i=n,a=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=a[u]||s,p={};X.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var l={};W.forEach(function(t){"function"==typeof c[t]&&(l[t]=c[t].bind(i))});var f=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(i,t)};var h=[t("router-view",r)];return o.keepAlive&&(h=[t("keep-alive",{props:o.keepAliveProps},h)]),t("transition",{props:p,on:l},h)}},X=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],W=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],G={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},Y={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},Z=(n(129),n(19)),tt=Object(Z.a)(Y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);tt.options.__file="nuxt-error.vue";var et=tt.exports,nt={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||N(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:V,NuxtError:et}},rt={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},ot=(n(131),Object(Z.a)(rt,void 0,void 0,!1,null,null,null));ot.options.__file="nuxt-loading.vue";var it=ot.exports,at=(n(133),Object(Z.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,null,null,null));at.options.__file="default.vue";var st={_default:at.exports},ut={head:{title:"particles-test",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My dandy Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/particles-snow-test/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),i=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,i])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&st["_"+t]||(t="default"),this.layoutName=t,this.layout=st["_"+t],this.layout},loadLayout:function(t){return t&&st["_"+t]||(t="default"),Promise.resolve(st["_"+t])}},components:{NuxtLoading:it}};n(135);s.a.component(Q.name,Q),s.a.component(V.name,V),s.a.component(G.name,G),s.a.component(nt.name,nt),s.a.use(B.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var ct={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function pt(){return(pt=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new H.a({mode:"history",base:"/particles-snow-test/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:K,routes:[{path:"/",component:J,name:"index"}],fallback:!1});case 2:return n=t.sent,r=b()({router:n,nuxt:{defaultTransition:ct,transitions:[ct],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},ct,{name:t}):Object.assign({},ct,t):ct}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?P(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},ut),o=e?e.next:function(t){return r.router.push(t)},e?i=n.resolve(e.url).route:(a=O(n.options.base),i=n.resolve(a).route),t.next=8,S(r,{route:i,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=12;break;case 12:t.next=15;break;case 15:return t.abrupt("return",{app:r,router:n});case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var lt,ft,ht=[],dt=window.__NUXT__||{};if(Object.assign(s.a.config,{silent:!0,performance:!1}),!s.a.config.$nuxt){var xt=s.a.config.errorHandler;s.a.config.errorHandler=function(t,e,n){var r=null;if("function"==typeof xt){for(var o=arguments.length,i=new Array(o>3?o-3:0),a=3;a<o;a++)i[a-3]=arguments[a];r=xt.apply(void 0,[t,e,n].concat(i))}if(!0===r)return r;if(e&&e.$root){var u=Object.keys(s.a.config.$nuxt).find(function(t){return e.$root[t]});u&&e.$root[u].error&&"render function"!==n&&e.$root[u].error(t)}if("function"==typeof xt)return r;console.error(t.message||t)},s.a.config.$nuxt={}}function mt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function vt(t,e,n){return gt.apply(this,arguments)}function gt(){return(gt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!lt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?q(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,R(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function yt(t,e){return dt.serverRendered&&e&&_(t,e),t._Ctor=t,t}function bt(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof g[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g[t])}),!i)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():A(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function wt(t,e,n){return _t.apply(this,arguments)}function _t(){return(_t=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a,u,c,p,l,f,h,d,x,m,v,g,y,b,w=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return ht=e===n?[]:k(n,o=[]).map(function(t,e){return N(n.matched[o[e]].path)(n.params)}),i=!1,a=function(t){n.path===t.path&&w.$loading.finish&&w.$loading.finish(),n.path!==t.path&&w.$loading.pause&&w.$loading.pause(),i||(i=!0,r(t))},t.next=7,S(lt,{route:e,from:n,next:a.bind(this)});case 7:if(this._dateLastError=lt.nuxt.dateErr,this._hadError=!!lt.nuxt.err,(c=k(e,u=[])).length){t.next=25;break}return t.next=14,bt.call(this,c,lt.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof et.layout?et.layout(lt.context):et.layout);case 18:return p=t.sent,t.next=21,bt.call(this,c,lt.context,p);case 21:if(!i){t.next=23;break}return t.abrupt("return");case 23:return lt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(mt(c,e,n)),t.prev=27,t.next=30,bt.call(this,c,lt.context);case 30:if(!i){t.next=32;break}return t.abrupt("return");case 32:if(!lt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(l=c[0].options.layout)&&(l=l(lt.context)),t.next=38,this.loadLayout(l);case 38:return l=t.sent,t.next=41,bt.call(this,c,lt.context,l);case 41:if(!i){t.next=43;break}return t.abrupt("return");case 43:if(!lt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,h=!0,d=!1,x=void 0,t.prev=50,m=c[Symbol.iterator]();case 52:if(h=(v=m.next()).done){t.next=64;break}if("function"==typeof(g=v.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(lt.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,x=t.t0;case 70:t.prev=70,t.prev=71,h||null==m.return||m.return();case 73:if(t.prev=73,!d){t.next=76;break}throw x;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=N(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,w._pathChanged&&w._queryChanged||t._path!==ht[n])t._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return w._diffQuery[t]}))}if(!w._hadError&&w._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=i&&a?30:45;if(i){var c=A(t.options.asyncData,lt.context).then(function(e){_(t,e),w.$loading.increase&&w.$loading.increase(s)});o.push(c)}if(w.$loading.manual=!1===t.options.loading,a){var p=t.options.fetch(lt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){w.$loading.increase&&w.$loading.increase(s)}),o.push(p)}return Promise.all(o)}));case 89:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(y=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,y));case 97:return ht=[],C=y,s.a.config.errorHandler&&s.a.config.errorHandler(C),"function"==typeof(b=et.layout)&&(b=b(lt.context)),t.next=103,this.loadLayout(b);case 103:this.error(y),this.$nuxt.$emit("routeChanged",e,n,y),r(!1);case 106:case"end":return t.stop()}var C},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Ct(t,e){$(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function kt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?et.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(lt.context)),this.setLayout(e)}function $t(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=k(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),kt.call(n,t)})}function Rt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),ft.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Et(){return(Et=a()(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return lt=e.app,ft=e.router,t.next=4,Promise.all((u=void 0,u=O((i=ft).options.base,i.options.mode),$(i.match(u),function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=yt(C(e),dt.data?dt.data[i]:null),r.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,i){return t.apply(this,arguments)}}())));case 4:if(n=t.sent,r=new s.a(lt),o=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){Rt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(mt(n,ft.currentRoute)),ht=ft.currentRoute.matched.map(function(t){return N(t.path)(ft.currentRoute.params)})),r.$loading={},dt.error&&r.error(dt.error),ft.beforeEach(vt.bind(r)),ft.beforeEach(wt.bind(r)),ft.afterEach(Ct),ft.afterEach($t.bind(r)),!dt.serverRendered){t.next=18;break}return o(),t.abrupt("return");case 18:wt.call(r,ft.currentRoute,ft.currentRoute,function(t){if(!t)return Ct(ft.currentRoute,ft.currentRoute),kt.call(r,ft.currentRoute),void o();ft.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 19:case"end":return t.stop()}var i,u},t,this)}))).apply(this,arguments)}s.a.config.$nuxt.$nuxt=!0,function(t){return pt.apply(this,arguments)}().then(function(t){return Et.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},34:function(t,e,n){var r=n(130);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(38).default)("45b1ddea",r,!0,{})},35:function(t,e,n){var r=n(132);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(38).default)("fd547dac",r,!0,{})},36:function(t,e,n){var r=n(134);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(38).default)("371b8fbf",r,!0,{})},81:function(t,e,n){t.exports=n(136)}},[[81,3,1,4]]]);