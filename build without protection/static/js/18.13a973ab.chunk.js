(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[18],{506:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(297),r=n(30),c=n(31),o=n(33),s=n(32),l=n(0),i=n.n(l),u=n(310),v=n(343),d=n(311),m=n(684),p=n(284),h=n.n(p),f=(n(648),m.a.momentLocalizer(h.a)),b=new Date,w=b.getFullYear(),j=b.getMonth(),y=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={events:[]},e.handleSelect=function(t){var n=t.start,r=t.end,c=window.prompt("New Event name");c&&e.setState({events:[].concat(Object(a.a)(e.state.events),[{start:n,end:r,title:c}])})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.events;return i.a.createElement("div",{className:"animated"},i.a.createElement(u.a,null,i.a.createElement(v.a,null,i.a.createElement("i",{className:"icon-calendar"}),"Calendar"),i.a.createElement(d.a,{style:{height:"40em"}},i.a.createElement(m.a,{selectable:!0,popup:!0,localizer:f,events:e,views:["month","week","day"],step:30,defaultDate:new Date(w,j,1),defaultView:"month",toolbar:!0,onSelectEvent:function(e){return alert("Candidate: ".concat(e.title,", Date: ").concat(h()(e.start).format("LLLL")))},onSelectSlot:this.handleSelect,startAccessor:"start",endAccessor:"end"}))))}}],[{key:"getDerivedStateFromProps",value:function(e){return void 0!==e.events&&e.events.length>0?{events:e.events.map((function(e){var t=e.title,n=h()(e.start).toDate(),a=h()(e.start).add(1,"hour");return{title:t,start:n,end:h()(a).toDate()}}))}:{events:[]}}}]),n}(l.Component)},966:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(30),r=n(31),c=n(33),o=n(32),s=n(0),l=n.n(s),i=n(506),u=n(300),v=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={events:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(u.n)().then((function(t){return e.setState({events:t})}))}},{key:"render",value:function(){var e=this.state.events;return l.a.createElement(i.a,{events:e})}}]),n}(s.Component)}}]);
//# sourceMappingURL=18.13a973ab.chunk.js.map