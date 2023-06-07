import Link from 'next/link'
import React from 'react'

const notfound = () => {
  return (
    <div>
        <h1>Page Not Found</h1>
        <Link href="/">Go to Home Page</Link>
    </div>
  )
}

export default notfound