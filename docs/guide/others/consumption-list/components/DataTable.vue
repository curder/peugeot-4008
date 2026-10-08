<script setup lang="ts">
import { useExpanded } from "./use-expanded";

const props = withDefaults(
    defineProps<{
        /** 表头 */
        headers: string[];
        /** 表格数据，单元格支持 HTML 片段 */
        rows: string[][];
        /** 默认展示的行数，超出时展示展开/收起按钮 */
        visibleCount?: number;
        /** 使用 inline-table 布局，表格宽度自适应内容 */
        inlineTable?: boolean;
        expandText?: string;
        collapseText?: string;
    }>(),
    {
        visibleCount: 5,
        inlineTable: false,
        expandText: "点击加载更多",
        collapseText: "点击收起一些",
    }
);

const { expanded, toggle, isVisible } = useExpanded(props.visibleCount);
</script>

<template>
    <table :style="inlineTable ? 'width: 100%; display: inline-table !important' : undefined">
        <thead>
        <tr>
            <th v-for="(header, index) in headers" :key="index" v-text="header"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row, index) in rows" v-show="isVisible(index)" :key="index">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex" v-html="cell"></td>
        </tr>
        <tr v-if="rows.length > visibleCount">
            <td class="expand-cell" :colspan="headers.length">
                <button type="button" class="expand-toggle" @click="toggle">
                    {{ expanded ? collapseText : expandText }}
                </button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<style scoped>
.expand-cell {
    text-align: center;
}

.expand-toggle {
    font-weight: 700;
    color: var(--vp-c-brand-1);
    cursor: pointer;
}

.expand-toggle:hover {
    text-decoration-line: underline;
}
</style>
