<script setup lang="ts">
import maintenance from "./maintenance";
import { formatAmount } from "./format";
</script>

<template>
    <blockquote>
        <template v-for="(record, index) in maintenance.display_records" :key="record.date">
            <hr v-if="index > 0" />
            <p>
                <strong>{{ record.type }}（{{ formatAmount(record.amount) }} 元）：</strong>
            </p>
            <ol>
                <li v-for="detail in record.details" :key="detail.label">
                    {{ detail.label
                    }}<template v-if="detail.amount > 0">，合计 {{ formatAmount(detail.amount) }} 元</template
                    ><template v-if="detail.note">，{{ detail.note }}</template>
                </li>
                <li v-if="record.unaccounted > 0">
                    其它项目（明细待补充），合计 {{ formatAmount(record.unaccounted) }} 元
                </li>
            </ol>
        </template>
    </blockquote>
</template>
