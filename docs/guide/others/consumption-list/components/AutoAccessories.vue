<script setup lang="ts">
import accessories from "../costs/accessories";
import DataTable from "./DataTable.vue";
import { formatAmount } from "./format";

/** 默认展示的购买记录条数 */
const visibleCount = 5;

const headers = ["购买日期", "价格", "平台", "其它说明"];
const rows = accessories.displayRecords.map((record) => [
    record.date,
    record.price.toFixed(2),
    record.platform,
    `<small>${record.description}</small>`,
]);
</script>
<template>
    <blockquote>
        当前总计汽车用品费：<strong>{{ formatAmount(accessories.totalPrice) }}</strong> 元。
    </blockquote>

    <DataTable
        :headers="headers"
        :rows="rows"
        :visible-count="visibleCount"
    />
</template>
