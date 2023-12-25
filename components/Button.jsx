import React from 'react'
import Link from 'next/link'

function Button({link, text}) {
  return (
    <Link href={link} className='btn'>{text}</Link>
  )
}

export default Button