import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='loginSignup'>
      <div className='loginSignupContainer'>
        <h1>Sign Up</h1>
        <div className='loginSignupFields'>
          <input type= "text" placeholder='Your Name'/>
          <input type= "email" placeholder='Your Email' />
          <input type= "password" placeholder='Set up password' />

        </div>

        <button>Continue</button>
        <p className='loginSignup-login'>Already have an account  <span>Login here</span></p>
        <div className='loginSignup-agree'>
          <input type= "checkbox" name='' id='' />
          <p>
          I agree with terms conditions and privacy policy
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login