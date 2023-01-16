import { useState } from "react"; 
import "./register.css";
import { Link,Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const Update=()=>{
    const[currentLocation,setcurrentLocation]=useState('')
    const[deliveryStatus,setdeliveryStatus]=useState('')
    const[trackingId,settrackingId]=useState('')
    // const {state} =useLocation();
function updateItem(id){
    //  e.preventDefault()
    const data={currentLocation,deliveryStatus}
    fetch(`admin/updateparcel/${id}`,{
        method:'PUT',
        headers:{"Authorization":"Bearer "+localStorage.getItem('token'),
                 "Content-Type":"application/json"},
        body: JSON.stringify(data)    

    }).then((response)=>{
        if(response.status!==304){
            alert(" your not allowed to do this")

        } 
    })

}
    return(
        <>
           <div class="row">

                <div class="col">
                    <div class="wrapper">
                        <div class="text-center mt-4 name">
                            Update here
                           
                        </div>
                        <form class="p-3 mt-3" >
                        <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="text"  id="trackingId" placeholder=" Enter Tracking Id" required
                                    value={trackingId} onChange={(e)=>settrackingId(e.target.value)}></input>
                            </div>
                            
            
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="text"  id="currentLocation" required placeholder="New Current Location" value={currentLocation} onChange={(e)=>setcurrentLocation(e.target.value)}></input>
                            </div>
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="text" id="deliveryStatus"  placeholder="New Delivery Status" value={deliveryStatus} onChange={(e)=>setdeliveryStatus(e.target.value)}></input>
                            </div>
                            
                            <button class="btn mt-3" onClick={()=>updateItem(trackingId)}>Update</button>
                        </form>
                        <div class="text-center fs-6">
                        {/* <a href="login.html">already registered ?</a> */}
                        Go back?<Link to='parcellist'>back</Link>
                    </div>
                    </div>
                </div>
</div>

        </>
    )

}
export default Update
