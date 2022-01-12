import { useState } from 'react';

const useForm = (cb) => {
  const [values, setValues] =useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    cb(values)
  }

  const handleChange = (e) => {
    e.persist()
    console.log(`...${values}, [${e.target.name}]: ${e.target.value} `)
    console.log('values', ...values)
    setValues(
      
      values => ({...values, [e.target.name]: e.target.value})
    )
  }

  return {handleChange, handleSubmit, values}
}

export default useForm;
