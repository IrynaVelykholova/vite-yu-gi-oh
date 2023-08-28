<script>

import { store, fetchArchetype, chosenArchetype } from "../store"

export default {
    props:{
        archetype: {
                type: Object,
                required: true
            }
    },
    data() {
        return {
            store,
            choseArchetype: "",
        }
    },
    methods: {
        chosenArchetype
    },
    mounted() {
        fetchArchetype();
    }

}

</script>

<template>
    <!-- collego la scelta alla funzione -->
    <div class="select-card">
        <select class="form-select form-select-lg mb-3" aria-label="Default select example"
        v-model="choseArchetype" 
        @change="chosenArchetype(choseArchetype)">
        
        <!-- ciclo for su archetipo -->
        <option selected 
            v-for="archetype in store.archetype">
            {{ archetype.archetype_name }}
        </option>
    </select>
    </div>
</template>

<style lang="scss" scoped>
.select-card {
    width: 350px;
}
</style>