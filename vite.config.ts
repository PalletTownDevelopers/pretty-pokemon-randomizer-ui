import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            "/v1/pretty-pokemon-randomizer/generate-rom": "http://localhost:30000"
        },
    },
})
