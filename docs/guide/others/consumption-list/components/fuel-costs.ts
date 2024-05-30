interface Item {
    date: string,
    unit_price: any,
    oil_volume: any,
    amount: any,
    type?: string,
}

const total_kilometers: number = 22805;

const items: Item[] = [
    {date: "2024-02-09", unit_price: 8.33, oil_volume: 48.02, amount: 400.00},
    {date: "2024-01-15", unit_price: 8.13, oil_volume: 44.29, amount: 360.00},
    {date: "2024-01-13", unit_price: 8.20, oil_volume: 28.09, amount: 230.00},
    {date: "2024-01-03", unit_price: 8.03, oil_volume: 24.91, amount: 200.00},
    {date: "2023-11-24", unit_price: 8.43, oil_volume: 23.73, amount: 200.00},
    {date: "2023-11-13", unit_price: 8.72, oil_volume: 22.94, amount: 200.00},
    {date: "2023-10-04", unit_price: 8.90, oil_volume: 35.40, amount: 315.00},
    {date: "2023-10-04", unit_price: 8.98, oil_volume: 45.66, amount: 410.00},
    {date: "2023-10-02", unit_price: 8.90, oil_volume: 41.58, amount: 370.00},
    {date: "2023-09-29", unit_price: 8.98, oil_volume: 38.97, amount: 350.00},
    {date: "2023-07-16", unit_price: 8.09, oil_volume: 24.73, amount: 200.00},
    {date: "2023-06-24", unit_price: 7.97, oil_volume: 26.35, amount: 210.00},
    {date: "2023-06-24", unit_price: 7.92, oil_volume: 32.08, amount: 254.00},
    {date: "2023-06-23", unit_price: 7.92, oil_volume: 41.67, amount: 330.00},
    {date: "2023-06-23", unit_price: 7.92, oil_volume: 31.44, amount: 249.00},
    {date: "2023-06-23", unit_price: 7.99, oil_volume: 23.78, amount: 190.00},
    {date: "2023-06-22", unit_price: 7.77, oil_volume: 25.74, amount: 200.00},
    {date: "2023-06-22", unit_price: 7.77, oil_volume: 27.16, amount: 211.00},
    {date: "2023-06-21", unit_price: 7.78, oil_volume: 27.38, amount: 213.00},
    {date: "2023-06-21", unit_price: 7.91, oil_volume: 20.23, amount: 160.00},
    {date: "2023-06-19", unit_price: 7.79, oil_volume: 28.24, amount: 220.00},
    {date: "2023-06-18", unit_price: 7.79, oil_volume: 21.19, amount: 165.00},
    {date: "2023-06-17", unit_price: 7.79, oil_volume: 24.14, amount: 188.00},
    {date: "2023-06-16", unit_price: 7.79, oil_volume: 34.66, amount: 270.00},
    {date: "2023-06-15", unit_price: 7.91, oil_volume: 26.30, amount: 208.00},
    {date: "2023-06-15", unit_price: 7.92, oil_volume: 26.52, amount: 210.00},
    {date: "2023-06-14", unit_price: 7.92, oil_volume: 28.67, amount: 227.00},
    {date: "2023-06-12", unit_price: 7.97, oil_volume: 45.30, amount: 361.00},
    {date: "2023-06-11", unit_price: 7.81, oil_volume: 28.17, amount: 220.00},
    {date: "2023-06-11", unit_price: 7.81, oil_volume: 26.00, amount: 203.00},
    {date: "2023-06-11", unit_price: 7.96, oil_volume: 29.65, amount: 236.00},
    {date: "2023-06-10", unit_price: 7.96, oil_volume: 53.40, amount: 425.00},
    {date: "2023-06-10", unit_price: 7.96, oil_volume: 33.92, amount: 270.00},
    {date: "2023-06-09", unit_price: 8.01, oil_volume: 35.58, amount: 285.00},
    {date: "2023-05-24", unit_price: 7.93, oil_volume: 26.73, amount: 212.00},
    {date: "2023-05-22", unit_price: 7.93, oil_volume: 25.22, amount: 200.00},
    {date: "2023-05-19", unit_price: 7.86, oil_volume: 39.57, amount: 311.00},
    {date: "2023-05-19", unit_price: 7.93, oil_volume: 27.24, amount: 216.00},
    {date: "2023-05-05", unit_price: 8.25, oil_volume: 36.36, amount: 300.00},
    {date: "2023-05-03", unit_price: 8.18, oil_volume: 49.52, amount: 405.00},
    {date: "2023-05-02", unit_price: 8.31, oil_volume: 30.55, amount: 253.87},
    {date: "2023-05-02", unit_price: 8.28, oil_volume: 27.78, amount: 230.00},
    {date: "2023-04-29", unit_price: 8.27, oil_volume: 33.42, amount: 276.80},
    {date: "2023-04-28", unit_price: 8.42, oil_volume: 36.12, amount: 304.13},
    {date: "2023-04-25", unit_price: 8.45, oil_volume: 42.09, amount: 355.66},
    {date: "2023-04-25", unit_price: 8.42, oil_volume: 47.15, amount: 397.00},
    {date: "2023-04-24", unit_price: 8.39, oil_volume: 28.61, amount: 240.04},
    {date: "2023-04-19", unit_price: 8.39, oil_volume: 23.84, amount: 200.00},
    {date: "2023-03-12", unit_price: 8.22, oil_volume: 36.50, amount: 300.00},
    {date: "2023-03-10", unit_price: 8.29, oil_volume: 45.80, amount: 379.68},
    {date: "2023-02-28", unit_price: 8.32, oil_volume: 50.50, amount: 420.16},
];
// const prices: number[] = items.map((data) => data.unit_price);
// 消耗总油量
const total_oil_volume: number = Number(items.map((data: Item) => data.oil_volume).reduce((prev, curr) => prev + curr).toFixed(2));
// 油费合计
const total_amount: number = Number(items.map((data: Item) => Number(data.amount)).reduce((prev: number, curr: number) => prev + curr).toFixed(2));
// 平均油价
const price_avg: number = Number((total_amount / total_oil_volume).toFixed(2));
// 加油次数
const total_number: number = items.length;

const headers: Item = {date: '日期', unit_price: '单价', oil_volume: '油量', type: '型号', amount: '金额'};
const details: Item[] = items.map((data: Item): Item => ({
    date: data.date,
    unit_price: data.unit_price.toFixed(2),
    oil_volume: data.oil_volume.toFixed(2),
    type: data.type ?? '95<small>#</small>',
    amount: data.amount.toFixed(2),
}));

export default {
    total_kilometers,
    load_item_length: Object.keys(headers).length,
    headers,
    details,
    total_oil_volume,
    total_amount,
    total_number,
    price_avg,
}
