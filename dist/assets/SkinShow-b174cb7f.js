import{c as o,o as l,a,b as e,t as c,e as p,s as m}from"./index-2021f6c4.js";const f={class:"skin-page w-full px-4 pt-4 pb-16"},h={key:0,class:"skins w-full h-max"},_={class:"w-full flex flex-col justify-center items-center mb-4"},w={class:"text-2xl font-bold"},b={class:"text-xl"},v={class:"w-full h-max flex flex-col md:flex-row items-center justify-center gap-2"},x=["src"],y={class:"w-full md:w-1/2 aspect-video border-4 border-primary shadow shadow-primary"},g=["src"],B={__name:"SkinShow",props:{id:{type:Number,required:!0},skinSlug:{type:String,required:!0}},setup(i){const t=i,n=m.champions,d=o(()=>n.find(s=>s.id===t.id)),r=o(()=>d.value.skins.find(s=>s.eng===t.skinSlug)),u=s=>s.replace(".be/","be.com/embed/");return(s,k)=>(l(),a("div",f,[r.value?(l(),a("div",h,[e("div",_,[e("h1",w,c(r.value.name),1),e("h2",b,c(r.value.eng),1)]),e("div",v,[e("img",{class:"w-full md:w-1/2 aspect-video border-4 border-primary shadow shadow-primary",src:r.value.cover},null,8,x),e("div",y,[e("iframe",{class:"w-full h-full",src:u(r.value.url),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,g)])])])):p("",!0)]))}};export{B as default};