<script setup lang="ts">
import summary from "./summary";
import DataTable from "./DataTable.vue";
import { formatAmount, formatNumber } from "./format";

const headers = ["指标", "数值"];
const rows = [
    ["总里程", `${formatNumber(summary.kilometers)} 公里`],
    ["总费用", `${formatAmount(summary.total)} 元`],
    ["用车费用（不含购车）", `${formatAmount(summary.running_total)} 元`],
    ["每公里总成本（含购车）", `${formatAmount(summary.total_per_kilometer)} 元/公里`],
    ["每公里用车成本（不含购车）", `${formatAmount(summary.running_per_kilometer)} 元/公里`],
    ["每公里油费", `${formatAmount(summary.fuel_per_kilometer)} 元/公里`],
];
</script>

<template>
    <DataTable :headers="headers" :rows="rows" :visible-count="rows.length" />
</template>
