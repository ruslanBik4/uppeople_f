(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[53],{969:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var n=a(42),c=a(771),r=a(107),l=a(289),s=a.n(l),i=a(290),o=a(30),u=a(31),d=a(33),m=a(32),h=a(0),f=a.n(h),p=a(483),g=a(484),v=a(408),b=a(298),y=a(321),E=a(425),S=a(304),O=a(348),j=a(476),C=a(769),D=(a(768),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var l;Object(o.a)(this,a),(l=t.call(this,e)).fetchRecruiters=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)();case 2:t=e.sent,a=t.staff.filter((function(e){return 2===e.role_id})),l.setState({recruiters:a});case 5:case"end":return e.stop()}}),e)}))),l.fetchCompanies=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.k)(0,1);case 2:t=e.sent,a=t.companies,l.setState({companies:a});case 5:case"end":return e.stop()}}),e)}))),l.fetchVacancies=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.state.selectedCompany,e.next=3,Object(O.d)(null!==t?t.id:null);case 3:a=e.sent,n=a.vacancies,l.setState({vacancies:n});case 6:case"end":return e.stop()}}),e)}))),l.fetchTags=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)({main:!0});case 2:t=e.sent,l.setState({tags:t}),l.setState({selectedTags:t});case 5:case"end":return e.stop()}}),e)}))),l.fetchCandidatesData=Object(i.a)(s.a.mark((function e(){var t,a,n,c,r,i,o,u,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.state,a=t.selectedRecruiter,n=t.selectedCompany,c=t.selectedVacancy,r=t.selectedStartDate,i=t.selectedEndDate,e.next=3,Object(j.e)(a?a.id:0,n?n.id:0,c?c.id:0,r,i);case 3:void 0!==(o=e.sent)?(u=o.data.main,d=o.data.reject,l.setState({funnelData:u}),l.setState({pieChartData:d})):l.setState({funnelData:null});case 5:case"end":return e.stop()}}),e)}))),l.fetchStatuses=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.i)();case 2:t=e.sent,l.setState({statuses:t}),l.setState({selectedStatuses:t});case 5:case"end":return e.stop()}}),e)}))),l.handleRecruiterSelect=function(e){l.setState({selectedRecruiter:e})},l.handleCompanySelect=function(e){l.setState({selectedCompany:e})},l.handleVacancySelect=function(e){l.setState({selectedVacancy:e})},l.handleTagsSelect=function(e){l.setState({selectedTags:e})},l.handleStatusChange=function(e){l.setState({selectedStatuses:e})},l.handleDate=function(e){var t=e.target,a=t.name,n=t.value;l.setState(Object(r.a)({},a,n))},l.renderPieChart=function(){var e=l.state.pieChartData,t=0;if(void 0!==e&&null!==e){for(var a=0,n=Object.entries(e);a<n.length;a++){var r=Object(c.a)(n[a],2);r[0];t+=r[1].count}for(var s=[],i=0,o=Object.entries(e);i<o.length;i++){var u=Object(c.a)(o[i],2),d=(u[0],u[1]);d.count>0&&s.push({category:d.name,value:d.count/t,color:d.color})}return f.a.createElement(C.a,{title:"World Population by Broad Age Groups"},f.a.createElement(C.b,{position:"bottom"}),f.a.createElement(C.c,null,f.a.createElement(C.d,{type:"pie",data:s,field:"value",categoryField:"category",labels:{visible:!0,content:function(e){var t=Number(e.dataItem.value).toLocaleString(void 0,{style:"percent",minimumFractionDigits:2});return"".concat(e.dataItem.category.replaceAll(" ","\n")+"\n"," ").concat(t)}}})))}},l.renderFunnelChart=function(){var e=l.state,t=e.funnelData,a=e.selectedTags;if(null!==t&&void 0!==t){for(var r=Object.entries(t).reduceRight((function(e,t,a,r){var l=Object(c.a)(t,2),s=l[0],i=l[1],o=r[a+1];if(o){var u=Object(c.a)(o,1)[0];e[s]=Object(n.a)(Object(n.a)({},i),{},{count:e[u].count+i.count})}else e[s]=i;return e}),{}),s=[],i=function(){var e=Object(c.a)(u[o],2),t=(e[0],e[1]);null!==a&&(a.filter((function(e){return e.id===t.id})).length>0&&s.push({stat:t.name,count:t.count,color:t.color,percentage:100}))},o=0,u=Object.entries(r);o<u.length;o++)i();s=s.reduce((function(e,t,a,n){var c=n[a-1];return c&&(t.percentage=(100*parseFloat(t.count)/parseFloat(c.count)).toFixed(0)),e[a]=t,e}),{});for(var d=[],m=0,h=Object.entries(s);m<h.length;m++){var p=Object(c.a)(h[m],2),g=(p[0],p[1]);d.push({stat:g.stat+" "+g.percentage+"%",count:g.count,color:g.color})}var v=l.state,b=v.dynamicSlope,y=v.dynamicHeight;return f.a.createElement(C.a,{style:{margin:"0 auto",width:300,height:350}},f.a.createElement(C.f,{text:"Acquisition funnel"}),f.a.createElement(C.c,{style:{height:350}},f.a.createElement(C.d,{type:"funnel",data:d,categoryField:"stat",field:"count",colorField:"color",dynamicHeight:y,dynamicSlope:b},f.a.createElement(C.e,{color:"black",background:"none",format:"N0"}))),f.a.createElement(C.g,{render:function(e){var t=e.point;return(void 0===t?{}:t).category}}),f.a.createElement(C.b,{visible:!1}))}};var u=new Date,d=u.toJSON().slice(0,10);u.setMonth(u.getMonth()-1);var m=u.toJSON().slice(0,10);return l.state={recruiters:[],companies:[],vacancies:[],tags:[],selectedRecruiter:null,selectedCompany:null,selectedVacancy:null,selectedTags:null,selectedStartDate:m,selectedEndDate:d,funnelData:null,pieChartData:null,dynamicSlope:!0,dynamicHeight:!1},l}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchRecruiters(),this.fetchCompanies(),this.fetchVacancies(),this.fetchTags(),this.fetchCandidatesData(),this.fetchStatuses()}},{key:"componentDidUpdate",value:function(e,t){this.state.selectedRecruiter===t.selectedRecruiter&&this.state.selectedCompany===t.selectedCompany&&this.state.selectedVacancy===t.selectedVacancy&&this.state.selectedTags===t.selectedTags&&this.state.selectedStartDate===t.selectedStartDate&&this.state.selectedEndDate===t.selectedEndDate||this.fetchCandidatesData(),this.state.selectedCompany!==t.selectedCompany&&this.fetchVacancies()}},{key:"render",value:function(){var e=this.state,t=e.recruiters,a=e.selectedRecruiter,n=this.state,c=n.companies,r=n.selectedCompany,l=this.state,s=l.vacancies,i=l.selectedVacancy,o=this.state,u=o.tags,d=o.selectedTags,m=this.state,h=m.selectedStartDate,E=m.selectedEndDate;return f.a.createElement(f.a.Fragment,null,f.a.createElement(p.a,{style:{marginBottom:"1rem"}},f.a.createElement(g.a,null,f.a.createElement("h1",{style:{marginBottom:0,fontSize:24}},"Acquisition funnel"))),f.a.createElement(p.a,{style:{marginBottom:"1rem"}},f.a.createElement(g.a,{xs:"12",sm:"12",md:"12",lg:"3",xl:"3"},f.a.createElement(v.a,{className:"filter-select"},f.a.createElement("label",{className:"date-filter-label"},"Filters"),f.a.createElement(y.a,{style:{marginBottom:15},value:a,options:t,getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},placeholder:"Recruiters",onChange:this.handleRecruiterSelect})),f.a.createElement(v.a,{className:"filter-select"},f.a.createElement(y.a,{style:{marginBottom:"1rem"},value:r,options:c,getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},placeholder:"Companies",onChange:this.handleCompanySelect})),f.a.createElement(v.a,{className:"filter-select"},f.a.createElement(y.a,{style:{marginBottom:"1rem"},value:i,options:s,getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.label},placeholder:"Vacancies",onChange:this.handleVacancySelect})),f.a.createElement(v.a,{className:"filter-select"},f.a.createElement(y.a,{style:{marginBottom:"1rem"},isMulti:!0,value:d,options:u,getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},placeholder:"Tags",onChange:this.handleTagsSelect}))),f.a.createElement(g.a,{xs:"12",sm:"12",md:"12",lg:"3",xl:"3"},f.a.createElement(p.a,{style:{marginBottom:"1rem"}},this.renderFunnelChart())),f.a.createElement(g.a,{lg:6,md:6},f.a.createElement(p.a,{style:{marginBottom:"1rem"}},f.a.createElement(g.a,{lg:6,md:6},f.a.createElement(v.a,null,f.a.createElement("label",{className:"date-filter-label"},"Date From"),f.a.createElement(b.a,{id:"date-from",type:"date",name:"selectedStartDate",value:h,onChange:this.handleDate}))),f.a.createElement(g.a,{lg:6,md:6},f.a.createElement(v.a,null,f.a.createElement("label",{className:"date-filter-label"},"Date To"),f.a.createElement(b.a,{id:"date-to",type:"date",name:"selectedEndDate",value:E,onChange:this.handleDate})))),f.a.createElement(p.a,null,f.a.createElement(g.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},this.renderPieChart())))))}}]),a}(h.Component));String.prototype.replaceAll=function(e,t){return this.split(e).join(t)}}}]);
//# sourceMappingURL=53.e88c0be1.chunk.js.map