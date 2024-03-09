import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <>
    <div className="login-container">
    <div className="login-wrapper">
      <h1 className="login-title">SIGN IN</h1>
      <form className="login-form">
        <input className="input" type="text" placeholder="username" />
        <input className="input" type="password" placeholder="password" />
        <button className="login-button">LOGIN</button>
        <a className="link" href="#">DO NOT YOU REMEMBER THE PASSWORD?</a>
        <a className="link" href="#">CREATE A NEW ACCOUNT</a>
      </form>
    </div>
  </div>
</>
  )
}

export default Login