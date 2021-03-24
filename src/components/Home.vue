<template>
    <div>Home</div>
    <p>Username from store:{{ userName }}</p>
    <br />

    <!-- 
    <input type="text" v-model="newUserName"> 
    <button @click="saveUserName">Send To Store</button> 
    -->

    <span class="p-float-label p-input-icon-left">
         <i class="pi pi-user" />
        <InputText type="text" v-model="newUserName" class="p-inputtext-sm" />
        <label for="username">New User Name</label>
    </span>
    <br>

    <Button label="Submit &amp; About" class="p-button-sm p-button-info" @click="saveUserName" />
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const userName = computed(() => {
    return store.state.user.userName;
});

const newUserName = ref('');

function saveUserName() {
    store.dispatch('saveUserName', newUserName.value);
    newUserName.value = '';
    router.push('/about');
}
</script>

<style></style>
