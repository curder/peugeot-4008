import {
    firstRequirement,
    records as rawRecords,
    type MaintenanceRecord,
} from "../data/maintenance";
import {round2} from "./round";

export interface MaintenanceBalance {
    /** 费用总额与明细合计的差额（元），即明细待补充的部分 */
    unaccounted: number;
}

export type MaintenanceWithBalance = MaintenanceRecord & MaintenanceBalance;

export interface MaintenanceSchedule {
    /** 保养类型 */
    type: string;
    /** 要求的保养日期 */
    requiredDate: string;
    /** 要求的保养里程 */
    requiredKilometers: number;
    /** 实际公里数超出要求的公里数，负数表示未超出 */
    kilometersOver: number;
    /** 实际日期晚于要求日期的天数，负数表示提前 */
    daysOver: number;
}

const toUTC = (date: string): number => {
    const [year, month, day] = date.split("-").map(Number);

    return Date.UTC(year, month - 1, day);
};

/** 两个日期之间的天数，正数表示 to 晚于 from */
export const daysBetween = (from: string, to: string): number =>
    Math.round((toUTC(to) - toUTC(from)) / (24 * 60 * 60 * 1000));

/** 保养记录，附带费用总额与明细的差额 */
export const records: MaintenanceWithBalance[] = rawRecords.map((record) => ({
    ...record,
    unaccounted: round2(record.amount - record.details.reduce((sum, detail) => sum + detail.amount, 0)),
}));

/** 按日期倒序的记录，供表格展示 */
export const displayRecords: MaintenanceWithBalance[] = [...records].sort((a, b) => b.date.localeCompare(a.date));

// 保养要求取自上一次保养，因此按日期正序计算，避免受数据文件记录顺序影响
const chronological: MaintenanceWithBalance[] = [...records].sort((a, b) => a.date.localeCompare(b.date));

/** 每次保养的「要求 vs 实际」对比，要求取自上一次保养的下次保养要求 */
export const schedule: MaintenanceSchedule[] = chronological.map((record, index) => {
    const requirement = index === 0
        ? firstRequirement
        : {date: chronological[index - 1].nextDate, kilometers: chronological[index - 1].nextKilometers};

    return {
        type: record.type,
        requiredDate: requirement.date,
        requiredKilometers: requirement.kilometers,
        kilometersOver: record.kilometers - requirement.kilometers,
        daysOver: daysBetween(requirement.date, record.date),
    };
});

/** 按日期倒序的「要求 vs 实际」对比 */
export const displaySchedule: MaintenanceSchedule[] = [...schedule].reverse();

/** 保养费合计（元） */
export const total: number = round2(records.reduce((sum, record) => sum + record.amount, 0));

export default {
    records,
    displayRecords,
    schedule,
    displaySchedule,
    total,
};
