<script setup lang="ts">
import fuelCosts from "./fuel-costs";
import DataTable from "./DataTable.vue";
import { formatAmount, formatNumber } from "./format";
</script>
<template>
    <blockquote>
        <p>
            当前公里数：
            <code>
                {{ formatNumber(fuelCosts.total_kilometers) }}
            </code>
            公里。 总油耗：
            <code>
                {{ formatNumber(fuelCosts.oil_consumption) }}
            </code>
            升/百公里。
        </p>
        <br />
        <p>
            消耗总油量：
            <strong>
                {{ formatAmount(fuelCosts.total_oil_volume) }}
            </strong>
            升， 平均油价：
            <code>
                {{ formatAmount(fuelCosts.price_avg) }}
            </code>
            元， 油费合计：<code>{{ formatAmount(fuelCosts.total_amount) }}</code> 元， 加油总次数：
            <code>{{ formatNumber(fuelCosts.total_number) }}</code
            >次。
        </p>
    </blockquote>

    <DataTable
        :headers="fuelCosts.header_labels"
        :rows="fuelCosts.rows"
        :visible-count="fuelCosts.visible_item_count"
        inline-table
    />
</template>
