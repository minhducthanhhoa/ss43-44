import React from 'react'
import "./Login.scss"

export default function Login() {
  return (
    <div>
        <div className="login-container">
            <div className="image-container">
                <img src="https://cdn.pixabay.com/photo/2023/09/16/18/18/wallpaper-8257343_1280.png" alt="" />
            </div>
            <div className="form-container">
            <h2>Login</h2>
        <div className="form-row">
          <div className="label-container">
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-container">
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="form-row">
          <div className="label-container">
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-container">
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="forgot-password-container">
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
        </div>
        <button className="login-button">Login</button>
        <div className="divider">
          <span>or</span>
        </div>
        <a href="#" className="register-button">Register now</a>
            </div>
        </div>
    </div>
  )
}
