import urlJoin from 'url-join';

export const joinWithBaseUrl = (path: string): string => {
  return urlJoin(process.env.NEXT_PUBLIC_BASE_PATH || '/', path);
};
