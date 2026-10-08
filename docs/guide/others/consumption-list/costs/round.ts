/** 四舍五入到两位小数，避免浮点累加产生的尾数 */
export const round2 = (value: number): number => Number(value.toFixed(2));
