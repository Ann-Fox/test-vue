<script setup>
import BasketItem from '../components/BasketItem.vue'
import { useCounterStore } from '../stores/counter';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const store = useCounterStore()

const totalSum = computed(() => {
let totalItem = 0

store.items.forEach((item) => {
  totalItem = totalItem + Math.round(item.price * item.qty)
})
return totalItem
})
// Откуда взяли useRouter()?
const router = useRouter()

const GoAndShow = () => {
  console.log(JSON.stringify(store.items))
  router.push('/')
}

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
     :index-product="index">
    </BasketItem>
  </div>

<div class="total">
  <p>Total</p>
  {{ totalSum }}
</div>

<div class="basket__btn">
  <button @click="GoAndShow">Берем!</button>
  <button>Пожалуй, откажусь</button>
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
