import{d as T,s as M,o as i,c as u,j as e,a as c,t as r,k as o,F as d,E as p,e as v,p as H,l as k,_ as C}from"./framework.D8f49EQq.js";const P=22805,h=[{date:"2024-05-31",unit_price:8.52,oil_volume:27.58,amount:235},{date:"2024-02-09",unit_price:8.33,oil_volume:48.02,amount:400},{date:"2024-01-15",unit_price:8.13,oil_volume:44.29,amount:360},{date:"2024-01-13",unit_price:8.2,oil_volume:28.09,amount:230},{date:"2024-01-03",unit_price:8.03,oil_volume:24.91,amount:200},{date:"2023-11-24",unit_price:8.43,oil_volume:23.73,amount:200},{date:"2023-11-13",unit_price:8.72,oil_volume:22.94,amount:200},{date:"2023-10-04",unit_price:8.9,oil_volume:35.4,amount:315},{date:"2023-10-04",unit_price:8.98,oil_volume:45.66,amount:410},{date:"2023-10-02",unit_price:8.9,oil_volume:41.58,amount:370},{date:"2023-09-29",unit_price:8.98,oil_volume:38.97,amount:350},{date:"2023-07-16",unit_price:8.09,oil_volume:24.73,amount:200},{date:"2023-06-24",unit_price:7.97,oil_volume:26.35,amount:210},{date:"2023-06-24",unit_price:7.92,oil_volume:32.08,amount:254},{date:"2023-06-23",unit_price:7.92,oil_volume:41.67,amount:330},{date:"2023-06-23",unit_price:7.92,oil_volume:31.44,amount:249},{date:"2023-06-23",unit_price:7.99,oil_volume:23.78,amount:190},{date:"2023-06-22",unit_price:7.77,oil_volume:25.74,amount:200},{date:"2023-06-22",unit_price:7.77,oil_volume:27.16,amount:211},{date:"2023-06-21",unit_price:7.78,oil_volume:27.38,amount:213},{date:"2023-06-21",unit_price:7.91,oil_volume:20.23,amount:160},{date:"2023-06-19",unit_price:7.79,oil_volume:28.24,amount:220},{date:"2023-06-18",unit_price:7.79,oil_volume:21.19,amount:165},{date:"2023-06-17",unit_price:7.79,oil_volume:24.14,amount:188},{date:"2023-06-16",unit_price:7.79,oil_volume:34.66,amount:270},{date:"2023-06-15",unit_price:7.91,oil_volume:26.3,amount:208},{date:"2023-06-15",unit_price:7.92,oil_volume:26.52,amount:210},{date:"2023-06-14",unit_price:7.92,oil_volume:28.67,amount:227},{date:"2023-06-12",unit_price:7.97,oil_volume:45.3,amount:361},{date:"2023-06-11",unit_price:7.81,oil_volume:28.17,amount:220},{date:"2023-06-11",unit_price:7.81,oil_volume:26,amount:203},{date:"2023-06-11",unit_price:7.96,oil_volume:29.65,amount:236},{date:"2023-06-10",unit_price:7.96,oil_volume:53.4,amount:425},{date:"2023-06-10",unit_price:7.96,oil_volume:33.92,amount:270},{date:"2023-06-09",unit_price:8.01,oil_volume:35.58,amount:285},{date:"2023-05-24",unit_price:7.93,oil_volume:26.73,amount:212},{date:"2023-05-22",unit_price:7.93,oil_volume:25.22,amount:200},{date:"2023-05-19",unit_price:7.86,oil_volume:39.57,amount:311},{date:"2023-05-19",unit_price:7.93,oil_volume:27.24,amount:216},{date:"2023-05-05",unit_price:8.25,oil_volume:36.36,amount:300},{date:"2023-05-03",unit_price:8.18,oil_volume:49.52,amount:405},{date:"2023-05-02",unit_price:8.31,oil_volume:30.55,amount:253.87},{date:"2023-05-02",unit_price:8.28,oil_volume:27.78,amount:230},{date:"2023-04-29",unit_price:8.27,oil_volume:33.42,amount:276.8},{date:"2023-04-28",unit_price:8.42,oil_volume:36.12,amount:304.13},{date:"2023-04-25",unit_price:8.45,oil_volume:42.09,amount:355.66},{date:"2023-04-25",unit_price:8.42,oil_volume:47.15,amount:397},{date:"2023-04-24",unit_price:8.39,oil_volume:28.61,amount:240.04},{date:"2023-04-19",unit_price:8.39,oil_volume:23.84,amount:200},{date:"2023-03-12",unit_price:8.22,oil_volume:36.5,amount:300},{date:"2023-03-10",unit_price:8.29,oil_volume:45.8,amount:379.68},{date:"2023-02-28",unit_price:8.32,oil_volume:50.5,amount:420.16}],y=Number(h.map(t=>t.oil_volume).reduce((t,n)=>t+n).toFixed(2)),g=Number(h.map(t=>Number(t.amount)).reduce((t,n)=>t+n).toFixed(2)),N=Number((g/y).toFixed(2)),S=h.length,x={date:"日期",unit_price:"单价",oil_volume:"油量",type:"型号",amount:"金额"},I=h.map(t=>({date:t.date,unit_price:t.unit_price.toFixed(2),oil_volume:t.oil_volume.toFixed(2),type:t.type??"95<small>#</small>",amount:t.amount.toFixed(2)})),s={total_kilometers:P,load_item_length:Object.keys(x).length,headers:x,details:I,total_oil_volume:y,total_amount:g,total_number:S,price_avg:N},$=t=>(H("data-v-0cdafe7e"),t=t(),k(),t),B=$(()=>e("h2",{id:"燃油费用",tabindex:"-1"},[c("燃油费用"),e("a",{href:"#燃油费用",class:"header-anchor"})],-1)),j=$(()=>e("br",null,null,-1)),E={style:{width:"100%",display:"inline-table !important"}},w=["textContent"],O={key:0},V=["textContent"],q=["textContent"],R=["textContent"],U=["innerHTML"],D=["textContent"],z={key:1},G=["innerHTML"],J=["innerHTML"],K=["innerHTML"],Q=["innerHTML"],W=["innerHTML"],X=["colspan"],Y=T({__name:"FuelCosts",setup(t){const n=Object.keys(s.headers),a=M(!1),f=()=>a.value=!0,L=()=>a.value=!1;return(A,F)=>(i(),u(d,null,[B,e("blockquote",null,[e("p",null,[c("当前公里数："),e("strong",null,[e("code",null,r(o(s).total_kilometers),1)]),c(" 公里。")]),j,e("p",null,[c(" 消耗总油量："),e("strong",null,[e("code",null,r(o(s).total_oil_volume),1)]),c(" 升， 平均油价："),e("strong",null,[e("code",null,r(o(s).price_avg),1)]),c(" 元， 油费合计："),e("strong",null,[e("code",null,r(o(s).total_amount),1)]),c(" 元， 加油总次数："),e("strong",null,[e("code",null,r(o(s).total_number),1)]),c("次。 ")])]),e("table",E,[e("thead",null,[e("tr",null,[(i(!0),u(d,null,p(o(s).headers,(l,_)=>(i(),u("th",{key:_,textContent:r(l)},null,8,w))),128))])]),e("tbody",null,[(i(!0),u(d,null,p(o(s).details,(l,_)=>(i(),u(d,{key:_},[!a.value&&_<o(s).load_item_length?(i(),u("tr",O,[e("td",{textContent:r(l[o(n)[0]])},null,8,V),e("td",{textContent:r(l[o(n)[1]])},null,8,q),e("td",{textContent:r(l[o(n)[2]])},null,8,R),e("td",{innerHTML:l[o(n)[3]]},null,8,U),e("td",{textContent:r(l[o(n)[4]])},null,8,D)])):v("",!0),a.value?(i(),u("tr",z,[e("td",{innerHTML:l[o(n)[0]]},null,8,G),e("td",{innerHTML:l[o(n)[1]]},null,8,J),e("td",{innerHTML:l[o(n)[2]]},null,8,K),e("td",{innerHTML:l[o(n)[3]]},null,8,Q),e("td",{innerHTML:l[o(n)[4]]},null,8,W)])):v("",!0)],64))),128)),e("tr",null,[e("td",{class:"text-center",colspan:o(n).length},[a.value?(i(),u("button",{key:1,class:"font-bold text-blue-500 hover:underline cursor-pointer",onClick:L},"点击收起一些 ")):(i(),u("button",{key:0,class:"font-bold text-blue-500 hover:underline cursor-pointer",onClick:f}," 点击加载更多 "))],8,X)])])])],64))}}),ve=C(Y,[["__scopeId","data-v-0cdafe7e"]]),b=[{date:"2023-12-31",price:97.18,platform:"京东APP",description:"<small>蓝星(BLUESTAR)四季玻璃水清洗剂-30℃ 2L 8瓶去油膜玻璃清洁剂</small>"},{date:"2023-07-12",price:117.74,platform:"咸鱼APP",description:"<small>LanParte汽车拍摄车载手机支架万向固定车内吸盘式越野车专用防抖</small>"},{date:"2023-06-06",price:178.8,platform:"京东APP",description:"米家小米充气宝2"},{date:"2023-06-06",price:13.87,platform:"拼多多",description:"械式胎压表胎压监测仪"},{date:"2023-05-29",price:6.93,platform:"淘宝",description:"座椅挂钩"},{date:"2023-05-18",price:31,platform:"淘宝",description:"<small>汽车遮阳伞车窗遮阳帘防晒隔热遮阳挡前挡风玻璃罩车内前板车载用</small>"},{date:"2023-05-06",price:13.6,platform:"京东APP",description:"<small>蓝星（BLUESTAR）普通玻璃水清洁剂-2℃ 2L 2瓶去油膜玻璃清洁剂</small>"},{date:"2023-05-06",price:830,platform:"微信商城",description:"高隔热玻璃膜"},{date:"2023-04-19",price:17.82,platform:"淘宝",description:"仪表台防滑垫"},{date:"2023-04-19",price:91,platform:"淘宝",description:"2个钥匙套"},{date:"2023-04-06",price:2780,platform:"淘宝",description:"360度全景倒车影像系统行车记录仪"},{date:"2023-03-31",price:160,platform:"咸鱼APP",description:"开启自动泊车、关闭发动机启停和开启仪表6种主题"},{date:"2023-03-23",price:10.8,platform:"淘宝",description:"中控台水杯垫"},{date:"2023-03-02",price:153,platform:"微信商城",description:"擦车巾3条+镀膜剂1瓶+洗车液1瓶"},{date:"2023-03-02",price:727,platform:"淘宝",description:"全包围脚垫"},{date:"2023-03-02",price:127,platform:"淘宝",description:"后备箱垫"},{date:"2023-03-02",price:329,platform:"淘宝",description:"无线洗车机"}],m={headers:{date:"购买日期",price:"价格",platform:"平台",description:"其它说明"},load_item_length:5,detail:b.map(t=>({date:t.date,price:t.price.toFixed(2),platform:t.platform,description:t.description})),total_price:b.map(t=>t.price).reduce((t,n)=>t+n).toFixed(2)},Z=t=>(H("data-v-a6624f4f"),t=t(),k(),t),ee=Z(()=>e("h2",{id:"汽车用品",tabindex:"-1"},[c("汽车用品 "),e("a",{href:"#汽车用品",class:"header-anchor"})],-1)),te=["textContent"],oe={key:0},ne=["innerHTML"],le=["innerHTML"],ie=["innerHTML"],ue=["innerHTML"],re={key:1},ae=["innerHTML"],ce=["innerHTML"],_e=["innerHTML"],se=["innerHTML"],de=["colspan"],me=T({__name:"AutoAccessories",setup(t){const n=Object.keys(m.headers),a=M(!1),f=()=>a.value=!0,L=()=>a.value=!1;return(A,F)=>(i(),u(d,null,[ee,e("blockquote",null,[c(" 当前总计汽车用品费："),e("strong",null,r(o(m).total_price),1),c(" 元。 ")]),e("table",null,[e("thead",null,[e("tr",null,[(i(!0),u(d,null,p(o(m).headers,(l,_)=>(i(),u("th",{key:_,textContent:r(l)},null,8,te))),128))])]),e("tbody",null,[(i(!0),u(d,null,p(o(m).detail,(l,_)=>(i(),u(d,{key:_},[!a.value&&_<o(m).load_item_length?(i(),u("tr",oe,[e("td",{innerHTML:l[o(n)[0]]},null,8,ne),e("td",{innerHTML:l[o(n)[1]]},null,8,le),e("td",{innerHTML:l[o(n)[2]]},null,8,ie),e("td",{innerHTML:l[o(n)[3]]},null,8,ue)])):v("",!0),a.value?(i(),u("tr",re,[e("td",{innerHTML:l[o(n)[0]]},null,8,ae),e("td",{innerHTML:l[o(n)[1]]},null,8,ce),e("td",{innerHTML:l[o(n)[2]]},null,8,_e),e("td",{innerHTML:l[o(n)[3]]},null,8,se)])):v("",!0)],64))),128)),e("tr",null,[e("td",{class:"text-center",colspan:o(n).length},[a.value?(i(),u("button",{key:1,class:"font-bold text-blue-500 hover:underline cursor-pointer",onClick:L},"点击收起一些 ")):(i(),u("button",{key:0,class:"font-bold text-blue-500 hover:underline cursor-pointer",onClick:f}," 点击加载更多 "))],8,de)])])])],64))}}),he=C(me,[["__scopeId","data-v-a6624f4f"]]);export{he as A,ve as F};