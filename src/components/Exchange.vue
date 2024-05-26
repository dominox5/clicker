<script>
  import { useClicker } from '/src/components/stores/store.js';
export default {
  data() {
    return {
      clicker: useClicker(),
      inputValue: 0,
      computedValue: 0,
      computedMoney: 0
    };
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    vypocet(){
      this.computedValue = this.clicker.gold - this.inputValue;
      this.computedMoney = this.inputValue * this.clicker.exchangeRate
    }
  }
};
</script>

<template>
    <div class="darker" v-if="show">
        <div class="exchange">
            <h3>Směna</h3>
            <div class="form">
                <p>Aktuální kurz</p>
                <p>1Kg to {{clicker.exchangeRate}} $</p>
                <input type="number" placeholder="Kolik zlata chcete směnit" :max="clicker.gold" v-model.number="inputValue" @input="vypocet" min="0">
                <p>Tvoje zlato po směně: {{computedValue}}</p>
                <p>Kolik dostaneš po směně: {{computedMoney}}</p>
                <button @click="clicker.exchange(inputValue)">Směnit</button>
            </div>
            <button @click="close">close</button>
        </div>
    </div>
</template>

<style scoped>
    .darker{
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        left: 0;
        z-index: 4;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .exchange{
        height: 50%;
        width: 50%;
        background-color: white;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
    .form{
      display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5px;
    }
    h3{
        font-size: 50px;
    }
</style>