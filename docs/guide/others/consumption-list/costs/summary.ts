import accessories from "./accessories";
import fuel from "./fuel";
import insurance from "./insurance";
import maintenance from "./maintenance";
import parking from "./parking";
import purchase from "./purchase";
import {round2} from "./round";

export interface CostCategory {
    key: string;
    label: string;
    /** 金额（元） */
    amount: number;
}

// 购车费用按车价计入，购车时支付的保险已单独计入保险费，避免重复计算。
export const categories: CostCategory[] = [
    {key: "purchase", label: "购车费用", amount: purchase.price},
    {key: "fuel", label: "燃油费", amount: fuel.totalAmount},
    {key: "accessories", label: "汽车用品", amount: accessories.totalPrice},
    {key: "parking", label: "停车费", amount: parking.total},
    {key: "maintenance", label: "保养费", amount: maintenance.total},
    {key: "insurance", label: "保险费", amount: insurance.total},
];

/** 当前费用总计（元） */
export const total: number = round2(categories.reduce((sum, category) => sum + category.amount, 0));

/** 用车费用总计（元），不含购车费用 */
export const runningTotal: number = round2(
    categories
        .filter((category) => category.key !== "purchase")
        .reduce((sum, category) => sum + category.amount, 0)
);

/** 总里程（公里） */
export const kilometers: number = fuel.kilometers;

/** 每公里总成本（元/公里） */
export const totalPerKilometer: number = total / kilometers;

/** 每公里用车成本（元/公里），不含购车费用 */
export const runningPerKilometer: number = runningTotal / kilometers;

/** 每公里油费（元/公里） */
export const fuelPerKilometer: number = fuel.amountPerKilometer;

export default {
    categories,
    total,
    runningTotal,
    kilometers,
    totalPerKilometer,
    runningPerKilometer,
    fuelPerKilometer,
};
