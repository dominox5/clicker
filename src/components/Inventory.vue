<script>
  import InventoryItem from "./reusable/InventoryItem.vue";
  import { useClicker } from '/src/components/stores/store.js';
  import axeImage from '../assets/images/axe2.svg'
  import jackhammerImage from "../assets/images/jackhammer.png"

  export default {
  components: {
    InventoryItem
  },
  data() {
    return {
      clicker: useClicker(),
      axeImage,
      jackhammerImage
    };
  },};
</script>

<template>
  <div class="inventory">
    <h2>Inventory</h2>
    <div class="items">
      <InventoryItem name="Axe" :image="axeImage" :value="clicker.upgrades.axe"/>
      <InventoryItem name="Jackhammer" :image="jackhammerImage" :value="clicker.upgrades.jackhammer"/>
      <InventoryItem name="Worker with axe" :image="axeImage" :value="clicker.upgrades.workerWithAxe"/>
      <InventoryItem name="Worker with jackhammer" :image="jackhammerImage" :value="clicker.upgrades.workerWithJackhammer"/>
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