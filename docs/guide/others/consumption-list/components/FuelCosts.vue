<script setup>
import FuelCosts from './fuel-costs'
import {ref} from 'vue';

const header_keys = Object.keys(FuelCosts.headers)
const hide = ref(false)

const loadMore = () => {
  hide.value = true
}
const loadLess = () => {
  hide.value = false
}
</script>
<template>
  <table>
    <thead>
    <tr>
      <th v-for="(header, key) in FuelCosts.headers" :key="key" v-text="header"></th>
    </tr>
    </thead>
    <tbody>
    <template v-for="(data, key) in FuelCosts.detail" :key="key">
      <tr v-if="!hide && key < 10">
        <td v-html="data[header_keys[0]]"></td>
        <td v-html="data[header_keys[1]]"></td>
        <td v-html="data[header_keys[2]]"></td>
        <td v-html="data[header_keys[3]]"></td>
        <td v-html="data[header_keys[4]]"></td>
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
      <td colspan="5" class="text-center">
        <a @click="loadMore" href="javascript:void(0);">加载更多...</a>
      </td>
    </tr>
    <tr v-if="hide">
      <td colspan="5" class="text-center">
        <a @click="loadLess" href="javascript:void(0);">收起一些...</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<style>
.text-center {
  text-align: center;
}
</style>