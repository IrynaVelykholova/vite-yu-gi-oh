<script>
import TheHeader from './components/TheHeader.vue';
import CardsList from './components/CardsList.vue';

export default {
  components: {
    TheHeader,
    CardsList,
  }
}
</script>

<template>
  <TheHeader></TheHeader>

  <main class="">
    <div class="container">
      <div class="dropdown pt-4 pb-4">
        <button class="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">Alien</button>
        
      </div>
    </div>

    <div class="container">
      <div class="row bg-white">
        <div class="container-cards">

          <CardsList></CardsList>
          
        </div>
      </div>
    </div>
  </main>


</template>

<style lang="scss" scoped>
main {
  background-color: #d48f38;
  .btn {
    background-color: white;
  }
}

</style>