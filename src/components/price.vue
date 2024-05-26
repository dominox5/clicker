<script>
import Modal from "./Exchange.vue";
import { useClicker } from '/src/components/stores/store.js';

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      clicker: useClicker()
    };
  }
};
</script>

<template>
  <div class="price" @click="showModal = true">
    <img class="gold" src="../assets/images/gold-ingots.svg" alt="">
    <div class="container">
        <p>1Kg to {{clicker.exchangeRate}}$</p>
        <img class="arrows" src="../assets/images/change-arrows.svg" alt="">
    </div>
    <img class="dollars" src="../assets/images/dollars.svg" alt="">
  </div>
  <Modal :show="showModal" @close="showModal = false"></Modal>
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
    cursor: pointer;
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