import nextra from 'nextra';

const isProd = process.env.NODE_ENV === 'production';

const withNextra = nextra({
  defaultShowCopyCode: true,
  staticImage: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

/** @type {import('next').NextConfig} */
export default withNextra({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  reactStrictMode: true,
});
