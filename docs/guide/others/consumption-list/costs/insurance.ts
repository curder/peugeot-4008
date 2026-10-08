import {records, type InsuranceRecord} from "../data/insurance";
import {round2} from "./round";

/** 按保险期间倒序的记录，供表格展示 */
export const displayRecords: InsuranceRecord[] = [...records].sort((a, b) => b.period.localeCompare(a.period));

/** 保险费合计（元），按实付金额汇总 */
export const total: number = round2(records.reduce((sum, record) => sum + record.paid, 0));

export default {
    displayRecords,
    total,
};
