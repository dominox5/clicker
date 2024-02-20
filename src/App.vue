<script>
  import Head from './components/Head.vue'
  import Inventory from './components/Inventory.vue'
  import Pick from './components/Pick.vue'
  import Score from './components/Score.vue'
  import Settings from './components/Settings.vue'
  import Store from './components/Store.vue'

  export default {
  components: {
    Head,
    Inventory,
    Pick,
    Score,
    Settings,
    Store
  }
};
</script>

<template>
  <Head />
  <Inventory />
  <Pick />
  <Score />
  <Settings />
  <Store />
</template>

<style scoped>
  
</style>