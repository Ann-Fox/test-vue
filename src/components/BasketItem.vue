<script setup>
import { useCounterStore } from '../stores/counter';

defineProps({
 nameProduct: {
  type: String,
  required: true
 },
 priceProduct: {
  type: Number,
  required: true
 },
 qtyProduct: {
  type: Number,
  required: true
 },
 indexProduct: {
  type: Number,
  required: true,
 }
})

const store = useCounterStore()
</script>

<template>
<div class="basket__item">
  <div>{{ nameProduct }}</div>
  <div>{{ priceProduct }}</div>
  <div>{{ qtyProduct }}</div>
  <div>{{ priceProduct*qtyProduct }}
  <button @click="() => store.removeProduct(indexProduct)">del</button>
</div>
</div>
</template>

<style scoped>
.basket__item {
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr) 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
}
</style>
