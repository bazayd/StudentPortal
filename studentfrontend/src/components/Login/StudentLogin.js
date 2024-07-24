import * as React from 'react';
import { Container, Button, Box, CssBaseline, Grid, Typography,
    TextField, FormControlLabel, Checkbox, Link, Avatar, ThemeProvider, createTheme} from '@mui/material';
import { useNavigate } from 'react-router-dom';
 
 

function StudentLogin() {
    const navigate = useNavigate();

    const defaultTheme = createTheme();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const studentLogin = (e) => {
        e.preventDefault();
        const student = {email, password}

        console.log(student)
        console.log(JSON.stringify(student))


        fetch("http://localhost:8080/student/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(student)

        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            navigate('/Main')
            return response.text(); // Read the response as text
        })
        .then(text => {
            if (text.toLowerCase().includes("login successful")) {
                console.log("Login successful");
                // You can set state or redirect the user here
            } else {
                console.log("Login failed: ", text);
            }
        })
        .catch(error => {
            console.error("There was a problem with the login request:", error);
        });
    };
    
     return (
        <ThemeProvider theme={defaultTheme}>
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
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={studentLogin} noValidate sx={{ mt: 1 }}>
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
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
}

export default StudentLogin;
