<script>
import TheHeader from './components/TheHeader.vue';
import CardList from './components/CardList.vue';

export default {
  components: {
    TheHeader,
    CardList,
  }
}
</script>

<template>
  <TheHeader></TheHeader>

  <main class="">
    <div class="container">
      
    </div>

    <div class="container">
      <div class="row bg-white">
        <div class="container-cards">

          <CardList></CardList>
          
        </div>
      </div>
    </div>
  </main>


</template>

<style lang="scss" scoped>
main {
  background-color: #D9863D;
}
</style>