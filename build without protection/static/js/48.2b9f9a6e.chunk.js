(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[48],{1075:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var n=a(42),r=a(30),c=a(31),o=a(33),l=a(32),s=a(0),i=a.n(s),u=a(505),d=a(506),m=a(515),p=a(313),h=a(311),f=a(355),v=a(312),E=a(376),g=function(e){return function(t){Object(o.a)(n,t);var a=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var t=arguments.length,c=new Array(t),o=0;o<t;o++)c[o]=arguments[o];return(e=a.call.apply(a,[this].concat(c))).state={show:!1},e.toggle=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.show,a=this.props,n=a.text,r=a.color,c=t?"danger":r;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{style:{marginBottom:"1rem"}},i.a.createElement(d.a,null,i.a.createElement(p.a,{color:c,onClick:this.toggle},n.toUpperCase()))),t&&i.a.createElement(e,this.props))}}]),n}(s.Component)},b=function(e){var t=e.links.map((function(e){return i.a.createElement(p.a,{tag:"a",key:e.id,href:e.link,color:"link",target:"_blank"},e.title)}));return i.a.createElement(h.a,null,i.a.createElement(f.a,null,"Links"),i.a.createElement(v.a,null,i.a.createElement(E.a,{style:{display:"flex",flexWrap:"wrap",marginBottom:"1rem"}},t)))};b.defaultProps={links:[]};var C=g(b),y=a(513),w=a(438),S=function(e){var t=e.candidates,a=t.length>0?t.map((function(e,t){return i.a.createElement(y.a,{key:t},e.interview)})):i.a.createElement("p",{style:{textAlign:"center"}},"There are no candidates scheduled on the interview today"," ",i.a.createElement("span",{role:"img","aria-label":"confused face"},"\ud83d\ude15"));return i.a.createElement(w.a,null,a)};S.defaultProps={candidates:[]};var k=S,T=function(e){var t=e.candidates,a=t.length>0?t.map((function(e){return i.a.createElement(y.a,{key:e.candId,tag:"a",href:"#/candidates/".concat(e.candId)},e.Review)})):i.a.createElement("p",{style:{textAlign:"center"}},"There are no candidates who match"," ",i.a.createElement("span",{role:"img","aria-label":"confused face"},"\ud83d\ude15"));return i.a.createElement(w.a,null,a)};T.defaultProps={candidates:[]};var j=T,x=a(668),O=a(710),F=a(377),A=a(381),I=a(299),P=[{id:"1",name:"Interviews"},{id:"2",name:"Reviews"},{id:"3",name:"Tests"},{id:"4",name:"Offers"}],N=["Date","Platform","Name","Email","Salary","Companies","Recruiter"],D=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={dashboardData:{links:[],listAllCandInterview:[],listAllCandOffer:[],listAllCandReview:[],listAllCandTest:[]},candidatesData:{candidates:[],candidatesCount:null,totalPages:null,perPage:null,currentPage:1,platforms:[],companies:[],statuses:[],recruiter:[]},filterAndSortCandidates:{search:"",dateFrom:"",dateTo:"",selectCompanies:[],selectPlatforms:[],selectStatuses:[]},dropdownOpen:!1},e.loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},e.filterAndSortCandidates=function(t){var a=e.state.filterAndSortCandidates;e.setState({filterAndSortCandidates:Object(n.a)(Object(n.a)({},a),t)},(function(){var t=e.state,a=t.candidatesData.currentPage,r=t.filterAndSortCandidates;Object(I.e)(a,r).then((function(t){e.setState(Object(n.a)(Object(n.a)({},e.state),{},{candidatesData:t}))}))}))},e.onChangePage=function(t){var a=e.state.filterAndSortCandidates;Object(I.e)(t,a).then((function(t){e.setState(Object(n.a)(Object(n.a)({},e.state),{},{candidatesData:t}))}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.filterAndSortCandidates;Object(I.l)().then((function(t){t&&e.setState(Object(n.a)(Object(n.a)({},e.state),{},{dashboardData:t}))})),Object(I.e)(1,t).then((function(t){t&&e.setState(Object(n.a)(Object(n.a)({},e.state),{},{candidatesData:t}))}))}},{key:"render",value:function(){var e=this.state,t=e.dashboardData,a=t.links,n=t.listAllCandInterview,r=t.listAllCandOffer,c=t.listAllCandReview,o=t.listAllCandTest,l=e.candidatesData,s=l.candidates,p=l.candidatesCount,h=l.totalPages,f=l.perPage,v=l.currentPage,E=l.platforms,g=l.companies,b=l.statuses,y=this.props.user.role,w=n.length,S=c.length,T=o.length,I=r.length;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"12",md:"12",xl:"12"},i.a.createElement(C,{links:a,text:"links",color:"primary"}))),i.a.createElement(F.a,{tabs:P,interviewsCount:w,reviewsCount:S,testsCount:T,offersCount:I},i.a.createElement(m.a,{tabId:"1"},i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"12",md:"12",xl:"12"},i.a.createElement(k,{candidates:n})))),i.a.createElement(m.a,{tabId:"2"},i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"12",md:"12",xl:"12"},i.a.createElement(j,{candidates:c})))),i.a.createElement(m.a,{tabId:"3"},i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"12",md:"12",xl:"12"},i.a.createElement(j,{candidates:o})))),i.a.createElement(m.a,{tabId:"4"},i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"12",md:"12",xl:"12"},i.a.createElement(j,{candidates:r}))))),i.a.createElement(u.a,null,i.a.createElement(d.a,{xl:12},i.a.createElement(x.a,{platforms:E,companies:g,statuses:b,onFilter:this.filterAndSortCandidates}))),i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(A.b,{locales:N,onSort:this.filterAndSortCandidates},s.length>0&&i.a.createElement(O.a,{userRole:y,candidates:s,statuses:b,headerColumns:N,totalItems:p,pageSize:f,totalPages:h,currentPage:v,onChangePage:this.onChangePage})))))}}]),a}(s.Component)},332:function(e,t,a){"use strict";a.d(t,"j",(function(){return s})),a.d(t,"i",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"e",(function(){return m})),a.d(t,"q",(function(){return p})),a.d(t,"d",(function(){return h})),a.d(t,"p",(function(){return f})),a.d(t,"f",(function(){return v})),a.d(t,"l",(function(){return E})),a.d(t,"o",(function(){return g})),a.d(t,"k",(function(){return b})),a.d(t,"b",(function(){return C})),a.d(t,"c",(function(){return y})),a.d(t,"m",(function(){return w})),a.d(t,"n",(function(){return S})),a.d(t,"h",(function(){return k}));var n=a(288),r=a.n(n),c=a(289),o="http://f2.uppeople.space/api",l=function(){return localStorage.getItem("token")},s=function(e){var t=l();return fetch("".concat(o,"/main/viewOneCandidate/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){var t=e[0],a=(null!==e.statusesCandidate&&e.statusesCandidate).map((function(e){return{id:e.id,platform:e.platform,seniority:e.seniority,vacancy:e.vacancy,company:e.company,dateUpdate:e.date_last_change,vacancyStatus:e.status_vac,details:e.rej_text}})),n=e.select.candidateStatus;return{candidate:{id:t.id,avatar:t.avatar,name:t.name,date:t.date,platform:t.platforms,seniority_id:t.seniority_id,tag:t.tags,salary:t.salary,language:t.language,phone:t.mobile,email:t.email,skype:t.skype,linkedIn:t.linkedin,resume:t.link,comment:t.comments,about:t.text_rezume},candidateStatuses:a,selectCandidateStatus:n}})).catch((function(e){return console.log("error in fetch: ",e)}))},i=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(),e.prev=1,e.next=4,fetch("".concat(o,"/main/commentsCandidate/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("Error while fetching: ".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(o,"/main/addCommentForCandidate/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(c=e.sent).ok){e.next=7;break}return e.abrupt("return",c.json());case 7:throw new Error("".concat(c.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(o,"/main/editCommentCandidate/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(c=e.sent).ok){e.next=7;break}return e.abrupt("return",c.json());case 7:throw new Error("".concat(c.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(o,"/main/deleteCommentCandidate/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(c=e.sent).ok){e.next=7;break}return e.abrupt("return",c.json());case 7:throw new Error("".concat(c.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),c={avatar:a},e.prev=2,e.next=5,fetch("".concat(o,"/main/addAvatarCandidate/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:if(!(s=e.sent).ok){e.next=8;break}return e.abrupt("return",s.json());case 8:throw new Error("".concat(s.statusText));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(),e.prev=1,e.next=4,fetch("".concat(o,"/main/addNewCandidate"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e,t){var a=l();return fetch("".concat(o,"/main/editCandidate/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){var t=e[0];return{id:t.id,name:t.name,date:t.date,platform:t.platforms,seniority_id:t.seniority_id,salary:t.salary,language:t.language,phone:t.mobile,email:t.email,skype:t.skype,linkedIn:t.linkedin,resume:t.link,comment:t.comments,about:t.text_rezume}})).catch((function(e){return console.log("error in fetch: ",e)}))},v=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(),e.prev=1,e.next=4,fetch("".concat(o,"/main/deleteCandidate/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=l();return fetch("".concat(o,"/interview/viewInformationForSendCV/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){var t=e.companies;return{companies:Object.keys(t).map((function(e){return t[e]})),emailTemplate:e.emailTemplay.text,emailSubject:e.subject}})).catch((function(e){return console.log("error in fetch: ",e)}))},g=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(o,"/interview/sendCV/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(c=e.sent).ok){e.next=7;break}return e.abrupt("return",c.json());case 7:throw new Error("".concat(c.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(),e.prev=1,e.next=4,fetch("".concat(o,"/interview/inviteOnInterviewView/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=8;break}return console.log("response: ",n),e.abrupt("return",n.json());case 8:throw new Error("".concat(n.statusText));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(o,"/interview/inviteOnInterviewSend/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(c=e.sent).ok){e.next=7;break}return e.abrupt("return",c.json());case 7:throw new Error("".concat(c.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(),e.prev=1,e.next=4,fetch("".concat(o,"/main/cancelCandFreelancer/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(c=e.sent).ok){e.next=7;break}return e.abrupt("return",c.json());case 7:throw new Error("".concat(c.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(),e.prev=1,e.next=4,fetch("".concat(o,"/main/addCommentForVac"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(),e.prev=1,e.next=4,fetch("".concat(o,"/main/saveFollowUp"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(),e.prev=1,e.next=4,fetch("".concat(o,"/admin/returnLogsForCand/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},377:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(30),r=a(31),c=a(33),o=a(32),l=a(0),s=a.n(l),i=a(1047),u=a(1048),d=a(505),m=a(506),p=a(1051),h=a(512),f=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={activeTabId:e.props.activeTabId},e.activeTabToggle=function(t){var a=e.props.activeTabToggle;if(a)return a(t);e.setState({activeTabId:t})},e}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e){e.activeTabId!==this.props.activeTabId&&this.setState({activeTabId:this.props.activeTabId})}},{key:"render",value:function(){var e=this,t=this.props,a=t.vacanciesCount,n=t.candidatesCount,r=t.commentsCount,c=t.interviewsCount,o=t.reviewsCount,l=t.testsCount,f=t.offersCount,v=t.tabs,E=this.state.activeTabId,g=v.map((function(t){return s.a.createElement(i.a,{key:t.id},s.a.createElement(u.a,{active:E===t.id,name:t.name,onClick:function(){return e.activeTabToggle(t.id)}},function(e){switch(e){case"Vacancies":return"".concat(e," ").concat(a||"");case"Candidates":return"".concat(e," ").concat(n||"");case"Comments":return"".concat(e," ").concat(r||"");case"Interviews":return"".concat(e," ").concat(c||"");case"Reviews":return"".concat(e," ").concat(o||"");case"Tests":return"".concat(e," ").concat(l||"");case"Offers":return"".concat(e," ").concat(f||"");default:return e}}(t.name)))}));return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(d.a,null,s.a.createElement(m.a,{xs:"12",md:"12",className:"mb-4"},s.a.createElement(p.a,{tabs:!0},g),s.a.createElement(h.a,{activeTab:E},this.props.children))))}}]),a}(l.Component);f.defaultProps={vacanciesCount:null,candidatesCount:null,commentsCount:null,children:[],activeTabId:"1",activeTabToggle:null}},516:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(30),r=a(31),c=a(33),o=a(32),l=a(0),s=a.n(l),i=a(328),u=a(421),d=a(506),m=a(300),p=a(728),h=a(313),f=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={comment:e.props.value,dataSaved:!1},e.handleChange=function(t){var a=t.target.value;e.setState({comment:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.comment,n=e.props,r=n.candId,c=n.compId;(0,n.onSave)({candidate_id:r,company_id:c,comment:a}),e.setState({dataSaved:!0})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.comment,a=e.dataSaved;return s.a.createElement(i.a,{onSubmit:this.handleSubmit},s.a.createElement(u.a,{row:!0},s.a.createElement(d.a,{xs:6,sm:6,md:8,lg:8},s.a.createElement(m.a,{type:"textarea",name:"comment",value:t||"",placeholder:"Type a comment",onChange:this.handleChange})),s.a.createElement(d.a,{xs:6,sm:6,md:4,lg:4},s.a.createElement(p.a,{color:"success",isOpen:a},"Data saved"),s.a.createElement(h.a,{type:"submit",color:"primary"},"Save"))))}}]),a}(l.Component)},668:function(e,t,a){"use strict";var n=a(107),r=a(30),c=a(31),o=a(33),l=a(32),s=a(0),i=a.n(s),u=a(328),d=a(505),m=a(506),p=a(421),h=a(300),f=a(286),v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={search:"",dateFrom:"",dateTo:"",dateFromAllCandidates:"",dateToAllCandidates:"",dateFromSentCandidates:"",dateToSentCandidates:"",dateFromFreelancersCandidates:"",dateToFreelancersCandidates:"",dateFollowUpFrom:"",dateFollowUpTo:"",selectPlatforms:[],selectCompanies:[],selectStatuses:[],selectSeniority:[]},e.handleInputChange=function(t){var a=t.target,r=a.name,c=a.value,o=e.props.onFilter;e.setState(Object(n.a)({},r,c),(function(){return o(e.state)}))},e.handleAllInputChange=function(t){var a=t.target,r=a.name,c=a.value,o=e.props.onAllFilter;console.log(">>>>>>>>>name",[r]),console.log(">>>>>>>>>value",c),"dateFromAllCandidates"==[r]?(e.setState(Object(n.a)({},r,c)),e.setState({dateFrom:c},(function(){return o(e.state)}))):"dateToAllCandidates"==[r]?(e.setState(Object(n.a)({},r,c)),e.setState({dateTo:c},(function(){return o(e.state)}))):("dateFollowUpFrom"==[r]||"dateFollowUpTo"==[r])&&e.setState(Object(n.a)({},r,c),(function(){return o(e.state)}))},e.handleSentInputChange=function(t){var a=t.target,r=a.name,c=a.value,o=e.props.onSentFilter;"dateFromSentCandidates"==[r]?(e.setState(Object(n.a)({},r,c)),e.setState({dateFrom:c},(function(){return o(e.state)}))):"dateToSentCandidates"==[r]&&(e.setState(Object(n.a)({},r,c)),e.setState({dateTo:c},(function(){return o(e.state)})))},e.handlePlatformChange=function(t){var a=e.props.onFilter;e.setState({selectPlatforms:t},(function(){return a(e.state)}))},e.handleCompanyChange=function(t){var a=e.props.onFilter;e.setState({selectCompanies:t},(function(){return a(e.state)}))},e.handleStatusChange=function(t){var a=e.props.onFilter;e.setState({selectStatuses:t},(function(){return a(e.state)}))},e.handleSeniorityChange=function(t){var a=e.props.onFilter;e.setState({selectSeniority:t},(function(){return a(e.state)}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.search,a=e.dateFrom,n=e.dateTo,r=e.dateFromAllCandidates,c=e.dateToAllCandidates,o=e.dateFromSentCandidates,l=e.dateToSentCandidates,s=e.dateFromFreelancersCandidates,v=e.dateToFreelancersCandidates,E=e.dateFollowUpFrom,g=e.dateFollowUpTo,b=e.selectPlatforms,C=e.selectSeniority,y=e.selectCompanies,w=e.selectStatuses,S=this.props,k=S.platforms,T=S.companies,j=S.statuses,x=S.seniority,O=S.activeTabId,F=S.userRole;return i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(m.a,{lg:12},i.a.createElement(p.a,{className:"search-wrap"},i.a.createElement(h.a,{id:"search",type:"text",name:"search",value:t,placeholder:"Search",onChange:this.handleInputChange,autoComplete:"off"}),i.a.createElement("i",{className:"fa fa-search",style:{position:"absolute",top:"0.6rem",right:"1.75rem",color:"var(--gray)"}})))),4!==F?i.a.createElement(d.a,null,"1"===O?i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,null,i.a.createElement("label",{htmlFor:r,className:"date-filter-label"},"Date From"),i.a.createElement(h.a,{id:"date-from",type:"date",name:"dateFromAllCandidates",value:r,onChange:this.handleAllInputChange}))),i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,null,i.a.createElement("label",{htmlFor:c,className:"date-filter-label"},"Date To"),i.a.createElement(h.a,{id:"date-to",type:"date",name:"dateToAllCandidates",value:c,onChange:this.handleAllInputChange}))),i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,null,i.a.createElement("label",{htmlFor:a,className:"date-filter-label"},"Date FollowUp From"),i.a.createElement(h.a,{id:"date-from",type:"date",name:"dateFollowUpFrom",value:E,onChange:this.handleAllInputChange}))),i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,null,i.a.createElement("label",{htmlFor:n,className:"date-filter-label"},"Date FollowUp To"),i.a.createElement(h.a,{id:"date-to",type:"date",name:"dateFollowUpTo",value:g,onChange:this.handleAllInputChange}))),i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,{className:"filter-select"},i.a.createElement(f.a,{isMulti:!0,value:b,options:k,placeholder:"Platforms",onChange:this.handlePlatformChange}))),i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,{className:"filter-select"},i.a.createElement(f.a,{isMulti:!0,value:C,options:x,placeholder:"Seniority",onChange:this.handleSeniorityChange})))):"2"===O?i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,null,i.a.createElement("label",{htmlFor:o,className:"date-filter-label"},"Date From"),i.a.createElement(h.a,{id:"date-from",type:"date",name:"dateFromSentCandidates",value:o,onChange:this.handleSentInputChange}))),i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,null,i.a.createElement("label",{htmlFor:l,className:"date-filter-label"},"Date To"),i.a.createElement(h.a,{id:"date-to",type:"date",name:"dateToSentCandidates",value:l,onChange:this.handleSentInputChange}))),i.a.createElement(m.a,{lg:3,md:12},i.a.createElement(p.a,{className:"filter-select"},i.a.createElement(f.a,{isMulti:!0,value:b,options:k,placeholder:"Platforms",onChange:this.handlePlatformChange}))),i.a.createElement(m.a,{lg:3,md:12},i.a.createElement(p.a,{className:"filter-select"},i.a.createElement(f.a,{isMulti:!0,value:y,options:T,placeholder:"Companies",onChange:this.handleCompanyChange}))),i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,{className:"filter-select"},i.a.createElement(f.a,{isMulti:!0,value:w,options:j,placeholder:"Statuses",onChange:this.handleStatusChange})))):i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,null,i.a.createElement("label",{htmlFor:s,className:"date-filter-label"},"Date From"),i.a.createElement(h.a,{id:"date-from",type:"date",name:"dateFromFreelancersCandidates",value:s}))),i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,null,i.a.createElement("label",{htmlFor:v,className:"date-filter-label"},"Date To"),i.a.createElement(h.a,{id:"date-to",type:"date",name:"dateToFreelancersCandidates",value:v}))),i.a.createElement(m.a,{lg:3,md:12},i.a.createElement(p.a,{className:"filter-select"},i.a.createElement(f.a,{isMulti:!0,value:b,options:k,placeholder:"Platforms",onChange:this.handlePlatformChange}))),i.a.createElement(m.a,{lg:3,md:12},i.a.createElement(p.a,{className:"filter-select"},i.a.createElement(f.a,{isMulti:!0,value:y,options:T,placeholder:"Companies",onChange:this.handleCompanyChange}))),i.a.createElement(m.a,{lg:2,md:12},i.a.createElement(p.a,{className:"filter-select"},i.a.createElement(f.a,{isMulti:!0,value:w,options:j,placeholder:"Statuses",onChange:this.handleStatusChange}))))):null)}}]),a}(s.Component);t.a=v},710:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(384),o=a(505),l=a(506),s=a(284),i=a.n(s),u=a(815),d=a(1050),m=a(493),p=function(e){var t=e.id,a=e.date,n=e.name,c=e.platform,o=e.salary,l=e.email,s=e.mobile,p=e.linkedin,h=e.skype,f=e.companies,v=e.recruiter,E=e.isOpen,g=e.open,b=e.close,C=e.status,y=e.color,w=function(e){e.target.style.color="var(--green)"},S=s,k=l,T=p,j=h;if(""===s&&(S=null),""===l&&(k=null),""===p&&(T=null),""===h&&(j=null),""!==C){var x=C.split(";");C=JSON.parse(x[x.length-1])}return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,E?r.a.createElement("i",{className:"icon-close icons font-xl",style:{color:"var(--red)",cursor:"pointer"},onClick:b}):r.a.createElement("i",{className:"icon-plus icons font-xl",style:{color:"var(--green)",cursor:"pointer"},onClick:g})),r.a.createElement("td",null,i()(a).format("DD.MM.YY")),r.a.createElement("td",null,c),r.a.createElement("td",null,r.a.createElement(u.a,{to:"/candidates/".concat(t),target:"_blank"},n)),r.a.createElement("td",null,o),r.a.createElement("td",null,r.a.createElement("div",{className:"contacts-col-icons-wrap"},null!==S?r.a.createElement(m.CopyToClipboard,{text:S},r.a.createElement("i",{className:"icon-phone icons font-xl contact-icon",style:{color:"var(--black)",cursor:"pointer"},onClick:w})):null,null!==k?r.a.createElement(m.CopyToClipboard,{text:k},r.a.createElement("i",{className:"icon-envelope icons font-xl contact-icon",style:{color:"var(--black)",cursor:"pointer"},onClick:w})):null,null!==T?r.a.createElement("a",{href:T,target:"_blank"},r.a.createElement("i",{className:"icon-social-linkedin icons font-xl contact-icon",style:{color:"var(--blue)",cursor:"pointer"},onClick:w})):null,null!==j?r.a.createElement(m.CopyToClipboard,{text:j},r.a.createElement("i",{className:"icon-social-skype icons font-xl contact-icon",style:{color:"var(--blue)",cursor:"pointer"},onClick:w})):null)),r.a.createElement("td",null,r.a.createElement(d.a,{color:y,style:{backgroundColor:y}},C.vacStat)),r.a.createElement("td",null,f&&f.split(";").map((function(e,a){var n=JSON.parse(e);return r.a.createElement(u.a,{to:"/companies/".concat(n.id),key:"".concat(a,"-").concat(t,"-").concat(n.id)},n.name)}))),r.a.createElement("td",null,v))};p.defaultProps={date:"",name:"",platform:"",salary:"",mobile:"",email:"",linkedin:"",skype:"",companies:"",recruiter:"",open:function(){return null},close:function(){return null}};var h=p,f=a(516),v=a(286),E=a(302),g=a(332),b=function(e){var t,a=e.userRole,n=e.candId,c=e.candidateStatus,o=e.statuses,l=JSON.parse(c),s=l.date,m=l.compId,p=l.compName,h=l.vacStat,b=l.commentVac,C=b||"";return r.a.createElement(r.a.Fragment,null,null!==s||null!==m?r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,s?i()(s).format("DD.MM.YY"):""),r.a.createElement("td",null,4!==a?r.a.createElement(u.a,{to:"/companies/".concat(m)},p):p),r.a.createElement("td",null,4!==a?r.a.createElement(v.a,{defaultValue:o.find((function(e){return e.label===h})),options:o,onChange:function(e){var t={id:n,company_id:m,value:e};Object(E.p)(t)}}):r.a.createElement(d.a,{color:(t=h,"OFFER"===t||"Hired"===t?"success":"Hold"===t?"secondary":"Interview"===t?"warning":"Rejected"===t||"Refused"===t?"danger":"Review"===t?"primary":null)},h)),r.a.createElement("td",null,4!==a?r.a.createElement(f.a,{value:C,candId:n,compId:m,onSave:g.m}):C)):r.a.createElement("td",{colSpan:"9",align:"middle",valign:"middle"},"There are no previous statuses on the candidate."," ",r.a.createElement("span",{role:"img","aria-label":"confused face"},"\ud83d\ude15")))},C=a(380),y=a(310),w=a(383),S={background:"var(--white)",pointerEvents:"none",opacity:.4},k={background:"var(--white)"},T=function(e){var t=e.userRole,a=e.candidates,n=e.statuses,s=e.pageSize,i=e.totalItems,u=e.totalPages,d=e.currentPage,m=e.onChangePage,p=e.onSort,f=e.loading;console.log(a);var v=a.length>0?a.map((function(e,a){return r.a.createElement(w.a,{key:e.id,render:function(o,l,s){return o?r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:e.id},r.a.createElement(h,Object.assign({idx:a,isOpen:o,close:s},e))),e.status&&e.status.split(";").map((function(a){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{colSpan:"8"},r.a.createElement(c.a,{style:{background:"var(--white)"},size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Company"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Comment"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement(b,{userRole:t,candId:e.id,candidateStatus:a,statuses:n}))))))}))):r.a.createElement("tr",{key:e.id},r.a.createElement(h,Object.assign({idx:a},e,{isOpen:o,open:l})))}})})):r.a.createElement("tr",{style:{color:"var(--secondary)"}},r.a.createElement("td",{colSpan:9,align:"center"},"Nothing found"," ",r.a.createElement("span",{role:"img","aria-label":"confused face"},"\ud83d\ude15")));return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{style:f?S:k,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"+/-"),r.a.createElement(C.a,{onSort:p}))),r.a.createElement("tbody",null,v)),a.length>0?r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement(y.a,{items:a,totalItems:i,pageSize:s,totalPages:u,initialPage:d,onChangePage:m,loading:f}))):null)};T.defaultProps={candidates:[],currentPage:null,pageSize:null,totalItems:null,totalPages:null,onChangePage:function(){return null},onSort:function(){return null}};t.a=T}}]);
//# sourceMappingURL=48.2b9f9a6e.chunk.js.map