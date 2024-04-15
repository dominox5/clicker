<script setup>
  
</script>

<template>
  <div class="settings">
    <img src="../assets/images/gear-solid.svg" alt="">
    <img src="../assets/images/user-solid.svg" alt="">
  </div>
</template>

<style scoped>
  .settings{
    grid-column: 3;
    grid-row: 1;
    display: flex;
    flex-direction: row-reverse;
    order: 4;
  }
  img{
    cursor: pointer;
    height: 50px;
    margin-top: 10px;
    margin-right: 20px;
  }
</style>