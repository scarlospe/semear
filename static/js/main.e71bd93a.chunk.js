(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e){e.exports={b:"Fale com a gente",a:[{id:"1",message:"Ol\xe1, seja bem vindo! Para n\xf3s \xe9 uma satisfa\xe7\xe3o enorme receb\xea-lo em nosso portal.",trigger:"name"},{id:"name",message:"Qual o seu nome?",trigger:"3"},{id:"3",user:!0,trigger:"4"},{id:"4",message:"Ol\xe1 {previousValue}, voc\xea j\xe1 ouviu falar em financiamento coletivo?",trigger:"5"},{id:"5",options:[{value:1,label:"Sim",trigger:"sim"},{value:2,label:"N\xe3o",trigger:"nao"}]},{id:"sim",message:"Isso \xe9 uma \xf3tima not\xedcia, pois assim, podemos ir direto ao assunto. N\xf3s somos a melhor plataforma de financiamento coletivo que voc\xea ir\xe1 encontrar.",trigger:"6"},{id:"6",message:"Conosco voc\xea pode ajudar a desenvolver o agroneg\xf3cio brasileiro e ainda ganhar uma grana extra.",trigger:"7"},{id:"7",message:"Quer saber como? Me diz o seu e-mail que vou te passar todos os detalhes.",trigger:"email"},{id:"email",user:!0,trigger:"8"},{id:"8",message:"Dentro de alguns instantes iremos te enviar o e-mail com os detalhes, mas por ora, da uma olhada nesse conte\xfado que separamos para voc\xea.",trigger:"link"},{id:"link",message:"link",trigger:"end"},{id:"nao",message:"Uhmmm...",trigger:"9"},{id:"9",message:"J\xe1 que voc\xea n\xe3o sabe o que \xe9 financiado coletivo, vou tentar te explicar rapidinho.",trigger:"10"},{id:"10",message:"\xc9 assim, a plataforma publica um projeto, as pessoas se identicam e doam um valor para ajudar a tirar o projeto do papel. O que popularmente chamamos de 'vaquinha'.",trigger:"11"},{id:"11",message:"S\xf3 que na nossa plataforma, \xe9 mais legal...",trigger:"12"},{id:"12",message:"Voc\xea n\xe3o doa o seu rico dinheirinho, voc\xea nos empresta e n\xf3s investimos em projetos ligados ao agroneg\xf3cio.",trigger:"13"},{id:"13",message:"E mensalmente, durante doze meses, voc\xea recebe seu percentual de participa\xe7\xe3o.",trigger:"14"},{id:"14",message:"Legal n\xe9?",trigger:"7"},{id:"end",message:"Obrigado.",end:!0}]}},35:function(e,a,t){e.exports=t(62)},40:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(28),i=t.n(o),s=(t(40),t(29)),l=t.n(s),c=t(23),m=t(20),d=t(11),u=t.n(d);t(63),t(51),t(55);u.a.initializeApp({apiKey:"AIzaSyCwp2bHLD9kXNDk9a5MwNMLDaKc6yu4LaI",authDomain:"chatbot-db-be5a2.firebaseapp.com",databaseURL:"https://chatbot-db-be5a2.firebaseio.com",projectId:"chatbot-db-be5a2",storageBucket:"chatbot-db-be5a2.appspot.com",messagingSenderId:"531384919196",appId:"1:531384919196:web:d8a9e3ea0a7d8cce"});u.a.storage();var g=u.a.database(),p=u.a.auth(),h={background:"#FFF",fontFamily:"Helvetica Neue",headerBgColor:"#2E2D33",headerFontColor:"#fff",headerFontSize:"15px",botBubbleColor:"#2E2D33",botFontColor:"#fff",userBubbleColor:"#fff",userFontColor:"#4a4a4a"},b=function(){return r.a.createElement(m.ThemeProvider,{theme:h},r.a.createElement(l.a,{handleEnd:function(e){e.renderedSteps,e.steps;var a=e.values,t=(new Date).getTime();g.ref("/users/".concat(t)).set({name:a[0],option:a[1],email:a[2]})},headerTitle:c.b,steps:c.a,width:"100%"}))},v=t(13),f=t(14),E=t(16),y=t(15),N=t(10),k=t(17),w=t(34),j=function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},S=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(E.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(r)))).state={items:[],loading:!0},t}return Object(k.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.ref("/users").once("value").then(function(a){var t=a.val();if(t){var n=[];Object.keys(t).forEach(function(e){n=[].concat(Object(w.a)(n),[t[e]])}),e.setState({items:n,loading:!1})}})}},{key:"renderTable",value:function(){var e=this.state.items;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Op\xe7\xe3o"))),r.a.createElement("tbody",null,e.map(function(e,a){var t=e.name,n=e.email,o=e.option;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,o))})))}},{key:"renderLoading",value:function(){return r.a.createElement(j,null)}},{key:"render",value:function(){return this.state.loading?this.renderLoading():this.renderTable()}}]),a}(n.Component),O=function(e){function a(){var e;return Object(v.a)(this,a),(e=Object(E.a)(this,Object(y.a)(a).call(this))).state={isAuth:!1,loading:!0},e.handleSubmit=e.handleSubmit.bind(Object(N.a)(e)),e.handleLogout=e.handleLogout.bind(Object(N.a)(e)),e}return Object(k.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.onAuthStateChanged(function(a){a&&e.setState({isAuth:!0}),e.setState({loading:!1})})}},{key:"handleLogout",value:function(){var e=this;p.signOut().then(function(){e.setState({isAuth:!1})})}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=e.target,t=a.email,n=a.password;this.authUser(t.value,n.value)}},{key:"authUser",value:function(e,a){var t=this;p.signInWithEmailAndPassword(e,a).then(function(e){e.operationType;e.user&&t.setState({isAuth:!0}),t.setState({loading:!1})})}},{key:"renderForm",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto"},r.a.createElement("div",{className:"card card-signin my-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-center"},"Semear ",r.a.createElement("span",{className:"badge badge-light"},"CHATBOT")),r.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{autoComplete:"email",name:"email",type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{autoComplete:"password",name:"password",type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0})),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block text-uppercase",type:"submit"},"Sign in")))))))}},{key:"renderContent",value:function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex justify-content-between align-center mb-3"},r.a.createElement("h5",{className:"card-title m-0"},"Semear Users"),r.a.createElement("button",{className:"btn btn-primary",onClick:this.handleLogout},"Sign out")),r.a.createElement(S,null))))}},{key:"renderLoading",value:function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement(j,null))))}},{key:"render",value:function(){var e=this.state,a=e.isAuth;return e.loading?this.renderLoading():a?this.renderContent():this.renderForm()}}]),a}(n.Component),C=t(31),L=t(7);var A=function(){return r.a.createElement(b,null)},F=function(){return r.a.createElement(O,null)},x=function(){return r.a.createElement(C.a,{basename:"/semear"},r.a.createElement("div",{className:"App"},r.a.createElement(L.a,{exact:!0,path:"/",component:A}),r.a.createElement(L.a,{path:"/admin",component:F})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.e71bd93a.chunk.js.map