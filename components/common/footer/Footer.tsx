import React from 'react'
import EBloodConnectLogo from '@/components/common/EBloodConnectLogo'
import { FOOTER_NAV } from '@/lib/constant'
import FooterNav from './FooterNav'
const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className="footer-logo">
          <EBloodConnectLogo
            height={500}
            width={500}
          />
        </div>

        {/* Footer Navigation*/}
        <div className="footer-navigation">
          {
            FOOTER_NAV.map((nav, key) => (
              <FooterNav
                key={key}
                header={nav.header}
                navItems={nav.navItems}
              />
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer
