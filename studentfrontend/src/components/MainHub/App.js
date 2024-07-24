import * as React from 'react';
import AppCss from "./App.css"
import Navbar from './Navbar'
import SideDrawer from './SideDrawer'
import Box from '@mui/material/Box';
import MainPage from './MainPage'

function App() {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Wrapped in Box component with display flex
                to lay out Navbar and drawer next
                 to each other horizontally.*/}
            <Navbar/>
            <SideDrawer/>
            <MainPage/>
        </Box>
    );
}

export default App;