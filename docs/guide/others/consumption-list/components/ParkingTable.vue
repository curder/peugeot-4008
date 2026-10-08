<script setup lang="ts">
import parking from "../costs/parking";
import DataTable from "./DataTable.vue";
import { formatAmount } from "./format";

const headers = ["开始日期", "截止日期", "费用", "备注"];
const rows = parking.displayRecords.map((record) => [
    record.start,
    record.end,
    `${formatAmount(record.amount)} 元`,
    record.note,
]);
</script>

<template>
    <blockquote>
        当前总计汽车停车费：<strong>{{ formatAmount(parking.total) }}</strong> 元。
    </blockquote>

    <DataTable :headers="headers" :rows="rows" :visible-count="rows.length" />
</template>
