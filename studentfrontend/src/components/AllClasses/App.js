import * as React from 'react';
import AllClasses from './AllClasses'
import SideDrawer from '../MainHub/SideDrawer'
import Navbar from '../MainHub/Navbar';

function App() {
    return (
        <div>
            <Navbar/>
            <SideDrawer/>
            <AllClasses/>
        </div>

    )
}

export default App;