(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(234),l=a(59),M=a.n(l),r=(a(260),a(261),a(475)),L=a.n(r);t.default=function(e){return s.a.createElement(c.a,{location:e.location},s.a.createElement("div",{className:"contact-wrap has-text-centered",style:{height:"100vh"}},s.a.createElement("img",{src:L.a,alt:"Crying WeCare WC",style:{height:"200px"}}),s.a.createElement("h1",null,"You may be a little bit lost."),s.a.createElement("h1",null,"But don't worry!"),s.a.createElement(M.a,{to:"/en/"},s.a.createElement("button",{className:"button",id:"grey"},"Take Me Home"))))}},215:function(e,t,a){var n;e.exports=(n=a(223))&&n.default||n},216:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),s=a.n(n),c=a(11),l=a.n(c),M=a(59),r=a.n(M);a.d(t,"a",function(){return r.a}),a.d(t,"c",function(){return M.navigate});a(215);var L=s.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,l=a?a.data:t[n]&&t[n].data;return s.a.createElement(s.a.Fragment,null,l&&c(l),!l&&s.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return s.a.createElement(L.Consumer,null,function(e){return s.a.createElement(i,{data:t,query:a,render:n||c,staticQueryData:e})})};o.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},218:function(e,t,a){"use strict";a(219),a(21),a(12);var n=a(220),s=a(0),c=a.n(s),l=a(11),M=a.n(l),r=a(59),L=a.n(r),i=function(e){var t=e.langs.map(function(e){return c.a.createElement(L.a,{to:e.link,key:e.langKey,style:{color:"white"}},c.a.createElement("li",{className:"language-selector",selected:e.selected},function(e){if(!1===e.selected)return"zh"===e.langKey?"中":e.langKey}(e)))});return c.a.createElement("section",{style:{float:"right"}},c.a.createElement("ul",null,t))};i.propTypes={langs:M.a.array};var o=i,u=a(221),w=a.n(u),m=a(238),j=a.n(m),N=a(239);var D=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={navbarIsActive:"navbar-item dropdown is-hidden-desktop",prevScrollpos:function(){if("undefined"!=typeof window)return window.pageYOffset},visible:!0},t.navbarOpenDropdown=function(){t.setState({navbarIsActive:"navbar-item dropdown is-active is-hidden-desktop"})},t.navbarCloseDropdown=function(){t.setState({navbarIsActive:"navbar-item dropdown is-hidden-desktop"})},t.languageCheck=function(){return t.props.langs[0].selected?c.a.createElement(c.a.Fragment,null,c.a.createElement(L.a,{to:"/en/about/"},"About Us"),c.a.createElement(L.a,{to:"/en/locations/"},"Locations"),c.a.createElement(L.a,{to:"/en/partners/"},"Partners"),c.a.createElement(L.a,{to:"/en/news/"},"News"),c.a.createElement(L.a,{to:"/en/impact/"},"Impact"),c.a.createElement("button",{className:"button"},c.a.createElement(L.a,{to:"/en/contact/"},"Get In Touch"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(L.a,{to:"/about/"},"关于我们"),c.a.createElement(L.a,{to:"/locations/"},"地址"),c.a.createElement(L.a,{to:"/partners/"},"合作公司"),c.a.createElement(L.a,{to:"/news/"},"新闻"),c.a.createElement(L.a,{to:"/impact/"},"社会"),c.a.createElement("button",{className:"button"},c.a.createElement(L.a,{to:"/contact/"},"联系我们")))},t.handleScroll=function(){var e=t.state.prevScrollpos;if("undefined"!=typeof window){var a=window.pageYOffset,n=e>a&&e<300;0===a?t.setState({prevScrollpos:a,visible:!0}):t.setState({prevScrollpos:a,visible:n})}},t.languageCheckMobile=function(){return t.props.langs[0].selected?c.a.createElement(N.slide,{width:"70%"},c.a.createElement(L.a,{id:"home",className:"menu-item",to:"/en"},"Home"),c.a.createElement(L.a,{id:"about",className:"menu-item",to:"/en/about"},"About Us"),c.a.createElement(L.a,{id:"location",className:"menu-item",to:"/en/locations"},"Locations"),c.a.createElement(L.a,{id:"partners",className:"menu-item",to:"/en/partners"},"Partners"),c.a.createElement(L.a,{id:"news",className:"menu-item",to:"/en/news"},"News"),c.a.createElement(L.a,{id:"contact",className:"menu-item",to:"/en/impact"},"Impact"),c.a.createElement("hr",null),c.a.createElement(L.a,{className:"menu-item--small",to:"/en/contact/"},"Get In Touch")):c.a.createElement(N.slide,{width:"70%"},c.a.createElement(L.a,{id:"home",className:"menu-item",to:"/"},"Home"),c.a.createElement(L.a,{id:"about",className:"menu-item",to:"/about"},"关于我们"),c.a.createElement(L.a,{id:"contact",className:"menu-item",to:"/locations"},"地址"),c.a.createElement(L.a,{id:"contact",className:"menu-item",to:"/partners"},"合作公司"),c.a.createElement(L.a,{id:"contact",className:"menu-item",to:"/news"},"新闻"),c.a.createElement(L.a,{id:"contact",className:"menu-item",to:"/impact"},"社会"),c.a.createElement("hr",null),c.a.createElement(L.a,{className:"menu-item--small",to:"/contact"},"联系我们"))},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},s.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},s.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{height:"125px",display:"flex",justifyContent:"space-between",position:"fixed",width:"100%"},className:j()("big-header",{"big-header--hidden":!this.state.visible})},c.a.createElement("div",{style:{flex:"500px"}},c.a.createElement(L.a,{to:"/"},c.a.createElement("div",{className:"header-logo"},c.a.createElement("img",{src:w.a,alt:"wecarewc-logo"})))),c.a.createElement("div",{className:"nav-menu is-hidden-touch"},this.languageCheck()),c.a.createElement(o,{langs:this.props.langs})),c.a.createElement("div",{style:{zIndex:"1000"}},this.languageCheckMobile()))},n}(c.a.Component),E=a(222),d=a.n(E);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"footer columns is-mobile is-multiline"},c.a.createElement("div",{className:"mailer-footer column is-two-fifths-desktop is-half-mobile"},c.a.createElement("h1",null,"Mailing List"),c.a.createElement("form",{name:"Mailer Form",method:"POST","data-netlify":"true",action:"/thank-you"},c.a.createElement("input",{type:"hidden",name:"form-name",value:"Mailer Form"}),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"control",style:{paddingBottom:"10px"}},c.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. ilovetoilets@gmail.com",name:"email"})),c.a.createElement("div",{className:"control"},c.a.createElement("button",{className:"button",id:"grey"},"Submit"))))),c.a.createElement("div",{className:"nav-menu-footer column is-one-fifth-desktop is-half-mobile"},c.a.createElement("div",{className:"center-that-text"},c.a.createElement("h1",null,"Menu"),c.a.createElement(L.a,{to:"/en/about/"},c.a.createElement("p",null,"About Us")),c.a.createElement(L.a,{to:"/en/locations/"},c.a.createElement("p",null,"Locations")),c.a.createElement(L.a,{to:"/en/partners/"},c.a.createElement("p",null,"Partners")),c.a.createElement(L.a,{to:"/en/news/"},c.a.createElement("p",null,"News")),c.a.createElement(L.a,{to:"/en/impact/"},c.a.createElement("p",null,"Impact")),c.a.createElement(L.a,{to:"/en/contact/"},c.a.createElement("p",null,"Careers")))),c.a.createElement("div",{className:"wechat-icon-footer column is-one-fifth-desktop is-half-mobile"},c.a.createElement("h1",null,"Get In Touch"),c.a.createElement("h2",null,"WeChat"),c.a.createElement("img",{src:d.a,alt:"WeCare WC Qr Code"})),c.a.createElement("div",{className:"address-phone-footer column is-one-fifth-desktop is-half-mobile"},c.a.createElement("h2",null,"Address"),c.a.createElement("p",null,"Wework Nanjing West Road",c.a.createElement("br",null),"819 Nanjing West Road",c.a.createElement("br",null),"(near Taixing Road)",c.a.createElement("br",null),"3rd Floor",c.a.createElement("br",null),"200040 Shanghai P.R. China"),c.a.createElement("br",null),c.a.createElement("h2",null,"Customer Service"),c.a.createElement("p",null,c.a.createElement("span",{className:"bold"},"Phone:")," +86(0)21-51853537"),c.a.createElement("p",null,c.a.createElement("span",{className:"bold"},"Email:")," curious@wecarewc.com"),c.a.createElement("br",null),c.a.createElement("h2",null,"Other Inquires"),c.a.createElement(L.a,{to:"contact"},c.a.createElement("button",{className:"button is-primary"},"Get In Touch")))),c.a.createElement("div",{className:"copyright has-text-centered"},c.a.createElement("p",null,(new Date).getFullYear()," WeCare WC. All Rights Reserved.")))},n}(c.a.Component),z=a(240),C=a.n(z),g=a(233),p=a(216),x=a(217),T=(a(244),a(246),function(e){var t=e.children,a=e.location,s=e.i18nMessages;return c.a.createElement(p.b,{query:"2825539598",render:function(e){var n=a.pathname,l=e.site.siteMetadata.languages,M=l.langs,r=l.defaultLangKey,L=Object(g.getCurrentLangKey)(M,r,n),i=("/"+L).replace("/"+r+"/","/"),o=Object(g.getLangs)(M,L,Object(g.getUrlForLang)(i,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+r+"/","/")})});return c.a.createElement(x.a,{locale:L,messages:s},c.a.createElement("div",null,c.a.createElement(C.a,{title:"WeCare WC",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),c.a.createElement(D,{langs:o}),c.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},t),c.a.createElement(y,null)))},data:n})});T.propTypes={children:M.a.func};t.a=T},220:function(e){e.exports={data:{site:{siteMetadata:{languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},221:function(e,t,a){e.exports=a.p+"static/wecarewc-logo-white-9741893910473454ef9d01f007f29fd4.png"},222:function(e,t,a){e.exports=a.p+"static/wecarewc_qrcode-1fbaeebb87b46b341c57855606fcbebf.png"},223:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),s=a.n(n),c=a(11),l=a.n(c),M=a(84),r=function(e){var t=e.location,a=e.pageResources;return a?s.a.createElement(M.a,Object.assign({location:t,pageResources:a},a.json)):null};r.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=r},234:function(e,t,a){"use strict";a(21);var n=a(0),s=a.n(n),c=a(218),l=a(217),M=a(235),r=a.n(M),L=a(249),i=a.n(L);a(250);Object(l.b)(i.a),t.a=function(e){return s.a.createElement(c.a,Object.assign({},e,{i18nMessages:r.a}))}},235:function(e,t){e.exports={selectLanguage:"中文"}},241:function(e,t){},242:function(e,t){},243:function(e,t){},245:function(e,t){},260:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTggMzgyIj48ZGVmcz48c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7b3BhY2l0eTowLjc1O21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTN7ZmlsbDojZTBkZWRlO30uY2xzLTMsLmNscy00e2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTR7ZmlsbDojZTYyNjMyO308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWxsdXN0cmF0aW9uPC90aXRsZT48ZyBjbGFzcz0iY2xzLTEiPjxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxnIGNsYXNzPSJjbHMtMiI+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTQ1LDEzOS44NGMuMTguNS4zNywxLC41MSwxLjUyTDE5Mi4yOSwyNTNoMGExNC4yOSwxNC4yOSwwLDAsMSwuNzYsNC42NGMwLDcuNDMtNS43LDEzLjUyLTEyLjcsMTMuNTJsLS44MiwwdjBIMTQ2Ljc2VjMzMWwtLjA3LjI0YTMxLjI2LDMxLjI2LDAsMCwxLTEuNTYsOS40OCwyNi4zMSwyNi4zMSwwLDAsMS01LjI0LDguOTNoMEEzMC42NCwzMC42NCwwLDAsMSwxMjQuNDQsMzU5djBhMzQuOTQsMzQuOTQsMCwwLDEtOC41MiwxaDBhMzEuNzcsMzEuNzcsMCwwLDEtOC41NC0xLjE0bDAsLjA3QTMxLjc1LDMxLjc1LDAsMCwxLDk5LDM1NS4zN2EzMC40OCwzMC40OCwwLDAsMS02Ljg5LTUuN2wtLjEzLS4xN2EyNi4zOCwyNi4zOCwwLDAsMS01LjEzLTguODEsMzAuMTEsMzAuMTEsMCwwLDEtMS42NC05LjQ4bC0uMDYtLjI0VjI3MS4xOUg1MS43QTEyLjk0LDEyLjk0LDAsMCwxLDM5LDI1Ny42N2MuMTQtMy42My40Ni0zLjY1LDIuMDctNy44Nkw4Ni41LDE0MWwwLS4xNS4zMy0uOTVhMjUuOCwyNS44LDAsMCwxLDUuMzItOC43MmwuMTgtLjIxYTMxLjQ4LDMxLjQ4LDAsMCwxLDYuNzgtNS4zdjBhMzIuMzEsMzIuMzEsMCwwLDEsOC4xNy0zLjI5bC4wNi0uMDhhMzkuNzUsMzkuNzUsMCwwLDEsOC4yOS0xLjA4LDM3LDM3LDAsMCwxLDguNDkuOSwzMi44LDMyLjgsMCwwLDEsOC4zNywzLjI5LDMwLjA2LDMwLjA2LDAsMCwxLDcuMDgsNS41OSwyNS43NSwyNS43NSwwLDAsMSw1LjM4LDguODNNMTE2LDMxYy0yMi42NSwwLTQxLDE3LjQ0LTQxLDM5czE4LjM3LDM4LjkxLDQxLDM4LjkxUzE1Nyw5MS40MywxNTcsNzAsMTM4LjYsMzEsMTE2LDMxWiIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xMzUsMTMyLjg0Yy4xOC41LjM3LDEsLjUxLDEuNTJMMTgyLjI5LDI0NmgwYTE0LjI5LDE0LjI5LDAsMCwxLC43Niw0LjY0YzAsNy40My01LjcsMTMuNTItMTIuNywxMy41MmwtLjgyLDB2MEgxMzYuNzZWMzI0bC0uMDcuMjRhMzEuMjYsMzEuMjYsMCwwLDEtMS41Niw5LjQ4LDI2LjMxLDI2LjMxLDAsMCwxLTUuMjQsOC45M2gwQTMwLjY0LDMwLjY0LDAsMCwxLDExNC40NCwzNTJ2MGEzNC45NCwzNC45NCwwLDAsMS04LjUyLDFoMGEzMS43NywzMS43NywwLDAsMS04LjU0LTEuMTRsMCwuMDdBMzEuNzUsMzEuNzUsMCwwLDEsODksMzQ4LjM3YTMwLjQ4LDMwLjQ4LDAsMCwxLTYuODktNS43bC0uMTMtLjE3YTI2LjM4LDI2LjM4LDAsMCwxLTUuMTMtOC44MSwzMC4xMSwzMC4xMSwwLDAsMS0xLjY0LTkuNDhsLS4wNi0uMjRWMjY0LjE5SDQxLjdBMTIuOTQsMTIuOTQsMCwwLDEsMjksMjUwLjY3Yy4xNC0zLjYzLjQ2LTMuNjUsMi4wNy03Ljg2TDc2LjUsMTM0bDAtLjE1LjMzLS45NWEyNS44LDI1LjgsMCwwLDEsNS4zMi04LjcybC4xOC0uMjFhMzEuNDgsMzEuNDgsMCwwLDEsNi43OC01LjN2MGEzMi4zMSwzMi4zMSwwLDAsMSw4LjE3LTMuMjlsLjA2LS4wOGEzOS43NSwzOS43NSwwLDAsMSw4LjI5LTEuMDgsMzcsMzcsMCwwLDEsOC40OS45LDMyLjgsMzIuOCwwLDAsMSw4LjM3LDMuMjksMzAuMDYsMzAuMDYsMCwwLDEsNy4wOCw1LjU5LDI1Ljc1LDI1Ljc1LDAsMCwxLDUuMzgsOC44M00xMDYsMjRjLTIyLjY1LDAtNDEsMTcuNDQtNDEsMzlzMTguMzcsMzguOTEsNDEsMzguOTFTMTQ3LDg0LjQzLDE0Nyw2MywxMjguNiwyNCwxMDYsMjRaIi8+PC9nPjwvZz48L3N2Zz4="},261:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDMgNDAyIj48ZGVmcz48c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7b3BhY2l0eTowLjc1O21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTN7ZmlsbDojZTBkZWRlO30uY2xzLTR7ZmlsbDojZTYyNjMyO308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWxsdXN0cmF0aW9uPC90aXRsZT48ZyBjbGFzcz0iY2xzLTEiPjxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxnIGNsYXNzPSJjbHMtMiI+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTA5LjI0LDUxLjIyYTM3Ljg1LDM3Ljg1LDAsMSwwLDM4LjU4LDM3LjExLDM3Ljg2LDM3Ljg2LDAsMCwwLTM4LjU4LTM3LjExbTMyLjg3LDMwMS4yMWEzMCwzMCwwLDAsMCwxLjQtOS4zMmwuMDUtLjItMS42NC04MS4yOCwzOS44Ni0xMDYuNDZoMGExNS40NiwxNS40NiwwLDAsMCwuNjEtNC41MWMtLjE1LTcuMjYtNS41My0xMy4wNi0xMi0xMi45M2wtLjc3LjA2LDAsMEw1MS43OSwxNDAuMTJoMGMtNi40Ny4xMy0xMS41OSw2LjE0LTExLjQ1LDEzLjQxYTE1LjMxLDE1LjMxLDAsMCwwLC4yOCwyLjU0aC0uMzNsNDQuNzksMTA2LjcsMS42NCw4MS4yNy4wNi4yYTI5LjI3LDI5LjI3LDAsMCwwLDEuNzcsOS4xMiwyNS4xNCwyNS4xNCwwLDAsMCw1LjA4LDguNDFsLjE4LjE5YTI4LjgxLDI4LjgxLDAsMCwwLDYuMzYsNVYzNjdhMzAuNSwzMC41LDAsMCwwLDcuNiwzLjA3bC4wNiwwYTMwLjU2LDMwLjU2LDAsMCwwLDcuNjguODcsMjguODQsMjguODQsMCwwLDAsNy43OS0xLDI2LjYzLDI2LjYzLDAsMCwwLDcuNjctMy4zMiwyNy40MiwyNy40MiwwLDAsMCw2LjM5LTUuNTdBMjUuMDUsMjUuMDUsMCwwLDAsMTQyLjExLDM1Mi40M1oiLz48L2c+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNOTkuMjQsNDQuMjJhMzcuODUsMzcuODUsMCwxLDAsMzguNTgsMzcuMTFBMzcuODYsMzcuODYsMCwwLDAsOTkuMjQsNDQuMjJtMzIuODcsMzAxLjIxYTMwLDMwLDAsMCwwLDEuNC05LjMybC4wNS0uMi0xLjY0LTgxLjI4LDM5Ljg2LTEwNi40NmgwYTE1LjQ2LDE1LjQ2LDAsMCwwLC42MS00LjUxYy0uMTUtNy4yNi01LjUzLTEzLjA2LTEyLTEyLjkzbC0uNzcuMDYsMCwwTDQxLjc5LDEzMy4xMmgwYy02LjQ3LjEzLTExLjU5LDYuMTQtMTEuNDUsMTMuNDFhMTUuMzEsMTUuMzEsMCwwLDAsLjI4LDIuNTRoLS4zM2w0NC43OSwxMDYuNywxLjY0LDgxLjI3LjA2LjJhMjkuMjcsMjkuMjcsMCwwLDAsMS43Nyw5LjEyLDI1LjE0LDI1LjE0LDAsMCwwLDUuMDgsOC40MWwuMTguMTlhMjguODEsMjguODEsMCwwLDAsNi4zNiw1VjM2MGEzMC41LDMwLjUsMCwwLDAsNy42LDMuMDdsLjA2LDBhMzAuNTYsMzAuNTYsMCwwLDAsNy42OC44NywyOC44NCwyOC44NCwwLDAsMCw3Ljc5LTEsMjYuNjMsMjYuNjMsMCwwLDAsNy42Ny0zLjMyLDI3LjQyLDI3LjQyLDAsMCwwLDYuMzktNS41N0EyNS4wNSwyNS4wNSwwLDAsMCwxMzIuMTEsMzQ1LjQzWiIvPjwvZz48L2c+PC9zdmc+"},475:function(e,t,a){e.exports=a.p+"static/crying-wecarewc-c2f586245b3380231f0d0f5212918617.png"}}]);
//# sourceMappingURL=component---src-pages-404-js-e33ac0b60735c93ac950.js.map