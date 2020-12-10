(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[16],{1089:function(e,t,n){"use strict";n.r(t);var a=n(30),r=n(31),o=n(33),i=n(32),c=n(0),l=n.n(c),s=n(42),u=n(107),d=n(815),p=n(328),f=n(505),m=n(506),h=n(311),y=n(312),b=n(421),v=n(300),g=n(376),E=n(313),k=n(339),O=n(303),S=n(316),j=n.n(S),C=n(341),w=n.n(C),x=n(286),M=(n(342),n(988),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={selectPlatform:[],selectSeniority:[],selectCompany:[],selectLocation:[],salary:"",comment:"",link:"",selectedVacancyStatus:"",description:O.EditorState.createEmpty(),details:O.EditorState.createEmpty()},e.handleInputChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(u.a)({},a,r))},e.handleDescriptionStateChange=function(t){e.setState({description:t})},e.handleDetailsStateChange=function(t){e.setState({details:t})},e.handlePlatformChange=function(t){e.setState({selectPlatform:t})},e.handleSeniorityChange=function(t){e.setState({selectSeniority:t})},e.handleCompanyChange=function(t){e.setState({selectCompany:t})},e.handleLocationChange=function(t){e.setState({selectLocation:t})},e.onRadioBtnClick=function(t){e.setState({selectedVacancyStatus:t})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.salary,r=n.description,o=n.details,i=e.props.onEditVacancy,c=Number(a),l=w()(Object(O.convertToRaw)(r.getCurrentContent())),u=w()(Object(O.convertToRaw)(o.getCurrentContent()));i(Object(s.a)(Object(s.a)({},e.state),{},{salary:c,description:l,details:u}))},e}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.vacancy,a=t.options;if(this.props!==e){if(null!==n.platform){var r=a.platforms.find((function(e){return e.id===n.platform.id}));this.setState({selectPlatform:r})}if(null!==n.seniority){var o=a.seniority.find((function(e){return e.id===n.seniority.id}));this.setState({selectSeniority:o})}if(null!==n.company){var i=a.companies.find((function(e){return e.id===n.company.id}));this.setState({selectCompany:i})}if(null!==n.location){var c=a.location.find((function(e){return e.id===n.location.id}));this.setState({selectLocation:c})}var l=n.description,s=j()(l);if(s){var u=O.ContentState.createFromBlockArray(s.contentBlocks),d=O.EditorState.createWithContent(u);this.setState({description:d})}var p=n.details;if(p){var f=j()(p);if(f){var m=O.ContentState.createFromBlockArray(f.contentBlocks),h=O.EditorState.createWithContent(m);this.setState({details:h})}}var y=null!==n.salary?n.salary:"",b=null!==n.comment?n.comment:"",v=null!==n.link?n.link:"",g=n.status.id;this.setState({salary:y,comment:b,link:v,selectedVacancyStatus:g})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectPlatform,a=t.selectSeniority,r=t.selectCompany,o=t.selectLocation,i=t.salary,c=(t.comment,t.link),s=t.selectedVacancyStatus,u=t.description,O=t.details,S=this.props,j=S.options,C=j.platforms,w=j.seniority,M=j.companies,T=j.location,N=S.vacancy.id;return l.a.createElement(p.a,{onSubmit:this.handleSubmit},l.a.createElement(f.a,null,l.a.createElement(m.a,{md:9},l.a.createElement(h.a,null,l.a.createElement(y.a,null,l.a.createElement("h6",null,"Description"),l.a.createElement(k.Editor,{editorState:u,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.handleDescriptionStateChange}),l.a.createElement("h6",null,"Freelancer Description"),l.a.createElement(k.Editor,{editorState:O,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.handleDetailsStateChange})))),l.a.createElement(m.a,{md:3},l.a.createElement(h.a,null,l.a.createElement(y.a,null,l.a.createElement(f.a,null,l.a.createElement(m.a,null,l.a.createElement(b.a,null,l.a.createElement(x.a,{value:n,options:C,placeholder:"Platform",onChange:this.handlePlatformChange})),l.a.createElement(b.a,null,l.a.createElement(x.a,{value:a,options:w,placeholder:"Seniority",onChange:this.handleSeniorityChange})),l.a.createElement(b.a,null,l.a.createElement(x.a,{value:r,options:M,placeholder:"Company",onChange:this.handleCompanyChange})),l.a.createElement(b.a,null,l.a.createElement(x.a,{value:o,options:T,placeholder:"Location",onChange:this.handleLocationChange})),l.a.createElement(b.a,{row:!0},l.a.createElement(m.a,null,l.a.createElement(v.a,{id:"salary",type:"text",name:"salary",value:i,placeholder:"Salary",onChange:this.handleInputChange}),l.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"cui-dollar icons font-lg"}))),l.a.createElement(b.a,{row:!0},l.a.createElement(m.a,null,l.a.createElement(v.a,{id:"link",type:"url",name:"link",value:c,placeholder:"Link",onChange:this.handleInputChange}),l.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"icon-link icons font-lg"}))),l.a.createElement(g.a,{style:{display:"flex",marginBottom:"1rem"}},l.a.createElement(E.a,{className:"btn-default",active:0===s,onClick:function(){return e.onRadioBtnClick(0)}},l.a.createElement("i",{className:"fa fa-fire"})),l.a.createElement(E.a,{className:"btn-default",active:1===s,onClick:function(){return e.onRadioBtnClick(1)}},l.a.createElement("i",{className:"fa fa-check-circle"})),l.a.createElement(E.a,{className:"btn-default",active:2===s,onClick:function(){return e.onRadioBtnClick(2)}},l.a.createElement("i",{className:"fa fa-history"})),l.a.createElement(E.a,{className:"btn-default",active:3===s,onClick:function(){return e.onRadioBtnClick(3)}},l.a.createElement("i",{className:"fa fa-ban"}))),l.a.createElement(b.a,{row:!0},l.a.createElement(m.a,null,l.a.createElement(E.a,{type:"submit",color:"primary",block:!0},"Save"))),l.a.createElement(b.a,{row:!0},l.a.createElement(m.a,null,l.a.createElement(d.a,{to:"/vacancies/".concat(N),style:{textDecoration:"none"}},l.a.createElement(E.a,{type:"button",outline:!0,color:"secondary",block:!0},"Cancel")))))))))))}}]),n}(c.Component));M.defaultProps={vacancy:{id:null,seniority:{},platform:{},company:{},location:{},status:{},salary:"",link:"",date:"",description:"",details:""}};var T=n(394),N=n(359),R=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={vacancy:{id:null,date:"",company:{},platform:{},seniority:{},status:{},location:{},salary:null,link:"",description:"",details:""}},e.editVacancy=function(t){var n=e.props.match.params.id;console.log(e.props),Object(N.f)(n,t).then((function(t){e.props.history.push("/vacancies/".concat(t.id))}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;Object(N.e)(t).then((function(t){e.setState({vacancy:t})}))}},{key:"render",value:function(){var e=this.state.vacancy,t=this.props.options;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Edit Vacancy"),l.a.createElement(M,{options:t,vacancy:e,onEditVacancy:this.editVacancy}))}}]),n}(c.Component);t.default=Object(T.a)(R)},286:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(324);n(301);t.a=function(e){var t=e.name,n=void 0===t?"select":t,a=e.defaultValue,i=e.isMulti,c=void 0!==i&&i,l=e.isDisabled,s=void 0!==l&&l,u=e.closeMenuOnSelect,d=e.inputValue,p=e.value,f=e.options,m=e.components,h=e.theme,y=e.styles,b=e.selectOption,v=e.selectProps,g=e.setValue,E=e.placeholder,k=e.onChange,O=e.onInputChange;return r.a.createElement(o.a,{name:n,styles:y,defaultValue:a,isMulti:c,isDisabled:s,inputValue:d,value:p,options:f,closeMenuOnSelect:u,components:m,theme:h,selectOption:b,selectProps:v,setValue:g,placeholder:E,className:"basic-multi-select",classNamePrefix:"select",onChange:k,onInputChange:O})}},300:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(283),i=n(282),c=n(0),l=n.n(c),s=n(1),u=n.n(s),d=n(105),p=n.n(d),f=n(51),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,i=e.bsSize,c=e.valid,s=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,h=e.innerRef,y=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),g=u||("select"===o||"textarea"===o?o:"input"),E="form-control";m?(E+="-plaintext",g=u||"input"):"file"===o?E+="-file":"range"===o?E+="-range":b&&(E=d?null:"form-check-input"),y.size&&v.test(y.size)&&(Object(f.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=y.size,delete y.size);var k=Object(f.k)(p()(t,s&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,E),n);return("input"===g||u&&"function"===typeof u)&&(y.type=o),y.children&&!m&&"select"!==o&&"string"===typeof g&&"select"!==g&&(Object(f.r)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete y.children),l.a.createElement(g,Object(a.a)({},y,{ref:h,className:k,"aria-invalid":s}))},t}(l.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h},301:function(e,t,n){e.exports={select__menu:"Select_select__menu__3w_Fl"}},311:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(0),i=n.n(o),c=n(1),l=n.n(c),s=n(105),u=n.n(s),d=n(51),p={tag:d.o,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var t=e.className,n=e.cssModule,o=e.color,c=e.body,l=e.inverse,s=e.outline,p=e.tag,f=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(d.k)(u()(t,"card",!!l&&"text-white",!!c&&"card-body",!!o&&(s?"border":"bg")+"-"+o),n);return i.a.createElement(p,Object(a.a)({},m,{className:h,ref:f}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},312:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(0),i=n.n(o),c=n(1),l=n.n(c),s=n(105),u=n.n(s),d=n(51),p={tag:d.o,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var t=e.className,n=e.cssModule,o=e.innerRef,c=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),s=Object(d.k)(u()(t,"card-body"),n);return i.a.createElement(c,Object(a.a)({},l,{className:s,ref:o}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},316:function(e,t,n){window,e.exports=function(e,t){return r={},n.m=a=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=function(e,t,n){var a,o=e.textContent;return""===o.trim()?{chunk:(a=n,{text:" ",inlines:[new r.OrderedSet],entities:[a],blocks:[]})}:{chunk:{text:o,inlines:Array(o.length).fill(t),entities:Array(o.length).fill(n),blocks:[]}}},i=function(){return{text:"\n",inlines:[new r.OrderedSet],entities:new Array(1),blocks:[]}},c=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new r.Map({})}]}},l=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new r.Map({})}]}},s=function(e){return{text:"\r ",inlines:[new r.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new r.Map({})}]}},u=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},d=new r.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),p={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function f(e){return e.style.textAlign?new r.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new r.Map({"margin-left":e.style.marginLeft}):void 0}var m=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,a.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,a.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return v}));var h=new RegExp("&nbsp;","g"),y=!0;function b(e,t,n,r,h,v){var g=e.nodeName.toLowerCase();if(v){var E=v(g,e);if(E){var k=a.Entity.__create(E.type,E.mutability,E.data||{});return{chunk:s(k)}}}if("#text"===g&&"\n"!==e.textContent)return o(e,t,h);if("br"===g)return{chunk:i()};if("img"===g&&e instanceof HTMLImageElement){var O={};O.src=e.getAttribute&&e.getAttribute("src")||e.src,O.alt=e.alt,O.height=e.style.height,O.width=e.style.width,e.style.float&&(O.alignment=e.style.float);var S=a.Entity.__create("IMAGE","MUTABLE",O);return{chunk:s(S)}}if("video"===g&&e instanceof HTMLVideoElement){var j={};j.src=e.getAttribute&&e.getAttribute("src")||e.src,j.alt=e.alt,j.height=e.style.height,j.width=e.style.width,e.style.float&&(j.alignment=e.style.float);var C=a.Entity.__create("VIDEO","MUTABLE",j);return{chunk:s(C)}}if("iframe"===g&&e instanceof HTMLIFrameElement){var w={};w.src=e.getAttribute&&e.getAttribute("src")||e.src,w.height=e.height,w.width=e.width;var x=a.Entity.__create("EMBEDDED_LINK","MUTABLE",w);return{chunk:s(x)}}var M,T=function(e,t){var n=d.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(g,r);T&&("ul"===g||"ol"===g?(r=g,n+=1):("unordered-list-item"!==T&&"ordered-list-item"!==T&&(r="",n=-1),y?(M=c(T,f(e)),y=!1):M=l(T,n,f(e)))),M=M||{text:"",inlines:[],entities:[],blocks:[]},t=function(e,t,n){var a,r=p[e];if(r)a=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){var o=t;a=(a=n).withMutations((function(e){var t=o.style.color,n=o.style.backgroundColor,a=o.style.fontSize,r=o.style.fontFamily.replace(/^"|"$/g,""),i=o.style.fontWeight,c=o.style.textDecoration,l=o.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),a&&e.add("fontsize-".concat(a.replace(/px$/g,""))),r&&e.add("fontfamily-".concat(r)),"bold"===i&&e.add(p.strong),"underline"===c&&e.add(p.ins),"italic"===l&&e.add(p.em)})).toOrderedSet()}return a}(g,e,t);for(var N=e.firstChild;N;){var R=b(N,t,n,r,m(N)||h,v).chunk;M=u(M,R),N=N.nextSibling}return{chunk:M}}function v(e,t){var n,o,i=(n=t,(o=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n}(e.trim().replace(h," ")))?(y=!0,{chunk:b(o,new r.OrderedSet,-1,"",void 0,n).chunk}):null);if(i){var c=i.chunk,l=new r.OrderedMap({});c.entities&&c.entities.forEach((function(e){e&&(l=l.set(e,a.Entity.__get(e)))}));var s=0;return{contentBlocks:c.text.split("\r").map((function(e,t){var n=s+e.length,o=c&&c.inlines.slice(s,n),i=c&&c.entities.slice(s,n),l=new r.List(o.map((function(e,t){var n={style:e,entity:null};return i[t]&&(n.entity=i[t]),a.CharacterMetadata.create(n)})));return s=n,new a.ContentBlock({key:Object(a.genKey)(),type:c&&c.blocks[t]&&c.blocks[t].type||"unstyled",depth:c&&c.blocks[t]&&c.blocks[t].depth,data:c&&c.blocks[t]&&c.blocks[t].data||new r.Map({}),text:e,characterList:l})})),entityMap:l}}return null}}],n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var a,r}(n(285),n(303))},328:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(283),i=n(282),c=n(0),l=n.n(c),s=n(1),u=n.n(s),d=n(105),p=n.n(d),f=n(51),m={children:u.a.node,inline:u.a.bool,tag:f.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.inline,i=e.tag,c=e.innerRef,s=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(f.k)(p()(t,!!o&&"form-inline"),n);return l.a.createElement(i,Object(a.a)({},s,{ref:c,className:u}))},t}(c.Component);h.propTypes=m,h.defaultProps={tag:"form"},t.a=h},359:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return f}));var a=n(288),r=n.n(a),o=n(289),i="http://f2.uppeople.space/api",c=function(){return localStorage.getItem("token")},l=function(e){var t=c();return fetch("".concat(i,"/main/viewVacancy/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))})).then((function(e){var t=e[0];return{id:t.id,date:t.date_create,company:t.company,platform:t.platforms,seniority:t.seniorities,status:t.status,location:t.location,salary:t.salary,link:t.link,description:t.opus,details:t.details}})).catch((function(e){return console.log("error in fetch: ",e)}))},s=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=c(),e.prev=2,e.next=5,fetch("".concat(i,"/main/addNewVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:if(!(a=e.sent).ok){e.next=8;break}return e.abrupt("return",a.json());case 8:throw new Error("".concat(a.statusText));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e,t){var n=c();return fetch("".concat(i,"/main/editVacancy/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).then((function(e){var t=e[0];return console.log("vacancy response",e),{id:t.id,date:t.date_create,company:t.company,platform:t.platforms,seniority:t.seniorities,status:t.status,location:t.location,salary:t.salary,link:t.link,description:t.opus,details:t.details}})).catch((function(e){return console.log("error in fetch: ",e)}))},d=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),e.prev=1,e.next=4,fetch("".concat(i,"/main/deleteVacancy/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=c();return console.log(a),fetch("".concat(i,"/main/returnAllVacancy"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify({company_id:e,withRecruiters:n,isActive:t})}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))})).catch((function(e){return console.log("error in fetch: ",e)}))},f=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),e.prev=1,e.next=4,fetch("".concat(i,"/main/getTags"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},376:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(0),i=n.n(o),c=n(1),l=n.n(c),s=n(105),u=n.n(s),d=n(51),p={tag:d.o,"aria-label":l.a.string,className:l.a.string,cssModule:l.a.object,role:l.a.string,size:l.a.string,vertical:l.a.bool},f=function(e){var t=e.className,n=e.cssModule,o=e.size,c=e.vertical,l=e.tag,s=Object(r.a)(e,["className","cssModule","size","vertical","tag"]),p=Object(d.k)(u()(t,!!o&&"btn-group-"+o,c?"btn-group-vertical":"btn-group"),n);return i.a.createElement(l,Object(a.a)({},s,{className:p}))};f.propTypes=p,f.defaultProps={tag:"div",role:"group"},t.a=f},394:function(e,t,n){"use strict";var a=n(42),r=n(30),o=n(31),i=n(33),c=n(32),l=n(0),s=n.n(l),u=n(299);t.a=function(e){return function(t){Object(i.a)(l,t);var n=Object(c.a)(l);function l(){var e;Object(r.a)(this,l);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={platforms:[],seniority:[],companies:[],location:[],tags:[],reasons:[],reject_tag:{}},e}return Object(o.a)(l,[{key:"componentDidMount",value:function(){var e=this;Object(u.q)().then((function(t){var n={platforms:t.platforms,seniority:t.seniorities,companies:t.companies,location:t.location,tags:t.tags,reasons:t.reject_reasons,reject_tag:t.reject_tag[0],recruiters:t.recruiters};e.setState(Object(a.a)({},n))}))}},{key:"render",value:function(){return s.a.createElement(e,Object.assign({options:this.state},this.props))}}]),l}(l.Component)}},988:function(e,t,n){}}]);
//# sourceMappingURL=16.4fdf5b83.chunk.js.map