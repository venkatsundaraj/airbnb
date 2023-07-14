import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Hotels() {
  const navigate = useNavigate()
  const {isLoading, isError, message, user} = useSelector((state)=>state.auth)

  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  },[user])

  
  return (
    <div>Hotels</div>
  )
}

export default Hotels