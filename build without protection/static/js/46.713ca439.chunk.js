(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[46],{1058:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(30),r=n(31),i=n(33),c=n(32),o=n(0),l=n.n(o),s=n(515),u=n(505),d=n(506),f=n(377),m=n(431),p=n(299),b=[{id:"1",name:"Resume"},{id:"2",name:"Interview"},{id:"3",name:"Individual"}],v=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={templates:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(p.o)().then((function(t){e.setState({templates:t})}))}},{key:"render",value:function(){var e=this.state.templates;console.log("templates: ",e);var t=e.length>0&&b.map((function(t){return l.a.createElement(s.a,{tabId:t.id,key:t.id},l.a.createElement(m.a,{content:e[Number(t.id-1)].text,onUpdate:function(e){Object(p.r)(t.id,e)},close:function(){}}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement(f.a,{tabs:b},t))))}}]),n}(o.Component)},316:function(e,t,n){window,e.exports=function(e,t){return r={},n.m=a=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=function(e,t,n){var a,i=e.textContent;return""===i.trim()?{chunk:(a=n,{text:" ",inlines:[new r.OrderedSet],entities:[a],blocks:[]})}:{chunk:{text:i,inlines:Array(i.length).fill(t),entities:Array(i.length).fill(n),blocks:[]}}},c=function(){return{text:"\n",inlines:[new r.OrderedSet],entities:new Array(1),blocks:[]}},o=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new r.Map({})}]}},l=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new r.Map({})}]}},s=function(e){return{text:"\r ",inlines:[new r.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new r.Map({})}]}},u=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},d=new r.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),f={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function m(e){return e.style.textAlign?new r.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new r.Map({"margin-left":e.style.marginLeft}):void 0}var p=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,a.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,a.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return g}));var b=new RegExp("&nbsp;","g"),v=!0;function h(e,t,n,r,b,g){var y=e.nodeName.toLowerCase();if(g){var E=g(y,e);if(E){var T=a.Entity.__create(E.type,E.mutability,E.data||{});return{chunk:s(T)}}}if("#text"===y&&"\n"!==e.textContent)return i(e,t,b);if("br"===y)return{chunk:c()};if("img"===y&&e instanceof HTMLImageElement){var O={};O.src=e.getAttribute&&e.getAttribute("src")||e.src,O.alt=e.alt,O.height=e.style.height,O.width=e.style.width,e.style.float&&(O.alignment=e.style.float);var w=a.Entity.__create("IMAGE","MUTABLE",O);return{chunk:s(w)}}if("video"===y&&e instanceof HTMLVideoElement){var C={};C.src=e.getAttribute&&e.getAttribute("src")||e.src,C.alt=e.alt,C.height=e.style.height,C.width=e.style.width,e.style.float&&(C.alignment=e.style.float);var k=a.Entity.__create("VIDEO","MUTABLE",C);return{chunk:s(k)}}if("iframe"===y&&e instanceof HTMLIFrameElement){var M={};M.src=e.getAttribute&&e.getAttribute("src")||e.src,M.height=e.height,M.width=e.width;var j=a.Entity.__create("EMBEDDED_LINK","MUTABLE",M);return{chunk:s(j)}}var S,x=function(e,t){var n=d.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(y,r);x&&("ul"===y||"ol"===y?(r=y,n+=1):("unordered-list-item"!==x&&"ordered-list-item"!==x&&(r="",n=-1),v?(S=o(x,m(e)),v=!1):S=l(x,n,m(e)))),S=S||{text:"",inlines:[],entities:[],blocks:[]},t=function(e,t,n){var a,r=f[e];if(r)a=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){var i=t;a=(a=n).withMutations((function(e){var t=i.style.color,n=i.style.backgroundColor,a=i.style.fontSize,r=i.style.fontFamily.replace(/^"|"$/g,""),c=i.style.fontWeight,o=i.style.textDecoration,l=i.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),a&&e.add("fontsize-".concat(a.replace(/px$/g,""))),r&&e.add("fontfamily-".concat(r)),"bold"===c&&e.add(f.strong),"underline"===o&&e.add(f.ins),"italic"===l&&e.add(f.em)})).toOrderedSet()}return a}(y,e,t);for(var I=e.firstChild;I;){var A=h(I,t,n,r,p(I)||b,g).chunk;S=u(S,A),I=I.nextSibling}return{chunk:S}}function g(e,t){var n,i,c=(n=t,(i=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n}(e.trim().replace(b," ")))?(v=!0,{chunk:h(i,new r.OrderedSet,-1,"",void 0,n).chunk}):null);if(c){var o=c.chunk,l=new r.OrderedMap({});o.entities&&o.entities.forEach((function(e){e&&(l=l.set(e,a.Entity.__get(e)))}));var s=0;return{contentBlocks:o.text.split("\r").map((function(e,t){var n=s+e.length,i=o&&o.inlines.slice(s,n),c=o&&o.entities.slice(s,n),l=new r.List(i.map((function(e,t){var n={style:e,entity:null};return c[t]&&(n.entity=c[t]),a.CharacterMetadata.create(n)})));return s=n,new a.ContentBlock({key:Object(a.genKey)(),type:o&&o.blocks[t]&&o.blocks[t].type||"unstyled",depth:o&&o.blocks[t]&&o.blocks[t].depth,data:o&&o.blocks[t]&&o.blocks[t].data||new r.Map({}),text:e,characterList:l})})),entityMap:l}}return null}}],n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var a,r}(n(285),n(303))},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),r=n.n(a).a.createContext({})},376:function(e,t,n){"use strict";var a=n(24),r=n(106),i=n(0),c=n.n(i),o=n(1),l=n.n(o),s=n(105),u=n.n(s),d=n(51),f={tag:d.o,"aria-label":l.a.string,className:l.a.string,cssModule:l.a.object,role:l.a.string,size:l.a.string,vertical:l.a.bool},m=function(e){var t=e.className,n=e.cssModule,i=e.size,o=e.vertical,l=e.tag,s=Object(r.a)(e,["className","cssModule","size","vertical","tag"]),f=Object(d.k)(u()(t,!!i&&"btn-group-"+i,o?"btn-group-vertical":"btn-group"),n);return c.a.createElement(l,Object(a.a)({},s,{className:f}))};m.propTypes=f,m.defaultProps={tag:"div",role:"group"},t.a=m},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(30),r=n(31),i=n(33),c=n(32),o=n(0),l=n.n(o),s=n(1045),u=n(1046),d=n(505),f=n(506),m=n(1049),p=n(512),b=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={activeTabId:e.props.activeTabId},e.activeTabToggle=function(t){var n=e.props.activeTabToggle;if(n)return n(t);e.setState({activeTabId:t})},e}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(e){e.activeTabId!==this.props.activeTabId&&this.setState({activeTabId:this.props.activeTabId})}},{key:"render",value:function(){var e=this,t=this.props,n=t.vacanciesCount,a=t.candidatesCount,r=t.commentsCount,i=t.interviewsCount,c=t.reviewsCount,o=t.testsCount,b=t.offersCount,v=t.tabs,h=this.state.activeTabId,g=v.map((function(t){return l.a.createElement(s.a,{key:t.id},l.a.createElement(u.a,{active:h===t.id,name:t.name,onClick:function(){return e.activeTabToggle(t.id)}},function(e){switch(e){case"Vacancies":return"".concat(e," ").concat(n||"");case"Candidates":return"".concat(e," ").concat(a||"");case"Comments":return"".concat(e," ").concat(r||"");case"Interviews":return"".concat(e," ").concat(i||"");case"Reviews":return"".concat(e," ").concat(c||"");case"Tests":return"".concat(e," ").concat(o||"");case"Offers":return"".concat(e," ").concat(b||"");default:return e}}(t.name)))}));return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(d.a,null,l.a.createElement(f.a,{xs:"12",md:"12",className:"mb-4"},l.a.createElement(m.a,{tabs:!0},g),l.a.createElement(p.a,{activeTab:h},this.props.children))))}}]),n}(o.Component);b.defaultProps={vacanciesCount:null,candidatesCount:null,commentsCount:null,children:[],activeTabId:"1",activeTabToggle:null}},431:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(30),r=n(31),i=n(33),c=n(32),o=n(0),l=n.n(o),s=n(339),u=n(303),d=n(376),f=n(505),m=n(506),p=n(313),b=n(341),v=n.n(b),h=n(316),g=n.n(h),y=(n(342),function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;Object(a.a)(this,n),(r=t.call(this,e)).onEditorStateChange=function(e){r.setState({editorState:e})},r.handleSubmit=function(){var e=r.state.editorState,t=r.props,n=t.title,a=t.onUpdate,i=t.close;if("Send details"===n)a({sendDetails:v()(Object(u.convertToRaw)(e.getCurrentContent()))});else if("About company"===n){a({about:v()(Object(u.convertToRaw)(e.getCurrentContent()))})}else if("Interview details"===n){a({interviewDetail:v()(Object(u.convertToRaw)(e.getCurrentContent()))})}else if("About candidate"===n){a({aboutOne:v()(Object(u.convertToRaw)(e.getCurrentContent()))})}else if("Description"===n){a({descriptionOne:v()(Object(u.convertToRaw)(e.getCurrentContent()))})}else if("Details"===n){a({detailsOne:v()(Object(u.convertToRaw)(e.getCurrentContent()))})}else{a({content:v()(Object(u.convertToRaw)(e.getCurrentContent()))})}i()};var i=null===e.content?"":e.content,c=g()(i);if(c){var o=u.ContentState.createFromBlockArray(c.contentBlocks),l=u.EditorState.createWithContent(o);r.state={editorState:l}}return r}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.editorState;return l.a.createElement("div",{onSubmit:this.handleSubmit},l.a.createElement(s.Editor,{editorState:e,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.onEditorStateChange}),l.a.createElement(d.a,null,l.a.createElement(f.a,null,l.a.createElement(m.a,{xl:12},l.a.createElement(p.a,{color:"primary",onClick:this.handleSubmit},"Save")))))}}]),n}(o.Component))},512:function(e,t,n){"use strict";var a=n(24),r=n(282),i=n(0),c=n.n(i),o=n(1),l=n.n(o),s=n(105),u=n.n(s),d=n(323),f=n(51),m={tag:f.o,activeTab:l.a.any,className:l.a.string,cssModule:l.a.object},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={activeTab:n.props.activeTab},n}return Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.tag,i=Object(f.l)(this.props,Object.keys(m)),o=Object(f.k)(u()("tab-content",t),n);return c.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(r,Object(a.a)({},i,{className:o})))},t}(i.Component);t.a=p,p.propTypes=m,p.defaultProps={tag:"div"}},515:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(24),r=n(106),i=n(0),c=n.n(i),o=n(1),l=n.n(o),s=n(105),u=n.n(s),d=n(323),f=n(51),m={tag:f.o,className:l.a.string,cssModule:l.a.object,tabId:l.a.any};function p(e){var t=e.className,n=e.cssModule,i=e.tabId,o=e.tag,l=Object(r.a)(e,["className","cssModule","tabId","tag"]),s=function(e){return Object(f.k)(u()("tab-pane",t,{active:i===e}),n)};return c.a.createElement(d.a.Consumer,null,(function(e){var t=e.activeTabId;return c.a.createElement(o,Object(a.a)({},l,{className:s(t)}))}))}p.propTypes=m,p.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=46.713ca439.chunk.js.map