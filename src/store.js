import axios from "axios";
import { reactive } from 'vue';

export const store = reactive({
    card: [], //array delle mie card
    archetype: [], //array archetipo
    choseArchetype: "", //scelta archetipo vuota
});

export function fetchCards() {
    const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"; //url card

    axios.get(url).then((response) => {
        store.card = response.data.data;
    });
}

export function fetchArchetype() {
    const url = "https://db.ygoprodeck.com/api/v7/archetypes.php"; //url archetipo

    axios.get(url).then((response) => {
        store.archetype = response.data;
    });
}

export function chosenArchetype(choseArchetype){
    if( choseArchetype === "" || choseArchetype === undefined){ //se è vuoto allora undefined
        fetchCards() //invoco la funzione della carta
    } else { //se scelgo 
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${choseArchetype}&num=20&offset=0` //url della carta scelta
        axios.get(url).then((response)=>{
            store.card = response.data.data;
        })
    }
}