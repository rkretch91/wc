(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(59),c=a.n(l),o=a(244);t.default=function(e){return r.a.createElement(o.a,{location:e.location},r.a.createElement("div",null,r.a.createElement("h1",null,"Oi da segunda pagina!"),r.a.createElement("p",null,"Bem viando a pagina 2"),r.a.createElement(c.a,{to:"/zh/"},"Voltar pro início")))}},214:function(e,t,a){var n;e.exports=(n=a(222))&&n.default||n},215:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(59),i=a.n(o);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return o.navigate});a(214);var s=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||l,staticQueryData:e})})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},217:function(e,t,a){"use strict";a(218),a(21),a(12);var n=a(219),r=a(0),l=a.n(r),c=a(11),o=a.n(c),i=a(59),s=a.n(i),m=function(e){var t=e.langs.map(function(e){return l.a.createElement(s.a,{to:e.link,key:e.langKey,style:{color:"white"}},l.a.createElement("li",{className:"language-selector",selected:e.selected},function(e){if(!1===e.selected)return"zh"===e.langKey?"中":e.langKey}(e)))});return l.a.createElement("section",{style:{float:"right"}},l.a.createElement("ul",null,t))};m.propTypes={langs:o.a.array};var u=m,d=a(220),p=a.n(d),E=a(235),f=a.n(E),h=a(236);var g=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navbarIsActive:"navbar-item dropdown is-hidden-desktop",prevScrollpos:function(){if("undefined"!=typeof window)return window.pageYOffset},visible:!0},t.navbarOpenDropdown=function(){t.setState({navbarIsActive:"navbar-item dropdown is-active is-hidden-desktop"})},t.navbarCloseDropdown=function(){t.setState({navbarIsActive:"navbar-item dropdown is-hidden-desktop"})},t.languageCheck=function(){return t.props.langs[0].selected?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/en/about/"},"About Us"),l.a.createElement(s.a,{to:"/en/locations/"},"Locations"),l.a.createElement(s.a,{to:"/en/partners/"},"Partners"),l.a.createElement(s.a,{to:"/en/news/"},"News"),l.a.createElement("a",{href:"/en/about/"},"Impact"),l.a.createElement("button",{className:"button"},l.a.createElement(s.a,{to:"/en/contact/"},"Get In Touch"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/about/"},"关于我们"),l.a.createElement(s.a,{to:"/locations/"},"地址"),l.a.createElement(s.a,{to:"/partners/"},"合作公司"),l.a.createElement(s.a,{to:"/news/"},"新闻"),l.a.createElement("a",{href:"/about/"},"社会"),l.a.createElement("button",{className:"button"},l.a.createElement(s.a,{to:"/contact/"},"联系我们")))},t.handleScroll=function(){var e=t.state.prevScrollpos;if("undefined"!=typeof window){var a=window.pageYOffset,n=e>a;t.setState({prevScrollpos:a,visible:n})}},t.languageCheckMobile=function(){return t.props.langs[0].selected?l.a.createElement(h.slide,{width:"70%"},l.a.createElement(s.a,{id:"home",className:"menu-item",to:"/en"},"Home"),l.a.createElement(s.a,{id:"about",className:"menu-item",to:"/en/about"},"About Us"),l.a.createElement(s.a,{id:"location",className:"menu-item",to:"/en/locations"},"Locations"),l.a.createElement(s.a,{id:"partners",className:"menu-item",to:"/en/partners"},"Partners"),l.a.createElement(s.a,{id:"news",className:"menu-item",to:"/en/news"},"News"),l.a.createElement("a",{id:"contact",className:"menu-item",to:"/en/news"},"Impact"),l.a.createElement("hr",null),l.a.createElement(s.a,{className:"menu-item--small",to:"/en/contact/"},"Get In Touch")):l.a.createElement(h.slide,{width:"70%"},l.a.createElement(s.a,{id:"home",className:"menu-item",to:"/"},"Home"),l.a.createElement(s.a,{id:"about",className:"menu-item",to:"/about"},"关于我们"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/locations"},"地址"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/partners"},"合作公司"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/news"},"新闻"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"社会"),l.a.createElement("hr",null),l.a.createElement(s.a,{className:"menu-item--small",to:"/contact"},"联系我们"))},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:"125px",display:"flex",justifyContent:"space-between",position:"fixed",width:"100%"},className:f()("big-header",{"big-header--hidden":!this.state.visible})},l.a.createElement("div",{style:{flex:"500px"}},l.a.createElement(s.a,{to:"/"},l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:p.a,alt:"wecarewc-logo"})))),l.a.createElement("div",{className:"nav-menu is-hidden-touch"},this.languageCheck()),l.a.createElement(u,{langs:this.props.langs})),l.a.createElement("div",{style:{zIndex:"1000"}},this.languageCheckMobile()))},n}(l.a.Component),b=a(221),v=a.n(b);var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer columns is-mobile is-multiline"},l.a.createElement("div",{className:"mailer-footer column is-two-fifths-desktop is-half-mobile"},l.a.createElement("h1",null,"Mailing List"),l.a.createElement("form",{name:"Mailer Form",method:"POST","data-netlify":"true",action:"/thank-you"},l.a.createElement("input",{type:"hidden",name:"form-name",value:"Mailer Form"}),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control",style:{paddingBottom:"10px"}},l.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. ilovetoilets@gmail.com",name:"email"})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button",id:"grey"},"Submit"))))),l.a.createElement("div",{className:"nav-menu-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("div",{className:"center-that-text"},l.a.createElement("h1",null,"Menu"),l.a.createElement(s.a,{to:"/en/about/"},l.a.createElement("p",null,"About Us")),l.a.createElement(s.a,{to:"/en/locations/"},l.a.createElement("p",null,"Locations")),l.a.createElement(s.a,{to:"/en/partners/"},l.a.createElement("p",null,"Partners")),l.a.createElement(s.a,{to:"/en/news/"},l.a.createElement("p",null,"News")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Impact")),l.a.createElement(s.a,{to:"/en/contact/"},l.a.createElement("p",null,"Careers")))),l.a.createElement("div",{className:"wechat-icon-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h1",null,"Get In Touch"),l.a.createElement("h2",null,"WeChat"),l.a.createElement("img",{src:v.a,alt:"WeCare WC Qr Code"})),l.a.createElement("div",{className:"address-phone-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h2",null,"Address"),l.a.createElement("p",null,"Wework Nanjing West Road",l.a.createElement("br",null),"819 Nanjing West Road",l.a.createElement("br",null),"(near Taixing Road)",l.a.createElement("br",null),"3rd Floor",l.a.createElement("br",null),"200040 Shanghai P.R. China"),l.a.createElement("br",null),l.a.createElement("h2",null,"Customer Service"),l.a.createElement("p",null,l.a.createElement("span",{id:"bold"},"Phone:")," +86(0)21-51853537"),l.a.createElement("p",null,l.a.createElement("span",{id:"bold"},"Email:")," curious@wecarewc.com"),l.a.createElement("br",null),l.a.createElement("h2",null,"Other Inquires"),l.a.createElement(s.a,{to:"contact"},l.a.createElement("button",{className:"button is-primary"},"Get In Touch")))),l.a.createElement("div",{className:"copyright has-text-centered"},l.a.createElement("p",null,(new Date).getFullYear()," WeCare WC. All Rights Reserved.")))},n}(l.a.Component),y=a(237),N=a.n(y),C=a(234),k=a(215),x=a(216),O=(a(241),a(243),function(e){var t=e.children,a=e.location,r=e.i18nMessages;return l.a.createElement(k.b,{query:"2825539598",render:function(e){var n=a.pathname,c=e.site.siteMetadata.languages,o=c.langs,i=c.defaultLangKey,s=Object(C.getCurrentLangKey)(o,i,n),m=("/"+s).replace("/"+i+"/","/"),u=Object(C.getLangs)(o,s,Object(C.getUrlForLang)(m,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+i+"/","/")})});return l.a.createElement(x.a,{locale:s,messages:r},l.a.createElement("div",null,l.a.createElement(N.a,{title:"WeCare WC",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(g,{langs:u}),l.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},t),l.a.createElement(w,null)))},data:n})});O.propTypes={children:o.a.func};t.a=O},219:function(e){e.exports={data:{site:{siteMetadata:{languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},220:function(e,t,a){e.exports=a.p+"static/wecarewc-logo-white-9741893910473454ef9d01f007f29fd4.png"},221:function(e,t,a){e.exports=a.p+"static/wecarewc_qrcode-1fbaeebb87b46b341c57855606fcbebf.png"},222:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(84),i=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=i},238:function(e,t){},239:function(e,t){},240:function(e,t){},242:function(e,t){},244:function(e,t,a){"use strict";a(21);var n=a(0),r=a.n(n),l=a(217),c=a(216),o=a(245),i=a.n(o),s=a(248),m=a.n(s);a(249);Object(c.b)(m.a),t.a=function(e){return r.a.createElement(l.a,Object.assign({},e,{i18nMessages:i.a}))}},245:function(e,t){e.exports={selectLanguage:"中文"}}}]);
//# sourceMappingURL=component---src-pages-page-2-zh-js-73ed1cf9f28ef3e3636b.js.map