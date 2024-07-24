import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Paper, Button, CssBaseline, Grid, Typography,
   TextField, FormControlLabel, Checkbox, Link, Avatar, ThemeProvider, createTheme} from '@mui/material';


export default function RegisterStudent() {
    const paperStyle = {
        padding: '50px 20px',
        width: '600',
        margin: "20px auto"
    }
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [students, setStudents] = React.useState([]);

    const registerStudent=(e) => {
      e.preventDefault()
      const student = {firstName, lastName,email, password, userName}
      console.log(student);

      var allInputs = document.querySelectorAll('.signUpField input')
      allInputs.forEach(singleInput => singleInput.value = '');

      fetch("http://localhost:8080/student/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(student)

      }).then(() => {
        console.log("New student added.")
        console.log(student)
        document.querySelector('.signUpConfirm').innerHTML = 'Welcome, ' + student.firstName + "!" + " Your account has been created!"
        console.log()
      })
    }

    React.useEffect(()=>{
      fetch("http://localhost:8080/student/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setStudents(result);
      }
    )
    },[])

  const defaultTheme = createTheme();

 

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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={registerStudent} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => {setFirstName(e.target.value)}}
                autoFocus
                className='signUpField'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => {setLastName(e.target.value)}}
                autoComplete="family-name"
                className='signUpField'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className='signUpField'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userName"
                label="Username"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoComplete="username"
                className='signUpField'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className='signUpField'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid item>
            <h3 className='signUpConfirm'></h3>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )
}
