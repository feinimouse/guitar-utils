(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,a,t){e.exports=t(229)},111:function(e,a,t){},112:function(e,a,t){},22:function(e){e.exports=[{name:"C",level:"1",alias:["1","C","c"]},{name:"#C",level:"#1",alias:["#1","#C","#c","1#","C#","c#","b2","bD","bd","2b","Db","db"]},{name:"D",level:"2",alias:["2","D","d"]},{name:"#D",level:"#2",alias:["#2","#D","#d","2#","D#","d#","b3","bE","be","3b","Eb","eb"]},{name:"E",level:"3",alias:["3","E","e","b4","bF","bf","4b","Fb","fb"]},{name:"F",level:"4",alias:["4","F","f","#3","#E","#e","3#","E#","e#"]},{name:"#F",level:"#4",alias:["#4","#F","#f","4#","F#","f#","b5","bG","bg","5b","Gb","gb"]},{name:"G",level:"5",alias:["5","G","g"]},{name:"#G",level:"#5",alias:["#5","#G","#g","5#","G#","g#","b6","bA","ba","6b","Ab","ab"]},{name:"A",level:"6",alias:["6","A","a"]},{name:"#A",level:"#6",alias:["#6","#A","#a","6#","A#","a#","b7","bB","bb","7b","Bb"]},{name:"B",level:"7",alias:["7","B","b","b1","bC","bc","1b","Cb","cb"]}]},229:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(7),s=t.n(r),c=t(16),i=t(17),m=t(19),o=t(18),u=t(20),f=(t(111),t(52)),b=t.n(f),h=(t(112),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={page:"guitar"},t.handleClick=function(e){t.setState({page:e.key}),console.log("menu change to ",e.key)},t.handleSearch=function(e){console.log("search for ",e)},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.page;return l.a.createElement("header",{className:"nav flex-between"},l.a.createElement("div",{className:"ds-ib"},l.a.createElement("a",{href:"./#"},l.a.createElement("h1",{className:"nav-title ds-ib"},"Feinimouse"))),l.a.createElement("nav",{className:"ds-ib"},l.a.createElement(b.a,{onClick:this.handleClick,mode:"horizontal",selectedKeys:[e]},l.a.createElement(b.a.Item,{key:"guitar"},"\u5409\u4ed6\u5de5\u5177"),l.a.createElement(b.a.Item,{key:"blog"},"\u535a\u5ba2"),l.a.createElement(b.a.Item,{key:"coin"},"feinicoin"))))}}]),a}(l.a.Component)),E=t(43),p=t(41),d=t.n(p),g=t(42),v=t.n(g),y=t(21),k=t.n(y),N=t(15),O=t.n(N),C=t(10),T=t.n(C),F=t(22),j=t(50),w=t(51);F.forEach(function(e,a){e.next=F[a+1]||F[0],e.pre=F[a-1]||F[F.length-1],e.equalOf=function(a){return e.alias.indexOf(a.level)>=0},e.is=function(a){return e.alias.indexOf(a)>=0}}),Object.keys(j).forEach(function(e){j[e]=j[e].map(function(e){return F.find(function(a){return a.is(e)})})}),Object.keys(w).forEach(function(e){w[e]=w[e].map(function(e){return F.find(function(a){return a.is(e)})})});var S=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={string:1,fret:0,checked:null,sFrom:1,sTo:6,fFrom:0,fTo:12,answer:"",stringType:"standard"},t.handleRedo=function(){var e=t.state,a=e.sFrom,n=e.sTo,l=e.fFrom,r=e.fTo,s=Math.floor(Math.random()*(r-l+1)+l),c=Math.floor(Math.random()*(n-a+1)+a);t.setState({fret:s,string:c,checked:null,answer:""})},t.handleCheck=function(){for(var e=t.state,a=e.answer,n=e.stringType,r=e.string,s=e.fret,c=j[n][r-1],i=0;i<s;i+=1)c=c.next;var m=c.is(a)?l.a.createElement("span",{style:{color:"green"}},"\u56de\u7b54\u6b63\u786e"):l.a.createElement("span",{style:{color:"red"}},"\u56de\u7b54\u9519\u8bef\uff0c\u6b63\u786e\u7b54\u6848\u662f",c.name,"\u6216",c.level);t.setState({checked:m})},t.fScope=Object(E.a)(Array(25).fill("").keys()).map(function(e){return l.a.createElement(T.a.Option,{key:e,value:e},e)}),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){this.handleRedo()}},{key:"fixFret",value:function(e,a,t){var n=e,l=a;n>l&&(t?l=n:n=l),this.setState({fFrom:n,fTo:l})}},{key:"fixString",value:function(e,a,t){var n=e,l=a;n>l&&(t?l=n:n=l),this.setState({sFrom:n,sTo:l})}},{key:"render",value:function(){var e=this,a=this.state,t=a.fFrom,n=a.fTo,r=a.sFrom,s=a.sTo,c=a.fret,i=a.string,m=a.checked,o=a.stringType,u=a.answer,f=j[o].map(function(e,a){return l.a.createElement(T.a.Option,{value:a+1,key:e.name},a+1)});return l.a.createElement(d.a,{className:"guitar-card-size"},l.a.createElement(O.a,{defaultActiveKey:"play"},l.a.createElement(O.a.TabPane,{tab:"\u6307\u677f\u7ec3\u4e60",key:"play"},l.a.createElement("p",null,"\u6839\u636e\u63d0\u793a\uff0c\u5199\u51fa\u5bf9\u5e94\u4f4d\u7f6e\u7684\u97f3\u540d"),l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("strong",null,"\u5f26\u6570\uff1a"),i)),l.a.createElement("p",null,l.a.createElement("strong",null,"\u54c1\u6570\uff1a"),c),l.a.createElement("div",null,l.a.createElement(v.a,{value:u,placeholder:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u97f3\u7b26",className:"guitar-ele-l",onChange:function(a){e.setState({answer:a.target.value.trim()})}}),l.a.createElement(k.a,{type:"primary",className:"ml-ss",onClick:this.handleCheck,htmlType:"button"},"\u9a8c\u8bc1"),l.a.createElement(k.a,{type:"circle",className:"ml-ss",icon:"redo",onClick:this.handleRedo,htmlType:"button"}),l.a.createElement("div",{style:{height:"2em"}},m))),l.a.createElement(O.a.TabPane,{tab:"\u8bbe\u7f6e",key:"setting"},l.a.createElement("div",{className:"mb-s"},l.a.createElement("strong",null,"\u8c03\u5f26\u65b9\u5f0f\uff1a"),l.a.createElement(T.a,{value:o,className:"guitar-ele-m",onChange:function(a){e.setState({stringType:a})}},Object.keys(j).map(function(e){return l.a.createElement(T.a.Option,{key:e,value:e},e)}))),l.a.createElement("p",null,l.a.createElement("strong",null,"\u54c1\u683c\u8303\u56f4\uff1a")),l.a.createElement("div",{className:"mb-s"},l.a.createElement("span",null,"\u4ece\uff1a"),l.a.createElement(T.a,{value:t,className:"guitar-ele-s",onChange:function(a){e.fixFret(a,n,!0)}},this.fScope),l.a.createElement("span",{className:"ml-ss"},"\u5230\uff1a"),l.a.createElement(T.a,{value:n,className:"guitar-ele-s",onChange:function(a){e.fixFret(t,a,!1)}},this.fScope),l.a.createElement("span",{className:"ml-ss"},"\u54c1")),l.a.createElement("p",null,l.a.createElement("strong",null,"\u5f26\u8303\u56f4\uff1a")),l.a.createElement("div",{className:"mb-s"},l.a.createElement("span",null,"\u4ece\uff1a"),l.a.createElement(T.a,{value:r,className:"guitar-ele-s",onChange:function(a){e.fixString(a,s,!0)}},f),l.a.createElement("span",{className:"ml-ss"},"\u5230\uff1a"),l.a.createElement(T.a,{value:s,className:"guitar-ele-s",onChange:function(a){e.fixString(r,a,!1)}},f),l.a.createElement("span",{className:"ml-ss"},"\u5f26")))))}}]),a}(l.a.Component),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={stringType:"standard",string:6,fret:0,fFrom:0,fTo:12,answer:"",sound:null,checked:null},t.handleRedo=function(){for(var e=t.state,a=e.fFrom,n=e.fTo,l=e.string,r=e.stringType,s=Math.floor(Math.random()*(n-a+1)+a),c=j[r][l-1],i=0;i<s;i+=1)c=c.next;t.setState({fret:s,sound:c,checked:null,answer:""})},t.handleCheck=function(){var e=t.state,a=e.fret,n=e.answer,r=Number(n),s=r===a||r===a+12?l.a.createElement("span",{style:{color:"green"}},"\u56de\u7b54\u6b63\u786e"):l.a.createElement("span",{style:{color:"red"}},"\u56de\u7b54\u9519\u8bef\uff0c\u6b63\u786e\u7b54\u6848\u662f\u7b2c",a,"\u54c1");t.setState({checked:s})},t.fretOption=Object(E.a)(Array(25).fill("").keys()).map(function(e){return l.a.createElement(T.a.Option,{key:e,value:e},e)}),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){this.handleRedo()}},{key:"fixFret",value:function(e,a,t){var n=e,l=a;n>l&&(t?l=n:n=l),this.setState({fFrom:n,fTo:l})}},{key:"render",value:function(){var e=this,a=this.state,t=a.fFrom,n=a.fTo,r=a.string,s=a.checked,c=a.sound,i=a.stringType,m=a.answer;return l.a.createElement(d.a,{className:"guitar-card-size"},l.a.createElement(O.a,{defaultActiveKey:"play"},l.a.createElement(O.a.TabPane,{tab:"\u97f3\u7b26\u7ec3\u4e60",key:"play"},l.a.createElement("p",null,"\u6839\u636e\u63d0\u793a\uff0c\u5199\u51fa\u5bf9\u5e94\u4f4d\u7f6e\u7684\u54c1\u683c"),l.a.createElement("div",{className:"mb-s"},l.a.createElement("strong",null,"\u5f26\u6570\uff1a"),l.a.createElement(T.a,{value:r,className:"guitar-ele-m",onChange:function(a){e.setState({string:a})}},j[i].map(function(e,a){return l.a.createElement(T.a.Option,{value:a+1,key:e.name},a+1)}))),l.a.createElement("p",null,l.a.createElement("strong",null,"\u97f3\u540d\uff1a"),c.name),l.a.createElement("div",null,l.a.createElement(v.a,{value:m,placeholder:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u54c1\u6570",className:"guitar-ele-l",onChange:function(a){e.setState({answer:a.target.value.trim()})}}),l.a.createElement(k.a,{type:"primary",className:"ml-ss",onClick:this.handleCheck,htmlType:"button"},"\u9a8c\u8bc1"),l.a.createElement(k.a,{type:"circle",className:"ml-ss",icon:"redo",onClick:this.handleRedo,htmlType:"button"}),l.a.createElement("div",{style:{height:"2em"}},s))),l.a.createElement(O.a.TabPane,{tab:"\u8bbe\u7f6e",key:"setting"},l.a.createElement("div",{className:"mb-s"},l.a.createElement("strong",null,"\u8c03\u5f26\u65b9\u5f0f\uff1a"),l.a.createElement(T.a,{value:i,className:"guitar-ele-m",onChange:function(a){e.setState({stringType:a,string:1})}},Object.keys(j).map(function(e){return l.a.createElement(T.a.Option,{key:e,value:e},e)}))),l.a.createElement("p",null,l.a.createElement("strong",null,"\u54c1\u683c\u8303\u56f4\uff1a")),l.a.createElement("div",{className:"mb-s"},l.a.createElement("span",null,"\u4ece\uff1a"),l.a.createElement(T.a,{value:t,className:"guitar-ele-s",onChange:function(a){e.fixFret(a,n,!0)}},this.fretOption),l.a.createElement("span",{className:"ml-ss"},"\u5230\uff1a"),l.a.createElement(T.a,{value:n,className:"guitar-ele-s",onChange:function(a){e.fixFret(t,a,!1)}},this.fretOption),l.a.createElement("span",{className:"ml-ss"},"\u54c1")))))}}]),a}(l.a.Component),A=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={stringType:"standard",frets:[{fret:0,disabled:!1}],answers:[""],checks:[""],sFrom:1,sTo:6,fFrom:0,fTo:12},t.handelAnswerChange=function(e,a){var n=t.state.answers;n[e]=a.target.value.trim(),t.setState({answers:n})},t.handleRedo=function(){var e=t.state,a=e.fFrom,n=e.fTo,l=e.sFrom,r=e.sTo,s=e.stringType,c=j[s].map(function(e,t){var s={fret:0,disabled:!1};return t<l-1||t>r-1?(s.disabled=!0,s):(s.fret=Math.floor(Math.random()*(n-a+1)+a),s)});t.setState({frets:c,answers:Array(j[s].length).fill(""),checks:Array(j[s].length).fill("")})},t.handleCheck=function(){var e=t.state,a=e.stringType,n=e.frets,r=e.checks,s=e.answers;j[a].map(function(e,a){if(n[a].disabled)return null;for(var t=e,l=0;l<n[a].fret;l+=1)t=t.next;return t}).forEach(function(e,a){e&&(r[a]=e.is(s[a])?l.a.createElement("span",{className:"ml-s",style:{color:"green"}},"\u56de\u7b54\u6b63\u786e"):l.a.createElement("span",{className:"ml-s",style:{color:"red"}},"".concat(e.name,"\u6216").concat(e.level)))}),t.setState({checks:r})},t.fixFret=function(e,a,n){var l=e,r=a;l>r&&(n?r=l:l=r),t.setState({fFrom:l,fTo:r})},t.fixString=function(e,a,n){var l=e,r=a;l>r&&(n?r=l:l=r),t.setState({sFrom:l,sTo:r})},t.fScope=Object(E.a)(Array(25).fill("").keys()).map(function(e){return l.a.createElement(T.a.Option,{key:e,value:e},e)}),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){this.handleRedo()}},{key:"render",value:function(){var e=this,a=this.state,t=a.frets,n=a.checks,r=a.sFrom,s=a.sTo,c=a.fFrom,i=a.fTo,m=a.stringType,o=a.answers,u=j[m].map(function(e,a){return l.a.createElement(T.a.Option,{value:a+1,key:e.name},a+1)});return l.a.createElement(d.a,{className:"guitar-card-size"},l.a.createElement(O.a,{defaultActiveKey:"play"},l.a.createElement(O.a.TabPane,{tab:"\u8bc6\u8c31\u7ec3\u4e60",key:"play"},l.a.createElement("p",null,"\u6839\u636e\u516d\u7ebf\u8c31\uff0c\u5199\u51fa\u5bf9\u5e94\u4f4d\u7f6e\u7684\u97f3\u7b26"),l.a.createElement("div",{className:"mb-s"},t.map(function(a,t){var r=a.fret,s=a.disabled;return l.a.createElement("div",{key:t},l.a.createElement("span",null,"\u2014\u2014",l.a.createElement("strong",{className:"ds-ib",style:{width:"2em",textAlign:"center"}},r),"\u2014\u2014"),l.a.createElement(v.a,{value:o[t],disabled:s,placeholder:"\u8bf7\u8f93\u5165\u97f3\u7b26",className:"ml-s guitar-ele-m",onChange:function(a){return e.handelAnswerChange(t,a)}}),l.a.createElement("span",null,n[t]))})),l.a.createElement("div",null,l.a.createElement(k.a,{type:"primary",className:"ml-s",onClick:this.handleCheck,htmlType:"button"},"\u9a8c\u8bc1"),l.a.createElement(k.a,{type:"circle",className:"ml-s",icon:"redo",onClick:this.handleRedo,htmlType:"button"}))),l.a.createElement(O.a.TabPane,{tab:"\u8bbe\u7f6e",key:"setting"},l.a.createElement("div",{className:"mb-s"},l.a.createElement("strong",null,"\u8c03\u5f26\u65b9\u5f0f\uff1a"),l.a.createElement(T.a,{value:m,className:"guitar-ele-m",onChange:function(a){e.setState({stringType:a})}},Object.keys(j).map(function(e){return l.a.createElement(T.a.Option,{key:e,value:e},e)}))),l.a.createElement("p",null,l.a.createElement("strong",null,"\u54c1\u683c\u8303\u56f4\uff1a")),l.a.createElement("div",{className:"mb-s"},l.a.createElement("span",null,"\u4ece\uff1a"),l.a.createElement(T.a,{value:c,className:"guitar-ele-s",onChange:function(a){e.fixFret(a,i,!0)}},this.fScope),l.a.createElement("span",{className:"ml-ss"},"\u5230\uff1a"),l.a.createElement(T.a,{value:i,className:"guitar-ele-s",onChange:function(a){e.fixFret(c,a,!1)}},this.fScope),l.a.createElement("span",{className:"ml-ss"},"\u54c1")),l.a.createElement("p",null,l.a.createElement("strong",null,"\u5f26\u8303\u56f4\uff1a")),l.a.createElement("div",{className:"mb-s"},l.a.createElement("span",null,"\u4ece\uff1a"),l.a.createElement(T.a,{value:r,className:"guitar-ele-s",onChange:function(a){e.fixString(a,s,!0)}},u),l.a.createElement("span",{className:"ml-ss"},"\u5230\uff1a"),l.a.createElement(T.a,{value:s,className:"guitar-ele-s",onChange:function(a){e.fixString(r,a,!1)}},u),l.a.createElement("span",{className:"ml-ss"},"\u5f26")))))}}]),a}(l.a.Component),M=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(h,null),l.a.createElement("div",{className:"app-container flex-start"},l.a.createElement(S,null),l.a.createElement(x,null),l.a.createElement(A,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e){e.exports={standard:["3","7","5","2","6","3"],dropD:["3","7","5","2","6","2"]}},51:function(e){e.exports={C:["1","2","3","4","5","6","7"],D:["2","3","#4","5","6","7","#1"],E:["3","#4","#5","6","7","#1","#2"],F:["4","5","6","b7","1","2","3"],G:["5","6","7","1","2","3","#4"],A:["6","7","#1","2","3","#4","#5"],B:["7","#1","#2","3","#4","#5","#6"],bB:["b7","1","2","b3","4","5","6"],bE:["b3","4","5","b6","b7","1","2"],bA:["b6","b7","1","b2","b3","4","5"],bD:["b2","b3","4","b5","b6","b7","1"],bG:["b5","b6","b7","b1","b2","b3","4"]}}},[[106,1,2]]]);
//# sourceMappingURL=main.f27d794d.chunk.js.map