// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Form-Data Documentation',
  tagline: 'A backend for all your forms',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://form-data.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/pages/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'legal',
        path: 'legal',
        routeBasePath: 'legal',
        editUrl: 'https://crowdin.com/project/docusaurus-v2/${locale}',
        remarkPlugins: [],
        sidebarPath: require.resolve('./sidebarsLegal.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/',
          editUrl: 'https://github.com/formdatacom/formdata-docs',
        },
        blog: false /* {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/formdatacom/form-data-docs',
        } */ ,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/formdata-social-card.png',
      navbar: {
        title: 'Form-Data documentation',
        hideOnScroll: true,
        logo: {
          alt: 'Form-Data Logo',
          src: 'img/formdata-logo-calig.svg',
          srcDark: 'img/formdata-logo-calig-dark.svg',
          width: 44,
          height: 44,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
            {
                to: '/legal/terms-of-use',
                label: 'Legal',
                position: 'left',
                activeBaseRegex: `/legal/`,
            },
          // {
          //   type: 'doc',
          //   docId: 'legal/terms-of-use',
          //   position: 'right',
          //   label: 'Legal',
          // },
          // {
          //   type: 'docSidebar',
          //   position: 'right',
          //   sidebarId: 'legalSidebar',
          //   label: 'Legal',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/formdatacom/formdata-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'Quick start',
                to: '/docs/quick-start',
              },
              {
                label: 'Community portal',
                href: 'https://community.form-data.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/formdatacom/formdata-docs',
              },
              {
                label: 'Contact',
                href: 'https://form-data.com/contact',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Form-Data, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
