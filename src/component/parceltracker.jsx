import './parceltracker.css' 
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements.js';
  import Button from '@mui/material/Button';
  import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory}  from 'react-router-dom';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const Tracker = () =>{

    const [trackingid,setTrackingid]=useState('')
    const [data ,setData]=useState([])
    const history = useHistory();
  const Logout=()=>{
    localStorage.clear();
    history.push('/login')
  }
    const getParcel= async(e)=>{
        e.preventDefault();
          await fetch(`admin/getparcel1/${trackingid}`,{
            method:'GET',
            headers:{"Authorization":"Bearer "+localStorage.getItem('token')}
            
            

        }).then((response)=>{
            response.json().then((result)=>{
                // console.warn('result',result)
                setData(result)
                 console.log(data)
            })

        })
        
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
          {/* <NavBtnLink to='/login'>Log out</NavBtnLink> */}
          <Button variant="contained" type="button" onClick={Logout}>Logout</Button>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/adminpage'>Back</NavBtnLink>
        </NavBtn>

        </Nav>
        
        <form onSubmit={getParcel}>
        <div className='input'>
        <div className='tracker'>
        <h1>Track Your Parcel Here</h1>
        </div>
            Enter tracking id<br>
            </br>
            {/* <input name="id" id="id" type="text" placeholder="Tracking id"/><br>
            </br>
            <Button variant="contained">Search</Button> */}
            <Box
               sx={{
                 marginLeft:55,
                 width: 500,
                 maxWidth: '100%',
              }}
    >
             <TextField fullWidth label="Trackingid" id="id" required onChange={e =>setTrackingid(e.target.value)}/>
           </Box>
           <Button variant="contained" type="submit"  >Search</Button> 
           <div>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TrackingId</StyledTableCell>
            <StyledTableCell align="right">senderLocation</StyledTableCell>
            <StyledTableCell align="right">RecieverLocation</StyledTableCell>
            <StyledTableCell align="right">currentlocation</StyledTableCell>
            <StyledTableCell align="right">deliverystatus</StyledTableCell>
            <StyledTableCell align="right">createdby</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
              [data].map((item)=>{
                return (
                  <StyledTableRow >
                  <StyledTableCell component="th" scope="row">
                    {item.trackingId}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.senderLocation}</StyledTableCell>
                  <StyledTableCell align="right">{item.receiverLocation}</StyledTableCell>
                  <StyledTableCell align="right">{item.currentLocation}</StyledTableCell>
                  <StyledTableCell align="right">{item.deliveryStatus}</StyledTableCell>
                  <StyledTableCell align="right">{item.createdBy}</StyledTableCell>
                </StyledTableRow>
                
                )
              })
            }
   
          
        </TableBody>
      </Table>
    </TableContainer>
           </div>

     
        </div>
        </form>
        </>
    )
    

}
 export default Tracker
