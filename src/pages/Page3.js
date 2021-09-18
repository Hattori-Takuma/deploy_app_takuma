import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import { GET_DATA } from '../action/index'
//import { fetchGetData } from '../apis/index'
//import { Store } from '../store/index'

const Page3 = () => {


  const [rep, setRep] = useState([])

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {

    const res = await axios.get('https://qiita.com/api/v2/items')
    console.log(res.data)
    setRep(res.data)

  }
  console.log(rep)


  return (
    <div>




      <h3>タイトル一覧</h3>

      {rep.map((d, index) => {
        return (
          <tr key={index}>
            <a href={d.url}>
              <ul>{d.title}</ul>
            </a>


          </tr>
        )
      }
      )
      }




    </div>

  )






}

export default Page3