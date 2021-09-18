import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
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
      <h1>Level8,9</h1>







      <Table striped bordered hover variant="dark">
        <thead>
          <tr>

            <th><h2>タイトル一覧</h2></th>

          </tr>
        </thead>
        <tbody>
          {rep.map((d, index) => {
            return (
              <tr key={index}>

                <th>
                  <a href={d.url}>
                    <ul>{d.title}</ul>
                  </a>
                </th>


              </tr>
            )
          }
          )
          }
        </tbody>
      </Table>




    </div>

  )






}

export default Page3