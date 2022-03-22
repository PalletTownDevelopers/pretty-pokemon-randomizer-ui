<script setup lang="ts">
import HeaderBar from "./components/HeaderBar.vue"</script>

<template>
    <header-bar />
    <div class="mx-auto px-4">
        <router-view />
    </div>
</template>
