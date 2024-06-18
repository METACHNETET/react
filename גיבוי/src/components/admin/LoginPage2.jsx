import React, { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Swal from 'sweetalert2';
import businessStore from '../../data/businessStore';
import { useNavigate } from 'react-router-dom';

const LoginPage2 = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogIn = async () => {
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      body: JSON.stringify({
        name, password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      localStorage.setItem("isLogin", true);
      businessStore.setIsLogin(true);
      Swal.fire({
        title: "זוהית כמנהל",
        html: "תועבר לאתר בעוד <b></b> שניות.",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        }
      }).then(() => {
        // השתמש בפונקציית הניווט לאחר ההתחברות
        navigate('/adminhome');
      });
    } else {
      Swal.fire({
        title: "שם/סיסמא שגויים",
        text: "אין גישה למשתמש פרטי",
        icon: "error"
      });
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        opacity: '90%'
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.3rem',
          padding: '4rem',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.7) ',
          borderRadius: '8px',
          backgroundColor: 'white',
          opacity: '80%'
        }}
      >
        <TextField
          fullWidth
          label="שם בעל העסק"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            startAdornment: <PersonIcon />,
          }}
        />
        <TextField
          fullWidth
          label="סיסמה"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: <LockIcon />,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogIn}
        >
          התחבר
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage2;
