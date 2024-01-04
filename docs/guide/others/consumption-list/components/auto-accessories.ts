const enum Platform {
    xy = '咸鱼APP',
    jd = '京东APP',
    pdd = '拼多多',
    tb = '淘宝',
    wx = '微信商城',
}
interface Item {
    date: string,
    price: any,
    platform: Platform,
    description: string,
}
const detail: Item[] = [
    {date: "2023-12-31", price: 97.18, platform: Platform.jd, description: "<small>蓝星(BLUESTAR)四季玻璃水清洗剂-30℃ 2L 8瓶去油膜玻璃清洁剂</small>"},
    {date: "2023-07-12", price: 117.74, platform: Platform.xy, description: "<small>LanParte汽车拍摄车载手机支架万向固定车内吸盘式越野车专用防抖</small>"},
    {date: "2023-06-06", price: 178.8, platform: Platform.jd, description: "米家小米充气宝2"},
    {date: "2023-06-06", price: 13.87, platform: Platform.pdd, description: "械式胎压表胎压监测仪"},
    {date: "2023-05-29", price: 6.93, platform: Platform.tb, description: "座椅挂钩"},
    {date: "2023-05-18", price: 31.00, platform: Platform.tb, description: "<small>汽车遮阳伞车窗遮阳帘防晒隔热遮阳挡前挡风玻璃罩车内前板车载用</small>"},
    {date: "2023-05-06", price: 13.60, platform: Platform.jd, description: "<small>蓝星（BLUESTAR）普通玻璃水清洁剂-2℃ 2L 2瓶去油膜玻璃清洁剂</small>"},
    {date: "2023-05-06", price: 830.00, platform: Platform.wx, description: "高隔热玻璃膜"},
    {date: "2023-04-19", price: 17.82, platform: Platform.tb, description: "仪表台防滑垫"},
    {date: "2023-04-19", price: 91.00, platform: Platform.tb, description: "2个钥匙套"},
    {date: "2023-04-06", price: 2780.00, platform: Platform.tb, description: "360度全景倒车影像系统行车记录仪"},
    {date: "2023-03-31", price: 160.00, platform: Platform.xy, description: "开启自动泊车、关闭发动机启停和开启仪表6种主题"},
    {date: "2023-03-23", price: 10.80, platform: Platform.tb, description: "中控台水杯垫"},
    {date: "2023-03-02", price: 153.00, platform: Platform.wx, description: "擦车巾3条+镀膜剂1瓶+洗车液1瓶"},
    {date: "2023-03-02", price: 727.00, platform: Platform.tb, description: "全包围脚垫"},
    {date: "2023-03-02", price: 127.00, platform: Platform.tb, description: "后备箱垫"},
    {date: "2023-03-02", price: 329.00, platform: Platform.tb, description: "无线洗车机"},
];


export default {
    headers: {date: '购买日期', price: '价格', platform: '平台', description: '其它说明'},
    load_item_length: 5,
    detail: detail.map((data: Item): Item => {
        return {
            date: data.date,
            price: data.price.toFixed(2),
            platform: data.platform,
            description: data.description
        };
    }),
    total_price: detail.map((data: Item) => data.price).reduce((prev: number, curr: number) => prev + curr).toFixed(2),
}
