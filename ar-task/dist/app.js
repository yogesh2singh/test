!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";(function(e){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._events={}}return e.prototype.on=function(e,t,n){void 0===n&&(n={}),this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})},e.prototype.off=function(e,t){var n=this._events[e];n&&((n=n.filter(function(e){return e.fn!==t})).length?this._events[e]=n:delete this._events[e])},e.prototype.run=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=this._events[e];return console.assert(!!a,"No subscriber for event: "+e),a&&((a=a.filter(function(r){var a=r.fn,o=r.options;return o.delay?t.delay(e,a,n,o):a.apply(t,n),!r.options.once})).length?this._events[e]=a:delete this._events[e]),a?a.length:0},e.prototype.once=function(e,t,r){void 0===r&&(r={}),this.on(e,t,n({},r,{once:!0}))},e.prototype.delay=function(e,t,n,r){var a=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),t.apply(a,n)},r.delay)},e}();t.App=r;var a,o="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e;o.app&&o._AppRunVersions?a=o.app:(a=new r,o.app=a,o._AppRunVersions="AppRun-1"),t.default=a}).call(this,n(3))},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(0));t.app=o.default;var i=n(5),s=n(7);t.Component=s.Component;var u=n(2);t.on=u.on,t.update=u.update,t.event=u.update;var c=n(9);t.ROUTER_EVENT=c.ROUTER_EVENT,t.ROUTER_404_EVENT=c.ROUTER_404_EVENT,o.default.createElement=i.createElement,o.default.render=i.render,o.default.Fragment=i.Fragment,o.default.start=function(e,t,n,a,o){var i=r({},o,{render:!0,global_event:!0}),u=new s.Component(t,n,a);return o&&o.rendered&&(u.rendered=o.rendered),u.mount(e,i),u};var l=function(e){};o.default.on("$",l),o.default.on("debug",function(e){return l}),o.default.on(c.ROUTER_EVENT,l),o.default.on("#",l),o.default.route=c.route,o.default.on("route",function(e){return o.default.route&&o.default.route(e)}),"object"==typeof document&&document.addEventListener("DOMContentLoaded",function(){o.default.route===c.route&&(window.onpopstate=function(){return c.route(location.hash)},c.route(location.hash))}),t.default=o.default,"object"==typeof window&&(window.Component=s.Component,window.React=o.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect={meta:new WeakMap,defineMetadata:function(e,t,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[e]=t},getMetadataKeys:function(e){return e=Object.getPrototypeOf(e),this.meta.get(e)?Object.keys(this.meta.get(e)):[]},getMetadata:function(e,t){return t=Object.getPrototypeOf(t),this.meta.get(t)?this.meta.get(t)[e]:null}},t.update=function(e,n){return void 0===n&&(n={}),function(r,a,o){var i=e?e.toString():a;return t.Reflect.defineMetadata("apprun-update:"+i,{name:i,key:a,options:n},r),o}},t.on=function(e,n){return void 0===n&&(n={}),function(r,a){var o=e?e.toString():a;t.Reflect.defineMetadata("apprun-update:"+o,{name:o,key:a,options:n},r)}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(6)),o="_props";function i(e){var t=[],n=function(e){null!=e&&""!==e&&!1!==e&&t.push("function"==typeof e||"object"==typeof e?e:""+e)};return e&&e.forEach(function(e){Array.isArray(e)?e.forEach(function(e){return n(e)}):n(e)}),t}t.createElement=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=i(n);if("string"==typeof e)return{tag:e,props:t,children:a};if(Array.isArray(e))return e;if(void 0===e&&n)return a;if(Object.getPrototypeOf(e).__isAppRunComponent)return{tag:e,props:t,children:a};if("function"==typeof e)return e(t,a);throw new Error("Unknown tag in vdom "+e)};var s={};function u(e,t,n){void 0===n&&(n={}),null!=t&&(t=a.default(t,n),e&&(Array.isArray(t)?l(e,t):l(e,[t])))}function c(e,t){console.assert(!!e),function(e,t){var n=e.nodeName,r=""+(t.tag||"");return n.toUpperCase()===r.toUpperCase()}(e,t)?(l(e,t.children),p(e,t.props)):e.parentNode.replaceChild(d(t),e)}function l(e,t){for(var n=Math.min(e.childNodes.length,t.length),r=0;r<n;r++){var a=t[r],o=e.childNodes[r];if(a instanceof HTMLElement)e.insertBefore(a,o);else if("string"==typeof a)o.textContent!==a&&(3===o.nodeType?o.textContent=a:e.replaceChild(f(a),o));else{var i=a.props&&a.props.key;if(i)if(o.key===i)c(e.childNodes[r],a);else{var u=s[i];u?(e.insertBefore(u,o),e.appendChild(o),c(e.childNodes[r],a)):e.insertBefore(d(a),o)}else c(e.childNodes[r],a)}}for(var l=e.childNodes.length;l>n;)e.removeChild(e.lastChild),l--;if(t.length>n){var p=document.createDocumentFragment();for(r=n;r<t.length;r++)p.appendChild(d(t[r]));e.appendChild(p)}}function f(e){if(0===e.indexOf("_html:")){var t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",e.substring(6)),t}return document.createTextNode(e)}function d(e,t){if(void 0===t&&(t=!1),console.assert(null!=e),"string"==typeof e)return f(e);if(!e.tag||"function"==typeof e.tag)return f(JSON.stringify(e));var n=(t=t||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);return p(n,e.props),e.children&&e.children.forEach(function(e){return n.appendChild(d(e,t))}),n}function p(e,t){console.assert(!!e);var n=e[o]||{};for(var r in t=function(e,t){t.class=t.class||t.className,delete t.className;var n={};return e&&Object.keys(e).forEach(function(e){return n[e]=null}),t&&Object.keys(t).forEach(function(e){return n[e]=t[e]}),n}(n,t||{}),e[o]=t,t){var a=t[r];if("style"===r)for(var i in e.style.cssText&&(e.style.cssText=""),a)e.style[i]!==a[i]&&(e.style[i]=a[i]);else if(r.startsWith("data-")){var u=r.substring(5).replace(/-(\w)/g,function(e){return e[1].toUpperCase()});e.dataset[u]!==a&&(a||""===a?e.dataset[u]=a:delete e.dataset[u])}else"class"===r||r.startsWith("role")||r.indexOf("-")>0||e instanceof SVGElement?e.getAttribute(r)!==a&&(a?e.setAttribute(r,a):e.removeAttribute(r)):e[r]!==a&&(e[r]=a);"key"===r&&a&&(s[a]=e)}}t.updateElement=u,t.render=u,t.Fragment=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return i(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.createElement=r.createElement,t.Fragment=r.Fragment,t.render=function(e,t,n){r.updateElement(e,t,n)}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(0)),i=0;t.default=function e(t,n,a){if(void 0===a&&(a=0),0===a&&(i=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(function(t){return e(t,n,i++)});var s=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(s=function(e,t,n){var a=e.tag,i=e.props,s=e.children,u=i&&i.id,c="_"+n+"_";u?c="_"+u+"_":u="_"+n+"_",t.__componentCache||(t.__componentCache={});var l=t.__componentCache[c];l||(l=t.__componentCache[c]=new a(r({},i,{children:s})).mount(u)),l.mounted&&l.mounted(i,s);var f=l.state,d="";return f instanceof Promise||!l.view||(d=l.view(f,i),l.rendered&&setTimeout(function(){return l.rendered(f,i)})),o.default.createElement("section",r({},i,{id:u}),d)}(t,n,i++)),s&&Array.isArray(s.children)&&(s.children=s.children.map(function(t){return e(t,n,i++)})),s}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(0)),s=n(2),u=o(n(8)),c={};i.default.on("get-components",function(e){return e.components=c});var l=function(e){return e},f=function(){function e(e,t,n,a){var o=this;this.state=e,this.view=t,this.update=n,this.options=a,this._app=new i.App,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=function(){o._history_idx--,o._history_idx>=0?o.setState(o._history[o._history_idx],{render:!0,history:!1}):o._history_idx=0},this._history_next=function(){o._history_idx++,o._history_idx<o._history.length?o.setState(o._history[o._history_idx],{render:!0,history:!1}):o._history_idx=o._history.length-1},this.start=function(e,t){return void 0===e&&(e=null),void 0===t&&(t={render:!0}),o.mount(e,r({},t,{render:!0}))}}return e.prototype.render=function(e,t){i.default.render(e,t,this)},e.prototype.renderState=function(e){var t=this;if(this.view){var n=i.default.createElement;i.default.createElement=function(e,r){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];return r&&Object.keys(r).forEach(function(n){n.startsWith("$")&&(u.default(n,r,e,t),delete r[n])}),n.apply(void 0,[e,r].concat(a))};var r=this.view(e);if(i.default.createElement=n,i.default.run("debug",{component:this,state:e,vdom:r||"[vdom is null - no render]"}),"object"==typeof document){var a="string"==typeof this.element?document.getElementById(this.element):this.element;if(a){if(this.unload){if(a._component!==this){this.tracking_id=(new Date).valueOf().toString(),a.setAttribute("_c",this.tracking_id);var o=new MutationObserver(function(e){var n=e[0],r=n.removedNodes;(n.oldValue===t.tracking_id||Array.from(r).indexOf(a)>=0)&&(t.unload(),o.disconnect())});a.parentNode&&o.observe(a.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["_c"]})}}else a.removeAttribute("_c");a._component=this}this.render(a,r),this.rendered&&this.rendered(this.state)}}},e.prototype.setState=function(e,t){var n=this;if(void 0===t&&(t={render:!0,history:!1}),e instanceof Promise)e.then(function(e){n.setState(e,t)}).catch(function(e){throw console.error(e),e}),this._state=e;else{if(this._state=e,null==e)return;this.state=e,!1!==t.render&&this.renderState(e),!1!==t.history&&this.enable_history&&(this._history=this._history.concat([e]),this._history_idx=this._history.length-1),"function"==typeof t.callback&&t.callback(this.state)}},e.prototype.mount=function(e,t){return void 0===e&&(e=null),console.assert(!this.element,"Component already mounted."),this.options=t=r({},this.options,t),this.element=e,this.global_event=t.global_event,this.enable_history=!!t.history,this.enable_history&&(this.on(t.history.prev||"history-prev",this._history_prev),this.on(t.history.next||"history-next",this._history_next)),this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),t.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),c[e]=c[e]||[],c[e].push(this),this},e.prototype.is_global_event=function(e){return e&&(this.global_event||this._global_events.indexOf(e)>=0||e.startsWith("#")||e.startsWith("/")||e.startsWith("@"))},e.prototype.add_action=function(e,t,n){var r=this;void 0===n&&(n={}),t&&"function"==typeof t&&(n.global&&this._global_events.push(e),this.on(e,function(){for(var a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];var s=t.apply(void 0,[r.state].concat(a));i.default.run("debug",{component:r,event:e,e:a,state:r.state,newState:s,options:n}),r.setState(s,n)},n))},e.prototype.add_actions=function(){var e=this,t=this.update||{};s.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=s.Reflect.getMetadata(n,e);t[r.name]=[e[r.key].bind(e),r.options]}});var n={};Array.isArray(t)?t.forEach(function(e){var t=e,r=t[0],a=t[1],o=t[2];r.toString().split(",").forEach(function(e){return n[e.trim()]=[a,o]})}):Object.keys(t).forEach(function(e){var r=t[e];("function"==typeof r||Array.isArray(r))&&e.split(",").forEach(function(e){return n[e.trim()]=r})}),n["."]||(n["."]=l),Object.keys(n).forEach(function(t){var r=n[t];"function"==typeof r?e.add_action(t,r):Array.isArray(r)&&e.add_action(t,r[0],r[1])})},e.prototype.run=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=e.toString();return this.is_global_event(a)?i.default.run.apply(i.default,[a].concat(n)):(t=this._app).run.apply(t,[a].concat(n))},e.prototype.on=function(e,t,n){var r=e.toString();return this._actions.push({name:r,fn:t}),this.is_global_event(r)?i.default.on(r,t,n):this._app.on(r,t,n)},e.prototype.unmount=function(){var e=this;this._actions.forEach(function(t){var n=t.name,r=t.fn;e.is_global_event(n)?i.default.off(n,r):e._app.off(n,r)})},e.__isAppRunComponent=!0,e}();t.Component=f},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){return t?e.state[t]:e.state},o=function(e,t,n){if(t){var a=r({},e.state);a[t]=n,e.setState(a)}else e.setState(n)};t.default=function(e,t,n,r){if(e.startsWith("$on")){var i=t[e];if(e=e.substring(1),"boolean"==typeof i)t[e]=function(t){return r.run(e,t)};else if("string"==typeof i)t[e]=function(e){return r.run(i,e)};else if("function"==typeof i)t[e]=function(e){return r.setState(i(r.state,e))};else if(Array.isArray(i)){var s=i[0],u=i.slice(1);"string"==typeof s?t[e]=function(e){return r.run.apply(r,[s].concat(u,[e]))}:"function"==typeof s&&(t[e]=function(e){return r.setState(s.apply(void 0,[r.state].concat(u,[e])))})}}else if("$bind"===e){var c=t.type||"text",l="string"==typeof t[e]?t[e]:t.name;if("input"===n)switch(c){case"checkbox":t.checked=a(r,l),t.onclick=function(e){return o(r,l||e.target.name,e.target.checked)};break;case"radio":t.checked=a(r,l)===t.value,t.onclick=function(e){return o(r,l||e.target.name,e.target.value)};break;case"number":case"range":t.value=a(r,l),t.oninput=function(e){return o(r,l||e.target.name,Number(e.target.value))};break;default:t.value=a(r,l),t.oninput=function(e){return o(r,l||e.target.name,e.target.value)}}else"select"===n?(t.selectedIndex=a(r,l),t.onchange=function(e){e.target.multiple||o(r,l||e.target.name,e.target.selectedIndex)}):"option"===n&&(t.selected=a(r,l),t.onclick=function(e){return o(r,l||e.target.name,e.target.selected)})}else app.run("$",{key:e,tag:n,props:t,component:r})}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.ROUTER_EVENT="//",t.ROUTER_404_EVENT="///",t.route=function(e){if(e||(e="#"),e.startsWith("#")){var n=e.split("/"),r=n[0],o=n.slice(1);a.default.run.apply(a.default,[r].concat(o))||a.default.run.apply(a.default,[t.ROUTER_404_EVENT,r].concat(o)),a.default.run.apply(a.default,[t.ROUTER_EVENT,r].concat(o))}else if(e.startsWith("/")){var i=e.split("/"),s=(i[0],i[1]);o=i.slice(2),a.default.run.apply(a.default,["/"+s].concat(o))||a.default.run.apply(a.default,[t.ROUTER_404_EVENT,"/"+s].concat(o)),a.default.run.apply(a.default,[t.ROUTER_EVENT,"/"+s].concat(o))}else a.default.run(e)||a.default.run(t.ROUTER_404_EVENT,e),a.default.run(t.ROUTER_EVENT,e)},t.default=t.route}])},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);a.a.on("//",function(e){for(var t=document.querySelectorAll(".navbar-nav li"),n=0;n<t.length;++n)t[n].classList.remove("active");var r=document.querySelector("[href='"+e+"']");r&&r.parentElement.classList.add("active"),$.widget("custom.catcomplete",$.ui.autocomplete,{_create:function(){this._super(),this.widget().menu("option","items","> :not(.ui-autocomplete-category)")},_renderMenu:function(e,t){var n=this,r="";$.each(t,function(t,a){var o;a.category!=r&&(e.append("<li class='ui-autocomplete-category'>"+a.category+"</li>"),r=a.category),o=n._renderItemData(e,a),a.category&&o.attr("aria-label",a.category+" : "+a.label)})}});var a=[["Tiger Nixon","System Architect","Edinburgh","5421","2011/04/25","$320,800"],["Garrett Winters","Accountant","Tokyo","8422","2011/07/25","$170,750"],["Ashton Cox","Junior Technical Author","San Francisco","1562","2009/01/12","$86,000"],["Cedric Kelly","Senior Javascript Developer","Edinburgh","6224","2012/03/29","$433,060"],["Airi Satou","Accountant","Tokyo","5407","2008/11/28","$162,700"],["Brielle Williamson","Integration Specialist","New York","4804","2012/12/02","$372,000"],["Herrod Chandler","Sales Assistant","San Francisco","9608","2012/08/06","$137,500"],["Rhona Davidson","Integration Specialist","Tokyo","6200","2010/10/14","$327,900"],["Colleen Hurst","Javascript Developer","San Francisco","2360","2009/09/15","$205,500"],["Sonya Frost","Software Engineer","Edinburgh","1667","2008/12/13","$103,600"],["Jena Gaines","Office Manager","London","3814","2008/12/19","$90,560"],["Quinn Flynn","Support Lead","Edinburgh","9497","2013/03/03","$342,000"],["Charde Marshall","Regional Director","San Francisco","6741","2008/10/16","$470,600"],["Haley Kennedy","Senior Marketing Designer","London","3597","2012/12/18","$313,500"],["Tatyana Fitzpatrick","Regional Director","London","1965","2010/03/17","$385,750"],["Michael Silva","Marketing Designer","London","1581","2012/11/27","$198,500"],["Paul Byrd","Chief Financial Officer (CFO)","New York","3059","2010/06/09","$725,000"],["Gloria Little","Systems Administrator","New York","1721","2009/04/10","$237,500"],["Bradley Greer","Software Engineer","London","2558","2012/10/13","$132,000"],["Dai Rios","Personnel Lead","Edinburgh","2290","2012/09/26","$217,500"],["Jenette Caldwell","Development Lead","New York","1937","2011/09/03","$345,000"],["Yuri Berry","Chief Marketing Officer (CMO)","New York","6154","2009/06/25","$675,000"],["Caesar Vance","Pre-Sales Support","New York","8330","2011/12/12","$106,450"],["Doris Wilder","Sales Assistant","Sydney","3023","2010/09/20","$85,600"],["Angelica Ramos","Chief Executive Officer (CEO)","London","5797","2009/10/09","$1,200,000"],["Gavin Joyce","Developer","Edinburgh","8822","2010/12/22","$92,575"],["Jennifer Chang","Regional Director","Singapore","9239","2010/11/14","$357,650"],["Brenden Wagner","Software Engineer","San Francisco","1314","2011/06/07","$206,850"],["Fiona Green","Chief Operating Officer (COO)","San Francisco","2947","2010/03/11","$850,000"],["Shou Itou","Regional Marketing","Tokyo","8899","2011/08/14","$163,000"],["Michelle House","Integration Specialist","Sydney","2769","2011/06/02","$95,400"],["Suki Burks","Developer","London","6832","2009/10/22","$114,500"],["Prescott Bartlett","Technical Author","London","3606","2011/05/07","$145,000"],["Gavin Cortez","Team Leader","San Francisco","2860","2008/10/26","$235,500"],["Martena Mccray","Post-Sales support","Edinburgh","8240","2011/03/09","$324,050"],["Unity Butler","Marketing Designer","San Francisco","5384","2009/12/09","$85,675"]];$("#search").catcomplete({delay:0,source:[{label:"America",category:"Name"},{label:"India",category:"Name"},{label:"Germanu",category:"Name"},{label:"18.5247663,73.7929271, Pune",category:"Map"},{label:"12.9542946,77.4908537, Bangalore",category:"Map"}]}),$("#search").catcomplete({select:function(e,t){console.log("Event ",t.item.category),$("#mapid").remove(),$("#jDataTable_wrapper").remove(),"Map"===t.item.category&&function(e){$("#maps").html('<div id="mapid"> </div>');var t=e.split(","),n=t[0],r=t[1],a=t[2],o=L.map("mapid").setView([n,r],13);L.marker([n,r]).addTo(o).bindPopup(a).openPopup(),L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox.streets",accessToken:"pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"}).addTo(o)}(t.item.label),"Name"===t.item.category&&($("#tableDiv").html('<table id="jDataTable"> </table>'),$("#jDataTable").DataTable({data:a,columns:[{title:"Name"},{title:"Position"},{title:"Office"},{title:"Extn."},{title:"Start date"},{title:"Salary"}]}))}})});a.a.render(document.getElementById("main"),a.a.createElement(function(){return a.a.createElement("div",{class:"container"},a.a.createElement("h1",null," App Run "),a.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},a.a.createElement("input",{id:"search",placeholder:"Autosuggest - Search Country Name or lat lng"}),a.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{class:"navbar-toggler-icon"}))),a.a.createElement("div",{id:"maps"}),a.a.createElement("div",{id:"tableDiv"}))},null))}]);
//# sourceMappingURL=app.js.map