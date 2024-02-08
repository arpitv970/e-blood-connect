import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import EBloodConnectLogo from '@/components/common/EBloodConnectLogo'

const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <div className='grid-row-1'>
          <nav>
            <div className='w-[100%] flex flex-wrap items-center justify-between mx-auto md:p-4'>
              <EBloodConnectLogo
                height={100}
                width={100}
              />
              <ul className='flex justify-between items-center w-[70%]'>
                <li>
                  <Link href={'/about'}>About Us</Link>
                </li>
                <li>
                  <Link href={'/features'}>Features</Link>
                </li>
                <li>
                  <Link href={'/host-blood-camp'}>Host a Blood Camp</Link>
                </li>
                <li>
                  <Link href={'/partners'}>Our Partners</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Contact Us</Link>
                </li>
                <li>
                  <Link href={'/req-demo'}>
                    <Button>
                      Request For Demo
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav >
        </div>
      </div>
    </header>
  )
}

export default Navbar
