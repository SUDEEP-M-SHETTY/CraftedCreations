import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef } from 'react'

const HolopinImage = ({ @sudeepmshetty }, ref) => (
  <a ref={ref}>
    <Image
      src={`https://holopin.io/api/user/board?user=${sudeepmshetty}`}
      alt={`@${sudeepmshetty}'s Holopin board`}
      width={2428}
      height={764}
    />
  </a>
)

const HolopinRef = forwardRef(HolopinImage)

const Holopin = ({ sudeepmshetty }) => (
  <div>
    <Link href={`https://holopin.io/@${sudeepmshetty}`}>
      <HolopinRef user={sudeepmshetty} />
    </Link>
  </div>
)
