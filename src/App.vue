<script>
  import Head from './components/Head.vue'
  import Inventory from './components/Inventory.vue'
  import Pick from './components/Pick.vue'
  import Score from './components/Score.vue'
  import Settings from './components/Settings.vue'
  import Store from './components/Store.vue'

  export default {
  components: {
    Head,
    Inventory,
    Pick,
    Score,
    Settings,
    Store
  },
  data(){
      score: 0,
    };
  },
  methods:{
    plusToScore(){
      this.score += 1;
      console.log(this.score)
    }
  }
};
</script>

<template>
  <Head />
  <Inventory />
  <Pick @plusToScore="plusToScore" />
  <Score :score="score"/>
  <Settings />
  <Store />
</template>

<style scoped>
  
</style>