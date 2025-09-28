<script setup>

import { useGameStore } from '@/stores/game-data';
import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()
const gamedata = useGameStore()

const props = defineProps({
    image: String,
    target: String
})

let iconimage = props.image || "/assets/placeholder.png"

</script>

<template>
    <div id="root" @click="userdata.buyImprovements(target)">
        <img :src="iconimage" alt="upgrade icon">

        <div id="text">
            <div>
                <slot></slot>
            </div>
            <div>{{ userdata.improvementsprices[target] }}</div>
        </div>

        <div id="count">
            {{ userdata.savedata.improvements[target] }}/{{ gamedata.maximprovementscount[target] }}
        </div>
    </div>
</template>

<style scoped>
#root {
    background-color: rgb(233, 233, 233);

    box-shadow: 0px 5px 8px -5px rgb(81, 88, 88);

    height: 55px;

    margin: 10px;
    padding: 5px;

    /* border: 1px solid black; */
    border-radius: 5px;

    display: flex;
    gap: 10px;
}

#root>img {
    height: 100%;

    /* background-color: rebeccapurple; */
}

#text {
    /* background-color: rebeccapurple; */
}

#count {
    /* background-color: rebeccapurple; */
    margin-left: auto;
}
</style>