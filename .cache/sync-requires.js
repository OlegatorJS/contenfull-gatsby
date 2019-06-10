const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blogpost-js": hot(preferDefault(require("/Users/user/Documents/contenfull-gatsby/src/templates/blogpost.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/user/Documents/contenfull-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/user/Documents/contenfull-gatsby/src/pages/404.js"))),
  "component---src-pages-blogposts-js": hot(preferDefault(require("/Users/user/Documents/contenfull-gatsby/src/pages/blogposts.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/user/Documents/contenfull-gatsby/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/user/Documents/contenfull-gatsby/src/pages/page-2.js")))
}

