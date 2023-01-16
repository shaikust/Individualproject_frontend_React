import { Link } from "react-router-dom";
import React, { SyntheticEvent, useState } from "react";


import "./login.css";
// import {
//   Nav,
//   NavLink,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements.js';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Admin from "./adminpage";

function Login(){
  const [emailid,setEmailid]=useState('')
  const [password,setPassword]=useState('')
  const [redirect,setRedirect]=useState(false)
  const [login,setLogin]=useState(false)
  const [store,setStore]=useState(null)

   const submit= async(e: SyntheticEvent)=>{
     e.preventDefault();
  //    await fetch( 'http://localhost:8080/controller/login',{
  //      method:'POST',
  //      headers:{"Content-Type":"application/json"},
  //     //  credentials:'include',
  //      body:JSON.stringify({
  //        emailid,
  //        password
  //      })

  //    });
  //    setRedirect(true)
    

  // }
  // if(redirect){
  //   return <Redirect to='/adminpage'/>
  // }
  //  function submit() {

  await  fetch('http://localhost:8080/controller/login',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
              emailid,
              password
            })
    }).then((response)=>{
      if(response.status!==200){
        alert("invalid details")
      }
      response.json().then((result)=>{
        console.warn('result',result);
        localStorage.setItem('login',JSON.stringify({
          login:true,
          store:result.accessToken
        }))
        localStorage.setItem('token',result.accessToken)
        
        setLogin(true)
      })
    })
    
  }
  if(login){
    return <Redirect to ='/adminpage'></Redirect>
  }
    return(
  <body>
    
    <div className="body">
      
    </div>
    <div className="grad"></div>
    <div className="header">
      <div>Parcel<span>Tracker</span></div>
    </div>
    <br />
    <form onSubmit={submit}>
        <div className="login">
        <div className="login-header">
          <h1>Login</h1>
        </div>
        <div className="login-form">
          <h3>Username:</h3>
          <input name="email" id="email" type="text" placeholder="Email" onChange={e=> setEmailid(e.target.value)}/><br />
          <h3>Password:</h3>
          <input name="password" id="password"type="password" placeholder="Password"  onChange={e=> setPassword(e.target.value)}/>
          <br />
          {/* <input type="button" value="Login" class="login-button"  /> */}
          <div >
          {/* <Link to='/adminpage'>
              <button className="button">Login</button>
          </Link> */}
          <button className="btn mt-3" type="submit">Login</button>

          </div>
          <br />
         <div>
             Don't have an account<Link to='/register'>Create</Link>
         </div>
          <br />
          {/* <h6 class="no-access">Can't access your account?</h6> */}
        </div>
      </div>
      </form>
      </body>
      // :
      // <div>
      //   <Admin></Admin>
      // </div>


    );
    
  
}
export default   Login