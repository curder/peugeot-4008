import {records, type ParkingRecord} from "../data/parking";
import {round2} from "./round";

/** 按开始日期倒序的记录，供表格展示 */
export const displayRecords: ParkingRecord[] = [...records].sort((a, b) => b.start.localeCompare(a.start));

/** 停车费合计（元） */
export const total: number = round2(records.reduce((sum, record) => sum + record.amount, 0));

export default {
    displayRecords,
    total,
};
