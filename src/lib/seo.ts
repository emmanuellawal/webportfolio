import { SITE } from '@/site.config';

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  noindex?: boolean;
}

export function getCanonicalUrl(path = ''): string {
  const base = SITE.url.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized === '/' ? '' : normalized}`;
}

export function buildSEO({
  title,
  description = SITE.description,
  path = '',
  ogImage = '/pic/1image.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
  noindex = false,
}: SEOProps) {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.title;
  const canonical = getCanonicalUrl(path);
  const imageUrl = ogImage.startsWith('http') ? ogImage : getCanonicalUrl(ogImage);

  return {
    title: pageTitle,
    description,
    canonical,
    imageUrl,
    type,
    publishedTime,
    modifiedTime,
    tags,
    noindex,
  };
}
