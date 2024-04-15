<script setup>
  
</script>

<template>
  <div class="price">
    <img class="gold" src="../assets/images/gold-ingots.svg" alt="">
    <div class="container">
        <p>1Kg to 70 000$</p>
        <img class="arrows" src="../assets/images/change-arrows.svg" alt="">
        <p>70 000$ to 1Kg</p>
    </div>
    <img class="dollars" src="../assets/images/dollars.svg" alt="">
  </div>
</template>

<style scoped>
  .price{
    grid-column: 1;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    order: 3;
  }
  .gold{
    height: 120px;
  }
  .arrows{
    height: 50px;
  }
  .dollars{
    height: 80px;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>