(this["webpackJsonpcounter-starter"]=this["webpackJsonpcounter-starter"]||[]).push([[0],[,,function(t,n,o){t.exports={todos:"todos_todos__3Pywg",todo:"todos_todo__1c5Ye",todocount:"todos_todocount__38Msy",todoiconwrapper:"todos_todoiconwrapper__256iq",todoactionbutton:"todos_todoactionbutton__24soO",tododevider:"todos_tododevider__fE8cN"}},,function(t,n,o){t.exports={info:"info_info__3GloF",infototal:"info_infototal__22h4V",deleteallbutton:"info_deleteallbutton__3LbJg"}},,function(t,n,o){t.exports={nav:"navbar_nav__3IIWD",navicon:"navbar_navicon__1F3-O",navtitle:"navbar_navtitle__3Wn_F"}},function(t,n,o){t.exports={form:"search_form__27-pI",input:"search_input__2-Vcn",addbutton:"search_addbutton__2MFaw"}},,,,,function(t,n,o){t.exports={container:"container_container__15xk9"}},,,function(t,n,o){t.exports={empty:"empty_empty__heZwa"}},,,,,,function(t,n,o){},function(t,n,o){"use strict";o.r(n);var e=o(0),c=o(1),a=o.n(c),i=o(11),s=o.n(i),r=(o(21),o(8)),u=o(10),l=o.p+"static/media/shopping-icon.7f4eb869.svg",d=o(6),j=o.n(d),b=function(){return Object(e.jsxs)("nav",{className:j.a.nav,children:[Object(e.jsx)("img",{className:j.a.navicon,src:l,alt:"shopping icon"}),Object(e.jsx)("h1",{className:j.a.navtitle,children:"Shopping list"})]})},_=o(12),f=o.n(_),h=function(t){return Object(e.jsx)("section",{className:f.a.container,children:t.children})},p=o(7),m=o.n(p),O=function(t){return Object(e.jsxs)("form",{className:m.a.form,onSubmit:t.onSubmit,children:[Object(e.jsx)("input",{onChange:t.onChange,value:t.value,className:m.a.input,type:"text",placeholder:"List"}),Object(e.jsx)("button",{className:m.a.addbutton,type:"submit",children:"add"})]})},v=o(4),x=o.n(v),g=function(t){var n=t.todosLength,o=t.totalCounts,c=t.onDelete;return Object(e.jsxs)("div",{className:x.a.info,children:[Object(e.jsx)("div",{className:x.a.infototal,children:Object(e.jsx)("p",{children:"Total List : ".concat(n)})}),Object(e.jsx)("div",{className:x.a.infototal,children:Object(e.jsx)("p",{children:"Total Count : ".concat(o)})}),Object(e.jsx)("button",{onClick:c,className:x.a.deleteallbutton,children:"Delete All List"})]})},N=o(13),y=o(14),C=o.n(y),S=o(2),w=o.n(S),k=o.p+"static/media/plus-icon.1b353b20.svg",D=o.p+"static/media/minus-icon.e6e703ff.svg",L=function(t){return Object(e.jsx)("div",{className:"todos",children:t.todos.map((function(n,o,c){return Object(e.jsxs)("div",{className:C()(w.a.todo,Object(N.a)({},w.a.todoDivider,!(c.length===o+1))),children:[n.title,Object(e.jsxs)("div",{className:w.a.todoiconwrapper,children:[Object(e.jsx)("div",{className:w.a.todocount,children:n.count}),Object(e.jsx)("button",{onClick:function(){return t.onSubstraction(o)},className:w.a.todoactionbutton,children:Object(e.jsx)("img",{src:D,alt:"minus icon"})}),Object(e.jsx)("button",{onClick:function(){return t.onAddition(o)},className:w.a.todoactionbutton,children:Object(e.jsx)("img",{src:k,alt:"plus icon"})})]})]},o)}))})},F=o(15),I=o.n(F),A=function(){return Object(e.jsx)("div",{className:I.a.empty,children:"Wah kosong nih..."})};var J=function(){var t=Object(c.useState)(""),n=Object(u.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)([]),s=Object(u.a)(i,2),l=s[0],d=s[1];return Object(e.jsxs)("div",{children:[Object(e.jsx)(b,{}),Object(e.jsxs)(h,{children:[Object(e.jsx)(O,{onSubmit:function(t){if(t.preventDefault(),o){var n=[].concat(Object(r.a)(l),[{title:o,count:1}]);d(n),a("")}else alert("No item to list!")},onChange:function(t){return a(t.target.value)},value:o}),Object(e.jsx)(g,{todosLength:l.length,totalCounts:l.reduce((function(t,n){return t+n.count}),0),onDelete:function(){return d([])}}),l.length>0?Object(e.jsx)(L,{todos:l,onSubstraction:function(t){return function(t){var n=Object(r.a)(l);n[t].count>0?n[t].count=n[t].count-1:n.splice(t,1),d(n)}(t)},onAddition:function(t){return function(t){var n=Object(r.a)(l);n[t].count=n[t].count+1,d(n)}(t)}}):Object(e.jsx)(A,{})]})]})};s.a.render(Object(e.jsx)(a.a.StrictMode,{children:Object(e.jsx)(J,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.be7d04c3.chunk.js.map