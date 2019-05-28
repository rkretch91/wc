const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/ryankretch/Documents/Coding Stuff/wc/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ryankretch/Documents/Coding Stuff/wc/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/404.js"))),
  "component---src-pages-index-en-js": hot(preferDefault(require("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/index.en.js"))),
  "component---src-pages-index-zh-js": hot(preferDefault(require("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/index.zh.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/my-files.js"))),
  "component---src-pages-page-2-en-js": hot(preferDefault(require("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/page-2.en.js"))),
  "component---src-pages-page-2-zh-js": hot(preferDefault(require("/Users/ryankretch/Documents/Coding Stuff/wc/src/pages/page-2.zh.js")))
}

