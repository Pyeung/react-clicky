(this["webpackJsonpreact-clicky"]=this["webpackJsonpreact-clicky"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(2),r=a.n(i),o=(a(14),function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"jumbotron"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Clicky"))))}),l=a(6),m=a(3),s=a(4),d=a(7),g=a(5),u=a(8),p=0;function h(e){p++,this.id=p,this.img=e,this.clicked=!1}var k=["#","#","#","#","#","#","#","#","#","#","#","#"].map((function(e){return new h(e)})),v=[{id:1,image:"./image/antman.jpg"},{id:2,image:"https://pyeung.github.io/react-clicky/image/hulk.jpg?raw=true"},{id:3,image:"https://pyeung.github.io/react-clicky/image/black-panther.jpg?raw=true"},{id:4,image:"./image/groot.jpg"},{id:5,image:"./image/ironman.jpg"},{id:6,image:"./image/falcon.jpg"},{id:7,image:"./image/scarlet.jpg"},{id:8,image:"./image/winter.jpg"},{id:9,image:"./image/thor.jpg"},{id:10,image:"./image/capt-marvel.jpg"},{id:11,image:"./image/capt-america.jpg"},{id:12,image:"./image/spider.jpg"}],f=function(e){var t={maxWitdh:"150px",display:"inline-block",backgroundImage:"url(".concat(e.background,")"),backgroundSize:"cover",backgroundPosition:"top"};return c.a.createElement("div",{className:"card",style:t,onClick:function(){return e.handleClick(e.card.id)}},c.a.createElement("h3",null,e.card.id))},S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={cards:k,clicked:[],Score:0,TopScore:0},a.scoreUpdate=function(){var e=a.state.Score+1;a.setState({Score:e,TopScore:a.state.TopScore<e?e:a.state.TopScore},(function(){return localStorage.setItem("clickyGame",JSON.stringify(a.state.TopScore))}))},a.handleClick=function(e){console.log(e,a.state.clicked),a.state.clicked.includes(e)?(console.log("RESET"),a.setState({clicked:[],Score:0})):(a.scoreUpdate(),a.setState({clicked:[].concat(Object(l.a)(a.state.clicked),[e])}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("clickyGame"))||0;console.log(k),this.setState({TopScore:e||0})}},{key:"randomizer",value:function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}},{key:"render",value:function(){var e=this,t=this.randomizer(v);return c.a.createElement("div",{className:"container"},"Score: ",this.state.Score,", TopScore: ",this.state.TopScore," ",c.a.createElement("br",null),c.a.createElement("div",{className:"GameBox"},this.state.cards.map((function(a,n){return c.a.createElement(f,{key:n+"-card",card:a,handleClick:e.handleClick,background:t[n].image})}))))}}]),t}(n.Component);a(15);var y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(o,null),c.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4545f4fe.chunk.js.map