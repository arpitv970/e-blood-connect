export interface IFooterNav {
  header: string,
  navItems: InavItem[]
}

interface InavItem {
  title: string,
  route: string,
}
