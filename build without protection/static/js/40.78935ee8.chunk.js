(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[40],{295:function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}t.d(a,"a",(function(){return n}))},297:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(295);var r=t(306);function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},306:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(295);function r(e,a){if(e){if("string"===typeof e)return Object(n.a)(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(n.a)(e,a):void 0}}},308:function(e,a,t){"use strict";var n=t(297),r=t(30),l=t(31),s=t(33),o=t(32),c=t(0),i=t.n(c),u=t(411),g=t(412),m=t(413),p=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).setPage=function(e){var a=l.props,t=a.totalItems,n=a.totalPages,r=a.pageSize;l.allDisabled=!1;var s=l.state.pager;e<1||e>n||(s=l.getPager(t,e,r),l.setState({pager:s}),l.props.onChangePage(e))},l.setInitialPage=function(){var e=l.props,a=e.totalItems,t=e.totalPages,n=e.pageSize;l.allDisabled=!1;var r=l.state.pager;1>t||(r=l.getPager(a,1,n),l.setState({pager:r}))},l.getPager=function(e,a,t){a=a||1,t=t||10;var r,l,s=Math.ceil(e/t);s<=10?(r=1,l=s):a<=6?(r=1,l=10):a+4>=s?(r=s-9,l=s):(r=a-5,l=a+4);var o=(a-1)*t,c=Math.min(o+t-1,e-1),i=Object(n.a)(Array(l+1-r).keys()).map((function(e){return r+e}));return{totalItems:e,currentPage:a,pageSize:t,totalPages:s,startPage:r,endPage:l,startIndex:o,endIndex:c,pages:i}},l.state={pager:{}},l}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setInitialPage()}},{key:"componentDidUpdate",value:function(e){console.log("update from PaginationBackend"),this.props.initialPage===e.initialPage&&this.props.totalItems===e.totalItems||(console.log("condition update from PaginationBackend"),this.setPage(this.props.initialPage))}},{key:"render",value:function(){var e=this,a=this.state.pager,t=this.props.loading;return!a.pages||a.pages.length<=1?null:i.a.createElement(u.a,{style:t?{pointerEvents:"none"}:{},className:"pagination justify-content-end"},i.a.createElement(g.a,{className:"page-item",disabled:1===a.currentPage},i.a.createElement(m.a,{className:"page-link",onClick:function(){return e.setPage(1)}},"First")),i.a.createElement(g.a,{className:"page-item",disabled:1===a.currentPage},i.a.createElement(m.a,{className:"page-link",onClick:function(){return e.setPage(a.currentPage-1)}},"Previous")),a.pages.map((function(t,n){return i.a.createElement(g.a,{key:n,className:"page-item",active:a.currentPage===t,disabled:e.allDisabled},i.a.createElement(m.a,{className:"page-link",onClick:function(){return e.setPage(t)}},t))})),i.a.createElement(g.a,{className:"page-item",disabled:a.currentPage===a.totalPages||this.allDisabled},i.a.createElement(m.a,{className:"page-link",onClick:function(){return e.setPage(a.currentPage+1)}},"Next")),i.a.createElement(g.a,{className:"page-item",disabled:a.currentPage===a.totalPages||this.allDisabled},i.a.createElement(m.a,{className:"page-link",onClick:function(){return e.setPage(a.totalPages)}},"Last")))}}]),t}(c.Component);p.defaultProps={items:[],initialPage:1,pageSize:10,totalItems:null,totalPages:null,onChangePage:function(){return null}},a.a=p},379:function(e,a,t){"use strict";var n=t(24),r=t(106),l=t(0),s=t.n(l),o=t(1),c=t.n(o),i=t(105),u=t.n(i),g=t(51),m={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:g.o,responsiveTag:g.o,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var a=e.className,t=e.cssModule,l=e.size,o=e.bordered,c=e.borderless,i=e.striped,m=e.dark,p=e.hover,d=e.responsive,b=e.tag,f=e.responsiveTag,v=e.innerRef,P=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(g.k)(u()(a,"table",!!l&&"table-"+l,!!o&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!m&&"table-dark",!!p&&"table-hover"),t),E=s.a.createElement(b,Object(n.a)({},P,{ref:v,className:h}));if(d){var y=Object(g.k)(!0===d?"table-responsive":"table-responsive-"+d,t);return s.a.createElement(f,{className:y},E)}return E};p.propTypes=m,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},411:function(e,a,t){"use strict";var n=t(24),r=t(106),l=t(0),s=t.n(l),o=t(1),c=t.n(o),i=t(105),u=t.n(i),g=t(51),m={children:c.a.node,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,size:c.a.string,tag:g.o,listTag:g.o,"aria-label":c.a.string},p=function(e){var a,t=e.className,l=e.listClassName,o=e.cssModule,c=e.size,i=e.tag,m=e.listTag,p=e["aria-label"],d=Object(r.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(g.k)(u()(t),o),f=Object(g.k)(u()(l,"pagination",((a={})["pagination-"+c]=!!c,a)),o);return s.a.createElement(i,{className:b,"aria-label":p},s.a.createElement(m,Object(n.a)({},d,{className:f})))};p.propTypes=m,p.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=p},412:function(e,a,t){"use strict";var n=t(24),r=t(106),l=t(0),s=t.n(l),o=t(1),c=t.n(o),i=t(105),u=t.n(i),g=t(51),m={active:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,disabled:c.a.bool,tag:g.o},p=function(e){var a=e.active,t=e.className,l=e.cssModule,o=e.disabled,c=e.tag,i=Object(r.a)(e,["active","className","cssModule","disabled","tag"]),m=Object(g.k)(u()(t,"page-item",{active:a,disabled:o}),l);return s.a.createElement(c,Object(n.a)({},i,{className:m}))};p.propTypes=m,p.defaultProps={tag:"li"},a.a=p},413:function(e,a,t){"use strict";var n=t(24),r=t(106),l=t(0),s=t.n(l),o=t(1),c=t.n(o),i=t(105),u=t.n(i),g=t(51),m={"aria-label":c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,next:c.a.bool,previous:c.a.bool,first:c.a.bool,last:c.a.bool,tag:g.o},p=function(e){var a,t=e.className,l=e.cssModule,o=e.next,c=e.previous,i=e.first,m=e.last,p=e.tag,d=Object(r.a)(e,["className","cssModule","next","previous","first","last","tag"]),b=Object(g.k)(u()(t,"page-link"),l);c?a="Previous":o?a="Next":i?a="First":m&&(a="Last");var f,v=e["aria-label"]||a;c?f="\u2039":o?f="\u203a":i?f="\xab":m&&(f="\xbb");var P=e.children;return P&&Array.isArray(P)&&0===P.length&&(P=null),d.href||"a"!==p||(p="button"),(c||o||i||m)&&(P=[s.a.createElement("span",{"aria-hidden":"true",key:"caret"},P||f),s.a.createElement("span",{className:"sr-only",key:"sr"},v)]),s.a.createElement(p,Object(n.a)({},d,{className:b,"aria-label":v}),P)};p.propTypes=m,p.defaultProps={tag:"a"},a.a=p},985:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(42),r=t(30),l=t(31),s=t(33),o=t(32),c=t(0),i=t.n(c),u=t(481),g=t(482),m=t(379),p=t(284),d=t.n(p),b=t(770),f=function(e){var a=e.idx,t=e.date,n=e.text,r=e.vacId,l=e.vac,s=e.compId,o=e.compName;return i.a.createElement(i.a.Fragment,null,i.a.createElement("td",null,a+1),i.a.createElement("td",null,d()(t).format("Do MMMM YYYY, h:mm:ss a")),i.a.createElement("td",null,n),i.a.createElement("td",null,i.a.createElement(b.a,{to:"vacancies/".concat(r)},l)),i.a.createElement("td",null,i.a.createElement(b.a,{to:"companies/".concat(s)},o)))};f.defaultProps={date:"",text:"",vac:"",compName:""};var v=f,P=t(308),h=function(e){var a=e.logs,t=e.totalItems,n=e.pageSize,r=e.totalPages,l=e.currentPage,s=e.onChangePage,o=a.length>0?a.map((function(e,a){return i.a.createElement("tr",{key:e.logId},i.a.createElement(v,Object.assign({idx:a},e)))})):i.a.createElement("tr",{style:{color:"var(--secondary)"}},i.a.createElement("td",{colSpan:9,align:"center"},"Nothing found"," ",i.a.createElement("span",{role:"img","aria-label":"confused face"},"\ud83d\ude15")));return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{style:{background:"var(--white)"},responsive:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"#"),i.a.createElement("th",{scope:"col"},"Date"),i.a.createElement("th",{scope:"col"},"Action"),i.a.createElement("th",{scope:"col"},"Vacancy"),i.a.createElement("th",{scope:"col"},"Company"))),i.a.createElement("tbody",null,o)),a.length>0?i.a.createElement(u.a,null,i.a.createElement(g.a,null,i.a.createElement(P.a,{items:a,totalItems:t,pageSize:n,totalPages:r,initialPage:l,onChangePage:s}))):null)};h.defaultProps={logs:[],currentPage:null,pageSize:null,totalItems:null,totalPages:null,onChangePage:function(){return null}};var E=h,y=t(300),j=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={logs:[],totalLogs:null,totalPages:null,perPage:null,currentPage:1},e.onChangePage=function(a){e.getData(a)},e.getData=function(a){Object(y.h)(a).then((function(a){var t={logs:a.logs,totalLogs:a.Count,totalPages:a.Page,perPage:a.perPage,currentPage:a.currentPage};e.setState(Object(n.a)(Object(n.a)({},e.state),t),(function(){return console.log(e.state)}))}))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.currentPage;this.getData(e)}},{key:"render",value:function(){var e=this.state,a=e.logs,t=e.totalLogs,n=e.perPage,r=e.totalPages,l=e.currentPage;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(g.a,{style:{display:"flex",justifyContent:"space-between",maxWidth:150,marginBottom:"0.5rem"}},i.a.createElement("h1",{style:{marginBottom:0,fontSize:24}},"Activity"),i.a.createElement("span",{style:{alignSelf:"flex-end",color:"var(--gray)"}},t))),i.a.createElement(u.a,null,i.a.createElement(g.a,null,i.a.createElement(E,{logs:a,totalItems:t,pageSize:n,totalPages:r,currentPage:l,onChangePage:this.onChangePage}))))}}]),t}(c.Component)}}]);
//# sourceMappingURL=40.78935ee8.chunk.js.map