{/*הדף לא בשימוש
import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "@mui/material";
import dataStore from "../../data/dataStore";
import { CheckLogin } from "../../data/server";
import './LoginP.css';

const LoginPage = observer(() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
      <section>
        <div className="signin"> 
          <div className="content"> 
            <h2>Sign In</h2> 
            <div className="form"> 
              <div className="inputBox"> 
                <input type="text" id="username" name="username" autoComplete="username" required value={username} onChange={(e) => setUsername(e.target.value)} /> 
                <label htmlFor="username">Username</label> 
              </div> 
              <div className="inputBox"> 
                <input type="password" id="password" name="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} /> 
                <label htmlFor="password">Password</label> 
              </div>    
              <div className="inputBox"> 
  <button onClick={handleLogin}>Login</button>
               </div> 
            </div> 
          </div> 
        </div> 
      </section>
    </>
  );
});

export default LoginPage;*/}
