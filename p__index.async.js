(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"ArA+":function(t,e,n){"use strict";n.d(e,"router",function(){return u});n("q1tI"),n("CnBM");var o=n("RFCh");n("o2JA");function i(){o["a"].push.apply(o["a"],arguments)}function r(){o["a"].replace.apply(o["a"],arguments)}function a(){o["a"].go.apply(o["a"],arguments)}function l(){o["a"].goBack.apply(o["a"],arguments)}function c(){o["a"].goForward.apply(o["a"],arguments)}var u={push:i,replace:r,go:a,goBack:l,goForward:c}},CnBM:function(t,e,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=n("q1tI"),c=n("17x9"),u=[],s=[];function h(t){return"object"===o(n.m)&&t().every(function(t){return"undefined"!==typeof t&&"undefined"!==typeof n.m[t]})}function p(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then(function(t){return n.loading=!1,n.loaded=t,t}).catch(function(t){throw n.loading=!1,n.error=t,t}),n}function d(t){var e={loading:!1,loaded:{},error:null},n=[];try{Object.keys(t).forEach(function(o){var i=p(t[o]);i.loading?e.loading=!0:(e.loaded[o]=i.loaded,e.error=i.error),n.push(i.promise),i.promise.then(function(t){e.loaded[o]=t}).catch(function(t){e.error=t})})}catch(t){e.error=t}return e.promise=Promise.all(n).then(function(t){return e.loading=!1,t}).catch(function(t){throw e.loading=!1,t}),e}function g(t){return t&&t.__esModule?t.default:t}function f(t,e){return l.createElement(g(t),e)}function m(t,e){var n,o;if(!e.loading)throw new Error("react-loadable requires a `loading` component");var p=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:f,webpack:null,modules:null},e),d=null;function g(){return d||(d=t(p.loader)),d.promise}return u.push(g),"function"===typeof p.webpack&&s.push(function(){if(h(p.webpack))return g()}),o=n=function(e){function n(o){i(this,n);var a=r(this,e.call(this,o));return a.retry=function(){a.setState({error:null,loading:!0,timedOut:!1}),d=t(p.loader),a._loadModule()},g(),a.state={error:d.error,pastDelay:!1,timedOut:!1,loading:d.loading,loaded:d.loaded},a}return a(n,e),n.preload=function(){return g()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var t=this;if(this.context.loadable&&Array.isArray(p.modules)&&p.modules.forEach(function(e){t.context.loadable.report(e)}),d.loading){"number"===typeof p.delay&&(0===p.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){t.setState({pastDelay:!0})},p.delay)),"number"===typeof p.timeout&&(this._timeout=setTimeout(function(){t.setState({timedOut:!0})},p.timeout));var e=function(){t._mounted&&(t.setState({error:d.error,loaded:d.loaded,loading:d.loading}),t._clearTimeouts())};d.promise.then(function(){e()}).catch(function(t){e()})}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(p.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?p.render(this.state.loaded,this.props):null},n}(l.Component),n.contextTypes={loadable:c.shape({report:c.func.isRequired})},o}function y(t){return m(p,t)}function b(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return m(d,t)}y.Map=b;var v=function(t){function e(){return i(this,e),r(this,t.apply(this,arguments))}return a(e,t),e.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},e.prototype.render=function(){return l.Children.only(this.props.children)},e}(l.Component);function k(t){var e=[];while(t.length){var n=t.pop();e.push(n())}return Promise.all(e).then(function(){if(t.length)return k(t)})}v.propTypes={report:c.func.isRequired},v.childContextTypes={loadable:c.shape({report:c.func.isRequired}).isRequired},y.Capture=v,y.preloadAll=function(){return new Promise(function(t,e){k(u).then(t,e)})},y.preloadReady=function(){return new Promise(function(t,e){k(s).then(t,t)})},t.exports=y},EDuE:function(t,e,n){t.exports={root:"root___2NYfR"}},QeBL:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),i=n.n(o),r=n("ArA+"),a=n("oJtD"),l=n.n(a),c=t=>{return i.a.createElement("div",{className:l.a.item},i.a.createElement("h2",{className:l.a.title},t.title),t.contents.map((t,e)=>{var n;return i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("p",{className:l.a.detail},t.titleText&&i.a.createElement("b",null,t.titleText+": "),t.desText,i.a.createElement("br",null),null===t||void 0===t?void 0:null===(n=t.refLinks)||void 0===n?void 0:n.map((t,e)=>i.a.createElement("a",{className:t.navLink?l.a.people:l.a.mail,href:t.refLink,key:e,onClick:()=>t.navLink&&r["router"].push(t.navLink)},t.title))))}))},u=c,s=n("dThV"),h=n.n(s),p=t=>{return i.a.createElement("div",{className:h.a.item},i.a.createElement("h2",{className:h.a.title},t.title),i.a.createElement("p",{className:h.a.detail},t.content))},d=p,g=n("EDuE"),f=n.n(g),m=[{title:"About we",content:"Ch\xfang t\xf4i l\xe0 m\u1ed9t Team v\u1ec1 c\xf4ng ngh\u1ec7, c\xf3 kh\u1ea3 n\u0103ng x\xe2y d\u1ef1ng c\xe1c h\u1ec7 th\u1ed1ng th\xf4ng tin ph\u1ee5c v\u1ee5 b\xe1n h\xe0ng, qu\u1ea3n tr\u1ecb doanh nghi\u1ec7p, nh\u1eadn di\u1ec7n th\u01b0\u01a1ng hi\u1ec7u, v\xe0 t\u1ea5t c\u1ea3 m\u1ecdi th\u1ee9 doanh nghi\u1ec7p c\u1ee7a b\u1ea1n c\u1ea7n!"},{title:"Our skills",contents:[{titleText:"Website",desText:"Ch\xfang t\xf4i c\xf3 th\u1ec3 x\xe2y d\u1ef1ng Website theo y\xeau c\u1ea7u c\u1ee7a b\u1ea1n ph\u1ee5c v\u1ee5 c\xe1c m\u1ee5c \u0111\xedch qu\u1ea3n tr\u1ecb, b\xe1n h\xe0ng, gi\u1edbi thi\u1ec7u th\u01b0\u01a1ng hi\u1ec7u... Ch\xfang t\xf4i c\xf3 th\u1ec3 x\xe2y d\u1ef1ng ph\xe1t tri\u1ec3n t\u1eeb m\u1eabu s\u1eb5n c\xf3 ho\u1eb7c x\xe2y d\u1ef1ng theo thi\u1ebft k\u1ebf c\u1ee7a b\u1ea1n. V\u1edbi 3 n\u0103m kinh nghi\u1ec7m trong vi\u1ec7c ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng Web, ch\xfang t\xf4i c\xf3 th\u1ec3 gi\u1ea3i quy\u1ebft m\u1ecdi y\xeau c\u1ea7u."},{titleText:"Mobile Application",desText:"Ch\xfang t\xf4i c\xf3 th\u1ec3 x\xe2y d\u1ef1ng \u1ee9ng d\u1ee5ng cho thi\u1ebft b\u1ecb di \u0111\u1ed9ng cho c\u1ea3 h\u1ec7 \u0111i\u1ec1u h\xe0nh Android v\xe0 Ios. Team ch\xfang t\xf4i s\u1ebd thi\u1ebft k\u1ebf, ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng theo nhu c\u1ea7u c\u1ee7a b\u1ea1n v\xe0 t\u01b0 v\u1ea5n v\u1ec1 \u0111i\u1ec1u kho\u1ea3n, ch\xednh s\xe1ch c\u1ee7a Google, Apple \u0111\u1ec3 \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n c\xf3 th\u1ec3 c\xf3 m\u1eb7t tr\xean c\u1eeda h\xe0ng c\u1ee7a Google v\xe0 Apple."},{titleText:"Backend Deverloper",desText:"K\u1ebft h\u1ee3p v\u1edbi Front-End l\xe0 Website v\xe0 Mobie Application, ch\xfang t\xf4i c\xf3 th\u1ec3 x\xe2y d\u1ef1ng Backend theo y\xeau c\u1ea7u c\u1ee7a v\u1ec1 h\u1ec7 th\u1ed1ng c\u1ee7a b\u1ea1n. Ch\xfang t\xf4i c\xf3 th\u1ec3 s\u1eed d\u1ee5ng c\xe1c c\xf4ng ngh\u1ec7 nh\u01b0 Oauth, Google API, Firebase, OneSignal,..."}]},{title:"Featured",contents:[{titleText:"iHealing",desText:'H\u1ec7 th\u1ed1ng ph\u1ee5c v\u1ee5 mua, b\xe1n d\u01b0\u1ee3c li\u1ec7u ch\u0103m s\xf3c s\u1ee9c kh\u1ecfe, h\u1ed7 tr\u1ee3 \u0111\u1eb7t l\u1ecbch Spa t\u1ea1i nh\xe0 ho\u1eb7c t\u1ea1i c\xe1c c\u01a1 s\u1edf li\xean k\u1ebft ("Grab trong ng\xe0nh spa"). Ngo\xe0i ra c\xf2n c\xe1c t\xednh n\u0103ng v\u1ec1 qu\u1ea3n tr\u1ecb, tin t\u1ee9c, th\xf4ng b\xe1o. Chi ti\u1ebft c\xf3 t\u1ea1i:',refLinks:[{title:"Website",refLink:"https://ihealing.vn/ihealing/#!/home"},{title:"Ch-Play",refLink:"https://play.google.com/store/apps/details?id=beauty.ihealing"},{title:"App-Store",refLink:"https://apps.apple.com/vn/app/ihealing/id1525729417"}]},{titleText:"Eaty",desText:"\u1ee8ng d\u1ee5ng v\u1ec1 dinh d\u01b0\u1ee1ng, gi\u1ea3m c\xe2n cung c\u1ea5p c\xe1c t\xednh n\u0103ng v\u1ec1 t\xednh to\xe1n dinh d\u01b0\u1ee1ng, theo d\xf5i l\u01b0\u1ee3ng cal n\u1ea1p v\xe0o v\xe0 ti\xeau th\u1ee5 h\xe0ng ng\xe0y. T\xednh to\xe1n \u0111\u01b0a ra c\xe1c ch\u1ebf \u0111\u1ed9 theo m\u1ee5c ti\xeau c\xe2n n\u1eb7ng \u0111\u1ec1 ra. \u1ee8ng d\u1ee5ng \u0111\xe3 c\xf3 h\u01a1n 20.000 tr\xean c\u1ea3 hai n\u1ec1n t\u1ea3ng. Chi ti\u1ebft c\xf3 t\u1ea1i:",refLinks:[{title:"Website",refLink:"https://eatsy.vn/"},{title:"Ch-Play",refLink:"https://play.google.com/store/apps/details?id=vn.com.eatsy"},{title:"App-Store",refLink:"https://apps.apple.com/vn/app/eatsy/id1537221492"}]},{titleText:"B\u1ea5t \u0111\u1ed9ng s\u1ea3n BR-VT",desText:"H\u1ec7 th\u1ed1ng h\u1ed7 tr\u1ee3 mua b\xe1n, k\xed g\u1eedi, th\u1ea9m \u0111\u1ecbnh gi\xe1 b\u1ea5t \u0111\u1ed9ng s\u1ea3n v\u1edbi c\xe1c t\xednh n\u0103ng \u0111\u0103ng b\xe0i, g\u1eedi th\xf4ng b\xe1o theo khu v\u1ef1c, Social login. Chi ti\u1ebft t\u1ea1i:",refLinks:[{title:"Website",refLink:"https://www.daianreal.com/"},{title:"Ch-Play",refLink:"https://play.google.com/store/apps/details?id=com.bds.brvt"},{title:"App-Store",refLink:"https://apps.apple.com/vn/app/b%E1%BA%A5t-%C4%91%E1%BB%99ng-s%E1%BA%A3n-b%C3%A0-r%E1%BB%8Ba-v%C5%A9ng-t%C3%A0u/id1586002009"}]},{titleText:"Life hacks",desText:"\u1ee8ng d\u1ee5ng v\u1ec1 m\u1eb9o v\u1eb7t trong cu\u1ed9c s\u1ed1ng, \u0111\xe3 t\xedch h\u1ee3p c\xe1c ch\u1ee9c n\u0103ng social login, tr\u1ea3 ph\xed mua h\xe0ng trong \u1ee9ng d\u1ee5ng (IAP),... \u01afng d\u1ee5ng \u0111\xe3 c\xf3 tr\xean 600.000 l\u01b0\u1ee3t t\u1ea3i tr\xean c\u1eeda h\xe0ng google v\xe0 apple",refLinks:[{title:"Ch-Play",refLink:"https://play.google.com/store/apps/details?id=rish.crearo.lifehacks"},{title:"App-Store",refLink:"https://apps.apple.com/us/app/scrolla-life-hacks/id1570076164"}]}]},{title:"My team",contents:[{titleText:"",desText:"C\xe1c th\xe0nh vi\xean c\u1ee7a ch\xfang t\xf4i \u0111\xe3 c\xf3 nhi\u1ec1u kinh nghi\u1ec7m trong l\u0129nh v\u1ef1c s\u1ed1 h\xf3a, x\xe2y d\u1ef1ng c\xe1c h\u1ec7 th\u1ed1ng th\xf4ng tin, \u1ee9ng d\u1ee5ng, website doanh nghi\u1ec7p. Key member:",refLinks:[{title:"TL: \u0110.H.Ph\u01b0\u1edbc,",navLink:"/phuoc-doan"},{title:"Key Member: N.H.Kh\xe1nh,",navLink:"/phuoc-doan"},{title:"N.Q.Huy,",navLink:"/phuoc-doan"},{title:"N.Q.H\u01b0ng,",navLink:"/phuoc-doan"},{title:"and more",navLink:"#"}]}]}];e["default"]=function(){return i.a.createElement("div",{className:f.a.root},i.a.createElement(d,{title:m[0].title,content:m[0].content}),i.a.createElement(u,{title:m[1].title,contents:m[1].contents}),i.a.createElement(u,{title:m[2].title,contents:m[2].contents}),i.a.createElement(u,{title:m[3].title,contents:m[3].contents}))}},dThV:function(t,e,n){t.exports={item:"item___2evSh",detail:"detail___f0GhW",title:"title___1wiDe"}},o2JA:function(t,e,n){"use strict"},oJtD:function(t,e,n){t.exports={item:"item___3AttU",detail:"detail___3GuNK",title:"title___oLt7M",mail:"mail___1R9Og",people:"people___23TNF"}}}]);