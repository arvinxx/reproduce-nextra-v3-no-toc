import { DocsThemeConfig } from 'nextra-theme-docs';


const config: DocsThemeConfig = {
  chat: {
    link: 'https://discord.gg/AYFPHvv2jT',
  },
  docsRepositoryBase: 'https://github.com/lobehub/lobe-chat/tree/main/docs',
  footer: {
    content: `MIT 2023-${new Date().getFullYear()} © LobeHub, LLC`,
  },
  i18n: [
    { locale: 'en', name: 'English' },
    { locale: 'zh', name: '中文' },
  ],
  project: {
    link: 'https://github.com/lobehub/lobe-chat',
  },
};

export default config;
