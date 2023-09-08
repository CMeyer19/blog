import {defineConfig} from 'astro/config';
import UnoCSS from 'unocss/astro'
import preact from "@astrojs/preact";
import {presetWind} from "@unocss/preset-wind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        preact(),
        UnoCSS({
            presets: [
                presetWind(),
                /* more presets */
            ],
            safelist: [
                /* this you can use to exclude utilities from purge */
            ],
        }),
    ]
});


