<script setup>
import CatalogItem from '../components/CatalogItem.vue'

const products = [
{
    name: 'Продукт 1',
    price: 333.33
  },
  {
    name: 'Продукт 2',
    price: 444.44
  },
  {
    name: 'Продукт 3',
    price: 555.55
  },
  {
    name: 'Продукт 4',
    price: 222.22
  },
  {
    name: 'Продукт 5',
    price: 111.11
  }
]
</script>

<template>
  <main>
    <section class="head">
      <h3>Name</h3>
      <h3>Price</h3>
      <h3>Action</h3>
    </section>
    <section class="catalog">
      <CatalogItem v-for="product in products" :key="product.id" :name-product = 'product.name' :price-product="product.price">
      </CatalogItem>
    </section>
  </main>
</template>

<style>
.head {
  display: flex;
  gap: 50px;
}
</style>
