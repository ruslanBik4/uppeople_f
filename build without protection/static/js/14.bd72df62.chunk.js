(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[14],{1070:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return U}));var n=a(42),r=a(30),o=a(31),c=a(33),s=a(32),i=a(0),l=a.n(i),u=a(814),p=a(505),m=a(506),f=a(376),d=a(313),g=a(107),h=a(328),b=a(421),v=a(300),y=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:"",email:"",skype:"",phone:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value,o=e.props.onFilter;e.setState(Object(g.a)({},n,r),(function(){return o(e.state)}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.skype,r=e.phone;return l.a.createElement(h.a,null,l.a.createElement(p.a,null,l.a.createElement(m.a,{lg:3},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"text",name:"name",value:t,placeholder:"Name",onChange:this.handleChange}),l.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"fa fa-building-o"}))),l.a.createElement(m.a,{lg:3},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"email",name:"email",value:a,placeholder:"Email",onChange:this.handleChange}),l.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"fa fa-envelope-o"}))),l.a.createElement(m.a,{lg:3},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"text",name:"skype",value:n,placeholder:"Skype",onChange:this.handleChange}),l.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"fa fa-skype"}))),l.a.createElement(m.a,{lg:3},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"text",name:"phone",value:r,placeholder:"Phone",onChange:this.handleChange}),l.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"fa fa-phone"})))))}}]),a}(i.Component),E=a(311),j=a(312),k=a(492),C=a(427),P=a(24),O=a(106),w=a(1),N=a.n(w),T=a(105),x=a.n(T),S=a(51),z={tag:S.o,className:N.a.string,cssModule:N.a.object},A=function(e){var t=e.className,a=e.cssModule,n=e.tag,r=Object(O.a)(e,["className","cssModule","tag"]),o=Object(S.k)(x()(t,"card-footer"),a);return l.a.createElement(n,Object(P.a)({},r,{className:o}))};A.propTypes=z,A.defaultProps={tag:"div"};var M=A,R=(a(794),function(e){var t=e.id,a=e.logo,n=e.name,r=e.vacancies,o=e.candidates;return l.a.createElement(E.a,{style:{marginBottom:"1rem"}},l.a.createElement(u.a,{to:"/companies/".concat(t),logo:a},l.a.createElement(j.a,{style:{padding:"0.5rem"}},l.a.createElement(k.a,{top:!0,width:"100%",src:a,alt:"logo"}),l.a.createElement(C.a,{style:{marginBottom:0,fontSize:12,textAlign:"center",textDecoration:"none"}},n))),l.a.createElement(M,{style:{padding:"0.5rem"}},l.a.createElement(p.a,{style:{margin:0}},l.a.createElement(m.a,{sm:"6",xs:"6",style:{padding:"0 0.25rem"}},l.a.createElement("div",{className:"description-block"},l.a.createElement("h5",{className:"description-header ng-binding"},r),l.a.createElement("span",{className:"description-text"},"Vacancies"))),l.a.createElement(m.a,{sm:"6",xs:"6",style:{padding:"0 0.25rem"}},l.a.createElement("div",{className:"description-block"},l.a.createElement("h5",{className:"description-header ng-binding"},o),l.a.createElement("span",{className:"description-text"},"Candidates"))))))});R.defaultProps={logo:"",vacancies:0,candidates:0};var B=R,I=a(310),F=function(e){var t=e.companies,a=e.pageSize,n=e.totalItems,r=e.totalPages,o=e.currentPage,c=e.onChangePage,s=t.length>0?t.map((function(e){return l.a.createElement(m.a,{xs:"6",sm:"4",md:"3",lg:"2",key:e.id,style:{padding:"0 0.5rem"}},l.a.createElement(B,e))})):l.a.createElement(m.a,null,l.a.createElement("h3",{style:{color:"var(--primary)",textAlign:"center"}},"There are no companies matching your filter!"));return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,s),t.length>0?l.a.createElement(p.a,null,l.a.createElement(m.a,null,l.a.createElement(I.a,{items:t,totalItems:n,pageSize:a,totalPages:r,initialPage:o,onChangePage:c}))):null)};F.defaultProps={companies:[],pageSize:null,totalItems:null,totalPages:null,onChangePage:function(){return null}};var J=F,_=a(384),D=function(e){var t=e.idx,a=e.id,n=e.name,r=e.logo,o=e.email,c=e.skype,s=e.phone;return l.a.createElement(l.a.Fragment,null,l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null,l.a.createElement(u.a,{to:"/companies/".concat(a),style:{color:"var(--dark)"}},n)),l.a.createElement("td",null,l.a.createElement(u.a,{to:"/companies/".concat(a)},l.a.createElement("img",{height:25,src:r,alt:"logo"}))),l.a.createElement("td",null,o),l.a.createElement("td",null,c),l.a.createElement("td",null,s))};D.defaultProps={name:"",logo:"",email:"",skype:"",phone:""};var q=D,G=function(e){var t=e.companies,a=e.pageSize,n=e.totalItems,r=e.totalPages,o=e.currentPage,c=e.onChangePage,s=t.length>0&&t.map((function(e,t){return l.a.createElement("tr",{key:e.id},l.a.createElement(q,Object.assign({idx:t},e)))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(_.a,{style:{background:"var(--white)"},responsive:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Logo"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"Skype"),l.a.createElement("th",{scope:"col"},"Phone"))),l.a.createElement("tbody",null,s)),t.length>0?l.a.createElement(p.a,null,l.a.createElement(m.a,null,l.a.createElement(I.a,{items:t,totalItems:n,pageSize:a,totalPages:r,initialPage:o,onChangePage:c}))):null)};G.defaultProps={companies:[],pageSize:null,totalItems:null,totalPages:null,onChangePage:function(){return null}};var L=G,V=a(302),U=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={companies:[],companiesCount:null,totalPages:null,perPage:null,currentPage:1,isActive:!0,isTable:!1,filterCompanies:{name:"",email:"",skype:"",phone:""}},e.requestForCompanies=function(t,a,r){Object(V.k)(t,r).then((function(t){t.currentPage>t.totalPages?e.requestForCompanies(1,t.filterCompanies,t.isActive):e.setState(Object(n.a)(Object(n.a)({},t),{},{filterCompanies:a}))}))},e.handleShowActiveCompanies=function(t){e.setState({isActive:t},(function(){var t=e.state,a=t.currentPage,n=t.filterCompanies,r=t.isActive;e.requestForCompanies(a,n,r)}))},e.handleShowCompaniesTable=function(t){e.setState({isTable:t})},e.filterCompanies=function(t){e.setState({filterCompanies:t},(function(){var t=e.state,a=t.currentPage,r=t.isActive,o=t.filterCompanies;Object(V.h)(a,r,o).then((function(t){e.setState(Object(n.a)({},t))}))}))},e.onChangePage=function(t){var a=e.state,n=a.isActive,r=a.filterCompanies;e.requestForCompanies(t,r,n)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.state,t=e.currentPage,a=e.filterCompanies,n=e.isActive;this.requestForCompanies(t,a,n)}},{key:"render",value:function(){var e=this,t=this.state,a=t.companies,n=t.companiesCount,r=t.totalPages,o=t.perPage,c=t.currentPage,s=t.isActive,i=t.isTable;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(m.a,{style:{display:"flex",justifyContent:"space-between",maxWidth:180,marginBottom:"0.5rem"}},l.a.createElement("h1",{style:{marginBottom:0,fontSize:24}},"Companies"),l.a.createElement("span",{style:{alignSelf:"flex-end",color:"var(--gray)"}},n))),l.a.createElement(p.a,null,l.a.createElement(m.a,{xl:12},l.a.createElement(y,{onFilter:this.filterCompanies}))),l.a.createElement(p.a,{style:{marginBottom:"1rem"}},l.a.createElement(m.a,{xs:12,sm:6},l.a.createElement(u.a,{to:"/new-company",className:"btn btn-success",style:{marginRight:"0.5rem"}},l.a.createElement("i",{style:{marginRight:"0.2rem"},className:"fa fa-plus-circle"}),"Create"),l.a.createElement(f.a,null,l.a.createElement(d.a,{color:"light",active:s,onClick:function(){return e.handleShowActiveCompanies(!0)}},"Active"),l.a.createElement(d.a,{color:"light",active:!s,onClick:function(){return e.handleShowActiveCompanies(!1)}},"All"))),l.a.createElement(m.a,{xs:12,sm:6,style:{display:"flex",justifyContent:"flex-end",alignItems:"center"}},l.a.createElement(f.a,null,l.a.createElement(d.a,{color:"light",active:!i,onClick:function(){return e.handleShowCompaniesTable(!1)}},l.a.createElement("i",{className:"fa fa-th-large"})),l.a.createElement(d.a,{color:"light",active:i,onClick:function(){return e.handleShowCompaniesTable(!0)}},l.a.createElement("i",{className:"fa fa-th-list"}))))),i?l.a.createElement(L,{companies:a,totalItems:n,pageSize:o,totalPages:r,currentPage:c,onChangePage:this.onChangePage}):l.a.createElement(J,{companies:a,totalItems:n,pageSize:o,totalPages:r,currentPage:c,onChangePage:this.onChangePage}))}}]),a}(i.Component)},295:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},297:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(295);var r=a(308);function o(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},300:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(283),c=a(282),s=a(0),i=a.n(s),l=a(1),u=a.n(l),p=a(105),m=a.n(p),f=a(51),d={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,c=e.bsSize,s=e.valid,l=e.invalid,u=e.tag,p=e.addon,d=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),y=u||("select"===o||"textarea"===o?o:"input"),E="form-control";d?(E+="-plaintext",y=u||"input"):"file"===o?E+="-file":"range"===o?E+="-range":b&&(E=p?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(f.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=h.size,delete h.size);var j=Object(f.k)(m()(t,l&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,E),a);return("input"===y||u&&"function"===typeof u)&&(h.type=o),h.children&&!d&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(f.r)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(y,Object(n.a)({},h,{ref:g,className:j,"aria-invalid":l}))},t}(i.a.Component);g.propTypes=d,g.defaultProps={type:"text"},t.a=g},302:function(e,t,a){"use strict";a.d(t,"k",(function(){return i})),a.d(t,"h",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"n",(function(){return p})),a.d(t,"l",(function(){return m})),a.d(t,"m",(function(){return f})),a.d(t,"j",(function(){return d})),a.d(t,"i",(function(){return g})),a.d(t,"s",(function(){return h})),a.d(t,"p",(function(){return b})),a.d(t,"t",(function(){return v})),a.d(t,"q",(function(){return y})),a.d(t,"b",(function(){return E})),a.d(t,"f",(function(){return j})),a.d(t,"e",(function(){return k})),a.d(t,"o",(function(){return C})),a.d(t,"a",(function(){return P})),a.d(t,"g",(function(){return O})),a.d(t,"d",(function(){return w})),a.d(t,"r",(function(){return N}));var n=a(288),r=a.n(n),o=a(289),c="http://f2.uppeople.space/api",s=function(){return localStorage.getItem("token")},i=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=s();return fetch("".concat(c,"/main/returnAllCompanies/").concat(e,"/").concat(t,"/").concat(a),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){return{companies:e.companies.map((function(e){return{id:e.id,name:e.nazva,logo:e.logo,email:e.email,skype:e.skype,phone:e.phone,recruiters:e.recruiters,vacancies:e.vacancy_count,candidates:e.candidates_to_company_count}})),companiesCount:e.Count,totalPages:e.Pages,currentPage:e.current_page,perPage:e.per_page}})).catch((function(e){return console.log("error in fetch: ",e)}))},l=function(e,t,a){var n=s();return fetch("".concat(c,"/main/returnAllCompanies/").concat(e,"/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(console.log(e),e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){return{companies:e.companies.map((function(e){return{id:e.id,name:e.nazva,logo:e.logo,email:e.email,skype:e.skype,phone:e.phone,vacancies:e.vacancy_count,candidates:e.candidates_to_company_count}})),companiesCount:e.Count,totalPages:e.Pages,currentPage:e.current_page,perPage:e.per_page}})).catch((function(e){return console.log("error in fetch: ",e)}))},u=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/addNewCompany"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=s();return fetch("".concat(c,"/main/viewInformationForCompany/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){return{name:e.nazva,logo:e.logo,phone:e.phone,email:e.email,skype:e.skype,about:e.about,map:e.map,calendarEvents:e.calendar,sendDetails:e.otpravka,termsOfCooperation:e.uslovia,interviewDetails:e.interview_detail,contacts:e.contacts,managers:e.manager}})).catch((function(e){return console.log("error in fetch: ",e)}))},m=function(e,t){var a=s();return fetch("".concat(c,"/main/viewAllCandidatesForCompany/").concat(e,"/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){return{candidates:e.candidates,candidatesCount:e.Count,totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,platform:e.platforms,candidateStatus:e.statuses}})).catch((function(e){return console.log("error in fetch: ",e)}))},f=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/commentsCompany/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("Error while fetching: ".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e,t,a){var n=s();return fetch("".concat(c,"/main/viewAllVacancyInCompany/").concat(e,"/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){return{vacancies:e.vacancies,vacanciesCount:e.Count,totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,candidateStatus:e.candidateStatus,vacancyStatus:e.vacancyStatus,platform:e.platforms,seniority:e.seniorities}})).catch((function(e){return console.log("error in fetch: ",e)}))},g=function(e,t,a){var n=s();return fetch("".concat(c,"/main/viewAllCandidatesForCompany/").concat(e,"/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){return{candidates:e.candidates,candidatesCount:e.Count,totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,platform:e.platforms,candidateStatus:e.statuses}})).catch((function(e){return console.log("error in fetch: ",e)}))},h=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/updateStatusVacancy"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("Error while fetching: ".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/updateStatusCandidates"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("Error while fetching: ".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s(),o={logo:a},e.prev=2,e.next=5,fetch("".concat(c,"/main/addLogoCompanies/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:if(!(i=e.sent).ok){e.next=8;break}return e.abrupt("return",i.json());case 8:throw new Error("".concat(i.statusText));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/editSettingsCompany/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/addCommentForCompany/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/editCommentCompany/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/deleteCommentCompany/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),C=function(e){var t=s();return fetch("".concat(c,"/main/viewEditContactCompany/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){return{contact:{id:e.id,name:e.name,email:e.email,phone:e.phone,skype:e.skype,selectedPlatforms:e.platforms.map((function(e){var t=Object.values(e.platform);return{id:t[0],label:t[1],value:t[1].toLowerCase()}}))},isChecked:1===e.all_platforms,isDisabled:1===e.all_platforms}})).catch((function(e){return console.log("error in fetch: ",e)}))},P=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/addNewContactForCompany/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/editContactCompany/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s(),e.prev=1,e.next=4,fetch("".concat(c,"/main/deleteContactForCompany/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),N=function(e,t){var a=s();return fetch("".concat(c,"/main/editInformations/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){for(var t in e){return"otpravka"===t?{sendDetails:e[t]}:"interview_detail"===t?{interviewDetails:e[t]}:"about"===t?{about:e[t]}:e}})).catch((function(e){return console.log("error in fetch: ",e)}))}},308:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(295);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},310:function(e,t,a){"use strict";var n=a(297),r=a(30),o=a(31),c=a(33),s=a(32),i=a(0),l=a.n(i),u=a(424),p=a(425),m=a(426),f=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).setPage=function(e){var t=o.props,a=t.totalItems,n=t.totalPages,r=t.pageSize;o.allDisabled=!1;var c=o.state.pager;e<1||e>n||(c=o.getPager(a,e,r),o.setState({pager:c}),o.props.onChangePage(e))},o.setInitialPage=function(){var e=o.props,t=e.totalItems,a=e.totalPages,n=e.pageSize;o.allDisabled=!1;var r=o.state.pager;1>a||(r=o.getPager(t,1,n),o.setState({pager:r}))},o.getPager=function(e,t,a){t=t||1,a=a||10;var r,o,c=Math.ceil(e/a);c<=10?(r=1,o=c):t<=6?(r=1,o=10):t+4>=c?(r=c-9,o=c):(r=t-5,o=t+4);var s=(t-1)*a,i=Math.min(s+a-1,e-1),l=Object(n.a)(Array(o+1-r).keys()).map((function(e){return r+e}));return{totalItems:e,currentPage:t,pageSize:a,totalPages:c,startPage:r,endPage:o,startIndex:s,endIndex:i,pages:l}},o.state={pager:{}},o}return Object(o.a)(a,[{key:"componentWillMount",value:function(){this.setInitialPage()}},{key:"componentDidUpdate",value:function(e){console.log("update from PaginationBackend"),this.props.initialPage===e.initialPage&&this.props.totalItems===e.totalItems||(console.log("condition update from PaginationBackend"),this.setPage(this.props.initialPage))}},{key:"render",value:function(){var e=this,t=this.state.pager,a=this.props.loading;return!t.pages||t.pages.length<=1?null:l.a.createElement(u.a,{style:a?{pointerEvents:"none"}:{},className:"pagination justify-content-end"},l.a.createElement(p.a,{className:"page-item",disabled:1===t.currentPage},l.a.createElement(m.a,{className:"page-link",onClick:function(){return e.setPage(1)}},"First")),l.a.createElement(p.a,{className:"page-item",disabled:1===t.currentPage},l.a.createElement(m.a,{className:"page-link",onClick:function(){return e.setPage(t.currentPage-1)}},"Previous")),t.pages.map((function(a,n){return l.a.createElement(p.a,{key:n,className:"page-item",active:t.currentPage===a,disabled:e.allDisabled},l.a.createElement(m.a,{className:"page-link",onClick:function(){return e.setPage(a)}},a))})),l.a.createElement(p.a,{className:"page-item",disabled:t.currentPage===t.totalPages||this.allDisabled},l.a.createElement(m.a,{className:"page-link",onClick:function(){return e.setPage(t.currentPage+1)}},"Next")),l.a.createElement(p.a,{className:"page-item",disabled:t.currentPage===t.totalPages||this.allDisabled},l.a.createElement(m.a,{className:"page-link",onClick:function(){return e.setPage(t.totalPages)}},"Last")))}}]),a}(i.Component);f.defaultProps={items:[],initialPage:1,pageSize:10,totalItems:null,totalPages:null,onChangePage:function(){return null}},t.a=f},311:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),s=a(1),i=a.n(s),l=a(105),u=a.n(l),p=a(51),m={tag:p.o,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.body,i=e.inverse,l=e.outline,m=e.tag,f=e.innerRef,d=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(p.k)(u()(t,"card",!!i&&"text-white",!!s&&"card-body",!!o&&(l?"border":"bg")+"-"+o),a);return c.a.createElement(m,Object(n.a)({},d,{className:g,ref:f}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},312:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),s=a(1),i=a.n(s),l=a(105),u=a.n(l),p=a(51),m={tag:p.o,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,s=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(p.k)(u()(t,"card-body"),a);return c.a.createElement(s,Object(n.a)({},i,{className:l,ref:o}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},313:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(283),c=a(282),s=a(0),i=a.n(s),l=a(1),u=a.n(l),p=a(105),m=a.n(p),f=a(51),d={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,c=e.className,s=e.close,l=e.cssModule,u=e.color,p=e.outline,d=e.size,g=e.tag,h=e.innerRef,b=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof b.children&&(b.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+u,y=Object(f.k)(m()(c,{close:s},s||"btn",s||v,!!d&&"btn-"+d,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),l);b.href&&"button"===g&&(g="a");var E=s?"Close":null;return i.a.createElement(g,Object(n.a)({type:"button"===g&&b.onClick?"button":void 0},b,{className:y,ref:h,onClick:this.onClick,"aria-label":a||E}))},t}(i.a.Component);g.propTypes=d,g.defaultProps={color:"secondary",tag:"button"},t.a=g},328:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(283),c=a(282),s=a(0),i=a.n(s),l=a(1),u=a.n(l),p=a(105),m=a.n(p),f=a(51),d={children:u.a.node,inline:u.a.bool,tag:f.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,c=e.tag,s=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(f.k)(m()(t,!!o&&"form-inline"),a);return i.a.createElement(c,Object(n.a)({},l,{ref:s,className:u}))},t}(s.Component);g.propTypes=d,g.defaultProps={tag:"form"},t.a=g},376:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),s=a(1),i=a.n(s),l=a(105),u=a.n(l),p=a(51),m={tag:p.o,"aria-label":i.a.string,className:i.a.string,cssModule:i.a.object,role:i.a.string,size:i.a.string,vertical:i.a.bool},f=function(e){var t=e.className,a=e.cssModule,o=e.size,s=e.vertical,i=e.tag,l=Object(r.a)(e,["className","cssModule","size","vertical","tag"]),m=Object(p.k)(u()(t,!!o&&"btn-group-"+o,s?"btn-group-vertical":"btn-group"),a);return c.a.createElement(i,Object(n.a)({},l,{className:m}))};f.propTypes=m,f.defaultProps={tag:"div",role:"group"},t.a=f},384:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),s=a(1),i=a.n(s),l=a(105),u=a.n(l),p=a(51),m={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:p.o,responsiveTag:p.o,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},f=function(e){var t=e.className,a=e.cssModule,o=e.size,s=e.bordered,i=e.borderless,l=e.striped,m=e.dark,f=e.hover,d=e.responsive,g=e.tag,h=e.responsiveTag,b=e.innerRef,v=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),y=Object(p.k)(u()(t,"table",!!o&&"table-"+o,!!s&&"table-bordered",!!i&&"table-borderless",!!l&&"table-striped",!!m&&"table-dark",!!f&&"table-hover"),a),E=c.a.createElement(g,Object(n.a)({},v,{ref:b,className:y}));if(d){var j=Object(p.k)(!0===d?"table-responsive":"table-responsive-"+d,a);return c.a.createElement(h,{className:j},E)}return E};f.propTypes=m,f.defaultProps={tag:"table",responsiveTag:"div"},t.a=f},421:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),s=a(1),i=a.n(s),l=a(105),u=a.n(l),p=a(51),m={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:p.o,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.row,s=e.disabled,i=e.check,l=e.inline,m=e.tag,f=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),d=Object(p.k)(u()(t,!!o&&"row",i?"form-check":"form-group",!(!i||!l)&&"form-check-inline",!(!i||!s)&&"disabled"),a);return"fieldset"===m&&(f.disabled=s),c.a.createElement(m,Object(n.a)({},f,{className:d}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},424:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),s=a(1),i=a.n(s),l=a(105),u=a.n(l),p=a(51),m={children:i.a.node,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,size:i.a.string,tag:p.o,listTag:p.o,"aria-label":i.a.string},f=function(e){var t,a=e.className,o=e.listClassName,s=e.cssModule,i=e.size,l=e.tag,m=e.listTag,f=e["aria-label"],d=Object(r.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),g=Object(p.k)(u()(a),s),h=Object(p.k)(u()(o,"pagination",((t={})["pagination-"+i]=!!i,t)),s);return c.a.createElement(l,{className:g,"aria-label":f},c.a.createElement(m,Object(n.a)({},d,{className:h})))};f.propTypes=m,f.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},t.a=f},425:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),s=a(1),i=a.n(s),l=a(105),u=a.n(l),p=a(51),m={active:i.a.bool,children:i.a.node,className:i.a.string,cssModule:i.a.object,disabled:i.a.bool,tag:p.o},f=function(e){var t=e.active,a=e.className,o=e.cssModule,s=e.disabled,i=e.tag,l=Object(r.a)(e,["active","className","cssModule","disabled","tag"]),m=Object(p.k)(u()(a,"page-item",{active:t,disabled:s}),o);return c.a.createElement(i,Object(n.a)({},l,{className:m}))};f.propTypes=m,f.defaultProps={tag:"li"},t.a=f},426:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),s=a(1),i=a.n(s),l=a(105),u=a.n(l),p=a(51),m={"aria-label":i.a.string,children:i.a.node,className:i.a.string,cssModule:i.a.object,next:i.a.bool,previous:i.a.bool,first:i.a.bool,last:i.a.bool,tag:p.o},f=function(e){var t,a=e.className,o=e.cssModule,s=e.next,i=e.previous,l=e.first,m=e.last,f=e.tag,d=Object(r.a)(e,["className","cssModule","next","previous","first","last","tag"]),g=Object(p.k)(u()(a,"page-link"),o);i?t="Previous":s?t="Next":l?t="First":m&&(t="Last");var h,b=e["aria-label"]||t;i?h="\u2039":s?h="\u203a":l?h="\xab":m&&(h="\xbb");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),d.href||"a"!==f||(f="button"),(i||s||l||m)&&(v=[c.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||h),c.a.createElement("span",{className:"sr-only",key:"sr"},b)]),c.a.createElement(f,Object(n.a)({},d,{className:g,"aria-label":b}),v)};f.propTypes=m,f.defaultProps={tag:"a"},t.a=f},427:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),s=a(1),i=a.n(s),l=a(105),u=a.n(l),p=a(51),m={tag:p.o,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),i=Object(p.k)(u()(t,"card-title"),a);return c.a.createElement(o,Object(n.a)({},s,{className:i}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},492:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),s=a(1),i=a.n(s),l=a(105),u=a.n(l),p=a(51),m={tag:p.o,top:i.a.bool,bottom:i.a.bool,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.top,s=e.bottom,i=e.tag,l=Object(r.a)(e,["className","cssModule","top","bottom","tag"]),m="card-img";o&&(m="card-img-top"),s&&(m="card-img-bottom");var f=Object(p.k)(u()(t,m),a);return c.a.createElement(i,Object(n.a)({},l,{className:f}))};f.propTypes=m,f.defaultProps={tag:"img"},t.a=f},794:function(e,t,a){}}]);
//# sourceMappingURL=14.bd72df62.chunk.js.map