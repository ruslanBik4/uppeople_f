(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[31],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(42),a=n(30),r=n(31),c=n(33),l=n(32),u=n(0),i=n.n(u),s="http://f2.uppeople.space/api",m=function(e){return fetch("".concat(s,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return console.log(e),e.ok?e.json():"".concat(e.statusText)})).then((function(e){return console.log(e),e})).catch((function(e){return console.log("[userSignIn error]: ",e)}))},d=function(e){return console.log(e),fetch("".concat(s,"/signup/logout"),{method:"GET",headers:{Authorization:"Bearer "+e}}).then((function(e){return e.ok?e.json():"".concat(e.statusText)})).then((function(e){return e})).catch((function(e){return console.log(e)}))},p=Object(u.createContext)({user:{id:null,role:null,companyId:null,name:"",email:"",avatar:"",phone:""},authorized:!1,authError:null,token:null,signIn:function(){return null},signOut:function(){return null}}),h={user:{id:null,role:null,companyId:null,name:"",email:"",avatar:"",phone:""},authorized:!1,authError:null,token:null},f=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state=Object(o.a)({},h),e.signIn=function(t){m(t).then((function(t){if("Unauthorized"!==t&&void 0!==t.access_token){localStorage.setItem("token",t.access_token);var n={id:t.user.id,name:t.user.name,email:t.user.email,avatar:t.user.image,phone:t.user.tel,role:t.user.role_id,companyId:t.user.company_id};localStorage.setItem("user",JSON.stringify(n)),e.setState({user:n,authorized:!0,authError:null,token:t.access_token})}else e.setState({authError:t},(function(){return console.log(e.state.authError)}))}))},e.signOut=function(){var t=localStorage.getItem("token");d(t),localStorage.removeItem("user"),localStorage.removeItem("token"),e.resetState()},e.resetState=function(){e.setState(Object(o.a)({},h))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=Object(o.a)(Object(o.a)({},this.state),{},{signIn:this.signIn,signOut:this.signOut});return i.a.createElement(p.Provider,{value:e},this.props.children)}}]),n}(u.Component);f.Consumer=p.Consumer},164:function(e,t,n){"use strict";(function(e){var o=n(30),a=n(31),r=n(33),c=n(32),l=n(0),u=n.n(l),i=n(272),s=n(273),m=n(50),d=n(165),p=n(41),h=n.n(p),f=n(271),g=n(70),b=(n(267),function(){return u.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},u.a.createElement(f.a,{color:"info",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}))}),v=h()({loader:function(){return Promise.all([n.e(34),n.e(45)]).then(n.bind(null,279))},loading:b}),E=h()({loader:function(){return n.e(37).then(n.bind(null,280))},loading:b}),O=h()({loader:function(){return n.e(39).then(n.bind(null,276))},loading:b}),j=h()({loader:function(){return n.e(41).then(n.bind(null,277))},loading:b}),w=h()({loader:function(){return n.e(42).then(n.bind(null,278))},loading:b}),y=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return u.a.createElement(i.a,null,u.a.createElement(s.a,null,u.a.createElement(m.a,{exact:!0,path:"/login",name:"Login Page",render:function(e){return u.a.createElement(E,e)}}),u.a.createElement(m.a,{exact:!0,path:"/register",name:"Register Page",component:O}),u.a.createElement(m.a,{exact:!0,path:"/404",name:"Page 404",component:j}),u.a.createElement(m.a,{exact:!0,path:"/500",name:"Page 500",component:w}),u.a.createElement(g.c,null,u.a.createElement(g.b,null),u.a.createElement(m.a,{path:"/",name:"Home",render:function(e){return u.a.createElement(v,e)}}))))}}]),n}(l.Component);t.a=Object(d.hot)(e)(y)}).call(this,n(266)(e))},172:function(e,t,n){e.exports=n(270)},267:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);n(173),n(202),n(203),n(232),n(236),n(238),n(249);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var o=n(0),a=n.n(o),r=n(34),c=n.n(r),l=n(155),u=n(163),i=n(110),s=n(164);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||"uppeople.local"===window.location.hostname||"api.uppeople.local"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(i.b,null,a.a.createElement(l.a,Object.assign({template:u.a},{position:"bottom center",timeout:5e3,offset:"30px",transition:"scale"}),a.a.createElement(s.a,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return d}));var o=n(30),a=n(31),r=n(33),c=n(32),l=n(0),u=n.n(l),i=Object(l.createContext)({component:null,props:{},showModal:function(){},hideModal:function(){}}),s=i.Consumer,m=function(){return u.a.createElement(s,null,(function(e){var t=e.component,n=e.props,o=e.hideModal;return t&&u.a.createElement(t,Object.assign({},n,{onRequestClose:o}))}))},d=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).showModal=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.setState({component:t,props:n})},e.hideModal=function(){return e.setState({component:null,props:{}})},e.state={component:null,props:{},showModal:e.showModal,hideModal:e.hideModal},e}return Object(a.a)(n,[{key:"render",value:function(){return u.a.createElement(i.Provider,{value:this.state},this.props.children)}}]),n}(l.Component)}},[[172,32,33]]]);
//# sourceMappingURL=main.65b5b645.chunk.js.map