(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[49],{326:function(e,a,t){"use strict";t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return l})),t.d(a,"d",(function(){return s})),t.d(a,"e",(function(){return i}));var n=t(337),c=function(e){for(var a in e)if(e.hasOwnProperty(a))return!1;return!0},r=function(e,a){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){a(t.result)},t.onerror=function(e){console.log("Error: ",e)}},l=function(e,a){return e.reduce((function(e,t){return{data:t[a]?e.data.concat(t[a]):e.data.concat(0),label:a}}),{data:[],label:a})},s=function(e,a,t,n){var c=t[e],r={labels:n,datasets:[{backgroundColor:"transparent",borderColor:a||"#c2cfd6",data:c.data,label:c.label}]};return function(){return r}},i={tooltips:{enabled:!1,custom:n.CustomTooltips},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}}},980:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return Z}));var n=t(42),c=t(30),r=t(31),l=t(33),s=t(32),i=t(0),o=t.n(i),m=t(284),d=t.n(m),u=t(773),E=t(967),p=t(481),v=t(482),f=t(310),h=t(343),g=t(311),b=t(312),O=t(379),N=t(988),C=t(962),w=t(362),x=t(966),y=t(986),V=t(987),j=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={dropdownOpen:!1},e.toggle=function(){e.setState({dropdownOpen:!e.state.dropdownOpen})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,a=e.card,t=e.amount,n=e.history,c=a.links&&a.links.map((function(e){return o.a.createElement(C.a,{key:e.id,onClick:function(){return n.push(e.route)}},e.title)}));return o.a.createElement(f.a,{className:"text-white bg-".concat(a.color),style:{minHeight:"113px"}},o.a.createElement(g.a,null,o.a.createElement(w.a,{className:"float-right"},c&&o.a.createElement(x.a,{id:a.title,isOpen:this.state.dropdownOpen,toggle:this.toggle},o.a.createElement(y.a,{caret:!0,className:"p-0",color:"transparent"},o.a.createElement("i",{className:"icon-link"})),o.a.createElement(V.a,{right:!0},c))),a.title&&o.a.createElement("div",{className:"text-value"},a.title,": ",t),o.a.createElement("div",null,a.desc),a.time&&o.a.createElement("div",null,"on ",a.time)))}}]),t}(i.Component);j.defaultProps={color:"primary",title:"",amount:null,desc:""};var A=Object(N.a)(j),k=t(959),R=t(797),F=t(696),I=t(326),U=Object(F.getStyle)("--primary"),M=Object(F.getStyle)("--danger"),S=function(e){var a=e.title,t=e.data,n=Object.values(t),c=n.reduce((function(e,a){return{review:a.Review?e.review+a.Review:e.review,interview:a.Interview?e.interview+a.Interview:e.interview}}),{review:0,interview:0}),r=[{name:"Review",amountCandidates:c.review},{name:"Interview",amountCandidates:c.interview}],l=[Object(I.b)(n,"Review"),Object(I.b)(n,"Interview")],s=Object.keys(t),i=function(e,a,t){return e.map((function(e,n){var c=0===n?U:M;return o.a.createElement(v.a,{key:"".concat(e.name,"-").concat(e.amountCandidates),sm:"6"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},e.name.toUpperCase()),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},e.amountCandidates),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(R.a,{data:Object(I.d)(n,c,a,t),options:I.e,width:100,height:30}))))}))}(r,l,s),m=function(e,a){return e.map((function(e){var t=a[e].Review,n=a[e].Interview;return o.a.createElement("div",{className:"progress-group mb-4",key:"".concat(e,"-").concat(t,"-").concat(n)},o.a.createElement("div",{className:"progress-group-prepend"},o.a.createElement("span",{className:"progress-group-text"},e)),o.a.createElement("div",{className:"progress-group-bars"},o.a.createElement(E.a,{className:"progress-xs",color:"info",value:String(t)}),o.a.createElement(E.a,{className:"progress-xs",color:"danger",value:String(n)})))}))}(s,t),u=r.map((function(e,a){var t=0===a?"info":"danger";return o.a.createElement("div",{key:e.name},o.a.createElement("sup",{className:"px-1"},o.a.createElement(k.a,{pill:!0,color:t},"\xa0")),e.name," \xa0")}));return o.a.createElement(f.a,null,o.a.createElement(h.a,null,"".concat(a," of ").concat(d()().format("MMMM"))),o.a.createElement(g.a,null,o.a.createElement(p.a,null,i),o.a.createElement("hr",{className:"mt-0"}),m,o.a.createElement("div",{className:"legend text-center"},o.a.createElement("small",{style:{display:"flex",justifyContent:"center"}},u)),o.a.createElement("br",null)))};S.defaultProps={title:"",data:{}};var H=S,P=t(107),Y=t(316),W=t(408),D=t(298),T=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={dateFrom:"",dateTo:""},e.handleInputChange=function(a){var t=a.target,n=t.name,c=t.value;e.setState(Object(P.a)({},n,c),(function(){return e.props.onFilter(e.state)}))},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.dateFrom,t=e.dateTo;return o.a.createElement(Y.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,{xs:12,sm:12,md:6,lg:6},o.a.createElement(W.a,null,o.a.createElement(D.a,{id:"date-from",type:"date",name:"dateFrom",value:a,onChange:this.handleInputChange}))),o.a.createElement(v.a,{xs:12,sm:12,md:6,lg:6},o.a.createElement(W.a,null,o.a.createElement(D.a,{id:"date-to",type:"date",name:"dateTo",value:t,onChange:this.handleInputChange})))))}}]),t}(i.Component),J={id:"1",color:"primary",title:"Companies",desc:"Amount of companies with vacancies in Open/Hot status",links:[{title:"Companies",route:"/companies"},{title:"Vacancies",route:"/vacancies"}]},L={id:"2",color:"primary",title:"Vacancies",desc:"Amount of vacancies in Open/Hot status",links:[{title:"Vacancies",route:"/vacancies"},{title:"Companies",route:"/companies"}]},z={id:"3",color:"info",title:"Recruiters",desc:"Amount of recruiters",links:[{title:"Users",route:"/users"}]},B={id:"4",color:"info",title:"Freelancers",desc:"Amount of freelancers",links:[{title:"Users",route:"/users"}]},q={id:"5",color:"danger",title:"Candidates",desc:"Amount of candidates sent on vacancies",links:[{title:"Candidates",route:"/candidates"},{title:"Vacancies",route:"/vacancies"}],time:d()().calendar()},G={id:"6",color:"danger",title:"Interviews",desc:"Amount of scheduled interviews",links:[{title:"Candidates",route:"/candidates"}],time:d()().calendar()},K={id:"7",color:"success",title:"OFFER Candidates",desc:"Amount of candidates with offer",links:[{title:"Candidates",route:"/candidates"}],time:d()().format("MMMM YYYY")},Q=t(300),X=Object(F.getStyle)("--primary"),Z=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={dashboardData:{companiesWithCandidates:{},vacanciesOnCandidates:{},countCandidatesOnVacancies:{},countUsersAndFreelancers:{},countCompanies:null,countVacancies:null,countVacanciesOnPlatforms:{},worseVacancies:[],countOfferCandidates:null,usersWithoutOfferCandidates:[],usersOnCandidates:[],countVacanciesOpenAndHot:{}},dateFilter:{dateFrom:"",dateTo:""}},e.filterData=function(a){e.setState({dateFilter:a},(function(){var a=e.state.dateFilter;Object(Q.f)(a).then((function(a){var t={companiesWithCandidates:a.countRevInterComp,vacanciesOnCandidates:a.countRevInterVac,countCandidatesOnVacancies:a.countReviewAndInterviewCandidatesOnVacancies,countUsersAndFreelancers:a.countUsersAndFreelancer,countCompanies:a.countVacanciesOpenAndHot.countCom,countVacancies:a.countVacanciesOpenAndHot.countVac,countVacanciesOnPlatforms:a.countVacanciesOpenAndHotForPlatform,worseVacancies:a.listNotSendVacancies,countOfferCandidates:a.offersCandidates.allCount,usersWithoutOfferCandidates:a.offersCandidates.users,usersOnCandidates:a.topUsers,countVacanciesOpenAndHot:a.countVacanciesOpenAndHot};e.setState(Object(n.a)(Object(n.a)({},e.state),{},{dashboardData:t}))}))}))},e.loading=function(){return o.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(Q.i)().then((function(a){if(a){var t={companiesWithCandidates:a.countRevInterComp,vacanciesOnCandidates:a.countRevInterVac,countCandidatesOnVacancies:a.countReviewAndInterviewCandidatesOnVacancies,countUsersAndFreelancers:a.countUsersAndFreelancer,countCompanies:a.countVacanciesOpenAndHot.countCom,countVacancies:a.countVacanciesOpenAndHot.countVac,countVacanciesOnPlatforms:a.countVacanciesOpenAndHotForPlatform,worseVacancies:a.listNotSendVacancies,countOfferCandidates:a.offersCandidates.allCount,usersWithoutOfferCandidates:a.offersCandidates.users,usersOnCandidates:a.topUsers,countVacanciesOpenAndHot:a.countVacanciesOpenAndHot};e.setState(Object(n.a)(Object(n.a)({},e.state),{},{dashboardData:t}))}}))}},{key:"render",value:function(){var e=this.state.dashboardData,a=e.countCompanies,t=e.countVacancies,n=e.countUsersAndFreelancers,c=e.countVacanciesOnPlatforms,r=e.companiesWithCandidates,l=e.vacanciesOnCandidates,s=e.countCandidatesOnVacancies,i=e.usersOnCandidates,m=e.countOfferCandidates,N=e.usersWithoutOfferCandidates,C=e.worseVacancies,w=Object(I.c)(n)?null:n.Recruiter,x=Object(I.c)(n)?null:n.Freelancer,y=!Object(I.c)(c)&&Object.values(c).reduce((function(e,a){return e+a}),0),V=y&&Object.keys(c).map((function(e){var a=(c[e]/y*100).toFixed(1);return o.a.createElement("li",{key:e,className:"progress-group"},o.a.createElement("div",{className:"progress-group-header"},o.a.createElement("i",{className:"icon-globe progress-group-icon"}),o.a.createElement("span",{className:"title"},e),o.a.createElement("span",{className:"ml-auto font-weight-bold"},c[e]," ",o.a.createElement("span",{className:"text-muted small"},"(",a,"%",")"))),o.a.createElement("div",{className:"progress-group-bars"},o.a.createElement(E.a,{className:"progress-xs",color:"success",value:a})))})),j=Object(I.c)(r)?{}:r,k=Object(I.c)(l)?{}:l,R=!Object(I.c)(s)&&s,F=R.Review,U=R.Interview,M=i.length>0&&i.reduce((function(e,a){return e&&"Admin"!==a.role&&"Review"===a.status&&e.push(a),e}),[]),S=M.length>0&&M.reduce((function(e,a){return e+a.count}),0),P=M.length>0&&M.map((function(e){var a=(e.count/S*100).toFixed();return o.a.createElement("tr",{key:e.id},o.a.createElement("td",{className:"text-center"},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:"assets/img/avatars/1.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),o.a.createElement("span",{className:"avatar-status badge-success"}))),o.a.createElement("td",null,o.a.createElement("div",null,e.name)),o.a.createElement("td",{className:"text-center"},e.role),o.a.createElement("td",null,o.a.createElement("div",{className:"clearfix"},o.a.createElement("div",{className:"float-left"},o.a.createElement("strong",null,"".concat(e.count," (").concat(String(a),"%)"))),o.a.createElement("div",{className:"float-right"},o.a.createElement("small",{className:"text-muted"},"on ",d()().format("MMMM YYYY")))),o.a.createElement(E.a,{className:"progress-xs",color:"success",value:"".concat(String(a))})))})),Y=i.length>0&&i.reduce((function(e,a){return e&&"Admin"!==a.role&&"Interview"===a.status&&e.push(a),e}),[]),W=Y.length>0&&Y.reduce((function(e,a){return e+a.count}),0),D=Y.length>0&&Y.map((function(e){var a=(e.count/W*100).toFixed();return o.a.createElement("tr",{key:e.id},o.a.createElement("td",{className:"text-center"},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:"assets/img/avatars/1.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),o.a.createElement("span",{className:"avatar-status badge-success"}))),o.a.createElement("td",null,o.a.createElement("div",null,e.name)),o.a.createElement("td",{className:"text-center"},e.role),o.a.createElement("td",null,o.a.createElement("div",{className:"clearfix"},o.a.createElement("div",{className:"float-left"},o.a.createElement("strong",null,"".concat(e.count," (").concat(String(a),"%)"))),o.a.createElement("div",{className:"float-right"},o.a.createElement("small",{className:"text-muted"},"on ",d()().format("MMMM YYYY")))),o.a.createElement(E.a,{className:"progress-xs",color:"success",value:"".concat(String(a))})))})),Q=C.length>0&&C.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,o.a.createElement(u.a,{to:"/vacancies/".concat(e.id)},e.vacancy)))})),Z=N.length>0&&N.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,o.a.createElement(u.a,{to:"/users/".concat(e.id)},e.name)))}));return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(T,{onFilter:this.filterData}),o.a.createElement(p.a,null,o.a.createElement(v.a,{xs:"12",sm:"12",md:"4",lg:"4"},o.a.createElement(A,{card:q,amount:F})),o.a.createElement(v.a,{xs:"12",sm:"12",md:"4",lg:"4"},o.a.createElement(A,{card:G,amount:U})),o.a.createElement(v.a,{xs:"12",sm:"12",md:"4",lg:"4"},o.a.createElement(A,{card:K,amount:m}))),o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(f.a,null,o.a.createElement(h.a,null,"Amount of vacancies in Open/Hot status"),o.a.createElement(g.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,{xs:"12",md:"12",xl:"12"},o.a.createElement(p.a,null,o.a.createElement(v.a,{sm:"12"},o.a.createElement("div",{className:"callout callout-success"},o.a.createElement("small",{className:"text-muted"},"Vacancies".toUpperCase()),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},y)))),o.a.createElement("hr",{className:"mt-0"}),o.a.createElement("ul",{className:"pl-0"},V,o.a.createElement("div",{className:"divider text-center"},o.a.createElement(b.a,{color:"link",size:"sm",className:"text-muted","data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"show more"},o.a.createElement("i",{className:"icon-options"})))))),o.a.createElement("br",null))))),o.a.createElement(p.a,null,o.a.createElement(v.a,{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"},o.a.createElement(H,{title:"Companies with candidates in Review/Interview status",data:j})),o.a.createElement(v.a,{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"},o.a.createElement(H,{title:"Vacancies with candidates in Review/Interview status",data:k}))),o.a.createElement(p.a,null,o.a.createElement(v.a,{xs:"12",sm:"6",md:"6",lg:"3"},o.a.createElement(A,{card:J,amount:a,brandPrimary:X})),o.a.createElement(v.a,{xs:"12",sm:"6",md:"6",lg:"3"},o.a.createElement(A,{card:L,amount:t})),o.a.createElement(v.a,{xs:"12",sm:"6",md:"6",lg:"3"},o.a.createElement(A,{card:z,amount:w})),o.a.createElement(v.a,{xs:"12",sm:"6",md:"6",lg:"3"},o.a.createElement(A,{card:B,amount:x}))),o.a.createElement(p.a,null,o.a.createElement(v.a,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"},o.a.createElement(f.a,null,o.a.createElement(h.a,null,"Users with candidates in Review status"),o.a.createElement(g.a,null,o.a.createElement(O.a,{hover:!0,responsive:!0,className:"table-outline mb-0 d-none d-sm-table"},o.a.createElement("thead",{className:"thead-light"},o.a.createElement("tr",null,o.a.createElement("th",{className:"text-center"},o.a.createElement("i",{className:"icon-people"})),o.a.createElement("th",null,"User"),o.a.createElement("th",{className:"text-center"},"Role"),o.a.createElement("th",null,"Pct"))),o.a.createElement("tbody",null,P))))),o.a.createElement(v.a,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"},o.a.createElement(f.a,null,o.a.createElement(h.a,null,"Users with candidates in Interview status"),o.a.createElement(g.a,null,o.a.createElement(O.a,{hover:!0,responsive:!0,className:"table-outline mb-0 d-none d-sm-table"},o.a.createElement("thead",{className:"thead-light"},o.a.createElement("tr",null,o.a.createElement("th",{className:"text-center"},o.a.createElement("i",{className:"icon-people"})),o.a.createElement("th",null,"User"),o.a.createElement("th",{className:"text-center"},"Role"),o.a.createElement("th",null,"Pct"))),o.a.createElement("tbody",null,D)))))),o.a.createElement(p.a,null,o.a.createElement(v.a,{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"},o.a.createElement(f.a,null,o.a.createElement(h.a,null,"Vacancies on which didn't send any candidate at last 10 days"),o.a.createElement(g.a,null,o.a.createElement(O.a,{hover:!0,responsive:!0,className:"table-outline mb-0 d-none d-sm-table"},o.a.createElement("tbody",null,Q))))),o.a.createElement(v.a,{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"},o.a.createElement(f.a,null,o.a.createElement(h.a,null,"Users who don't have candidates with offer at last 60 days"),o.a.createElement(g.a,null,o.a.createElement(O.a,{hover:!0,responsive:!0,className:"table-outline mb-0 d-none d-sm-table"},o.a.createElement("tbody",null,Z)))))))}}]),t}(i.Component)}}]);
//# sourceMappingURL=49.97104c26.chunk.js.map