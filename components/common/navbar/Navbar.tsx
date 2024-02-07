import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import EBloodConnectLogo from '@/components/common/EBloodConnectLogo'

const Navbar = () => {
  return (
    <nav>

      <EBloodConnectLogo
        height={100}
        width={100}
      />
      <ul>
        <li>
          <Link href={'/about'}>About Us</Link>
          <Link href={'/features'}>Features</Link>
          <Link href={'/host-blood-camp'}>Host a Blood Camp</Link>
          <Link href={'/partners'}>Our Partners</Link>
          <Link href={'/contact'}>Contact Us</Link>
          <Link href={'/req-demo'}>
            <Button>
              Request For Demo
            </Button>
          </Link>
        </li>
      </ul>
    </nav >
  )
}

export default Navbar
