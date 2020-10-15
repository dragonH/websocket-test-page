(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b0894bb6"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/eric-project/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},o=[],c=(n("5c0b"),n("2877")),i={},s=Object(c["a"])(i,a,o,!1,null,null,null),u=s.exports,l=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("label",[e._v("local")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.connectId,expression:"connectId"}],attrs:{type:"text"},domProps:{value:e.connectId},on:{input:function(t){t.target.composing||(e.connectId=t.target.value)}}}),n("button",{on:{click:e.connectUser}},[e._v("Connect")]),n("button",{on:{click:e.createChannel}},[e._v("CreateChannel")]),n("button",{on:{click:e.sendMessage}},[e._v("SendMessage")])])},d=[],f=(n("96cf"),n("1da1")),h=n("d4ec"),v=n("bee2"),m=n("262e"),b=n("2caf"),g=n("9ab4"),y=n("60a3"),w=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(h["a"])(this,n),e=t.apply(this,arguments),e.peer=null,e.mysocket=null,e.channel=null,e.connectId="",e}return Object(v["a"])(n,[{key:"connectUser",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.start(!0,null);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"start",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,c,i,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.peer=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"}]}),this.peer.addEventListener("icecandidate",(function(e){var t={action:"candidate",payload:e.candidate};s.mysocket.send(JSON.stringify(t))})),this.peer.addEventListener("icecandidateerror",(function(e){console.log(e)})),this.peer.addEventListener("connectionstatechange",(function(e){})),this.peer.addEventListener("datachannel",(function(e){console.log(e)})),!t){e.next=19;break}return r={offerToReceiveAudio:!0,offerToReceiveVideo:!0},e.next=9,this.peer.createOffer(r);case 9:return a=e.sent,e.next=12,this.peer.setLocalDescription(a);case 12:if(o={action:"sdp",payload:a},!n||!n.sdp){e.next=16;break}return e.next=16,this.peer.setRemoteDescription(new RTCSessionDescription(n));case 16:this.mysocket.send(JSON.stringify(o)),e.next=29;break;case 19:if(!n||!n.sdp){e.next=22;break}return e.next=22,this.peer.setRemoteDescription(new RTCSessionDescription(n));case 22:return e.next=24,this.peer.createAnswer();case 24:return c=e.sent,e.next=27,this.peer.setLocalDescription(c);case 27:i={action:"sdp",payload:c},this.mysocket.send(JSON.stringify(i));case 29:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.mysocket=new WebSocket("wss://fkidh8bvce.execute-api.ap-southeast-1.amazonaws.com/dev"),this.mysocket.onopen=function(){console.log("connection open")},this.mysocket.onmessage=function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=JSON.parse(n.data),a=r.payload,t.peer){e.next=6;break}return e.next=4,t.start(!1,a);case 4:e.next=7;break;case 6:a&&a.sdp;case 7:if(!a||!a.sdp){e.next=12;break}return e.next=10,t.peer.setRemoteDescription(new RTCSessionDescription(a));case 10:e.next=15;break;case 12:if(!a||!a.candidate){e.next=15;break}return e.next=15,t.peer.addIceCandidate(new RTCIceCandidate(a));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"createChannel",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.peer){e.next=6;break}return e.next=3,this.peer.createDataChannel("demo",{negotiated:!1});case 3:this.channel=e.sent,this.channel.addEventListener("open",(function(e){console.log(e)})),console.log(this.channel);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"sendMessage",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.channel&&this.channel.send("test");case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(y["b"]);w=Object(g["a"])([Object(y["a"])({components:{}})],w);var k=w,x=k,O=Object(c["a"])(x,p,d,!1,null,null,null),j=O.exports;r["a"].use(l["a"]);var R=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=new l["a"]({mode:"history",base:"/eric-project/",routes:R}),_=C,S=n("2f62");r["a"].use(S["a"]);var T=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:_,store:T,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.1bd5bdd2.js.map