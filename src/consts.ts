import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 't4mpr - CTF Writeups & Security Research',
  description:
    'A collection of CTF writeups, walkthroughs, and security research covering forensics, cryptography, web security, and more.',
  href: 'https://t4mpr.github.io',
  author: 't4mpr',
  locale: 'en-US',
  featuredPostCount: 3,
  postsPerPage: 20,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/t4mpr',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/smosillo',
    label: 'LinkedIn',
  },
  {
    href: 'https://discordapp.com/users/780642255508865044',
    label: 'Discord',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Discord: 'lucide:message-circle',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
