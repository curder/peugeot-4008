<script setup lang="ts">
import maintenance from "../costs/maintenance";
import DataTable from "./DataTable.vue";
import { formatAmount } from "./format";

const headers = ["日期", "保养类型", "费用", "当前公里数", "保养内容", "下次保养日期", "下次保养里程"];
const rows = maintenance.displayRecords.map((record) => [
    record.date,
    record.type,
    `${formatAmount(record.amount)} 元`,
    `${record.kilometers} 公里`,
    record.content.join("<br />"),
    record.nextDate,
    `${record.nextKilometers} 公里`,
]);
</script>

<template>
    <blockquote>
        当前总计汽车保养费：<strong>{{ formatAmount(maintenance.total) }}</strong> 元。
    </blockquote>

    <DataTable :headers="headers" :rows="rows" :visible-count="rows.length" />
</template>
