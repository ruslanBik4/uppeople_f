(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[49],{1052:function(e,t,r){"use strict";r.r(t);var a=r(30),n=r(31),o=r(33),A=r(32),f=r(0),l=r.n(f),c=r(1051),s=r(1047),u=r(1048),P=r(816),d=r(1080),i=r(1081),p=r(1053),v=r(707),w=(r(830),r(831)),h=r.n(w),B=function(e){Object(o.a)(r,e);var t=Object(A.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,o=new Array(n),A=0;A<n;A++)o[A]=arguments[A];return(e=t.call.apply(t,[this].concat(o))).state={dropdownOpen:!1},e.toggle=function(){e.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))},e.redirectToHomePage=function(){var t=e.props,r=t.companyId,a=t.history;switch(e.props.userRole){case 2:return a.push("/dashboardrecruiter");case 4:return a.push("/candidates");case 5:return a.push("/companies/".concat(r));default:a.push("/dashboard")}},e}return Object(n.a)(r,[{key:"render",value:function(){var e=this,t=this.props.user,r=(t.avatar,t.email),a=t.userRole;return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.l,{className:"d-lg-none",display:"md",mobile:!0}),l.a.createElement(v.e,{onClick:this.redirectToHomePage,style:{color:"var(--white)",cursor:"pointer"}},l.a.createElement("span",{style:{fontWeight:"bold"}},"UP"),"People"),l.a.createElement(v.l,{className:"d-md-down-none",display:"lg"}),1===a&&l.a.createElement(c.a,{className:"d-md-down-none",navbar:!0},l.a.createElement(s.a,{className:"px-3"},l.a.createElement(u.a,{style:{color:"var(--white)"},href:"/"},"Dashboard"))),l.a.createElement(c.a,{className:"ml-auto",navbar:!0},l.a.createElement("h6",{style:{marginBottom:0,marginRight:50}},r),l.a.createElement(v.d,{direction:"down"},l.a.createElement(P.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle},l.a.createElement(d.a,{nav:!0},l.a.createElement("img",{src:h.a,className:"header_logo",alt:"company_logo"}),l.a.createElement("span",{className:"logo_text"},"UPPeople")),l.a.createElement(i.a,{right:!0,style:{right:"auto"}},l.a.createElement(p.a,{header:!0,tag:"div",className:"text-center"},l.a.createElement("strong",null,"Account")),l.a.createElement(p.a,{onClick:function(){return e.props.history.push("/email/inbox")}},l.a.createElement("i",{className:"fa fa-envelope-o"})," Messages"),l.a.createElement(p.a,{onClick:function(t){return e.props.onLogout(t)}},l.a.createElement("i",{className:"fa fa-lock"})," Logout"))))))}}]),r}(f.Component);B.defaultProps={children:[],onLogout:function(){return null}},t.default=B},320:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},r.apply(this,arguments)}e.exports=r},830:function(e,t,r){},831:function(e,t){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=49.e84a9926.chunk.js.map