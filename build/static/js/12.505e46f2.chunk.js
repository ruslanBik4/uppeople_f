(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[12],{358:function(t,n,e){"use strict";e.d(n,"e",(function(){return s})),e.d(n,"a",(function(){return u})),e.d(n,"f",(function(){return p})),e.d(n,"b",(function(){return f})),e.d(n,"d",(function(){return l})),e.d(n,"c",(function(){return h}));var r=e(289),o=e.n(r),a=e(290),c="http://f2.uppeople.space/api",i=function(){return localStorage.getItem("token")},s=function(t){var n=i();return fetch("".concat(c,"/main/viewVacancy/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){var n=t[0];return console.log(n),{id:n.id,date:n.date_create,company:n.company,platform:n.platforms,seniority:n.seniorities,status:n.status,location:n.location,salary:n.salary,link:n.link,description:n.opus,details:n.details,recruiters_ids:n.recruiters_ids}})).catch((function(t){return console.log("error in fetch: ",t)}))},u=function(){var t=Object(a.a)(o.a.mark((function t(n){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),e=i(),t.prev=2,t.next=5,fetch("".concat(c,"/main/addNewVacancy"),{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:if(!(r=t.sent).ok){t.next=8;break}return t.abrupt("return",r.json());case 8:throw new Error("".concat(r.statusText));case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",console.log("error in fetch: ",t.t0));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(n){return t.apply(this,arguments)}}(),p=function(t,n){var e=i();return fetch("".concat(c,"/main/editVacancy/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).then((function(t){var n=t[0];return console.log("vacancy response",t),{id:n.id,date:n.date_create,company:n.company,platform:n.platforms,seniority:n.seniorities,status:n.status,location:n.location,salary:n.salary,link:n.link,description:n.opus,details:n.details}})).catch((function(t){return console.log("error in fetch: ",t)}))},f=function(){var t=Object(a.a)(o.a.mark((function t(n){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/deleteVacancy/").concat(n),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n){return t.apply(this,arguments)}}(),l=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=i();return console.log(r),fetch("".concat(c,"/main/returnAllVacancy"),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify({company_id:t,withRecruiters:e,isActive:n})}).then((function(t){if(t.ok)return t.json();throw new Error("".concat(t.statusText))})).catch((function(t){return console.log("error in fetch: ",t)}))},h=function(){var t=Object(a.a)(o.a.mark((function t(n){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i(),t.prev=1,t.next=4,fetch("".concat(c,"/main/getTags"),{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n){return t.apply(this,arguments)}}()},385:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(){var t=localStorage.getItem("token");return fetch("".concat("http://f2.uppeople.space/api","/admin/all-staff"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then((function(t){return{staff:t.users,partners:t.partners,freelancers:t.freeLancers,recruiters:t.recruiters}})).catch((function(t){return console.log("error in fetch: ",t)}))}},788:function(t,n,e){}}]);
//# sourceMappingURL=12.505e46f2.chunk.js.map