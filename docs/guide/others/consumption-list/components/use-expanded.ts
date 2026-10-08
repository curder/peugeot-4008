import { ref, type Ref } from "vue";

export interface Expanded {
    expanded: Ref<boolean>;
    toggle: () => void;
    isVisible: (index: number) => boolean;
}

/**
 * 表格「展开/收起」状态，默认只展示前 visibleCount 行。
 */
export function useExpanded(visibleCount: number): Expanded {
    const expanded = ref<boolean>(false);

    return {
        expanded,
        toggle: () => (expanded.value = !expanded.value),
        isVisible: (index: number) => expanded.value || index < visibleCount,
    };
}
