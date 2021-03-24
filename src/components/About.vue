<template>

    <!--
    <h1>About {{userName}}</h1>
    -->

    <Card>
        <template #title> About {{ userName }} </template>
        <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
        </template>
    </Card>
    
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Card from 'primevue/card';

const store = useStore();

const userName = computed(() => {
    return store.state.user.userName;
});
</script>

<style></style>
