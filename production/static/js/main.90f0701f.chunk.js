(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{20:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(13),o=n.n(a),i=(n(20),n(2)),s=n.n(i),l=n(14),p=n(15),d=n(6),u=(n(40),n(0));var h=function(){var e=new URLSearchParams(window.location.search),t=Object.fromEntries(e.entries()),n=Object(c.useState)(""),r=Object(p.a)(n,2),a=r[0],o=r[1],i=Object(d.createFFmpeg)({log:!0,corePath:"https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js"}),h=null;window.addEventListener("message",(function(e){h=e.source,a||f(e.data)}),!1);var f=function(){var e=Object(l.a)(s.a.mark((function e(n){var c,r,a,l,p,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.length){e.next=23;break}return c=30*n.length,r=(null===t||void 0===t?void 0:t.filename)||"Paper_Wallet__QRCode",e.next=5,i.load();case 5:a=0;case 6:if(!(a<n.length)){e.next=16;break}return e.t0=i,e.t1="img00".concat(a,".png"),e.next=11,Object(d.fetchFile)(n[a]);case 11:e.t2=e.sent,e.t0.FS.call(e.t0,"writeFile",e.t1,e.t2);case 13:a+=1,e.next=6;break;case 16:return e.next=18,i.run("-framerate","24","-pattern_type","glob","-i","*.png","-vf","setpts=".concat(c,".0*PTS"),"-c:v","libx264","-pix_fmt","yuv420p","".concat(r,".mp4"));case 18:for(l=i.FS("readFile","".concat(r,".mp4")),p=0;p<n.length;p+=1)i.FS("unlink","img00".concat(p,".png"));u=URL.createObjectURL(new Blob([l.buffer],{type:"video/mp4"})),o(u),h.postMessage({videoUrl:u},"*");case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{id:"videourl",children:a||"inprocess"}),Object(u.jsx)("div",{id:"videotag",children:Object(u.jsx)("video",{width:"320",height:"240",src:a,controls:!0})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.90f0701f.chunk.js.map