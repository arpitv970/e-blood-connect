export interface IFooterNav {
  header: string,
  navItems: InavItem[]
}

interface InavItem {
  title: string,
  route: string,
}

export interface IhCItem {
  title: string,
  subTitle: string,
  quote?: string,
  cta?: IcTA,
  index?: number
}

interface IcTA {
  title: string,
  url: string
}


export interface IFeatureCard {
  Icon: string,
  IconHover: string,
  title: string,
  desc: string,
  url: string
}
