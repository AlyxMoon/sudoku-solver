(function(e){function t(t){for(var s,i,l=t[0],c=t[1],u=t[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);a&&a(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/sudoku-solver/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var a=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2d98":function(e,t,n){"use strict";var s=n("9b98"),r=n.n(s);r.a},4886:function(e,t,n){"use strict";var s=n("7b8b"),r=n.n(s);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var s={};n.r(s),n.d(s,"setOption",(function(){return K})),n.d(s,"setActiveCell",(function(){return Q})),n.d(s,"updateCell",(function(){return X})),n.d(s,"updatePossibleAnswers",(function(){return Z})),n.d(s,"solve",(function(){return ee})),n.d(s,"stop",(function(){return te})),n.d(s,"togglePause",(function(){return ne})),n.d(s,"solveByBruteForce",(function(){return se}));var r={};n.r(r),n.d(r,"SET_OPTION",(function(){return re})),n.d(r,"PAUSE_ALGORITHM",(function(){return oe})),n.d(r,"RESUME_ALGORITHM",(function(){return ie})),n.d(r,"BEGIN_SOLVING",(function(){return le})),n.d(r,"CANCEL_SOLVING",(function(){return ce})),n.d(r,"FINISHED_SOLVING",(function(){return ue})),n.d(r,"SET_THEME",(function(){return ae})),n.d(r,"SET_ACTIVE_CELL",(function(){return pe})),n.d(r,"SET_CELLS",(function(){return fe})),n.d(r,"UPDATE_CELL",(function(){return de})),n.d(r,"SET_POSSIBLE_ANSWERS",(function(){return ve})),n.d(r,"SET_COMPUTED_CELLS",(function(){return be})),n.d(r,"UPDATE_COMPUTED_CELL",(function(){return me}));var o={};n.r(o),n.d(o,"state",(function(){return Oe})),n.d(o,"actions",(function(){return s})),n.d(o,"mutations",(function(){return r}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("a026"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"theme-"+e.options.theme,attrs:{id:"app"}},[n("h1",[e._v("Sudoku Solver")]),n("div",{staticClass:"content"},[n("MenuCommands"),n("div",{staticClass:"grid"},[e.solving?e._l(81,(function(t){return n("div",{key:"cell-"+t,staticClass:"cell"},[e.cells[t-1]?n("span",[e._v(e._s(e.cells[t-1]))]):e.computedCells[t-1]?n("span",{staticClass:"auto-number"},[e._v(e._s(e.computedCells[t-1]))]):e._e()])})):e._l(81,(function(t){return n("div",{key:"cell-"+t,staticClass:"cell",class:{selected:t-1===e.activeCell},on:{click:function(n){return e.setActiveCell(t-1)}}},[e.cells[t-1]?n("span",[e._v(e._s(e.cells[t-1]))]):e._e(),e.options.showPossibleAnswers&&!e.cells[t-1]&&"object"===typeof e.possibleAnswers[t-1]?n("div",{staticClass:"cell-answers-wrapper"},[n("span",[e._v(e._s(e.possibleAnswers[t-1][1]?1:""))]),n("span",[e._v(e._s(e.possibleAnswers[t-1][2]?2:""))]),n("span",[e._v(e._s(e.possibleAnswers[t-1][3]?3:""))]),n("span",[e._v(e._s(e.possibleAnswers[t-1][4]?4:""))]),n("span",[e._v(e._s(e.possibleAnswers[t-1][5]?5:""))]),n("span",[e._v(e._s(e.possibleAnswers[t-1][6]?6:""))]),n("span",[e._v(e._s(e.possibleAnswers[t-1][7]?7:""))]),n("span",[e._v(e._s(e.possibleAnswers[t-1][8]?8:""))]),n("span",[e._v(e._s(e.possibleAnswers[t-1][9]?9:""))])]):e._e(),e.options.showPossibleAnswers&&!e.cells[t-1]&&"number"===typeof e.possibleAnswers[t-1]?n("div",{staticClass:"auto-number"},[e._v(" "+e._s(e.possibleAnswers[t-1])+" ")]):e._e()])})),n("div",{staticClass:"grid-divider col-1"}),n("div",{staticClass:"grid-divider col-2"}),n("div",{staticClass:"grid-divider row-1"}),n("div",{staticClass:"grid-divider row-2"})],2),n("MenuThemes"),n("MenuOptions")],1)])},c=[],u=(n("a4d3"),n("4de4"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),a=n("2f62"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"commands"},[e.solving?e._e():[n("button",{on:{click:function(t){return e.solve()}}},[e._v("Solve")])],e.solving?[n("button",{on:{click:function(t){return e.stop()}}},[e._v("Stop Solving")]),e.finishedSolving?e._e():n("button",{on:{click:function(t){return e.togglePause()}}},[e._v(" "+e._s(e.pauseAlgorithm?"Resume Algorithm":"Pause Algorithm")+" ")]),e.finishedSolving?e._e():n("span",[e._v("Currently solving...")]),e.finishedSolving?n("span",[e._v("Finished solving!")]):e._e()]:e._e()],2)},f=[];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={name:"MenuOptions",computed:v({},Object(a["c"])({finishedSolving:function(e){return e.finishedSolving},pauseAlgorithm:function(e){return e.pauseAlgorithm},solving:function(e){return e.solving}})),methods:v({},Object(a["b"])(["solve","stop","togglePause"]))},m=b,O=(n("7213"),n("2877")),h=Object(O["a"])(m,p,f,!1,null,null,null),w=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"options"},[n("div",[n("div",[e._v("Show possible answers in cells")]),n("label",{attrs:{for:"showPossibleAnswers-false"}},[e._v("No")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.showPossibleAnswers,expression:"showPossibleAnswers",modifiers:{lazy:!0}}],attrs:{id:"showPossibleAnswers-true",type:"radio",name:"showPossibleAnswers"},domProps:{value:!1,checked:e._q(e.showPossibleAnswers,!1)},on:{change:function(t){e.showPossibleAnswers=!1}}}),n("label",{attrs:{for:"showPossibleAnswers-true"}},[e._v("Yes")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.showPossibleAnswers,expression:"showPossibleAnswers",modifiers:{lazy:!0}}],attrs:{id:"showPossibleAnswers-false",type:"radio",name:"showPossibleAnswers"},domProps:{value:!0,checked:e._q(e.showPossibleAnswers,!0)},on:{change:function(t){e.showPossibleAnswers=!0}}})]),n("div",[n("div",[e._v("Algorithm speed")]),e._l(e.solveSpeeds,(function(t,s){return[n("label",{key:"label-"+s,attrs:{for:"speeds-"+s}},[e._v(e._s(s))]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.solveSpeed,expression:"solveSpeed",modifiers:{lazy:!0}}],key:"input-"+s,attrs:{id:"speeds-"+s,type:"radio",name:"speeds"},domProps:{value:s,checked:e._q(e.solveSpeed,s)},on:{change:function(t){e.solveSpeed=s}}})]}))],2)])},_=[];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={name:"MenuOptions",computed:P({},Object(a["c"])({solveSpeeds:function(e){return e.solveSpeeds}}),{showPossibleAnswers:{set:function(e){this.setOption({option:"showPossibleAnswers",value:e})},get:function(){return this.$store.state.options.showPossibleAnswers}},solveSpeed:{set:function(e){this.setOption({option:"solveSpeed",value:e})},get:function(){return this.$store.state.options.solveSpeed}}}),methods:P({},Object(a["b"])(["setOption"]))},S=A,j=(n("4886"),Object(O["a"])(S,y,_,!1,null,null,null)),E=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"themes"},[n("span",[e._v("Themes")]),n("ul",e._l(e.themes,(function(t){return n("li",{key:"themes-"+t,class:{active:e.activeTheme===t},on:{click:function(n){return e.setOption({option:"theme",value:t})}}},[n("span",[e._v(e._s(e.capitalCase(t)))])])})),0)])},T=[],L=(n("d81d"),function(e){return Math.floor(e/9)}),D=function(e){return e%9},M=function(e){var t=L(e),n=D(e);return 3*Math.floor(t/3)+Math.floor(n/3)},k=function(e,t,n){var s=L(t);return[0,1,2,3,4,5,6,7,8].some((function(t){return n[9*s+t]===e}))},N=function(e,t,n){var s=D(t);return[0,1,2,3,4,5,6,7,8].some((function(t){return n[9*t+s]===e}))},I=function(e,t,n){var s=M(t);return[0,1,2,9,10,11,18,19,20].some((function(t){var r=s%3*3+27*Math.floor(s/3);return n[r+t]===e}))},U=function(e,t,n){return!k(e,t,n)&&!N(e,t,n)&&!I(e,t,n)},x=(n("fb6a"),function(e){return"string"===typeof e?e.charAt(0).toUpperCase()+e.slice(1):""});function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B={name:"MenuThemes",computed:R({},Object(a["c"])({activeTheme:function(e){return e.options.theme},themes:function(e){return e.themes}})),methods:R({},Object(a["b"])(["capitalCase","setOption"]),{capitalCase:x})},V=B,H=(n("2d98"),Object(O["a"])(V,C,T,!1,null,null,null)),$=H.exports;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={name:"App",components:{MenuCommands:w,MenuOptions:E,MenuThemes:$},computed:F({},Object(a["c"])({activeCell:function(e){return e.activeCell},cells:function(e){return e.cells},computedCells:function(e){return e.computedCells},options:function(e){return e.options},possibleAnswers:function(e){return e.possibleAnswers},solving:function(e){return e.solving}})),created:function(){var e=this;this.$store.dispatch("updatePossibleAnswers"),window.addEventListener("keyup",(function(t){return e.updateCell(Number(t.key))}))},methods:F({},Object(a["b"])(["setActiveCell","setOption","updateCell","updatePossibleAnswers"]))},W=q,J=(n("5c0b"),Object(O["a"])(W,l,c,!1,null,null,null)),Y=J.exports,K=(n("c740"),n("caad"),n("2532"),function(e,t){"theme"===t.option&&(e.state.themes.includes(t.value)||(t.value="default")),"solveSpeed"===t.option&&(t.value in e.state.solveSpeeds||(t.value="normal")),e.commit("SET_OPTION",t)}),Q=function(e,t){t<0||t>=81||(e.state.activeCell===t&&(t=null),e.commit("SET_ACTIVE_CELL",{cell:t}))},X=function(e,t){isNaN(e.state.activeCell)||null===e.state.activeCell||isNaN(t)||(e.commit("UPDATE_CELL",{num:t}),e.dispatch("updatePossibleAnswers"))},Z=function(e){var t=e.state.cells.slice();t&&Array.isArray(t)&&81===t.length||e.commit("SET_POSSIBLE_ANSWERS",{cells:Array.apply(null,Array(81)).map((function(){}))}),e.commit("SET_POSSIBLE_ANSWERS",{cells:t.map((function(e,n){if(e)return null;var s=[U(1,n,t),U(2,n,t),U(3,n,t),U(4,n,t),U(5,n,t),U(6,n,t),U(7,n,t),U(8,n,t),U(9,n,t)];return 1===s.reduce((function(e,t){return e+(t?1:0)}),0)?s.findIndex((function(e){return e}))+1:{1:s[0],2:s[1],3:s[2],4:s[3],5:s[4],6:s[5],7:s[6],8:s[7],9:s[8]}}))})},ee=function(e){e.commit("BEGIN_SOLVING"),"brute"===e.state.options.solveMode&&e.dispatch("solveByBruteForce")},te=function(e){e.commit("CANCEL_SOLVING")},ne=function(e){e.state.pauseAlgorithm?e.commit("RESUME_ALGORITHM"):e.commit("PAUSE_ALGORITHM")},se=function(e){e.commit("SET_COMPUTED_CELLS",{cells:e.state.cells.slice()});var t=0,n=0,s=1,r=function r(){if(e.state.pauseAlgorithm)return window.setTimeout(r,1e3);while(n>=0&&n<81&&e.state.cells[n])n+=s;if(n<0||n>=81||!1===e.state.solving)e.commit("FINISHED_SOLVING");else{for(var o=e.state.computedCells[n]||1,i=o;i<=9;i++){if(U(i,n,e.state.computedCells)){e.commit("UPDATE_COMPUTED_CELL",{cell:n,num:i}),s=1;break}9===i&&(e.commit("UPDATE_COMPUTED_CELL",{cell:n,num:null}),s=-1)}n+=s,t=e.state.solveSpeeds[e.state.options.solveSpeed],window.setTimeout(r,t)}};r()},re=(n("a434"),function(e,t){e.options[t.option]=t.value}),oe=function(e){e.pauseAlgorithm=!0},ie=function(e){e.pauseAlgorithm=!1},le=function(e){e.pause=!0,e.solving=!0,e.finishedSolving=!1},ce=function(e){e.solving=!1,e.finishedSolving=!1},ue=function(e){e.finishedSolving=!0},ae=function(e,t){e.theme=t.theme},pe=function(e,t){e.activeCell=t.cell},fe=function(e,t){e.cells=t.cells},de=function(e,t){e.cells.splice(e.activeCell,1,t.num),e.activeCell=null},ve=function(e,t){e.possibleAnswers=t.cells},be=function(e,t){e.computedCells=t.cells},me=function(e,t){console.log("updating the cell",t),e.computedCells.splice(t.cell,1,t.num)},Oe={activeCell:null,cells:Array.apply(null,Array(81)).map((function(){})),possibleAnswers:Array.apply(null,Array(81)).map((function(){})),computedCells:Array.apply(null,Array(81)).map((function(){})),solving:!1,finishedSolving:!1,pauseAlgorithm:!1,solveModes:["brute"],solveSpeeds:{fastest:0,fast:30,"kinda slow":80,"really slow":1e3},themes:["default","dim","other"],options:{showPossibleAnswers:!1,solveMode:"brute",solveSpeed:"fast",theme:"default"}};function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}i["a"].use(a["a"]);var ye=!1,_e=new a["a"].Store(we({},o,{strict:ye}));i["a"].config.productionTip=!1,new i["a"]({el:"#app",components:{App:Y},template:"<App/>",store:_e})},"5c0b":function(e,t,n){"use strict";var s=n("9c0c"),r=n.n(s);r.a},7213:function(e,t,n){"use strict";var s=n("d6ef"),r=n.n(s);r.a},"7b8b":function(e,t,n){},"9b98":function(e,t,n){},"9c0c":function(e,t,n){},d6ef:function(e,t,n){}});
//# sourceMappingURL=app.c17747b4.js.map