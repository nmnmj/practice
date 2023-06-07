import React from 'react'

const page =  ({params}) => {
   setTimeout(() => {
    
  }, 3000);
  console.log(params+" are the params")
    const {service} = params  
  return (
    <div>
        <h1>
            This is the service :- {service}
        </h1>
    </div>
  )
}

export default page
