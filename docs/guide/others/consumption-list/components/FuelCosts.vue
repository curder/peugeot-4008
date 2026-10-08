<script setup lang="ts">
import fuel from "../costs/fuel";
import DataTable from "./DataTable.vue";
import { formatAmount, formatFuelType, formatNumber } from "./format";

/** 默认展示的加油记录条数 */
const visibleCount = 5;

const headers = ["日期", "单价", "油量", "型号", "金额"];
const rows = fuel.displayRecords.map((record) => [
    record.date,
    record.unitPrice.toFixed(2),
    record.oilVolume.toFixed(2),
    formatFuelType(record.type ?? "95"),
    record.amount.toFixed(2),
]);

const segmentHeaders = ["起始日期", "结束日期", "区间里程", "消耗油量", "百公里油耗"];
const segmentRows = fuel.segments.map((segment) => [
    segment.fromDate,
    segment.toDate,
    `${formatNumber(segment.kilometers)} 公里`,
    `${formatAmount(segment.oilVolume)} 升`,
    `${formatNumber(segment.oilConsumption)} 升/百公里`,
]);
</script>
<template>
    <blockquote>
        <p>
            当前公里数：
            <code>
                {{ formatNumber(fuel.kilometers) }}
            </code>
            公里。 总油耗：
            <code>
                {{ formatNumber(fuel.oilConsumption) }}
            </code>
            升/百公里。
        </p>
        <br />
        <p>
            消耗总油量：
            <strong>
                {{ formatAmount(fuel.totalOilVolume) }}
            </strong>
            升， 平均油价：
            <code>
                {{ formatAmount(fuel.priceAverage) }}
            </code>
            元， 油费合计：<code>{{ formatAmount(fuel.totalAmount) }}</code> 元， 加油总次数：
            <code>{{ formatNumber(fuel.totalNumber) }}</code
            >次。
        </p>
    </blockquote>

    <DataTable
        :headers="headers"
        :rows="rows"
        :visible-count="visibleCount"
        inline-table
    />

    <template v-if="segmentRows.length > 0">
        <p><strong>区间油耗</strong>（按相邻两次加油的里程差与后一次加油量估算）</p>

        <DataTable
            :headers="segmentHeaders"
            :rows="segmentRows"
            :visible-count="segmentRows.length"
        />
    </template>
</template>
