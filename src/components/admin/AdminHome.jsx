import React, { useState } from 'react'
import EditBusinessData from '../businessDetails/EditBusinessData'; 
import { observer } from 'mobx-react'
import './admin.css';
import BusinessData from '../businessDetails/Buzniesdata';

import ServiceList from "../service/ServiceList";
import AddService from '../service/AddService';
import MeetingList from '../meeting/MeetingList'; 
import { Outlet, useNavigate } from 'react-router';





const AdminHome = (observer(() => {

 const navigate=useNavigate()

 
  return (
    <>
    
      <BusinessData />
    
      <div id="buttons">
        <button onClick={()=>navigate("ServiceList")}>רשימת האטרקציות שלנו...</button>
        <button  onClick={()=>navigate("MeetingList")}>השכרות</button>
        <AddService />
        <EditBusinessData/>
      </div>

      <Outlet/>
      
     



    </>
  )
}))
export default AdminHome