<script>
import axios from 'axios';
import Card from './Card.vue'


export default{
    //componenti
    components: {
    Card,
    },
    data() {
        return {
            Cards:[],//aray vuoto per mettere le mie card
            pagInfo: {},
            currentPage: 1,
        };
    },
    methods:{  
        fetchCards(){
        const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"  //salvo in una costante url

        axios.get(url).then((response) => {       //chiamata axios
                                                    
            this.Cards = response.data.data;//variabile nel data
            this.pagInfo = response.data.info;
        });
        },
    },
mounted() {
    this.fetchCards(); //invoco funzione
},

};
</script>

<template>
<div class="row row-col-6 row-col-lg-5  g-4">
    <!-- ciclo for, metto singleCard per non fare confusione -->
    <div class="col" 
        v-for="singleCard in Cards" :key="singleCard.id"> 
    <!-- la mia singola card -->
    <Card :card="singleCard"></Card>
    </div>
</div>
</template>

<style lang="scss" scoped></style>