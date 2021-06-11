<template>
    <div>
        <h1>Home page</h1>
        <p>Name in store is: {{ name }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const name = computed(() => {
    return store.state.user.name
})
</script>

<style></style>
