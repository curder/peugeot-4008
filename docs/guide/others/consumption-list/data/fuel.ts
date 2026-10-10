export interface FuelRecord {
    /** 加油日期 */
    date: string;
    /** 单价（元/升） */
    unitPrice: number;
    /** 加油量（升） */
    oilVolume: number;
    /** 金额（元） */
    amount: number;
    /** 汽油标号，未填写时按 95 处理 */
    type?: string;
    /** 本次加油时的仪表盘里程（公里）。相邻记录都填写后会自动计算区间油耗与总里程 */
    kilometers?: number;
}

/** 仪表盘最新总里程（公里） */
export const latestKilometers: number = 31250;

// 按时间倒序记录（最新在最前），新增记录插入到开头，方便查看最新数据；展示顺序由 costs 层排序。
export const records: FuelRecord[] = [
    {date: "2026-10-06", unitPrice: 9.09, oilVolume: 33.01, amount: 300.0},
    {date: "2026-10-02", unitPrice: 9.17, oilVolume: 41.44, amount: 380.0},
    {date: "2026-05-04", unitPrice: 8.93, oilVolume: 22.40, amount: 200.0},
    {date: "2026-05-02", unitPrice: 9.00, oilVolume: 31.30, amount: 282.0},
    {date: "2026-02-21", unitPrice: 7.39, oilVolume: 27.01, amount: 200.0},
    {date: "2025-12-25", unitPrice: 7.14, oilVolume: 42.02, amount: 300.0},
    {date: "2025-10-16", unitPrice: 7.51, oilVolume: 26.64, amount: 200.0},
    {date: "2025-10-05", unitPrice: 7.51, oilVolume: 26.64, amount: 200.0},
    {date: "2025-10-01", unitPrice: 7.57, oilVolume: 48.09, amount: 364.0},
    {date: "2025-08-12", unitPrice: 7.73, oilVolume: 51.75, amount: 400.0},
    {date: "2025-05-04", unitPrice: 7.49, oilVolume: 26.71, amount: 200.0},
    {date: "2025-05-02", unitPrice: 7.56, oilVolume: 33.47, amount: 253.0},
    {date: "2025-01-27", unitPrice: 8.27, oilVolume: 24.18, amount: 200.0},
    {date: "2024-10-06", unitPrice: 7.85, oilVolume: 39.49, amount: 310.0},
    {date: "2024-10-05", unitPrice: 7.78, oilVolume: 38.56, amount: 300.0},
    {date: "2024-10-01", unitPrice: 7.85, oilVolume: 46.24, amount: 363.0},
    {date: "2024-05-31", unitPrice: 8.52, oilVolume: 27.58, amount: 235.0},
    {date: "2024-02-09", unitPrice: 8.33, oilVolume: 48.02, amount: 400.0},
    {date: "2024-01-15", unitPrice: 8.13, oilVolume: 44.29, amount: 360.0},
    {date: "2024-01-13", unitPrice: 8.2, oilVolume: 28.09, amount: 230.0},
    {date: "2024-01-03", unitPrice: 8.03, oilVolume: 24.91, amount: 200.0},
    {date: "2023-11-24", unitPrice: 8.43, oilVolume: 23.73, amount: 200.0},
    {date: "2023-11-13", unitPrice: 8.72, oilVolume: 22.94, amount: 200.0},
    {date: "2023-10-04", unitPrice: 8.98, oilVolume: 45.66, amount: 410.0},
    {date: "2023-10-04", unitPrice: 8.9, oilVolume: 35.4, amount: 315.0},
    {date: "2023-10-02", unitPrice: 8.9, oilVolume: 41.58, amount: 370.0},
    {date: "2023-09-29", unitPrice: 8.98, oilVolume: 38.97, amount: 350.0},
    {date: "2023-07-16", unitPrice: 8.09, oilVolume: 24.73, amount: 200.0},
    {date: "2023-06-24", unitPrice: 7.92, oilVolume: 32.08, amount: 254.0},
    {date: "2023-06-24", unitPrice: 7.97, oilVolume: 26.35, amount: 210.0},
    {date: "2023-06-23", unitPrice: 7.99, oilVolume: 23.78, amount: 190.0},
    {date: "2023-06-23", unitPrice: 7.92, oilVolume: 31.44, amount: 249.0},
    {date: "2023-06-23", unitPrice: 7.92, oilVolume: 41.67, amount: 330.0},
    {date: "2023-06-22", unitPrice: 7.77, oilVolume: 27.16, amount: 211.0},
    {date: "2023-06-22", unitPrice: 7.77, oilVolume: 25.74, amount: 200.0},
    {date: "2023-06-21", unitPrice: 7.91, oilVolume: 20.23, amount: 160.0},
    {date: "2023-06-21", unitPrice: 7.78, oilVolume: 27.38, amount: 213.0},
    {date: "2023-06-19", unitPrice: 7.79, oilVolume: 28.24, amount: 220.0},
    {date: "2023-06-18", unitPrice: 7.79, oilVolume: 21.19, amount: 165.0},
    {date: "2023-06-17", unitPrice: 7.79, oilVolume: 24.14, amount: 188.0},
    {date: "2023-06-16", unitPrice: 7.79, oilVolume: 34.66, amount: 270.0},
    {date: "2023-06-15", unitPrice: 7.92, oilVolume: 26.52, amount: 210.0},
    {date: "2023-06-15", unitPrice: 7.91, oilVolume: 26.3, amount: 208.0},
    {date: "2023-06-14", unitPrice: 7.92, oilVolume: 28.67, amount: 227.0},
    {date: "2023-06-12", unitPrice: 7.97, oilVolume: 45.3, amount: 361.0},
    {date: "2023-06-11", unitPrice: 7.96, oilVolume: 29.65, amount: 236.0},
    {date: "2023-06-11", unitPrice: 7.81, oilVolume: 26.0, amount: 203.0},
    {date: "2023-06-11", unitPrice: 7.81, oilVolume: 28.17, amount: 220.0},
    {date: "2023-06-10", unitPrice: 7.96, oilVolume: 33.92, amount: 270.0},
    {date: "2023-06-10", unitPrice: 7.96, oilVolume: 53.4, amount: 425.0},
    {date: "2023-06-09", unitPrice: 8.01, oilVolume: 35.58, amount: 285.0},
    {date: "2023-05-24", unitPrice: 7.93, oilVolume: 26.73, amount: 212.0},
    {date: "2023-05-22", unitPrice: 7.93, oilVolume: 25.22, amount: 200.0},
    {date: "2023-05-19", unitPrice: 7.93, oilVolume: 27.24, amount: 216.0},
    {date: "2023-05-19", unitPrice: 7.86, oilVolume: 39.57, amount: 311.0},
    {date: "2023-05-05", unitPrice: 8.25, oilVolume: 36.36, amount: 300.0},
    {date: "2023-05-03", unitPrice: 8.18, oilVolume: 49.52, amount: 405.0},
    {date: "2023-05-02", unitPrice: 8.28, oilVolume: 27.78, amount: 230.0},
    {date: "2023-05-02", unitPrice: 8.31, oilVolume: 30.55, amount: 253.87},
    {date: "2023-04-29", unitPrice: 8.27, oilVolume: 33.42, amount: 276.8},
    {date: "2023-04-28", unitPrice: 8.42, oilVolume: 36.12, amount: 304.13},
    {date: "2023-04-25", unitPrice: 8.42, oilVolume: 47.15, amount: 397.0},
    {date: "2023-04-25", unitPrice: 8.45, oilVolume: 42.09, amount: 355.66},
    {date: "2023-04-24", unitPrice: 8.39, oilVolume: 28.61, amount: 240.04},
    {date: "2023-04-19", unitPrice: 8.39, oilVolume: 23.84, amount: 200.0},
    {date: "2023-03-12", unitPrice: 8.22, oilVolume: 36.5, amount: 300.0},
    {date: "2023-03-10", unitPrice: 8.29, oilVolume: 45.8, amount: 379.68},
    {date: "2023-02-28", unitPrice: 8.32, oilVolume: 50.5, amount: 420.16},
];
