<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>


<template>
    <div class="background" v-if="show">
        <div class="hello">
                <h2>Nastavení</h2>
            <button @click="close">Zavřít</button>
            
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