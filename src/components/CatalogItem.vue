<script setup>
// import WelcomeItem from './WelcomeItem.vue'
// import { storeToRefs } from 'pinia';
import { ref } from 'vue';
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

const qty = ref(0)
const numCalc = ref([1,2,3,4,5,6,7,8,9])
const showCalc  = ref(false)
</script>

<template>
<section class="product-item">

  <div class="name-price">
    <div>{{ nameProduct }}</div>
    <div>{{ priceProduct }}</div>
  </div>

  <div class="action">

    <button class="calc" @click="showCalc = !showCalc">calc</button>

      <div class="calc__show" v-if="showCalc">
        <button v-for="num in numCalc" :key="num" @click="qty = qty*10+num">
          {{ num }}
        </button>
        <button class="del" @click="qty=Math.trunc(qty/10)">del</button>
      </div>


    <input type="number" v-model="qty">
    <button @click="qty++">+</button>
    <button @click="qty--">-</button>
    <button :disabled="qty <= 0">basket</button>
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

.calc {
  position: relative;
}
.calc__show {
  position: absolute;
  padding: 15px;
  z-index: 1000;
  background: #00bd7e;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

}
</style>
