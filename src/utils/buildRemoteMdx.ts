import { buildDynamicMDX, buildDynamicMeta } from 'nextra/remote';

interface MDXFiles {
  branch: string;
  docsPath: string;
  filePaths: string[];
  nestedMeta: any;
  repo: string;
  user: string;
}

export const buildRemoteMdx = async (
  json: MDXFiles,
  locale: 'zh' | 'en',
  params: { slug?: string[] },
) => {
  const { user, repo, branch, docsPath, filePaths } = json;

  const path = params.slug?.join('/') ?? 'index';

  const foundPath = filePaths.find((filePath) => {
    if (locale === 'zh') return filePath.replace(/\.zh-CN.mdx?/, '') === path;

    return filePath.replace(/\.mdx?/, '') === path;
  });

  // console.log('foundPath:', foundPath);
  //如果本地开发时请求慢，可以使用下面这个地址
  // const url = `https://raw.staticdn.net/${user}/${repo}/${branch}/${docsPath}${foundPath}`;

  const url = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${docsPath}${foundPath}`;

  const response = await fetch(url);

  const data = await response.text();

  const { __nextra_pageMap } = await buildDynamicMeta(locale);
  const dynamicMdx = await buildDynamicMDX(data, { defaultShowCopyCode: true });

  return {
    props: { __nextra_pageMap, ...dynamicMdx },
    // 每半天重新请求一次（单位：秒）
    revalidate: 12 * 3600,
  };
};
