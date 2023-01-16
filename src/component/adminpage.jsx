 import './adminpage.css';
 import { Link } from "react-router-dom";
 import {
  Nav,
  NavLink,
  // Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements.js';
import { useHistory}  from 'react-router-dom';
import Button from '@mui/material/Button';
function Admin(){
  const history = useHistory();
  const Logout=()=>{
    localStorage.clear();
    history.push('/login')
  }
    return (
       
        <body>
          <Nav>
        {/* <Bars />
   */}
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contactus' activeStyle>
            contact Us
          </NavLink>
          {/* <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink> */}
          {/* <NavLink to='/register' activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {/* <NavBtnLink to='/login'>Logout</NavBtnLink> */}
          <Button variant="contained" type="button" onClick={Logout}>Logout</Button>
        </NavBtn>
      </Nav>
         
            <div class="container-fluid text-center" className='main' >  
             <div className='admin'>
            <h2>Welcome to Parcel Tracker</h2>
        </div>
        <div class="col-sm-2 sidenav">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Menu
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                 {/* <p>
                    <a href="admin.html">Track Parcel</a>
                 </p> */}
                 <div >
          <Link to='/parceltracker'>
            Track Parcel

          </Link>
          </div>
          <div >
          <Link to='/parcellist'>
            ParcelList

          </Link>
          </div>
                 
                
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
        </body>
       
    )
}
export default Admin;