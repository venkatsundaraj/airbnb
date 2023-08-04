import React, { useState, useEffect } from 'react'
import { authActions, login } from '../store/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const dispatch = useDispatch()
  const location = useNavigate()

  const { isLoading, isError, isSuccess, message, user } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError || message) {
      console.log(message)
    }

    if (user) {
      location('/')
    }




    dispatch(authActions.reset())

  }, [message, user, isSuccess, isError])

  const formSubmitHandler = function (e) {
    e.preventDefault()
    if (!emailValue || !passwordValue) {
      alert('please enter the values')
    }

    const user = {
      email: emailValue,
      password: passwordValue
    }
    console.log(user)
    dispatch(login(user))

  }

  if (isLoading) return <h1>Loading...</h1>
  return (
    <section className='w-screen h-screen flex items-center justify-center'>
      <p>Login the form to </p>
      <h1>Hello</h1>
      <form onSubmit={formSubmitHandler} className='bg-orange-200 max-w-fit px-3 py-6 rounded-2xl grid grid-cols-2 gap-y-6 '>
        <label htmlFor="email">Email</label>
        <input onChange={(e) => setEmailValue(e.target.value)} className='focus:outline-none' name='email' type='email' id='email' />
        <label htmlFor="password">Password</label>
        <input onChange={(e) => setPasswordValue(e.target.value)} className='focus:outline-none' name='password' type='password' id='password' />
        <button type='submit' className='bg-sky-200 rounded-xl p-3 min-w-fit'>Login</button>
      </form>
    </section>
  )
}

export default Login