<script setup>

import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()

const props = defineProps({
    image: String,
    target: String
})

const imaghe = "/blahaj.png"

</script>

<template>
    <div id="root" @click="userdata.buyUpgrade(target)">
        <img :src="image" alt="upgrade icon">

        <div id="text">
            <div>
                <slot></slot>
            </div>
            <div>{{ userdata.upgradesprices[target] }}</div>
        </div>

        <div id="count">
            {{ userdata.savedata.upgrades[target] }}x
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