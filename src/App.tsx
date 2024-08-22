import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './router/homepage';
import Userpage from './router/login';
import ProtectedRoute from './componets/prote'; // Import the ProtectedRoute component
import {Navgbar} from './componets/navbar';
import '@coreui/coreui/dist/css/coreui.min.css'
import { Logout } from './router/logout';


function App() {
    const [nsVisible, setNsVisible] = useState(false);

    return (
        <>
            {/* Conditionally render the Navbar */}
           <Navgbar />
            
            <BrowserRouter>
                <Routes>
                    {/* Public route for login */}
                    <Route path="/login" element={<Userpage />} />
                    <Route path="/logout" element={<Logout/>} />
                    {/* Protected routes */}
                    <Route element={<ProtectedRoute />}>
                  
                        <Route path="/" element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
