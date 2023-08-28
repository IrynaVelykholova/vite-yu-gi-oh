<script>
import Card from "./Card.vue";
import CardFilter from "./CardFilter.vue";
import { store, fetchCards } from "../store";

export default {
    components: {
        Card,
        CardFilter,
    },

    data() {
        return {
            store,
        }
    },

    mounted() {
        fetchCards()
    },
}
</script>

<template>
    <div class="container py-5 bg-light">
        <CardFilter :archetype="store.archetype"></CardFilter>
        <CardHeader></CardHeader>
        <div class="row gy-3">
            <div class="col-sm-1 col-md-2 col-lg-3" v-for="singleCard in store.card">
                <Card :card="singleCard" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>  