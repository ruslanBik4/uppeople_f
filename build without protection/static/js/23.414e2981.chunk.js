(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[23],{1080:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return R}));var n=t(107),r=t(30),o=t(31),c=t(33),s=t(32),l=t(0),i=t.n(l),u=t(507),d=t(508),p=t(308),m=t(340),f=t(392),h=t(319),b=t(422),v=t(494),g=t(298),y=t(313),E=t(309),j=t(439),O=t(428),N=t(493),k=t(356),T=t.n(k),w=function(e){var a=e.avatar,t=e.name,n=e.phone,r=e.email,o=e.onAvatarSelect,c=e.onAvatarUpload;return i.a.createElement(p.a,null,i.a.createElement(E.a,{style:{textAlign:"center"}},i.a.createElement("div",{style:{marginBottom:"1rem"}},i.a.createElement(j.a,{top:!0,style:{width:150,height:150},src:null!==a?a:T.a,alt:"avatar"})),i.a.createElement(f.a,{style:{marginBottom:"1rem",fontSize:"1rem"}},t),i.a.createElement(g.a,{type:"file",style:{marginBottom:"1rem"},onChange:o}),i.a.createElement(y.a,{color:"success",style:{marginBottom:"1rem"},onClick:c},"Upload avatar"),i.a.createElement(O.a,null,n&&i.a.createElement(N.a,null,"Phone: ",i.a.createElement("a",{href:"tel:".concat(n)},n)),r&&i.a.createElement(N.a,null,"Email:"," ",i.a.createElement("a",{href:"mailto:".concat(r),target:"_top"},r)))))};w.defaultProps={avatar:"",phone:"",email:"",onAvatarSelect:function(){return null},onAvatarUpload:function(){return null}};var A=w,M=t(667),C=t(337),x=(t(843),[{value:1,role:"Admin"},{value:2,role:"Recruiter"},{value:3,role:"Manager"},{value:4,role:"Freelancer"},{value:5,role:"Partners"}]),R=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={id:null,avatar:null,name:"",password:"",email:"",phone:"",role:""},e.handleAvatarSelected=function(a){var t=a.target.files[0];Object(C.a)(t,(function(a){e.setState({avatar:a})}))},e.handleAvatarUpload=function(){var a=e.props.match.params.id,t=e.state.avatar;Object(M.e)(a,t).then((function(e){return console.log(e)}))},e.handleInputChange=function(a){var t=a.target,r=t.name,o=t.value;return e.setState(Object(n.a)({},r,o))},e.handleSelectChange=function(a){var t=a.currentTarget.value;e.setState({role:t})},e.handleSubmit=function(a){a.preventDefault();var t=e.state;Object(M.d)(t)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;console.log("MY USER id",a),Object(M.c)({id:a}).then((function(a){console.log("MY USER",a),e.setState({id:a.id,avatar:a.avatar,name:null!==a.name?a.name:"",email:null!==a.email?a.email:"",phone:null!==a.phone?a.phone:"",role:a.role})}))}},{key:"render",value:function(){var e=this.state,a=e.avatar,t=e.name,n=e.password,r=e.email,o=e.phone,c=e.role,s=x.map((function(e){return i.a.createElement("option",{key:"".concat(e.value,"-").concat(e.role),value:e.value},e.role)}));return i.a.createElement("div",null,i.a.createElement("h1",null,"User Profile"),i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:3},i.a.createElement(A,{avatar:a,name:t,email:r,phone:o,onAvatarSelect:this.handleAvatarSelected,onAvatarUpload:this.handleAvatarUpload})),i.a.createElement(d.a,{lg:9},i.a.createElement(p.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,{className:"card-title"},"Settings")),i.a.createElement(h.a,{style:{padding:20},onSubmit:this.handleSubmit},i.a.createElement(b.a,{row:!0},i.a.createElement(v.a,{for:"name",sm:3},"Name"),i.a.createElement(d.a,{sm:9},i.a.createElement(g.a,{id:"name",name:"name",value:t,type:"text",placeholder:"Name",onChange:this.handleInputChange}),i.a.createElement("i",{className:"fa fa-user-o"}))),i.a.createElement(b.a,{row:!0},i.a.createElement(v.a,{for:"password",sm:3},"Password"),i.a.createElement(d.a,{sm:9},i.a.createElement(g.a,{id:"password",type:"password",name:"password",value:n,placeholder:"Password",onChange:this.handleInputChange}),i.a.createElement("i",{className:"fa fa-lock"}))),i.a.createElement(b.a,{row:!0},i.a.createElement(v.a,{for:"email",sm:3},"Email"),i.a.createElement(d.a,{sm:9},i.a.createElement(g.a,{id:"email",type:"email",name:"email",value:r,placeholder:"Email",onChange:this.handleInputChange}),i.a.createElement("i",{className:"fa fa-envelope-o"}))),i.a.createElement(b.a,{row:!0},i.a.createElement(v.a,{for:"phone",sm:3},"Phone"),i.a.createElement(d.a,{sm:9},i.a.createElement(g.a,{id:"phone",type:"tel",name:"phone",value:o,placeholder:"Phone",onChange:this.handleInputChange}),i.a.createElement("i",{className:"fa fa-phone"}))),i.a.createElement(b.a,{row:!0},i.a.createElement(v.a,{for:"role_id",sm:3},"Role"),i.a.createElement(d.a,{sm:9},i.a.createElement(g.a,{id:"role_id",type:"select",value:c,onChange:this.handleSelectChange},s))),i.a.createElement(b.a,{check:!0,row:!0},i.a.createElement(d.a,null,i.a.createElement(y.a,{type:"submit",color:"primary",className:"pull-right"},"Update"))))))))}}]),t}(l.Component)},298:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(283),c=t(282),s=t(0),l=t.n(s),i=t(1),u=t.n(i),d=t(105),p=t.n(d),m=t(51),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,c=e.bsSize,s=e.valid,i=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,h=e.innerRef,b=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(o)>-1,g=new RegExp("\\D","g"),y=u||("select"===o||"textarea"===o?o:"input"),E="form-control";f?(E+="-plaintext",y=u||"input"):"file"===o?E+="-file":"range"===o?E+="-range":v&&(E=d?null:"form-check-input"),b.size&&g.test(b.size)&&(Object(m.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var j=Object(m.k)(p()(a,i&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,E),t);return("input"===y||u&&"function"===typeof u)&&(b.type=o),b.children&&!f&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(m.r)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),l.a.createElement(y,Object(n.a)({},b,{ref:h,className:j,"aria-invalid":i}))},a}(l.a.Component);h.propTypes=f,h.defaultProps={type:"text"},a.a=h},308:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(0),c=t.n(o),s=t(1),l=t.n(s),i=t(105),u=t.n(i),d=t(51),p={tag:d.o,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,o=e.color,s=e.body,l=e.inverse,i=e.outline,p=e.tag,m=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(d.k)(u()(a,"card",!!l&&"text-white",!!s&&"card-body",!!o&&(i?"border":"bg")+"-"+o),t);return c.a.createElement(p,Object(n.a)({},f,{className:h,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},309:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(0),c=t.n(o),s=t(1),l=t.n(s),i=t(105),u=t.n(i),d=t(51),p={tag:d.o,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,s=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.k)(u()(a,"card-body"),t);return c.a.createElement(s,Object(n.a)({},l,{className:i,ref:o}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},313:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(283),c=t(282),s=t(0),l=t.n(s),i=t(1),u=t.n(i),d=t(105),p=t.n(d),m=t(51),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,c=e.className,s=e.close,i=e.cssModule,u=e.color,d=e.outline,f=e.size,h=e.tag,b=e.innerRef,v=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof v.children&&(v.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(d?"-outline":"")+"-"+u,y=Object(m.k)(p()(c,{close:s},s||"btn",s||g,!!f&&"btn-"+f,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);v.href&&"button"===h&&(h="a");var E=s?"Close":null;return l.a.createElement(h,Object(n.a)({type:"button"===h&&v.onClick?"button":void 0},v,{className:y,ref:b,onClick:this.onClick,"aria-label":t||E}))},a}(l.a.Component);h.propTypes=f,h.defaultProps={color:"secondary",tag:"button"},a.a=h},319:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(283),c=t(282),s=t(0),l=t.n(s),i=t(1),u=t.n(i),d=t(105),p=t.n(d),m=t(51),f={children:u.a.node,inline:u.a.bool,tag:m.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,c=e.tag,s=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.k)(p()(a,!!o&&"form-inline"),t);return l.a.createElement(c,Object(n.a)({},i,{ref:s,className:u}))},a}(s.Component);h.propTypes=f,h.defaultProps={tag:"form"},a.a=h},337:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return c})),t.d(a,"d",(function(){return s})),t.d(a,"e",(function(){return l}));var n=t(348),r=function(e){for(var a in e)if(e.hasOwnProperty(a))return!1;return!0},o=function(e,a){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){a(t.result)},t.onerror=function(e){console.log("Error: ",e)}},c=function(e,a){return e.reduce((function(e,t){return{data:t[a]?e.data.concat(t[a]):e.data.concat(0),label:a}}),{data:[],label:a})},s=function(e,a,t,n){var r=t[e],o={labels:n,datasets:[{backgroundColor:"transparent",borderColor:a||"#c2cfd6",data:r.data,label:r.label}]};return function(){return o}},l={tooltips:{enabled:!1,custom:n.CustomTooltips},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}}},340:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(0),c=t.n(o),s=t(1),l=t.n(s),i=t(105),u=t.n(i),d=t(51),p={tag:d.o,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.k)(u()(a,"card-header"),t);return c.a.createElement(o,Object(n.a)({},s,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},348:function(e,a,t){!function(e){"use strict";function a(e){var a=this,t="above",n="below",r="chartjs-tooltip",o="no-transform",c="tooltip-body",s="tooltip-body-item",l="tooltip-body-item-color",i="tooltip-body-item-label",u="tooltip-body-item-value",d="tooltip-header",p="tooltip-header-item",m={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},t="_canvas-"+(e()+e());return a._chart.canvas.id=t,t}())+"-tooltip"},f=document.getElementById(m.TOOLTIP);if(f||((f=document.createElement("div")).id=m.TOOLTIP,f.className=r,this._chart.canvas.parentNode.appendChild(f)),0!==e.opacity){if(f.classList.remove(t,n,o),e.yAlign?f.classList.add(e.yAlign):f.classList.add(o),e.body){var h=e.title||[],b=document.createElement(m.DIV);b.className=d,h.forEach((function(e){var a=document.createElement(m.DIV);a.className=p,a.innerHTML=e,b.appendChild(a)}));var v=document.createElement(m.DIV);v.className=c,e.body.map((function(e){return e.lines})).forEach((function(a,t){var n=document.createElement(m.DIV);n.className=s;var r=e.labelColors[t],o=document.createElement(m.SPAN);if(o.className=l,o.style.backgroundColor=r.backgroundColor,n.appendChild(o),a[0].split(":").length>1){var c=document.createElement(m.SPAN);c.className=i,c.innerHTML=a[0].split(": ")[0],n.appendChild(c);var d=document.createElement(m.SPAN);d.className=u,d.innerHTML=a[0].split(": ").pop(),n.appendChild(d)}else{var p=document.createElement(m.SPAN);p.className=u,p.innerHTML=a[0],n.appendChild(p)}v.appendChild(n)})),f.innerHTML="",f.appendChild(b),f.appendChild(v)}var g=this._chart.canvas.getBoundingClientRect(),y=this._chart.canvas.offsetTop,E=this._chart.canvas.offsetLeft+e.caretX,j=y+e.caretY,O=e.width/2;E+O>g.width?E-=O:E<O&&(E+=O),f.style.opacity=1,f.style.left=E+"px",f.style.top=j+"px"}else f.style.opacity=0}var t=a;e.CustomTooltips=a,e.customTooltips=t,Object.defineProperty(e,"__esModule",{value:!0})}(a)},356:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEW1tbW4uLi8vLzGxsbS0tLc3Nzs7Oz4+Pj////b1d6+AAADDUlEQVRo3u3aTW8TQQwG4Hfox3lcSrmmIiHXConSY4hAzbGkVM2R0gM5hxbtvd1MfzYHKshmxzO2dwNF2vkBj3a8Hu/YCR7aW+iszuqs/8n6cfH5w8eLby1Yt+NDAMBe/7KhFc57oF8L7m3RxApjOPq9sD+3W8v3KxIR+edzqxU+VSkiv18Yrek6ReQHNusGVF84tVjhiGLr2dxgfXVRy7/WW8sexZebqa0rx1j+hdZiH4vIzZXWwrEWGzGoXuLjqyxUVukSlp+orCtKrR2NFXpJa69QWMktspuMWwtKrwOFNcpYW3IrEy4imoutTLi4gEGZ9I/rpdg6y1HxDIMl9ERbhdAKh1mLpNYyGy7yM6FVCqyJ0LoTWEOhlU8JojatXaH1JU9FEwymVH261nZnbST2bebXVYvWQmAdtHcexXWizZrTZi1ss0bnP9vyb0eb3zRBgu20eAcY/pO7ST74hfwud2aoOOwd0xmuTH/h7ptsO9jGw9QrHLTYw8x0fdpIe4CMPd9Q2T8m0pVr+fgemX0wvnlnLfbB+KECP1P47nTRSs46RqqXmJ7BlD42BLi0zYau6wMdf2ydf9UGTX5gnVk9hOmalaTS1u2bNevVpdEK5762x+T8MZET0+gsbWDIiTBGNL/QL7RWGLPnsa8822GaqDkDXf26RqIW4lhj3fpkvWcOEgyfIe6AQziklYxso3dMZO9MEN4Lw0hwJ98uRNaNoEUmfyqxsoFnww9pna892Lu8JXys2IPBFK14xKC/j7OXQ+j7F/a6A0PvyF3DoG9f2EvKmnXvFNb6tRX6tp3tZGDfYm2TsG+xtkmY32L9TcJ0fuLnCMZEjaUrtMO9qnXCWmekXbusdaS2tjhrSfo1Z6x7p6YqGQblTCjVxKNR6KtHEo1CXw3+ihUMFLkiapXOYK1mPlRjr3Tmo9lrrLxI2AtOreygWUpUkgKWryzzxYW9ENbKIVS/CqV/10SjKlGtFH+s0mjNYpYzUX7T1r3RmmzYujNaJzELthWzygvbmsn/g6RYndVZnfV0rJ/xkS0+gAgoxQAAAABJRU5ErkJggg=="},392:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(0),c=t.n(o),s=t(1),l=t.n(s),i=t(105),u=t.n(i),d=t(51),p={tag:d.o,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.k)(u()(a,"card-title"),t);return c.a.createElement(o,Object(n.a)({},s,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},422:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(0),c=t.n(o),s=t(1),l=t.n(s),i=t(105),u=t.n(i),d=t(51),p={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.o,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.row,s=e.disabled,l=e.check,i=e.inline,p=e.tag,m=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(d.k)(u()(a,!!o&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!s)&&"disabled"),t);return"fieldset"===p&&(m.disabled=s),c.a.createElement(p,Object(n.a)({},m,{className:f}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},428:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(0),c=t.n(o),s=t(1),l=t.n(s),i=t(105),u=t.n(i),d=t(51),p={tag:d.o,flush:l.a.bool,className:l.a.string,cssModule:l.a.object,horizontal:l.a.oneOfType([l.a.bool,l.a.string])},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=e.flush,l=e.horizontal,i=Object(r.a)(e,["className","cssModule","tag","flush","horizontal"]),p=Object(d.k)(u()(a,"list-group",s?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(l)),t);return c.a.createElement(o,Object(n.a)({},i,{className:p}))};m.propTypes=p,m.defaultProps={tag:"ul",horizontal:!1},a.a=m},439:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(0),c=t.n(o),s=t(1),l=t.n(s),i=t(105),u=t.n(i),d=t(51),p={tag:d.o,top:l.a.bool,bottom:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.top,s=e.bottom,l=e.tag,i=Object(r.a)(e,["className","cssModule","top","bottom","tag"]),p="card-img";o&&(p="card-img-top"),s&&(p="card-img-bottom");var m=Object(d.k)(u()(a,p),t);return c.a.createElement(l,Object(n.a)({},i,{className:m}))};m.propTypes=p,m.defaultProps={tag:"img"},a.a=m},493:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(0),c=t.n(o),s=t(1),l=t.n(s),i=t(105),u=t.n(i),d=t(51),p={tag:d.o,active:l.a.bool,disabled:l.a.bool,color:l.a.string,action:l.a.bool,className:l.a.any,cssModule:l.a.object},m=function(e){e.preventDefault()},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=e.active,l=e.disabled,i=e.action,p=e.color,f=Object(r.a)(e,["className","cssModule","tag","active","disabled","action","color"]),h=Object(d.k)(u()(a,!!s&&"active",!!l&&"disabled",!!i&&"list-group-item-action",!!p&&"list-group-item-"+p,"list-group-item"),t);return l&&(f.onClick=m),c.a.createElement(o,Object(n.a)({},f,{className:h}))};f.propTypes=p,f.defaultProps={tag:"li"},a.a=f},494:function(e,a,t){"use strict";var n=t(24),r=t(106),o=t(0),c=t.n(o),s=t(1),l=t.n(s),i=t(105),u=t.n(i),d=t(51),p=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),f={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.o,className:l.a.string,cssModule:l.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:l.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,o=e.hidden,s=e.widths,l=e.tag,i=e.check,p=e.size,m=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];s.forEach((function(a,n){var r=e[a];if(delete f[a],r||""===r){var o,c=!n;if(Object(d.i)(r)){var s,l=c?"-":"-"+a+"-";o=b(c,a,r.size),h.push(Object(d.k)(u()(((s={})[o]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s))),t)}else o=b(c,a,r),h.push(o)}}));var v=Object(d.k)(u()(a,!!o&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return c.a.createElement(l,Object(n.a)({htmlFor:m},f,{className:v}))};v.propTypes=f,v.defaultProps=h,a.a=v},667:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"a",(function(){return i})),t.d(a,"d",(function(){return u})),t.d(a,"b",(function(){return d})),t.d(a,"e",(function(){return p}));var n=t(288),r=t.n(n),o=t(289),c="http://f2.uppeople.space/api",s=function(){return localStorage.getItem("token")},l=function(e){var a=s();return fetch("".concat(c,"/admin/view-editUser"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){return console.log("fetched user data",e),{id:e.id,name:e.name,avatar:e.image,email:e.email,phone:e.tel,role:e.role_id}})).catch((function(e){return console.log("error in fetch: ",e)}))},i=function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s(),e.prev=1,e.next=4,fetch("".concat(c,"/signup/signup"),{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/editUser"),{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),d=function(e){var a=s();return fetch("".concat(c,"/admin/deleteUser/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){return{staff:e.users,partners:e.partners,freelancers:e.freeLancers}})).catch((function(e){return console.log("error in fetch: ",e)}))},p=function(){var e=Object(o.a)(r.a.mark((function e(a,t){var n,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s(),o={avatar:t},e.prev=2,e.next=5,fetch("".concat(c,"/admin/addAvatarUser/").concat(a),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:if(!(l=e.sent).ok){e.next=8;break}return e.abrupt("return",l.json());case 8:throw new Error("".concat(l.statusText));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(a,t){return e.apply(this,arguments)}}()},843:function(e,a,t){}}]);
//# sourceMappingURL=23.414e2981.chunk.js.map