(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[29,6],{1059:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var r=n(289),a=n.n(r),o=n(290),c=n(30),i=n(31),s=n(33),u=n(32),l=n(0),f=n.n(l),p=n(323),h=n(504),d=n(505),m=n(419),g=n(987),y=n.n(g),v=(n(694),n(385)),w=n(303),C=n(426),b=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={recruiters:[],companies:[],statuses:[],selectedRecruiter:null,selectedCompany:null,recruitersIsClearable:!0,canbanData:{lanes:[]}},t.fetchCompanies=Object(o.a)(a.a.mark((function e(){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.k)(0,1,1);case 2:n=e.sent,r=t.state.selectedRecruiter,o=n.companies.filter((function(t){return t.vacancies>0&&(null!==r&&t.recruiters.indexOf(r.id)+1>0||null===r)})),t.setState({companies:o});case 6:case"end":return e.stop()}}),e)}))),t.fetchStatuses=Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.k)();case 2:n=e.sent,t.setState({statuses:n});case 4:case"end":return e.stop()}}),e)}))),t.fetchCanbanData=Object(o.a)(a.a.mark((function e(){var n,r,o,c,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,r=n.selectedCompany,o=n.selectedRecruiter,c=n.statuses,e.next=3,Object(C.i)(o?o.id:0,r?r.id:0);case 3:i=e.sent,s={lanes:[]},c.length>0&&null!==i&&c.forEach((function(t,e,n){var r=[];Object.entries(i.data).forEach((function(e,n,a){var o=e[1].main,c=e[1].vacancies;if(o.status_id===t.id){var i="";c.length>0&&(i=c.map((function(t){return f.a.createElement("span",{style:{backgroundColor:t.color,display:"inline-block",padding:"1px 5px",margin:"3px",fontSize:"10px"}},t.company_name," (",t.platform_name,")")})));var s="/#/candidates/"+o.candidate_id;r.push({id:o.candidate_id+":"+o.vacancy_id+":"+o.company_id,title:f.a.createElement(f.a.Fragment,null,f.a.createElement("a",{href:s},o.candidate_name)),description:f.a.createElement(f.a.Fragment,null,f.a.createElement("h4",{style:{fontSize:"14px",marginLeft:"5px"}},o.company_name," (",o.platform_name,")"),i),label:o.date})}})),s.lanes.push({id:t.id,title:t.label,label:r.length,cards:r})})),t.setState({canbanData:s});case 7:case"end":return e.stop()}}),e)}))),t.fetchRecruiters=Object(o.a)(a.a.mark((function e(){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)();case 2:void 0!==(n=e.sent).staff?(r=n.staff.filter((function(t){return 2===t.role_id})),t.setState({recruiters:r})):void 0!==n.recruiters&&(o=n.recruiters,t.setState({recruiters:o}),t.setState({selectedRecruiter:o[0]}),t.setState({recruitersIsClearable:!1}));case 4:case"end":return e.stop()}}),e)}))),t.loading=function(){return f.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t.handleRecruiterSelect=function(e){t.setState({selectedRecruiter:e})},t.handleCompanySelect=function(e){t.setState({selectedCompany:e})},t.handleCardDragEnd=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r,o,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)(e.split(":")[0],e.split(":")[1],e.split(":")[2],r);case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e,n,r,a,o){return t.apply(this,arguments)}}(),t.handleCardDelete=function(){var t=Object(o.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)(e.split(":")[0],e.split(":")[1],e.split(":")[2]);case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.fetchCompanies(),this.fetchRecruiters(),this.fetchStatuses(),this.fetchCanbanData()}},{key:"componentDidUpdate",value:function(t,e){this.state.selectedRecruiter===e.selectedRecruiter&&this.state.selectedCompany===e.selectedCompany&&this.state.statuses===e.statuses||this.fetchCanbanData(),this.state.selectedRecruiter!==e.selectedRecruiter&&this.fetchCompanies()}},{key:"render",value:function(){var t=this.state,e=t.canbanData,n=t.recruiters,r=t.companies,a=t.selectedRecruiter,o=t.recruitersIsClearable,c=t.selectedCompany;return f.a.createElement("div",{className:"animated fadeIn"},f.a.createElement(h.a,null,f.a.createElement(d.a,{style:{display:"flex",justifyContent:"space-between",maxWidth:180,marginBottom:"0.5rem"}},f.a.createElement("h1",{style:{marginBottom:0,marginTop:20,fontSize:24}},"Canban"),f.a.createElement("span",{style:{alignSelf:"flex-end",color:"var(--gray)"}}))),f.a.createElement(h.a,null,f.a.createElement(d.a,{xs:"12",sm:"12",md:"12",lg:"3",xl:"3"},f.a.createElement(m.a,{className:"filter-select"},f.a.createElement(p.a,{style:{marginBottom:15},value:a,options:n,isClearable:o,getOptionValue:function(t){return t.id},getOptionLabel:function(t){return t.name},placeholder:"Recruiters",onChange:this.handleRecruiterSelect}))),f.a.createElement(d.a,{xs:"12",sm:"12",md:"12",lg:"3",xl:"3"},f.a.createElement(m.a,{className:"filter-select"},f.a.createElement(p.a,{style:{marginBottom:"1rem"},value:c,options:r,isClearable:!0,getOptionValue:function(t){return t.id},getOptionLabel:function(t){return t.name},placeholder:"Companies",onChange:this.handleCompanySelect})))),f.a.createElement(h.a,null,f.a.createElement(d.a,{xs:"12",md:"12",xl:"12"},f.a.createElement(y.a,{style:{backgroundColor:"#edf0f4"},data:e,handleDragEnd:this.handleCardDragEnd,onCardDelete:this.handleCardDelete}))))}}]),n}(l.Component)},303:function(t,e,n){"use strict";n.d(e,"k",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"n",(function(){return f})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return h})),n.d(e,"j",(function(){return d})),n.d(e,"i",(function(){return m})),n.d(e,"s",(function(){return g})),n.d(e,"p",(function(){return y})),n.d(e,"t",(function(){return v})),n.d(e,"q",(function(){return w})),n.d(e,"b",(function(){return C})),n.d(e,"f",(function(){return b})),n.d(e,"e",(function(){return T})),n.d(e,"o",(function(){return x})),n.d(e,"a",(function(){return E})),n.d(e,"g",(function(){return j})),n.d(e,"d",(function(){return k})),n.d(e,"r",(function(){return P}));var r=n(289),a=n.n(r),o=n(290),c="http://f2.uppeople.space/api",i=function(){return localStorage.getItem("token")},s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=i();return fetch("".concat(c,"/main/returnAllCompanies/").concat(t,"/").concat(e,"/").concat(n),{method:"GET",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{companies:t.companies.map((function(t){return{id:t.id,name:t.nazva,logo:t.logo,email:t.email,skype:t.skype,phone:t.phone,recruiters:t.recruiters,vacancies:t.vacancy_count,candidates:t.candidates_to_company_count}})),companiesCount:t.Count,totalPages:t.Pages,currentPage:t.current_page,perPage:t.per_page}})).catch((function(t){return console.log("error in fetch: ",t)}))},u=function(t,e,n){var r=i();return fetch("".concat(c,"/main/returnAllCompanies/").concat(t,"/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(console.log(t),t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){return{companies:t.companies.map((function(t){return{id:t.id,name:t.nazva,logo:t.logo,email:t.email,skype:t.skype,phone:t.phone,vacancies:t.vacancy_count,candidates:t.candidates_to_company_count}})),companiesCount:t.Count,totalPages:t.Pages,currentPage:t.current_page,perPage:t.per_page}})).catch((function(t){return console.log("error in fetch: ",t)}))},l=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addNewCompany"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=i();return fetch("".concat(c,"/main/viewInformationForCompany/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{name:t.nazva,logo:t.logo,phone:t.phone,email:t.email,skype:t.skype,about:t.about,map:t.map,calendarEvents:t.calendar,sendDetails:t.otpravka,termsOfCooperation:t.uslovia,interviewDetails:t.interview_detail,contacts:t.contacts,managers:t.manager}})).catch((function(t){return console.log("error in fetch: ",t)}))},p=function(t,e){var n=i();return fetch("".concat(c,"/main/viewAllCandidatesForCompany/").concat(t,"/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidates:t.candidates,candidatesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,platform:t.platforms,candidateStatus:t.statuses}})).catch((function(t){return console.log("error in fetch: ",t)}))},h=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/commentsCompany/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),d=function(t,e,n){var r=i();return fetch("".concat(c,"/main/viewAllVacancyInCompany/").concat(t,"/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{vacancies:t.vacancies,vacanciesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,candidateStatus:t.candidateStatus,vacancyStatus:t.vacancyStatus,platform:t.platforms,seniority:t.seniorities}})).catch((function(t){return console.log("error in fetch: ",t)}))},m=function(t,e,n){var r=i();return fetch("".concat(c,"/main/viewAllCandidatesForCompany/").concat(t,"/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidates:t.candidates,candidatesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,platform:t.platforms,candidateStatus:t.statuses}})).catch((function(t){return console.log("error in fetch: ",t)}))},g=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/updateStatusVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/updateStatusCandidates"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),o={logo:n},t.prev=2,t.next=5,fetch("".concat(c,"/main/addLogoCompanies/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:if(!(s=t.sent).ok){t.next=8;break}return t.abrupt("return",s.json());case 8:throw new Error("".concat(s.statusText));case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",console.log("error in fetch: ",t.t0));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editSettingsCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addCommentForCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editCommentCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),T=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/deleteCommentCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),x=function(t){var e=i();return fetch("".concat(c,"/main/viewEditContactCompany/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){return{contact:{id:t.id,name:t.name,email:t.email,phone:t.phone,skype:t.skype,selectedPlatforms:t.platforms.map((function(t){var e=Object.values(t.platform);return{id:e[0],label:e[1],value:e[1].toLowerCase()}}))},isChecked:1===t.all_platforms,isDisabled:1===t.all_platforms}})).catch((function(t){return console.log("error in fetch: ",t)}))},E=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addNewContactForCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editContactCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/deleteContactForCompany/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),P=function(t,e){var n=i();return fetch("".concat(c,"/main/editInformations/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){for(var e in t){return"otpravka"===e?{sendDetails:t[e]}:"interview_detail"===e?{interviewDetails:t[e]}:"about"===e?{about:t[e]}:t}})).catch((function(t){return console.log("error in fetch: ",t)}))}},385:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){var t=localStorage.getItem("token");return fetch("".concat("http://f2.uppeople.space/api","/admin/all-staff"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{staff:t.users,partners:t.partners,freelancers:t.freeLancers,recruiters:t.recruiters}})).catch((function(t){return console.log("error in fetch: ",t)}))}},426:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"j",(function(){return c})),n.d(e,"h",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"g",(function(){return h})),n.d(e,"i",(function(){return d})),n.d(e,"a",(function(){return m}));var r="http://f2.uppeople.space/api",a=function(){return localStorage.getItem("token")},o=function(t){var e=a();return console.log(":::::getAllCandidates"),fetch("".concat(r,"/main/allCandidates/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{allCandidates:t.candidates,allCandidatesCount:t.Count,allTotalPages:t.Page,allPerPage:t.perPage,currentAllPage:t.currentPage,allPlatforms:t.platforms,allStatuses:t.statuses,allRecruiters:t.recruiter,allSeniority:t.seniority,loading:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},c=function(t){var e=a();return fetch("".concat(r,"/main/returnAllCandidates/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{sentCandidates:t.candidates,sentCandidatesCount:t.Count,sentTotalPages:t.Page,sentPerPage:t.perPage,currentSentPage:t.currentPage,sentPlatforms:t.platforms,sentCompanies:t.company,sentStatuses:t.statuses,sentRecruiters:t.recruiter,loadingSent:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},i=function(t){var e=a();return fetch("".concat(r,"/main/viewCandidatesFreelancerOnVacancies/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidatesFF:t.candidates,candidatesCountFF:t.Count,totalPagesFF:t.Page,perPageFF:t.perPage,statusesFF:t.statuses,currentPageFF:t.currentPage}})).catch((function(t){return console.log("error in fetch: ",t)}))},s=function(t,e){var n=a();return console.log(":::::Filtered allCandidates"),fetch("".concat(r,"/main/allCandidates/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{allCandidates:t.candidates,allCandidatesCount:t.Count,allTotalPages:t.Page,allPerPage:t.perPage,currentAllPage:t.currentPage,allPlatforms:t.platforms,allStatuses:t.statuses,allRecruiters:t.recruiter,allSeniority:t.seniority,loading:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},u=function(t,e){console.log("Filtered",e);var n=a();return fetch("".concat(r,"/main/returnAllCandidates/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{sentCandidates:t.candidates,sentCandidatesCount:t.Count,sentTotalPages:t.Page,sentPerPage:t.perPage,currentSentPage:t.currentPage,sentPlatforms:t.platforms,sentCompanies:t.company,sentStatuses:t.statuses,sentRecruiters:t.recruiter,loadingSent:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},l=function(t,e,n,o,c,i){var s=a();return fetch("".concat(r,"/main/getCandidatesAmountByStatuses"),{method:"POST",headers:{Authorization:"Bearer "+s,"Content-Type":"application/json"},body:JSON.stringify({recruiter_id:t,company_id:e,vacancy_id:n,tag_id:o,start_date:c,end_date:i})}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))},f=function(t,e,n,o,c){var i=a();return fetch("".concat(r,"/main/getCandidatesAmountByTags"),{method:"POST",headers:{Authorization:"Bearer "+i,"Content-Type":"application/json"},body:JSON.stringify({recruiter_id:t,company_id:e,vacancy_id:n,start_date:o,end_date:c})}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))},p=function(){var t=a();return fetch("".concat(r,"/main/getStatuses"),{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))},h=function(t,e){var n=a();return fetch("".concat(r,"/main/getCandidatesAmountByVacancies"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify({recruiter_id:t,company_id:e})}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))},d=function(t,e){var n=a();return fetch("".concat(r,"/main/getCandidatesGrouped"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify({recruiter_id:t,company_id:e})}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))},m=function(t,e,n,o){var c=a();return fetch("".concat(r,"/main/changeStatusOnVacancy"),{method:"POST",headers:{Authorization:"Bearer "+c,"Content-Type":"application/json"},body:JSON.stringify({candidate_id:t,vacancy_id:e,company_id:n,status_id:o})}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))}},694:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(807);e.a=function(t){var e,n,r=t.vacancyId,c=t.vacancy,i=t.quantity,s=t.recruiterName,u=t.conpanyName,l=t.recruiters;return t.companies.find((function(t){t.name===u&&(e=t.id)})),l.find((function(t){t.name===s&&(n=t.id)})),a.a.createElement("tr",null,a.a.createElement("td",{className:"text-center"},a.a.createElement(o.a,{to:"/vacancies/".concat(r),target:"_blank"}," ",c)),a.a.createElement("td",{className:"text-center"},a.a.createElement(o.a,{to:"/companies/".concat(e),target:"_blank"}," ",u)),a.a.createElement("td",{className:"text-center"},a.a.createElement(o.a,{to:"/users/".concat(n),target:"_blank"},s)),a.a.createElement("td",{className:"text-center"},a.a.createElement("div",null,i)))}}}]);
//# sourceMappingURL=29.2a64711b.chunk.js.map