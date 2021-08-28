import axios from 'axios'

const API = axios.create({
  baseURL: 'https://qiita.com/api/v2/items'
})




export const fetchGetData = async () => {
  return await API.get()
}