(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[34],{1057:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var n=a(805),r=a(107),c=a(289),s=a.n(c),l=a(290),i=a(30),o=a(31),u=a(33),d=a(32),m=a(0),f=a.n(m),h=a(504),p=a(505),g=a(419),v=a(300),y=a(323),b=a(385),E=a(303),S=a(358),C=a(426),O=a(802),D=(a(788),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var c;Object(i.a)(this,a),(c=t.call(this,e)).fetchRecruiters=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)();case 2:void 0!==(t=e.sent).staff?(a=t.staff.filter((function(e){return 2===e.role_id})),c.setState({recruiters:a})):void 0!==t.recruiters&&(n=t.recruiters,c.setState({recruiters:n}),c.setState({selectedRecruiter:n[0]}),c.setState({recruitersIsClearable:!1}));case 4:case"end":return e.stop()}}),e)}))),c.fetchCompanies=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.k)(0,1,1);case 2:t=e.sent,a=c.state.selectedRecruiter,n=t.companies.filter((function(e){return e.vacancies>0&&(null!==a&&e.recruiters.indexOf(a.id)+1>0||null===a)})),c.setState({companies:n});case 6:case"end":return e.stop()}}),e)}))),c.fetchVacancies=Object(l.a)(s.a.mark((function e(){var t,a,n,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.state,a=t.selectedCompany,n=t.selectedRecruiter,e.next=3,Object(S.d)(null!==a?a.id:null,!0,!0);case 3:r=e.sent,l=r.vacancies.filter((function(e){return null!==n&&e.recruiters.indexOf(n.id)+1>0||null===n})),c.setState({vacancies:l});case 6:case"end":return e.stop()}}),e)}))),c.fetchTags=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.c)({main:!0});case 2:t=e.sent,c.setState({tags:t}),c.setState({selectedTags:t});case 5:case"end":return e.stop()}}),e)}))),c.fetchCandidatesData=Object(l.a)(s.a.mark((function e(){var t,a,n,r,l,i,o,u,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.state,a=t.selectedRecruiter,n=t.selectedCompany,r=t.selectedVacancy,l=t.selectedStartDate,i=t.selectedEndDate,e.next=3,Object(C.f)(a?a.id:0,n?n.id:0,r?r.id:0,l,i);case 3:void 0!==(o=e.sent)?(u=o.data.main,d=o.data.reject,c.setState({funnelData:u}),c.setState({pieChartData:d})):c.setState({funnelData:null});case 5:case"end":return e.stop()}}),e)}))),c.fetchStatuses=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.k)();case 2:t=e.sent,c.setState({statuses:t}),c.setState({selectedStatuses:t});case 5:case"end":return e.stop()}}),e)}))),c.handleRecruiterSelect=function(e){c.setState({selectedRecruiter:e})},c.handleCompanySelect=function(e){c.setState({selectedCompany:e})},c.handleVacancySelect=function(e){var t=c.state,a=t.selectedCompany,n=t.companies;null!==e&&(a=n.filter((function(t){return t.id===e.company_id}))[0]),c.setState({selectedVacancy:e,selectedCompany:a})},c.handleTagsSelect=function(e){c.setState({selectedTags:e})},c.handleStatusChange=function(e){c.setState({selectedStatuses:e})},c.handleDate=function(e){var t=e.target,a=t.name,n=t.value;c.setState(Object(r.a)({},a,n))},c.renderPieChart=function(){var e=c.state.pieChartData,t=0;if(void 0!==e&&null!==e){for(var a=0,r=Object.entries(e);a<r.length;a++){var s=Object(n.a)(r[a],2);s[0];t+=s[1].count}for(var l=[],i=0,o=Object.entries(e);i<o.length;i++){var u=Object(n.a)(o[i],2),d=(u[0],u[1]);d.count>0&&l.push({category:d.name,value:d.count/t,color:d.color,count:d.count})}return f.a.createElement(O.a,{title:"World Population by Broad Age Groups"},f.a.createElement(O.b,{position:"bottom"}),f.a.createElement(O.c,null,f.a.createElement(O.d,{type:"pie",data:l,field:"value",categoryField:"category",labels:{visible:!0,content:function(e){var t=Number(e.dataItem.value).toLocaleString(void 0,{style:"percent",minimumFractionDigits:2});return"".concat(c.formatLabel(e.dataItem.category)," \n ").concat(e.dataItem.count," -  ").concat(t)}}})))}},c.formatLabel=function(e){var t=new Map;return t.set("closed to offers","closed\nto offers"),t.set("low salary rate","low\nsalary rate"),t.set("was contacted earlier","was contacted\nearlier"),t.set("does not like the project","does not like\nthe project"),t.set("terms don\u2019t fit","terms\ndon\u2019t fit"),t.set("remote only","remote\nonly"),t.set("does not fit","doesn't fit"),t.get(e)},c.renderFunnelChart=function(){var e=c.state,t=e.funnelData,a=e.selectedTags;if(null!==t&&void 0!==t){for(var r=[],s=0,l=0,i=Object.entries(t);l<i.length;l++){var o=Object(n.a)(i[l],2),u=(o[0],o[1]);s+=u.count}for(var d=function(){var e=Object(n.a)(h[m],2),t=e[0],c=e[1];null!==a&&(a.filter((function(e){return e.id===c.id})).length>0&&(0===parseInt(t)&&r.push({stat:c.name,count:s,color:c.color,percentage:100}),t>0&&r.push({stat:c.name+" "+parseFloat(parseInt(c.count)/s*100).toFixed(2)+"%",count:c.count,color:c.color,percentage:parseInt(c.count)/s*100})))},m=0,h=Object.entries(t);m<h.length;m++)d();var p=c.state,g=p.dynamicSlope,v=p.dynamicHeight;return f.a.createElement(O.a,{style:{margin:"25px auto 0",width:300,height:350},className:"pie_chart"},f.a.createElement(O.f,{text:"Acquisition funnel"}),f.a.createElement(O.c,{style:{height:350}},f.a.createElement(O.d,{type:"funnel",data:r,categoryField:"stat",field:"count",colorField:"color",dynamicHeight:v,dynamicSlope:g},f.a.createElement(O.e,{color:"black",background:"none",format:"N0"}))),f.a.createElement(O.g,{render:function(e){var t=e.point;return(void 0===t?{}:t).category}}),f.a.createElement(O.b,{visible:!1}))}};var o=new Date,u=o.getFullYear(),d=o.getMonth(),m=new Date(u,d,2).toJSON().slice(0,10),h=new Date(u,d+1,0).toJSON().slice(0,10);return c.state={recruiters:[],companies:[],vacancies:[],tags:[],selectedRecruiter:null,selectedCompany:null,selectedVacancy:null,selectedTags:null,selectedStartDate:m,selectedEndDate:h,recruitersIsClearable:!0,funnelData:null,pieChartData:null,dynamicSlope:!0,dynamicHeight:!1},c}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchRecruiters(),this.fetchCompanies(),this.fetchVacancies(),this.fetchTags(),this.fetchCandidatesData(),this.fetchStatuses()}},{key:"componentDidUpdate",value:function(e,t){this.state.selectedRecruiter===t.selectedRecruiter&&this.state.selectedCompany===t.selectedCompany&&this.state.selectedVacancy===t.selectedVacancy&&this.state.selectedTags===t.selectedTags&&this.state.selectedStartDate===t.selectedStartDate&&this.state.selectedEndDate===t.selectedEndDate||this.fetchCandidatesData(),this.state.selectedRecruiter!==t.selectedRecruiter&&(this.fetchCompanies(),this.fetchVacancies()),this.state.selectedCompany!==t.selectedCompany&&this.fetchVacancies()}},{key:"render",value:function(){var e=this.state,t=e.recruiters,a=e.selectedRecruiter,n=e.recruitersIsClearable,r=this.state,c=r.companies,s=r.selectedCompany,l=this.state,i=l.vacancies,o=l.selectedVacancy,u=this.state,d=u.tags,m=u.selectedTags,b=this.state,E=b.selectedStartDate,S=b.selectedEndDate;return f.a.createElement(f.a.Fragment,null,f.a.createElement(h.a,{style:{marginBottom:"1rem"}},f.a.createElement(p.a,null,f.a.createElement("h1",{style:{marginBottom:0,fontSize:24}},"Acquisition funnel"))),f.a.createElement(h.a,{style:{marginBottom:"1rem"}},f.a.createElement(p.a,{xs:"12",sm:"12",md:"12",lg:"3",xl:"3"},f.a.createElement(g.a,{className:"filter-select"},f.a.createElement("label",{className:"date-filter-label"},"Filters"),f.a.createElement(y.a,{style:{marginBottom:15},value:a,options:t,isClearable:n,getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},placeholder:"Recruiters",onChange:this.handleRecruiterSelect})),f.a.createElement(g.a,{className:"filter-select"},f.a.createElement(y.a,{style:{marginBottom:"1rem"},value:s,options:c,isClearable:!0,getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},placeholder:"Companies",onChange:this.handleCompanySelect})),f.a.createElement(g.a,{className:"filter-select"},f.a.createElement(y.a,{style:{marginBottom:"1rem"},value:o,options:i,isClearable:!0,getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.label},placeholder:"Vacancies",onChange:this.handleVacancySelect})),f.a.createElement(g.a,{className:"filter-select"},f.a.createElement(y.a,{style:{marginBottom:"1rem"},isMulti:!0,value:m,options:d,isClearable:!0,getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},placeholder:"Tags",onChange:this.handleTagsSelect}))),f.a.createElement(p.a,{xs:"12",sm:"12",md:"12",lg:"3",xl:"3"},f.a.createElement(h.a,{style:{marginBottom:"1rem"}},this.renderFunnelChart())),f.a.createElement(p.a,{lg:6,md:6},f.a.createElement(h.a,{style:{marginBottom:"1rem"}},f.a.createElement(p.a,{lg:6,md:6},f.a.createElement(g.a,null,f.a.createElement("label",{className:"date-filter-label"},"Date From"),f.a.createElement(v.a,{id:"date-from",type:"date",name:"selectedStartDate",value:E,onChange:this.handleDate}))),f.a.createElement(p.a,{lg:6,md:6},f.a.createElement(g.a,null,f.a.createElement("label",{className:"date-filter-label"},"Date To"),f.a.createElement(v.a,{id:"date-to",type:"date",name:"selectedEndDate",value:S,onChange:this.handleDate})))),f.a.createElement(h.a,null,f.a.createElement(p.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},this.renderPieChart())))))}}]),a}(m.Component));String.prototype.replaceAll=function(e,t){return this.split(e).join(t)}}}]);
//# sourceMappingURL=34.5e1fbc14.chunk.js.map