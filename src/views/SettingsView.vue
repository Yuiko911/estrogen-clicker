<script setup>

import { ref } from "vue";

const username = ref('')

</script>

<template>
    <h2>Settings</h2>

    <input placeholder="username" type="text" v-model="username"> <br>
    <p>{{ username }}</p>
    <button>Save</button>
    <button>Load</button>
</template>

<style scoped>
button {
    margin: 5px 5px 5px 0px;
    background-color: aquamarine;
}
</style>