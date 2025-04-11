import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Form() {

  let schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(/[A-Z]/, 'Must include at least one uppercase letter')
    .matches(/[a-z]/, 'Must include at least one lowercase letter')
    .matches(/\d/, 'Must include at least one number')
    .matches(/[@$!%*?&]/, 'Must include at least one special character'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

  let { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  let handleFormData = (data) => {
    console.log(data)
  }
  
  return (
    <div className='container-fluid'>
      <div className='row border border-primary w-50 d-flex justify-content-center p-4 mx-auto mt-5'>
        <div className='col-6'>
        <form onSubmit={handleSubmit(handleFormData)}>
        <div className='my-3'>
        <label htmlFor="name" className='form-label'>Name</label>
        <input className='form-control' type="text" name="name" id='name' ref={register}/>
        </div>
        {/* <p>{errors.name? errors.message: ''}</p> */}
        <div className='my-3'>
        <label htmlFor="email" className='form-label'>Email</label>
        <input className='form-control' type="email" name="email" id='email' ref={register}/>
            </div>
        {/* <p>{errors.email? errors.message: ''}</p> */}
        <div className='my-3'>
        <label htmlFor="password" className='form-label'>Password</label>
        <input className='form-control' type="passoword" name="password" id='password' ref={register}/>
            </div>
        {/* <p>{errors.password? errors.message: ''}</p> */}
        <div className='my-3'>
        <label htmlFor="conformpassword" className='form-label'>Confirm Password</label>
        <input className='form-control' type="passoword" name="confirmPassword" id='conformpassword' ref={register}/>
            </div>
        {/* <p>{errors.confirmPassword? errors.message: ''}</p> */}
        <button className='btn btn-primary d-block mx-auto' type='submit'>Submit</button>
         </form>
        </div>
      
      </div>
    </div>
  )
}

export default Form