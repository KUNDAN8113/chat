(this["webpackJsonpmessenger-clone"]=this["webpackJsonpmessenger-clone"]||[]).push([[0],{107:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(36),r=s.n(c),i=(s(75),s(9)),o=s(132),m=s(127),u=(s(76),s(128)),l=s(131),d=s(130),j=(s(77),s(3)),p=Object(a.forwardRef)((function(e,t){var s=e.message,a=e.userName===s.userName;return Object(j.jsx)("div",{ref:t,className:"message ".concat(a&&"mess__user"),children:Object(j.jsx)(u.a,{className:a?"mess__userCard":"mess__guestCard",children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(d.a,{color:"black",variant:"h5",component:"h2",children:[!a&&"".concat(s.userName||"Unknown User",": ")," ",s.text]})})})})})),b=s(44),f=s.n(b),h=(s(102),f.a.initializeApp({apiKey:"AIzaSyCvzWNjzXqcLUvmxXnw_JbXZ4elFe6wuKA",authDomain:"messenger-4b8f2.firebaseapp.com",projectId:"messenger-4b8f2",storageBucket:"messenger-4b8f2.appspot.com",messagingSenderId:"701561666961",appId:"1:701561666961:web:52779d9a230435e2ad2e30",measurementId:"G-9BBTLZPYJ1"}).firestore()),g=s(67),O=s.p+"static/media/chat.f1ec2d99.jfif",x=s(66),v=s.n(x),_=s(126);var N=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)([]),r=Object(i.a)(c,2),u=r[0],l=r[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),x=b[0],N=b[1];return Object(a.useEffect)((function(){h.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(a.useEffect)((function(){N(prompt("Enter your name"))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h2",{children:["Welcome ",x]}),Object(j.jsx)("img",{src:O,alt:"logo",width:"100",height:"100"}),Object(j.jsx)("h1",{children:"Let those beeps fly..."}),Object(j.jsx)("form",{className:"app__form",children:Object(j.jsxs)(o.a,{className:"app__formControl",children:[Object(j.jsx)(m.a,{className:"app__input",placeholder:"Type here....",value:s,onChange:function(e){return n(e.target.value)}}),Object(j.jsx)(_.a,{className:"app__iconButton",disabled:!s,color:"primary",variant:"contained",type:"submit",onClick:function(e){e.preventDefault(),h.collection("messages").add({text:s,userName:x,timestamp:f.a.firestore.FieldValue.serverTimestamp()}),n("")},children:Object(j.jsx)(v.a,{})})]})}),Object(j.jsx)(g.a,{children:u.map((function(e){var t=e.id,s=e.message;return Object(j.jsx)(p,{userName:x,message:s},t)}))})]})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,133)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),y()},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){}},[[107,1,2]]]);
//# sourceMappingURL=main.e0239873.chunk.js.map