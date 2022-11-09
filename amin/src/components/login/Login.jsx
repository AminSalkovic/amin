import React from 'react'
import './Login.css'
const Login = ({email,password}) => {

   const handleSubmit=(e)=>{
         email((previous)=>previous=e.target.value)
   }
  return (
    <div className='login' >
        <form> 
          <input type="text" placeholder='email' onChange={handleSubmit }/>
          <input type="password" placeholder='password' onChange={(e)=>password((previous)=>previous=e.target.value)}/>
          <button type='submit'>Log in</button>   
        </form>
    </div>
  )
}

export default Login