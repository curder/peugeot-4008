<script setup lang="ts">
import fuelCosts from "./fuel-costs";
import { ref } from "vue";

const hide = ref<boolean>(false);
const header_keys = Object.keys(fuelCosts.headers);
const loadMore = () => (hide.value = true);
const loadLess = () => (hide.value = false);
</script>
<template>
  <h2 id="fuel-costs" tabindex="-1">
    燃油费用<a href="#fuel-costs" class="header-anchor"></a>
  </h2>
  <blockquote>
    <p>
      当前公里数：
      <code>
        {{ fuelCosts.total_kilometers }}
      </code>
      公里。 总油耗：
      <code>
        {{ fuelCosts.oil_consumption }}
      </code>
      升/百公里。
    </p>
    <br />
    <p>
      消耗总油量：
      <strong>
        {{ fuelCosts.total_oil_volume }}
      </strong>
      升， 平均油价：
      <code>
        {{ fuelCosts.price_avg }}
      </code>
      元， 油费合计：<code>{{ fuelCosts.total_amount }}</code> 元， 加油总次数：
      <code>{{ fuelCosts.total_number }}</code
      >次。
    </p>
  </blockquote>

  <table style="width: 100%; display: inline-table !important">
    <thead>
      <tr>
        <th
          v-for="(header, key) in fuelCosts.headers"
          :key="key"
          v-text="header"
        ></th>
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
      <tr>
        <td class="text-center" :colspan="header_keys.length">
          <button
            v-if="!hide"
            class="font-bold text-blue-500 hover:underline cursor-pointer"
            @click="loadMore"
          >
            点击加载更多
          </button>
          <button
            v-else
            class="font-bold text-blue-500 hover:underline cursor-pointer"
            @click="loadLess"
          >
            点击收起一些
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
  color: var(--vp-c-brand-1);
}

.hover\:underline:hover {
  text-decoration-line: underline;
}
</style>
