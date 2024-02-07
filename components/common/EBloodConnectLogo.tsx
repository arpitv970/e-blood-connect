import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PropsType {
  height: number,
  width: number
}

const EBloodConnectLogo = ({ height, width }: PropsType) => {
  return (
    <Link href={'/'}>
      <Image
        src={'/assets/ebloodconnect-logo.svg'}
        alt='EBloodConnect Logo'
        height={height}
        width={width}
      />
    </Link>

  )
}

export default EBloodConnectLogo
