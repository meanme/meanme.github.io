(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{2281:function(e,t,r){Promise.resolve().then(r.t.bind(r,6964,23)),Promise.resolve().then(r.t.bind(r,4724,23)),Promise.resolve().then(r.t.bind(r,3388,23)),Promise.resolve().then(r.bind(r,7021)),Promise.resolve().then(r.bind(r,5040))},7021:function(e,t,r){"use strict";r.r(t);var o=r(7437);r(2265);var n=r(3468),s=r(6691),c=r.n(s);let l={Image:c()};t.default=e=>{let{blog:t}=e,r=(0,n.z)(t.body.code);return(0,o.jsx)("div",{className:"col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-accent/20  prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg  prose-li:marker:text-accent  dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark  first-letter:text-3xl sm:first-letter:text-5xl    ",children:(0,o.jsx)(r,{components:l})})}},5040:function(e,t,r){"use strict";r.r(t);var o=r(7437),n=r(3082),s=r(2265);let c=(0,n.createClientComponentClient)();t.default=e=>{let{slug:t,noCount:r=!1,showCount:n=!0}=e,[l,i]=(0,s.useState)(0);return((0,s.useEffect)(()=>{let incrementView=async()=>{try{let{error:e}=await c.rpc("increment",{slug_text:t})}catch(e){}};r||incrementView()},[t,r]),(0,s.useEffect)(()=>{let getViews=async()=>{try{let{data:e,error:r}=await c.from("views").select("count").match({slug:t}).single();i(e?e.count:0)}catch(e){}};getViews()},[t]),n)?(0,o.jsxs)("div",{children:[l," views"]}):null}}},function(e){e.O(0,[724,964,173,971,864,744],function(){return e(e.s=2281)}),_N_E=e.O()}]);