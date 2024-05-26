<script>
  import { onMounted } from 'vue'
  import Head from './components/Head.vue'
  import Inventory from './components/Inventory.vue'
  import Pick from './components/Pick.vue'
  import Price from './components/price.vue'
  import Score from './components/Score.vue'
  import Settings from './components/Settings.vue'
  import Store from './components/Store.vue'
  import { useClicker } from '/src/components/stores/store.js';

  export default {
  components: {
    Head,
    Inventory,
    Pick,
    Score,
    Settings,
    Store,
    Price
  },
  setup() {
    onMounted(() => {
      setInterval(() => {
        useClicker().random()
      }, 60000);
      setInterval(() => {
        useClicker().passivePeriod()
    }, 10000);
    });
  }
};
</script>

<template>
  <Head />
  <Price />
  <Inventory />
  <Pick />
  <Score />
  <Settings />
  <Store />
</template>

<style scoped>
  
</style>