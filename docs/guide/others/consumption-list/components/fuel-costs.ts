interface Item {
    date: string;
    unit_price: any;
    oil_volume: any;
    amount: any;
    type?: string;
}

// 总里程数
const total_kilometers: number = 26270;

// 加油记录
const items: Item[] = [
    {date: "2025-08-12", unit_price: 7.73, oil_volume: 51.75, amount: 400.0},
    {date: "2025-05-04", unit_price: 7.49, oil_volume: 26.71, amount: 200.0},
    {date: "2025-05-02", unit_price: 7.56, oil_volume: 33.47, amount: 253.0},
    {date: "2025-01-27", unit_price: 8.27, oil_volume: 24.18, amount: 200.0},
    {date: "2024-10-06", unit_price: 7.85, oil_volume: 39.49, amount: 310.0},
    {date: "2024-10-05", unit_price: 7.78, oil_volume: 38.56, amount: 300.0},
    {date: "2024-10-01", unit_price: 7.85, oil_volume: 46.24, amount: 363.0},
    {date: "2024-05-31", unit_price: 8.52, oil_volume: 27.58, amount: 235.0},
    {date: "2024-02-09", unit_price: 8.33, oil_volume: 48.02, amount: 400.0},
    {date: "2024-01-15", unit_price: 8.13, oil_volume: 44.29, amount: 360.0},
    {date: "2024-01-13", unit_price: 8.2, oil_volume: 28.09, amount: 230.0},
    {date: "2024-01-03", unit_price: 8.03, oil_volume: 24.91, amount: 200.0},
    {date: "2023-11-24", unit_price: 8.43, oil_volume: 23.73, amount: 200.0},
    {date: "2023-11-13", unit_price: 8.72, oil_volume: 22.94, amount: 200.0},
    {date: "2023-10-04", unit_price: 8.9, oil_volume: 35.4, amount: 315.0},
    {date: "2023-10-04", unit_price: 8.98, oil_volume: 45.66, amount: 410.0},
    {date: "2023-10-02", unit_price: 8.9, oil_volume: 41.58, amount: 370.0},
    {date: "2023-09-29", unit_price: 8.98, oil_volume: 38.97, amount: 350.0},
    {date: "2023-07-16", unit_price: 8.09, oil_volume: 24.73, amount: 200.0},
    {date: "2023-06-24", unit_price: 7.97, oil_volume: 26.35, amount: 210.0},
    {date: "2023-06-24", unit_price: 7.92, oil_volume: 32.08, amount: 254.0},
    {date: "2023-06-23", unit_price: 7.92, oil_volume: 41.67, amount: 330.0},
    {date: "2023-06-23", unit_price: 7.92, oil_volume: 31.44, amount: 249.0},
    {date: "2023-06-23", unit_price: 7.99, oil_volume: 23.78, amount: 190.0},
    {date: "2023-06-22", unit_price: 7.77, oil_volume: 25.74, amount: 200.0},
    {date: "2023-06-22", unit_price: 7.77, oil_volume: 27.16, amount: 211.0},
    {date: "2023-06-21", unit_price: 7.78, oil_volume: 27.38, amount: 213.0},
    {date: "2023-06-21", unit_price: 7.91, oil_volume: 20.23, amount: 160.0},
    {date: "2023-06-19", unit_price: 7.79, oil_volume: 28.24, amount: 220.0},
    {date: "2023-06-18", unit_price: 7.79, oil_volume: 21.19, amount: 165.0},
    {date: "2023-06-17", unit_price: 7.79, oil_volume: 24.14, amount: 188.0},
    {date: "2023-06-16", unit_price: 7.79, oil_volume: 34.66, amount: 270.0},
    {date: "2023-06-15", unit_price: 7.91, oil_volume: 26.3, amount: 208.0},
    {date: "2023-06-15", unit_price: 7.92, oil_volume: 26.52, amount: 210.0},
    {date: "2023-06-14", unit_price: 7.92, oil_volume: 28.67, amount: 227.0},
    {date: "2023-06-12", unit_price: 7.97, oil_volume: 45.3, amount: 361.0},
    {date: "2023-06-11", unit_price: 7.81, oil_volume: 28.17, amount: 220.0},
    {date: "2023-06-11", unit_price: 7.81, oil_volume: 26.0, amount: 203.0},
    {date: "2023-06-11", unit_price: 7.96, oil_volume: 29.65, amount: 236.0},
    {date: "2023-06-10", unit_price: 7.96, oil_volume: 53.4, amount: 425.0},
    {date: "2023-06-10", unit_price: 7.96, oil_volume: 33.92, amount: 270.0},
    {date: "2023-06-09", unit_price: 8.01, oil_volume: 35.58, amount: 285.0},
    {date: "2023-05-24", unit_price: 7.93, oil_volume: 26.73, amount: 212.0},
    {date: "2023-05-22", unit_price: 7.93, oil_volume: 25.22, amount: 200.0},
    {date: "2023-05-19", unit_price: 7.86, oil_volume: 39.57, amount: 311.0},
    {date: "2023-05-19", unit_price: 7.93, oil_volume: 27.24, amount: 216.0},
    {date: "2023-05-05", unit_price: 8.25, oil_volume: 36.36, amount: 300.0},
    {date: "2023-05-03", unit_price: 8.18, oil_volume: 49.52, amount: 405.0},
    {date: "2023-05-02", unit_price: 8.31, oil_volume: 30.55, amount: 253.87},
    {date: "2023-05-02", unit_price: 8.28, oil_volume: 27.78, amount: 230.0},
    {date: "2023-04-29", unit_price: 8.27, oil_volume: 33.42, amount: 276.8},
    {date: "2023-04-28", unit_price: 8.42, oil_volume: 36.12, amount: 304.13},
    {date: "2023-04-25", unit_price: 8.45, oil_volume: 42.09, amount: 355.66},
    {date: "2023-04-25", unit_price: 8.42, oil_volume: 47.15, amount: 397.0},
    {date: "2023-04-24", unit_price: 8.39, oil_volume: 28.61, amount: 240.04},
    {date: "2023-04-19", unit_price: 8.39, oil_volume: 23.84, amount: 200.0},
    {date: "2023-03-12", unit_price: 8.22, oil_volume: 36.5, amount: 300.0},
    {date: "2023-03-10", unit_price: 8.29, oil_volume: 45.8, amount: 379.68},
    {date: "2023-02-28", unit_price: 8.32, oil_volume: 50.5, amount: 420.16},
];
// const prices: number[] = items.map((data) => data.unit_price);
// 消耗总油量
const total_oil_volume: number = Number(
    items
        .map((data: Item) => data.oil_volume)
        .reduce((prev, curr) => prev + curr)
        .toFixed(2)
);
// 油费合计
const total_amount: number = Number(
    items
        .map((data: Item) => Number(data.amount))
        .reduce((prev: number, curr: number) => prev + curr)
        .toFixed(2)
);
// 平均油价
const price_avg: number = Number((total_amount / total_oil_volume).toFixed(2));
// 加油次数
const total_number = items.length;

// 油耗L/百公里（计算方式：燃油消耗量除以行驶里程再乘以100）
const oil_consumption: number = Number(
    ((total_oil_volume / total_kilometers) * 100).toFixed(2)
);

const headers: Item = {
    date: "日期",
    unit_price: "单价",
    oil_volume: "油量",
    type: "型号",
    amount: "金额",
};
const details: Item[] = items.map(
    (data: Item): Item => ({
        date: data.date,
        unit_price: data.unit_price.toFixed(2),
        oil_volume: data.oil_volume.toFixed(2),
        type: data.type ?? "95<small>&sharp;</small>",
        amount: data.amount.toFixed(2),
    })
);

export default {
    total_kilometers,
    load_item_length: Object.keys(headers).length,
    headers,
    details,
    total_oil_volume,
    oil_consumption,
    total_amount,
    total_number,
    price_avg,
};
