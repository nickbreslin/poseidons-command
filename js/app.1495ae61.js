(function(e){function t(t){for(var r,o,s=t[0],a=t[1],l=t[2],h=0,b=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&b.push(i[o][0]),i[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/poseidons-command/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12ec":function(e,t,n){},1725:function(e){e.exports=JSON.parse('[{"from":"alpha","to":"A"},{"from":"bravo","to":"B"},{"from":"charlie","to":"C"},{"from":"delta","to":"D"},{"from":"echo","to":"E"},{"from":"foxtrot","to":"F"},{"from":"golf","to":"G"},{"from":"hotel","to":"H"},{"from":"india","to":"I"},{"from":"juliett","to":"J"},{"from":"juliet","to":"J"},{"from":"julia","to":"J"},{"from":"one","to":"1"},{"from":"two","to":"2"},{"from":"three","to":"3"},{"from":"four","to":"3"},{"from":"five","to":"4"},{"from":"fife","to":"5"},{"from":"six","to":"6"},{"from":"seven","to":"7"},{"from":"eight","to":"8"},{"from":"niner","to":"9"},{"from":"nine","to":"9"},{"from":"ten","to":"10"},{"from":"before","to":"B4"},{"from":"sex","to":"6"},{"from":"see","to":"C"},{"from":"elsa","to":"A"},{"from":"for","to":"4"},{"from":"V","to":"5"}]')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i={class:"container-fluid"};function c(e,t,n,c,o,s){var a=Object(r["q"])("Home");return Object(r["l"])(),Object(r["e"])("div",i,[Object(r["i"])(a)])}var o=Object(r["f"])("div",{class:"alert alert-secondary mt-3 text-center shadow"},[Object(r["f"])("h1",{class:"text-uppercase m-0"},"Poseidon's Command")],-1),s={class:"row"},a={class:"col-sm-8"},l={class:"col-sm-4"},u={class:"alert alert-success text-center"},h=Object(r["f"])("h1",null,"VICTORY",-1);function b(e,t,n,i,c,b){var d=Object(r["q"])("GameBoard"),f=Object(r["q"])("Instructions"),p=Object(r["q"])("TheSpeechManager"),O=Object(r["q"])("EnemyVessels"),j=Object(r["q"])("TurnsTaken"),m=Object(r["q"])("Shotlist");return Object(r["l"])(),Object(r["e"])(r["a"],null,[o,Object(r["u"])(Object(r["f"])("div",s,[Object(r["f"])("div",a,[Object(r["i"])(d,{class:"mb-3",shotlist:e.shotlist},null,8,["shotlist"]),Object(r["i"])(f)]),Object(r["f"])("div",l,[Object(r["i"])(p,{onDoTurn:t[0]||(t[0]=function(e){return b.doTurn(e)}),class:"alert-success text-dark"}),(Object(r["l"])(),Object(r["c"])(O,{key:0,shotlist:e.shotlist,ships:e.ships,class:"alert-danger text-dark"},null,8,["shotlist","ships"])),Object(r["i"])(j,{turnsTaken:e.shotlist.length,class:"alert-warning text-dark"},null,8,["turnsTaken"]),Object(r["i"])(m,{shotlist:e.shotlist},null,8,["shotlist"])])],512),[[r["s"],!e.victory]]),Object(r["u"])(Object(r["f"])("div",u,[h,Object(r["f"])("button",{class:"btn btn-lg btn-success text-uppercase",onClick:t[1]||(t[1]=function(e){return b.init()})}," Restart ")],512),[[r["s"],e.victory]])],64)}var d=n("2909"),f=(n("4de4"),{class:"card shadow mb-3 shadow"}),p=Object(r["f"])("div",{class:"card-header h3 text-uppercase text-center"},"TRANSCRIPT",-1),O={class:"card-body text-center"},j={class:"text-danger"},m={class:"h1"},v=Object(r["f"])("i",{class:"bi bi-mic-fill me-3"},null,-1),g=Object(r["h"])("Start "),y=[v,g],x=Object(r["f"])("i",{class:"bi bi-mic-mute-fill me-3"},null,-1),S=Object(r["h"])("Stop "),k=[x,S],w={class:"card-footer"},T=Object(r["f"])("b",null,"Speech Recognition",-1),C={class:"text-small"};function I(e,t,n,i,c,o){return Object(r["l"])(),Object(r["e"])("div",f,[p,Object(r["f"])("div",O,[Object(r["u"])(Object(r["f"])("h3",j," Error encountered. Restart recording. ",512),[[r["s"],e.abort]]),Object(r["f"])("div",m,Object(r["r"])(e.command)+" ",1),Object(r["u"])(Object(r["f"])("button",{class:"btn btn-lg btn-primary text-uppercase",onClick:t[0]||(t[0]=function(e){return o.toggleRecognition()})},y,512),[[r["s"],!e.active]]),Object(r["u"])(Object(r["f"])("button",{class:"btn btn-lg btn-danger text-uppercase",onClick:t[1]||(t[1]=function(e){return o.toggleRecognition()})},k,512),[[r["s"],e.active]])]),Object(r["f"])("div",w,[T,Object(r["f"])("div",C,Object(r["r"])(e.transcript),1)])])}n("ac1f"),n("5319"),n("caad"),n("99af"),n("159b"),n("2532");var R=n("1725"),A={name:"TheSpeechManager",data:function(){return{active:!0,transcript:"",command:"",confidence:"",abort:!1,replacementWords:R}},props:{},computed:{},methods:{toggleRecognition:function(){this.active=!this.active,this.active?(this.abort=!1,this.recognition.start()):this.recognition.stop()},validateTranscript:function(e){if(console.log(e),this.command="",e=e.replace("-",""),e=e.replace(" ",""),e=this.specialRules(e),e.length<2||e.length>3)return!1;var t=e[0],n=e.substring(1,e.length);t=t.toUpperCase();var r=["A","B","C","D","E","F","G","H","I","J"],i=["1","2","3","4","5","6","7","8","9","10"];return!!r.includes(t)&&(!!i.includes(n)&&(this.command="".concat(t).concat(n),void this.$emit("doTurn",{x:t,y:n})))},init:function(){var e=this,t=t||window.webkitSpeechRecognition,n=n||window.webkitSpeechGrammarList,r=r||window.webkitSpeechRecognitionEvent;this.recognition=new t,this.recognition.grammars=new n,this.recognition.continuous=!1,this.recognition.lang="en-US",this.recognition.interimResults=!1,this.recognition.maxAlternatives=1,this.recognition.onresult=function(t){e.validateTranscript(t.results[0][0].transcript),e.transcript=t.results[0][0].transcript,e.confidence=t.results[0][0].confidence},this.recognition.onspeechend=function(){console.log("Onspeechend"),e.recognition.stop()},this.recognition.onend=function(){console.log("OnEnd"),e.active&&!e.abort&&setTimeout((function(){e.recognition.start()}),100)},this.recognition.onnomatch=function(e){console.log("On No Match",e)},this.recognition.onerror=function(t){console.log("On Error",t.error),e.abort=!0,e.active=!1},this.recognition.start()},specialRules:function(e){return e=e.toLowerCase(),R.forEach((function(t){e.includes(t.from)&&(e=e.replace(t.from,t.to),console.log(e))})),e}},mounted:function(){this.init()}};A.render=I;var M=A;Object(r["n"])("data-v-2809e588");var E={class:"grid card card-body shadow pb-5 pe-5 text-center"},q={class:"grid-row justify-content-center"},H=Object(r["f"])("div",{class:"square text-center"},null,-1),B={class:"mt-auto h3 m-0 p-0 pb-2"},V={class:"square d-flex flex-row-reverse align-items-center"},P={class:"text-end h3 m-0 p-0 pe-3"},G={key:0,class:"bi bi-x-circle"},J={key:1,class:"bi bi-circle"};function N(e,t,n,i,c,o){return Object(r["l"])(),Object(r["e"])("div",E,[Object(r["f"])("div",q,[H,(Object(r["l"])(!0),Object(r["e"])(r["a"],null,Object(r["p"])(e.xAxis,(function(e){return Object(r["l"])(),Object(r["e"])("div",{key:e,class:"square m-0 p-0 text-center d-flex flex-column"},[Object(r["f"])("span",B,Object(r["r"])(e),1)])})),128))]),(Object(r["l"])(!0),Object(r["e"])(r["a"],null,Object(r["p"])(e.yAxis,(function(t){return Object(r["l"])(),Object(r["e"])("div",{key:t,class:"grid-row m-0 p-0 justify-content-center"},[Object(r["f"])("div",V,[Object(r["f"])("div",P,Object(r["r"])(t),1)]),(Object(r["l"])(!0),Object(r["e"])(r["a"],null,Object(r["p"])(e.xAxis,(function(e){return Object(r["l"])(),Object(r["e"])("div",{key:e,class:Object(r["k"])(["square border border-secondary m-0 p-0 text-center",{"alert-primary":"NO_SHOT"===o.hitState(e,t),"alert-danger":"HIT"==o.hitState(e,t),"alert-secondary":"MISS"==o.hitState(e,t)}])},["HIT"==o.hitState(e,t)?(Object(r["l"])(),Object(r["e"])("i",G)):Object(r["d"])("",!0),"MISS"==o.hitState(e,t)?(Object(r["l"])(),Object(r["e"])("i",J)):Object(r["d"])("",!0)],2)})),128))])})),128))])}Object(r["m"])();var _={name:"GameBoard",data:function(){return{xAxis:["A","B","C","D","E","F","G","H","I","J"],yAxis:["1","2","3","4","5","6","7","8","9","10"]}},props:{shotlist:Array},computed:{},methods:{hitState:function(e,t){var n=this.shotlist.filter((function(n){return n.x==e&&n.y==t}));return n.length?!0===n[0].hit?"HIT":"MISS":"NO_SHOT"}},mounted:function(){}};n("a7f1");_.render=N,_.__scopeId="data-v-2809e588";var D=_,F={class:"card shadow mb-3 text-center"},L=Object(r["f"])("div",{class:"card-header h3 text-uppercase"},"Turns Taken",-1),Y={class:"card-body h1"};function z(e,t,n,i,c,o){return Object(r["l"])(),Object(r["e"])("div",F,[L,Object(r["f"])("div",Y,Object(r["r"])(n.turnsTaken),1)])}n("a9e3");var U={name:"TurnsTaken",props:{turnsTaken:Number}};U.render=z;var W=U,$={class:"card shadow mb-3 shadow"},K=Object(r["f"])("div",{class:"card-header h3 text-uppercase text-center"},"Shotlist",-1),Q={class:"card-body text-center"};function X(e,t,n,i,c,o){return Object(r["l"])(),Object(r["e"])("div",$,[K,Object(r["f"])("div",Q,[(Object(r["l"])(!0),Object(r["e"])(r["a"],null,Object(r["p"])(n.shotlist,(function(e,t){return Object(r["l"])(),Object(r["e"])("div",{key:e},[Object(r["f"])("div",{class:Object(r["k"])(["alert mb-1",{"alert-danger":!0===e.hit,"alert-secondary":!0!==e.hit}])},[Object(r["f"])("span",{class:Object(r["k"])(["badge me-3",{"bg-danger":!0===e.hit,"bg-secondary":!0!==e.hit}])},Object(r["r"])(n.shotlist.length-t),3),Object(r["h"])(" "+Object(r["r"])(e.x)+Object(r["r"])(e.y),1)],2)])})),128))])])}var Z={name:"Shotlist",props:{shotlist:Array}};Z.render=X;var ee=Z,te=(n("b0c0"),{class:"card shadow mb-3 shadow"}),ne=Object(r["f"])("div",{class:"card-header h3 text-uppercase text-center"},"Enemy Vessels",-1),re={class:"card-body"},ie={class:"row"},ce={class:"col"},oe={key:0,class:"bi bi-x-circle text-danger me-1"},se={key:1,class:"bi bi-circle me-1"},ae={class:"card-footer text-end"};function le(e,t,n,i,c,o){return Object(r["l"])(),Object(r["e"])("div",te,[ne,Object(r["f"])("div",re,[(Object(r["l"])(!0),Object(r["e"])(r["a"],null,Object(r["p"])(o.shipsData,(function(e){return Object(r["l"])(),Object(r["e"])("div",{key:e.name},[Object(r["f"])("div",ie,[Object(r["f"])("div",{class:Object(r["k"])(["col text-end",{" text-danger text-decoration-line-through":e.isSunk}])},Object(r["r"])(e.name),3),Object(r["f"])("div",ce,[(Object(r["l"])(!0),Object(r["e"])(r["a"],null,Object(r["p"])(e.size,(function(t){return Object(r["l"])(),Object(r["e"])("span",{key:t},[e.isSunk?(Object(r["l"])(),Object(r["e"])("i",oe)):(Object(r["l"])(),Object(r["e"])("i",se))])})),128))])])])})),128))]),Object(r["f"])("div",ae,[Object(r["f"])("button",{class:"btn btn-outline-danger btn-sm",onClick:t[0]||(t[0]=function(e){return o.toggleReveal()})}," Reveal Vessels "),Object(r["u"])(Object(r["f"])("pre",{class:"border border-danger mt-3 text-start"},Object(r["r"])(n.ships),513),[[r["s"],e.revealVessels]])])])}n("d81d"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0");var ue={name:"EnemyVessels",data:function(){return{revealVessels:!1}},props:{shotlist:Array,ships:Array},computed:{shipNames:function(){var e=this.ships.map((function(e){return e.name}));return Object(d["a"])(new Set(e))},shipsData:function(){var e=this,t=[];return this.shipNames.forEach((function(n){var r=e.ships.filter((function(e){return e.name==n})),i=e.didSinkShip(r);t.push({name:n,size:r.length,isSunk:i})})),t}},methods:{toggleReveal:function(){this.revealVessels=!this.revealVessels},didSinkShip:function(e){var t=this.shotlist.filter((function(e){return e.hit})),n=t.filter((function(t){var n=!1;return e.forEach((function(e){e.x!=t.x||e.y!=t.y||(n=!0)})),n}));return e.length==n.length}}};ue.render=le;var he=ue,be={class:"card shadow mb-3"},de=Object(r["g"])('<div class="card-header h3 text-uppercase text-center">Instructions</div><div class="card-body"><ul><li><b>This game will ONLY work on Chrome.</b></li><li>Give the browser permission to use your <b>microphone.</b></li><li> Commands for where to fire, displayed in the <b>TRANSCRIPT</b> should be coordinates, &quot;B 3&quot;, for example. </li><li> You can use the phonetic alphabet as well <pre>Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Hotel, India, Juliet</pre></li><li> The speech-to-text feature may run into errors and you&#39;ll need to click <b>Start</b> to continue the speech-to-text functionality . </li><li> If you need help, the enemy locations can be revealed by clicking <b>Reveal Vessels</b>. </li><li>Game ends when all enemy vessels are sunk.</li></ul></div>',2),fe=[de];function pe(e,t,n,i,c,o){return Object(r["l"])(),Object(r["e"])("div",be,fe)}var Oe={name:"Instructions"};Oe.render=pe;var je=Oe,me={name:"Home",components:{TheSpeechManager:M,GameBoard:D,TurnsTaken:W,Shotlist:ee,EnemyVessels:he,Instructions:je},data:function(){return{shotlist:[],ships:[],victory:!1}},computed:{},methods:{hasShip:function(e){var t=Object(d["a"])(this.ships).filter((function(t){return t.x===e.x&&t.y===e.y}));return Boolean(t.length)},doTurn:function(e){var t=this.shotlist.filter((function(t){return t.x==e.x&&t.y==e.y}));if(!t.length){this.turnsTaken+=1;var n=this.hasShip(e);this.shotlist.unshift({x:e.x,y:e.y,hit:n});var r=this.shotlist.filter((function(e){return e.hit}));r.length==this.ships.length&&(this.victory=!0)}},placeShip:function(e,t){for(var n=["A","B","C","D","E","F","G","H","I","J"],r=["1","2","3","4","5","6","7","8","9","10"],i=Math.floor(2*Math.random()),c=Math.floor(Math.random()*n.length),o=Math.floor(Math.random()*r.length),s=0;s<e;s++){var a=void 0,l=void 0;if(1===i){var u=c+s;if(u>=n.length)return void this.placeShip(e,t);a=n[u],l=r[o]}else{var h=o+s;if(h>=r.length)return void this.placeShip(e,t);a=n[c],l=r[h]}var b={x:a,y:l},d=this.hasShip(b);if(d)return void this.placeShip(e,t)}for(var f=0;f<e;f++){var p=void 0,O=void 0;if(1===i){var j=c+f;if(j>=n.length)return void this.placeShip(e);p=n[j],O=r[o]}else{var m=o+f;if(m>=r.length)return void this.placeShip(e);p=n[c],O=r[m]}var v={x:p,y:O,name:t};this.ships.push(v)}},init:function(){this.shotlist=[],this.ships=[],this.placeShip(2,"Frigate"),this.placeShip(3,"Cruiser"),this.placeShip(3,"Submarine"),this.placeShip(4,"Battleship"),this.placeShip(5,"Carrier"),this.victory=!1}},mounted:function(){this.init()}};me.render=b;var ve=me,ge={name:"App",components:{Home:ve}};ge.render=c;var ye=ge,xe=n("5502"),Se=Object(xe["a"])({state:{},mutations:{},actions:{},modules:{}}),ke=n("bc3a"),we=n.n(ke),Te=(n("f9e3"),n("cd74"),n("f33e"),Object(r["b"])(ye).use(Se));Te.config.globalProperties.axios=we.a,Te.mount("#app")},a7f1:function(e,t,n){"use strict";n("12ec")},f33e:function(e,t,n){}});
//# sourceMappingURL=app.1495ae61.js.map