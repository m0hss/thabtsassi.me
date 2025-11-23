/**
 * Prettier configuration for the project.
 * Includes support for Astro files via `prettier-plugin-astro`.
 */
module.exports = {
  // General style
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,

  // Enable Astro formatting
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
};
