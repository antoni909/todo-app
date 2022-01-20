import { useState } from 'react';

const useForm = (cb) => {

  const [values, setValues] =useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handle submit', e)
    console.log('handle submit vals', values)
    cb(values)
  }

  const handleChange = (e) => {
    e.persist()
    setValues(
      values => ({...values, [e.target.name]: e.target.value})
    )
  }

  return {handleChange, handleSubmit}
}

export default useForm;
