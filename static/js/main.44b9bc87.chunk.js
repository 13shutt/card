(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a.n(l),m=(a(19),a(20),a(10)),i=a(6),o=a(7),s=a(11),u=a(8),d=a(12),p=a(9),h=a.n(p),E=(a(21),function(e){return c.a.createElement("div",null,e.type,": ",c.a.createElement("input",{className:"num",autoFocus:!0,type:"text"})," ",c.a.createElement("i",{onClick:e.event},"+"))}),v=a(4),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={showInput:!1,type:"",contacts:[{id:0,number:"vitalya@gmail.com",type:"\u0415\u043c\u0435\u0439\u043b"},{id:1,number:"vitalya.getsome.com",type:"\u0421\u0441\u044b\u043b\u043a\u0430"},{id:2,number:"streeet 13",type:"\u0410\u0434\u0440\u0435\u0441"},{id:3,number:"0934324352",type:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}]},a.addNumber=function(e){a.state.showInput?a.setState({showInput:!1}):a.setState({showInput:!0,type:e}),console.log(e)},a.addNumberToState=function(){var e;e=document.querySelector(".num").value>0?document.querySelector(".num").value:"...",a.setState({contacts:[{id:a.getRandomInt(1,1e3),number:e,type:a.state.type}].concat(Object(m.a)(a.state.contacts))}),a.addNumber()},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getRandomInt",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"handleClick",value:function(){console.log("fire")}},{key:"handleRightClick",value:function(e,t){console.log(e)}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{id:"some_unique_identifier"},c.a.createElement(v.c,{onClick:this.handleClick},"\u0420\u0435\u0434\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),c.a.createElement(v.c,{onClick:this.handleClick},"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),c.a.createElement(v.c,{onClick:this.handleClick},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"client"},"\u041a\u043b\u0438\u0435\u043d\u0442"),c.a.createElement("h1",{className:"crm"},"CRM"),c.a.createElement("h1",{className:"crm"},"CRM")),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"user"},c.a.createElement("img",{src:h.a,alt:""}),c.a.createElement("span",{className:"name"},"\u0412\u0438\u0442\u0430\u043b\u0438\u0439 \u0414\u0430\u0432\u0438\u0434\u0435\u043d\u043a\u043e")),c.a.createElement("h2",null,"\u041a\u0430\u043d\u0430\u043b \u0441\u0432\u044f\u0437\u0438:"),c.a.createElement("div",{className:"social"},c.a.createElement("div",{className:"item"},c.a.createElement("i",{className:"fab fa-telegram-plane"}),"@Vitaliy243"),c.a.createElement("div",{className:"item"},c.a.createElement("i",{className:"fas fa-phone-volume"}),"\u0412\u0438\u0442\u0430\u043b\u0438\u0439 \u0414\u0430\u0432\u0438\u0434\u0435\u043d\u043a\u043e")),c.a.createElement("h2",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438: "),c.a.createElement("div",{className:"contacts"},this.state.showInput&&c.a.createElement(E,{type:this.state.type,event:this.addNumberToState}),this.state.contacts.map(function(t){return c.a.createElement("div",{className:"number"},c.a.createElement("div",null,t.type,":"),c.a.createElement("span",{onClick:function(){return e.addNumber(t.type)}},c.a.createElement("i",{className:"fas fa-plus-circle"})),c.a.createElement("span",null,c.a.createElement(v.b,{id:"some_unique_identifier"},c.a.createElement("div",{onClick:function(){return e.handleRightClick(t.id)}},t.number))))})),c.a.createElement("h2",null,"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435:"),c.a.createElement("div",{className:"adds"},c.a.createElement("p",{contentEditable:"true"},'Lorem Ipsum - \u044d\u0442\u043e \u0442\u0435\u043a\u0441\u0442-"\u0440\u044b\u0431\u0430", \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0432 \u043f\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043d\u0435. Lorem Ipsum \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439 "\u0440\u044b\u0431\u043e\u0439" \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u043d\u0430 \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u0435 \u0441 \u043d\u0430\u0447\u0430\u043b\u0430 XVI \u0432\u0435\u043a\u0430. \u0412 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043d\u0435\u043a\u0438\u0439 \u0431\u0435\u0437\u044b\u043c\u044f\u043d\u043d\u044b\u0439 \u043f\u0435\u0447\u0430\u0442\u043d\u0438\u043a \u0441\u043e\u0437\u0434\u0430\u043b \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u0438 \u0444\u043e\u0440\u043c \u0448\u0440\u0438\u0444\u0442\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f Lorem Ipsum \u0434\u043b\u044f \u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u043a\u0438 \u043e\u0431\u0440\u0430\u0437\u0446\u043e\u0432. Lorem Ipsum \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0435\u0440\u0435\u0436\u0438\u043b \u0431\u0435\u0437 \u0437\u0430\u043c\u0435\u0442\u043d\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043f\u044f\u0442\u044c \u0432\u0435\u043a\u043e\u0432, \u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u0448\u0430\u0433\u043d\u0443\u043b \u0432 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0434\u0438\u0437\u0430\u0439\u043d. \u0415\u0433\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u043d\u043e\u0432\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0441\u043b\u0443\u0436\u0438\u043b\u0438 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043b\u0438\u0441\u0442\u043e\u0432 Letraset \u0441 \u043e\u0431\u0440\u0430\u0437\u0446\u0430\u043c\u0438 Lorem Ipsum \u0432 60-\u0445 \u0433\u043e\u0434\u0430\u0445 \u0438, \u0432 \u0431\u043e\u043b\u0435\u0435 \u043d\u0435\u0434\u0430\u0432\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f, \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u0432\u0451\u0440\u0441\u0442\u043a\u0438 \u0442\u0438\u043f\u0430 Aldus PageMaker, \u0432 \u0448\u0430\u0431\u043b\u043e\u043d\u0430\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f Lorem Ipsum.'))))}}]),t}(n.Component),y=function(){return c.a.createElement("div",null,c.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a.p+"static/media/user.2b6ae890.jpg"}},[[13,1,2]]]);
//# sourceMappingURL=main.44b9bc87.chunk.js.map