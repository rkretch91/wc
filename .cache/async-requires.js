// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/ryankretch/Documents/Coding Stuff/wc/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-404-js": () => import("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-en-js": () => import("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/index.en.js" /* webpackChunkName: "component---src-pages-index-en-js" */),
  "component---src-pages-index-zh-js": () => import("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/index.zh.js" /* webpackChunkName: "component---src-pages-index-zh-js" */),
  "component---src-pages-my-files-js": () => import("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */),
  "component---src-pages-page-2-en-js": () => import("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/page-2.en.js" /* webpackChunkName: "component---src-pages-page-2-en-js" */),
  "component---src-pages-page-2-zh-js": () => import("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/page-2.zh.js" /* webpackChunkName: "component---src-pages-page-2-zh-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/ryankretch/Documents/Coding Stuff/wc/.cache/data.json")

