(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[19],{304:function(t,n,e){"use strict";e.d(n,"k",(function(){return u})),e.d(n,"h",(function(){return s})),e.d(n,"c",(function(){return f})),e.d(n,"n",(function(){return h})),e.d(n,"l",(function(){return p})),e.d(n,"m",(function(){return l})),e.d(n,"j",(function(){return d})),e.d(n,"i",(function(){return m})),e.d(n,"s",(function(){return g})),e.d(n,"p",(function(){return y})),e.d(n,"t",(function(){return w})),e.d(n,"q",(function(){return v})),e.d(n,"b",(function(){return C})),e.d(n,"f",(function(){return T})),e.d(n,"e",(function(){return P})),e.d(n,"o",(function(){return b})),e.d(n,"a",(function(){return j})),e.d(n,"g",(function(){return k})),e.d(n,"d",(function(){return x})),e.d(n,"r",(function(){return S}));var r=e(289),a=e.n(r),o=e(290),c="http://f2.uppeople.space/api",i=function(){return localStorage.getItem("token")},u=function(t,n){var e=i();return fetch("".concat(c,"/main/returnAllCompanies/").concat(t,"/").concat(n),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{companies:t.companies.map((function(t){return{id:t.id,name:t.nazva,logo:t.logo,email:t.email,skype:t.skype,phone:t.phone,vacancies:t.vacancy_count,candidates:t.candidates_to_company_count}})),companiesCount:t.Count,totalPages:t.Pages,currentPage:t.current_page,perPage:t.per_page}})).catch((function(t){return console.log("error in fetch: ",t)}))},s=function(t,n,e){var r=i();return fetch("".concat(c,"/main/returnAllCompanies/").concat(t,"/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(console.log(t),t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){return{companies:t.companies.map((function(t){return{id:t.id,name:t.nazva,logo:t.logo,email:t.email,skype:t.skype,phone:t.phone,vacancies:t.vacancy_count,candidates:t.candidates_to_company_count}})),companiesCount:t.Count,totalPages:t.Pages,currentPage:t.current_page,perPage:t.per_page}})).catch((function(t){return console.log("error in fetch: ",t)}))},f=function(){var t=Object(o.a)(a.a.mark((function t(n){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addNewCompany"),{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n){return t.apply(this,arguments)}}(),h=function(t){var n=i();return fetch("".concat(c,"/main/viewInformationForCompany/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{name:t.nazva,logo:t.logo,phone:t.phone,email:t.email,skype:t.skype,about:t.about,map:t.map,calendarEvents:t.calendar,sendDetails:t.otpravka,termsOfCooperation:t.uslovia,interviewDetails:t.interview_detail,contacts:t.contacts,managers:t.manager}})).catch((function(t){return console.log("error in fetch: ",t)}))},p=function(t,n){var e=i();return fetch("".concat(c,"/main/viewAllCandidatesForCompany/").concat(t,"/").concat(n),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidates:t.candidates,candidatesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,platform:t.platforms,candidateStatus:t.statuses}})).catch((function(t){return console.log("error in fetch: ",t)}))},l=function(){var t=Object(o.a)(a.a.mark((function t(n){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/commentsCompany/").concat(n),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n){return t.apply(this,arguments)}}(),d=function(t,n,e){var r=i();return fetch("".concat(c,"/main/viewAllVacancyInCompany/").concat(t,"/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{vacancies:t.vacancies,vacanciesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,candidateStatus:t.candidateStatus,vacancyStatus:t.vacancyStatus,platform:t.platforms,seniority:t.seniorities}})).catch((function(t){return console.log("error in fetch: ",t)}))},m=function(t,n,e){var r=i();return fetch("".concat(c,"/main/viewAllCandidatesForCompany/").concat(t,"/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidates:t.candidates,candidatesCount:t.Count,totalPages:t.totalPages,perPage:t.perPage,currentPage:t.currentPage,platform:t.platforms,candidateStatus:t.statuses}})).catch((function(t){return console.log("error in fetch: ",t)}))},g=function(){var t=Object(o.a)(a.a.mark((function t(n){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/updateStatusVacancy"),{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(a.a.mark((function t(n){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/updateStatusCandidates"),{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(a.a.mark((function t(n,e){var r,o,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),o={logo:e},t.prev=2,t.next=5,fetch("".concat(c,"/main/addLogoCompanies/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:if(!(u=t.sent).ok){t.next=8;break}return t.abrupt("return",u.json());case 8:throw new Error("".concat(u.statusText));case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",console.log("error in fetch: ",t.t0));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(n,e){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(a.a.mark((function t(n,e){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editSettingsCompany/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n,e){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(a.a.mark((function t(n,e){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addCommentForCompany/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n,e){return t.apply(this,arguments)}}(),T=function(){var t=Object(o.a)(a.a.mark((function t(n,e){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editCommentCompany/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n,e){return t.apply(this,arguments)}}(),P=function(){var t=Object(o.a)(a.a.mark((function t(n,e){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/deleteCommentCompany/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n,e){return t.apply(this,arguments)}}(),b=function(t){var n=i();return fetch("".concat(c,"/main/viewEditContactCompany/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){return{contact:{id:t.id,name:t.name,email:t.email,phone:t.phone,skype:t.skype,selectedPlatforms:t.platforms.map((function(t){var n=Object.values(t.platform);return{id:n[0],label:n[1],value:n[1].toLowerCase()}}))},isChecked:1===t.all_platforms,isDisabled:1===t.all_platforms}})).catch((function(t){return console.log("error in fetch: ",t)}))},j=function(){var t=Object(o.a)(a.a.mark((function t(n,e){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/addNewContactForCompany/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n,e){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(a.a.mark((function t(n,e){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/editContactCompany/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(o=t.sent).ok){t.next=7;break}return t.abrupt("return",o.json());case 7:throw new Error("".concat(o.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n,e){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(a.a.mark((function t(n){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/deleteContactForCompany/").concat(n),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n){return t.apply(this,arguments)}}(),S=function(t,n){var e=i();return fetch("".concat(c,"/main/editInformations/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){for(var n in t){return"otpravka"===n?{sendDetails:t[n]}:"interview_detail"===n?{interviewDetails:t[n]}:"about"===n?{about:t[n]}:t}})).catch((function(t){return console.log("error in fetch: ",t)}))}},476:function(t,n,e){"use strict";e.d(n,"c",(function(){return o})),e.d(n,"h",(function(){return c})),e.d(n,"g",(function(){return i})),e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return s})),e.d(n,"d",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"i",(function(){return p})),e.d(n,"f",(function(){return l}));var r="http://f2.uppeople.space/api",a=function(){return localStorage.getItem("token")},o=function(t){var n=a();return console.log(":::::getAllCandidates"),fetch("".concat(r,"/main/allCandidates/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{allCandidates:t.candidates,allCandidatesCount:t.Count,allTotalPages:t.Page,allPerPage:t.perPage,currentAllPage:t.currentPage,allPlatforms:t.platforms,allStatuses:t.statuses,allRecruiters:t.recruiter,allSeniority:t.seniority,loading:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},c=function(t){var n=a();return fetch("".concat(r,"/main/returnAllCandidates/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{sentCandidates:t.candidates,sentCandidatesCount:t.Count,sentTotalPages:t.Page,sentPerPage:t.perPage,currentSentPage:t.currentPage,sentPlatforms:t.platforms,sentCompanies:t.company,sentStatuses:t.statuses,sentRecruiters:t.recruiter,loadingSent:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},i=function(t){var n=a();return fetch("".concat(r,"/main/viewCandidatesFreelancerOnVacancies/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{candidatesFF:t.candidates,candidatesCountFF:t.Count,totalPagesFF:t.Page,perPageFF:t.perPage,statusesFF:t.statuses,currentPageFF:t.currentPage}})).catch((function(t){return console.log("error in fetch: ",t)}))},u=function(t,n){var e=a();return console.log(":::::Filtered allCandidates"),fetch("".concat(r,"/main/allCandidates/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{allCandidates:t.candidates,allCandidatesCount:t.Count,allTotalPages:t.Page,allPerPage:t.perPage,currentAllPage:t.currentPage,allPlatforms:t.platforms,allStatuses:t.statuses,allRecruiters:t.recruiter,allSeniority:t.seniority,loading:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},s=function(t,n){console.log("Filtered",n);var e=a();return fetch("".concat(r,"/main/returnAllCandidates/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{sentCandidates:t.candidates,sentCandidatesCount:t.Count,sentTotalPages:t.Page,sentPerPage:t.perPage,currentSentPage:t.currentPage,sentPlatforms:t.platforms,sentCompanies:t.company,sentStatuses:t.statuses,sentRecruiters:t.recruiter,loadingSent:!1}})).catch((function(t){return console.log("error in fetch: ",t)}))},f=function(t,n,e,o,c,i){var u=a();return fetch("".concat(r,"/main/getCandidatesAmountByStatuses"),{method:"POST",headers:{Authorization:"Bearer "+u,"Content-Type":"application/json"},body:JSON.stringify({recruiter_id:t,company_id:n,vacancy_id:e,tag_id:o,start_date:c,end_date:i})}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))},h=function(t,n,e,o,c){var i=a();return fetch("".concat(r,"/main/getCandidatesAmountByTags"),{method:"POST",headers:{Authorization:"Bearer "+i,"Content-Type":"application/json"},body:JSON.stringify({recruiter_id:t,company_id:n,vacancy_id:e,start_date:o,end_date:c})}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))},p=function(){var t=a();return fetch("".concat(r,"/main/getStatuses"),{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))},l=function(t,n){var e=a();return fetch("".concat(r,"/main/getCandidatesAmountByVacancies"),{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify({recruiter_id:t,company_id:n})}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return t})).catch((function(t){return console.log("error in fetch: ",t)}))}}}]);
//# sourceMappingURL=19.36b811ca.chunk.js.map