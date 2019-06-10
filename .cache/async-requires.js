// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blogpost-js": () => import("/Users/user/Documents/contenfull-gatsby/src/templates/blogpost.js" /* webpackChunkName: "component---src-templates-blogpost-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/user/Documents/contenfull-gatsby/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/user/Documents/contenfull-gatsby/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blogposts-js": () => import("/Users/user/Documents/contenfull-gatsby/src/pages/blogposts.js" /* webpackChunkName: "component---src-pages-blogposts-js" */),
  "component---src-pages-index-js": () => import("/Users/user/Documents/contenfull-gatsby/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/user/Documents/contenfull-gatsby/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/user/Documents/contenfull-gatsby/.cache/data.json")

