import React from 'react'
import { useParams } from
  'react-router-dom'

const PageB = () => {

  const params = useParams();
  console.log(params)

  return (

    <div>
      <div>PageB</div>
      <h3>・{params.params}</h3>
    </div>
  )
}







export default PageB