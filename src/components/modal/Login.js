import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthProvider";
import axios from 'axios';
import { Input } from '../../styles/Input.style';
import { Button } from '../../styles/Button.style';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CircularProgress } from '@mui/material';

export default function Login() {
    const [loading, setLoading] = useState(false); 
    const [Success, setSuccess] = useState(false);
    const {setAuth}  = useContext(AuthContext);

    const userRef = useRef();
    useEffect(() => {
        userRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const { username, password, remember } = e.target;
        const user = username.value;
        const pwd = password.value
        try {
            const data = {username: user, password: pwd};
            await axios.post('http://localhost:3001/login', data);
            setTimeout(() => {
                setLoading(false);
                setSuccess(true)
                setAuth({user, pwd})
            }, 2000);
        } catch (err) {
            console.log(err);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }

  return (
    <>
        { Success ? (
            <div className='text-center'>
              <h2>LOGIN SUCCESSFUL</h2>
              <br />
              <CheckCircleIcon sx={{fontSize: "100px", color: "#34b233"}}/>
              <Button onClick={() => <Navigate to="/"/>}>home</Button>
            </div>
        ) : (
            <div className="text-center">
                <h2>Sign In to UTrade</h2>
                <br />
                <hr />
                <form onSubmit={handleSubmit}>
                    <Input
                        ref={userRef}
                        className="mb-3" 
                        type="text"
                        autoComplete='off'
                        name="username"
                        sty="modal"
                        placeholder="Username" 
                        required
                    />
                    <br />
                    <Input 
                        className="mb-3"
                        type="password" 
                        name="password"
                        sty="modal"
                        placeholder="Password"
                        required
                    />
                    <br />
                    <Button color="white" sty="modal">{loading ? <CircularProgress color="grey" size={40}/> : 'Continue'}</Button> <br />
                    <div className="d-flex justify-content-between mt-3 mb-3">
                        <div>
                            <input type="checkbox" name="remember"/>
                            <label className='ms-1'>
                                Remember me
                            </label>
                        </div>
                        <Link to="/">Forgot Password?</Link>
                    </div>
                </form>
                <hr />
                <div className='pointer mt-2 text-primary' onClick={() => document.getElementById('join_button').click()}>Create a new account</div>
            </div>
        )}
    </>
  )
}