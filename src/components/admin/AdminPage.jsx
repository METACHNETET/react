import { useState } from "react"
import AdminHome from "./AdminHome"
import dataStore from "../../data/dataStore"
import { observer } from "mobx-react"
import LoginPage2 from "./LoginPage2"


const AdminPage =(observer(()=> {
    return (
    <>
      {!dataStore.isLogin?<LoginPage2/>:<AdminHome/>}
    </>
  )
}))

export default AdminPage
