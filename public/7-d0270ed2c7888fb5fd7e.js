(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{189:function(e,a,t){var n;e.exports=(n=t(197))&&n.default||n},190:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),o=t(11),i=t.n(o),s=t(59),l=t.n(s);t.d(a,"a",function(){return l.a});t(189);var c=r.a.createContext({});function p(e){var a=e.staticQueryData,t=e.data,n=e.query,o=e.render,i=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,o=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(p,{data:a,query:t,render:n||o,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},192:function(e,a,t){"use strict";t(193),t(21),t(13);var n=t(194),r=t(0),o=t.n(r),i=t(11),s=t.n(i),l=t(59),c=t.n(l),p=function(e){var a=e.langs.map(function(e){return o.a.createElement(c.a,{to:e.link,key:e.langKey,style:{color:"white"}},o.a.createElement("li",{className:"language-selector",selected:e.selected},function(e){if(!1===e.selected)return"zh"===e.langKey?"中":e.langKey}(e)))});return o.a.createElement("section",{style:{float:"right"}},o.a.createElement("ul",null,a))};p.propTypes={langs:s.a.array};var m=p,u=t(195),d=t.n(u),g=t(205),h=t.n(g),w=t(206);var f=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={navbarIsActive:"navbar-item dropdown is-hidden-desktop",prevScrollpos:function(){if("undefined"!=typeof window)return window.pageYOffset},visible:!0},a.navbarOpenDropdown=function(){a.setState({navbarIsActive:"navbar-item dropdown is-active is-hidden-desktop"})},a.navbarCloseDropdown=function(){a.setState({navbarIsActive:"navbar-item dropdown is-hidden-desktop"})},a.languageCheck=function(){return a.props.langs[0].selected?o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{to:"/en/about/"},"About Us"),o.a.createElement("a",{href:"/en/locations/"},"Locations"),o.a.createElement(c.a,{to:"/en/partners/"},"Partners"),o.a.createElement(c.a,{to:"/en/news/"},"News"),o.a.createElement("a",{href:"/en/about/"},"Impact"),o.a.createElement("button",{className:"button"},o.a.createElement("a",{href:"/en/about/"},"Get In Touch"))):o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{to:"/about/"},"关于我们"),o.a.createElement(c.a,{to:"/locations/"},"地址"),o.a.createElement("a",{href:"/partners/"},"合作公司"),o.a.createElement(c.a,{to:"/news/"},"新闻"),o.a.createElement("a",{href:"/about/"},"社会"),o.a.createElement("button",{className:"button"},o.a.createElement("a",{href:"/en/about/"},"联系我们")))},a.handleScroll=function(){var e=a.state.prevScrollpos;if("undefined"!=typeof window){var t=window.pageYOffset,n=e>t;a.setState({prevScrollpos:t,visible:n})}},a.languageCheckMobile=function(){return a.props.langs[0].selected?o.a.createElement(w.slide,{width:"70%"},o.a.createElement("a",{id:"home",className:"menu-item",href:"/en"},"Home"),o.a.createElement("a",{id:"about",className:"menu-item",href:"/en/about"},"About Us"),o.a.createElement("a",{id:"contact",className:"menu-item",href:"/en/locations"},"Locations"),o.a.createElement("a",{id:"contact",className:"menu-item",href:"/en/partners"},"Partners"),o.a.createElement("a",{id:"contact",className:"menu-item",href:"/en/news"},"News"),o.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"Impact"),o.a.createElement("hr",null),o.a.createElement("a",{className:"menu-item--small",href:""},"Get In Touch")):o.a.createElement(w.slide,{width:"70%"},o.a.createElement("a",{id:"home",className:"menu-item",href:"/"},"Home"),o.a.createElement("a",{id:"about",className:"menu-item",href:"/about"},"关于我们"),o.a.createElement("a",{id:"contact",className:"menu-item",href:"/locations"},"地址"),o.a.createElement("a",{id:"contact",className:"menu-item",href:"/partners"},"合作公司"),o.a.createElement("a",{id:"contact",className:"menu-item",href:"/news"},"新闻"),o.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"社会"),o.a.createElement("hr",null),o.a.createElement("a",{className:"menu-item--small",href:""},"联系我们"))},a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{height:"125px",display:"flex",justifyContent:"space-between",position:"fixed",width:"100%"},className:h()("big-header",{"big-header--hidden":!this.state.visible})},o.a.createElement("div",{style:{flex:"500px"}},o.a.createElement(c.a,{to:"/"},o.a.createElement("div",{className:"header-logo"},o.a.createElement("img",{src:d.a,alt:"wecarewc-logo"})))),o.a.createElement("div",{className:"nav-menu is-hidden-touch"},this.languageCheck()),o.a.createElement(m,{langs:this.props.langs})),o.a.createElement("div",{style:{zIndex:"1000"}},this.languageCheckMobile()))},n}(o.a.Component),b=t(196),y=t.n(b);var v=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"footer columns is-mobile is-multiline"},o.a.createElement("div",{className:"mailer-footer column is-two-fifths-desktop is-half-mobile"},o.a.createElement("h1",null,"Mailing List"),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control",style:{paddingBottom:"10px"}},o.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. ilovetoilets@gmail.com"})),o.a.createElement("div",{className:"control"},o.a.createElement("button",{className:"button",id:"grey"},"Submit")))),o.a.createElement("div",{className:"nav-menu-footer column is-one-fifth-desktop is-half-mobile"},o.a.createElement("div",{className:"center-that-text"},o.a.createElement("h1",null,"Menu"),o.a.createElement("a",{href:"/en/about/"},o.a.createElement("p",null,"About Us")),o.a.createElement("a",{href:"/en/about/"},o.a.createElement("p",null,"Location")),o.a.createElement("a",{href:"/en/about/"},o.a.createElement("p",null,"Partners")),o.a.createElement(c.a,{to:"/en/news/"},o.a.createElement("p",null,"News")),o.a.createElement("a",{href:"/en/about/"},o.a.createElement("p",null,"Impact")),o.a.createElement("a",{href:"/en/about/"},o.a.createElement("p",null,"Careers")))),o.a.createElement("div",{className:"wechat-icon-footer column is-one-fifth-desktop is-half-mobile"},o.a.createElement("h1",null,"Get In Touch"),o.a.createElement("h2",null,"WeChat"),o.a.createElement("img",{src:y.a,alt:"WeCare WC Qr Code"})),o.a.createElement("div",{className:"address-phone-footer column is-one-fifth-desktop is-half-mobile"},o.a.createElement("h2",null,"Address"),o.a.createElement("p",null,"Wework Nanjing West Road",o.a.createElement("br",null),"819 Nanjing West Road",o.a.createElement("br",null),"(near Taixing Road)",o.a.createElement("br",null),"3rd Floor",o.a.createElement("br",null),"200040 Shanghai P.R. China"),o.a.createElement("br",null),o.a.createElement("h2",null,"Customer Service"),o.a.createElement("p",null,o.a.createElement("span",{id:"bold"},"Phone:")," +86(0)21-51853537"),o.a.createElement("p",null,o.a.createElement("span",{id:"bold"},"Email:")," curious@wecarewc.com"),o.a.createElement("br",null),o.a.createElement("h2",null,"Other Inquires"),o.a.createElement("button",{className:"button is-primary"},"Get In Touch"))),o.a.createElement("div",{className:"copyright has-text-centered"},o.a.createElement("p",null,(new Date).getFullYear()," WeCare WC. All Rights Reserved.")))},n}(o.a.Component),C=t(208),E=t.n(C),W=t(200),j=t(190),P=t(191),k=(t(212),t(214),function(e){var a=e.children,t=e.location,r=e.i18nMessages;return o.a.createElement(j.b,{query:"2825539598",render:function(e){var n=t.pathname,i=e.site.siteMetadata.languages,s=i.langs,l=i.defaultLangKey,c=Object(W.getCurrentLangKey)(s,l,n),p=("/"+c).replace("/"+l+"/","/"),m=Object(W.getLangs)(s,c,Object(W.getUrlForLang)(p,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+l+"/","/")})});return o.a.createElement(P.a,{locale:c,messages:r},o.a.createElement("div",null,o.a.createElement(E.a,{title:"WeCare WC",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),o.a.createElement(f,{langs:m}),o.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},a),o.a.createElement(v,null)))},data:n})});k.propTypes={children:s.a.func};a.a=k},194:function(e){e.exports={data:{site:{siteMetadata:{languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},195:function(e,a,t){e.exports=t.p+"static/wecarewc-logo-white-9741893910473454ef9d01f007f29fd4.png"},196:function(e,a,t){e.exports=t.p+"static/wecarewc_qrcode-1fbaeebb87b46b341c57855606fcbebf.png"},197:function(e,a,t){"use strict";t.r(a);t(21);var n=t(0),r=t.n(n),o=t(11),i=t.n(o),s=t(85),l=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=l},209:function(e,a){},210:function(e,a){},211:function(e,a){},213:function(e,a){},315:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"The Queen of Public Restrooms",date:"2019-05-10",photo:"https://res.cloudinary.com/wecare-wc/image/upload/v1563378006/XTD%20Plaza/XTD-Plaza-Entrance-2.jpg",language:"EN"},fields:{slug:"/en/news/the-queen-of-public-restrooms-xtd-plaza/"},excerpt:"With the inspirational effects of Women’s Day still pulsing around the globe, WeCare WC is here to follow it up by inaugurating its “Queen…",timeToRead:1,html:'<p>With the inspirational effects of Women’s Day still pulsing around the globe, WeCare WC is here to follow it up by inaugurating its “Queen of Public Restrooms” at the brand new Xintiandi Plaza.\n<br>\n<br>\nIntroducing WeCare WC’s first Premium Ladies Room; a true symbol of women empowerment, inspired by all of the mothers, daughters, grandmothers, CEOs, doctors, leaders, and other women that are pivotal in making the world a better place.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134767/XTD%20Plaza/XTD-Plaza-Lounge.jpg"></p>\n<p>The room, divided into a restroom area and social lounge, embodies all of the features to make any lady’s day exceptional.\n<br>\n<br>\nOn the restroom side, each woman is treated like royalty as she enters a floor to ceiling stall featuring wall-hung Geberit toilets and plenty of positive and encouraging quotes.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134934/XTD%20Plaza/XTD-Plaza-Toilets.jpg"></p>\n<p>Visitors can then wash up in style over a sleek Dupont Corian washing basin with water taps mastered by Danish brand Vola and premium Chinese brand ELLAI.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134935/XTD%20Plaza/XTD-Plaza-Restroom.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134934/XTD%20Plaza/XTD-Plaza-Sink2.jpg"></p>\n<p>After freshening up, the one-of-a-kind experience extends to the social lounge, where visitors can tend to other needs or just get some much-deserved relaxation time in. Mothers have the option of entering the nursing room and taking care of their baby in utmost comfort.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Nursing-Room.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134766/XTD%20Plaza/XTD-Plaza-Sink1.jpg"></p>\n<p>For women getting ready for meetings or for a special night out, the changing room is ready to make you look great.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Changing-Room.jpg"></p>\n<p>And last but not least, the lounge area is purposefully designed with a cozy waiting couch, make-up mirrors with bubble lights, and magnifying mirrors.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Sink.jpg"></p>\n<div class="has-text-centered">\n  <h2>Come and visit us at Huaihai Middle Road No. 333, we look forward to WOWing you soon.</h2>\n</div>'}},{node:{frontmatter:{title:"公共卫生间之“女王”",date:"2019-05-10",photo:"https://res.cloudinary.com/wecare-wc/image/upload/v1563378006/XTD%20Plaza/XTD-Plaza-Entrance-2.jpg",language:"CN"},fields:{slug:"/news/the-queen-of-public-restrooms-xtd-plaza/"},excerpt:"“三八“妇女节鼓舞人心的氛围还在世界各地传播着，WeCare WC也积极参与，给公众带来了公共卫生间中的”女王“–新天地广场女性尊享卫生间。\n\n\nWeCare WC首个女性尊享公共卫生间，是这个社会对女性权利尊重认可的象征。这一设计的灵感来自于母亲、女儿、祖母、CEO…",timeToRead:1,html:'<p>“三八“妇女节鼓舞人心的氛围还在世界各地传播着，WeCare WC也积极参与，给公众带来了公共卫生间中的”女王“–新天地广场女性尊享卫生间。\n<br>\n<br>\nWeCare WC首个女性尊享公共卫生间，是这个社会对女性权利尊重认可的象征。这一设计的灵感来自于母亲、女儿、祖母、CEO、医生、领导人和其他各行各业的女性，她们是让这个世界变得更加美好的动力与关键所在。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134767/XTD%20Plaza/XTD-Plaza-Lounge.jpg"></p>\n<p>整个空间被分成卫生间区域与社交休息区域，整合了女性的需求，与众不同。\n<br>\n<br>\n卫生间区域，每一个使用者都会享受到皇家般的对待。她们会进入一个从顶到地完全满足私密性的卫生间隔间，隔间内有挂墙吉博力马桶，墙面上还贴满了正能量的话语。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134934/XTD%20Plaza/XTD-Plaza-Toilets.jpg"></p>\n<p>使用者们可以在光滑无缝的杜邦可丽耐洗手台上梳洗打扮，所使用的龙头是丹麦品牌Vola和中国原创高端品牌宜来。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134935/XTD%20Plaza/XTD-Plaza-Restroom.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134934/XTD%20Plaza/XTD-Plaza-Sink2.jpg"></p>\n<p>如厕完毕后，使用者就可以步入独一无二的社交休息体验区，满足自己的其他需要。妈妈们可以在母婴室中，在如家般舒适的环境中，照顾自己的宝宝。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Nursing-Room.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134766/XTD%20Plaza/XTD-Plaza-Sink1.jpg"></p>\n<p>对于那些准备参加会议或者任何重要约会或派对的女生来说，更衣室可以满足更衣的需要，立刻光鲜亮丽。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Changing-Room.jpg"></p>\n<p>最后，我们在休息区专门设计了一个等待区，有着舒适的沙发，泡泡灯化妆镜和放大镜，供女生们补妆闲谈。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Sink.jpg"></p>\n<div class="has-text-centered">\n  <h2>快来淮海中路333号体验一下吧！我们期待震撼您的观感。</h2>\n</div>'}},{node:{frontmatter:{title:"WeCare WC Goes Portable!",date:"2019-02-25",photo:"https://res.cloudinary.com/wecare-wc/image/upload/v1563379180/wecarewc%20portable/wecarewc-portable-teaser-1.jpg",language:"EN"},fields:{slug:"/en/news/wecare-wc-goes-portable/"},excerpt:"Imagine a city where futuristic, spotless, and ample public restrooms dot the sidewalks. Nobody has to frantically search for a place to do…",timeToRead:1,html:'<p>Imagine a city where futuristic, spotless, and ample public restrooms dot the sidewalks. Nobody has to frantically search for a place to do their business or pay a shop some money to use its mediocre restroom, because most corners have a top-notch public restroom ready for use. The population’s basic need and right of using the restroom is 100% fulfilled…</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559136526/wecarewc%20portable/wecarewc-portable-sink.jpg"></p>\n<p>n many places, this may sound like a far away dream, but WeCare WC’s latest project is quickly turning this into a not-so-far-off reality. Introducing WeCare WC’s very first portable container model.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559136510/wecarewc%20portable/190122_WeCare_xCube_131_iwmixe.jpg"></p>\n<p>Crafted out of the shell of an empty shipping container, this public restroom puts an ingenious spin on portable restroom solutions while still brandishing all of WeCare WC’s usual sleek and intuitive design elements. Alongside its gorgeous aesthetics, this container model brings with it notable other benefits; including flexibility of use and scalability. Whether a sold-out concert venue needs a temporary solution or a gas station needs a quick and more permanent option, WeCare WC’s container model fills plenty of gaps in the market as it can be placed seamlessly in many different scenarios. Because of the streamlined design and materials to make the container models, the restroom can also be quickly re-produced and used in a multitude of locations; cutting the resources and time needed to produce top-quality restrooms.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559136510/wecarewc%20portable/wecarewc-portable-toilet.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559136510/wecarewc%20portable/wecarewc-portable-shower.jpg"></p>\n<p>This is a defining moment for WeCare WC and with the introduction of this model, its ability to scale up and become the face of global public restroom and facility transformation is more than achievable. The days of struggling to find a place to use the restroom are nearly over thanks to WeCare WC and its constant innovation.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559136512/wecarewc%20portable/190122_WeCare_xCube_190_l5eflh.jpg"></p>'}},{node:{frontmatter:{title:"WeCare WC移动卫生间解决方案",date:"2019-02-25",photo:"https://res.cloudinary.com/wecare-wc/image/upload/v1563379180/wecarewc%20portable/wecarewc-portable-teaser-1.jpg",language:"CN"},fields:{slug:"/news/wecare-wc-goes-portable/"},excerpt:"想象一下，一个充满时代感、一尘不染、宽敞的公共厕所点缀在人行道上的城市。再也没有人需要疯狂的在街边找一个地方解手，或者不得不去小商店买点东西，以使用它非常一般的厕所，因为几乎城市的所有角落都有一个一流的公共卫生间供人们使用。人们的最基本的需求和使用公共卫生间的权利得到了10…",timeToRead:1,html:'<p>想象一下，一个充满时代感、一尘不染、宽敞的公共厕所点缀在人行道上的城市。再也没有人需要疯狂的在街边找一个地方解手，或者不得不去小商店买点东西，以使用它非常一般的厕所，因为几乎城市的所有角落都有一个一流的公共卫生间供人们使用。人们的最基本的需求和使用公共卫生间的权利得到了100%的满足。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559136526/wecarewc%20portable/wecarewc-portable-sink.jpg"></p>\n<p>在许多地方，这听起来像是一个遥远的梦，但WeCare WC最新的项目正在迅速将其转变为一个不远的事实。向大家介绍WeCare WC的第一个模块式可移动卫生间模型。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559136510/wecarewc%20portable/190122_WeCare_xCube_131_iwmixe.jpg"></p>\n<p>这个公共卫生间是在一个空集装箱的外壳内完成的，它巧妙地结合了模块式卫生间解决方案，同时还展示了所有WeCare WC经典、直观的设计元素。除了华丽的美学，这个可移动卫生间模型还有着其他的显著的优点，包括使用的灵活性和可拓展性。无论一个座无虚席的演唱会场地所需要的临时解决方案，还是一个加油站所需要的快速而更持久的选择，WeCare WC的集装箱模型填补了市场上许多的空白，因为它可以无缝地放置在许多不同的场景中。由于采用了流线型的设计和材料，可移动卫生间也可以快速地重复生产并在不同的场景投入使用；减少了生产顶级卫生间所需的资源和时间。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559136510/wecarewc%20portable/wecarewc-portable-toilet.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559136510/wecarewc%20portable/wecarewc-portable-shower.jpg"></p>\n<p>这是WeCare WC的一个重要时刻，随着该模型的引入，迅速的规模扩大并成为全球公共卫生间和配套设施改造先驱的面孔将越来越清晰。由于WeCare WC不断的创新，那种挣扎着找寻卫生间的日子很快将不复存在。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559136512/wecarewc%20portable/190122_WeCare_xCube_190_l5eflh.jpg"></p>'}},{node:{frontmatter:{title:"喜迎进博会，WeCare WC浦东国际机场项目完成！",date:"2018-11-16",photo:"https://res.cloudinary.com/wecare-wc/image/upload/v1563379271/Shanghai%20Pudong%20International%20Airport/family-room-sink.jpg",language:"CN"},fields:{slug:"/news/wecare-wc-takes-off-in-pudong-airport/"},excerpt:"WeCare WC近日在上海浦东国际机场–中国最为忙碌的交通枢纽落成了最新的项目。浦东国际机场每年服务来自全球超过700…",timeToRead:1,html:'<p>WeCare WC近日在上海浦东国际机场–中国最为忙碌的交通枢纽落成了最新的项目。浦东国际机场每年服务来自全球超过7000万旅客，通过两间家庭卫生间和两间无障碍卫生间的改造，旅客们不管是起飞前还是到达后，都能够享用更舒适更放松的公共卫生空间。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138878/Shanghai%20Pudong%20International%20Airport/entrance-1.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138872/Shanghai%20Pudong%20International%20Airport/family-room-sink-2.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138863/Shanghai%20Pudong%20International%20Airport/accessible-room-corian.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138877/Shanghai%20Pudong%20International%20Airport/accessible-room-sink-2.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138860/Shanghai%20Pudong%20International%20Airport/accessible-room-toilets-2.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138858/Shanghai%20Pudong%20International%20Airport/accessible-room-overview.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138871/Shanghai%20Pudong%20International%20Airport/family-room-sink-3.jpg"></p>\n<p>这一改造解决了旅行中常常遇到的痛点，尤其是那些全家出行的旅客。家庭卫生间内划分为四个区域：哺乳区，有舒适的哺乳椅和临时婴儿床，供妈妈吸奶哺乳；玩耍区，有帐篷、益智玩具、平板电脑和书籍，供儿童游玩和阅读；休息区，有伸缩椅 ，供旅客暂时休息；婴儿护理区，有尿布台、奶粉冲饮机，供爸爸妈妈给宝宝换尿布、冲奶粉等。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138870/Shanghai%20Pudong%20International%20Airport/family-room-1.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138870/Shanghai%20Pudong%20International%20Airport/family-room-2.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138870/Shanghai%20Pudong%20International%20Airport/family-room-3.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138870/Shanghai%20Pudong%20International%20Airport/family-room-4.jpg"></p>\n<p>“这是WeCare WC历史上一个重要的里程碑，”联合创始人Wendy Krueger说，“通过把项目做到上海最忙碌的机场，我们在一步步靠近自己的使命———给世界各地的人们带来前所未有的公共卫生间体验。这一项目的落地，证实了品牌未来无限的可能性。”\n<br>\n<br>\n诚挚的感谢上海浦东国际机场、宜来卫浴、戴森等品牌的投入与配合，才能使项目按时完美竣工。</p>'}},{node:{frontmatter:{title:"WeCare WC Takes Off in Pudong Airport",date:"2018-11-06",photo:"https://res.cloudinary.com/wecare-wc/image/upload/v1563379271/Shanghai%20Pudong%20International%20Airport/family-room-sink.jpg",language:"EN"},fields:{slug:"/en/news/wecare-wc-takes-off-in-pudong-airport/"},excerpt:"WeCare WC is now open for business in one of China’s busiest transit hubs, Shanghai Pudong International Airport (PVG). The airport serves…",timeToRead:1,html:'<p>WeCare WC is now open for business in one of China’s busiest transit hubs, Shanghai Pudong International Airport (PVG). The airport serves 70 million passengers annually, and with two new family rooms and two accessible rooms, WeCare WC will make passengers from all over the globe more comfortable and relaxed before or after travel.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138878/Shanghai%20Pudong%20International%20Airport/entrance-1.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138872/Shanghai%20Pudong%20International%20Airport/family-room-sink-2.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138863/Shanghai%20Pudong%20International%20Airport/accessible-room-corian.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138877/Shanghai%20Pudong%20International%20Airport/accessible-room-sink-2.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138860/Shanghai%20Pudong%20International%20Airport/accessible-room-toilets-2.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138858/Shanghai%20Pudong%20International%20Airport/accessible-room-overview.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138871/Shanghai%20Pudong%20International%20Airport/family-room-sink-3.jpg"></p>\n<p>The facilities are the ideal place to tackle the exhausting pain points of travel; in particular, those faced by traveling families. The family rooms are equipped with a breast feeding area, featuring a comfortable nursing chair; a crib for sleepy babies; a play zone complete with a tent, fun toys, smart pads, and books to keep children occupied; and even a reclinable lounge chair to help rejuvenate weary travelers.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138870/Shanghai%20Pudong%20International%20Airport/family-room-1.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138870/Shanghai%20Pudong%20International%20Airport/family-room-2.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138870/Shanghai%20Pudong%20International%20Airport/family-room-3.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559138870/Shanghai%20Pudong%20International%20Airport/family-room-4.jpg"></p>\n<p>“This is a major achievement in the history of the WeCare WC timeline,” -Co-Founder, Wendy Krueger, expressed, “By entering Shanghai’s busiest airport, we are making strides in fulfilling our mission of bringing exceptional restroom experiences to people all over the globe. In launching this project, it is proof that anything is possible for the brand.”\n<br>\n<br>\nWe sincerely thank PVG, ELLAI, and Dyson for the time commitment in making this change happen!</p>'}},{node:{frontmatter:{title:"WeCare WC Lands in People’s Square",date:"2018-10-28",photo:"https://res.cloudinary.com/wecare-wc/image/upload/v1563379317/peoples%20square/accessible-room.jpg",language:"EN"},fields:{slug:"/en/news/WeCare-WC-Lands-in-Peoples-Square/"},excerpt:"On the edge of the world-famous People’s Square in the very heart of Shanghai lies the latest WeCare WC creation. Staged in the historical…",timeToRead:1,html:'<p>On the edge of the world-famous People’s Square in the very heart of Shanghai lies the latest WeCare WC creation. Staged in the historical public restroom at No. 10 Wusheng Road (built in 1957), the project is a gorgeous retrofit of the pre-existing facilities; including an Accessible Room on the first floor and a Nursing Room on the second floor.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140331/peoples%20square/facade.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/urinals.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140325/peoples%20square/accessible-room-1.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140333/peoples%20square/nursing-room-1.jpg"></p>\n<p>The design of these facilities carefully fuses WeCare WC’s classic, sleek and intuitive aesthetics with elements of traditional Chinese culture and modern, cosmopolitan Shanghai. It is a place where over 3,000 locals and tourists daily will gain an even greater appreciation for the city and China just by stopping in to use the facilities and toilets.</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140327/peoples%20square/accessible-room-3.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/nursing-room-2.jpg"></p>\n<p>So the next time you are passing through Shanghai’s busiest hub, People’s Square, make sure to check out the latest by WeCare WC. We guarantee you will leave feeling appreciated and fall in love with Shanghai even more.</p>\n<h2>Location: No. 10 Wusheng Road, near People’s Square, Huangpu District</h2>'}},{node:{frontmatter:{title:"中国呢",date:"2018-10-28",photo:"https://res.cloudinary.com/wecare-wc/image/upload/v1563379317/peoples%20square/accessible-room.jpg",language:"CN"},fields:{slug:"/news/WeCare-WC-Lands-in-Peoples-Square/"},excerpt:"在上海中心地带闻名中外的人民广场，落成了WeCare WC最新的项目。武胜路10号的公共卫生间始建于1957年，WeCare WC参与了这一项目的翻新，改造了一楼的无障碍卫生间和二楼的母婴室。\n\n\n武胜路卫生间翻新前在全市超过40…",timeToRead:1,html:'<p>在上海中心地带闻名中外的人民广场，落成了WeCare WC最新的项目。武胜路10号的公共卫生间始建于1957年，WeCare WC参与了这一项目的翻新，改造了一楼的无障碍卫生间和二楼的母婴室。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140331/peoples%20square/facade.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/urinals.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140325/peoples%20square/accessible-room-1.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140333/peoples%20square/nursing-room-1.jpg"></p>\n<p>武胜路卫生间翻新前在全市超过400所公共卫生间的年度检查中位列前茅，如今再造后，增加了旅游资讯功能，更将成为首屈一指的特色公共卫生间。这是一个旅游城市从卫生间的角度关心游客的缩影与开端。</p>\n<p><img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140327/peoples%20square/accessible-room-3.jpg">\n<img src="https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/nursing-room-2.jpg"></p>\n<p>所以当你下次有机会路过上海最忙碌的交通枢纽，一定不要错过WeCare WC武胜路卫生间，它一定会让你更加热爱上海这个城市。\n<br>\n<br></p>\n<h2>地址：黄浦区人民广场，武胜路10号</h2>'}}]}}}},316:function(e,a,t){e.exports=t.p+"static/ribbon-cut-44e41c6e697f7ec5ac56593c33da2843.jpg"}}]);
//# sourceMappingURL=7-d0270ed2c7888fb5fd7e.js.map