(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(244),s=a(299),r=a(300),M=a.n(r),i=a(301),o=a.n(i);a(302),a(303);t.default=function(e){return l.a.createElement(c.a,{location:e.location,id:"darker"},l.a.createElement("div",{className:"contact-wrap has-text-centered"},l.a.createElement("h1",null,"We Want to Hear From You!"),l.a.createElement("p",null,"Do you want to partner up? Hear about jobs at WeCare WC? Provide us with some feedback? Or anything else? Send us a message below and we will get right back to you."),l.a.createElement(s.a,null)),l.a.createElement("img",{src:M.a,alt:"womens-room-icon",id:"woman-illustration"}),l.a.createElement("img",{src:o.a,alt:"mens-icon",id:"man-illustration"}))}},214:function(e,t,a){var n;e.exports=(n=a(222))&&n.default||n},215:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),l=a.n(n),c=a(11),s=a.n(c),r=a(59),M=a.n(r);a.d(t,"a",function(){return M.a}),a.d(t,"c",function(){return r.navigate});a(214);var i=l.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,s=a?a.data:t[n]&&t[n].data;return l.a.createElement(l.a.Fragment,null,s&&c(s),!s&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return l.a.createElement(i.Consumer,null,function(e){return l.a.createElement(o,{data:t,query:a,render:n||c,staticQueryData:e})})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},217:function(e,t,a){"use strict";a(218),a(21),a(12);var n=a(219),l=a(0),c=a.n(l),s=a(11),r=a.n(s),M=a(59),i=a.n(M),o=function(e){var t=e.langs.map(function(e){return c.a.createElement(i.a,{to:e.link,key:e.langKey,style:{color:"white"}},c.a.createElement("li",{className:"language-selector",selected:e.selected},function(e){if(!1===e.selected)return"zh"===e.langKey?"中":e.langKey}(e)))});return c.a.createElement("section",{style:{float:"right"}},c.a.createElement("ul",null,t))};o.propTypes={langs:r.a.array};var u=o,m=a(220),L=a.n(m),w=a(235),N=a.n(w),E=a(236);var j=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={navbarIsActive:"navbar-item dropdown is-hidden-desktop",prevScrollpos:function(){if("undefined"!=typeof window)return window.pageYOffset},visible:!0},t.navbarOpenDropdown=function(){t.setState({navbarIsActive:"navbar-item dropdown is-active is-hidden-desktop"})},t.navbarCloseDropdown=function(){t.setState({navbarIsActive:"navbar-item dropdown is-hidden-desktop"})},t.languageCheck=function(){return t.props.langs[0].selected?c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{to:"/en/about/"},"About Us"),c.a.createElement(i.a,{to:"/en/locations/"},"Locations"),c.a.createElement(i.a,{to:"/en/partners/"},"Partners"),c.a.createElement(i.a,{to:"/en/news/"},"News"),c.a.createElement(i.a,{to:"/en/impact/"},"Impact"),c.a.createElement("button",{className:"button"},c.a.createElement(i.a,{to:"/en/contact/"},"Get In Touch"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{to:"/about/"},"关于我们"),c.a.createElement(i.a,{to:"/locations/"},"地址"),c.a.createElement(i.a,{to:"/partners/"},"合作公司"),c.a.createElement(i.a,{to:"/news/"},"新闻"),c.a.createElement(i.a,{to:"/impact/"},"社会"),c.a.createElement("button",{className:"button"},c.a.createElement(i.a,{to:"/contact/"},"联系我们")))},t.handleScroll=function(){var e=t.state.prevScrollpos;if("undefined"!=typeof window){var a=window.pageYOffset,n=e>a&&e<300;0===a?t.setState({prevScrollpos:a,visible:!0}):t.setState({prevScrollpos:a,visible:n})}},t.languageCheckMobile=function(){return t.props.langs[0].selected?c.a.createElement(E.slide,{width:"70%"},c.a.createElement(i.a,{id:"home",className:"menu-item",to:"/en"},"Home"),c.a.createElement(i.a,{id:"about",className:"menu-item",to:"/en/about"},"About Us"),c.a.createElement(i.a,{id:"location",className:"menu-item",to:"/en/locations"},"Locations"),c.a.createElement(i.a,{id:"partners",className:"menu-item",to:"/en/partners"},"Partners"),c.a.createElement(i.a,{id:"news",className:"menu-item",to:"/en/news"},"News"),c.a.createElement(i.a,{id:"contact",className:"menu-item",to:"/en/impact"},"Impact"),c.a.createElement("hr",null),c.a.createElement(i.a,{className:"menu-item--small",to:"/en/contact/"},"Get In Touch")):c.a.createElement(E.slide,{width:"70%"},c.a.createElement(i.a,{id:"home",className:"menu-item",to:"/"},"Home"),c.a.createElement(i.a,{id:"about",className:"menu-item",to:"/about"},"关于我们"),c.a.createElement(i.a,{id:"contact",className:"menu-item",to:"/locations"},"地址"),c.a.createElement(i.a,{id:"contact",className:"menu-item",to:"/partners"},"合作公司"),c.a.createElement(i.a,{id:"contact",className:"menu-item",to:"/news"},"新闻"),c.a.createElement(i.a,{id:"contact",className:"menu-item",to:"/impact"},"社会"),c.a.createElement("hr",null),c.a.createElement(i.a,{className:"menu-item--small",to:"/contact"},"联系我们"))},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},l.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},l.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{height:"125px",display:"flex",justifyContent:"space-between",position:"fixed",width:"100%"},className:N()("big-header",{"big-header--hidden":!this.state.visible})},c.a.createElement("div",{style:{flex:"500px"}},c.a.createElement(i.a,{to:"/"},c.a.createElement("div",{className:"header-logo"},c.a.createElement("img",{src:L.a,alt:"wecarewc-logo"})))),c.a.createElement("div",{className:"nav-menu is-hidden-touch"},this.languageCheck()),c.a.createElement(u,{langs:this.props.langs})),c.a.createElement("div",{style:{zIndex:"1000"}},this.languageCheckMobile()))},n}(c.a.Component),d=a(221),D=a.n(d);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"footer columns is-mobile is-multiline"},c.a.createElement("div",{className:"mailer-footer column is-two-fifths-desktop is-half-mobile"},c.a.createElement("h1",null,"Mailing List"),c.a.createElement("form",{name:"Mailer Form",method:"POST","data-netlify":"true",action:"/thank-you"},c.a.createElement("input",{type:"hidden",name:"form-name",value:"Mailer Form"}),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"control",style:{paddingBottom:"10px"}},c.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. ilovetoilets@gmail.com",name:"email"})),c.a.createElement("div",{className:"control"},c.a.createElement("button",{className:"button",id:"grey"},"Submit"))))),c.a.createElement("div",{className:"nav-menu-footer column is-one-fifth-desktop is-half-mobile"},c.a.createElement("div",{className:"center-that-text"},c.a.createElement("h1",null,"Menu"),c.a.createElement(i.a,{to:"/en/about/"},c.a.createElement("p",null,"About Us")),c.a.createElement(i.a,{to:"/en/locations/"},c.a.createElement("p",null,"Locations")),c.a.createElement(i.a,{to:"/en/partners/"},c.a.createElement("p",null,"Partners")),c.a.createElement(i.a,{to:"/en/news/"},c.a.createElement("p",null,"News")),c.a.createElement(i.a,{to:"/en/impact/"},c.a.createElement("p",null,"Impact")),c.a.createElement(i.a,{to:"/en/contact/"},c.a.createElement("p",null,"Careers")))),c.a.createElement("div",{className:"wechat-icon-footer column is-one-fifth-desktop is-half-mobile"},c.a.createElement("h1",null,"Get In Touch"),c.a.createElement("h2",null,"WeChat"),c.a.createElement("img",{src:D.a,alt:"WeCare WC Qr Code"})),c.a.createElement("div",{className:"address-phone-footer column is-one-fifth-desktop is-half-mobile"},c.a.createElement("h2",null,"Address"),c.a.createElement("p",null,"Wework Nanjing West Road",c.a.createElement("br",null),"819 Nanjing West Road",c.a.createElement("br",null),"(near Taixing Road)",c.a.createElement("br",null),"3rd Floor",c.a.createElement("br",null),"200040 Shanghai P.R. China"),c.a.createElement("br",null),c.a.createElement("h2",null,"Customer Service"),c.a.createElement("p",null,c.a.createElement("span",{className:"bold"},"Phone:")," +86(0)21-51853537"),c.a.createElement("p",null,c.a.createElement("span",{className:"bold"},"Email:")," curious@wecarewc.com"),c.a.createElement("br",null),c.a.createElement("h2",null,"Other Inquires"),c.a.createElement(i.a,{to:"contact"},c.a.createElement("button",{className:"button is-primary"},"Get In Touch")))),c.a.createElement("div",{className:"copyright has-text-centered"},c.a.createElement("p",null,(new Date).getFullYear()," WeCare WC. All Rights Reserved.")))},n}(c.a.Component),p=a(237),g=a.n(p),z=a(234),C=a(215),x=a(216),T=(a(241),a(243),function(e){var t=e.children,a=e.location,l=e.i18nMessages;return c.a.createElement(C.b,{query:"2825539598",render:function(e){var n=a.pathname,s=e.site.siteMetadata.languages,r=s.langs,M=s.defaultLangKey,i=Object(z.getCurrentLangKey)(r,M,n),o=("/"+i).replace("/"+M+"/","/"),u=Object(z.getLangs)(r,i,Object(z.getUrlForLang)(o,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+M+"/","/")})});return c.a.createElement(x.a,{locale:i,messages:l},c.a.createElement("div",null,c.a.createElement(g.a,{title:"WeCare WC",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),c.a.createElement(j,{langs:u}),c.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},t),c.a.createElement(y,null)))},data:n})});T.propTypes={children:r.a.func};t.a=T},219:function(e){e.exports={data:{site:{siteMetadata:{languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},220:function(e,t,a){e.exports=a.p+"static/wecarewc-logo-white-9741893910473454ef9d01f007f29fd4.png"},221:function(e,t,a){e.exports=a.p+"static/wecarewc_qrcode-1fbaeebb87b46b341c57855606fcbebf.png"},222:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),l=a.n(n),c=a(11),s=a.n(c),r=a(84),M=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null};M.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=M},238:function(e,t){},239:function(e,t){},240:function(e,t){},242:function(e,t){},244:function(e,t,a){"use strict";a(21);var n=a(0),l=a.n(n),c=a(217),s=a(216),r=a(245),M=a.n(r),i=a(248),o=a.n(i);a(249);Object(s.b)(o.a),t.a=function(e){return l.a.createElement(c.a,Object.assign({},e,{i18nMessages:M.a}))}},245:function(e,t){e.exports={selectLanguage:"中文"}},299:function(e,t,a){"use strict";var n=a(0),l=a.n(n);var c=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).changeEmail=function(e){a.setState({email:e.target.value})},a.state={emailError:"",email:""},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("form",{name:"Contact Form",method:"POST","data-netlify":"true",action:"/thank-you",className:"contact-form"},l.a.createElement("input",{type:"hidden",name:"form-name",value:"Contact Form"}),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",placeholder:"Name",name:"name"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"email",placeholder:"Email",value:this.state.email,onChange:this.changeEmail,name:"email"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"select"},l.a.createElement("select",{name:"type"},l.a.createElement("option",null,"I am a..."),l.a.createElement("option",null,"Landlord/Developer"),l.a.createElement("option",null,"Brand Partner"),l.a.createElement("option",null,"Visitor"),l.a.createElement("option",null,"Other"))))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{className:"textarea",placeholder:"Message",defaultValue:"",name:"message"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{type:"checkbox"}),l.a.createElement("label",{className:"checkbox"},l.a.createElement("p",null,l.a.createElement("span",null," "),"Put me on the mailing list for occasional WeCare WC News")))),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button is-link",id:"grey"},"Submit"))))},n}(l.a.Component);t.a=c},300:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTggMzgyIj48ZGVmcz48c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7b3BhY2l0eTowLjc1O21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTN7ZmlsbDojZTBkZWRlO30uY2xzLTMsLmNscy00e2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTR7ZmlsbDojZTYyNjMyO308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWxsdXN0cmF0aW9uPC90aXRsZT48ZyBjbGFzcz0iY2xzLTEiPjxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxnIGNsYXNzPSJjbHMtMiI+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTQ1LDEzOS44NGMuMTguNS4zNywxLC41MSwxLjUyTDE5Mi4yOSwyNTNoMGExNC4yOSwxNC4yOSwwLDAsMSwuNzYsNC42NGMwLDcuNDMtNS43LDEzLjUyLTEyLjcsMTMuNTJsLS44MiwwdjBIMTQ2Ljc2VjMzMWwtLjA3LjI0YTMxLjI2LDMxLjI2LDAsMCwxLTEuNTYsOS40OCwyNi4zMSwyNi4zMSwwLDAsMS01LjI0LDguOTNoMEEzMC42NCwzMC42NCwwLDAsMSwxMjQuNDQsMzU5djBhMzQuOTQsMzQuOTQsMCwwLDEtOC41MiwxaDBhMzEuNzcsMzEuNzcsMCwwLDEtOC41NC0xLjE0bDAsLjA3QTMxLjc1LDMxLjc1LDAsMCwxLDk5LDM1NS4zN2EzMC40OCwzMC40OCwwLDAsMS02Ljg5LTUuN2wtLjEzLS4xN2EyNi4zOCwyNi4zOCwwLDAsMS01LjEzLTguODEsMzAuMTEsMzAuMTEsMCwwLDEtMS42NC05LjQ4bC0uMDYtLjI0VjI3MS4xOUg1MS43QTEyLjk0LDEyLjk0LDAsMCwxLDM5LDI1Ny42N2MuMTQtMy42My40Ni0zLjY1LDIuMDctNy44Nkw4Ni41LDE0MWwwLS4xNS4zMy0uOTVhMjUuOCwyNS44LDAsMCwxLDUuMzItOC43MmwuMTgtLjIxYTMxLjQ4LDMxLjQ4LDAsMCwxLDYuNzgtNS4zdjBhMzIuMzEsMzIuMzEsMCwwLDEsOC4xNy0zLjI5bC4wNi0uMDhhMzkuNzUsMzkuNzUsMCwwLDEsOC4yOS0xLjA4LDM3LDM3LDAsMCwxLDguNDkuOSwzMi44LDMyLjgsMCwwLDEsOC4zNywzLjI5LDMwLjA2LDMwLjA2LDAsMCwxLDcuMDgsNS41OSwyNS43NSwyNS43NSwwLDAsMSw1LjM4LDguODNNMTE2LDMxYy0yMi42NSwwLTQxLDE3LjQ0LTQxLDM5czE4LjM3LDM4LjkxLDQxLDM4LjkxUzE1Nyw5MS40MywxNTcsNzAsMTM4LjYsMzEsMTE2LDMxWiIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xMzUsMTMyLjg0Yy4xOC41LjM3LDEsLjUxLDEuNTJMMTgyLjI5LDI0NmgwYTE0LjI5LDE0LjI5LDAsMCwxLC43Niw0LjY0YzAsNy40My01LjcsMTMuNTItMTIuNywxMy41MmwtLjgyLDB2MEgxMzYuNzZWMzI0bC0uMDcuMjRhMzEuMjYsMzEuMjYsMCwwLDEtMS41Niw5LjQ4LDI2LjMxLDI2LjMxLDAsMCwxLTUuMjQsOC45M2gwQTMwLjY0LDMwLjY0LDAsMCwxLDExNC40NCwzNTJ2MGEzNC45NCwzNC45NCwwLDAsMS04LjUyLDFoMGEzMS43NywzMS43NywwLDAsMS04LjU0LTEuMTRsMCwuMDdBMzEuNzUsMzEuNzUsMCwwLDEsODksMzQ4LjM3YTMwLjQ4LDMwLjQ4LDAsMCwxLTYuODktNS43bC0uMTMtLjE3YTI2LjM4LDI2LjM4LDAsMCwxLTUuMTMtOC44MSwzMC4xMSwzMC4xMSwwLDAsMS0xLjY0LTkuNDhsLS4wNi0uMjRWMjY0LjE5SDQxLjdBMTIuOTQsMTIuOTQsMCwwLDEsMjksMjUwLjY3Yy4xNC0zLjYzLjQ2LTMuNjUsMi4wNy03Ljg2TDc2LjUsMTM0bDAtLjE1LjMzLS45NWEyNS44LDI1LjgsMCwwLDEsNS4zMi04LjcybC4xOC0uMjFhMzEuNDgsMzEuNDgsMCwwLDEsNi43OC01LjN2MGEzMi4zMSwzMi4zMSwwLDAsMSw4LjE3LTMuMjlsLjA2LS4wOGEzOS43NSwzOS43NSwwLDAsMSw4LjI5LTEuMDgsMzcsMzcsMCwwLDEsOC40OS45LDMyLjgsMzIuOCwwLDAsMSw4LjM3LDMuMjksMzAuMDYsMzAuMDYsMCwwLDEsNy4wOCw1LjU5LDI1Ljc1LDI1Ljc1LDAsMCwxLDUuMzgsOC44M00xMDYsMjRjLTIyLjY1LDAtNDEsMTcuNDQtNDEsMzlzMTguMzcsMzguOTEsNDEsMzguOTFTMTQ3LDg0LjQzLDE0Nyw2MywxMjguNiwyNCwxMDYsMjRaIi8+PC9nPjwvZz48L3N2Zz4="},301:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDMgNDAyIj48ZGVmcz48c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7b3BhY2l0eTowLjc1O21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTN7ZmlsbDojZTBkZWRlO30uY2xzLTR7ZmlsbDojZTYyNjMyO308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWxsdXN0cmF0aW9uPC90aXRsZT48ZyBjbGFzcz0iY2xzLTEiPjxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxnIGNsYXNzPSJjbHMtMiI+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTA5LjI0LDUxLjIyYTM3Ljg1LDM3Ljg1LDAsMSwwLDM4LjU4LDM3LjExLDM3Ljg2LDM3Ljg2LDAsMCwwLTM4LjU4LTM3LjExbTMyLjg3LDMwMS4yMWEzMCwzMCwwLDAsMCwxLjQtOS4zMmwuMDUtLjItMS42NC04MS4yOCwzOS44Ni0xMDYuNDZoMGExNS40NiwxNS40NiwwLDAsMCwuNjEtNC41MWMtLjE1LTcuMjYtNS41My0xMy4wNi0xMi0xMi45M2wtLjc3LjA2LDAsMEw1MS43OSwxNDAuMTJoMGMtNi40Ny4xMy0xMS41OSw2LjE0LTExLjQ1LDEzLjQxYTE1LjMxLDE1LjMxLDAsMCwwLC4yOCwyLjU0aC0uMzNsNDQuNzksMTA2LjcsMS42NCw4MS4yNy4wNi4yYTI5LjI3LDI5LjI3LDAsMCwwLDEuNzcsOS4xMiwyNS4xNCwyNS4xNCwwLDAsMCw1LjA4LDguNDFsLjE4LjE5YTI4LjgxLDI4LjgxLDAsMCwwLDYuMzYsNVYzNjdhMzAuNSwzMC41LDAsMCwwLDcuNiwzLjA3bC4wNiwwYTMwLjU2LDMwLjU2LDAsMCwwLDcuNjguODcsMjguODQsMjguODQsMCwwLDAsNy43OS0xLDI2LjYzLDI2LjYzLDAsMCwwLDcuNjctMy4zMiwyNy40MiwyNy40MiwwLDAsMCw2LjM5LTUuNTdBMjUuMDUsMjUuMDUsMCwwLDAsMTQyLjExLDM1Mi40M1oiLz48L2c+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNOTkuMjQsNDQuMjJhMzcuODUsMzcuODUsMCwxLDAsMzguNTgsMzcuMTFBMzcuODYsMzcuODYsMCwwLDAsOTkuMjQsNDQuMjJtMzIuODcsMzAxLjIxYTMwLDMwLDAsMCwwLDEuNC05LjMybC4wNS0uMi0xLjY0LTgxLjI4LDM5Ljg2LTEwNi40NmgwYTE1LjQ2LDE1LjQ2LDAsMCwwLC42MS00LjUxYy0uMTUtNy4yNi01LjUzLTEzLjA2LTEyLTEyLjkzbC0uNzcuMDYsMCwwTDQxLjc5LDEzMy4xMmgwYy02LjQ3LjEzLTExLjU5LDYuMTQtMTEuNDUsMTMuNDFhMTUuMzEsMTUuMzEsMCwwLDAsLjI4LDIuNTRoLS4zM2w0NC43OSwxMDYuNywxLjY0LDgxLjI3LjA2LjJhMjkuMjcsMjkuMjcsMCwwLDAsMS43Nyw5LjEyLDI1LjE0LDI1LjE0LDAsMCwwLDUuMDgsOC40MWwuMTguMTlhMjguODEsMjguODEsMCwwLDAsNi4zNiw1VjM2MGEzMC41LDMwLjUsMCwwLDAsNy42LDMuMDdsLjA2LDBhMzAuNTYsMzAuNTYsMCwwLDAsNy42OC44NywyOC44NCwyOC44NCwwLDAsMCw3Ljc5LTEsMjYuNjMsMjYuNjMsMCwwLDAsNy42Ny0zLjMyLDI3LjQyLDI3LjQyLDAsMCwwLDYuMzktNS41N0EyNS4wNSwyNS4wNSwwLDAsMCwxMzIuMTEsMzQ1LjQzWiIvPjwvZz48L2c+PC9zdmc+"},302:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NDcgNDM0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmlsbHVzdHJhdGlvbjwvdGl0bGU+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjcyOCAyMTYuODcgNjYyLjE5IDI3NS44NiA2NjIuMTkgMzg0IDI2IDM4NCAyNiAzNSA2NjMuMTQgMzUgNjYzLjE0IDIyMy43OSA3MjggMjE2Ljg3Ii8+PC9zdmc+"},303:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NTIgMjE4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmlsbHVzdHJhdGlvbjwvdGl0bGU+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE1IDEwMCA4MC42MyA3NiA4MC42MyAzMiA3MTUgMzIgNzE1IDE3NCA3OS42NyAxNzQgNzkuNjcgOTcuMTkgMTUgMTAwIi8+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-contact-zh-js-3bd66a04953054312171.js.map