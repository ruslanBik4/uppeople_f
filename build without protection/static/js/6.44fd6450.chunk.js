(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[6],{299:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}n.d(t,"a",(function(){return r}))},310:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(105),u=n.n(l),d=n(51),p={tag:d.o,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},f=function(e){var t=e.className,n=e.cssModule,o=e.color,c=e.body,s=e.inverse,l=e.outline,p=e.tag,f=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(d.k)(u()(t,"card",!!s&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),n);return i.a.createElement(p,Object(a.a)({},m,{className:h,ref:f}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},311:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(105),u=n.n(l),d=n(51),p={tag:d.o,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},f=function(e){var t=e.className,n=e.cssModule,o=e.innerRef,c=e.tag,s=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.k)(u()(t,"card-body"),n);return i.a.createElement(c,Object(a.a)({},s,{className:l,ref:o}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},319:function(e,t,n){window,e.exports=function(e,t){return r={},n.m=a=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=function(e,t,n){var a,o=e.textContent;return""===o.trim()?{chunk:(a=n,{text:" ",inlines:[new r.OrderedSet],entities:[a],blocks:[]})}:{chunk:{text:o,inlines:Array(o.length).fill(t),entities:Array(o.length).fill(n),blocks:[]}}},i=function(){return{text:"\n",inlines:[new r.OrderedSet],entities:new Array(1),blocks:[]}},c=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new r.Map({})}]}},s=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new r.Map({})}]}},l=function(e){return{text:"\r ",inlines:[new r.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new r.Map({})}]}},u=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},d=new r.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),p={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function f(e){return e.style.textAlign?new r.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new r.Map({"margin-left":e.style.marginLeft}):void 0}var m=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,a.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,a.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return v}));var h=new RegExp("&nbsp;","g"),b=!0;function g(e,t,n,r,h,v){var y=e.nodeName.toLowerCase();if(v){var E=v(y,e);if(E){var O=a.Entity.__create(E.type,E.mutability,E.data||{});return{chunk:l(O)}}}if("#text"===y&&"\n"!==e.textContent)return o(e,t,h);if("br"===y)return{chunk:i()};if("img"===y&&e instanceof HTMLImageElement){var j={};j.src=e.getAttribute&&e.getAttribute("src")||e.src,j.alt=e.alt,j.height=e.style.height,j.width=e.style.width,e.style.float&&(j.alignment=e.style.float);var w=a.Entity.__create("IMAGE","MUTABLE",j);return{chunk:l(w)}}if("video"===y&&e instanceof HTMLVideoElement){var k={};k.src=e.getAttribute&&e.getAttribute("src")||e.src,k.alt=e.alt,k.height=e.style.height,k.width=e.style.width,e.style.float&&(k.alignment=e.style.float);var x=a.Entity.__create("VIDEO","MUTABLE",k);return{chunk:l(x)}}if("iframe"===y&&e instanceof HTMLIFrameElement){var T={};T.src=e.getAttribute&&e.getAttribute("src")||e.src,T.height=e.height,T.width=e.width;var M=a.Entity.__create("EMBEDDED_LINK","MUTABLE",T);return{chunk:l(M)}}var C,S=function(e,t){var n=d.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(y,r);S&&("ul"===y||"ol"===y?(r=y,n+=1):("unordered-list-item"!==S&&"ordered-list-item"!==S&&(r="",n=-1),b?(C=c(S,f(e)),b=!1):C=s(S,n,f(e)))),C=C||{text:"",inlines:[],entities:[],blocks:[]},t=function(e,t,n){var a,r=p[e];if(r)a=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){var o=t;a=(a=n).withMutations((function(e){var t=o.style.color,n=o.style.backgroundColor,a=o.style.fontSize,r=o.style.fontFamily.replace(/^"|"$/g,""),i=o.style.fontWeight,c=o.style.textDecoration,s=o.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),a&&e.add("fontsize-".concat(a.replace(/px$/g,""))),r&&e.add("fontfamily-".concat(r)),"bold"===i&&e.add(p.strong),"underline"===c&&e.add(p.ins),"italic"===s&&e.add(p.em)})).toOrderedSet()}return a}(y,e,t);for(var N=e.firstChild;N;){var A=g(N,t,n,r,m(N)||h,v).chunk;C=u(C,A),N=N.nextSibling}return{chunk:C}}function v(e,t){var n,o,i=(n=t,(o=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n}(e.trim().replace(h," ")))?(b=!0,{chunk:g(o,new r.OrderedSet,-1,"",void 0,n).chunk}):null);if(i){var c=i.chunk,s=new r.OrderedMap({});c.entities&&c.entities.forEach((function(e){e&&(s=s.set(e,a.Entity.__get(e)))}));var l=0;return{contentBlocks:c.text.split("\r").map((function(e,t){var n=l+e.length,o=c&&c.inlines.slice(l,n),i=c&&c.entities.slice(l,n),s=new r.List(o.map((function(e,t){var n={style:e,entity:null};return i[t]&&(n.entity=i[t]),a.CharacterMetadata.create(n)})));return l=n,new a.ContentBlock({key:Object(a.genKey)(),type:c&&c.blocks[t]&&c.blocks[t].type||"unstyled",depth:c&&c.blocks[t]&&c.blocks[t].depth,data:c&&c.blocks[t]&&c.blocks[t].data||new r.Map({}),text:e,characterList:s})})),entityMap:s}}return null}}],n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var a,r}(n(285),n(303))},343:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(105),u=n.n(l),d=n(51),p={tag:d.o,className:s.a.string,cssModule:s.a.object},f=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),s=Object(d.k)(u()(t,"card-header"),n);return i.a.createElement(o,Object(a.a)({},c,{className:s}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},348:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return f}));var a=n(289),r=n.n(a),o=n(290),i="http://f2.uppeople.space/api",c=function(){return localStorage.getItem("token")},s=function(e){var t=c();return fetch("".concat(i,"/main/viewVacancy/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){var t=e[0];return{id:t.id,date:t.date_create,company:t.company,platform:t.platforms,seniority:t.seniorities,status:t.status,location:t.location,salary:t.salary,link:t.link,description:t.opus,details:t.details}})).catch((function(e){return console.log("error in fetch: ",e)}))},l=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),e.prev=1,e.next=4,fetch("".concat(i,"/main/addNewVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e,t){var n=c();return fetch("".concat(i,"/main/editVacancy/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){var t=e[0];return console.log("vacancy response",e),{id:t.id,date:t.date_create,company:t.company,platform:t.platforms,seniority:t.seniorities,status:t.status,location:t.location,salary:t.salary,link:t.link,description:t.opus,details:t.details}})).catch((function(e){return console.log("error in fetch: ",e)}))},d=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),e.prev=1,e.next=4,fetch("".concat(i,"/main/deleteVacancy/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),e.prev=1,console.log(n),e.next=5,fetch("".concat(i,"/main/returnAllVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify({company_id:t})});case 5:if(!(a=e.sent).ok){e.next=8;break}return e.abrupt("return",a.json());case 8:throw new Error("".concat(a.statusText));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),e.prev=1,e.next=4,fetch("".concat(i,"/main/getTags"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},349:function(e,t,n){"use strict";var a,r=n(30),o=n(31),i=n(33),c=n(32),s=n(0),l=n.n(s),u=n(105),d=n.n(u),p=n(310),f=n(343),m=n(371),h=n(362),b=n(312),g=n(24),v=n(106),y=n(283),E=n(282),O=n(299),j=n(1),w=n.n(j),k=n(71),x=n(51),T=Object(O.a)({},k.Transition.propTypes,{isOpen:w.a.bool,children:w.a.oneOfType([w.a.arrayOf(w.a.node),w.a.node]),tag:x.o,className:w.a.node,navbar:w.a.bool,cssModule:w.a.object,innerRef:w.a.oneOfType([w.a.func,w.a.string,w.a.object])}),M=Object(O.a)({},k.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:x.c.Collapse}),C=((a={})[x.b.ENTERING]="collapsing",a[x.b.ENTERED]="collapse show",a[x.b.EXITING]="collapsing",a[x.b.EXITED]="collapse",a);function S(e){return e.scrollHeight}var N=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind(Object(y.a)(n))})),n}Object(E.a)(t,e);var n=t.prototype;return n.onEntering=function(e,t){this.setState({height:S(e)}),this.props.onEntering(e,t)},n.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},n.onExit=function(e){this.setState({height:S(e)}),this.props.onExit(e)},n.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},n.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.tag,a=t.isOpen,r=t.className,o=t.navbar,i=t.cssModule,c=t.children,s=(t.innerRef,Object(v.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),u=this.state.height,p=Object(x.m)(s,x.a),f=Object(x.l)(s,x.a);return l.a.createElement(k.Transition,Object(g.a)({},p,{in:a,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var a=function(e){return C[e]||"collapse"}(t),s=Object(x.k)(d()(r,a,o&&"navbar-collapse"),i),p=null===u?null:{height:u};return l.a.createElement(n,Object(g.a)({},f,{style:Object(O.a)({},f.style,{},p),className:s,ref:e.props.innerRef}),c)}))},t}(s.Component);N.propTypes=T,N.defaultProps=M;var A=N,P=n(311);t.a=function(e){var t,n;return n=t=function(t){Object(i.a)(a,t);var n=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={showContent:!0},e.toggle=function(){e.setState((function(e){return{showContent:!e.showContent}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,n=t.title,a=t.isOpen,r=t.open,o=t.close,i=this.state.showContent,c=d()({"icon-arrow-down":i,"icon-arrow-up":!i,icons:!0,"font-sm":!0});return l.a.createElement(p.a,null,l.a.createElement(f.a,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement(m.a,{style:{marginBottom:0,fontSize:"14px",fontWeight:"bold"}},n),l.a.createElement(h.a,null,l.a.createElement(b.a,{style:{marginRight:"0.5rem",padding:"0.2rem 0.4rem",backgroundColor:"transparent",borderColor:"transparent",boxShadow:"none"},onClick:this.toggle},l.a.createElement("i",{className:c,color:"var(--gray)"})),"Map"!==n?a?l.a.createElement(b.a,{title:"close",style:{padding:"0.2rem 0.4rem",backgroundColor:"transparent",borderColor:"transparent",boxShadow:"none"},onClick:o},l.a.createElement("i",{className:"icon-close icons font-sm",color:"var(--gray)"})):l.a.createElement(b.a,{title:"edit",style:{padding:"0.2rem 0.4rem",backgroundColor:"transparent",borderColor:"transparent",boxShadow:"none"},onClick:r},l.a.createElement("i",{className:"icon-pencil icons font-sm",color:"var(--gray)"})):null)),l.a.createElement(A,{isOpen:i},l.a.createElement(P.a,null,i&&l.a.createElement(e,this.props))))}}]),a}(s.Component),t.defaultTypes={title:"Card"},n}},362:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(105),u=n.n(l),d=n(51),p={tag:d.o,"aria-label":s.a.string,className:s.a.string,cssModule:s.a.object,role:s.a.string,size:s.a.string,vertical:s.a.bool},f=function(e){var t=e.className,n=e.cssModule,o=e.size,c=e.vertical,s=e.tag,l=Object(r.a)(e,["className","cssModule","size","vertical","tag"]),p=Object(d.k)(u()(t,!!o&&"btn-group-"+o,c?"btn-group-vertical":"btn-group"),n);return i.a.createElement(s,Object(a.a)({},l,{className:p}))};f.propTypes=p,f.defaultProps={tag:"div",role:"group"},t.a=f},371:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(105),u=n.n(l),d=n(51),p={tag:d.o,className:s.a.string,cssModule:s.a.object},f=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),s=Object(d.k)(u()(t,"card-title"),n);return i.a.createElement(o,Object(a.a)({},c,{className:s}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},372:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(349);t.a=Object(o.a)((function(e){var t=e.content;return r.a.createElement("div",{dangerouslySetInnerHTML:function(e){return e?{__html:e}:{__html:"<p>Add information</p>"}}(t)})}))},414:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(105),u=n.n(l),d=n(51),p={tag:d.o,flush:s.a.bool,className:s.a.string,cssModule:s.a.object,horizontal:s.a.oneOfType([s.a.bool,s.a.string])},f=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=e.flush,s=e.horizontal,l=Object(r.a)(e,["className","cssModule","tag","flush","horizontal"]),p=Object(d.k)(u()(t,"list-group",c?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(s)),n);return i.a.createElement(o,Object(a.a)({},l,{className:p}))};f.propTypes=p,f.defaultProps={tag:"ul",horizontal:!1},t.a=f},417:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(30),r=n(31),o=n(33),i=n(32),c=n(0),s=n.n(c),l=n(338),u=n(303),d=n(362),p=n(481),f=n(482),m=n(312),h=n(340),b=n.n(h),g=n(319),v=n.n(g),y=(n(341),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;Object(a.a)(this,n),(r=t.call(this,e)).onEditorStateChange=function(e){r.setState({editorState:e})},r.handleSubmit=function(){var e=r.state.editorState,t=r.props,n=t.title,a=t.onUpdate,o=t.close;if("Send details"===n)a({sendDetails:b()(Object(u.convertToRaw)(e.getCurrentContent()))});else if("About company"===n){a({about:b()(Object(u.convertToRaw)(e.getCurrentContent()))})}else if("Interview details"===n){a({interviewDetail:b()(Object(u.convertToRaw)(e.getCurrentContent()))})}else if("About candidate"===n){a({aboutOne:b()(Object(u.convertToRaw)(e.getCurrentContent()))})}else if("Description"===n){a({descriptionOne:b()(Object(u.convertToRaw)(e.getCurrentContent()))})}else if("Details"===n){a({detailsOne:b()(Object(u.convertToRaw)(e.getCurrentContent()))})}else{a({content:b()(Object(u.convertToRaw)(e.getCurrentContent()))})}o()};var o=null===e.content?"":e.content,i=v()(o);if(i){var c=u.ContentState.createFromBlockArray(i.contentBlocks),s=u.EditorState.createWithContent(c);r.state={editorState:s}}return r}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.editorState;return s.a.createElement("div",{onSubmit:this.handleSubmit},s.a.createElement(l.Editor,{editorState:e,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.onEditorStateChange}),s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement(f.a,{xl:12},s.a.createElement(m.a,{color:"primary",onClick:this.handleSubmit},"Save")))))}}]),n}(c.Component))},468:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(105),u=n.n(l),d=n(51),p={tag:d.o,active:s.a.bool,disabled:s.a.bool,color:s.a.string,action:s.a.bool,className:s.a.any,cssModule:s.a.object},f=function(e){e.preventDefault()},m=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=e.active,s=e.disabled,l=e.action,p=e.color,m=Object(r.a)(e,["className","cssModule","tag","active","disabled","action","color"]),h=Object(d.k)(u()(t,!!c&&"active",!!s&&"disabled",!!l&&"list-group-item-action",!!p&&"list-group-item-"+p,"list-group-item"),n);return s&&(m.onClick=f),i.a.createElement(o,Object(a.a)({},m,{className:h}))};m.propTypes=p,m.defaultProps={tag:"li"},t.a=m},994:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(42),r=n(30),o=n(31),i=n(33),c=n(32),s=n(0),l=n.n(s),u=n(481),d=n(482),p=n(284),f=n.n(p),m=n(773),h=n(310),b=n(343),g=n(311),v=n(414),y=n(468),E=function(e){var t=e.vacancy,n=t.id,a=t.date,r=t.company,o=t.platform,i=t.seniority,c=t.status,s=t.location,u=t.salary,d=t.link,p=e.userRole;return l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement(m.a,{to:"/vacancies/".concat(n,"/edit"),title:"edit",className:"pull-right",style:{color:"var(--dark)",textDecoration:"none"}},l.a.createElement("i",{className:"icon-pencil icons font-sm",color:"var(--gray)"}))),l.a.createElement(g.a,null,l.a.createElement(v.a,{flush:!0},a&&l.a.createElement(y.a,null,"Date: ",f()(a).format("DD MMM YYYY")),r&&l.a.createElement(y.a,null,"Company:"," ",4!==p?l.a.createElement(m.a,{to:"/companies/".concat(r.id)},r.nazva):r.nazva),o&&l.a.createElement(y.a,null,"Platform: ",o.nazva),i&&l.a.createElement(y.a,null,"Seniority: ",i.nazva),c&&l.a.createElement(y.a,null,"Status: ",c.status),s&&l.a.createElement(y.a,null,"Location: ",s.name),u&&l.a.createElement(y.a,null,"Salary: ",u),d&&l.a.createElement(y.a,null,"Additional information: ",l.a.createElement("a",{href:d},"link")))))};E.defaulProps={vacancy:{}};var O=E,j=n(372),w=n(417),k=n(369),x=n(349),T=n(348),M=Object(x.a)(w.a),C=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={id:null,date:"",company:{},platform:{},seniority:{},status:{},location:{},salary:"",link:"",description:"",details:""},e.updateVacancyProfileContent=function(t){var n=e.props.match.params.id;console.log("content vacanci",t),Object(T.f)(n,t).then((function(t){console.log("content vacancy2",t),e.setState(Object(a.a)({},t))}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;Object(T.e)(t).then((function(t){e.setState(Object(a.a)({},t))}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.description,a=t.details,r=this.props.user.role;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{md:6,sm:12},l.a.createElement(O,{vacancy:this.state,userRole:r}))),l.a.createElement(u.a,null,l.a.createElement(d.a,{md:12},4!==r?l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{render:function(t,a,r){return t?l.a.createElement(M,{content:n,title:"Description",isOpen:t,close:r,onUpdate:e.updateVacancyProfileContent}):l.a.createElement(j.a,{title:"Description",content:n,isOpen:t,open:a,close:r})}}),l.a.createElement(k.a,{render:function(t,n,r){return t?l.a.createElement(M,{content:a,title:"Details",isOpen:t,close:r,onUpdate:e.updateVacancyProfileContent}):l.a.createElement(j.a,{title:"Details",content:a,isOpen:t,open:n,close:r})}})):l.a.createElement(j.a,{title:"Details",content:a}))))}}]),n}(s.Component)}}]);
//# sourceMappingURL=6.44fd6450.chunk.js.map