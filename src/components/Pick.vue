<script>
import { useClicker } from '/src/components/stores/store.js';
export default {
  data() {
    return {
      isAxeRotated: false,
      clicker: useClicker()
    };
  },
  methods: {
    PlusToScore() {
      this.clicker.balance++;
      localStorage.setItem('clicker_balance', this.clicker.balance.toString())
      this.isAxeRotated = !this.isAxeRotated;
      setTimeout(() => {
        this.isAxeRotated = !this.isAxeRotated;
      }, 100);
    }
  }
};
</script>

<template>
  <div class="pick" @mousedown="PlusToScore">
    
    <img src="../assets/images/ore.svg" class="ore" alt="">
    <div
      class="axe"
      :style="{ transform: isAxeRotated ? 'rotate(-10deg)' : 'rotate(90deg)' }"
    />
  </div>
</template>

<style scoped>
.pick {
  order: 0;
  grid-column: 2;
  grid-row: 3 / 7;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.axe {
  height: 250px;
  width: 250px;
  position: relative;
  right: 250px;
  transform: rotate(100deg);
  transition: transform 0.08s;
  transform-origin: bottom right;
  background-image: url("../assets/images/axe.svg");
  background-repeat: no-repeat;
}
.ore{
  height: 90%;
  width: 600px;
  /*background-repeat: no-repeat;
  background-image: url("../assets/images/ore.svg");*/
}
@media (max-width: 785px) {
  .axe{
    display: none;
  }
  .ore{
  transition: transform 0.3s ease; /* Přechod pro animaci změny transformace */
  }
  .ore:active{
    transform: scale(1.2); /* Zvětší velikost na 120 % při kliknutí */
  }
}
</style>