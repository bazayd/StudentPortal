import * as React from 'react';
import ClassSearch from './ClassSearch'
import Navbar from '../MainHub/Navbar';
import SideDrawer from '../MainHub/SideDrawer'

function App() {
    return (
        <div>
            <Navbar/>
            <SideDrawer/>
            <ClassSearch/>
        </div>

    )
}

export default App;