(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{174:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return o});var n=t(0),r=t.n(n),l=t(192);a.default=function(e){var a=e.data.markdownRemark,t=a.frontmatter.title;return r.a.createElement(l.a,{location:e.location},r.a.createElement("div",{className:"blog-banner",style:{backgroundImage:"url('"+a.frontmatter.photo+"')"}}),r.a.createElement("div",{className:"blog-post"},r.a.createElement("h1",null,t),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),r.a.createElement("p",{style:{paddingTop:"20px"}},a.frontmatter.date)))};var o="3194991098"},189:function(e,a,t){var n;e.exports=(n=t(198))&&n.default||n},190:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),r=t.n(n),l=t(11),o=t.n(l),c=t(59),i=t.n(c);t.d(a,"a",function(){return i.a});t(189);var s=r.a.createContext({});function m(e){var a=e.staticQueryData,t=e.data,n=e.query,l=e.render,o=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,o&&l(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var a=e.data,t=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:a,query:t,render:n||l,staticQueryData:e})})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},192:function(e,a,t){"use strict";t(193),t(21),t(13);var n=t(194),r=t(0),l=t.n(r),o=t(11),c=t.n(o),i=t(59),s=t.n(i),m=function(e){var a=e.langs.map(function(e){return l.a.createElement(s.a,{to:e.link,key:e.langKey,style:{color:"white"}},l.a.createElement("li",{className:"language-selector",selected:e.selected},function(e){if(!1===e.selected)return"zh"===e.langKey?"中":e.langKey}(e)))});return l.a.createElement("section",{style:{float:"right"}},l.a.createElement("ul",null,a))};m.propTypes={langs:c.a.array};var u=m,d=t(195),p=t.n(d),g=t(206),E=t.n(g),h=t(196),b=t.n(h);var f=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={navbarIsActive:"navbar-item dropdown is-hidden-desktop",prevScrollpos:function(){if("undefined"!=typeof window)return window.pageYOffset},visible:!0},a.navbarOpenDropdown=function(){a.setState({navbarIsActive:"navbar-item dropdown is-active is-hidden-desktop"})},a.navbarCloseDropdown=function(){a.setState({navbarIsActive:"navbar-item dropdown is-hidden-desktop"})},a.languageCheck=function(){return a.props.langs[0].selected?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/en/about/"},"About Us"),l.a.createElement("a",{href:"/en/locations/"},"Locations"),l.a.createElement(s.a,{to:"/en/partners/"},"Partners"),l.a.createElement(s.a,{to:"/en/news/"},"News"),l.a.createElement("a",{href:"/en/about/"},"Impact"),l.a.createElement("button",{className:"button"},l.a.createElement("a",{href:"/en/about/"},"Get In Touch"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/about/"},"关于我们"),l.a.createElement(s.a,{to:"/locations/"},"地址"),l.a.createElement("a",{href:"/partners/"},"合作公司"),l.a.createElement(s.a,{to:"/news/"},"新闻"),l.a.createElement("a",{href:"/about/"},"社会"),l.a.createElement("button",{className:"button"},l.a.createElement("a",{href:"/en/about/"},"联系我们")))},a.handleScroll=function(){var e=a.state.prevScrollpos;if("undefined"!=typeof window){var t=window.pageYOffset,n=e>t;a.setState({prevScrollpos:t,visible:n})}},a.languageCheckMobile=function(){return a.props.langs[0].selected?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/en/about/",className:"dropdown-item"},"About Us"),l.a.createElement("a",{href:"/en/locations/",className:"dropdown-item"},"Locations"),l.a.createElement(s.a,{to:"/en/partners/",className:"dropdown-item"},"Partners"),l.a.createElement(s.a,{to:"/en/news/",className:"dropdown-item"},"News"),l.a.createElement("a",{href:"/en/about/",className:"dropdown-item"},"Impact"),l.a.createElement("a",{href:"/en/about/",className:"dropdown-item"},"Get In Touch")):l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{to:"/about/",className:"dropdown-item"},"关于我们"),l.a.createElement("a",{href:"/locations/",className:"dropdown-item"},"地址"),l.a.createElement(s.a,{to:"/partners/",className:"dropdown-item"},"合作公司"),l.a.createElement(s.a,{to:"/news/",className:"dropdown-item"},"新闻"),l.a.createElement("a",{href:"/about/",className:"dropdown-item"},"社会"),l.a.createElement("a",{href:"/about/",className:"dropdown-item"},"联系我们"))},a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){return l.a.createElement("div",{style:{height:"125px",display:"flex",justifyContent:"space-between",position:"fixed",width:"100%"},className:E()("big-header",{"big-header--hidden":!this.state.visible})},l.a.createElement("div",{style:{flex:"500px"}},l.a.createElement(s.a,{to:"/"},l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:p.a,alt:"wecarewc-logo"})))),l.a.createElement("div",{className:"nav-menu is-hidden-touch"},this.languageCheck()),l.a.createElement("div",{className:this.state.navbarIsActive,onClick:"navbar-item dropdown is-active is-hidden-desktop"===this.state.navbarIsActive?this.navbarCloseDropdown:this.navbarOpenDropdown,onBlur:this.navbarCloseDropdown},l.a.createElement("div",{className:"dropdown-trigger"},l.a.createElement("img",{className:"hamburger",alt:"hamburger-menu",src:b.a,"aria-haspopup":"true","aria-controls":"dropdown-menu"})),l.a.createElement("div",{className:"dropdown-menu dropdown-right",id:"dropdown-menu",role:"menu"},l.a.createElement("div",{className:"dropdown-content"},this.languageCheckMobile()))),l.a.createElement(u,{langs:this.props.langs}))},n}(l.a.Component),w=t(197),v=t.n(w);var N=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer columns is-mobile is-multiline"},l.a.createElement("div",{className:"mailer-footer column is-two-fifths-desktop is-half-mobile"},l.a.createElement("h1",null,"Mailing List"),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control",style:{paddingBottom:"10px"}},l.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. ilovetoilets@gmail.com"})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button",id:"grey"},"Submit")))),l.a.createElement("div",{className:"nav-menu-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("div",{className:"center-that-text"},l.a.createElement("h1",null,"Menu"),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"About Us")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Location")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Partners")),l.a.createElement(s.a,{to:"/en/news/"},l.a.createElement("p",null,"News")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Impact")),l.a.createElement("a",{href:"/en/about/"},l.a.createElement("p",null,"Careers")))),l.a.createElement("div",{className:"wechat-icon-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h1",null,"Get In Touch"),l.a.createElement("h2",null,"WeChat"),l.a.createElement("img",{src:v.a,alt:"WeCare WC Qr Code"})),l.a.createElement("div",{className:"address-phone-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h2",null,"Address"),l.a.createElement("p",null,"Wework Nanjing West Road",l.a.createElement("br",null),"819 Nanjing West Road",l.a.createElement("br",null),"(near Taixing Road)",l.a.createElement("br",null),"3rd Floor",l.a.createElement("br",null),"200040 Shanghai P.R. China"),l.a.createElement("br",null),l.a.createElement("h2",null,"Customer Service"),l.a.createElement("p",null,l.a.createElement("span",{id:"bold"},"Phone:")," +86(0)21-51853537"),l.a.createElement("p",null,l.a.createElement("span",{id:"bold"},"Email:")," curious@wecarewc.com"),l.a.createElement("br",null),l.a.createElement("h2",null,"Other Inquires"),l.a.createElement("button",{className:"button is-primary"},"Get In Touch"))),l.a.createElement("div",{className:"copyright has-text-centered"},l.a.createElement("p",null,(new Date).getFullYear()," WeCare WC. All Rights Reserved.")))},n}(l.a.Component),I=t(207),y=t.n(I),M=t(201),C=t(190),L=t(191),j=(t(211),t(213),function(e){var a=e.children,t=e.location,r=e.i18nMessages;return l.a.createElement(C.b,{query:"2825539598",render:function(e){var n=t.pathname,o=e.site.siteMetadata.languages,c=o.langs,i=o.defaultLangKey,s=Object(M.getCurrentLangKey)(c,i,n),m=("/"+s).replace("/"+i+"/","/"),u=Object(M.getLangs)(c,s,Object(M.getUrlForLang)(m,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+i+"/","/")})});return l.a.createElement(L.a,{locale:s,messages:r},l.a.createElement("div",null,l.a.createElement(y.a,{title:"WeCare WC",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(f,{langs:u}),l.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},a),l.a.createElement(N,null)))},data:n})});j.propTypes={children:c.a.func};a.a=j},194:function(e){e.exports={data:{site:{siteMetadata:{languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},195:function(e,a,t){e.exports=t.p+"static/wecarewc-logo-white-9741893910473454ef9d01f007f29fd4.png"},196:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMzIDQwIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPm1lbnU8L3RpdGxlPjxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7IiBkPSJNMjkuNDY1IDI1LjVoLTI1LjkzYy0wLjQxNCAwLTAuNzUtMC4zMzYtMC43NS0wLjc1czAuMzM2LTAuNzUgMC43NS0wLjc1aDI1LjkzYzAuNDE0IDAgMC43NSAwLjMzNiAwLjc1IDAuNzVzLTAuMzM2IDAuNzUtMC43NSAwLjc1ek0yOS40NjUgMTYuNzVoLTI1LjkzYy0wLjQxNCAwLTAuNzUtMC4zMzYtMC43NS0wLjc1czAuMzM2LTAuNzUgMC43NS0wLjc1aDI1LjkzYzAuNDE0IDAgMC43NSAwLjMzNiAwLjc1IDAuNzVzLTAuMzM2IDAuNzUtMC43NSAwLjc1ek0yOS40NjUgOGgtMjUuOTNjLTAuNDE0IDAtMC43NS0wLjMzNi0wLjc1LTAuNzVzMC4zMzYtMC43NSAwLjc1LTAuNzVoMjUuOTNjMC40MTQgMCAwLjc1IDAuMzM2IDAuNzUgMC43NXMtMC4zMzYgMC43NS0wLjc1IDAuNzV6Ii8+PHRleHQgeD0iMCIgeT0iNDciIGZpbGw9IiNmZmYiIGZvbnQtc2l6ZT0iNXB4IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1mYW1pbHk9IidIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwtVW5pY29kZSwgQXJpYWwsIFNhbnMtc2VyaWYiPkNyZWF0ZWQgYnkgUmluZWVzaDwvdGV4dD48dGV4dCB4PSIwIiB5PSI1MiIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSI1cHgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbC1Vbmljb2RlLCBBcmlhbCwgU2Fucy1zZXJpZiI+ZnJvbSB0aGUgTm91biBQcm9qZWN0PC90ZXh0Pjwvc3ZnPgo="},197:function(e,a,t){e.exports=t.p+"static/wecarewc_qrcode-1fbaeebb87b46b341c57855606fcbebf.png"},198:function(e,a,t){"use strict";t.r(a);t(21);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),c=t(85),i=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};i.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=i},208:function(e,a){},209:function(e,a){},210:function(e,a){},212:function(e,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5b5391e012eec9fcd4dd.js.map