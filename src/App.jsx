//import BusinessDetailsComponent from "./components/businessDetails/BusinessDetailsComponent"
//import MediaCard from "./components/services/MediaCard"
//import ServicesList from "./components/services/ServiceList"
//import BusinessData from "./components/businessDetails/Buzniesdata"

//function App() {
    //return (
   // <>
    
     // <BusinessData/>
     //<MediaCard/>
    //</>
 // )
//}

//export default App
import React, { useState } from "react";
import BusinessDetailsComponent from "../src/components/businessDetails/BusinessDetailsComponent"
import ButtonLogin from "./components/admin/ButtonLogin"
//import ServiceList from "./components/services/ServiceList"
//import MediaCard from "./components/services/MediaCard"
import ServiceList from "./components/service/ServiceList";
import ButtonAppBar from "./components/businessDetails/ButtonAppBar"; 
import BubbleCanvas from "./components/businessDetails/bubbleCanvas";


function App() {

  return (
    <>
    <ButtonAppBar></ButtonAppBar>
      <BubbleCanvas></BubbleCanvas>    
       <ServiceList></ServiceList>
       
   </>
  );
}

export default App;