(this["webpackJsonpprimer-app"]=this["webpackJsonpprimer-app"]||[]).push([[0],{77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(21),s=c.n(n),r=c(10),a=c(13),j=c(1),o=function(){var e=Object(r.h)().name;return Object(j.jsx)("div",{children:Object(j.jsx)("h3",{children:e})})},d=function(){var e=Object(r.i)(),t=e.url,c=e.path;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"".concat(t,"/shoes"),children:"Shoes"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"".concat(t,"/boots"),children:"Boots"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"".concat(t,"/footwear"),children:"Footwear"})})]}),Object(j.jsx)(r.b,{path:"".concat(c,"/:name"),children:Object(j.jsx)(o,{})})]})},l=function(e){var t,c=e.data,i=Object(r.h)().productId,n=c.find((function(e){return e.id===Number(i)}));return t=n?Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{children:[" ",n.name," "]}),Object(j.jsx)("p",{children:n.description}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:n.status})]}):Object(j.jsx)("h2",{children:" Sorry. Product doesn't exist "}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:t})})},b=function(e){e.match;var t=[{id:1,name:"NIKE Liteforce Blue Sneakers",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin molestie.",status:"Available"},{id:2,name:"Stylised Flip Flops and Slippers",description:"Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",status:"Out of Stock"},{id:3,name:"ADIDAS Adispree Running Shoes",description:"Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",status:"Available"},{id:4,name:"ADIDAS Mid Sneakers",description:"Ut hendrerit venenatis lacus, vel lacinia ipsum ferme ntum vel.Cras.",status:"Out of Stock"}],c=Object(r.i)().url,i=t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"".concat(c,"/").concat(e.id),children:e.name})},e.id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Products"}),Object(j.jsx)("ul",{children:i})]})}),Object(j.jsx)(r.b,{path:"".concat(c,"/:productId"),children:Object(j.jsx)(l,{data:t})}),Object(j.jsx)(r.b,{exact:!0,path:c,children:Object(j.jsx)("p",{children:"Please select a product."})})]})},h=c(49),u=c(63),O=c(43);var x={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=!0,setTimeout(e,100)}},p=function(e){var t=e.component,c=Object(u.a)(e,["component"]),i=Object(r.g)();return Object(j.jsx)(r.b,Object(h.a)(Object(h.a)({},c),{},{children:!0===x.isAuthenticated?Object(j.jsx)(t,{}):Object(j.jsx)(r.a,{to:{pathname:"/login",state:{from:i}}})}))},m=[{id:1,title:"Inicio",to:"/"},{id:2,title:"Categoria",to:"/category"},{id:3,title:"Productos",to:"/products"},{id:4,title:"Admin",to:"/admin"}],v=c(83),f=c(82),g=c(84),A=c(51),N=c(58);function S(){var e=Object(i.useState)(!1),t=Object(O.a)(e,2),c=t[0],n=t[1];return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(a.b,{to:"/",children:Object(j.jsx)("img",{src:"https://image.flaticon.com/icons/png/64/3004/3004703.png",alt:"logo",width:"60px",height:"60px"})})}),Object(j.jsx)("div",{className:"mobileHidden",children:Object(j.jsx)(v.a,{targetOffset:"65",children:m.map((function(e){return Object(j.jsxs)(a.b,{className:"link",to:e.to,children:[e.title," "]},e.id)}))})}),Object(j.jsxs)("div",{className:"mobileVisible",children:[Object(j.jsx)(f.a,{type:"primary",onClick:function(){n(!0)},children:Object(j.jsx)(A.a,{icon:N.a})}),Object(j.jsx)(g.a,{title:"Menu",placement:"right",closable:!1,onClose:function(){n(!1)},visible:c,children:m.map((function(e){return Object(j.jsxs)(a.b,{className:"link",to:e.to,children:[e.title," "]},e.id)}))})]})]})})}c(76),c(77);var k=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Home"})})},y=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Welcome admin!"})})};function I(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("section",{className:"App-content",children:[Object(j.jsx)(S,{}),Object(j.jsxs)(r.d,{className:"container",children:[Object(j.jsx)(r.b,{exact:!0,path:"/",children:Object(j.jsx)(k,{})}),Object(j.jsx)(r.b,{path:"/category",children:Object(j.jsx)(d,{})}),Object(j.jsx)(r.b,{path:"/products",children:Object(j.jsx)(b,{})}),Object(j.jsx)(p,{path:"/admin",component:y})]})]})})}s.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.3faef98e.chunk.js.map