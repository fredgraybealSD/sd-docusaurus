import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/sd-docusaurus/code-snippets',
    component: ComponentCreator('/sd-docusaurus/code-snippets', 'd53'),
    exact: true
  },
  {
    path: '/sd-docusaurus/markdown-page',
    component: ComponentCreator('/sd-docusaurus/markdown-page', 'da3'),
    exact: true
  },
  {
    path: '/sd-docusaurus/playground',
    component: ComponentCreator('/sd-docusaurus/playground', 'f4e'),
    exact: true
  },
  {
    path: '/sd-docusaurus/docs',
    component: ComponentCreator('/sd-docusaurus/docs', 'ac5'),
    routes: [
      {
        path: '/sd-docusaurus/docs',
        component: ComponentCreator('/sd-docusaurus/docs', '4a7'),
        routes: [
          {
            path: '/sd-docusaurus/docs',
            component: ComponentCreator('/sd-docusaurus/docs', 'd2a'),
            routes: [
              {
                path: '/sd-docusaurus/docs/category/baseline-assessment',
                component: ComponentCreator('/sd-docusaurus/docs/category/baseline-assessment', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sd-docusaurus/docs/intro',
                component: ComponentCreator('/sd-docusaurus/docs/intro', '7cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sd-docusaurus/docs/performance-basics/Accessibility',
                component: ComponentCreator('/sd-docusaurus/docs/performance-basics/Accessibility', '394'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sd-docusaurus/docs/performance-basics/Best-Practices',
                component: ComponentCreator('/sd-docusaurus/docs/performance-basics/Best-Practices', '0e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sd-docusaurus/docs/performance-basics/Performance',
                component: ComponentCreator('/sd-docusaurus/docs/performance-basics/Performance', '5ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sd-docusaurus/docs/performance-basics/SEO',
                component: ComponentCreator('/sd-docusaurus/docs/performance-basics/SEO', 'e8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/sd-docusaurus/',
    component: ComponentCreator('/sd-docusaurus/', 'e12'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
