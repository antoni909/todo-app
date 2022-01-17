import { useState, useEffect } from "react";

const getLocalStorage = (key, defaultVal) => {
  const saved = localStorage.getItem('defaults')
  const savedVal = JSON.parse(saved)
  console.log(savedVal)
  return savedVal || defaultVal
}

export const useLocalStorage = (key,defaultVal) => {
  
  const [defaults, setDefaults] = useState(()=>{
    return getLocalStorage(key,defaultVal)
  })
  
  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(defaults));
  }, [key, defaults]);
  
    return [defaults, setDefaults];

}
