export interface ParkingRecord {
    /** 开始日期 */
    start: string;
    /** 截止日期 */
    end: string;
    /** 费用（元） */
    amount: number;
    /** 备注 */
    note: string;
}

// 按时间倒序记录，总计由记录自动汇总，请勿手写合计值。
// 注意：2025-05-29 ~ 2025-08-11 之间缺少一期记录，如需修正请补充记录后合计会自动更新。
export const records: ParkingRecord[] = [
    {start: "2026-08-10", end: "2027-02-10", amount: 600.0, note: "半年停车费"},
    {start: "2026-02-09", end: "2026-08-10", amount: 500.0, note: "半年停车费"},
    {start: "2025-08-11", end: "2026-02-10", amount: 500.0, note: "半年停车费"},
    {start: "2024-11-30", end: "2025-05-29", amount: 500.0, note: "半年停车费"},
    {start: "2024-05-30", end: "2024-11-29", amount: 500.0, note: "半年停车费"},
    {start: "2023-10-03", end: "2024-04-02", amount: 500.0, note: "半年停车费"},
    {start: "2023-04-03", end: "2023-10-02", amount: 500.0, note: "半年停车费"},
];

export const total: number = records.reduce((sum, record) => sum + record.amount, 0);

export default {
    records,
    total,
};
