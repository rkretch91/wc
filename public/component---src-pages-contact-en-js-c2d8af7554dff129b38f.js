(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{210:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(231);var c=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).changeEmail=function(e){t.setState({email:e.target.value})},t.state={emailError:"",email:""},t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return r.a.createElement("form",{name:"Contact Form",method:"POST","data-netlify":"true",action:"/thank-you"},r.a.createElement("input",{type:"hidden",name:"form-name",value:"Contact Form"}),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Name",name:"name"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"email",placeholder:"Email",value:this.state.email,onChange:this.changeEmail,name:"email"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:"type"},r.a.createElement("option",null,"I am a..."),r.a.createElement("option",null,"Landlord/Developer"),r.a.createElement("option",null,"Brand Partner"),r.a.createElement("option",null,"Visitor"),r.a.createElement("option",null,"Other"))))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea",placeholder:"Message",defaultValue:"",name:"message"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null," "),"Put me on the mailing list for occasional WeCare WC News"))),r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-link"},"Submit"))))},n}(r.a.Component);a.default=function(e){return r.a.createElement(l.a,{location:e.location},r.a.createElement("div",{className:"contact-wrap has-text-centered"},r.a.createElement("h1",null,"We Want to Hear From You!"),r.a.createElement("p",null,"Do you want to partner up? Hear about jobs at WeCare WC? Provide us with some feedback? Or anything else? Send us a message below and we will get right back to you."),r.a.createElement(c,null)))}},213:function(e,a,t){var n;e.exports=(n=t(223))&&n.default||n},214:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=t(59),s=t.n(o);t.d(a,"a",function(){return s.a}),t.d(a,"c",function(){return o.navigate});t(213);var i=r.a.createContext({});function m(e){var a=e.staticQueryData,t=e.data,n=e.query,l=e.render,c=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var a=e.data,t=e.query,n=e.render,l=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(m,{data:a,query:t,render:n||l,staticQueryData:e})})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},217:function(e,a,t){"use strict";t(218),t(21),t(12);var n=t(220),r=t(0),l=t.n(r),c=t(11),o=t.n(c),s=t(59),i=t.n(s),m=function(e){var a=e.langs.map(function(e){return l.a.createElement(i.a,{to:e.link,key:e.langKey,style:{color:"white"}},l.a.createElement("li",{className:"language-selector",selected:e.selected},function(e){if(!1===e.selected)return"zh"===e.langKey?"中":e.langKey}(e)))});return l.a.createElement("section",{style:{float:"right"}},l.a.createElement("ul",null,a))};m.propTypes={langs:o.a.array};var u=m,d=t(221),p=t.n(d),E=t(234),f=t.n(E),h=t(235);var g=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={navbarIsActive:"navbar-item dropdown is-hidden-desktop",prevScrollpos:function(){if("undefined"!=typeof window)return window.pageYOffset},visible:!0},a.navbarOpenDropdown=function(){a.setState({navbarIsActive:"navbar-item dropdown is-active is-hidden-desktop"})},a.navbarCloseDropdown=function(){a.setState({navbarIsActive:"navbar-item dropdown is-hidden-desktop"})},a.languageCheck=function(){return a.props.langs[0].selected?l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{to:"/en/about/"},"About Us"),l.a.createElement("a",{href:"/en/locations/"},"Locations"),l.a.createElement(i.a,{to:"/en/partners/"},"Partners"),l.a.createElement(i.a,{to:"/en/news/"},"News"),l.a.createElement("a",{href:"/en/about/"},"Impact"),l.a.createElement("button",{className:"button"},l.a.createElement("a",{href:"/en/about/"},"Get In Touch"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{to:"/about/"},"关于我们"),l.a.createElement(i.a,{to:"/locations/"},"地址"),l.a.createElement("a",{href:"/partners/"},"合作公司"),l.a.createElement(i.a,{to:"/news/"},"新闻"),l.a.createElement("a",{href:"/about/"},"社会"),l.a.createElement("button",{className:"button"},l.a.createElement("a",{href:"/en/about/"},"联系我们")))},a.handleScroll=function(){var e=a.state.prevScrollpos;if("undefined"!=typeof window){var t=window.pageYOffset,n=e>t;a.setState({prevScrollpos:t,visible:n})}},a.languageCheckMobile=function(){return a.props.langs[0].selected?l.a.createElement(h.slide,{width:"70%"},l.a.createElement("a",{id:"home",className:"menu-item",href:"/en"},"Home"),l.a.createElement("a",{id:"about",className:"menu-item",href:"/en/about"},"About Us"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/en/locations"},"Locations"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/en/partners"},"Partners"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/en/news"},"News"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"Impact"),l.a.createElement("hr",null),l.a.createElement("a",{className:"menu-item--small",href:""},"Get In Touch")):l.a.createElement(h.slide,{width:"70%"},l.a.createElement("a",{id:"home",className:"menu-item",href:"/"},"Home"),l.a.createElement("a",{id:"about",className:"menu-item",href:"/about"},"关于我们"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/locations"},"地址"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/partners"},"合作公司"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/news"},"新闻"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"社会"),l.a.createElement("hr",null),l.a.createElement("a",{className:"menu-item--small",href:""},"联系我们"))},a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:"125px",display:"flex",justifyContent:"space-between",position:"fixed",width:"100%"},className:f()("big-header",{"big-header--hidden":!this.state.visible})},l.a.createElement("div",{style:{flex:"500px"}},l.a.createElement(i.a,{to:"/"},l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:p.a,alt:"wecarewc-logo"})))),l.a.createElement("div",{className:"nav-menu is-hidden-touch"},this.languageCheck()),l.a.createElement(u,{langs:this.props.langs})),l.a.createElement("div",{style:{zIndex:"1000"}},this.languageCheckMobile()))},n}(l.a.Component),b=t(222),v=t.n(b);var y=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer columns is-mobile is-multiline"},l.a.createElement("div",{className:"mailer-footer column is-two-fifths-desktop is-half-mobile"},l.a.createElement("h1",null,"Mailing List"),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control",style:{paddingBottom:"10px"}},l.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. ilovetoilets@gmail.com"})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button",id:"grey"},"Submit")))),l.a.createElement("div",{className:"nav-menu-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("div",{className:"center-that-text"},l.a.createElement("h1",null,"Menu"),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"About Us")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Location")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Partners")),l.a.createElement(i.a,{to:"/en/news/"},l.a.createElement("p",null,"News")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Impact")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Careers")))),l.a.createElement("div",{className:"wechat-icon-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h1",null,"Get In Touch"),l.a.createElement("h2",null,"WeChat"),l.a.createElement("img",{src:v.a,alt:"WeCare WC Qr Code"})),l.a.createElement("div",{className:"address-phone-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h2",null,"Address"),l.a.createElement("p",null,"Wework Nanjing West Road",l.a.createElement("br",null),"819 Nanjing West Road",l.a.createElement("br",null),"(near Taixing Road)",l.a.createElement("br",null),"3rd Floor",l.a.createElement("br",null),"200040 Shanghai P.R. China"),l.a.createElement("br",null),l.a.createElement("h2",null,"Customer Service"),l.a.createElement("p",null,l.a.createElement("span",{id:"bold"},"Phone:")," +86(0)21-51853537"),l.a.createElement("p",null,l.a.createElement("span",{id:"bold"},"Email:")," curious@wecarewc.com"),l.a.createElement("br",null),l.a.createElement("h2",null,"Other Inquires"),l.a.createElement("button",{className:"button is-primary"},"Get In Touch"))),l.a.createElement("div",{className:"copyright has-text-centered"},l.a.createElement("p",null,(new Date).getFullYear()," WeCare WC. All Rights Reserved.")))},n}(l.a.Component),N=t(236),w=t.n(N),C=t(233),k=t(214),x=t(215),S=(t(240),t(242),function(e){var a=e.children,t=e.location,r=e.i18nMessages;return l.a.createElement(k.b,{query:"2825539598",render:function(e){var n=t.pathname,c=e.site.siteMetadata.languages,o=c.langs,s=c.defaultLangKey,i=Object(C.getCurrentLangKey)(o,s,n),m=("/"+i).replace("/"+s+"/","/"),u=Object(C.getLangs)(o,i,Object(C.getUrlForLang)(m,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+s+"/","/")})});return l.a.createElement(x.a,{locale:i,messages:r},l.a.createElement("div",null,l.a.createElement(w.a,{title:"WeCare WC",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(g,{langs:u}),l.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},a),l.a.createElement(y,null)))},data:n})});S.propTypes={children:o.a.func};a.a=S},220:function(e){e.exports={data:{site:{siteMetadata:{languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},221:function(e,a,t){e.exports=t.p+"static/wecarewc-logo-white-9741893910473454ef9d01f007f29fd4.png"},222:function(e,a,t){e.exports=t.p+"static/wecarewc_qrcode-1fbaeebb87b46b341c57855606fcbebf.png"},223:function(e,a,t){"use strict";t.r(a);t(21);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=t(84),s=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},231:function(e,a,t){"use strict";t(21);var n=t(0),r=t.n(n),l=t(217),c=t(215),o=t(232),s=t.n(o),i=t(243),m=t.n(i);t(244);Object(c.b)(m.a),a.a=function(e){return r.a.createElement(l.a,Object.assign({},e,{i18nMessages:s.a}))}},232:function(e,a){e.exports={selectLanguage:"Select your language"}},237:function(e,a){},238:function(e,a){},239:function(e,a){},241:function(e,a){}}]);
//# sourceMappingURL=component---src-pages-contact-en-js-c2d8af7554dff129b38f.js.map