<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
        <div class="card h-100 "> 
          <!--   immagine :scr incollo dal link -->
          <img :src="card.card_images[0].image_url" class="card-img" alt="..."> 
          <div class="card-body">  
            <!-- nome -->
            <h3 class="card-title text-center">{{card.name}}</h3>

            <!-- tipo -->
            <p class="card-text text-center">{{card.archetype}}</p>
          </div>
      </div>
</template>

<style lang="scss" scoped>
.card {
  .card-body{
  background-color: #D9863D;
  }
  .card-img{
  min-width: 200px;
  }
  .card-title{
  color: white;
  font-size: 18px;
  }
  .card-title{
  color: white;
  font-size: 18px;
  }
}
</style>