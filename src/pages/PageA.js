import React from 'react'
import { useParams } from
  'react-router-dom'
import { Link } from "react-router-dom";

const PageA = () => {



  const params = useParams();
  console.log(params)
  return (

    <div>
      <h1>
        Level11
          <Link to="PageB/hello">PageB</Link>
      </h1>

      {/* <h2>・{params}！</h2> */}

      {/* {params} */}
      <h3>・{params.params}</h3>
    </div>


  )
}






export default PageA