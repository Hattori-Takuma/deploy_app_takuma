import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useParams} from 'react-router-dom'

const Page3 = () => {
  const params = useParams()
  console.log("🚀 ~ file: Page4.js ~ line 7 ~ Page3 ~ params", params)
  return (
    <div>
      <h1>Level11</h1>
      <h2>{params.param}</h2>
    </div>
  )
}

export default Page3