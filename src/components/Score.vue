<script>
  export default {
  data() {
    return {
      
    };
  },
  props: ['score']
  
};
</script>

<template>
  <div class="Score">
    <p>Your score: {{score}}</p>
  </div>
</template>

<style scoped>
  .Score{
    grid-row: 7 / 9;
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Score p{
    font-size: 80px;
  }
</style>