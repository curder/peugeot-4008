<script setup lang="ts">
import yearly from "../costs/yearly";
import DataTable from "./DataTable.vue";
import { formatAmount } from "./format";

const headers = ["年份", "购车费用", "燃油费", "汽车用品", "停车费", "保养费", "保险费", "合计"];
const rows = yearly.years.map((year) => [
    year.year,
    amount(year.purchase),
    amount(year.fuel),
    amount(year.accessories),
    amount(year.parking),
    amount(year.maintenance),
    amount(year.insurance),
    formatAmount(year.total),
]);

function amount(value: number): string {
    return value > 0 ? formatAmount(value) : "-";
}
</script>

<template>
    <blockquote>
        共 {{ yearly.years.length }} 个年度有费用记录，年度平均总费用：<strong>{{
            formatAmount(yearly.average)
        }}</strong> 元（含购车费用）。
    </blockquote>

    <DataTable :headers="headers" :rows="rows" :visible-count="rows.length" />
</template>
