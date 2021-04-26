(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),i=n(15),s=n.n(i),o=(n(23),n(18)),r=n(7),u=n(16),l={apiKey:"AIzaSyD6DnGbVfdJlDJ_pEOUfDfTDJrA8j3lIs8",authDomain:"dv-inventory.firebaseapp.com",databaseURL:"https://dv-inventory.firebaseio.com",projectId:"dv-inventory",storageBucket:"dv-inventory.appspot.com",messagingSenderId:"130062240176",appId:"1:130062240176:web:ecbca5d29b37d25c6cee75"},d=n(9);n(33);d.a.initializeApp(l);var j=new function e(){Object(u.a)(this,e),this.getPlaces=function(){return d.a.firestore().collection("places").get().then((function(e){return e.docs.map((function(e){return{id:e.id,data:e.data(),parts:e.data().parts&&e.data().parts.map((function(e){return e.id}))}}))}))},this.getInventory=function(){return d.a.firestore().collection("inventory").get().then((function(e){return e.docs.map((function(e){return{id:e.id,data:e.data(),placeId:e.data().place.id}}))}))},this.addThing=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=d.a.firestore();return c.collection("inventory").doc().set({name:t,count:n,place:c.collection("places").doc(e)})},this.delThing=function(e){return d.a.firestore().collection("inventory").doc(e).delete()},this.updateThing=function(e,t,n){return d.a.firestore().collection("inventory").doc(e).update({count:n,name:t})},this.config=l},p=(n(25),Object(c.createContext)()),h=(n(26),n(1));var b=function e(t){var n=t.place,a=t.child,i=t.onPlaceClick,s=Object(c.useContext)(p);return void 0===n||void 0===s[n.id]?"":a||void 0===s[n.id].parent?Object(h.jsxs)("li",{className:"place",children:[Object(h.jsx)("p",{onClick:i.bind(null,n.id),className:"place__name".concat(s[n.id].isEmpty?" place__name_empty":""),children:n.data.name}),n.parts?Object(h.jsx)("ul",{className:"place__list",children:n.parts.map((function(t){return Object(h.jsx)(e,{place:s[t],child:!0,onPlaceClick:i},s[t].id)}))}):""]},n.id):""};n(28);var f=function(e){var t=e.places,n=e.onPlaceClick;return Object(h.jsx)("ul",{className:"places",children:t.map((function(e){return Object(h.jsx)(b,{place:e,child:!1,onPlaceClick:n},e.id)}))})};n(29);var v=function(e){var t=e.thing,n=e.isRoom,a=e.getData,i=Object(c.useState)(t.data.name),s=Object(r.a)(i,2),o=s[0],u=s[1],l=Object(c.useState)(t.data.count),d=Object(r.a)(l,2),p=d[0],b=d[1],f=Object(c.useState)(!1),v=Object(r.a)(f,2),m=v[0],O=v[1];return Object(h.jsx)("li",{className:"thing",children:n?Object(h.jsxs)("form",{className:"thing__form",onSubmit:function(e){e.preventDefault(),o&&p&&j.updateThing(t.id,o,p).then((function(){a(),O(!1)})).catch((function(e){console.error(e.message)}))},children:[Object(h.jsx)("input",{type:"text",value:o,onChange:function(e){u(e.target.value),O(""!==e.target.value&&p>=1)},className:"thing__name-input"}),Object(h.jsx)("input",{type:"number",value:p,onChange:function(e){b(e.target.value),O(""!==o&&e.target.value>=1)},className:"thing__count-input",min:1}),Object(h.jsx)("button",{className:"thing__save ".concat(m&&"thing__save_active"),type:"submit",children:"\u2714"}),Object(h.jsx)("button",{className:"thing__del",onClick:function(){j.delThing(t.id).then(a).catch((function(e){console.error(e.message)}))},type:"button",children:"\u2718"})]}):Object(h.jsxs)("div",{className:"thing__item",children:[Object(h.jsx)("p",{className:"thing__name",children:t.data.name}),Object(h.jsx)("p",{className:"thing__count",children:t.data.count})]})})};n(30);var m=function(e){var t=e.inventory,n=e.activePlace,a=e.getData,i=Object(c.useContext)(p),s=Object(c.useState)(""),o=Object(r.a)(s,2),u=o[0],l=o[1],d=Object(c.useState)("1"),b=Object(r.a)(d,2),f=b[0],m=b[1],O=void 0!==i[n]&&0===i[n].children.length,g=Object(c.useState)(!1),_=Object(r.a)(g,2),x=_[0],y=_[1];return Object(h.jsxs)("div",{className:"inventory",children:[Object(h.jsx)("h2",{className:"inventory__place",children:void 0!==i[n]?i[n].data.name:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0441\u043b\u0435\u0432\u0430"}),Object(h.jsx)("ul",{className:"inventory__list",children:t.map((function(e){return e.placeId===n||void 0!==i[n]&&i[n].children.includes(e.placeId)?Object(h.jsx)(v,{thing:e,isRoom:O,getData:a},e.id):""}))}),O?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"inventory__add-title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c:"}),Object(h.jsxs)("form",{className:"inventory__add",onSubmit:function(e){e.preventDefault(),u&&f&&j.addThing(n,u,f).then((function(){a(),y(!1),l(""),m("1")})).catch((function(e){console.error(e.message)}))},children:[Object(h.jsx)("input",{type:"text",value:u,onChange:function(e){l(e.target.value),y(""!==e.target.value&&f>=1)},className:"inventory__name-input"}),Object(h.jsx)("input",{type:"number",value:f,onChange:function(e){m(e.target.value),y(""!==u&&e.target.value>=1)},className:"inventory__count-input",min:1}),Object(h.jsx)("button",{className:"inventory__add-button ".concat(x&&"inventory__add-button_active"),type:"submit",children:"\u2714"})]})]}):""]})};n(31);var O=function(){return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{className:"header__title",children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c Junior Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"}),Object(h.jsx)("p",{className:"header__author",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043b: \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u0421\u043e\u0440\u043e\u043a\u0438\u043d, HappyMarvin@yandex.ru"})]})};var g=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(r.a)(i,2),u=s[0],l=s[1],d=Object(c.useState)({}),b=Object(r.a)(d,2),v=b[0],g=b[1],_=Object(c.useState)(""),x=Object(r.a)(_,2),y=x[0],N=x[1];function C(){var e={};return n.forEach((function(t){e[t.id]=Object.assign(e[t.id]||{},t),e[t.id].inventory=[],void 0!==t.parts&&t.parts.forEach((function(n){e[n]=Object.assign(e[n]||{},{parent:t.id})}))})),n.forEach((function(t){var n=[],c=!0;!function t(a){c&&u.some((function(e){return e.placeId===a.id}))&&(c=!1),void 0!==a.parts&&(n.push.apply(n,Object(o.a)(a.parts)),a.parts.forEach((function(n){t(e[n])})))}(t),e[t.id].children=n,e[t.id].isEmpty=c})),u.forEach((function(t){e[t.placeId].inventory.push(t)})),e}function S(){j.getPlaces().then((function(e){a(e)})).then((function(){return j.getInventory().then((function(e){l(e)}))}))}return Object(c.useEffect)((function(){S()}),[]),Object(c.useEffect)((function(){g(C)}),[u,n]),Object(h.jsx)(p.Provider,{value:v,children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(f,{places:n,onPlaceClick:function(e){N(e)}}),Object(h.jsx)(m,{inventory:u,activePlace:y,getData:S})]})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),_()}},[[32,1,2]]]);
//# sourceMappingURL=main.74dc8d8f.chunk.js.map