import React, { useState } from 'react'
import GrayFox from '../assets/images/Gray_Fox.jpg';
const Valid_forms = () => {

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValuse] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // ====================
  const handleChange = (e) => {
    const { name, value } = e.target;//target, when an element want to create an event in the next
    setFormValuse({ ...formvalues, [name]: value }) //[name]:value , is an key for each param

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  }
  //we want to validate the forms ...
  const validate =(values) =>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;


  }


  return (

    <div className='h-[100vh] w-full bg-blue-200/30  bg-auto bg-no-repeat  bg-center 
     overflow-hidden ' style={{ backgroundImage: `url(${GrayFox})` }}>
      <div className='flex justify-center items-center w-full h-full bg-blue-400/20'>
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <form
          onSubmit={handleSubmit}
          action=""
          className='relative flex flex-col justify-center items-center
             max-w-[350px]  w-full px-8 py-16 bg-white/20 border-blue-700/20 border-[3px]
             border-l-blue-700/20 border-b-blue-700/20 border-l-[1px] border-b-[1px]
             rounded-lg backdrop-blur-sm '>
          <div className='flex justify-start items-center w-[180px]'>
            <label htmlFor="" className='' >username</label>
          </div>
          <input
            type="text"
            name='username'
            placeholder='User Name'
            value={formValues.username}
            onChange={handleChange}
            required={true}
            minLength={8}
            pattern='/.*[0-9].*/'
            className="relative my-2 px-2 py-3 bg-yellow-400/20 rounded-md text-green-300 placeholder-white " />

          <div className='flex justify-start items-center w-[180px]'>
            <label htmlFor="" className='' >email</label>
          </div>
          <input
            type="email"
            name='email'
            placeholder='email'
            value={formValues.email}
            onChange={handleChange}
            required={true}
            className="relative my-2 px-2 py-3 bg-yellow-400/20 rounded-md text-green-300 placeholder-white" />

          <div className='flex justify-start items-center w-[180px]'>
            <label htmlFor="" className='' >Password</label>
          </div>
          <input
            type="password"
            name='password'
            placeholder='password'
            value={formValues.password}
            onChange={handleChange}
            required={true}
            minLength={8}
            pattern=''
            className="relative my-2 px-2 py-3 bg-yellow-400/20 rounded-md text-slate-700 placeholder-white" />

          <button type="submit" className="relative my-3 bg-gradient-to-tr from-slate-200 via-red-200 to-green-200 py-2 px-[70px] tracking-wider rounded-md">Register</button>
        </form>
      </div>
    </div>
  )
}
export default Valid_forms

// ===================================