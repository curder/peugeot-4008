import{h as T,o as u,c as l,k as e,F as v,G as M,l as o,e as p,t as c,a as m}from"./framework.89e8f300.js";const r={headers:{date:"日期",unit_price:"单价",oil_volume:"油量",type:"型号",amount:"金额"},total_kilometers:18300,detail:[{date:"2023-07-16",unit_price:8.09,oil_volume:24.73,amount:200},{date:"2023-06-24",unit_price:7.97,oil_volume:26.35,amount:210},{date:"2023-06-24",unit_price:7.92,oil_volume:32.08,amount:254},{date:"2023-06-23",unit_price:7.92,oil_volume:41.67,amount:330},{date:"2023-06-23",unit_price:7.92,oil_volume:31.44,amount:249},{date:"2023-06-23",unit_price:7.99,oil_volume:23.78,amount:190},{date:"2023-06-22",unit_price:7.77,oil_volume:25.74,amount:200},{date:"2023-06-22",unit_price:7.77,oil_volume:27.16,amount:211},{date:"2023-06-21",unit_price:7.78,oil_volume:27.38,amount:213},{date:"2023-06-21",unit_price:7.91,oil_volume:20.23,amount:160},{date:"2023-06-19",unit_price:7.79,oil_volume:28.24,amount:220},{date:"2023-06-18",unit_price:7.79,oil_volume:21.19,amount:165},{date:"2023-06-17",unit_price:7.79,oil_volume:24.14,amount:188},{date:"2023-06-16",unit_price:7.79,oil_volume:34.66,amount:270},{date:"2023-06-15",unit_price:7.91,oil_volume:26.3,amount:208},{date:"2023-06-15",unit_price:7.92,oil_volume:26.52,amount:210},{date:"2023-06-14",unit_price:7.92,oil_volume:28.67,amount:227},{date:"2023-06-12",unit_price:7.97,oil_volume:45.3,amount:361},{date:"2023-06-11",unit_price:7.81,oil_volume:28.17,amount:220},{date:"2023-06-11",unit_price:7.81,oil_volume:26,amount:203},{date:"2023-06-11",unit_price:7.96,oil_volume:29.65,amount:236},{date:"2023-06-10",unit_price:7.96,oil_volume:53.4,amount:425},{date:"2023-06-10",unit_price:7.96,oil_volume:33.92,amount:270},{date:"2023-06-09",unit_price:8.01,oil_volume:35.58,amount:285},{date:"2023-05-24",unit_price:7.93,oil_volume:26.73,amount:212},{date:"2023-05-22",unit_price:7.93,oil_volume:25.22,amount:200},{date:"2023-05-19",unit_price:7.86,oil_volume:39.57,amount:311},{date:"2023-05-19",unit_price:7.93,oil_volume:27.24,amount:216},{date:"2023-05-05",unit_price:8.25,oil_volume:36.36,amount:300},{date:"2023-05-03",unit_price:8.18,oil_volume:49.52,amount:405},{date:"2023-05-02",unit_price:8.31,oil_volume:30.55,amount:253.87},{date:"2023-05-02",unit_price:8.28,oil_volume:27.78,amount:230},{date:"2023-04-29",unit_price:8.27,oil_volume:33.42,amount:276.8},{date:"2023-04-28",unit_price:8.42,oil_volume:36.12,amount:304.13},{date:"2023-04-25",unit_price:8.45,oil_volume:42.09,amount:355.66},{date:"2023-04-25",unit_price:8.42,oil_volume:47.15,amount:397},{date:"2023-04-24",unit_price:8.39,oil_volume:28.61,amount:240.04},{date:"2023-04-19",unit_price:8.39,oil_volume:23.84,amount:200},{date:"2023-03-12",unit_price:8.22,oil_volume:36.5,amount:300},{date:"2023-03-10",unit_price:8.29,oil_volume:45.8,amount:379.68},{date:"2023-02-28",unit_price:8.32,oil_volume:50.5,amount:420.16}].map(a=>({date:a.date,unit_price:a.unit_price,oil_volume:a.oil_volume,type:a.type??"95<small>#</small>",amount:a.amount.toFixed(2)}))};const H=["textContent"],k={key:0},y=["innerHTML"],x=["innerHTML"],f=["innerHTML"],g=["innerHTML"],C=["innerHTML"],F={key:1},b=["innerHTML"],N=["innerHTML"],j=["innerHTML"],B=["innerHTML"],V=["innerHTML"],$={key:0},S={key:1},q=10,O={__name:"FuelCosts",setup(a){const i=Object.keys(r.headers),_=T(!1),s=()=>{_.value=!0},h=()=>{_.value=!1};return(L,n)=>(u(),l("table",null,[e("thead",null,[e("tr",null,[(u(!0),l(v,null,M(o(r).headers,(t,d)=>(u(),l("th",{key:d,textContent:c(t)},null,8,H))),128))])]),e("tbody",null,[(u(!0),l(v,null,M(o(r).detail,(t,d)=>(u(),l(v,{key:d},[!_.value&&d<q?(u(),l("tr",k,[e("td",{innerHTML:t[o(i)[0]]},null,8,y),e("td",{innerHTML:t[o(i)[1]]},null,8,x),e("td",{innerHTML:t[o(i)[2]]},null,8,f),e("td",{innerHTML:t[o(i)[3]]},null,8,g),e("td",{innerHTML:t[o(i)[4]]},null,8,C)])):p("",!0),_.value?(u(),l("tr",F,[e("td",{innerHTML:t[o(i)[0]]},null,8,b),e("td",{innerHTML:t[o(i)[1]]},null,8,N),e("td",{innerHTML:t[o(i)[2]]},null,8,j),e("td",{innerHTML:t[o(i)[3]]},null,8,B),e("td",{innerHTML:t[o(i)[4]]},null,8,V)])):p("",!0)],64))),128)),_.value?p("",!0):(u(),l("tr",$,[e("td",{colspan:"5",class:"text-center"},[e("a",{onClick:s,href:"javascript:void(0);"},"加载更多...")])])),_.value?(u(),l("tr",S,[e("td",{colspan:"5",class:"text-center"},[e("a",{onClick:h,href:"javascript:void(0);"},"收起一些...")])])):p("",!0)])]))}},D=e("h2",null,"油费",-1),E=e("br",null,null,-1),w={__name:"FuelCostStatistics",setup(a){const i=r.total_kilometers,_=r.detail.map(n=>n.oil_volume).reduce((n,t)=>n+t).toFixed(2),s=r.detail.map(n=>n.unit_price),h=(s.reduce((n,t)=>n+t)/s.length).toFixed(2),L=r.detail.map(n=>Number(n.amount)).reduce((n,t)=>n+t).toFixed(2);return(n,t)=>(u(),l(v,null,[D,e("blockquote",null,[e("p",null,[m("当前公里数："),e("strong",null,c(o(i)),1),m(" 公里。")]),E,e("p",null,[m(" 消耗总油量："),e("strong",null,c(o(_)),1),m("升， 平均油价："),e("strong",null,c(o(h)),1),m("元， 油费合计："),e("strong",null,c(o(L)),1),m(" 元。 ")])])],64))}};export{w as _,O as a};