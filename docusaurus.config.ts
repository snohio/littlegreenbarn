import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Little Green Barn',
  tagline: 'Your Friend in Green Energy Citizenship',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://littlegreenbarn.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'snohio', // Usually your GitHub org/user name.
  projectName: 'littlegreenbarn', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
            'https://github.com/snohio/littlegreenbarn/tree/main/resources/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/snohio/littlegreenbarn/tree/main/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/littlegreenbarnproject.jpg',
    navbar: {
      title: 'Little Green Barn',
      logo: {
        alt: 'LGB Logo',
        src: 'img/littlegreenbarnproject.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Resources',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/snohio/littlegreenbarn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Resources',
              to: '/docs/about-resources',
            },
            {
              label: 'About',
              to: '/about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '/r Green Energy ',
              href: 'https://www.reddit.com/r/GreenEnergy/',
            },
            {
              label: 'Winter Park Community Engagement',
              href: 'https://cityofwinterpark.org/departments/natural-resources-sustainability/sustainability-division/community-engagement-green-economy/',
            },
            {
              label: '#greenenergy on X',
              href: 'https://twitter.com/search?q=%23GreenEnergy',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Miles Butler<br>Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
