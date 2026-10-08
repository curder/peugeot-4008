export interface InsuranceRecord {
    /** 保险期间 */
    period: string;
    /** 交强险（元） */
    compulsory: number;
    /** 车船税（元） */
    vehicleTax: number;
    /** 商业险（元） */
    commercial: number;
    /** 合计（元） */
    premiumTotal: number;
    /** 优惠（元） */
    discount: number;
    /** 实付金额（元） */
    paid: number;
    /** 备注 */
    note: string;
}

// 按时间倒序记录，总计由实付金额自动汇总，请勿手写合计值。
// 待核对（以保单为准，暂不改动）：
// - 2026-02-28 期「交强险 + 车船税 + 商业险」合计 2,925.65 元，与合计 3,385.65 元相差 460.00 元
// - 2026-02-28 期「合计 - 优惠」为 3,128.65 元，与实付 3,128.00 元相差 0.65 元
// - 2025-02-28 期「合计 - 优惠」为 3,157.52 元，与实付 3,156.52 元相差 1.00 元
export const records: InsuranceRecord[] = [
    {
        period: "2026-02-28 ~ 2027-02-28",
        compulsory: 950.0,
        vehicleTax: 360.0,
        commercial: 1615.65,
        premiumTotal: 3385.65,
        discount: 257.0,
        paid: 3128.0,
        note: "中国人保",
    },
    {
        period: "2025-02-28 ~ 2026-02-28",
        compulsory: 760.0,
        vehicleTax: 360.0,
        commercial: 2203.52,
        premiumTotal: 3323.52,
        discount: 166.0,
        paid: 3156.52,
        note: "中国人保",
    },
    {
        period: "2024-02-28 ~ 2025-02-28",
        compulsory: 855.0,
        vehicleTax: 360.0,
        commercial: 2054.59,
        premiumTotal: 3269.59,
        discount: 512.0,
        paid: 2757.59,
        note: "中国平安",
    },
    {
        period: "2023-02-28 ~ 2024-02-28",
        compulsory: 920.0,
        vehicleTax: 360.0,
        commercial: 2696.31,
        premiumTotal: 3976.31,
        discount: 0,
        paid: 3976.31,
        note: "中国平安",
    },
];

/** 保险项目 */
export const items: string[] = [
    "交强险+车船税",
    "300 万第三者责任险",
    "附加医保外医疗费用责任险（三者）",
    "机动车损失保险",
    "驾乘险",
];

export const total: number = records.reduce((sum, record) => sum + record.paid, 0);

export default {
    records,
    items,
    total,
};
