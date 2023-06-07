"use client";

import Link from 'next/link'
import React, { useState } from 'react'

const Services = () => {
  // const [service, setService] = useState("bridal")
  let service = "bridal"
  return (
    <div>
      <h1>Services</h1>
      <Link href={`/services/${service}`} prefetch={false}>
        Go to
      </Link>
    </div>
  )
}

export default Services;
