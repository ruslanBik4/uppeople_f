(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[43],{309:function(t,e,n){"use strict";n.d(e,"k",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"n",(function(){return f})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return h})),n.d(e,"j",(function(){return d})),n.d(e,"i",(function(){return m})),n.d(e,"s",(function(){return g})),n.d(e,"p",(function(){return y})),n.d(e,"t",(function(){return v})),n.d(e,"q",(function(){return w})),n.d(e,"b",(function(){return b})),n.d(e,"f",(function(){return C})),n.d(e,"e",(function(){return T})),n.d(e,"o",(function(){return j})),n.d(e,"a",(function(){return S})),n.d(e,"g",(function(){return E})),n.d(e,"d",(function(){return k})),n.d(e,"r",(function(){return x}));var r=n(290),a=n.n(r),o=n(291),c="http://f2.uppeople.space/api",i=function(){return localStorage.getItem("token")},s=function(t,e){var n=i();return fetch("".concat(c,"/main/returnAllCompanies/").concat(t,"/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{companies:t.companies.map((function(t){return{id:t.id,name:t.nazva,logo:t.logo,email:t.email,skype:t.skype,phone:t.phone,vacancies:t.vacancy_count,candidates:t.candidates_to_company_count}})),companiesCount:t.Count,totalPages:t.Pages,currentPage:t.current_page,perPage:t.per_page}})).catch((function(t){return console.log("error in fetch: ",t)}))},u=function(t,e,n){var r=i();return fetch("".concat(c,"/main/returnAllCompanies/").concat(t,"/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(console.log(t),t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){return{companies:t.companies.map((function(t){return{id:t.id,name:t.nazva,logo:t.logo,email:t.email,skype:t.skype,phone:t.phone,vacancies:t.vacancy_count,candidates:t.candidates_to_company_count}})),companiesCount:t.Count,totalPages:t.Pages,currentPage:t.current_page,perPage:t.per_page}})).catch((function(t){return console.log("error in fetch: ",t)}))},l=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addNewCompany"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=i();return fetch("".concat(c,"/main/viewInformationForCompany/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{name:t.nazva,logo:t.logo,phone:t.phone,email:t.email,skype:t.skype,about:t.about,map:t.map,calendarEvents:t.calendar,sendDetails:t.otpravka,termsOfCooperation:t.uslovia,interviewDetails:t.interview_detail,contacts:t.contacts,managers:t.manager}})).catch((function(t){return console.log("error in fetch: ",t)}))},p=function(t,e){var n=i();return fetch("".concat(c,"/main/viewAllCandidatesForCompany/").concat(t,"/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidates:t.candidates,candidatesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,platform:t.platforms,candidateStatus:t.statuses}})).catch((function(t){return console.log("error in fetch: ",t)}))},h=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/commentsCompany/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),d=function(t,e,n){var r=i();return fetch("".concat(c,"/main/viewAllVacancyInCompany/").concat(t,"/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{vacancies:t.vacancies,vacanciesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,candidateStatus:t.candidateStatus,vacancyStatus:t.vacancyStatus,platform:t.platforms,seniority:t.seniorities}})).catch((function(t){return console.log("error in fetch: ",t)}))},m=function(t,e,n){var r=i();return fetch("".concat(c,"/main/viewAllCandidatesForCompany/").concat(t,"/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidates:t.candidates,candidatesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,platform:t.platforms,candidateStatus:t.statuses}})).catch((function(t){return console.log("error in fetch: ",t)}))},g=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/updateStatusVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/updateStatusCandidates"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),o={logo:n},t.prev=2,t.next=5,fetch("".concat(c,"/main/addLogoCompanies/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:if(!(s=t.sent).ok){t.next=8;break}return t.abrupt("return",s.json());case 8:throw new Error("".concat(s.statusText));case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",console.log("error in fetch: ",t.t0));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editSettingsCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addCommentForCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editCommentCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),T=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/deleteCommentCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),j=function(t){var e=i();return fetch("".concat(c,"/main/viewEditContactCompany/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){return{contact:{id:t.id,name:t.name,email:t.email,phone:t.phone,skype:t.skype,selectedPlatforms:t.platforms.map((function(t){var e=Object.values(t.platform);return{id:e[0],label:e[1],value:e[1].toLowerCase()}}))},isChecked:1===t.all_platforms,isDisabled:1===t.all_platforms}})).catch((function(t){return console.log("error in fetch: ",t)}))},S=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addNewContactForCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),E=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editContactCompany/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/deleteContactForCompany/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),x=function(t,e){var n=i();return fetch("".concat(c,"/main/editInformations/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){for(var e in t){return"otpravka"===e?{sendDetails:t[e]}:"interview_detail"===e?{interviewDetails:t[e]}:"about"===e?{about:t[e]}:t}})).catch((function(t){return console.log("error in fetch: ",t)}))}},368:function(t,e,n){"use strict";n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return h}));var r=n(290),a=n.n(r),o=n(291),c="http://f2.uppeople.space/api",i=function(){return localStorage.getItem("token")},s=function(t){var e=i();return fetch("".concat(c,"/main/viewVacancy/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){var e=t[0];return{id:e.id,date:e.date_create,company:e.company,platform:e.platforms,seniority:e.seniorities,status:e.status,location:e.location,salary:e.salary,link:e.link,description:e.opus,details:e.details}})).catch((function(t){return console.log("error in fetch: ",t)}))},u=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addNewVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),l=function(t,e){var n=i();return fetch("".concat(c,"/main/editVacancy/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){var e=t[0];return console.log("vacancy response",t),{id:e.id,date:e.date_create,company:e.company,platform:e.platforms,seniority:e.seniorities,status:e.status,location:e.location,salary:e.salary,link:e.link,description:e.opus,details:e.details}})).catch((function(t){return console.log("error in fetch: ",t)}))},f=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/deleteVacancy/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,console.log(n),t.next=5,fetch("".concat(c,"/main/returnAllVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 5:if(!(r=t.sent).ok){t.next=8;break}return t.abrupt("return",r.json());case 8:throw new Error("".concat(r.statusText));case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/getTags"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},650:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){var t=localStorage.getItem("token");return fetch("".concat("http://f2.uppeople.space/api","/admin/all-staff"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{staff:t.users,partners:t.partners,freelancers:t.freeLancers}})).catch((function(t){return console.log("error in fetch: ",t)}))}},670:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"g",(function(){return f}));var r="http://f2.uppeople.space/api",a=function(){return localStorage.getItem("token")},o=function(t){var e=a();return console.log(":::::getAllCandidates"),fetch("".concat(r,"/main/allCandidates/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{allCandidates:t.candidates,allCandidatesCount:t.Count,allTotalPages:t.Page,allPerPage:t.perPage,currentAllPage:t.currentPage,allPlatforms:t.platforms,allStatuses:t.statuses,allRecruiters:t.recruiter,allSeniority:t.seniority,loading:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},c=function(t){var e=a();return fetch("".concat(r,"/main/returnAllCandidates/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{sentCandidates:t.candidates,sentCandidatesCount:t.Count,sentTotalPages:t.Page,sentPerPage:t.perPage,currentSentPage:t.currentPage,sentPlatforms:t.platforms,sentCompanies:t.company,sentStatuses:t.statuses,sentRecruiters:t.recruiter,loadingSent:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},i=function(t){var e=a();return fetch("".concat(r,"/main/viewCandidatesFreelancerOnVacancies/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidatesFF:t.candidates,candidatesCountFF:t.Count,totalPagesFF:t.Page,perPageFF:t.perPage,statusesFF:t.statuses,currentPageFF:t.currentPage}})).catch((function(t){return console.log("error in fetch: ",t)}))},s=function(t,e){var n=a();return console.log(":::::Filtered allCandidates"),fetch("".concat(r,"/main/allCandidates/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{allCandidates:t.candidates,allCandidatesCount:t.Count,allTotalPages:t.Page,allPerPage:t.perPage,currentAllPage:t.currentPage,allPlatforms:t.platforms,allStatuses:t.statuses,allRecruiters:t.recruiter,allSeniority:t.seniority,loading:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},u=function(t,e){console.log("Filtered",e);var n=a();return fetch("".concat(r,"/main/returnAllCandidates/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{sentCandidates:t.candidates,sentCandidatesCount:t.Count,sentTotalPages:t.Page,sentPerPage:t.perPage,currentSentPage:t.currentPage,sentPlatforms:t.platforms,sentCompanies:t.company,sentStatuses:t.statuses,sentRecruiters:t.recruiter,loadingSent:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},l=function(t,e,n,o,c,i){var s=a();return fetch("".concat(r,"/main/getCandidatesAmountByStatuses"),{method:"POST",headers:{Authorization:"Bearer "+s,"Content-Type":"application/json"},body:JSON.stringify({recruiter_id:t,company_id:e,vacancy_id:n,tag_id:o,start_date:c,end_date:i})}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))},f=function(){var t=a();return fetch("".concat(r,"/main/getStatuses"),{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))}},949:function(t,e,n){},970:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var r=n(946),a=n(42),o=n(956),c=n(107),i=n(290),s=n.n(i),u=n(291),l=n(30),f=n(31),p=n(33),h=n(32),d=n(0),m=n.n(d),g=n(481),y=n(482),v=n(408),w=n(298),b=n(337),C=n(650),T=n(309),j=n(368),S=n(670),E=n(954),k=(n(949),function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).fetchRecruiters=Object(u.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)();case 2:e=t.sent,n=e.staff.filter((function(t){return 2===t.role_id})),i.setState({recruiters:n});case 5:case"end":return t.stop()}}),t)}))),i.fetchCompanies=Object(u.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T.k)(0,1);case 2:e=t.sent,n=e.companies,i.setState({companies:n});case 5:case"end":return t.stop()}}),t)}))),i.fetchVacancies=Object(u.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.d)();case 2:e=t.sent,n=e.vacancies,i.setState({vacancies:n});case 5:case"end":return t.stop()}}),t)}))),i.fetchTags=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.c)();case 2:e=t.sent,i.setState({tags:e});case 4:case"end":return t.stop()}}),t)}))),i.fetchCandidatesData=Object(u.a)(s.a.mark((function t(){var e,n,r,a,o,c,u,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.state,n=e.selectedRecruiter,r=e.selectedCompany,a=e.selectedVacancy,o=e.selectedTag,c=e.selectedStartDate,u=e.selectedEndDate,t.next=3,Object(S.d)(n?n.id:0,r?r.id:0,a?a.id:0,o?o.id:0,c,u);case 3:void 0!==(l=t.sent)?(l=l.data,i.setState({funnelData:l})):i.setState({funnelData:null});case 5:case"end":return t.stop()}}),t)}))),i.fetchStatuses=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.g)();case 2:e=t.sent,i.setState({statuses:e}),i.setState({selectedStatuses:e});case 5:case"end":return t.stop()}}),t)}))),i.handleRecruiterSelect=function(t){i.setState({selectedRecruiter:t})},i.handleCompanySelect=function(t){i.setState({selectedCompany:t})},i.handleVacancySelect=function(t){i.setState({selectedVacancy:t})},i.handleTagsSelect=function(t){i.setState({selectedTag:t})},i.handleStatusChange=function(t){i.setState({selectedStatuses:t})},i.handleDate=function(t){var e=t.target,n=e.name,r=e.value;i.setState(Object(c.a)({},n,r))},i.renderChart=function(){var t=i.state,e=t.funnelData,n=t.selectedStatuses;if(null!==e&&void 0!==e){var c,s=Object.entries(e).reduceRight((function(t,e,n,r){var c=Object(o.a)(e,2),i=c[0],s=c[1],u=r[n+1];if(u){var l=Object(o.a)(u,1)[0];t[i]=Object(a.a)(Object(a.a)({},s),{},{count:t[l].count+s.count})}else t[i]=s;return t}),{}),u=[],l=Object(r.a)(Object.entries(s).reverse());try{var f=function(){var t=Object(o.a)(c.value,2),e=t[0],r=t[1];n.filter((function(t){return t.label===e})).length>0&&u.push({stat:e,count:r.count,color:r.color})};for(l.s();!(c=l.n()).done;)f()}catch(g){l.e(g)}finally{l.f()}var p=i.state,h=p.dynamicSlope,d=p.dynamicHeight;return m.a.createElement(E.a,{style:{margin:"0 auto",width:300,height:350}},m.a.createElement(E.f,{text:"Funnel recruitment"}),m.a.createElement(E.c,{style:{height:350}},m.a.createElement(E.d,{type:"funnel",data:u,categoryField:"stat",field:"count",colorField:"color",dynamicHeight:d,dynamicSlope:h},m.a.createElement(E.e,{color:"black",background:"none",format:"N0"}))),m.a.createElement(E.g,{render:function(t){var e=t.point;return(void 0===e?{}:e).category}}),m.a.createElement(E.b,{visible:!1}))}},i.state={recruiters:[],companies:[],vacancies:[],tags:[],statuses:[],selectedRecruiter:null,selectedCompany:null,selectedVacancy:null,selectedTag:null,selectedStatuses:null,selectedStartDate:null,selectedEndDate:null,funnelData:null,dynamicSlope:!0,dynamicHeight:!1},i}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.fetchRecruiters(),this.fetchCompanies(),this.fetchVacancies(),this.fetchTags(),this.fetchStatuses()}},{key:"componentDidUpdate",value:function(t,e){this.state.selectedRecruiter===e.selectedRecruiter&&this.state.selectedCompany===e.selectedCompany&&this.state.selectedVacancy===e.selectedVacancy&&this.state.selectedTag===e.selectedTag&&this.state.selectedStatuses===e.selectedStatuses&&this.state.selectedStartDate===e.selectedStartDate&&this.state.selectedEndDate===e.selectedEndDate||this.fetchCandidatesData()}},{key:"render",value:function(){var t=this.state,e=t.recruiters,n=t.selectedRecruiter,r=this.state,a=r.companies,o=r.selectedCompany,c=this.state,i=c.vacancies,s=c.selectedVacancy,u=this.state,l=u.tags,f=u.selectedTag,p=this.state,h=p.statuses,d=p.selectedStatuses,C=this.state,T=C.selectedStartDate,j=C.selectedEndDate;return m.a.createElement(m.a.Fragment,null,m.a.createElement(g.a,{style:{marginBottom:"1rem"}},m.a.createElement(y.a,null,m.a.createElement("h1",{style:{marginBottom:0,fontSize:24}},"Funnel recruitment"))),m.a.createElement(g.a,{style:{marginBottom:"1rem"}},m.a.createElement(y.a,{xs:"12",sm:"12",md:"12",lg:"4",xl:"4"},m.a.createElement(v.a,{className:"filter-select"},m.a.createElement("label",{className:"date-filter-label"},"Filters"),m.a.createElement(b.a,{style:{marginBottom:15},value:n,options:e,getOptionValue:function(t){return t.id},getOptionLabel:function(t){return t.name},placeholder:"Recruiters",onChange:this.handleRecruiterSelect})),m.a.createElement(v.a,{className:"filter-select"},m.a.createElement(b.a,{style:{marginBottom:"1rem"},value:o,options:a,getOptionValue:function(t){return t.id},getOptionLabel:function(t){return t.name},placeholder:"Companies",onChange:this.handleCompanySelect})),m.a.createElement(v.a,{className:"filter-select"},m.a.createElement(b.a,{style:{marginBottom:"1rem"},value:s,options:i,getOptionValue:function(t){return t.id},getOptionLabel:function(t){return t.label},placeholder:"Vacancies",onChange:this.handleVacancySelect})),m.a.createElement(v.a,{className:"filter-select"},m.a.createElement(b.a,{style:{marginBottom:"1rem"},value:f,options:l,getOptionValue:function(t){return t.id},getOptionLabel:function(t){return t.name},placeholder:"Tags",onChange:this.handleTagsSelect})),m.a.createElement(v.a,{className:"filter-select"},m.a.createElement(b.a,{isMulti:!0,value:d,options:h,placeholder:"Statuses",onChange:this.handleStatusChange}))),m.a.createElement(y.a,{xs:"12",sm:"12",md:"12",lg:"4",xl:"4"},m.a.createElement(g.a,{style:{marginBottom:"1rem"}},this.renderChart())),m.a.createElement(y.a,{lg:2,md:2},m.a.createElement(v.a,null,m.a.createElement("label",{className:"date-filter-label"},"Date From"),m.a.createElement(w.a,{id:"date-from",type:"date",name:"selectedStartDate",value:T,onChange:this.handleDate}))),m.a.createElement(y.a,{lg:2,md:2},m.a.createElement(v.a,null,m.a.createElement("label",{className:"date-filter-label"},"Date To"),m.a.createElement(w.a,{id:"date-to",type:"date",name:"selectedEndDate",value:j,onChange:this.handleDate})))))}}]),n}(d.Component))}}]);
//# sourceMappingURL=43.ad005389.chunk.js.map