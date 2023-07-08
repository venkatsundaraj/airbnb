import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/authSlice'
import { register } from '../store/authSlice'


function Register() {
  const auth = useSelector(state=>state.auth)
  const disPatch = useDispatch()

  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmpasswordValue, setConfirmPasswordValue] = useState('')

  const formSubmitHandler = function(e){
    e.preventDefault()
   if(nameValue === '' || emailValue===""|| passwordValue===""||confirmpasswordValue==="") {
   alert('enter valid inputs')
   return 
   }
   const formData = {
    userName:nameValue,
    email:emailValue,
    password:passwordValue,
    confirmPassword:confirmpasswordValue
   }
   disPatch(register(formData))

  }
  
  return (
    <section className='w-screen min-h-screen overflow-hidden bg-emerald-200 flex items-center justify-center'>
      <form onSubmit={formSubmitHandler} className='max-w-fit bg-slate-200 container mx-auto aspect-[1/0.65] rounded-3xl grid grid-cols-1 md:grid-cols-2 grid-flow-row items-center p-6'>
        <label htmlFor="text"  className='font-semibold'>Name</label>
        <input className='w-64 h-8 rounded-xl focus:outline-none' name='text' id='text' type='text' onChange={e=>setNameValue(e.target.value)}/>
        <label htmlFor="email" className='font-semibold'>Email</label>
        <input className='w-64 h-8 rounded-xl focus:outline-none' name='email' id='email' type='email' onChange={e=>setEmailValue(e.target.value)}/>
        <label htmlFor="password" className='font-semibold'>Password</label>
        <input className='w-64 h-8 rounded-xl focus:outline-none' name='password' id='password' type='password' onChange={e=>setPasswordValue(e.target.value)}/>
        <label htmlFor="confirmPassword" className='font-semibold'>Confirm password</label>
        <input className='w-64 h-8 rounded-xl focus:outline-none' name='confirmPassword' id='confirmPassword' type='password' onChange={e=>setConfirmPasswordValue(e.target.value)}/>
        <button type="submit" className='rounded-lg bg-blue-300 text-slate-700 w-[50%]' >Submit</button>
      </form> 
    </section>
  )
}

export default Register