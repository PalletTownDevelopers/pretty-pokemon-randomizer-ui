<script lang="ts" setup>
    import {reactive} from "vue"
    import {RomParams} from "../interfaces/RomParams"
    import {RandomizerApi} from "../api/randomizer.service"

    const romParams = reactive<RomParams>({
        seed: "",
        debug: false,
        spriteYellow: false
    })

    const generateSeed = async () => {
        romParams.seed = Math.floor(Math.random() * 100000)
    }

    const generateRom = async () => {
        if (!romParams.seed) {
            console.log("Seed is not set")
            return
        }
        if (typeof romParams.seed === "string") {
            romParams.seed = parseInt(romParams.seed)
        }
        try {
            romParams.timestamp = new Date().getTime()
            const api = new RandomizerApi()
            await api.generateRom(romParams)
        } catch (error) {
            console.log("error")
        }
    }
</script>
<template>
    <h1 class="text-center text-4xl mt-5 mb-5">
        Randomize Pokemon Red/Blue
    </h1>
    <div class="mx-auto w-6/12">
        <form>
            <fieldset class="mb-5">
                <legend class="text-3xl mb-2">
                    Options
                </legend>
                <div class="p-1">
                    <label class="w-1/5 inline-flex">Seed: </label>
                    <input
                        v-model.number.trim="romParams.seed"
                        class="p-0.5 border-gray-400 border-2 rounded"
                    >
                    <button
                        class="ml-4 bg-blue-500 text-white p-1 px-2 rounded"
                        @click="generateSeed"
                    >
                        Generate random seed
                    </button>
                </div>
                <div class="p-1">
                    <label class="w-1/5 inline-flex">Debug: </label>
                    <input
                        v-model="romParams.debug"
                        type="checkbox"
                    >
                </div>
                <div class="p-1">
                    <label class="w-1/5 inline-flex">Sprite Yellow: </label>
                    <input
                        v-model="romParams.spriteYellow"
                        type="checkbox"
                    >
                </div>
            </fieldset>
            <button
                :disabled="!romParams.seed"
                class="btn"
                @click="generateRom"
            >
                Generate Rom
            </button>
        </form>
    </div>
</template>
