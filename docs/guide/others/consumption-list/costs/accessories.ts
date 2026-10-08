import {records, type AccessoryRecord} from "../data/accessories";
import {round2} from "./round";

/** 按日期倒序的记录，供表格展示 */
export const displayRecords: AccessoryRecord[] = [...records].sort((a, b) => b.date.localeCompare(a.date));

/** 汽车用品总费用（元） */
export const totalPrice: number = round2(records.reduce((sum, record) => sum + record.price, 0));

export default {
    displayRecords,
    totalPrice,
};
