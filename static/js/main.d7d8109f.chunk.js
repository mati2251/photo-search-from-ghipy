(this["webpackJsonprandom-photo-from-giphy"]=this["webpackJsonprandom-photo-from-giphy"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,o=n(0),c=n.n(o),r=n(3),i=n.n(r),s=(n(9),n(1)),l=(n(10),n(14)),u=(n(11),function(e){return c.a.createElement("div",{className:"photo"},c.a.createElement("img",{src:e.src,alt:e.alt}))}),p="q".replace(/[[\]]/g,"\\$&"),m=new RegExp("[?&]"+p+"(=([^&#]*)|&|#|$)").exec(window.location.search);a=m&&m[2]?decodeURIComponent(m[2].replace(/\+/g," ")):"hello";var h=function(){var e=[],t=Object(o.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],p=Object(o.useState)(e),m=Object(s.a)(p,2),h=m[0],d=m[1],f=function(){if(!r){var t=new XMLHttpRequest;if(t.open("GET","https://api.giphy.com/v1/gifs/search?api_key=sASnbfCxLNIckaGMW3jWggs2rp1UT7PY&q=".concat(a,"&limit=10"),!1),t.send(null),200===t.status)JSON.parse(t.responseText).data.map((function(t){e.push(c.a.createElement(u,{src:t.images.original.url,key:t.slug,alt:t.title}))})),d(e),i(!0),t.abort()}};f();var w=function(){if(window.history.pushState){var e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?q="+a;window.history.pushState({path:e},"",e),i(!1),f()}};return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"PHOTO SEARCH FROM GIPHY"),0===h.length?c.a.createElement("h2",null,"Not found results for sentence: ",a):c.a.createElement("h2",null,"Results for sentence: ",a),c.a.createElement("div",{className:"options"},c.a.createElement("input",{type:"text",placeholder:"Insert text",onChange:function(e){a=e.target.value},onKeyPress:function(e){"Enter"===e.key&&w()}}),c.a.createElement("button",{onClick:w},c.a.createElement(l.a,{className:"icon"}))),c.a.createElement("div",{className:"photoContainer"},h))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.d7d8109f.chunk.js.map