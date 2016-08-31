webpackJsonp([0,3],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=a(1),r=n(o),l=a(30),c=n(l),i=a(163),s=a(186),u=n(s),f=a(190),d=n(f);a(282),c["default"].render(r["default"].createElement(i.Provider,{store:u["default"]},d["default"]),document.getElementById("root"))},186:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(170),r=a(187),l=n(r),c=a(188),i=n(c),s=a(189),u=n(s);t["default"]=(0,o.createStore)(l["default"],u["default"],(0,o.compose)((0,o.applyMiddleware)((0,i["default"])()),window.devToolsExtension?window.devToolsExtension():function(e){return e}))},187:function(e,t){"use strict";function a(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case"TURN_OFF_ANIMATION":return Object.assign({},e,t.payload);default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a},188:function(e,t){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function o(e,t,o,r){switch("undefined"==typeof e?"undefined":n(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,a(o)):e[r];case"function":return e(t);default:return e}}function r(){function e(){_.forEach(function(e,t){var a=e.started,r=e.startedTime,c=e.action,s=e.prevState,u=e.error,d=e.took,p=e.nextState,h=_[t+1];h&&(p=h.prevState,d=h.started-a);var g=y(c),E="function"==typeof f?f(function(){return p},c):f,v=i(r),k=O.title?"color: "+O.title(g)+";":null,j="action "+(b?v:"")+" "+g.type+" "+(m?"(in "+d.toFixed(2)+" ms)":"");try{E?O.title?l.groupCollapsed("%c "+j,k):l.groupCollapsed(j):O.title?l.group("%c "+j,k):l.group(j)}catch(N){l.log(j)}var w=o(n,g,[s],"prevState"),x=o(n,g,[g],"action"),P=o(n,g,[u,s],"error"),T=o(n,g,[p],"nextState");w&&(O.prevState?l[w]("%c prev state","color: "+O.prevState(s)+"; font-weight: bold",s):l[w]("prev state",s)),x&&(O.action?l[x]("%c action","color: "+O.action(g)+"; font-weight: bold",g):l[x]("action",g)),u&&P&&(O.error?l[P]("%c error","color: "+O.error(u,s)+"; font-weight: bold",u):l[P]("error",u)),T&&(O.nextState?l[T]("%c next state","color: "+O.nextState(p)+"; font-weight: bold",p):l[T]("next state",p));try{l.groupEnd()}catch(N){l.log("—— log end ——")}}),_.length=0}var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],a=t.level,n=void 0===a?"log":a,r=t.logger,l=void 0===r?console:r,c=t.logErrors,u=void 0===c||c,f=t.collapsed,d=t.predicate,p=t.duration,m=void 0!==p&&p,h=t.timestamp,b=void 0===h||h,g=t.transformer,E=t.stateTransformer,v=void 0===E?function(e){return e}:E,k=t.actionTransformer,y=void 0===k?function(e){return e}:k,j=t.errorTransformer,N=void 0===j?function(e){return e}:j,w=t.colors,O=void 0===w?{title:function(){return"#000000"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}}:w;if("undefined"==typeof l)return function(){return function(e){return function(t){return e(t)}}};g&&console.error("Option 'transformer' is deprecated, use stateTransformer instead");var _=[];return function(t){var a=t.getState;return function(t){return function(n){if("function"==typeof d&&!d(a,n))return t(n);var o={};_.push(o),o.started=s.now(),o.startedTime=new Date,o.prevState=v(a()),o.action=n;var r=void 0;if(u)try{r=t(n)}catch(l){o.error=N(l)}else r=t(n);if(o.took=s.now()-o.started,o.nextState=v(a()),e(),o.error)throw o.error;return r}}}}var l=function(e,t){return new Array(t+1).join(e)},c=function(e,t){return l("0",t-e.toString().length)+e},i=function(e){return"@ "+c(e.getHours(),2)+":"+c(e.getMinutes(),2)+":"+c(e.getSeconds(),2)+"."+c(e.getMilliseconds(),3)},s="undefined"!=typeof performance&&"function"==typeof performance.now?performance:Date;e.exports=r},189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={siteVisited:!1,projects:[{pathname:"/wikirace",projectname:"Wikirace",date:"Jul 2016",description:{about:"A real-time, single page desktop game that can be played with one or two players",role:"Full-stack development and front-end design"},imagecount:5,github:"https://github.com/kakorcal/wikirace",website:"http://wikirace.herokuapp.com/",technologies:{front:["Angular.js","Socket.io","Angular Material"],back:["Node.js","Express.js","Socket.io","JSON Web Tokens","Cheerio.js","Knex.js","PostgreSQL"],tools:["Heroku"]}},{pathname:"/angular_blog",projectname:"Angular Blog",date:"Jun 2016",description:{about:"Simple single page application where users can post their blogs as well as rate other user's blogs",role:"Full-stack development and front-end design"},imagecount:3,github:"https://github.com/kakorcal/angular_blog",website:"",technologies:{front:["Angular.js","Bootstrap"],back:["Node.js","Express.js","Knex.js","PostgreSQL"],tools:[]}},{pathname:"/linguo",projectname:"Linguo",date:"Apr 2016",description:{about:"Full-stack JavaScript application that helps users find language partners based on their location",role:"Front-end development and design"},imagecount:3,github:"https://github.com/kakorcal/linguo",website:"https://linguoisdead.herokuapp.com/",technologies:{front:["Jade","JQuery","Bootstrap","Animate.css"],back:["Node.js","Express.js","Passport.js","Google Oauth","Knex.js","PostgreSQL"],tools:["Heroku"]}},{pathname:"/bomberman",projectname:"Bomberman",date:"Mar 2016",description:{about:"A clone of the Bomberman series built with HTML5 canvas and Phaser.js",role:"Front-end development and design"},imagecount:0,github:"https://github.com/kakorcal/bomberman",website:"",technologies:{front:["HTML5 Canvas","Phaser.js"],back:["Node.js","Express.js"],tools:["Github Pages","Tiled","TexturePacker","Webpack"]}},{pathname:"/michael_baca",projectname:"Michael Baca Photography",date:"Dec 2015",description:{about:"Custom WordPress theme designed to showcase client's photo collection",role:"Full-stack development and front-end design"},imagecount:3,github:"https://github.com/kakorcal/michael_baca",website:"http://michaelbaca.com/",technologies:{front:["CSS","JQuery IOS Slider"],back:["PHP"],tools:["Wordpress"]}},{pathname:"/sara_alterman",projectname:"Sara Faith Alterman",date:"Oct 2015",description:{about:"Custom WordPress theme designed to promote client's blog posts and writings",role:"Full-stack development and front-end design"},imagecount:2,github:"https://github.com/kakorcal/sara_alterman",website:"http://sarafaithalterman.com/",technologies:{front:["CSS"],back:["PHP"],tools:["Wordpress","Photoshop"]}}]};t["default"]=a},190:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),r=n(o),l=a(191),c=a(252),i=n(c),s=a(256),u=n(s),f=a(264),d=n(f);t["default"]=r["default"].createElement(l.Router,{history:l.browserHistory},r["default"].createElement(l.Route,{path:"/",component:i["default"]},r["default"].createElement(l.IndexRoute,{component:u["default"]}),r["default"].createElement(l.Route,{path:"/wikirace",component:d["default"]}),r["default"].createElement(l.Route,{path:"/angular_blog",component:d["default"]}),r["default"].createElement(l.Route,{path:"/linguo",component:d["default"]}),r["default"].createElement(l.Route,{path:"/bomberman",component:d["default"]}),r["default"].createElement(l.Route,{path:"/michael_baca",component:d["default"]}),r["default"].createElement(l.Route,{path:"/sara_alterman",component:d["default"]})))},252:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(1),s=n(i),u=a(30),f=n(u),d=a(163),p=a(186),m=(n(p),a(253)),h=n(m),b=function(e){function t(e){o(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={scroll:0},a}return l(t,e),c(t,[{key:"handleScroll",value:function(e){var t=f["default"].findDOMNode(this.refs.kBody).scrollTop;this.setState(Object.assign({},this.state,{scroll:t}))}},{key:"componentDidMount",value:function(){var e=f["default"].findDOMNode(this.refs.kBody);e.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"componentWillUnmount",value:function(){var e=f["default"].findDOMNode(this.refs.kBody);e.removeEventListener("scroll",this.handleScroll.bind(this))}},{key:"render",value:function(){return s["default"].createElement("div",{className:"k-wrapper"},s["default"].createElement(h["default"],{scroll:this.state.scroll}),s["default"].createElement("div",{ref:"kBody",className:"k-body"},this.props.children))}}]),t}(i.Component);t["default"]=(0,d.connect)(function(e){return e},function(e){return{dispatch:e}})(b)},253:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(1),s=n(i),u=a(254),f=n(u),d=a(255),p=n(d),m=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),c(t,[{key:"render",value:function(){var e={transform:"rotate("+this.props.scroll+"deg)"};return s["default"].createElement("div",{ref:"nav",className:"k-nav fadeIn"},s["default"].createElement("div",{className:"k-about-desktop"},s["default"].createElement("h3",null,"Thanks For Stopping By!"),s["default"].createElement("img",{src:f["default"],height:"200",width:"200",alt:"pic"}),s["default"].createElement("p",null,"Hi, my name is Kenneth Korcal. I am a Front-End Web Developer based in San Francisco, California. You can check out my projects here. Have a nice day!")),s["default"].createElement("div",{className:"k-about-mobile"},s["default"].createElement("h3",null,"Kenneth Korcal ",s["default"].createElement("small",null,"- Front-End Developer"))),s["default"].createElement("div",{className:"k-contact"},s["default"].createElement("div",null,s["default"].createElement("a",{href:"https://github.com/kakorcal",target:"_blank",className:"btn btn-default k-shadow"},s["default"].createElement("i",{className:"fa fa-github",style:e})," ",s["default"].createElement("span",null,"GITHUB"))),s["default"].createElement("div",null,s["default"].createElement("a",{href:"https://www.linkedin.com/in/kennethkorcal",target:"_blank",className:"btn btn-default k-shadow"},s["default"].createElement("i",{className:"fa fa-linkedin",style:e})," ",s["default"].createElement("span",null,"LINKEDIN"))),s["default"].createElement("div",null,s["default"].createElement("a",{href:p["default"],target:"_blank",className:"btn btn-default k-shadow"},s["default"].createElement("i",{className:"fa fa-file-text-o",style:e})," ",s["default"].createElement("span",null,"RESUME")))))}}]),t}(i.Component);t["default"]=m},254:function(e,t,a){e.exports=a.p+"profile.5affa49baca11e64b3ecdb77c91d0bb6.png"},255:function(e,t,a){e.exports=a.p+"Kenneth_Korcal_Resume.694c569503a4f11d0278ca56f2e683fb.pdf"},256:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(1),s=n(i),u=a(191),f=a(163),d=a(257),p=n(d),m=a(186),h=n(m),b=a(258),g=n(b),E=a(259),v=n(E),k=a(260),y=n(k),j=a(261),N=n(j),w=a(262),O=n(w),_=a(263),x=n(_),P=function(e){function t(e){o(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={siteVisited:!1},console.log("HOME GET INITIAL STATE"),a}return l(t,e),c(t,[{key:"componentWillMount",value:function(){console.log("HOME COMPONENT WILL MOUNT"),this.setState(h["default"].getState())}},{key:"componentDidMount",value:function(){console.log("HOME COMPONENT DID MOUNT"),this.state.siteVisited||(console.log("HOME DISPATCH ACTION"),this.props.dispatch(p["default"].turnOffAnimation()))}},{key:"render",value:function(){return s["default"].createElement("div",{className:"col k-posts"},s["default"].createElement("div",{className:"col col-md-4 col-sm-6 k-post"},s["default"].createElement(u.Link,{to:"/wikirace",className:"k-box k-1 "+(this.state.siteVisited?"noAnimation":"bounceIn")},s["default"].createElement("div",{className:"k-entry"},s["default"].createElement("div",{className:"k-thumbnail"},s["default"].createElement("img",{src:g["default"],alt:"pic",className:"k-shadow"})),s["default"].createElement("h5",null,"WIKIRACE")))),s["default"].createElement("div",{className:"col col-md-4 col-sm-6 k-post"},s["default"].createElement(u.Link,{to:"/angular_blog",className:"k-box k-2 "+(this.state.siteVisited?"noAnimation":"bounceIn")},s["default"].createElement("div",{className:"k-entry"},s["default"].createElement("div",{className:"k-thumbnail"},s["default"].createElement("img",{src:v["default"],alt:"pic",className:"k-shadow"})),s["default"].createElement("h5",null,"ANGULAR BLOG")))),s["default"].createElement("div",{className:"col col-md-4 col-sm-6 k-post"},s["default"].createElement(u.Link,{to:"/linguo",className:"k-box k-3 "+(this.state.siteVisited?"noAnimation":"bounceIn")},s["default"].createElement("div",{className:"k-entry"},s["default"].createElement("div",{className:"k-thumbnail"},s["default"].createElement("img",{src:y["default"],alt:"pic",className:"k-shadow"})),s["default"].createElement("h5",null,"LINGUO")))),s["default"].createElement("div",{className:"col col-md-4 col-sm-6 k-post"},s["default"].createElement(u.Link,{to:"/bomberman",className:"k-box k-4 "+(this.state.siteVisited?"noAnimation":"bounceIn")},s["default"].createElement("div",{className:"k-entry"},s["default"].createElement("div",{className:"k-thumbnail"},s["default"].createElement("img",{src:N["default"],alt:"pic",className:"k-shadow"})),s["default"].createElement("h5",null,"BOMBERMAN")))),s["default"].createElement("div",{className:"col col-md-4 col-sm-6 k-post"},s["default"].createElement(u.Link,{to:"/michael_baca",className:"k-box k-5 "+(this.state.siteVisited?"noAnimation":"bounceIn")},s["default"].createElement("div",{className:"k-entry"},s["default"].createElement("div",{className:"k-thumbnail"},s["default"].createElement("img",{src:O["default"],alt:"pic",className:"k-shadow"})),s["default"].createElement("h5",null,"MICHAEL BACA PHOTOGRAPHY")))),s["default"].createElement("div",{className:"col col-md-4 col-sm-6 k-post"},s["default"].createElement(u.Link,{to:"/sara_alterman",className:"k-box k-6 "+(this.state.siteVisited?"noAnimation":"bounceIn")},s["default"].createElement("div",{className:"k-entry"},s["default"].createElement("div",{className:"k-thumbnail"},s["default"].createElement("img",{src:x["default"],alt:"pic",className:"k-shadow"})),s["default"].createElement("h5",null,"SARA FAITH ALTERMAN")))))}}]),t}(i.Component);t["default"]=(0,f.connect)(function(e){return e},function(e){return{dispatch:e}})(P)},257:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={turnOffAnimation:function(){return{type:"TURN_OFF_ANIMATION",payload:{siteVisited:!0}}}};t["default"]=a},258:function(e,t,a){e.exports=a.p+"wikirace.ef425c152e77a3409c7cef2626f2d8f5.jpg"},259:function(e,t,a){e.exports=a.p+"angular_blog.0a1d57b5a6224439c2ebc43b1ceb8f3d.jpg"},260:function(e,t,a){e.exports=a.p+"linguo.1727413c0ff13252e12a1253036decde.jpg"},261:function(e,t,a){e.exports=a.p+"bomberman.17c960aaec18ddc6a0ec7e0857666a3a.jpg"},262:function(e,t,a){e.exports=a.p+"michael_baca.85f5ab44ccc2e4f82ea2239aa55d1cce.jpg"},263:function(e,t,a){e.exports=a.p+"sara_alterman.04475367e5a4f562170b44a13f961587.jpg"},264:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(1),s=n(i),u=a(30),f=n(u),d=a(191),p=a(163),m=a(257),h=n(m),b=a(186),g=(n(b),a(265)),E=n(g),v=function(e){function t(e){o(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={project:null,prev:null,next:null,images:[]},console.log("PROJECT GET INITIAL STATE"),a}return l(t,e),c(t,[{key:"setImagePaths",value:function(e){for(var t=[],a=1;a<=e.imagecount;a++)t.push(""+e.pathname.substring(1)+a);return t}},{key:"setCurrentProject",value:function(e){var t=void 0,a=this.props.projects.find(function(a,n){return t=n,a.pathname===e});return a.index=t,a}},{key:"getIndices",value:function(e){var t=this.props.projects.length-1,a=void 0,n=void 0;switch(e){case 0:a=t,n=1;break;case t:a=t-1,n=0;break;default:a=e-1,n=e+1}return{prevIdx:a,nextIdx:n}}},{key:"createImages",value:function(e){return e.map(function(e,t){return s["default"].createElement("div",{className:"k-image-entry",key:t},s["default"].createElement("img",{className:"k-shadow",src:E["default"][e],alt:"pic"}))})}},{key:"updateState",value:function(e){var t=this.setCurrentProject(e),a=this.props.projects[this.getIndices(t.index).prevIdx],n=this.props.projects[this.getIndices(t.index).nextIdx],o=this.setImagePaths(t);return{project:t,next:n,prev:a,images:o}}},{key:"handlePrevProject",value:function(e){d.browserHistory.push(this.state.prev.pathname);var t=this.updateState(this.state.prev.pathname);this.setState(Object.assign({},t))}},{key:"handleNextProject",value:function(e){console.log("HANDLE ROUTE CHANGE"),console.log("TARGET: ",e.target),console.log("ID: ",e.target.id),d.browserHistory.push(this.state.next.pathname);var t=this.updateState(this.state.next.pathname);this.setState(Object.assign({},t))}},{key:"componentWillMount",value:function(){console.log("PROJECT COMPONENT WILL MOUNT"),this.setState(Object.assign({},this.updateState(this.props.location.pathname)))}},{key:"componentDidMount",value:function(){console.log("PROJECT COMPONENT DID MOUNT"),this.props.siteVisited||(console.log("PROJECT DISPATCH ACTION"),this.props.dispatch(h["default"].turnOffAnimation()))}},{key:"componentDidUpdate",value:function(){console.log("COMPONENT DID UPDATE"),f["default"].findDOMNode(this.refs.project).className="project-container",f["default"].findDOMNode(this.refs.project.parentElement).scrollTop=0,f["default"].findDOMNode(this.refs.project).className+=" fadeInLeft"}},{key:"render",value:function(){return s["default"].createElement("div",{ref:"project",className:"project-container fadeInLeft"},s["default"].createElement("div",{className:"k-panel k-shadow"},s["default"].createElement("div",{className:"panel-body"},s["default"].createElement("div",{className:"k-title-group"},s["default"].createElement("div",null,s["default"].createElement("h2",null,this.state.project.projectname," ",s["default"].createElement("small",null," - ",this.state.project.date))),s["default"].createElement("div",null,s["default"].createElement("a",{href:this.state.project.github,target:"_blank",className:"btn btn-default k-shadow"},s["default"].createElement("i",{className:"fa fa-github"})," ",s["default"].createElement("span",null,"GITHUB")),this.state.project.website?s["default"].createElement("a",{href:this.state.project.website,target:"_blank",className:"btn btn-default k-shadow"},s["default"].createElement("i",{className:"fa fa-globe"})," ",s["default"].createElement("span",null,"WEBSITE")):"")),s["default"].createElement("div",{className:"k-desc-group"},s["default"].createElement("hr",null),s["default"].createElement("div",null,s["default"].createElement("p",null,s["default"].createElement("strong",null,"Description:")),s["default"].createElement("ul",null,s["default"].createElement("li",null,s["default"].createElement("strong",null,"About:")," ",this.state.project.description.about),s["default"].createElement("li",null,s["default"].createElement("strong",null,"Role:")," ",this.state.project.description.role))),s["default"].createElement("div",null,s["default"].createElement("p",null,s["default"].createElement("strong",null,"Technologies:")),s["default"].createElement("ul",null,s["default"].createElement("li",null,s["default"].createElement("strong",null,"Front-End:")," ",this.state.project.technologies.front.join(", ")),s["default"].createElement("li",null,s["default"].createElement("strong",null,"Back-End:")," ",this.state.project.technologies.back.join(", ")),s["default"].createElement("li",null,s["default"].createElement("strong",null,"Tools:")," ",this.state.project.technologies.tools.join(", "))))))),s["default"].createElement("div",{className:"image-list"},this.createImages(this.state.images)),s["default"].createElement("div",{className:"k-btn-group"},s["default"].createElement(d.Link,{to:"/"},s["default"].createElement("button",{className:"btn btn-default k-shadow"},s["default"].createElement("i",{className:"fa fa-home"})," Back")),s["default"].createElement("div",null,s["default"].createElement("button",{onClick:this.handlePrevProject.bind(this),className:"btn btn-default k-shadow",id:"prev"},s["default"].createElement("i",{className:"fa fa-arrow-left"})," Prev"),s["default"].createElement("button",{onClick:this.handleNextProject.bind(this),className:"btn btn-default k-shadow",id:"next"},"Next ",s["default"].createElement("i",{className:"fa fa-arrow-right"})))))}}]),t}(i.Component);t["default"]=(0,p.connect)(function(e){return e},function(e){return{dispatch:e}})(v)},265:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(266),r=n(o),l=a(267),c=n(l),i=a(268),s=n(i),u=a(269),f=n(u),d=a(270),p=n(d),m=a(271),h=n(m),b=a(272),g=n(b),E=a(273),v=n(E),k=a(274),y=n(k),j=a(275),N=n(j),w=a(276),O=n(w),_=a(277),x=n(_),P=a(278),T=n(P),S=a(279),M=n(S),A=a(280),I=n(A),C=a(281),L=n(C);t["default"]={angular_blog1:r["default"],angular_blog2:c["default"],angular_blog3:s["default"],linguo1:f["default"],linguo2:p["default"],linguo3:h["default"],michael_baca1:g["default"],michael_baca2:v["default"],michael_baca3:y["default"],sara_alterman1:N["default"],sara_alterman2:O["default"],wikirace1:x["default"],wikirace2:T["default"],wikirace3:M["default"],wikirace4:I["default"],wikirace5:L["default"]}},266:function(e,t,a){e.exports=a.p+"angular_blog1.ec1ccbfdb42c065838b65678108213a2.jpg"},267:function(e,t,a){e.exports=a.p+"angular_blog2.e1c31647c61b3344a120ed84c1acb1bc.jpg"},268:function(e,t,a){e.exports=a.p+"angular_blog3.54c051e12e96a13b7965484a56e1318f.jpg"},269:function(e,t,a){e.exports=a.p+"linguo1.44d76d65712c54e442b610087e848d9a.jpg"},270:function(e,t,a){e.exports=a.p+"linguo2.eea935451add48afc6292d74f29090a5.jpg"},271:function(e,t,a){e.exports=a.p+"linguo3.5055372ff7dc707a358c4515cceab3e3.jpg"},272:function(e,t,a){e.exports=a.p+"michael_baca1.488535b7e506e3db652f148a75c31f27.jpg"},273:function(e,t,a){e.exports=a.p+"michael_baca2.35ea2f0ac81e13987669ac7e1a811827.jpg"},274:function(e,t,a){e.exports=a.p+"michael_baca3.7adbfd832799b22953de0139e11822eb.jpg"},275:function(e,t,a){e.exports=a.p+"sara_alterman1.86b8b3da703996cc724af2dc169bf937.jpg"},276:function(e,t,a){e.exports=a.p+"sara_alterman2.6b48044d5562fb5e59b06c7e6e1329b5.jpg"},277:function(e,t,a){e.exports=a.p+"wikirace1.4260c160e12a9432f72e10e073f6416c.jpg"},278:function(e,t,a){e.exports=a.p+"wikirace2.2bd72f1cdd7bf1ec82863116417cfaff.jpg"},279:function(e,t,a){e.exports=a.p+"wikirace3.76120d7c7ba27f841db0e6d45b5f3e89.jpg"},280:function(e,t,a){e.exports=a.p+"wikirace4.920f11e4c3f8efc8dca8cd6146a01fa0.jpg"},281:function(e,t,a){e.exports=a.p+"wikirace5.517490cba79c6d309d2e4001fd9b48c7.jpg"}});