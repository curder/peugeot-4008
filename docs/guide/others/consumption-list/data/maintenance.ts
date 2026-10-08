export interface MaintenanceDetail {
    /** 明细项目 */
    label: string;
    /** 金额（元） */
    amount: number;
    /** 补充说明 */
    note?: string;
}

export interface MaintenanceRecord {
    /** 保养日期 */
    date: string;
    /** 保养类型 */
    type: string;
    /** 本次保养费用（元） */
    amount: number;
    /** 保养时的仪表盘公里数 */
    kilometers: number;
    /** 保养内容，每项一行 */
    content: string[];
    /** 下次保养日期 */
    nextDate: string;
    /** 下次保养里程 */
    nextKilometers: number;
    /** 费用明细 */
    details: MaintenanceDetail[];
}

/** 首保要求：购车日期 2023-02-28 起 6 个月或 7500 公里 */
export const firstRequirement = {date: "2023-08-27", kilometers: 7500};

// 按时间正序记录，新增记录直接追加到末尾，展示顺序与派生计算由 costs 层处理。
export const records: MaintenanceRecord[] = [
    {
        date: "2023-05-24",
        type: "第一次保养",
        amount: 0,
        kilometers: 8061,
        content: ["更换机油和机滤", "胎压、灯光、转向等常规检查", "车辆简单清洗"],
        nextDate: "2023-11-23",
        nextKilometers: 15000,
        details: [{label: "厂家赠送", amount: 0, note: "无费用"}],
    },
    {
        date: "2023-06-26",
        type: "第二次保养",
        amount: 2300.0,
        kilometers: 17589,
        content: ["更换机油、机滤和空调滤芯", "胎压、灯光、转向等常规检查"],
        nextDate: "2023-12-25",
        nextKilometers: 25000,
        details: [
            {label: "更换空调滤芯 + 使用发动机清洗剂", amount: 344.0},
            {label: "官方 APP 购买 3 年 5 次基础保养费用（包括道达尔机油+机滤及工时费）", amount: 1955.0},
            {label: "官方 APP 购买保养合同七折券", amount: 1.0},
        ],
    },
    {
        date: "2023-12-29",
        type: "第三次保养",
        amount: 9.9,
        kilometers: 21143,
        content: ["更换机油、机滤", "胎压、灯光、转向、清理空调滤芯等常规检查"],
        nextDate: "2024-06-29",
        nextKilometers: 29000,
        details: [
            {label: "官方 APP 购买 -35℃ 玻璃清洗剂", amount: 9.9},
            {label: "使用保养合同套餐次数", amount: 0, note: "常规保养免费"},
        ],
    },
    {
        date: "2024-09-13",
        type: "第四次保养",
        amount: 158.0,
        kilometers: 23300,
        content: ["更换机油、机滤", "胎压、灯光、转向等常规检查", "车辆简单清洗"],
        nextDate: "2025-03-10",
        nextKilometers: 30000,
        details: [
            {label: "购买发动机清洗润滑油", amount: 158.0},
            {label: "使用保养合同套餐次数", amount: 0, note: "常规保养免费"},
        ],
    },
    {
        date: "2026-09-06",
        type: "第五次保养",
        amount: 3731.0,
        kilometers: 30047,
        content: ["更换变速箱油、空调滤芯、机油、机滤", "胎压、灯光、转向等常规检查", "车辆简单清洗"],
        nextDate: "2027-03-05",
        nextKilometers: 37500,
        details: [
            {label: "更换变速箱油", amount: 1380.0},
            {label: "更换空调滤芯", amount: 93.0},
            {label: "更换机油和机滤", amount: 0, note: "使用保养合同套餐次数，常规保养免费"},
        ],
    },
];
