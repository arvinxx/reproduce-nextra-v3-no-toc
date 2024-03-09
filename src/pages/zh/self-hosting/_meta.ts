import { DynamicMeta } from 'nextra';

export default (): DynamicMeta => ({
  'platform/': {
    title: '选择部署平台',
    items: {
      'vercel': '使用 Vercel 部署',
      'docker': '使用 Docker 部署',
      'docker-compose': '使用 Docker Compose 部署',
      'netlify': '使用 Netlify 部署',
      'sealos': '使用 SealOS 部署',
      'zeabur': '使用 Zeabur 部署',
      'repocloud': '使用 RepoCloud 部署',
    },
    type: 'folder',
  },
  'examples/': {
    title: '常见部署示例',
    items: {
      'azure-openai': '与 Azure OpenAI 集成',
      'ollama': '与 Ollama 集成',
    },
    type: 'folder',
  },
  'advanced/': {
    title: '进阶使用',
    items: {
      'upstream-sync': '自动同步更新',
      'authentication': '身份验证',
      'analytics': '数据分析集成',
    },
    type: 'folder',
  },
  'environment-variables': '环境变量',
  'environment-variables/': {
    title: '环境变量',
    items: {
      'basic': '基础变量',
      'model-provider': '模型服务商',
    },
    type: 'folder',
  },
  'faq/': {
    title: '常见问题',
    items: {
      'no-v1-suffix': '配置 `OPENAI_PROXY_URL` 环境变量但返回值为空',
      'proxy-with-unable-to-verify-leaf-signature':
        '使用代理时报 `UNABLE_TO_VERIFY_LEAF_SIGNATURE` 错误',
    },
    type: 'folder',
  },
});
