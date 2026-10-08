import fuel from "./fuel-costs";
import accessories from "./auto-accessories";
import parking from "./parking";
import maintenance from "./maintenance";
import insurance from "./insurance";
import purchase from "./purchase";

export interface YearlyCost {
    /** 年份 */
    year: string;
    /** 购车费用（元） */
    purchase: number;
    /** 燃油费（元） */
    fuel: number;
    /** 汽车用品（元） */
    accessories: number;
    /** 停车费（元） */
    parking: number;
    /** 保养费（元） */
    maintenance: number;
    /** 保险费（元） */
    insurance: number;
    /** 合计（元） */
    total: number;
}

type Category = Exclude<keyof YearlyCost, "year" | "total">;

interface Entry {
    year: string;
    category: Category;
    amount: number;
}

const yearOf = (date: string): string => date.slice(0, 4);

// 各模块的记录按发生日期归入对应年份，购车、保险按开始日期计入
const entries: Entry[] = [
    {year: yearOf(purchase.date), category: "purchase", amount: purchase.price},
    ...fuel.records.map((record) => ({year: yearOf(record.date), category: "fuel" as const, amount: record.amount})),
    ...accessories.records.map((record) => ({year: yearOf(record.date), category: "accessories" as const, amount: record.price})),
    ...parking.records.map((record) => ({year: yearOf(record.start), category: "parking" as const, amount: record.amount})),
    ...maintenance.records.map((record) => ({year: yearOf(record.date), category: "maintenance" as const, amount: record.amount})),
    ...insurance.records.map((record) => ({year: yearOf(record.period), category: "insurance" as const, amount: record.paid})),
];

const emptyYearlyCost = (year: string): YearlyCost => ({
    year,
    purchase: 0,
    fuel: 0,
    accessories: 0,
    parking: 0,
    maintenance: 0,
    insurance: 0,
    total: 0,
});

const grouped = new Map<string, YearlyCost>();

for (const entry of entries) {
    const item = grouped.get(entry.year) ?? emptyYearlyCost(entry.year);

    item[entry.category] += entry.amount;
    item.total += entry.amount;
    grouped.set(entry.year, item);
}

/** 按年份汇总的费用，最新年份在前 */
export const years: YearlyCost[] = [...grouped.values()].sort((a, b) => b.year.localeCompare(a.year));

/** 各年份合计之和，与费用总计一致 */
export const total: number = years.reduce((sum, year) => sum + year.total, 0);

/** 年度平均总费用（元/年） */
export const average: number = years.length > 0 ? total / years.length : 0;

export default {
    years,
    total,
    average,
};
