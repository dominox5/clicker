<script>
  import Item from './reusable/Item.vue'

  export default {
  components: {
    Item
  }
};
</script>

<template>
  <div class="shop">
    <h2>Store</h2>
    <div class="items">
    <Item name="Axe" feature="+1 to every click" :cost=50 image="src/assets/images/axe2.svg"/>
    <Item name="Jackhammer" feature="+10 to every click" :cost=200 image="src/assets/images/jackhammer.png"/>
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