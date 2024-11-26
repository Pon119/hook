import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useCustomHook = (url) => {
  const [state,setState] = useState([])
  const [load,setLoad] = useState(true)
  const [error,setError] = useState()
  
  
  useEffect(()=>{
    (async function(){
        try{
            let get = await axios.get(url);
            setState(get.data)
        }
        catch (e){ setError(e.message) }
        finally{
            setLoad(false);
        }
    }());   

  },[])

  return {state, load, error};
}

export default useCustomHook