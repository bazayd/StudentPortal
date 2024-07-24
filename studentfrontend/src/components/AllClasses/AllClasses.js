import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Box } from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';




function AllClasses() {

    const buttonStyles = () => ({
        padding: 1,
        margin: 2,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '5px',
      });


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(className, description, instructor, room, semester, time, add) {
        return { className, description, instructor, room, semester, time, add};
      }


    const [classes, setClasses] = React.useState([]);


    React.useEffect(()=>{
        fetch("http://localhost:8080/classes/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setClasses(result);
        }
      )
    },[])



    return(
        <Box sx={{margin: "10px"}}>
            <TableContainer component={Paper} sx={{boxShadow: 5}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Class Name</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right">Instructor</StyledTableCell>
                        <StyledTableCell align="right">Room</StyledTableCell>
                        <StyledTableCell align="right">Semester</StyledTableCell>
                        <StyledTableCell align="right">Time</StyledTableCell>
                        <StyledTableCell align="right">Add</StyledTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {classes.map((classInd) => (
                        <StyledTableRow key={classInd.className}>
                        <StyledTableCell component="th" scope="row">
                            {classInd.className}
                        </StyledTableCell>
                        <StyledTableCell align="right">{classInd.description}</StyledTableCell>
                        <StyledTableCell align="right">{classInd.instructor}</StyledTableCell>
                        <StyledTableCell align="right">{classInd.room}</StyledTableCell>
                        <StyledTableCell align="right">{classInd.semester}</StyledTableCell>
                        <StyledTableCell align="right">{classInd.time}</StyledTableCell>
                        <StyledTableCell align="right"><Button sx={{bgcolor: "#e85b54", color:"black"}}>
                            Add
                        </Button>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "end"}}>
                <Link to="/ClassRegister"><Button sx={buttonStyles}>Back to Search</Button></Link>
                <Link to="/ViewClasses"><Button sx={buttonStyles}>View My Classes</Button></Link>
            </Box>
        </Box>
    );
}

export default AllClasses;