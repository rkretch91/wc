(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),l=a(218);t.default=function(e){var t=e.data.markdownRemark,a=t.frontmatter.title;return r.a.createElement(l.a,{location:e.location},r.a.createElement("div",{className:"blog-banner",style:{backgroundImage:"url('"+t.frontmatter.photo+"')"}}),r.a.createElement("div",{className:"blog-post"},r.a.createElement("h1",null,a),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("p",{style:{paddingTop:"20px"}},t.frontmatter.date)))};var c="3194991098"},215:function(e,t,a){var n;e.exports=(n=a(223))&&n.default||n},216:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(59),i=a.n(o);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return o.navigate});a(215);var s=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||l,staticQueryData:e})})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},218:function(e,t,a){"use strict";a(219),a(21),a(12);var n=a(220),r=a(0),l=a.n(r),c=a(11),o=a.n(c),i=a(59),s=a.n(i),m=function(e){var t=e.langs.map(function(e){return l.a.createElement(s.a,{to:e.link,key:e.langKey,style:{color:"white"}},l.a.createElement("li",{className:"language-selector",selected:e.selected},function(e){if(!1===e.selected)return"zh"===e.langKey?"中":e.langKey}(e)))});return l.a.createElement("section",{style:{float:"right"}},l.a.createElement("ul",null,t))};m.propTypes={langs:o.a.array};var u=m,d=a(221),p=a.n(d),E=a(236),f=a.n(E),h=a(237);var g=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navbarIsActive:"navbar-item dropdown is-hidden-desktop",prevScrollpos:function(){if("undefined"!=typeof window)return window.pageYOffset},visible:!0},t.navbarOpenDropdown=function(){t.setState({navbarIsActive:"navbar-item dropdown is-active is-hidden-desktop"})},t.navbarCloseDropdown=function(){t.setState({navbarIsActive:"navbar-item dropdown is-hidden-desktop"})},t.languageCheck=function(){return t.props.langs[0].selected?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/en/about/"},"About Us"),l.a.createElement(s.a,{to:"/en/locations/"},"Locations"),l.a.createElement(s.a,{to:"/en/partners/"},"Partners"),l.a.createElement(s.a,{to:"/en/news/"},"News"),l.a.createElement(s.a,{to:"/en/impact/"},"Impact"),l.a.createElement("button",{className:"button"},l.a.createElement(s.a,{to:"/en/contact/"},"Get In Touch"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/about/"},"关于我们"),l.a.createElement(s.a,{to:"/locations/"},"地址"),l.a.createElement(s.a,{to:"/partners/"},"合作公司"),l.a.createElement(s.a,{to:"/news/"},"新闻"),l.a.createElement(s.a,{to:"/impact/"},"社会"),l.a.createElement("button",{className:"button"},l.a.createElement(s.a,{to:"/contact/"},"联系我们")))},t.handleScroll=function(){var e=t.state.prevScrollpos;if("undefined"!=typeof window){var a=window.pageYOffset,n=e>a&&e<300;0===a?t.setState({prevScrollpos:a,visible:!0}):t.setState({prevScrollpos:a,visible:n})}},t.languageCheckMobile=function(){return t.props.langs[0].selected?l.a.createElement(h.slide,{width:"70%"},l.a.createElement(s.a,{id:"home",className:"menu-item",to:"/en"},"Home"),l.a.createElement(s.a,{id:"about",className:"menu-item",to:"/en/about"},"About Us"),l.a.createElement(s.a,{id:"location",className:"menu-item",to:"/en/locations"},"Locations"),l.a.createElement(s.a,{id:"partners",className:"menu-item",to:"/en/partners"},"Partners"),l.a.createElement(s.a,{id:"news",className:"menu-item",to:"/en/news"},"News"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/en/impact"},"Impact"),l.a.createElement("hr",null),l.a.createElement(s.a,{className:"menu-item--small",to:"/en/contact/"},"Get In Touch")):l.a.createElement(h.slide,{width:"70%"},l.a.createElement(s.a,{id:"home",className:"menu-item",to:"/"},"Home"),l.a.createElement(s.a,{id:"about",className:"menu-item",to:"/about"},"关于我们"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/locations"},"地址"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/partners"},"合作公司"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/news"},"新闻"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/impact"},"社会"),l.a.createElement("hr",null),l.a.createElement(s.a,{className:"menu-item--small",to:"/contact"},"联系我们"))},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:"125px",display:"flex",justifyContent:"space-between",position:"fixed",width:"100%"},className:f()("big-header",{"big-header--hidden":!this.state.visible})},l.a.createElement("div",{style:{flex:"500px"}},l.a.createElement(s.a,{to:"/"},l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:p.a,alt:"wecarewc-logo"})))),l.a.createElement("div",{className:"nav-menu is-hidden-touch"},this.languageCheck()),l.a.createElement(u,{langs:this.props.langs})),l.a.createElement("div",{style:{zIndex:"1000"}},this.languageCheckMobile()))},n}(l.a.Component),v=a(222),b=a.n(v);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer columns is-mobile is-multiline"},l.a.createElement("div",{className:"mailer-footer column is-two-fifths-desktop is-half-mobile"},l.a.createElement("h1",null,"Mailing List"),l.a.createElement("form",{name:"Mailer Form",method:"POST","data-netlify":"true",action:"/thank-you"},l.a.createElement("input",{type:"hidden",name:"form-name",value:"Mailer Form"}),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control",style:{paddingBottom:"10px"}},l.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. ilovetoilets@gmail.com",name:"email"})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button",id:"grey"},"Submit"))))),l.a.createElement("div",{className:"nav-menu-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("div",{className:"center-that-text"},l.a.createElement("h1",null,"Menu"),l.a.createElement(s.a,{to:"/en/about/"},l.a.createElement("p",null,"About Us")),l.a.createElement(s.a,{to:"/en/locations/"},l.a.createElement("p",null,"Locations")),l.a.createElement(s.a,{to:"/en/partners/"},l.a.createElement("p",null,"Partners")),l.a.createElement(s.a,{to:"/en/news/"},l.a.createElement("p",null,"News")),l.a.createElement(s.a,{to:"/en/impact/"},l.a.createElement("p",null,"Impact")),l.a.createElement(s.a,{to:"/en/contact/"},l.a.createElement("p",null,"Careers")))),l.a.createElement("div",{className:"wechat-icon-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h1",null,"Get In Touch"),l.a.createElement("h2",null,"WeChat"),l.a.createElement("img",{src:b.a,alt:"WeCare WC Qr Code"})),l.a.createElement("div",{className:"address-phone-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h2",null,"Address"),l.a.createElement("p",null,"Wework Nanjing West Road",l.a.createElement("br",null),"819 Nanjing West Road",l.a.createElement("br",null),"(near Taixing Road)",l.a.createElement("br",null),"3rd Floor",l.a.createElement("br",null),"200040 Shanghai P.R. China"),l.a.createElement("br",null),l.a.createElement("h2",null,"Customer Service"),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Phone:")," +86(0)21-51853537"),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Email:")," curious@wecarewc.com"),l.a.createElement("br",null),l.a.createElement("h2",null,"Other Inquires"),l.a.createElement(s.a,{to:"contact"},l.a.createElement("button",{className:"button is-primary"},"Get In Touch")))),l.a.createElement("div",{className:"copyright has-text-centered"},l.a.createElement("p",null,(new Date).getFullYear()," WeCare WC. All Rights Reserved.")))},n}(l.a.Component),w=a(238),N=a.n(w),k=a(235),C=a(216),S=a(217),x=(a(242),a(244),function(e){var t=e.children,a=e.location,r=e.i18nMessages;return l.a.createElement(C.b,{query:"2825539598",render:function(e){var n=a.pathname,c=e.site.siteMetadata.languages,o=c.langs,i=c.defaultLangKey,s=Object(k.getCurrentLangKey)(o,i,n),m=("/"+s).replace("/"+i+"/","/"),u=Object(k.getLangs)(o,s,Object(k.getUrlForLang)(m,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+i+"/","/")})});return l.a.createElement(S.a,{locale:s,messages:r},l.a.createElement("div",null,l.a.createElement(N.a,{title:"WeCare WC",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(g,{langs:u}),l.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},t),l.a.createElement(y,null)))},data:n})});x.propTypes={children:o.a.func};t.a=x},220:function(e){e.exports={data:{site:{siteMetadata:{languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},221:function(e,t,a){e.exports=a.p+"static/wecarewc-logo-white-9741893910473454ef9d01f007f29fd4.png"},222:function(e,t,a){e.exports=a.p+"static/wecarewc_qrcode-1fbaeebb87b46b341c57855606fcbebf.png"},223:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(84),i=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=i},239:function(e,t){},240:function(e,t){},241:function(e,t){},243:function(e,t){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2f4659ac822e637379f5.js.map