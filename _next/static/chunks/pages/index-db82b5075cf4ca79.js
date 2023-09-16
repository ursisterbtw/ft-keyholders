(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3316)}])},3316:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var r=s(5893),a=s(9008),i=s.n(a),n=s(7294),o=s(9121),l=s(9924);function c(e){let{}=e;return(0,r.jsxs)("header",{className:"sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center",children:[(0,r.jsx)(l.E.div,{initial:{x:-500,y:500,opacity:0,scale:0},animate:{x:0,y:0,opacity:1,scale:1},transition:{duration:1.5},className:"flex flex-row items-center",children:(0,r.jsx)(l.E.button,{whileHover:{scale:1.5},whileTap:{scale:.75},children:(0,r.jsx)(o.QZ,{target:"_blank",url:"https://twitter.com/ursisterbtw",fgColor:"gray",bgColor:"transparent"})})}),(0,r.jsx)(l.E.div,{initial:{x:500,y:500,opacity:0,scale:0},animate:{x:0,y:0,opacity:1,scale:1},transition:{duration:1.5},className:"flex flex-row items-center",children:(0,r.jsx)(l.E.button,{whileHover:{scale:1.5},whileTap:{scale:.75},children:(0,r.jsx)(o.QZ,{target:"_blank",url:"https://github.com/ursisterbtw",fgColor:"gray",bgColor:"transparent"})})})]})}var d=s(2637),h=function(e){let{}=e;return(0,r.jsxs)(l.E.div,{initial:{opacity:0},animate:{scale:[1,2,2,3,1],opacity:[.1,.2,.4,.8,1],borderRadius:["20%","20%","50%","80%","20%"]},transition:{duration:1.5},className:"relative flex justify-center items-center",children:[(0,r.jsx)("div",{className:"absolute border border-[#7EE799] rounded-full h-[200px] w-[200px] mt-52 animate-ping"}),(0,r.jsx)("div",{className:"rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52 "}),(0,r.jsx)("div",{className:"rounded-full border border-[red] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse "}),(0,r.jsx)("div",{className:"rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52 "})]})},m=s(1664),p=s.n(m),u=function(e){let{}=e,[t,s]=(0,d.Ku)({words:["useful scripts","bots/tools","safety tips"],loop:!0,delaySpeed:2500});return(0,r.jsxs)("div",{className:"h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ",children:[(0,r.jsx)(h,{}),(0,r.jsx)(l.E.div,{animate:{borderRadius:["20%","20%","50%","50%","20%"],transition:{duration:1.5}},children:(0,r.jsx)(l.E.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1.5},children:(0,r.jsx)("img",{className:"relative rounded-full h-32 w-32 mx-auto object-cover",src:"https://avatars.githubusercontent.com/u/106648827?v=4",alt:""})})}),(0,r.jsx)("div",{className:"z-20",children:(0,r.jsxs)(l.E.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1.5},children:[(0,r.jsx)("h2",{className:"text-xl uppercase pb-2 tracking-[5px]",style:{color:"#7EE799"},children:"ursister.eth"}),(0,r.jsx)("h2",{className:"text-sm uppercase text-white pb-2 tracking-[5px]",children:"helping you navigate the current meta via:"}),(0,r.jsxs)("h1",{className:"text-2xl lg:6xl font:semi-bold px-18 ",children:[(0,r.jsx)("span",{className:"mr-3",children:t}),(0,r.jsx)(d.CF,{cursorColor:"gray"})]}),(0,r.jsxs)("div",{className:"pt-3",children:[(0,r.jsx)(p(),{href:"#intro",children:(0,r.jsx)("button",{className:"heroButton",children:"Intro"})}),(0,r.jsx)(p(),{href:"#disclaimer",children:(0,r.jsx)("button",{className:"heroButton",children:"Disclaimer"})}),(0,r.jsx)(p(),{href:"#tools",children:(0,r.jsx)("button",{className:"heroButton",children:"Tools"})})]})]})})]})},x=s(9603),f=s(9417),b=s(3024);let w=e=>{let[t,s]=(0,n.useState)(0),[a,i]=(0,n.useState)(0),o=()=>{fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap_change_percent_24h=true").then(e=>e.json()).then(e=>{s(e.ethereum.usd),i(e.ethereum.usd_24h_change)})};return(0,n.useEffect)(()=>{o();let e=setInterval(o,15e3);return()=>clearInterval(e)},[]),(0,r.jsx)(l.E.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1.75},children:(0,r.jsxs)("p",{children:[(0,r.jsx)(x.G,{icon:b.H0H})," :"," ",(0,r.jsxs)("span",{style:{color:a>=0?"green":"red"},children:["$",t.toFixed(2)," ",(0,r.jsx)(x.G,{icon:a>=0?f.FPD:f.r5q,style:{color:a>=0?"green":"red"}})]})]})})},g=()=>(0,r.jsx)("div",{className:"h-screen flex items-center justify-center text-center overflow-hidden relative px-4",children:(0,r.jsxs)("div",{className:"rounded border-2 border-red-500 max-w-full h-[650px] sm:w-[650px] sm:h-[650px] flex flex-col items-center justify-center p-4 sm:p-8",children:[(0,r.jsx)("h1",{className:"text-red-500 text-center font-bold text-2xl sm:text-3xl mb-4 z-10 animate-pulse",children:"DISCLAIMER"}),(0,r.jsx)("div",{className:"p-4 sm:p-6 rounded-lg shadow-lg z-10 max-w-xs",children:(0,r.jsxs)("p",{className:"text-sm sm:text-base",children:["Most of the tools mentioned below require you to input the"," ",(0,r.jsx)("span",{className:"text-red-500 font-semibold animate-pulse",children:"PRIVATE KEY"})," ","of an ETH address... this is an"," ",(0,r.jsx)("span",{className:"text-red-500 font-semibold animate-pulse",children:"EXTREMELY"})," ","risky practice as you're essentially giving the platform"," ",(0,r.jsx)("span",{className:"text-red-500 font-semibold animate-pulse",children:"FULL ACCESS"})," ","to that address. I'd recommend spinning up a fresh wallet with no prior transactions and using that as a designated burner trading wallet. Treat it as a throw away wallet that can get drained at any moment and never keep more than an amount that you're comfortable losing within it. My throw away wallet balances never go above 0.3 ETH."]})})]})}),y=()=>{let e=e=>{let t=Math.floor(e);return(0,r.jsxs)("span",{children:["★".repeat(t),"☆".repeat(10-t)]})},t=e=>{switch(e){case"telegram":return"border-blue-500";case"web-app":return"border-purple-400";case"other":return"border-yellow-300";default:return"border-white"}};return(0,r.jsx)("div",{className:"flex items-center justify-center text-center overflow-auto relative py-10 px-4 h-full min-h-screen",children:(0,r.jsxs)("div",{className:"rounded border-2 border-green-500 p-8 flex flex-col items-center justify-center",children:[(0,r.jsx)("h1",{className:"text-green-500 text-center text-2xl sm:text-3xl mb-4 z-10 animate-pulse",children:"Bots and Tools"}),(0,r.jsx)("h2",{className:"text-lg sm:text-xl",children:"Legend:"}),(0,r.jsxs)("div",{className:"flex space-x-4 mb-8",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"w-4 h-4 bg-blue-500 mr-2"}),(0,r.jsx)("span",{children:"Telegram Bots"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"w-4 h-4 bg-purple-400 mr-2"}),(0,r.jsx)("span",{children:"Web Apps"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"w-4 h-4 bg-yellow-300 mr-2"}),(0,r.jsx)("span",{children:"Other"})]})]}),[{name:"Maestro",description:"Cliche but Maestro simply dominates in terms of speed and efficacy. Minimal downtime as well. I use it for mobile trading and limit orders. There&apos;s something extremely undervalued about the ability to set a target price for your coin and AFK until it reaches that point.",fees:"1% fees",website:"https://www.maestrobots.com/",twitter:"https://twitter.com/MaestroBots",rating:8,type:"telegram"},{name:"Banana Gun",description:"I use this tool for sniping new pairs at launch, it&apos;s simply best in class due to the MEV bundling method it uses. The normal trading functions are decent as well but lack of limit orders (for now) put this bot a step behind Maestro in my opinion.",fees:"1% fees",website:"https://bananagun.io/",twitter:"https://twitter.com/BananaGunBot",rating:8,type:"telegram"},{name:"Prodigy Sniper",description:"Functions almost exactly like Maestro with some added sniping features. A bit slower to fire limit orders in my experience but those fee savings could really add up depending on the volume you trade. 50% off is no joke.",fees:"0.5% fees",website:"https://bananagun.io/",twitter:"https://twitter.com/BananaGunBot",rating:7,type:"telegram"},{name:"Rune.Finance",description:"I feel like this one is a sleeper. Fully integrated onchain trading webapp. Faster and more responsive than Unibotx or Thunder Cloud in my opinion. There&apos;s a *slight* delay in real time price data reflection compared to Maestro but in my opinion it&apos;s negligible when weighed against the benefits. They&apos;ve hinted at an airdrop. (Ask me for a ref link if interested, we both get &apos;points&apos;)",fees:"1% fees",website:"https://www.rune.finance",twitter:"https://twitter.com/rune_finance",rating:7,type:"web-app"},{name:"Unibotx",description:"Spectacular UX/UI, best in class in that regard - but the delay in price data can be frustrating if you&apos;re trying to fill orders with accuracy.",fees:"1% fees",website:"https://unibot.app/",twitter:"https://twitter.com/TeamUnibot",rating:6,type:"web-app"},{name:"Thunder Cloud / Eversify",description:"Another webapp with super clean UX/UI but the speed in which price movements are reflected is very hindering. Based team with great track record in NFT automation. Lags behind UnibotX and Rune.Finance atm, but has a TON of customizable features which might make up for the speed in certain instances.",fees:"1% fees",website:"https://eversify.com/automation",twitter:"https://twitter.com/eversifylabs",rating:5,type:"web-app"},{name:"TUF Ext",description:"Watch contracts as they&apos;re deployed in real time. This is the riskiest business but you can hit the lottery with this tool.",website:"https://tufext.com/simulator",twitter:"https://twitter.com/thetufteam",type:"other"},{name:"TTF Bot",description:"Contract address scraper, simply copy paste a CA into the telegram chat and receive tons of insightful metadata.",website:"https://ttfbot.io/",twitter:"https://twitter.com/TTFBot",type:"other"},{name:"Otto Simulator",description:"Contract address scraper similar to TTF Bot. Lots of insights.",website:"https://ottobots.xyz/",twitter:"https://twitter.com/OttoBots_xyz",type:"other"}].map((s,a)=>(0,r.jsxs)("div",{className:"border-2 ".concat(t(s.type)," p-4 rounded shadow-md w-3/4 mb-4"),children:[(0,r.jsx)("h2",{className:"text-xl sm:text-2xl font-bold mb-2",children:s.name}),(0,r.jsx)("p",{className:"text-sm sm:text-base mb-2",children:s.description}),"other"!==s.type&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"mb-4 font-semibold text-sm sm:text-base",children:["Rating:"," ",void 0!==s.rating?(0,r.jsxs)("div",{className:"mb-4 font-semibold text-sm sm:text-base",children:["Rating: ",s.rating,"/10 ",e(s.rating)]}):null]}),(0,r.jsx)("p",{className:"mb-4 font-semibold text-sm sm:text-base",children:s.fees})]}),(0,r.jsx)("a",{href:s.twitter,target:"_blank",rel:"noopener noreferrer",className:"underline text-white text-sm sm:text-base",children:"Twitter"}),(0,r.jsx)("a",{href:s.website,target:"_blank",rel:"noopener noreferrer",className:"underline text-white text-sm sm:text-base ml-4",children:"Website"})]},a))]})})},j=()=>(0,r.jsx)("div",{className:"h-screen flex items-center justify-center text-center overflow-hidden relative px-4",children:(0,r.jsxs)("div",{className:"rounded border-2 border-green-500 max-w-full h-[650px] sm:w-[650px] sm:h-[650px] flex flex-col items-center justify-center p-4 sm:p-8",children:[(0,r.jsx)("h1",{className:"text-green-500 text-center font-bold text-2xl sm:text-3xl mb-4 z-10 animate-pulse",children:"INTRO"}),(0,r.jsx)("div",{className:"p-4 sm:p-6 rounded-lg shadow-lg z-10 max-w-xs",children:(0,r.jsx)("p",{className:"text-sm sm:text-base",children:"I grew up in Upstate NY. I work and go to school full time. I've been teaching myself programming for 1.5 years now. I've been involved in crypto to varying degrees since 2017 but really started to dig in during the 2021 NFT bull run. Around that time I moved my funds off exchanges and started trading onchain. I noticed there's a desperate need for a central source of cohesive information regarding which onchain trading tools are safe and effective. It can be a scary thing to blind fire your private keys into random, shady Telegram bots. That being said... a lot of people are going to do it anyway. So, I'll use this platform to aggregate the best onchain resources that I have firsthand experience with."})})]})});function v(){return(0,r.jsxs)("div",{className:"bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5d78d8]/80 ",children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"ursister's site"})}),(0,r.jsx)(c,{}),(0,r.jsx)("section",{id:"hero",className:"snap-start",children:(0,r.jsx)(u,{})}),(0,r.jsx)("section",{id:"intro",className:"snap-start",children:(0,r.jsx)(j,{})}),(0,r.jsx)("section",{id:"disclaimer",className:"snap-start",children:(0,r.jsx)(g,{})}),(0,r.jsx)("section",{id:"tools",className:"snap-start",children:(0,r.jsx)(y,{})}),(0,r.jsx)(p(),{href:"#hero",children:(0,r.jsxs)("footer",{className:"sticky bottom-5 w-full cursor-pointer",children:[(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)(l.E.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1.5},children:(0,r.jsx)("img",{className:"h-14 w-14 rounded-full filter grayscale hover:grayscale-0 cursor-pointer",src:"https://avatars.githubusercontent.com/u/106648827?v=4",alt:""})})}),(0,r.jsx)(l.E.div,{className:"flex items-center justify-center mt-2 cursor-default",children:(0,r.jsx)(w,{})})]})})]})}}},function(e){e.O(0,[976,948,728,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);