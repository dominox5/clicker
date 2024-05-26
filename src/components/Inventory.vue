<script>
  import InventoryItem from "./reusable/InventoryItem.vue";
  import { useClicker } from '/src/components/stores/store.js';

  export default {
  components: {
    InventoryItem
  },
  data() {
    return {
      clicker: useClicker()
    };
  },};
</script>

<template>
  <div class="inventory">
    <h2>Inventory</h2>
    <div class="items">
      <InventoryItem name="Axe" image="src/assets/images/axe2.svg" :value="clicker.upgrades.axe"/>
      <InventoryItem name="Jackhammer" image="src/assets/images/jackhammer.png" :value="clicker.upgrades.jackhammer"/>
      <InventoryItem name="Axe" image="src/assets/images/axe2.svg" :value="clicker.upgrades.workerWithAxe"/>
      <InventoryItem name="Jackhammer" image="src/assets/images/jackhammer.png" :value="clicker.upgrades.workerWithJackhammer"/>
    </div>
  </div>
</template>

<style scoped>
  .inventory{
    grid-column: 1;
    grid-row: 2 / 9;
    text-align: center;
    order: 1;
  }
  h2{
    font-size: 50px;
  }
  .items{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>