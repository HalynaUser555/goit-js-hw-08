function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var i,o,r,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,u=setTimeout(j,t),l?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function j(){var e=p();if(h(e))return x(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,r-(e-c)):n}(e))}function x(e){return u=void 0,v&&i?b(e):(i=o=void 0,a)}function O(){var e=p(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=g(t)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?m(g(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:x(p())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}function b(n,i){const o=document.querySelector(n);o.addEventListener("input",e(t)((function(e){let t=localStorage.getItem("feedback-form-state");t=null===t?{}:JSON.parse(t),t[i]=o.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500))}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})},b('input[name="email"]',"email"),b('textarea[name="message"]',"message");let S=localStorage.getItem("feedback-form-state");if(S){let e=JSON.parse(S);h(e,'input[name="email"]',"email"),h(e,'textarea[name="message"]',"message")}function h(e,t,n){if(e[n]){document.querySelector(t).value=e[n]}}document.querySelector('button[type="submit"]').addEventListener("click",(function(e){const t=document.querySelector('input[name="email"]'),n=document.querySelector('textarea[name="message"]');t.checkValidity()&&n.checkValidity()&&(localStorage.removeItem("feedback-form-state"),t.value="",n.value="")}));
//# sourceMappingURL=03-feedback.9ffc90ee.js.map