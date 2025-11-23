// The file `/home/m0/PROJECTs/JS/sassi-portfolio/uno.config.ts` is being initialized with UnoCSS configuration.

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetWebFonts,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
// File-system icon loader to expose local SVGs in `src/assets/icons`
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';

// UnoCSS configuration: Uno + Attributify + Icons + Web Fonts (Inter).
// Also provide a set of `shortcuts` that map the previous project classnames
// to utility combinations so the current markup continues to work while you
// migrate fully to utility-first classes.
export default defineConfig({
  presets: [
    // Minimal core ruleset (recommended)
    presetMini(),
    // Attributify mode for expressive attributes like `bg="blue-500"`
    presetAttributify(),
    // Icons support with dynamic Iconify collections to keep bundle small
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
      collections: {
        local: FileSystemIconLoader("./src/assets/icons"),
        carbon: () => import('@iconify-json/carbon').then((i) => i.default as any),
        ri: () => import('@iconify-json/ri').then((i) => i.default as any),
        devicon: () => import('@iconify-json/devicon').then((i) => i.default as any),
        // Local SVG collection: put any `.svg` inside `src/assets/icons/` and reference with `i-local:filename`.
        // Example: `analytics-pie-2.svg` => class="i-local:analytics-pie-2".
        // We normalize stroke fill color tokens (#191919) to currentColor so text color utilities affect the icon.
      },
    }),
    // Web fonts (Google) - loads Inter
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:300,400,600,700,800',
      },
    }),
    // Typography utilities (optional)
    presetTypography({
      cssExtend: {
        'h1,h2,h3,h4,h5,h6': {
          color: 'black',
          'font-weight': '800',
        },
        'html.dark h1, html.dark h2, html.dark h3, html.dark h4, html.dark h5, html.dark h6': {
          color: 'white',
        },
        strong: {
          color: 'black',
        },
        'html.dark strong': {
          color: 'white',
        },
        // Ensure paragraphs and blockquotes inherit consistent light/dark text colors
        p: {
          color: 'rgba(0,0,0,0.75)'
        },
        'html.dark p': {
          color: 'rgba(255,255,255,0.75)'
        },
        blockquote: {
          color: 'rgba(0,0,0,0.75)'
        },
        // Remove decorative quotation marks added by typography preset
        'blockquote::before': {
          content: 'none',
        },
        'blockquote::after': {
          content: 'none',
        },
        'blockquote p:first-of-type::before': {
          content: 'none',
        },
        'blockquote p:last-of-type::after': {
          content: 'none',
        },
        'html.dark blockquote': {
          color: 'rgba(255,255,255,0.75)'
        },
        a: {
          color: 'black',
          'text-decoration': 'none',
          transition: 'border-bottom-color 300ms ease-in-out',
          'border-bottom': '0.5px solid',
          'border-bottom-color': '#55555542',
        },
        'a:hover': {
          'border-bottom-color': '#000',
        },
        'html.dark a': {
          color: 'white',
          'border-bottom-color': '#cdcdcd42',
        },
        'html.dark a:hover': {
          'border-bottom-color': '#fff',
        },
      },
    }),
  ],

  shortcuts: {
    'nav-header': 'w-full h-20 px-7 overflow-hidden flex justify-between sticky top-0',
    'btn-link':
      'decoration-none flex items-center gap-1 rd-2 color-inherit transition-opacity-400 opacity-60 hover:opacity-100',
    separator: 'b-1 b-solid b-dark/10 dark:b-light/10',
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
  safelist: ['dark'],
});
