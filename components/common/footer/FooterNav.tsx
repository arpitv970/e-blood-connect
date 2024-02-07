import { IFooterNav } from '@/lib/types'
import React from 'react'

const FooterNav = ({ header, navItems }: IFooterNav) => {
  return (
    <section>
      <h4>{header}</h4>
      <ul>
        {/*
TODO: map all list items
*/}
      </ul>
    </section>
  )
}

export default FooterNav
