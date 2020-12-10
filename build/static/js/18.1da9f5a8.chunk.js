(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[18],{1080:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return F}));var n=t(30),r=t(31),o=t(33),c=t(32),l=t(0),s=t.n(l),i=t(107),u=t(284),m=t.n(u),d=t(419),p=t(511),h=t(505),f=t(504),g=t(316),v=t(491),E=t(423),y=t(300),b=t(318),C=t(317),k=t(492),w=t(662),S=t(360),T=t(334),x=(t(337),t(298)),j=(t(339),t(287)),I=t(350),O=t.n(I),_=(t(340),t(932)),A=t.n(_),N=(t(933),{icon:{position:"absolute",top:"0.6rem",right:"1.75rem"}}),P=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={avatar:O.a,name:"",selectPlatform:[],selectSeniority:[],selectedTag:{},selectedReason:{},selectedVacancies:[],date:m()().format("YYYY-MM-DD"),salary:"",language:"",languages:[{id:"Beginner",label:"Beginner",name:"Beginner",value:"Beginner"},{id:"Elementary",label:"Elementary",name:"Elementary",value:"Elementary"},{id:"Pre-Intermediate",label:"Pre-Intermediate",name:"Pre-Intermediate",value:"Pre-Intermediate"},{id:"Intermediate",label:"Intermediate",name:"Intermediate",value:"Intermediate"},{id:"Upper Intermediate",label:"Upper Intermediate",name:"Upper Intermediate",value:"Upper Intermediate"},{id:"Advanced",label:"Advanced",name:"Advanced",value:"Advanced"},{id:"Proficiency",label:"Proficiency",name:"Proficiency",value:"Proficiency"}],phone:"",email:"",skype:"",linkedIn:"",resume:"",comment:"",about:x.EditorState.createEmpty()},r.handleAvatarSelected=function(e){r.setState({avatar:e.target.files[0]})},r.handleAvatarUpload=function(){r.props.onUploadAvatar(r.state.avatar)},r.handleInputChange=function(e){var a=e.target,t=a.name,n=a.value;r.setState(Object(i.a)({},t,n))},r.handlePlatformChange=function(e){r.setState({selectPlatform:e});var a=r.props.vacancies,t=[];void 0!==e&&a.map((function(a){a.platform_id===e.id&&t.push(a)})),r.setState({platformVacancies:t})},r.handleTagsChange=function(e){r.setState({selectedTag:e}),r.setState({selectedReason:void 0})},r.handleLanguageChange=function(e){r.setState({language:e})},r.handleReasonChange=function(e){r.setState({selectedReason:e})},r.handleSeniorityChange=function(e){r.setState({selectSeniority:e})},r.handleAboutStateChange=function(e){r.setState({about:e})},r.handleVacancyChange=function(e){r.setState({selectedVacancies:e})},r.handleSubmit=function(e){e.preventDefault();var a=r.state,t=a.name,n=a.selectPlatform,o=a.selectSeniority,c=a.date,l=a.salary,s=a.language,i=a.phone,u=a.skype,m=a.email,d=a.linkedIn,p=a.resume,h=a.comment,f=a.selectedTag,g=a.selectedReason,v=a.selectedVacancies,E=r.props.onCreateCandidate;if(null!==document.querySelector(".reasons_div > div")&&document.querySelector(".reasons_div > div").classList.remove("error"),void 0!==f&&3===f.id&&void 0!==g||3!==f.id){var y={name:t,selectPlatform:n,selectSeniority:o,selectedTag:f=void 0!==g&&Object.keys(g).length>0?g:f,date:c,salary:l,language:s="object"===typeof s?s.id:"",phone:i,skype:u,email:m,linkedIn:d,resume:p,comment:h,selectedVacancies:v};console.log(y),E(y)}else document.querySelector(".reasons_div > div").classList.add("error")},r.ReasonFormGroup=function(){var e=r.props.reasons,a=r.state,t=a.selectedTag,n=a.selectedReason;if(void 0!==t&&null!==t&&3===t.id||void 0!==n&&n.length>0)return s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"seniority",sm:3},"Reason"),s.a.createElement(h.a,{sm:9,className:"reasons_div"},s.a.createElement(j.a,{id:"reasons",options:e,value:n,placeholder:"Reason",onChange:r.handleReasonChange})))},r.setState({}),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,a=e.avatar,t=e.name,n=e.selectPlatform,r=e.selectSeniority,o=e.date,c=e.salary,l=e.language,i=e.languages,u=e.phone,x=e.skype,I=e.email,O=e.linkedIn,_=e.resume,P=e.comment,R=e.platformVacancies,V=e.selectedVacancies,F=this.state.selectedTag,L=this.props,B=L.platforms,z=L.seniorities,G=L.tags,U=L.defaultSelectedTag;return 0===Object.keys(F).length&&Object.keys(U).length>0&&(F=U,this.setState({selectedTag:F})),s.a.createElement(f.a,null,s.a.createElement(h.a,{md:3},s.a.createElement(g.a,{className:A.a.card},s.a.createElement(v.a,{top:!0,src:a,className:A.a.cardLogo,alt:"avatar"}),s.a.createElement(E.a,{className:A.a.cardTitle},t),s.a.createElement(y.a,{type:"file",className:A.a.cardInputFile,onChange:this.handleAvatarSelected}),s.a.createElement(b.a,{color:"success",onClick:this.handleAvatarUpload},"Upload avatar"),s.a.createElement(C.a,{className:A.a.cardBody},s.a.createElement(k.a,{flush:!0},n.label&&s.a.createElement(w.a,{className:A.a.listGroupItem},n.label),r.label&&s.a.createElement(w.a,{className:A.a.listGroupItem},r.label),o&&s.a.createElement(w.a,null,"Date: ",m()(o).format("Do MMM YYYY")),u&&s.a.createElement(w.a,null,"Phone: ",u),x&&s.a.createElement(w.a,null,"Skype: ",x),I&&s.a.createElement(w.a,null,"Email: ",I)))),s.a.createElement(g.a,null,s.a.createElement(S.a,{className:A.a.cardHeader},s.a.createElement(E.a,{className:A.a.cardTitle},"Details")),s.a.createElement(C.a,null,s.a.createElement(k.a,{flush:!0},l&&s.a.createElement(w.a,null,"Languages: ",l.label),P&&s.a.createElement(w.a,null,"Notes: ",P))))),s.a.createElement(h.a,{md:9},s.a.createElement(g.a,null,s.a.createElement(S.a,{className:A.a.cardHeader},s.a.createElement(E.a,{className:A.a.cardTitle},"Settings")),s.a.createElement(C.a,null,s.a.createElement(T.a,{onSubmit:this.handleSubmit},s.a.createElement(f.a,null,s.a.createElement(h.a,{lg:6,md:12},s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"name",sm:3},"Name"),s.a.createElement(h.a,{sm:9},s.a.createElement(y.a,{id:"name",type:"text",name:"name",value:t,onChange:this.handleInputChange}),s.a.createElement("i",{style:N.icon,className:"icon-user icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"platform",sm:3},"Platform"),s.a.createElement(h.a,{sm:9},s.a.createElement(j.a,{id:"platform",value:n,placeholder:"Platform",options:B,onChange:this.handlePlatformChange}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"seniorities",sm:3},"Seniorities"),s.a.createElement(h.a,{sm:9},s.a.createElement(j.a,{id:"seniorities",value:r,placeholder:"Seniorities",options:z,onChange:this.handleSeniorityChange}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"language",sm:3},"Language"),s.a.createElement(h.a,{sm:9},s.a.createElement(j.a,{id:"language",value:l,options:i,isClearable:!0,placeholder:"language",onChange:this.handleLanguageChange}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"date",sm:3},"Date"),s.a.createElement(h.a,{sm:9},s.a.createElement(y.a,{id:"date",type:"date",name:"date",value:o,onChange:this.handleInputChange}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"salary",sm:3},"Salary"),s.a.createElement(h.a,{sm:9},s.a.createElement(y.a,{id:"salary",type:"text",name:"salary",value:c,onChange:this.handleInputChange}),s.a.createElement("i",{style:N.icon,className:"cui-dollar icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"salary",sm:3},"Vacancies"),s.a.createElement(h.a,{sm:9},s.a.createElement(j.a,{id:"language",isMulti:!0,value:V,options:R,isClearable:!0,placeholder:"vacancies",onChange:this.handleVacancyChange})))),s.a.createElement(h.a,{lg:6,md:12},s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"seniority",sm:3},"Tag"),s.a.createElement(h.a,{sm:9},s.a.createElement(j.a,{id:"tags",options:G,value:F,placeholder:"Tag",onChange:this.handleTagsChange}))),this.ReasonFormGroup(),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"phone",sm:3},"Phone"),s.a.createElement(h.a,{sm:9},s.a.createElement(y.a,{id:"phone",type:"tel",name:"phone",value:u,onChange:this.handleInputChange}),s.a.createElement("i",{style:N.icon,className:"icon-phone icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"skype",sm:3},"Skype"),s.a.createElement(h.a,{sm:9},s.a.createElement(y.a,{id:"skype",type:"text",name:"skype",value:x,onChange:this.handleInputChange}),s.a.createElement("i",{style:N.icon,className:"icon-social-skype icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"email",sm:3},"Email"),s.a.createElement(h.a,{sm:9},s.a.createElement(y.a,{id:"email",type:"email",name:"email",value:I,onChange:this.handleInputChange}),s.a.createElement("i",{style:N.icon,className:"icon-envelope icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"linkedIn",sm:3},"LinkedIn"),s.a.createElement(h.a,{sm:9},s.a.createElement(y.a,{id:"linkedIn",type:"url",name:"linkedIn",value:O,onChange:this.handleInputChange}),s.a.createElement("i",{style:N.icon,className:"icon-social-linkedin icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"resume",sm:3},"Resume"),s.a.createElement(h.a,{sm:9},s.a.createElement(y.a,{id:"resume",type:"url",name:"resume",value:_,onChange:this.handleInputChange}),s.a.createElement("i",{style:N.icon,className:"icon-link icons font-lg"}))),s.a.createElement(d.a,{row:!0},s.a.createElement(p.a,{for:"comment",sm:3},"Comment"),s.a.createElement(h.a,{sm:9},s.a.createElement(y.a,{id:"comment",type:"textarea",name:"comment",value:P,onChange:this.handleInputChange}),s.a.createElement("i",{style:N.icon,className:"icon-note icons font-lg"}))))),s.a.createElement(f.a,{style:{justifyContent:"flex-end"}},s.a.createElement(d.a,{check:!0},s.a.createElement(h.a,null,s.a.createElement(b.a,{type:"submit",color:"primary"},"Save")))))))))}}]),t}(l.Component),R=t(299),V=t(351),F=(t(680),function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={platforms:[],seniorities:[],tags:[],reasons:[],reject_tag:{},defaultSelectedTag:{}},e.uploadAvatar=function(e,a){Object(V.q)(e,a).then((function(e){return console.log(e)}))},e.createCandidate=function(a){Object(V.d)(a).then(e.props.history.push("/candidates/"))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(R.o)().then((function(a){var t=a.platforms,n=a.seniorities,r=a.tags,o=a.reject_reasons,c=a.reject_tag,l=a.tags.filter((function(e){return 1===e.id}))[0],s=a.vacancies;e.setState({platforms:t,seniorities:n,tags:r,reasons:o,vacancies:s,reject_tag:c,defaultSelectedTag:l})}))}},{key:"render",value:function(){var e=this.state,a=e.platforms,t=e.seniorities,n=e.tags,r=e.reasons,o=e.reject_tag,c=e.defaultSelectedTag,l=e.vacancies;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"New Candidate"),s.a.createElement(P,{platforms:a,seniorities:t,tags:n,reasons:r,vacancies:l,defaultSelectedTag:c,reject_tag:o,onUploadAvatar:this.uploadAvatar,onCreateCandidate:this.createCandidate}))}}]),t}(l.Component))},287:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(323);t(297);a.a=function(e){var a=e.name,t=void 0===a?"select":a,n=e.defaultValue,c=e.isMulti,l=void 0!==c&&c,s=e.isDisabled,i=void 0!==s&&s,u=e.closeMenuOnSelect,m=e.isClearable,d=void 0!==m&&m,p=e.inputValue,h=e.value,f=e.options,g=e.components,v=e.theme,E=e.styles,y=e.selectOption,b=e.selectProps,C=e.setValue,k=e.placeholder,w=e.onChange,S=e.onInputChange;return r.a.createElement(o.a,{name:t,styles:E,defaultValue:n,isMulti:l,isDisabled:i,isClearable:d,inputValue:p,value:h,options:f,closeMenuOnSelect:u,components:g,theme:v,selectOption:y,selectProps:b,setValue:C,placeholder:k,className:"basic-multi-select",classNamePrefix:"select",onChange:w,onInputChange:S})}},297:function(e,a,t){e.exports={select__menu:"Select_select__menu__3w_Fl"}},322:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return c})),t.d(a,"d",(function(){return l})),t.d(a,"e",(function(){return s}));var n=t(336),r=function(e){for(var a in e)if(e.hasOwnProperty(a))return!1;return!0},o=function(e,a){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){a(t.result)},t.onerror=function(e){console.log("Error: ",e)}},c=function(e,a){return e.reduce((function(e,t){return{data:t[a]?e.data.concat(t[a]):e.data.concat(0),label:a}}),{data:[],label:a})},l=function(e,a,t,n){var r=t[e],o={labels:n,datasets:[{backgroundColor:"transparent",borderColor:a||"#c2cfd6",data:r.data,label:r.label}]};return function(){return o}},s={tooltips:{enabled:!1,custom:n.CustomTooltips},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}}},350:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEW1tbW4uLi8vLzGxsbS0tLc3Nzs7Oz4+Pj////b1d6+AAADDUlEQVRo3u3aTW8TQQwG4Hfox3lcSrmmIiHXConSY4hAzbGkVM2R0gM5hxbtvd1MfzYHKshmxzO2dwNF2vkBj3a8Hu/YCR7aW+iszuqs/8n6cfH5w8eLby1Yt+NDAMBe/7KhFc57oF8L7m3RxApjOPq9sD+3W8v3KxIR+edzqxU+VSkiv18Yrek6ReQHNusGVF84tVjhiGLr2dxgfXVRy7/WW8sexZebqa0rx1j+hdZiH4vIzZXWwrEWGzGoXuLjqyxUVukSlp+orCtKrR2NFXpJa69QWMktspuMWwtKrwOFNcpYW3IrEy4imoutTLi4gEGZ9I/rpdg6y1HxDIMl9ERbhdAKh1mLpNYyGy7yM6FVCqyJ0LoTWEOhlU8JojatXaH1JU9FEwymVH261nZnbST2bebXVYvWQmAdtHcexXWizZrTZi1ss0bnP9vyb0eb3zRBgu20eAcY/pO7ST74hfwud2aoOOwd0xmuTH/h7ptsO9jGw9QrHLTYw8x0fdpIe4CMPd9Q2T8m0pVr+fgemX0wvnlnLfbB+KECP1P47nTRSs46RqqXmJ7BlD42BLi0zYau6wMdf2ydf9UGTX5gnVk9hOmalaTS1u2bNevVpdEK5762x+T8MZET0+gsbWDIiTBGNL/QL7RWGLPnsa8822GaqDkDXf26RqIW4lhj3fpkvWcOEgyfIe6AQziklYxso3dMZO9MEN4Lw0hwJ98uRNaNoEUmfyqxsoFnww9pna892Lu8JXys2IPBFK14xKC/j7OXQ+j7F/a6A0PvyF3DoG9f2EvKmnXvFNb6tRX6tp3tZGDfYm2TsG+xtkmY32L9TcJ0fuLnCMZEjaUrtMO9qnXCWmekXbusdaS2tjhrSfo1Z6x7p6YqGQblTCjVxKNR6KtHEo1CXw3+ihUMFLkiapXOYK1mPlRjr3Tmo9lrrLxI2AtOreygWUpUkgKWryzzxYW9ENbKIVS/CqV/10SjKlGtFH+s0mjNYpYzUX7T1r3RmmzYujNaJzELthWzygvbmsn/g6RYndVZnfV0rJ/xkS0+gAgoxQAAAABJRU5ErkJggg=="},351:function(e,a,t){"use strict";t.d(a,"j",(function(){return s})),t.d(a,"i",(function(){return i})),t.d(a,"a",(function(){return u})),t.d(a,"g",(function(){return m})),t.d(a,"e",(function(){return d})),t.d(a,"q",(function(){return p})),t.d(a,"d",(function(){return h})),t.d(a,"p",(function(){return f})),t.d(a,"f",(function(){return g})),t.d(a,"l",(function(){return v})),t.d(a,"o",(function(){return E})),t.d(a,"k",(function(){return y})),t.d(a,"b",(function(){return b})),t.d(a,"c",(function(){return C})),t.d(a,"m",(function(){return k})),t.d(a,"n",(function(){return w})),t.d(a,"h",(function(){return S}));var n=t(289),r=t.n(n),o=t(290),c="http://back.uppeople.co/api",l=function(){return localStorage.getItem("token")},s=function(e){var a=l();return fetch("".concat(c,"/main/viewOneCandidate/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){var a=e[0],t=(null!==e.statusesCandidate&&e.statusesCandidate).map((function(e){return{id:e.id,platform:e.platform,seniority:e.seniority,vacancy:e.vacancy,company:e.company,dateUpdate:e.date_last_change,vacancyStatus:e.status_vac,details:e.rej_text}})),n=e.select.candidateStatus;return{candidate:{id:a.id,avatar:a.avatar,name:a.name,date:a.date,platform:a.platforms,seniority_id:a.seniority_id,tag:a.tags,salary:a.salary,language:a.language,phone:a.mobile,email:a.email,skype:a.skype,linkedIn:a.linkedin,resume:a.link,comment:a.comments,about:a.text_rezume,vacancies:a.vacancies},candidateStatuses:t,selectCandidateStatus:n}})).catch((function(e){return console.log("error in fetch: ",e)}))},i=function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l(),e.prev=1,e.next=4,fetch("".concat(c,"/main/commentsCandidate/").concat(a),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("Error while fetching: ".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark((function e(a,t){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(c,"/main/addCommentForCandidate/").concat(a),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark((function e(a,t){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(c,"/main/editCommentCandidate/").concat(a),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark((function e(a,t){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(c,"/main/deleteCommentCandidate/").concat(a),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(r.a.mark((function e(a,t){var n,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),o={avatar:t},e.prev=2,e.next=5,fetch("".concat(c,"/main/addAvatarCandidate/").concat(a),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:if(!(s=e.sent).ok){e.next=8;break}return e.abrupt("return",s.json());case 8:throw new Error("".concat(s.statusText));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(a,t){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l(),e.prev=1,e.next=4,fetch("".concat(c,"/main/addNewCandidate"),{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),f=function(e,a){var t=l();return fetch("".concat(c,"/main/editCandidate/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){var a=e[0];return console.log(a),{id:a.id,name:a.name,date:a.date,platform:a.platforms,seniority_id:a.seniority_id,salary:a.salary,language:a.language,phone:a.mobile,email:a.email,skype:a.skype,linkedIn:a.linkedin,resume:a.link,comment:a.comments,about:a.text_rezume,vacancies:a.vacancies}})).catch((function(e){return console.log("error in fetch: ",e)}))},g=function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l(),e.prev=1,e.next=4,fetch("".concat(c,"/main/deleteCandidate/").concat(a),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),v=function(e){var a=l();return fetch("".concat(c,"/interview/viewInformationForSendCV/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){var a=e.companies;return{companies:Object.keys(a).map((function(e){return a[e]})),emailTemplate:e.emailTemplay.text,emailSubject:e.subject}})).catch((function(e){return console.log("error in fetch: ",e)}))},E=function(){var e=Object(o.a)(r.a.mark((function e(a,t){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(c,"/interview/sendCV/").concat(a),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l(),e.prev=1,e.next=4,fetch("".concat(c,"/interview/inviteOnInterviewView/").concat(a),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=8;break}return console.log("response: ",n),e.abrupt("return",n.json());case 8:throw new Error("".concat(n.statusText));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(r.a.mark((function e(a,t){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(c,"/interview/inviteOnInterviewSend/").concat(a),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(r.a.mark((function e(a,t){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(c,"/main/cancelCandFreelancer/").concat(a),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l(),e.prev=1,e.next=4,fetch("".concat(c,"/main/addCommentForVac"),{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l(),e.prev=1,e.next=4,fetch("".concat(c,"/main/saveFollowUp"),{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/returnLogsForCand/").concat(a),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}()},680:function(e,a,t){"use strict";t.d(a,"a",(function(){return R}));var n=t(107),r=t(30),o=t(31),c=t(33),l=t(32),s=t(0),i=t.n(s),u=t(284),m=t.n(u),d=t(419),p=t(511),h=t(505),f=t(504),g=t(316),v=t(491),E=t(423),y=t(300),b=t(318),C=t(317),k=t(492),w=t(662),S=t(360),T=t(334),x=(t(337),t(298)),j=(t(312),t(339),t(287)),I=t(350),O=t.n(I),_=t(322),A=(t(340),t(681)),N=t.n(A),P=(t(682),{icon:{position:"absolute",top:"0.6rem",right:"1.75rem"}}),R=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={avatar:null,name:"",selectPlatform:[],selectSeniority:[],selectedTag:{},selectedVacancies:[],date:"",salary:"",language:"",languages:[{id:"Beginner",label:"Beginner",name:"Beginner",value:"Beginner"},{id:"Elementary",label:"Elementary",name:"Elementary",value:"Elementary"},{id:"Pre-Intermediate",label:"Pre-Intermediate",name:"Pre-Intermediate",value:"Pre-Intermediate"},{id:"Intermediate",label:"Intermediate",name:"Intermediate",value:"Intermediate"},{id:"Upper Intermediate",label:"Upper Intermediate",name:"Upper Intermediate",value:"Upper Intermediate"},{id:"Advanced",label:"Advanced",name:"Advanced",value:"Advanced"},{id:"Proficiency",label:"Proficiency",name:"Proficiency",value:"Proficiency"}],phone:"",email:"",skype:"",linkedIn:"",resume:"",comment:"",status:"",tag:"",about:x.EditorState.createEmpty()},e.handleAvatarSelected=function(a){var t=a.target.files[0];Object(_.a)(t,(function(a){e.setState({avatar:a})}))},e.handleAvatarUpload=function(){e.props.onUploadAvatar(e.state.avatar)},e.handleInputChange=function(a){var t=a.target,r=t.name,o=t.value;e.setState(Object(n.a)({},r,o))},e.handlePlatformChange=function(a){e.setState({selectPlatform:a});var t=e.props.vacancies,n=[];void 0!==a&&t.map((function(e){e.platform_id===a.id&&n.push(e)})),e.setState({platformVacancies:n})},e.handleVacancyChange=function(a){e.setState({selectedVacancies:a})},e.handleSeniorityChange=function(a){e.setState({selectSeniority:a})},e.handleTagsChange=function(a){e.setState({selectedTag:a}),e.setState({selectedReason:void 0})},e.handleLanguageChange=function(a){e.setState({language:a})},e.handleReasonChange=function(a){e.setState({selectedReason:a})},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n=t.name,r=t.date,o=t.salary,c=t.language,l=t.phone,s=t.skype,i=t.email,u=t.linkedIn,m=t.resume,d=t.comment,p=t.selectPlatform,h=t.selectSeniority,f=t.selectedTag,g=t.selectedReason,v=t.selectedVacancies;if(null!==document.querySelector(".reasons_div > div")&&document.querySelector(".reasons_div > div").classList.remove("error"),void 0!==f&&3===f.id&&void 0!==g||3!==f.id){f=void 0!==g&&Object.keys(g).length>0?g:f,c="object"===typeof c?c.id:"";var E=e.props.onEditCandidate,y={name:n,date:r,salary:o,language:c,phone:l,skype:s,email:i,linkedIn:u,resume:m,comment:d,selectPlatform:p,selectSeniority:h,selectedTag:f,selectedVacancies:v};console.log(y),E(y)}else document.querySelector(".reasons_div > div").classList.add("error")},e.ReasonFormGroup=function(){var a=e.props.reasons,t=e.state,n=t.selectedTag,r=t.selectedReason;if(void 0!==n&&null!==n&&3===n.id||void 0!==r&&r.length>0)return i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"seniority",sm:3},"Reason"),i.a.createElement(h.a,{sm:9,className:"reasons_div"},i.a.createElement(j.a,{id:"reasons",isRequired:!0,options:a,value:r,placeholder:"Reason",onChange:e.handleReasonChange})))},e}return Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var a=e.candidate,t=e.platforms,n=e.seniorities,r=(e.tags,e.reasons),o=e.reject_tag,c=e.vacancies,l=null!==a.platform&&t.find((function(e){return e.id===a.platform.id})),s=a.tag,i={};if(void 0!==a.tag&&null!==a.tag)for(var u in s.value=a.tag.name,s.label=a.tag.name,r)r[u].id===s.id&&((i=s).label=s.name,i.value=s.name,s=o);var m={};void 0!==a.language&&null!==a.language&&(m.id=a.language,m.value=a.language,m.label=a.language);var d=null!==a.seniority_id&&n.find((function(e){return e.id===a.seniority_id})),p=[];void 0!==l&&c.map((function(e){e.platform_id===l.id&&p.push(e)})),this.setState({avatar:a.avatar,name:a.name,selectPlatform:l,selectSeniority:d,selectedTag:s,selectedReason:i,date:a.date,salary:a.salary,language:m,phone:a.phone,skype:a.skype,email:a.email,linkedIn:a.linkedIn,resume:a.resume,comment:a.comment,platformVacancies:p,selectedVacancies:a.vacancies})}},{key:"componentDidUpdate",value:function(e,a){this.state}},{key:"render",value:function(){var e=this.state,a=e.avatar,t=e.name,n=e.selectPlatform,r=e.selectSeniority,o=e.selectedTag,c=e.salary,l=e.language,s=e.languages,u=e.platformVacancies,x=e.selectedVacancies,I=e.phone,_=e.skype,A=e.email,R=e.linkedIn,V=e.resume,F=e.comment,L=this.state.date,B=this.props,z=(B.candidate,B.platforms),G=B.seniorities,U=B.tags;B.reasons,B.candidateStatus;return L=L.substring(0,10),i.a.createElement(f.a,null,i.a.createElement(h.a,{md:3},i.a.createElement(g.a,{className:N.a.card},i.a.createElement(v.a,{top:!0,src:null!==a?a:O.a,className:N.a.cardLogo,alt:"avatar"}),i.a.createElement(E.a,{className:N.a.cardTitle},t),i.a.createElement(y.a,{type:"file",className:N.a.cardInputFile,onChange:this.handleAvatarSelected}),i.a.createElement(b.a,{color:"success",onClick:this.handleAvatarUpload},"Upload avatar"),i.a.createElement(C.a,{className:N.a.cardBody},i.a.createElement(k.a,{flush:!0},void 0!==n&&i.a.createElement(w.a,{className:N.a.listGroupItem},"Platform: ",n.label),L&&i.a.createElement(w.a,null,"Date: ",m()(L).format("Do MMM YYYY")),I&&i.a.createElement(w.a,null,"Phone: ",I),_&&i.a.createElement(w.a,null,"Skype: ",_),A&&i.a.createElement(w.a,null,"Email: ",A)))),i.a.createElement(g.a,null,i.a.createElement(S.a,{className:N.a.cardHeader},i.a.createElement(E.a,{className:N.a.cardTitle},"Details")),i.a.createElement(C.a,null,i.a.createElement(k.a,{flush:!0},l&&i.a.createElement(w.a,null,"Languages: ",l.label),F&&i.a.createElement(w.a,null,"Notes: ",F))))),i.a.createElement(h.a,{md:9},i.a.createElement(g.a,null,i.a.createElement(S.a,{className:N.a.cardHeader},i.a.createElement(E.a,{className:N.a.cardTitle},"Settings")),i.a.createElement(C.a,null,i.a.createElement(T.a,{onSubmit:this.handleSubmit},i.a.createElement(f.a,null,i.a.createElement(h.a,{lg:6,md:12},i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"name",sm:3},"Name"),i.a.createElement(h.a,{sm:9},i.a.createElement(y.a,{id:"name",type:"text",name:"name",value:t,onChange:this.handleInputChange}),i.a.createElement("i",{style:P.icon,className:"icon-user icons font-lg"}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"platform",sm:3},"Platform"),i.a.createElement(h.a,{sm:9},i.a.createElement(j.a,{id:"platform",options:z,value:n,placeholder:"Platform",onChange:this.handlePlatformChange}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"seniority",sm:3},"Seniority"),i.a.createElement(h.a,{sm:9},i.a.createElement(j.a,{id:"seniority",options:G,value:r,placeholder:"Seniority",onChange:this.handleSeniorityChange}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"language",sm:3},"Language"),i.a.createElement(h.a,{sm:9},i.a.createElement(j.a,{id:"language",value:l,options:s,isClearable:!0,placeholder:"language",onChange:this.handleLanguageChange}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"date",sm:3},"Date"),i.a.createElement(h.a,{sm:9},i.a.createElement(y.a,{readonly:!0,id:"date",type:"date",name:"date",value:L,onChange:this.handleInputChange}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"salary",sm:3},"Salary"),i.a.createElement(h.a,{sm:9},i.a.createElement(y.a,{id:"salary",type:"text",name:"salary",value:c,onChange:this.handleInputChange}),i.a.createElement("i",{style:P.icon,className:"cui-dollar icons font-lg"}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"salary",sm:3},"Vacancies"),i.a.createElement(h.a,{sm:9},i.a.createElement(j.a,{id:"language",isMulti:!0,value:x,options:u,isClearable:!0,placeholder:"vacancies",onChange:this.handleVacancyChange})))),i.a.createElement(h.a,{lg:6,md:12},i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"seniority",sm:3},"Tag"),i.a.createElement(h.a,{sm:9},i.a.createElement(j.a,{id:"tags",options:U,value:o,placeholder:"Tag",onChange:this.handleTagsChange}))),this.ReasonFormGroup(),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"phone",sm:3},"Phone"),i.a.createElement(h.a,{sm:9},i.a.createElement(y.a,{id:"phone",type:"tel",name:"phone",value:I,onChange:this.handleInputChange}),i.a.createElement("i",{style:P.icon,className:"icon-phone icons font-lg"}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"skype",sm:3},"Skype"),i.a.createElement(h.a,{sm:9},i.a.createElement(y.a,{id:"skype",type:"text",name:"skype",value:_,onChange:this.handleInputChange}),i.a.createElement("i",{style:P.icon,className:"icon-social-skype icons font-lg"}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"email",sm:3},"Email"),i.a.createElement(h.a,{sm:9},i.a.createElement(y.a,{id:"email",type:"email",name:"email",value:A,onChange:this.handleInputChange}),i.a.createElement("i",{style:P.icon,className:"icon-envelope icons font-lg"}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"linkedIn",sm:3},"LinkedIn"),i.a.createElement(h.a,{sm:9},i.a.createElement(y.a,{id:"linkedIn",type:"url",name:"linkedIn",value:R,onChange:this.handleInputChange}),i.a.createElement("i",{style:P.icon,className:"icon-social-linkedin icons font-lg"}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"resume",sm:3},"CV"),i.a.createElement(h.a,{sm:9},i.a.createElement(y.a,{id:"resume",type:"url",name:"resume",value:V,onChange:this.handleInputChange}),i.a.createElement("i",{style:P.icon,className:"icon-link icons font-lg"}))),i.a.createElement(d.a,{row:!0},i.a.createElement(p.a,{for:"comment",sm:3},"Comment"),i.a.createElement(h.a,{sm:9},i.a.createElement(y.a,{id:"comment",type:"textarea",name:"comment",value:F,onChange:this.handleInputChange}),i.a.createElement("i",{style:P.icon,className:"icon-note icons font-lg"}))))),i.a.createElement(f.a,{style:{justifyContent:"flex-end"}},i.a.createElement(d.a,{check:!0},i.a.createElement(h.a,null,i.a.createElement(b.a,{type:"submit",color:"primary"},"Save")))))))))}}]),t}(s.Component)},681:function(e,a,t){e.exports={card:"Form_card__CfDZs",cardLogo:"Form_cardLogo__1ohfp",cardInputFile:"Form_cardInputFile__3JyZm",cardTitle:"Form_cardTitle__WtAQy",cardHeader:"Form_cardHeader__1G0YU",cardBody:"Form_cardBody__1IlFX",listGroupItem:"Form_listGroupItem__xwWIR",error:"Form_error__1y4YJ"}},682:function(e,a,t){},932:function(e,a,t){e.exports={card:"Form_card__2u7i1",cardLogo:"Form_cardLogo__zQuz_",cardInputFile:"Form_cardInputFile__1u0G1",cardTitle:"Form_cardTitle__35VRY",cardHeader:"Form_cardHeader__2aP44",cardBody:"Form_cardBody__1vmaJ",listGroupItem:"Form_listGroupItem__Lt36A"}},933:function(e,a,t){}}]);
//# sourceMappingURL=18.1da9f5a8.chunk.js.map