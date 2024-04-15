<template>
  <div class="item">
      <img v-bind:src="image" alt="">
      <div class="text">
        <h3>{{name}}</h3>
        <p>{{feature}}</p>
      </div>
      <p class="cost">{{cost}}$</p>
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    feature: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
  .item{
    width: 90%;
    margin-top: 20px;
    height: 100px;
    display: flex;
    background-color: #f7bc4d;
    border-radius: 20px;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  }
  .text{
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  img{
    height: 95%;
    
  }
  .cost{
    font-size: 40px;
  }
</style>