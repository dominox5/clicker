<script>
export default {
  data() {
    return {
      isVisible: true,
      music: null
    };
  },
  mounted(){
    this.music = new Audio('/src/assets/audio/music.mp3')
    this.music.loop = true;
  },
  methods: {
    toggleDisplay() {
        this.music.play();
      this.isVisible = !this.isVisible;

    }
  }
};
</script>
<template>
    <div class="background" v-if="isVisible">
        <div class="hello">
            <h2>Vítejte!</h2>
            <button @click="toggleDisplay()">Začít hrát</button>
        </div>
    </div>
</template>
<style scoped>
    .background{
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hello{
        text-align: center;
        width: 20%;
        height: 20%;
        background-color: white;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
</style>