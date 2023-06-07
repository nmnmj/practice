"use client"

import React, { useState } from 'react'
import styles from './contact.module.css'

const Contact = () => {
  let [status, setStatus] = useState(false)
  
  const handlesubmit = async (e)=>{
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const adata = {
      mobile: data.get("mobile"),
      email: data.get("email"),
      query: data.get("query")
    }
    console.log(adata)
    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {"Content_Type": "application/json"},
        body: JSON.stringify(adata)
      })
      if(response.status === 201){
        console.log(response.data)
        setStatus(true)
        alert(response.data)
      }
    } catch (error) {
      alert(error)
    }


  }
  return (
    <div>
      <form onSubmit={handlesubmit} className={styles.section}>
        Mobile No.
        <label htmlFor="mobile">
          <input type="number" name="mobile" id="mobile" placeholder='Enter you Number'  required />
          {/* <input type="text" pattern="[0-9]*" title="Please enter only numbers" required /> */}

        </label>
        Email
        <label htmlFor="email">
          <input type="email" name="email" id="email" placeholder='Enter you Email'  required />
        </label>
        Query
        <label htmlFor="query">
          <textarea name="query" id="query" cols="30" rows="10" required >
          </textarea>
        </label>
        {
          status && <p style={{color: "green"}}>Sent Query Successfully</p>
        }
        <button>Contact</button>
      </form>
    </div>
  )
}

export default Contact