import React from 'react'
import {NavLink} from 'react-router-dom'
import {LuLogIn, } from 'react-icons/lu'
import {HiLogin} from 'react-icons/hi'
import {FaHotel} from 'react-icons/fa'

// function Header() {
//   return (
// //    <header className='bg-gradient-to-tl  from-red-400 to-blue-500 p-9 hover:bg-gradient-to-br'>
// //    <header className="bg-emerald-400 p-9 w-[1000px] hover:w-1/2">
// //    <header className="bg-emerald-400 p-[40px] w-24 sm:min-w-full">
// //    <header className="bg-emerald-400 p-[40px] max-w-screen-lg hover:max-w-screen-md">
//    <header className="bg-emerald-400 p-4 mx-auto   h-fit w-screen container mx-auto">
//     <nav>
//         {/* <ul className="flex space-x-4 font-['roboto'] text-[1.5rem] italic font-bold tracking-[.25rem] leading-8 list-none text-purple-800"> */}
//         {/* <ul className="flex flex-row flex-wrap justify-center font-['roboto'] text-[1.5rem] italic font-bold tracking-[.05rem]
//          leading-8 list-none text-purple-800 normal-case before:content-[''] w-full h-full bg-blue-700 ">
//             <li className='w-32 flex-none bg-green-500'><NavLink exact to="/" activeStyle={{color:'tan'}}>Hotels</NavLink></li>
//             <li className='w-32 hover:grow-0  grow bg-red-500 hover:bg-blue-500 '><NavLink exact to="/login" activeStyle={{color:'tan'}}>Login</NavLink></li>
//             <li className='w-32   bg-purple-500'><NavLink exact to="/register" activeStyle={{color:'tan'}}>Register</NavLink></li>
//         </ul> */}
//         <ul className="text-[24px] text-blue-700 grid gap-x-5 grid-cols-3 items-center justify-items-end h-16">
//             <li className='basis-1/3 justify-self-start self-end'><NavLink exact to="/" activeStyle={{color:'tan'}}>Hotels</NavLink></li>
//             <li className='basis-1/3'><NavLink exact to="/login" activeStyle={{color:'tan'}}>Login</NavLink></li>
//             <li className='basis-1/3'><NavLink exact to="/register" activeStyle={{color:'tan'}}>Register</NavLink></li>
//         </ul>
//     </nav>
//    </header>
//   )
// }

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
  return (
    <header className='w-screen h-16 bg-transparent'>
      <nav className='w-full h-full'>
        <ul className='flex flex-row flex-wrap items-center justify-evenly w-full h-full text-sky-600 bold'>
          {data.map(item=>{
            return  <li key={item.id} className='px-4 py-2 w-max rounded-xl bg-slate-300 shadow-hello hover:bg-rose-100 '><NavLink className='flex gap-x-10 items-center'  to={item.route}>{item.title}{item.icon}</NavLink></li>
          })}
          {/* <li className='px-4 py-2 w-max rounded-xl bg-slate-300 shadow-hello hover:bg-rose-100 '><NavLink className='flex gap-x-10 items-center' exact to='/'>Hotels<FaHotel className='fill-red-800 '/></NavLink></li>
          <li className='px-4 py-2 w-max rounded-xl bg-slate-300 shadow-hello hover:bg-rose-100 '><NavLink className='flex gap-x-10 items-center' exact to='/register'>Register<HiLogin className='fill-red-800 '/></NavLink></li>
          <li className='px-4 py-2 w-max rounded-xl bg-slate-300 shadow-hello hover:bg-rose-100 '><NavLink className='flex gap-x-10 items-center' exact to='/login'>Login<LuLogIn className='stroke-red-800 '/></NavLink></li> */}
        </ul>
      </nav>
    </header>
  )
}
export default Header