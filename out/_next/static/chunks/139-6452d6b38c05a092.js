(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[139],{5098:function(e){e.exports=function(){"use strict";const e={parentTrigger:"li",subMenu:"ul",toggle:!0,triggerElement:"a"},t={ACTIVE:"mm-active",COLLAPSE:"mm-collapse",COLLAPSED:"mm-collapsed",COLLAPSING:"mm-collapsing",METIS:"metismenu",SHOW:"mm-show"};class n{constructor(t,r){this.element=n.isElement(t)?t:document.querySelector(t),this.config=Object.assign(Object.assign({},e),r),this.disposed=!1,this.triggerArr=[],this.init()}static attach(e,t){return new n(e,t)}init(){const{METIS:e,ACTIVE:n,COLLAPSE:r}=t;this.element.classList.add(e),[].slice.call(this.element.querySelectorAll(this.config.subMenu)).forEach((e=>{e.classList.add(r);const t=e.closest(this.config.parentTrigger);(null==t?void 0:t.classList.contains(n))?this.show(e):this.hide(e);const i=null==t?void 0:t.querySelector(this.config.triggerElement);"true"!==(null==i?void 0:i.getAttribute("aria-disabled"))&&(null==i||i.setAttribute("aria-expanded","false"),null==i||i.addEventListener("click",this.clickEvent.bind(this)),this.triggerArr.push(i))}))}clickEvent(e){if(!this.disposed){const t=null==e?void 0:e.currentTarget;t&&"A"===t.tagName&&e.preventDefault();const n=t.closest(this.config.parentTrigger),r=null==n?void 0:n.querySelector(this.config.subMenu);this.toggle(r)}}update(){this.disposed=!1,this.init()}dispose(){this.triggerArr.forEach((e=>{e.removeEventListener("click",this.clickEvent.bind(this))})),this.disposed=!0}on(e,t,n){return this.element.addEventListener(e,t,n),this}off(e,t,n){return this.element.removeEventListener(e,t,n),this}emit(e,t,n=!1){const r=new CustomEvent(e,{bubbles:n,detail:t});this.element.dispatchEvent(r)}toggle(e){const n=e.closest(this.config.parentTrigger);(null==n?void 0:n.classList.contains(t.ACTIVE))?this.hide(e):this.show(e)}show(e){var n;const r=e,{ACTIVE:i,COLLAPSE:s,COLLAPSED:o,COLLAPSING:l,SHOW:a}=t;if(this.isTransitioning||r.classList.contains(l))return;const c=()=>{r.classList.remove(l),r.style.height="",r.removeEventListener("transitionend",c),this.setTransitioning(!1),this.emit("shown.metisMenu",{shownElement:r})},u=r.closest(this.config.parentTrigger);null==u||u.classList.add(i);const f=null==u?void 0:u.querySelector(this.config.triggerElement);null==f||f.setAttribute("aria-expanded","true"),null==f||f.classList.remove(o),r.style.height="0px",r.classList.remove(s),r.classList.remove(a),r.classList.add(l);const d=[].slice.call(null===(n=null==u?void 0:u.parentNode)||void 0===n?void 0:n.children).filter((e=>e!==u));this.config.toggle&&d.length>0&&d.forEach((e=>{const t=e.querySelector(this.config.subMenu);t&&this.hide(t)})),this.setTransitioning(!0),r.classList.add(s),r.classList.add(a),r.style.height=`${r.scrollHeight}px`,this.emit("show.metisMenu",{showElement:r}),r.addEventListener("transitionend",c)}hide(e){const{ACTIVE:n,COLLAPSE:r,COLLAPSED:i,COLLAPSING:s,SHOW:o}=t,l=e;if(this.isTransitioning||!l.classList.contains(o))return;this.emit("hide.metisMenu",{hideElement:l});const a=l.closest(this.config.parentTrigger);null==a||a.classList.remove(n);const c=()=>{l.classList.remove(s),l.classList.add(r),l.style.height="",l.removeEventListener("transitionend",c),this.setTransitioning(!1),this.emit("hidden.metisMenu",{hiddenElement:l})};l.style.height=`${l.getBoundingClientRect().height}px`,l.style.height=`${l.offsetHeight}px`,l.classList.add(s),l.classList.remove(r),l.classList.remove(o),this.setTransitioning(!0),l.addEventListener("transitionend",c),l.style.height="0px";const u=null==a?void 0:a.querySelector(this.config.triggerElement);null==u||u.setAttribute("aria-expanded","false"),null==u||u.classList.add(i)}setTransitioning(e){this.isTransitioning=e}static isElement(e){return Boolean(e.classList)}}return n}()},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(a){l=!0,i=a}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o=(s=n(7294))&&s.__esModule?s:{default:s},l=n(1003),a=n(880),c=n(9246);function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f={};function d(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(i?"%"+i:"")]=!0}}var h=o.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,s=void 0===r?!0!==Boolean(!1):r,h=e.href,g=e.as,p=e.children,v=e.prefetch,m=e.passHref,y=e.replace,b=e.shallow,L=e.scroll,E=e.locale,A=e.onClick,S=e.onMouseEnter,O=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=p,s&&"string"===typeof n&&(n=o.default.createElement("a",null,n));var C,w=!1!==v,M=a.useRouter(),T=o.default.useMemo((function(){var e=i(l.resolveHref(M,h,!0),2),t=e[0],n=e[1];return{href:t,as:g?l.resolveHref(M,g):n||t}}),[M,h,g]),I=T.href,j=T.as,k=o.default.useRef(I),x=o.default.useRef(j);s&&(C=o.default.Children.only(n));var P=s?C&&"object"===typeof C&&C.ref:t,R=i(c.useIntersection({rootMargin:"200px"}),3),_=R[0],H=R[1],N=R[2],q=o.default.useCallback((function(e){x.current===j&&k.current===I||(N(),x.current=j,k.current=I),_(e),P&&("function"===typeof P?P(e):"object"===typeof P&&(P.current=e))}),[j,P,I,N,_]);o.default.useEffect((function(){var e=H&&w&&l.isLocalURL(I),t="undefined"!==typeof E?E:M&&M.locale,n=f[I+"%"+j+(t?"%"+t:"")];e&&!n&&d(M,I,j,{locale:t})}),[j,I,H,E,w,M]);var D={ref:q,onClick:function(e){s||"function"!==typeof A||A(e),s&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,s,o,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,r,{shallow:s,locale:a,scroll:o}))}(e,M,I,j,y,b,L,E)},onMouseEnter:function(e){s||"function"!==typeof S||S(e),s&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),l.isLocalURL(I)&&d(M,I,j,{priority:!0})}};if(!s||m||"a"===C.type&&!("href"in C.props)){var U="undefined"!==typeof E?E:M&&M.locale,B=M&&M.isLocaleDomain&&l.getDomainLocale(j,U,M&&M.locales,M&&M.domainLocales);D.href=B||l.addBasePath(l.addLocale(j,U,M&&M.defaultLocale))}return s?o.default.cloneElement(C,D):o.default.createElement("a",Object.assign({},O,D),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(a){l=!0,i=a}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=s.useRef(),f=i(s.useState(!1),2),d=f[0],h=f[1],g=i(s.useState(t?t.current:null),2),p=g[0],v=g[1],m=s.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=a.get(r):(t=a.get(n),c.push(n));if(t)return t;var i=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(n,t={id:n,observer:s,elements:i}),t}(n),i=r.id,s=r.observer,o=r.elements;return o.set(e,t),s.observe(e),function(){if(o.delete(e),s.unobserve(e),0===o.size){s.disconnect(),a.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:p,rootMargin:n}))}),[r,p,n,d]),y=s.useCallback((function(){h(!1)}),[]);return s.useEffect((function(){if(!l&&!d){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),s.useEffect((function(){t&&v(t.current)}),[t]),[m,d,y]};var s=n(7294),o=n(4686),l="undefined"!==typeof IntersectionObserver;var a=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1121:function(){},1664:function(e,t,n){e.exports=n(1551)}}]);