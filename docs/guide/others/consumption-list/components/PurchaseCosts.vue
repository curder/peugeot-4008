<script setup lang="ts">
import purchase from "../costs/purchase";
import { formatAmount } from "./format";
</script>

<template>
    <p>
        购车车价为：<code>{{ formatAmount(purchase.price) }}</code> 元 (含车辆购置税和交强险)，保险：<code>{{
            formatAmount(purchase.insurance)
        }}</code> 元，总计：<strong>{{ formatAmount(purchase.total) }}</strong> 元。
    </p>
</template>
