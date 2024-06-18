import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginPage2 from "./LoginPage2";
function ButtonLogin() {
  const [showLoginPage, setShowLoginPage] = useState(false); // משתנה state כדי לנהל את התצוגה של דף ההתחברות
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    setShowLoginPage(true); // מציג את דף ההתחברות בעת לחיצה על הכפתור
    navigate('/LoginPage2'); // מנווט לדף ההתחברות
  };

  return (
    <>
      {!showLoginPage && (
        <Button variant="contained" color="primary" onClick={handleLoginButtonClick}>
          התחברות כמנהל
        </Button>
      )}
      {showLoginPage && <LoginPage2 />} {/* מראה דף ההתחברות רק אם showLoginPage הוא true */}
    </>
  );
}

export default ButtonLogin;