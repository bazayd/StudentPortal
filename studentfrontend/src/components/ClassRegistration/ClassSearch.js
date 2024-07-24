import { Class } from "@mui/icons-material";
import ClassSearch from "./ClassSearch.css"
import * as React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Container,Box, Paper, CssBaseline, Grid, Typography, styled,
    TextField, FormControlLabel, Checkbox, Link, Avatar,
     ThemeProvider, createTheme, Item, FormControl, MenuItem, InputLabel, Select} from '@mui/material';
 

function ClassRegister() {

  const buttonStyles = () => ({
    padding: 1,
    mr: 1,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '5px',
  });
    
  const [career, setCareer] = React.useState('');

  const handleChange = (event) => {
    setCareer(event.target.value);
  };

    const paperStyle = {
        padding: '50px 20px',
        width: '600',
        margin: "20px auto"
    }

    const [className, setClassName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [instructor, setInstructor] = React.useState('')
    const [room, setRoom] = React.useState('')
    const [semester, setSemester] = React.useState('')
    const [time, setTime] = React.useState('')
    const [units, setUnits] = React.useState('')
    const [classes, setClasses] = React.useState([]);


    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    


    React.useEffect(()=>{
        fetch("http://localhost:8080/classes/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setClasses(result);
        }
      )
    },[])

    


    return (
        <div className="classSearchParentContainer">
            <Box component="searchSection" sx={{ display: "flex",
             flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "50px", gap: "50px"}}>
              <div className="accordionParent">
                <Accordion sx={{ boxShadow: 2}} defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    square={false}
                    sx={{bgcolor: "#ded8d8", borderRadius: "5px"}}
                  >
                    Search
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid row spacing={2} columns={16}>
                        <Grid item m={5}>
                          <Item>
                            <Box component="subjectSearchContainer"
                            sx={{display: "flex", flexDirection: "row", justifyContent: "center",
                             alignItems: "center", width: "100%", gap:"40px", ml: "15px", marginRight: "25px" }}
                            >
                              <Typography variant="h6" component="h6" sx={{marginRight: "20px"}}>
                                  Subject
                              </Typography>
                              <Button sx={{bgcolor: "#ec6c6c", color: "black", padding: "5px", fontSize: "10px"}}>
                                Subject Select
                              </Button>
                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '55ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField id="outlined-basic" label="Search Subject" variant="outlined" />
                              </Box>
                            </Box>
                          </Item>
                        </Grid>
                        <Grid item m={5}>
                          <Item>  
                            <Box component="courseCareerBox"
                            sx={{display: "flex", flexDirection: "row", justifyContent: "center",
                            alignItems: "center", width: "100%", gap:"40px", ml: "15px", marginRight: "25px"}}
                            >
                              <Typography variant="h6" component="h6" sx={{marginRight: "20px"}}>
                                  Course Career
                              </Typography>
                              <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={career}
                                    label="Select"
                                    onChange={handleChange}
                                  >
                                    <MenuItem value={10}>Undergraduate</MenuItem>
                                    <MenuItem value={20}>Graduate</MenuItem>
                                    <MenuItem value={30}>Doctorate</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </Box>
                          </Item>
                        </Grid>
                      </Grid>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion square={false} sx={{ boxShadow: 2, borderRadius: "5px", bgcolor: "#ded8d8"}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Additional Search Criteria
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "end", mr: "30px"}}>
                <Link to="/AllClasses"><Button sx={buttonStyles}>View All Available Classes</Button></Link>
                <Link to="/AllClasses"><Button sx={buttonStyles}>View My Classes</Button></Link>
            </Box>

          {/* <Paper elevation={3} style={paperStyle}>

                {classes.map(classesInd=>(
                <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={classesInd.id}>
                Class Name: {classesInd.className} <br/>
                 Descritption: {classesInd.description} <br/>
                 Instructor: {classesInd.instructor} <br/>
                 Room: {classesInd.room} <br/>
                 Semester: {classesInd.semester} <br/>
                 Time: {classesInd.time} <br/>
                 Units: {classesInd.units} <br/>

                </Paper>
                ))
                }


          </Paper> */}


        </div>
    );
}

export default ClassRegister;