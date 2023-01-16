import './about.css'
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements.js';
  import { useHistory}  from 'react-router-dom';
import Button from '@mui/material/Button';
const About=() =>{
  const history = useHistory();
  const Logout=()=>{
    localStorage.clear();
    history.push('/login')
  }

    return(
        <>
        <Nav>
            <NavMenu>
            <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contactus' activeStyle>
            contact Us
          </NavLink>
          {/* <NavLink to='/register' activeStyle>
            Sign Up
          </NavLink> */}

            </NavMenu>
            <NavBtn>
          {/* <NavBtnLink to='/login'>Sign In</NavBtnLink> */}
          <Button variant="contained" type="button" onClick={Logout}>Logout</Button>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/adminpage'>Back</NavBtnLink>
        </NavBtn>

        </Nav>

        <div className='about'>
            <h3>About Us</h3>
            <div className='text'>
            <p>You have multiple tracking numbers, different logistics providers, looking for regular track event updates? We have you covered.</p>
             <p>Allow us to take out the complexity of tracing your shipments across different carriers.</p>
             <p> We provide you with an easy-to-use overview of your parcel tracking, translations & regular updates - simple and convenient!</p>
            </div>
            <div className='text2'>
            Track & trace your parcels any time & get continuous updates
            </div>

        </div>
        </>
    )
}
export default About