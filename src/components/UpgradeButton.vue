<script setup>
import { useGameStore } from "@/stores/game-data";
import { useUserStore } from "@/stores/user-data";
import { ref } from "vue";

import UpgradeTooltip from "./UpgradeTooltip.vue";

const userdata = useUserStore();
const gamedata = useGameStore();

const props = defineProps({
    image: String,
    target: String,
});

let iconimage = props.image || "/assets/placeholder.png";

const isTooltipShown = ref(false);
const isTooltipTop = props.target == 'shark'

</script>

<template>
    <div id="root" @click="userdata.buyUpgrade(target)" @mouseover="isTooltipShown = true" @mouseleave="isTooltipShown = false">
        <UpgradeTooltip :target="target" id="tooltip" :class="{ 'tooltip-shown': isTooltipShown, 'tooltip-top': isTooltipTop }"></UpgradeTooltip>
        <img :src="iconimage" alt="upgrade icon" />

        <div id="text">
            <div>
                {{ gamedata.upgradesnames[target] }}
            </div>
            <div>{{ userdata.upgradesprices[target] }}</div>
        </div>

        <div id="count">{{ userdata.savedata.upgrades[target] }}x</div>
    </div>
</template>

<style scoped>
#root {
    background-color: rgb(233, 233, 233);

    box-shadow: 0px 5px 8px -5px rgb(81, 88, 88);

    height: 55px;

    margin: 10px;
    padding: 5px;

    position: relative;

    /* border: 1px solid black; */
    border-radius: 5px;

    display: flex;
    gap: 10px;
}

#root>img {
    height: 100%;

    /* background-color: rebeccapurple; */
}

#count {
    /* background-color: rebeccapurple; */
    margin-left: auto;
}

#tooltip {
    visibility: hidden;
    position: absolute;
    top: -15%;
    left: 0;

    transform: translateY(-100%);

	z-index: 999;
}

.tooltip-shown {
    visibility: visible !important;
}

.tooltip-top {
	/* bottom: -10%; */
    left: 0;

    transform: translateY(100%) !important;
}
</style>
