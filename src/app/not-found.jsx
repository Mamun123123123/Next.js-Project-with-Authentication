import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
      <h2>This Page is Not Found</h2>
      <Link href={'/'}>
      <button>Back</button></Link>
    </div>
  )
}

export default notFound
