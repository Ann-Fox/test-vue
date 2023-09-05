import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const items = ref([])

  function add(item) {
    items.value.push(item)
  }

  function removeProduct(index) {
    items.value.splice(index, 1)
  }

  return { items, add, removeProduct }
})
