<script>
import { useClicker } from '/src/components/stores/store.js';
  export default {
  data() {
    return {
      clicker: useClicker()
    };
  },
  
};
</script>

<template>
  <div class="Score">
    <div class="flex">
      <img src="../assets/images/gold-ingots.svg" alt="">
      <p>{{clicker.gold}} Kg</p>
    </div>
    <div class="flex">
      <img src="../assets/images/dollars.svg" alt="">
      <p>{{clicker.money}} $</p>
    </div>
  </div>
</template>

<style scoped>
  .Score{
    grid-row: 7 / 9;
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Score p{
    font-size: 80px;
  }
  img{
    height: 80px;
  }
  .flex{
    display: flex;
    align-items: center;
    gap: 30px;
  }
</style>