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

export interface IState {
  id: number,
  country_id: number,
  name: string
}

export interface ICity {
  id: number,
  name: string,
  state_id: number
}

export interface IAddress {
  states: IState[],
  cities: ICity[]
}
