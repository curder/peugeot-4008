<script setup>
import fuelCosts from "./fuel-costs";

const total_kilometers = fuelCosts.total_kilometers;
const total_oil_volume = fuelCosts.detail.map((data) => data.oil_volume).reduce((prev, curr) => prev + curr).toFixed(2);
const prices = fuelCosts.detail.map((data) => data.unit_price);
const price_avg = (prices.reduce(((prev, curr) => prev + curr)) / prices.length).toFixed(2);
const total_amount = fuelCosts.detail.map((data) => Number(data.amount)).reduce((prev, curr) => prev + curr).toFixed(2);
</script>

<template>
  <h2>油费</h2>
  <blockquote>
    <p>当前公里数：<strong>{{ total_kilometers }}</strong> 公里。</p>
    <br />
    <p>
      消耗总油量：<strong>{{ total_oil_volume }}</strong>升，
      平均油价：<strong>{{ price_avg }}</strong>元，
      油费合计：<strong>{{ total_amount }}</strong> 元。
    </p>
  </blockquote>
</template>
