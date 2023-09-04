<script setup>
// import WelcomeItem from './WelcomeItem.vue'
// import { storeToRefs } from 'pinia';
// import { ref } from 'vue';
// import { useCounterStore } from '../stores/counter'

const props = defineProps ({
nameProduct: {
  type: String,
  required: true
},
priceProduct: {
  type: Number,
  required: true
}
})

// const store = useCounterStore()



</script>

<template>
<section class="product-item">
  <div class="name-price">
    <div>{{ nameProduct }}</div>
    <div>{{ priceProduct }}</div>
  </div>
  <div class="action">
    <button>calc</button>
    <input type="number">
    <button>+</button>
    <button>-</button>
    <button>basket</button>
  </div>
</section>
</template>

<style scoped>
input {
  max-width: 50px;
}
.product-item {
  display: flex;
  gap: 20px;
}
.name-price {
  display: flex;
  gap: 20px;
}
</style>
