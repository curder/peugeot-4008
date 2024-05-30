<script setup lang="ts">
import autoAccessories from "./auto-accessories";
import {ref} from 'vue';

const header_keys = Object.keys(autoAccessories.headers)

const hide = ref(false)
const loadMore = () => hide.value = true
const loadLess = () => hide.value = false
</script>
<template>
  <h2 id="汽车用品" tabindex="-1">汽车用品 <a href="#汽车用品" class="header-anchor"></a></h2>

  <blockquote>
    当前总计汽车用品费：<strong>{{ autoAccessories.total_price }}</strong> 元。
  </blockquote>

  <table>
    <thead>
    <tr>
      <th v-for="(header, key) in autoAccessories.headers" :key="key" v-text="header"></th>
    </tr>
    </thead>
    <tbody>
    <template v-for="(data, key) in autoAccessories.detail" :key="key">
      <tr v-if="!hide && key < autoAccessories.load_item_length">
        <td v-html="data[header_keys[0]]"></td>
        <td v-html="data[header_keys[1]]"></td>
        <td v-html="data[header_keys[2]]"></td>
        <td v-html="data[header_keys[3]]"></td>
      </tr>
      <tr v-if="hide">
        <td v-html="data[header_keys[0]]"></td>
        <td v-html="data[header_keys[1]]"></td>
        <td v-html="data[header_keys[2]]"></td>
        <td v-html="data[header_keys[3]]"></td>
      </tr>
    </template>
    <tr>
      <td class="text-center" :colspan="header_keys.length">
        <button v-if="!hide" class="font-bold text-blue-500 hover:underline cursor-pointer" @click="loadMore">
          点击加载更多
        </button>
        <button v-else class="font-bold text-blue-500 hover:underline cursor-pointer" @click="loadLess">点击收起一些
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<style scoped>
.text-center {
  text-align: center;
}

.cursor-pointer {
  cursor: pointer;
}

.font-bold {
  font-weight: 700;
}

.text-blue-500 {
  --tw-text-opacity: 1;
  color: var(--vp-c-brand-1)
}

.hover\:underline:hover {
  text-decoration-line: underline;
}
</style>