<script setup lang="ts">
import summary from "./summary";
import { formatAmount } from "./format";
</script>

<template>
    <p>
        当前费用总计：<strong><code>{{ formatAmount(summary.total) }}</code></strong> 元。
    </p>
    <ul>
        <li v-for="category in summary.categories" :key="category.key">
            {{ category.label }}：<code>{{ formatAmount(category.amount) }}</code> 元
        </li>
    </ul>
</template>
