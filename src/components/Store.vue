<script>
  import Item from './reusable/Item.vue'
  import { useClicker } from '/src/components/stores/store.js';

  export default {
  components: {
    Item
  },
  data() {
    return {
      clicker: useClicker()
    };
  },
};
</script>

<template>
  <div class="shop">
    <h2>Store</h2>
    <div class="items">
    <Item name="Axe" feature="+1 to every click" :cost=50 image="src/assets/images/axe2.svg" @click="this.clicker.plusAxe()"/>
    <Item name="Jackhammer" feature="+10 to every click" :cost=200 image="src/assets/images/jackhammer.png" @click="this.clicker.plusJackhammer()"/>
    <Item name="Worker with axe" feature="+1 every 10 second" :cost=500 image="src/assets/images/axe2.svg" @click="this.clicker.plusWorkerWithAxe()"/>
    <Item name="Worker with jackhammer" feature="+10 every 10 second" :cost=5000 image="src/assets/images/jackhammer.png" @click="this.clicker.plusWorkerWithJackhammer()"/>
    </div>
  </div>
</template>

<style scoped>
  .shop{
    grid-column: 3;
    grid-row: 2 / 9;
    text-align: center;
    order: 2;
  }
  h2{
    font-size: 50px;
  }
  .items{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
</style>