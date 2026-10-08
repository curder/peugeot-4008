import {
    compulsoryInsuranceIncludedInPrice,
    date,
    insurance,
    price,
} from "../data/purchase";
import {round2} from "./round";

/** 购车总支出（元）：车价 - 车价中已含交强险 + 购车保险 */
export const total: number = round2(price - compulsoryInsuranceIncludedInPrice + insurance);

export default {
    date,
    price,
    insurance,
    compulsoryInsuranceIncludedInPrice,
    total,
};
