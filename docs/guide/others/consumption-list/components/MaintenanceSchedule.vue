<script setup lang="ts">
import maintenance from "../costs/maintenance";

const describeKilometers = (kilometersOver: number): string =>
    kilometersOver > 0 ? `公里数超过保养要求 ${kilometersOver} 公里` : "公里数未超过保养要求";

const describeDays = (daysOver: number): string =>
    daysOver > 0 ? `时间超过 ${daysOver} 天` : `时间提前 ${Math.abs(daysOver)} 天`;
</script>

<template>
    <blockquote>
        <template v-for="(item, index) in maintenance.displaySchedule" :key="item.type">
            <hr v-if="index > 0" />
            <p><strong>{{ item.type }}</strong></p>
            <p>
                要求公里数：<code>{{ item.requiredKilometers }}</code> 公里或日期：<code>{{
                    item.requiredDate
                }}</code
                >，哪个先到以哪个为准
            </p>
            <p>实际：{{ describeKilometers(item.kilometersOver) }}，{{ describeDays(item.daysOver) }}。</p>
        </template>
    </blockquote>
</template>
