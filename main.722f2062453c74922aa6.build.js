!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Crazy-Merlin/final_proj.github.io/",n(n.s=2)}([,,function(e,t,n){"use strict";n.r(t);n(3),n(4)},function(e,t,n){},function(e,t){var n,r,o,c,u;n=document.querySelector(".scroll-down__btn"),r=document.querySelector("section.about"),n.addEventListener("click",(function(e){e.preventDefault(),r.scrollIntoView({block:"center",behavior:"smooth"})})),function(){function e(e){e.preventDefault();var t=e.currentTarget.getAttribute("data-target"),n=document.querySelector(".".concat(t));document.querySelector(".sidebar").classList.remove("active"),n.scrollIntoView({block:"center",behavior:"smooth"})}document.querySelectorAll("[data-target]").forEach((function(t){t.addEventListener("click",e)}))}(),o=document.querySelector(".hamburger"),c=document.querySelector(".sidebar__close"),u=document.querySelector(".sidebar"),o.addEventListener("click",(function(e){u.classList.add("active")})),c.addEventListener("click",(function(e){u.classList.remove("active")})),function(){document.getElementById("contact-form");var e=document.getElementById("modal"),t=document.querySelector(".modal__close");document.querySelector(".gradient-btn").addEventListener("click",(function(t){t.preventDefault(),e.classList.add("active")})),t.addEventListener("click",(function(t){t.preventDefault(),e.classList.remove("active")}))}(),document.querySelectorAll(".form-block__input").forEach((function(e){e.addEventListener("focus",(function(t){e.closest(".form-block").classList.add("focused")})),e.addEventListener("blur",(function(t){e.closest(".form-block").classList.remove("focused")}))}))}]);