(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{182:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=(t(192),t(201)),c=t(317),o=t.n(c);a.default=function(e){return r.a.createElement(l.a,{location:e.location},r.a.createElement("div",{className:"location-wrap has-text-centered"},r.a.createElement(o.a,{items:[{original:"https://res.cloudinary.com/wecare-wc/image/upload/v1563378006/XTD%20Plaza/XTD-Plaza-Entrance-2.jpg",thumbnail:"https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563378006/XTD%20Plaza/XTD-Plaza-Entrance-2.jpg"},{original:"https://res.cloudinary.com/wecare-wc/image/upload/v1559134935/XTD%20Plaza/XTD-Plaza-Restroom.jpg",thumbnail:"https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134935/XTD%20Plaza/XTD-Plaza-Restroom.jpg"},{original:"https://res.cloudinary.com/wecare-wc/image/upload/v1559134934/XTD%20Plaza/XTD-Plaza-Sink2.jpg",thumbnail:"https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134934/XTD%20Plaza/XTD-Plaza-Sink2.jpg"},{original:"https://res.cloudinary.com/wecare-wc/image/upload/v1559134934/XTD%20Plaza/XTD-Plaza-Toilets.jpg",thumbnail:"https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134934/XTD%20Plaza/XTD-Plaza-Toilets.jpg"},{original:"https://res.cloudinary.com/wecare-wc/image/upload/v1559134767/XTD%20Plaza/XTD-Plaza-Lounge.jpg",thumbnail:"https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134767/XTD%20Plaza/XTD-Plaza-Lounge.jpg"},{original:"https://res.cloudinary.com/wecare-wc/image/upload/v1559134766/XTD%20Plaza/XTD-Plaza-Sink1.jpg",thumbnail:"https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134766/XTD%20Plaza/XTD-Plaza-Sink1.jpg"},{original:"https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Sink.jpg",thumbnail:"https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134765/XTD%20Plaza/XTD-Plaza-Sink.jpg"},{original:"https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Nursing-Room.jpg",thumbnail:"https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134765/XTD%20Plaza/XTD-Plaza-Nursing-Room.jpg"},{original:"https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Changing-Room.jpg",thumbnail:"https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134765/XTD%20Plaza/XTD-Plaza-Changing-Room.jpg"}],lazyLoad:!0,showPlayButton:!1})))}},191:function(e,a,t){var n;e.exports=(n=t(199))&&n.default||n},192:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=t(59),i=t.n(o);t.d(a,"a",function(){return i.a}),t.d(a,"c",function(){return o.navigate});t(191);var s=r.a.createContext({});function m(e){var a=e.staticQueryData,t=e.data,n=e.query,l=e.render,c=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var a=e.data,t=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:a,query:t,render:n||l,staticQueryData:e})})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},194:function(e,a,t){"use strict";t(195),t(21),t(13);var n=t(196),r=t(0),l=t.n(r),c=t(11),o=t.n(c),i=t(59),s=t.n(i),m=function(e){var a=e.langs.map(function(e){return l.a.createElement(s.a,{to:e.link,key:e.langKey,style:{color:"white"}},l.a.createElement("li",{className:"language-selector",selected:e.selected},function(e){if(!1===e.selected)return"zh"===e.langKey?"中":e.langKey}(e)))});return l.a.createElement("section",{style:{float:"right"}},l.a.createElement("ul",null,a))};m.propTypes={langs:o.a.array};var u=m,d=t(197),p=t.n(d),h=t(205),g=t.n(h),f=t(206);var E=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={navbarIsActive:"navbar-item dropdown is-hidden-desktop",prevScrollpos:function(){if("undefined"!=typeof window)return window.pageYOffset},visible:!0},a.navbarOpenDropdown=function(){a.setState({navbarIsActive:"navbar-item dropdown is-active is-hidden-desktop"})},a.navbarCloseDropdown=function(){a.setState({navbarIsActive:"navbar-item dropdown is-hidden-desktop"})},a.languageCheck=function(){return a.props.langs[0].selected?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/en/about/"},"About Us"),l.a.createElement("a",{href:"/en/locations/"},"Locations"),l.a.createElement(s.a,{to:"/en/partners/"},"Partners"),l.a.createElement(s.a,{to:"/en/news/"},"News"),l.a.createElement("a",{href:"/en/about/"},"Impact"),l.a.createElement("button",{className:"button"},l.a.createElement("a",{href:"/en/about/"},"Get In Touch"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/about/"},"关于我们"),l.a.createElement(s.a,{to:"/locations/"},"地址"),l.a.createElement("a",{href:"/partners/"},"合作公司"),l.a.createElement(s.a,{to:"/news/"},"新闻"),l.a.createElement("a",{href:"/about/"},"社会"),l.a.createElement("button",{className:"button"},l.a.createElement("a",{href:"/en/about/"},"联系我们")))},a.handleScroll=function(){var e=a.state.prevScrollpos;if("undefined"!=typeof window){var t=window.pageYOffset,n=e>t;a.setState({prevScrollpos:t,visible:n})}},a.languageCheckMobile=function(){return a.props.langs[0].selected?l.a.createElement(f.slide,{width:"70%"},l.a.createElement("a",{id:"home",className:"menu-item",href:"/en"},"Home"),l.a.createElement("a",{id:"about",className:"menu-item",href:"/en/about"},"About Us"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/en/locations"},"Locations"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/en/partners"},"Partners"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/en/news"},"News"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"Impact"),l.a.createElement("hr",null),l.a.createElement("a",{className:"menu-item--small",href:""},"Get In Touch")):l.a.createElement(f.slide,{width:"70%"},l.a.createElement("a",{id:"home",className:"menu-item",href:"/"},"Home"),l.a.createElement("a",{id:"about",className:"menu-item",href:"/about"},"关于我们"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/locations"},"地址"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/partners"},"合作公司"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/news"},"新闻"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"社会"),l.a.createElement("hr",null),l.a.createElement("a",{className:"menu-item--small",href:""},"联系我们"))},a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:"125px",display:"flex",justifyContent:"space-between",position:"fixed",width:"100%"},className:g()("big-header",{"big-header--hidden":!this.state.visible})},l.a.createElement("div",{style:{flex:"500px"}},l.a.createElement(s.a,{to:"/"},l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:p.a,alt:"wecarewc-logo"})))),l.a.createElement("div",{className:"nav-menu is-hidden-touch"},this.languageCheck()),l.a.createElement(u,{langs:this.props.langs})),l.a.createElement("div",{style:{zIndex:"1000"}},this.languageCheckMobile()))},n}(l.a.Component),w=t(198),b=t.n(w);var v=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer columns is-mobile is-multiline"},l.a.createElement("div",{className:"mailer-footer column is-two-fifths-desktop is-half-mobile"},l.a.createElement("h1",null,"Mailing List"),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control",style:{paddingBottom:"10px"}},l.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. ilovetoilets@gmail.com"})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button",id:"grey"},"Submit")))),l.a.createElement("div",{className:"nav-menu-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("div",{className:"center-that-text"},l.a.createElement("h1",null,"Menu"),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"About Us")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Location")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Partners")),l.a.createElement(s.a,{to:"/en/news/"},l.a.createElement("p",null,"News")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Impact")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Careers")))),l.a.createElement("div",{className:"wechat-icon-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h1",null,"Get In Touch"),l.a.createElement("h2",null,"WeChat"),l.a.createElement("img",{src:b.a,alt:"WeCare WC Qr Code"})),l.a.createElement("div",{className:"address-phone-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h2",null,"Address"),l.a.createElement("p",null,"Wework Nanjing West Road",l.a.createElement("br",null),"819 Nanjing West Road",l.a.createElement("br",null),"(near Taixing Road)",l.a.createElement("br",null),"3rd Floor",l.a.createElement("br",null),"200040 Shanghai P.R. China"),l.a.createElement("br",null),l.a.createElement("h2",null,"Customer Service"),l.a.createElement("p",null,l.a.createElement("span",{id:"bold"},"Phone:")," +86(0)21-51853537"),l.a.createElement("p",null,l.a.createElement("span",{id:"bold"},"Email:")," curious@wecarewc.com"),l.a.createElement("br",null),l.a.createElement("h2",null,"Other Inquires"),l.a.createElement("button",{className:"button is-primary"},"Get In Touch"))),l.a.createElement("div",{className:"copyright has-text-centered"},l.a.createElement("p",null,(new Date).getFullYear()," WeCare WC. All Rights Reserved.")))},n}(l.a.Component),y=t(207),T=t.n(y),D=t(203),P=t(192),z=t(193),N=(t(211),t(213),function(e){var a=e.children,t=e.location,r=e.i18nMessages;return l.a.createElement(P.b,{query:"2825539598",render:function(e){var n=t.pathname,c=e.site.siteMetadata.languages,o=c.langs,i=c.defaultLangKey,s=Object(D.getCurrentLangKey)(o,i,n),m=("/"+s).replace("/"+i+"/","/"),u=Object(D.getLangs)(o,s,Object(D.getUrlForLang)(m,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+i+"/","/")})});return l.a.createElement(z.a,{locale:s,messages:r},l.a.createElement("div",null,l.a.createElement(T.a,{title:"WeCare WC",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(E,{langs:u}),l.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},a),l.a.createElement(v,null)))},data:n})});N.propTypes={children:o.a.func};a.a=N},196:function(e){e.exports={data:{site:{siteMetadata:{languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},197:function(e,a,t){e.exports=t.p+"static/wecarewc-logo-white-9741893910473454ef9d01f007f29fd4.png"},198:function(e,a,t){e.exports=t.p+"static/wecarewc_qrcode-1fbaeebb87b46b341c57855606fcbebf.png"},199:function(e,a,t){"use strict";t.r(a);t(21);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=t(85),i=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json)):null};i.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=i},201:function(e,a,t){"use strict";t(21);var n=t(0),r=t.n(n),l=t(194),c=t(193),o=t(202),i=t.n(o),s=t(226),m=t.n(s);t(227);Object(c.b)(m.a),a.a=function(e){return r.a.createElement(l.a,Object.assign({},e,{i18nMessages:i.a}))}},202:function(e,a){e.exports={selectLanguage:"Select your language"}},208:function(e,a){},209:function(e,a){},210:function(e,a){},212:function(e,a){}}]);
//# sourceMappingURL=component---src-pages-locations-xtd-plaza-en-js-6f9388c4a2266eedbe08.js.map