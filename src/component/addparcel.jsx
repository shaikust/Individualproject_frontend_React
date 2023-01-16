import { useState } from "react";
import "./register.css";
import { Link,Redirect } from "react-router-dom";
const Addparcel=()=>{
    const[senderLocation,setsenderLocation]=useState('')
    const[receiverLocation,setreceiverLocation]=useState('')
    const[currentLocation,setcurrentLocation]=useState('')
    const[deliveryStatus,setdeliveryStatus]=useState('')
    const[createdBy,setcreatedBy]=useState('')
const addItem=(e)=>{
    // e.preventDefault()
    const data={senderLocation,receiverLocation,currentLocation,deliveryStatus,createdBy}
    fetch("admin/addparcel/",{
        method:'POST',
        headers:{"Authorization":"Bearer "+localStorage.getItem('token'),
                 "Content-Type":"application/json"},
        body: JSON.stringify(data)    

    })
    // .then((response)=>{
    //     if(response.status!==304)
    //     alert("your are not allowed to do this")
    // })

}
    return(
        <>
           <div class="row">

                <div class="col">
                    <div class="wrapper">
                        <div class="text-center mt-4 name">
                            Add here
                        </div>
                        <form class="p-3 mt-3" >
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="text"  id="senderLocation" placeholder="Sender Location" required
                                    value={senderLocation} onChange={(e)=>setsenderLocation(e.target.value)}></input>
                            </div>
                            <div class="form-field d-flex align-items-center">
                                <span class="far fa-user"></span>
                                <input type="text"  id="receiverLocation" placeholder="Reciever Location"
                                    required value={receiverLocation} onChange={(e)=>setreceiverLocation(e.target.value)}></input>
                            </div>
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="text"  id="currentLocation" required placeholder="Current Location" value={currentLocation} onChange={(e)=>setcurrentLocation(e.target.value)}></input>
                            </div>
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="text" id="deliveryStatus"  placeholder="Delivery Status" value={deliveryStatus} onChange={(e)=>setdeliveryStatus(e.target.value)}></input>
                            </div>
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="text"  id="createdBy" placeholder="Created By" required
                                    value={createdBy} onChange={(e)=>setcreatedBy(e.target.value)}></input>
                            </div>
                            <button class="btn mt-3" onClick={addItem}>Add</button>
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
export default Addparcel