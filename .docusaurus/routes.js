import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/sd-docusaurus/playground',
    component: ComponentCreator('/sd-docusaurus/playground', 'f4e'),
    exact: true
  },
  {
    path: '/sd-docusaurus/docs',
    component: ComponentCreator('/sd-docusaurus/docs', '1f4'),
    routes: [
      {
        path: '/sd-docusaurus/docs',
        component: ComponentCreator('/sd-docusaurus/docs', 'fcb'),
        routes: [
          {
            path: '/sd-docusaurus/docs',
            component: ComponentCreator('/sd-docusaurus/docs', 'eda'),
            routes: [
              {
                path: '/sd-docusaurus/docs/intro',
                component: ComponentCreator('/sd-docusaurus/docs/intro', '7cd'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
