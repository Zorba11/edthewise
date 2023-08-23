import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import edSignUp from "../../assets/ed-signup-2.png";
import { useRouterStore } from "mobx-state-router";
import {
  account,
  SIGN_UP_ERROR_MESSAGE,
  signUp,
  USER_ALREADY_EXISTS,
  USER_ALREADY_EXISTS_MESSAGE,
} from "@edthewise/foundation-appwrite";
import { Alert } from "@mui/material";
import { Account } from "appwrite";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const SignUp = () => {
  const routerStore = useRouterStore();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();
    const firstName = data.get("firstName")?.toString();
    const lastName = data.get("lastName")?.toString();

    if (!email || !password || !firstName || !lastName) {
      return;
    }

    try {
      const fullName = `${firstName}-${lastName}`;
      const user = await signUp(email, password, fullName);
      setUser(user);
      routerStore.goTo("signIn");
    } catch (error: any) {
      if (error.response && error.response.type === USER_ALREADY_EXISTS) {
        setError(USER_ALREADY_EXISTS_MESSAGE);
      } else {
        setError(SIGN_UP_ERROR_MESSAGE);
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={edSignUp}
            alt="logo"
            style={{
              objectFit: "contain",
              height: "350px",
              width: "350px",
            }}
          />
          <Typography
            color="#4B82C3"
            component="h1"
            variant="h5"
            sx={{
              textAlign: "center",
            }}
          >
            Wanna meet Ed?
            <br></br>Sign up here!
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid> */}
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
