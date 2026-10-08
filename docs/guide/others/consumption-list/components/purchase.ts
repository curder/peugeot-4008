/** 购车日期 */
export const date: string = "2023-02-28";

/** 购车车价（元），含车辆购置税和交强险 */
export const price: number = 168000.0;

/** 购车时支付的保险（元） */
export const insurance: number = 4258.59;

/** 车价中已包含的交强险（元），计算购车总支出时需扣除，避免重复计算 */
export const compulsory_insurance_included_in_price: number = 950.0;

/** 购车总支出（元）：车价 - 车价中已含交强险 + 购车保险 */
export const total: number = price - compulsory_insurance_included_in_price + insurance;

export default {
    date,
    price,
    insurance,
    compulsory_insurance_included_in_price,
    total,
};
