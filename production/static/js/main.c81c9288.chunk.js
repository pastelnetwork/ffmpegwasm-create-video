(this["webpackJsonpffmpegwasm-create-video"]=this["webpackJsonpffmpegwasm-create-video"]||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),o=n.n(c),i=(n(23),n(1)),s=n.n(i),l=n(17),p=n(16),u=n(18),d=n(8),f=(n(43),n(3));var m=function(){var e=new URLSearchParams(window.location.search),t=Object.fromEntries(e.entries()),n=Object(r.useState)(""),a=Object(u.a)(n,2),c=a[0],o=a[1],i=Object(d.createFFmpeg)({log:!0,corePath:"https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js"}),m=null;window.addEventListener("message",(function(e){m=e.source,c||g(e.data)}),!1);var g=function(){var e=Object(p.a)(s.a.mark((function e(n){var r,a,c,p,u,f,g;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.length){e.next=29;break}return e.prev=1,a=(null===t||void 0===t?void 0:t.filename)||"Paper_Wallet__QRCode",e.next=5,i.load();case 5:c=(r=[]).concat.apply(r,Object(l.a)(new Array(3).fill(n))),p=0;case 7:if(!(p<c.length)){e.next=17;break}return e.t0=i,e.t1="img00".concat(p,".png"),e.next=12,Object(d.fetchFile)(c[p]);case 12:e.t2=e.sent,e.t0.FS.call(e.t0,"writeFile",e.t1,e.t2);case 14:p+=1,e.next=7;break;case 17:return e.next=19,i.run("-pattern_type","glob","-r","1","-i","*.png","-c:v","libx264","-r","2","-pix_fmt","yuv420p","".concat(a,".mp4"));case 19:for(u=i.FS("readFile","".concat(a,".mp4")),f=0;f<c.length;f+=1)i.FS("unlink","img00".concat(f,".png"));g=URL.createObjectURL(new Blob([u.buffer],{type:"video/mp4"})),o(g),m.postMessage({videoUrl:g,error:null},"*"),e.next=29;break;case 26:e.prev=26,e.t3=e.catch(1),m.postMessage({videoUrl:"",error:"creating error"},"*");case 29:case"end":return e.stop()}}),e,null,[[1,26]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"App",children:"Creating QR Code Video"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.c81c9288.chunk.js.map