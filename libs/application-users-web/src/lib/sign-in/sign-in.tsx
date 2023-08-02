import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import logoText from '../../assets/ed-signup-av.png';
// import edSignUpVideo from '../assets/ed-signup-video.mp4';
import edSignUp from '../../assets/ed-signup.png';


function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export class SignIn extends React.Component {
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{
           height: '100vh' }}>
          <CssBaseline />
          {/* Ed image */}
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              background: `url(${ edSignUp })`,
              backgroundRepeat: 'no-repeat',
              // backgroundColor: (t) =>
              //   t.palette.mode === 'light'
              //     ? t.palette.grey[50]
              //     : t.palette.grey[900],
              backgroundColor: '#FFFEFC',
              backgroundSize: 'center',
              backgroundPosition: 'center',
              height: '100vh',
              margingTop: '105rem',
              padding: '2',
            }}
          />
            {/* ed video */}
          {/* <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              // background: `url(${ edSignUpVideo})`,
              backgroundRepeat: 'no-repeat',
              // backgroundColor: (t) =>
              //   t.palette.mode === 'light'
              //     ? t.palette.grey[50]
              //     : t.palette.grey[900],
              backgroundColor: '#FFFEFC',
              backgroundSize: 'center',
              backgroundPosition: 'center',
            }}
          >
            <video
              autoPlay
              loop
              style={{
                width: '70%',
                height: '70%',
                position: 'relative',
                top: '10%',
                left: '10%',
              }}
            >
              <source src={edSignUpVideo} type="video/mp4" />
            </video>
          </Grid> */}

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 25,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Grid
  item
  xs={false}
  sm={4}
  md={7}
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }}
>
  <img src={logoText} alt="logo" style={{ width: '300px', }} />
  {/* ... */}
</Grid>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={this.handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/sign-up" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
