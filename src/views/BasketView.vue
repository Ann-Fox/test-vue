<script setup>
import BasketItem from '../components/BasketItem.vue'
import { useCounterStore } from '../stores/counter';

const store = useCounterStore()
</script>

<template>

  <div class="about">
    <section class="head">
      <h3>Name</h3>
      <h3>Price</h3>
      <h3>Action</h3>
      <h3>Summa</h3>
    </section>

    <BasketItem v-for="(item, index) in store.items"
     :key="item.name"
     :name-product="item.name"
     :price-product="item.price"
     :qty-product="item.qty"
     :index-product="index"></BasketItem>
  </div>

</template>

<style>
.head {
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr) 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
}
</style>
