// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import unocss from 'unocss/astro';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://thabtsassi.netlify.app',
  integrations: [mdx(), unocss({ injectReset: true }), sitemap()],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            class: 'not-prose heading-link',
          },
        },
      ],
    ],
  },
});
