(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[18],{1082:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(31),o=a(33),c=a(32),i=a(0),s=a.n(i),l=a(107),u=a(284),m=a.n(u),d=a(422),p=a(494),h=a(508),f=a(507),v=a(308),g=a(439),y=a(392),E=a(298),b=a(313),w=a(309),C=a(428),k=a(493),j=a(340),x=a(319),T=a(349),S=a(304),O=a(325),A=a.n(O),I=a(351),N=a.n(I),_=a(286),P=(a(356),a(337)),R=(a(352),a(934)),z=a.n(R),B={icon:{position:"absolute",top:"0.6rem",right:"1.75rem"}},F=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={avatar:null,name:"",selectPlatform:[],selectSeniority:[],selectedTag:{},date:"",salary:"",language:"",languages:[{id:"Beginner",label:"Beginner",name:"Beginner",value:"Beginner"},{id:"Elementary",label:"Elementary",name:"Elementary",value:"Elementary"},{id:"Pre-Intermediate",label:"Pre-Intermediate",name:"Pre-Intermediate",value:"Pre-Intermediate"},{id:"Intermediate",label:"Intermediate",name:"Intermediate",value:"Intermediate"},{id:"Upper Intermediate",label:"Upper Intermediate",name:"Upper Intermediate",value:"Upper Intermediate"},{id:"Advanced",label:"Advanced",name:"Advanced",value:"Advanced"},{id:"Proficiency",label:"Proficiency",name:"Proficiency",value:"Proficiency"}],phone:"",email:"",skype:"",linkedIn:"",resume:"",comment:"",status:"",tag:"",about:S.EditorState.createEmpty()},e.handleAvatarSelected=function(t){var a=t.target.files[0];Object(P.a)(a,(function(t){e.setState({avatar:t})}))},e.handleAvatarUpload=function(){e.props.onUploadAvatar(e.state.avatar)},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(l.a)({},n,r))},e.handlePlatformChange=function(t){e.setState({selectPlatform:t})},e.handleSeniorityChange=function(t){e.setState({selectSeniority:t})},e.handleTagsChange=function(t){e.setState({selectedTag:t}),e.setState({selectedReason:void 0})},e.handleLanguageChange=function(t){e.setState({language:t})},e.handleReasonChange=function(t){e.setState({selectedReason:t})},e.handleAboutStateChange=function(t){e.setState({about:t})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,r=a.date,o=a.salary,c=a.language,i=a.phone,s=a.skype,l=a.email,u=a.linkedIn,m=a.resume,d=a.comment,p=a.about,h=a.selectPlatform,f=a.selectSeniority,v=a.selectedTag,g=a.selectedReason;v=void 0!==g?g:v,c="object"===typeof c?c.id:"",(0,e.props.onEditCandidate)({name:n,date:r,salary:o,language:c,phone:i,skype:s,email:l,linkedIn:u,resume:m,comment:d,selectPlatform:h,selectSeniority:f,selectedTag:v,about:N()(Object(S.convertToRaw)(p.getCurrentContent()))})},e.ReasonFormGroup=function(){var t=e.props.reasons,a=e.state,n=a.selectedTag,r=a.selectedReason;if(void 0!==n&&null!==n&&3===n.id||void 0!==r&&r.length>0)return s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"seniority",sm:3},"Reason"),s.a.createElement(h.a,{sm:9},s.a.createElement(_.a,{id:"reasons",options:t,value:r,placeholder:"Reason",onChange:e.handleReasonChange})))},e}return Object(r.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t=e.candidate,a=e.platforms,n=e.seniorities,r=(e.tags,e.reasons),o=e.reject_tag,c=null!==t.platform&&a.find((function(e){return e.id===t.platform.id})),i=t.tag,s={};if(void 0!==t.tag&&null!==t.tag)for(var l in i.value=t.tag.name,i.label=t.tag.name,r)r[l].id===i.id&&((s=i).label=i.name,s.value=i.name,i=o);var u={};void 0!==t.language&&null!==t.language&&(u.id=t.language,u.value=t.language,u.label=t.language);var m,d=null!==t.seniority_id&&n.find((function(e){return e.id===t.seniority_id})),p=t.about;if(p){var h=A()(p);if(h){var f=S.ContentState.createFromBlockArray(h.contentBlocks);m=S.EditorState.createWithContent(f)}}this.setState({avatar:t.avatar,name:t.name,selectPlatform:c,selectSeniority:d,selectedTag:i,selectedReason:s,date:t.date,salary:t.salary,language:u,phone:t.phone,skype:t.skype,email:t.email,linkedIn:t.linkedIn,resume:t.resume,comment:t.comment,about:m})}},{key:"componentDidUpdate",value:function(e,t){this.state}},{key:"render",value:function(){var e=this.state,t=e.avatar,a=e.name,n=e.selectPlatform,r=e.selectSeniority,o=e.selectedTag,c=e.date,i=e.salary,l=e.language,u=e.languages,S=e.phone,O=e.skype,A=e.email,I=e.linkedIn,N=e.resume,P=e.comment,R=e.about,F=this.props,L=(F.candidate,F.platforms),G=F.seniorities,V=F.tags;F.reasons,F.candidateStatus;return s.a.createElement(f.a,null,s.a.createElement(h.a,{md:3},s.a.createElement(v.a,{className:z.a.card},s.a.createElement(g.a,{top:!0,src:t,className:z.a.cardLogo,alt:"avatar"}),s.a.createElement(y.a,{className:z.a.cardTitle},a),s.a.createElement(E.a,{type:"file",className:z.a.cardInputFile,onChange:this.handleAvatarSelected}),s.a.createElement(b.a,{color:"success",onClick:this.handleAvatarUpload},"Upload avatar"),s.a.createElement(w.a,{className:z.a.cardBody},s.a.createElement(C.a,{flush:!0},void 0!==n&&s.a.createElement(k.a,{className:z.a.listGroupItem},"Platform: ",n.label),c&&s.a.createElement(k.a,null,"Date: ",m()(c).format("Do MMM YYYY")),S&&s.a.createElement(k.a,null,"Phone: ",S),O&&s.a.createElement(k.a,null,"Skype: ",O),A&&s.a.createElement(k.a,null,"Email: ",A)))),s.a.createElement(v.a,null,s.a.createElement(j.a,{className:z.a.cardHeader},s.a.createElement(y.a,{className:z.a.cardTitle},"Details")),s.a.createElement(w.a,null,s.a.createElement(C.a,{flush:!0},l&&s.a.createElement(k.a,null,"Languages: ",l.label),P&&s.a.createElement(k.a,null,"Notes: ",P))))),s.a.createElement(h.a,{md:9},s.a.createElement(v.a,null,s.a.createElement(j.a,{className:z.a.cardHeader},s.a.createElement(y.a,{className:z.a.cardTitle},"Settings")),s.a.createElement(w.a,null,s.a.createElement(x.a,{onSubmit:this.handleSubmit},s.a.createElement(f.a,null,s.a.createElement(h.a,{lg:6,md:12},s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"name",sm:3},"Name"),s.a.createElement(h.a,{sm:9},s.a.createElement(E.a,{id:"name",type:"text",name:"name",value:a,onChange:this.handleInputChange}),s.a.createElement("i",{style:B.icon,className:"icon-user icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"platform",sm:3},"Platform"),s.a.createElement(h.a,{sm:9},s.a.createElement(_.a,{id:"platform",options:L,value:n,placeholder:"Platform",onChange:this.handlePlatformChange}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"seniority",sm:3},"Seniority"),s.a.createElement(h.a,{sm:9},s.a.createElement(_.a,{id:"seniority",options:G,value:r,placeholder:"Seniority",onChange:this.handleSeniorityChange}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"language",sm:3},"Language"),s.a.createElement(h.a,{sm:9},s.a.createElement(_.a,{id:"language",value:l,options:u,isClearable:!0,placeholder:"language",onChange:this.handleLanguageChange}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"date",sm:3},"Date"),s.a.createElement(h.a,{sm:9},s.a.createElement(E.a,{id:"date",type:"date",name:"date",value:c,onChange:this.handleInputChange}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"salary",sm:3},"Salary"),s.a.createElement(h.a,{sm:9},s.a.createElement(E.a,{id:"salary",type:"text",name:"salary",value:i,onChange:this.handleInputChange}),s.a.createElement("i",{style:B.icon,className:"cui-dollar icons font-lg"})))),s.a.createElement(h.a,{lg:6,md:12},s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"seniority",sm:3},"Tag"),s.a.createElement(h.a,{sm:9},s.a.createElement(_.a,{id:"tags",options:V,value:o,placeholder:"Tag",onChange:this.handleTagsChange}))),this.ReasonFormGroup(),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"phone",sm:3},"Phone"),s.a.createElement(h.a,{sm:9},s.a.createElement(E.a,{id:"phone",type:"tel",name:"phone",value:S,onChange:this.handleInputChange}),s.a.createElement("i",{style:B.icon,className:"icon-phone icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"skype",sm:3},"Skype"),s.a.createElement(h.a,{sm:9},s.a.createElement(E.a,{id:"skype",type:"text",name:"skype",value:O,onChange:this.handleInputChange}),s.a.createElement("i",{style:B.icon,className:"icon-social-skype icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"email",sm:3},"Email"),s.a.createElement(h.a,{sm:9},s.a.createElement(E.a,{id:"email",type:"email",name:"email",value:A,onChange:this.handleInputChange}),s.a.createElement("i",{style:B.icon,className:"icon-envelope icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"linkedIn",sm:3},"LinkedIn"),s.a.createElement(h.a,{sm:9},s.a.createElement(E.a,{id:"linkedIn",type:"url",name:"linkedIn",value:I,onChange:this.handleInputChange}),s.a.createElement("i",{style:B.icon,className:"icon-social-linkedin icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"resume",sm:3},"CV"),s.a.createElement(h.a,{sm:9},s.a.createElement(E.a,{id:"resume",type:"url",name:"resume",value:N,onChange:this.handleInputChange}),s.a.createElement("i",{style:B.icon,className:"icon-link icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"comment",sm:3},"Comment"),s.a.createElement(h.a,{sm:9},s.a.createElement(E.a,{id:"comment",type:"textarea",name:"comment",value:P,onChange:this.handleInputChange}),s.a.createElement("i",{style:B.icon,className:"icon-note icons font-lg"}))))),s.a.createElement(f.a,null,s.a.createElement(h.a,null,s.a.createElement("h6",null,"About"),s.a.createElement(T.Editor,{editorState:R,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.handleAboutStateChange}))),s.a.createElement(f.a,{style:{justifyContent:"flex-end"}},s.a.createElement(d.a,{check:!0},s.a.createElement(h.a,null,s.a.createElement(b.a,{type:"submit",color:"primary"},"Save")))))))))}}]),a}(i.Component),L=a(395),G=a(331),V=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={candidate:{id:null,avatar:null,name:"",date:"",phone:"",email:"",skype:"",platform:[],seniority_id:[],tag_id:0,language:"",salary:null,linkedIn:"",resume:"",comment:"",about:""}},e.uploadAvatar=function(t){var a=e.props.match.params.id;Object(G.q)(a,t).then((function(e){return console.log(e)}))},e.updateCandidate=function(t){var a=e.props.match.params.id;Object(G.p)(a,t).then(e.props.history.push("/candidates/"))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;Object(G.j)(t).then((function(t){var a=t.candidate;e.setState({candidate:a})}))}},{key:"render",value:function(){var e=this.state.candidate,t=this.props.options;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"Edit Candidate"),s.a.createElement(F,{candidate:e,platforms:t.platforms,seniorities:t.seniority,tags:t.tags,reasons:t.reasons,reject_tag:t.reject_tag,onUploadAvatar:this.uploadAvatar,onEditCandidate:this.updateCandidate}))}}]),a}(i.Component);t.default=Object(L.a)(V)},286:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(323);a(301);t.a=function(e){var t=e.name,a=void 0===t?"select":t,n=e.defaultValue,c=e.isMulti,i=void 0!==c&&c,s=e.isDisabled,l=void 0!==s&&s,u=e.closeMenuOnSelect,m=e.inputValue,d=e.value,p=e.options,h=e.components,f=e.theme,v=e.styles,g=e.selectOption,y=e.selectProps,E=e.setValue,b=e.placeholder,w=e.onChange,C=e.onInputChange;return r.a.createElement(o.a,{name:a,styles:v,defaultValue:n,isMulti:i,isDisabled:l,inputValue:m,value:d,options:p,closeMenuOnSelect:u,components:h,theme:f,selectOption:g,selectProps:y,setValue:E,placeholder:b,className:"basic-multi-select",classNamePrefix:"select",onChange:w,onInputChange:C})}},301:function(e,t,a){e.exports={select__menu:"Select_select__menu__3w_Fl"}},331:function(e,t,a){"use strict";a.d(t,"j",(function(){return s})),a.d(t,"i",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"g",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"q",(function(){return p})),a.d(t,"d",(function(){return h})),a.d(t,"p",(function(){return f})),a.d(t,"f",(function(){return v})),a.d(t,"l",(function(){return g})),a.d(t,"o",(function(){return y})),a.d(t,"k",(function(){return E})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return w})),a.d(t,"m",(function(){return C})),a.d(t,"n",(function(){return k})),a.d(t,"h",(function(){return j}));var n=a(288),r=a.n(n),o=a(289),c="http://f2.uppeople.space/api",i=function(){return localStorage.getItem("token")},s=function(e){var t=i();return fetch("".concat(c,"/main/viewOneCandidate/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){var t=e[0],a=(null!==e.statusesCandidate&&e.statusesCandidate).map((function(e){return{id:e.id,platform:e.platform,seniority:e.seniority,vacancy:e.vacancy,company:e.company,dateUpdate:e.date_last_change,vacancyStatus:e.status_vac,details:e.rej_text}})),n=e.select.candidateStatus;return{candidate:{id:t.id,avatar:t.avatar,name:t.name,date:t.date,platform:t.platforms,seniority_id:t.seniority_id,tag:t.tags,salary:t.salary,language:t.language,phone:t.mobile,email:t.email,skype:t.skype,linkedIn:t.linkedin,resume:t.link,comment:t.comments,about:t.text_rezume},candidateStatuses:a,selectCandidateStatus:n}})).catch((function(e){return console.log("error in fetch: ",e)}))},l=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/commentsCandidate/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("Error while fetching: ".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/addCommentForCandidate/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/editCommentCandidate/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/deleteCommentCandidate/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),o={avatar:a},e.prev=2,e.next=5,fetch("".concat(c,"/main/addAvatarCandidate/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:if(!(s=e.sent).ok){e.next=8;break}return e.abrupt("return",s.json());case 8:throw new Error("".concat(s.statusText));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/addNewCandidate"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e,t){var a=i();return fetch("".concat(c,"/main/editCandidate/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){var t=e[0];return{id:t.id,name:t.name,date:t.date,platform:t.platforms,seniority_id:t.seniority_id,salary:t.salary,language:t.language,phone:t.mobile,email:t.email,skype:t.skype,linkedIn:t.linkedin,resume:t.link,comment:t.comments,about:t.text_rezume}})).catch((function(e){return console.log("error in fetch: ",e)}))},v=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/deleteCandidate/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=i();return fetch("".concat(c,"/interview/viewInformationForSendCV/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){var t=e.companies;return{companies:Object.keys(t).map((function(e){return t[e]})),emailTemplate:e.emailTemplay.text,emailSubject:e.subject}})).catch((function(e){return console.log("error in fetch: ",e)}))},y=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/interview/sendCV/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i(),e.prev=1,e.next=4,fetch("".concat(c,"/interview/inviteOnInterviewView/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=8;break}return console.log("response: ",n),e.abrupt("return",n.json());case 8:throw new Error("".concat(n.statusText));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/interview/inviteOnInterviewSend/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/cancelCandFreelancer/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/addCommentForVac"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/saveFollowUp"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/returnLogsForCand/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},337:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return s}));var n=a(348),r=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},o=function(e,t){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){t(a.result)},a.onerror=function(e){console.log("Error: ",e)}},c=function(e,t){return e.reduce((function(e,a){return{data:a[t]?e.data.concat(a[t]):e.data.concat(0),label:t}}),{data:[],label:t})},i=function(e,t,a,n){var r=a[e],o={labels:n,datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:r.data,label:r.label}]};return function(){return o}},s={tooltips:{enabled:!1,custom:n.CustomTooltips},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}}},356:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEW1tbW4uLi8vLzGxsbS0tLc3Nzs7Oz4+Pj////b1d6+AAADDUlEQVRo3u3aTW8TQQwG4Hfox3lcSrmmIiHXConSY4hAzbGkVM2R0gM5hxbtvd1MfzYHKshmxzO2dwNF2vkBj3a8Hu/YCR7aW+iszuqs/8n6cfH5w8eLby1Yt+NDAMBe/7KhFc57oF8L7m3RxApjOPq9sD+3W8v3KxIR+edzqxU+VSkiv18Yrek6ReQHNusGVF84tVjhiGLr2dxgfXVRy7/WW8sexZebqa0rx1j+hdZiH4vIzZXWwrEWGzGoXuLjqyxUVukSlp+orCtKrR2NFXpJa69QWMktspuMWwtKrwOFNcpYW3IrEy4imoutTLi4gEGZ9I/rpdg6y1HxDIMl9ERbhdAKh1mLpNYyGy7yM6FVCqyJ0LoTWEOhlU8JojatXaH1JU9FEwymVH261nZnbST2bebXVYvWQmAdtHcexXWizZrTZi1ss0bnP9vyb0eb3zRBgu20eAcY/pO7ST74hfwud2aoOOwd0xmuTH/h7ptsO9jGw9QrHLTYw8x0fdpIe4CMPd9Q2T8m0pVr+fgemX0wvnlnLfbB+KECP1P47nTRSs46RqqXmJ7BlD42BLi0zYau6wMdf2ydf9UGTX5gnVk9hOmalaTS1u2bNevVpdEK5762x+T8MZET0+gsbWDIiTBGNL/QL7RWGLPnsa8822GaqDkDXf26RqIW4lhj3fpkvWcOEgyfIe6AQziklYxso3dMZO9MEN4Lw0hwJ98uRNaNoEUmfyqxsoFnww9pna892Lu8JXys2IPBFK14xKC/j7OXQ+j7F/a6A0PvyF3DoG9f2EvKmnXvFNb6tRX6tp3tZGDfYm2TsG+xtkmY32L9TcJ0fuLnCMZEjaUrtMO9qnXCWmekXbusdaS2tjhrSfo1Z6x7p6YqGQblTCjVxKNR6KtHEo1CXw3+ihUMFLkiapXOYK1mPlRjr3Tmo9lrrLxI2AtOreygWUpUkgKWryzzxYW9ENbKIVS/CqV/10SjKlGtFH+s0mjNYpYzUX7T1r3RmmzYujNaJzELthWzygvbmsn/g6RYndVZnfV0rJ/xkS0+gAgoxQAAAABJRU5ErkJggg=="},395:function(e,t,a){"use strict";var n=a(42),r=a(30),o=a(31),c=a(33),i=a(32),s=a(0),l=a.n(s),u=a(300);t.a=function(e){return function(t){Object(c.a)(s,t);var a=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={platforms:[],seniority:[],companies:[],location:[],tags:[],reasons:[],reject_tag:{}},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;Object(u.q)().then((function(t){var a={platforms:t.platforms,seniority:t.seniorities,companies:t.companies,location:t.location,tags:t.tags,reasons:t.reject_reasons,reject_tag:t.reject_tag[0],recruiters:t.recruiters};e.setState(Object(n.a)({},a))}))}},{key:"render",value:function(){return l.a.createElement(e,Object.assign({options:this.state},this.props))}}]),s}(s.Component)}},934:function(e,t,a){e.exports={card:"Form_card__CfDZs",cardLogo:"Form_cardLogo__1ohfp",cardInputFile:"Form_cardInputFile__3JyZm",cardTitle:"Form_cardTitle__WtAQy",cardHeader:"Form_cardHeader__1G0YU",cardBody:"Form_cardBody__1IlFX",listGroupItem:"Form_listGroupItem__xwWIR"}}}]);
//# sourceMappingURL=18.76bd19ee.chunk.js.map