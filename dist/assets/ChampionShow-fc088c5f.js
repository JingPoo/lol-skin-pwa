import{c as _,o as a,a as i,b as t,t as l,n as I,r as p,d as D,e as S,f as c,w as u,g as M,h as x,T as j,i as O,F as J,j as q,k as F,v as V,l as E,s as H}from"./index-9388219d.js";const A={class:"w-48 md:w-72 h-36 md:h-48 flex group"},G={class:"w-full h-full md:text-xl text-white bg-[rgba(0,0,0,.5)] flex flex-col justify-center items-center rounded-lg p-2 opacity-0 group-hover:opacity-100 transition duration-500"},K={class:"text-center"},P={class:"text-center"},Q={__name:"Skin",props:{skin:{type:Object,required:!0}},setup(d){const f=d,s=_(()=>({background:`url(${f.skin.cover}) no-repeat center / cover`}));return(o,w)=>(a(),i("div",A,[t("div",{class:"w-full h-full relative rounded-lg",style:I(s.value)},[t("div",G,[t("h2",K,l(d.skin.name),1),t("h3",P,l(d.skin.eng),1)])],4)]))}},R={class:"w-full min-w-[400px] flex flex-col items-center"},U=["src"],W=t("svg",{class:"w-10 md:w-12 h-12 md:h-20",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})],-1),X={class:"w-max text-xs md:text-xl flex flex-col justify-center items-center pt-2 absolute left-0 invisible group-hover:visible"},Y=t("svg",{class:"w-10 md:w-12 h-12 md:h-20",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1),Z={class:"w-max text-xs md:text-lg flex flex-col justify-center items-center pt-2 absolute right-0 invisible group-hover:visible"},ee={class:"text-black font-bold md:text-xl flex flex-col justify-center items-center z-10"},te={class:"text-3xl md:text-5xl font-bold"},oe={class:"md:text-2xl"},se={class:"md:text-2xl"},le=t("svg",{class:"w-7 h-7 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})],-1),ae=[le],ne={key:1},re={key:2,class:"skins w-full flex flex-col justify-center items-center"},ie={class:"w-full h-12 md:h-16 leading-[3rem] md:leading-[4rem] text-center text-lg md:text-2xl font-bold text-slate-200 bg-primary"},ce={class:"cards w-full px-6 py-2 flex gap-2 overflow-x-auto"},ue={key:3},he={__name:"ChampionShow",props:{id:{type:Number,required:!0}},setup(d){const f=d,s=H.champions,o=_(()=>s.find(e=>e.id===f.id)),w=_(()=>({background:`url(${o.value.cover}) repeat center / 7%`})),N=e=>e===1?s.length:e-1,b=e=>e===1?s[s.length-1].eng:s[e-2].eng,B=e=>e===s.length?1:e+1,k=e=>e===s.length?s[0].eng:s[e].eng,$=e=>e===1?s[s.length-1].name:s[e-2].name,z=e=>e===s.length?s[0].name:s[e].name,h=p(0),y=p(""),n=p([]);D(()=>{n.value=JSON.parse(localStorage.getItem("favorId"))});let C;const L=e=>{h.value!==0&&clearTimeout(C),C=setTimeout(()=>{h.value=0},3e3),y.value=s.find(r=>r.id===e).name,h.value=e;const v=n.value.findIndex(r=>r===e);v===-1?(n.value.push(e),localStorage.setItem("favorId",JSON.stringify(n.value))):(n.value.splice(v,1),localStorage.setItem("favorId",JSON.stringify(n.value)))};return(e,v)=>{const r=S("router-link"),T=S("router-view");return a(),i("div",R,[o.value?(a(),i("div",{key:0,class:"w-full h-60 md:h-[50vh] md:border-t-8 border-primary flex md:flex-col justify-center items-center gap-2 md:gap-4 relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[rgba(255,255,255,.4)]",style:I(w.value)},[t("img",{src:o.value.cover,class:"w-36 h-36 md:w-48 md:h-48 rounded-full z-10 shadow shadow-black hover:scale-110 transition duration-200"},null,8,U),c(r,{class:"absolute top-18 md:top-48 left-6 md:left-32 bg-[rgba(255,255,255,.2)] rounded-xl hover:text-primary hover:bg-[rgba(255,255,255,.6)] hover:-translate-x-2 transition ease-out duration-300 group",to:{name:"champion.show",params:{id:N(o.value.id),slug:b(o.value.id)}}},{default:u(()=>[W,t("div",X,[t("h5",null,l($(o.value.id)),1),t("h6",null,l(b(o.value.id)),1)])]),_:1},8,["to"]),c(r,{class:"absolute top-18 md:top-48 right-6 md:right-32 bg-[rgba(255,255,255,.2)] rounded-xl hover:text-primary hover:bg-[rgba(255,255,255,.6)] hover:bg-gray-500 hover:translate-x-2 transition ease-out duration-300 group",to:{name:"champion.show",params:{id:B(o.value.id),slug:k(o.value.id)}}},{default:u(()=>[Y,t("div",Z,[t("h5",null,l(z(o.value.id)),1),t("h6",null,l(k(o.value.id)),1)])]),_:1},8,["to"]),t("div",ee,[t("h1",te,l(o.value.name),1),t("h2",oe,l(o.value.eng),1),t("h3",se,"角色定位: "+l(o.value.role),1)]),t("div",{onClick:v[0]||(v[0]=m=>L(o.value.id)),class:M(["w-9 h-9 z-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80",[n.value.includes(o.value.id)?"bg-yellow-600":"bg-gray-600"]])},ae,2),(a(),x(O,{to:"body"},[c(j,{appear:"","enter-from-class":"opacity-0 scale-50","enter-active-class":"duration-300 ease-out"},{default:u(()=>[F(t("div",{class:"w-max h-max z-50 text-xl text-white bg-orange-600 px-6 py-3 rounded-lg absolute top-0 right-0"},l(n.value.includes(h.value)?"加入":"取消")+"收藏: "+l(y.value),513),[[V,h.value!==0]])]),_:1})]))],4)):(a(),i("div",ne," Loading... ")),o.value?(a(),i("div",re,[t("h2",ie," Skins of "+l(o.value.name),1),t("div",ce,[(a(!0),i(J,null,q(o.value.skins,(m,g)=>(a(),x(r,{key:g,to:{name:"skin.show",params:{skinSlug:m.eng}}},{default:u(()=>[c(Q,{skin:m},null,8,["skin"])]),_:2},1032,["to"]))),128))]),c(T,null,{default:u(({Component:m,route:g})=>[c(j,{appear:"",mode:"out-in","enter-from-class":"opacity-0 translate-x-16","enter-active-class":"duration-200 ease-out","leave-to-class":"opacity-0 -translate-x-16","leave-active-class":"duration-200 ease-in"},{default:u(()=>[(a(),x(E(m),{key:g.path}))]),_:2},1024)]),_:1})])):(a(),i("div",ue," Loading... "))])}}};export{he as default};
