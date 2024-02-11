import { IFeatureCard, IFooterNav, IhCItem } from "./types";

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

export const FEATURES: IFeatureCard[] = [
  {
    title: 'ABDM Compliant Interoperable System',
    desc: `ABDM (Ayushman Bharat Digital Mission, previously known as National Digital Health Mission) Compliant Interoperable System: eBlood Connect is designed to be fully compliant with the Ayushman Bharat Digital...`,
    url: 'features',
    Icon: '/assets/logos/default-icon.svg',
    IconHover: '/assets/logos/default-icon-hover.svg'
  },
  {
    title: 'Roles and Permissions-Based Access',
    desc: 'The system implements a robust user management module that provides various role-based access controls. Administrators can assign different roles (e.g., blood bank staff, doctors, tability throughout the system).',
    url: 'features',
    Icon: '/assets/logos/default-icon.svg',
    IconHover: '/assets/logos/default-icon-hover.svg'
  },
  {
    title: 'Blood Component Inventory System',
    desc: `eBlood Connect includes a comprehensive blood component inventory management system. It allows blood
                banks to track not only whole blood units but also specific blood components such as red blood cells...`,
    url: 'features',
    Icon: '/assets/logos/default-icon.svg',
    IconHover: '/assets/logos/default-icon-hover.svg'
  },
  {
    title: 'AI-Based Predictive Analytics',
    desc: `The system utilizes advanced Artificial Intelligence (AI) algorithms and machine learning models to
                analyze historical data and real-time blood usage patterns. AI-based predictive analytics assists in
                forecasting future...`,
    url: 'features',
    Icon: '/assets/logos/default-icon.svg',
    IconHover: '/assets/logos/default-icon-hover.svg'
  },
  {
    title: 'Find the Right Donor in Real-time',
    desc: `With its real-time donor search functionality, eBlood Connect enables medical professionals to quickly
                locate compatible donors based on blood type and other critical parameters. This feature proves
                invaluable du...`,
    url: 'features',
    Icon: '/assets/logos/default-icon.svg',
    IconHover: '/assets/logos/default-icon-hover.svg'
  },
  {
    title: 'Blood Donation Camp Management',
    desc: `eBlood Connect incorporates a dedicated module for managing blood donation camps. It allows organizers
                to schedule and coordinate donation camps efficiently. The system assists in donor registration,
                appointment...`,
    url: 'features',
    Icon: '/assets/logos/default-icon.svg',
    IconHover: '/assets/logos/default-icon-hover.svg'
  },
]

export const BLOOD_TYPE = {
  AB_NEGATIVE: 'AB-Ve',
  AB_POSITIVE: 'AB+Ve',

  A_POSITIVE: 'A+Ve',
  A_NEGATIVE: 'A-Ve',

  B_POSITIVE: 'B+Ve',
  B_NEGATIVE: 'B-Ve',

  O_NEGATIVE: 'O-Ve',
  O_POSITIVE: 'O+Ve',
}

export const BLOOD_COMPONENT = {
  WBCPD: 'Whole Blood (CPD)',
  WBCPD1: 'Whole Blood (CPDA-1)',
  PRBC: 'Packed Red Blood Cells',
  FFP: 'Fresh Frozen Plasma',
  SDP: 'Single Donor Platelet',
  CRYP: 'Cryoprecipitate',
  PLASMA: 'Plasma',
  PC: 'Platelet Concentrate',
  CPP: 'Cryo Poor Plasma',
  RDP: 'Random Donor Platelets',
  PAS: 'Platelets additive solutions',
}
