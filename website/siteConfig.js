/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const siteConfig = {
  title: 'Browzwear API',
  tagline: 'DISCOVER BROWZWEAR’S OPEN PLATFORM.',
  url: 'https://RaayaBw.github.io', // Replace USERNAME with your GitHub username.
  baseUrl: '/bw-api-docs/', // The name of your GitHub project.
  projectName: 'bw-api-docs',
  organizationName: 'RaayaBw',
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'Introduction/Introduction', label: 'Docs'},
    {href: "https://gitlab.com/browzwear/share/open-platform/client-api", label: "", external: true },
    {search: false},
  ],

  /* path to images for header/footer */
  headerIcon: 'img/header_logo.png',
  footerIcon: 'img/header_logo.png',
  favicon: 'img/header_logo.png',

  /* Colors for website */
  colors: {
    primaryColor: 'black',
    secondaryColor: '#f5af18',
  },

  /* Custom fonts for website */

  fonts: {
    myFont: [
      'Open Sans'
    ],
  },
  // algolia: {
  //   apiKey: '720d68a9a99bae2f0ac49c90d78d68ad',
  //   indexName: 'test_API_DOCS',
  //   placeholder: ' '
  // },
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Browzwear`,

  usePrism: ['cs', 'cpp', 'json','py'],
  highlight: {
    theme: 'solarized-dark'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
