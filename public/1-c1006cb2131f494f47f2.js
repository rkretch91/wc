(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{149:function(e,a,t){"use strict";t(205),t(28),t(29);var n=t(243),r=t(0),l=t.n(r),c=t(4),o=t.n(c),i=t(6),s=t.n(i),m=t(146),u=t.n(m),d=t(148),p=function(e){var a=e.langs.map(function(e){return l.a.createElement(u.a,{to:e.link,key:e.langKey,style:{color:"white"}},l.a.createElement("li",{className:"language-selector",selected:e.selected},function(e){if(0==e.selected)return"zh"==e.langKey?"中":e.langKey}(e)))});return l.a.createElement("section",{style:{float:"right"}},l.a.createElement("ul",null,a))};p.propTypes={langs:o.a.array};var h=p,f=t(267),g=t.n(f),w=t(268),E=t.n(w),b=t(269),N=t.n(b),v=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={navbarIsActive:"navbar-item dropdown is-hidden-desktop",prevScrollpos:function(){if("undefined"!=typeof window)return window.pageYOffset},visible:!0},a.navbarOpenDropdown=function(){a.setState({navbarIsActive:"navbar-item dropdown is-active is-hidden-desktop"})},a.navbarCloseDropdown=function(){a.setState({navbarIsActive:"navbar-item dropdown is-hidden-desktop"})},a.languageCheck=function(){return a.props.langs[0].selected?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{to:"/en/about/"},"About Us"),l.a.createElement("a",{href:"#"},"Locations"),l.a.createElement("a",{href:"#"},"Partners"),l.a.createElement(u.a,{to:"/en/news/"},"News"),l.a.createElement("a",{href:"#"},"Impact"),l.a.createElement("button",{className:"button"},l.a.createElement("a",{href:"#"},"Get In Touch"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{to:"/about/"},"关于我们"),l.a.createElement("a",{href:"#"},"地址"),l.a.createElement("a",{href:"#"},"合作公司"),l.a.createElement(u.a,{to:"/news/"},"新闻"),l.a.createElement("a",{href:"#"},"社会"),l.a.createElement("button",{className:"button"},l.a.createElement("a",{href:"#"},"联系我们")))},a.handleScroll=function(){var e=a.state.prevScrollpos;if("undefined"!=typeof window){var t=window.pageYOffset,n=e>t;a.setState({prevScrollpos:t,visible:n})}},a.languageCheckMobile=function(){return a.props.langs[0].selected?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{to:"/en/about/",className:"dropdown-item"},"About Us"),l.a.createElement("a",{href:"#",className:"dropdown-item"},"Locations"),l.a.createElement("a",{href:"#",className:"dropdown-item"},"Partners"),l.a.createElement(u.a,{to:"/en/news/",className:"dropdown-item"},"News"),l.a.createElement("a",{href:"#",className:"dropdown-item"},"Impact"),l.a.createElement("a",{href:"#",className:"dropdown-item"},"Get In Touch")):l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{to:"/about/",className:"dropdown-item"},"关于我们"),l.a.createElement("a",{href:"#",className:"dropdown-item"},"地址"),l.a.createElement("a",{href:"#",className:"dropdown-item"},"合作公司"),l.a.createElement(u.a,{to:"/news/",className:"dropdown-item"},"新闻"),l.a.createElement("a",{href:"#",className:"dropdown-item"},"社会"),l.a.createElement("a",{href:"#",className:"dropdown-item"},"联系我们"))},a}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e;return l.a.createElement("div",{style:(e={position:"relative",height:"125px",display:"flex",justifyContent:"space-between"},e.position="fixed",e.width="100%",e),className:E()("big-header",{"big-header--hidden":!this.state.visible})},l.a.createElement("div",{style:{flex:"500px"}},l.a.createElement(u.a,{to:"/"},l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:g.a})))),l.a.createElement("div",{className:"nav-menu is-hidden-touch"},this.languageCheck()),l.a.createElement("div",{className:this.state.navbarIsActive,onClick:"navbar-item dropdown is-active is-hidden-desktop"==this.state.navbarIsActive?this.navbarCloseDropdown:this.navbarOpenDropdown,onBlur:this.navbarCloseDropdown},l.a.createElement("div",{className:"dropdown-trigger"},l.a.createElement("img",{className:"hamburger",src:N.a,"aria-haspopup":"true","aria-controls":"dropdown-menu"})),l.a.createElement("div",{className:"dropdown-menu dropdown-right",id:"dropdown-menu",role:"menu"},l.a.createElement("div",{className:"dropdown-content"},this.languageCheckMobile()))),l.a.createElement(h,{langs:this.props.langs}))},a}(l.a.Component),y=t(270),I=t.n(y),C=function(e){function a(){return e.apply(this,arguments)||this}return s()(a,e),a.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer columns is-mobile is-multiline"},l.a.createElement("div",{className:"mailer-footer column is-two-fifths-desktop is-half-mobile"},l.a.createElement("h1",null,"Mailing List"),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control",style:{paddingBottom:"10px"}},l.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. ilovetoilets@gmail.com"})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button",id:"grey"},"Submit")))),l.a.createElement("div",{className:"nav-menu-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("div",{className:"center-that-text"},l.a.createElement("h1",null,"Menu"),l.a.createElement("a",{href:"#"},l.a.createElement("p",null,"About Us")),l.a.createElement("a",{href:"#"},l.a.createElement("p",null,"Location")),l.a.createElement("a",{href:"#"},l.a.createElement("p",null,"Partners")),l.a.createElement(u.a,{to:"/en/news/"},l.a.createElement("p",null,"News")),l.a.createElement("a",{href:"#"},l.a.createElement("p",null,"Impact")),l.a.createElement("a",{href:"#"},l.a.createElement("p",null,"Careers")))),l.a.createElement("div",{className:"wechat-icon-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h1",null,"Get In Touch"),l.a.createElement("h2",null,"WeChat"),l.a.createElement("img",{src:I.a,alt:"WeCare WC Qr Code"})),l.a.createElement("div",{className:"address-phone-footer column is-one-fifth-desktop is-half-mobile"},l.a.createElement("h2",null,"Address"),l.a.createElement("p",null,"Wework Nanjing West Road",l.a.createElement("br",null),"819 Nanjing West Road",l.a.createElement("br",null),"(near Taixing Road)",l.a.createElement("br",null),"3rd Floor",l.a.createElement("br",null),"200040 Shanghai P.R. China"),l.a.createElement("br",null),l.a.createElement("h2",null,"Customer Service"),l.a.createElement("p",null,l.a.createElement("span",{id:"bold"},"Phone:")," +86(0)21-51853537"),l.a.createElement("p",null,l.a.createElement("span",{id:"bold"},"Email:")," curious@wecarewc.com"),l.a.createElement("br",null),l.a.createElement("h2",null,"Other Inquires"),l.a.createElement("button",{className:"button is-primary"},"Get In Touch"))),l.a.createElement("div",{className:"copyright has-text-centered"},l.a.createElement("p",null,(new Date).getFullYear()," WeCare WC. All Rights Reserved.")))},a}(l.a.Component),M=t(271),L=t.n(M),z=t(210),j=t(154),A=(t(332),t(335),function(e){var a=e.children,t=e.location,r=e.i18nMessages;return l.a.createElement(j.StaticQuery,{query:"2825539598",render:function(e){var n=t.pathname,c=e.site.siteMetadata.languages,o=c.langs,i=c.defaultLangKey,s=Object(z.getCurrentLangKey)(o,i,n),m=("/"+s).replace("/"+i+"/","/"),u=Object(z.getLangs)(o,s,Object(z.getUrlForLang)(m,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+i+"/","/")})});return l.a.createElement(d.a,{locale:s,messages:r},l.a.createElement("div",null,l.a.createElement(L.a,{title:"WeCare WC",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(v,{langs:u}),l.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},a),l.a.createElement(C,null)))},data:n})});A.propTypes={children:o.a.func};a.a=A},154:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),l=t(4),c=t.n(l),o=t(146),i=t.n(o);t.d(a,"Link",function(){return i.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var s=t(206),m=t.n(s);t.d(a,"PageRenderer",function(){return m.a});var u=t(43);t.d(a,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},206:function(e,a,t){var n;e.exports=(n=t(246))&&n.default||n},243:function(e){e.exports={data:{site:{siteMetadata:{languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},246:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),o=t(63),i=t(2),s=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},247:function(e,a){},255:function(e,a){},262:function(e,a){},267:function(e,a,t){e.exports=t.p+"static/wecarewc-logo-white-9741893910473454ef9d01f007f29fd4.png"},269:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMzIDQwIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPm1lbnU8L3RpdGxlPjxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7IiBkPSJNMjkuNDY1IDI1LjVoLTI1LjkzYy0wLjQxNCAwLTAuNzUtMC4zMzYtMC43NS0wLjc1czAuMzM2LTAuNzUgMC43NS0wLjc1aDI1LjkzYzAuNDE0IDAgMC43NSAwLjMzNiAwLjc1IDAuNzVzLTAuMzM2IDAuNzUtMC43NSAwLjc1ek0yOS40NjUgMTYuNzVoLTI1LjkzYy0wLjQxNCAwLTAuNzUtMC4zMzYtMC43NS0wLjc1czAuMzM2LTAuNzUgMC43NS0wLjc1aDI1LjkzYzAuNDE0IDAgMC43NSAwLjMzNiAwLjc1IDAuNzVzLTAuMzM2IDAuNzUtMC43NSAwLjc1ek0yOS40NjUgOGgtMjUuOTNjLTAuNDE0IDAtMC43NS0wLjMzNi0wLjc1LTAuNzVzMC4zMzYtMC43NSAwLjc1LTAuNzVoMjUuOTNjMC40MTQgMCAwLjc1IDAuMzM2IDAuNzUgMC43NXMtMC4zMzYgMC43NS0wLjc1IDAuNzV6Ii8+PHRleHQgeD0iMCIgeT0iNDciIGZpbGw9IiNmZmYiIGZvbnQtc2l6ZT0iNXB4IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1mYW1pbHk9IidIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwtVW5pY29kZSwgQXJpYWwsIFNhbnMtc2VyaWYiPkNyZWF0ZWQgYnkgUmluZWVzaDwvdGV4dD48dGV4dCB4PSIwIiB5PSI1MiIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSI1cHgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbC1Vbmljb2RlLCBBcmlhbCwgU2Fucy1zZXJpZiI+ZnJvbSB0aGUgTm91biBQcm9qZWN0PC90ZXh0Pjwvc3ZnPgo="},270:function(e,a,t){e.exports=t.p+"static/wecarewc_qrcode-1fbaeebb87b46b341c57855606fcbebf.png"},334:function(e,a){},335:function(e,a,t){}}]);