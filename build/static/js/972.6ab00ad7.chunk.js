"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[972],{972:function(e,r,t){t.r(r),t.d(r,{default:function(){return s}});var n=t(439),c=t(791),o=t(87),i=t(184);var s=function(){var e=(0,c.useState)([]),r=(0,n.Z)(e,2),t=r[0],s=r[1];return(0,c.useEffect)((function(){var e="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("9fbbc1dbcdf3b809aeff0a64d74456cb");fetch(e).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){s(e.results)})).catch((function(e){console.error("Error fetching data:",e)}))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Pel\xedculas Populares"}),(0,i.jsx)("ul",{children:t.map((function(e){return(0,i.jsxs)("li",{children:[(0,i.jsx)(o.rU,{to:"/movies/".concat(e.id),children:(0,i.jsx)("h2",{children:e.title})}),(0,i.jsx)("p",{children:e.overview})]},e.id)}))})]})}}}]);
//# sourceMappingURL=972.6ab00ad7.chunk.js.map