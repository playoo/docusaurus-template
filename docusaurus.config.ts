import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '我的收藏夹',
  tagline: '仅仅是个人收藏而已！',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'playoo', // Usually your GitHub org/user name.
  projectName: 'docusaurus-template', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/playoo/docusaurus-template/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/playoo/docusaurus-template/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    algolia: {
      // Algolia 提供的应用 ID
      appId: '9UPXRRL56T',

      //  公开 API 密钥：提交它没有危险
      apiKey: 'c6a52b5ffbe371e1af2eb067cf663d5f',

      indexName: 'staucuscus',

      // 可选：见下文
      contextualSearch: true,

      // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
      externalUrlRegex: 'external\\.com|domain\\.com',

      // 可选：替换 Algolia 的部分网址。 在使用相同搜索索引支持多个不同 baseUrl 的部署时非常有用。 你可以在 “from” 中使用正则表达式或字符串。 例如，localhost:3000 和 myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // 或者使用正则表达式：/\/docs\//
        to: '/docs/',
      },

      // 可选：Algolia 搜索参数
      searchParameters: {},

      // 可选：默认启用的搜索页的路径（传递 `false` 以禁用它）
      searchPagePath: 'search',

      // 可选：是否启用Docsearch 的 insights 功能（默认为 `false`）
      insights: false,

      // 可选：你是否想使用新的询问 AI特性（默认为未定义）
      askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

      //... 其他 Algolia 参数
    },
    navbar: {
      title: '我的收藏夹',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📚收藏夹',
        },
        {to: '/blog', label: '📝日志薄', position: 'left'},
        {to: '/suisuinian', label: '📜碎碎念', position: 'left'},
        {to: '/ssn', label: '💬碎碎念', position: 'left'},
        {to: '/about', label: '🏷️关于', position: 'right'},
        {
          href: 'https://github.com/playoo/docusaurus-template',
          label: '✏️GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
          // title: 'Docs',
          // items: [
            // {
              // label: '收藏',
              // to: '/docs/intro',
            // },
          // ],
        // },
        // {
          // title: 'Community',
          // items: [
            // {
              // label: 'Stack Overflow',
              // href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
              // label: 'Discord',
              // href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
              // label: 'Twitter',
              // href: 'https://twitter.com/docusaurus',
            // },
          // ],
        // },
        // {
          // title: 'More',
          // items: [
            // {
              // label: '日志',
              // to: '/blog',
            // },
            // {
              // label: 'GitHub',
              // href: 'https://github.com/playoo/docusaurus-template',
            // },
          // ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

