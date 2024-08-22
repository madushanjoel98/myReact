import React, { useState } from 'react';
import { successAlert } from '../utils/alerts';
import {addLoginDeiatails}from '../utils/mystrage'

import { Navigate, redirect } from 'react-router-dom';
import { render } from 'react-dom';
import { Blocks } from 'react-loader-spinner';
import '../css/formx.css';
const Userpage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const ongoing = () => {
      
        addLoginDeiatails(username,password);

        

  
        // location.href="/";
    };
    const isAuthenticated = sessionStorage.getItem('c') !== null;
    if(!isAuthenticated){
    return (
        <>

<div className="form">
  <span className="input-span">
    <label form="username" className="label">Email</label>
    <input type="text" name="username" id="username"   value={username}
                onChange={(e) => setUsername(e.target.value)}
  /></span>
  <span className="input-span">
    <label form="password" className="label">Password</label>
    <input type="password" name="password" id="password"  value={password}  onChange={(e) => setPassword(e.target.value)}
  /></span>
  <span className="span"><a href="#">Forgot password?</a></span>
  <button className="submit" type="submit" onClick={ongoing}>Login</button>
  <span className="span">Don't have an account? <a href="#">Sign up</a></span>
</div>

        </>
       
        
    );
}else{
  
    return <Navigate to="/" replace />;
}
};

export default Userpage;
