const detail: { date: string, price: number, platform: string, description: string }[] = [
    {date: "2023-06-06", price: 178.8, platform: "京东", description: "米家小米充气宝2"},
    {date: "2023-06-06", price: 13.87, platform: "拼多多", description: "械式胎压表胎压监测仪"},
    {date: "2023-05-29", price: 6.93, platform: "淘宝", description: "座椅挂钩"},
    {date: "2023-05-18", price: 31.00, platform: "淘宝", description: "汽车遮阳伞车窗遮阳帘防晒隔热遮阳挡前挡风玻璃罩车内前板车载用"},
    {date: "2023-05-06", price: 13.60, platform: "京东", description: "蓝星（BLUESTAR）普通玻璃水清洁剂-2℃ 2L 2瓶去油膜玻璃清洁剂"},
    {date: "2023-05-06", price: 830.00, platform: "微信商城", description: "高隔热玻璃膜"},
    {date: "2023-04-19", price: 17.82, platform: "淘宝", description: "仪表台防滑垫"},
    {date: "2023-04-19", price: 91.00, platform: "淘宝", description: "2个钥匙套"},
    {date: "2023-04-06", price: 2780.00, platform: "淘宝", description: "360度全景倒车影像系统行车记录仪"},
    {date: "2023-03-31", price: 160.00, platform: "咸鱼", description: "开启自动泊车、关闭发动机启停和开启仪表6种主题"},
    {date: "2023-03-23", price: 10.80, platform: "淘宝", description: "中控台水杯垫"},
    {date: "2023-03-02", price: 153.00, platform: "微信商城", description: "擦车巾3条+镀膜剂1瓶+洗车液1瓶"},
    {date: "2023-03-02", price: 727.00, platform: "淘宝", description: "全包围脚垫"},
    {date: "2023-03-02", price: 127.00, platform: "淘宝", description: "后备箱垫"},
    {date: "2023-03-02", price: 329.00, platform: "淘宝", description: "无线洗车机"},
];


export default {
    headers: {date: '购买日期', price: '价格', platform: '平台', description: '其它说明'},
    load_item_length: 10,
    detail: detail.map((data: { date: string, price: number, platform: string, description: string }) => {
        return {
            date: data.date,
            price: data.price.toFixed(2),
            platform: data.platform,
            description: data.description
        };
    }),
    total_price: detail.map((data: {
        date: string,
        price: number,
        platform: string,
        description: string
    }) => data.price).reduce((prev, curr) => prev + curr).toFixed(2),
}
