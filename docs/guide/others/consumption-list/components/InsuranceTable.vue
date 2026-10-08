<script setup lang="ts">
import insurance from "../costs/insurance";
import DataTable from "./DataTable.vue";
import { formatAmount } from "./format";

const headers = [
    "保险期间",
    "交强险（元）",
    "车船税（元）",
    "商业险（元）",
    "合计（元）",
    "优惠（元）",
    "实付金额（元）",
    "备注",
];
const rows = insurance.displayRecords.map((record) => [
    `<small>${record.period}</small>`,
    formatAmount(record.compulsory),
    formatAmount(record.vehicleTax),
    formatAmount(record.commercial),
    formatAmount(record.premiumTotal),
    record.discount > 0 ? formatAmount(record.discount) : "-",
    formatAmount(record.paid),
    record.note,
]);
</script>

<template>
    <blockquote>
        当前总计保险费：<strong><code>{{ formatAmount(insurance.total) }}</code></strong> 元。
    </blockquote>

    <DataTable :headers="headers" :rows="rows" :visible-count="rows.length" />
</template>
