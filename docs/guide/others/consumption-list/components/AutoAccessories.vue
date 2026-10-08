<script setup lang="ts">
import autoAccessories from "./auto-accessories";
import DataTable from "./DataTable.vue";
import { formatAmount } from "./format";
</script>
<template>
    <blockquote>
        当前总计汽车用品费：<strong>{{ formatAmount(autoAccessories.total_price) }}</strong> 元。
    </blockquote>

    <DataTable
        :headers="autoAccessories.header_labels"
        :rows="autoAccessories.rows"
        :visible-count="autoAccessories.visible_item_count"
    />
</template>
