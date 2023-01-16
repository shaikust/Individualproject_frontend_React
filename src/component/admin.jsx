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
import ButtonGroup from '@mui/material/ButtonGroup';
import { useHistory}  from 'react-router-dom';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
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
const Adminpage=()=>{
       const history = useHistory();
      const navigateAddparcel = () => {
        history.push('/addparcel')
      };
    const Updateparcel=()=>{
      history.push('/update')
    }
    const Logout=()=>{
      localStorage.clear();
      history.push('/login')
    }
    // function Updateparcel(id) {

    //   history.push('/update',{
    //     state:{
    //       trackingid: id
    //     }
    //   }
    //   )
    // }
    // const [trackingid,setTrackingid]=useState('')
    const [data ,setData]=useState([])
    const getParcel= async(e)=>{
        e.preventDefault();
          await fetch("admin/getparcel",{
            method:'GET',
            headers:{"Authorization":"Bearer "+localStorage.getItem('token')}
        }).then((response)=>{
          if(response.status!==202){
            alert("you dont't have access")
          }
            response.json().then((result)=>{
                 console.warn('result',result)
                setData(result)
                 console.log(data)
            })

        })
        
    }
    async function deleteParcel(id){
        console.log(id)
        await fetch(`admin/deleteparcel/${id}`,{
            method:'DELETE',
            headers:{"Authorization":"Bearer "+localStorage.getItem('token')}

        }).then((response)=>{
          if(response.status==200){
            alert("parcel deleted")

          }else{
            alert("you are not allowed to do this")
          }
            
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
        
        {/* <form onSubmit={getParcel}> */}
        <div className="container-fluid text-center">
        <div className='input'>
        <div className='tracker'>
        <h1>Track Your Parcel Here</h1>
        </div>
           
           <Button variant="contained" type="button" onClick={getParcel}>ParcelList</Button>&nbsp;
           <Button variant="contained" type="button" onClick={navigateAddparcel} >AddParcel</Button> 
           <div style={{marginTop:10}}>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TrackingId</StyledTableCell>
            <StyledTableCell align="center">senderLocation</StyledTableCell>
            <StyledTableCell align="center">RecieverLocation</StyledTableCell>
            <StyledTableCell align="center">currentlocation</StyledTableCell>
            <StyledTableCell align="center">deliverystatus</StyledTableCell>
            <StyledTableCell align="center">createdby</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
            
              [data].map((item)=>{
                return (
                  item.map((subitem)=>{
                  return(
                    <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      {subitem.trackingId}
                    </StyledTableCell>
                    <StyledTableCell align="center">{subitem.senderLocation}</StyledTableCell>
                    <StyledTableCell align="center">{subitem.receiverLocation}</StyledTableCell>
                    <StyledTableCell align="center">{subitem.currentLocation}</StyledTableCell>
                    <StyledTableCell align="center">{subitem.deliveryStatus}</StyledTableCell>
                    <StyledTableCell align="center">{subitem.createdBy}</StyledTableCell>
                    <StyledTableCell align="center">{<ButtonGroup
                                         disableElevation
                                         variant="contained"
                                         aria-label="Disabled elevation buttons"
                                      >
                                         <Button onClick={Updateparcel}>update</Button>
                                         <Button onClick={()=>deleteParcel(subitem.trackingId)}>delete</Button>
                   </ButtonGroup>}</StyledTableCell>
                  </StyledTableRow>
                  )
                  }) 
                
                )
              })
            }
   
          
        </TableBody>
      </Table>
    </TableContainer>
           </div>

     
        </div>
      </div>
        {/* </form> */}
        </>
    )
    

}
export default Adminpage
