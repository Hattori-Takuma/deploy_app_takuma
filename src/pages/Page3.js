import React, { useEffect, useContext } from 'react'
import { GET_DATA } from '../action/index'
import { fetchGetData } from '../apis/index'
import { Store } from '../store/index'

const Page3 = () => {
  const { globalState, setGlobalState } = useContext(Store)
  useEffect(() => {
    fetchGetData().then(res => {
      setGlobalState({
        type: GET_DATA,
        data: res.data
      })
    })
  }, [])
  console.log(globalState)
  return (
    <div>
      <h1>level8</h1>
      <div >
        {
          globalState.data

        }
      </div>
    </div>
  )






}

export default Page3