import { getCollection } from 'astro:content';
import projects from '@/data/projects.json';
import profile from '@/data/profile.json';
import { SITE } from '@/site.config';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const body = `# ${SITE.name}

> ${profile.role} — ${profile.tagline}

## About
- [Home](${SITE.url}/)
- [About](${SITE.url}/about/)
- [Projects](${SITE.url}/projects/)
- [Blog](${SITE.url}/blog/)

## Profile
- Name: ${profile.name}
- Role: ${profile.role}
- Location: ${profile.location}
- Contact: ${SITE.url}/about/#contact
- Resume: ${SITE.url}/resume.txt
- GitHub: ${profile.social.github}
- LinkedIn: ${profile.social.linkedin}

## Projects
${projects.map((p) => `- [${p.title}](${SITE.url}/projects/${p.slug}/): ${p.description}`).join('\n')}

## Blog Posts
${posts.map((p) => `- [${p.data.title}](${SITE.url}/blog/${p.slug}/): ${p.data.description}`).join('\n')}

## Optional
- [RSS Feed](${SITE.url}/rss.xml)
- [Sitemap](${SITE.url}/sitemap-index.xml)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
