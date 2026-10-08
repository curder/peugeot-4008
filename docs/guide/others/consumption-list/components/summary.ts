import fuel from "./fuel-costs";
import accessories from "./auto-accessories";
import parking from "./parking";
import maintenance from "./maintenance";
import insurance from "./insurance";
import purchase from "./purchase";

export interface CostCategory {
    key: string;
    label: string;
    /** 金额（元） */
    amount: number;
}

// 购车费用按车价计入，购车时支付的保险已单独计入保险费，避免重复计算。
export const categories: CostCategory[] = [
    {key: "purchase", label: "购车费用", amount: purchase.price},
    {key: "fuel", label: "燃油费", amount: fuel.total_amount},
    {key: "accessories", label: "汽车用品", amount: accessories.total_price},
    {key: "parking", label: "停车费", amount: parking.total},
    {key: "maintenance", label: "保养费", amount: maintenance.total},
    {key: "insurance", label: "保险费", amount: insurance.total},
];

/** 当前费用总计（元） */
export const total: number = categories.reduce((sum, category) => sum + category.amount, 0);

/** 用车费用总计（元），不含购车费用 */
export const running_total: number = categories
    .filter((category) => category.key !== "purchase")
    .reduce((sum, category) => sum + category.amount, 0);

/** 总里程（公里） */
export const kilometers: number = fuel.total_kilometers;

/** 每公里总成本（元/公里） */
export const total_per_kilometer: number = total / kilometers;

/** 每公里用车成本（元/公里），不含购车费用 */
export const running_per_kilometer: number = running_total / kilometers;

/** 每公里油费（元/公里） */
export const fuel_per_kilometer: number = fuel.total_amount / kilometers;

export default {
    categories,
    total,
    running_total,
    kilometers,
    total_per_kilometer,
    running_per_kilometer,
    fuel_per_kilometer,
};
