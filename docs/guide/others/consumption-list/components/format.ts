const amount_formatter = new Intl.NumberFormat("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const number_formatter = new Intl.NumberFormat("zh-CN", {
    maximumFractionDigits: 2,
});

/** 金额格式化，保留两位小数并使用千分位分隔，例如 18428.34 -> 18,428.34 */
export const formatAmount = (value: number | string): string =>
    amount_formatter.format(Number(value));

/** 数量格式化，最多保留两位小数并使用千分位分隔，例如 31250 -> 31,250 */
export const formatNumber = (value: number | string): string =>
    number_formatter.format(Number(value));

/** 汽油标号展示，95 -> 95♯ */
export const formatFuelType = (type: string): string => `${type}<small>&sharp;</small>`;
