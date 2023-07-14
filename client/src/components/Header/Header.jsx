import React, { useEffect } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {LuLogIn, } from 'react-icons/lu'
import {HiLogin} from 'react-icons/hi'
import {FaHotel} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'



const data = [
  {
    id:1,
    title:'Hotels',
    route:'/',
    icon:<FaHotel className='fill-red-800 '/>
  },
  {
    id:2,
    title:'Login',
    route:'/login',
    icon:<LuLogIn className='stroke-red-800 '/>
  },
  {
    id:3,
    title:'Register',
    route:'/register',
    icon:<HiLogin className='fill-red-800 '/>
  },
]


const Header = function(){

  const {user, isLoading, isSuccess} = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  const location = useNavigate()

  useEffect(()=>{
    if(isSuccess){
      location('/')
    }
  },[ isLoading, isSuccess])
  

  const logoutHandler= function(){
    dispatch(logout())
  }

  // if(isLoading) return<h1>Loading...</h1>
  return (
    <header className='w-screen h-16 bg-transparent'>
      <nav className='w-full h-full'>
        <ul className='flex flex-row flex-wrap items-center justify-evenly w-full h-full text-sky-600 bold'>
          {data.map(item=>{
            return  <li key={item.id} className='px-4 py-2 w-max rounded-xl bg-slate-300 shadow-hello hover:bg-rose-100 '><NavLink className='flex gap-x-10 items-center'  to={item.route}>{item.title}{item.icon}</NavLink></li>
          })}
          {user && <button onClick={logoutHandler} className='bg-orange-300 text-slate-100 font-bold rounded-2xl p-3 cursor-pointer'>Logout</button>}
        </ul>
      </nav>
    </header>
  )
}
export default Header