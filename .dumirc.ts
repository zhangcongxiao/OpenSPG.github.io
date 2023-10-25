import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    socialLinks: {
      github: 'https://github.com/OpenSPG/openspg',
    },
    footer: false,
    nav: {
      'zh-CN': [{ title: '快速开始', link: '/Guide' }],
      'en-US': [{ title: 'Quick Start', link: '/en/Guide' }],
    },
  },
  favicons: [
    'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*JiTDRaNWTQkAAAAAAAAAAAAADtmcAQ/original',
  ],
  analytics: {
    ga_v2: 'G-7XLKHE56WW',
  },
  metas: [
    {
      name: 'keywords',
      content:
        'knowledge graph, 知识图谱, 可编程知识图谱, SPG, Semantic-Enhanced Programming Graph',
    },
    {
      name: 'description',
      content: '语义增强可编程知识图谱SPG',
    },
  ],
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  logo: 'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*D5uYQpLS8dsAAAAAAAAAAAAADtmcAQ/original',
});
