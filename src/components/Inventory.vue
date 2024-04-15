<script>
  import InventoryItem from "./reusable/InventoryItem.vue";

  export default {
  components: {
    InventoryItem
  }};
</script>

<template>
  <div class="inventory">
    <h2>Inventory</h2>
    <div class="items">
      <InventoryItem name="Axe" image="src/assets/images/axe2.svg" :value="0"/>
      <InventoryItem name="Jackhammer" image="src/assets/images/jackhammer.png" :value="0"/>
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