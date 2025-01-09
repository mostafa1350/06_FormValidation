import React, { useState, useEffect } from 'react'
import GrayFox from '../assets/images/Gray_Fox.jpg';
const Valid_forms = () => {

  const defaultValues = { username: "", email: "", password: "" };
  const [frmValues, setFormValues] = useState(defaultValues);
  const [frmErrors, setFormErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // ===================================
  //  handle box value when its val is changed 
  // ===================================

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...frmValues, [name]: value });
  };
  // ===================================

  useEffect(() => {
    // console.log(frmErrors);
    if (Object.keys(frmErrors).length === 0 && isSubmit) {
      console.log(frmValues);
    }
  }, [frmErrors]);

  // ===================================

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //"i" ,is a Regular Expression Modifiers that's insensitive letter
    // "^" is not , [^abc] 	Find any character NOT between the brackets
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
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  // =========== Validation Form =================
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErr(validate(frmValues));
    setIsSubmit(true);
  };
  // =================================== 

  return (

    <div className='h-[100vh] w-full bg-blue-200/30  bg-auto bg-no-repeat  bg-center 
     overflow-hidden ' style={{ backgroundImage: `url(${GrayFox})` }}>



      <div className='flex flex-col justify-center items-center w-full h-full bg-blue-400/20'>

        <div className='flex justify-center items-center'>
          {Object.keys(frmErrors).length === 0 && isSubmit ? (
            <p className="text-yellow-400 text-[30px] uppercase border-[1px] border-yellow-200 mb-2 px-[5px]">Signed in successfully</p>
          ) : (
            <p className='text-red-50 italic'> Plz Fill the Blank Forms Correcty</p>
          )}
        </div>


        <form
          onSubmit={handleSubmit}
          action=""
          className='relative flex flex-col justify-center items-center
             max-w-[350px]  w-full px-8 py-16 bg-white/20 border-blue-700/20 border-[3px]
             border-l-blue-700/20 border-b-blue-700/20 border-l-[1px] border-b-[1px]
             rounded-lg backdrop-blur-sm '>

          {/* ====================================== */}

          <div className='flex justify-start items-center w-[180px]'>
            <label htmlFor="" className='' >username</label>
          </div>
          <input
            type="text"
            name='username'
            placeholder='User Name'
            value={frmValues.username}
            onChange={handleChange}
            required={true}
            className="relative my-2 px-2 py-3 bg-yellow-400/20 rounded-md text-green-300 placeholder-white "
          />
          <p className='text-red-500 italic'>{frmErrors.username}</p>
          {/* ====================================== */}

          <div className='flex justify-start items-center w-[180px]'>
            <label htmlFor="" className='' >email</label>
          </div>
          <input
            type="email"
            name='email'
            placeholder='email'
            value={frmValues.email}
            onChange={handleChange}
            className="relative my-2 px-2 py-3 bg-yellow-400/20 rounded-md text-green-300 placeholder-white"
          />
          <p className='text-red-500 italic'>{frmErrors.email}</p>

          {/* ====================================== */}

          <div className='flex justify-start items-center w-[180px]'>
            <label htmlFor="" className='' >Password</label>
          </div>
          <input
            type="password"
            name='password'
            placeholder='password'
            value={frmValues.password}
            onChange={handleChange}
            className="relative my-2 px-2 py-3 bg-yellow-400/20 rounded-md text-slate-700 placeholder-white"
          />
          <p className='text-red-500 italic'>{frmErrors.password}</p>
          {/* ====================================== */}

          <button type="submit" className="relative my-3 bg-gradient-to-tr from-slate-200 via-red-200 to-green-200 py-2 px-[70px] tracking-wider rounded-md">Register</button>
        </form>
      </div>
    </div>
  )
}
export default Valid_forms

// ===================================