import { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
export default function Login({setShowLogin}){
    const [currState,setCurrState]=useState("Login")
    return(
        <div className="login">
            <form action="" className='login-container'>
                <div className="login-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-input">
                    {currState==="Login"?<></>:<input type="text" placeholder='your name' required/>}
                    
                    <input type="email" placeholder='your email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currState==='Sign Up'?"create account":"Login"}</button>
                <div className="login-conditions">
                    <input type="checkbox" required/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>

                </div>
                {currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrState('Sign Up')}>click here</span></p>:
                <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
                
                
            </form>

        </div>
    )
}