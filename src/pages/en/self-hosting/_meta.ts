import { DynamicMeta } from 'nextra';

export default (): DynamicMeta => ({
  'platform/': {
    title: 'Deployment Platform',
    items: {
      'vercel': 'Deploy with Vercel',
      'docker': 'Deploy with Docker',
      'docker-compose': 'Deploy with Docker Compose',
      'netlify': 'Deploy with Netlify',
      'zeabur': 'Deploy with Zeabur',
      'sealos': 'Deploy with SealOS',
      'repocloud': 'Deploy with RepoCloud',
    },
    type: 'folder',
  },
  'examples/': {
    title: 'General Deployment Usage',
    items: {
      'azure-openai': 'Integrating with Azure OpenAI',
      'ollama': 'Integrating with Ollama',
    },
    type: 'folder',
  },
  'advanced/': {
    title: 'Advanced',
    items: {
      'upstream-sync': 'Auto Sync With Latest',
      'authentication': 'Authentication',
      'analytics': 'Data Analytics',
    },
    type: 'folder',
  },
  'environment-variables': 'Environment Variables',
  'environment-variables/': {
    title: 'Environment Variables',
    items: {
      'basic': 'Basic',
      'model-provider': 'Model Provider',
    },
    type: 'folder',
  },
  'faq/': {
    title: 'FAQ',
    items: {
      'no-v1-suffix': 'Empty Response with `OPENAI_PROXY_URL` Environment Variable',
      'proxy-with-unable-to-verify-leaf-signature':
        '`UNABLE_TO_VERIFY_LEAF_SIGNATURE` Error When Using Proxy',
    },
    type: 'folder',
  },
});
