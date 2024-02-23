<script>
export default {
  data() {
    return {
      isAxeRotated: false
    };
  },
  methods: {
    rotateAxe() {
      this.isAxeRotated = !this.isAxeRotated;
    }
  }
};
</script>

<template>
  <div class="pick">
    <img class="ore" src="../assets/images/ore.svg" alt="" />
    <img
      class="axe"
      :style="{ transform: isAxeRotated ? 'rotate(-20deg)' : 'rotate(90deg)' }"
      @mousedown="rotateAxe"
      @mouseup="rotateAxe"
      src="../assets/images/axe.svg"
      alt=""
    />
  </div>
</template>

<style scoped>
.pick {
  grid-column: 2;
  grid-row: 3 / 7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.axe {
  height: 250px;
  position: relative;
  right: 100px;
  transform: rotate(110deg);
  transition: transform 0.08s ease-in-out;
}
.ore{
  height: 250px;
}
</style>