/*!
FullCalendar v5.11.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/
let FullCalendar = (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    let extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (let p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    let __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (let s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (let i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    }

    let n,u,i$1,t,o,r$1={},f$1=[],e$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c$1(n,l){for(let u in l)n[u]=l[u];return n}function s(n){let l=n.parentNode;l&&l.removeChild(n);}function a$1(n,l,u){let i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v$1(n,f,i,t,null)}function v$1(l,u,i,t,o){let r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return {current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l;}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(let u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?d(n):null}function _(n){let l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b$1.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i$1)(b$1);}function b$1(){for(let n;b$1.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){let l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c$1({},t)).__v=t.__v+1,I$1(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T$1(u,t),t.__e!=o&&_(t)));});}function m(n,l,u,i,t,o,e,c,s,a){let h,p,_,k,b,m,w,A=i&&i.__k||f$1,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(y,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null;}I$1(n,k,_=_||r$1,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g$1(k,s,n):s=x$1(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_));}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L$1(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h]);}function g$1(n,l,u){let i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g$1(t,l,u):x$1(u,t,t,n.__k,t.__e,l));return l}function w$1(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w$1(n,l);}):l.push(n)),l}function x$1(n,l,u,i,t,o){let r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function A$1(n,l,u,i,t){let o;for(o in u)"children"===o||"key"===o||o in l||C$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C$1(n,o,l[o],u[o],i);}function P$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e$1.test(l)?u:u+"px";}function C$1(n,l,u,i,t){let o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H$1:$$1,o):n.removeEventListener(l,o?H$1:$$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function $$1(l){this.l[l.type+!1](n.event?n.event(l):l);}function H$1(l){this.l[l.type+!0](n.event?n.event(l):l);}function I$1(l,u,i,t,o,r,f,e,s){let a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M$1),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c$1({},v.__s)),c$1(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c$1(c$1({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j$2(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i);}}function T$1(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j$2(n,l,u,i,t,o,e,c){let a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1;}if(null===_)p===d||c&&n.data===d||(n.data=d);else {if(o=o&&f$1.slice.call(n.childNodes),v=(p=u.props||r$1).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}if(A$1(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C$1(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C$1(n,"checked",k,p.checked,!1));}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L$1(l,u,i){let t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L$1(t[r],u,i);null!=o&&s(o);}function M$1(n,l,u){return this.constructor(n,u)}function N(l,u,i){let t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I$1(u,l=(!t&&i||u).__k=a$1(y,null,[l]),o||r$1,r$1,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f$1.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T$1(e,l);}function q(n,l){let u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){let u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k);},this.sub=function(n){u.push(n);let l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(let u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n},__v:0},p.prototype.setState=function(n,l){let u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c$1({},this.state),"function"==typeof n&&(n=n(c$1({},u),this.props)),n&&c$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},p.prototype.render=y,u=[],i$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b$1.__r=0,o=0;

    let r,i=[],c=n.__b,f=n.__r,e=n.diffed,a=n.__c,v=n.unmount;function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i=[];}n.__b=function(n){c&&c(n);},n.__r=function(n){f&&f(n);let r=(n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j$1),r.__h=[]);},n.diffed=function(t){e&&e(t);let o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===n.requestAnimationFrame||((r=n.requestAnimationFrame)||function(n){let t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x));},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),a&&a(t,u);},n.unmount=function(t){v&&v(t);let u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g);}catch(t){n.__e(t,u.__v);}};let b="function"==typeof requestAnimationFrame;function g(n){"function"==typeof n.__c&&n.__c();}function j$1(n){n.__c=n.__();}

    function C(n,t){for(let e in t)n[e]=t[e];return n}function S(n,t){for(let e in n)if("__source"!==e&&!(e in t))return !0;for(let r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}(E.prototype=new p).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};let w=n.__b;n.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};let A=n.__e;n.__e=function(n,t,e){if(n.then)for(let r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};let O=n.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){let t=n.__.__c;return t&&t.__e&&t.__e(n)}function F(){this.u=null,this.o=null;}n.unmount=function(n){let t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new p).__c=function(n,t){let e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);let u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;let l=function(){if(!--r.__u){if(r.state.__e){let n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}let t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){let e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}let u=t.__e&&a$1(y,null,n.fallback);return u&&(u.__h=null),[a$1(y,null,t.__e?null:n.children),u]};let M=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function T(n){return this.getChildContext=function(){return n.context},n.children}function j(n){let t=this,e=n.i;t.componentWillUnmount=function(){N(null,t.l),t.l=null,t.i=null;},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n);},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n);}}),N(a$1(T,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount();}function I(n,t){return a$1(j,{__v:n,i:t})}(F.prototype=new p).__e=function(n){let t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){let o=function(){t.props.revealOrder?(r.push(u),M(t,n,r)):u();};e?e(o):o();}},F.prototype.render=function(n){this.u=null,this.o=new Map;let t=w$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(let e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){let n=this;this.o.forEach(function(t,e){M(n,e,t);});};let W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};p.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(p.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});let H=n.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}n.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};let G={configurable:!0,get:function(){return this.class}},J=n.vnode;n.vnode=function(n){let t=n.type,e=n.props,r=e;if("string"==typeof t){for(let u in r={},e){let o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=w$1(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=w$1(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r;}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=W,J&&J(n);};let K=n.__r;n.__r=function(n){K&&K(n);};"object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()};

    let globalObj = typeof globalThis !== 'undefined' ? globalThis : window; // // TODO: streamline when killing IE11 support
    if (globalObj.FullCalendarVDom) {
        console.warn('FullCalendar VDOM already loaded');
    }
    else {
        globalObj.FullCalendarVDom = {
            Component: p,
            createElement: a$1,
            render: N,
            createRef: h,
            Fragment: y,
            createContext: createContext$1,
            createPortal: I,
            flushSync: flushSync$1,
            unmountComponentAtNode: unmountComponentAtNode$1,
        };
    }
    // HACKS...
    // TODO: lock version
    // TODO: link gh issues
    function flushSync$1(runBeforeFlush) {
        runBeforeFlush();
        let oldDebounceRendering = n.debounceRendering; // orig
        let callbackQ = [];
        function execCallbackSync(callback) {
            callbackQ.push(callback);
        }
        n.debounceRendering = execCallbackSync;
        N(a$1(FakeComponent, {}), document.createElement('div'));
        while (callbackQ.length) {
            callbackQ.shift()();
        }
        n.debounceRendering = oldDebounceRendering;
    }
    let FakeComponent = /** @class */ (function (_super) {
        __extends(FakeComponent, _super);
        function FakeComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FakeComponent.prototype.render = function () { return a$1('div', {}); };
        FakeComponent.prototype.componentDidMount = function () { this.setState({}); };
        return FakeComponent;
    }(p));
    function createContext$1(defaultValue) {
        let ContextType = q(defaultValue);
        let origProvider = ContextType.Provider;
        ContextType.Provider = function () {
            let _this = this;
            let isNew = !this.getChildContext;
            let children = origProvider.apply(this, arguments); // eslint-disable-line prefer-rest-params
            if (isNew) {
                let subs_1 = [];
                this.shouldComponentUpdate = function (_props) {
                    if (_this.props.value !== _props.value) {
                        subs_1.forEach(function (c) {
                            c.context = _props.value;
                            c.forceUpdate();
                        });
                    }
                };
                this.sub = function (c) {
                    subs_1.push(c);
                    let old = c.componentWillUnmount;
                    c.componentWillUnmount = function () {
                        subs_1.splice(subs_1.indexOf(c), 1);
                        old && old.call(c);
                    };
                };
            }
            return children;
        };
        return ContextType;
    }
    function unmountComponentAtNode$1(node) {
        N(null, node);
    }

    // no public types yet. when there are, export from:
    // import {} from './api-type-deps'
    let EventSourceApi = /** @class */ (function () {
        function EventSourceApi(context, internalEventSource) {
            this.context = context;
            this.internalEventSource = internalEventSource;
        }
        EventSourceApi.prototype.remove = function () {
            this.context.dispatch({
                type: 'REMOVE_EVENT_SOURCE',
                sourceId: this.internalEventSource.sourceId,
            });
        };
        EventSourceApi.prototype.refetch = function () {
            this.context.dispatch({
                type: 'FETCH_EVENT_SOURCES',
                sourceIds: [this.internalEventSource.sourceId],
                isRefetch: true,
            });
        };
        Object.defineProperty(EventSourceApi.prototype, "id", {
            get: function () {
                return this.internalEventSource.publicId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventSourceApi.prototype, "url", {
            get: function () {
                return this.internalEventSource.meta.url;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventSourceApi.prototype, "format", {
            get: function () {
                return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
            },
            enumerable: false,
            configurable: true
        });
        return EventSourceApi;
    }());

    function removeElement(el) {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
    // Querying
    // ----------------------------------------------------------------------------------------------------------------
    function elementClosest(el, selector) {
        if (el.closest) {
            return el.closest(selector);
            // really bad fallback for IE
            // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
        }
        if (!document.documentElement.contains(el)) {
            return null;
        }
        do {
            if (elementMatches(el, selector)) {
                return el;
            }
            el = (el.parentElement || el.parentNode);
        } while (el !== null && el.nodeType === 1);
        return null;
    }
    function elementMatches(el, selector) {
        let method = el.matches || el.matchesSelector || el.msMatchesSelector;
        return method.call(el, selector);
    }
    // accepts multiple subject els
    // returns a real array. good for methods like forEach
    // TODO: accept the document
    function findElements(container, selector) {
        let containers = container instanceof HTMLElement ? [container] : container;
        let allMatches = [];
        for (let i = 0; i < containers.length; i += 1) {
            let matches = containers[i].querySelectorAll(selector);
            for (let j = 0; j < matches.length; j += 1) {
                allMatches.push(matches[j]);
            }
        }
        return allMatches;
    }
    // accepts multiple subject els
    // only queries direct child elements // TODO: rename to findDirectChildren!
    function findDirectChildren(parent, selector) {
        let parents = parent instanceof HTMLElement ? [parent] : parent;
        let allMatches = [];
        for (let i = 0; i < parents.length; i += 1) {
            let childNodes = parents[i].children; // only ever elements
            for (let j = 0; j < childNodes.length; j += 1) {
                let childNode = childNodes[j];
                if (!selector || elementMatches(childNode, selector)) {
                    allMatches.push(childNode);
                }
            }
        }
        return allMatches;
    }
    // Style
    // ----------------------------------------------------------------------------------------------------------------
    let PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
    function applyStyle(el, props) {
        for (let propName in props) {
            applyStyleProp(el, propName, props[propName]);
        }
    }
    function applyStyleProp(el, name, val) {
        if (val == null) {
            el.style[name] = '';
        }
        else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
            el.style[name] = val + "px";
        }
        else {
            el.style[name] = val;
        }
    }
    // Event Handling
    // ----------------------------------------------------------------------------------------------------------------
    // if intercepting bubbled events at the document/window/body level,
    // and want to see originating element (the 'target'), use this util instead
    // of `ev.target` because it goes within web-component boundaries.
    function getEventTargetViaRoot(ev) {
        let _a, _b;
        return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
    }
    // Shadow DOM consuderations
    // ----------------------------------------------------------------------------------------------------------------
    function getElRoot(el) {
        return el.getRootNode ? el.getRootNode() : document;
    }
    // Unique ID for DOM attribute
    let guid$1 = 0;
    function getUniqueDomId() {
        guid$1 += 1;
        return 'fc-dom-' + guid$1;
    }

    // Stops a mouse/touch event from doing it's native browser action
    function preventDefault(ev) {
        ev.preventDefault();
    }
    // Event Delegation
    // ----------------------------------------------------------------------------------------------------------------
    function buildDelegationHandler(selector, handler) {
        return function (ev) {
            let matchedChild = elementClosest(ev.target, selector);
            if (matchedChild) {
                handler.call(matchedChild, ev, matchedChild);
            }
        };
    }
    function listenBySelector(container, eventType, selector, handler) {
        let attachedHandler = buildDelegationHandler(selector, handler);
        container.addEventListener(eventType, attachedHandler);
        return function () {
            container.removeEventListener(eventType, attachedHandler);
        };
    }
    function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
        let currentMatchedChild;
        return listenBySelector(container, 'mouseover', selector, function (mouseOverEv, matchedChild) {
            if (matchedChild !== currentMatchedChild) {
                currentMatchedChild = matchedChild;
                onMouseEnter(mouseOverEv, matchedChild);
                let realOnMouseLeave_1 = function (mouseLeaveEv) {
                    currentMatchedChild = null;
                    onMouseLeave(mouseLeaveEv, matchedChild);
                    matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
                };
                // listen to the next mouseleave, and then unattach
                matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
            }
        });
    }
    // Animation
    // ----------------------------------------------------------------------------------------------------------------
    let transitionEventNames = [
        'webkitTransitionEnd',
        'otransitionend',
        'oTransitionEnd',
        'msTransitionEnd',
        'transitionend',
    ];
    // triggered only when the next single subsequent transition finishes
    function whenTransitionDone(el, callback) {
        let realCallback = function (ev) {
            callback(ev);
            transitionEventNames.forEach(function (eventName) {
                el.removeEventListener(eventName, realCallback);
            });
        };
        transitionEventNames.forEach(function (eventName) {
            el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
        });
    }
    // ARIA workarounds
    // ----------------------------------------------------------------------------------------------------------------
    function createAriaClickAttrs(handler) {
        return __assign({ onClick: handler }, createAriaKeyboardAttrs(handler));
    }
    function createAriaKeyboardAttrs(handler) {
        return {
            tabIndex: 0,
            onKeyDown: function (ev) {
                if (ev.key === 'Enter' || ev.key === ' ') {
                    handler(ev);
                    ev.preventDefault(); // if space, don't scroll down page
                }
            },
        };
    }

    let guidNumber = 0;
    function guid() {
        guidNumber += 1;
        return String(guidNumber);
    }
    /* FullCalendar-specific DOM Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    // Make the mouse cursor express that an event is not allowed in the current area
    function disableCursor() {
        document.body.classList.add('fc-not-allowed');
    }
    // Returns the mouse cursor to its original look
    function enableCursor() {
        document.body.classList.remove('fc-not-allowed');
    }
    /* Selection
    ----------------------------------------------------------------------------------------------------------------------*/
    function preventSelection(el) {
        el.classList.add('fc-unselectable');
        el.addEventListener('selectstart', preventDefault);
    }
    function allowSelection(el) {
        el.classList.remove('fc-unselectable');
        el.removeEventListener('selectstart', preventDefault);
    }
    /* Context Menu
    ----------------------------------------------------------------------------------------------------------------------*/
    function preventContextMenu(el) {
        el.addEventListener('contextmenu', preventDefault);
    }
    function allowContextMenu(el) {
        el.removeEventListener('contextmenu', preventDefault);
    }
    function parseFieldSpecs(input) {
        let specs = [];
        let tokens = [];
        let i;
        let token;
        if (typeof input === 'string') {
            tokens = input.split(/\s*,\s*/);
        }
        else if (typeof input === 'function') {
            tokens = [input];
        }
        else if (Array.isArray(input)) {
            tokens = input;
        }
        for (i = 0; i < tokens.length; i += 1) {
            token = tokens[i];
            if (typeof token === 'string') {
                specs.push(token.charAt(0) === '-' ?
                    { field: token.substring(1), order: -1 } :
                    { field: token, order: 1 });
            }
            else if (typeof token === 'function') {
                specs.push({ func: token });
            }
        }
        return specs;
    }
    function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
        let i;
        let cmp;
        for (i = 0; i < fieldSpecs.length; i += 1) {
            cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
            if (cmp) {
                return cmp;
            }
        }
        return 0;
    }
    function compareByFieldSpec(obj0, obj1, fieldSpec) {
        if (fieldSpec.func) {
            return fieldSpec.func(obj0, obj1);
        }
        return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field])
            * (fieldSpec.order || 1);
    }
    function flexibleCompare(a, b) {
        if (!a && !b) {
            return 0;
        }
        if (b == null) {
            return -1;
        }
        if (a == null) {
            return 1;
        }
        if (typeof a === 'string' || typeof b === 'string') {
            return String(a).localeCompare(String(b));
        }
        return a - b;
    }
    /* String Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function padStart(val, len) {
        let s = String(val);
        return '000'.substr(0, len - s.length) + s;
    }
    function formatWithOrdinals(formatter, args, fallbackText) {
        if (typeof formatter === 'function') {
            return formatter.apply(void 0, args);
        }
        if (typeof formatter === 'string') { // non-blank string
            return args.reduce(function (str, arg, index) { return (str.replace('$' + index, arg || '')); }, formatter);
        }
        return fallbackText;
    }
    /* Number Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function compareNumbers(a, b) {
        return a - b;
    }
    function isInt(n) {
        return n % 1 === 0;
    }
    /* FC-specific DOM dimension stuff
    ----------------------------------------------------------------------------------------------------------------------*/
    function computeSmallestCellWidth(cellEl) {
        let allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
        let contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');
        if (!allWidthEl) {
            throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
        }
        if (!contentWidthEl) {
            throw new Error('needs fc-scrollgrid-shrink-cushion className');
        }
        return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + // the cell padding+border
            contentWidthEl.getBoundingClientRect().width;
    }

    let DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    // Adding
    function addWeeks(m, n) {
        let a = dateToUtcArray(m);
        a[2] += n * 7;
        return arrayToUtcDate(a);
    }
    function addDays(m, n) {
        let a = dateToUtcArray(m);
        a[2] += n;
        return arrayToUtcDate(a);
    }
    function addMs(m, n) {
        let a = dateToUtcArray(m);
        a[6] += n;
        return arrayToUtcDate(a);
    }
    // Diffing (all return floats)
    // TODO: why not use ranges?
    function diffWeeks(m0, m1) {
        return diffDays(m0, m1) / 7;
    }
    function diffDays(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
    }
    function diffHours(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
    }
    function diffMinutes(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
    }
    function diffSeconds(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / 1000;
    }
    function diffDayAndTime(m0, m1) {
        let m0day = startOfDay(m0);
        let m1day = startOfDay(m1);
        return {
            years: 0,
            months: 0,
            days: Math.round(diffDays(m0day, m1day)),
            milliseconds: (m1.valueOf() - m1day.valueOf()) - (m0.valueOf() - m0day.valueOf()),
        };
    }
    // Diffing Whole Units
    function diffWholeWeeks(m0, m1) {
        let d = diffWholeDays(m0, m1);
        if (d !== null && d % 7 === 0) {
            return d / 7;
        }
        return null;
    }
    function diffWholeDays(m0, m1) {
        if (timeAsMs(m0) === timeAsMs(m1)) {
            return Math.round(diffDays(m0, m1));
        }
        return null;
    }
    // Start-Of
    function startOfDay(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
        ]);
    }
    function startOfHour(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours(),
        ]);
    }
    function startOfMinute(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours(),
            m.getUTCMinutes(),
        ]);
    }
    function startOfSecond(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours(),
            m.getUTCMinutes(),
            m.getUTCSeconds(),
        ]);
    }
    // Week Computation
    function weekOfYear(marker, dow, doy) {
        let y = marker.getUTCFullYear();
        let w = weekOfGivenYear(marker, y, dow, doy);
        if (w < 1) {
            return weekOfGivenYear(marker, y - 1, dow, doy);
        }
        let nextW = weekOfGivenYear(marker, y + 1, dow, doy);
        if (nextW >= 1) {
            return Math.min(w, nextW);
        }
        return w;
    }
    function weekOfGivenYear(marker, year, dow, doy) {
        let firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
        let dayStart = startOfDay(marker);
        let days = Math.round(diffDays(firstWeekStart, dayStart));
        return Math.floor(days / 7) + 1; // zero-indexed
    }
    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        let fwd = 7 + dow - doy;
        // first-week day local weekday -- which local weekday is fwd
        let fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    // Array Conversion
    function dateToLocalArray(date) {
        return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds(),
        ];
    }
    function arrayToLocalDate(a) {
        return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
        a[3] || 0, a[4] || 0, a[5] || 0);
    }
    function dateToUtcArray(date) {
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            date.getUTCMilliseconds(),
        ];
    }
    function arrayToUtcDate(a) {
        // according to web standards (and Safari), a month index is required.
        // massage if only given a year.
        if (a.length === 1) {
            a = a.concat([0]);
        }
        return new Date(Date.UTC.apply(Date, a));
    }
    // Other Utils
    function isValidDate(m) {
        return !isNaN(m.valueOf());
    }
    function timeAsMs(m) {
        return m.getUTCHours() * 1000 * 60 * 60 +
            m.getUTCMinutes() * 1000 * 60 +
            m.getUTCSeconds() * 1000 +
            m.getUTCMilliseconds();
    }

    function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
        return {
            instanceId: guid(),
            defId: defId,
            range: range,
            forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
            forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo,
        };
    }

    let hasOwnProperty = Object.prototype.hasOwnProperty;
    // Merges an array of objects into a single object.
    // The second argument allows for an array of property names who's object values will be merged together.
    function mergeProps(propObjs, complexPropsMap) {
        let dest = {};
        if (complexPropsMap) {
            for (let name_1 in complexPropsMap) {
                let complexObjs = [];
                // collect the trailing object values, stopping when a non-object is discovered
                for (let i = propObjs.length - 1; i >= 0; i -= 1) {
                    let val = propObjs[i][name_1];
                    if (typeof val === 'object' && val) { // non-null object
                        complexObjs.unshift(val);
                    }
                    else if (val !== undefined) {
                        dest[name_1] = val; // if there were no objects, this value will be used
                        break;
                    }
                }
                // if the trailing values were objects, use the merged value
                if (complexObjs.length) {
                    dest[name_1] = mergeProps(complexObjs);
                }
            }
        }
        // copy values into the destination, going from last to first
        for (let i = propObjs.length - 1; i >= 0; i -= 1) {
            let props = propObjs[i];
            for (let name_2 in props) {
                if (!(name_2 in dest)) { // if already assigned by previous props or complex props, don't reassign
                    dest[name_2] = props[name_2];
                }
            }
        }
        return dest;
    }
    function filterHash(hash, func) {
        let filtered = {};
        for (let key in hash) {
            if (func(hash[key], key)) {
                filtered[key] = hash[key];
            }
        }
        return filtered;
    }
    function mapHash(hash, func) {
        let newHash = {};
        for (let key in hash) {
            newHash[key] = func(hash[key], key);
        }
        return newHash;
    }
    function arrayToHash(a) {
        let hash = {};
        for (let _i = 0, a_1 = a; _i < a_1.length; _i++) {
            let item = a_1[_i];
            hash[item] = true;
        }
        return hash;
    }
    function buildHashFromArray(a, func) {
        let hash = {};
        for (let i = 0; i < a.length; i += 1) {
            let tuple = func(a[i], i);
            hash[tuple[0]] = tuple[1];
        }
        return hash;
    }
    function hashValuesToArray(obj) {
        let a = [];
        for (let key in obj) {
            a.push(obj[key]);
        }
        return a;
    }
    function isPropsEqual(obj0, obj1) {
        if (obj0 === obj1) {
            return true;
        }
        for (let key in obj0) {
            if (hasOwnProperty.call(obj0, key)) {
                if (!(key in obj1)) {
                    return false;
                }
            }
        }
        for (let key in obj1) {
            if (hasOwnProperty.call(obj1, key)) {
                if (obj0[key] !== obj1[key]) {
                    return false;
                }
            }
        }
        return true;
    }
    function getUnequalProps(obj0, obj1) {
        let keys = [];
        for (let key in obj0) {
            if (hasOwnProperty.call(obj0, key)) {
                if (!(key in obj1)) {
                    keys.push(key);
                }
            }
        }
        for (let key in obj1) {
            if (hasOwnProperty.call(obj1, key)) {
                if (obj0[key] !== obj1[key]) {
                    keys.push(key);
                }
            }
        }
        return keys;
    }
    function compareObjs(oldProps, newProps, equalityFuncs) {
        if (equalityFuncs === void 0) { equalityFuncs = {}; }
        if (oldProps === newProps) {
            return true;
        }
        for (let key in newProps) {
            if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;
            else {
                return false;
            }
        }
        // check for props that were omitted in the new
        for (let key in oldProps) {
            if (!(key in newProps)) {
                return false;
            }
        }
        return true;
    }
    /*
    assumed "true" equality for handler names like "onReceiveSomething"
    */
    function isObjValsEqual(val0, val1, comparator) {
        if (val0 === val1 || comparator === true) {
            return true;
        }
        if (comparator) {
            return comparator(val0, val1);
        }
        return false;
    }
    function collectFromHash(hash, startIndex, endIndex, step) {
        if (startIndex === void 0) { startIndex = 0; }
        if (step === void 0) { step = 1; }
        let res = [];
        if (endIndex == null) {
            endIndex = Object.keys(hash).length;
        }
        for (let i = startIndex; i < endIndex; i += step) {
            let val = hash[i];
            if (val !== undefined) { // will disregard undefined for sparse arrays
                res.push(val);
            }
        }
        return res;
    }

    function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
        for (let i = 0; i < recurringTypes.length; i += 1) {
            let parsed = recurringTypes[i].parse(refined, dateEnv);
            if (parsed) {
                let allDay = refined.allDay;
                if (allDay == null) {
                    allDay = defaultAllDay;
                    if (allDay == null) {
                        allDay = parsed.allDayGuess;
                        if (allDay == null) {
                            allDay = false;
                        }
                    }
                }
                return {
                    allDay: allDay,
                    duration: parsed.duration,
                    typeData: parsed.typeData,
                    typeId: i,
                };
            }
        }
        return null;
    }
    function expandRecurring(eventStore, framingRange, context) {
        let dateEnv = context.dateEnv, pluginHooks = context.pluginHooks, options = context.options;
        let defs = eventStore.defs, instances = eventStore.instances;
        // remove existing recurring instances
        // TODO: bad. always expand events as a second step
        instances = filterHash(instances, function (instance) { return !defs[instance.defId].recurringDef; });
        for (let defId in defs) {
            let def = defs[defId];
            if (def.recurringDef) {
                let duration = def.recurringDef.duration;
                if (!duration) {
                    duration = def.allDay ?
                        options.defaultAllDayEventDuration :
                        options.defaultTimedEventDuration;
                }
                let starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
                for (let _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
                    let start = starts_1[_i];
                    let instance = createEventInstance(defId, {
                        start: start,
                        end: dateEnv.add(start, duration),
                    });
                    instances[instance.instanceId] = instance;
                }
            }
        }
        return { defs: defs, instances: instances };
    }
    /*
    Event MUST have a recurringDef
    */
    function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
        let typeDef = recurringTypes[eventDef.recurringDef.typeId];
        let markers = typeDef.expand(eventDef.recurringDef.typeData, {
            start: dateEnv.subtract(framingRange.start, duration),
            end: framingRange.end,
        }, dateEnv);
        // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
        if (eventDef.allDay) {
            markers = markers.map(startOfDay);
        }
        return markers;
    }

    let INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
    let PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    // Parsing and Creation
    function createDuration(input, unit) {
        let _a;
        if (typeof input === 'string') {
            return parseString(input);
        }
        if (typeof input === 'object' && input) { // non-null object
            return parseObject(input);
        }
        if (typeof input === 'number') {
            return parseObject((_a = {}, _a[unit || 'milliseconds'] = input, _a));
        }
        return null;
    }
    function parseString(s) {
        let m = PARSE_RE.exec(s);
        if (m) {
            let sign = m[1] ? -1 : 1;
            return {
                years: 0,
                months: 0,
                days: sign * (m[2] ? parseInt(m[2], 10) : 0),
                milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
                    (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
                    (m[5] ? parseInt(m[5], 10) : 0) * 1000 + // seconds
                    (m[6] ? parseInt(m[6], 10) : 0) // ms
                ),
            };
        }
        return null;
    }
    function parseObject(obj) {
        let duration = {
            years: obj.years || obj.year || 0,
            months: obj.months || obj.month || 0,
            days: obj.days || obj.day || 0,
            milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
                (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
                (obj.seconds || obj.second || 0) * 1000 + // seconds
                (obj.milliseconds || obj.millisecond || obj.ms || 0), // ms
        };
        let weeks = obj.weeks || obj.week;
        if (weeks) {
            duration.days += weeks * 7;
            duration.specifiedWeeks = true;
        }
        return duration;
    }
    // Equality
    function durationsEqual(d0, d1) {
        return d0.years === d1.years &&
            d0.months === d1.months &&
            d0.days === d1.days &&
            d0.milliseconds === d1.milliseconds;
    }
    function asCleanDays(dur) {
        if (!dur.years && !dur.months && !dur.milliseconds) {
            return dur.days;
        }
        return 0;
    }
    // Simple Math
    function addDurations(d0, d1) {
        return {
            years: d0.years + d1.years,
            months: d0.months + d1.months,
            days: d0.days + d1.days,
            milliseconds: d0.milliseconds + d1.milliseconds,
        };
    }
    function subtractDurations(d1, d0) {
        return {
            years: d1.years - d0.years,
            months: d1.months - d0.months,
            days: d1.days - d0.days,
            milliseconds: d1.milliseconds - d0.milliseconds,
        };
    }
    function multiplyDuration(d, n) {
        return {
            years: d.years * n,
            months: d.months * n,
            days: d.days * n,
            milliseconds: d.milliseconds * n,
        };
    }
    // Conversions
    // "Rough" because they are based on average-case Gregorian months/years
    function asRoughYears(dur) {
        return asRoughDays(dur) / 365;
    }
    function asRoughMonths(dur) {
        return asRoughDays(dur) / 30;
    }
    function asRoughDays(dur) {
        return asRoughMs(dur) / 864e5;
    }
    function asRoughMinutes(dur) {
        return asRoughMs(dur) / (1000 * 60);
    }
    function asRoughSeconds(dur) {
        return asRoughMs(dur) / 1000;
    }
    function asRoughMs(dur) {
        return dur.years * (365 * 864e5) +
            dur.months * (30 * 864e5) +
            dur.days * 864e5 +
            dur.milliseconds;
    }
    // Advanced Math
    function wholeDivideDurations(numerator, denominator) {
        let res = null;
        for (let i = 0; i < INTERNAL_UNITS.length; i += 1) {
            let unit = INTERNAL_UNITS[i];
            if (denominator[unit]) {
                let localRes = numerator[unit] / denominator[unit];
                if (!isInt(localRes) || (res !== null && res !== localRes)) {
                    return null;
                }
                res = localRes;
            }
            else if (numerator[unit]) {
                // needs to divide by something but can't!
                return null;
            }
        }
        return res;
    }
    function greatestDurationDenominator(dur) {
        let ms = dur.milliseconds;
        if (ms) {
            if (ms % 1000 !== 0) {
                return { unit: 'millisecond', value: ms };
            }
            if (ms % (1000 * 60) !== 0) {
                return { unit: 'second', value: ms / 1000 };
            }
            if (ms % (1000 * 60 * 60) !== 0) {
                return { unit: 'minute', value: ms / (1000 * 60) };
            }
            if (ms) {
                return { unit: 'hour', value: ms / (1000 * 60 * 60) };
            }
        }
        if (dur.days) {
            if (dur.specifiedWeeks && dur.days % 7 === 0) {
                return { unit: 'week', value: dur.days / 7 };
            }
            return { unit: 'day', value: dur.days };
        }
        if (dur.months) {
            return { unit: 'month', value: dur.months };
        }
        if (dur.years) {
            return { unit: 'year', value: dur.years };
        }
        return { unit: 'millisecond', value: 0 };
    }

    // timeZoneOffset is in minutes
    function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
        if (stripZeroTime === void 0) { stripZeroTime = false; }
        let s = marker.toISOString();
        s = s.replace('.000', '');
        if (stripZeroTime) {
            s = s.replace('T00:00:00Z', '');
        }
        if (s.length > 10) { // time part wasn't stripped, can add timezone info
            if (timeZoneOffset == null) {
                s = s.replace('Z', '');
            }
            else if (timeZoneOffset !== 0) {
                s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
            }
            // otherwise, its UTC-0 and we want to keep the Z
        }
        return s;
    }
    // formats the date, but with no time part
    // TODO: somehow merge with buildIsoString and stripZeroTime
    // TODO: rename. omit "string"
    function formatDayString(marker) {
        return marker.toISOString().replace(/T.*$/, '');
    }
    // TODO: use Date::toISOString and use everything after the T?
    function formatIsoTimeString(marker) {
        return padStart(marker.getUTCHours(), 2) + ':' +
            padStart(marker.getUTCMinutes(), 2) + ':' +
            padStart(marker.getUTCSeconds(), 2);
    }
    function formatTimeZoneOffset(minutes, doIso) {
        if (doIso === void 0) { doIso = false; }
        let sign = minutes < 0 ? '-' : '+';
        let abs = Math.abs(minutes);
        let hours = Math.floor(abs / 60);
        let mins = Math.round(abs % 60);
        if (doIso) {
            return sign + padStart(hours, 2) + ":" + padStart(mins, 2);
        }
        return "GMT" + sign + hours + (mins ? ":" + padStart(mins, 2) : '');
    }

    // TODO: new util arrayify?
    function removeExact(array, exactVal) {
        let removeCnt = 0;
        let i = 0;
        while (i < array.length) {
            if (array[i] === exactVal) {
                array.splice(i, 1);
                removeCnt += 1;
            }
            else {
                i += 1;
            }
        }
        return removeCnt;
    }
    function isArraysEqual(a0, a1, equalityFunc) {
        if (a0 === a1) {
            return true;
        }
        let len = a0.length;
        let i;
        if (len !== a1.length) { // not array? or not same length?
            return false;
        }
        for (i = 0; i < len; i += 1) {
            if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
                return false;
            }
        }
        return true;
    }

    function memoize(workerFunc, resEquality, teardownFunc) {
        let currentArgs;
        let currentRes;
        return function () {
            let newArgs = [];
            for (let _i = 0; _i < arguments.length; _i++) {
                newArgs[_i] = arguments[_i];
            }
            if (!currentArgs) {
                currentRes = workerFunc.apply(this, newArgs);
            }
            else if (!isArraysEqual(currentArgs, newArgs)) {
                if (teardownFunc) {
                    teardownFunc(currentRes);
                }
                let res = workerFunc.apply(this, newArgs);
                if (!resEquality || !resEquality(res, currentRes)) {
                    currentRes = res;
                }
            }
            currentArgs = newArgs;
            return currentRes;
        };
    }
    function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
        let _this = this;
        let currentArg;
        let currentRes;
        return function (newArg) {
            if (!currentArg) {
                currentRes = workerFunc.call(_this, newArg);
            }
            else if (!isPropsEqual(currentArg, newArg)) {
                if (teardownFunc) {
                    teardownFunc(currentRes);
                }
                let res = workerFunc.call(_this, newArg);
                if (!resEquality || !resEquality(res, currentRes)) {
                    currentRes = res;
                }
            }
            currentArg = newArg;
            return currentRes;
        };
    }
    function memoizeArraylike(// used at all?
    workerFunc, resEquality, teardownFunc) {
        let _this = this;
        let currentArgSets = [];
        let currentResults = [];
        return function (newArgSets) {
            let currentLen = currentArgSets.length;
            let newLen = newArgSets.length;
            let i = 0;
            for (; i < currentLen; i += 1) {
                if (!newArgSets[i]) { // one of the old sets no longer exists
                    if (teardownFunc) {
                        teardownFunc(currentResults[i]);
                    }
                }
                else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
                    if (teardownFunc) {
                        teardownFunc(currentResults[i]);
                    }
                    let res = workerFunc.apply(_this, newArgSets[i]);
                    if (!resEquality || !resEquality(res, currentResults[i])) {
                        currentResults[i] = res;
                    }
                }
            }
            for (; i < newLen; i += 1) {
                currentResults[i] = workerFunc.apply(_this, newArgSets[i]);
            }
            currentArgSets = newArgSets;
            currentResults.splice(newLen); // remove excess
            return currentResults;
        };
    }
    function memoizeHashlike(// used?
    workerFunc, resEquality, teardownFunc) {
        let _this = this;
        let currentArgHash = {};
        let currentResHash = {};
        return function (newArgHash) {
            let newResHash = {};
            for (let key in newArgHash) {
                if (!currentResHash[key]) {
                    newResHash[key] = workerFunc.apply(_this, newArgHash[key]);
                }
                else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
                    if (teardownFunc) {
                        teardownFunc(currentResHash[key]);
                    }
                    let res = workerFunc.apply(_this, newArgHash[key]);
                    newResHash[key] = (resEquality && resEquality(res, currentResHash[key]))
                        ? currentResHash[key]
                        : res;
                }
                else {
                    newResHash[key] = currentResHash[key];
                }
            }
            currentArgHash = newArgHash;
            currentResHash = newResHash;
            return newResHash;
        };
    }

    let EXTENDED_SETTINGS_AND_SEVERITIES = {
        week: 3,
        separator: 0,
        omitZeroMinute: 0,
        meridiem: 0,
        omitCommas: 0,
    };
    let STANDARD_DATE_PROP_SEVERITIES = {
        timeZoneName: 7,
        era: 6,
        year: 5,
        month: 4,
        day: 2,
        weekday: 2,
        hour: 1,
        minute: 1,
        second: 1,
    };
    let MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
    let COMMA_RE = /,/g; // we need re for globalness
    let MULTI_SPACE_RE = /\s+/g;
    let LTR_RE = /\u200e/g; // control character
    let UTC_RE = /UTC|GMT/;
    let NativeFormatter = /** @class */ (function () {
        function NativeFormatter(formatSettings) {
            let standardDateProps = {};
            let extendedSettings = {};
            let severity = 0;
            for (let name_1 in formatSettings) {
                if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
                    extendedSettings[name_1] = formatSettings[name_1];
                    severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
                }
                else {
                    standardDateProps[name_1] = formatSettings[name_1];
                    if (name_1 in STANDARD_DATE_PROP_SEVERITIES) { // TODO: what about hour12? no severity
                        severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
                    }
                }
            }
            this.standardDateProps = standardDateProps;
            this.extendedSettings = extendedSettings;
            this.severity = severity;
            this.buildFormattingFunc = memoize(buildFormattingFunc);
        }
        NativeFormatter.prototype.format = function (date, context) {
            return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
        };
        NativeFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
            let _a = this, standardDateProps = _a.standardDateProps, extendedSettings = _a.extendedSettings;
            let diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
            if (!diffSeverity) {
                return this.format(start, context);
            }
            let biggestUnitForPartial = diffSeverity;
            if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
                (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') &&
                (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') &&
                (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
                biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
            }
            let full0 = this.format(start, context);
            let full1 = this.format(end, context);
            if (full0 === full1) {
                return full0;
            }
            let partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
            let partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
            let partial0 = partialFormattingFunc(start);
            let partial1 = partialFormattingFunc(end);
            let insertion = findCommonInsertion(full0, partial0, full1, partial1);
            let separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';
            if (insertion) {
                return insertion.before + partial0 + separator + partial1 + insertion.after;
            }
            return full0 + separator + full1;
        };
        NativeFormatter.prototype.getLargestUnit = function () {
            switch (this.severity) {
                case 7:
                case 6:
                case 5:
                    return 'year';
                case 4:
                    return 'month';
                case 3:
                    return 'week';
                case 2:
                    return 'day';
                default:
                    return 'time'; // really?
            }
        };
        return NativeFormatter;
    }());
    function buildFormattingFunc(standardDateProps, extendedSettings, context) {
        let standardDatePropCnt = Object.keys(standardDateProps).length;
        if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
            return function (date) { return (formatTimeZoneOffset(date.timeZoneOffset)); };
        }
        if (standardDatePropCnt === 0 && extendedSettings.week) {
            return function (date) { return (formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week)); };
        }
        return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
    }
    function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
        standardDateProps = __assign({}, standardDateProps); // copy
        extendedSettings = __assign({}, extendedSettings); // copy
        sanitizeSettings(standardDateProps, extendedSettings);
        standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
        let normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
        let zeroFormat; // needed?
        if (extendedSettings.omitZeroMinute) {
            let zeroProps = __assign({}, standardDateProps);
            delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
            zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
        }
        return function (date) {
            let marker = date.marker;
            let format;
            if (zeroFormat && !marker.getUTCMinutes()) {
                format = zeroFormat;
            }
            else {
                format = normalFormat;
            }
            let s = format.format(marker);
            return postProcess(s, date, standardDateProps, extendedSettings, context);
        };
    }
    function sanitizeSettings(standardDateProps, extendedSettings) {
        // deal with a browser inconsistency where formatting the timezone
        // requires that the hour/minute be present.
        if (standardDateProps.timeZoneName) {
            if (!standardDateProps.hour) {
                standardDateProps.hour = '2-digit';
            }
            if (!standardDateProps.minute) {
                standardDateProps.minute = '2-digit';
            }
        }
        // only support short timezone names
        if (standardDateProps.timeZoneName === 'long') {
            standardDateProps.timeZoneName = 'short';
        }
        // if requesting to display seconds, MUST display minutes
        if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
            delete extendedSettings.omitZeroMinute;
        }
    }
    function postProcess(s, date, standardDateProps, extendedSettings, context) {
        s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
        if (standardDateProps.timeZoneName === 'short') {
            s = injectTzoStr(s, (context.timeZone === 'UTC' || date.timeZoneOffset == null) ?
                'UTC' : // important to normalize for IE, which does "GMT"
                formatTimeZoneOffset(date.timeZoneOffset));
        }
        if (extendedSettings.omitCommas) {
            s = s.replace(COMMA_RE, '').trim();
        }
        if (extendedSettings.omitZeroMinute) {
            s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
        }
        // ^ do anything that might create adjacent spaces before this point,
        // because MERIDIEM_RE likes to eat up loading spaces
        if (extendedSettings.meridiem === false) {
            s = s.replace(MERIDIEM_RE, '').trim();
        }
        else if (extendedSettings.meridiem === 'narrow') { // a/p
            s = s.replace(MERIDIEM_RE, function (m0, m1) { return m1.toLocaleLowerCase(); });
        }
        else if (extendedSettings.meridiem === 'short') { // am/pm
            s = s.replace(MERIDIEM_RE, function (m0, m1) { return m1.toLocaleLowerCase() + "m"; });
        }
        else if (extendedSettings.meridiem === 'lowercase') { // other meridiem transformers already converted to lowercase
            s = s.replace(MERIDIEM_RE, function (m0) { return m0.toLocaleLowerCase(); });
        }
        s = s.replace(MULTI_SPACE_RE, ' ');
        s = s.trim();
        return s;
    }
    function injectTzoStr(s, tzoStr) {
        let replaced = false;
        s = s.replace(UTC_RE, function () {
            replaced = true;
            return tzoStr;
        });
        // IE11 doesn't include UTC/GMT in the original string, so append to end
        if (!replaced) {
            s += " " + tzoStr;
        }
        return s;
    }
    function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
        let parts = [];
        if (display === 'long') {
            parts.push(weekTextLong);
        }
        else if (display === 'short' || display === 'narrow') {
            parts.push(weekText);
        }
        if (display === 'long' || display === 'short') {
            parts.push(' ');
        }
        parts.push(locale.simpleNumberFormat.format(num));
        if (locale.options.direction === 'rtl') { // TODO: use control characters instead?
            parts.reverse();
        }
        return parts.join('');
    }
    // Range Formatting Utils
    // 0 = exactly the same
    // 1 = different by time
    // and bigger
    function computeMarkerDiffSeverity(d0, d1, ca) {
        if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
            return 5;
        }
        if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
            return 4;
        }
        if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
            return 2;
        }
        if (timeAsMs(d0) !== timeAsMs(d1)) {
            return 1;
        }
        return 0;
    }
    function computePartialFormattingOptions(options, biggestUnit) {
        let partialOptions = {};
        for (let name_2 in options) {
            if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
                STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
                partialOptions[name_2] = options[name_2];
            }
        }
        return partialOptions;
    }
    function findCommonInsertion(full0, partial0, full1, partial1) {
        let i0 = 0;
        while (i0 < full0.length) {
            let found0 = full0.indexOf(partial0, i0);
            if (found0 === -1) {
                break;
            }
            let before0 = full0.substr(0, found0);
            i0 = found0 + partial0.length;
            let after0 = full0.substr(i0);
            let i1 = 0;
            while (i1 < full1.length) {
                let found1 = full1.indexOf(partial1, i1);
                if (found1 === -1) {
                    break;
                }
                let before1 = full1.substr(0, found1);
                i1 = found1 + partial1.length;
                let after1 = full1.substr(i1);
                if (before0 === before1 && after0 === after1) {
                    return {
                        before: before0,
                        after: after0,
                    };
                }
            }
        }
        return null;
    }

    function expandZonedMarker(dateInfo, calendarSystem) {
        let a = calendarSystem.markerToArray(dateInfo.marker);
        return {
            marker: dateInfo.marker,
            timeZoneOffset: dateInfo.timeZoneOffset,
            array: a,
            year: a[0],
            month: a[1],
            day: a[2],
            hour: a[3],
            minute: a[4],
            second: a[5],
            millisecond: a[6],
        };
    }

    function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
        let startInfo = expandZonedMarker(start, context.calendarSystem);
        let endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
        return {
            date: startInfo,
            start: startInfo,
            end: endInfo,
            timeZone: context.timeZone,
            localeCodes: context.locale.codes,
            defaultSeparator: betterDefaultSeparator || context.defaultSeparator,
        };
    }

    /*
    TODO: fix the terminology of "formatter" vs "formatting func"
    */
    /*
    At the time of instantiation, this object does not know which cmd-formatting system it will use.
    It receives this at the time of formatting, as a setting.
    */
    let CmdFormatter = /** @class */ (function () {
        function CmdFormatter(cmdStr) {
            this.cmdStr = cmdStr;
        }
        CmdFormatter.prototype.format = function (date, context, betterDefaultSeparator) {
            return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
        };
        CmdFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
            return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
        };
        return CmdFormatter;
    }());

    let FuncFormatter = /** @class */ (function () {
        function FuncFormatter(func) {
            this.func = func;
        }
        FuncFormatter.prototype.format = function (date, context, betterDefaultSeparator) {
            return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
        };
        FuncFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
            return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
        };
        return FuncFormatter;
    }());

    function createFormatter(input) {
        if (typeof input === 'object' && input) { // non-null object
            return new NativeFormatter(input);
        }
        if (typeof input === 'string') {
            return new CmdFormatter(input);
        }
        if (typeof input === 'function') {
            return new FuncFormatter(input);
        }
        return null;
    }

    // base options
    // ------------
    let BASE_OPTION_REFINERS = {
        navLinkDayClick: identity,
        navLinkWeekClick: identity,
        duration: createDuration,
        bootstrapFontAwesome: identity,
        buttonIcons: identity,
        customButtons: identity,
        defaultAllDayEventDuration: createDuration,
        defaultTimedEventDuration: createDuration,
        nextDayThreshold: createDuration,
        scrollTime: createDuration,
        scrollTimeReset: Boolean,
        slotMinTime: createDuration,
        slotMaxTime: createDuration,
        dayPopoverFormat: createFormatter,
        slotDuration: createDuration,
        snapDuration: createDuration,
        headerToolbar: identity,
        footerToolbar: identity,
        defaultRangeSeparator: String,
        titleRangeSeparator: String,
        forceEventDuration: Boolean,
        dayHeaders: Boolean,
        dayHeaderFormat: createFormatter,
        dayHeaderClassNames: identity,
        dayHeaderContent: identity,
        dayHeaderDidMount: identity,
        dayHeaderWillUnmount: identity,
        dayCellClassNames: identity,
        dayCellContent: identity,
        dayCellDidMount: identity,
        dayCellWillUnmount: identity,
        initialView: String,
        aspectRatio: Number,
        weekends: Boolean,
        weekNumberCalculation: identity,
        weekNumbers: Boolean,
        weekNumberClassNames: identity,
        weekNumberContent: identity,
        weekNumberDidMount: identity,
        weekNumberWillUnmount: identity,
        editable: Boolean,
        viewClassNames: identity,
        viewDidMount: identity,
        viewWillUnmount: identity,
        nowIndicator: Boolean,
        nowIndicatorClassNames: identity,
        nowIndicatorContent: identity,
        nowIndicatorDidMount: identity,
        nowIndicatorWillUnmount: identity,
        showNonCurrentDates: Boolean,
        lazyFetching: Boolean,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
        timeZone: String,
        locales: identity,
        locale: identity,
        themeSystem: String,
        dragRevertDuration: Number,
        dragScroll: Boolean,
        allDayMaintainDuration: Boolean,
        unselectAuto: Boolean,
        dropAccept: identity,
        eventOrder: parseFieldSpecs,
        eventOrderStrict: Boolean,
        handleWindowResize: Boolean,
        windowResizeDelay: Number,
        longPressDelay: Number,
        eventDragMinDistance: Number,
        expandRows: Boolean,
        height: identity,
        contentHeight: identity,
        direction: String,
        weekNumberFormat: createFormatter,
        eventResizableFromStart: Boolean,
        displayEventTime: Boolean,
        displayEventEnd: Boolean,
        weekText: String,
        weekTextLong: String,
        progressiveEventRendering: Boolean,
        businessHours: identity,
        initialDate: identity,
        now: identity,
        eventDataTransform: identity,
        stickyHeaderDates: identity,
        stickyFooterScrollbar: identity,
        viewHeight: identity,
        defaultAllDay: Boolean,
        eventSourceFailure: identity,
        eventSourceSuccess: identity,
        eventDisplay: String,
        eventStartEditable: Boolean,
        eventDurationEditable: Boolean,
        eventOverlap: identity,
        eventConstraint: identity,
        eventAllow: identity,
        eventBackgroundColor: String,
        eventBorderColor: String,
        eventTextColor: String,
        eventColor: String,
        eventClassNames: identity,
        eventContent: identity,
        eventDidMount: identity,
        eventWillUnmount: identity,
        selectConstraint: identity,
        selectOverlap: identity,
        selectAllow: identity,
        droppable: Boolean,
        unselectCancel: String,
        slotLabelFormat: identity,
        slotLaneClassNames: identity,
        slotLaneContent: identity,
        slotLaneDidMount: identity,
        slotLaneWillUnmount: identity,
        slotLabelClassNames: identity,
        slotLabelContent: identity,
        slotLabelDidMount: identity,
        slotLabelWillUnmount: identity,
        dayMaxEvents: identity,
        dayMaxEventRows: identity,
        dayMinWidth: Number,
        slotLabelInterval: createDuration,
        allDayText: String,
        allDayClassNames: identity,
        allDayContent: identity,
        allDayDidMount: identity,
        allDayWillUnmount: identity,
        slotMinWidth: Number,
        navLinks: Boolean,
        eventTimeFormat: createFormatter,
        rerenderDelay: Number,
        moreLinkText: identity,
        moreLinkHint: identity,
        selectMinDistance: Number,
        selectable: Boolean,
        selectLongPressDelay: Number,
        eventLongPressDelay: Number,
        selectMirror: Boolean,
        eventMaxStack: Number,
        eventMinHeight: Number,
        eventMinWidth: Number,
        eventShortHeight: Number,
        slotEventOverlap: Boolean,
        plugins: identity,
        firstDay: Number,
        dayCount: Number,
        dateAlignment: String,
        dateIncrement: createDuration,
        hiddenDays: identity,
        monthMode: Boolean,
        fixedWeekCount: Boolean,
        validRange: identity,
        visibleRange: identity,
        titleFormat: identity,
        eventInteractive: Boolean,
        // only used by list-view, but languages define the value, so we need it in base options
        noEventsText: String,
        viewHint: identity,
        navLinkHint: identity,
        closeHint: String,
        timeHint: String,
        eventHint: String,
        moreLinkClick: identity,
        moreLinkClassNames: identity,
        moreLinkContent: identity,
        moreLinkDidMount: identity,
        moreLinkWillUnmount: identity,
    };
    // do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
    // raw values.
    let BASE_OPTION_DEFAULTS = {
        eventDisplay: 'auto',
        defaultRangeSeparator: ' - ',
        titleRangeSeparator: ' \u2013 ',
        defaultTimedEventDuration: '01:00:00',
        defaultAllDayEventDuration: { day: 1 },
        forceEventDuration: false,
        nextDayThreshold: '00:00:00',
        dayHeaders: true,
        initialView: '',
        aspectRatio: 1.35,
        headerToolbar: {
            start: 'title',
            center: '',
            end: 'today prev,next',
        },
        weekends: true,
        weekNumbers: false,
        weekNumberCalculation: 'local',
        editable: false,
        nowIndicator: false,
        scrollTime: '06:00:00',
        scrollTimeReset: true,
        slotMinTime: '00:00:00',
        slotMaxTime: '24:00:00',
        showNonCurrentDates: true,
        lazyFetching: true,
        startParam: 'start',
        endParam: 'end',
        timeZoneParam: 'timeZone',
        timeZone: 'local',
        locales: [],
        locale: '',
        themeSystem: 'standard',
        dragRevertDuration: 500,
        dragScroll: true,
        allDayMaintainDuration: false,
        unselectAuto: true,
        dropAccept: '*',
        eventOrder: 'start,-duration,allDay,title',
        dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        handleWindowResize: true,
        windowResizeDelay: 100,
        longPressDelay: 1000,
        eventDragMinDistance: 5,
        expandRows: false,
        navLinks: false,
        selectable: false,
        eventMinHeight: 15,
        eventMinWidth: 30,
        eventShortHeight: 30,
    };
    // calendar listeners
    // ------------------
    let CALENDAR_LISTENER_REFINERS = {
        datesSet: identity,
        eventsSet: identity,
        eventAdd: identity,
        eventChange: identity,
        eventRemove: identity,
        windowResize: identity,
        eventClick: identity,
        eventMouseEnter: identity,
        eventMouseLeave: identity,
        select: identity,
        unselect: identity,
        loading: identity,
        // internal
        _unmount: identity,
        _beforeprint: identity,
        _afterprint: identity,
        _noEventDrop: identity,
        _noEventResize: identity,
        _resize: identity,
        _scrollRequest: identity,
    };
    // calendar-specific options
    // -------------------------
    let CALENDAR_OPTION_REFINERS = {
        buttonText: identity,
        buttonHints: identity,
        views: identity,
        plugins: identity,
        initialEvents: identity,
        events: identity,
        eventSources: identity,
    };
    let COMPLEX_OPTION_COMPARATORS = {
        headerToolbar: isBoolComplexEqual,
        footerToolbar: isBoolComplexEqual,
        buttonText: isBoolComplexEqual,
        buttonHints: isBoolComplexEqual,
        buttonIcons: isBoolComplexEqual,
    };
    function isBoolComplexEqual(a, b) {
        if (typeof a === 'object' && typeof b === 'object' && a && b) { // both non-null objects
            return isPropsEqual(a, b);
        }
        return a === b;
    }
    // view-specific options
    // ---------------------
    let VIEW_OPTION_REFINERS = {
        type: String,
        component: identity,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: identity,
        usesMinMaxTime: Boolean,
        classNames: identity,
        content: identity,
        didMount: identity,
        willUnmount: identity,
    };
    // util funcs
    // ----------------------------------------------------------------------------------------------------
    function mergeRawOptions(optionSets) {
        return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
    }
    function refineProps(input, refiners) {
        let refined = {};
        let extra = {};
        for (let propName in refiners) {
            if (propName in input) {
                refined[propName] = refiners[propName](input[propName]);
            }
        }
        for (let propName in input) {
            if (!(propName in refiners)) {
                extra[propName] = input[propName];
            }
        }
        return { refined: refined, extra: extra };
    }
    function identity(raw) {
        return raw;
    }

    function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
        let eventStore = createEmptyEventStore();
        let eventRefiners = buildEventRefiners(context);
        for (let _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
            let rawEvent = rawEvents_1[_i];
            let tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);
            if (tuple) {
                eventTupleToStore(tuple, eventStore);
            }
        }
        return eventStore;
    }
    function eventTupleToStore(tuple, eventStore) {
        if (eventStore === void 0) { eventStore = createEmptyEventStore(); }
        eventStore.defs[tuple.def.defId] = tuple.def;
        if (tuple.instance) {
            eventStore.instances[tuple.instance.instanceId] = tuple.instance;
        }
        return eventStore;
    }
    // retrieves events that have the same groupId as the instance specified by `instanceId`
    // or they are the same as the instance.
    // why might instanceId not be in the store? an event from another calendar?
    function getRelevantEvents(eventStore, instanceId) {
        let instance = eventStore.instances[instanceId];
        if (instance) {
            let def_1 = eventStore.defs[instance.defId];
            // get events/instances with same group
            let newStore = filterEventStoreDefs(eventStore, function (lookDef) { return isEventDefsGrouped(def_1, lookDef); });
            // add the original
            // TODO: wish we could use eventTupleToStore or something like it
            newStore.defs[def_1.defId] = def_1;
            newStore.instances[instance.instanceId] = instance;
            return newStore;
        }
        return createEmptyEventStore();
    }
    function isEventDefsGrouped(def0, def1) {
        return Boolean(def0.groupId && def0.groupId === def1.groupId);
    }
    function createEmptyEventStore() {
        return { defs: {}, instances: {} };
    }
    function mergeEventStores(store0, store1) {
        return {
            defs: __assign(__assign({}, store0.defs), store1.defs),
            instances: __assign(__assign({}, store0.instances), store1.instances),
        };
    }
    function filterEventStoreDefs(eventStore, filterFunc) {
        let defs = filterHash(eventStore.defs, filterFunc);
        let instances = filterHash(eventStore.instances, function (instance) { return (defs[instance.defId] // still exists?
        ); });
        return { defs: defs, instances: instances };
    }
    function excludeSubEventStore(master, sub) {
        let defs = master.defs, instances = master.instances;
        let filteredDefs = {};
        let filteredInstances = {};
        for (let defId in defs) {
            if (!sub.defs[defId]) { // not explicitly excluded
                filteredDefs[defId] = defs[defId];
            }
        }
        for (let instanceId in instances) {
            if (!sub.instances[instanceId] && // not explicitly excluded
                filteredDefs[instances[instanceId].defId] // def wasn't filtered away
            ) {
                filteredInstances[instanceId] = instances[instanceId];
            }
        }
        return {
            defs: filteredDefs,
            instances: filteredInstances,
        };
    }

    function normalizeConstraint(input, context) {
        if (Array.isArray(input)) {
            return parseEvents(input, null, context, true); // allowOpenRange=true
        }
        if (typeof input === 'object' && input) { // non-null object
            return parseEvents([input], null, context, true); // allowOpenRange=true
        }
        if (input != null) {
            return String(input);
        }
        return null;
    }

    function parseClassNames(raw) {
        if (Array.isArray(raw)) {
            return raw;
        }
        if (typeof raw === 'string') {
            return raw.split(/\s+/);
        }
        return [];
    }

    // TODO: better called "EventSettings" or "EventConfig"
    // TODO: move this file into structs
    // TODO: separate constraint/overlap/allow, because selection uses only that, not other props
    let EVENT_UI_REFINERS = {
        display: String,
        editable: Boolean,
        startEditable: Boolean,
        durationEditable: Boolean,
        constraint: identity,
        overlap: identity,
        allow: identity,
        className: parseClassNames,
        classNames: parseClassNames,
        color: String,
        backgroundColor: String,
        borderColor: String,
        textColor: String,
    };
    let EMPTY_EVENT_UI = {
        display: null,
        startEditable: null,
        durationEditable: null,
        constraints: [],
        overlap: null,
        allows: [],
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        classNames: [],
    };
    function createEventUi(refined, context) {
        let constraint = normalizeConstraint(refined.constraint, context);
        return {
            display: refined.display || null,
            startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
            durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
            constraints: constraint != null ? [constraint] : [],
            overlap: refined.overlap != null ? refined.overlap : null,
            allows: refined.allow != null ? [refined.allow] : [],
            backgroundColor: refined.backgroundColor || refined.color || '',
            borderColor: refined.borderColor || refined.color || '',
            textColor: refined.textColor || '',
            classNames: (refined.className || []).concat(refined.classNames || []), // join singular and plural
        };
    }
    // TODO: prevent against problems with <2 args!
    function combineEventUis(uis) {
        return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
    }
    function combineTwoEventUis(item0, item1) {
        return {
            display: item1.display != null ? item1.display : item0.display,
            startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
            durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
            constraints: item0.constraints.concat(item1.constraints),
            overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
            allows: item0.allows.concat(item1.allows),
            backgroundColor: item1.backgroundColor || item0.backgroundColor,
            borderColor: item1.borderColor || item0.borderColor,
            textColor: item1.textColor || item0.textColor,
            classNames: item0.classNames.concat(item1.classNames),
        };
    }

    let EVENT_NON_DATE_REFINERS = {
        id: String,
        groupId: String,
        title: String,
        url: String,
        interactive: Boolean,
    };
    let EVENT_DATE_REFINERS = {
        start: identity,
        end: identity,
        date: identity,
        allDay: Boolean,
    };
    let EVENT_REFINERS = __assign(__assign(__assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), { extendedProps: identity });
    function parseEvent(raw, eventSource, context, allowOpenRange, refiners) {
        if (refiners === void 0) { refiners = buildEventRefiners(context); }
        let _a = refineEventDef(raw, context, refiners), refined = _a.refined, extra = _a.extra;
        let defaultAllDay = computeIsDefaultAllDay(eventSource, context);
        let recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
        if (recurringRes) {
            let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context);
            def.recurringDef = {
                typeId: recurringRes.typeId,
                typeData: recurringRes.typeData,
                duration: recurringRes.duration,
            };
            return { def: def, instance: null };
        }
        let singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
        if (singleRes) {
            let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context);
            let instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
            return { def: def, instance: instance };
        }
        return null;
    }
    function refineEventDef(raw, context, refiners) {
        if (refiners === void 0) { refiners = buildEventRefiners(context); }
        return refineProps(raw, refiners);
    }
    function buildEventRefiners(context) {
        return __assign(__assign(__assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
    }
    /*
    Will NOT populate extendedProps with the leftover properties.
    Will NOT populate date-related props.
    */
    function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
        let def = {
            title: refined.title || '',
            groupId: refined.groupId || '',
            publicId: refined.id || '',
            url: refined.url || '',
            recurringDef: null,
            defId: guid(),
            sourceId: sourceId,
            allDay: allDay,
            hasEnd: hasEnd,
            interactive: refined.interactive,
            ui: createEventUi(refined, context),
            extendedProps: __assign(__assign({}, (refined.extendedProps || {})), extra),
        };
        for (let _i = 0, _a = context.pluginHooks.eventDefMemberAdders; _i < _a.length; _i++) {
            let memberAdder = _a[_i];
            __assign(def, memberAdder(refined));
        }
        // help out EventApi from having user modify props
        Object.freeze(def.ui.classNames);
        Object.freeze(def.extendedProps);
        return def;
    }
    function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
        let allDay = refined.allDay;
        let startMeta;
        let startMarker = null;
        let hasEnd = false;
        let endMeta;
        let endMarker = null;
        let startInput = refined.start != null ? refined.start : refined.date;
        startMeta = context.dateEnv.createMarkerMeta(startInput);
        if (startMeta) {
            startMarker = startMeta.marker;
        }
        else if (!allowOpenRange) {
            return null;
        }
        if (refined.end != null) {
            endMeta = context.dateEnv.createMarkerMeta(refined.end);
        }
        if (allDay == null) {
            if (defaultAllDay != null) {
                allDay = defaultAllDay;
            }
            else {
                // fall back to the date props LAST
                allDay = (!startMeta || startMeta.isTimeUnspecified) &&
                    (!endMeta || endMeta.isTimeUnspecified);
            }
        }
        if (allDay && startMarker) {
            startMarker = startOfDay(startMarker);
        }
        if (endMeta) {
            endMarker = endMeta.marker;
            if (allDay) {
                endMarker = startOfDay(endMarker);
            }
            if (startMarker && endMarker <= startMarker) {
                endMarker = null;
            }
        }
        if (endMarker) {
            hasEnd = true;
        }
        else if (!allowOpenRange) {
            hasEnd = context.options.forceEventDuration || false;
            endMarker = context.dateEnv.add(startMarker, allDay ?
                context.options.defaultAllDayEventDuration :
                context.options.defaultTimedEventDuration);
        }
        return {
            allDay: allDay,
            hasEnd: hasEnd,
            range: { start: startMarker, end: endMarker },
            forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
            forcedEndTzo: endMeta ? endMeta.forcedTzo : null,
        };
    }
    function computeIsDefaultAllDay(eventSource, context) {
        let res = null;
        if (eventSource) {
            res = eventSource.defaultAllDay;
        }
        if (res == null) {
            res = context.options.defaultAllDay;
        }
        return res;
    }

    /* Date stuff that doesn't belong in datelib core
    ----------------------------------------------------------------------------------------------------------------------*/
    // given a timed range, computes an all-day range that has the same exact duration,
    // but whose start time is aligned with the start of the day.
    function computeAlignedDayRange(timedRange) {
        let dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
        let start = startOfDay(timedRange.start);
        let end = addDays(start, dayCnt);
        return { start: start, end: end };
    }
    // given a timed range, computes an all-day range based on how for the end date bleeds into the next day
    // TODO: give nextDayThreshold a default arg
    function computeVisibleDayRange(timedRange, nextDayThreshold) {
        if (nextDayThreshold === void 0) { nextDayThreshold = createDuration(0); }
        let startDay = null;
        let endDay = null;
        if (timedRange.end) {
            endDay = startOfDay(timedRange.end);
            let endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
            // If the end time is actually inclusively part of the next day and is equal to or
            // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
            // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
            if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
                endDay = addDays(endDay, 1);
            }
        }
        if (timedRange.start) {
            startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
            // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
            if (endDay && endDay <= startDay) {
                endDay = addDays(startDay, 1);
            }
        }
        return { start: startDay, end: endDay };
    }
    // spans from one day into another?
    function isMultiDayRange(range) {
        let visibleRange = computeVisibleDayRange(range);
        return diffDays(visibleRange.start, visibleRange.end) > 1;
    }
    function diffDates(date0, date1, dateEnv, largeUnit) {
        if (largeUnit === 'year') {
            return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
        }
        if (largeUnit === 'month') {
            return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
        }
        return diffDayAndTime(date0, date1); // returns a duration
    }

    function parseRange(input, dateEnv) {
        let start = null;
        let end = null;
        if (input.start) {
            start = dateEnv.createMarker(input.start);
        }
        if (input.end) {
            end = dateEnv.createMarker(input.end);
        }
        if (!start && !end) {
            return null;
        }
        if (start && end && end < start) {
            return null;
        }
        return { start: start, end: end };
    }
    // SIDE-EFFECT: will mutate ranges.
    // Will return a new array result.
    function invertRanges(ranges, constraintRange) {
        let invertedRanges = [];
        let start = constraintRange.start; // the end of the previous range. the start of the new range
        let i;
        let dateRange;
        // ranges need to be in order. required for our date-walking algorithm
        ranges.sort(compareRanges);
        for (i = 0; i < ranges.length; i += 1) {
            dateRange = ranges[i];
            // add the span of time before the event (if there is any)
            if (dateRange.start > start) { // compare millisecond time (skip any ambig logic)
                invertedRanges.push({ start: start, end: dateRange.start });
            }
            if (dateRange.end > start) {
                start = dateRange.end;
            }
        }
        // add the span of time after the last event (if there is any)
        if (start < constraintRange.end) { // compare millisecond time (skip any ambig logic)
            invertedRanges.push({ start: start, end: constraintRange.end });
        }
        return invertedRanges;
    }
    function compareRanges(range0, range1) {
        return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
    }
    function intersectRanges(range0, range1) {
        let start = range0.start, end = range0.end;
        let newRange = null;
        if (range1.start !== null) {
            if (start === null) {
                start = range1.start;
            }
            else {
                start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
            }
        }
        if (range1.end != null) {
            if (end === null) {
                end = range1.end;
            }
            else {
                end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
            }
        }
        if (start === null || end === null || start < end) {
            newRange = { start: start, end: end };
        }
        return newRange;
    }
    function rangesEqual(range0, range1) {
        return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) &&
            (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
    }
    function rangesIntersect(range0, range1) {
        return (range0.end === null || range1.start === null || range0.end > range1.start) &&
            (range0.start === null || range1.end === null || range0.start < range1.end);
    }
    function rangeContainsRange(outerRange, innerRange) {
        return (outerRange.start === null || (innerRange.start !== null && innerRange.start >= outerRange.start)) &&
            (outerRange.end === null || (innerRange.end !== null && innerRange.end <= outerRange.end));
    }
    function rangeContainsMarker(range, date) {
        return (range.start === null || date >= range.start) &&
            (range.end === null || date < range.end);
    }
    // If the given date is not within the given range, move it inside.
    // (If it's past the end, make it one millisecond before the end).
    function constrainMarkerToRange(date, range) {
        if (range.start != null && date < range.start) {
            return range.start;
        }
        if (range.end != null && date >= range.end) {
            return new Date(range.end.valueOf() - 1);
        }
        return date;
    }

    /*
    Specifying nextDayThreshold signals that all-day ranges should be sliced.
    */
    function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
        let inverseBgByGroupId = {};
        let inverseBgByDefId = {};
        let defByGroupId = {};
        let bgRanges = [];
        let fgRanges = [];
        let eventUis = compileEventUis(eventStore.defs, eventUiBases);
        for (let defId in eventStore.defs) {
            let def = eventStore.defs[defId];
            let ui = eventUis[def.defId];
            if (ui.display === 'inverse-background') {
                if (def.groupId) {
                    inverseBgByGroupId[def.groupId] = [];
                    if (!defByGroupId[def.groupId]) {
                        defByGroupId[def.groupId] = def;
                    }
                }
                else {
                    inverseBgByDefId[defId] = [];
                }
            }
        }
        for (let instanceId in eventStore.instances) {
            let instance = eventStore.instances[instanceId];
            let def = eventStore.defs[instance.defId];
            let ui = eventUis[def.defId];
            let origRange = instance.range;
            let normalRange = (!def.allDay && nextDayThreshold) ?
                computeVisibleDayRange(origRange, nextDayThreshold) :
                origRange;
            let slicedRange = intersectRanges(normalRange, framingRange);
            if (slicedRange) {
                if (ui.display === 'inverse-background') {
                    if (def.groupId) {
                        inverseBgByGroupId[def.groupId].push(slicedRange);
                    }
                    else {
                        inverseBgByDefId[instance.defId].push(slicedRange);
                    }
                }
                else if (ui.display !== 'none') {
                    (ui.display === 'background' ? bgRanges : fgRanges).push({
                        def: def,
                        ui: ui,
                        instance: instance,
                        range: slicedRange,
                        isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
                        isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf(),
                    });
                }
            }
        }
        for (let groupId in inverseBgByGroupId) { // BY GROUP
            let ranges = inverseBgByGroupId[groupId];
            let invertedRanges = invertRanges(ranges, framingRange);
            for (let _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
                let invertedRange = invertedRanges_1[_i];
                let def = defByGroupId[groupId];
                let ui = eventUis[def.defId];
                bgRanges.push({
                    def: def,
                    ui: ui,
                    instance: null,
                    range: invertedRange,
                    isStart: false,
                    isEnd: false,
                });
            }
        }
        for (let defId in inverseBgByDefId) {
            let ranges = inverseBgByDefId[defId];
            let invertedRanges = invertRanges(ranges, framingRange);
            for (let _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
                let invertedRange = invertedRanges_2[_a];
                bgRanges.push({
                    def: eventStore.defs[defId],
                    ui: eventUis[defId],
                    instance: null,
                    range: invertedRange,
                    isStart: false,
                    isEnd: false,
                });
            }
        }
        return { bg: bgRanges, fg: fgRanges };
    }
    function hasBgRendering(def) {
        return def.ui.display === 'background' || def.ui.display === 'inverse-background';
    }
    function setElSeg(el, seg) {
        el.fcSeg = seg;
    }
    function getElSeg(el) {
        return el.fcSeg ||
            el.parentNode.fcSeg || // for the harness
            null;
    }
    // event ui computation
    function compileEventUis(eventDefs, eventUiBases) {
        return mapHash(eventDefs, function (eventDef) { return compileEventUi(eventDef, eventUiBases); });
    }
    function compileEventUi(eventDef, eventUiBases) {
        let uis = [];
        if (eventUiBases['']) {
            uis.push(eventUiBases['']);
        }
        if (eventUiBases[eventDef.defId]) {
            uis.push(eventUiBases[eventDef.defId]);
        }
        uis.push(eventDef.ui);
        return combineEventUis(uis);
    }
    function sortEventSegs(segs, eventOrderSpecs) {
        let objs = segs.map(buildSegCompareObj);
        objs.sort(function (obj0, obj1) { return compareByFieldSpecs(obj0, obj1, eventOrderSpecs); });
        return objs.map(function (c) { return c._seg; });
    }
    // returns a object with all primitive props that can be compared
    function buildSegCompareObj(seg) {
        let eventRange = seg.eventRange;
        let eventDef = eventRange.def;
        let range = eventRange.instance ? eventRange.instance.range : eventRange.range;
        let start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
        let end = range.end ? range.end.valueOf() : 0; // "
        return __assign(__assign(__assign({}, eventDef.extendedProps), eventDef), { id: eventDef.publicId, start: start,
            end: end, duration: end - start, allDay: Number(eventDef.allDay), _seg: seg });
    }
    function computeSegDraggable(seg, context) {
        let pluginHooks = context.pluginHooks;
        let transformers = pluginHooks.isDraggableTransformers;
        let _a = seg.eventRange, def = _a.def, ui = _a.ui;
        let val = ui.startEditable;
        for (let _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
            let transformer = transformers_1[_i];
            val = transformer(val, def, ui, context);
        }
        return val;
    }
    function computeSegStartResizable(seg, context) {
        return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
    }
    function computeSegEndResizable(seg, context) {
        return seg.isEnd && seg.eventRange.ui.durationEditable;
    }
    function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, // defaults to true
    defaultDisplayEventEnd, // defaults to true
    startOverride, endOverride) {
        let dateEnv = context.dateEnv, options = context.options;
        let displayEventTime = options.displayEventTime, displayEventEnd = options.displayEventEnd;
        let eventDef = seg.eventRange.def;
        let eventInstance = seg.eventRange.instance;
        if (displayEventTime == null) {
            displayEventTime = defaultDisplayEventTime !== false;
        }
        if (displayEventEnd == null) {
            displayEventEnd = defaultDisplayEventEnd !== false;
        }
        let wholeEventStart = eventInstance.range.start;
        let wholeEventEnd = eventInstance.range.end;
        let segStart = startOverride || seg.start || seg.eventRange.range.start;
        let segEnd = endOverride || seg.end || seg.eventRange.range.end;
        let isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
        let isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
        if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
            segStart = isStartDay ? wholeEventStart : segStart;
            segEnd = isEndDay ? wholeEventEnd : segEnd;
            if (displayEventEnd && eventDef.hasEnd) {
                return dateEnv.formatRange(segStart, segEnd, timeFormat, {
                    forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
                    forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo,
                });
            }
            return dateEnv.format(segStart, timeFormat, {
                forcedTzo: startOverride ? null : eventInstance.forcedStartTzo, // nooooo, same
            });
        }
        return '';
    }
    function getSegMeta(seg, todayRange, nowDate) {
        let segRange = seg.eventRange.range;
        return {
            isPast: segRange.end < (nowDate || todayRange.start),
            isFuture: segRange.start >= (nowDate || todayRange.end),
            isToday: todayRange && rangeContainsMarker(todayRange, segRange.start),
        };
    }
    function getEventClassNames(props) {
        let classNames = ['fc-event'];
        if (props.isMirror) {
            classNames.push('fc-event-mirror');
        }
        if (props.isDraggable) {
            classNames.push('fc-event-draggable');
        }
        if (props.isStartResizable || props.isEndResizable) {
            classNames.push('fc-event-resizable');
        }
        if (props.isDragging) {
            classNames.push('fc-event-dragging');
        }
        if (props.isResizing) {
            classNames.push('fc-event-resizing');
        }
        if (props.isSelected) {
            classNames.push('fc-event-selected');
        }
        if (props.isStart) {
            classNames.push('fc-event-start');
        }
        if (props.isEnd) {
            classNames.push('fc-event-end');
        }
        if (props.isPast) {
            classNames.push('fc-event-past');
        }
        if (props.isToday) {
            classNames.push('fc-event-today');
        }
        if (props.isFuture) {
            classNames.push('fc-event-future');
        }
        return classNames;
    }
    function buildEventRangeKey(eventRange) {
        return eventRange.instance
            ? eventRange.instance.instanceId
            : eventRange.def.defId + ":" + eventRange.range.start.toISOString();
        // inverse-background events don't have specific instances. TODO: better solution
    }
    function getSegAnchorAttrs(seg, context) {
        let _a = seg.eventRange, def = _a.def, instance = _a.instance;
        let url = def.url;
        if (url) {
            return { href: url };
        }
        let emitter = context.emitter, options = context.options;
        let eventInteractive = options.eventInteractive;
        if (eventInteractive == null) {
            eventInteractive = def.interactive;
            if (eventInteractive == null) {
                eventInteractive = Boolean(emitter.hasHandlers('eventClick'));
            }
        }
        // mock what happens in EventClicking
        if (eventInteractive) {
            // only attach keyboard-related handlers because click handler is already done in EventClicking
            return createAriaKeyboardAttrs(function (ev) {
                emitter.trigger('eventClick', {
                    el: ev.target,
                    event: new EventApi(context, def, instance),
                    jsEvent: ev,
                    view: context.viewApi,
                });
            });
        }
        return {};
    }

    let STANDARD_PROPS = {
        start: identity,
        end: identity,
        allDay: Boolean,
    };
    function parseDateSpan(raw, dateEnv, defaultDuration) {
        let span = parseOpenDateSpan(raw, dateEnv);
        let range = span.range;
        if (!range.start) {
            return null;
        }
        if (!range.end) {
            if (defaultDuration == null) {
                return null;
            }
            range.end = dateEnv.add(range.start, defaultDuration);
        }
        return span;
    }
    /*
    TODO: somehow combine with parseRange?
    Will return null if the start/end props were present but parsed invalidly.
    */
    function parseOpenDateSpan(raw, dateEnv) {
        let _a = refineProps(raw, STANDARD_PROPS), standardProps = _a.refined, extra = _a.extra;
        let startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
        let endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
        let allDay = standardProps.allDay;
        if (allDay == null) {
            allDay = (startMeta && startMeta.isTimeUnspecified) &&
                (!endMeta || endMeta.isTimeUnspecified);
        }
        return __assign({ range: {
                start: startMeta ? startMeta.marker : null,
                end: endMeta ? endMeta.marker : null,
            }, allDay: allDay }, extra);
    }
    function isDateSpansEqual(span0, span1) {
        return rangesEqual(span0.range, span1.range) &&
            span0.allDay === span1.allDay &&
            isSpanPropsEqual(span0, span1);
    }
    // the NON-DATE-RELATED props
    function isSpanPropsEqual(span0, span1) {
        for (let propName in span1) {
            if (propName !== 'range' && propName !== 'allDay') {
                if (span0[propName] !== span1[propName]) {
                    return false;
                }
            }
        }
        // are there any props that span0 has that span1 DOESN'T have?
        // both have range/allDay, so no need to special-case.
        for (let propName in span0) {
            if (!(propName in span1)) {
                return false;
            }
        }
        return true;
    }
    function buildDateSpanApi(span, dateEnv) {
        return __assign(__assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), { allDay: span.allDay });
    }
    function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
        return __assign(__assign({}, buildRangeApi(range, dateEnv, omitTime)), { timeZone: dateEnv.timeZone });
    }
    function buildRangeApi(range, dateEnv, omitTime) {
        return {
            start: dateEnv.toDate(range.start),
            end: dateEnv.toDate(range.end),
            startStr: dateEnv.formatIso(range.start, { omitTime: omitTime }),
            endStr: dateEnv.formatIso(range.end, { omitTime: omitTime }),
        };
    }
    function fabricateEventRange(dateSpan, eventUiBases, context) {
        let res = refineEventDef({ editable: false }, context);
        let def = parseEventDef(res.refined, res.extra, '', // sourceId
        dateSpan.allDay, true, // hasEnd
        context);
        return {
            def: def,
            ui: compileEventUi(def, eventUiBases),
            instance: createEventInstance(def.defId, dateSpan.range),
            range: dateSpan.range,
            isStart: true,
            isEnd: true,
        };
    }

    function triggerDateSelect(selection, pev, context) {
        context.emitter.trigger('select', __assign(__assign({}, buildDateSpanApiWithContext(selection, context)), { jsEvent: pev ? pev.origEvent : null, view: context.viewApi || context.calendarApi.view }));
    }
    function triggerDateUnselect(pev, context) {
        context.emitter.trigger('unselect', {
            jsEvent: pev ? pev.origEvent : null,
            view: context.viewApi || context.calendarApi.view,
        });
    }
    function buildDateSpanApiWithContext(dateSpan, context) {
        let props = {};
        for (let _i = 0, _a = context.pluginHooks.dateSpanTransforms; _i < _a.length; _i++) {
            let transform = _a[_i];
            __assign(props, transform(dateSpan, context));
        }
        __assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
        return props;
    }
    // Given an event's allDay status and start date, return what its fallback end date should be.
    // TODO: rename to computeDefaultEventEnd
    function getDefaultEventEnd(allDay, marker, context) {
        let dateEnv = context.dateEnv, options = context.options;
        let end = marker;
        if (allDay) {
            end = startOfDay(end);
            end = dateEnv.add(end, options.defaultAllDayEventDuration);
        }
        else {
            end = dateEnv.add(end, options.defaultTimedEventDuration);
        }
        return end;
    }

    // applies the mutation to ALL defs/instances within the event store
    function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
        let eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
        let dest = createEmptyEventStore();
        for (let defId in eventStore.defs) {
            let def = eventStore.defs[defId];
            dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
        }
        for (let instanceId in eventStore.instances) {
            let instance = eventStore.instances[instanceId];
            let def = dest.defs[instance.defId]; // important to grab the newly modified def
            dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
        }
        return dest;
    }
    function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
        let standardProps = mutation.standardProps || {};
        // if hasEnd has not been specified, guess a good value based on deltas.
        // if duration will change, there's no way the default duration will persist,
        // and thus, we need to mark the event as having a real end
        if (standardProps.hasEnd == null &&
            eventConfig.durationEditable &&
            (mutation.startDelta || mutation.endDelta)) {
            standardProps.hasEnd = true; // TODO: is this mutation okay?
        }
        let copy = __assign(__assign(__assign({}, eventDef), standardProps), { ui: __assign(__assign({}, eventDef.ui), standardProps.ui) });
        if (mutation.extendedProps) {
            copy.extendedProps = __assign(__assign({}, copy.extendedProps), mutation.extendedProps);
        }
        for (let _i = 0, _a = context.pluginHooks.eventDefMutationAppliers; _i < _a.length; _i++) {
            let applier = _a[_i];
            applier(copy, mutation, context);
        }
        if (!copy.hasEnd && context.options.forceEventDuration) {
            copy.hasEnd = true;
        }
        return copy;
    }
    function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
    eventConfig, mutation, context) {
        let dateEnv = context.dateEnv;
        let forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
        let clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
        let copy = __assign({}, eventInstance);
        if (forceAllDay) {
            copy.range = computeAlignedDayRange(copy.range);
        }
        if (mutation.datesDelta && eventConfig.startEditable) {
            copy.range = {
                start: dateEnv.add(copy.range.start, mutation.datesDelta),
                end: dateEnv.add(copy.range.end, mutation.datesDelta),
            };
        }
        if (mutation.startDelta && eventConfig.durationEditable) {
            copy.range = {
                start: dateEnv.add(copy.range.start, mutation.startDelta),
                end: copy.range.end,
            };
        }
        if (mutation.endDelta && eventConfig.durationEditable) {
            copy.range = {
                start: copy.range.start,
                end: dateEnv.add(copy.range.end, mutation.endDelta),
            };
        }
        if (clearEnd) {
            copy.range = {
                start: copy.range.start,
                end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context),
            };
        }
        // in case event was all-day but the supplied deltas were not
        // better util for this?
        if (eventDef.allDay) {
            copy.range = {
                start: startOfDay(copy.range.start),
                end: startOfDay(copy.range.end),
            };
        }
        // handle invalid durations
        if (copy.range.end < copy.range.start) {
            copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
        }
        return copy;
    }

    // no public types yet. when there are, export from:
    // import {} from './api-type-deps'
    let ViewApi = /** @class */ (function () {
        function ViewApi(type, getCurrentData, dateEnv) {
            this.type = type;
            this.getCurrentData = getCurrentData;
            this.dateEnv = dateEnv;
        }
        Object.defineProperty(ViewApi.prototype, "calendar", {
            get: function () {
                return this.getCurrentData().calendarApi;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ViewApi.prototype, "title", {
            get: function () {
                return this.getCurrentData().viewTitle;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ViewApi.prototype, "activeStart", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ViewApi.prototype, "activeEnd", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ViewApi.prototype, "currentStart", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ViewApi.prototype, "currentEnd", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
            },
            enumerable: false,
            configurable: true
        });
        ViewApi.prototype.getOption = function (name) {
            return this.getCurrentData().options[name]; // are the view-specific options
        };
        return ViewApi;
    }());

    let EVENT_SOURCE_REFINERS$1 = {
        id: String,
        defaultAllDay: Boolean,
        url: String,
        format: String,
        events: identity,
        eventDataTransform: identity,
        // for any network-related sources
        success: identity,
        failure: identity,
    };
    function parseEventSource(raw, context, refiners) {
        if (refiners === void 0) { refiners = buildEventSourceRefiners(context); }
        let rawObj;
        if (typeof raw === 'string') {
            rawObj = { url: raw };
        }
        else if (typeof raw === 'function' || Array.isArray(raw)) {
            rawObj = { events: raw };
        }
        else if (typeof raw === 'object' && raw) { // not null
            rawObj = raw;
        }
        if (rawObj) {
            let _a = refineProps(rawObj, refiners), refined = _a.refined, extra = _a.extra;
            let metaRes = buildEventSourceMeta(refined, context);
            if (metaRes) {
                return {
                    _raw: raw,
                    isFetching: false,
                    latestFetchId: '',
                    fetchRange: null,
                    defaultAllDay: refined.defaultAllDay,
                    eventDataTransform: refined.eventDataTransform,
                    success: refined.success,
                    failure: refined.failure,
                    publicId: refined.id || '',
                    sourceId: guid(),
                    sourceDefId: metaRes.sourceDefId,
                    meta: metaRes.meta,
                    ui: createEventUi(refined, context),
                    extendedProps: extra,
                };
            }
        }
        return null;
    }
    function buildEventSourceRefiners(context) {
        return __assign(__assign(__assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS$1), context.pluginHooks.eventSourceRefiners);
    }
    function buildEventSourceMeta(raw, context) {
        let defs = context.pluginHooks.eventSourceDefs;
        for (let i = defs.length - 1; i >= 0; i -= 1) { // later-added plugins take precedence
            let def = defs[i];
            let meta = def.parseMeta(raw);
            if (meta) {
                return { sourceDefId: i, meta: meta };
            }
        }
        return null;
    }

    function reduceCurrentDate(currentDate, action) {
        switch (action.type) {
            case 'CHANGE_DATE':
                return action.dateMarker;
            default:
                return currentDate;
        }
    }
    function getInitialDate(options, dateEnv) {
        let initialDateInput = options.initialDate;
        // compute the initial ambig-timezone date
        if (initialDateInput != null) {
            return dateEnv.createMarker(initialDateInput);
        }
        return getNow(options.now, dateEnv); // getNow already returns unzoned
    }
    function getNow(nowInput, dateEnv) {
        if (typeof nowInput === 'function') {
            nowInput = nowInput();
        }
        if (nowInput == null) {
            return dateEnv.createNowMarker();
        }
        return dateEnv.createMarker(nowInput);
    }

    let CalendarApi = /** @class */ (function () {
        function CalendarApi() {
        }
        CalendarApi.prototype.getCurrentData = function () {
            return this.currentDataManager.getCurrentData();
        };
        CalendarApi.prototype.dispatch = function (action) {
            return this.currentDataManager.dispatch(action);
        };
        Object.defineProperty(CalendarApi.prototype, "view", {
            get: function () { return this.getCurrentData().viewApi; } // for public API
            ,
            enumerable: false,
            configurable: true
        });
        CalendarApi.prototype.batchRendering = function (callback) {
            callback();
        };
        CalendarApi.prototype.updateSize = function () {
            this.trigger('_resize', true);
        };
        // Options
        // -----------------------------------------------------------------------------------------------------------------
        CalendarApi.prototype.setOption = function (name, val) {
            this.dispatch({
                type: 'SET_OPTION',
                optionName: name,
                rawOptionValue: val,
            });
        };
        CalendarApi.prototype.getOption = function (name) {
            return this.currentDataManager.currentCalendarOptionsInput[name];
        };
        CalendarApi.prototype.getAvailableLocaleCodes = function () {
            return Object.keys(this.getCurrentData().availableRawLocales);
        };
        // Trigger
        // -----------------------------------------------------------------------------------------------------------------
        CalendarApi.prototype.on = function (handlerName, handler) {
            let currentDataManager = this.currentDataManager;
            if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
                currentDataManager.emitter.on(handlerName, handler);
            }
            else {
                console.warn("Unknown listener name '" + handlerName + "'");
            }
        };
        CalendarApi.prototype.off = function (handlerName, handler) {
            this.currentDataManager.emitter.off(handlerName, handler);
        };
        // not meant for public use
        CalendarApi.prototype.trigger = function (handlerName) {
            let _a;
            let args = [];
            for (let _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            (_a = this.currentDataManager.emitter).trigger.apply(_a, __spreadArray([handlerName], args));
        };
        // View
        // -----------------------------------------------------------------------------------------------------------------
        CalendarApi.prototype.changeView = function (viewType, dateOrRange) {
            let _this = this;
            this.batchRendering(function () {
                _this.unselect();
                if (dateOrRange) {
                    if (dateOrRange.start && dateOrRange.end) { // a range
                        _this.dispatch({
                            type: 'CHANGE_VIEW_TYPE',
                            viewType: viewType,
                        });
                        _this.dispatch({
                            type: 'SET_OPTION',
                            optionName: 'visibleRange',
                            rawOptionValue: dateOrRange,
                        });
                    }
                    else {
                        let dateEnv = _this.getCurrentData().dateEnv;
                        _this.dispatch({
                            type: 'CHANGE_VIEW_TYPE',
                            viewType: viewType,
                            dateMarker: dateEnv.createMarker(dateOrRange),
                        });
                    }
                }
                else {
                    _this.dispatch({
                        type: 'CHANGE_VIEW_TYPE',
                        viewType: viewType,
                    });
                }
            });
        };
        // Forces navigation to a view for the given date.
        // `viewType` can be a specific view name or a generic one like "week" or "day".
        // needs to change
        CalendarApi.prototype.zoomTo = function (dateMarker, viewType) {
            let state = this.getCurrentData();
            let spec;
            viewType = viewType || 'day'; // day is default zoom
            spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
            this.unselect();
            if (spec) {
                this.dispatch({
                    type: 'CHANGE_VIEW_TYPE',
                    viewType: spec.type,
                    dateMarker: dateMarker,
                });
            }
            else {
                this.dispatch({
                    type: 'CHANGE_DATE',
                    dateMarker: dateMarker,
                });
            }
        };
        // Given a duration singular unit, like "week" or "day", finds a matching view spec.
        // Preference is given to views that have corresponding buttons.
        CalendarApi.prototype.getUnitViewSpec = function (unit) {
            let _a = this.getCurrentData(), viewSpecs = _a.viewSpecs, toolbarConfig = _a.toolbarConfig;
            let viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
            let i;
            let spec;
            for (let viewType in viewSpecs) {
                viewTypes.push(viewType);
            }
            for (i = 0; i < viewTypes.length; i += 1) {
                spec = viewSpecs[viewTypes[i]];
                if (spec) {
                    if (spec.singleUnit === unit) {
                        return spec;
                    }
                }
            }
            return null;
        };
        // Current Date
        // -----------------------------------------------------------------------------------------------------------------
        CalendarApi.prototype.prev = function () {
            this.unselect();
            this.dispatch({ type: 'PREV' });
        };
        CalendarApi.prototype.next = function () {
            this.unselect();
            this.dispatch({ type: 'NEXT' });
        };
        CalendarApi.prototype.prevYear = function () {
            let state = this.getCurrentData();
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: state.dateEnv.addYears(state.currentDate, -1),
            });
        };
        CalendarApi.prototype.nextYear = function () {
            let state = this.getCurrentData();
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: state.dateEnv.addYears(state.currentDate, 1),
            });
        };
        CalendarApi.prototype.today = function () {
            let state = this.getCurrentData();
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: getNow(state.calendarOptions.now, state.dateEnv),
            });
        };
        CalendarApi.prototype.gotoDate = function (zonedDateInput) {
            let state = this.getCurrentData();
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: state.dateEnv.createMarker(zonedDateInput),
            });
        };
        CalendarApi.prototype.incrementDate = function (deltaInput) {
            let state = this.getCurrentData();
            let delta = createDuration(deltaInput);
            if (delta) { // else, warn about invalid input?
                this.unselect();
                this.dispatch({
                    type: 'CHANGE_DATE',
                    dateMarker: state.dateEnv.add(state.currentDate, delta),
                });
            }
        };
        // for external API
        CalendarApi.prototype.getDate = function () {
            let state = this.getCurrentData();
            return state.dateEnv.toDate(state.currentDate);
        };
        // Date Formatting Utils
        // -----------------------------------------------------------------------------------------------------------------
        CalendarApi.prototype.formatDate = function (d, formatter) {
            let dateEnv = this.getCurrentData().dateEnv;
            return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
        };
        // `settings` is for formatter AND isEndExclusive
        CalendarApi.prototype.formatRange = function (d0, d1, settings) {
            let dateEnv = this.getCurrentData().dateEnv;
            return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
        };
        CalendarApi.prototype.formatIso = function (d, omitTime) {
            let dateEnv = this.getCurrentData().dateEnv;
            return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime: omitTime });
        };
        // Date Selection / Event Selection / DayClick
        // -----------------------------------------------------------------------------------------------------------------
        // this public method receives start/end dates in any format, with any timezone
        // NOTE: args were changed from v3
        CalendarApi.prototype.select = function (dateOrObj, endDate) {
            let selectionInput;
            if (endDate == null) {
                if (dateOrObj.start != null) {
                    selectionInput = dateOrObj;
                }
                else {
                    selectionInput = {
                        start: dateOrObj,
                        end: null,
                    };
                }
            }
            else {
                selectionInput = {
                    start: dateOrObj,
                    end: endDate,
                };
            }
            let state = this.getCurrentData();
            let selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({ days: 1 }));
            if (selection) { // throw parse error otherwise?
                this.dispatch({ type: 'SELECT_DATES', selection: selection });
                triggerDateSelect(selection, null, state);
            }
        };
        // public method
        CalendarApi.prototype.unselect = function (pev) {
            let state = this.getCurrentData();
            if (state.dateSelection) {
                this.dispatch({ type: 'UNSELECT_DATES' });
                triggerDateUnselect(pev, state);
            }
        };
        // Public Events API
        // -----------------------------------------------------------------------------------------------------------------
        CalendarApi.prototype.addEvent = function (eventInput, sourceInput) {
            if (eventInput instanceof EventApi) {
                let def = eventInput._def;
                let instance = eventInput._instance;
                let currentData = this.getCurrentData();
                // not already present? don't want to add an old snapshot
                if (!currentData.eventStore.defs[def.defId]) {
                    this.dispatch({
                        type: 'ADD_EVENTS',
                        eventStore: eventTupleToStore({ def: def, instance: instance }), // TODO: better util for two args?
                    });
                    this.triggerEventAdd(eventInput);
                }
                return eventInput;
            }
            let state = this.getCurrentData();
            let eventSource;
            if (sourceInput instanceof EventSourceApi) {
                eventSource = sourceInput.internalEventSource;
            }
            else if (typeof sourceInput === 'boolean') {
                if (sourceInput) { // true. part of the first event source
                    eventSource = hashValuesToArray(state.eventSources)[0];
                }
            }
            else if (sourceInput != null) { // an ID. accepts a number too
                let sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
                if (!sourceApi) {
                    console.warn("Could not find an event source with ID \"" + sourceInput + "\""); // TODO: test
                    return null;
                }
                eventSource = sourceApi.internalEventSource;
            }
            let tuple = parseEvent(eventInput, eventSource, state, false);
            if (tuple) {
                let newEventApi = new EventApi(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
                this.dispatch({
                    type: 'ADD_EVENTS',
                    eventStore: eventTupleToStore(tuple),
                });
                this.triggerEventAdd(newEventApi);
                return newEventApi;
            }
            return null;
        };
        CalendarApi.prototype.triggerEventAdd = function (eventApi) {
            let _this = this;
            let emitter = this.getCurrentData().emitter;
            emitter.trigger('eventAdd', {
                event: eventApi,
                relatedEvents: [],
                revert: function () {
                    _this.dispatch({
                        type: 'REMOVE_EVENTS',
                        eventStore: eventApiToStore(eventApi),
                    });
                },
            });
        };
        // TODO: optimize
        CalendarApi.prototype.getEventById = function (id) {
            let state = this.getCurrentData();
            let _a = state.eventStore, defs = _a.defs, instances = _a.instances;
            id = String(id);
            for (let defId in defs) {
                let def = defs[defId];
                if (def.publicId === id) {
                    if (def.recurringDef) {
                        return new EventApi(state, def, null);
                    }
                    for (let instanceId in instances) {
                        let instance = instances[instanceId];
                        if (instance.defId === def.defId) {
                            return new EventApi(state, def, instance);
                        }
                    }
                }
            }
            return null;
        };
        CalendarApi.prototype.getEvents = function () {
            let currentData = this.getCurrentData();
            return buildEventApis(currentData.eventStore, currentData);
        };
        CalendarApi.prototype.removeAllEvents = function () {
            this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
        };
        // Public Event Sources API
        // -----------------------------------------------------------------------------------------------------------------
        CalendarApi.prototype.getEventSources = function () {
            let state = this.getCurrentData();
            let sourceHash = state.eventSources;
            let sourceApis = [];
            for (let internalId in sourceHash) {
                sourceApis.push(new EventSourceApi(state, sourceHash[internalId]));
            }
            return sourceApis;
        };
        CalendarApi.prototype.getEventSourceById = function (id) {
            let state = this.getCurrentData();
            let sourceHash = state.eventSources;
            id = String(id);
            for (let sourceId in sourceHash) {
                if (sourceHash[sourceId].publicId === id) {
                    return new EventSourceApi(state, sourceHash[sourceId]);
                }
            }
            return null;
        };
        CalendarApi.prototype.addEventSource = function (sourceInput) {
            let state = this.getCurrentData();
            if (sourceInput instanceof EventSourceApi) {
                // not already present? don't want to add an old snapshot
                if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
                    this.dispatch({
                        type: 'ADD_EVENT_SOURCES',
                        sources: [sourceInput.internalEventSource],
                    });
                }
                return sourceInput;
            }
            let eventSource = parseEventSource(sourceInput, state);
            if (eventSource) { // TODO: error otherwise?
                this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [eventSource] });
                return new EventSourceApi(state, eventSource);
            }
            return null;
        };
        CalendarApi.prototype.removeAllEventSources = function () {
            this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
        };
        CalendarApi.prototype.refetchEvents = function () {
            this.dispatch({ type: 'FETCH_EVENT_SOURCES', isRefetch: true });
        };
        // Scroll
        // -----------------------------------------------------------------------------------------------------------------
        CalendarApi.prototype.scrollToTime = function (timeInput) {
            let time = createDuration(timeInput);
            if (time) {
                this.trigger('_scrollRequest', { time: time });
            }
        };
        return CalendarApi;
    }());

    let EventApi = /** @class */ (function () {
        // instance will be null if expressing a recurring event that has no current instances,
        // OR if trying to validate an incoming external event that has no dates assigned
        function EventApi(context, def, instance) {
            this._context = context;
            this._def = def;
            this._instance = instance || null;
        }
        /*
        TODO: make event struct more responsible for this
        */
        EventApi.prototype.setProp = function (name, val) {
            let _a, _b;
            if (name in EVENT_DATE_REFINERS) {
                console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.');
                // TODO: make proper aliasing system?
            }
            else if (name === 'id') {
                val = EVENT_NON_DATE_REFINERS[name](val);
                this.mutate({
                    standardProps: { publicId: val }, // hardcoded internal name
                });
            }
            else if (name in EVENT_NON_DATE_REFINERS) {
                val = EVENT_NON_DATE_REFINERS[name](val);
                this.mutate({
                    standardProps: (_a = {}, _a[name] = val, _a),
                });
            }
            else if (name in EVENT_UI_REFINERS) {
                let ui = EVENT_UI_REFINERS[name](val);
                if (name === 'color') {
                    ui = { backgroundColor: val, borderColor: val };
                }
                else if (name === 'editable') {
                    ui = { startEditable: val, durationEditable: val };
                }
                else {
                    ui = (_b = {}, _b[name] = val, _b);
                }
                this.mutate({
                    standardProps: { ui: ui },
                });
            }
            else {
                console.warn("Could not set prop '" + name + "'. Use setExtendedProp instead.");
            }
        };
        EventApi.prototype.setExtendedProp = function (name, val) {
            let _a;
            this.mutate({
                extendedProps: (_a = {}, _a[name] = val, _a),
            });
        };
        EventApi.prototype.setStart = function (startInput, options) {
            if (options === void 0) { options = {}; }
            let dateEnv = this._context.dateEnv;
            let start = dateEnv.createMarker(startInput);
            if (start && this._instance) { // TODO: warning if parsed bad
                let instanceRange = this._instance.range;
                let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
                if (options.maintainDuration) {
                    this.mutate({ datesDelta: startDelta });
                }
                else {
                    this.mutate({ startDelta: startDelta });
                }
            }
        };
        EventApi.prototype.setEnd = function (endInput, options) {
            if (options === void 0) { options = {}; }
            let dateEnv = this._context.dateEnv;
            let end;
            if (endInput != null) {
                end = dateEnv.createMarker(endInput);
                if (!end) {
                    return; // TODO: warning if parsed bad
                }
            }
            if (this._instance) {
                if (end) {
                    let endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
                    this.mutate({ endDelta: endDelta });
                }
                else {
                    this.mutate({ standardProps: { hasEnd: false } });
                }
            }
        };
        EventApi.prototype.setDates = function (startInput, endInput, options) {
            if (options === void 0) { options = {}; }
            let dateEnv = this._context.dateEnv;
            let standardProps = { allDay: options.allDay };
            let start = dateEnv.createMarker(startInput);
            let end;
            if (!start) {
                return; // TODO: warning if parsed bad
            }
            if (endInput != null) {
                end = dateEnv.createMarker(endInput);
                if (!end) { // TODO: warning if parsed bad
                    return;
                }
            }
            if (this._instance) {
                let instanceRange = this._instance.range;
                // when computing the diff for an event being converted to all-day,
                // compute diff off of the all-day values the way event-mutation does.
                if (options.allDay === true) {
                    instanceRange = computeAlignedDayRange(instanceRange);
                }
                let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
                if (end) {
                    let endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
                    if (durationsEqual(startDelta, endDelta)) {
                        this.mutate({ datesDelta: startDelta, standardProps: standardProps });
                    }
                    else {
                        this.mutate({ startDelta: startDelta, endDelta: endDelta, standardProps: standardProps });
                    }
                }
                else { // means "clear the end"
                    standardProps.hasEnd = false;
                    this.mutate({ datesDelta: startDelta, standardProps: standardProps });
                }
            }
        };
        EventApi.prototype.moveStart = function (deltaInput) {
            let delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ startDelta: delta });
            }
        };
        EventApi.prototype.moveEnd = function (deltaInput) {
            let delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ endDelta: delta });
            }
        };
        EventApi.prototype.moveDates = function (deltaInput) {
            let delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ datesDelta: delta });
            }
        };
        EventApi.prototype.setAllDay = function (allDay, options) {
            if (options === void 0) { options = {}; }
            let standardProps = { allDay: allDay };
            let maintainDuration = options.maintainDuration;
            if (maintainDuration == null) {
                maintainDuration = this._context.options.allDayMaintainDuration;
            }
            if (this._def.allDay !== allDay) {
                standardProps.hasEnd = maintainDuration;
            }
            this.mutate({ standardProps: standardProps });
        };
        EventApi.prototype.formatRange = function (formatInput) {
            let dateEnv = this._context.dateEnv;
            let instance = this._instance;
            let formatter = createFormatter(formatInput);
            if (this._def.hasEnd) {
                return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
                    forcedStartTzo: instance.forcedStartTzo,
                    forcedEndTzo: instance.forcedEndTzo,
                });
            }
            return dateEnv.format(instance.range.start, formatter, {
                forcedTzo: instance.forcedStartTzo,
            });
        };
        EventApi.prototype.mutate = function (mutation) {
            let instance = this._instance;
            if (instance) {
                let def = this._def;
                let context_1 = this._context;
                let eventStore_1 = context_1.getCurrentData().eventStore;
                let relevantEvents = getRelevantEvents(eventStore_1, instance.instanceId);
                let eventConfigBase = {
                    '': {
                        display: '',
                        startEditable: true,
                        durationEditable: true,
                        constraints: [],
                        overlap: null,
                        allows: [],
                        backgroundColor: '',
                        borderColor: '',
                        textColor: '',
                        classNames: [],
                    },
                };
                relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context_1);
                let oldEvent = new EventApi(context_1, def, instance); // snapshot
                this._def = relevantEvents.defs[def.defId];
                this._instance = relevantEvents.instances[instance.instanceId];
                context_1.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: relevantEvents,
                });
                context_1.emitter.trigger('eventChange', {
                    oldEvent: oldEvent,
                    event: this,
                    relatedEvents: buildEventApis(relevantEvents, context_1, instance),
                    revert: function () {
                        context_1.dispatch({
                            type: 'RESET_EVENTS',
                            eventStore: eventStore_1,
                        });
                    },
                });
            }
        };
        EventApi.prototype.remove = function () {
            let context = this._context;
            let asStore = eventApiToStore(this);
            context.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: asStore,
            });
            context.emitter.trigger('eventRemove', {
                event: this,
                relatedEvents: [],
                revert: function () {
                    context.dispatch({
                        type: 'MERGE_EVENTS',
                        eventStore: asStore,
                    });
                },
            });
        };
        Object.defineProperty(EventApi.prototype, "source", {
            get: function () {
                let sourceId = this._def.sourceId;
                if (sourceId) {
                    return new EventSourceApi(this._context, this._context.getCurrentData().eventSources[sourceId]);
                }
                return null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "start", {
            get: function () {
                return this._instance ?
                    this._context.dateEnv.toDate(this._instance.range.start) :
                    null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "end", {
            get: function () {
                return (this._instance && this._def.hasEnd) ?
                    this._context.dateEnv.toDate(this._instance.range.end) :
                    null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "startStr", {
            get: function () {
                let instance = this._instance;
                if (instance) {
                    return this._context.dateEnv.formatIso(instance.range.start, {
                        omitTime: this._def.allDay,
                        forcedTzo: instance.forcedStartTzo,
                    });
                }
                return '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "endStr", {
            get: function () {
                let instance = this._instance;
                if (instance && this._def.hasEnd) {
                    return this._context.dateEnv.formatIso(instance.range.end, {
                        omitTime: this._def.allDay,
                        forcedTzo: instance.forcedEndTzo,
                    });
                }
                return '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "id", {
            // computable props that all access the def
            // TODO: find a TypeScript-compatible way to do this at scale
            get: function () { return this._def.publicId; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "groupId", {
            get: function () { return this._def.groupId; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "allDay", {
            get: function () { return this._def.allDay; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "title", {
            get: function () { return this._def.title; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "url", {
            get: function () { return this._def.url; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "display", {
            get: function () { return this._def.ui.display || 'auto'; } // bad. just normalize the type earlier
            ,
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "startEditable", {
            get: function () { return this._def.ui.startEditable; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "durationEditable", {
            get: function () { return this._def.ui.durationEditable; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "constraint", {
            get: function () { return this._def.ui.constraints[0] || null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "overlap", {
            get: function () { return this._def.ui.overlap; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "allow", {
            get: function () { return this._def.ui.allows[0] || null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "backgroundColor", {
            get: function () { return this._def.ui.backgroundColor; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "borderColor", {
            get: function () { return this._def.ui.borderColor; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "textColor", {
            get: function () { return this._def.ui.textColor; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "classNames", {
            // NOTE: user can't modify these because Object.freeze was called in event-def parsing
            get: function () { return this._def.ui.classNames; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "extendedProps", {
            get: function () { return this._def.extendedProps; },
            enumerable: false,
            configurable: true
        });
        EventApi.prototype.toPlainObject = function (settings) {
            if (settings === void 0) { settings = {}; }
            let def = this._def;
            let ui = def.ui;
            let _a = this, startStr = _a.startStr, endStr = _a.endStr;
            let res = {};
            if (def.title) {
                res.title = def.title;
            }
            if (startStr) {
                res.start = startStr;
            }
            if (endStr) {
                res.end = endStr;
            }
            if (def.publicId) {
                res.id = def.publicId;
            }
            if (def.groupId) {
                res.groupId = def.groupId;
            }
            if (def.url) {
                res.url = def.url;
            }
            if (ui.display && ui.display !== 'auto') {
                res.display = ui.display;
            }
            // TODO: what about recurring-event properties???
            // TODO: include startEditable/durationEditable/constraint/overlap/allow
            if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
                res.color = ui.backgroundColor;
            }
            else {
                if (ui.backgroundColor) {
                    res.backgroundColor = ui.backgroundColor;
                }
                if (ui.borderColor) {
                    res.borderColor = ui.borderColor;
                }
            }
            if (ui.textColor) {
                res.textColor = ui.textColor;
            }
            if (ui.classNames.length) {
                res.classNames = ui.classNames;
            }
            if (Object.keys(def.extendedProps).length) {
                if (settings.collapseExtendedProps) {
                    __assign(res, def.extendedProps);
                }
                else {
                    res.extendedProps = def.extendedProps;
                }
            }
            return res;
        };
        EventApi.prototype.toJSON = function () {
            return this.toPlainObject();
        };
        return EventApi;
    }());
    function eventApiToStore(eventApi) {
        let _a, _b;
        let def = eventApi._def;
        let instance = eventApi._instance;
        return {
            defs: (_a = {}, _a[def.defId] = def, _a),
            instances: instance
                ? (_b = {}, _b[instance.instanceId] = instance, _b) : {},
        };
    }
    function buildEventApis(eventStore, context, excludeInstance) {
        let defs = eventStore.defs, instances = eventStore.instances;
        let eventApis = [];
        let excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';
        for (let id in instances) {
            let instance = instances[id];
            let def = defs[instance.defId];
            if (instance.instanceId !== excludeInstanceId) {
                eventApis.push(new EventApi(context, def, instance));
            }
        }
        return eventApis;
    }

    let calendarSystemClassMap = {};
    function registerCalendarSystem(name, theClass) {
        calendarSystemClassMap[name] = theClass;
    }
    function createCalendarSystem(name) {
        return new calendarSystemClassMap[name]();
    }
    let GregorianCalendarSystem = /** @class */ (function () {
        function GregorianCalendarSystem() {
        }
        GregorianCalendarSystem.prototype.getMarkerYear = function (d) {
            return d.getUTCFullYear();
        };
        GregorianCalendarSystem.prototype.getMarkerMonth = function (d) {
            return d.getUTCMonth();
        };
        GregorianCalendarSystem.prototype.getMarkerDay = function (d) {
            return d.getUTCDate();
        };
        GregorianCalendarSystem.prototype.arrayToMarker = function (arr) {
            return arrayToUtcDate(arr);
        };
        GregorianCalendarSystem.prototype.markerToArray = function (marker) {
            return dateToUtcArray(marker);
        };
        return GregorianCalendarSystem;
    }());
    registerCalendarSystem('gregory', GregorianCalendarSystem);

    let ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
    function parse(str) {
        let m = ISO_RE.exec(str);
        if (m) {
            let marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number("0." + m[12]) * 1000 : 0));
            if (isValidDate(marker)) {
                let timeZoneOffset = null;
                if (m[13]) {
                    timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 +
                        Number(m[18] || 0));
                }
                return {
                    marker: marker,
                    isTimeUnspecified: !m[6],
                    timeZoneOffset: timeZoneOffset,
                };
            }
        }
        return null;
    }

    let DateEnv = /** @class */ (function () {
        function DateEnv(settings) {
            let timeZone = this.timeZone = settings.timeZone;
            let isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
            if (settings.namedTimeZoneImpl && isNamedTimeZone) {
                this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
            }
            this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
            this.calendarSystem = createCalendarSystem(settings.calendarSystem);
            this.locale = settings.locale;
            this.weekDow = settings.locale.week.dow;
            this.weekDoy = settings.locale.week.doy;
            if (settings.weekNumberCalculation === 'ISO') {
                this.weekDow = 1;
                this.weekDoy = 4;
            }
            if (typeof settings.firstDay === 'number') {
                this.weekDow = settings.firstDay;
            }
            if (typeof settings.weekNumberCalculation === 'function') {
                this.weekNumberFunc = settings.weekNumberCalculation;
            }
            this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
            this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
            this.cmdFormatter = settings.cmdFormatter;
            this.defaultSeparator = settings.defaultSeparator;
        }
        // Creating / Parsing
        DateEnv.prototype.createMarker = function (input) {
            let meta = this.createMarkerMeta(input);
            if (meta === null) {
                return null;
            }
            return meta.marker;
        };
        DateEnv.prototype.createNowMarker = function () {
            if (this.canComputeOffset) {
                return this.timestampToMarker(new Date().valueOf());
            }
            // if we can't compute the current date val for a timezone,
            // better to give the current local date vals than UTC
            return arrayToUtcDate(dateToLocalArray(new Date()));
        };
        DateEnv.prototype.createMarkerMeta = function (input) {
            if (typeof input === 'string') {
                return this.parse(input);
            }
            let marker = null;
            if (typeof input === 'number') {
                marker = this.timestampToMarker(input);
            }
            else if (input instanceof Date) {
                input = input.valueOf();
                if (!isNaN(input)) {
                    marker = this.timestampToMarker(input);
                }
            }
            else if (Array.isArray(input)) {
                marker = arrayToUtcDate(input);
            }
            if (marker === null || !isValidDate(marker)) {
                return null;
            }
            return { marker: marker, isTimeUnspecified: false, forcedTzo: null };
        };
        DateEnv.prototype.parse = function (s) {
            let parts = parse(s);
            if (parts === null) {
                return null;
            }
            let marker = parts.marker;
            let forcedTzo = null;
            if (parts.timeZoneOffset !== null) {
                if (this.canComputeOffset) {
                    marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
                }
                else {
                    forcedTzo = parts.timeZoneOffset;
                }
            }
            return { marker: marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo: forcedTzo };
        };
        // Accessors
        DateEnv.prototype.getYear = function (marker) {
            return this.calendarSystem.getMarkerYear(marker);
        };
        DateEnv.prototype.getMonth = function (marker) {
            return this.calendarSystem.getMarkerMonth(marker);
        };
        // Adding / Subtracting
        DateEnv.prototype.add = function (marker, dur) {
            let a = this.calendarSystem.markerToArray(marker);
            a[0] += dur.years;
            a[1] += dur.months;
            a[2] += dur.days;
            a[6] += dur.milliseconds;
            return this.calendarSystem.arrayToMarker(a);
        };
        DateEnv.prototype.subtract = function (marker, dur) {
            let a = this.calendarSystem.markerToArray(marker);
            a[0] -= dur.years;
            a[1] -= dur.months;
            a[2] -= dur.days;
            a[6] -= dur.milliseconds;
            return this.calendarSystem.arrayToMarker(a);
        };
        DateEnv.prototype.addYears = function (marker, n) {
            let a = this.calendarSystem.markerToArray(marker);
            a[0] += n;
            return this.calendarSystem.arrayToMarker(a);
        };
        DateEnv.prototype.addMonths = function (marker, n) {
            let a = this.calendarSystem.markerToArray(marker);
            a[1] += n;
            return this.calendarSystem.arrayToMarker(a);
        };
        // Diffing Whole Units
        DateEnv.prototype.diffWholeYears = function (m0, m1) {
            let calendarSystem = this.calendarSystem;
            if (timeAsMs(m0) === timeAsMs(m1) &&
                calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) &&
                calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
                return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
            }
            return null;
        };
        DateEnv.prototype.diffWholeMonths = function (m0, m1) {
            let calendarSystem = this.calendarSystem;
            if (timeAsMs(m0) === timeAsMs(m1) &&
                calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
                return (calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0)) +
                    (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
            }
            return null;
        };
        // Range / Duration
        DateEnv.prototype.greatestWholeUnit = function (m0, m1) {
            let n = this.diffWholeYears(m0, m1);
            if (n !== null) {
                return { unit: 'year', value: n };
            }
            n = this.diffWholeMonths(m0, m1);
            if (n !== null) {
                return { unit: 'month', value: n };
            }
            n = diffWholeWeeks(m0, m1);
            if (n !== null) {
                return { unit: 'week', value: n };
            }
            n = diffWholeDays(m0, m1);
            if (n !== null) {
                return { unit: 'day', value: n };
            }
            n = diffHours(m0, m1);
            if (isInt(n)) {
                return { unit: 'hour', value: n };
            }
            n = diffMinutes(m0, m1);
            if (isInt(n)) {
                return { unit: 'minute', value: n };
            }
            n = diffSeconds(m0, m1);
            if (isInt(n)) {
                return { unit: 'second', value: n };
            }
            return { unit: 'millisecond', value: m1.valueOf() - m0.valueOf() };
        };
        DateEnv.prototype.countDurationsBetween = function (m0, m1, d) {
            // TODO: can use greatestWholeUnit
            let diff;
            if (d.years) {
                diff = this.diffWholeYears(m0, m1);
                if (diff !== null) {
                    return diff / asRoughYears(d);
                }
            }
            if (d.months) {
                diff = this.diffWholeMonths(m0, m1);
                if (diff !== null) {
                    return diff / asRoughMonths(d);
                }
            }
            if (d.days) {
                diff = diffWholeDays(m0, m1);
                if (diff !== null) {
                    return diff / asRoughDays(d);
                }
            }
            return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
        };
        // Start-Of
        // these DON'T return zoned-dates. only UTC start-of dates
        DateEnv.prototype.startOf = function (m, unit) {
            if (unit === 'year') {
                return this.startOfYear(m);
            }
            if (unit === 'month') {
                return this.startOfMonth(m);
            }
            if (unit === 'week') {
                return this.startOfWeek(m);
            }
            if (unit === 'day') {
                return startOfDay(m);
            }
            if (unit === 'hour') {
                return startOfHour(m);
            }
            if (unit === 'minute') {
                return startOfMinute(m);
            }
            if (unit === 'second') {
                return startOfSecond(m);
            }
            return null;
        };
        DateEnv.prototype.startOfYear = function (m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m),
            ]);
        };
        DateEnv.prototype.startOfMonth = function (m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m),
                this.calendarSystem.getMarkerMonth(m),
            ]);
        };
        DateEnv.prototype.startOfWeek = function (m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m),
                this.calendarSystem.getMarkerMonth(m),
                m.getUTCDate() - ((m.getUTCDay() - this.weekDow + 7) % 7),
            ]);
        };
        // Week Number
        DateEnv.prototype.computeWeekNumber = function (marker) {
            if (this.weekNumberFunc) {
                return this.weekNumberFunc(this.toDate(marker));
            }
            return weekOfYear(marker, this.weekDow, this.weekDoy);
        };
        // TODO: choke on timeZoneName: long
        DateEnv.prototype.format = function (marker, formatter, dateOptions) {
            if (dateOptions === void 0) { dateOptions = {}; }
            return formatter.format({
                marker: marker,
                timeZoneOffset: dateOptions.forcedTzo != null ?
                    dateOptions.forcedTzo :
                    this.offsetForMarker(marker),
            }, this);
        };
        DateEnv.prototype.formatRange = function (start, end, formatter, dateOptions) {
            if (dateOptions === void 0) { dateOptions = {}; }
            if (dateOptions.isEndExclusive) {
                end = addMs(end, -1);
            }
            return formatter.formatRange({
                marker: start,
                timeZoneOffset: dateOptions.forcedStartTzo != null ?
                    dateOptions.forcedStartTzo :
                    this.offsetForMarker(start),
            }, {
                marker: end,
                timeZoneOffset: dateOptions.forcedEndTzo != null ?
                    dateOptions.forcedEndTzo :
                    this.offsetForMarker(end),
            }, this, dateOptions.defaultSeparator);
        };
        /*
        DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
        might as well use buildIsoString or some other util directly
        */
        DateEnv.prototype.formatIso = function (marker, extraOptions) {
            if (extraOptions === void 0) { extraOptions = {}; }
            let timeZoneOffset = null;
            if (!extraOptions.omitTimeZoneOffset) {
                if (extraOptions.forcedTzo != null) {
                    timeZoneOffset = extraOptions.forcedTzo;
                }
                else {
                    timeZoneOffset = this.offsetForMarker(marker);
                }
            }
            return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
        };
        // TimeZone
        DateEnv.prototype.timestampToMarker = function (ms) {
            if (this.timeZone === 'local') {
                return arrayToUtcDate(dateToLocalArray(new Date(ms)));
            }
            if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
                return new Date(ms);
            }
            return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
        };
        DateEnv.prototype.offsetForMarker = function (m) {
            if (this.timeZone === 'local') {
                return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
            }
            if (this.timeZone === 'UTC') {
                return 0;
            }
            if (this.namedTimeZoneImpl) {
                return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
            }
            return null;
        };
        // Conversion
        DateEnv.prototype.toDate = function (m, forcedTzo) {
            if (this.timeZone === 'local') {
                return arrayToLocalDate(dateToUtcArray(m));
            }
            if (this.timeZone === 'UTC') {
                return new Date(m.valueOf()); // make sure it's a copy
            }
            if (!this.namedTimeZoneImpl) {
                return new Date(m.valueOf() - (forcedTzo || 0));
            }
            return new Date(m.valueOf() -
                this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60);
        };
        return DateEnv;
    }());

    let globalLocales = [];

    let MINIMAL_RAW_EN_LOCALE = {
        code: 'en',
        week: {
            dow: 0,
            doy: 4, // 4 days need to be within the year to be considered the first week
        },
        direction: 'ltr',
        buttonText: {
            prev: 'prev',
            next: 'next',
            prevYear: 'prev year',
            nextYear: 'next year',
            year: 'year',
            today: 'today',
            month: 'month',
            week: 'week',
            day: 'day',
            list: 'list',
        },
        weekText: 'W',
        weekTextLong: 'Week',
        closeHint: 'Close',
        timeHint: 'Time',
        eventHint: 'Event',
        allDayText: 'all-day',
        moreLinkText: 'more',
        noEventsText: 'No events to display',
    };
    let RAW_EN_LOCALE = __assign(__assign({}, MINIMAL_RAW_EN_LOCALE), { 
        // Includes things we don't want other locales to inherit,
        // things that derive from other translatable strings.
        buttonHints: {
            prev: 'Previous $0',
            next: 'Next $0',
            today: function (buttonText, unit) {
                return (unit === 'day')
                    ? 'Today'
                    : "This " + buttonText;
            },
        }, viewHint: '$0 view', navLinkHint: 'Go to $0', moreLinkHint: function (eventCnt) {
            return "Show " + eventCnt + " more event" + (eventCnt === 1 ? '' : 's');
        } });
    function organizeRawLocales(explicitRawLocales) {
        let defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
        let allRawLocales = globalLocales.concat(explicitRawLocales);
        let rawLocaleMap = {
            en: RAW_EN_LOCALE,
        };
        for (let _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
            let rawLocale = allRawLocales_1[_i];
            rawLocaleMap[rawLocale.code] = rawLocale;
        }
        return {
            map: rawLocaleMap,
            defaultCode: defaultCode,
        };
    }
    function buildLocale(inputSingular, available) {
        if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
            return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
        }
        return queryLocale(inputSingular, available);
    }
    function queryLocale(codeArg, available) {
        let codes = [].concat(codeArg || []); // will convert to array
        let raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
        return parseLocale(codeArg, codes, raw);
    }
    function queryRawLocale(codes, available) {
        for (let i = 0; i < codes.length; i += 1) {
            let parts = codes[i].toLocaleLowerCase().split('-');
            for (let j = parts.length; j > 0; j -= 1) {
                let simpleId = parts.slice(0, j).join('-');
                if (available[simpleId]) {
                    return available[simpleId];
                }
            }
        }
        return null;
    }
    function parseLocale(codeArg, codes, raw) {
        let merged = mergeProps([MINIMAL_RAW_EN_LOCALE, raw], ['buttonText']);
        delete merged.code; // don't want this part of the options
        let week = merged.week;
        delete merged.week;
        return {
            codeArg: codeArg,
            codes: codes,
            week: week,
            simpleNumberFormat: new Intl.NumberFormat(codeArg),
            options: merged,
        };
    }

    function formatDate(dateInput, options) {
        if (options === void 0) { options = {}; }
        let dateEnv = buildDateEnv$1(options);
        let formatter = createFormatter(options);
        let dateMeta = dateEnv.createMarkerMeta(dateInput);
        if (!dateMeta) { // TODO: warning?
            return '';
        }
        return dateEnv.format(dateMeta.marker, formatter, {
            forcedTzo: dateMeta.forcedTzo,
        });
    }
    function formatRange(startInput, endInput, options) {
        let dateEnv = buildDateEnv$1(typeof options === 'object' && options ? options : {}); // pass in if non-null object
        let formatter = createFormatter(options);
        let startMeta = dateEnv.createMarkerMeta(startInput);
        let endMeta = dateEnv.createMarkerMeta(endInput);
        if (!startMeta || !endMeta) { // TODO: warning?
            return '';
        }
        return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
            forcedStartTzo: startMeta.forcedTzo,
            forcedEndTzo: endMeta.forcedTzo,
            isEndExclusive: options.isEndExclusive,
            defaultSeparator: BASE_OPTION_DEFAULTS.defaultRangeSeparator,
        });
    }
    // TODO: more DRY and optimized
    function buildDateEnv$1(settings) {
        let locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
        return new DateEnv(__assign(__assign({ timeZone: BASE_OPTION_DEFAULTS.timeZone, calendarSystem: 'gregory' }, settings), { locale: locale }));
    }

    let DEF_DEFAULTS = {
        startTime: '09:00',
        endTime: '17:00',
        daysOfWeek: [1, 2, 3, 4, 5],
        display: 'inverse-background',
        classNames: 'fc-non-business',
        groupId: '_businessHours', // so multiple defs get grouped
    };
    /*
    TODO: pass around as EventDefHash!!!
    */
    function parseBusinessHours(input, context) {
        return parseEvents(refineInputs(input), null, context);
    }
    function refineInputs(input) {
        let rawDefs;
        if (input === true) {
            rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
        }
        else if (Array.isArray(input)) {
            // if specifying an array, every sub-definition NEEDS a day-of-week
            rawDefs = input.filter(function (rawDef) { return rawDef.daysOfWeek; });
        }
        else if (typeof input === 'object' && input) { // non-null object
            rawDefs = [input];
        }
        else { // is probably false
            rawDefs = [];
        }
        rawDefs = rawDefs.map(function (rawDef) { return (__assign(__assign({}, DEF_DEFAULTS), rawDef)); });
        return rawDefs;
    }

    function pointInsideRect(point, rect) {
        return point.left >= rect.left &&
            point.left < rect.right &&
            point.top >= rect.top &&
            point.top < rect.bottom;
    }
    // Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
    function intersectRects(rect1, rect2) {
        let res = {
            left: Math.max(rect1.left, rect2.left),
            right: Math.min(rect1.right, rect2.right),
            top: Math.max(rect1.top, rect2.top),
            bottom: Math.min(rect1.bottom, rect2.bottom),
        };
        if (res.left < res.right && res.top < res.bottom) {
            return res;
        }
        return false;
    }
    function translateRect(rect, deltaX, deltaY) {
        return {
            left: rect.left + deltaX,
            right: rect.right + deltaX,
            top: rect.top + deltaY,
            bottom: rect.bottom + deltaY,
        };
    }
    // Returns a new point that will have been moved to reside within the given rectangle
    function constrainPoint(point, rect) {
        return {
            left: Math.min(Math.max(point.left, rect.left), rect.right),
            top: Math.min(Math.max(point.top, rect.top), rect.bottom),
        };
    }
    // Returns a point that is the center of the given rectangle
    function getRectCenter(rect) {
        return {
            left: (rect.left + rect.right) / 2,
            top: (rect.top + rect.bottom) / 2,
        };
    }
    // Subtracts point2's coordinates from point1's coordinates, returning a delta
    function diffPoints(point1, point2) {
        return {
            left: point1.left - point2.left,
            top: point1.top - point2.top,
        };
    }

    let canVGrowWithinCell;
    function getCanVGrowWithinCell() {
        if (canVGrowWithinCell == null) {
            canVGrowWithinCell = computeCanVGrowWithinCell();
        }
        return canVGrowWithinCell;
    }
    function computeCanVGrowWithinCell() {
        // for SSR, because this function is call immediately at top-level
        // TODO: just make this logic execute top-level, immediately, instead of doing lazily
        if (typeof document === 'undefined') {
            return true;
        }
        let el = document.createElement('div');
        el.style.position = 'absolute';
        el.style.top = '0px';
        el.style.left = '0px';
        el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
        el.querySelector('table').style.height = '100px';
        el.querySelector('div').style.height = '100%';
        document.body.appendChild(el);
        let div = el.querySelector('div');
        let possible = div.offsetHeight > 0;
        document.body.removeChild(el);
        return possible;
    }

    let EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
    let Splitter = /** @class */ (function () {
        function Splitter() {
            this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
            this.splitDateSelection = memoize(this._splitDateSpan);
            this.splitEventStore = memoize(this._splitEventStore);
            this.splitIndividualUi = memoize(this._splitIndividualUi);
            this.splitEventDrag = memoize(this._splitInteraction);
            this.splitEventResize = memoize(this._splitInteraction);
            this.eventUiBuilders = {}; // TODO: typescript protection
        }
        Splitter.prototype.splitProps = function (props) {
            let _this = this;
            let keyInfos = this.getKeyInfo(props);
            let defKeys = this.getKeysForEventDefs(props.eventStore);
            let dateSelections = this.splitDateSelection(props.dateSelection);
            let individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
            let eventStores = this.splitEventStore(props.eventStore, defKeys);
            let eventDrags = this.splitEventDrag(props.eventDrag);
            let eventResizes = this.splitEventResize(props.eventResize);
            let splitProps = {};
            this.eventUiBuilders = mapHash(keyInfos, function (info, key) { return _this.eventUiBuilders[key] || memoize(buildEventUiForKey); });
            for (let key in keyInfos) {
                let keyInfo = keyInfos[key];
                let eventStore = eventStores[key] || EMPTY_EVENT_STORE;
                let buildEventUi = this.eventUiBuilders[key];
                splitProps[key] = {
                    businessHours: keyInfo.businessHours || props.businessHours,
                    dateSelection: dateSelections[key] || null,
                    eventStore: eventStore,
                    eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
                    eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
                    eventDrag: eventDrags[key] || null,
                    eventResize: eventResizes[key] || null,
                };
            }
            return splitProps;
        };
        Splitter.prototype._splitDateSpan = function (dateSpan) {
            let dateSpans = {};
            if (dateSpan) {
                let keys = this.getKeysForDateSpan(dateSpan);
                for (let _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    let key = keys_1[_i];
                    dateSpans[key] = dateSpan;
                }
            }
            return dateSpans;
        };
        Splitter.prototype._getKeysForEventDefs = function (eventStore) {
            let _this = this;
            return mapHash(eventStore.defs, function (eventDef) { return _this.getKeysForEventDef(eventDef); });
        };
        Splitter.prototype._splitEventStore = function (eventStore, defKeys) {
            let defs = eventStore.defs, instances = eventStore.instances;
            let splitStores = {};
            for (let defId in defs) {
                for (let _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                    let key = _a[_i];
                    if (!splitStores[key]) {
                        splitStores[key] = createEmptyEventStore();
                    }
                    splitStores[key].defs[defId] = defs[defId];
                }
            }
            for (let instanceId in instances) {
                let instance = instances[instanceId];
                for (let _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
                    let key = _c[_b];
                    if (splitStores[key]) { // must have already been created
                        splitStores[key].instances[instanceId] = instance;
                    }
                }
            }
            return splitStores;
        };
        Splitter.prototype._splitIndividualUi = function (eventUiBases, defKeys) {
            let splitHashes = {};
            for (let defId in eventUiBases) {
                if (defId) { // not the '' key
                    for (let _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                        let key = _a[_i];
                        if (!splitHashes[key]) {
                            splitHashes[key] = {};
                        }
                        splitHashes[key][defId] = eventUiBases[defId];
                    }
                }
            }
            return splitHashes;
        };
        Splitter.prototype._splitInteraction = function (interaction) {
            let splitStates = {};
            if (interaction) {
                let affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents));
                // can't rely on defKeys because event data is mutated
                let mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
                let mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
                let populate = function (key) {
                    if (!splitStates[key]) {
                        splitStates[key] = {
                            affectedEvents: affectedStores_1[key] || EMPTY_EVENT_STORE,
                            mutatedEvents: mutatedStores_1[key] || EMPTY_EVENT_STORE,
                            isEvent: interaction.isEvent,
                        };
                    }
                };
                for (let key in affectedStores_1) {
                    populate(key);
                }
                for (let key in mutatedStores_1) {
                    populate(key);
                }
            }
            return splitStates;
        };
        return Splitter;
    }());
    function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
        let baseParts = [];
        if (allUi) {
            baseParts.push(allUi);
        }
        if (eventUiForKey) {
            baseParts.push(eventUiForKey);
        }
        let stuff = {
            '': combineEventUis(baseParts),
        };
        if (individualUi) {
            __assign(stuff, individualUi);
        }
        return stuff;
    }

    function getDateMeta(date, todayRange, nowDate, dateProfile) {
        return {
            dow: date.getUTCDay(),
            isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
            isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
            isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
            isPast: Boolean(nowDate ? (date < nowDate) : todayRange ? (date < todayRange.start) : false),
            isFuture: Boolean(nowDate ? (date > nowDate) : todayRange ? (date >= todayRange.end) : false),
        };
    }
    function getDayClassNames(meta, theme) {
        let classNames = [
            'fc-day',
            "fc-day-" + DAY_IDS[meta.dow],
        ];
        if (meta.isDisabled) {
            classNames.push('fc-day-disabled');
        }
        else {
            if (meta.isToday) {
                classNames.push('fc-day-today');
                classNames.push(theme.getClass('today'));
            }
            if (meta.isPast) {
                classNames.push('fc-day-past');
            }
            if (meta.isFuture) {
                classNames.push('fc-day-future');
            }
            if (meta.isOther) {
                classNames.push('fc-day-other');
            }
        }
        return classNames;
    }
    function getSlotClassNames(meta, theme) {
        let classNames = [
            'fc-slot',
            "fc-slot-" + DAY_IDS[meta.dow],
        ];
        if (meta.isDisabled) {
            classNames.push('fc-slot-disabled');
        }
        else {
            if (meta.isToday) {
                classNames.push('fc-slot-today');
                classNames.push(theme.getClass('today'));
            }
            if (meta.isPast) {
                classNames.push('fc-slot-past');
            }
            if (meta.isFuture) {
                classNames.push('fc-slot-future');
            }
        }
        return classNames;
    }

    let DAY_FORMAT = createFormatter({ year: 'numeric', month: 'long', day: 'numeric' });
    let WEEK_FORMAT = createFormatter({ week: 'long' });
    function buildNavLinkAttrs(context, dateMarker, viewType, isTabbable) {
        if (viewType === void 0) { viewType = 'day'; }
        if (isTabbable === void 0) { isTabbable = true; }
        let dateEnv = context.dateEnv, options = context.options, calendarApi = context.calendarApi;
        let dateStr = dateEnv.format(dateMarker, viewType === 'week' ? WEEK_FORMAT : DAY_FORMAT);
        if (options.navLinks) {
            let zonedDate = dateEnv.toDate(dateMarker);
            let handleInteraction = function (ev) {
                let customAction = viewType === 'day' ? options.navLinkDayClick :
                    viewType === 'week' ? options.navLinkWeekClick : null;
                if (typeof customAction === 'function') {
                    customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
                }
                else {
                    if (typeof customAction === 'string') {
                        viewType = customAction;
                    }
                    calendarApi.zoomTo(dateMarker, viewType);
                }
            };
            return __assign({ title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr), 'data-navlink': '' }, (isTabbable
                ? createAriaClickAttrs(handleInteraction)
                : { onClick: handleInteraction }));
        }
        return { 'aria-label': dateStr };
    }

    let _isRtlScrollbarOnLeft = null;
    function getIsRtlScrollbarOnLeft() {
        if (_isRtlScrollbarOnLeft === null) {
            _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
        }
        return _isRtlScrollbarOnLeft;
    }
    function computeIsRtlScrollbarOnLeft() {
        let outerEl = document.createElement('div');
        applyStyle(outerEl, {
            position: 'absolute',
            top: -1000,
            left: 0,
            border: 0,
            padding: 0,
            overflow: 'scroll',
            direction: 'rtl',
        });
        outerEl.innerHTML = '<div></div>';
        document.body.appendChild(outerEl);
        let innerEl = outerEl.firstChild;
        let res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
        removeElement(outerEl);
        return res;
    }

    let _scrollbarWidths;
    function getScrollbarWidths() {
        if (!_scrollbarWidths) {
            _scrollbarWidths = computeScrollbarWidths();
        }
        return _scrollbarWidths;
    }
    function computeScrollbarWidths() {
        let el = document.createElement('div');
        el.style.overflow = 'scroll';
        el.style.position = 'absolute';
        el.style.top = '-9999px';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        let res = computeScrollbarWidthsForEl(el);
        document.body.removeChild(el);
        return res;
    }
    // WARNING: will include border
    function computeScrollbarWidthsForEl(el) {
        return {
            x: el.offsetHeight - el.clientHeight,
            y: el.offsetWidth - el.clientWidth,
        };
    }

    function computeEdges(el, getPadding) {
        if (getPadding === void 0) { getPadding = false; }
        let computedStyle = window.getComputedStyle(el);
        let borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
        let borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
        let borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
        let borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
        let badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!
        let scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
        let scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
        let res = {
            borderLeft: borderLeft,
            borderRight: borderRight,
            borderTop: borderTop,
            borderBottom: borderBottom,
            scrollbarBottom: scrollbarBottom,
            scrollbarLeft: 0,
            scrollbarRight: 0,
        };
        if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') { // is the scrollbar on the left side?
            res.scrollbarLeft = scrollbarLeftRight;
        }
        else {
            res.scrollbarRight = scrollbarLeftRight;
        }
        if (getPadding) {
            res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
            res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
            res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
            res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
        }
        return res;
    }
    function computeInnerRect(el, goWithinPadding, doFromWindowViewport) {
        if (goWithinPadding === void 0) { goWithinPadding = false; }
        let outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
        let edges = computeEdges(el, goWithinPadding);
        let res = {
            left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
            right: outerRect.right - edges.borderRight - edges.scrollbarRight,
            top: outerRect.top + edges.borderTop,
            bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom,
        };
        if (goWithinPadding) {
            res.left += edges.paddingLeft;
            res.right -= edges.paddingRight;
            res.top += edges.paddingTop;
            res.bottom -= edges.paddingBottom;
        }
        return res;
    }
    function computeRect(el) {
        let rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
            right: rect.right + window.pageXOffset,
            bottom: rect.bottom + window.pageYOffset,
        };
    }
    function computeClippedClientRect(el) {
        let clippingParents = getClippingParents(el);
        let rect = el.getBoundingClientRect();
        for (let _i = 0, clippingParents_1 = clippingParents; _i < clippingParents_1.length; _i++) {
            let clippingParent = clippingParents_1[_i];
            let intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
            if (intersection) {
                rect = intersection;
            }
            else {
                return null;
            }
        }
        return rect;
    }
    function computeHeightAndMargins(el) {
        return el.getBoundingClientRect().height + computeVMargins(el);
    }
    function computeVMargins(el) {
        let computed = window.getComputedStyle(el);
        return parseInt(computed.marginTop, 10) +
            parseInt(computed.marginBottom, 10);
    }
    // does not return window
    function getClippingParents(el) {
        let parents = [];
        while (el instanceof HTMLElement) { // will stop when gets to document or null
            let computedStyle = window.getComputedStyle(el);
            if (computedStyle.position === 'fixed') {
                break;
            }
            if ((/(auto|scroll)/).test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
                parents.push(el);
            }
            el = el.parentNode;
        }
        return parents;
    }

    // given a function that resolves a result asynchronously.
    // the function can either call passed-in success and failure callbacks,
    // or it can return a promise.
    // if you need to pass additional params to func, bind them first.
    function unpromisify(func, success, failure) {
        // guard against success/failure callbacks being called more than once
        // and guard against a promise AND callback being used together.
        let isResolved = false;
        let wrappedSuccess = function () {
            if (!isResolved) {
                isResolved = true;
                success.apply(this, arguments); // eslint-disable-line prefer-rest-params
            }
        };
        let wrappedFailure = function () {
            if (!isResolved) {
                isResolved = true;
                if (failure) {
                    failure.apply(this, arguments); // eslint-disable-line prefer-rest-params
                }
            }
        };
        let res = func(wrappedSuccess, wrappedFailure);
        if (res && typeof res.then === 'function') {
            res.then(wrappedSuccess, wrappedFailure);
        }
    }

    let Emitter = /** @class */ (function () {
        function Emitter() {
            this.handlers = {};
            this.thisContext = null;
        }
        Emitter.prototype.setThisContext = function (thisContext) {
            this.thisContext = thisContext;
        };
        Emitter.prototype.setOptions = function (options) {
            this.options = options;
        };
        Emitter.prototype.on = function (type, handler) {
            addToHash(this.handlers, type, handler);
        };
        Emitter.prototype.off = function (type, handler) {
            removeFromHash(this.handlers, type, handler);
        };
        Emitter.prototype.trigger = function (type) {
            let args = [];
            for (let _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            let attachedHandlers = this.handlers[type] || [];
            let optionHandler = this.options && this.options[type];
            let handlers = [].concat(optionHandler || [], attachedHandlers);
            for (let _a = 0, handlers_1 = handlers; _a < handlers_1.length; _a++) {
                let handler = handlers_1[_a];
                handler.apply(this.thisContext, args);
            }
        };
        Emitter.prototype.hasHandlers = function (type) {
            return Boolean((this.handlers[type] && this.handlers[type].length) ||
                (this.options && this.options[type]));
        };
        return Emitter;
    }());
    function addToHash(hash, type, handler) {
        (hash[type] || (hash[type] = []))
            .push(handler);
    }
    function removeFromHash(hash, type, handler) {
        if (handler) {
            if (hash[type]) {
                hash[type] = hash[type].filter(function (func) { return func !== handler; });
            }
        }
        else {
            delete hash[type]; // remove all handler funcs for this type
        }
    }

    /*
    Records offset information for a set of elements, relative to an origin element.
    Can record the left/right OR the top/bottom OR both.
    Provides methods for querying the cache by position.
    */
    let PositionCache = /** @class */ (function () {
        function PositionCache(originEl, els, isHorizontal, isVertical) {
            this.els = els;
            let originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left
            if (isHorizontal) {
                this.buildElHorizontals(originClientRect.left);
            }
            if (isVertical) {
                this.buildElVerticals(originClientRect.top);
            }
        }
        // Populates the left/right internal coordinate arrays
        PositionCache.prototype.buildElHorizontals = function (originClientLeft) {
            let lefts = [];
            let rights = [];
            for (let _i = 0, _a = this.els; _i < _a.length; _i++) {
                let el = _a[_i];
                let rect = el.getBoundingClientRect();
                lefts.push(rect.left - originClientLeft);
                rights.push(rect.right - originClientLeft);
            }
            this.lefts = lefts;
            this.rights = rights;
        };
        // Populates the top/bottom internal coordinate arrays
        PositionCache.prototype.buildElVerticals = function (originClientTop) {
            let tops = [];
            let bottoms = [];
            for (let _i = 0, _a = this.els; _i < _a.length; _i++) {
                let el = _a[_i];
                let rect = el.getBoundingClientRect();
                tops.push(rect.top - originClientTop);
                bottoms.push(rect.bottom - originClientTop);
            }
            this.tops = tops;
            this.bottoms = bottoms;
        };
        // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
        // If no intersection is made, returns undefined.
        PositionCache.prototype.leftToIndex = function (leftPosition) {
            let _a = this, lefts = _a.lefts, rights = _a.rights;
            let len = lefts.length;
            let i;
            for (i = 0; i < len; i += 1) {
                if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
                    return i;
                }
            }
            return undefined; // TODO: better
        };
        // Given a top offset (from document top), returns the index of the el that it vertically intersects.
        // If no intersection is made, returns undefined.
        PositionCache.prototype.topToIndex = function (topPosition) {
            let _a = this, tops = _a.tops, bottoms = _a.bottoms;
            let len = tops.length;
            let i;
            for (i = 0; i < len; i += 1) {
                if (topPosition >= tops[i] && topPosition < bottoms[i]) {
                    return i;
                }
            }
            return undefined; // TODO: better
        };
        // Gets the width of the element at the given index
        PositionCache.prototype.getWidth = function (leftIndex) {
            return this.rights[leftIndex] - this.lefts[leftIndex];
        };
        // Gets the height of the element at the given index
        PositionCache.prototype.getHeight = function (topIndex) {
            return this.bottoms[topIndex] - this.tops[topIndex];
        };
        return PositionCache;
    }());

    /* eslint max-classes-per-file: "off" */
    /*
    An object for getting/setting scroll-related information for an element.
    Internally, this is done very differently for window versus DOM element,
    so this object serves as a common interface.
    */
    let ScrollController = /** @class */ (function () {
        function ScrollController() {
        }
        ScrollController.prototype.getMaxScrollTop = function () {
            return this.getScrollHeight() - this.getClientHeight();
        };
        ScrollController.prototype.getMaxScrollLeft = function () {
            return this.getScrollWidth() - this.getClientWidth();
        };
        ScrollController.prototype.canScrollVertically = function () {
            return this.getMaxScrollTop() > 0;
        };
        ScrollController.prototype.canScrollHorizontally = function () {
            return this.getMaxScrollLeft() > 0;
        };
        ScrollController.prototype.canScrollUp = function () {
            return this.getScrollTop() > 0;
        };
        ScrollController.prototype.canScrollDown = function () {
            return this.getScrollTop() < this.getMaxScrollTop();
        };
        ScrollController.prototype.canScrollLeft = function () {
            return this.getScrollLeft() > 0;
        };
        ScrollController.prototype.canScrollRight = function () {
            return this.getScrollLeft() < this.getMaxScrollLeft();
        };
        return ScrollController;
    }());
    let ElementScrollController = /** @class */ (function (_super) {
        __extends(ElementScrollController, _super);
        function ElementScrollController(el) {
            let _this = _super.call(this) || this;
            _this.el = el;
            return _this;
        }
        ElementScrollController.prototype.getScrollTop = function () {
            return this.el.scrollTop;
        };
        ElementScrollController.prototype.getScrollLeft = function () {
            return this.el.scrollLeft;
        };
        ElementScrollController.prototype.setScrollTop = function (top) {
            this.el.scrollTop = top;
        };
        ElementScrollController.prototype.setScrollLeft = function (left) {
            this.el.scrollLeft = left;
        };
        ElementScrollController.prototype.getScrollWidth = function () {
            return this.el.scrollWidth;
        };
        ElementScrollController.prototype.getScrollHeight = function () {
            return this.el.scrollHeight;
        };
        ElementScrollController.prototype.getClientHeight = function () {
            return this.el.clientHeight;
        };
        ElementScrollController.prototype.getClientWidth = function () {
            return this.el.clientWidth;
        };
        return ElementScrollController;
    }(ScrollController));
    let WindowScrollController = /** @class */ (function (_super) {
        __extends(WindowScrollController, _super);
        function WindowScrollController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WindowScrollController.prototype.getScrollTop = function () {
            return window.pageYOffset;
        };
        WindowScrollController.prototype.getScrollLeft = function () {
            return window.pageXOffset;
        };
        WindowScrollController.prototype.setScrollTop = function (n) {
            window.scroll(window.pageXOffset, n);
        };
        WindowScrollController.prototype.setScrollLeft = function (n) {
            window.scroll(n, window.pageYOffset);
        };
        WindowScrollController.prototype.getScrollWidth = function () {
            return document.documentElement.scrollWidth;
        };
        WindowScrollController.prototype.getScrollHeight = function () {
            return document.documentElement.scrollHeight;
        };
        WindowScrollController.prototype.getClientHeight = function () {
            return document.documentElement.clientHeight;
        };
        WindowScrollController.prototype.getClientWidth = function () {
            return document.documentElement.clientWidth;
        };
        return WindowScrollController;
    }(ScrollController));

    let Theme = /** @class */ (function () {
        function Theme(calendarOptions) {
            if (this.iconOverrideOption) {
                this.setIconOverride(calendarOptions[this.iconOverrideOption]);
            }
        }
        Theme.prototype.setIconOverride = function (iconOverrideHash) {
            let iconClassesCopy;
            let buttonName;
            if (typeof iconOverrideHash === 'object' && iconOverrideHash) { // non-null object
                iconClassesCopy = __assign({}, this.iconClasses);
                for (buttonName in iconOverrideHash) {
                    iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
                }
                this.iconClasses = iconClassesCopy;
            }
            else if (iconOverrideHash === false) {
                this.iconClasses = {};
            }
        };
        Theme.prototype.applyIconOverridePrefix = function (className) {
            let prefix = this.iconOverridePrefix;
            if (prefix && className.indexOf(prefix) !== 0) { // if not already present
                className = prefix + className;
            }
            return className;
        };
        Theme.prototype.getClass = function (key) {
            return this.classes[key] || '';
        };
        Theme.prototype.getIconClass = function (buttonName, isRtl) {
            let className;
            if (isRtl && this.rtlIconClasses) {
                className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
            }
            else {
                className = this.iconClasses[buttonName];
            }
            if (className) {
                return this.baseIconClass + " " + className;
            }
            return '';
        };
        Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
            let className;
            if (this.iconOverrideCustomButtonOption) {
                className = customButtonProps[this.iconOverrideCustomButtonOption];
                if (className) {
                    return this.baseIconClass + " " + this.applyIconOverridePrefix(className);
                }
            }
            return '';
        };
        return Theme;
    }());
    Theme.prototype.classes = {};
    Theme.prototype.iconClasses = {};
    Theme.prototype.baseIconClass = '';
    Theme.prototype.iconOverridePrefix = '';

    /// <reference types="@fullcalendar/core-preact" />
    if (typeof FullCalendarVDom === 'undefined') {
        throw new Error('Please import the top-level fullcalendar lib before attempting to import a plugin.');
    }
    let Component = FullCalendarVDom.Component;
    let createElement = FullCalendarVDom.createElement;
    let render = FullCalendarVDom.render;
    let createRef = FullCalendarVDom.createRef;
    let Fragment = FullCalendarVDom.Fragment;
    let createContext = FullCalendarVDom.createContext;
    let createPortal = FullCalendarVDom.createPortal;
    let flushSync = FullCalendarVDom.flushSync;
    let unmountComponentAtNode = FullCalendarVDom.unmountComponentAtNode;
    /* eslint-enable */

    let ScrollResponder = /** @class */ (function () {
        function ScrollResponder(execFunc, emitter, scrollTime, scrollTimeReset) {
            let _this = this;
            this.execFunc = execFunc;
            this.emitter = emitter;
            this.scrollTime = scrollTime;
            this.scrollTimeReset = scrollTimeReset;
            this.handleScrollRequest = function (request) {
                _this.queuedRequest = __assign({}, _this.queuedRequest || {}, request);
                _this.drain();
            };
            emitter.on('_scrollRequest', this.handleScrollRequest);
            this.fireInitialScroll();
        }
        ScrollResponder.prototype.detach = function () {
            this.emitter.off('_scrollRequest', this.handleScrollRequest);
        };
        ScrollResponder.prototype.update = function (isDatesNew) {
            if (isDatesNew && this.scrollTimeReset) {
                this.fireInitialScroll(); // will drain
            }
            else {
                this.drain();
            }
        };
        ScrollResponder.prototype.fireInitialScroll = function () {
            this.handleScrollRequest({
                time: this.scrollTime,
            });
        };
        ScrollResponder.prototype.drain = function () {
            if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
                this.queuedRequest = null;
            }
        };
        return ScrollResponder;
    }());

    let ViewContextType = createContext({}); // for Components
    function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
        return {
            dateEnv: dateEnv,
            options: viewOptions,
            pluginHooks: pluginHooks,
            emitter: emitter,
            dispatch: dispatch,
            getCurrentData: getCurrentData,
            calendarApi: calendarApi,
            viewSpec: viewSpec,
            viewApi: viewApi,
            dateProfileGenerator: dateProfileGenerator,
            theme: theme,
            isRtl: viewOptions.direction === 'rtl',
            addResizeHandler: function (handler) {
                emitter.on('_resize', handler);
            },
            removeResizeHandler: function (handler) {
                emitter.off('_resize', handler);
            },
            createScrollResponder: function (execFunc) {
                return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
            },
            registerInteractiveComponent: registerInteractiveComponent,
            unregisterInteractiveComponent: unregisterInteractiveComponent,
        };
    }

    /* eslint max-classes-per-file: off */
    let PureComponent = /** @class */ (function (_super) {
        __extends(PureComponent, _super);
        function PureComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PureComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
            if (this.debug) {
                // eslint-disable-next-line no-console
                console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
            }
            return !compareObjs(this.props, nextProps, this.propEquality) ||
                !compareObjs(this.state, nextState, this.stateEquality);
        };
        PureComponent.addPropsEquality = addPropsEquality;
        PureComponent.addStateEquality = addStateEquality;
        PureComponent.contextType = ViewContextType;
        return PureComponent;
    }(Component));
    PureComponent.prototype.propEquality = {};
    PureComponent.prototype.stateEquality = {};
    let BaseComponent = /** @class */ (function (_super) {
        __extends(BaseComponent, _super);
        function BaseComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BaseComponent.contextType = ViewContextType;
        return BaseComponent;
    }(PureComponent));
    function addPropsEquality(propEquality) {
        let hash = Object.create(this.prototype.propEquality);
        __assign(hash, propEquality);
        this.prototype.propEquality = hash;
    }
    function addStateEquality(stateEquality) {
        let hash = Object.create(this.prototype.stateEquality);
        __assign(hash, stateEquality);
        this.prototype.stateEquality = hash;
    }
    // use other one
    function setRef(ref, current) {
        if (typeof ref === 'function') {
            ref(current);
        }
        else if (ref) {
            // see https://github.com/facebook/react/issues/13029
            ref.current = current;
        }
    }

    /*
    an INTERACTABLE date component

    PURPOSES:
    - hook up to fg, fill, and mirror renderers
    - interface for dragging and hits
    */
    let DateComponent = /** @class */ (function (_super) {
        __extends(DateComponent, _super);
        function DateComponent() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.uid = guid();
            return _this;
        }
        // Hit System
        // -----------------------------------------------------------------------------------------------------------------
        DateComponent.prototype.prepareHits = function () {
        };
        DateComponent.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
            return null; // this should be abstract
        };
        // Pointer Interaction Utils
        // -----------------------------------------------------------------------------------------------------------------
        DateComponent.prototype.isValidSegDownEl = function (el) {
            return !this.props.eventDrag && // HACK
                !this.props.eventResize && // HACK
                !elementClosest(el, '.fc-event-mirror');
        };
        DateComponent.prototype.isValidDateDownEl = function (el) {
            return !elementClosest(el, '.fc-event:not(.fc-bg-event)') &&
                !elementClosest(el, '.fc-more-link') && // a "more.." link
                !elementClosest(el, 'a[data-navlink]') && // a clickable nav link
                !elementClosest(el, '.fc-popover'); // hack
        };
        return DateComponent;
    }(BaseComponent));

    // TODO: easier way to add new hooks? need to update a million things
    function createPlugin(input) {
        return {
            id: guid(),
            deps: input.deps || [],
            reducers: input.reducers || [],
            isLoadingFuncs: input.isLoadingFuncs || [],
            contextInit: [].concat(input.contextInit || []),
            eventRefiners: input.eventRefiners || {},
            eventDefMemberAdders: input.eventDefMemberAdders || [],
            eventSourceRefiners: input.eventSourceRefiners || {},
            isDraggableTransformers: input.isDraggableTransformers || [],
            eventDragMutationMassagers: input.eventDragMutationMassagers || [],
            eventDefMutationAppliers: input.eventDefMutationAppliers || [],
            dateSelectionTransformers: input.dateSelectionTransformers || [],
            datePointTransforms: input.datePointTransforms || [],
            dateSpanTransforms: input.dateSpanTransforms || [],
            views: input.views || {},
            viewPropsTransformers: input.viewPropsTransformers || [],
            isPropsValid: input.isPropsValid || null,
            externalDefTransforms: input.externalDefTransforms || [],
            viewContainerAppends: input.viewContainerAppends || [],
            eventDropTransformers: input.eventDropTransformers || [],
            componentInteractions: input.componentInteractions || [],
            calendarInteractions: input.calendarInteractions || [],
            themeClasses: input.themeClasses || {},
            eventSourceDefs: input.eventSourceDefs || [],
            cmdFormatter: input.cmdFormatter,
            recurringTypes: input.recurringTypes || [],
            namedTimeZonedImpl: input.namedTimeZonedImpl,
            initialView: input.initialView || '',
            elementDraggingImpl: input.elementDraggingImpl,
            optionChangeHandlers: input.optionChangeHandlers || {},
            scrollGridImpl: input.scrollGridImpl || null,
            contentTypeHandlers: input.contentTypeHandlers || {},
            listenerRefiners: input.listenerRefiners || {},
            optionRefiners: input.optionRefiners || {},
            propSetHandlers: input.propSetHandlers || {},
        };
    }
    function buildPluginHooks(pluginDefs, globalDefs) {
        let isAdded = {};
        let hooks = {
            reducers: [],
            isLoadingFuncs: [],
            contextInit: [],
            eventRefiners: {},
            eventDefMemberAdders: [],
            eventSourceRefiners: {},
            isDraggableTransformers: [],
            eventDragMutationMassagers: [],
            eventDefMutationAppliers: [],
            dateSelectionTransformers: [],
            datePointTransforms: [],
            dateSpanTransforms: [],
            views: {},
            viewPropsTransformers: [],
            isPropsValid: null,
            externalDefTransforms: [],
            viewContainerAppends: [],
            eventDropTransformers: [],
            componentInteractions: [],
            calendarInteractions: [],
            themeClasses: {},
            eventSourceDefs: [],
            cmdFormatter: null,
            recurringTypes: [],
            namedTimeZonedImpl: null,
            initialView: '',
            elementDraggingImpl: null,
            optionChangeHandlers: {},
            scrollGridImpl: null,
            contentTypeHandlers: {},
            listenerRefiners: {},
            optionRefiners: {},
            propSetHandlers: {},
        };
        function addDefs(defs) {
            for (let _i = 0, defs_1 = defs; _i < defs_1.length; _i++) {
                let def = defs_1[_i];
                if (!isAdded[def.id]) {
                    isAdded[def.id] = true;
                    addDefs(def.deps);
                    hooks = combineHooks(hooks, def);
                }
            }
        }
        if (pluginDefs) {
            addDefs(pluginDefs);
        }
        addDefs(globalDefs);
        return hooks;
    }
    function buildBuildPluginHooks() {
        let currentOverrideDefs = [];
        let currentGlobalDefs = [];
        let currentHooks;
        return function (overrideDefs, globalDefs) {
            if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
                currentHooks = buildPluginHooks(overrideDefs, globalDefs);
            }
            currentOverrideDefs = overrideDefs;
            currentGlobalDefs = globalDefs;
            return currentHooks;
        };
    }
    function combineHooks(hooks0, hooks1) {
        return {
            reducers: hooks0.reducers.concat(hooks1.reducers),
            isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
            contextInit: hooks0.contextInit.concat(hooks1.contextInit),
            eventRefiners: __assign(__assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
            eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
            eventSourceRefiners: __assign(__assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
            isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
            eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
            eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
            dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
            datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
            dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
            views: __assign(__assign({}, hooks0.views), hooks1.views),
            viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
            isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
            externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
            viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
            eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
            calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
            componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
            themeClasses: __assign(__assign({}, hooks0.themeClasses), hooks1.themeClasses),
            eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
            cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
            recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
            namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
            initialView: hooks0.initialView || hooks1.initialView,
            elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
            optionChangeHandlers: __assign(__assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
            scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
            contentTypeHandlers: __assign(__assign({}, hooks0.contentTypeHandlers), hooks1.contentTypeHandlers),
            listenerRefiners: __assign(__assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
            optionRefiners: __assign(__assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
            propSetHandlers: __assign(__assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers),
        };
    }

    let StandardTheme = /** @class */ (function (_super) {
        __extends(StandardTheme, _super);
        function StandardTheme() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return StandardTheme;
    }(Theme));
    StandardTheme.prototype.classes = {
        root: 'fc-theme-standard',
        tableCellShaded: 'fc-cell-shaded',
        buttonGroup: 'fc-button-group',
        button: 'fc-button fc-button-primary',
        buttonActive: 'fc-button-active',
    };
    StandardTheme.prototype.baseIconClass = 'fc-icon';
    StandardTheme.prototype.iconClasses = {
        close: 'fc-icon-x',
        prev: 'fc-icon-chevron-left',
        next: 'fc-icon-chevron-right',
        prevYear: 'fc-icon-chevrons-left',
        nextYear: 'fc-icon-chevrons-right',
    };
    StandardTheme.prototype.rtlIconClasses = {
        prev: 'fc-icon-chevron-right',
        next: 'fc-icon-chevron-left',
        prevYear: 'fc-icon-chevrons-right',
        nextYear: 'fc-icon-chevrons-left',
    };
    StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly
    StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
    StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

    function compileViewDefs(defaultConfigs, overrideConfigs) {
        let hash = {};
        let viewType;
        for (viewType in defaultConfigs) {
            ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        }
        for (viewType in overrideConfigs) {
            ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        }
        return hash;
    }
    function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
        if (hash[viewType]) {
            return hash[viewType];
        }
        let viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        if (viewDef) {
            hash[viewType] = viewDef;
        }
        return viewDef;
    }
    function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
        let defaultConfig = defaultConfigs[viewType];
        let overrideConfig = overrideConfigs[viewType];
        let queryProp = function (name) { return ((defaultConfig && defaultConfig[name] !== null) ? defaultConfig[name] :
            ((overrideConfig && overrideConfig[name] !== null) ? overrideConfig[name] : null)); };
        let theComponent = queryProp('component');
        let superType = queryProp('superType');
        let superDef = null;
        if (superType) {
            if (superType === viewType) {
                throw new Error('Can\'t have a custom view type that references itself');
            }
            superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
        }
        if (!theComponent && superDef) {
            theComponent = superDef.component;
        }
        if (!theComponent) {
            return null; // don't throw a warning, might be settings for a single-unit view
        }
        return {
            type: viewType,
            component: theComponent,
            defaults: __assign(__assign({}, (superDef ? superDef.defaults : {})), (defaultConfig ? defaultConfig.rawOptions : {})),
            overrides: __assign(__assign({}, (superDef ? superDef.overrides : {})), (overrideConfig ? overrideConfig.rawOptions : {})),
        };
    }

    /* eslint max-classes-per-file: off */
    // NOTE: in JSX, you should always use this class with <HookProps> arg. otherwise, will default to any???
    let RenderHook = /** @class */ (function (_super) {
        __extends(RenderHook, _super);
        function RenderHook() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rootElRef = createRef();
            _this.handleRootEl = function (el) {
                setRef(_this.rootElRef, el);
                if (_this.props.elRef) {
                    setRef(_this.props.elRef, el);
                }
            };
            return _this;
        }
        RenderHook.prototype.render = function () {
            let _this = this;
            let props = this.props;
            let hookProps = props.hookProps;
            return (createElement(MountHook, { hookProps: hookProps, didMount: props.didMount, willUnmount: props.willUnmount, elRef: this.handleRootEl }, function (rootElRef) { return (createElement(ContentHook, { hookProps: hookProps, content: props.content, defaultContent: props.defaultContent, backupElRef: _this.rootElRef }, function (innerElRef, innerContent) { return props.children(rootElRef, normalizeClassNames(props.classNames, hookProps), innerElRef, innerContent); })); }));
        };
        return RenderHook;
    }(BaseComponent));
    // TODO: rename to be about function, not default. use in above type
    // for forcing rerender of components that use the ContentHook
    let CustomContentRenderContext = createContext(0);
    function ContentHook(props) {
        return (createElement(CustomContentRenderContext.Consumer, null, function (renderId) { return (createElement(ContentHookInner, __assign({ renderId: renderId }, props))); }));
    }
    let ContentHookInner = /** @class */ (function (_super) {
        __extends(ContentHookInner, _super);
        function ContentHookInner() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.innerElRef = createRef();
            return _this;
        }
        ContentHookInner.prototype.render = function () {
            return this.props.children(this.innerElRef, this.renderInnerContent());
        };
        ContentHookInner.prototype.componentDidMount = function () {
            this.updateCustomContent();
        };
        ContentHookInner.prototype.componentDidUpdate = function () {
            this.updateCustomContent();
        };
        ContentHookInner.prototype.componentWillUnmount = function () {
            if (this.customContentInfo && this.customContentInfo.destroy) {
                this.customContentInfo.destroy();
            }
        };
        ContentHookInner.prototype.renderInnerContent = function () {
            let customContentInfo = this.customContentInfo; // only populated if using non-[p]react node(s)
            let innerContent = this.getInnerContent();
            let meta = this.getContentMeta(innerContent);
            // initial run, or content-type changing? (from vue -> react for example)
            if (!customContentInfo || customContentInfo.contentKey !== meta.contentKey) {
                // clearing old value
                if (customContentInfo) {
                    if (customContentInfo.destroy) {
                        customContentInfo.destroy();
                    }
                    customContentInfo = this.customContentInfo = null;
                }
                // assigning new value
                if (meta.contentKey) {
                    customContentInfo = this.customContentInfo = __assign({ contentKey: meta.contentKey, contentVal: innerContent[meta.contentKey] }, meta.buildLifecycleFuncs());
                }
                // updating
            }
            else if (customContentInfo) {
                customContentInfo.contentVal = innerContent[meta.contentKey];
            }
            return customContentInfo
                ? [] // signal that something was specified
                : innerContent; // assume a [p]react vdom node. use it
        };
        ContentHookInner.prototype.getInnerContent = function () {
            let props = this.props;
            let innerContent = normalizeContent(props.content, props.hookProps);
            if (innerContent === undefined) { // use the default
                innerContent = normalizeContent(props.defaultContent, props.hookProps);
            }
            return innerContent == null ? null : innerContent; // convert undefined to null (better for React)
        };
        ContentHookInner.prototype.getContentMeta = function (innerContent) {
            let contentTypeHandlers = this.context.pluginHooks.contentTypeHandlers;
            let contentKey = '';
            let buildLifecycleFuncs = null;
            if (innerContent) { // allowed to be null, for convenience to caller
                for (let searchKey in contentTypeHandlers) {
                    if (innerContent[searchKey] !== undefined) {
                        contentKey = searchKey;
                        buildLifecycleFuncs = contentTypeHandlers[searchKey];
                        break;
                    }
                }
            }
            return { contentKey: contentKey, buildLifecycleFuncs: buildLifecycleFuncs };
        };
        ContentHookInner.prototype.updateCustomContent = function () {
            if (this.customContentInfo) { // for non-[p]react
                this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, // the element to render into
                this.customContentInfo.contentVal);
            }
        };
        return ContentHookInner;
    }(BaseComponent));
    let MountHook = /** @class */ (function (_super) {
        __extends(MountHook, _super);
        function MountHook() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleRootEl = function (rootEl) {
                _this.rootEl = rootEl;
                if (_this.props.elRef) {
                    setRef(_this.props.elRef, rootEl);
                }
            };
            return _this;
        }
        MountHook.prototype.render = function () {
            return this.props.children(this.handleRootEl);
        };
        MountHook.prototype.componentDidMount = function () {
            let callback = this.props.didMount;
            if (callback) {
                callback(__assign(__assign({}, this.props.hookProps), { el: this.rootEl }));
            }
        };
        MountHook.prototype.componentWillUnmount = function () {
            let callback = this.props.willUnmount;
            if (callback) {
                callback(__assign(__assign({}, this.props.hookProps), { el: this.rootEl }));
            }
        };
        return MountHook;
    }(BaseComponent));
    function buildClassNameNormalizer() {
        let currentGenerator;
        let currentHookProps;
        let currentClassNames = [];
        return function (generator, hookProps) {
            if (!currentHookProps || !isPropsEqual(currentHookProps, hookProps) || generator !== currentGenerator) {
                currentGenerator = generator;
                currentHookProps = hookProps;
                currentClassNames = normalizeClassNames(generator, hookProps);
            }
            return currentClassNames;
        };
    }
    function normalizeClassNames(classNames, hookProps) {
        if (typeof classNames === 'function') {
            classNames = classNames(hookProps);
        }
        return parseClassNames(classNames);
    }
    function normalizeContent(input, hookProps) {
        if (typeof input === 'function') {
            return input(hookProps, createElement); // give the function the vdom-creation func
        }
        return input;
    }

    let ViewRoot = /** @class */ (function (_super) {
        __extends(ViewRoot, _super);
        function ViewRoot() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.normalizeClassNames = buildClassNameNormalizer();
            return _this;
        }
        ViewRoot.prototype.render = function () {
            let _a = this, props = _a.props, context = _a.context;
            let options = context.options;
            let hookProps = { view: context.viewApi };
            let customClassNames = this.normalizeClassNames(options.viewClassNames, hookProps);
            return (createElement(MountHook, { hookProps: hookProps, didMount: options.viewDidMount, willUnmount: options.viewWillUnmount, elRef: props.elRef }, function (rootElRef) { return props.children(rootElRef, ["fc-" + props.viewSpec.type + "-view", 'fc-view'].concat(customClassNames)); }));
        };
        return ViewRoot;
    }(BaseComponent));

    function parseViewConfigs(inputs) {
        return mapHash(inputs, parseViewConfig);
    }
    function parseViewConfig(input) {
        let rawOptions = typeof input === 'function' ?
            { component: input } :
            input;
        let component = rawOptions.component;
        if (rawOptions.content) {
            component = createViewHookComponent(rawOptions);
            // TODO: remove content/classNames/didMount/etc from options?
        }
        return {
            superType: rawOptions.type,
            component: component,
            rawOptions: rawOptions,
        };
    }
    function createViewHookComponent(options) {
        return function (viewProps) { return (createElement(ViewContextType.Consumer, null, function (context) { return (createElement(ViewRoot, { viewSpec: context.viewSpec }, function (viewElRef, viewClassNames) {
            let hookProps = __assign(__assign({}, viewProps), { nextDayThreshold: context.options.nextDayThreshold });
            return (createElement(RenderHook, { hookProps: hookProps, classNames: options.classNames, content: options.content, didMount: options.didMount, willUnmount: options.willUnmount, elRef: viewElRef }, function (rootElRef, customClassNames, innerElRef, innerContent) { return (createElement("div", { className: viewClassNames.concat(customClassNames).join(' '), ref: rootElRef }, innerContent)); }));
        })); })); };
    }

    function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
        let defaultConfigs = parseViewConfigs(defaultInputs);
        let overrideConfigs = parseViewConfigs(optionOverrides.views);
        let viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
        return mapHash(viewDefs, function (viewDef) { return buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults); });
    }
    function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
        let durationInput = viewDef.overrides.duration ||
            viewDef.defaults.duration ||
            dynamicOptionOverrides.duration ||
            optionOverrides.duration;
        let duration = null;
        let durationUnit = '';
        let singleUnit = '';
        let singleUnitOverrides = {};
        if (durationInput) {
            duration = createDurationCached(durationInput);
            if (duration) { // valid?
                let denom = greatestDurationDenominator(duration);
                durationUnit = denom.unit;
                if (denom.value === 1) {
                    singleUnit = durationUnit;
                    singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
                }
            }
        }
        let queryButtonText = function (optionsSubset) {
            let buttonTextMap = optionsSubset.buttonText || {};
            let buttonTextKey = viewDef.defaults.buttonTextKey;
            if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
                return buttonTextMap[buttonTextKey];
            }
            if (buttonTextMap[viewDef.type] != null) {
                return buttonTextMap[viewDef.type];
            }
            if (buttonTextMap[singleUnit] != null) {
                return buttonTextMap[singleUnit];
            }
            return null;
        };
        let queryButtonTitle = function (optionsSubset) {
            let buttonHints = optionsSubset.buttonHints || {};
            let buttonKey = viewDef.defaults.buttonTextKey; // use same key as text
            if (buttonKey != null && buttonHints[buttonKey] != null) {
                return buttonHints[buttonKey];
            }
            if (buttonHints[viewDef.type] != null) {
                return buttonHints[viewDef.type];
            }
            if (buttonHints[singleUnit] != null) {
                return buttonHints[singleUnit];
            }
            return null;
        };
        return {
            type: viewDef.type,
            component: viewDef.component,
            duration: duration,
            durationUnit: durationUnit,
            singleUnit: singleUnit,
            optionDefaults: viewDef.defaults,
            optionOverrides: __assign(__assign({}, singleUnitOverrides), viewDef.overrides),
            buttonTextOverride: queryButtonText(dynamicOptionOverrides) ||
                queryButtonText(optionOverrides) || // constructor-specified buttonText lookup hash takes precedence
                viewDef.overrides.buttonText,
            buttonTextDefault: queryButtonText(localeDefaults) ||
                viewDef.defaults.buttonText ||
                queryButtonText(BASE_OPTION_DEFAULTS) ||
                viewDef.type,
            // not DRY
            buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) ||
                queryButtonTitle(optionOverrides) ||
                viewDef.overrides.buttonHint,
            buttonTitleDefault: queryButtonTitle(localeDefaults) ||
                viewDef.defaults.buttonHint ||
                queryButtonTitle(BASE_OPTION_DEFAULTS),
            // will eventually fall back to buttonText
        };
    }
    // hack to get memoization working
    let durationInputMap = {};
    function createDurationCached(durationInput) {
        let json = JSON.stringify(durationInput);
        let res = durationInputMap[json];
        if (res === undefined) {
            res = createDuration(durationInput);
            durationInputMap[json] = res;
        }
        return res;
    }

    let DateProfileGenerator = /** @class */ (function () {
        function DateProfileGenerator(props) {
            this.props = props;
            this.nowDate = getNow(props.nowInput, props.dateEnv);
            this.initHiddenDays();
        }
        /* Date Range Computation
        ------------------------------------------------------------------------------------------------------------------*/
        // Builds a structure with info about what the dates/ranges will be for the "prev" view.
        DateProfileGenerator.prototype.buildPrev = function (currentDateProfile, currentDate, forceToValid) {
            let dateEnv = this.props.dateEnv;
            let prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
            currentDateProfile.dateIncrement);
            return this.build(prevDate, -1, forceToValid);
        };
        // Builds a structure with info about what the dates/ranges will be for the "next" view.
        DateProfileGenerator.prototype.buildNext = function (currentDateProfile, currentDate, forceToValid) {
            let dateEnv = this.props.dateEnv;
            let nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
            currentDateProfile.dateIncrement);
            return this.build(nextDate, 1, forceToValid);
        };
        // Builds a structure holding dates/ranges for rendering around the given date.
        // Optional direction param indicates whether the date is being incremented/decremented
        // from its previous value. decremented = -1, incremented = 1 (default).
        DateProfileGenerator.prototype.build = function (currentDate, direction, forceToValid) {
            if (forceToValid === void 0) { forceToValid = true; }
            let props = this.props;
            let validRange;
            let currentInfo;
            let isRangeAllDay;
            let renderRange;
            let activeRange;
            let isValid;
            validRange = this.buildValidRange();
            validRange = this.trimHiddenDays(validRange);
            if (forceToValid) {
                currentDate = constrainMarkerToRange(currentDate, validRange);
            }
            currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
            isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
            renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
            renderRange = this.trimHiddenDays(renderRange);
            activeRange = renderRange;
            if (!props.showNonCurrentDates) {
                activeRange = intersectRanges(activeRange, currentInfo.range);
            }
            activeRange = this.adjustActiveRange(activeRange);
            activeRange = intersectRanges(activeRange, validRange); // might return null
            // it's invalid if the originally requested date is not contained,
            // or if the range is completely outside of the valid range.
            isValid = rangesIntersect(currentInfo.range, validRange);
            return {
                // constraint for where prev/next operations can go and where events can be dragged/resized to.
                // an object with optional start and end properties.
                validRange: validRange,
                // range the view is formally responsible for.
                // for example, a month view might have 1st-31st, excluding padded dates
                currentRange: currentInfo.range,
                // name of largest unit being displayed, like "month" or "week"
                currentRangeUnit: currentInfo.unit,
                isRangeAllDay: isRangeAllDay,
                // dates that display events and accept drag-n-drop
                // will be `null` if no dates accept events
                activeRange: activeRange,
                // date range with a rendered skeleton
                // includes not-active days that need some sort of DOM
                renderRange: renderRange,
                // Duration object that denotes the first visible time of any given day
                slotMinTime: props.slotMinTime,
                // Duration object that denotes the exclusive visible end time of any given day
                slotMaxTime: props.slotMaxTime,
                isValid: isValid,
                // how far the current date will move for a prev/next operation
                dateIncrement: this.buildDateIncrement(currentInfo.duration),
                // pass a fallback (might be null) ^
            };
        };
        // Builds an object with optional start/end properties.
        // Indicates the minimum/maximum dates to display.
        // not responsible for trimming hidden days.
        DateProfileGenerator.prototype.buildValidRange = function () {
            let input = this.props.validRangeInput;
            let simpleInput = typeof input === 'function'
                ? input.call(this.props.calendarApi, this.nowDate)
                : input;
            return this.refineRange(simpleInput) ||
                { start: null, end: null }; // completely open-ended
        };
        // Builds a structure with info about the "current" range, the range that is
        // highlighted as being the current month for example.
        // See build() for a description of `direction`.
        // Guaranteed to have `range` and `unit` properties. `duration` is optional.
        DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
            let props = this.props;
            let duration = null;
            let unit = null;
            let range = null;
            let dayCount;
            if (props.duration) {
                duration = props.duration;
                unit = props.durationUnit;
                range = this.buildRangeFromDuration(date, direction, duration, unit);
            }
            else if ((dayCount = this.props.dayCount)) {
                unit = 'day';
                range = this.buildRangeFromDayCount(date, direction, dayCount);
            }
            else if ((range = this.buildCustomVisibleRange(date))) {
                unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
            }
            else {
                duration = this.getFallbackDuration();
                unit = greatestDurationDenominator(duration).unit;
                range = this.buildRangeFromDuration(date, direction, duration, unit);
            }
            return { duration: duration, unit: unit, range: range };
        };
        DateProfileGenerator.prototype.getFallbackDuration = function () {
            return createDuration({ day: 1 });
        };
        // Returns a new activeRange to have time values (un-ambiguate)
        // slotMinTime or slotMaxTime causes the range to expand.
        DateProfileGenerator.prototype.adjustActiveRange = function (range) {
            let _a = this.props, dateEnv = _a.dateEnv, usesMinMaxTime = _a.usesMinMaxTime, slotMinTime = _a.slotMinTime, slotMaxTime = _a.slotMaxTime;
            let start = range.start, end = range.end;
            if (usesMinMaxTime) {
                // expand active range if slotMinTime is negative (why not when positive?)
                if (asRoughDays(slotMinTime) < 0) {
                    start = startOfDay(start); // necessary?
                    start = dateEnv.add(start, slotMinTime);
                }
                // expand active range if slotMaxTime is beyond one day (why not when negative?)
                if (asRoughDays(slotMaxTime) > 1) {
                    end = startOfDay(end); // necessary?
                    end = addDays(end, -1);
                    end = dateEnv.add(end, slotMaxTime);
                }
            }
            return { start: start, end: end };
        };
        // Builds the "current" range when it is specified as an explicit duration.
        // `unit` is the already-computed greatestDurationDenominator unit of duration.
        DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
            let _a = this.props, dateEnv = _a.dateEnv, dateAlignment = _a.dateAlignment;
            let start;
            let end;
            let res;
            // compute what the alignment should be
            if (!dateAlignment) {
                let dateIncrement = this.props.dateIncrement;
                if (dateIncrement) {
                    // use the smaller of the two units
                    if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
                        dateAlignment = greatestDurationDenominator(dateIncrement).unit;
                    }
                    else {
                        dateAlignment = unit;
                    }
                }
                else {
                    dateAlignment = unit;
                }
            }
            // if the view displays a single day or smaller
            if (asRoughDays(duration) <= 1) {
                if (this.isHiddenDay(start)) {
                    start = this.skipHiddenDays(start, direction);
                    start = startOfDay(start);
                }
            }
            function computeRes() {
                start = dateEnv.startOf(date, dateAlignment);
                end = dateEnv.add(start, duration);
                res = { start: start, end: end };
            }
            computeRes();
            // if range is completely enveloped by hidden days, go past the hidden days
            if (!this.trimHiddenDays(res)) {
                date = this.skipHiddenDays(date, direction);
                computeRes();
            }
            return res;
        };
        // Builds the "current" range when a dayCount is specified.
        DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
            let _a = this.props, dateEnv = _a.dateEnv, dateAlignment = _a.dateAlignment;
            let runningCount = 0;
            let start = date;
            let end;
            if (dateAlignment) {
                start = dateEnv.startOf(start, dateAlignment);
            }
            start = startOfDay(start);
            start = this.skipHiddenDays(start, direction);
            end = start;
            do {
                end = addDays(end, 1);
                if (!this.isHiddenDay(end)) {
                    runningCount += 1;
                }
            } while (runningCount < dayCount);
            return { start: start, end: end };
        };
        // Builds a normalized range object for the "visible" range,
        // which is a way to define the currentRange and activeRange at the same time.
        DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
            let props = this.props;
            let input = props.visibleRangeInput;
            let simpleInput = typeof input === 'function'
                ? input.call(props.calendarApi, props.dateEnv.toDate(date))
                : input;
            let range = this.refineRange(simpleInput);
            if (range && (range.start == null || range.end == null)) {
                return null;
            }
            return range;
        };
        // Computes the range that will represent the element/cells for *rendering*,
        // but which may have voided days/times.
        // not responsible for trimming hidden days.
        DateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
            return currentRange;
        };
        // Compute the duration value that should be added/substracted to the current date
        // when a prev/next operation happens.
        DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
            let dateIncrement = this.props.dateIncrement;
            let customAlignment;
            if (dateIncrement) {
                return dateIncrement;
            }
            if ((customAlignment = this.props.dateAlignment)) {
                return createDuration(1, customAlignment);
            }
            if (fallback) {
                return fallback;
            }
            return createDuration({ days: 1 });
        };
        DateProfileGenerator.prototype.refineRange = function (rangeInput) {
            if (rangeInput) {
                let range = parseRange(rangeInput, this.props.dateEnv);
                if (range) {
                    range = computeVisibleDayRange(range);
                }
                return range;
            }
            return null;
        };
        /* Hidden Days
        ------------------------------------------------------------------------------------------------------------------*/
        // Initializes internal letiables related to calculating hidden days-of-week
        DateProfileGenerator.prototype.initHiddenDays = function () {
            let hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden
            let isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
            let dayCnt = 0;
            let i;
            if (this.props.weekends === false) {
                hiddenDays.push(0, 6); // 0=sunday, 6=saturday
            }
            for (i = 0; i < 7; i += 1) {
                if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
                    dayCnt += 1;
                }
            }
            if (!dayCnt) {
                throw new Error('invalid hiddenDays'); // all days were hidden? bad.
            }
            this.isHiddenDayHash = isHiddenDayHash;
        };
        // Remove days from the beginning and end of the range that are computed as hidden.
        // If the whole range is trimmed off, returns null
        DateProfileGenerator.prototype.trimHiddenDays = function (range) {
            let start = range.start, end = range.end;
            if (start) {
                start = this.skipHiddenDays(start);
            }
            if (end) {
                end = this.skipHiddenDays(end, -1, true);
            }
            if (start == null || end == null || start < end) {
                return { start: start, end: end };
            }
            return null;
        };
        // Is the current day hidden?
        // `day` is a day-of-week index (0-6), or a Date (used for UTC)
        DateProfileGenerator.prototype.isHiddenDay = function (day) {
            if (day instanceof Date) {
                day = day.getUTCDay();
            }
            return this.isHiddenDayHash[day];
        };
        // Incrementing the current day until it is no longer a hidden day, returning a copy.
        // DOES NOT CONSIDER validRange!
        // If the initial value of `date` is not a hidden day, don't do anything.
        // Pass `isExclusive` as `true` if you are dealing with an end date.
        // `inc` defaults to `1` (increment one day forward each time)
        DateProfileGenerator.prototype.skipHiddenDays = function (date, inc, isExclusive) {
            if (inc === void 0) { inc = 1; }
            if (isExclusive === void 0) { isExclusive = false; }
            while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
                date = addDays(date, inc);
            }
            return date;
        };
        return DateProfileGenerator;
    }());

    function reduceViewType(viewType, action) {
        switch (action.type) {
            case 'CHANGE_VIEW_TYPE':
                viewType = action.viewType;
        }
        return viewType;
    }

    function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
        let _a;
        switch (action.type) {
            case 'SET_OPTION':
                return __assign(__assign({}, dynamicOptionOverrides), (_a = {}, _a[action.optionName] = action.rawOptionValue, _a));
            default:
                return dynamicOptionOverrides;
        }
    }

    function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
        let dp;
        switch (action.type) {
            case 'CHANGE_VIEW_TYPE':
                return dateProfileGenerator.build(action.dateMarker || currentDate);
            case 'CHANGE_DATE':
                return dateProfileGenerator.build(action.dateMarker);
            case 'PREV':
                dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
                if (dp.isValid) {
                    return dp;
                }
                break;
            case 'NEXT':
                dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
                if (dp.isValid) {
                    return dp;
                }
                break;
        }
        return currentDateProfile;
    }

    function initEventSources(calendarOptions, dateProfile, context) {
        let activeRange = dateProfile ? dateProfile.activeRange : null;
        return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
    }
    function reduceEventSources(eventSources, action, dateProfile, context) {
        let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
        switch (action.type) {
            case 'ADD_EVENT_SOURCES': // already parsed
                return addSources(eventSources, action.sources, activeRange, context);
            case 'REMOVE_EVENT_SOURCE':
                return removeSource(eventSources, action.sourceId);
            case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
            case 'NEXT':
            case 'CHANGE_DATE':
            case 'CHANGE_VIEW_TYPE':
                if (dateProfile) {
                    return fetchDirtySources(eventSources, activeRange, context);
                }
                return eventSources;
            case 'FETCH_EVENT_SOURCES':
                return fetchSourcesByIds(eventSources, action.sourceIds ? // why no type?
                    arrayToHash(action.sourceIds) :
                    excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
            case 'RECEIVE_EVENTS':
            case 'RECEIVE_EVENT_ERROR':
                return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
            case 'REMOVE_ALL_EVENT_SOURCES':
                return {};
            default:
                return eventSources;
        }
    }
    function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
        let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
        return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
    }
    function computeEventSourcesLoading(eventSources) {
        for (let sourceId in eventSources) {
            if (eventSources[sourceId].isFetching) {
                return true;
            }
        }
        return false;
    }
    function addSources(eventSourceHash, sources, fetchRange, context) {
        let hash = {};
        for (let _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
            let source = sources_1[_i];
            hash[source.sourceId] = source;
        }
        if (fetchRange) {
            hash = fetchDirtySources(hash, fetchRange, context);
        }
        return __assign(__assign({}, eventSourceHash), hash);
    }
    function removeSource(eventSourceHash, sourceId) {
        return filterHash(eventSourceHash, function (eventSource) { return eventSource.sourceId !== sourceId; });
    }
    function fetchDirtySources(sourceHash, fetchRange, context) {
        return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function (eventSource) { return isSourceDirty(eventSource, fetchRange, context); }), fetchRange, false, context);
    }
    function isSourceDirty(eventSource, fetchRange, context) {
        if (!doesSourceNeedRange(eventSource, context)) {
            return !eventSource.latestFetchId;
        }
        return !context.options.lazyFetching ||
            !eventSource.fetchRange ||
            eventSource.isFetching || // always cancel outdated in-progress fetches
            fetchRange.start < eventSource.fetchRange.start ||
            fetchRange.end > eventSource.fetchRange.end;
    }
    function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
        let nextSources = {};
        for (let sourceId in prevSources) {
            let source = prevSources[sourceId];
            if (sourceIdHash[sourceId]) {
                nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
            }
            else {
                nextSources[sourceId] = source;
            }
        }
        return nextSources;
    }
    function fetchSource(eventSource, fetchRange, isRefetch, context) {
        let options = context.options, calendarApi = context.calendarApi;
        let sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
        let fetchId = guid();
        sourceDef.fetch({
            eventSource: eventSource,
            range: fetchRange,
            isRefetch: isRefetch,
            context: context,
        }, function (res) {
            let rawEvents = res.rawEvents;
            if (options.eventSourceSuccess) {
                rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.xhr) || rawEvents;
            }
            if (eventSource.success) {
                rawEvents = eventSource.success.call(calendarApi, rawEvents, res.xhr) || rawEvents;
            }
            context.dispatch({
                type: 'RECEIVE_EVENTS',
                sourceId: eventSource.sourceId,
                fetchId: fetchId,
                fetchRange: fetchRange,
                rawEvents: rawEvents,
            });
        }, function (error) {
            console.warn(error.message, error);
            if (options.eventSourceFailure) {
                options.eventSourceFailure.call(calendarApi, error);
            }
            if (eventSource.failure) {
                eventSource.failure(error);
            }
            context.dispatch({
                type: 'RECEIVE_EVENT_ERROR',
                sourceId: eventSource.sourceId,
                fetchId: fetchId,
                fetchRange: fetchRange,
                error: error,
            });
        });
        return __assign(__assign({}, eventSource), { isFetching: true, latestFetchId: fetchId });
    }
    function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
        let _a;
        let eventSource = sourceHash[sourceId];
        if (eventSource && // not already removed
            fetchId === eventSource.latestFetchId) {
            return __assign(__assign({}, sourceHash), (_a = {}, _a[sourceId] = __assign(__assign({}, eventSource), { isFetching: false, fetchRange: fetchRange }), _a));
        }
        return sourceHash;
    }
    function excludeStaticSources(eventSources, context) {
        return filterHash(eventSources, function (eventSource) { return doesSourceNeedRange(eventSource, context); });
    }
    function parseInitialSources(rawOptions, context) {
        let refiners = buildEventSourceRefiners(context);
        let rawSources = [].concat(rawOptions.eventSources || []);
        let sources = []; // parsed
        if (rawOptions.initialEvents) {
            rawSources.unshift(rawOptions.initialEvents);
        }
        if (rawOptions.events) {
            rawSources.unshift(rawOptions.events);
        }
        for (let _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
            let rawSource = rawSources_1[_i];
            let source = parseEventSource(rawSource, context, refiners);
            if (source) {
                sources.push(source);
            }
        }
        return sources;
    }
    function doesSourceNeedRange(eventSource, context) {
        let defs = context.pluginHooks.eventSourceDefs;
        return !defs[eventSource.sourceDefId].ignoreRange;
    }

    function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
        switch (action.type) {
            case 'RECEIVE_EVENTS': // raw
                return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
            case 'ADD_EVENTS': // already parsed, but not expanded
                return addEvent(eventStore, action.eventStore, // new ones
                dateProfile ? dateProfile.activeRange : null, context);
            case 'RESET_EVENTS':
                return action.eventStore;
            case 'MERGE_EVENTS': // already parsed and expanded
                return mergeEventStores(eventStore, action.eventStore);
            case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
            case 'NEXT':
            case 'CHANGE_DATE':
            case 'CHANGE_VIEW_TYPE':
                if (dateProfile) {
                    return expandRecurring(eventStore, dateProfile.activeRange, context);
                }
                return eventStore;
            case 'REMOVE_EVENTS':
                return excludeSubEventStore(eventStore, action.eventStore);
            case 'REMOVE_EVENT_SOURCE':
                return excludeEventsBySourceId(eventStore, action.sourceId);
            case 'REMOVE_ALL_EVENT_SOURCES':
                return filterEventStoreDefs(eventStore, function (eventDef) { return (!eventDef.sourceId // only keep events with no source id
                ); });
            case 'REMOVE_ALL_EVENTS':
                return createEmptyEventStore();
            default:
                return eventStore;
        }
    }
    function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
        if (eventSource && // not already removed
            fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
        ) {
            let subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
            if (fetchRange) {
                subset = expandRecurring(subset, fetchRange, context);
            }
            return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
        }
        return eventStore;
    }
    function transformRawEvents(rawEvents, eventSource, context) {
        let calEachTransform = context.options.eventDataTransform;
        let sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
        if (sourceEachTransform) {
            rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
        }
        if (calEachTransform) {
            rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
        }
        return rawEvents;
    }
    function transformEachRawEvent(rawEvents, func) {
        let refinedEvents;
        if (!func) {
            refinedEvents = rawEvents;
        }
        else {
            refinedEvents = [];
            for (let _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
                let rawEvent = rawEvents_1[_i];
                let refinedEvent = func(rawEvent);
                if (refinedEvent) {
                    refinedEvents.push(refinedEvent);
                }
                else if (refinedEvent == null) {
                    refinedEvents.push(rawEvent);
                } // if a different falsy value, do nothing
            }
        }
        return refinedEvents;
    }
    function addEvent(eventStore, subset, expandRange, context) {
        if (expandRange) {
            subset = expandRecurring(subset, expandRange, context);
        }
        return mergeEventStores(eventStore, subset);
    }
    function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
        let defs = eventStore.defs;
        let instances = mapHash(eventStore.instances, function (instance) {
            let def = defs[instance.defId];
            if (def.allDay || def.recurringDef) {
                return instance; // isn't dependent on timezone
            }
            return __assign(__assign({}, instance), { range: {
                    start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
                    end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo)),
                }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
        });
        return { defs: defs, instances: instances };
    }
    function excludeEventsBySourceId(eventStore, sourceId) {
        return filterEventStoreDefs(eventStore, function (eventDef) { return eventDef.sourceId !== sourceId; });
    }
    // QUESTION: why not just return instances? do a general object-property-exclusion util
    function excludeInstances(eventStore, removals) {
        return {
            defs: eventStore.defs,
            instances: filterHash(eventStore.instances, function (instance) { return !removals[instance.instanceId]; }),
        };
    }

    function reduceDateSelection(currentSelection, action) {
        switch (action.type) {
            case 'UNSELECT_DATES':
                return null;
            case 'SELECT_DATES':
                return action.selection;
            default:
                return currentSelection;
        }
    }

    function reduceSelectedEvent(currentInstanceId, action) {
        switch (action.type) {
            case 'UNSELECT_EVENT':
                return '';
            case 'SELECT_EVENT':
                return action.eventInstanceId;
            default:
                return currentInstanceId;
        }
    }

    function reduceEventDrag(currentDrag, action) {
        let newDrag;
        switch (action.type) {
            case 'UNSET_EVENT_DRAG':
                return null;
            case 'SET_EVENT_DRAG':
                newDrag = action.state;
                return {
                    affectedEvents: newDrag.affectedEvents,
                    mutatedEvents: newDrag.mutatedEvents,
                    isEvent: newDrag.isEvent,
                };
            default:
                return currentDrag;
        }
    }

    function reduceEventResize(currentResize, action) {
        let newResize;
        switch (action.type) {
            case 'UNSET_EVENT_RESIZE':
                return null;
            case 'SET_EVENT_RESIZE':
                newResize = action.state;
                return {
                    affectedEvents: newResize.affectedEvents,
                    mutatedEvents: newResize.mutatedEvents,
                    isEvent: newResize.isEvent,
                };
            default:
                return currentResize;
        }
    }

    function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
        let header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
        let footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
        return { header: header, footer: footer };
    }
    function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
        let sectionWidgets = {};
        let viewsWithButtons = [];
        let hasTitle = false;
        for (let sectionName in sectionStrHash) {
            let sectionStr = sectionStrHash[sectionName];
            let sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
            sectionWidgets[sectionName] = sectionRes.widgets;
            viewsWithButtons.push.apply(viewsWithButtons, sectionRes.viewsWithButtons);
            hasTitle = hasTitle || sectionRes.hasTitle;
        }
        return { sectionWidgets: sectionWidgets, viewsWithButtons: viewsWithButtons, hasTitle: hasTitle };
    }
    /*
    BAD: querying icons and text here. should be done at render time
    */
    function parseSection(sectionStr, calendarOptions, // defaults+overrides, then refined
    calendarOptionOverrides, // overrides only!, unrefined :(
    theme, viewSpecs, calendarApi) {
        let isRtl = calendarOptions.direction === 'rtl';
        let calendarCustomButtons = calendarOptions.customButtons || {};
        let calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
        let calendarButtonText = calendarOptions.buttonText || {};
        let calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
        let calendarButtonHints = calendarOptions.buttonHints || {};
        let sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
        let viewsWithButtons = [];
        let hasTitle = false;
        let widgets = sectionSubstrs.map(function (buttonGroupStr) { return (buttonGroupStr.split(',').map(function (buttonName) {
            if (buttonName === 'title') {
                hasTitle = true;
                return { buttonName: buttonName };
            }
            let customButtonProps;
            let viewSpec;
            let buttonClick;
            let buttonIcon; // only one of these will be set
            let buttonText; // "
            let buttonHint;
            // ^ for the title="" attribute, for accessibility
            if ((customButtonProps = calendarCustomButtons[buttonName])) {
                buttonClick = function (ev) {
                    if (customButtonProps.click) {
                        customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
                    }
                };
                (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                    (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                    (buttonText = customButtonProps.text);
                buttonHint = customButtonProps.hint || customButtonProps.text;
            }
            else if ((viewSpec = viewSpecs[buttonName])) {
                viewsWithButtons.push(buttonName);
                buttonClick = function () {
                    calendarApi.changeView(buttonName);
                };
                (buttonText = viewSpec.buttonTextOverride) ||
                    (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                    (buttonText = viewSpec.buttonTextDefault);
                let textFallback = viewSpec.buttonTextOverride ||
                    viewSpec.buttonTextDefault;
                buttonHint = formatWithOrdinals(viewSpec.buttonTitleOverride ||
                    viewSpec.buttonTitleDefault ||
                    calendarOptions.viewHint, [textFallback, buttonName], // view-name = buttonName
                textFallback);
            }
            else if (calendarApi[buttonName]) { // a calendarApi method
                buttonClick = function () {
                    calendarApi[buttonName]();
                };
                (buttonText = calendarButtonTextOverrides[buttonName]) ||
                    (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                    (buttonText = calendarButtonText[buttonName]); // everything else is considered default
                if (buttonName === 'prevYear' || buttonName === 'nextYear') {
                    let prevOrNext = buttonName === 'prevYear' ? 'prev' : 'next';
                    buttonHint = formatWithOrdinals(calendarButtonHintOverrides[prevOrNext] ||
                        calendarButtonHints[prevOrNext], [
                        calendarButtonText.year || 'year',
                        'year',
                    ], calendarButtonText[buttonName]);
                }
                else {
                    buttonHint = function (navUnit) { return formatWithOrdinals(calendarButtonHintOverrides[buttonName] ||
                        calendarButtonHints[buttonName], [
                        calendarButtonText[navUnit] || navUnit,
                        navUnit,
                    ], calendarButtonText[buttonName]); };
                }
            }
            return { buttonName: buttonName, buttonClick: buttonClick, buttonIcon: buttonIcon, buttonText: buttonText, buttonHint: buttonHint };
        })); });
        return { widgets: widgets, viewsWithButtons: viewsWithButtons, hasTitle: hasTitle };
    }

    let eventSourceDef$3 = {
        ignoreRange: true,
        parseMeta: function (refined) {
            if (Array.isArray(refined.events)) {
                return refined.events;
            }
            return null;
        },
        fetch: function (arg, success) {
            success({
                rawEvents: arg.eventSource.meta,
            });
        },
    };
    let arrayEventSourcePlugin = createPlugin({
        eventSourceDefs: [eventSourceDef$3],
    });

    let eventSourceDef$2 = {
        parseMeta: function (refined) {
            if (typeof refined.events === 'function') {
                return refined.events;
            }
            return null;
        },
        fetch: function (arg, success, failure) {
            let dateEnv = arg.context.dateEnv;
            let func = arg.eventSource.meta;
            unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), function (rawEvents) {
                success({ rawEvents: rawEvents }); // needs an object response
            }, failure);
        },
    };
    let funcEventSourcePlugin = createPlugin({
        eventSourceDefs: [eventSourceDef$2],
    });

    function requestJson(method, url, params, successCallback, failureCallback) {
        method = method.toUpperCase();
        let body = null;
        if (method === 'GET') {
            url = injectQueryStringParams(url, params);
        }
        else {
            body = encodeParams(params);
        }
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (method !== 'GET') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                let parsed = false;
                let res = void 0;
                try {
                    res = JSON.parse(xhr.responseText);
                    parsed = true;
                }
                catch (err) {
                    // will handle parsed=false
                }
                if (parsed) {
                    successCallback(res, xhr);
                }
                else {
                    failureCallback('Failure parsing JSON', xhr);
                }
            }
            else {
                failureCallback('Request failed', xhr);
            }
        };
        xhr.onerror = function () {
            failureCallback('Request failed', xhr);
        };
        xhr.send(body);
    }
    function injectQueryStringParams(url, params) {
        return url +
            (url.indexOf('?') === -1 ? '?' : '&') +
            encodeParams(params);
    }
    function encodeParams(params) {
        let parts = [];
        for (let key in params) {
            parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
        }
        return parts.join('&');
    }

    let JSON_FEED_EVENT_SOURCE_REFINERS = {
        method: String,
        extraParams: identity,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
    };

    let eventSourceDef$1 = {
        parseMeta: function (refined) {
            if (refined.url && (refined.format === 'json' || !refined.format)) {
                return {
                    url: refined.url,
                    format: 'json',
                    method: (refined.method || 'GET').toUpperCase(),
                    extraParams: refined.extraParams,
                    startParam: refined.startParam,
                    endParam: refined.endParam,
                    timeZoneParam: refined.timeZoneParam,
                };
            }
            return null;
        },
        fetch: function (arg, success, failure) {
            let meta = arg.eventSource.meta;
            let requestParams = buildRequestParams$1(meta, arg.range, arg.context);
            requestJson(meta.method, meta.url, requestParams, function (rawEvents, xhr) {
                success({ rawEvents: rawEvents, xhr: xhr });
            }, function (errorMessage, xhr) {
                failure({ message: errorMessage, xhr: xhr });
            });
        },
    };
    let jsonFeedEventSourcePlugin = createPlugin({
        eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
        eventSourceDefs: [eventSourceDef$1],
    });
    function buildRequestParams$1(meta, range, context) {
        let dateEnv = context.dateEnv, options = context.options;
        let startParam;
        let endParam;
        let timeZoneParam;
        let customRequestParams;
        let params = {};
        startParam = meta.startParam;
        if (startParam == null) {
            startParam = options.startParam;
        }
        endParam = meta.endParam;
        if (endParam == null) {
            endParam = options.endParam;
        }
        timeZoneParam = meta.timeZoneParam;
        if (timeZoneParam == null) {
            timeZoneParam = options.timeZoneParam;
        }
        // retrieve any outbound GET/POST data from the options
        if (typeof meta.extraParams === 'function') {
            // supplied as a function that returns a key/value object
            customRequestParams = meta.extraParams();
        }
        else {
            // probably supplied as a straight key/value object
            customRequestParams = meta.extraParams || {};
        }
        __assign(params, customRequestParams);
        params[startParam] = dateEnv.formatIso(range.start);
        params[endParam] = dateEnv.formatIso(range.end);
        if (dateEnv.timeZone !== 'local') {
            params[timeZoneParam] = dateEnv.timeZone;
        }
        return params;
    }

    let SIMPLE_RECURRING_REFINERS = {
        daysOfWeek: identity,
        startTime: createDuration,
        endTime: createDuration,
        duration: createDuration,
        startRecur: identity,
        endRecur: identity,
    };

    let recurring = {
        parse: function (refined, dateEnv) {
            if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
                let recurringData = {
                    daysOfWeek: refined.daysOfWeek || null,
                    startTime: refined.startTime || null,
                    endTime: refined.endTime || null,
                    startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
                    endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null,
                };
                let duration = void 0;
                if (refined.duration) {
                    duration = refined.duration;
                }
                if (!duration && refined.startTime && refined.endTime) {
                    duration = subtractDurations(refined.endTime, refined.startTime);
                }
                return {
                    allDayGuess: Boolean(!refined.startTime && !refined.endTime),
                    duration: duration,
                    typeData: recurringData, // doesn't need endTime anymore but oh well
                };
            }
            return null;
        },
        expand: function (typeData, framingRange, dateEnv) {
            let clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
            if (clippedFramingRange) {
                return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
            }
            return [];
        },
    };
    let simpleRecurringEventsPlugin = createPlugin({
        recurringTypes: [recurring],
        eventRefiners: SIMPLE_RECURRING_REFINERS,
    });
    function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
        let dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
        let dayMarker = startOfDay(framingRange.start);
        let endMarker = framingRange.end;
        let instanceStarts = [];
        while (dayMarker < endMarker) {
            let instanceStart 
            // if everyday, or this particular day-of-week
            = void 0;
            // if everyday, or this particular day-of-week
            if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
                if (startTime) {
                    instanceStart = dateEnv.add(dayMarker, startTime);
                }
                else {
                    instanceStart = dayMarker;
                }
                instanceStarts.push(instanceStart);
            }
            dayMarker = addDays(dayMarker, 1);
        }
        return instanceStarts;
    }

    let changeHandlerPlugin = createPlugin({
        optionChangeHandlers: {
            events: function (events, context) {
                handleEventSources([events], context);
            },
            eventSources: handleEventSources,
        },
    });
    /*
    BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
    */
    function handleEventSources(inputs, context) {
        let unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
        let newInputs = [];
        for (let _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            let input = inputs_1[_i];
            let inputFound = false;
            for (let i = 0; i < unfoundSources.length; i += 1) {
                if (unfoundSources[i]._raw === input) {
                    unfoundSources.splice(i, 1); // delete
                    inputFound = true;
                    break;
                }
            }
            if (!inputFound) {
                newInputs.push(input);
            }
        }
        for (let _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
            let unfoundSource = unfoundSources_1[_a];
            context.dispatch({
                type: 'REMOVE_EVENT_SOURCE',
                sourceId: unfoundSource.sourceId,
            });
        }
        for (let _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
            let newInput = newInputs_1[_b];
            context.calendarApi.addEventSource(newInput);
        }
    }

    function handleDateProfile(dateProfile, context) {
        context.emitter.trigger('datesSet', __assign(__assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), { view: context.viewApi }));
    }

    function handleEventStore(eventStore, context) {
        let emitter = context.emitter;
        if (emitter.hasHandlers('eventsSet')) {
            emitter.trigger('eventsSet', buildEventApis(eventStore, context));
        }
    }

    /*
    this array is exposed on the root namespace so that UMD plugins can add to it.
    see the rollup-bundles script.
    */
    let globalPlugins = [
        arrayEventSourcePlugin,
        funcEventSourcePlugin,
        jsonFeedEventSourcePlugin,
        simpleRecurringEventsPlugin,
        changeHandlerPlugin,
        createPlugin({
            isLoadingFuncs: [
                function (state) { return computeEventSourcesLoading(state.eventSources); },
            ],
            contentTypeHandlers: {
                html: buildHtmlRenderer,
                domNodes: buildDomNodeRenderer,
            },
            propSetHandlers: {
                dateProfile: handleDateProfile,
                eventStore: handleEventStore,
            },
        }),
    ];
    function buildHtmlRenderer() {
        let currentEl = null;
        let currentHtml = '';
        function render(el, html) {
            if (el !== currentEl || html !== currentHtml) {
                el.innerHTML = html;
            }
            currentEl = el;
            currentHtml = html;
        }
        function destroy() {
            currentEl.innerHTML = '';
            currentEl = null;
            currentHtml = '';
        }
        return { render: render, destroy: destroy };
    }
    function buildDomNodeRenderer() {
        let currentEl = null;
        let currentDomNodes = [];
        function render(el, domNodes) {
            let newDomNodes = Array.prototype.slice.call(domNodes);
            if (el !== currentEl || !isArraysEqual(currentDomNodes, newDomNodes)) {
                // append first, remove second (for scroll resetting)
                for (let _i = 0, newDomNodes_1 = newDomNodes; _i < newDomNodes_1.length; _i++) {
                    let newNode = newDomNodes_1[_i];
                    el.appendChild(newNode);
                }
                destroy();
            }
            currentEl = el;
            currentDomNodes = newDomNodes;
        }
        function destroy() {
            currentDomNodes.forEach(removeElement);
            currentDomNodes = [];
            currentEl = null;
        }
        return { render: render, destroy: destroy };
    }

    let DelayedRunner = /** @class */ (function () {
        function DelayedRunner(drainedOption) {
            this.drainedOption = drainedOption;
            this.isRunning = false;
            this.isDirty = false;
            this.pauseDepths = {};
            this.timeoutId = 0;
        }
        DelayedRunner.prototype.request = function (delay) {
            this.isDirty = true;
            if (!this.isPaused()) {
                this.clearTimeout();
                if (delay == null) {
                    this.tryDrain();
                }
                else {
                    this.timeoutId = setTimeout(// NOT OPTIMAL! TODO: look at debounce
                    this.tryDrain.bind(this), delay);
                }
            }
        };
        DelayedRunner.prototype.pause = function (scope) {
            if (scope === void 0) { scope = ''; }
            let pauseDepths = this.pauseDepths;
            pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
            this.clearTimeout();
        };
        DelayedRunner.prototype.resume = function (scope, force) {
            if (scope === void 0) { scope = ''; }
            let pauseDepths = this.pauseDepths;
            if (scope in pauseDepths) {
                if (force) {
                    delete pauseDepths[scope];
                }
                else {
                    pauseDepths[scope] -= 1;
                    let depth = pauseDepths[scope];
                    if (depth <= 0) {
                        delete pauseDepths[scope];
                    }
                }
                this.tryDrain();
            }
        };
        DelayedRunner.prototype.isPaused = function () {
            return Object.keys(this.pauseDepths).length;
        };
        DelayedRunner.prototype.tryDrain = function () {
            if (!this.isRunning && !this.isPaused()) {
                this.isRunning = true;
                while (this.isDirty) {
                    this.isDirty = false;
                    this.drained(); // might set isDirty to true again
                }
                this.isRunning = false;
            }
        };
        DelayedRunner.prototype.clear = function () {
            this.clearTimeout();
            this.isDirty = false;
            this.pauseDepths = {};
        };
        DelayedRunner.prototype.clearTimeout = function () {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = 0;
            }
        };
        DelayedRunner.prototype.drained = function () {
            if (this.drainedOption) {
                this.drainedOption();
            }
        };
        return DelayedRunner;
    }());

    let TaskRunner = /** @class */ (function () {
        function TaskRunner(runTaskOption, drainedOption) {
            this.runTaskOption = runTaskOption;
            this.drainedOption = drainedOption;
            this.queue = [];
            this.delayedRunner = new DelayedRunner(this.drain.bind(this));
        }
        TaskRunner.prototype.request = function (task, delay) {
            this.queue.push(task);
            this.delayedRunner.request(delay);
        };
        TaskRunner.prototype.pause = function (scope) {
            this.delayedRunner.pause(scope);
        };
        TaskRunner.prototype.resume = function (scope, force) {
            this.delayedRunner.resume(scope, force);
        };
        TaskRunner.prototype.drain = function () {
            let queue = this.queue;
            while (queue.length) {
                let completedTasks = [];
                let task = void 0;
                while ((task = queue.shift())) {
                    this.runTask(task);
                    completedTasks.push(task);
                }
                this.drained(completedTasks);
            } // keep going, in case new tasks were added in the drained handler
        };
        TaskRunner.prototype.runTask = function (task) {
            if (this.runTaskOption) {
                this.runTaskOption(task);
            }
        };
        TaskRunner.prototype.drained = function (completedTasks) {
            if (this.drainedOption) {
                this.drainedOption(completedTasks);
            }
        };
        return TaskRunner;
    }());

    // Computes what the title at the top of the calendarApi should be for this view
    function buildTitle(dateProfile, viewOptions, dateEnv) {
        let range;
        // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
        if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
            range = dateProfile.currentRange;
        }
        else { // for day units or smaller, use the actual day range
            range = dateProfile.activeRange;
        }
        return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
            isEndExclusive: dateProfile.isRangeAllDay,
            defaultSeparator: viewOptions.titleRangeSeparator,
        });
    }
    // Generates the format string that should be used to generate the title for the current date range.
    // Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
    function buildTitleFormat(dateProfile) {
        let currentRangeUnit = dateProfile.currentRangeUnit;
        if (currentRangeUnit === 'year') {
            return { year: 'numeric' };
        }
        if (currentRangeUnit === 'month') {
            return { year: 'numeric', month: 'long' }; // like "September 2014"
        }
        let days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
        if (days !== null && days > 1) {
            // multi-day range. shorter, like "Sep 9 - 10 2014"
            return { year: 'numeric', month: 'short', day: 'numeric' };
        }
        // one day. longer, like "September 9 2014"
        return { year: 'numeric', month: 'long', day: 'numeric' };
    }

    // in future refactor, do the redux-style function(state=initial) for initial-state
    // also, whatever is happening in constructor, have it happen in action queue too
    let CalendarDataManager = /** @class */ (function () {
        function CalendarDataManager(props) {
            let _this = this;
            this.computeOptionsData = memoize(this._computeOptionsData);
            this.computeCurrentViewData = memoize(this._computeCurrentViewData);
            this.organizeRawLocales = memoize(organizeRawLocales);
            this.buildLocale = memoize(buildLocale);
            this.buildPluginHooks = buildBuildPluginHooks();
            this.buildDateEnv = memoize(buildDateEnv);
            this.buildTheme = memoize(buildTheme);
            this.parseToolbars = memoize(parseToolbars);
            this.buildViewSpecs = memoize(buildViewSpecs);
            this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
            this.buildViewApi = memoize(buildViewApi);
            this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
            this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
            this.buildEventUiBases = memoize(buildEventUiBases);
            this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
            this.buildTitle = memoize(buildTitle);
            this.emitter = new Emitter();
            this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
            this.currentCalendarOptionsInput = {};
            this.currentCalendarOptionsRefined = {};
            this.currentViewOptionsInput = {};
            this.currentViewOptionsRefined = {};
            this.currentCalendarOptionsRefiners = {};
            this.getCurrentData = function () { return _this.data; };
            this.dispatch = function (action) {
                _this.actionRunner.request(action); // protects against recursive calls to _handleAction
            };
            this.props = props;
            this.actionRunner.pause();
            let dynamicOptionOverrides = {};
            let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
            let currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
            let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
            // wire things up
            // TODO: not DRY
            props.calendarApi.currentDataManager = this;
            this.emitter.setThisContext(props.calendarApi);
            this.emitter.setOptions(currentViewData.options);
            let currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
            let dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
            if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
                currentDate = dateProfile.currentRange.start;
            }
            let calendarContext = {
                dateEnv: optionsData.dateEnv,
                options: optionsData.calendarOptions,
                pluginHooks: optionsData.pluginHooks,
                calendarApi: props.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData,
            };
            // needs to be after setThisContext
            for (let _i = 0, _a = optionsData.pluginHooks.contextInit; _i < _a.length; _i++) {
                let callback = _a[_i];
                callback(calendarContext);
            }
            // NOT DRY
            let eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
            let initialState = {
                dynamicOptionOverrides: dynamicOptionOverrides,
                currentViewType: currentViewType,
                currentDate: currentDate,
                dateProfile: dateProfile,
                businessHours: this.parseContextBusinessHours(calendarContext),
                eventSources: eventSources,
                eventUiBases: {},
                eventStore: createEmptyEventStore(),
                renderableEventStore: createEmptyEventStore(),
                dateSelection: null,
                eventSelection: '',
                eventDrag: null,
                eventResize: null,
                selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig,
            };
            let contextAndState = __assign(__assign({}, calendarContext), initialState);
            for (let _b = 0, _c = optionsData.pluginHooks.reducers; _b < _c.length; _b++) {
                let reducer = _c[_b];
                __assign(initialState, reducer(null, null, contextAndState));
            }
            if (computeIsLoading(initialState, calendarContext)) {
                this.emitter.trigger('loading', true); // NOT DRY
            }
            this.state = initialState;
            this.updateData();
            this.actionRunner.resume();
        }
        CalendarDataManager.prototype.resetOptions = function (optionOverrides, append) {
            let props = this.props;
            props.optionOverrides = append
                ? __assign(__assign({}, props.optionOverrides), optionOverrides) : optionOverrides;
            this.actionRunner.request({
                type: 'NOTHING',
            });
        };
        CalendarDataManager.prototype._handleAction = function (action) {
            let _a = this, props = _a.props, state = _a.state, emitter = _a.emitter;
            let dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
            let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
            let currentViewType = reduceViewType(state.currentViewType, action);
            let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
            // wire things up
            // TODO: not DRY
            props.calendarApi.currentDataManager = this;
            emitter.setThisContext(props.calendarApi);
            emitter.setOptions(currentViewData.options);
            let calendarContext = {
                dateEnv: optionsData.dateEnv,
                options: optionsData.calendarOptions,
                pluginHooks: optionsData.pluginHooks,
                calendarApi: props.calendarApi,
                dispatch: this.dispatch,
                emitter: emitter,
                getCurrentData: this.getCurrentData,
            };
            let currentDate = state.currentDate, dateProfile = state.dateProfile;
            if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) { // hack
                dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
            }
            currentDate = reduceCurrentDate(currentDate, action);
            dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
            if (action.type === 'PREV' || // TODO: move this logic into DateProfileGenerator
                action.type === 'NEXT' || // "
                !rangeContainsMarker(dateProfile.currentRange, currentDate)) {
                currentDate = dateProfile.currentRange.start;
            }
            let eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
            let eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
            let isEventsLoading = computeEventSourcesLoading(eventSources); // BAD. also called in this func in computeIsLoading
            let renderableEventStore = (isEventsLoading && !currentViewData.options.progressiveEventRendering) ?
                (state.renderableEventStore || eventStore) : // try from previous state
                eventStore;
            let _b = this.buildViewUiProps(calendarContext), eventUiSingleBase = _b.eventUiSingleBase, selectionConfig = _b.selectionConfig; // will memoize obj
            let eventUiBySource = this.buildEventUiBySource(eventSources);
            let eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
            let newState = {
                dynamicOptionOverrides: dynamicOptionOverrides,
                currentViewType: currentViewType,
                currentDate: currentDate,
                dateProfile: dateProfile,
                eventSources: eventSources,
                eventStore: eventStore,
                renderableEventStore: renderableEventStore,
                selectionConfig: selectionConfig,
                eventUiBases: eventUiBases,
                businessHours: this.parseContextBusinessHours(calendarContext),
                dateSelection: reduceDateSelection(state.dateSelection, action),
                eventSelection: reduceSelectedEvent(state.eventSelection, action),
                eventDrag: reduceEventDrag(state.eventDrag, action),
                eventResize: reduceEventResize(state.eventResize, action),
            };
            let contextAndState = __assign(__assign({}, calendarContext), newState);
            for (let _i = 0, _c = optionsData.pluginHooks.reducers; _i < _c.length; _i++) {
                let reducer = _c[_i];
                __assign(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value
            }
            let wasLoading = computeIsLoading(state, calendarContext);
            let isLoading = computeIsLoading(newState, calendarContext);
            // TODO: use propSetHandlers in plugin system
            if (!wasLoading && isLoading) {
                emitter.trigger('loading', true);
            }
            else if (wasLoading && !isLoading) {
                emitter.trigger('loading', false);
            }
            this.state = newState;
            if (props.onAction) {
                props.onAction(action);
            }
        };
        CalendarDataManager.prototype.updateData = function () {
            let _a = this, props = _a.props, state = _a.state;
            let oldData = this.data;
            let optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
            let currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
            let data = this.data = __assign(__assign(__assign({ viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv), calendarApi: props.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, optionsData), currentViewData), state);
            let changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
            let oldCalendarOptions = oldData && oldData.calendarOptions;
            let newCalendarOptions = optionsData.calendarOptions;
            if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
                if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
                    // hack
                    state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
                    state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
                }
                for (let optionName in changeHandlers) {
                    if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
                        changeHandlers[optionName](newCalendarOptions[optionName], data);
                    }
                }
            }
            if (props.onData) {
                props.onData(data);
            }
        };
        CalendarDataManager.prototype._computeOptionsData = function (optionOverrides, dynamicOptionOverrides, calendarApi) {
            // TODO: blacklist options that are handled by optionChangeHandlers
            let _a = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides), refinedOptions = _a.refinedOptions, pluginHooks = _a.pluginHooks, localeDefaults = _a.localeDefaults, availableLocaleData = _a.availableLocaleData, extra = _a.extra;
            warnUnknownOptions(extra);
            let dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
            let viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
            let theme = this.buildTheme(refinedOptions, pluginHooks);
            let toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
            return {
                calendarOptions: refinedOptions,
                pluginHooks: pluginHooks,
                dateEnv: dateEnv,
                viewSpecs: viewSpecs,
                theme: theme,
                toolbarConfig: toolbarConfig,
                localeDefaults: localeDefaults,
                availableRawLocales: availableLocaleData.map,
            };
        };
        // always called from behind a memoizer
        CalendarDataManager.prototype.processRawCalendarOptions = function (optionOverrides, dynamicOptionOverrides) {
            let _a = mergeRawOptions([
                BASE_OPTION_DEFAULTS,
                optionOverrides,
                dynamicOptionOverrides,
            ]), locales = _a.locales, locale = _a.locale;
            let availableLocaleData = this.organizeRawLocales(locales);
            let availableRawLocales = availableLocaleData.map;
            let localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
            let pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
            let refiners = this.currentCalendarOptionsRefiners = __assign(__assign(__assign(__assign(__assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
            let extra = {};
            let raw = mergeRawOptions([
                BASE_OPTION_DEFAULTS,
                localeDefaults,
                optionOverrides,
                dynamicOptionOverrides,
            ]);
            let refined = {};
            let currentRaw = this.currentCalendarOptionsInput;
            let currentRefined = this.currentCalendarOptionsRefined;
            let anyChanges = false;
            for (let optionName in raw) {
                if (optionName !== 'plugins') { // because plugins is special-cased
                    if (raw[optionName] === currentRaw[optionName] ||
                        (COMPLEX_OPTION_COMPARATORS[optionName] &&
                            (optionName in currentRaw) &&
                            COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName]))) {
                        refined[optionName] = currentRefined[optionName];
                    }
                    else if (refiners[optionName]) {
                        refined[optionName] = refiners[optionName](raw[optionName]);
                        anyChanges = true;
                    }
                    else {
                        extra[optionName] = currentRaw[optionName];
                    }
                }
            }
            if (anyChanges) {
                this.currentCalendarOptionsInput = raw;
                this.currentCalendarOptionsRefined = refined;
            }
            return {
                rawOptions: this.currentCalendarOptionsInput,
                refinedOptions: this.currentCalendarOptionsRefined,
                pluginHooks: pluginHooks,
                availableLocaleData: availableLocaleData,
                localeDefaults: localeDefaults,
                extra: extra,
            };
        };
        CalendarDataManager.prototype._computeCurrentViewData = function (viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
            let viewSpec = optionsData.viewSpecs[viewType];
            if (!viewSpec) {
                throw new Error("viewType \"" + viewType + "\" is not available. Please make sure you've loaded all neccessary plugins");
            }
            let _a = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides), refinedOptions = _a.refinedOptions, extra = _a.extra;
            warnUnknownOptions(extra);
            let dateProfileGenerator = this.buildDateProfileGenerator({
                dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
                duration: viewSpec.duration,
                durationUnit: viewSpec.durationUnit,
                usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
                dateEnv: optionsData.dateEnv,
                calendarApi: this.props.calendarApi,
                slotMinTime: refinedOptions.slotMinTime,
                slotMaxTime: refinedOptions.slotMaxTime,
                showNonCurrentDates: refinedOptions.showNonCurrentDates,
                dayCount: refinedOptions.dayCount,
                dateAlignment: refinedOptions.dateAlignment,
                dateIncrement: refinedOptions.dateIncrement,
                hiddenDays: refinedOptions.hiddenDays,
                weekends: refinedOptions.weekends,
                nowInput: refinedOptions.now,
                validRangeInput: refinedOptions.validRange,
                visibleRangeInput: refinedOptions.visibleRange,
                monthMode: refinedOptions.monthMode,
                fixedWeekCount: refinedOptions.fixedWeekCount,
            });
            let viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
            return { viewSpec: viewSpec, options: refinedOptions, dateProfileGenerator: dateProfileGenerator, viewApi: viewApi };
        };
        CalendarDataManager.prototype.processRawViewOptions = function (viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
            let raw = mergeRawOptions([
                BASE_OPTION_DEFAULTS,
                viewSpec.optionDefaults,
                localeDefaults,
                optionOverrides,
                viewSpec.optionOverrides,
                dynamicOptionOverrides,
            ]);
            let refiners = __assign(__assign(__assign(__assign(__assign(__assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
            let refined = {};
            let currentRaw = this.currentViewOptionsInput;
            let currentRefined = this.currentViewOptionsRefined;
            let anyChanges = false;
            let extra = {};
            for (let optionName in raw) {
                if (raw[optionName] === currentRaw[optionName]) {
                    refined[optionName] = currentRefined[optionName];
                }
                else {
                    if (raw[optionName] === this.currentCalendarOptionsInput[optionName]) {
                        if (optionName in this.currentCalendarOptionsRefined) { // might be an "extra" prop
                            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
                        }
                    }
                    else if (refiners[optionName]) {
                        refined[optionName] = refiners[optionName](raw[optionName]);
                    }
                    else {
                        extra[optionName] = raw[optionName];
                    }
                    anyChanges = true;
                }
            }
            if (anyChanges) {
                this.currentViewOptionsInput = raw;
                this.currentViewOptionsRefined = refined;
            }
            return {
                rawOptions: this.currentViewOptionsInput,
                refinedOptions: this.currentViewOptionsRefined,
                extra: extra,
            };
        };
        return CalendarDataManager;
    }());
    function buildDateEnv(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
        let locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
        return new DateEnv({
            calendarSystem: 'gregory',
            timeZone: timeZone,
            namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
            locale: locale,
            weekNumberCalculation: weekNumberCalculation,
            firstDay: firstDay,
            weekText: weekText,
            cmdFormatter: pluginHooks.cmdFormatter,
            defaultSeparator: defaultSeparator,
        });
    }
    function buildTheme(options, pluginHooks) {
        let ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
        return new ThemeClass(options);
    }
    function buildDateProfileGenerator(props) {
        let DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
        return new DateProfileGeneratorClass(props);
    }
    function buildViewApi(type, getCurrentData, dateEnv) {
        return new ViewApi(type, getCurrentData, dateEnv);
    }
    function buildEventUiBySource(eventSources) {
        return mapHash(eventSources, function (eventSource) { return eventSource.ui; });
    }
    function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
        let eventUiBases = { '': eventUiSingleBase };
        for (let defId in eventDefs) {
            let def = eventDefs[defId];
            if (def.sourceId && eventUiBySource[def.sourceId]) {
                eventUiBases[defId] = eventUiBySource[def.sourceId];
            }
        }
        return eventUiBases;
    }
    function buildViewUiProps(calendarContext) {
        let options = calendarContext.options;
        return {
            eventUiSingleBase: createEventUi({
                display: options.eventDisplay,
                editable: options.editable,
                startEditable: options.eventStartEditable,
                durationEditable: options.eventDurationEditable,
                constraint: options.eventConstraint,
                overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
                allow: options.eventAllow,
                backgroundColor: options.eventBackgroundColor,
                borderColor: options.eventBorderColor,
                textColor: options.eventTextColor,
                color: options.eventColor,
                // classNames: options.eventClassNames // render hook will handle this
            }, calendarContext),
            selectionConfig: createEventUi({
                constraint: options.selectConstraint,
                overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
                allow: options.selectAllow,
            }, calendarContext),
        };
    }
    function computeIsLoading(state, context) {
        for (let _i = 0, _a = context.pluginHooks.isLoadingFuncs; _i < _a.length; _i++) {
            let isLoadingFunc = _a[_i];
            if (isLoadingFunc(state)) {
                return true;
            }
        }
        return false;
    }
    function parseContextBusinessHours(calendarContext) {
        return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
    }
    function warnUnknownOptions(options, viewName) {
        for (let optionName in options) {
            console.warn("Unknown option '" + optionName + "'" +
                (viewName ? " for view '" + viewName + "'" : ''));
        }
    }

    // TODO: move this to react plugin?
    let CalendarDataProvider = /** @class */ (function (_super) {
        __extends(CalendarDataProvider, _super);
        function CalendarDataProvider(props) {
            let _this = _super.call(this, props) || this;
            _this.handleData = function (data) {
                if (!_this.dataManager) { // still within initial run, before assignment in constructor
                    // eslint-disable-next-line react/no-direct-mutation-state
                    _this.state = data; // can't use setState yet
                }
                else {
                    _this.setState(data);
                }
            };
            _this.dataManager = new CalendarDataManager({
                optionOverrides: props.optionOverrides,
                calendarApi: props.calendarApi,
                onData: _this.handleData,
            });
            return _this;
        }
        CalendarDataProvider.prototype.render = function () {
            return this.props.children(this.state);
        };
        CalendarDataProvider.prototype.componentDidUpdate = function (prevProps) {
            let newOptionOverrides = this.props.optionOverrides;
            if (newOptionOverrides !== prevProps.optionOverrides) { // prevent recursive handleData
                this.dataManager.resetOptions(newOptionOverrides);
            }
        };
        return CalendarDataProvider;
    }(Component));

    // HELPERS
    /*
    if nextDayThreshold is specified, slicing is done in an all-day fashion.
    you can get nextDayThreshold from context.nextDayThreshold
    */
    function sliceEvents(props, allDay) {
        return sliceEventStore(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
    }

    let NamedTimeZoneImpl = /** @class */ (function () {
        function NamedTimeZoneImpl(timeZoneName) {
            this.timeZoneName = timeZoneName;
        }
        return NamedTimeZoneImpl;
    }());

    let SegHierarchy = /** @class */ (function () {
        function SegHierarchy() {
            // settings
            this.strictOrder = false;
            this.allowReslicing = false;
            this.maxCoord = -1; // -1 means no max
            this.maxStackCnt = -1; // -1 means no max
            this.levelCoords = []; // ordered
            this.entriesByLevel = []; // parallel with levelCoords
            this.stackCnts = {}; // TODO: use better technique!?
        }
        SegHierarchy.prototype.addSegs = function (inputs) {
            let hiddenEntries = [];
            for (let _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
                let input = inputs_1[_i];
                this.insertEntry(input, hiddenEntries);
            }
            return hiddenEntries;
        };
        SegHierarchy.prototype.insertEntry = function (entry, hiddenEntries) {
            let insertion = this.findInsertion(entry);
            if (this.isInsertionValid(insertion, entry)) {
                this.insertEntryAt(entry, insertion);
                return 1;
            }
            return this.handleInvalidInsertion(insertion, entry, hiddenEntries);
        };
        SegHierarchy.prototype.isInsertionValid = function (insertion, entry) {
            return (this.maxCoord === -1 || insertion.levelCoord + entry.thickness <= this.maxCoord) &&
                (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
        };
        // returns number of new entries inserted
        SegHierarchy.prototype.handleInvalidInsertion = function (insertion, entry, hiddenEntries) {
            if (this.allowReslicing && insertion.touchingEntry) {
                return this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
            }
            hiddenEntries.push(entry);
            return 0;
        };
        SegHierarchy.prototype.splitEntry = function (entry, barrier, hiddenEntries) {
            let partCnt = 0;
            let splitHiddenEntries = [];
            let entrySpan = entry.span;
            let barrierSpan = barrier.span;
            if (entrySpan.start < barrierSpan.start) {
                partCnt += this.insertEntry({
                    index: entry.index,
                    thickness: entry.thickness,
                    span: { start: entrySpan.start, end: barrierSpan.start },
                }, splitHiddenEntries);
            }
            if (entrySpan.end > barrierSpan.end) {
                partCnt += this.insertEntry({
                    index: entry.index,
                    thickness: entry.thickness,
                    span: { start: barrierSpan.end, end: entrySpan.end },
                }, splitHiddenEntries);
            }
            if (partCnt) {
                hiddenEntries.push.apply(hiddenEntries, __spreadArray([{
                        index: entry.index,
                        thickness: entry.thickness,
                        span: intersectSpans(barrierSpan, entrySpan), // guaranteed to intersect
                    }], splitHiddenEntries));
                return partCnt;
            }
            hiddenEntries.push(entry);
            return 0;
        };
        SegHierarchy.prototype.insertEntryAt = function (entry, insertion) {
            let _a = this, entriesByLevel = _a.entriesByLevel, levelCoords = _a.levelCoords;
            if (insertion.lateral === -1) {
                // create a new level
                insertAt(levelCoords, insertion.level, insertion.levelCoord);
                insertAt(entriesByLevel, insertion.level, [entry]);
            }
            else {
                // insert into existing level
                insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
            }
            this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
        };
        SegHierarchy.prototype.findInsertion = function (newEntry) {
            let _a = this, levelCoords = _a.levelCoords, entriesByLevel = _a.entriesByLevel, strictOrder = _a.strictOrder, stackCnts = _a.stackCnts;
            let levelCnt = levelCoords.length;
            let candidateCoord = 0;
            let touchingLevel = -1;
            let touchingLateral = -1;
            let touchingEntry = null;
            let stackCnt = 0;
            for (let trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
                let trackingCoord = levelCoords[trackingLevel];
                // if the current level is past the placed entry, we have found a good empty space and can stop.
                // if strictOrder, keep finding more lateral intersections.
                if (!strictOrder && trackingCoord >= candidateCoord + newEntry.thickness) {
                    break;
                }
                let trackingEntries = entriesByLevel[trackingLevel];
                let trackingEntry = void 0;
                let searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd); // find first entry after newEntry's end
                let lateralIndex = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one
                while ( // loop through entries that horizontally intersect
                (trackingEntry = trackingEntries[lateralIndex]) && // but not past the whole entry list
                    trackingEntry.span.start < newEntry.span.end // and not entirely past newEntry
                ) {
                    let trackingEntryBottom = trackingCoord + trackingEntry.thickness;
                    // intersects into the top of the candidate?
                    if (trackingEntryBottom > candidateCoord) {
                        candidateCoord = trackingEntryBottom;
                        touchingEntry = trackingEntry;
                        touchingLevel = trackingLevel;
                        touchingLateral = lateralIndex;
                    }
                    // butts up against top of candidate? (will happen if just intersected as well)
                    if (trackingEntryBottom === candidateCoord) {
                        // accumulate the highest possible stackCnt of the trackingEntries that butt up
                        stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
                    }
                    lateralIndex += 1;
                }
            }
            // the destination level will be after touchingEntry's level. find it
            let destLevel = 0;
            if (touchingEntry) {
                destLevel = touchingLevel + 1;
                while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
                    destLevel += 1;
                }
            }
            // if adding to an existing level, find where to insert
            let destLateral = -1;
            if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
                destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
            }
            return {
                touchingLevel: touchingLevel,
                touchingLateral: touchingLateral,
                touchingEntry: touchingEntry,
                stackCnt: stackCnt,
                levelCoord: candidateCoord,
                level: destLevel,
                lateral: destLateral,
            };
        };
        // sorted by levelCoord (lowest to highest)
        SegHierarchy.prototype.toRects = function () {
            let _a = this, entriesByLevel = _a.entriesByLevel, levelCoords = _a.levelCoords;
            let levelCnt = entriesByLevel.length;
            let rects = [];
            for (let level = 0; level < levelCnt; level += 1) {
                let entries = entriesByLevel[level];
                let levelCoord = levelCoords[level];
                for (let _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    let entry = entries_1[_i];
                    rects.push(__assign(__assign({}, entry), { levelCoord: levelCoord }));
                }
            }
            return rects;
        };
        return SegHierarchy;
    }());
    function getEntrySpanEnd(entry) {
        return entry.span.end;
    }
    function buildEntryKey(entry) {
        return entry.index + ':' + entry.span.start;
    }
    // returns groups with entries sorted by input order
    function groupIntersectingEntries(entries) {
        let merges = [];
        for (let _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
            let entry = entries_2[_i];
            let filteredMerges = [];
            let hungryMerge = {
                span: entry.span,
                entries: [entry],
            };
            for (let _a = 0, merges_1 = merges; _a < merges_1.length; _a++) {
                let merge = merges_1[_a];
                if (intersectSpans(merge.span, hungryMerge.span)) {
                    hungryMerge = {
                        entries: merge.entries.concat(hungryMerge.entries),
                        span: joinSpans(merge.span, hungryMerge.span),
                    };
                }
                else {
                    filteredMerges.push(merge);
                }
            }
            filteredMerges.push(hungryMerge);
            merges = filteredMerges;
        }
        return merges;
    }
    function joinSpans(span0, span1) {
        return {
            start: Math.min(span0.start, span1.start),
            end: Math.max(span0.end, span1.end),
        };
    }
    function intersectSpans(span0, span1) {
        let start = Math.max(span0.start, span1.start);
        let end = Math.min(span0.end, span1.end);
        if (start < end) {
            return { start: start, end: end };
        }
        return null;
    }
    // general util
    // ---------------------------------------------------------------------------------------------------------------------
    function insertAt(arr, index, item) {
        arr.splice(index, 0, item);
    }
    function binarySearch(a, searchVal, getItemVal) {
        let startIndex = 0;
        let endIndex = a.length; // exclusive
        if (!endIndex || searchVal < getItemVal(a[startIndex])) { // no items OR before first item
            return [0, 0];
        }
        if (searchVal > getItemVal(a[endIndex - 1])) { // after last item
            return [endIndex, 0];
        }
        while (startIndex < endIndex) {
            let middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
            let middleVal = getItemVal(a[middleIndex]);
            if (searchVal < middleVal) {
                endIndex = middleIndex;
            }
            else if (searchVal > middleVal) {
                startIndex = middleIndex + 1;
            }
            else { // equal!
                return [middleIndex, 1];
            }
        }
        return [startIndex, 0];
    }

    let Interaction = /** @class */ (function () {
        function Interaction(settings) {
            this.component = settings.component;
            this.isHitComboAllowed = settings.isHitComboAllowed || null;
        }
        Interaction.prototype.destroy = function () {
        };
        return Interaction;
    }());
    function parseInteractionSettings(component, input) {
        return {
            component: component,
            el: input.el,
            useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
            isHitComboAllowed: input.isHitComboAllowed || null,
        };
    }
    function interactionSettingsToStore(settings) {
        let _a;
        return _a = {},
            _a[settings.component.uid] = settings,
            _a;
    }
    // global state
    let interactionSettingsStore = {};

    /*
    An abstraction for a dragging interaction originating on an event.
    Does higher-level things than PointerDragger, such as possibly:
    - a "mirror" that moves with the pointer
    - a minimum number of pixels or other criteria for a true drag to begin

    subclasses must emit:
    - pointerdown
    - dragstart
    - dragmove
    - pointerup
    - dragend
    */
    let ElementDragging = /** @class */ (function () {
        function ElementDragging(el, selector) {
            this.emitter = new Emitter();
        }
        ElementDragging.prototype.destroy = function () {
        };
        ElementDragging.prototype.setMirrorIsVisible = function (bool) {
            // optional if subclass doesn't want to support a mirror
        };
        ElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
            // optional if subclass doesn't want to support a mirror
        };
        ElementDragging.prototype.setAutoScrollEnabled = function (bool) {
            // optional
        };
        return ElementDragging;
    }());

    // TODO: get rid of this in favor of options system,
    // tho it's really easy to access this globally rather than pass thru options.
    let config = {};

    /*
    Information about what will happen when an external element is dragged-and-dropped
    onto a calendar. Contains information for creating an event.
    */
    let DRAG_META_REFINERS = {
        startTime: createDuration,
        duration: createDuration,
        create: Boolean,
        sourceId: String,
    };
    function parseDragMeta(raw) {
        let _a = refineProps(raw, DRAG_META_REFINERS), refined = _a.refined, extra = _a.extra;
        return {
            startTime: refined.startTime || null,
            duration: refined.duration || null,
            create: refined.create != null ? refined.create : true,
            sourceId: refined.sourceId,
            leftoverProps: extra,
        };
    }

    let ToolbarSection = /** @class */ (function (_super) {
        __extends(ToolbarSection, _super);
        function ToolbarSection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ToolbarSection.prototype.render = function () {
            let _this = this;
            let children = this.props.widgetGroups.map(function (widgetGroup) { return _this.renderWidgetGroup(widgetGroup); });
            return createElement.apply(void 0, __spreadArray(['div', { className: 'fc-toolbar-chunk' }], children));
        };
        ToolbarSection.prototype.renderWidgetGroup = function (widgetGroup) {
            let props = this.props;
            let theme = this.context.theme;
            let children = [];
            let isOnlyButtons = true;
            for (let _i = 0, widgetGroup_1 = widgetGroup; _i < widgetGroup_1.length; _i++) {
                let widget = widgetGroup_1[_i];
                let buttonName = widget.buttonName, buttonClick = widget.buttonClick, buttonText = widget.buttonText, buttonIcon = widget.buttonIcon, buttonHint = widget.buttonHint;
                if (buttonName === 'title') {
                    isOnlyButtons = false;
                    children.push(createElement("h2", { className: "fc-toolbar-title", id: props.titleId }, props.title));
                }
                else {
                    let isPressed = buttonName === props.activeButton;
                    let isDisabled = (!props.isTodayEnabled && buttonName === 'today') ||
                        (!props.isPrevEnabled && buttonName === 'prev') ||
                        (!props.isNextEnabled && buttonName === 'next');
                    let buttonClasses = ["fc-" + buttonName + "-button", theme.getClass('button')];
                    if (isPressed) {
                        buttonClasses.push(theme.getClass('buttonActive'));
                    }
                    children.push(createElement("button", { type: "button", title: typeof buttonHint === 'function' ? buttonHint(props.navUnit) : buttonHint, disabled: isDisabled, "aria-pressed": isPressed, className: buttonClasses.join(' '), onClick: buttonClick }, buttonText || (buttonIcon ? createElement("span", { className: buttonIcon }) : '')));
                }
            }
            if (children.length > 1) {
                let groupClassName = (isOnlyButtons && theme.getClass('buttonGroup')) || '';
                return createElement.apply(void 0, __spreadArray(['div', { className: groupClassName }], children));
            }
            return children[0];
        };
        return ToolbarSection;
    }(BaseComponent));

    let Toolbar = /** @class */ (function (_super) {
        __extends(Toolbar, _super);
        function Toolbar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Toolbar.prototype.render = function () {
            let _a = this.props, model = _a.model, extraClassName = _a.extraClassName;
            let forceLtr = false;
            let startContent;
            let endContent;
            let sectionWidgets = model.sectionWidgets;
            let centerContent = sectionWidgets.center;
            if (sectionWidgets.left) {
                forceLtr = true;
                startContent = sectionWidgets.left;
            }
            else {
                startContent = sectionWidgets.start;
            }
            if (sectionWidgets.right) {
                forceLtr = true;
                endContent = sectionWidgets.right;
            }
            else {
                endContent = sectionWidgets.end;
            }
            let classNames = [
                extraClassName || '',
                'fc-toolbar',
                forceLtr ? 'fc-toolbar-ltr' : '',
            ];
            return (createElement("div", { className: classNames.join(' ') },
                this.renderSection('start', startContent || []),
                this.renderSection('center', centerContent || []),
                this.renderSection('end', endContent || [])));
        };
        Toolbar.prototype.renderSection = function (key, widgetGroups) {
            let props = this.props;
            return (createElement(ToolbarSection, { key: key, widgetGroups: widgetGroups, title: props.title, navUnit: props.navUnit, activeButton: props.activeButton, isTodayEnabled: props.isTodayEnabled, isPrevEnabled: props.isPrevEnabled, isNextEnabled: props.isNextEnabled, titleId: props.titleId }));
        };
        return Toolbar;
    }(BaseComponent));

    // TODO: do function component?
    let ViewContainer = /** @class */ (function (_super) {
        __extends(ViewContainer, _super);
        function ViewContainer() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                availableWidth: null,
            };
            _this.handleEl = function (el) {
                _this.el = el;
                setRef(_this.props.elRef, el);
                _this.updateAvailableWidth();
            };
            _this.handleResize = function () {
                _this.updateAvailableWidth();
            };
            return _this;
        }
        ViewContainer.prototype.render = function () {
            let _a = this, props = _a.props, state = _a.state;
            let aspectRatio = props.aspectRatio;
            let classNames = [
                'fc-view-harness',
                (aspectRatio || props.liquid || props.height)
                    ? 'fc-view-harness-active' // harness controls the height
                    : 'fc-view-harness-passive', // let the view do the height
            ];
            let height = '';
            let paddingBottom = '';
            if (aspectRatio) {
                if (state.availableWidth !== null) {
                    height = state.availableWidth / aspectRatio;
                }
                else {
                    // while waiting to know availableWidth, we can't set height to *zero*
                    // because will cause lots of unnecessary scrollbars within scrollgrid.
                    // BETTER: don't start rendering ANYTHING yet until we know container width
                    // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
                    paddingBottom = (1 / aspectRatio) * 100 + "%";
                }
            }
            else {
                height = props.height || '';
            }
            return (createElement("div", { "aria-labelledby": props.labeledById, ref: this.handleEl, className: classNames.join(' '), style: { height: height, paddingBottom: paddingBottom } }, props.children));
        };
        ViewContainer.prototype.componentDidMount = function () {
            this.context.addResizeHandler(this.handleResize);
        };
        ViewContainer.prototype.componentWillUnmount = function () {
            this.context.removeResizeHandler(this.handleResize);
        };
        ViewContainer.prototype.updateAvailableWidth = function () {
            if (this.el && // needed. but why?
                this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
            ) {
                this.setState({ availableWidth: this.el.offsetWidth });
            }
        };
        return ViewContainer;
    }(BaseComponent));

    /*
    Detects when the user clicks on an event within a DateComponent
    */
    let EventClicking = /** @class */ (function (_super) {
        __extends(EventClicking, _super);
        function EventClicking(settings) {
            let _this = _super.call(this, settings) || this;
            _this.handleSegClick = function (ev, segEl) {
                let component = _this.component;
                let context = component.context;
                let seg = getElSeg(segEl);
                if (seg && // might be the <div> surrounding the more link
                    component.isValidSegDownEl(ev.target)) {
                    // our way to simulate a link click for elements that can't be <a> tags
                    // grab before trigger fired in case trigger trashes DOM thru rerendering
                    let hasUrlContainer = elementClosest(ev.target, '.fc-event-forced-url');
                    let url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
                    context.emitter.trigger('eventClick', {
                        el: segEl,
                        event: new EventApi(component.context, seg.eventRange.def, seg.eventRange.instance),
                        jsEvent: ev,
                        view: context.viewApi,
                    });
                    if (url && !ev.defaultPrevented) {
                        window.location.href = url;
                    }
                }
            };
            _this.destroy = listenBySelector(settings.el, 'click', '.fc-event', // on both fg and bg events
            _this.handleSegClick);
            return _this;
        }
        return EventClicking;
    }(Interaction));

    /*
    Triggers events and adds/removes core classNames when the user's pointer
    enters/leaves event-elements of a component.
    */
    let EventHovering = /** @class */ (function (_super) {
        __extends(EventHovering, _super);
        function EventHovering(settings) {
            let _this = _super.call(this, settings) || this;
            // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
            _this.handleEventElRemove = function (el) {
                if (el === _this.currentSegEl) {
                    _this.handleSegLeave(null, _this.currentSegEl);
                }
            };
            _this.handleSegEnter = function (ev, segEl) {
                if (getElSeg(segEl)) { // TODO: better way to make sure not hovering over more+ link or its wrapper
                    _this.currentSegEl = segEl;
                    _this.triggerEvent('eventMouseEnter', ev, segEl);
                }
            };
            _this.handleSegLeave = function (ev, segEl) {
                if (_this.currentSegEl) {
                    _this.currentSegEl = null;
                    _this.triggerEvent('eventMouseLeave', ev, segEl);
                }
            };
            _this.removeHoverListeners = listenToHoverBySelector(settings.el, '.fc-event', // on both fg and bg events
            _this.handleSegEnter, _this.handleSegLeave);
            return _this;
        }
        EventHovering.prototype.destroy = function () {
            this.removeHoverListeners();
        };
        EventHovering.prototype.triggerEvent = function (publicEvName, ev, segEl) {
            let component = this.component;
            let context = component.context;
            let seg = getElSeg(segEl);
            if (!ev || component.isValidSegDownEl(ev.target)) {
                context.emitter.trigger(publicEvName, {
                    el: segEl,
                    event: new EventApi(context, seg.eventRange.def, seg.eventRange.instance),
                    jsEvent: ev,
                    view: context.viewApi,
                });
            }
        };
        return EventHovering;
    }(Interaction));

    let CalendarContent = /** @class */ (function (_super) {
        __extends(CalendarContent, _super);
        function CalendarContent() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.buildViewContext = memoize(buildViewContext);
            _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
            _this.buildToolbarProps = memoize(buildToolbarProps);
            _this.headerRef = createRef();
            _this.footerRef = createRef();
            _this.interactionsStore = {};
            // eslint-disable-next-line
            _this.state = {
                viewLabelId: getUniqueDomId(),
            };
            // Component Registration
            // -----------------------------------------------------------------------------------------------------------------
            _this.registerInteractiveComponent = function (component, settingsInput) {
                let settings = parseInteractionSettings(component, settingsInput);
                let DEFAULT_INTERACTIONS = [
                    EventClicking,
                    EventHovering,
                ];
                let interactionClasses = DEFAULT_INTERACTIONS.concat(_this.props.pluginHooks.componentInteractions);
                let interactions = interactionClasses.map(function (TheInteractionClass) { return new TheInteractionClass(settings); });
                _this.interactionsStore[component.uid] = interactions;
                interactionSettingsStore[component.uid] = settings;
            };
            _this.unregisterInteractiveComponent = function (component) {
                let listeners = _this.interactionsStore[component.uid];
                if (listeners) {
                    for (let _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
                        let listener = listeners_1[_i];
                        listener.destroy();
                    }
                    delete _this.interactionsStore[component.uid];
                }
                delete interactionSettingsStore[component.uid];
            };
            // Resizing
            // -----------------------------------------------------------------------------------------------------------------
            _this.resizeRunner = new DelayedRunner(function () {
                _this.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?
                _this.props.emitter.trigger('windowResize', { view: _this.props.viewApi });
            });
            _this.handleWindowResize = function (ev) {
                let options = _this.props.options;
                if (options.handleWindowResize &&
                    ev.target === window // avoid jqui events
                ) {
                    _this.resizeRunner.request(options.windowResizeDelay);
                }
            };
            return _this;
        }
        /*
        renders INSIDE of an outer div
        */
        CalendarContent.prototype.render = function () {
            let props = this.props;
            let toolbarConfig = props.toolbarConfig, options = props.options;
            let toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, getNow(props.options.now, props.dateEnv), // TODO: use NowTimer????
            props.viewTitle);
            let viewVGrow = false;
            let viewHeight = '';
            let viewAspectRatio;
            if (props.isHeightAuto || props.forPrint) {
                viewHeight = '';
            }
            else if (options.height != null) {
                viewVGrow = true;
            }
            else if (options.contentHeight != null) {
                viewHeight = options.contentHeight;
            }
            else {
                viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
            }
            let viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
            let viewLabelId = (toolbarConfig.header && toolbarConfig.header.hasTitle)
                ? this.state.viewLabelId
                : '';
            return (createElement(ViewContextType.Provider, { value: viewContext },
                toolbarConfig.header && (createElement(Toolbar, __assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: toolbarConfig.header, titleId: viewLabelId }, toolbarProps))),
                createElement(ViewContainer, { liquid: viewVGrow, height: viewHeight, aspectRatio: viewAspectRatio, labeledById: viewLabelId },
                    this.renderView(props),
                    this.buildAppendContent()),
                toolbarConfig.footer && (createElement(Toolbar, __assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: toolbarConfig.footer, titleId: "" }, toolbarProps)))));
        };
        CalendarContent.prototype.componentDidMount = function () {
            let props = this.props;
            this.calendarInteractions = props.pluginHooks.calendarInteractions
                .map(function (CalendarInteractionClass) { return new CalendarInteractionClass(props); });
            window.addEventListener('resize', this.handleWindowResize);
            let propSetHandlers = props.pluginHooks.propSetHandlers;
            for (let propName in propSetHandlers) {
                propSetHandlers[propName](props[propName], props);
            }
        };
        CalendarContent.prototype.componentDidUpdate = function (prevProps) {
            let props = this.props;
            let propSetHandlers = props.pluginHooks.propSetHandlers;
            for (let propName in propSetHandlers) {
                if (props[propName] !== prevProps[propName]) {
                    propSetHandlers[propName](props[propName], props);
                }
            }
        };
        CalendarContent.prototype.componentWillUnmount = function () {
            window.removeEventListener('resize', this.handleWindowResize);
            this.resizeRunner.clear();
            for (let _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
                let interaction = _a[_i];
                interaction.destroy();
            }
            this.props.emitter.trigger('_unmount');
        };
        CalendarContent.prototype.buildAppendContent = function () {
            let props = this.props;
            let children = props.pluginHooks.viewContainerAppends.map(function (buildAppendContent) { return buildAppendContent(props); });
            return createElement.apply(void 0, __spreadArray([Fragment, {}], children));
        };
        CalendarContent.prototype.renderView = function (props) {
            let pluginHooks = props.pluginHooks;
            let viewSpec = props.viewSpec;
            let viewProps = {
                dateProfile: props.dateProfile,
                businessHours: props.businessHours,
                eventStore: props.renderableEventStore,
                eventUiBases: props.eventUiBases,
                dateSelection: props.dateSelection,
                eventSelection: props.eventSelection,
                eventDrag: props.eventDrag,
                eventResize: props.eventResize,
                isHeightAuto: props.isHeightAuto,
                forPrint: props.forPrint,
            };
            let transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
            for (let _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
                let transformer = transformers_1[_i];
                __assign(viewProps, transformer.transform(viewProps, props));
            }
            let ViewComponent = viewSpec.component;
            return (createElement(ViewComponent, __assign({}, viewProps)));
        };
        return CalendarContent;
    }(PureComponent));
    function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
        // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
        let todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason
        let prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
        let nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
        return {
            title: title,
            activeButton: viewSpec.type,
            navUnit: viewSpec.singleUnit,
            isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
            isPrevEnabled: prevInfo.isValid,
            isNextEnabled: nextInfo.isValid,
        };
    }
    // Plugin
    // -----------------------------------------------------------------------------------------------------------------
    function buildViewPropTransformers(theClasses) {
        return theClasses.map(function (TheClass) { return new TheClass(); });
    }

    let CalendarRoot = /** @class */ (function (_super) {
        __extends(CalendarRoot, _super);
        function CalendarRoot() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                forPrint: false,
            };
            _this.handleBeforePrint = function () {
                _this.setState({ forPrint: true });
            };
            _this.handleAfterPrint = function () {
                _this.setState({ forPrint: false });
            };
            return _this;
        }
        CalendarRoot.prototype.render = function () {
            let props = this.props;
            let options = props.options;
            let forPrint = this.state.forPrint;
            let isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
            let height = (!isHeightAuto && options.height != null) ? options.height : '';
            let classNames = [
                'fc',
                forPrint ? 'fc-media-print' : 'fc-media-screen',
                "fc-direction-" + options.direction,
                props.theme.getClass('root'),
            ];
            if (!getCanVGrowWithinCell()) {
                classNames.push('fc-liquid-hack');
            }
            return props.children(classNames, height, isHeightAuto, forPrint);
        };
        CalendarRoot.prototype.componentDidMount = function () {
            let emitter = this.props.emitter;
            emitter.on('_beforeprint', this.handleBeforePrint);
            emitter.on('_afterprint', this.handleAfterPrint);
        };
        CalendarRoot.prototype.componentWillUnmount = function () {
            let emitter = this.props.emitter;
            emitter.off('_beforeprint', this.handleBeforePrint);
            emitter.off('_afterprint', this.handleAfterPrint);
        };
        return CalendarRoot;
    }(BaseComponent));

    // Computes a default column header formatting string if `colFormat` is not explicitly defined
    function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
        // if more than one week row, or if there are a lot of columns with not much space,
        // put just the day numbers will be in each cell
        if (!datesRepDistinctDays || dayCnt > 10) {
            return createFormatter({ weekday: 'short' }); // "Sat"
        }
        if (dayCnt > 1) {
            return createFormatter({ weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }); // "Sat 11/12"
        }
        return createFormatter({ weekday: 'long' }); // "Saturday"
    }

    let CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no
    function renderInner$1(hookProps) {
        return hookProps.text;
    }

    let TableDateCell = /** @class */ (function (_super) {
        __extends(TableDateCell, _super);
        function TableDateCell() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TableDateCell.prototype.render = function () {
            let _a = this.context, dateEnv = _a.dateEnv, options = _a.options, theme = _a.theme, viewApi = _a.viewApi;
            let props = this.props;
            let date = props.date, dateProfile = props.dateProfile;
            let dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
            let classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
            let text = dateEnv.format(date, props.dayHeaderFormat);
            // if colCnt is 1, we are already in a day-view and don't need a navlink
            let navLinkAttrs = (!dayMeta.isDisabled && props.colCnt > 1)
                ? buildNavLinkAttrs(this.context, date)
                : {};
            let hookProps = __assign(__assign(__assign({ date: dateEnv.toDate(date), view: viewApi }, props.extraHookProps), { text: text }), dayMeta);
            return (createElement(RenderHook, { hookProps: hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInner$1, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return (createElement("th", __assign({ ref: rootElRef, role: "columnheader", className: classNames.concat(customClassNames).join(' '), "data-date": !dayMeta.isDisabled ? formatDayString(date) : undefined, colSpan: props.colSpan }, props.extraDataAttrs),
                createElement("div", { className: "fc-scrollgrid-sync-inner" }, !dayMeta.isDisabled && (createElement("a", __assign({ ref: innerElRef, className: [
                        'fc-col-header-cell-cushion',
                        props.isSticky ? 'fc-sticky' : '',
                    ].join(' ') }, navLinkAttrs), innerContent))))); }));
        };
        return TableDateCell;
    }(BaseComponent));

    let WEEKDAY_FORMAT = createFormatter({ weekday: 'long' });
    let TableDowCell = /** @class */ (function (_super) {
        __extends(TableDowCell, _super);
        function TableDowCell() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TableDowCell.prototype.render = function () {
            let props = this.props;
            let _a = this.context, dateEnv = _a.dateEnv, theme = _a.theme, viewApi = _a.viewApi, options = _a.options;
            let date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT
            let dateMeta = {
                dow: props.dow,
                isDisabled: false,
                isFuture: false,
                isPast: false,
                isToday: false,
                isOther: false,
            };
            let classNames = [CLASS_NAME].concat(getDayClassNames(dateMeta, theme), props.extraClassNames || []);
            let text = dateEnv.format(date, props.dayHeaderFormat);
            let hookProps = __assign(__assign(__assign(__assign({ // TODO: make this public?
                date: date }, dateMeta), { view: viewApi }), props.extraHookProps), { text: text });
            return (createElement(RenderHook, { hookProps: hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInner$1, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return (createElement("th", __assign({ ref: rootElRef, role: "columnheader", className: classNames.concat(customClassNames).join(' '), colSpan: props.colSpan }, props.extraDataAttrs),
                createElement("div", { className: "fc-scrollgrid-sync-inner" },
                    createElement("a", { "aria-label": dateEnv.format(date, WEEKDAY_FORMAT), className: [
                            'fc-col-header-cell-cushion',
                            props.isSticky ? 'fc-sticky' : '',
                        ].join(' '), ref: innerElRef }, innerContent)))); }));
        };
        return TableDowCell;
    }(BaseComponent));

    let NowTimer = /** @class */ (function (_super) {
        __extends(NowTimer, _super);
        function NowTimer(props, context) {
            let _this = _super.call(this, props, context) || this;
            _this.initialNowDate = getNow(context.options.now, context.dateEnv);
            _this.initialNowQueriedMs = new Date().valueOf();
            _this.state = _this.computeTiming().currentState;
            return _this;
        }
        NowTimer.prototype.render = function () {
            let _a = this, props = _a.props, state = _a.state;
            return props.children(state.nowDate, state.todayRange);
        };
        NowTimer.prototype.componentDidMount = function () {
            this.setTimeout();
        };
        NowTimer.prototype.componentDidUpdate = function (prevProps) {
            if (prevProps.unit !== this.props.unit) {
                this.clearTimeout();
                this.setTimeout();
            }
        };
        NowTimer.prototype.componentWillUnmount = function () {
            this.clearTimeout();
        };
        NowTimer.prototype.computeTiming = function () {
            let _a = this, props = _a.props, context = _a.context;
            let unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
            let currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
            let nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
            let waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
            // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
            // ensure no longer than a day
            waitMs = Math.min(1000 * 60 * 60 * 24, waitMs);
            return {
                currentState: { nowDate: currentUnitStart, todayRange: buildDayRange(currentUnitStart) },
                nextState: { nowDate: nextUnitStart, todayRange: buildDayRange(nextUnitStart) },
                waitMs: waitMs,
            };
        };
        NowTimer.prototype.setTimeout = function () {
            let _this = this;
            let _a = this.computeTiming(), nextState = _a.nextState, waitMs = _a.waitMs;
            this.timeoutId = setTimeout(function () {
                _this.setState(nextState, function () {
                    _this.setTimeout();
                });
            }, waitMs);
        };
        NowTimer.prototype.clearTimeout = function () {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
        };
        NowTimer.contextType = ViewContextType;
        return NowTimer;
    }(Component));
    function buildDayRange(date) {
        let start = startOfDay(date);
        let end = addDays(start, 1);
        return { start: start, end: end };
    }

    let DayHeader = /** @class */ (function (_super) {
        __extends(DayHeader, _super);
        function DayHeader() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
            return _this;
        }
        DayHeader.prototype.render = function () {
            let context = this.context;
            let _a = this.props, dates = _a.dates, dateProfile = _a.dateProfile, datesRepDistinctDays = _a.datesRepDistinctDays, renderIntro = _a.renderIntro;
            let dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
            return (createElement(NowTimer, { unit: "day" }, function (nowDate, todayRange) { return (createElement("tr", { role: "row" },
                renderIntro && renderIntro('day'),
                dates.map(function (date) { return (datesRepDistinctDays ? (createElement(TableDateCell, { key: date.toISOString(), date: date, dateProfile: dateProfile, todayRange: todayRange, colCnt: dates.length, dayHeaderFormat: dayHeaderFormat })) : (createElement(TableDowCell, { key: date.getUTCDay(), dow: date.getUTCDay(), dayHeaderFormat: dayHeaderFormat }))); }))); }));
        };
        return DayHeader;
    }(BaseComponent));
    function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
        return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
    }

    let DaySeriesModel = /** @class */ (function () {
        function DaySeriesModel(range, dateProfileGenerator) {
            let date = range.start;
            let end = range.end;
            let indices = [];
            let dates = [];
            let dayIndex = -1;
            while (date < end) { // loop each day from start to end
                if (dateProfileGenerator.isHiddenDay(date)) {
                    indices.push(dayIndex + 0.5); // mark that it's between indices
                }
                else {
                    dayIndex += 1;
                    indices.push(dayIndex);
                    dates.push(date);
                }
                date = addDays(date, 1);
            }
            this.dates = dates;
            this.indices = indices;
            this.cnt = dates.length;
        }
        DaySeriesModel.prototype.sliceRange = function (range) {
            let firstIndex = this.getDateDayIndex(range.start); // inclusive first index
            let lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
            let clippedFirstIndex = Math.max(0, firstIndex);
            let clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
            // deal with in-between indices
            clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
            clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
            if (clippedFirstIndex <= clippedLastIndex) {
                return {
                    firstIndex: clippedFirstIndex,
                    lastIndex: clippedLastIndex,
                    isStart: firstIndex === clippedFirstIndex,
                    isEnd: lastIndex === clippedLastIndex,
                };
            }
            return null;
        };
        // Given a date, returns its chronolocial cell-index from the first cell of the grid.
        // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
        // If before the first offset, returns a negative number.
        // If after the last offset, returns an offset past the last cell offset.
        // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
        DaySeriesModel.prototype.getDateDayIndex = function (date) {
            let indices = this.indices;
            let dayOffset = Math.floor(diffDays(this.dates[0], date));
            if (dayOffset < 0) {
                return indices[0] - 1;
            }
            if (dayOffset >= indices.length) {
                return indices[indices.length - 1] + 1;
            }
            return indices[dayOffset];
        };
        return DaySeriesModel;
    }());

    let DayTableModel = /** @class */ (function () {
        function DayTableModel(daySeries, breakOnWeeks) {
            let dates = daySeries.dates;
            let daysPerRow;
            let firstDay;
            let rowCnt;
            if (breakOnWeeks) {
                // count columns until the day-of-week repeats
                firstDay = dates[0].getUTCDay();
                for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
                    if (dates[daysPerRow].getUTCDay() === firstDay) {
                        break;
                    }
                }
                rowCnt = Math.ceil(dates.length / daysPerRow);
            }
            else {
                rowCnt = 1;
                daysPerRow = dates.length;
            }
            this.rowCnt = rowCnt;
            this.colCnt = daysPerRow;
            this.daySeries = daySeries;
            this.cells = this.buildCells();
            this.headerDates = this.buildHeaderDates();
        }
        DayTableModel.prototype.buildCells = function () {
            let rows = [];
            for (let row = 0; row < this.rowCnt; row += 1) {
                let cells = [];
                for (let col = 0; col < this.colCnt; col += 1) {
                    cells.push(this.buildCell(row, col));
                }
                rows.push(cells);
            }
            return rows;
        };
        DayTableModel.prototype.buildCell = function (row, col) {
            let date = this.daySeries.dates[row * this.colCnt + col];
            return {
                key: date.toISOString(),
                date: date,
            };
        };
        DayTableModel.prototype.buildHeaderDates = function () {
            let dates = [];
            for (let col = 0; col < this.colCnt; col += 1) {
                dates.push(this.cells[0][col].date);
            }
            return dates;
        };
        DayTableModel.prototype.sliceRange = function (range) {
            let colCnt = this.colCnt;
            let seriesSeg = this.daySeries.sliceRange(range);
            let segs = [];
            if (seriesSeg) {
                let firstIndex = seriesSeg.firstIndex, lastIndex = seriesSeg.lastIndex;
                let index = firstIndex;
                while (index <= lastIndex) {
                    let row = Math.floor(index / colCnt);
                    let nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
                    segs.push({
                        row: row,
                        firstCol: index % colCnt,
                        lastCol: (nextIndex - 1) % colCnt,
                        isStart: seriesSeg.isStart && index === firstIndex,
                        isEnd: seriesSeg.isEnd && (nextIndex - 1) === lastIndex,
                    });
                    index = nextIndex;
                }
            }
            return segs;
        };
        return DayTableModel;
    }());

    let Slicer = /** @class */ (function () {
        function Slicer() {
            this.sliceBusinessHours = memoize(this._sliceBusinessHours);
            this.sliceDateSelection = memoize(this._sliceDateSpan);
            this.sliceEventStore = memoize(this._sliceEventStore);
            this.sliceEventDrag = memoize(this._sliceInteraction);
            this.sliceEventResize = memoize(this._sliceInteraction);
            this.forceDayIfListItem = false; // hack
        }
        Slicer.prototype.sliceProps = function (props, dateProfile, nextDayThreshold, context) {
            let extraArgs = [];
            for (let _i = 4; _i < arguments.length; _i++) {
                extraArgs[_i - 4] = arguments[_i];
            }
            let eventUiBases = props.eventUiBases;
            let eventSegs = this.sliceEventStore.apply(this, __spreadArray([props.eventStore, eventUiBases, dateProfile, nextDayThreshold], extraArgs));
            return {
                dateSelectionSegs: this.sliceDateSelection.apply(this, __spreadArray([props.dateSelection, eventUiBases, context], extraArgs)),
                businessHourSegs: this.sliceBusinessHours.apply(this, __spreadArray([props.businessHours, dateProfile, nextDayThreshold, context], extraArgs)),
                fgEventSegs: eventSegs.fg,
                bgEventSegs: eventSegs.bg,
                eventDrag: this.sliceEventDrag.apply(this, __spreadArray([props.eventDrag, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
                eventResize: this.sliceEventResize.apply(this, __spreadArray([props.eventResize, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
                eventSelection: props.eventSelection,
            }; // TODO: give interactionSegs?
        };
        Slicer.prototype.sliceNowDate = function (// does not memoize
        date, context) {
            let extraArgs = [];
            for (let _i = 2; _i < arguments.length; _i++) {
                extraArgs[_i - 2] = arguments[_i];
            }
            return this._sliceDateSpan.apply(this, __spreadArray([{ range: { start: date, end: addMs(date, 1) }, allDay: false },
                {},
                context], extraArgs));
        };
        Slicer.prototype._sliceBusinessHours = function (businessHours, dateProfile, nextDayThreshold, context) {
            let extraArgs = [];
            for (let _i = 4; _i < arguments.length; _i++) {
                extraArgs[_i - 4] = arguments[_i];
            }
            if (!businessHours) {
                return [];
            }
            return this._sliceEventStore.apply(this, __spreadArray([expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context),
                {},
                dateProfile,
                nextDayThreshold], extraArgs)).bg;
        };
        Slicer.prototype._sliceEventStore = function (eventStore, eventUiBases, dateProfile, nextDayThreshold) {
            let extraArgs = [];
            for (let _i = 4; _i < arguments.length; _i++) {
                extraArgs[_i - 4] = arguments[_i];
            }
            if (eventStore) {
                let rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
                return {
                    bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
                    fg: this.sliceEventRanges(rangeRes.fg, extraArgs),
                };
            }
            return { bg: [], fg: [] };
        };
        Slicer.prototype._sliceInteraction = function (interaction, eventUiBases, dateProfile, nextDayThreshold) {
            let extraArgs = [];
            for (let _i = 4; _i < arguments.length; _i++) {
                extraArgs[_i - 4] = arguments[_i];
            }
            if (!interaction) {
                return null;
            }
            let rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
            return {
                segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
                affectedInstances: interaction.affectedEvents.instances,
                isEvent: interaction.isEvent,
            };
        };
        Slicer.prototype._sliceDateSpan = function (dateSpan, eventUiBases, context) {
            let extraArgs = [];
            for (let _i = 3; _i < arguments.length; _i++) {
                extraArgs[_i - 3] = arguments[_i];
            }
            if (!dateSpan) {
                return [];
            }
            let eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
            let segs = this.sliceRange.apply(this, __spreadArray([dateSpan.range], extraArgs));
            for (let _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
                let seg = segs_1[_a];
                seg.eventRange = eventRange;
            }
            return segs;
        };
        /*
        "complete" seg means it has component and eventRange
        */
        Slicer.prototype.sliceEventRanges = function (eventRanges, extraArgs) {
            let segs = [];
            for (let _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
                let eventRange = eventRanges_1[_i];
                segs.push.apply(segs, this.sliceEventRange(eventRange, extraArgs));
            }
            return segs;
        };
        /*
        "complete" seg means it has component and eventRange
        */
        Slicer.prototype.sliceEventRange = function (eventRange, extraArgs) {
            let dateRange = eventRange.range;
            // hack to make multi-day events that are being force-displayed as list-items to take up only one day
            if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
                dateRange = {
                    start: dateRange.start,
                    end: addDays(dateRange.start, 1),
                };
            }
            let segs = this.sliceRange.apply(this, __spreadArray([dateRange], extraArgs));
            for (let _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
                let seg = segs_2[_i];
                seg.eventRange = eventRange;
                seg.isStart = eventRange.isStart && seg.isStart;
                seg.isEnd = eventRange.isEnd && seg.isEnd;
            }
            return segs;
        };
        return Slicer;
    }());
    /*
    for incorporating slotMinTime/slotMaxTime if appropriate
    TODO: should be part of DateProfile!
    TimelineDateProfile already does this btw
    */
    function computeActiveRange(dateProfile, isComponentAllDay) {
        let range = dateProfile.activeRange;
        if (isComponentAllDay) {
            return range;
        }
        return {
            start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
            end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5), // 864e5 = ms in a day
        };
    }

    // high-level segmenting-aware tester functions
    // ------------------------------------------------------------------------------------------------------------------------
    function isInteractionValid(interaction, dateProfile, context) {
        let instances = interaction.mutatedEvents.instances;
        for (let instanceId in instances) {
            if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
                return false;
            }
        }
        return isNewPropsValid({ eventDrag: interaction }, context); // HACK: the eventDrag props is used for ALL interactions
    }
    function isDateSelectionValid(dateSelection, dateProfile, context) {
        if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
            return false;
        }
        return isNewPropsValid({ dateSelection: dateSelection }, context);
    }
    function isNewPropsValid(newProps, context) {
        let calendarState = context.getCurrentData();
        let props = __assign({ businessHours: calendarState.businessHours, dateSelection: '', eventStore: calendarState.eventStore, eventUiBases: calendarState.eventUiBases, eventSelection: '', eventDrag: null, eventResize: null }, newProps);
        return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
    }
    function isPropsValid(state, context, dateSpanMeta, filterConfig) {
        if (dateSpanMeta === void 0) { dateSpanMeta = {}; }
        if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
            return false;
        }
        if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
            return false;
        }
        return true;
    }
    // Moving Event Validation
    // ------------------------------------------------------------------------------------------------------------------------
    function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
        let currentState = context.getCurrentData();
        let interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
        let subjectEventStore = interaction.mutatedEvents;
        let subjectDefs = subjectEventStore.defs;
        let subjectInstances = subjectEventStore.instances;
        let subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ?
            state.eventUiBases :
            { '': currentState.selectionConfig });
        if (filterConfig) {
            subjectConfigs = mapHash(subjectConfigs, filterConfig);
        }
        // exclude the subject events. TODO: exclude defs too?
        let otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
        let otherDefs = otherEventStore.defs;
        let otherInstances = otherEventStore.instances;
        let otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
        for (let subjectInstanceId in subjectInstances) {
            let subjectInstance = subjectInstances[subjectInstanceId];
            let subjectRange = subjectInstance.range;
            let subjectConfig = subjectConfigs[subjectInstance.defId];
            let subjectDef = subjectDefs[subjectInstance.defId];
            // constraint
            if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
                return false;
            }
            // overlap
            let eventOverlap = context.options.eventOverlap;
            let eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;
            for (let otherInstanceId in otherInstances) {
                let otherInstance = otherInstances[otherInstanceId];
                // intersect! evaluate
                if (rangesIntersect(subjectRange, otherInstance.range)) {
                    let otherOverlap = otherConfigs[otherInstance.defId].overlap;
                    // consider the other event's overlap. only do this if the subject event is a "real" event
                    if (otherOverlap === false && interaction.isEvent) {
                        return false;
                    }
                    if (subjectConfig.overlap === false) {
                        return false;
                    }
                    if (eventOverlapFunc && !eventOverlapFunc(new EventApi(context, otherDefs[otherInstance.defId], otherInstance), // still event
                    new EventApi(context, subjectDef, subjectInstance))) {
                        return false;
                    }
                }
            }
            // allow (a function)
            let calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state
            for (let _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
                let subjectAllow = _a[_i];
                let subjectDateSpan = __assign(__assign({}, dateSpanMeta), { range: subjectInstance.range, allDay: subjectDef.allDay });
                let origDef = calendarEventStore.defs[subjectDef.defId];
                let origInstance = calendarEventStore.instances[subjectInstanceId];
                let eventApi = void 0;
                if (origDef) { // was previously in the calendar
                    eventApi = new EventApi(context, origDef, origInstance);
                }
                else { // was an external event
                    eventApi = new EventApi(context, subjectDef); // no instance, because had no dates
                }
                if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
                    return false;
                }
            }
        }
        return true;
    }
    // Date Selection Validation
    // ------------------------------------------------------------------------------------------------------------------------
    function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
        let relevantEventStore = state.eventStore;
        let relevantDefs = relevantEventStore.defs;
        let relevantInstances = relevantEventStore.instances;
        let selection = state.dateSelection;
        let selectionRange = selection.range;
        let selectionConfig = context.getCurrentData().selectionConfig;
        if (filterConfig) {
            selectionConfig = filterConfig(selectionConfig);
        }
        // constraint
        if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
            return false;
        }
        // overlap
        let selectOverlap = context.options.selectOverlap;
        let selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;
        for (let relevantInstanceId in relevantInstances) {
            let relevantInstance = relevantInstances[relevantInstanceId];
            // intersect! evaluate
            if (rangesIntersect(selectionRange, relevantInstance.range)) {
                if (selectionConfig.overlap === false) {
                    return false;
                }
                if (selectOverlapFunc && !selectOverlapFunc(new EventApi(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
                    return false;
                }
            }
        }
        // allow (a function)
        for (let _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
            let selectionAllow = _a[_i];
            let fullDateSpan = __assign(__assign({}, dateSpanMeta), selection);
            if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
                return false;
            }
        }
        return true;
    }
    // Constraint Utils
    // ------------------------------------------------------------------------------------------------------------------------
    function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
        for (let _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
            let constraint = constraints_1[_i];
            if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
                return false;
            }
        }
        return true;
    }
    function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
    otherEventStore, // for if constraint is an even group ID
    businessHoursUnexpanded, // for if constraint is 'businessHours'
    context) {
        if (constraint === 'businessHours') {
            return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
        }
        if (typeof constraint === 'string') { // an group ID
            return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) { return eventDef.groupId === constraint; }));
        }
        if (typeof constraint === 'object' && constraint) { // non-null object
            return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
        }
        return []; // if it's false
    }
    // TODO: move to event-store file?
    function eventStoreToRanges(eventStore) {
        let instances = eventStore.instances;
        let ranges = [];
        for (let instanceId in instances) {
            ranges.push(instances[instanceId].range);
        }
        return ranges;
    }
    // TODO: move to geom file?
    function anyRangesContainRange(outerRanges, innerRange) {
        for (let _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
            let outerRange = outerRanges_1[_i];
            if (rangeContainsRange(outerRange, innerRange)) {
                return true;
            }
        }
        return false;
    }

    let VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
    let Scroller = /** @class */ (function (_super) {
        __extends(Scroller, _super);
        function Scroller() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleEl = function (el) {
                _this.el = el;
                setRef(_this.props.elRef, el);
            };
            return _this;
        }
        Scroller.prototype.render = function () {
            let props = this.props;
            let liquid = props.liquid, liquidIsAbsolute = props.liquidIsAbsolute;
            let isAbsolute = liquid && liquidIsAbsolute;
            let className = ['fc-scroller'];
            if (liquid) {
                if (liquidIsAbsolute) {
                    className.push('fc-scroller-liquid-absolute');
                }
                else {
                    className.push('fc-scroller-liquid');
                }
            }
            return (createElement("div", { ref: this.handleEl, className: className.join(' '), style: {
                    overflowX: props.overflowX,
                    overflowY: props.overflowY,
                    left: (isAbsolute && -(props.overcomeLeft || 0)) || '',
                    right: (isAbsolute && -(props.overcomeRight || 0)) || '',
                    bottom: (isAbsolute && -(props.overcomeBottom || 0)) || '',
                    marginLeft: (!isAbsolute && -(props.overcomeLeft || 0)) || '',
                    marginRight: (!isAbsolute && -(props.overcomeRight || 0)) || '',
                    marginBottom: (!isAbsolute && -(props.overcomeBottom || 0)) || '',
                    maxHeight: props.maxHeight || '',
                } }, props.children));
        };
        Scroller.prototype.needsXScrolling = function () {
            if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
                return false;
            }
            // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
            // much more reliable to see if children are taller than the scroller, even tho doesn't account for
            // inner-child margins and absolute positioning
            let el = this.el;
            let realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
            let children = el.children;
            for (let i = 0; i < children.length; i += 1) {
                let childEl = children[i];
                if (childEl.getBoundingClientRect().width > realClientWidth) {
                    return true;
                }
            }
            return false;
        };
        Scroller.prototype.needsYScrolling = function () {
            if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
                return false;
            }
            // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
            // much more reliable to see if children are taller than the scroller, even tho doesn't account for
            // inner-child margins and absolute positioning
            let el = this.el;
            let realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
            let children = el.children;
            for (let i = 0; i < children.length; i += 1) {
                let childEl = children[i];
                if (childEl.getBoundingClientRect().height > realClientHeight) {
                    return true;
                }
            }
            return false;
        };
        Scroller.prototype.getXScrollbarWidth = function () {
            if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
                return 0;
            }
            return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
        };
        Scroller.prototype.getYScrollbarWidth = function () {
            if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
                return 0;
            }
            return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
        };
        return Scroller;
    }(BaseComponent));

    /*
    TODO: somehow infer OtherArgs from masterCallback?
    TODO: infer RefType from masterCallback if provided
    */
    let RefMap = /** @class */ (function () {
        function RefMap(masterCallback) {
            let _this = this;
            this.masterCallback = masterCallback;
            this.currentMap = {};
            this.depths = {};
            this.callbackMap = {};
            this.handleValue = function (val, key) {
                let _a = _this, depths = _a.depths, currentMap = _a.currentMap;
                let removed = false;
                let added = false;
                if (val !== null) {
                    // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
                    removed = (key in currentMap);
                    currentMap[key] = val;
                    depths[key] = (depths[key] || 0) + 1;
                    added = true;
                }
                else {
                    depths[key] -= 1;
                    if (!depths[key]) {
                        delete currentMap[key];
                        delete _this.callbackMap[key];
                        removed = true;
                    }
                }
                if (_this.masterCallback) {
                    if (removed) {
                        _this.masterCallback(null, String(key));
                    }
                    if (added) {
                        _this.masterCallback(val, String(key));
                    }
                }
            };
        }
        RefMap.prototype.createRef = function (key) {
            let _this = this;
            let refCallback = this.callbackMap[key];
            if (!refCallback) {
                refCallback = this.callbackMap[key] = function (val) {
                    _this.handleValue(val, String(key));
                };
            }
            return refCallback;
        };
        // TODO: check callers that don't care about order. should use getAll instead
        // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
        // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
        RefMap.prototype.collect = function (startIndex, endIndex, step) {
            return collectFromHash(this.currentMap, startIndex, endIndex, step);
        };
        RefMap.prototype.getAll = function () {
            return hashValuesToArray(this.currentMap);
        };
        return RefMap;
    }());

    function computeShrinkWidth(chunkEls) {
        let shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
        let largestWidth = 0;
        for (let _i = 0, shrinkCells_1 = shrinkCells; _i < shrinkCells_1.length; _i++) {
            let shrinkCell = shrinkCells_1[_i];
            largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
        }
        return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
    }
    function getSectionHasLiquidHeight(props, sectionConfig) {
        return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
    }
    function getAllowYScrolling(props, sectionConfig) {
        return sectionConfig.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
            getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
    }
    // TODO: ONLY use `arg`. force out internal function to use same API
    function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
        let expandRows = arg.expandRows;
        let content = typeof chunkConfig.content === 'function' ?
            chunkConfig.content(arg) :
            createElement('table', {
                role: 'presentation',
                className: [
                    chunkConfig.tableClassName,
                    sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : '',
                ].join(' '),
                style: {
                    minWidth: arg.tableMinWidth,
                    width: arg.clientWidth,
                    height: expandRows ? arg.clientHeight : '', // css `height` on a <table> serves as a min-height
                },
            }, arg.tableColGroupNode, createElement(isHeader ? 'thead' : 'tbody', {
                role: 'presentation',
            }, typeof chunkConfig.rowContent === 'function'
                ? chunkConfig.rowContent(arg)
                : chunkConfig.rowContent));
        return content;
    }
    function isColPropsEqual(cols0, cols1) {
        return isArraysEqual(cols0, cols1, isPropsEqual);
    }
    function renderMicroColGroup(cols, shrinkWidth) {
        let colNodes = [];
        /*
        for ColProps with spans, it would have been great to make a single <col span="">
        HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
        SOLUTION: making individual <col> elements makes Chrome behave.
        */
        for (let _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
            let colProps = cols_1[_i];
            let span = colProps.span || 1;
            for (let i = 0; i < span; i += 1) {
                colNodes.push(createElement("col", { style: {
                        width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : (colProps.width || ''),
                        minWidth: colProps.minWidth || '',
                    } }));
            }
        }
        return createElement.apply(void 0, __spreadArray(['colgroup', {}], colNodes));
    }
    function sanitizeShrinkWidth(shrinkWidth) {
        /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
        4 accounts for 2 2-pixel borders. TODO: better solution? */
        return shrinkWidth == null ? 4 : shrinkWidth;
    }
    function hasShrinkWidth(cols) {
        for (let _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
            let col = cols_2[_i];
            if (col.width === 'shrink') {
                return true;
            }
        }
        return false;
    }
    function getScrollGridClassNames(liquid, context) {
        let classNames = [
            'fc-scrollgrid',
            context.theme.getClass('table'),
        ];
        if (liquid) {
            classNames.push('fc-scrollgrid-liquid');
        }
        return classNames;
    }
    function getSectionClassNames(sectionConfig, wholeTableVGrow) {
        let classNames = [
            'fc-scrollgrid-section',
            "fc-scrollgrid-section-" + sectionConfig.type,
            sectionConfig.className, // used?
        ];
        if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
            classNames.push('fc-scrollgrid-section-liquid');
        }
        if (sectionConfig.isSticky) {
            classNames.push('fc-scrollgrid-section-sticky');
        }
        return classNames;
    }
    function renderScrollShim(arg) {
        return (createElement("div", { className: "fc-scrollgrid-sticky-shim", style: {
                width: arg.clientWidth,
                minWidth: arg.tableMinWidth,
            } }));
    }
    function getStickyHeaderDates(options) {
        let stickyHeaderDates = options.stickyHeaderDates;
        if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
            stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
        }
        return stickyHeaderDates;
    }
    function getStickyFooterScrollbar(options) {
        let stickyFooterScrollbar = options.stickyFooterScrollbar;
        if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
            stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
        }
        return stickyFooterScrollbar;
    }

    let SimpleScrollGrid = /** @class */ (function (_super) {
        __extends(SimpleScrollGrid, _super);
        function SimpleScrollGrid() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.processCols = memoize(function (a) { return a; }, isColPropsEqual); // so we get same `cols` props every time
            // yucky to memoize VNodes, but much more efficient for consumers
            _this.renderMicroColGroup = memoize(renderMicroColGroup);
            _this.scrollerRefs = new RefMap();
            _this.scrollerElRefs = new RefMap(_this._handleScrollerEl.bind(_this));
            _this.state = {
                shrinkWidth: null,
                forceYScrollbars: false,
                scrollerClientWidths: {},
                scrollerClientHeights: {},
            };
            // TODO: can do a really simple print-view. dont need to join rows
            _this.handleSizing = function () {
                _this.setState(__assign({ shrinkWidth: _this.computeShrinkWidth() }, _this.computeScrollerDims()));
            };
            return _this;
        }
        SimpleScrollGrid.prototype.render = function () {
            let _a = this, props = _a.props, state = _a.state, context = _a.context;
            let sectionConfigs = props.sections || [];
            let cols = this.processCols(props.cols);
            let microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
            let classNames = getScrollGridClassNames(props.liquid, context);
            if (props.collapsibleWidth) {
                classNames.push('fc-scrollgrid-collapsible');
            }
            // TODO: make DRY
            let configCnt = sectionConfigs.length;
            let configI = 0;
            let currentConfig;
            let headSectionNodes = [];
            let bodySectionNodes = [];
            let footSectionNodes = [];
            while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
                headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
                configI += 1;
            }
            while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
                bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
                configI += 1;
            }
            while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
                footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
                configI += 1;
            }
            // firefox bug: when setting height on table and there is a thead or tfoot,
            // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
            // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
            // if so, use a simpler dom structure, jam everything into a lone tbody.
            let isBuggy = !getCanVGrowWithinCell();
            let roleAttrs = { role: 'rowgroup' };
            return createElement('table', {
                role: 'grid',
                className: classNames.join(' '),
                style: { height: props.height },
            }, Boolean(!isBuggy && headSectionNodes.length) && createElement.apply(void 0, __spreadArray(['thead', roleAttrs], headSectionNodes)), Boolean(!isBuggy && bodySectionNodes.length) && createElement.apply(void 0, __spreadArray(['tbody', roleAttrs], bodySectionNodes)), Boolean(!isBuggy && footSectionNodes.length) && createElement.apply(void 0, __spreadArray(['tfoot', roleAttrs], footSectionNodes)), isBuggy && createElement.apply(void 0, __spreadArray(__spreadArray(__spreadArray(['tbody', roleAttrs], headSectionNodes), bodySectionNodes), footSectionNodes)));
        };
        SimpleScrollGrid.prototype.renderSection = function (sectionConfig, microColGroupNode, isHeader) {
            if ('outerContent' in sectionConfig) {
                return (createElement(Fragment, { key: sectionConfig.key }, sectionConfig.outerContent));
            }
            return (createElement("tr", { key: sectionConfig.key, role: "presentation", className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ') }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader)));
        };
        SimpleScrollGrid.prototype.renderChunkTd = function (sectionConfig, microColGroupNode, chunkConfig, isHeader) {
            if ('outerContent' in chunkConfig) {
                return chunkConfig.outerContent;
            }
            let props = this.props;
            let _a = this.state, forceYScrollbars = _a.forceYScrollbars, scrollerClientWidths = _a.scrollerClientWidths, scrollerClientHeights = _a.scrollerClientHeights;
            let needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?
            let isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
            // for `!props.liquid` - is WHOLE scrollgrid natural height?
            // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars
            let overflowY = !props.liquid ? 'visible' :
                forceYScrollbars ? 'scroll' :
                    !needsYScrolling ? 'hidden' :
                        'auto';
            let sectionKey = sectionConfig.key;
            let content = renderChunkContent(sectionConfig, chunkConfig, {
                tableColGroupNode: microColGroupNode,
                tableMinWidth: '',
                clientWidth: (!props.collapsibleWidth && scrollerClientWidths[sectionKey] !== undefined) ? scrollerClientWidths[sectionKey] : null,
                clientHeight: scrollerClientHeights[sectionKey] !== undefined ? scrollerClientHeights[sectionKey] : null,
                expandRows: sectionConfig.expandRows,
                syncRowHeights: false,
                rowSyncHeights: [],
                reportRowHeightChange: function () { },
            }, isHeader);
            return createElement(isHeader ? 'th' : 'td', {
                ref: chunkConfig.elRef,
                role: 'presentation',
            }, createElement("div", { className: "fc-scroller-harness" + (isLiquid ? ' fc-scroller-harness-liquid' : '') },
                createElement(Scroller, { ref: this.scrollerRefs.createRef(sectionKey), elRef: this.scrollerElRefs.createRef(sectionKey), overflowY: overflowY, overflowX: !props.liquid ? 'visible' : 'hidden' /* natural height? */, maxHeight: sectionConfig.maxHeight, liquid: isLiquid, liquidIsAbsolute // because its within a harness
                    : true }, content)));
        };
        SimpleScrollGrid.prototype._handleScrollerEl = function (scrollerEl, key) {
            let section = getSectionByKey(this.props.sections, key);
            if (section) {
                setRef(section.chunk.scrollerElRef, scrollerEl);
            }
        };
        SimpleScrollGrid.prototype.componentDidMount = function () {
            this.handleSizing();
            this.context.addResizeHandler(this.handleSizing);
        };
        SimpleScrollGrid.prototype.componentDidUpdate = function () {
            // TODO: need better solution when state contains non-sizing things
            this.handleSizing();
        };
        SimpleScrollGrid.prototype.componentWillUnmount = function () {
            this.context.removeResizeHandler(this.handleSizing);
        };
        SimpleScrollGrid.prototype.computeShrinkWidth = function () {
            return hasShrinkWidth(this.props.cols)
                ? computeShrinkWidth(this.scrollerElRefs.getAll())
                : 0;
        };
        SimpleScrollGrid.prototype.computeScrollerDims = function () {
            let scrollbarWidth = getScrollbarWidths();
            let _a = this, scrollerRefs = _a.scrollerRefs, scrollerElRefs = _a.scrollerElRefs;
            let forceYScrollbars = false;
            let scrollerClientWidths = {};
            let scrollerClientHeights = {};
            for (let sectionKey in scrollerRefs.currentMap) {
                let scroller = scrollerRefs.currentMap[sectionKey];
                if (scroller && scroller.needsYScrolling()) {
                    forceYScrollbars = true;
                    break;
                }
            }
            for (let _i = 0, _b = this.props.sections; _i < _b.length; _i++) {
                let section = _b[_i];
                let sectionKey = section.key;
                let scrollerEl = scrollerElRefs.currentMap[sectionKey];
                if (scrollerEl) {
                    let harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders
                    scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars
                        ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
                        : 0));
                    scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
                }
            }
            return { forceYScrollbars: forceYScrollbars, scrollerClientWidths: scrollerClientWidths, scrollerClientHeights: scrollerClientHeights };
        };
        return SimpleScrollGrid;
    }(BaseComponent));
    SimpleScrollGrid.addStateEquality({
        scrollerClientWidths: isPropsEqual,
        scrollerClientHeights: isPropsEqual,
    });
    function getSectionByKey(sections, key) {
        for (let _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
            let section = sections_1[_i];
            if (section.key === key) {
                return section;
            }
        }
        return null;
    }

    let EventRoot = /** @class */ (function (_super) {
        __extends(EventRoot, _super);
        function EventRoot() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.elRef = createRef();
            return _this;
        }
        EventRoot.prototype.render = function () {
            let _a = this, props = _a.props, context = _a.context;
            let options = context.options;
            let seg = props.seg;
            let eventRange = seg.eventRange;
            let ui = eventRange.ui;
            let hookProps = {
                event: new EventApi(context, eventRange.def, eventRange.instance),
                view: context.viewApi,
                timeText: props.timeText,
                textColor: ui.textColor,
                backgroundColor: ui.backgroundColor,
                borderColor: ui.borderColor,
                isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
                isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
                isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
                isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
                isStart: Boolean(seg.isStart),
                isEnd: Boolean(seg.isEnd),
                isPast: Boolean(props.isPast),
                isFuture: Boolean(props.isFuture),
                isToday: Boolean(props.isToday),
                isSelected: Boolean(props.isSelected),
                isDragging: Boolean(props.isDragging),
                isResizing: Boolean(props.isResizing),
            };
            let standardClassNames = getEventClassNames(hookProps).concat(ui.classNames);
            return (createElement(RenderHook, { hookProps: hookProps, classNames: options.eventClassNames, content: options.eventContent, defaultContent: props.defaultContent, didMount: options.eventDidMount, willUnmount: options.eventWillUnmount, elRef: this.elRef }, function (rootElRef, customClassNames, innerElRef, innerContent) { return props.children(rootElRef, standardClassNames.concat(customClassNames), innerElRef, innerContent, hookProps); }));
        };
        EventRoot.prototype.componentDidMount = function () {
            setElSeg(this.elRef.current, this.props.seg);
        };
        /*
        need to re-assign seg to the element if seg changes, even if the element is the same
        */
        EventRoot.prototype.componentDidUpdate = function (prevProps) {
            let seg = this.props.seg;
            if (seg !== prevProps.seg) {
                setElSeg(this.elRef.current, seg);
            }
        };
        return EventRoot;
    }(BaseComponent));

    // should not be a purecomponent
    let StandardEvent = /** @class */ (function (_super) {
        __extends(StandardEvent, _super);
        function StandardEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StandardEvent.prototype.render = function () {
            let _a = this, props = _a.props, context = _a.context;
            let seg = props.seg;
            let timeFormat = context.options.eventTimeFormat || props.defaultTimeFormat;
            let timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
            return (createElement(EventRoot, { seg: seg, timeText: timeText, disableDragging: props.disableDragging, disableResizing: props.disableResizing, defaultContent: props.defaultContent || renderInnerContent$4, isDragging: props.isDragging, isResizing: props.isResizing, isDateSelecting: props.isDateSelecting, isSelected: props.isSelected, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) { return (createElement("a", __assign({ className: props.extraClassNames.concat(classNames).join(' '), style: {
                    borderColor: hookProps.borderColor,
                    backgroundColor: hookProps.backgroundColor,
                }, ref: rootElRef }, getSegAnchorAttrs(seg, context)),
                createElement("div", { className: "fc-event-main", ref: innerElRef, style: { color: hookProps.textColor } }, innerContent),
                hookProps.isStartResizable &&
                    createElement("div", { className: "fc-event-resizer fc-event-resizer-start" }),
                hookProps.isEndResizable &&
                    createElement("div", { className: "fc-event-resizer fc-event-resizer-end" }))); }));
        };
        return StandardEvent;
    }(BaseComponent));
    function renderInnerContent$4(innerProps) {
        return (createElement("div", { className: "fc-event-main-frame" },
            innerProps.timeText && (createElement("div", { className: "fc-event-time" }, innerProps.timeText)),
            createElement("div", { className: "fc-event-title-container" },
                createElement("div", { className: "fc-event-title fc-sticky" }, innerProps.event.title || createElement(Fragment, null, "\u00A0")))));
    }

    let NowIndicatorRoot = function (props) { return (createElement(ViewContextType.Consumer, null, function (context) {
        let options = context.options;
        let hookProps = {
            isAxis: props.isAxis,
            date: context.dateEnv.toDate(props.date),
            view: context.viewApi,
        };
        return (createElement(RenderHook, { hookProps: hookProps, classNames: options.nowIndicatorClassNames, content: options.nowIndicatorContent, didMount: options.nowIndicatorDidMount, willUnmount: options.nowIndicatorWillUnmount }, props.children));
    })); };

    let DAY_NUM_FORMAT = createFormatter({ day: 'numeric' });
    let DayCellContent = /** @class */ (function (_super) {
        __extends(DayCellContent, _super);
        function DayCellContent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DayCellContent.prototype.render = function () {
            let _a = this, props = _a.props, context = _a.context;
            let options = context.options;
            let hookProps = refineDayCellHookProps({
                date: props.date,
                dateProfile: props.dateProfile,
                todayRange: props.todayRange,
                showDayNumber: props.showDayNumber,
                extraProps: props.extraHookProps,
                viewApi: context.viewApi,
                dateEnv: context.dateEnv,
            });
            return (createElement(ContentHook, { hookProps: hookProps, content: options.dayCellContent, defaultContent: props.defaultContent }, props.children));
        };
        return DayCellContent;
    }(BaseComponent));
    function refineDayCellHookProps(raw) {
        let date = raw.date, dateEnv = raw.dateEnv;
        let dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
        return __assign(__assign(__assign({ date: dateEnv.toDate(date), view: raw.viewApi }, dayMeta), { dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : '' }), raw.extraProps);
    }

    let DayCellRoot = /** @class */ (function (_super) {
        __extends(DayCellRoot, _super);
        function DayCellRoot() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.refineHookProps = memoizeObjArg(refineDayCellHookProps);
            _this.normalizeClassNames = buildClassNameNormalizer();
            return _this;
        }
        DayCellRoot.prototype.render = function () {
            let _a = this, props = _a.props, context = _a.context;
            let options = context.options;
            let hookProps = this.refineHookProps({
                date: props.date,
                dateProfile: props.dateProfile,
                todayRange: props.todayRange,
                showDayNumber: props.showDayNumber,
                extraProps: props.extraHookProps,
                viewApi: context.viewApi,
                dateEnv: context.dateEnv,
            });
            let classNames = getDayClassNames(hookProps, context.theme).concat(hookProps.isDisabled
                ? [] // don't use custom classNames if disabled
                : this.normalizeClassNames(options.dayCellClassNames, hookProps));
            let dataAttrs = hookProps.isDisabled ? {} : {
                'data-date': formatDayString(props.date),
            };
            return (createElement(MountHook, { hookProps: hookProps, didMount: options.dayCellDidMount, willUnmount: options.dayCellWillUnmount, elRef: props.elRef }, function (rootElRef) { return props.children(rootElRef, classNames, dataAttrs, hookProps.isDisabled); }));
        };
        return DayCellRoot;
    }(BaseComponent));

    function renderFill(fillType) {
        return (createElement("div", { className: "fc-" + fillType }));
    }
    let BgEvent = function (props) { return (createElement(EventRoot, { defaultContent: renderInnerContent$3, seg: props.seg /* uselesss i think */, timeText: "", disableDragging: true, disableResizing: true, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) { return (createElement("div", { ref: rootElRef, className: ['fc-bg-event'].concat(classNames).join(' '), style: {
            backgroundColor: hookProps.backgroundColor,
        } }, innerContent)); })); };
    function renderInnerContent$3(props) {
        let title = props.event.title;
        return title && (createElement("div", { className: "fc-event-title" }, props.event.title));
    }

    let WeekNumberRoot = function (props) { return (createElement(ViewContextType.Consumer, null, function (context) {
        let dateEnv = context.dateEnv, options = context.options;
        let date = props.date;
        let format = options.weekNumberFormat || props.defaultFormat;
        let num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?
        let text = dateEnv.format(date, format);
        let hookProps = { num: num, text: text, date: date };
        return (createElement(RenderHook, { hookProps: hookProps, classNames: options.weekNumberClassNames, content: options.weekNumberContent, defaultContent: renderInner, didMount: options.weekNumberDidMount, willUnmount: options.weekNumberWillUnmount }, props.children));
    })); };
    function renderInner(innerProps) {
        return innerProps.text;
    }

    let PADDING_FROM_VIEWPORT = 10;
    let Popover = /** @class */ (function (_super) {
        __extends(Popover, _super);
        function Popover() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                titleId: getUniqueDomId(),
            };
            _this.handleRootEl = function (el) {
                _this.rootEl = el;
                if (_this.props.elRef) {
                    setRef(_this.props.elRef, el);
                }
            };
            // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
            _this.handleDocumentMouseDown = function (ev) {
                // only hide the popover if the click happened outside the popover
                let target = getEventTargetViaRoot(ev);
                if (!_this.rootEl.contains(target)) {
                    _this.handleCloseClick();
                }
            };
            _this.handleDocumentKeyDown = function (ev) {
                if (ev.key === 'Escape') {
                    _this.handleCloseClick();
                }
            };
            _this.handleCloseClick = function () {
                let onClose = _this.props.onClose;
                if (onClose) {
                    onClose();
                }
            };
            return _this;
        }
        Popover.prototype.render = function () {
            let _a = this.context, theme = _a.theme, options = _a.options;
            let _b = this, props = _b.props, state = _b.state;
            let classNames = [
                'fc-popover',
                theme.getClass('popover'),
            ].concat(props.extraClassNames || []);
            return createPortal(createElement("div", __assign({ id: props.id, className: classNames.join(' '), "aria-labelledby": state.titleId }, props.extraAttrs, { ref: this.handleRootEl }),
                createElement("div", { className: 'fc-popover-header ' + theme.getClass('popoverHeader') },
                    createElement("span", { className: "fc-popover-title", id: state.titleId }, props.title),
                    createElement("span", { className: 'fc-popover-close ' + theme.getIconClass('close'), title: options.closeHint, onClick: this.handleCloseClick })),
                createElement("div", { className: 'fc-popover-body ' + theme.getClass('popoverContent') }, props.children)), props.parentEl);
        };
        Popover.prototype.componentDidMount = function () {
            document.addEventListener('mousedown', this.handleDocumentMouseDown);
            document.addEventListener('keydown', this.handleDocumentKeyDown);
            this.updateSize();
        };
        Popover.prototype.componentWillUnmount = function () {
            document.removeEventListener('mousedown', this.handleDocumentMouseDown);
            document.removeEventListener('keydown', this.handleDocumentKeyDown);
        };
        Popover.prototype.updateSize = function () {
            let isRtl = this.context.isRtl;
            let _a = this.props, alignmentEl = _a.alignmentEl, alignGridTop = _a.alignGridTop;
            let rootEl = this.rootEl;
            let alignmentRect = computeClippedClientRect(alignmentEl);
            if (alignmentRect) {
                let popoverDims = rootEl.getBoundingClientRect();
                // position relative to viewport
                let popoverTop = alignGridTop
                    ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top
                    : alignmentRect.top;
                let popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
                // constrain
                popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
                popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
                popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
                let origin_1 = rootEl.offsetParent.getBoundingClientRect();
                applyStyle(rootEl, {
                    top: popoverTop - origin_1.top,
                    left: popoverLeft - origin_1.left,
                });
            }
        };
        return Popover;
    }(BaseComponent));

    let MorePopover = /** @class */ (function (_super) {
        __extends(MorePopover, _super);
        function MorePopover() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleRootEl = function (rootEl) {
                _this.rootEl = rootEl;
                if (rootEl) {
                    _this.context.registerInteractiveComponent(_this, {
                        el: rootEl,
                        useEventCenter: false,
                    });
                }
                else {
                    _this.context.unregisterInteractiveComponent(_this);
                }
            };
            return _this;
        }
        MorePopover.prototype.render = function () {
            let _a = this.context, options = _a.options, dateEnv = _a.dateEnv;
            let props = this.props;
            let startDate = props.startDate, todayRange = props.todayRange, dateProfile = props.dateProfile;
            let title = dateEnv.format(startDate, options.dayPopoverFormat);
            return (createElement(DayCellRoot, { date: startDate, dateProfile: dateProfile, todayRange: todayRange, elRef: this.handleRootEl }, function (rootElRef, dayClassNames, dataAttrs) { return (createElement(Popover, { elRef: rootElRef, id: props.id, title: title, extraClassNames: ['fc-more-popover'].concat(dayClassNames), extraAttrs: dataAttrs /* TODO: make these time-based when not whole-day? */, parentEl: props.parentEl, alignmentEl: props.alignmentEl, alignGridTop: props.alignGridTop, onClose: props.onClose },
                createElement(DayCellContent, { date: startDate, dateProfile: dateProfile, todayRange: todayRange }, function (innerElRef, innerContent) { return (innerContent &&
                    createElement("div", { className: "fc-more-popover-misc", ref: innerElRef }, innerContent)); }),
                props.children)); }));
        };
        MorePopover.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
            let _a = this, rootEl = _a.rootEl, props = _a.props;
            if (positionLeft >= 0 && positionLeft < elWidth &&
                positionTop >= 0 && positionTop < elHeight) {
                return {
                    dateProfile: props.dateProfile,
                    dateSpan: __assign({ allDay: true, range: {
                            start: props.startDate,
                            end: props.endDate,
                        } }, props.extraDateSpan),
                    dayEl: rootEl,
                    rect: {
                        left: 0,
                        top: 0,
                        right: elWidth,
                        bottom: elHeight,
                    },
                    layer: 1, // important when comparing with hits from other components
                };
            }
            return null;
        };
        return MorePopover;
    }(DateComponent));

    let MoreLinkRoot = /** @class */ (function (_super) {
        __extends(MoreLinkRoot, _super);
        function MoreLinkRoot() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.linkElRef = createRef();
            _this.state = {
                isPopoverOpen: false,
                popoverId: getUniqueDomId(),
            };
            _this.handleClick = function (ev) {
                let _a = _this, props = _a.props, context = _a.context;
                let moreLinkClick = context.options.moreLinkClick;
                let date = computeRange(props).start;
                function buildPublicSeg(seg) {
                    let _a = seg.eventRange, def = _a.def, instance = _a.instance, range = _a.range;
                    return {
                        event: new EventApi(context, def, instance),
                        start: context.dateEnv.toDate(range.start),
                        end: context.dateEnv.toDate(range.end),
                        isStart: seg.isStart,
                        isEnd: seg.isEnd,
                    };
                }
                if (typeof moreLinkClick === 'function') {
                    moreLinkClick = moreLinkClick({
                        date: date,
                        allDay: Boolean(props.allDayDate),
                        allSegs: props.allSegs.map(buildPublicSeg),
                        hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
                        jsEvent: ev,
                        view: context.viewApi,
                    });
                }
                if (!moreLinkClick || moreLinkClick === 'popover') {
                    _this.setState({ isPopoverOpen: true });
                }
                else if (typeof moreLinkClick === 'string') { // a view name
                    context.calendarApi.zoomTo(date, moreLinkClick);
                }
            };
            _this.handlePopoverClose = function () {
                _this.setState({ isPopoverOpen: false });
            };
            return _this;
        }
        MoreLinkRoot.prototype.render = function () {
            let _this = this;
            let _a = this, props = _a.props, state = _a.state;
            return (createElement(ViewContextType.Consumer, null, function (context) {
                let viewApi = context.viewApi, options = context.options, calendarApi = context.calendarApi;
                let moreLinkText = options.moreLinkText;
                let moreCnt = props.moreCnt;
                let range = computeRange(props);
                let text = typeof moreLinkText === 'function' // TODO: eventually use formatWithOrdinals
                    ? moreLinkText.call(calendarApi, moreCnt)
                    : "+" + moreCnt + " " + moreLinkText;
                let title = formatWithOrdinals(options.moreLinkHint, [moreCnt], text);
                let hookProps = {
                    num: moreCnt,
                    shortText: "+" + moreCnt,
                    text: text,
                    view: viewApi,
                };
                return (createElement(Fragment, null,
                    Boolean(props.moreCnt) && (createElement(RenderHook, { elRef: _this.linkElRef, hookProps: hookProps, classNames: options.moreLinkClassNames, content: options.moreLinkContent, defaultContent: props.defaultContent || renderMoreLinkInner$1, didMount: options.moreLinkDidMount, willUnmount: options.moreLinkWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return props.children(rootElRef, ['fc-more-link'].concat(customClassNames), innerElRef, innerContent, _this.handleClick, title, state.isPopoverOpen, state.isPopoverOpen ? state.popoverId : ''); })),
                    state.isPopoverOpen && (createElement(MorePopover, { id: state.popoverId, startDate: range.start, endDate: range.end, dateProfile: props.dateProfile, todayRange: props.todayRange, extraDateSpan: props.extraDateSpan, parentEl: _this.parentEl, alignmentEl: props.alignmentElRef.current, alignGridTop: props.alignGridTop, onClose: _this.handlePopoverClose }, props.popoverContent()))));
            }));
        };
        MoreLinkRoot.prototype.componentDidMount = function () {
            this.updateParentEl();
        };
        MoreLinkRoot.prototype.componentDidUpdate = function () {
            this.updateParentEl();
        };
        MoreLinkRoot.prototype.updateParentEl = function () {
            if (this.linkElRef.current) {
                this.parentEl = elementClosest(this.linkElRef.current, '.fc-view-harness');
            }
        };
        return MoreLinkRoot;
    }(BaseComponent));
    function renderMoreLinkInner$1(props) {
        return props.text;
    }
    function computeRange(props) {
        if (props.allDayDate) {
            return {
                start: props.allDayDate,
                end: addDays(props.allDayDate, 1),
            };
        }
        let hiddenSegs = props.hiddenSegs;
        return {
            start: computeEarliestSegStart(hiddenSegs),
            end: computeLatestSegEnd(hiddenSegs),
        };
    }
    function computeEarliestSegStart(segs) {
        return segs.reduce(pickEarliestStart).eventRange.range.start;
    }
    function pickEarliestStart(seg0, seg1) {
        return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
    }
    function computeLatestSegEnd(segs) {
        return segs.reduce(pickLatestEnd).eventRange.range.end;
    }
    function pickLatestEnd(seg0, seg1) {
        return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
    }

    // exports
    // --------------------------------------------------------------------------------------------------
    let version = '5.11.0'; // important to type it, so .d.ts has generic string

    let Calendar = /** @class */ (function (_super) {
        __extends(Calendar, _super);
        function Calendar(el, optionOverrides) {
            if (optionOverrides === void 0) { optionOverrides = {}; }
            let _this = _super.call(this) || this;
            _this.isRendering = false;
            _this.isRendered = false;
            _this.currentClassNames = [];
            _this.customContentRenderId = 0; // will affect custom generated classNames?
            _this.handleAction = function (action) {
                // actions we know we want to render immediately
                switch (action.type) {
                    case 'SET_EVENT_DRAG':
                    case 'SET_EVENT_RESIZE':
                        _this.renderRunner.tryDrain();
                }
            };
            _this.handleData = function (data) {
                _this.currentData = data;
                _this.renderRunner.request(data.calendarOptions.rerenderDelay);
            };
            _this.handleRenderRequest = function () {
                if (_this.isRendering) {
                    _this.isRendered = true;
                    let currentData_1 = _this.currentData;
                    flushSync(function () {
                        render(createElement(CalendarRoot, { options: currentData_1.calendarOptions, theme: currentData_1.theme, emitter: currentData_1.emitter }, function (classNames, height, isHeightAuto, forPrint) {
                            _this.setClassNames(classNames);
                            _this.setHeight(height);
                            return (createElement(CustomContentRenderContext.Provider, { value: _this.customContentRenderId },
                                createElement(CalendarContent, __assign({ isHeightAuto: isHeightAuto, forPrint: forPrint }, currentData_1))));
                        }), _this.el);
                    });
                }
                else if (_this.isRendered) {
                    _this.isRendered = false;
                    unmountComponentAtNode(_this.el);
                    _this.setClassNames([]);
                    _this.setHeight('');
                }
            };
            _this.el = el;
            _this.renderRunner = new DelayedRunner(_this.handleRenderRequest);
            new CalendarDataManager({
                optionOverrides: optionOverrides,
                calendarApi: _this,
                onAction: _this.handleAction,
                onData: _this.handleData,
            });
            return _this;
        }
        Object.defineProperty(Calendar.prototype, "view", {
            get: function () { return this.currentData.viewApi; } // for public API
            ,
            enumerable: false,
            configurable: true
        });
        Calendar.prototype.render = function () {
            let wasRendering = this.isRendering;
            if (!wasRendering) {
                this.isRendering = true;
            }
            else {
                this.customContentRenderId += 1;
            }
            this.renderRunner.request();
            if (wasRendering) {
                this.updateSize();
            }
        };
        Calendar.prototype.destroy = function () {
            if (this.isRendering) {
                this.isRendering = false;
                this.renderRunner.request();
            }
        };
        Calendar.prototype.updateSize = function () {
            let _this = this;
            flushSync(function () {
                _super.prototype.updateSize.call(_this);
            });
        };
        Calendar.prototype.batchRendering = function (func) {
            this.renderRunner.pause('batchRendering');
            func();
            this.renderRunner.resume('batchRendering');
        };
        Calendar.prototype.pauseRendering = function () {
            this.renderRunner.pause('pauseRendering');
        };
        Calendar.prototype.resumeRendering = function () {
            this.renderRunner.resume('pauseRendering', true);
        };
        Calendar.prototype.resetOptions = function (optionOverrides, append) {
            this.currentDataManager.resetOptions(optionOverrides, append);
        };
        Calendar.prototype.setClassNames = function (classNames) {
            if (!isArraysEqual(classNames, this.currentClassNames)) {
                let classList = this.el.classList;
                for (let _i = 0, _a = this.currentClassNames; _i < _a.length; _i++) {
                    let className = _a[_i];
                    classList.remove(className);
                }
                for (let _b = 0, classNames_1 = classNames; _b < classNames_1.length; _b++) {
                    let className = classNames_1[_b];
                    classList.add(className);
                }
                this.currentClassNames = classNames;
            }
        };
        Calendar.prototype.setHeight = function (height) {
            applyStyleProp(this.el, 'height', height);
        };
        return Calendar;
    }(CalendarApi));

    config.touchMouseIgnoreWait = 500;
    let ignoreMouseDepth = 0;
    let listenerCnt = 0;
    let isWindowTouchMoveCancelled = false;
    /*
    Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
    Tracks when the pointer "drags" on a certain element, meaning down+move+up.

    Also, tracks if there was touch-scrolling.
    Also, can prevent touch-scrolling from happening.
    Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

    emits:
    - pointerdown
    - pointermove
    - pointerup
    */
    let PointerDragging = /** @class */ (function () {
        function PointerDragging(containerEl) {
            let _this = this;
            this.subjectEl = null;
            // options that can be directly assigned by caller
            this.selector = ''; // will cause subjectEl in all emitted events to be this element
            this.handleSelector = '';
            this.shouldIgnoreMove = false;
            this.shouldWatchScroll = true; // for simulating pointermove on scroll
            // internal states
            this.isDragging = false;
            this.isTouchDragging = false;
            this.wasTouchScroll = false;
            // Mouse
            // ----------------------------------------------------------------------------------------------------
            this.handleMouseDown = function (ev) {
                if (!_this.shouldIgnoreMouse() &&
                    isPrimaryMouseButton(ev) &&
                    _this.tryStart(ev)) {
                    let pev = _this.createEventFromMouse(ev, true);
                    _this.emitter.trigger('pointerdown', pev);
                    _this.initScrollWatch(pev);
                    if (!_this.shouldIgnoreMove) {
                        document.addEventListener('mousemove', _this.handleMouseMove);
                    }
                    document.addEventListener('mouseup', _this.handleMouseUp);
                }
            };
            this.handleMouseMove = function (ev) {
                let pev = _this.createEventFromMouse(ev);
                _this.recordCoords(pev);
                _this.emitter.trigger('pointermove', pev);
            };
            this.handleMouseUp = function (ev) {
                document.removeEventListener('mousemove', _this.handleMouseMove);
                document.removeEventListener('mouseup', _this.handleMouseUp);
                _this.emitter.trigger('pointerup', _this.createEventFromMouse(ev));
                _this.cleanup(); // call last so that pointerup has access to props
            };
            // Touch
            // ----------------------------------------------------------------------------------------------------
            this.handleTouchStart = function (ev) {
                if (_this.tryStart(ev)) {
                    _this.isTouchDragging = true;
                    let pev = _this.createEventFromTouch(ev, true);
                    _this.emitter.trigger('pointerdown', pev);
                    _this.initScrollWatch(pev);
                    // unlike mouse, need to attach to target, not document
                    // https://stackoverflow.com/a/45760014
                    let targetEl = ev.target;
                    if (!_this.shouldIgnoreMove) {
                        targetEl.addEventListener('touchmove', _this.handleTouchMove);
                    }
                    targetEl.addEventListener('touchend', _this.handleTouchEnd);
                    targetEl.addEventListener('touchcancel', _this.handleTouchEnd); // treat it as a touch end
                    // attach a handler to get called when ANY scroll action happens on the page.
                    // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
                    // http://stackoverflow.com/a/32954565/96342
                    window.addEventListener('scroll', _this.handleTouchScroll, true);
                }
            };
            this.handleTouchMove = function (ev) {
                let pev = _this.createEventFromTouch(ev);
                _this.recordCoords(pev);
                _this.emitter.trigger('pointermove', pev);
            };
            this.handleTouchEnd = function (ev) {
                if (_this.isDragging) { // done to guard against touchend followed by touchcancel
                    let targetEl = ev.target;
                    targetEl.removeEventListener('touchmove', _this.handleTouchMove);
                    targetEl.removeEventListener('touchend', _this.handleTouchEnd);
                    targetEl.removeEventListener('touchcancel', _this.handleTouchEnd);
                    window.removeEventListener('scroll', _this.handleTouchScroll, true); // useCaptured=true
                    _this.emitter.trigger('pointerup', _this.createEventFromTouch(ev));
                    _this.cleanup(); // call last so that pointerup has access to props
                    _this.isTouchDragging = false;
                    startIgnoringMouse();
                }
            };
            this.handleTouchScroll = function () {
                _this.wasTouchScroll = true;
            };
            this.handleScroll = function (ev) {
                if (!_this.shouldIgnoreMove) {
                    let pageX = (window.pageXOffset - _this.prevScrollX) + _this.prevPageX;
                    let pageY = (window.pageYOffset - _this.prevScrollY) + _this.prevPageY;
                    _this.emitter.trigger('pointermove', {
                        origEvent: ev,
                        isTouch: _this.isTouchDragging,
                        subjectEl: _this.subjectEl,
                        pageX: pageX,
                        pageY: pageY,
                        deltaX: pageX - _this.origPageX,
                        deltaY: pageY - _this.origPageY,
                    });
                }
            };
            this.containerEl = containerEl;
            this.emitter = new Emitter();
            containerEl.addEventListener('mousedown', this.handleMouseDown);
            containerEl.addEventListener('touchstart', this.handleTouchStart, { passive: true });
            listenerCreated();
        }
        PointerDragging.prototype.destroy = function () {
            this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
            this.containerEl.removeEventListener('touchstart', this.handleTouchStart, { passive: true });
            listenerDestroyed();
        };
        PointerDragging.prototype.tryStart = function (ev) {
            let subjectEl = this.querySubjectEl(ev);
            let downEl = ev.target;
            if (subjectEl &&
                (!this.handleSelector || elementClosest(downEl, this.handleSelector))) {
                this.subjectEl = subjectEl;
                this.isDragging = true; // do this first so cancelTouchScroll will work
                this.wasTouchScroll = false;
                return true;
            }
            return false;
        };
        PointerDragging.prototype.cleanup = function () {
            isWindowTouchMoveCancelled = false;
            this.isDragging = false;
            this.subjectEl = null;
            // keep wasTouchScroll around for later access
            this.destroyScrollWatch();
        };
        PointerDragging.prototype.querySubjectEl = function (ev) {
            if (this.selector) {
                return elementClosest(ev.target, this.selector);
            }
            return this.containerEl;
        };
        PointerDragging.prototype.shouldIgnoreMouse = function () {
            return ignoreMouseDepth || this.isTouchDragging;
        };
        // can be called by user of this class, to cancel touch-based scrolling for the current drag
        PointerDragging.prototype.cancelTouchScroll = function () {
            if (this.isDragging) {
                isWindowTouchMoveCancelled = true;
            }
        };
        // Scrolling that simulates pointermoves
        // ----------------------------------------------------------------------------------------------------
        PointerDragging.prototype.initScrollWatch = function (ev) {
            if (this.shouldWatchScroll) {
                this.recordCoords(ev);
                window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
            }
        };
        PointerDragging.prototype.recordCoords = function (ev) {
            if (this.shouldWatchScroll) {
                this.prevPageX = ev.pageX;
                this.prevPageY = ev.pageY;
                this.prevScrollX = window.pageXOffset;
                this.prevScrollY = window.pageYOffset;
            }
        };
        PointerDragging.prototype.destroyScrollWatch = function () {
            if (this.shouldWatchScroll) {
                window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
            }
        };
        // Event Normalization
        // ----------------------------------------------------------------------------------------------------
        PointerDragging.prototype.createEventFromMouse = function (ev, isFirst) {
            let deltaX = 0;
            let deltaY = 0;
            // TODO: repeat code
            if (isFirst) {
                this.origPageX = ev.pageX;
                this.origPageY = ev.pageY;
            }
            else {
                deltaX = ev.pageX - this.origPageX;
                deltaY = ev.pageY - this.origPageY;
            }
            return {
                origEvent: ev,
                isTouch: false,
                subjectEl: this.subjectEl,
                pageX: ev.pageX,
                pageY: ev.pageY,
                deltaX: deltaX,
                deltaY: deltaY,
            };
        };
        PointerDragging.prototype.createEventFromTouch = function (ev, isFirst) {
            let touches = ev.touches;
            let pageX;
            let pageY;
            let deltaX = 0;
            let deltaY = 0;
            // if touch coords available, prefer,
            // because FF would give bad ev.pageX ev.pageY
            if (touches && touches.length) {
                pageX = touches[0].pageX;
                pageY = touches[0].pageY;
            }
            else {
                pageX = ev.pageX;
                pageY = ev.pageY;
            }
            // TODO: repeat code
            if (isFirst) {
                this.origPageX = pageX;
                this.origPageY = pageY;
            }
            else {
                deltaX = pageX - this.origPageX;
                deltaY = pageY - this.origPageY;
            }
            return {
                origEvent: ev,
                isTouch: true,
                subjectEl: this.subjectEl,
                pageX: pageX,
                pageY: pageY,
                deltaX: deltaX,
                deltaY: deltaY,
            };
        };
        return PointerDragging;
    }());
    // Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
    function isPrimaryMouseButton(ev) {
        return ev.button === 0 && !ev.ctrlKey;
    }
    // Ignoring fake mouse events generated by touch
    // ----------------------------------------------------------------------------------------------------
    function startIgnoringMouse() {
        ignoreMouseDepth += 1;
        setTimeout(function () {
            ignoreMouseDepth -= 1;
        }, config.touchMouseIgnoreWait);
    }
    // We want to attach touchmove as early as possible for Safari
    // ----------------------------------------------------------------------------------------------------
    function listenerCreated() {
        listenerCnt += 1;
        if (listenerCnt === 1) {
            window.addEventListener('touchmove', onWindowTouchMove, { passive: false });
        }
    }
    function listenerDestroyed() {
        listenerCnt -= 1;
        if (!listenerCnt) {
            window.removeEventListener('touchmove', onWindowTouchMove, { passive: false });
        }
    }
    function onWindowTouchMove(ev) {
        if (isWindowTouchMoveCancelled) {
            ev.preventDefault();
        }
    }

    /*
    An effect in which an element follows the movement of a pointer across the screen.
    The moving element is a clone of some other element.
    Must call start + handleMove + stop.
    */
    let ElementMirror = /** @class */ (function () {
        function ElementMirror() {
            this.isVisible = false; // must be explicitly enabled
            this.sourceEl = null;
            this.mirrorEl = null;
            this.sourceElRect = null; // screen coords relative to viewport
            // options that can be set directly by caller
            this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues
            this.zIndex = 9999;
            this.revertDuration = 0;
        }
        ElementMirror.prototype.start = function (sourceEl, pageX, pageY) {
            this.sourceEl = sourceEl;
            this.sourceElRect = this.sourceEl.getBoundingClientRect();
            this.origScreenX = pageX - window.pageXOffset;
            this.origScreenY = pageY - window.pageYOffset;
            this.deltaX = 0;
            this.deltaY = 0;
            this.updateElPosition();
        };
        ElementMirror.prototype.handleMove = function (pageX, pageY) {
            this.deltaX = (pageX - window.pageXOffset) - this.origScreenX;
            this.deltaY = (pageY - window.pageYOffset) - this.origScreenY;
            this.updateElPosition();
        };
        // can be called before start
        ElementMirror.prototype.setIsVisible = function (bool) {
            if (bool) {
                if (!this.isVisible) {
                    if (this.mirrorEl) {
                        this.mirrorEl.style.display = '';
                    }
                    this.isVisible = bool; // needs to happen before updateElPosition
                    this.updateElPosition(); // because was not updating the position while invisible
                }
            }
            else if (this.isVisible) {
                if (this.mirrorEl) {
                    this.mirrorEl.style.display = 'none';
                }
                this.isVisible = bool;
            }
        };
        // always async
        ElementMirror.prototype.stop = function (needsRevertAnimation, callback) {
            let _this = this;
            let done = function () {
                _this.cleanup();
                callback();
            };
            if (needsRevertAnimation &&
                this.mirrorEl &&
                this.isVisible &&
                this.revertDuration && // if 0, transition won't work
                (this.deltaX || this.deltaY) // if same coords, transition won't work
            ) {
                this.doRevertAnimation(done, this.revertDuration);
            }
            else {
                setTimeout(done, 0);
            }
        };
        ElementMirror.prototype.doRevertAnimation = function (callback, revertDuration) {
            let mirrorEl = this.mirrorEl;
            let finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
            mirrorEl.style.transition =
                'top ' + revertDuration + 'ms,' +
                    'left ' + revertDuration + 'ms';
            applyStyle(mirrorEl, {
                left: finalSourceElRect.left,
                top: finalSourceElRect.top,
            });
            whenTransitionDone(mirrorEl, function () {
                mirrorEl.style.transition = '';
                callback();
            });
        };
        ElementMirror.prototype.cleanup = function () {
            if (this.mirrorEl) {
                removeElement(this.mirrorEl);
                this.mirrorEl = null;
            }
            this.sourceEl = null;
        };
        ElementMirror.prototype.updateElPosition = function () {
            if (this.sourceEl && this.isVisible) {
                applyStyle(this.getMirrorEl(), {
                    left: this.sourceElRect.left + this.deltaX,
                    top: this.sourceElRect.top + this.deltaY,
                });
            }
        };
        ElementMirror.prototype.getMirrorEl = function () {
            let sourceElRect = this.sourceElRect;
            let mirrorEl = this.mirrorEl;
            if (!mirrorEl) {
                mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
                // we don't want long taps or any mouse interaction causing selection/menus.
                // would use preventSelection(), but that prevents selectstart, causing problems.
                mirrorEl.classList.add('fc-unselectable');
                mirrorEl.classList.add('fc-event-dragging');
                applyStyle(mirrorEl, {
                    position: 'fixed',
                    zIndex: this.zIndex,
                    visibility: '',
                    boxSizing: 'border-box',
                    width: sourceElRect.right - sourceElRect.left,
                    height: sourceElRect.bottom - sourceElRect.top,
                    right: 'auto',
                    bottom: 'auto',
                    margin: 0,
                });
                this.parentNode.appendChild(mirrorEl);
            }
            return mirrorEl;
        };
        return ElementMirror;
    }());

    /*
    Is a cache for a given element's scroll information (all the info that ScrollController stores)
    in addition the "client rectangle" of the element.. the area within the scrollbars.

    The cache can be in one of two modes:
    - doesListening:false - ignores when the container is scrolled by someone else
    - doesListening:true - watch for scrolling and update the cache
    */
    let ScrollGeomCache = /** @class */ (function (_super) {
        __extends(ScrollGeomCache, _super);
        function ScrollGeomCache(scrollController, doesListening) {
            let _this = _super.call(this) || this;
            _this.handleScroll = function () {
                _this.scrollTop = _this.scrollController.getScrollTop();
                _this.scrollLeft = _this.scrollController.getScrollLeft();
                _this.handleScrollChange();
            };
            _this.scrollController = scrollController;
            _this.doesListening = doesListening;
            _this.scrollTop = _this.origScrollTop = scrollController.getScrollTop();
            _this.scrollLeft = _this.origScrollLeft = scrollController.getScrollLeft();
            _this.scrollWidth = scrollController.getScrollWidth();
            _this.scrollHeight = scrollController.getScrollHeight();
            _this.clientWidth = scrollController.getClientWidth();
            _this.clientHeight = scrollController.getClientHeight();
            _this.clientRect = _this.computeClientRect(); // do last in case it needs cached values
            if (_this.doesListening) {
                _this.getEventTarget().addEventListener('scroll', _this.handleScroll);
            }
            return _this;
        }
        ScrollGeomCache.prototype.destroy = function () {
            if (this.doesListening) {
                this.getEventTarget().removeEventListener('scroll', this.handleScroll);
            }
        };
        ScrollGeomCache.prototype.getScrollTop = function () {
            return this.scrollTop;
        };
        ScrollGeomCache.prototype.getScrollLeft = function () {
            return this.scrollLeft;
        };
        ScrollGeomCache.prototype.setScrollTop = function (top) {
            this.scrollController.setScrollTop(top);
            if (!this.doesListening) {
                // we are not relying on the element to normalize out-of-bounds scroll values
                // so we need to sanitize ourselves
                this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
                this.handleScrollChange();
            }
        };
        ScrollGeomCache.prototype.setScrollLeft = function (top) {
            this.scrollController.setScrollLeft(top);
            if (!this.doesListening) {
                // we are not relying on the element to normalize out-of-bounds scroll values
                // so we need to sanitize ourselves
                this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
                this.handleScrollChange();
            }
        };
        ScrollGeomCache.prototype.getClientWidth = function () {
            return this.clientWidth;
        };
        ScrollGeomCache.prototype.getClientHeight = function () {
            return this.clientHeight;
        };
        ScrollGeomCache.prototype.getScrollWidth = function () {
            return this.scrollWidth;
        };
        ScrollGeomCache.prototype.getScrollHeight = function () {
            return this.scrollHeight;
        };
        ScrollGeomCache.prototype.handleScrollChange = function () {
        };
        return ScrollGeomCache;
    }(ScrollController));

    let ElementScrollGeomCache = /** @class */ (function (_super) {
        __extends(ElementScrollGeomCache, _super);
        function ElementScrollGeomCache(el, doesListening) {
            return _super.call(this, new ElementScrollController(el), doesListening) || this;
        }
        ElementScrollGeomCache.prototype.getEventTarget = function () {
            return this.scrollController.el;
        };
        ElementScrollGeomCache.prototype.computeClientRect = function () {
            return computeInnerRect(this.scrollController.el);
        };
        return ElementScrollGeomCache;
    }(ScrollGeomCache));

    let WindowScrollGeomCache = /** @class */ (function (_super) {
        __extends(WindowScrollGeomCache, _super);
        function WindowScrollGeomCache(doesListening) {
            return _super.call(this, new WindowScrollController(), doesListening) || this;
        }
        WindowScrollGeomCache.prototype.getEventTarget = function () {
            return window;
        };
        WindowScrollGeomCache.prototype.computeClientRect = function () {
            return {
                left: this.scrollLeft,
                right: this.scrollLeft + this.clientWidth,
                top: this.scrollTop,
                bottom: this.scrollTop + this.clientHeight,
            };
        };
        // the window is the only scroll object that changes it's rectangle relative
        // to the document's topleft as it scrolls
        WindowScrollGeomCache.prototype.handleScrollChange = function () {
            this.clientRect = this.computeClientRect();
        };
        return WindowScrollGeomCache;
    }(ScrollGeomCache));

    // If available we are using native "performance" API instead of "Date"
    // Read more about it on MDN:
    // https://developer.mozilla.org/en-US/docs/Web/API/Performance
    let getTime = typeof performance === 'function' ? performance.now : Date.now;
    /*
    For a pointer interaction, automatically scrolls certain scroll containers when the pointer
    approaches the edge.

    The caller must call start + handleMove + stop.
    */
    let AutoScroller = /** @class */ (function () {
        function AutoScroller() {
            let _this = this;
            // options that can be set by caller
            this.isEnabled = true;
            this.scrollQuery = [window, '.fc-scroller'];
            this.edgeThreshold = 50; // pixels
            this.maxVelocity = 300; // pixels per second
            // internal state
            this.pointerScreenX = null;
            this.pointerScreenY = null;
            this.isAnimating = false;
            this.scrollCaches = null;
            // protect against the initial pointerdown being too close to an edge and starting the scroll
            this.everMovedUp = false;
            this.everMovedDown = false;
            this.everMovedLeft = false;
            this.everMovedRight = false;
            this.animate = function () {
                if (_this.isAnimating) { // wasn't cancelled between animation calls
                    let edge = _this.computeBestEdge(_this.pointerScreenX + window.pageXOffset, _this.pointerScreenY + window.pageYOffset);
                    if (edge) {
                        let now = getTime();
                        _this.handleSide(edge, (now - _this.msSinceRequest) / 1000);
                        _this.requestAnimation(now);
                    }
                    else {
                        _this.isAnimating = false; // will stop animation
                    }
                }
            };
        }
        AutoScroller.prototype.start = function (pageX, pageY, scrollStartEl) {
            if (this.isEnabled) {
                this.scrollCaches = this.buildCaches(scrollStartEl);
                this.pointerScreenX = null;
                this.pointerScreenY = null;
                this.everMovedUp = false;
                this.everMovedDown = false;
                this.everMovedLeft = false;
                this.everMovedRight = false;
                this.handleMove(pageX, pageY);
            }
        };
        AutoScroller.prototype.handleMove = function (pageX, pageY) {
            if (this.isEnabled) {
                let pointerScreenX = pageX - window.pageXOffset;
                let pointerScreenY = pageY - window.pageYOffset;
                let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
                let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
                if (yDelta < 0) {
                    this.everMovedUp = true;
                }
                else if (yDelta > 0) {
                    this.everMovedDown = true;
                }
                if (xDelta < 0) {
                    this.everMovedLeft = true;
                }
                else if (xDelta > 0) {
                    this.everMovedRight = true;
                }
                this.pointerScreenX = pointerScreenX;
                this.pointerScreenY = pointerScreenY;
                if (!this.isAnimating) {
                    this.isAnimating = true;
                    this.requestAnimation(getTime());
                }
            }
        };
        AutoScroller.prototype.stop = function () {
            if (this.isEnabled) {
                this.isAnimating = false; // will stop animation
                for (let _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
                    let scrollCache = _a[_i];
                    scrollCache.destroy();
                }
                this.scrollCaches = null;
            }
        };
        AutoScroller.prototype.requestAnimation = function (now) {
            this.msSinceRequest = now;
            requestAnimationFrame(this.animate);
        };
        AutoScroller.prototype.handleSide = function (edge, seconds) {
            let scrollCache = edge.scrollCache;
            let edgeThreshold = this.edgeThreshold;
            let invDistance = edgeThreshold - edge.distance;
            let velocity = // the closer to the edge, the faster we scroll
             ((invDistance * invDistance) / (edgeThreshold * edgeThreshold)) * // quadratic
                this.maxVelocity * seconds;
            let sign = 1;
            switch (edge.name) {
                case 'left':
                    sign = -1;
                // falls through
                case 'right':
                    scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
                    break;
                case 'top':
                    sign = -1;
                // falls through
                case 'bottom':
                    scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
                    break;
            }
        };
        // left/top are relative to document topleft
        AutoScroller.prototype.computeBestEdge = function (left, top) {
            let edgeThreshold = this.edgeThreshold;
            let bestSide = null;
            let scrollCaches = this.scrollCaches || [];
            for (let _i = 0, scrollCaches_1 = scrollCaches; _i < scrollCaches_1.length; _i++) {
                let scrollCache = scrollCaches_1[_i];
                let rect = scrollCache.clientRect;
                let leftDist = left - rect.left;
                let rightDist = rect.right - left;
                let topDist = top - rect.top;
                let bottomDist = rect.bottom - top;
                // completely within the rect?
                if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
                    if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() &&
                        (!bestSide || bestSide.distance > topDist)) {
                        bestSide = { scrollCache: scrollCache, name: 'top', distance: topDist };
                    }
                    if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() &&
                        (!bestSide || bestSide.distance > bottomDist)) {
                        bestSide = { scrollCache: scrollCache, name: 'bottom', distance: bottomDist };
                    }
                    if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() &&
                        (!bestSide || bestSide.distance > leftDist)) {
                        bestSide = { scrollCache: scrollCache, name: 'left', distance: leftDist };
                    }
                    if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() &&
                        (!bestSide || bestSide.distance > rightDist)) {
                        bestSide = { scrollCache: scrollCache, name: 'right', distance: rightDist };
                    }
                }
            }
            return bestSide;
        };
        AutoScroller.prototype.buildCaches = function (scrollStartEl) {
            return this.queryScrollEls(scrollStartEl).map(function (el) {
                if (el === window) {
                    return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
                }
                return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
            });
        };
        AutoScroller.prototype.queryScrollEls = function (scrollStartEl) {
            let els = [];
            for (let _i = 0, _a = this.scrollQuery; _i < _a.length; _i++) {
                let query = _a[_i];
                if (typeof query === 'object') {
                    els.push(query);
                }
                else {
                    els.push.apply(els, Array.prototype.slice.call(getElRoot(scrollStartEl).querySelectorAll(query)));
                }
            }
            return els;
        };
        return AutoScroller;
    }());

    /*
    Monitors dragging on an element. Has a number of high-level features:
    - minimum distance required before dragging
    - minimum wait time ("delay") before dragging
    - a mirror element that follows the pointer
    */
    let FeaturefulElementDragging = /** @class */ (function (_super) {
        __extends(FeaturefulElementDragging, _super);
        function FeaturefulElementDragging(containerEl, selector) {
            let _this = _super.call(this, containerEl) || this;
            _this.containerEl = containerEl;
            // options that can be directly set by caller
            // the caller can also set the PointerDragging's options as well
            _this.delay = null;
            _this.minDistance = 0;
            _this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
            _this.mirrorNeedsRevert = false;
            _this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
            _this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
            _this.isDelayEnded = false;
            _this.isDistanceSurpassed = false;
            _this.delayTimeoutId = null;
            _this.onPointerDown = function (ev) {
                if (!_this.isDragging) { // so new drag doesn't happen while revert animation is going
                    _this.isInteracting = true;
                    _this.isDelayEnded = false;
                    _this.isDistanceSurpassed = false;
                    preventSelection(document.body);
                    preventContextMenu(document.body);
                    // prevent links from being visited if there's an eventual drag.
                    // also prevents selection in older browsers (maybe?).
                    // not necessary for touch, besides, browser would complain about passiveness.
                    if (!ev.isTouch) {
                        ev.origEvent.preventDefault();
                    }
                    _this.emitter.trigger('pointerdown', ev);
                    if (_this.isInteracting && // not destroyed via pointerdown handler
                        !_this.pointer.shouldIgnoreMove) {
                        // actions related to initiating dragstart+dragmove+dragend...
                        _this.mirror.setIsVisible(false); // reset. caller must set-visible
                        _this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
                        _this.startDelay(ev);
                        if (!_this.minDistance) {
                            _this.handleDistanceSurpassed(ev);
                        }
                    }
                }
            };
            _this.onPointerMove = function (ev) {
                if (_this.isInteracting) {
                    _this.emitter.trigger('pointermove', ev);
                    if (!_this.isDistanceSurpassed) {
                        let minDistance = _this.minDistance;
                        let distanceSq = void 0; // current distance from the origin, squared
                        let deltaX = ev.deltaX, deltaY = ev.deltaY;
                        distanceSq = deltaX * deltaX + deltaY * deltaY;
                        if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
                            _this.handleDistanceSurpassed(ev);
                        }
                    }
                    if (_this.isDragging) {
                        // a real pointer move? (not one simulated by scrolling)
                        if (ev.origEvent.type !== 'scroll') {
                            _this.mirror.handleMove(ev.pageX, ev.pageY);
                            _this.autoScroller.handleMove(ev.pageX, ev.pageY);
                        }
                        _this.emitter.trigger('dragmove', ev);
                    }
                }
            };
            _this.onPointerUp = function (ev) {
                if (_this.isInteracting) {
                    _this.isInteracting = false;
                    allowSelection(document.body);
                    allowContextMenu(document.body);
                    _this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
                    if (_this.isDragging) {
                        _this.autoScroller.stop();
                        _this.tryStopDrag(ev); // which will stop the mirror
                    }
                    if (_this.delayTimeoutId) {
                        clearTimeout(_this.delayTimeoutId);
                        _this.delayTimeoutId = null;
                    }
                }
            };
            let pointer = _this.pointer = new PointerDragging(containerEl);
            pointer.emitter.on('pointerdown', _this.onPointerDown);
            pointer.emitter.on('pointermove', _this.onPointerMove);
            pointer.emitter.on('pointerup', _this.onPointerUp);
            if (selector) {
                pointer.selector = selector;
            }
            _this.mirror = new ElementMirror();
            _this.autoScroller = new AutoScroller();
            return _this;
        }
        FeaturefulElementDragging.prototype.destroy = function () {
            this.pointer.destroy();
            // HACK: simulate a pointer-up to end the current drag
            // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)
            this.onPointerUp({});
        };
        FeaturefulElementDragging.prototype.startDelay = function (ev) {
            let _this = this;
            if (typeof this.delay === 'number') {
                this.delayTimeoutId = setTimeout(function () {
                    _this.delayTimeoutId = null;
                    _this.handleDelayEnd(ev);
                }, this.delay); // not assignable to number!
            }
            else {
                this.handleDelayEnd(ev);
            }
        };
        FeaturefulElementDragging.prototype.handleDelayEnd = function (ev) {
            this.isDelayEnded = true;
            this.tryStartDrag(ev);
        };
        FeaturefulElementDragging.prototype.handleDistanceSurpassed = function (ev) {
            this.isDistanceSurpassed = true;
            this.tryStartDrag(ev);
        };
        FeaturefulElementDragging.prototype.tryStartDrag = function (ev) {
            if (this.isDelayEnded && this.isDistanceSurpassed) {
                if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
                    this.isDragging = true;
                    this.mirrorNeedsRevert = false;
                    this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
                    this.emitter.trigger('dragstart', ev);
                    if (this.touchScrollAllowed === false) {
                        this.pointer.cancelTouchScroll();
                    }
                }
            }
        };
        FeaturefulElementDragging.prototype.tryStopDrag = function (ev) {
            // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
            // that come from the document to fire beforehand. much more convenient this way.
            this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
        };
        FeaturefulElementDragging.prototype.stopDrag = function (ev) {
            this.isDragging = false;
            this.emitter.trigger('dragend', ev);
        };
        // fill in the implementations...
        FeaturefulElementDragging.prototype.setIgnoreMove = function (bool) {
            this.pointer.shouldIgnoreMove = bool;
        };
        FeaturefulElementDragging.prototype.setMirrorIsVisible = function (bool) {
            this.mirror.setIsVisible(bool);
        };
        FeaturefulElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
            this.mirrorNeedsRevert = bool;
        };
        FeaturefulElementDragging.prototype.setAutoScrollEnabled = function (bool) {
            this.autoScroller.isEnabled = bool;
        };
        return FeaturefulElementDragging;
    }(ElementDragging));

    /*
    When this class is instantiated, it records the offset of an element (relative to the document topleft),
    and continues to monitor scrolling, updating the cached coordinates if it needs to.
    Does not access the DOM after instantiation, so highly performant.

    Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
    and an determine if a given point is inside the combined clipping rectangle.
    */
    let OffsetTracker = /** @class */ (function () {
        function OffsetTracker(el) {
            this.origRect = computeRect(el);
            // will work fine for divs that have overflow:hidden
            this.scrollCaches = getClippingParents(el).map(function (scrollEl) { return new ElementScrollGeomCache(scrollEl, true); });
        }
        OffsetTracker.prototype.destroy = function () {
            for (let _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
                let scrollCache = _a[_i];
                scrollCache.destroy();
            }
        };
        OffsetTracker.prototype.computeLeft = function () {
            let left = this.origRect.left;
            for (let _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
                let scrollCache = _a[_i];
                left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
            }
            return left;
        };
        OffsetTracker.prototype.computeTop = function () {
            let top = this.origRect.top;
            for (let _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
                let scrollCache = _a[_i];
                top += scrollCache.origScrollTop - scrollCache.getScrollTop();
            }
            return top;
        };
        OffsetTracker.prototype.isWithinClipping = function (pageX, pageY) {
            let point = { left: pageX, top: pageY };
            for (let _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
                let scrollCache = _a[_i];
                if (!isIgnoredClipping(scrollCache.getEventTarget()) &&
                    !pointInsideRect(point, scrollCache.clientRect)) {
                    return false;
                }
            }
            return true;
        };
        return OffsetTracker;
    }());
    // certain clipping containers should never constrain interactions, like <html> and <body>
    // https://github.com/fullcalendar/fullcalendar/issues/3615
    function isIgnoredClipping(node) {
        let tagName = node.tagName;
        return tagName === 'HTML' || tagName === 'BODY';
    }

    /*
    Tracks movement over multiple droppable areas (aka "hits")
    that exist in one or more DateComponents.
    Relies on an existing draggable.

    emits:
    - pointerdown
    - dragstart
    - hitchange - fires initially, even if not over a hit
    - pointerup
    - (hitchange - again, to null, if ended over a hit)
    - dragend
    */
    let HitDragging = /** @class */ (function () {
        function HitDragging(dragging, droppableStore) {
            let _this = this;
            // options that can be set by caller
            this.useSubjectCenter = false;
            this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
            this.initialHit = null;
            this.movingHit = null;
            this.finalHit = null; // won't ever be populated if shouldIgnoreMove
            this.handlePointerDown = function (ev) {
                let dragging = _this.dragging;
                _this.initialHit = null;
                _this.movingHit = null;
                _this.finalHit = null;
                _this.prepareHits();
                _this.processFirstCoord(ev);
                if (_this.initialHit || !_this.requireInitial) {
                    dragging.setIgnoreMove(false);
                    // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
                    _this.emitter.trigger('pointerdown', ev);
                }
                else {
                    dragging.setIgnoreMove(true);
                }
            };
            this.handleDragStart = function (ev) {
                _this.emitter.trigger('dragstart', ev);
                _this.handleMove(ev, true); // force = fire even if initially null
            };
            this.handleDragMove = function (ev) {
                _this.emitter.trigger('dragmove', ev);
                _this.handleMove(ev);
            };
            this.handlePointerUp = function (ev) {
                _this.releaseHits();
                _this.emitter.trigger('pointerup', ev);
            };
            this.handleDragEnd = function (ev) {
                if (_this.movingHit) {
                    _this.emitter.trigger('hitupdate', null, true, ev);
                }
                _this.finalHit = _this.movingHit;
                _this.movingHit = null;
                _this.emitter.trigger('dragend', ev);
            };
            this.droppableStore = droppableStore;
            dragging.emitter.on('pointerdown', this.handlePointerDown);
            dragging.emitter.on('dragstart', this.handleDragStart);
            dragging.emitter.on('dragmove', this.handleDragMove);
            dragging.emitter.on('pointerup', this.handlePointerUp);
            dragging.emitter.on('dragend', this.handleDragEnd);
            this.dragging = dragging;
            this.emitter = new Emitter();
        }
        // sets initialHit
        // sets coordAdjust
        HitDragging.prototype.processFirstCoord = function (ev) {
            let origPoint = { left: ev.pageX, top: ev.pageY };
            let adjustedPoint = origPoint;
            let subjectEl = ev.subjectEl;
            let subjectRect;
            if (subjectEl instanceof HTMLElement) { // i.e. not a Document/ShadowRoot
                subjectRect = computeRect(subjectEl);
                adjustedPoint = constrainPoint(adjustedPoint, subjectRect);
            }
            let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
            if (initialHit) {
                if (this.useSubjectCenter && subjectRect) {
                    let slicedSubjectRect = intersectRects(subjectRect, initialHit.rect);
                    if (slicedSubjectRect) {
                        adjustedPoint = getRectCenter(slicedSubjectRect);
                    }
                }
                this.coordAdjust = diffPoints(adjustedPoint, origPoint);
            }
            else {
                this.coordAdjust = { left: 0, top: 0 };
            }
        };
        HitDragging.prototype.handleMove = function (ev, forceHandle) {
            let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
            if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
                this.movingHit = hit;
                this.emitter.trigger('hitupdate', hit, false, ev);
            }
        };
        HitDragging.prototype.prepareHits = function () {
            this.offsetTrackers = mapHash(this.droppableStore, function (interactionSettings) {
                interactionSettings.component.prepareHits();
                return new OffsetTracker(interactionSettings.el);
            });
        };
        HitDragging.prototype.releaseHits = function () {
            let offsetTrackers = this.offsetTrackers;
            for (let id in offsetTrackers) {
                offsetTrackers[id].destroy();
            }
            this.offsetTrackers = {};
        };
        HitDragging.prototype.queryHitForOffset = function (offsetLeft, offsetTop) {
            let _a = this, droppableStore = _a.droppableStore, offsetTrackers = _a.offsetTrackers;
            let bestHit = null;
            for (let id in droppableStore) {
                let component = droppableStore[id].component;
                let offsetTracker = offsetTrackers[id];
                if (offsetTracker && // wasn't destroyed mid-drag
                    offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
                    let originLeft = offsetTracker.computeLeft();
                    let originTop = offsetTracker.computeTop();
                    let positionLeft = offsetLeft - originLeft;
                    let positionTop = offsetTop - originTop;
                    let origRect = offsetTracker.origRect;
                    let width = origRect.right - origRect.left;
                    let height = origRect.bottom - origRect.top;
                    if (
                    // must be within the element's bounds
                    positionLeft >= 0 && positionLeft < width &&
                        positionTop >= 0 && positionTop < height) {
                        let hit = component.queryHit(positionLeft, positionTop, width, height);
                        if (hit && (
                        // make sure the hit is within activeRange, meaning it's not a dead cell
                        rangeContainsRange(hit.dateProfile.activeRange, hit.dateSpan.range)) &&
                            (!bestHit || hit.layer > bestHit.layer)) {
                            hit.componentId = id;
                            hit.context = component.context;
                            // TODO: better way to re-orient rectangle
                            hit.rect.left += originLeft;
                            hit.rect.right += originLeft;
                            hit.rect.top += originTop;
                            hit.rect.bottom += originTop;
                            bestHit = hit;
                        }
                    }
                }
            }
            return bestHit;
        };
        return HitDragging;
    }());
    function isHitsEqual(hit0, hit1) {
        if (!hit0 && !hit1) {
            return true;
        }
        if (Boolean(hit0) !== Boolean(hit1)) {
            return false;
        }
        return isDateSpansEqual(hit0.dateSpan, hit1.dateSpan);
    }

    function buildDatePointApiWithContext(dateSpan, context) {
        let props = {};
        for (let _i = 0, _a = context.pluginHooks.datePointTransforms; _i < _a.length; _i++) {
            let transform = _a[_i];
            __assign(props, transform(dateSpan, context));
        }
        __assign(props, buildDatePointApi(dateSpan, context.dateEnv));
        return props;
    }
    function buildDatePointApi(span, dateEnv) {
        return {
            date: dateEnv.toDate(span.range.start),
            dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
            allDay: span.allDay,
        };
    }

    /*
    Monitors when the user clicks on a specific date/time of a component.
    A pointerdown+pointerup on the same "hit" constitutes a click.
    */
    let DateClicking = /** @class */ (function (_super) {
        __extends(DateClicking, _super);
        function DateClicking(settings) {
            let _this = _super.call(this, settings) || this;
            _this.handlePointerDown = function (pev) {
                let dragging = _this.dragging;
                let downEl = pev.origEvent.target;
                // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
                dragging.setIgnoreMove(!_this.component.isValidDateDownEl(downEl));
            };
            // won't even fire if moving was ignored
            _this.handleDragEnd = function (ev) {
                let component = _this.component;
                let pointer = _this.dragging.pointer;
                if (!pointer.wasTouchScroll) {
                    let _a = _this.hitDragging, initialHit = _a.initialHit, finalHit = _a.finalHit;
                    if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
                        let context = component.context;
                        let arg = __assign(__assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), { dayEl: initialHit.dayEl, jsEvent: ev.origEvent, view: context.viewApi || context.calendarApi.view });
                        context.emitter.trigger('dateClick', arg);
                    }
                }
            };
            // we DO want to watch pointer moves because otherwise finalHit won't get populated
            _this.dragging = new FeaturefulElementDragging(settings.el);
            _this.dragging.autoScroller.isEnabled = false;
            let hitDragging = _this.hitDragging = new HitDragging(_this.dragging, interactionSettingsToStore(settings));
            hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
            hitDragging.emitter.on('dragend', _this.handleDragEnd);
            return _this;
        }
        DateClicking.prototype.destroy = function () {
            this.dragging.destroy();
        };
        return DateClicking;
    }(Interaction));

    /*
    Tracks when the user selects a portion of time of a component,
    constituted by a drag over date cells, with a possible delay at the beginning of the drag.
    */
    let DateSelecting = /** @class */ (function (_super) {
        __extends(DateSelecting, _super);
        function DateSelecting(settings) {
            let _this = _super.call(this, settings) || this;
            _this.dragSelection = null;
            _this.handlePointerDown = function (ev) {
                let _a = _this, component = _a.component, dragging = _a.dragging;
                let options = component.context.options;
                let canSelect = options.selectable &&
                    component.isValidDateDownEl(ev.origEvent.target);
                // don't bother to watch expensive moves if component won't do selection
                dragging.setIgnoreMove(!canSelect);
                // if touch, require user to hold down
                dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
            };
            _this.handleDragStart = function (ev) {
                _this.component.context.calendarApi.unselect(ev); // unselect previous selections
            };
            _this.handleHitUpdate = function (hit, isFinal) {
                let context = _this.component.context;
                let dragSelection = null;
                let isInvalid = false;
                if (hit) {
                    let initialHit = _this.hitDragging.initialHit;
                    let disallowed = hit.componentId === initialHit.componentId
                        && _this.isHitComboAllowed
                        && !_this.isHitComboAllowed(initialHit, hit);
                    if (!disallowed) {
                        dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
                    }
                    if (!dragSelection || !isDateSelectionValid(dragSelection, hit.dateProfile, context)) {
                        isInvalid = true;
                        dragSelection = null;
                    }
                }
                if (dragSelection) {
                    context.dispatch({ type: 'SELECT_DATES', selection: dragSelection });
                }
                else if (!isFinal) { // only unselect if moved away while dragging
                    context.dispatch({ type: 'UNSELECT_DATES' });
                }
                if (!isInvalid) {
                    enableCursor();
                }
                else {
                    disableCursor();
                }
                if (!isFinal) {
                    _this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
                }
            };
            _this.handlePointerUp = function (pev) {
                if (_this.dragSelection) {
                    // selection is already rendered, so just need to report selection
                    triggerDateSelect(_this.dragSelection, pev, _this.component.context);
                    _this.dragSelection = null;
                }
            };
            let component = settings.component;
            let options = component.context.options;
            let dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
            dragging.touchScrollAllowed = false;
            dragging.minDistance = options.selectMinDistance || 0;
            dragging.autoScroller.isEnabled = options.dragScroll;
            let hitDragging = _this.hitDragging = new HitDragging(_this.dragging, interactionSettingsToStore(settings));
            hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
            hitDragging.emitter.on('dragstart', _this.handleDragStart);
            hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
            hitDragging.emitter.on('pointerup', _this.handlePointerUp);
            return _this;
        }
        DateSelecting.prototype.destroy = function () {
            this.dragging.destroy();
        };
        return DateSelecting;
    }(Interaction));
    function getComponentTouchDelay$1(component) {
        let options = component.context.options;
        let delay = options.selectLongPressDelay;
        if (delay == null) {
            delay = options.longPressDelay;
        }
        return delay;
    }
    function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
        let dateSpan0 = hit0.dateSpan;
        let dateSpan1 = hit1.dateSpan;
        let ms = [
            dateSpan0.range.start,
            dateSpan0.range.end,
            dateSpan1.range.start,
            dateSpan1.range.end,
        ];
        ms.sort(compareNumbers);
        let props = {};
        for (let _i = 0, dateSelectionTransformers_1 = dateSelectionTransformers; _i < dateSelectionTransformers_1.length; _i++) {
            let transformer = dateSelectionTransformers_1[_i];
            let res = transformer(hit0, hit1);
            if (res === false) {
                return null;
            }
            if (res) {
                __assign(props, res);
            }
        }
        props.range = { start: ms[0], end: ms[3] };
        props.allDay = dateSpan0.allDay;
        return props;
    }

    let EventDragging = /** @class */ (function (_super) {
        __extends(EventDragging, _super);
        function EventDragging(settings) {
            let _this = _super.call(this, settings) || this;
            // internal state
            _this.subjectEl = null;
            _this.subjectSeg = null; // the seg being selected/dragged
            _this.isDragging = false;
            _this.eventRange = null;
            _this.relevantEvents = null; // the events being dragged
            _this.receivingContext = null;
            _this.validMutation = null;
            _this.mutatedRelevantEvents = null;
            _this.handlePointerDown = function (ev) {
                let origTarget = ev.origEvent.target;
                let _a = _this, component = _a.component, dragging = _a.dragging;
                let mirror = dragging.mirror;
                let options = component.context.options;
                let initialContext = component.context;
                _this.subjectEl = ev.subjectEl;
                let subjectSeg = _this.subjectSeg = getElSeg(ev.subjectEl);
                let eventRange = _this.eventRange = subjectSeg.eventRange;
                let eventInstanceId = eventRange.instance.instanceId;
                _this.relevantEvents = getRelevantEvents(initialContext.getCurrentData().eventStore, eventInstanceId);
                dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
                dragging.delay =
                    // only do a touch delay if touch and this event hasn't been selected yet
                    (ev.isTouch && eventInstanceId !== component.props.eventSelection) ?
                        getComponentTouchDelay(component) :
                        null;
                if (options.fixedMirrorParent) {
                    mirror.parentNode = options.fixedMirrorParent;
                }
                else {
                    mirror.parentNode = elementClosest(origTarget, '.fc');
                }
                mirror.revertDuration = options.dragRevertDuration;
                let isValid = component.isValidSegDownEl(origTarget) &&
                    !elementClosest(origTarget, '.fc-event-resizer'); // NOT on a resizer
                dragging.setIgnoreMove(!isValid);
                // disable dragging for elements that are resizable (ie, selectable)
                // but are not draggable
                _this.isDragging = isValid &&
                    ev.subjectEl.classList.contains('fc-event-draggable');
            };
            _this.handleDragStart = function (ev) {
                let initialContext = _this.component.context;
                let eventRange = _this.eventRange;
                let eventInstanceId = eventRange.instance.instanceId;
                if (ev.isTouch) {
                    // need to select a different event?
                    if (eventInstanceId !== _this.component.props.eventSelection) {
                        initialContext.dispatch({ type: 'SELECT_EVENT', eventInstanceId: eventInstanceId });
                    }
                }
                else {
                    // if now using mouse, but was previous touch interaction, clear selected event
                    initialContext.dispatch({ type: 'UNSELECT_EVENT' });
                }
                if (_this.isDragging) {
                    initialContext.calendarApi.unselect(ev); // unselect *date* selection
                    initialContext.emitter.trigger('eventDragStart', {
                        el: _this.subjectEl,
                        event: new EventApi(initialContext, eventRange.def, eventRange.instance),
                        jsEvent: ev.origEvent,
                        view: initialContext.viewApi,
                    });
                }
            };
            _this.handleHitUpdate = function (hit, isFinal) {
                if (!_this.isDragging) {
                    return;
                }
                let relevantEvents = _this.relevantEvents;
                let initialHit = _this.hitDragging.initialHit;
                let initialContext = _this.component.context;
                // states based on new hit
                let receivingContext = null;
                let mutation = null;
                let mutatedRelevantEvents = null;
                let isInvalid = false;
                let interaction = {
                    affectedEvents: relevantEvents,
                    mutatedEvents: createEmptyEventStore(),
                    isEvent: true,
                };
                if (hit) {
                    receivingContext = hit.context;
                    let receivingOptions = receivingContext.options;
                    if (initialContext === receivingContext ||
                        (receivingOptions.editable && receivingOptions.droppable)) {
                        mutation = computeEventMutation(initialHit, hit, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
                        if (mutation) {
                            mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
                            interaction.mutatedEvents = mutatedRelevantEvents;
                            if (!isInteractionValid(interaction, hit.dateProfile, receivingContext)) {
                                isInvalid = true;
                                mutation = null;
                                mutatedRelevantEvents = null;
                                interaction.mutatedEvents = createEmptyEventStore();
                            }
                        }
                    }
                    else {
                        receivingContext = null;
                    }
                }
                _this.displayDrag(receivingContext, interaction);
                if (!isInvalid) {
                    enableCursor();
                }
                else {
                    disableCursor();
                }
                if (!isFinal) {
                    if (initialContext === receivingContext && // TODO: write test for this
                        isHitsEqual(initialHit, hit)) {
                        mutation = null;
                    }
                    _this.dragging.setMirrorNeedsRevert(!mutation);
                    // render the mirror if no already-rendered mirror
                    // TODO: wish we could somehow wait for dispatch to guarantee render
                    _this.dragging.setMirrorIsVisible(!hit || !getElRoot(_this.subjectEl).querySelector('.fc-event-mirror'));
                    // assign states based on new hit
                    _this.receivingContext = receivingContext;
                    _this.validMutation = mutation;
                    _this.mutatedRelevantEvents = mutatedRelevantEvents;
                }
            };
            _this.handlePointerUp = function () {
                if (!_this.isDragging) {
                    _this.cleanup(); // because handleDragEnd won't fire
                }
            };
            _this.handleDragEnd = function (ev) {
                if (_this.isDragging) {
                    let initialContext_1 = _this.component.context;
                    let initialView = initialContext_1.viewApi;
                    let _a = _this, receivingContext_1 = _a.receivingContext, validMutation = _a.validMutation;
                    let eventDef = _this.eventRange.def;
                    let eventInstance = _this.eventRange.instance;
                    let eventApi = new EventApi(initialContext_1, eventDef, eventInstance);
                    let relevantEvents_1 = _this.relevantEvents;
                    let mutatedRelevantEvents_1 = _this.mutatedRelevantEvents;
                    let finalHit = _this.hitDragging.finalHit;
                    _this.clearDrag(); // must happen after revert animation
                    initialContext_1.emitter.trigger('eventDragStop', {
                        el: _this.subjectEl,
                        event: eventApi,
                        jsEvent: ev.origEvent,
                        view: initialView,
                    });
                    if (validMutation) {
                        // dropped within same calendar
                        if (receivingContext_1 === initialContext_1) {
                            let updatedEventApi = new EventApi(initialContext_1, mutatedRelevantEvents_1.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents_1.instances[eventInstance.instanceId] : null);
                            initialContext_1.dispatch({
                                type: 'MERGE_EVENTS',
                                eventStore: mutatedRelevantEvents_1,
                            });
                            let eventChangeArg = {
                                oldEvent: eventApi,
                                event: updatedEventApi,
                                relatedEvents: buildEventApis(mutatedRelevantEvents_1, initialContext_1, eventInstance),
                                revert: function () {
                                    initialContext_1.dispatch({
                                        type: 'MERGE_EVENTS',
                                        eventStore: relevantEvents_1, // the pre-change data
                                    });
                                },
                            };
                            let transformed = {};
                            for (let _i = 0, _b = initialContext_1.getCurrentData().pluginHooks.eventDropTransformers; _i < _b.length; _i++) {
                                let transformer = _b[_i];
                                __assign(transformed, transformer(validMutation, initialContext_1));
                            }
                            initialContext_1.emitter.trigger('eventDrop', __assign(__assign(__assign({}, eventChangeArg), transformed), { el: ev.subjectEl, delta: validMutation.datesDelta, jsEvent: ev.origEvent, view: initialView }));
                            initialContext_1.emitter.trigger('eventChange', eventChangeArg);
                            // dropped in different calendar
                        }
                        else if (receivingContext_1) {
                            let eventRemoveArg = {
                                event: eventApi,
                                relatedEvents: buildEventApis(relevantEvents_1, initialContext_1, eventInstance),
                                revert: function () {
                                    initialContext_1.dispatch({
                                        type: 'MERGE_EVENTS',
                                        eventStore: relevantEvents_1,
                                    });
                                },
                            };
                            initialContext_1.emitter.trigger('eventLeave', __assign(__assign({}, eventRemoveArg), { draggedEl: ev.subjectEl, view: initialView }));
                            initialContext_1.dispatch({
                                type: 'REMOVE_EVENTS',
                                eventStore: relevantEvents_1,
                            });
                            initialContext_1.emitter.trigger('eventRemove', eventRemoveArg);
                            let addedEventDef = mutatedRelevantEvents_1.defs[eventDef.defId];
                            let addedEventInstance = mutatedRelevantEvents_1.instances[eventInstance.instanceId];
                            let addedEventApi = new EventApi(receivingContext_1, addedEventDef, addedEventInstance);
                            receivingContext_1.dispatch({
                                type: 'MERGE_EVENTS',
                                eventStore: mutatedRelevantEvents_1,
                            });
                            let eventAddArg = {
                                event: addedEventApi,
                                relatedEvents: buildEventApis(mutatedRelevantEvents_1, receivingContext_1, addedEventInstance),
                                revert: function () {
                                    receivingContext_1.dispatch({
                                        type: 'REMOVE_EVENTS',
                                        eventStore: mutatedRelevantEvents_1,
                                    });
                                },
                            };
                            receivingContext_1.emitter.trigger('eventAdd', eventAddArg);
                            if (ev.isTouch) {
                                receivingContext_1.dispatch({
                                    type: 'SELECT_EVENT',
                                    eventInstanceId: eventInstance.instanceId,
                                });
                            }
                            receivingContext_1.emitter.trigger('drop', __assign(__assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext_1)), { draggedEl: ev.subjectEl, jsEvent: ev.origEvent, view: finalHit.context.viewApi }));
                            receivingContext_1.emitter.trigger('eventReceive', __assign(__assign({}, eventAddArg), { draggedEl: ev.subjectEl, view: finalHit.context.viewApi }));
                        }
                    }
                    else {
                        initialContext_1.emitter.trigger('_noEventDrop');
                    }
                }
                _this.cleanup();
            };
            let component = _this.component;
            let options = component.context.options;
            let dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
            dragging.pointer.selector = EventDragging.SELECTOR;
            dragging.touchScrollAllowed = false;
            dragging.autoScroller.isEnabled = options.dragScroll;
            let hitDragging = _this.hitDragging = new HitDragging(_this.dragging, interactionSettingsStore);
            hitDragging.useSubjectCenter = settings.useEventCenter;
            hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
            hitDragging.emitter.on('dragstart', _this.handleDragStart);
            hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
            hitDragging.emitter.on('pointerup', _this.handlePointerUp);
            hitDragging.emitter.on('dragend', _this.handleDragEnd);
            return _this;
        }
        EventDragging.prototype.destroy = function () {
            this.dragging.destroy();
        };
        // render a drag state on the next receivingCalendar
        EventDragging.prototype.displayDrag = function (nextContext, state) {
            let initialContext = this.component.context;
            let prevContext = this.receivingContext;
            // does the previous calendar need to be cleared?
            if (prevContext && prevContext !== nextContext) {
                // does the initial calendar need to be cleared?
                // if so, don't clear all the way. we still need to to hide the affectedEvents
                if (prevContext === initialContext) {
                    prevContext.dispatch({
                        type: 'SET_EVENT_DRAG',
                        state: {
                            affectedEvents: state.affectedEvents,
                            mutatedEvents: createEmptyEventStore(),
                            isEvent: true,
                        },
                    });
                    // completely clear the old calendar if it wasn't the initial
                }
                else {
                    prevContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
                }
            }
            if (nextContext) {
                nextContext.dispatch({ type: 'SET_EVENT_DRAG', state: state });
            }
        };
        EventDragging.prototype.clearDrag = function () {
            let initialCalendar = this.component.context;
            let receivingContext = this.receivingContext;
            if (receivingContext) {
                receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
            // the initial calendar might have an dummy drag state from displayDrag
            if (initialCalendar !== receivingContext) {
                initialCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
        };
        EventDragging.prototype.cleanup = function () {
            this.subjectSeg = null;
            this.isDragging = false;
            this.eventRange = null;
            this.relevantEvents = null;
            this.receivingContext = null;
            this.validMutation = null;
            this.mutatedRelevantEvents = null;
        };
        // TODO: test this in IE11
        // QUESTION: why do we need it on the resizable???
        EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
        return EventDragging;
    }(Interaction));
    function computeEventMutation(hit0, hit1, massagers) {
        let dateSpan0 = hit0.dateSpan;
        let dateSpan1 = hit1.dateSpan;
        let date0 = dateSpan0.range.start;
        let date1 = dateSpan1.range.start;
        let standardProps = {};
        if (dateSpan0.allDay !== dateSpan1.allDay) {
            standardProps.allDay = dateSpan1.allDay;
            standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
            if (dateSpan1.allDay) {
                // means date1 is already start-of-day,
                // but date0 needs to be converted
                date0 = startOfDay(date0);
            }
        }
        let delta = diffDates(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ?
            hit0.largeUnit :
            null);
        if (delta.milliseconds) { // has hours/minutes/seconds
            standardProps.allDay = false;
        }
        let mutation = {
            datesDelta: delta,
            standardProps: standardProps,
        };
        for (let _i = 0, massagers_1 = massagers; _i < massagers_1.length; _i++) {
            let massager = massagers_1[_i];
            massager(mutation, hit0, hit1);
        }
        return mutation;
    }
    function getComponentTouchDelay(component) {
        let options = component.context.options;
        let delay = options.eventLongPressDelay;
        if (delay == null) {
            delay = options.longPressDelay;
        }
        return delay;
    }

    let EventResizing = /** @class */ (function (_super) {
        __extends(EventResizing, _super);
        function EventResizing(settings) {
            let _this = _super.call(this, settings) || this;
            // internal state
            _this.draggingSegEl = null;
            _this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?
            _this.eventRange = null;
            _this.relevantEvents = null;
            _this.validMutation = null;
            _this.mutatedRelevantEvents = null;
            _this.handlePointerDown = function (ev) {
                let component = _this.component;
                let segEl = _this.querySegEl(ev);
                let seg = getElSeg(segEl);
                let eventRange = _this.eventRange = seg.eventRange;
                _this.dragging.minDistance = component.context.options.eventDragMinDistance;
                // if touch, need to be working with a selected event
                _this.dragging.setIgnoreMove(!_this.component.isValidSegDownEl(ev.origEvent.target) ||
                    (ev.isTouch && _this.component.props.eventSelection !== eventRange.instance.instanceId));
            };
            _this.handleDragStart = function (ev) {
                let context = _this.component.context;
                let eventRange = _this.eventRange;
                _this.relevantEvents = getRelevantEvents(context.getCurrentData().eventStore, _this.eventRange.instance.instanceId);
                let segEl = _this.querySegEl(ev);
                _this.draggingSegEl = segEl;
                _this.draggingSeg = getElSeg(segEl);
                context.calendarApi.unselect();
                context.emitter.trigger('eventResizeStart', {
                    el: segEl,
                    event: new EventApi(context, eventRange.def, eventRange.instance),
                    jsEvent: ev.origEvent,
                    view: context.viewApi,
                });
            };
            _this.handleHitUpdate = function (hit, isFinal, ev) {
                let context = _this.component.context;
                let relevantEvents = _this.relevantEvents;
                let initialHit = _this.hitDragging.initialHit;
                let eventInstance = _this.eventRange.instance;
                let mutation = null;
                let mutatedRelevantEvents = null;
                let isInvalid = false;
                let interaction = {
                    affectedEvents: relevantEvents,
                    mutatedEvents: createEmptyEventStore(),
                    isEvent: true,
                };
                if (hit) {
                    let disallowed = hit.componentId === initialHit.componentId
                        && _this.isHitComboAllowed
                        && !_this.isHitComboAllowed(initialHit, hit);
                    if (!disallowed) {
                        mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
                    }
                }
                if (mutation) {
                    mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
                    interaction.mutatedEvents = mutatedRelevantEvents;
                    if (!isInteractionValid(interaction, hit.dateProfile, context)) {
                        isInvalid = true;
                        mutation = null;
                        mutatedRelevantEvents = null;
                        interaction.mutatedEvents = null;
                    }
                }
                if (mutatedRelevantEvents) {
                    context.dispatch({
                        type: 'SET_EVENT_RESIZE',
                        state: interaction,
                    });
                }
                else {
                    context.dispatch({ type: 'UNSET_EVENT_RESIZE' });
                }
                if (!isInvalid) {
                    enableCursor();
                }
                else {
                    disableCursor();
                }
                if (!isFinal) {
                    if (mutation && isHitsEqual(initialHit, hit)) {
                        mutation = null;
                    }
                    _this.validMutation = mutation;
                    _this.mutatedRelevantEvents = mutatedRelevantEvents;
                }
            };
            _this.handleDragEnd = function (ev) {
                let context = _this.component.context;
                let eventDef = _this.eventRange.def;
                let eventInstance = _this.eventRange.instance;
                let eventApi = new EventApi(context, eventDef, eventInstance);
                let relevantEvents = _this.relevantEvents;
                let mutatedRelevantEvents = _this.mutatedRelevantEvents;
                context.emitter.trigger('eventResizeStop', {
                    el: _this.draggingSegEl,
                    event: eventApi,
                    jsEvent: ev.origEvent,
                    view: context.viewApi,
                });
                if (_this.validMutation) {
                    let updatedEventApi = new EventApi(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
                    context.dispatch({
                        type: 'MERGE_EVENTS',
                        eventStore: mutatedRelevantEvents,
                    });
                    let eventChangeArg = {
                        oldEvent: eventApi,
                        event: updatedEventApi,
                        relatedEvents: buildEventApis(mutatedRelevantEvents, context, eventInstance),
                        revert: function () {
                            context.dispatch({
                                type: 'MERGE_EVENTS',
                                eventStore: relevantEvents, // the pre-change events
                            });
                        },
                    };
                    context.emitter.trigger('eventResize', __assign(__assign({}, eventChangeArg), { el: _this.draggingSegEl, startDelta: _this.validMutation.startDelta || createDuration(0), endDelta: _this.validMutation.endDelta || createDuration(0), jsEvent: ev.origEvent, view: context.viewApi }));
                    context.emitter.trigger('eventChange', eventChangeArg);
                }
                else {
                    context.emitter.trigger('_noEventResize');
                }
                // reset all internal state
                _this.draggingSeg = null;
                _this.relevantEvents = null;
                _this.validMutation = null;
                // okay to keep eventInstance around. useful to set it in handlePointerDown
            };
            let component = settings.component;
            let dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
            dragging.pointer.selector = '.fc-event-resizer';
            dragging.touchScrollAllowed = false;
            dragging.autoScroller.isEnabled = component.context.options.dragScroll;
            let hitDragging = _this.hitDragging = new HitDragging(_this.dragging, interactionSettingsToStore(settings));
            hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
            hitDragging.emitter.on('dragstart', _this.handleDragStart);
            hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
            hitDragging.emitter.on('dragend', _this.handleDragEnd);
            return _this;
        }
        EventResizing.prototype.destroy = function () {
            this.dragging.destroy();
        };
        EventResizing.prototype.querySegEl = function (ev) {
            return elementClosest(ev.subjectEl, '.fc-event');
        };
        return EventResizing;
    }(Interaction));
    function computeMutation(hit0, hit1, isFromStart, instanceRange) {
        let dateEnv = hit0.context.dateEnv;
        let date0 = hit0.dateSpan.range.start;
        let date1 = hit1.dateSpan.range.start;
        let delta = diffDates(date0, date1, dateEnv, hit0.largeUnit);
        if (isFromStart) {
            if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
                return { startDelta: delta };
            }
        }
        else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
            return { endDelta: delta };
        }
        return null;
    }

    let UnselectAuto = /** @class */ (function () {
        function UnselectAuto(context) {
            let _this = this;
            this.context = context;
            this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
            this.matchesCancel = false;
            this.matchesEvent = false;
            this.onSelect = function (selectInfo) {
                if (selectInfo.jsEvent) {
                    _this.isRecentPointerDateSelect = true;
                }
            };
            this.onDocumentPointerDown = function (pev) {
                let unselectCancel = _this.context.options.unselectCancel;
                let downEl = getEventTargetViaRoot(pev.origEvent);
                _this.matchesCancel = !!elementClosest(downEl, unselectCancel);
                _this.matchesEvent = !!elementClosest(downEl, EventDragging.SELECTOR); // interaction started on an event?
            };
            this.onDocumentPointerUp = function (pev) {
                let context = _this.context;
                let documentPointer = _this.documentPointer;
                let calendarState = context.getCurrentData();
                // touch-scrolling should never unfocus any type of selection
                if (!documentPointer.wasTouchScroll) {
                    if (calendarState.dateSelection && // an existing date selection?
                        !_this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
                    ) {
                        let unselectAuto = context.options.unselectAuto;
                        if (unselectAuto && (!unselectAuto || !_this.matchesCancel)) {
                            context.calendarApi.unselect(pev);
                        }
                    }
                    if (calendarState.eventSelection && // an existing event selected?
                        !_this.matchesEvent // interaction DIDN'T start on an event
                    ) {
                        context.dispatch({ type: 'UNSELECT_EVENT' });
                    }
                }
                _this.isRecentPointerDateSelect = false;
            };
            let documentPointer = this.documentPointer = new PointerDragging(document);
            documentPointer.shouldIgnoreMove = true;
            documentPointer.shouldWatchScroll = false;
            documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
            documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
            /*
            TODO: better way to know about whether there was a selection with the pointer
            */
            context.emitter.on('select', this.onSelect);
        }
        UnselectAuto.prototype.destroy = function () {
            this.context.emitter.off('select', this.onSelect);
            this.documentPointer.destroy();
        };
        return UnselectAuto;
    }());

    let OPTION_REFINERS$3 = {
        fixedMirrorParent: identity,
    };
    let LISTENER_REFINERS = {
        dateClick: identity,
        eventDragStart: identity,
        eventDragStop: identity,
        eventDrop: identity,
        eventResizeStart: identity,
        eventResizeStop: identity,
        eventResize: identity,
        drop: identity,
        eventReceive: identity,
        eventLeave: identity,
    };

    /*
    Given an already instantiated draggable object for one-or-more elements,
    Interprets any dragging as an attempt to drag an events that lives outside
    of a calendar onto a calendar.
    */
    let ExternalElementDragging = /** @class */ (function () {
        function ExternalElementDragging(dragging, suppliedDragMeta) {
            let _this = this;
            this.receivingContext = null;
            this.droppableEvent = null; // will exist for all drags, even if create:false
            this.suppliedDragMeta = null;
            this.dragMeta = null;
            this.handleDragStart = function (ev) {
                _this.dragMeta = _this.buildDragMeta(ev.subjectEl);
            };
            this.handleHitUpdate = function (hit, isFinal, ev) {
                let dragging = _this.hitDragging.dragging;
                let receivingContext = null;
                let droppableEvent = null;
                let isInvalid = false;
                let interaction = {
                    affectedEvents: createEmptyEventStore(),
                    mutatedEvents: createEmptyEventStore(),
                    isEvent: _this.dragMeta.create,
                };
                if (hit) {
                    receivingContext = hit.context;
                    if (_this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
                        droppableEvent = computeEventForDateSpan(hit.dateSpan, _this.dragMeta, receivingContext);
                        interaction.mutatedEvents = eventTupleToStore(droppableEvent);
                        isInvalid = !isInteractionValid(interaction, hit.dateProfile, receivingContext);
                        if (isInvalid) {
                            interaction.mutatedEvents = createEmptyEventStore();
                            droppableEvent = null;
                        }
                    }
                }
                _this.displayDrag(receivingContext, interaction);
                // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
                // TODO: wish we could somehow wait for dispatch to guarantee render
                dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));
                if (!isInvalid) {
                    enableCursor();
                }
                else {
                    disableCursor();
                }
                if (!isFinal) {
                    dragging.setMirrorNeedsRevert(!droppableEvent);
                    _this.receivingContext = receivingContext;
                    _this.droppableEvent = droppableEvent;
                }
            };
            this.handleDragEnd = function (pev) {
                let _a = _this, receivingContext = _a.receivingContext, droppableEvent = _a.droppableEvent;
                _this.clearDrag();
                if (receivingContext && droppableEvent) {
                    let finalHit = _this.hitDragging.finalHit;
                    let finalView = finalHit.context.viewApi;
                    let dragMeta = _this.dragMeta;
                    receivingContext.emitter.trigger('drop', __assign(__assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: pev.subjectEl, jsEvent: pev.origEvent, view: finalView }));
                    if (dragMeta.create) {
                        let addingEvents_1 = eventTupleToStore(droppableEvent);
                        receivingContext.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: addingEvents_1,
                        });
                        if (pev.isTouch) {
                            receivingContext.dispatch({
                                type: 'SELECT_EVENT',
                                eventInstanceId: droppableEvent.instance.instanceId,
                            });
                        }
                        // signal that an external event landed
                        receivingContext.emitter.trigger('eventReceive', {
                            event: new EventApi(receivingContext, droppableEvent.def, droppableEvent.instance),
                            relatedEvents: [],
                            revert: function () {
                                receivingContext.dispatch({
                                    type: 'REMOVE_EVENTS',
                                    eventStore: addingEvents_1,
                                });
                            },
                            draggedEl: pev.subjectEl,
                            view: finalView,
                        });
                    }
                }
                _this.receivingContext = null;
                _this.droppableEvent = null;
            };
            let hitDragging = this.hitDragging = new HitDragging(dragging, interactionSettingsStore);
            hitDragging.requireInitial = false; // will start outside of a component
            hitDragging.emitter.on('dragstart', this.handleDragStart);
            hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
            hitDragging.emitter.on('dragend', this.handleDragEnd);
            this.suppliedDragMeta = suppliedDragMeta;
        }
        ExternalElementDragging.prototype.buildDragMeta = function (subjectEl) {
            if (typeof this.suppliedDragMeta === 'object') {
                return parseDragMeta(this.suppliedDragMeta);
            }
            if (typeof this.suppliedDragMeta === 'function') {
                return parseDragMeta(this.suppliedDragMeta(subjectEl));
            }
            return getDragMetaFromEl(subjectEl);
        };
        ExternalElementDragging.prototype.displayDrag = function (nextContext, state) {
            let prevContext = this.receivingContext;
            if (prevContext && prevContext !== nextContext) {
                prevContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
            if (nextContext) {
                nextContext.dispatch({ type: 'SET_EVENT_DRAG', state: state });
            }
        };
        ExternalElementDragging.prototype.clearDrag = function () {
            if (this.receivingContext) {
                this.receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
        };
        ExternalElementDragging.prototype.canDropElOnCalendar = function (el, receivingContext) {
            let dropAccept = receivingContext.options.dropAccept;
            if (typeof dropAccept === 'function') {
                return dropAccept.call(receivingContext.calendarApi, el);
            }
            if (typeof dropAccept === 'string' && dropAccept) {
                return Boolean(elementMatches(el, dropAccept));
            }
            return true;
        };
        return ExternalElementDragging;
    }());
    // Utils for computing event store from the DragMeta
    // ----------------------------------------------------------------------------------------------------
    function computeEventForDateSpan(dateSpan, dragMeta, context) {
        let defProps = __assign({}, dragMeta.leftoverProps);
        for (let _i = 0, _a = context.pluginHooks.externalDefTransforms; _i < _a.length; _i++) {
            let transform = _a[_i];
            __assign(defProps, transform(dateSpan, dragMeta));
        }
        let _b = refineEventDef(defProps, context), refined = _b.refined, extra = _b.extra;
        let def = parseEventDef(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration), // hasEnd
        context);
        let start = dateSpan.range.start;
        // only rely on time info if drop zone is all-day,
        // otherwise, we already know the time
        if (dateSpan.allDay && dragMeta.startTime) {
            start = context.dateEnv.add(start, dragMeta.startTime);
        }
        let end = dragMeta.duration ?
            context.dateEnv.add(start, dragMeta.duration) :
            getDefaultEventEnd(dateSpan.allDay, start, context);
        let instance = createEventInstance(def.defId, { start: start, end: end });
        return { def: def, instance: instance };
    }
    // Utils for extracting data from element
    // ----------------------------------------------------------------------------------------------------
    function getDragMetaFromEl(el) {
        let str = getEmbeddedElData(el, 'event');
        let obj = str ?
            JSON.parse(str) :
            { create: false }; // if no embedded data, assume no event creation
        return parseDragMeta(obj);
    }
    config.dataAttrPrefix = '';
    function getEmbeddedElData(el, name) {
        let prefix = config.dataAttrPrefix;
        let prefixedName = (prefix ? prefix + '-' : '') + name;
        return el.getAttribute('data-' + prefixedName) || '';
    }

    /*
    Makes an element (that is *external* to any calendar) draggable.
    Can pass in data that determines how an event will be created when dropped onto a calendar.
    Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
    */
    let ExternalDraggable = /** @class */ (function () {
        function ExternalDraggable(el, settings) {
            let _this = this;
            if (settings === void 0) { settings = {}; }
            this.handlePointerDown = function (ev) {
                let dragging = _this.dragging;
                let _a = _this.settings, minDistance = _a.minDistance, longPressDelay = _a.longPressDelay;
                dragging.minDistance =
                    minDistance != null ?
                        minDistance :
                        (ev.isTouch ? 0 : BASE_OPTION_DEFAULTS.eventDragMinDistance);
                dragging.delay =
                    ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
                        (longPressDelay != null ? longPressDelay : BASE_OPTION_DEFAULTS.longPressDelay) :
                        0;
            };
            this.handleDragStart = function (ev) {
                if (ev.isTouch &&
                    _this.dragging.delay &&
                    ev.subjectEl.classList.contains('fc-event')) {
                    _this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
                }
            };
            this.settings = settings;
            let dragging = this.dragging = new FeaturefulElementDragging(el);
            dragging.touchScrollAllowed = false;
            if (settings.itemSelector != null) {
                dragging.pointer.selector = settings.itemSelector;
            }
            if (settings.appendTo != null) {
                dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
            }
            dragging.emitter.on('pointerdown', this.handlePointerDown);
            dragging.emitter.on('dragstart', this.handleDragStart);
            new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
        }
        ExternalDraggable.prototype.destroy = function () {
            this.dragging.destroy();
        };
        return ExternalDraggable;
    }());

    /*
    Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
    The third-party system is responsible for drawing the visuals effects of the drag.
    This class simply monitors for pointer movements and fires events.
    It also has the ability to hide the moving element (the "mirror") during the drag.
    */
    let InferredElementDragging = /** @class */ (function (_super) {
        __extends(InferredElementDragging, _super);
        function InferredElementDragging(containerEl) {
            let _this = _super.call(this, containerEl) || this;
            _this.shouldIgnoreMove = false;
            _this.mirrorSelector = '';
            _this.currentMirrorEl = null;
            _this.handlePointerDown = function (ev) {
                _this.emitter.trigger('pointerdown', ev);
                if (!_this.shouldIgnoreMove) {
                    // fire dragstart right away. does not support delay or min-distance
                    _this.emitter.trigger('dragstart', ev);
                }
            };
            _this.handlePointerMove = function (ev) {
                if (!_this.shouldIgnoreMove) {
                    _this.emitter.trigger('dragmove', ev);
                }
            };
            _this.handlePointerUp = function (ev) {
                _this.emitter.trigger('pointerup', ev);
                if (!_this.shouldIgnoreMove) {
                    // fire dragend right away. does not support a revert animation
                    _this.emitter.trigger('dragend', ev);
                }
            };
            let pointer = _this.pointer = new PointerDragging(containerEl);
            pointer.emitter.on('pointerdown', _this.handlePointerDown);
            pointer.emitter.on('pointermove', _this.handlePointerMove);
            pointer.emitter.on('pointerup', _this.handlePointerUp);
            return _this;
        }
        InferredElementDragging.prototype.destroy = function () {
            this.pointer.destroy();
        };
        InferredElementDragging.prototype.setIgnoreMove = function (bool) {
            this.shouldIgnoreMove = bool;
        };
        InferredElementDragging.prototype.setMirrorIsVisible = function (bool) {
            if (bool) {
                // restore a previously hidden element.
                // use the reference in case the selector class has already been removed.
                if (this.currentMirrorEl) {
                    this.currentMirrorEl.style.visibility = '';
                    this.currentMirrorEl = null;
                }
            }
            else {
                let mirrorEl = this.mirrorSelector
                    // TODO: somehow query FullCalendars WITHIN shadow-roots
                    ? document.querySelector(this.mirrorSelector)
                    : null;
                if (mirrorEl) {
                    this.currentMirrorEl = mirrorEl;
                    mirrorEl.style.visibility = 'hidden';
                }
            }
        };
        return InferredElementDragging;
    }(ElementDragging));

    /*
    Bridges third-party drag-n-drop systems with FullCalendar.
    Must be instantiated and destroyed by caller.
    */
    let ThirdPartyDraggable = /** @class */ (function () {
        function ThirdPartyDraggable(containerOrSettings, settings) {
            let containerEl = document;
            if (
            // wish we could just test instanceof EventTarget, but doesn't work in IE11
            containerOrSettings === document ||
                containerOrSettings instanceof Element) {
                containerEl = containerOrSettings;
                settings = settings || {};
            }
            else {
                settings = (containerOrSettings || {});
            }
            let dragging = this.dragging = new InferredElementDragging(containerEl);
            if (typeof settings.itemSelector === 'string') {
                dragging.pointer.selector = settings.itemSelector;
            }
            else if (containerEl === document) {
                dragging.pointer.selector = '[data-event]';
            }
            if (typeof settings.mirrorSelector === 'string') {
                dragging.mirrorSelector = settings.mirrorSelector;
            }
            new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
        }
        ThirdPartyDraggable.prototype.destroy = function () {
            this.dragging.destroy();
        };
        return ThirdPartyDraggable;
    }());

    let interactionPlugin = createPlugin({
        componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
        calendarInteractions: [UnselectAuto],
        elementDraggingImpl: FeaturefulElementDragging,
        optionRefiners: OPTION_REFINERS$3,
        listenerRefiners: LISTENER_REFINERS,
    });

    /* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
    ----------------------------------------------------------------------------------------------------------------------*/
    // It is a manager for a Table subcomponent, which does most of the heavy lifting.
    // It is responsible for managing width/height.
    let TableView = /** @class */ (function (_super) {
        __extends(TableView, _super);
        function TableView() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.headerElRef = createRef();
            return _this;
        }
        TableView.prototype.renderSimpleLayout = function (headerRowContent, bodyContent) {
            let _a = this, props = _a.props, context = _a.context;
            let sections = [];
            let stickyHeaderDates = getStickyHeaderDates(context.options);
            if (headerRowContent) {
                sections.push({
                    type: 'header',
                    key: 'header',
                    isSticky: stickyHeaderDates,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    },
                });
            }
            sections.push({
                type: 'body',
                key: 'body',
                liquid: true,
                chunk: { content: bodyContent },
            });
            return (createElement(ViewRoot, { viewSpec: context.viewSpec }, function (rootElRef, classNames) { return (createElement("div", { ref: rootElRef, className: ['fc-daygrid'].concat(classNames).join(' ') },
                createElement(SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [] /* TODO: make optional? */, sections: sections }))); }));
        };
        TableView.prototype.renderHScrollLayout = function (headerRowContent, bodyContent, colCnt, dayMinWidth) {
            let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
            if (!ScrollGrid) {
                throw new Error('No ScrollGrid implementation');
            }
            let _a = this, props = _a.props, context = _a.context;
            let stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
            let stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
            let sections = [];
            if (headerRowContent) {
                sections.push({
                    type: 'header',
                    key: 'header',
                    isSticky: stickyHeaderDates,
                    chunks: [{
                            key: 'main',
                            elRef: this.headerElRef,
                            tableClassName: 'fc-col-header',
                            rowContent: headerRowContent,
                        }],
                });
            }
            sections.push({
                type: 'body',
                key: 'body',
                liquid: true,
                chunks: [{
                        key: 'main',
                        content: bodyContent,
                    }],
            });
            if (stickyFooterScrollbar) {
                sections.push({
                    type: 'footer',
                    key: 'footer',
                    isSticky: true,
                    chunks: [{
                            key: 'main',
                            content: renderScrollShim,
                        }],
                });
            }
            return (createElement(ViewRoot, { viewSpec: context.viewSpec }, function (rootElRef, classNames) { return (createElement("div", { ref: rootElRef, className: ['fc-daygrid'].concat(classNames).join(' ') },
                createElement(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, colGroups: [{ cols: [{ span: colCnt, minWidth: dayMinWidth }] }], sections: sections }))); }));
        };
        return TableView;
    }(DateComponent));

    function splitSegsByRow(segs, rowCnt) {
        let byRow = [];
        for (let i = 0; i < rowCnt; i += 1) {
            byRow[i] = [];
        }
        for (let _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            let seg = segs_1[_i];
            byRow[seg.row].push(seg);
        }
        return byRow;
    }
    function splitSegsByFirstCol(segs, colCnt) {
        let byCol = [];
        for (let i = 0; i < colCnt; i += 1) {
            byCol[i] = [];
        }
        for (let _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            let seg = segs_2[_i];
            byCol[seg.firstCol].push(seg);
        }
        return byCol;
    }
    function splitInteractionByRow(ui, rowCnt) {
        let byRow = [];
        if (!ui) {
            for (let i = 0; i < rowCnt; i += 1) {
                byRow[i] = null;
            }
        }
        else {
            for (let i = 0; i < rowCnt; i += 1) {
                byRow[i] = {
                    affectedInstances: ui.affectedInstances,
                    isEvent: ui.isEvent,
                    segs: [],
                };
            }
            for (let _i = 0, _a = ui.segs; _i < _a.length; _i++) {
                let seg = _a[_i];
                byRow[seg.row].segs.push(seg);
            }
        }
        return byRow;
    }

    let TableCellTop = /** @class */ (function (_super) {
        __extends(TableCellTop, _super);
        function TableCellTop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TableCellTop.prototype.render = function () {
            let props = this.props;
            let navLinkAttrs = buildNavLinkAttrs(this.context, props.date);
            return (createElement(DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, defaultContent: renderTopInner }, function (innerElRef, innerContent) { return ((innerContent || props.forceDayTop) && (createElement("div", { className: "fc-daygrid-day-top", ref: innerElRef },
                createElement("a", __assign({ id: props.dayNumberId, className: "fc-daygrid-day-number" }, navLinkAttrs), innerContent || createElement(Fragment, null, "\u00A0"))))); }));
        };
        return TableCellTop;
    }(BaseComponent));
    function renderTopInner(props) {
        return props.dayNumberText;
    }

    let DEFAULT_TABLE_EVENT_TIME_FORMAT = createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: 'narrow',
    });
    function hasListItemDisplay(seg) {
        let display = seg.eventRange.ui.display;
        return display === 'list-item' || (display === 'auto' &&
            !seg.eventRange.def.allDay &&
            seg.firstCol === seg.lastCol && // can't be multi-day
            seg.isStart && // "
            seg.isEnd // "
        );
    }

    let TableBlockEvent = /** @class */ (function (_super) {
        __extends(TableBlockEvent, _super);
        function TableBlockEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TableBlockEvent.prototype.render = function () {
            let props = this.props;
            return (createElement(StandardEvent, __assign({}, props, { extraClassNames: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.seg.eventRange.def.allDay })));
        };
        return TableBlockEvent;
    }(BaseComponent));

    let TableListItemEvent = /** @class */ (function (_super) {
        __extends(TableListItemEvent, _super);
        function TableListItemEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TableListItemEvent.prototype.render = function () {
            let _a = this, props = _a.props, context = _a.context;
            let timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
            let timeText = buildSegTimeText(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
            return (createElement(EventRoot, { seg: props.seg, timeText: timeText, defaultContent: renderInnerContent$2, isDragging: props.isDragging, isResizing: false, isDateSelecting: false, isSelected: props.isSelected, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function (rootElRef, classNames, innerElRef, innerContent) { return ( // we don't use styles!
            createElement("a", __assign({ className: ['fc-daygrid-event', 'fc-daygrid-dot-event'].concat(classNames).join(' '), ref: rootElRef }, getSegAnchorAttrs(props.seg, context)), innerContent)); }));
        };
        return TableListItemEvent;
    }(BaseComponent));
    function renderInnerContent$2(innerProps) {
        return (createElement(Fragment, null,
            createElement("div", { className: "fc-daygrid-event-dot", style: { borderColor: innerProps.borderColor || innerProps.backgroundColor } }),
            innerProps.timeText && (createElement("div", { className: "fc-event-time" }, innerProps.timeText)),
            createElement("div", { className: "fc-event-title" }, innerProps.event.title || createElement(Fragment, null, "\u00A0"))));
    }

    let TableCellMoreLink = /** @class */ (function (_super) {
        __extends(TableCellMoreLink, _super);
        function TableCellMoreLink() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.compileSegs = memoize(compileSegs);
            return _this;
        }
        TableCellMoreLink.prototype.render = function () {
            let props = this.props;
            let _a = this.compileSegs(props.singlePlacements), allSegs = _a.allSegs, invisibleSegs = _a.invisibleSegs;
            return (createElement(MoreLinkRoot, { dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, moreCnt: props.moreCnt, allSegs: allSegs, hiddenSegs: invisibleSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: function () {
                    let isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) ||
                        (props.eventResize ? props.eventResize.affectedInstances : null) ||
                        {};
                    return (createElement(Fragment, null, allSegs.map(function (seg) {
                        let instanceId = seg.eventRange.instance.instanceId;
                        return (createElement("div", { className: "fc-daygrid-event-harness", key: instanceId, style: {
                                visibility: isForcedInvisible[instanceId] ? 'hidden' : '',
                            } }, hasListItemDisplay(seg) ? (createElement(TableListItemEvent, __assign({ seg: seg, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange)))) : (createElement(TableBlockEvent, __assign({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange))))));
                    })));
                } }, function (rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) { return (createElement("a", __assign({ ref: rootElRef, className: ['fc-daygrid-more-link'].concat(classNames).join(' '), title: title, "aria-expanded": isExpanded, "aria-controls": popoverId }, createAriaClickAttrs(handleClick)), innerContent)); }));
        };
        return TableCellMoreLink;
    }(BaseComponent));
    function compileSegs(singlePlacements) {
        let allSegs = [];
        let invisibleSegs = [];
        for (let _i = 0, singlePlacements_1 = singlePlacements; _i < singlePlacements_1.length; _i++) {
            let placement = singlePlacements_1[_i];
            allSegs.push(placement.seg);
            if (!placement.isVisible) {
                invisibleSegs.push(placement.seg);
            }
        }
        return { allSegs: allSegs, invisibleSegs: invisibleSegs };
    }

    let DEFAULT_WEEK_NUM_FORMAT$1 = createFormatter({ week: 'narrow' });
    let TableCell = /** @class */ (function (_super) {
        __extends(TableCell, _super);
        function TableCell() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rootElRef = createRef();
            _this.state = {
                dayNumberId: getUniqueDomId(),
            };
            _this.handleRootEl = function (el) {
                setRef(_this.rootElRef, el);
                setRef(_this.props.elRef, el);
            };
            return _this;
        }
        TableCell.prototype.render = function () {
            let _a = this, context = _a.context, props = _a.props, state = _a.state, rootElRef = _a.rootElRef;
            let date = props.date, dateProfile = props.dateProfile;
            let navLinkAttrs = buildNavLinkAttrs(context, date, 'week');
            return (createElement(DayCellRoot, { date: date, dateProfile: dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, elRef: this.handleRootEl }, function (dayElRef, dayClassNames, rootDataAttrs, isDisabled) { return (createElement("td", __assign({ ref: dayElRef, role: "gridcell", className: ['fc-daygrid-day'].concat(dayClassNames, props.extraClassNames || []).join(' ') }, rootDataAttrs, props.extraDataAttrs, (props.showDayNumber ? { 'aria-labelledby': state.dayNumberId } : {})),
                createElement("div", { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: props.innerElRef /* different from hook system! RENAME */ },
                    props.showWeekNumber && (createElement(WeekNumberRoot, { date: date, defaultFormat: DEFAULT_WEEK_NUM_FORMAT$1 }, function (weekElRef, weekClassNames, innerElRef, innerContent) { return (createElement("a", __assign({ ref: weekElRef, className: ['fc-daygrid-week-number'].concat(weekClassNames).join(' ') }, navLinkAttrs), innerContent)); })),
                    !isDisabled && (createElement(TableCellTop, { date: date, dateProfile: dateProfile, showDayNumber: props.showDayNumber, dayNumberId: state.dayNumberId, forceDayTop: props.forceDayTop, todayRange: props.todayRange, extraHookProps: props.extraHookProps })),
                    createElement("div", { className: "fc-daygrid-day-events", ref: props.fgContentElRef },
                        props.fgContent,
                        createElement("div", { className: "fc-daygrid-day-bottom", style: { marginTop: props.moreMarginTop } },
                            createElement(TableCellMoreLink, { allDayDate: date, singlePlacements: props.singlePlacements, moreCnt: props.moreCnt, alignmentElRef: rootElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange }))),
                    createElement("div", { className: "fc-daygrid-day-bg" }, props.bgContent)))); }));
        };
        return TableCell;
    }(DateComponent));

    function computeFgSegPlacement(segs, // assumed already sorted
    dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
        let hierarchy = new DayGridSegHierarchy();
        hierarchy.allowReslicing = true;
        hierarchy.strictOrder = strictOrder;
        if (dayMaxEvents === true || dayMaxEventRows === true) {
            hierarchy.maxCoord = maxContentHeight;
            hierarchy.hiddenConsumes = true;
        }
        else if (typeof dayMaxEvents === 'number') {
            hierarchy.maxStackCnt = dayMaxEvents;
        }
        else if (typeof dayMaxEventRows === 'number') {
            hierarchy.maxStackCnt = dayMaxEventRows;
            hierarchy.hiddenConsumes = true;
        }
        // create segInputs only for segs with known heights
        let segInputs = [];
        let unknownHeightSegs = [];
        for (let i = 0; i < segs.length; i += 1) {
            let seg = segs[i];
            let instanceId = seg.eventRange.instance.instanceId;
            let eventHeight = eventInstanceHeights[instanceId];
            if (eventHeight != null) {
                segInputs.push({
                    index: i,
                    thickness: eventHeight,
                    span: {
                        start: seg.firstCol,
                        end: seg.lastCol + 1,
                    },
                });
            }
            else {
                unknownHeightSegs.push(seg);
            }
        }
        let hiddenEntries = hierarchy.addSegs(segInputs);
        let segRects = hierarchy.toRects();
        let _a = placeRects(segRects, segs, cells), singleColPlacements = _a.singleColPlacements, multiColPlacements = _a.multiColPlacements, leftoverMargins = _a.leftoverMargins;
        let moreCnts = [];
        let moreMarginTops = [];
        // add segs with unknown heights
        for (let _i = 0, unknownHeightSegs_1 = unknownHeightSegs; _i < unknownHeightSegs_1.length; _i++) {
            let seg = unknownHeightSegs_1[_i];
            multiColPlacements[seg.firstCol].push({
                seg: seg,
                isVisible: false,
                isAbsolute: true,
                absoluteTop: 0,
                marginTop: 0,
            });
            for (let col = seg.firstCol; col <= seg.lastCol; col += 1) {
                singleColPlacements[col].push({
                    seg: resliceSeg(seg, col, col + 1, cells),
                    isVisible: false,
                    isAbsolute: false,
                    absoluteTop: 0,
                    marginTop: 0,
                });
            }
        }
        // add the hidden entries
        for (let col = 0; col < cells.length; col += 1) {
            moreCnts.push(0);
        }
        for (let _b = 0, hiddenEntries_1 = hiddenEntries; _b < hiddenEntries_1.length; _b++) {
            let hiddenEntry = hiddenEntries_1[_b];
            let seg = segs[hiddenEntry.index];
            let hiddenSpan = hiddenEntry.span;
            multiColPlacements[hiddenSpan.start].push({
                seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
                isVisible: false,
                isAbsolute: true,
                absoluteTop: 0,
                marginTop: 0,
            });
            for (let col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
                moreCnts[col] += 1;
                singleColPlacements[col].push({
                    seg: resliceSeg(seg, col, col + 1, cells),
                    isVisible: false,
                    isAbsolute: false,
                    absoluteTop: 0,
                    marginTop: 0,
                });
            }
        }
        // deal with leftover margins
        for (let col = 0; col < cells.length; col += 1) {
            moreMarginTops.push(leftoverMargins[col]);
        }
        return { singleColPlacements: singleColPlacements, multiColPlacements: multiColPlacements, moreCnts: moreCnts, moreMarginTops: moreMarginTops };
    }
    // rects ordered by top coord, then left
    function placeRects(allRects, segs, cells) {
        let rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
        let singleColPlacements = [];
        let multiColPlacements = [];
        let leftoverMargins = [];
        for (let col = 0; col < cells.length; col += 1) {
            let rects = rectsByEachCol[col];
            // compute all static segs in singlePlacements
            let singlePlacements = [];
            let currentHeight = 0;
            let currentMarginTop = 0;
            for (let _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
                let rect = rects_1[_i];
                let seg = segs[rect.index];
                singlePlacements.push({
                    seg: resliceSeg(seg, col, col + 1, cells),
                    isVisible: true,
                    isAbsolute: false,
                    absoluteTop: rect.levelCoord,
                    marginTop: rect.levelCoord - currentHeight,
                });
                currentHeight = rect.levelCoord + rect.thickness;
            }
            // compute mixed static/absolute segs in multiPlacements
            let multiPlacements = [];
            currentHeight = 0;
            currentMarginTop = 0;
            for (let _a = 0, rects_2 = rects; _a < rects_2.length; _a++) {
                let rect = rects_2[_a];
                let seg = segs[rect.index];
                let isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?
                let isFirstCol = rect.span.start === col;
                currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
                currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
                if (isAbsolute) {
                    currentMarginTop += rect.thickness;
                    if (isFirstCol) {
                        multiPlacements.push({
                            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                            isVisible: true,
                            isAbsolute: true,
                            absoluteTop: rect.levelCoord,
                            marginTop: 0,
                        });
                    }
                }
                else if (isFirstCol) {
                    multiPlacements.push({
                        seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                        isVisible: true,
                        isAbsolute: false,
                        absoluteTop: rect.levelCoord,
                        marginTop: currentMarginTop, // claim the margin
                    });
                    currentMarginTop = 0;
                }
            }
            singleColPlacements.push(singlePlacements);
            multiColPlacements.push(multiPlacements);
            leftoverMargins.push(currentMarginTop);
        }
        return { singleColPlacements: singleColPlacements, multiColPlacements: multiColPlacements, leftoverMargins: leftoverMargins };
    }
    function groupRectsByEachCol(rects, colCnt) {
        let rectsByEachCol = [];
        for (let col = 0; col < colCnt; col += 1) {
            rectsByEachCol.push([]);
        }
        for (let _i = 0, rects_3 = rects; _i < rects_3.length; _i++) {
            let rect = rects_3[_i];
            for (let col = rect.span.start; col < rect.span.end; col += 1) {
                rectsByEachCol[col].push(rect);
            }
        }
        return rectsByEachCol;
    }
    function resliceSeg(seg, spanStart, spanEnd, cells) {
        if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
            return seg;
        }
        let eventRange = seg.eventRange;
        let origRange = eventRange.range;
        let slicedRange = intersectRanges(origRange, {
            start: cells[spanStart].date,
            end: addDays(cells[spanEnd - 1].date, 1),
        });
        return __assign(__assign({}, seg), { firstCol: spanStart, lastCol: spanEnd - 1, eventRange: {
                def: eventRange.def,
                ui: __assign(__assign({}, eventRange.ui), { durationEditable: false }),
                instance: eventRange.instance,
                range: slicedRange,
            }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() });
    }
    let DayGridSegHierarchy = /** @class */ (function (_super) {
        __extends(DayGridSegHierarchy, _super);
        function DayGridSegHierarchy() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            // config
            _this.hiddenConsumes = false;
            // allows us to keep hidden entries in the hierarchy so they take up space
            _this.forceHidden = {};
            return _this;
        }
        DayGridSegHierarchy.prototype.addSegs = function (segInputs) {
            let _this = this;
            let hiddenSegs = _super.prototype.addSegs.call(this, segInputs);
            let entriesByLevel = this.entriesByLevel;
            let excludeHidden = function (entry) { return !_this.forceHidden[buildEntryKey(entry)]; };
            // remove the forced-hidden segs
            for (let level = 0; level < entriesByLevel.length; level += 1) {
                entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
            }
            return hiddenSegs;
        };
        DayGridSegHierarchy.prototype.handleInvalidInsertion = function (insertion, entry, hiddenEntries) {
            let _a = this, entriesByLevel = _a.entriesByLevel, forceHidden = _a.forceHidden;
            let touchingEntry = insertion.touchingEntry, touchingLevel = insertion.touchingLevel, touchingLateral = insertion.touchingLateral;
            if (this.hiddenConsumes && touchingEntry) {
                let touchingEntryId = buildEntryKey(touchingEntry);
                // if not already hidden
                if (!forceHidden[touchingEntryId]) {
                    if (this.allowReslicing) {
                        let placeholderEntry = __assign(__assign({}, touchingEntry), { span: intersectSpans(touchingEntry.span, entry.span) });
                        let placeholderEntryId = buildEntryKey(placeholderEntry);
                        forceHidden[placeholderEntryId] = true;
                        entriesByLevel[touchingLevel][touchingLateral] = placeholderEntry; // replace touchingEntry with our placeholder
                        this.splitEntry(touchingEntry, entry, hiddenEntries); // split up the touchingEntry, reinsert it
                    }
                    else {
                        forceHidden[touchingEntryId] = true;
                        hiddenEntries.push(touchingEntry);
                    }
                }
            }
            return _super.prototype.handleInvalidInsertion.call(this, insertion, entry, hiddenEntries);
        };
        return DayGridSegHierarchy;
    }(SegHierarchy));

    let TableRow = /** @class */ (function (_super) {
        __extends(TableRow, _super);
        function TableRow() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.cellElRefs = new RefMap(); // the <td>
            _this.frameElRefs = new RefMap(); // the fc-daygrid-day-frame
            _this.fgElRefs = new RefMap(); // the fc-daygrid-day-events
            _this.segHarnessRefs = new RefMap(); // indexed by "instanceId:firstCol"
            _this.rootElRef = createRef();
            _this.state = {
                framePositions: null,
                maxContentHeight: null,
                eventInstanceHeights: {},
            };
            return _this;
        }
        TableRow.prototype.render = function () {
            let _this = this;
            let _a = this, props = _a.props, state = _a.state, context = _a.context;
            let options = context.options;
            let colCnt = props.cells.length;
            let businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
            let bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
            let highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
            let mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
            let _b = computeFgSegPlacement(sortEventSegs(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells), singleColPlacements = _b.singleColPlacements, multiColPlacements = _b.multiColPlacements, moreCnts = _b.moreCnts, moreMarginTops = _b.moreMarginTops;
            let isForcedInvisible = // TODO: messy way to compute this
             (props.eventDrag && props.eventDrag.affectedInstances) ||
                (props.eventResize && props.eventResize.affectedInstances) ||
                {};
            return (createElement("tr", { ref: this.rootElRef, role: "row" },
                props.renderIntro && props.renderIntro(),
                props.cells.map(function (cell, col) {
                    let normalFgNodes = _this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
                    let mirrorFgNodes = _this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
                    return (createElement(TableCell, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), innerElRef: _this.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */, dateProfile: props.dateProfile, date: cell.date, showDayNumber: props.showDayNumbers, showWeekNumber: props.showWeekNumbers && col === 0, forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */, todayRange: props.todayRange, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, moreCnt: moreCnts[col], moreMarginTop: moreMarginTops[col], singlePlacements: singleColPlacements[col], fgContentElRef: _this.fgElRefs.createRef(cell.key), fgContent: ( // Fragment scopes the keys
                        createElement(Fragment, null,
                            createElement(Fragment, null, normalFgNodes),
                            createElement(Fragment, null, mirrorFgNodes))), bgContent: ( // Fragment scopes the keys
                        createElement(Fragment, null,
                            _this.renderFillSegs(highlightSegsByCol[col], 'highlight'),
                            _this.renderFillSegs(businessHoursByCol[col], 'non-business'),
                            _this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))) }));
                })));
        };
        TableRow.prototype.componentDidMount = function () {
            this.updateSizing(true);
        };
        TableRow.prototype.componentDidUpdate = function (prevProps, prevState) {
            let currentProps = this.props;
            this.updateSizing(!isPropsEqual(prevProps, currentProps));
        };
        TableRow.prototype.getHighlightSegs = function () {
            let props = this.props;
            if (props.eventDrag && props.eventDrag.segs.length) { // messy check
                return props.eventDrag.segs;
            }
            if (props.eventResize && props.eventResize.segs.length) { // messy check
                return props.eventResize.segs;
            }
            return props.dateSelectionSegs;
        };
        TableRow.prototype.getMirrorSegs = function () {
            let props = this.props;
            if (props.eventResize && props.eventResize.segs.length) { // messy check
                return props.eventResize.segs;
            }
            return [];
        };
        TableRow.prototype.renderFgSegs = function (col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
            let context = this.context;
            let eventSelection = this.props.eventSelection;
            let framePositions = this.state.framePositions;
            let defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
            let isMirror = isDragging || isResizing || isDateSelecting;
            let nodes = [];
            if (framePositions) {
                for (let _i = 0, segPlacements_1 = segPlacements; _i < segPlacements_1.length; _i++) {
                    let placement = segPlacements_1[_i];
                    let seg = placement.seg;
                    let instanceId = seg.eventRange.instance.instanceId;
                    let key = instanceId + ':' + col;
                    let isVisible = placement.isVisible && !isForcedInvisible[instanceId];
                    let isAbsolute = placement.isAbsolute;
                    let left = '';
                    let right = '';
                    if (isAbsolute) {
                        if (context.isRtl) {
                            right = 0;
                            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
                        }
                        else {
                            left = 0;
                            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
                        }
                    }
                    /*
                    known bug: events that are force to be list-item but span multiple days still take up space in later columns
                    todo: in print view, for multi-day events, don't display title within non-start/end segs
                    */
                    nodes.push(createElement("div", { className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''), key: key, ref: isMirror ? null : this.segHarnessRefs.createRef(key), style: {
                            visibility: isVisible ? '' : 'hidden',
                            marginTop: isAbsolute ? '' : placement.marginTop,
                            top: isAbsolute ? placement.absoluteTop : '',
                            left: left,
                            right: right,
                        } }, hasListItemDisplay(seg) ? (createElement(TableListItemEvent, __assign({ seg: seg, isDragging: isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, getSegMeta(seg, todayRange)))) : (createElement(TableBlockEvent, __assign({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, getSegMeta(seg, todayRange))))));
                }
            }
            return nodes;
        };
        TableRow.prototype.renderFillSegs = function (segs, fillType) {
            let isRtl = this.context.isRtl;
            let todayRange = this.props.todayRange;
            let framePositions = this.state.framePositions;
            let nodes = [];
            if (framePositions) {
                for (let _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                    let seg = segs_1[_i];
                    let leftRightCss = isRtl ? {
                        right: 0,
                        left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol],
                    } : {
                        left: 0,
                        right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol],
                    };
                    nodes.push(createElement("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-daygrid-bg-harness", style: leftRightCss }, fillType === 'bg-event' ?
                        createElement(BgEvent, __assign({ seg: seg }, getSegMeta(seg, todayRange))) :
                        renderFill(fillType)));
                }
            }
            return createElement.apply(void 0, __spreadArray([Fragment, {}], nodes));
        };
        TableRow.prototype.updateSizing = function (isExternalSizingChange) {
            let _a = this, props = _a.props, frameElRefs = _a.frameElRefs;
            if (!props.forPrint &&
                props.clientWidth !== null // positioning ready?
            ) {
                if (isExternalSizingChange) {
                    let frameEls = props.cells.map(function (cell) { return frameElRefs.currentMap[cell.key]; });
                    if (frameEls.length) {
                        let originEl = this.rootElRef.current;
                        this.setState({
                            framePositions: new PositionCache(originEl, frameEls, true, // isHorizontal
                            false),
                        });
                    }
                }
                let oldInstanceHeights = this.state.eventInstanceHeights;
                let newInstanceHeights = this.queryEventInstanceHeights();
                let limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
                this.setState({
                    // HACK to prevent oscillations of events being shown/hidden from max-event-rows
                    // Essentially, once you compute an element's height, never null-out.
                    // TODO: always display all events, as visibility:hidden?
                    eventInstanceHeights: __assign(__assign({}, oldInstanceHeights), newInstanceHeights),
                    maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null,
                });
            }
        };
        TableRow.prototype.queryEventInstanceHeights = function () {
            let segElMap = this.segHarnessRefs.currentMap;
            let eventInstanceHeights = {};
            // get the max height amongst instance segs
            for (let key in segElMap) {
                let height = Math.round(segElMap[key].getBoundingClientRect().height);
                let instanceId = key.split(':')[0]; // deconstruct how renderFgSegs makes the key
                eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
            }
            return eventInstanceHeights;
        };
        TableRow.prototype.computeMaxContentHeight = function () {
            let firstKey = this.props.cells[0].key;
            let cellEl = this.cellElRefs.currentMap[firstKey];
            let fcContainerEl = this.fgElRefs.currentMap[firstKey];
            return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
        };
        TableRow.prototype.getCellEls = function () {
            let elMap = this.cellElRefs.currentMap;
            return this.props.cells.map(function (cell) { return elMap[cell.key]; });
        };
        return TableRow;
    }(DateComponent));
    TableRow.addStateEquality({
        eventInstanceHeights: isPropsEqual,
    });
    function buildMirrorPlacements(mirrorSegs, colPlacements) {
        if (!mirrorSegs.length) {
            return [];
        }
        let topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
        return mirrorSegs.map(function (seg) { return ({
            seg: seg,
            isVisible: true,
            isAbsolute: true,
            absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
            marginTop: 0,
        }); });
    }
    function buildAbsoluteTopHash(colPlacements) {
        let topsByInstanceId = {};
        for (let _i = 0, colPlacements_1 = colPlacements; _i < colPlacements_1.length; _i++) {
            let placements = colPlacements_1[_i];
            for (let _a = 0, placements_1 = placements; _a < placements_1.length; _a++) {
                let placement = placements_1[_a];
                topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
            }
        }
        return topsByInstanceId;
    }

    let Table = /** @class */ (function (_super) {
        __extends(Table, _super);
        function Table() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.splitBusinessHourSegs = memoize(splitSegsByRow);
            _this.splitBgEventSegs = memoize(splitSegsByRow);
            _this.splitFgEventSegs = memoize(splitSegsByRow);
            _this.splitDateSelectionSegs = memoize(splitSegsByRow);
            _this.splitEventDrag = memoize(splitInteractionByRow);
            _this.splitEventResize = memoize(splitInteractionByRow);
            _this.rowRefs = new RefMap();
            _this.handleRootEl = function (rootEl) {
                _this.rootEl = rootEl;
                if (rootEl) {
                    _this.context.registerInteractiveComponent(_this, {
                        el: rootEl,
                        isHitComboAllowed: _this.props.isHitComboAllowed,
                    });
                }
                else {
                    _this.context.unregisterInteractiveComponent(_this);
                }
            };
            return _this;
        }
        Table.prototype.render = function () {
            let _this = this;
            let props = this.props;
            let dateProfile = props.dateProfile, dayMaxEventRows = props.dayMaxEventRows, dayMaxEvents = props.dayMaxEvents, expandRows = props.expandRows;
            let rowCnt = props.cells.length;
            let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
            let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
            let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
            let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
            let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
            let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
            let limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
            // if rows can't expand to fill fixed height, can't do balanced-height event limit
            // TODO: best place to normalize these options?
            if (limitViaBalanced && !expandRows) {
                limitViaBalanced = false;
                dayMaxEventRows = null;
                dayMaxEvents = null;
            }
            let classNames = [
                'fc-daygrid-body',
                limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced',
                expandRows ? '' : 'fc-daygrid-body-natural', // will height of one row depend on the others?
            ];
            return (createElement("div", { className: classNames.join(' '), ref: this.handleRootEl, style: {
                    // these props are important to give this wrapper correct dimensions for interactions
                    // TODO: if we set it here, can we avoid giving to inner tables?
                    width: props.clientWidth,
                    minWidth: props.tableMinWidth,
                } },
                createElement(NowTimer, { unit: "day" }, function (nowDate, todayRange) { return (createElement(Fragment, null,
                    createElement("table", { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
                            width: props.clientWidth,
                            minWidth: props.tableMinWidth,
                            height: expandRows ? props.clientHeight : '',
                        } },
                        props.colGroupNode,
                        createElement("tbody", { role: "presentation" }, props.cells.map(function (cells, row) { return (createElement(TableRow, { ref: _this.rowRefs.createRef(row), key: cells.length
                                ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */
                                : row // in case there are no cells (like when resource view is loading)
                            , showDayNumbers: rowCnt > 1, showWeekNumbers: props.showWeekNumbers, todayRange: todayRange, dateProfile: dateProfile, cells: cells, renderIntro: props.renderRowIntro, businessHourSegs: businessHourSegsByRow[row], eventSelection: props.eventSelection, bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* hack */, fgEventSegs: fgEventSegsByRow[row], dateSelectionSegs: dateSelectionSegsByRow[row], eventDrag: eventDragByRow[row], eventResize: eventResizeByRow[row], dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })); }))))); })));
        };
        // Hit System
        // ----------------------------------------------------------------------------------------------------
        Table.prototype.prepareHits = function () {
            this.rowPositions = new PositionCache(this.rootEl, this.rowRefs.collect().map(function (rowObj) { return rowObj.getCellEls()[0]; }), // first cell el in each row. TODO: not optimal
            false, true);
            this.colPositions = new PositionCache(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
            true, // horizontal
            false);
        };
        Table.prototype.queryHit = function (positionLeft, positionTop) {
            let _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
            let col = colPositions.leftToIndex(positionLeft);
            let row = rowPositions.topToIndex(positionTop);
            if (row != null && col != null) {
                let cell = this.props.cells[row][col];
                return {
                    dateProfile: this.props.dateProfile,
                    dateSpan: __assign({ range: this.getCellRange(row, col), allDay: true }, cell.extraDateSpan),
                    dayEl: this.getCellEl(row, col),
                    rect: {
                        left: colPositions.lefts[col],
                        right: colPositions.rights[col],
                        top: rowPositions.tops[row],
                        bottom: rowPositions.bottoms[row],
                    },
                    layer: 0,
                };
            }
            return null;
        };
        Table.prototype.getCellEl = function (row, col) {
            return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
        };
        Table.prototype.getCellRange = function (row, col) {
            let start = this.props.cells[row][col].date;
            let end = addDays(start, 1);
            return { start: start, end: end };
        };
        return Table;
    }(DateComponent));
    function isSegAllDay(seg) {
        return seg.eventRange.def.allDay;
    }

    let DayTableSlicer = /** @class */ (function (_super) {
        __extends(DayTableSlicer, _super);
        function DayTableSlicer() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.forceDayIfListItem = true;
            return _this;
        }
        DayTableSlicer.prototype.sliceRange = function (dateRange, dayTableModel) {
            return dayTableModel.sliceRange(dateRange);
        };
        return DayTableSlicer;
    }(Slicer));

    let DayTable = /** @class */ (function (_super) {
        __extends(DayTable, _super);
        function DayTable() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.slicer = new DayTableSlicer();
            _this.tableRef = createRef();
            return _this;
        }
        DayTable.prototype.render = function () {
            let _a = this, props = _a.props, context = _a.context;
            return (createElement(Table, __assign({ ref: this.tableRef }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), { dateProfile: props.dateProfile, cells: props.dayTableModel.cells, colGroupNode: props.colGroupNode, tableMinWidth: props.tableMinWidth, renderRowIntro: props.renderRowIntro, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, showWeekNumbers: props.showWeekNumbers, expandRows: props.expandRows, headerAlignElRef: props.headerAlignElRef, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })));
        };
        return DayTable;
    }(DateComponent));

    let DayTableView = /** @class */ (function (_super) {
        __extends(DayTableView, _super);
        function DayTableView() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.buildDayTableModel = memoize(buildDayTableModel);
            _this.headerRef = createRef();
            _this.tableRef = createRef();
            return _this;
        }
        DayTableView.prototype.render = function () {
            let _this = this;
            let _a = this.context, options = _a.options, dateProfileGenerator = _a.dateProfileGenerator;
            let props = this.props;
            let dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
            let headerContent = options.dayHeaders && (createElement(DayHeader, { ref: this.headerRef, dateProfile: props.dateProfile, dates: dayTableModel.headerDates, datesRepDistinctDays: dayTableModel.rowCnt === 1 }));
            let bodyContent = function (contentArg) { return (createElement(DayTable, { ref: _this.tableRef, dateProfile: props.dateProfile, dayTableModel: dayTableModel, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, nextDayThreshold: options.nextDayThreshold, colGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, showWeekNumbers: options.weekNumbers, expandRows: !props.isHeightAuto, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint })); };
            return options.dayMinWidth
                ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth)
                : this.renderSimpleLayout(headerContent, bodyContent);
        };
        return DayTableView;
    }(TableView));
    function buildDayTableModel(dateProfile, dateProfileGenerator) {
        let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
        return new DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
    }

    let TableDateProfileGenerator = /** @class */ (function (_super) {
        __extends(TableDateProfileGenerator, _super);
        function TableDateProfileGenerator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // Computes the date range that will be rendered.
        TableDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
            let dateEnv = this.props.dateEnv;
            let renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
            let start = renderRange.start;
            let end = renderRange.end;
            let endOfWeek;
            // year and month views should be aligned with weeks. this is already done for week
            if (/^(year|month)$/.test(currentRangeUnit)) {
                start = dateEnv.startOfWeek(start);
                // make end-of-week if not already
                endOfWeek = dateEnv.startOfWeek(end);
                if (endOfWeek.valueOf() !== end.valueOf()) {
                    end = addWeeks(endOfWeek, 1);
                }
            }
            // ensure 6 weeks
            if (this.props.monthMode &&
                this.props.fixedWeekCount) {
                let rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
                diffWeeks(start, end));
                end = addWeeks(end, 6 - rowCnt);
            }
            return { start: start, end: end };
        };
        return TableDateProfileGenerator;
    }(DateProfileGenerator));

    let dayGridPlugin = createPlugin({
        initialView: 'dayGridMonth',
        views: {
            dayGrid: {
                component: DayTableView,
                dateProfileGeneratorClass: TableDateProfileGenerator,
            },
            dayGridDay: {
                type: 'dayGrid',
                duration: { days: 1 },
            },
            dayGridWeek: {
                type: 'dayGrid',
                duration: { weeks: 1 },
            },
            dayGridMonth: {
                type: 'dayGrid',
                duration: { months: 1 },
                monthMode: true,
                fixedWeekCount: true,
            },
        },
    });

    let AllDaySplitter = /** @class */ (function (_super) {
        __extends(AllDaySplitter, _super);
        function AllDaySplitter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AllDaySplitter.prototype.getKeyInfo = function () {
            return {
                allDay: {},
                timed: {},
            };
        };
        AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
            if (dateSpan.allDay) {
                return ['allDay'];
            }
            return ['timed'];
        };
        AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
            if (!eventDef.allDay) {
                return ['timed'];
            }
            if (hasBgRendering(eventDef)) {
                return ['timed', 'allDay'];
            }
            return ['allDay'];
        };
        return AllDaySplitter;
    }(Splitter));

    let DEFAULT_SLAT_LABEL_FORMAT = createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: 'short',
    });
    function TimeColsAxisCell(props) {
        let classNames = [
            'fc-timegrid-slot',
            'fc-timegrid-slot-label',
            props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor',
        ];
        return (createElement(ViewContextType.Consumer, null, function (context) {
            if (!props.isLabeled) {
                return (createElement("td", { className: classNames.join(' '), "data-time": props.isoTimeStr }));
            }
            let dateEnv = context.dateEnv, options = context.options, viewApi = context.viewApi;
            let labelFormat = // TODO: fully pre-parse
             options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT :
                Array.isArray(options.slotLabelFormat) ? createFormatter(options.slotLabelFormat[0]) :
                    createFormatter(options.slotLabelFormat);
            let hookProps = {
                level: 0,
                time: props.time,
                date: dateEnv.toDate(props.date),
                view: viewApi,
                text: dateEnv.format(props.date, labelFormat),
            };
            return (createElement(RenderHook, { hookProps: hookProps, classNames: options.slotLabelClassNames, content: options.slotLabelContent, defaultContent: renderInnerContent$1, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return (createElement("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-time": props.isoTimeStr },
                createElement("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
                    createElement("div", { className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion", ref: innerElRef }, innerContent)))); }));
        }));
    }
    function renderInnerContent$1(props) {
        return props.text;
    }

    let TimeBodyAxis = /** @class */ (function (_super) {
        __extends(TimeBodyAxis, _super);
        function TimeBodyAxis() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TimeBodyAxis.prototype.render = function () {
            return this.props.slatMetas.map(function (slatMeta) { return (createElement("tr", { key: slatMeta.key },
                createElement(TimeColsAxisCell, __assign({}, slatMeta)))); });
        };
        return TimeBodyAxis;
    }(BaseComponent));

    let DEFAULT_WEEK_NUM_FORMAT = createFormatter({ week: 'short' });
    let AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
    let TimeColsView = /** @class */ (function (_super) {
        __extends(TimeColsView, _super);
        function TimeColsView() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
            _this.headerElRef = createRef();
            _this.rootElRef = createRef();
            _this.scrollerElRef = createRef();
            _this.state = {
                slatCoords: null,
            };
            _this.handleScrollTopRequest = function (scrollTop) {
                let scrollerEl = _this.scrollerElRef.current;
                if (scrollerEl) { // TODO: not sure how this could ever be null. weirdness with the reducer
                    scrollerEl.scrollTop = scrollTop;
                }
            };
            /* Header Render Methods
            ------------------------------------------------------------------------------------------------------------------*/
            _this.renderHeadAxis = function (rowKey, frameHeight) {
                if (frameHeight === void 0) { frameHeight = ''; }
                let options = _this.context.options;
                let dateProfile = _this.props.dateProfile;
                let range = dateProfile.renderRange;
                let dayCnt = diffDays(range.start, range.end);
                let navLinkAttrs = (dayCnt === 1) // only do in day views (to avoid doing in week views that dont need it)
                    ? buildNavLinkAttrs(_this.context, range.start, 'week')
                    : {};
                if (options.weekNumbers && rowKey === 'day') {
                    return (createElement(WeekNumberRoot, { date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, function (rootElRef, classNames, innerElRef, innerContent) { return (createElement("th", { ref: rootElRef, "aria-hidden": true, className: [
                            'fc-timegrid-axis',
                            'fc-scrollgrid-shrink',
                        ].concat(classNames).join(' ') },
                        createElement("div", { className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid", style: { height: frameHeight } },
                            createElement("a", __assign({ ref: innerElRef, className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner" }, navLinkAttrs), innerContent)))); }));
                }
                return (createElement("th", { "aria-hidden": true, className: "fc-timegrid-axis" },
                    createElement("div", { className: "fc-timegrid-axis-frame", style: { height: frameHeight } })));
            };
            /* Table Component Render Methods
            ------------------------------------------------------------------------------------------------------------------*/
            // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
            // but DayGrid still needs to have classNames on inner elements in order to measure.
            _this.renderTableRowAxis = function (rowHeight) {
                let _a = _this.context, options = _a.options, viewApi = _a.viewApi;
                let hookProps = {
                    text: options.allDayText,
                    view: viewApi,
                };
                return (
                // TODO: make reusable hook. used in list view too
                createElement(RenderHook, { hookProps: hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner$1, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return (createElement("td", { ref: rootElRef, "aria-hidden": true, className: [
                        'fc-timegrid-axis',
                        'fc-scrollgrid-shrink',
                    ].concat(classNames).join(' ') },
                    createElement("div", { className: 'fc-timegrid-axis-frame fc-scrollgrid-shrink-frame' + (rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : ''), style: { height: rowHeight } },
                        createElement("span", { className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner", ref: innerElRef }, innerContent)))); }));
            };
            _this.handleSlatCoords = function (slatCoords) {
                _this.setState({ slatCoords: slatCoords });
            };
            return _this;
        }
        // rendering
        // ----------------------------------------------------------------------------------------------------
        TimeColsView.prototype.renderSimpleLayout = function (headerRowContent, allDayContent, timeContent) {
            let _a = this, context = _a.context, props = _a.props;
            let sections = [];
            let stickyHeaderDates = getStickyHeaderDates(context.options);
            if (headerRowContent) {
                sections.push({
                    type: 'header',
                    key: 'header',
                    isSticky: stickyHeaderDates,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    },
                });
            }
            if (allDayContent) {
                sections.push({
                    type: 'body',
                    key: 'all-day',
                    chunk: { content: allDayContent },
                });
                sections.push({
                    type: 'body',
                    key: 'all-day-divider',
                    outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                    createElement("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                        createElement("td", { className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
                });
            }
            sections.push({
                type: 'body',
                key: 'body',
                liquid: true,
                expandRows: Boolean(context.options.expandRows),
                chunk: {
                    scrollerElRef: this.scrollerElRef,
                    content: timeContent,
                },
            });
            return (createElement(ViewRoot, { viewSpec: context.viewSpec, elRef: this.rootElRef }, function (rootElRef, classNames) { return (createElement("div", { className: ['fc-timegrid'].concat(classNames).join(' '), ref: rootElRef },
                createElement(SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [{ width: 'shrink' }], sections: sections }))); }));
        };
        TimeColsView.prototype.renderHScrollLayout = function (headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
            let _this = this;
            let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
            if (!ScrollGrid) {
                throw new Error('No ScrollGrid implementation');
            }
            let _a = this, context = _a.context, props = _a.props;
            let stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
            let stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
            let sections = [];
            if (headerRowContent) {
                sections.push({
                    type: 'header',
                    key: 'header',
                    isSticky: stickyHeaderDates,
                    syncRowHeights: true,
                    chunks: [
                        {
                            key: 'axis',
                            rowContent: function (arg) { return (createElement("tr", { role: "presentation" }, _this.renderHeadAxis('day', arg.rowSyncHeights[0]))); },
                        },
                        {
                            key: 'cols',
                            elRef: this.headerElRef,
                            tableClassName: 'fc-col-header',
                            rowContent: headerRowContent,
                        },
                    ],
                });
            }
            if (allDayContent) {
                sections.push({
                    type: 'body',
                    key: 'all-day',
                    syncRowHeights: true,
                    chunks: [
                        {
                            key: 'axis',
                            rowContent: function (contentArg) { return (createElement("tr", { role: "presentation" }, _this.renderTableRowAxis(contentArg.rowSyncHeights[0]))); },
                        },
                        {
                            key: 'cols',
                            content: allDayContent,
                        },
                    ],
                });
                sections.push({
                    key: 'all-day-divider',
                    type: 'body',
                    outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                    createElement("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                        createElement("td", { colSpan: 2, className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
                });
            }
            let isNowIndicator = context.options.nowIndicator;
            sections.push({
                type: 'body',
                key: 'body',
                liquid: true,
                expandRows: Boolean(context.options.expandRows),
                chunks: [
                    {
                        key: 'axis',
                        content: function (arg) { return (
                        // TODO: make this now-indicator arrow more DRY with TimeColsContent
                        createElement("div", { className: "fc-timegrid-axis-chunk" },
                            createElement("table", { "aria-hidden": true, style: { height: arg.expandRows ? arg.clientHeight : '' } },
                                arg.tableColGroupNode,
                                createElement("tbody", null,
                                    createElement(TimeBodyAxis, { slatMetas: slatMetas }))),
                            createElement("div", { className: "fc-timegrid-now-indicator-container" },
                                createElement(NowTimer, { unit: isNowIndicator ? 'minute' : 'day' /* hacky */ }, function (nowDate) {
                                    let nowIndicatorTop = isNowIndicator &&
                                        slatCoords &&
                                        slatCoords.safeComputeTop(nowDate); // might return void
                                    if (typeof nowIndicatorTop === 'number') {
                                        return (createElement(NowIndicatorRoot, { isAxis: true, date: nowDate }, function (rootElRef, classNames, innerElRef, innerContent) { return (createElement("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '), style: { top: nowIndicatorTop } }, innerContent)); }));
                                    }
                                    return null;
                                })))); },
                    },
                    {
                        key: 'cols',
                        scrollerElRef: this.scrollerElRef,
                        content: timeContent,
                    },
                ],
            });
            if (stickyFooterScrollbar) {
                sections.push({
                    key: 'footer',
                    type: 'footer',
                    isSticky: true,
                    chunks: [
                        {
                            key: 'axis',
                            content: renderScrollShim,
                        },
                        {
                            key: 'cols',
                            content: renderScrollShim,
                        },
                    ],
                });
            }
            return (createElement(ViewRoot, { viewSpec: context.viewSpec, elRef: this.rootElRef }, function (rootElRef, classNames) { return (createElement("div", { className: ['fc-timegrid'].concat(classNames).join(' '), ref: rootElRef },
                createElement(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: false, colGroups: [
                        { width: 'shrink', cols: [{ width: 'shrink' }] },
                        { cols: [{ span: colCnt, minWidth: dayMinWidth }] },
                    ], sections: sections }))); }));
        };
        /* Dimensions
        ------------------------------------------------------------------------------------------------------------------*/
        TimeColsView.prototype.getAllDayMaxEventProps = function () {
            let _a = this.context.options, dayMaxEvents = _a.dayMaxEvents, dayMaxEventRows = _a.dayMaxEventRows;
            if (dayMaxEvents === true || dayMaxEventRows === true) { // is auto?
                dayMaxEvents = undefined;
                dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
            }
            return { dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows };
        };
        return TimeColsView;
    }(DateComponent));
    function renderAllDayInner$1(hookProps) {
        return hookProps.text;
    }

    let TimeColsSlatsCoords = /** @class */ (function () {
        function TimeColsSlatsCoords(positions, dateProfile, slotDuration) {
            this.positions = positions;
            this.dateProfile = dateProfile;
            this.slotDuration = slotDuration;
        }
        TimeColsSlatsCoords.prototype.safeComputeTop = function (date) {
            let dateProfile = this.dateProfile;
            if (rangeContainsMarker(dateProfile.currentRange, date)) {
                let startOfDayDate = startOfDay(date);
                let timeMs = date.valueOf() - startOfDayDate.valueOf();
                if (timeMs >= asRoughMs(dateProfile.slotMinTime) &&
                    timeMs < asRoughMs(dateProfile.slotMaxTime)) {
                    return this.computeTimeTop(createDuration(timeMs));
                }
            }
            return null;
        };
        // Computes the top coordinate, relative to the bounds of the grid, of the given date.
        // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
        TimeColsSlatsCoords.prototype.computeDateTop = function (when, startOfDayDate) {
            if (!startOfDayDate) {
                startOfDayDate = startOfDay(when);
            }
            return this.computeTimeTop(createDuration(when.valueOf() - startOfDayDate.valueOf()));
        };
        // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
        // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
        // Eventually allow computation with arbirary slat dates.
        TimeColsSlatsCoords.prototype.computeTimeTop = function (duration) {
            let _a = this, positions = _a.positions, dateProfile = _a.dateProfile;
            let len = positions.els.length;
            // floating-point value of # of slots covered
            let slatCoverage = (duration.milliseconds - asRoughMs(dateProfile.slotMinTime)) / asRoughMs(this.slotDuration);
            let slatIndex;
            let slatRemainder;
            // compute a floating-point number for how many slats should be progressed through.
            // from 0 to number of slats (inclusive)
            // constrained because slotMinTime/slotMaxTime might be customized.
            slatCoverage = Math.max(0, slatCoverage);
            slatCoverage = Math.min(len, slatCoverage);
            // an integer index of the furthest whole slat
            // from 0 to number slats (*exclusive*, so len-1)
            slatIndex = Math.floor(slatCoverage);
            slatIndex = Math.min(slatIndex, len - 1);
            // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
            // could be 1.0 if slatCoverage is covering *all* the slots
            slatRemainder = slatCoverage - slatIndex;
            return positions.tops[slatIndex] +
                positions.getHeight(slatIndex) * slatRemainder;
        };
        return TimeColsSlatsCoords;
    }());

    let TimeColsSlatsBody = /** @class */ (function (_super) {
        __extends(TimeColsSlatsBody, _super);
        function TimeColsSlatsBody() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TimeColsSlatsBody.prototype.render = function () {
            let _a = this, props = _a.props, context = _a.context;
            let options = context.options;
            let slatElRefs = props.slatElRefs;
            return (createElement("tbody", null, props.slatMetas.map(function (slatMeta, i) {
                let hookProps = {
                    time: slatMeta.time,
                    date: context.dateEnv.toDate(slatMeta.date),
                    view: context.viewApi,
                };
                let classNames = [
                    'fc-timegrid-slot',
                    'fc-timegrid-slot-lane',
                    slatMeta.isLabeled ? '' : 'fc-timegrid-slot-minor',
                ];
                return (createElement("tr", { key: slatMeta.key, ref: slatElRefs.createRef(slatMeta.key) },
                    props.axis && (createElement(TimeColsAxisCell, __assign({}, slatMeta))),
                    createElement(RenderHook, { hookProps: hookProps, classNames: options.slotLaneClassNames, content: options.slotLaneContent, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return (createElement("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-time": slatMeta.isoTimeStr }, innerContent)); })));
            })));
        };
        return TimeColsSlatsBody;
    }(BaseComponent));

    /*
    for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
    */
    let TimeColsSlats = /** @class */ (function (_super) {
        __extends(TimeColsSlats, _super);
        function TimeColsSlats() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rootElRef = createRef();
            _this.slatElRefs = new RefMap();
            return _this;
        }
        TimeColsSlats.prototype.render = function () {
            let _a = this, props = _a.props, context = _a.context;
            return (createElement("div", { ref: this.rootElRef, className: "fc-timegrid-slots" },
                createElement("table", { "aria-hidden": true, className: context.theme.getClass('table'), style: {
                        minWidth: props.tableMinWidth,
                        width: props.clientWidth,
                        height: props.minHeight,
                    } },
                    props.tableColGroupNode /* relies on there only being a single <col> for the axis */,
                    createElement(TimeColsSlatsBody, { slatElRefs: this.slatElRefs, axis: props.axis, slatMetas: props.slatMetas }))));
        };
        TimeColsSlats.prototype.componentDidMount = function () {
            this.updateSizing();
        };
        TimeColsSlats.prototype.componentDidUpdate = function () {
            this.updateSizing();
        };
        TimeColsSlats.prototype.componentWillUnmount = function () {
            if (this.props.onCoords) {
                this.props.onCoords(null);
            }
        };
        TimeColsSlats.prototype.updateSizing = function () {
            let _a = this, context = _a.context, props = _a.props;
            if (props.onCoords &&
                props.clientWidth !== null // means sizing has stabilized
            ) {
                let rootEl = this.rootElRef.current;
                if (rootEl.offsetHeight) { // not hidden by css
                    props.onCoords(new TimeColsSlatsCoords(new PositionCache(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
                }
            }
        };
        return TimeColsSlats;
    }(BaseComponent));
    function collectSlatEls(elMap, slatMetas) {
        return slatMetas.map(function (slatMeta) { return elMap[slatMeta.key]; });
    }

    function splitSegsByCol(segs, colCnt) {
        let segsByCol = [];
        let i;
        for (i = 0; i < colCnt; i += 1) {
            segsByCol.push([]);
        }
        if (segs) {
            for (i = 0; i < segs.length; i += 1) {
                segsByCol[segs[i].col].push(segs[i]);
            }
        }
        return segsByCol;
    }
    function splitInteractionByCol(ui, colCnt) {
        let byRow = [];
        if (!ui) {
            for (let i = 0; i < colCnt; i += 1) {
                byRow[i] = null;
            }
        }
        else {
            for (let i = 0; i < colCnt; i += 1) {
                byRow[i] = {
                    affectedInstances: ui.affectedInstances,
                    isEvent: ui.isEvent,
                    segs: [],
                };
            }
            for (let _i = 0, _a = ui.segs; _i < _a.length; _i++) {
                let seg = _a[_i];
                byRow[seg.col].segs.push(seg);
            }
        }
        return byRow;
    }

    let TimeColMoreLink = /** @class */ (function (_super) {
        __extends(TimeColMoreLink, _super);
        function TimeColMoreLink() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rootElRef = createRef();
            return _this;
        }
        TimeColMoreLink.prototype.render = function () {
            let _this = this;
            let props = this.props;
            return (createElement(MoreLinkRoot, { allDayDate: null, moreCnt: props.hiddenSegs.length, allSegs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, alignmentElRef: this.rootElRef, defaultContent: renderMoreLinkInner, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: function () { return renderPlainFgSegs(props.hiddenSegs, props); } }, function (rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) { return (createElement("a", { ref: function (el) {
                    setRef(rootElRef, el);
                    setRef(_this.rootElRef, el);
                }, className: ['fc-timegrid-more-link'].concat(classNames).join(' '), style: { top: props.top, bottom: props.bottom }, onClick: handleClick, title: title, "aria-expanded": isExpanded, "aria-controls": popoverId },
                createElement("div", { ref: innerElRef, className: "fc-timegrid-more-link-inner fc-sticky" }, innerContent))); }));
        };
        return TimeColMoreLink;
    }(BaseComponent));
    function renderMoreLinkInner(props) {
        return props.shortText;
    }

    // segInputs assumed sorted
    function buildPositioning(segInputs, strictOrder, maxStackCnt) {
        let hierarchy = new SegHierarchy();
        if (strictOrder != null) {
            hierarchy.strictOrder = strictOrder;
        }
        if (maxStackCnt != null) {
            hierarchy.maxStackCnt = maxStackCnt;
        }
        let hiddenEntries = hierarchy.addSegs(segInputs);
        let hiddenGroups = groupIntersectingEntries(hiddenEntries);
        let web = buildWeb(hierarchy);
        web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
        let segRects = webToRects(web);
        return { segRects: segRects, hiddenGroups: hiddenGroups };
    }
    function buildWeb(hierarchy) {
        let entriesByLevel = hierarchy.entriesByLevel;
        let buildNode = cacheable(function (level, lateral) { return level + ':' + lateral; }, function (level, lateral) {
            let siblingRange = findNextLevelSegs(hierarchy, level, lateral);
            let nextLevelRes = buildNodes(siblingRange, buildNode);
            let entry = entriesByLevel[level][lateral];
            return [
                __assign(__assign({}, entry), { nextLevelNodes: nextLevelRes[0] }),
                entry.thickness + nextLevelRes[1], // the pressure builds
            ];
        });
        return buildNodes(entriesByLevel.length
            ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length }
            : null, buildNode)[0];
    }
    function buildNodes(siblingRange, buildNode) {
        if (!siblingRange) {
            return [[], 0];
        }
        let level = siblingRange.level, lateralStart = siblingRange.lateralStart, lateralEnd = siblingRange.lateralEnd;
        let lateral = lateralStart;
        let pairs = [];
        while (lateral < lateralEnd) {
            pairs.push(buildNode(level, lateral));
            lateral += 1;
        }
        pairs.sort(cmpDescPressures);
        return [
            pairs.map(extractNode),
            pairs[0][1], // first item's pressure
        ];
    }
    function cmpDescPressures(a, b) {
        return b[1] - a[1];
    }
    function extractNode(a) {
        return a[0];
    }
    function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
        let levelCoords = hierarchy.levelCoords, entriesByLevel = hierarchy.entriesByLevel;
        let subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
        let afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
        let levelCnt = levelCoords.length;
        let level = subjectLevel;
        // skip past levels that are too high up
        for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
            ; // do nothing
        for (; level < levelCnt; level += 1) {
            let entries = entriesByLevel[level];
            let entry = void 0;
            let searchIndex = binarySearch(entries, subjectEntry.span.start, getEntrySpanEnd);
            let lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
            let lateralEnd = lateralStart;
            while ( // loop through entries that horizontally intersect
            (entry = entries[lateralEnd]) && // but not past the whole seg list
                entry.span.start < subjectEntry.span.end) {
                lateralEnd += 1;
            }
            if (lateralStart < lateralEnd) {
                return { level: level, lateralStart: lateralStart, lateralEnd: lateralEnd };
            }
        }
        return null;
    }
    function stretchWeb(topLevelNodes, totalThickness) {
        let stretchNode = cacheable(function (node, startCoord, prevThickness) { return buildEntryKey(node); }, function (node, startCoord, prevThickness) {
            let nextLevelNodes = node.nextLevelNodes, thickness = node.thickness;
            let allThickness = thickness + prevThickness;
            let thicknessFraction = thickness / allThickness;
            let endCoord;
            let newChildren = [];
            if (!nextLevelNodes.length) {
                endCoord = totalThickness;
            }
            else {
                for (let _i = 0, nextLevelNodes_1 = nextLevelNodes; _i < nextLevelNodes_1.length; _i++) {
                    let childNode = nextLevelNodes_1[_i];
                    if (endCoord === undefined) {
                        let res = stretchNode(childNode, startCoord, allThickness);
                        endCoord = res[0];
                        newChildren.push(res[1]);
                    }
                    else {
                        let res = stretchNode(childNode, endCoord, 0);
                        newChildren.push(res[1]);
                    }
                }
            }
            let newThickness = (endCoord - startCoord) * thicknessFraction;
            return [endCoord - newThickness, __assign(__assign({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
        });
        return topLevelNodes.map(function (node) { return stretchNode(node, 0, 0)[1]; });
    }
    // not sorted in any particular order
    function webToRects(topLevelNodes) {
        let rects = [];
        let processNode = cacheable(function (node, levelCoord, stackDepth) { return buildEntryKey(node); }, function (node, levelCoord, stackDepth) {
            let rect = __assign(__assign({}, node), { levelCoord: levelCoord,
                stackDepth: stackDepth, stackForward: 0 });
            rects.push(rect);
            return (rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1);
        });
        function processNodes(nodes, levelCoord, stackDepth) {
            let stackForward = 0;
            for (let _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                let node = nodes_1[_i];
                stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
            }
            return stackForward;
        }
        processNodes(topLevelNodes, 0, 0);
        return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
    }
    // TODO: move to general util
    function cacheable(keyFunc, workFunc) {
        let cache = {};
        return function () {
            let args = [];
            for (let _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            let key = keyFunc.apply(void 0, args);
            return (key in cache)
                ? cache[key]
                : (cache[key] = workFunc.apply(void 0, args));
        };
    }

    function computeSegVCoords(segs, colDate, slatCoords, eventMinHeight) {
        if (slatCoords === void 0) { slatCoords = null; }
        if (eventMinHeight === void 0) { eventMinHeight = 0; }
        let vcoords = [];
        if (slatCoords) {
            for (let i = 0; i < segs.length; i += 1) {
                let seg = segs[i];
                let spanStart = slatCoords.computeDateTop(seg.start, colDate);
                let spanEnd = Math.max(spanStart + (eventMinHeight || 0), // :(
                slatCoords.computeDateTop(seg.end, colDate));
                vcoords.push({
                    start: Math.round(spanStart),
                    end: Math.round(spanEnd), //
                });
            }
        }
        return vcoords;
    }
    function computeFgSegPlacements(segs, segVCoords, // might not have for every seg
    eventOrderStrict, eventMaxStack) {
        let segInputs = [];
        let dumbSegs = []; // segs without coords
        for (let i = 0; i < segs.length; i += 1) {
            let vcoords = segVCoords[i];
            if (vcoords) {
                segInputs.push({
                    index: i,
                    thickness: 1,
                    span: vcoords,
                });
            }
            else {
                dumbSegs.push(segs[i]);
            }
        }
        let _a = buildPositioning(segInputs, eventOrderStrict, eventMaxStack), segRects = _a.segRects, hiddenGroups = _a.hiddenGroups;
        let segPlacements = [];
        for (let _i = 0, segRects_1 = segRects; _i < segRects_1.length; _i++) {
            let segRect = segRects_1[_i];
            segPlacements.push({
                seg: segs[segRect.index],
                rect: segRect,
            });
        }
        for (let _b = 0, dumbSegs_1 = dumbSegs; _b < dumbSegs_1.length; _b++) {
            let dumbSeg = dumbSegs_1[_b];
            segPlacements.push({ seg: dumbSeg, rect: null });
        }
        return { segPlacements: segPlacements, hiddenGroups: hiddenGroups };
    }

    let DEFAULT_TIME_FORMAT$1 = createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        meridiem: false,
    });
    let TimeColEvent = /** @class */ (function (_super) {
        __extends(TimeColEvent, _super);
        function TimeColEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TimeColEvent.prototype.render = function () {
            let classNames = [
                'fc-timegrid-event',
                'fc-v-event',
            ];
            if (this.props.isShort) {
                classNames.push('fc-timegrid-event-short');
            }
            return (createElement(StandardEvent, __assign({}, this.props, { defaultTimeFormat: DEFAULT_TIME_FORMAT$1, extraClassNames: classNames })));
        };
        return TimeColEvent;
    }(BaseComponent));

    let TimeColMisc = /** @class */ (function (_super) {
        __extends(TimeColMisc, _super);
        function TimeColMisc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TimeColMisc.prototype.render = function () {
            let props = this.props;
            return (createElement(DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function (innerElRef, innerContent) { return (innerContent &&
                createElement("div", { className: "fc-timegrid-col-misc", ref: innerElRef }, innerContent)); }));
        };
        return TimeColMisc;
    }(BaseComponent));

    let TimeCol = /** @class */ (function (_super) {
        __extends(TimeCol, _super);
        function TimeCol() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sortEventSegs = memoize(sortEventSegs);
            return _this;
        }
        // TODO: memoize event-placement?
        TimeCol.prototype.render = function () {
            let _this = this;
            let _a = this, props = _a.props, context = _a.context;
            let isSelectMirror = context.options.selectMirror;
            let mirrorSegs = (props.eventDrag && props.eventDrag.segs) ||
                (props.eventResize && props.eventResize.segs) ||
                (isSelectMirror && props.dateSelectionSegs) ||
                [];
            let interactionAffectedInstances = // TODO: messy way to compute this
             (props.eventDrag && props.eventDrag.affectedInstances) ||
                (props.eventResize && props.eventResize.affectedInstances) ||
                {};
            let sortedFgSegs = this.sortEventSegs(props.fgEventSegs, context.options.eventOrder);
            return (createElement(DayCellRoot, { elRef: props.elRef, date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function (rootElRef, classNames, dataAttrs) { return (createElement("td", __assign({ ref: rootElRef, role: "gridcell", className: ['fc-timegrid-col'].concat(classNames, props.extraClassNames || []).join(' ') }, dataAttrs, props.extraDataAttrs),
                createElement("div", { className: "fc-timegrid-col-frame" },
                    createElement("div", { className: "fc-timegrid-col-bg" },
                        _this.renderFillSegs(props.businessHourSegs, 'non-business'),
                        _this.renderFillSegs(props.bgEventSegs, 'bg-event'),
                        _this.renderFillSegs(props.dateSelectionSegs, 'highlight')),
                    createElement("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)),
                    createElement("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror))),
                    createElement("div", { className: "fc-timegrid-now-indicator-container" }, _this.renderNowIndicator(props.nowIndicatorSegs)),
                    createElement(TimeColMisc, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps })))); }));
        };
        TimeCol.prototype.renderFgSegs = function (sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
            let props = this.props;
            if (props.forPrint) {
                return renderPlainFgSegs(sortedFgSegs, props);
            }
            return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting);
        };
        TimeCol.prototype.renderPositionedFgSegs = function (segs, // if not mirror, needs to be sorted
        segIsInvisible, isDragging, isResizing, isDateSelecting) {
            let _this = this;
            let _a = this.context.options, eventMaxStack = _a.eventMaxStack, eventShortHeight = _a.eventShortHeight, eventOrderStrict = _a.eventOrderStrict, eventMinHeight = _a.eventMinHeight;
            let _b = this.props, date = _b.date, slatCoords = _b.slatCoords, eventSelection = _b.eventSelection, todayRange = _b.todayRange, nowDate = _b.nowDate;
            let isMirror = isDragging || isResizing || isDateSelecting;
            let segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
            let _c = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack), segPlacements = _c.segPlacements, hiddenGroups = _c.hiddenGroups;
            return (createElement(Fragment, null,
                this.renderHiddenGroups(hiddenGroups, segs),
                segPlacements.map(function (segPlacement) {
                    let seg = segPlacement.seg, rect = segPlacement.rect;
                    let instanceId = seg.eventRange.instance.instanceId;
                    let isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
                    let vStyle = computeSegVStyle(rect && rect.span);
                    let hStyle = (!isMirror && rect) ? _this.computeSegHStyle(rect) : { left: 0, right: 0 };
                    let isInset = Boolean(rect) && rect.stackForward > 0;
                    let isShort = Boolean(rect) && (rect.span.end - rect.span.start) < eventShortHeight; // look at other places for this problem
                    return (createElement("div", { className: 'fc-timegrid-event-harness' +
                            (isInset ? ' fc-timegrid-event-harness-inset' : ''), key: instanceId, style: __assign(__assign({ visibility: isVisible ? '' : 'hidden' }, vStyle), hStyle) },
                        createElement(TimeColEvent, __assign({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, isShort: isShort }, getSegMeta(seg, todayRange, nowDate)))));
                })));
        };
        // will already have eventMinHeight applied because segInputs already had it
        TimeCol.prototype.renderHiddenGroups = function (hiddenGroups, segs) {
            let _a = this.props, extraDateSpan = _a.extraDateSpan, dateProfile = _a.dateProfile, todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
            return (createElement(Fragment, null, hiddenGroups.map(function (hiddenGroup) {
                let positionCss = computeSegVStyle(hiddenGroup.span);
                let hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
                return (createElement(TimeColMoreLink, { key: buildIsoString(computeEarliestSegStart(hiddenSegs)), hiddenSegs: hiddenSegs, top: positionCss.top, bottom: positionCss.bottom, extraDateSpan: extraDateSpan, dateProfile: dateProfile, todayRange: todayRange, nowDate: nowDate, eventSelection: eventSelection, eventDrag: eventDrag, eventResize: eventResize }));
            })));
        };
        TimeCol.prototype.renderFillSegs = function (segs, fillType) {
            let _a = this, props = _a.props, context = _a.context;
            let segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
            let children = segVCoords.map(function (vcoords, i) {
                let seg = segs[i];
                return (createElement("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-timegrid-bg-harness", style: computeSegVStyle(vcoords) }, fillType === 'bg-event' ?
                    createElement(BgEvent, __assign({ seg: seg }, getSegMeta(seg, props.todayRange, props.nowDate))) :
                    renderFill(fillType)));
            });
            return createElement(Fragment, null, children);
        };
        TimeCol.prototype.renderNowIndicator = function (segs) {
            let _a = this.props, slatCoords = _a.slatCoords, date = _a.date;
            if (!slatCoords) {
                return null;
            }
            return segs.map(function (seg, i) { return (createElement(NowIndicatorRoot, { isAxis: false, date: date, 
                // key doesn't matter. will only ever be one
                key: i }, function (rootElRef, classNames, innerElRef, innerContent) { return (createElement("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-line'].concat(classNames).join(' '), style: { top: slatCoords.computeDateTop(seg.start, date) } }, innerContent)); })); });
        };
        TimeCol.prototype.computeSegHStyle = function (segHCoords) {
            let _a = this.context, isRtl = _a.isRtl, options = _a.options;
            let shouldOverlap = options.slotEventOverlap;
            let nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
            let farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
            let left; // amount of space from left edge, a fraction of the total width
            let right; // amount of space from right edge, a fraction of the total width
            if (shouldOverlap) {
                // double the width, but don't go beyond the maximum forward coordinate (1.0)
                farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
            }
            if (isRtl) {
                left = 1 - farCoord;
                right = nearCoord;
            }
            else {
                left = nearCoord;
                right = 1 - farCoord;
            }
            let props = {
                zIndex: segHCoords.stackDepth + 1,
                left: left * 100 + '%',
                right: right * 100 + '%',
            };
            if (shouldOverlap && !segHCoords.stackForward) {
                // add padding to the edge so that forward stacked events don't cover the resizer's icon
                props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
            }
            return props;
        };
        return TimeCol;
    }(BaseComponent));
    function renderPlainFgSegs(sortedFgSegs, _a) {
        let todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
        let hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) ||
            (eventResize ? eventResize.affectedInstances : null) ||
            {};
        return (createElement(Fragment, null, sortedFgSegs.map(function (seg) {
            let instanceId = seg.eventRange.instance.instanceId;
            return (createElement("div", { key: instanceId, style: { visibility: hiddenInstances[instanceId] ? 'hidden' : '' } },
                createElement(TimeColEvent, __assign({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false }, getSegMeta(seg, todayRange, nowDate)))));
        })));
    }
    function computeSegVStyle(segVCoords) {
        if (!segVCoords) {
            return { top: '', bottom: '' };
        }
        return {
            top: segVCoords.start,
            bottom: -segVCoords.end,
        };
    }
    function compileSegsFromEntries(segEntries, allSegs) {
        return segEntries.map(function (segEntry) { return allSegs[segEntry.index]; });
    }

    let TimeColsContent = /** @class */ (function (_super) {
        __extends(TimeColsContent, _super);
        function TimeColsContent() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.splitFgEventSegs = memoize(splitSegsByCol);
            _this.splitBgEventSegs = memoize(splitSegsByCol);
            _this.splitBusinessHourSegs = memoize(splitSegsByCol);
            _this.splitNowIndicatorSegs = memoize(splitSegsByCol);
            _this.splitDateSelectionSegs = memoize(splitSegsByCol);
            _this.splitEventDrag = memoize(splitInteractionByCol);
            _this.splitEventResize = memoize(splitInteractionByCol);
            _this.rootElRef = createRef();
            _this.cellElRefs = new RefMap();
            return _this;
        }
        TimeColsContent.prototype.render = function () {
            let _this = this;
            let _a = this, props = _a.props, context = _a.context;
            let nowIndicatorTop = context.options.nowIndicator &&
                props.slatCoords &&
                props.slatCoords.safeComputeTop(props.nowDate); // might return void
            let colCnt = props.cells.length;
            let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
            let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
            let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
            let nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
            let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
            let eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
            let eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
            return (createElement("div", { className: "fc-timegrid-cols", ref: this.rootElRef },
                createElement("table", { role: "presentation", style: {
                        minWidth: props.tableMinWidth,
                        width: props.clientWidth,
                    } },
                    props.tableColGroupNode,
                    createElement("tbody", { role: "presentation" },
                        createElement("tr", { role: "row" },
                            props.axis && (createElement("td", { "aria-hidden": true, className: "fc-timegrid-col fc-timegrid-axis" },
                                createElement("div", { className: "fc-timegrid-col-frame" },
                                    createElement("div", { className: "fc-timegrid-now-indicator-container" }, typeof nowIndicatorTop === 'number' && (createElement(NowIndicatorRoot, { isAxis: true, date: props.nowDate }, function (rootElRef, classNames, innerElRef, innerContent) { return (createElement("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '), style: { top: nowIndicatorTop } }, innerContent)); })))))),
                            props.cells.map(function (cell, i) { return (createElement(TimeCol, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, nowDate: props.nowDate, todayRange: props.todayRange, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, fgEventSegs: fgEventSegsByRow[i], bgEventSegs: bgEventSegsByRow[i], businessHourSegs: businessHourSegsByRow[i], nowIndicatorSegs: nowIndicatorSegsByRow[i], dateSelectionSegs: dateSelectionSegsByRow[i], eventDrag: eventDragByRow[i], eventResize: eventResizeByRow[i], slatCoords: props.slatCoords, eventSelection: props.eventSelection, forPrint: props.forPrint })); }))))));
        };
        TimeColsContent.prototype.componentDidMount = function () {
            this.updateCoords();
        };
        TimeColsContent.prototype.componentDidUpdate = function () {
            this.updateCoords();
        };
        TimeColsContent.prototype.updateCoords = function () {
            let props = this.props;
            if (props.onColCoords &&
                props.clientWidth !== null // means sizing has stabilized
            ) {
                props.onColCoords(new PositionCache(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true, // horizontal
                false));
            }
        };
        return TimeColsContent;
    }(BaseComponent));
    function collectCellEls(elMap, cells) {
        return cells.map(function (cell) { return elMap[cell.key]; });
    }

    /* A component that renders one or more columns of vertical time slots
    ----------------------------------------------------------------------------------------------------------------------*/
    let TimeCols = /** @class */ (function (_super) {
        __extends(TimeCols, _super);
        function TimeCols() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.processSlotOptions = memoize(processSlotOptions);
            _this.state = {
                slatCoords: null,
            };
            _this.handleRootEl = function (el) {
                if (el) {
                    _this.context.registerInteractiveComponent(_this, {
                        el: el,
                        isHitComboAllowed: _this.props.isHitComboAllowed,
                    });
                }
                else {
                    _this.context.unregisterInteractiveComponent(_this);
                }
            };
            _this.handleScrollRequest = function (request) {
                let onScrollTopRequest = _this.props.onScrollTopRequest;
                let slatCoords = _this.state.slatCoords;
                if (onScrollTopRequest && slatCoords) {
                    if (request.time) {
                        let top_1 = slatCoords.computeTimeTop(request.time);
                        top_1 = Math.ceil(top_1); // zoom can give weird floating-point values. rather scroll a little bit further
                        if (top_1) {
                            top_1 += 1; // to overcome top border that slots beyond the first have. looks better
                        }
                        onScrollTopRequest(top_1);
                    }
                    return true;
                }
                return false;
            };
            _this.handleColCoords = function (colCoords) {
                _this.colCoords = colCoords;
            };
            _this.handleSlatCoords = function (slatCoords) {
                _this.setState({ slatCoords: slatCoords });
                if (_this.props.onSlatCoords) {
                    _this.props.onSlatCoords(slatCoords);
                }
            };
            return _this;
        }
        TimeCols.prototype.render = function () {
            let _a = this, props = _a.props, state = _a.state;
            return (createElement("div", { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
                    // these props are important to give this wrapper correct dimensions for interactions
                    // TODO: if we set it here, can we avoid giving to inner tables?
                    width: props.clientWidth,
                    minWidth: props.tableMinWidth,
                } },
                createElement(TimeColsSlats, { axis: props.axis, dateProfile: props.dateProfile, slatMetas: props.slatMetas, clientWidth: props.clientWidth, minHeight: props.expandRows ? props.clientHeight : '', tableMinWidth: props.tableMinWidth, tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */, onCoords: this.handleSlatCoords }),
                createElement(TimeColsContent, { cells: props.cells, axis: props.axis, dateProfile: props.dateProfile, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange, nowDate: props.nowDate, nowIndicatorSegs: props.nowIndicatorSegs, clientWidth: props.clientWidth, tableMinWidth: props.tableMinWidth, tableColGroupNode: props.tableColGroupNode, slatCoords: state.slatCoords, onColCoords: this.handleColCoords, forPrint: props.forPrint })));
        };
        TimeCols.prototype.componentDidMount = function () {
            this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
        };
        TimeCols.prototype.componentDidUpdate = function (prevProps) {
            this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
        };
        TimeCols.prototype.componentWillUnmount = function () {
            this.scrollResponder.detach();
        };
        TimeCols.prototype.queryHit = function (positionLeft, positionTop) {
            let _a = this.context, dateEnv = _a.dateEnv, options = _a.options;
            let colCoords = this.colCoords;
            let dateProfile = this.props.dateProfile;
            let slatCoords = this.state.slatCoords;
            let _b = this.processSlotOptions(this.props.slotDuration, options.snapDuration), snapDuration = _b.snapDuration, snapsPerSlot = _b.snapsPerSlot;
            let colIndex = colCoords.leftToIndex(positionLeft);
            let slatIndex = slatCoords.positions.topToIndex(positionTop);
            if (colIndex != null && slatIndex != null) {
                let cell = this.props.cells[colIndex];
                let slatTop = slatCoords.positions.tops[slatIndex];
                let slatHeight = slatCoords.positions.getHeight(slatIndex);
                let partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
                let localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
                let snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
                let dayDate = this.props.cells[colIndex].date;
                let time = addDurations(dateProfile.slotMinTime, multiplyDuration(snapDuration, snapIndex));
                let start = dateEnv.add(dayDate, time);
                let end = dateEnv.add(start, snapDuration);
                return {
                    dateProfile: dateProfile,
                    dateSpan: __assign({ range: { start: start, end: end }, allDay: false }, cell.extraDateSpan),
                    dayEl: colCoords.els[colIndex],
                    rect: {
                        left: colCoords.lefts[colIndex],
                        right: colCoords.rights[colIndex],
                        top: slatTop,
                        bottom: slatTop + slatHeight,
                    },
                    layer: 0,
                };
            }
            return null;
        };
        return TimeCols;
    }(DateComponent));
    function processSlotOptions(slotDuration, snapDurationOverride) {
        let snapDuration = snapDurationOverride || slotDuration;
        let snapsPerSlot = wholeDivideDurations(slotDuration, snapDuration);
        if (snapsPerSlot === null) {
            snapDuration = slotDuration;
            snapsPerSlot = 1;
            // TODO: say warning?
        }
        return { snapDuration: snapDuration, snapsPerSlot: snapsPerSlot };
    }

    let DayTimeColsSlicer = /** @class */ (function (_super) {
        __extends(DayTimeColsSlicer, _super);
        function DayTimeColsSlicer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DayTimeColsSlicer.prototype.sliceRange = function (range, dayRanges) {
            let segs = [];
            for (let col = 0; col < dayRanges.length; col += 1) {
                let segRange = intersectRanges(range, dayRanges[col]);
                if (segRange) {
                    segs.push({
                        start: segRange.start,
                        end: segRange.end,
                        isStart: segRange.start.valueOf() === range.start.valueOf(),
                        isEnd: segRange.end.valueOf() === range.end.valueOf(),
                        col: col,
                    });
                }
            }
            return segs;
        };
        return DayTimeColsSlicer;
    }(Slicer));

    let DayTimeCols = /** @class */ (function (_super) {
        __extends(DayTimeCols, _super);
        function DayTimeCols() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.buildDayRanges = memoize(buildDayRanges);
            _this.slicer = new DayTimeColsSlicer();
            _this.timeColsRef = createRef();
            return _this;
        }
        DayTimeCols.prototype.render = function () {
            let _this = this;
            let _a = this, props = _a.props, context = _a.context;
            let dateProfile = props.dateProfile, dayTableModel = props.dayTableModel;
            let isNowIndicator = context.options.nowIndicator;
            let dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
            // give it the first row of cells
            // TODO: would move this further down hierarchy, but sliceNowDate needs it
            return (createElement(NowTimer, { unit: isNowIndicator ? 'minute' : 'day' }, function (nowDate, todayRange) { return (createElement(TimeCols, __assign({ ref: _this.timeColsRef }, _this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), { forPrint: props.forPrint, axis: props.axis, dateProfile: dateProfile, slatMetas: props.slatMetas, slotDuration: props.slotDuration, cells: dayTableModel.cells[0], tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, clientWidth: props.clientWidth, clientHeight: props.clientHeight, expandRows: props.expandRows, nowDate: nowDate, nowIndicatorSegs: isNowIndicator && _this.slicer.sliceNowDate(nowDate, context, dayRanges), todayRange: todayRange, onScrollTopRequest: props.onScrollTopRequest, onSlatCoords: props.onSlatCoords }))); }));
        };
        return DayTimeCols;
    }(DateComponent));
    function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
        let ranges = [];
        for (let _i = 0, _a = dayTableModel.headerDates; _i < _a.length; _i++) {
            let date = _a[_i];
            ranges.push({
                start: dateEnv.add(date, dateProfile.slotMinTime),
                end: dateEnv.add(date, dateProfile.slotMaxTime),
            });
        }
        return ranges;
    }

    // potential nice values for the slot-duration and interval-duration
    // from largest to smallest
    let STOCK_SUB_DURATIONS = [
        { hours: 1 },
        { minutes: 30 },
        { minutes: 15 },
        { seconds: 30 },
        { seconds: 15 },
    ];
    function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
        let dayStart = new Date(0);
        let slatTime = slotMinTime;
        let slatIterator = createDuration(0);
        let labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
        let metas = [];
        while (asRoughMs(slatTime) < asRoughMs(slotMaxTime)) {
            let date = dateEnv.add(dayStart, slatTime);
            let isLabeled = wholeDivideDurations(slatIterator, labelInterval) !== null;
            metas.push({
                date: date,
                time: slatTime,
                key: date.toISOString(),
                isoTimeStr: formatIsoTimeString(date),
                isLabeled: isLabeled,
            });
            slatTime = addDurations(slatTime, slotDuration);
            slatIterator = addDurations(slatIterator, slotDuration);
        }
        return metas;
    }
    // Computes an automatic value for slotLabelInterval
    function computeLabelInterval(slotDuration) {
        let i;
        let labelInterval;
        let slotsPerLabel;
        // find the smallest stock label interval that results in more than one slots-per-label
        for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
            labelInterval = createDuration(STOCK_SUB_DURATIONS[i]);
            slotsPerLabel = wholeDivideDurations(labelInterval, slotDuration);
            if (slotsPerLabel !== null && slotsPerLabel > 1) {
                return labelInterval;
            }
        }
        return slotDuration; // fall back
    }

    let DayTimeColsView = /** @class */ (function (_super) {
        __extends(DayTimeColsView, _super);
        function DayTimeColsView() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.buildTimeColsModel = memoize(buildTimeColsModel);
            _this.buildSlatMetas = memoize(buildSlatMetas);
            return _this;
        }
        DayTimeColsView.prototype.render = function () {
            let _this = this;
            let _a = this.context, options = _a.options, dateEnv = _a.dateEnv, dateProfileGenerator = _a.dateProfileGenerator;
            let props = this.props;
            let dateProfile = props.dateProfile;
            let dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
            let splitProps = this.allDaySplitter.splitProps(props);
            let slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
            let dayMinWidth = options.dayMinWidth;
            let hasAttachedAxis = !dayMinWidth;
            let hasDetachedAxis = dayMinWidth;
            let headerContent = options.dayHeaders && (createElement(DayHeader, { dates: dayTableModel.headerDates, dateProfile: dateProfile, datesRepDistinctDays: true, renderIntro: hasAttachedAxis ? this.renderHeadAxis : null }));
            let allDayContent = (options.allDaySlot !== false) && (function (contentArg) { return (createElement(DayTable, __assign({}, splitProps.allDay, { dateProfile: dateProfile, dayTableModel: dayTableModel, nextDayThreshold: options.nextDayThreshold, tableMinWidth: contentArg.tableMinWidth, colGroupNode: contentArg.tableColGroupNode, renderRowIntro: hasAttachedAxis ? _this.renderTableRowAxis : null, showWeekNumbers: false, expandRows: false, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }, _this.getAllDayMaxEventProps()))); });
            let timeGridContent = function (contentArg) { return (createElement(DayTimeCols, __assign({}, splitProps.timed, { dayTableModel: dayTableModel, dateProfile: dateProfile, axis: hasAttachedAxis, slotDuration: options.slotDuration, slatMetas: slatMetas, forPrint: props.forPrint, tableColGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, onSlatCoords: _this.handleSlatCoords, expandRows: contentArg.expandRows, onScrollTopRequest: _this.handleScrollTopRequest }))); };
            return hasDetachedAxis
                ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords)
                : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
        };
        return DayTimeColsView;
    }(TimeColsView));
    function buildTimeColsModel(dateProfile, dateProfileGenerator) {
        let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
        return new DayTableModel(daySeries, false);
    }

    let OPTION_REFINERS$2 = {
        allDaySlot: Boolean,
    };

    let timeGridPlugin = createPlugin({
        initialView: 'timeGridWeek',
        optionRefiners: OPTION_REFINERS$2,
        views: {
            timeGrid: {
                component: DayTimeColsView,
                usesMinMaxTime: true,
                allDaySlot: true,
                slotDuration: '00:30:00',
                slotEventOverlap: true, // a bad name. confused with overlap/constraint system
            },
            timeGridDay: {
                type: 'timeGrid',
                duration: { days: 1 },
            },
            timeGridWeek: {
                type: 'timeGrid',
                duration: { weeks: 1 },
            },
        },
    });

    let ListViewHeaderRow = /** @class */ (function (_super) {
        __extends(ListViewHeaderRow, _super);
        function ListViewHeaderRow() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                textId: getUniqueDomId(),
            };
            return _this;
        }
        ListViewHeaderRow.prototype.render = function () {
            let _a = this.context, theme = _a.theme, dateEnv = _a.dateEnv, options = _a.options, viewApi = _a.viewApi;
            let _b = this.props, cellId = _b.cellId, dayDate = _b.dayDate, todayRange = _b.todayRange;
            let textId = this.state.textId;
            let dayMeta = getDateMeta(dayDate, todayRange);
            // will ever be falsy?
            let text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
            // will ever be falsy? also, BAD NAME "alt"
            let sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
            let hookProps = __assign({ date: dateEnv.toDate(dayDate), view: viewApi, textId: textId,
                text: text,
                sideText: sideText, navLinkAttrs: buildNavLinkAttrs(this.context, dayDate), sideNavLinkAttrs: buildNavLinkAttrs(this.context, dayDate, 'day', false) }, dayMeta);
            let classNames = ['fc-list-day'].concat(getDayClassNames(dayMeta, theme));
            // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
            return (createElement(RenderHook, { hookProps: hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInnerContent, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return (createElement("tr", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-date": formatDayString(dayDate) },
                createElement("th", { scope: "colgroup", colSpan: 3, id: cellId, "aria-labelledby": textId },
                    createElement("div", { className: 'fc-list-day-cushion ' + theme.getClass('tableCellShaded'), ref: innerElRef }, innerContent)))); }));
        };
        return ListViewHeaderRow;
    }(BaseComponent));
    function renderInnerContent(props) {
        return (createElement(Fragment, null,
            props.text && (createElement("a", __assign({ id: props.textId, className: "fc-list-day-text" }, props.navLinkAttrs), props.text)),
            props.sideText && ( /* not keyboard tabbable */createElement("a", __assign({ "aria-hidden": true, className: "fc-list-day-side-text" }, props.sideNavLinkAttrs), props.sideText))));
    }

    let DEFAULT_TIME_FORMAT = createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        meridiem: 'short',
    });
    let ListViewEventRow = /** @class */ (function (_super) {
        __extends(ListViewEventRow, _super);
        function ListViewEventRow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ListViewEventRow.prototype.render = function () {
            let _a = this, props = _a.props, context = _a.context;
            let seg = props.seg, timeHeaderId = props.timeHeaderId, eventHeaderId = props.eventHeaderId, dateHeaderId = props.dateHeaderId;
            let timeFormat = context.options.eventTimeFormat || DEFAULT_TIME_FORMAT;
            return (createElement(EventRoot, { seg: seg, timeText: "" // BAD. because of all-day content
                , disableDragging: true, disableResizing: true, defaultContent: function () { return renderEventInnerContent(seg, context); } /* weird */, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday, isSelected: props.isSelected, isDragging: props.isDragging, isResizing: props.isResizing, isDateSelecting: props.isDateSelecting }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) { return (createElement("tr", { className: ['fc-list-event', hookProps.event.url ? 'fc-event-forced-url' : ''].concat(classNames).join(' '), ref: rootElRef },
                buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId),
                createElement("td", { "aria-hidden": true, className: "fc-list-event-graphic" },
                    createElement("span", { className: "fc-list-event-dot", style: { borderColor: hookProps.borderColor || hookProps.backgroundColor } })),
                createElement("td", { ref: innerElRef, headers: eventHeaderId + " " + dateHeaderId, className: "fc-list-event-title" }, innerContent))); }));
        };
        return ListViewEventRow;
    }(BaseComponent));
    function renderEventInnerContent(seg, context) {
        let interactiveAttrs = getSegAnchorAttrs(seg, context);
        return (createElement("a", __assign({}, interactiveAttrs), seg.eventRange.def.title));
    }
    function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
        let options = context.options;
        if (options.displayEventTime !== false) {
            let eventDef = seg.eventRange.def;
            let eventInstance = seg.eventRange.instance;
            let doAllDay = false;
            let timeText = void 0;
            if (eventDef.allDay) {
                doAllDay = true;
            }
            else if (isMultiDayRange(seg.eventRange.range)) { // TODO: use (!isStart || !isEnd) instead?
                if (seg.isStart) {
                    timeText = buildSegTimeText(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
                }
                else if (seg.isEnd) {
                    timeText = buildSegTimeText(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
                }
                else {
                    doAllDay = true;
                }
            }
            else {
                timeText = buildSegTimeText(seg, timeFormat, context);
            }
            if (doAllDay) {
                let hookProps = {
                    text: context.options.allDayText,
                    view: context.viewApi,
                };
                return (createElement(RenderHook, { hookProps: hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return (createElement("td", { ref: rootElRef, headers: timeHeaderId + " " + dateHeaderId, className: ['fc-list-event-time'].concat(classNames).join(' ') }, innerContent)); }));
            }
            return (createElement("td", { className: "fc-list-event-time" }, timeText));
        }
        return null;
    }
    function renderAllDayInner(hookProps) {
        return hookProps.text;
    }

    /*
    Responsible for the scroller, and forwarding event-related actions into the "grid".
    */
    let ListView = /** @class */ (function (_super) {
        __extends(ListView, _super);
        function ListView() {
            let _this = _super !== null && _super.apply(this, arguments) || this;
            _this.computeDateLets = memoize(computeDateLets);
            _this.eventStoreToSegs = memoize(_this._eventStoreToSegs);
            _this.state = {
                timeHeaderId: getUniqueDomId(),
                eventHeaderId: getUniqueDomId(),
                dateHeaderIdRoot: getUniqueDomId(),
            };
            _this.setRootEl = function (rootEl) {
                if (rootEl) {
                    _this.context.registerInteractiveComponent(_this, {
                        el: rootEl,
                    });
                }
                else {
                    _this.context.unregisterInteractiveComponent(_this);
                }
            };
            return _this;
        }
        ListView.prototype.render = function () {
            let _this = this;
            let _a = this, props = _a.props, context = _a.context;
            let extraClassNames = [
                'fc-list',
                context.theme.getClass('table'),
                context.options.stickyHeaderDates !== false ? 'fc-list-sticky' : '',
            ];
            let _b = this.computeDateLets(props.dateProfile), dayDates = _b.dayDates, dayRanges = _b.dayRanges;
            let eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
            return (createElement(ViewRoot, { viewSpec: context.viewSpec, elRef: this.setRootEl }, function (rootElRef, classNames) { return (createElement("div", { ref: rootElRef, className: extraClassNames.concat(classNames).join(' ') },
                createElement(Scroller, { liquid: !props.isHeightAuto, overflowX: props.isHeightAuto ? 'visible' : 'hidden', overflowY: props.isHeightAuto ? 'visible' : 'auto' }, eventSegs.length > 0 ?
                    _this.renderSegList(eventSegs, dayDates) :
                    _this.renderEmptyMessage()))); }));
        };
        ListView.prototype.renderEmptyMessage = function () {
            let _a = this.context, options = _a.options, viewApi = _a.viewApi;
            let hookProps = {
                text: options.noEventsText,
                view: viewApi,
            };
            return (createElement(RenderHook, { hookProps: hookProps, classNames: options.noEventsClassNames, content: options.noEventsContent, defaultContent: renderNoEventsInner, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return (createElement("div", { className: ['fc-list-empty'].concat(classNames).join(' '), ref: rootElRef },
                createElement("div", { className: "fc-list-empty-cushion", ref: innerElRef }, innerContent))); }));
        };
        ListView.prototype.renderSegList = function (allSegs, dayDates) {
            let _a = this.context, theme = _a.theme, options = _a.options;
            let _b = this.state, timeHeaderId = _b.timeHeaderId, eventHeaderId = _b.eventHeaderId, dateHeaderIdRoot = _b.dateHeaderIdRoot;
            let segsByDay = groupSegsByDay(allSegs); // sparse array
            return (createElement(NowTimer, { unit: "day" }, function (nowDate, todayRange) {
                let innerNodes = [];
                for (let dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
                    let daySegs = segsByDay[dayIndex];
                    if (daySegs) { // sparse array, so might be undefined
                        let dayStr = formatDayString(dayDates[dayIndex]);
                        let dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
                        // append a day header
                        innerNodes.push(createElement(ListViewHeaderRow, { key: dayStr, cellId: dateHeaderId, dayDate: dayDates[dayIndex], todayRange: todayRange }));
                        daySegs = sortEventSegs(daySegs, options.eventOrder);
                        for (let _i = 0, daySegs_1 = daySegs; _i < daySegs_1.length; _i++) {
                            let seg = daySegs_1[_i];
                            innerNodes.push(createElement(ListViewEventRow, __assign({ key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */, seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, timeHeaderId: timeHeaderId, eventHeaderId: eventHeaderId, dateHeaderId: dateHeaderId }, getSegMeta(seg, todayRange, nowDate))));
                        }
                    }
                }
                return (createElement("table", { className: 'fc-list-table ' + theme.getClass('table') },
                    createElement("thead", null,
                        createElement("tr", null,
                            createElement("th", { scope: "col", id: timeHeaderId }, options.timeHint),
                            createElement("th", { scope: "col", "aria-hidden": true }),
                            createElement("th", { scope: "col", id: eventHeaderId }, options.eventHint))),
                    createElement("tbody", null, innerNodes)));
            }));
        };
        ListView.prototype._eventStoreToSegs = function (eventStore, eventUiBases, dayRanges) {
            return this.eventRangesToSegs(sliceEventStore(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
        };
        ListView.prototype.eventRangesToSegs = function (eventRanges, dayRanges) {
            let segs = [];
            for (let _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
                let eventRange = eventRanges_1[_i];
                segs.push.apply(segs, this.eventRangeToSegs(eventRange, dayRanges));
            }
            return segs;
        };
        ListView.prototype.eventRangeToSegs = function (eventRange, dayRanges) {
            let dateEnv = this.context.dateEnv;
            let nextDayThreshold = this.context.options.nextDayThreshold;
            let range = eventRange.range;
            let allDay = eventRange.def.allDay;
            let dayIndex;
            let segRange;
            let seg;
            let segs = [];
            for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
                segRange = intersectRanges(range, dayRanges[dayIndex]);
                if (segRange) {
                    seg = {
                        component: this,
                        eventRange: eventRange,
                        start: segRange.start,
                        end: segRange.end,
                        isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                        isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                        dayIndex: dayIndex,
                    };
                    segs.push(seg);
                    // detect when range won't go fully into the next day,
                    // and mutate the latest seg to the be the end.
                    if (!seg.isEnd && !allDay &&
                        dayIndex + 1 < dayRanges.length &&
                        range.end <
                            dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                        seg.end = range.end;
                        seg.isEnd = true;
                        break;
                    }
                }
            }
            return segs;
        };
        return ListView;
    }(DateComponent));
    function renderNoEventsInner(hookProps) {
        return hookProps.text;
    }
    function computeDateLets(dateProfile) {
        let dayStart = startOfDay(dateProfile.renderRange.start);
        let viewEnd = dateProfile.renderRange.end;
        let dayDates = [];
        let dayRanges = [];
        while (dayStart < viewEnd) {
            dayDates.push(dayStart);
            dayRanges.push({
                start: dayStart,
                end: addDays(dayStart, 1),
            });
            dayStart = addDays(dayStart, 1);
        }
        return { dayDates: dayDates, dayRanges: dayRanges };
    }
    // Returns a sparse array of arrays, segs grouped by their dayIndex
    function groupSegsByDay(segs) {
        let segsByDay = []; // sparse array
        let i;
        let seg;
        for (i = 0; i < segs.length; i += 1) {
            seg = segs[i];
            (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
                .push(seg);
        }
        return segsByDay;
    }

    let OPTION_REFINERS$1 = {
        listDayFormat: createFalsableFormatter,
        listDaySideFormat: createFalsableFormatter,
        noEventsClassNames: identity,
        noEventsContent: identity,
        noEventsDidMount: identity,
        noEventsWillUnmount: identity,
        // noEventsText is defined in base options
    };
    function createFalsableFormatter(input) {
        return input === false ? null : createFormatter(input);
    }

    let listPlugin = createPlugin({
        optionRefiners: OPTION_REFINERS$1,
        views: {
            list: {
                component: ListView,
                buttonTextKey: 'list',
                listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' }, // like "January 1, 2016"
            },
            listDay: {
                type: 'list',
                duration: { days: 1 },
                listDayFormat: { weekday: 'long' }, // day-of-week is all we need. full date is probably in headerToolbar
            },
            listWeek: {
                type: 'list',
                duration: { weeks: 1 },
                listDayFormat: { weekday: 'long' },
                listDaySideFormat: { month: 'long', day: 'numeric', year: 'numeric' },
            },
            listMonth: {
                type: 'list',
                duration: { month: 1 },
                listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
            },
            listYear: {
                type: 'list',
                duration: { year: 1 },
                listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
            },
        },
    });

    let BootstrapTheme$1 = /** @class */ (function (_super) {
        __extends(BootstrapTheme, _super);
        function BootstrapTheme() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BootstrapTheme;
    }(Theme));
    BootstrapTheme$1.prototype.classes = {
        root: 'fc-theme-bootstrap',
        table: 'table-bordered',
        tableCellShaded: 'table-active',
        buttonGroup: 'btn-group',
        button: 'btn btn-primary',
        buttonActive: 'active',
        popover: 'popover',
        popoverHeader: 'popover-header',
        popoverContent: 'popover-body',
    };
    BootstrapTheme$1.prototype.baseIconClass = 'fa';
    BootstrapTheme$1.prototype.iconClasses = {
        close: 'fa-times',
        prev: 'fa-chevron-left',
        next: 'fa-chevron-right',
        prevYear: 'fa-angle-double-left',
        nextYear: 'fa-angle-double-right',
    };
    BootstrapTheme$1.prototype.rtlIconClasses = {
        prev: 'fa-chevron-right',
        next: 'fa-chevron-left',
        prevYear: 'fa-angle-double-right',
        nextYear: 'fa-angle-double-left',
    };
    BootstrapTheme$1.prototype.iconOverrideOption = 'bootstrapFontAwesome'; // TODO: make TS-friendly. move the option-processing into this plugin
    BootstrapTheme$1.prototype.iconOverrideCustomButtonOption = 'bootstrapFontAwesome';
    BootstrapTheme$1.prototype.iconOverridePrefix = 'fa-';
    let plugin$1 = createPlugin({
        themeClasses: {
            bootstrap: BootstrapTheme$1,
        },
    });

    let BootstrapTheme = /** @class */ (function (_super) {
        __extends(BootstrapTheme, _super);
        function BootstrapTheme() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BootstrapTheme;
    }(Theme));
    BootstrapTheme.prototype.classes = {
        root: 'fc-theme-bootstrap5',
        tableCellShaded: 'fc-theme-bootstrap5-shaded',
        buttonGroup: 'btn-group',
        button: 'btn btn-primary',
        buttonActive: 'active',
        popover: 'popover',
        popoverHeader: 'popover-header',
        popoverContent: 'popover-body',
    };
    BootstrapTheme.prototype.baseIconClass = 'bi';
    BootstrapTheme.prototype.iconClasses = {
        close: 'bi-x-lg',
        prev: 'bi-chevron-left',
        next: 'bi-chevron-right',
        prevYear: 'bi-chevron-double-left',
        nextYear: 'bi-chevron-double-right',
    };
    BootstrapTheme.prototype.rtlIconClasses = {
        prev: 'bi-chevron-right',
        next: 'bi-chevron-left',
        prevYear: 'bi-chevron-double-right',
        nextYear: 'bi-chevron-double-left',
    };
    // wtf
    BootstrapTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly
    BootstrapTheme.prototype.iconOverrideCustomButtonOption = 'icon';
    BootstrapTheme.prototype.iconOverridePrefix = 'bi-';
    let plugin = createPlugin({
        themeClasses: {
            bootstrap5: BootstrapTheme,
        },
    });

    // rename this file to options.ts like other packages?
    let OPTION_REFINERS = {
        googleCalendarApiKey: String,
    };

    let EVENT_SOURCE_REFINERS = {
        googleCalendarApiKey: String,
        googleCalendarId: String,
        googleCalendarApiBase: String,
        extraParams: identity,
    };

    // TODO: expose somehow
    let API_BASE = 'https://www.googleapis.com/calendar/v3/calendars';
    let eventSourceDef = {
        parseMeta: function (refined) {
            let googleCalendarId = refined.googleCalendarId;
            if (!googleCalendarId && refined.url) {
                googleCalendarId = parseGoogleCalendarId(refined.url);
            }
            if (googleCalendarId) {
                return {
                    googleCalendarId: googleCalendarId,
                    googleCalendarApiKey: refined.googleCalendarApiKey,
                    googleCalendarApiBase: refined.googleCalendarApiBase,
                    extraParams: refined.extraParams,
                };
            }
            return null;
        },
        fetch: function (arg, onSuccess, onFailure) {
            let _a = arg.context, dateEnv = _a.dateEnv, options = _a.options;
            let meta = arg.eventSource.meta;
            let apiKey = meta.googleCalendarApiKey || options.googleCalendarApiKey;
            if (!apiKey) {
                onFailure({
                    message: 'Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/',
                });
            }
            else {
                let url = buildUrl(meta);
                // TODO: make DRY with json-feed-event-source
                let extraParams = meta.extraParams;
                let extraParamsObj = typeof extraParams === 'function' ? extraParams() : extraParams;
                let requestParams_1 = buildRequestParams(arg.range, apiKey, extraParamsObj, dateEnv);
                requestJson('GET', url, requestParams_1, function (body, xhr) {
                    if (body.error) {
                        onFailure({
                            message: 'Google Calendar API: ' + body.error.message,
                            errors: body.error.errors,
                            xhr: xhr,
                        });
                    }
                    else {
                        onSuccess({
                            rawEvents: gcalItemsToRawEventDefs(body.items, requestParams_1.timeZone),
                            xhr: xhr,
                        });
                    }
                }, function (message, xhr) {
                    onFailure({ message: message, xhr: xhr });
                });
            }
        },
    };
    function parseGoogleCalendarId(url) {
        let match;
        // detect if the ID was specified as a single string.
        // will match calendars like "asdf1234@calendar.google.com" in addition to person email calendars.
        if (/^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(url)) {
            return url;
        }
        if ((match = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(url)) ||
            (match = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(url))) {
            return decodeURIComponent(match[1]);
        }
        return null;
    }
    function buildUrl(meta) {
        let apiBase = meta.googleCalendarApiBase;
        if (!apiBase) {
            apiBase = API_BASE;
        }
        return apiBase + '/' + encodeURIComponent(meta.googleCalendarId) + '/events';
    }
    function buildRequestParams(range, apiKey, extraParams, dateEnv) {
        let params;
        let startStr;
        let endStr;
        if (dateEnv.canComputeOffset) {
            // strings will naturally have offsets, which GCal needs
            startStr = dateEnv.formatIso(range.start);
            endStr = dateEnv.formatIso(range.end);
        }
        else {
            // when timezone isn't known, we don't know what the UTC offset should be, so ask for +/- 1 day
            // from the UTC day-start to guarantee we're getting all the events
            // (start/end will be UTC-coerced dates, so toISOString is okay)
            startStr = addDays(range.start, -1).toISOString();
            endStr = addDays(range.end, 1).toISOString();
        }
        params = __assign(__assign({}, (extraParams || {})), { key: apiKey, timeMin: startStr, timeMax: endStr, singleEvents: true, maxResults: 9999 });
        if (dateEnv.timeZone !== 'local') {
            params.timeZone = dateEnv.timeZone;
        }
        return params;
    }
    function gcalItemsToRawEventDefs(items, gcalTimezone) {
        return items.map(function (item) { return gcalItemToRawEventDef(item, gcalTimezone); });
    }
    function gcalItemToRawEventDef(item, gcalTimezone) {
        let url = item.htmlLink || null;
        // make the URLs for each event show times in the correct timezone
        if (url && gcalTimezone) {
            url = injectQsComponent(url, 'ctz=' + gcalTimezone);
        }
        return {
            id: item.id,
            title: item.summary,
            start: item.start.dateTime || item.start.date,
            end: item.end.dateTime || item.end.date,
            url: url,
            location: item.location,
            description: item.description,
            attachments: item.attachments || [],
            extendedProps: (item.extendedProperties || {}).shared || {},
        };
    }
    // Injects a string like "arg=value" into the querystring of a URL
    // TODO: move to a general util file?
    function injectQsComponent(url, component) {
        // inject it after the querystring but before the fragment
        return url.replace(/(\?.*?)?(#|$)/, function (whole, qs, hash) { return (qs ? qs + '&' : '?') + component + hash; });
    }
    let googleCalendarPlugin = createPlugin({
        eventSourceDefs: [eventSourceDef],
        optionRefiners: OPTION_REFINERS,
        eventSourceRefiners: EVENT_SOURCE_REFINERS,
    });

    globalPlugins.push(interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, plugin$1, plugin, googleCalendarPlugin);

    exports.BASE_OPTION_DEFAULTS = BASE_OPTION_DEFAULTS;
    exports.BASE_OPTION_REFINERS = BASE_OPTION_REFINERS;
    exports.BaseComponent = BaseComponent;
    exports.BgEvent = BgEvent;
    exports.BootstrapTheme = BootstrapTheme$1;
    exports.Calendar = Calendar;
    exports.CalendarApi = CalendarApi;
    exports.CalendarContent = CalendarContent;
    exports.CalendarDataManager = CalendarDataManager;
    exports.CalendarDataProvider = CalendarDataProvider;
    exports.CalendarRoot = CalendarRoot;
    exports.Component = Component;
    exports.ContentHook = ContentHook;
    exports.CustomContentRenderContext = CustomContentRenderContext;
    exports.DateComponent = DateComponent;
    exports.DateEnv = DateEnv;
    exports.DateProfileGenerator = DateProfileGenerator;
    exports.DayCellContent = DayCellContent;
    exports.DayCellRoot = DayCellRoot;
    exports.DayGridView = DayTableView;
    exports.DayHeader = DayHeader;
    exports.DaySeriesModel = DaySeriesModel;
    exports.DayTable = DayTable;
    exports.DayTableModel = DayTableModel;
    exports.DayTableSlicer = DayTableSlicer;
    exports.DayTimeCols = DayTimeCols;
    exports.DayTimeColsSlicer = DayTimeColsSlicer;
    exports.DayTimeColsView = DayTimeColsView;
    exports.DelayedRunner = DelayedRunner;
    exports.Draggable = ExternalDraggable;
    exports.ElementDragging = ElementDragging;
    exports.ElementScrollController = ElementScrollController;
    exports.Emitter = Emitter;
    exports.EventApi = EventApi;
    exports.EventRoot = EventRoot;
    exports.EventSourceApi = EventSourceApi;
    exports.FeaturefulElementDragging = FeaturefulElementDragging;
    exports.Fragment = Fragment;
    exports.Interaction = Interaction;
    exports.ListView = ListView;
    exports.MoreLinkRoot = MoreLinkRoot;
    exports.MountHook = MountHook;
    exports.NamedTimeZoneImpl = NamedTimeZoneImpl;
    exports.NowIndicatorRoot = NowIndicatorRoot;
    exports.NowTimer = NowTimer;
    exports.PointerDragging = PointerDragging;
    exports.PositionCache = PositionCache;
    exports.RefMap = RefMap;
    exports.RenderHook = RenderHook;
    exports.ScrollController = ScrollController;
    exports.ScrollResponder = ScrollResponder;
    exports.Scroller = Scroller;
    exports.SegHierarchy = SegHierarchy;
    exports.SimpleScrollGrid = SimpleScrollGrid;
    exports.Slicer = Slicer;
    exports.Splitter = Splitter;
    exports.StandardEvent = StandardEvent;
    exports.Table = Table;
    exports.TableDateCell = TableDateCell;
    exports.TableDowCell = TableDowCell;
    exports.TableView = TableView;
    exports.Theme = Theme;
    exports.ThirdPartyDraggable = ThirdPartyDraggable;
    exports.TimeCols = TimeCols;
    exports.TimeColsSlatsCoords = TimeColsSlatsCoords;
    exports.TimeColsView = TimeColsView;
    exports.ViewApi = ViewApi;
    exports.ViewContextType = ViewContextType;
    exports.ViewRoot = ViewRoot;
    exports.WeekNumberRoot = WeekNumberRoot;
    exports.WindowScrollController = WindowScrollController;
    exports.addDays = addDays;
    exports.addDurations = addDurations;
    exports.addMs = addMs;
    exports.addWeeks = addWeeks;
    exports.allowContextMenu = allowContextMenu;
    exports.allowSelection = allowSelection;
    exports.applyMutationToEventStore = applyMutationToEventStore;
    exports.applyStyle = applyStyle;
    exports.applyStyleProp = applyStyleProp;
    exports.asCleanDays = asCleanDays;
    exports.asRoughMinutes = asRoughMinutes;
    exports.asRoughMs = asRoughMs;
    exports.asRoughSeconds = asRoughSeconds;
    exports.binarySearch = binarySearch;
    exports.buildClassNameNormalizer = buildClassNameNormalizer;
    exports.buildDayRanges = buildDayRanges;
    exports.buildDayTableModel = buildDayTableModel;
    exports.buildEntryKey = buildEntryKey;
    exports.buildEventApis = buildEventApis;
    exports.buildEventRangeKey = buildEventRangeKey;
    exports.buildHashFromArray = buildHashFromArray;
    exports.buildIsoString = buildIsoString;
    exports.buildNavLinkAttrs = buildNavLinkAttrs;
    exports.buildSegCompareObj = buildSegCompareObj;
    exports.buildSegTimeText = buildSegTimeText;
    exports.buildSlatMetas = buildSlatMetas;
    exports.buildTimeColsModel = buildTimeColsModel;
    exports.collectFromHash = collectFromHash;
    exports.combineEventUis = combineEventUis;
    exports.compareByFieldSpec = compareByFieldSpec;
    exports.compareByFieldSpecs = compareByFieldSpecs;
    exports.compareNumbers = compareNumbers;
    exports.compareObjs = compareObjs;
    exports.computeEarliestSegStart = computeEarliestSegStart;
    exports.computeEdges = computeEdges;
    exports.computeFallbackHeaderFormat = computeFallbackHeaderFormat;
    exports.computeHeightAndMargins = computeHeightAndMargins;
    exports.computeInnerRect = computeInnerRect;
    exports.computeRect = computeRect;
    exports.computeSegDraggable = computeSegDraggable;
    exports.computeSegEndResizable = computeSegEndResizable;
    exports.computeSegStartResizable = computeSegStartResizable;
    exports.computeShrinkWidth = computeShrinkWidth;
    exports.computeSmallestCellWidth = computeSmallestCellWidth;
    exports.computeVisibleDayRange = computeVisibleDayRange;
    exports.config = config;
    exports.constrainPoint = constrainPoint;
    exports.createAriaClickAttrs = createAriaClickAttrs;
    exports.createContext = createContext;
    exports.createDuration = createDuration;
    exports.createElement = createElement;
    exports.createEmptyEventStore = createEmptyEventStore;
    exports.createEventInstance = createEventInstance;
    exports.createEventUi = createEventUi;
    exports.createFormatter = createFormatter;
    exports.createPlugin = createPlugin;
    exports.createPortal = createPortal;
    exports.createRef = createRef;
    exports.diffDates = diffDates;
    exports.diffDayAndTime = diffDayAndTime;
    exports.diffDays = diffDays;
    exports.diffPoints = diffPoints;
    exports.diffWeeks = diffWeeks;
    exports.diffWholeDays = diffWholeDays;
    exports.diffWholeWeeks = diffWholeWeeks;
    exports.disableCursor = disableCursor;
    exports.elementClosest = elementClosest;
    exports.elementMatches = elementMatches;
    exports.enableCursor = enableCursor;
    exports.eventTupleToStore = eventTupleToStore;
    exports.filterEventStoreDefs = filterEventStoreDefs;
    exports.filterHash = filterHash;
    exports.findDirectChildren = findDirectChildren;
    exports.findElements = findElements;
    exports.flexibleCompare = flexibleCompare;
    exports.flushSync = flushSync;
    exports.formatDate = formatDate;
    exports.formatDayString = formatDayString;
    exports.formatIsoTimeString = formatIsoTimeString;
    exports.formatRange = formatRange;
    exports.getAllowYScrolling = getAllowYScrolling;
    exports.getCanVGrowWithinCell = getCanVGrowWithinCell;
    exports.getClippingParents = getClippingParents;
    exports.getDateMeta = getDateMeta;
    exports.getDayClassNames = getDayClassNames;
    exports.getDefaultEventEnd = getDefaultEventEnd;
    exports.getElRoot = getElRoot;
    exports.getElSeg = getElSeg;
    exports.getEntrySpanEnd = getEntrySpanEnd;
    exports.getEventClassNames = getEventClassNames;
    exports.getEventTargetViaRoot = getEventTargetViaRoot;
    exports.getIsRtlScrollbarOnLeft = getIsRtlScrollbarOnLeft;
    exports.getRectCenter = getRectCenter;
    exports.getRelevantEvents = getRelevantEvents;
    exports.getScrollGridClassNames = getScrollGridClassNames;
    exports.getScrollbarWidths = getScrollbarWidths;
    exports.getSectionClassNames = getSectionClassNames;
    exports.getSectionHasLiquidHeight = getSectionHasLiquidHeight;
    exports.getSegAnchorAttrs = getSegAnchorAttrs;
    exports.getSegMeta = getSegMeta;
    exports.getSlotClassNames = getSlotClassNames;
    exports.getStickyFooterScrollbar = getStickyFooterScrollbar;
    exports.getStickyHeaderDates = getStickyHeaderDates;
    exports.getUnequalProps = getUnequalProps;
    exports.getUniqueDomId = getUniqueDomId;
    exports.globalLocales = globalLocales;
    exports.globalPlugins = globalPlugins;
    exports.greatestDurationDenominator = greatestDurationDenominator;
    exports.groupIntersectingEntries = groupIntersectingEntries;
    exports.guid = guid;
    exports.hasBgRendering = hasBgRendering;
    exports.hasShrinkWidth = hasShrinkWidth;
    exports.identity = identity;
    exports.interactionSettingsStore = interactionSettingsStore;
    exports.interactionSettingsToStore = interactionSettingsToStore;
    exports.intersectRanges = intersectRanges;
    exports.intersectRects = intersectRects;
    exports.intersectSpans = intersectSpans;
    exports.isArraysEqual = isArraysEqual;
    exports.isColPropsEqual = isColPropsEqual;
    exports.isDateSelectionValid = isDateSelectionValid;
    exports.isDateSpansEqual = isDateSpansEqual;
    exports.isInt = isInt;
    exports.isInteractionValid = isInteractionValid;
    exports.isMultiDayRange = isMultiDayRange;
    exports.isPropsEqual = isPropsEqual;
    exports.isPropsValid = isPropsValid;
    exports.isValidDate = isValidDate;
    exports.joinSpans = joinSpans;
    exports.listenBySelector = listenBySelector;
    exports.mapHash = mapHash;
    exports.memoize = memoize;
    exports.memoizeArraylike = memoizeArraylike;
    exports.memoizeHashlike = memoizeHashlike;
    exports.memoizeObjArg = memoizeObjArg;
    exports.mergeEventStores = mergeEventStores;
    exports.multiplyDuration = multiplyDuration;
    exports.padStart = padStart;
    exports.parseBusinessHours = parseBusinessHours;
    exports.parseClassNames = parseClassNames;
    exports.parseDragMeta = parseDragMeta;
    exports.parseEventDef = parseEventDef;
    exports.parseFieldSpecs = parseFieldSpecs;
    exports.parseMarker = parse;
    exports.pointInsideRect = pointInsideRect;
    exports.preventContextMenu = preventContextMenu;
    exports.preventDefault = preventDefault;
    exports.preventSelection = preventSelection;
    exports.rangeContainsMarker = rangeContainsMarker;
    exports.rangeContainsRange = rangeContainsRange;
    exports.rangesEqual = rangesEqual;
    exports.rangesIntersect = rangesIntersect;
    exports.refineEventDef = refineEventDef;
    exports.refineProps = refineProps;
    exports.removeElement = removeElement;
    exports.removeExact = removeExact;
    exports.render = render;
    exports.renderChunkContent = renderChunkContent;
    exports.renderFill = renderFill;
    exports.renderMicroColGroup = renderMicroColGroup;
    exports.renderScrollShim = renderScrollShim;
    exports.requestJson = requestJson;
    exports.sanitizeShrinkWidth = sanitizeShrinkWidth;
    exports.setElSeg = setElSeg;
    exports.setRef = setRef;
    exports.sliceEventStore = sliceEventStore;
    exports.sliceEvents = sliceEvents;
    exports.sortEventSegs = sortEventSegs;
    exports.startOfDay = startOfDay;
    exports.translateRect = translateRect;
    exports.triggerDateSelect = triggerDateSelect;
    exports.unmountComponentAtNode = unmountComponentAtNode;
    exports.unpromisify = unpromisify;
    exports.version = version;
    exports.whenTransitionDone = whenTransitionDone;
    exports.wholeDivideDurations = wholeDivideDurations;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
