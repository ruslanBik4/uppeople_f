(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[8],{286:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(337);n(301);e.a=function(t){var e=t.name,n=void 0===e?"select":e,r=t.defaultValue,c=t.isMulti,i=void 0!==c&&c,u=t.isDisabled,s=void 0!==u&&u,l=t.closeMenuOnSelect,p=t.inputValue,f=t.value,h=t.options,m=t.components,d=t.theme,g=t.styles,v=t.selectOption,b=t.selectProps,y=t.setValue,w=t.placeholder,C=t.onChange,P=t.onInputChange;return a.a.createElement(o.a,{name:n,styles:g,defaultValue:r,isMulti:i,isDisabled:s,inputValue:p,value:f,options:h,closeMenuOnSelect:l,components:m,theme:d,selectOption:v,selectProps:b,setValue:y,placeholder:w,className:"basic-multi-select",classNamePrefix:"select",onChange:C,onInputChange:P})}},301:function(t,e,n){t.exports={select__menu:"Select_select__menu__3w_Fl"}},308:function(t,e,n){"use strict";var r=n(297),a=n(30),o=n(31),c=n(33),i=n(32),u=n(0),s=n.n(u),l=n(411),p=n(412),f=n(413),h=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).setPage=function(t){var e=o.props,n=e.totalItems,r=e.totalPages,a=e.pageSize;o.allDisabled=!1;var c=o.state.pager;t<1||t>r||(c=o.getPager(n,t,a),o.setState({pager:c}),o.props.onChangePage(t))},o.setInitialPage=function(){var t=o.props,e=t.totalItems,n=t.totalPages,r=t.pageSize;o.allDisabled=!1;var a=o.state.pager;1>n||(a=o.getPager(e,1,r),o.setState({pager:a}))},o.getPager=function(t,e,n){e=e||1,n=n||10;var a,o,c=Math.ceil(t/n);c<=10?(a=1,o=c):e<=6?(a=1,o=10):e+4>=c?(a=c-9,o=c):(a=e-5,o=e+4);var i=(e-1)*n,u=Math.min(i+n-1,t-1),s=Object(r.a)(Array(o+1-a).keys()).map((function(t){return a+t}));return{totalItems:t,currentPage:e,pageSize:n,totalPages:c,startPage:a,endPage:o,startIndex:i,endIndex:u,pages:s}},o.state={pager:{}},o}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.setInitialPage()}},{key:"componentDidUpdate",value:function(t){console.log("update from PaginationBackend"),this.props.initialPage===t.initialPage&&this.props.totalItems===t.totalItems||(console.log("condition update from PaginationBackend"),this.setPage(this.props.initialPage))}},{key:"render",value:function(){var t=this,e=this.state.pager,n=this.props.loading;return!e.pages||e.pages.length<=1?null:s.a.createElement(l.a,{style:n?{pointerEvents:"none"}:{},className:"pagination justify-content-end"},s.a.createElement(p.a,{className:"page-item",disabled:1===e.currentPage},s.a.createElement(f.a,{className:"page-link",onClick:function(){return t.setPage(1)}},"First")),s.a.createElement(p.a,{className:"page-item",disabled:1===e.currentPage},s.a.createElement(f.a,{className:"page-link",onClick:function(){return t.setPage(e.currentPage-1)}},"Previous")),e.pages.map((function(n,r){return s.a.createElement(p.a,{key:r,className:"page-item",active:e.currentPage===n,disabled:t.allDisabled},s.a.createElement(f.a,{className:"page-link",onClick:function(){return t.setPage(n)}},n))})),s.a.createElement(p.a,{className:"page-item",disabled:e.currentPage===e.totalPages||this.allDisabled},s.a.createElement(f.a,{className:"page-link",onClick:function(){return t.setPage(e.currentPage+1)}},"Next")),s.a.createElement(p.a,{className:"page-item",disabled:e.currentPage===e.totalPages||this.allDisabled},s.a.createElement(f.a,{className:"page-link",onClick:function(){return t.setPage(e.totalPages)}},"Last")))}}]),n}(u.Component);h.defaultProps={items:[],initialPage:1,pageSize:10,totalItems:null,totalPages:null,onChangePage:function(){return null}},e.a=h},309:function(t,e,n){"use strict";n.d(e,"k",(function(){return u})),n.d(e,"h",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"n",(function(){return p})),n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return h})),n.d(e,"j",(function(){return m})),n.d(e,"i",(function(){return d})),n.d(e,"s",(function(){return g})),n.d(e,"p",(function(){return v})),n.d(e,"t",(function(){return b})),n.d(e,"q",(function(){return y})),n.d(e,"b",(function(){return w})),n.d(e,"f",(function(){return C})),n.d(e,"e",(function(){return P})),n.d(e,"o",(function(){return k})),n.d(e,"a",(function(){return j})),n.d(e,"g",(function(){return x})),n.d(e,"d",(function(){return O})),n.d(e,"r",(function(){return T}));var r=n(290),a=n.n(r),o=n(291),c="http://f2.uppeople.space/api",i=function(){return localStorage.getItem("token")},u=function(t,e){var n=i();return fetch("".concat(c,"/main/returnAllCompanies/").concat(t,"/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{companies:t.companies.map((function(t){return{id:t.id,name:t.nazva,logo:t.logo,email:t.email,skype:t.skype,phone:t.phone,vacancies:t.vacancy_count,candidates:t.candidates_to_company_count}})),companiesCount:t.Count,totalPages:t.Pages,currentPage:t.current_page,perPage:t.per_page}})).catch((function(t){return console.log("error in fetch: ",t)}))},s=function(t,e,n){var r=i();return fetch("".concat(c,"/main/returnAllCompanies/").concat(t,"/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(console.log(t),t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){return{companies:t.companies.map((function(t){return{id:t.id,name:t.nazva,logo:t.logo,email:t.email,skype:t.skype,phone:t.phone,vacancies:t.vacancy_count,candidates:t.candidates_to_company_count}})),companiesCount:t.Count,totalPages:t.Pages,currentPage:t.current_page,perPage:t.per_page}})).catch((function(t){return console.log("error in fetch: ",t)}))},l=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addNewCompany"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=i();return fetch("".concat(c,"/main/viewInformationForCompany/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{name:t.nazva,logo:t.logo,phone:t.phone,email:t.email,skype:t.skype,about:t.about,map:t.map,calendarEvents:t.calendar,sendDetails:t.otpravka,termsOfCooperation:t.uslovia,interviewDetails:t.interview_detail,contacts:t.contacts,managers:t.manager}})).catch((function(t){return console.log("error in fetch: ",t)}))},f=function(t,e){var n=i();return fetch("".concat(c,"/main/viewAllCandidatesForCompany/").concat(t,"/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidates:t.candidates,candidatesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,platform:t.platforms,candidateStatus:t.statuses}})).catch((function(t){return console.log("error in fetch: ",t)}))},h=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/commentsCompany/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),m=function(t,e,n){var r=i();return fetch("".concat(c,"/main/viewAllVacancyInCompany/").concat(t,"/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{vacancies:t.vacancies,vacanciesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,candidateStatus:t.candidateStatus,vacancyStatus:t.vacancyStatus,platform:t.platforms,seniority:t.seniorities}})).catch((function(t){return console.log("error in fetch: ",t)}))},d=function(t,e,n){var r=i();return fetch("".concat(c,"/main/viewAllCandidatesForCompany/").concat(t,"/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidates:t.candidates,candidatesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,platform:t.platforms,candidateStatus:t.statuses}})).catch((function(t){return console.log("error in fetch: ",t)}))},g=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/updateStatusVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/updateStatusCandidates"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),o={logo:n},t.prev=2,t.next=5,fetch("".concat(c,"/main/addLogoCompanies/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:if(!(u=t.sent).ok){t.next=8;break}return t.abrupt("return",u.json());case 8:throw new Error("".concat(u.statusText));case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",console.log("error in fetch: ",t.t0));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editSettingsCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addCommentForCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editCommentCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),P=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/deleteCommentCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),k=function(t){var e=i();return fetch("".concat(c,"/main/viewEditContactCompany/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){return{contact:{id:t.id,name:t.name,email:t.email,phone:t.phone,skype:t.skype,selectedPlatforms:t.platforms.map((function(t){var e=Object.values(t.platform);return{id:e[0],label:e[1],value:e[1].toLowerCase()}}))},isChecked:1===t.all_platforms,isDisabled:1===t.all_platforms}})).catch((function(t){return console.log("error in fetch: ",t)}))},j=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addNewContactForCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editContactCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/deleteContactForCompany/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),T=function(t,e){var n=i();return fetch("".concat(c,"/main/editInformations/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){for(var e in t){return"otpravka"===e?{sendDetails:t[e]}:"interview_detail"===e?{interviewDetails:t[e]}:"about"===e?{about:t[e]}:t}})).catch((function(t){return console.log("error in fetch: ",t)}))}},365:function(t,e,n){"use strict";var r=n(30),a=n(31),o=n(33),c=n(32),i=n(0),u=n.n(i),s=n(312),l=n(105),p=n.n(l),f=n(366),h=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.context,e=t.currentColumn,n=t.locales,r=t.top,a=t.bottom,o=t.changeLocale,c=p()({"cui-arrow-top":r,"cui-arrow-bottom":a,icons:!0,"font-xs":!0});return u.a.createElement(u.a.Fragment,null,n.map((function(t){return u.a.createElement("th",{scope:"col",key:t},u.a.createElement(s.a,{style:{minWidth:"80px",padding:0,fontWeight:"bold",textAlign:"start",background:"transparent",border:0},onClick:function(){return o(t)}},t," ",u.a.createElement("i",{className:e===t?c:""})))})))}}]),n}(i.Component);h.contextType=f.a,e.a=h},366:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));var r=n(42),a=n(30),o=n(31),c=n(33),i=n(32),u=n(0),s=n.n(u),l=Object(u.createContext)({currentColumn:"",locales:[],sort:null,top:!0,bottom:!1,changeLocale:function(){return null}}),p=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={currentColumn:"",locales:t.props.locales,sort:null,top:!0,bottom:!1},t.changeLocale=function(e){var n=t.props.onSort;if(t.state.currentColumn!==e)t.setState({currentColumn:e,sort:0,top:!1,bottom:!0},(function(){var e=t.state,r=e.currentColumn,a=e.sort;n({currentColumn:r,sort:a})}));else{var r=0===t.state.sort?1:0;t.setState((function(t){return{currentColumn:e,sort:r,top:!t.top,bottom:!t.bottom}}),(function(){var e=t.state,r=e.currentColumn,a=e.sort;n({currentColumn:r,sort:a})}))}},t}return Object(o.a)(n,[{key:"render",value:function(){return s.a.createElement(l.Provider,{value:Object(r.a)(Object(r.a)({},this.state),{},{changeLocale:this.changeLocale})},this.props.children)}}]),n}(u.Component);p.Consumer=l.Consumer}}]);
//# sourceMappingURL=8.1c0d42cd.chunk.js.map