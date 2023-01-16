import { Link,Redirect } from "react-router-dom";
import "./register.css"
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements.js';
import { useState } from "react";

function Register(){
    const [emailid,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhoneno]=useState('')
    const [redirect,setRedirect]=useState(false)
    const handleClick=(e)=>{
        // e.preventDefault()
        const user={emailid,name,password,phone}
        console.log(user)
        fetch("http://localhost:8080/controller/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("new user added")
            
        })
        setRedirect(true)
       
     }
    if(redirect){
        return <Redirect to ="/login"/>
    }
    return(
       
    <body>
    <div class="container-fluid">
    <Nav>
            <NavMenu>
            <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contactus' activeStyle>
            contact Us
          </NavLink>
          <NavLink to='/register' activeStyle>
            Sign Up
          </NavLink>

            </NavMenu>
            <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>

        </Nav>

        <div class="row">

            <div class="col">
                <div class="wrapper">
                    <div class="logo">
                        <img
                            src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-login-web-development-flaticons-flat-flat-icons.png" />
                    </div>
                    <div class="text-center mt-4 name">
                        Register here
                    </div>
                    <form class="p-3 mt-3" >
                        <div class="form-field d-flex align-items-center">
                            <span class="fas fa-key"></span>
                            <input type="email"  id="emailid" placeholder="email" required
                                title="proxolo@gmail.com" pattern="[^@\s]+@[^@\s]+" value={emailid} onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div class="form-field d-flex align-items-center">
                            <span class="far fa-user"></span>
                            <input type="text"  id="name" placeholder="name" title="proxolo"
                                required value={name} onChange={(e)=>setName(e.target.value)}></input>
                        </div>
                        <div class="form-field d-flex align-items-center">
                            <span class="fas fa-key"></span>
                            <input type="password"  id="password" required placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                        </div>
                        <div class="form-field d-flex align-items-center">
                            <span class="fas fa-key"></span>
                            <input type="password" id="confirm-password"  placeholder="confirm password"
                                title="Password1$"></input>
                        </div>
                        <div class="form-field d-flex align-items-center">
                            <span class="fas fa-key"></span>
                            <input type="number"  id="phone" placeholder="PhNo" required
                                title="proxoloo" value={phone} onChange={(e)=>setPhoneno(e.target.value)}></input>
                        </div>
                        <button class="btn mt-3" onClick={handleClick}>register</button>
                    </form>
                    <div class="text-center fs-6">
                        {/* <a href="login.html">already registered ?</a> */}
                        Already registerd ?<Link to='login'>Login</Link>
                    </div> 
        
                </div>
            </div>
        </div>
    </div>
    
</body>

        

    )
}
export default Register;