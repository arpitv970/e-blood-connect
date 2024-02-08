import { IFooterNav } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

const FooterNav = ({ header, navItems }: IFooterNav) => {
  return (
    <section>
      <h4>{header}</h4>
      <ul className="footer-links">
        {
          navItems.map((navItem, key) => (
            <li key={key} className="links_styling">
              <Link href={navItem.route}>
                {navItem.title}
              </Link>
            </li>
          )
          )
        }
      </ul>

    </section>
  )
}

export default FooterNav
