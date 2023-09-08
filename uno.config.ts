// uno.config.ts
import {defineConfig, presetAttributify, presetTypography} from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
    presets: [
        presetAttributify(),
        presetUno(),
        presetTypography(),
    ],
})