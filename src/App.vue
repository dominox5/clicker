<script>
  import { onMounted, ref} from 'vue'
  import Head from './components/Head.vue'
  import Inventory from './components/Inventory.vue'
  import Pick from './components/Pick.vue'
  import Price from './components/price.vue'
  import Score from './components/Score.vue'
  import Settings from './components/Settings.vue'
  import Store from './components/Store.vue'
  import Hello from './components/Hello.vue'
  import { useClicker } from '/src/components/stores/store.js';

  export default {
  components: {
    Head,
    Inventory,
    Pick,
    Score,
    Settings,
    Store,
    Price,
    Hello
  },
  setup() {
    const pick = new Audio('/src/assets/audio/Pick3.mp3')
    onMounted(() => {
      setInterval(() => {
        useClicker().random()
      }, 60000);
      setInterval(() => {
        useClicker().passivePeriod()
        pick.play();
      }, 10000);
    });

    return {
        pick
      };
  }
};
</script>

<template>
  <Head />
  <Price />
  <Inventory />
  <Pick />
  <Score />
  <Settings />
  <Store />
  <Hello />
</template>

<style scoped>
  
</style>