import{Aa as P,Ga as N,J as a,L as f,N as h,O as o,R as A,S,X as b,a as d,b as l,bb as C,ca as _,db as g,ea as v,eb as F,fa as I,fb as D,ha as p,la as M,na as L,oa as B,pa as O,wa as m,ya as R,za as T}from"./chunk-SGN75A4L.js";var z=null;function E(){return z}function Je(t){z??=t}var k=class{};var y=new f(""),V=(()=>{class t{historyGo(e){throw new Error("")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=a({token:t,factory:()=>o(Z),providedIn:"platform"})}}return t})();var Z=(()=>{class t extends V{constructor(){super(),this._doc=o(y),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return E().getBaseHref(this._doc)}onPopState(e){let n=E().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=E().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=a({token:t,factory:()=>new t,providedIn:"platform"})}}return t})();function j(t,r){if(t.length==0)return r;if(r.length==0)return t;let e=0;return t.endsWith("/")&&e++,r.startsWith("/")&&e++,e==2?t+r.substring(1):e==1?t+r:t+"/"+r}function $(t){let r=t.match(/#|\?|$/),e=r&&r.index||t.length,n=e-(t[e-1]==="/"?1:0);return t.slice(0,n)+t.slice(e)}function c(t){return t&&t[0]!=="?"?"?"+t:t}var w=(()=>{class t{historyGo(e){throw new Error("")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=a({token:t,factory:()=>o(K),providedIn:"root"})}}return t})(),W=new f(""),K=(()=>{class t extends w{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??o(y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return j(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+c(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,s){let u=this.prepareExternalUrl(i+c(s));this._platformLocation.pushState(e,n,u)}replaceState(e,n,i,s){let u=this.prepareExternalUrl(i+c(s));this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(n){return new(n||t)(h(V),h(W,8))}}static{this.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var X=(()=>{class t{constructor(e){this._subject=new v,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Q($(x(n))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+c(n))}normalize(e){return t.stripTrailingSlash(J(this._basePath,x(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n,complete:i})}static{this.normalizeQueryParams=c}static{this.joinWithSlash=j}static{this.stripTrailingSlash=$}static{this.\u0275fac=function(n){return new(n||t)(h(w))}}static{this.\u0275prov=a({token:t,factory:()=>q(),providedIn:"root"})}}return t})();function q(){return new X(h(w))}function J(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function x(t){return t.replace(/\/index.html$/,"")}function Q(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}function Qe(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,s]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(s)}return null}var et=(()=>{class t{transform(e){return JSON.stringify(e,null,2)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275pipe=S({name:"json",type:t,pure:!1,standalone:!0})}}return t})();var tt="browser",ee="server";function te(t){return t===ee}var U=class{};var G=t=>t.src,ne=new f("",{providedIn:"root",factory:()=>G});var ie=new f("NG_OPTIMIZED_PRELOADED_IMAGES",{providedIn:"root",factory:()=>new Set}),re=(()=>{class t{constructor(){this.preloadedImages=o(ie),this.document=o(y)}createPreloadLinkTag(e,n,i,s){if(this.preloadedImages.has(n))return;this.preloadedImages.add(n);let u=e.createElement("link");e.setAttribute(u,"as","image"),e.setAttribute(u,"href",n),e.setAttribute(u,"rel","preload"),e.setAttribute(u,"fetchpriority","high"),s&&e.setAttribute(u,"imageSizes",s),i&&e.setAttribute(u,"imageSrcset",i),e.appendChild(this.document.head,u)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var se=/^((\s*\d+w\s*(,|$)){1,})$/;var oe=[1,2],ue=640;var ae=1920,ce=1080;var nt=(()=>{class t{constructor(){this.imageLoader=o(ne),this.config=de(o(B)),this.renderer=o(m),this.imgElement=o(p).nativeElement,this.injector=o(_),this.isServer=te(o(M)),this.preloadLinkCreator=o(re),this.lcpObserver=null,this._renderedSrc=null,this.priority=!1,this.disableOptimizedSrcset=!1,this.fill=!1}ngOnInit(){R("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes&&this.setHostAttribute("sizes",this.sizes),this.isServer&&this.priority&&this.preloadLinkCreator.createPreloadLinkTag(this.renderer,this.getRewrittenSrc(),e,this.sizes)}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let n=this._renderedSrc;this.updateSrcAndSrcset(!0);let i=this._renderedSrc;this.lcpObserver!==null&&n&&i&&n!==i&&this.injector.get(I).runOutsideAngular(()=>{this.lcpObserver?.updateImage(n,i)})}}callImageLoader(e){let n=e;return this.loaderParams&&(n.loaderParams=this.loaderParams),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=se.test(this.ngSrcset);return this.ngSrcset.split(",").filter(i=>i!=="").map(i=>{i=i.trim();let s=e?parseFloat(i):parseFloat(i)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:s})} ${i}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()==="100vw"&&(n=e.filter(s=>s>=ue)),n.map(s=>`${this.callImageLoader({src:this.ngSrc,width:s})} ${s}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute("src",n);let i;return this.ngSrcset?i=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(i=this.getAutomaticSrcset()),i&&this.setHostAttribute("srcset",i),i}getFixedSrcset(){return oe.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>ae||this.height>ce),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==G&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0})})`:typeof e=="string"?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let u=this.injector.get(C);i(),s(),this.placeholder=!1,u.markForCheck()},i=this.renderer.listen(e,"load",n),s=this.renderer.listen(e,"error",n);le(e,n)}ngOnDestroy(){}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=A({type:t,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(n,i){n&2&&N("position",i.fill?"absolute":null)("width",i.fill?"100%":null)("height",i.fill?"100%":null)("inset",i.fill?"0":null)("background-size",i.placeholder?"cover":null)("background-position",i.placeholder?"50% 50%":null)("background-repeat",i.placeholder?"no-repeat":null)("background-image",i.placeholder?i.generatePlaceholder(i.placeholder):null)("filter",i.placeholder&&i.shouldBlurPlaceholder(i.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",he],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",F],height:[2,"height","height",F],loading:"loading",priority:[2,"priority","priority",g],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",g],fill:[2,"fill","fill",g],placeholder:[2,"placeholder","placeholder",fe],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},standalone:!0,features:[P,b]})}}return t})();function de(t){let r={};return t.breakpoints&&(r.breakpoints=t.breakpoints.sort((e,n)=>e-n)),Object.assign({},L,t,r)}function le(t,r){t.complete&&t.naturalWidth&&r()}function he(t){return typeof t=="string"?t:O(t)}function fe(t){return typeof t=="string"&&t!=="true"&&t!=="false"&&t!==""?t:g(t)}var H=class t{config=T({title:"Angular 17 DI Shop",color:"#ffffff",enableShop:!0});title=D(()=>this.config().title);color=D(()=>this.config().color);isShopEnabled=D(()=>this.config().enableShop);setConfig(r,e){this.config.update(n=>l(d({},n),{[r]:e}))}setTitle(r){this.config.update(e=>l(d({},e),{title:r}))}setColor(r){this.config.update(e=>l(d({},e),{color:r}))}setEnableShop(r){this.config.update(e=>l(d({},e),{enableShop:r}))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})};export{E as a,Je as b,k as c,y as d,w as e,X as f,Qe as g,et as h,tt as i,te as j,U as k,nt as l,H as m};
