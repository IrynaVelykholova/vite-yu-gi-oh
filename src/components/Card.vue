<script>

export default {

    props: { //creo props della mia card da importare nella CardList
        card: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <div class="card">
        <!-- immagine -->
        <img :src="card.card_images[0].image_url" alt="...">
        <div class="card-body">
            <!-- titolo -->
            <h5 class="card-title text-white text-center">{{ card.name }}</h5>
            <!-- archetipo -->
            <p class="card-text text-center">{{ card.archetype }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {
    border-radius: 0;
    background-color: #D9863D;
    .card-body{
        height: 100px;
    }
}
</style>  