import{d as M,p as H,o as u,c as r,j as t,a as _,t as a,k as e,F as c,C as v,e as f,_ as k}from"./framework.bnTMKFVj.js";const A=23170,h=[{date:"2024-10-06",unit_price:7.85,oil_volume:39.49,amount:310},{date:"2024-10-05",unit_price:7.78,oil_volume:38.56,amount:300},{date:"2024-10-01",unit_price:7.85,oil_volume:46.24,amount:363},{date:"2024-05-31",unit_price:8.52,oil_volume:27.58,amount:235},{date:"2024-02-09",unit_price:8.33,oil_volume:48.02,amount:400},{date:"2024-01-15",unit_price:8.13,oil_volume:44.29,amount:360},{date:"2024-01-13",unit_price:8.2,oil_volume:28.09,amount:230},{date:"2024-01-03",unit_price:8.03,oil_volume:24.91,amount:200},{date:"2023-11-24",unit_price:8.43,oil_volume:23.73,amount:200},{date:"2023-11-13",unit_price:8.72,oil_volume:22.94,amount:200},{date:"2023-10-04",unit_price:8.9,oil_volume:35.4,amount:315},{date:"2023-10-04",unit_price:8.98,oil_volume:45.66,amount:410},{date:"2023-10-02",unit_price:8.9,oil_volume:41.58,amount:370},{date:"2023-09-29",unit_price:8.98,oil_volume:38.97,amount:350},{date:"2023-07-16",unit_price:8.09,oil_volume:24.73,amount:200},{date:"2023-06-24",unit_price:7.97,oil_volume:26.35,amount:210},{date:"2023-06-24",unit_price:7.92,oil_volume:32.08,amount:254},{date:"2023-06-23",unit_price:7.92,oil_volume:41.67,amount:330},{date:"2023-06-23",unit_price:7.92,oil_volume:31.44,amount:249},{date:"2023-06-23",unit_price:7.99,oil_volume:23.78,amount:190},{date:"2023-06-22",unit_price:7.77,oil_volume:25.74,amount:200},{date:"2023-06-22",unit_price:7.77,oil_volume:27.16,amount:211},{date:"2023-06-21",unit_price:7.78,oil_volume:27.38,amount:213},{date:"2023-06-21",unit_price:7.91,oil_volume:20.23,amount:160},{date:"2023-06-19",unit_price:7.79,oil_volume:28.24,amount:220},{date:"2023-06-18",unit_price:7.79,oil_volume:21.19,amount:165},{date:"2023-06-17",unit_price:7.79,oil_volume:24.14,amount:188},{date:"2023-06-16",unit_price:7.79,oil_volume:34.66,amount:270},{date:"2023-06-15",unit_price:7.91,oil_volume:26.3,amount:208},{date:"2023-06-15",unit_price:7.92,oil_volume:26.52,amount:210},{date:"2023-06-14",unit_price:7.92,oil_volume:28.67,amount:227},{date:"2023-06-12",unit_price:7.97,oil_volume:45.3,amount:361},{date:"2023-06-11",unit_price:7.81,oil_volume:28.17,amount:220},{date:"2023-06-11",unit_price:7.81,oil_volume:26,amount:203},{date:"2023-06-11",unit_price:7.96,oil_volume:29.65,amount:236},{date:"2023-06-10",unit_price:7.96,oil_volume:53.4,amount:425},{date:"2023-06-10",unit_price:7.96,oil_volume:33.92,amount:270},{date:"2023-06-09",unit_price:8.01,oil_volume:35.58,amount:285},{date:"2023-05-24",unit_price:7.93,oil_volume:26.73,amount:212},{date:"2023-05-22",unit_price:7.93,oil_volume:25.22,amount:200},{date:"2023-05-19",unit_price:7.86,oil_volume:39.57,amount:311},{date:"2023-05-19",unit_price:7.93,oil_volume:27.24,amount:216},{date:"2023-05-05",unit_price:8.25,oil_volume:36.36,amount:300},{date:"2023-05-03",unit_price:8.18,oil_volume:49.52,amount:405},{date:"2023-05-02",unit_price:8.31,oil_volume:30.55,amount:253.87},{date:"2023-05-02",unit_price:8.28,oil_volume:27.78,amount:230},{date:"2023-04-29",unit_price:8.27,oil_volume:33.42,amount:276.8},{date:"2023-04-28",unit_price:8.42,oil_volume:36.12,amount:304.13},{date:"2023-04-25",unit_price:8.45,oil_volume:42.09,amount:355.66},{date:"2023-04-25",unit_price:8.42,oil_volume:47.15,amount:397},{date:"2023-04-24",unit_price:8.39,oil_volume:28.61,amount:240.04},{date:"2023-04-19",unit_price:8.39,oil_volume:23.84,amount:200},{date:"2023-03-12",unit_price:8.22,oil_volume:36.5,amount:300},{date:"2023-03-10",unit_price:8.29,oil_volume:45.8,amount:379.68},{date:"2023-02-28",unit_price:8.32,oil_volume:50.5,amount:420.16}],C=Number(h.map(l=>l.oil_volume).reduce((l,o)=>l+o).toFixed(2)),y=Number(h.map(l=>Number(l.amount)).reduce((l,o)=>l+o).toFixed(2)),F=Number((y/C).toFixed(2)),$=h.length,b={date:"日期",unit_price:"单价",oil_volume:"油量",type:"型号",amount:"金额"},P=h.map(l=>({date:l.date,unit_price:l.unit_price.toFixed(2),oil_volume:l.oil_volume.toFixed(2),type:l.type??"95<small>#</small>",amount:l.amount.toFixed(2)})),m={total_kilometers:A,load_item_length:Object.keys(b).length,headers:b,details:P,total_oil_volume:C,total_amount:y,total_number:$,price_avg:F},N={style:{width:"100%",display:"inline-table !important"}},B=["textContent"],j={key:0},E=["textContent"],O=["textContent"],S=["textContent"],V=["innerHTML"],q=["textContent"],I={key:1},R=["innerHTML"],U=["innerHTML"],w=["innerHTML"],D=["innerHTML"],z=["innerHTML"],G=["colspan"],J=M({__name:"FuelCosts",setup(l){const o=Object.keys(m.headers),s=H(!1),L=()=>s.value=!0,x=()=>s.value=!1;return(g,n)=>(u(),r(c,null,[n[8]||(n[8]=t("h2",{id:"燃油费用",tabindex:"-1"},[_("燃油费用"),t("a",{href:"#燃油费用",class:"header-anchor"})],-1)),t("blockquote",null,[t("p",null,[n[0]||(n[0]=_("当前公里数：")),t("strong",null,[t("code",null,a(e(m).total_kilometers),1)]),n[1]||(n[1]=_(" 公里。"))]),n[7]||(n[7]=t("br",null,null,-1)),t("p",null,[n[2]||(n[2]=_(" 消耗总油量：")),t("strong",null,[t("code",null,a(e(m).total_oil_volume),1)]),n[3]||(n[3]=_(" 升， 平均油价：")),t("strong",null,[t("code",null,a(e(m).price_avg),1)]),n[4]||(n[4]=_(" 元， 油费合计：")),t("strong",null,[t("code",null,a(e(m).total_amount),1)]),n[5]||(n[5]=_(" 元， 加油总次数：")),t("strong",null,[t("code",null,a(e(m).total_number),1)]),n[6]||(n[6]=_("次。 "))])]),t("table",N,[t("thead",null,[t("tr",null,[(u(!0),r(c,null,v(e(m).headers,(i,d)=>(u(),r("th",{key:d,textContent:a(i)},null,8,B))),128))])]),t("tbody",null,[(u(!0),r(c,null,v(e(m).details,(i,d)=>(u(),r(c,{key:d},[!s.value&&d<e(m).load_item_length?(u(),r("tr",j,[t("td",{textContent:a(i[e(o)[0]])},null,8,E),t("td",{textContent:a(i[e(o)[1]])},null,8,O),t("td",{textContent:a(i[e(o)[2]])},null,8,S),t("td",{innerHTML:i[e(o)[3]]},null,8,V),t("td",{textContent:a(i[e(o)[4]])},null,8,q)])):f("",!0),s.value?(u(),r("tr",I,[t("td",{innerHTML:i[e(o)[0]]},null,8,R),t("td",{innerHTML:i[e(o)[1]]},null,8,U),t("td",{innerHTML:i[e(o)[2]]},null,8,w),t("td",{innerHTML:i[e(o)[3]]},null,8,D),t("td",{innerHTML:i[e(o)[4]]},null,8,z)])):f("",!0)],64))),128)),t("tr",null,[t("td",{class:"text-center",colspan:e(o).length},[s.value?(u(),r("button",{key:1,class:"font-bold text-blue-500 hover:underline cursor-pointer",onClick:x},"点击收起一些 ")):(u(),r("button",{key:0,class:"font-bold text-blue-500 hover:underline cursor-pointer",onClick:L}," 点击加载更多 "))],8,G)])])])],64))}}),at=k(J,[["__scopeId","data-v-0cdafe7e"]]),T=[{date:"2023-12-31",price:97.18,platform:"京东APP",description:"<small>蓝星(BLUESTAR)四季玻璃水清洗剂-30℃ 2L 8瓶去油膜玻璃清洁剂</small>"},{date:"2023-07-12",price:117.74,platform:"咸鱼APP",description:"<small>LanParte汽车拍摄车载手机支架万向固定车内吸盘式越野车专用防抖</small>"},{date:"2023-06-06",price:178.8,platform:"京东APP",description:"米家小米充气宝2"},{date:"2023-06-06",price:13.87,platform:"拼多多",description:"械式胎压表胎压监测仪"},{date:"2023-05-29",price:6.93,platform:"淘宝",description:"座椅挂钩"},{date:"2023-05-18",price:31,platform:"淘宝",description:"<small>汽车遮阳伞车窗遮阳帘防晒隔热遮阳挡前挡风玻璃罩车内前板车载用</small>"},{date:"2023-05-06",price:13.6,platform:"京东APP",description:"<small>蓝星（BLUESTAR）普通玻璃水清洁剂-2℃ 2L 2瓶去油膜玻璃清洁剂</small>"},{date:"2023-05-06",price:830,platform:"微信商城",description:"高隔热玻璃膜"},{date:"2023-04-19",price:17.82,platform:"淘宝",description:"仪表台防滑垫"},{date:"2023-04-19",price:91,platform:"淘宝",description:"2个钥匙套"},{date:"2023-04-06",price:2780,platform:"淘宝",description:"360度全景倒车影像系统行车记录仪"},{date:"2023-03-31",price:160,platform:"咸鱼APP",description:"开启自动泊车、关闭发动机启停和开启仪表6种主题"},{date:"2023-03-23",price:10.8,platform:"淘宝",description:"中控台水杯垫"},{date:"2023-03-02",price:153,platform:"微信商城",description:"擦车巾3条+镀膜剂1瓶+洗车液1瓶"},{date:"2023-03-02",price:727,platform:"淘宝",description:"全包围脚垫"},{date:"2023-03-02",price:127,platform:"淘宝",description:"后备箱垫"},{date:"2023-03-02",price:329,platform:"淘宝",description:"无线洗车机"}],p={headers:{date:"购买日期",price:"价格",platform:"平台",description:"其它说明"},load_item_length:5,detail:T.map(l=>({date:l.date,price:l.price.toFixed(2),platform:l.platform,description:l.description})),total_price:T.map(l=>l.price).reduce((l,o)=>l+o).toFixed(2)},K=["textContent"],Q={key:0},W=["innerHTML"],X=["innerHTML"],Y=["innerHTML"],Z=["innerHTML"],tt={key:1},et=["innerHTML"],ot=["innerHTML"],nt=["innerHTML"],lt=["innerHTML"],it=["colspan"],ut=M({__name:"AutoAccessories",setup(l){const o=Object.keys(p.headers),s=H(!1),L=()=>s.value=!0,x=()=>s.value=!1;return(g,n)=>(u(),r(c,null,[n[2]||(n[2]=t("h2",{id:"汽车用品",tabindex:"-1"},[_("汽车用品 "),t("a",{href:"#汽车用品",class:"header-anchor"})],-1)),t("blockquote",null,[n[0]||(n[0]=_(" 当前总计汽车用品费：")),t("strong",null,a(e(p).total_price),1),n[1]||(n[1]=_(" 元。 "))]),t("table",null,[t("thead",null,[t("tr",null,[(u(!0),r(c,null,v(e(p).headers,(i,d)=>(u(),r("th",{key:d,textContent:a(i)},null,8,K))),128))])]),t("tbody",null,[(u(!0),r(c,null,v(e(p).detail,(i,d)=>(u(),r(c,{key:d},[!s.value&&d<e(p).load_item_length?(u(),r("tr",Q,[t("td",{innerHTML:i[e(o)[0]]},null,8,W),t("td",{innerHTML:i[e(o)[1]]},null,8,X),t("td",{innerHTML:i[e(o)[2]]},null,8,Y),t("td",{innerHTML:i[e(o)[3]]},null,8,Z)])):f("",!0),s.value?(u(),r("tr",tt,[t("td",{innerHTML:i[e(o)[0]]},null,8,et),t("td",{innerHTML:i[e(o)[1]]},null,8,ot),t("td",{innerHTML:i[e(o)[2]]},null,8,nt),t("td",{innerHTML:i[e(o)[3]]},null,8,lt)])):f("",!0)],64))),128)),t("tr",null,[t("td",{class:"text-center",colspan:e(o).length},[s.value?(u(),r("button",{key:1,class:"font-bold text-blue-500 hover:underline cursor-pointer",onClick:x},"点击收起一些 ")):(u(),r("button",{key:0,class:"font-bold text-blue-500 hover:underline cursor-pointer",onClick:L}," 点击加载更多 "))],8,it)])])])],64))}}),st=k(ut,[["__scopeId","data-v-a6624f4f"]]);export{st as A,at as F};