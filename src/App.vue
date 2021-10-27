<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import HeaderBar from "./components/HeaderBar.vue"
</script>

<template>
    <header-bar />
    <div class="mx-auto px-4">
        <router-view />
    </div>
</template>
