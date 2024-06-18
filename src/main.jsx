import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BusinessData from './components/businessDetails/Buzniesdata.jsx';
import EditBusinessData from './components/businessDetails/EditBusinessData.jsx';
import AddService from './components/service/AddService.jsx';
//import MediaCard from"./components/services/MediaCard.jsx";
import ServiceList from './components/service/ServiceList.jsx';
import LoginPage2 from './components/admin/LoginPage2.jsx';
import AdminPage from './components/admin/AdminPage.jsx';
import AdminHome from './components/admin/AdminHome.jsx';
import MeetingList from './components/meeting/MeetingList.jsx'
import AddMeeting from './components/meeting/AddMeeting.jsx';
//import Appointment from './components/appointment/Appointment.jsx'; 


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    
    { 
      path: "/LoginPage2",
      element: <LoginPage2 />

    },
    { 
      path: "/AdminHome",
      element: <AdminHome />

    },
    {
      path: "/Admin",
      element: <AdminPage />,
    },
  { 
      path:"/adminhome/ServiceList", 
      element: <ServiceList />
    },
    {
      path:"adminhome/MeetingList",
       element:<MeetingList />
       },
    {/*
      path:  "/adminhome/AppointmentList",
      element: <AppointmentList />
    },
    {
      path: "/serviceList",
      element: <ServiceList />
    },
   {/* {
      path: "/meeting",
      element: <Meeting />
    },
    {
    path: "/addMeeting",
    element: <AddMeeting />
  },
  {
    path: "/meetinglist",
    element: <MeetingList />
  },*/}


    




  ]);
  return (
    <RouterProvider router={router} />
  );



};
export default Router


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router />

  </React.StrictMode>,
)
