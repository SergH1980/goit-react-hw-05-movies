"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[474],{4474:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(5861),a=n(9439),c=n(7757),u=n.n(c),s=n(2791),i=n(7689),o=n(4390),p=n(8402),f=n(184);function v(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,s.useState)({}),l=(0,a.Z)(v,2),d=l[0],h=l[1],m=(0,i.UO)().movieId;(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,(0,o.lg)(m);case 4:t=e.sent,h(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,c(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]);var w=d.results;return w?0===w.length?(0,f.jsx)("div",{className:"emptyReviews",children:"Nothing to show yet!"}):(0,f.jsx)("div",{children:n?(0,f.jsx)(p.ko,{}):(0,f.jsx)("ul",{className:"reviewList",children:w.map((function(e){var t=e.author?"".concat(e.author):"No data available",n=e.content?"".concat(e.content):"No data available";return(0,f.jsxs)("li",{className:"reviewWrap",children:[(0,f.jsx)("p",{className:"authorName",children:t}),(0,f.jsx)("p",{children:n})]},e.id)}))})}):(0,f.jsx)("div",{children:"No reviews"})}},4390:function(e,t,n){n.d(t,{$g:function(){return p},Hz:function(){return f},P0:function(){return o},lg:function(){return v},sd:function(){return i}});var r=n(5861),a=n(7757),c=n.n(a),u=n(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="1a6be4acd703bdf91bdb7fd89ae97812",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/week?api_key=".concat(s,"&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=474.0bc6bd9f.chunk.js.map