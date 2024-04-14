<script>
export default {
  data() {
    return {
      isAxeRotated: false
    };
  },
  methods: {
    PlusToScore() {
      this.$emit('plusToScore');
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
    <div class="ore"/>
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
}
.ore{
  height: 400px;
  width: 600px;
  background-repeat: no-repeat;
  background-image: url("../assets/images/ore.svg");
}
</style>