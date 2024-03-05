<script setup lang="ts">
import fuelCosts from './fuel-costs'
import {ref} from 'vue';

const header_keys = Object.keys(fuelCosts.headers)

const hide = ref(false)
const loadMore = () => hide.value = true
const loadLess = () => hide.value = false

</script>
<template>
  <h2>油费</h2>
  <blockquote>
    <p>当前公里数：<strong><code>{{ fuelCosts.total_kilometers }}</code></strong> 公里。</p>
    <br/>
    <p>
      消耗总油量：<strong><code>{{ fuelCosts.total_oil_volume }}</code></strong> 升，
      平均油价：<strong><code>{{ fuelCosts.price_avg }}</code></strong> 元，
      油费合计：<strong><code>{{ fuelCosts.total_amount }}</code></strong> 元。
    </p>
  </blockquote>

  <table style="width: 100%; display: inline-table !important;">
    <thead>
    <tr>
      <th v-for="(header, key) in fuelCosts.headers" :key="key" v-text="header"></th>
    </tr>
    </thead>
    <tbody>
    <template v-for="(data, key) in fuelCosts.details" :key="key">
      <tr v-if="!hide && key < fuelCosts.load_item_length">
        <td v-text="data[header_keys[0]]"></td>
        <td v-text="data[header_keys[1]]"></td>
        <td v-text="data[header_keys[2]]"></td>
        <td v-html="data[header_keys[3]]"></td>
        <td v-text="data[header_keys[4]]"></td>
      </tr>
      <tr v-if="hide">
        <td v-html="data[header_keys[0]]"></td>
        <td v-html="data[header_keys[1]]"></td>
        <td v-html="data[header_keys[2]]"></td>
        <td v-html="data[header_keys[3]]"></td>
        <td v-html="data[header_keys[4]]"></td>
      </tr>
    </template>
    <tr v-if="!hide">
      <td :colspan="header_keys.length" class="text-center">
        <a @click="loadMore" href="javascript:void(0);">加载更多...</a>
      </td>
    </tr>
    <tr v-if="hide">
      <td :colspan="header_keys.length" class="text-center">
        <a @click="loadLess" href="javascript:void(0);">收起一些...</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<style scoped>
.text-center {
  text-align: center;
}
</style>