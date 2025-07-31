import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  safelist: [
    // Iconos de UI
    'i-carbon-menu',
    'i-carbon-close',
    'i-carbon-chevron-down',
    'i-carbon-search',
    'i-carbon-user-avatar',
    'i-carbon-share',
    'i-carbon-link',
    // Iconos Sociales (unificados a Carbon)
    'i-carbon-logo-facebook',
    'i-carbon-logo-instagram',
    'i-carbon-logo-x',
    'i-carbon-logo-tiktok',
    'i-carbon-logo-youtube',
    'i-carbon-logo-whatsapp',
  ],
})
