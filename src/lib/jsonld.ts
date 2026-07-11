import { SITE } from '@/site.config';
import { getCanonicalUrl } from '@/lib/seo';

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    url: SITE.url,
    image: getCanonicalUrl('/pic/1image.jpg'),
    jobTitle: 'Forward Deployed AI Engineer',
    email: `mailto:${SITE.email}`,
    sameAs: [
      'https://github.com/emmanuellawal',
      'https://www.linkedin.com/in/emmanuel-lawal-98519718b/',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    author: { '@type': 'Person', name: SITE.author },
  };
}

export function blogPostingJsonLd(props: {
  title: string;
  description: string;
  slug: string;
  pubDate: Date;
  updatedDate?: Date;
  tags?: string[];
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: props.title,
    description: props.description,
    datePublished: props.pubDate.toISOString(),
    dateModified: (props.updatedDate ?? props.pubDate).toISOString(),
    author: { '@type': 'Person', name: SITE.author, url: SITE.url },
    publisher: { '@type': 'Person', name: SITE.author },
    mainEntityOfPage: getCanonicalUrl(`/blog/${props.slug}`),
    image: props.image ? getCanonicalUrl(props.image) : getCanonicalUrl('/pic/1image.jpg'),
    keywords: props.tags?.join(', '),
  };
}

export function creativeWorkJsonLd(props: {
  title: string;
  description: string;
  slug: string;
  url?: string | null;
  githubUrl?: string;
  tags?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: props.title,
    description: props.description,
    url: props.url ?? getCanonicalUrl(`/projects/${props.slug}`),
    codeRepository: props.githubUrl,
    programmingLanguage: props.tags,
    author: { '@type': 'Person', name: SITE.author },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

export function profilePageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: personJsonLd(),
    url: getCanonicalUrl('/about'),
  };
}
