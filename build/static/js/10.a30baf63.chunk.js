(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[10],{1083:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(31),o=a(33),c=a(32),i=a(0),s=a.n(i),l=a(42),u=a(107),p=a(807),f=a(334),d=a(504),m=a(505),h=a(316),b=a(317),g=a(419),y=a(300),v=a(384),E=a(318),j=a(337),C=a(298),O=a(339),S=a.n(O),k=a(287),N=(a(983),a(340),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={selectPlatform:[],selectSeniority:[],selectCompany:[],selectLocation:[],selectRecruiter:[],salary:"",comment:"",link:"",selectedVacancyStatus:0,description:C.EditorState.createEmpty(),details:C.EditorState.createEmpty()},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(u.a)({},n,r))},e.handleDescriptionStateChange=function(t){e.setState({description:t})},e.handleDetailsStateChange=function(t){e.setState({details:t})},e.handlePlatformChange=function(t){e.setState({selectPlatform:t})},e.handleSeniorityChange=function(t){e.setState({selectSeniority:t})},e.handleCompanyChange=function(t){e.setState({selectCompany:t})},e.handleLocationChange=function(t){e.setState({selectLocation:t})},e.handleRecruiterChange=function(t){e.setState({selectRecruiter:t})},e.onRadioBtnClick=function(t){e.setState({selectedVacancyStatus:t})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.description,r=a.details,o=e.props.onCreateVacancy,c=S()(Object(C.convertToRaw)(n.getCurrentContent())),i=S()(Object(C.convertToRaw)(r.getCurrentContent())),s=Object(l.a)(Object(l.a)({},e.state),{},{description:c,details:i});document.querySelector(".recruiters_div > div").classList.remove("error"),s.selectRecruiter.length>0?o(s):document.querySelector(".recruiters_div > div").classList.add("error")},e}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.options.companies;if(e.options.companies.length!==n.length&&this.props.location.state){var r=n.find((function(e){return e.label===a.props.location.state.fromCompany}));this.setState({selectCompany:r})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectPlatform,n=t.selectSeniority,r=t.selectCompany,o=t.selectLocation,c=t.selectRecruiter,i=t.salary,l=(t.comment,t.link),u=t.selectedVacancyStatus,C=t.description,O=t.details,S=this.props.options,N=S.platforms,w=S.seniority,R=S.companies,x=S.location,T=S.recruiters;return s.a.createElement(f.a,{onSubmit:this.handleSubmit},s.a.createElement(d.a,null,s.a.createElement(m.a,{md:9},s.a.createElement(h.a,null,s.a.createElement(b.a,null,s.a.createElement("h6",null,"Description"),s.a.createElement(j.Editor,{editorState:C,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.handleDescriptionStateChange}),s.a.createElement("h6",null,"Description for Freelancers"),s.a.createElement(j.Editor,{editorState:O,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.handleDetailsStateChange})))),s.a.createElement(m.a,{md:3},s.a.createElement(h.a,null,s.a.createElement(b.a,null,s.a.createElement(d.a,null,s.a.createElement(m.a,null,s.a.createElement(g.a,null,s.a.createElement(k.a,{value:a,options:N,placeholder:"Platform",onChange:this.handlePlatformChange})),s.a.createElement(g.a,null,s.a.createElement(k.a,{value:n,options:w,placeholder:"Seniority",onChange:this.handleSeniorityChange})),s.a.createElement(g.a,null,s.a.createElement(k.a,{value:r,options:R,placeholder:"Company",onChange:this.handleCompanyChange})),s.a.createElement(g.a,{className:"recruiters_div"},s.a.createElement(k.a,{value:c,isMulti:!0,options:T,placeholder:"Recruiter",onChange:this.handleRecruiterChange,className:"testtest",style:{zIndex:2}})),s.a.createElement(g.a,null,s.a.createElement(k.a,{value:o,options:x,placeholder:"Location",onChange:this.handleLocationChange,style:{zIndex:2}})),s.a.createElement(g.a,{row:!0},s.a.createElement(m.a,null,s.a.createElement(y.a,{id:"salary",type:"text",name:"salary",value:i,placeholder:"Salary",onChange:this.handleInputChange}),s.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"cui-dollar icons font-lg"}))),s.a.createElement(g.a,{row:!0},s.a.createElement(m.a,null,s.a.createElement(y.a,{id:"link",type:"url",name:"link",value:l,placeholder:"Link",onChange:this.handleInputChange}),s.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"icon-link icons font-lg"}))),s.a.createElement(v.a,{style:{display:"flex",marginBottom:"1rem"}},s.a.createElement(E.a,{className:"btn-default",active:0===u,onClick:function(){return e.onRadioBtnClick(0)}},s.a.createElement("i",{className:"fa fa-fire"})),s.a.createElement(E.a,{className:"btn-default",active:1===u,onClick:function(){return e.onRadioBtnClick(1)}},s.a.createElement("i",{className:"fa fa-check-circle"})),s.a.createElement(E.a,{className:"btn-default",active:2===u,onClick:function(){return e.onRadioBtnClick(2)}},s.a.createElement("i",{className:"fa fa-history"})),s.a.createElement(E.a,{className:"btn-default",active:3===u,onClick:function(){return e.onRadioBtnClick(3)}},s.a.createElement("i",{className:"fa fa-ban"}))),s.a.createElement(g.a,{row:!0},s.a.createElement(m.a,null,s.a.createElement(E.a,{type:"submit",color:"primary",block:!0},"Save"))),s.a.createElement(g.a,{row:!0},s.a.createElement(m.a,null,s.a.createElement(p.a,{to:"/vacancies",style:{textDecoration:"none"}},s.a.createElement(E.a,{type:"button",outline:!0,color:"secondary",block:!0},"Cancel")))))))))))}}]),a}(i.Component)),w=a(390),R=a(358),x=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).createVacancy=function(t){Object(R.a)(t).then((function(a){var n=e.props.history;console.log("CREATED VACANCY",t),void 0!==a&&n.push("/vacancies/".concat(a.id))}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.options;return console.log(e),s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"New Vacancy"),s.a.createElement(N,Object.assign({options:e,onCreateVacancy:this.createVacancy},this.props)))}}]),a}(i.Component);t.default=Object(w.a)(x)},287:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(323);a(297);t.a=function(e){var t=e.name,a=void 0===t?"select":t,n=e.defaultValue,c=e.isMulti,i=void 0!==c&&c,s=e.isDisabled,l=void 0!==s&&s,u=e.closeMenuOnSelect,p=e.inputValue,f=e.value,d=e.options,m=e.components,h=e.theme,b=e.styles,g=e.selectOption,y=e.selectProps,v=e.setValue,E=e.placeholder,j=e.onChange,C=e.onInputChange;return r.a.createElement(o.a,{name:a,styles:b,defaultValue:n,isMulti:i,isDisabled:l,inputValue:p,value:f,options:d,closeMenuOnSelect:u,components:m,theme:h,selectOption:g,selectProps:y,setValue:v,placeholder:E,className:"basic-multi-select",classNamePrefix:"select",onChange:j,onInputChange:C})}},297:function(e,t,a){e.exports={select__menu:"Select_select__menu__3w_Fl"}},300:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(283),c=a(282),i=a(0),s=a.n(i),l=a(1),u=a.n(l),p=a(105),f=a.n(p),d=a(51),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,c=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,p=e.addon,m=e.plaintext,h=e.innerRef,b=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),v=u||("select"===o||"textarea"===o?o:"input"),E="form-control";m?(E+="-plaintext",v=u||"input"):"file"===o?E+="-file":"range"===o?E+="-range":g&&(E=p?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(d.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var j=Object(d.k)(f()(t,l&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,E),a);return("input"===v||u&&"function"===typeof u)&&(b.type=o),b.children&&!m&&"select"!==o&&"string"===typeof v&&"select"!==v&&(Object(d.r)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),s.a.createElement(v,Object(n.a)({},b,{ref:h,className:j,"aria-invalid":l}))},t}(s.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h},316:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),i=a(1),s=a.n(i),l=a(105),u=a.n(l),p=a(51),f={tag:p.o,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(e){var t=e.className,a=e.cssModule,o=e.color,i=e.body,s=e.inverse,l=e.outline,f=e.tag,d=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(p.k)(u()(t,"card",!!s&&"text-white",!!i&&"card-body",!!o&&(l?"border":"bg")+"-"+o),a);return c.a.createElement(f,Object(n.a)({},m,{className:h,ref:d}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},317:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),i=a(1),s=a.n(i),l=a(105),u=a.n(l),p=a(51),f={tag:p.o,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,i=e.tag,s=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(p.k)(u()(t,"card-body"),a);return c.a.createElement(i,Object(n.a)({},s,{className:l,ref:o}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},334:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(283),c=a(282),i=a(0),s=a.n(i),l=a(1),u=a.n(l),p=a(105),f=a.n(p),d=a(51),m={children:u.a.node,inline:u.a.bool,tag:d.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,c=e.tag,i=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(d.k)(f()(t,!!o&&"form-inline"),a);return s.a.createElement(c,Object(n.a)({},l,{ref:i,className:u}))},t}(i.Component);h.propTypes=m,h.defaultProps={tag:"form"},t.a=h},358:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"f",(function(){return u})),a.d(t,"b",(function(){return p})),a.d(t,"d",(function(){return f})),a.d(t,"c",(function(){return d}));var n=a(289),r=a.n(n),o=a(290),c="http://f2.uppeople.space/api",i=function(){return localStorage.getItem("token")},s=function(e){var t=i();return fetch("".concat(c,"/main/viewVacancy/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){var t=e[0];return console.log(t),{id:t.id,date:t.date_create,company:t.company,platform:t.platforms,seniority:t.seniorities,status:t.status,location:t.location,salary:t.salary,link:t.link,description:t.opus,details:t.details,recruiters_ids:t.recruiters_ids}})).catch((function(e){return console.log("error in fetch: ",e)}))},l=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a=i(),e.prev=2,e.next=5,fetch("".concat(c,"/main/addNewVacancy"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:if(!(n=e.sent).ok){e.next=8;break}return e.abrupt("return",n.json());case 8:throw new Error("".concat(n.statusText));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e,t){var a=i();return fetch("".concat(c,"/main/editVacancy/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){var t=e[0];return console.log("vacancy response",e),{id:t.id,date:t.date_create,company:t.company,platform:t.platforms,seniority:t.seniorities,status:t.status,location:t.location,salary:t.salary,link:t.link,description:t.opus,details:t.details}})).catch((function(e){return console.log("error in fetch: ",e)}))},p=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/deleteVacancy/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=i();return console.log(n),fetch("".concat(c,"/main/returnAllVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify({company_id:e,withRecruiters:a,isActive:t})}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).catch((function(e){return console.log("error in fetch: ",e)}))},d=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/getTags"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},384:function(e,t,a){"use strict";var n=a(24),r=a(106),o=a(0),c=a.n(o),i=a(1),s=a.n(i),l=a(105),u=a.n(l),p=a(51),f={tag:p.o,"aria-label":s.a.string,className:s.a.string,cssModule:s.a.object,role:s.a.string,size:s.a.string,vertical:s.a.bool},d=function(e){var t=e.className,a=e.cssModule,o=e.size,i=e.vertical,s=e.tag,l=Object(r.a)(e,["className","cssModule","size","vertical","tag"]),f=Object(p.k)(u()(t,!!o&&"btn-group-"+o,i?"btn-group-vertical":"btn-group"),a);return c.a.createElement(s,Object(n.a)({},l,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div",role:"group"},t.a=d},390:function(e,t,a){"use strict";var n=a(42),r=a(30),o=a(31),c=a(33),i=a(32),s=a(0),l=a.n(s),u=a(299);t.a=function(e){return function(t){Object(c.a)(s,t);var a=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={platforms:[],seniority:[],companies:[],location:[],tags:[],reasons:[],reject_tag:{}},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;Object(u.o)().then((function(t){var a={platforms:t.platforms,seniority:t.seniorities,companies:t.companies,location:t.location,tags:t.tags,reasons:t.reject_reasons,reject_tag:t.reject_tag[0],recruiters:t.recruiters};e.setState(Object(n.a)({},a))}))}},{key:"render",value:function(){return l.a.createElement(e,Object.assign({options:this.state},this.props))}}]),s}(s.Component)}},983:function(e,t,a){}}]);
//# sourceMappingURL=10.a30baf63.chunk.js.map