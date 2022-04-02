import { useRef, useState, useEffect } from 'react';
import Axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from '../hooks/useAuth';




const theme = createTheme();
const URL = "/api/auth/login";
const SignIn= () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); 

  const userRef = useRef();
  const errRef = useRef(); 


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');




  useEffect(() => {
    setErrMsg("");
  }, [email, password]);


    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await Axios.post(URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        });
        console.log(JSON.stringify(response.data));
        if ( response.status === 200 ) {
          setAuth(response.data);
        setEmail('');
        setPassword('');
        navigate("/viewEntries");
        } else {
          setErrMsg("Invalid email or password");
        }
        
      } catch (err) {
        if (!err?.response) {
          setErrMsg("Network Error");
        } else if (response.status === 401) {
          setErrMsg("Invalid username or password");
        } else if (err.response.status === 400) {
          setErrMsg("Missing credentials");
        } else {
          setErrMsg("Login failed");
        }
      }
    };

  

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" color="common.black">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: 'black', color: 'common.white' }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>

                </Grid>
                <Grid item>
                  <Link 
                  href="./SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  };

  export default SignIn;