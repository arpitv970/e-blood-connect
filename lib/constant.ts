import { IFooterNav, IhCItem } from "./types";

const TOP_LINKS: IFooterNav = {
  header: 'Top Links',
  navItems: [
    {
      title: 'Privacy Policy',
      route: '/'
    },
    {
      title: 'Terms & Conditions',
      route: '/'
    },
    {
      title: 'FAQs',
      route: '/'
    },
    {
      title: 'Blogs',
      route: '/'
    }
  ]
}

const QUICK_LINKS: IFooterNav = {
  header: 'Quick Links',
  navItems: [
    {
      title: 'Privacy Policy',
      route: '/'
    },
    {
      title: 'Terms & Conditions',
      route: '/'
    },
    {
      title: 'FAQs',
      route: '/'
    },
    {
      title: 'Blogs',
      route: '/'
    }
  ]
}

export const FOOTER_NAV: IFooterNav[] = [
  TOP_LINKS,
  QUICK_LINKS
]

export const CAROUSEL_ITEM: IhCItem[] = [
  {
    title: 'Title 1',
    subTitle: 'sub title 1',
    quote: 'this is a quote',
    cta: {
      title: 'Request Demo',
      url: '/'
    }
  },
  {
    title: 'Title 2',
    subTitle: 'sub title 2',
  },
  {
    title: 'Title 3',
    subTitle: 'sub title 3',
    quote: 'this is a quote'
  },

]
