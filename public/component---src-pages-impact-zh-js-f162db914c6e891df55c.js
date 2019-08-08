(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(245),o=a(59),c=a.n(o),i=a(305),s=a.n(i);t.default=function(e){return r.a.createElement(l.a,{location:e.location},r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("div",{className:"blog-banner",style:{boxShadow:"none",background:"linear-gradient(rgba(0,0,0,0.0),rgba(255,255,255,0.0)), url("+s.a+")"}}),r.a.createElement("h1",{style:{position:"absolute",top:"30vh",left:"0",right:"0",marginLeft:"auto",marginRight:"auto",color:"white"},className:"has-text-centered"},"Impact"),r.a.createElement("div",{className:"about-wrap has-text-centered"},r.a.createElement("h2",null,"Aside from increasing the standard of public restrooms, we are heavily involved in making",r.a.createElement("br",null),"a positive impact on the community and the environment around us.",r.a.createElement("br",null),r.a.createElement("br",null),"Check out some of our recent community projects below."),r.a.createElement("hr",{style:{opacity:".3",marginBottom:"40px"}}),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-full"},r.a.createElement("img",{src:"https://res.cloudinary.com/wecare-wc/image/upload/v1563525318/tokyo2020-wecarewc/tokyo-2020-2.jpg",alt:"corian-counter",id:"justthisonce"}))),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column has-text-left"},r.a.createElement("h2",null,"WeCare WC x Tokyo 2020"),r.a.createElement("p",null,"The world is brimming with inspirational people, and China is at the forefront of it. Meet Jiachao, a triathlon contender for the 2020 Tokyo Paralympic games."),r.a.createElement("p",null,"His story is dotted by obstacles, but what he has achieved as a result of unbridled persistence few have even attempted in a lifetime. Born in the small town of Jianshui in Yunnan province, Jiachao lost his arm in an electrical accident at just five years old. Rather than letting the incident drag him down, he joined the Yunnan disabled swimming team. In just a few years, his hard work and discipline in the sport paid off, granting him a coveted spot on the national swimming team. To top it off, he later went on to become a 2012 London Paralympic champion. Retiring from the sport in 2015, he supplemented his athletic wins with academic ones and obtained a Master’s degree in Physical Education from Yunnan Normal University."),r.a.createElement("p",null,"But Jiachao is now back and stronger than ever; this time adding cycling and running to the mix in a triathlon. Unlike swimming, however, China does not have a national team for triathlon."),r.a.createElement("p",null,"At WeCare WC, highly value persistence, inspiration, and social impact, and we are beyond proud to be one of Jiachao’s officials sponsors and donors for the competition. Jiachao is living proof that anyone is capable of greatness and we look forward to being by his side up until his big win at the 2020 Tokyo Paralympic games."))),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("img",{src:"https://res.cloudinary.com/wecare-wc/image/upload/v1563525317/tokyo2020-wecarewc/tokyo-2020-4.jpg",alt:"dyson-airblade",id:"justthisonce"})),r.a.createElement("div",{className:"column"},r.a.createElement("img",{src:"https://res.cloudinary.com/wecare-wc/image/upload/v1563525317/tokyo2020-wecarewc/tokyo-2020-5.jpg",alt:"ellai-toilet",id:"justthisonce"}))),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-hidden-desktop"},r.a.createElement("img",{src:"https://res.cloudinary.com/wecare-wc/image/upload/v1563525318/tokyo2020-wecarewc/tokyo-2020-1.png",alt:"corian-counter",id:"justthisonce"}))),r.a.createElement("hr",{style:{opacity:".3",marginBottom:"40px"}}),r.a.createElement("h2",null,"We are always looking for new ways to support our community.",r.a.createElement("br",null),"Feel free to get in touch if you have an idea we can collaborate on."),r.a.createElement(c.a,{to:"/en/contact"},r.a.createElement("button",{className:"button",style:{marginBottom:"40px"}},"Get in Touch")))))}},215:function(e,t,a){var n;e.exports=(n=a(223))&&n.default||n},216:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=a(59),i=a.n(c);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return c.navigate});a(215);var s=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&l(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||l,staticQueryData:e})})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},218:function(e,t,a){"use strict";a(219),a(21),a(12);var n=a(220),r=a(0),l=a.n(r),o=a(11),c=a.n(o),i=a(59),s=a.n(i),m=function(e){var t=e.langs.map(function(e){return l.a.createElement(s.a,{to:e.link,key:e.langKey,style:{color:"white"}},l.a.createElement("li",{className:"language-selector",selected:e.selected},function(e){if(!1===e.selected)return"zh"===e.langKey?"中":e.langKey}(e)))});return l.a.createElement("section",{style:{float:"right"}},l.a.createElement("ul",null,t))};m.propTypes={langs:c.a.array};var u=m,d=a(221),p=a.n(d),h=a(236),E=a.n(h),f=a(237);var g=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navbarIsActive:"navbar-item dropdown is-hidden-desktop",prevScrollpos:function(){if("undefined"!=typeof window)return window.pageYOffset},visible:!0},t.navbarOpenDropdown=function(){t.setState({navbarIsActive:"navbar-item dropdown is-active is-hidden-desktop"})},t.navbarCloseDropdown=function(){t.setState({navbarIsActive:"navbar-item dropdown is-hidden-desktop"})},t.languageCheck=function(){return t.props.langs[0].selected?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/en/about/"},"About Us"),l.a.createElement(s.a,{to:"/en/locations/"},"Locations"),l.a.createElement(s.a,{to:"/en/partners/"},"Partners"),l.a.createElement(s.a,{to:"/en/news/"},"News"),l.a.createElement(s.a,{to:"/en/impact/"},"Impact"),l.a.createElement("button",{className:"button"},l.a.createElement(s.a,{to:"/en/contact/"},"Get In Touch"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/about/"},"关于我们"),l.a.createElement(s.a,{to:"/locations/"},"地址"),l.a.createElement(s.a,{to:"/partners/"},"合作公司"),l.a.createElement(s.a,{to:"/news/"},"新闻"),l.a.createElement(s.a,{to:"/impact/"},"社会"),l.a.createElement("button",{className:"button"},l.a.createElement(s.a,{to:"/contact/"},"联系我们")))},t.handleScroll=function(){var e=t.state.prevScrollpos;if("undefined"!=typeof window){var a=window.pageYOffset,n=e>a&&e<300;0===a?t.setState({prevScrollpos:a,visible:!0}):t.setState({prevScrollpos:a,visible:n})}},t.languageCheckMobile=function(){return t.props.langs[0].selected?l.a.createElement(f.slide,{width:"70%"},l.a.createElement(s.a,{id:"home",className:"menu-item",to:"/en"},"Home"),l.a.createElement(s.a,{id:"about",className:"menu-item",to:"/en/about"},"About Us"),l.a.createElement(s.a,{id:"location",className:"menu-item",to:"/en/locations"},"Locations"),l.a.createElement(s.a,{id:"partners",className:"menu-item",to:"/en/partners"},"Partners"),l.a.createElement(s.a,{id:"news",className:"menu-item",to:"/en/news"},"News"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/en/impact"},"Impact"),l.a.createElement("hr",null),l.a.createElement(s.a,{className:"menu-item--small",to:"/en/contact/"},"Get In Touch")):l.a.createElement(f.slide,{width:"70%"},l.a.createElement(s.a,{id:"home",className:"menu-item",to:"/"},"Home"),l.a.createElement(s.a,{id:"about",className:"menu-item",to:"/about"},"关于我们"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/locations"},"地址"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/partners"},"合作公司"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/news"},"新闻"),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/impact"},"社会"),l.a.createElement("hr",null),l.a.createElement(s.a,{className:"menu-item--small",to:"/contact"},"联系我们"))},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:"125px",display:"flex",justifyContent:"space-between",position:"fixed",width:"100%"},className:E()("big-header",{"big-header--hidden":!this.state.visible})},l.a.createElement("div",{style:{flex:"500px"}},l.a.createElement(s.a,{to:"/"},l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:p.a,alt:"wecarewc-logo"})))),l.a.createElement("div",{className:"nav-menu is-hidden-touch"},this.languageCheck()),l.a.createElement(u,{langs:this.props.langs})),l.a.createElement("div",{style:{zIndex:"1000"}},this.languageCheckMobile()))},n}(l.a.Component),b=a(222),v=a.n(b);var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer columns is-mobile is-multiline"},l.a.createElement("div",{className:"mailer-footer column is-two-fifths-desktop is-half-mobile"},l.a.createElement("h1",null,"Mailing List"),l.a.createElement("form",{name:"Mailer Form",method:"POST","data-netlify":"true",action:"/thank-you"},l.a.createElement("input",{type:"hidden",name:"form-name",value:"Mailer Form"}),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control",style:{paddingBottom:"10px"}},l.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. ilovetoilets@gmail.com",name:"email"})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button",id:"grey"},"Submit"))))),l.a.createElement("div",{className:"nav-menu-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("div",{className:"center-that-text"},l.a.createElement("h1",null,"Menu"),l.a.createElement(s.a,{to:"/en/about/"},l.a.createElement("p",null,"About Us")),l.a.createElement(s.a,{to:"/en/locations/"},l.a.createElement("p",null,"Locations")),l.a.createElement(s.a,{to:"/en/partners/"},l.a.createElement("p",null,"Partners")),l.a.createElement(s.a,{to:"/en/news/"},l.a.createElement("p",null,"News")),l.a.createElement(s.a,{to:"/en/impact/"},l.a.createElement("p",null,"Impact")),l.a.createElement(s.a,{to:"/en/contact/"},l.a.createElement("p",null,"Careers")))),l.a.createElement("div",{className:"wechat-icon-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h1",null,"Get In Touch"),l.a.createElement("h2",null,"WeChat"),l.a.createElement("img",{src:v.a,alt:"WeCare WC Qr Code"})),l.a.createElement("div",{className:"address-phone-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h2",null,"Address"),l.a.createElement("p",null,"Wework Nanjing West Road",l.a.createElement("br",null),"819 Nanjing West Road",l.a.createElement("br",null),"(near Taixing Road)",l.a.createElement("br",null),"3rd Floor",l.a.createElement("br",null),"200040 Shanghai P.R. China"),l.a.createElement("br",null),l.a.createElement("h2",null,"Customer Service"),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Phone:")," +86(0)21-51853537"),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Email:")," curious@wecarewc.com"),l.a.createElement("br",null),l.a.createElement("h2",null,"Other Inquires"),l.a.createElement(s.a,{to:"contact"},l.a.createElement("button",{className:"button is-primary"},"Get In Touch")))),l.a.createElement("div",{className:"copyright has-text-centered"},l.a.createElement("p",null,(new Date).getFullYear()," WeCare WC. All Rights Reserved.")))},n}(l.a.Component),y=a(238),N=a.n(y),k=a(235),C=a(216),j=a(217),x=(a(242),a(244),function(e){var t=e.children,a=e.location,r=e.i18nMessages;return l.a.createElement(C.b,{query:"2825539598",render:function(e){var n=a.pathname,o=e.site.siteMetadata.languages,c=o.langs,i=o.defaultLangKey,s=Object(k.getCurrentLangKey)(c,i,n),m=("/"+s).replace("/"+i+"/","/"),u=Object(k.getLangs)(c,s,Object(k.getUrlForLang)(m,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+i+"/","/")})});return l.a.createElement(j.a,{locale:s,messages:r},l.a.createElement("div",null,l.a.createElement(N.a,{title:"WeCare WC",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(g,{langs:u}),l.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},t),l.a.createElement(w,null)))},data:n})});x.propTypes={children:c.a.func};t.a=x},220:function(e){e.exports={data:{site:{siteMetadata:{languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},221:function(e,t,a){e.exports=a.p+"static/wecarewc-logo-white-9741893910473454ef9d01f007f29fd4.png"},222:function(e,t,a){e.exports=a.p+"static/wecarewc_qrcode-1fbaeebb87b46b341c57855606fcbebf.png"},223:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=a(84),i=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=i},239:function(e,t){},240:function(e,t){},241:function(e,t){},243:function(e,t){},245:function(e,t,a){"use strict";a(21);var n=a(0),r=a.n(n),l=a(218),o=a(217),c=a(246),i=a.n(c),s=a(249),m=a.n(s);a(250);Object(o.b)(m.a),t.a=function(e){return r.a.createElement(l.a,Object.assign({},e,{i18nMessages:i.a}))}},246:function(e,t){e.exports={selectLanguage:"中文"}},305:function(e,t,a){e.exports=a.p+"static/impact-d46cb8657045914cd6522ffa29ea9a8f.jpg"}}]);
//# sourceMappingURL=component---src-pages-impact-zh-js-f162db914c6e891df55c.js.map