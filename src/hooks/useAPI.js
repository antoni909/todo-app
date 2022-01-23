import { useState, useEffect } from 'react'
import axios from 'axios'

const def = 'https://jsonplaceholder.typicode.com/posts/1'

export const useAPI = (url = def , method, data = null) => {
  const [result, setResult] = useState(null)
  
  useEffect( ()=> {
    const fetch = async() => {
      const response = await axios({
        method: method,
        url: url,
        data: data,
      })
      if(response){
        setResult({
          result: response
        })
      }
    }  
    fetch()
  },[url,method])
  return {result}
}
