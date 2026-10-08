import {latestKilometers, records, type FuelRecord} from "../data/fuel";
import {round2} from "./round";

/** 按日期倒序的记录，供表格展示 */
export const displayRecords: FuelRecord[] = [...records].sort((a, b) => b.date.localeCompare(a.date));

/** 总里程（公里） */
export const kilometers: number = latestKilometers;

/** 消耗总油量（升） */
export const totalOilVolume: number = round2(records.reduce((sum, record) => sum + record.oilVolume, 0));

/** 油费合计（元） */
export const totalAmount: number = round2(records.reduce((sum, record) => sum + record.amount, 0));

/** 加油次数 */
export const totalNumber: number = records.length;

/** 平均油价（元/升） */
export const priceAverage: number = round2(totalAmount / totalOilVolume);

/** 百公里油耗（升/百公里），按总油量 / 总里程估算 */
export const oilConsumption: number = round2((totalOilVolume / kilometers) * 100);

/** 每公里油费（元/公里） */
export const amountPerKilometer: number = totalAmount / kilometers;

export interface FuelSegment {
    /** 上一次加油日期 */
    fromDate: string;
    /** 本次加油日期 */
    toDate: string;
    /** 区间里程（公里） */
    kilometers: number;
    /** 区间消耗油量（升） */
    oilVolume: number;
    /** 区间百公里油耗（升/百公里） */
    oilConsumption: number;
}

// 只有填写了 kilometers（本次加油时的仪表盘里程）的记录才能参与区间油耗计算
const anchored = records
    .filter((record): record is FuelRecord & {kilometers: number} => typeof record.kilometers === "number")
    .sort((a, b) => a.kilometers - b.kilometers);

/**
 * 区间油耗，按「满箱到满箱」口径估算：区间里程取相邻两次记录的里程差，油量取后一次加油量。
 *
 * 目前所有记录都未填写 kilometers，因此结果为空数组；填写后会自动生成。
 */
export const segments: FuelSegment[] = anchored.slice(1).map((record, index) => {
    const previous = anchored[index];
    const distance = record.kilometers - previous.kilometers;

    return {
        fromDate: previous.date,
        toDate: record.date,
        kilometers: distance,
        oilVolume: record.oilVolume,
        oilConsumption: distance > 0 ? round2((record.oilVolume / distance) * 100) : 0,
    };
});

export default {
    displayRecords,
    kilometers,
    totalOilVolume,
    totalAmount,
    totalNumber,
    priceAverage,
    oilConsumption,
    amountPerKilometer,
    segments,
};
