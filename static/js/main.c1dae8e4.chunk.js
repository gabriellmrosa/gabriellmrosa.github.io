(this["webpackJsonpux-tester"]=this["webpackJsonpux-tester"]||[]).push([[0],{38:function(n,e,t){"use strict";t.r(e);var i,o,r,s,a,c,A=t(0),d=t.n(A),l=t(17),u=t.n(l),b=t(5),h=t(6),p=Object(h.a)(i||(i=Object(b.a)(["\n\n/* width */\n::-webkit-scrollbar {\n  width: 6px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: rgba(0,0,0,0.1);\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgba(255,255,255,0.5);\n  border-radius:16px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(255,255,255,1);\n}\n\n*{\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n  font-family:'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}\nh1{\n  line-height:1.2;\n}\n\nbody {\n  margin: 0;\n  overflow-anchor: none;\n  font-size: 16px;\n  line-height:1.5;\n\n  --color-bg: #BF135F;\n}\nbutton{\n  cursor: pointer;\n}\n.btn {\n  border: none;\n  background: none;\n  background: #fff;\n  padding: 16px 24px;\n  color: #c41361;\n  font-size: 16px;\n  font-weight: 900;\n  border-radius: 4px;\n  min-width: 200px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 48px;\n  transition: 300ms;\n  text-decoration: none;\n}\n.btn:hover {\n  transform: translate(0%, -10%);\n}\n\nh1{font-size:32px;}\nh2{font-size:24px;}\nh3{font-size:18px;}\nh4{font-size:16px;}\nh5{font-size:14px;}\np {font-size:12px;}\n\n"]))),x=t(15),f=t(1),g=Object(A.createContext)(),j=function(n){var e=n.children,t=Object(A.useState)(!1),i=Object(x.a)(t,2),o=i[0],r=i[1],s=Object(A.useState)(!0),a=Object(x.a)(s,2),c=a[0],d=a[1];return Object(f.jsx)(g.Provider,{value:{hideInstructions:c,setHideInstructions:d,showMenuInstructions:o,setShowMenuInstructions:r},children:e})},m=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,r=e.getLCP,s=e.getTTFB;t(n),i(n),o(n),r(n),s(n)}))},O=t(7),w=t(2),v=h.b.div(o||(o=Object(b.a)(["\n  position: absolute;\n  z-index: 100;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n  transition: 300ms;\n  pointer-events: ",";\n  opacity: ",";\n"])),(function(n){return n.showMenuInstructions?"auto":"none"}),(function(n){return n.showMenuInstructions?1:0})),k=h.b.div(r||(r=Object(b.a)(["\n  position: absolute;\n  z-index: 101;\n  top: 0px;\n  left: 0px;\n  height: 100vh;\n  width: 95%;\n  max-width: 500px;\n  color: #fff;\n  transition: 300ms;\n  transform: ",";\n  .content {\n    position: relative;\n    width: 100%;\n    height: 100vh;\n    background: #fff;\n    padding: 24px 40px;\n    background: var(--color-bg);\n    overflow: auto;\n    ul {\n      padding: 0px 24px;\n    }\n    h2 {\n      margin: 0px 0px 16px;\n    }\n    h2 ~ h2 {\n      margin: 48px 0px 16px;\n    }\n    li {\n      color: rgba(255, 255, 255, 0.95);\n      margin-bottom: 16px;\n    }\n  }\n\n  .btn.--custom {\n    width: 100%;\n  }\n  .btn-menu {\n    position: absolute;\n    bottom: 24px;\n    right: -24px;\n    transform: translate(100%, 0%);\n    width: 40px;\n    height: 40px;\n    border: none;\n    background: var(--color-bg);\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.2);\n\n    span {\n      display: inline-flex;\n      width: 50%;\n      height: 3px;\n      background: #fff;\n      transition: 300ms;\n      transform: ",';\n\n      &:after,\n      &:before {\n        content: "";\n        position: absolute;\n        width: 100%;\n        height: 3px;\n        background: #fff;\n        left: 0%;\n        transition: 300ms;\n      }\n      &:after {\n        top: ',";\n      }\n      &:before {\n        bottom: ",";\n        transform: ",";\n      }\n    }\n  }\n"])),(function(n){return n.showMenuInstructions?"translate(0%,0%)":"translate(-100%,0%)"}),(function(n){return n.showMenuInstructions?"rotate(45deg)":"rotate(0)"}),(function(n){return n.showMenuInstructions?"0px":"8px"}),(function(n){return n.showMenuInstructions?"0px":"8px"}),(function(n){return n.showMenuInstructions?"rotate(90deg)":"rotate(0)"})),I=function(n){var e=n.showMenuInstructions,t=n.setShowMenuInstructions,i=function(){t((function(n){return!n}))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{showMenuInstructions:e,onClick:i}),Object(f.jsxs)(k,{showMenuInstructions:e,setShowMenuInstructions:t,className:"container",children:[Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("h2",{children:"V\xeddeo explicativo"}),Object(f.jsx)("iframe",{width:"100%",height:"200",src:"https://www.youtube.com/embed/6A3xlcSWGe8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0}),Object(f.jsx)("h2",{children:"Historia"}),Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:["Imagine que voc\xea \xe9 o analista chamado:"," ",Object(f.jsx)("strong",{children:"Buser Analista Teste"})]}),Object(f.jsxs)("li",{children:["Voc\xea recebeu uma mensagem de um motorista \xe0s"," ",Object(f.jsx)("strong",{children:"20:30 "}),"do dia ",Object(f.jsx)("strong",{children:"03/04/2021"})]}),Object(f.jsxs)("li",{children:["O motorista informou que o grupo dele,"," ",Object(f.jsx)("strong",{children:"CGR - NIU - JRD - PMU"}),", teve um atraso no embarque de 2 horas no trecho ",Object(f.jsx)("strong",{children:"CGR - NIU"})," e no meio do caminho do trecho ",Object(f.jsx)("strong",{children:"JRD - PMU"})," o pneu furou ficando 3 horas parado."]}),Object(f.jsx)("li",{children:"Al\xe9m disso o passageiro Angelo Rodrigues Marques, deste mesmo grupo, mandou uma foto mostrando que ele ficou em uma poltrona quebrada."})]}),Object(f.jsx)("h2",{children:"Miss\xf5es"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"Registre um incidente para este grupo e cadastre as informa\xe7\xf5es gerais"}),Object(f.jsx)("li",{children:"Na aba BUSER EXPERI\xcaNCE adicione os reembolsos necess\xe1rios, para os passageiros dos trechos que sofreram algum contratempo."}),Object(f.jsx)("li",{children:"Na aba BUSER EXPERI\xcaNCE adicione o reembolso individual do Angelo Rodrigues Marques."})]}),Object(f.jsx)("button",{className:"btn --custom",children:"Finalizar teste"})]}),Object(f.jsx)("button",{className:"btn-menu",onClick:i,children:Object(f.jsx)("span",{})})]})]})},y=t.p+"static/media/logo-buser-white.65ecdf61.svg",M=t.p+"static/media/mock-buser.6a6276ee.png",C=t.p+"static/media/bg-lines.51f9f527.svg",N=h.b.div(s||(s=Object(b.a)(["\n  background: linear-gradient(90deg, #ad1457 0%, #f11075 97.74%);\n  background: url(",") no-repeat left top,\n    linear-gradient(90deg, #ad1457 0%, #f11075 97.74%);\n  background-size: cover;\n  min-height: 100vh;\n  height: auto;\n  padding: 24px;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  .container-global {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    max-width: 1050px;\n  }\n  .container-left,\n  .container-right {\n    width: 50%;\n  }\n  .container-left {\n    h1 {\n      font-size: 48px;\n      margin-top: 16px;\n    }\n    img {\n      width: 120px;\n    }\n  }\n  .container-right {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"])),C),z=function(){var n=Object(A.useContext)(g).setHideInstructions;return Object(A.useEffect)((function(){n(!0)}),[n]),Object(f.jsx)(N,{children:Object(f.jsxs)("div",{className:"container-global",children:[Object(f.jsxs)("div",{className:"container-left",children:[Object(f.jsx)("img",{src:y,alt:"Logo Buser"}),Object(f.jsx)("h1",{children:"Ol\xe1, seja bem-vindo ao teste de usabilidade Buser"}),Object(f.jsx)(O.b,{className:"btn",to:"/descricao",children:"Come\xe7ar"})]}),Object(f.jsx)("div",{className:"container-right",children:Object(f.jsx)("img",{src:M,alt:"Buser"})})]})})},R=t.p+"static/media/incidentes-grupo 1.d7918548.png",E=t.p+"static/media/incidentes-grupo 3.bc60bcee.png",U=h.b.div(a||(a=Object(b.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n  background: #f5f5f5;\n  .container {\n    display: flex;\n    justify-content: center;\n    max-width: 1920px;\n    margin: 0px auto;\n    flex-direction: column;\n  }\n  .flex-area {\n    display: flex;\n    width: 100%;\n    margin: 16px 0px;\n    img {\n      width: 87%;\n    }\n    button {\n      width: 13%;\n      margin-right: 24px;\n      margin-left: 16px;\n      background: #315479;\n      color: #fff;\n      border: none;\n      font-size: 14px;\n      padding: 0px 16px;\n      &:hover {\n        opacity: 0.8;\n      }\n    }\n  }\n  @keyframes enter {\n    from {\n      transform: translate(0%, 25%);\n      opacity: 0;\n    }\n    to {\n      transform: translate(0%, 0%);\n      opacity: 1;\n    }\n  }\n"]))),V=function(){var n=Object(A.useContext)(g).setHideInstructions;return Object(A.useEffect)((function(){n(!1)}),[n]),Object(f.jsx)(U,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("img",{src:R,alt:"Staff Grupos"}),Object(f.jsxs)("div",{className:"flex-area",children:[Object(f.jsx)("img",{src:"data:image/png;base64,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",alt:"Staff Grupos"}),Object(f.jsx)("button",{children:"Registrar incidente"})]}),Object(f.jsx)("img",{src:E,alt:"Staff Grupos"})]})})},F=t(22),S=h.b.div(c||(c=Object(b.a)(["\n  background: linear-gradient(90deg, #ad1457 0%, #f11075 97.74%);\n  background: url(",") no-repeat left top,\n    linear-gradient(90deg, #ad1457 0%, #f11075 97.74%);\n  background-size: cover;\n  min-height: 100vh;\n  height: auto;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n\n  .container-global {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    max-width: 1050px;\n    margin: 0px auto;\n  }\n  h1 {\n    margin: 32px 0px;\n  }\n  .btn {\n    border: none;\n    background: none;\n    background: #fff;\n    padding: 16px 24px;\n    color: #c41361;\n    font-size: 16px;\n    font-weight: 900;\n    border-radius: 4px;\n    min-width: 200px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 48px;\n    transition: 300ms;\n    text-decoration: none;\n    &:hover {\n      transform: translate(0%, -10%);\n    }\n  }\n  header {\n    width: 100%;\n    height: auto;\n    padding: 16px 24px;\n  }\n  .btn-link {\n    color: #fff;\n    background: none;\n    border: none;\n    border-radius: 50%;\n    padding: 8px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    &:hover {\n      background: rgba(255, 255, 255, 0.1);\n    }\n  }\n"])),C),q=function(){var n=Object(w.f)(),e=Object(A.useContext)(g).setHideInstructions;return Object(A.useEffect)((function(){e(!1)}),[e]),Object(f.jsxs)(S,{children:[Object(f.jsx)("header",{children:Object(f.jsx)("button",{className:"btn-link",onClick:function(){return n.goBack()},children:Object(f.jsx)(F.a,{size:22})})}),Object(f.jsxs)("div",{className:"container-global",children:[Object(f.jsx)("h1",{children:"Assista ao video para entender o teste"}),Object(f.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6A3xlcSWGe8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0}),Object(f.jsx)(O.b,{className:"btn",to:"/teste",children:"Entendi, come\xe7ar o teste!"})]})]})},B=function(){var n=Object(A.useContext)(g),e=n.showMenuInstructions,t=n.setShowMenuInstructions,i=n.hideInstructions;return Object(f.jsxs)(O.a,{children:[!i&&Object(f.jsx)(I,{showMenuInstructions:e,setShowMenuInstructions:t}),Object(f.jsxs)(w.c,{children:[Object(f.jsx)(w.a,{exact:!0,path:"/",component:z}),Object(f.jsx)(w.a,{path:"/descricao",component:q}),Object(f.jsx)(w.a,{path:"/teste",component:V})]})]})};u.a.render(Object(f.jsxs)(d.a.StrictMode,{children:[Object(f.jsx)(p,{}),Object(f.jsx)(j,{children:Object(f.jsx)(B,{})})]}),document.getElementById("root")),m()}},[[38,1,2]]]);
//# sourceMappingURL=main.c1dae8e4.chunk.js.map