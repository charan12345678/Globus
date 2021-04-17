import React, { useState } from 'react'
import { connect } from 'react-redux';
import "../stylesheets/joinNow.css"
import { setAlert } from '../actions/alert';
import { register } from '../actions/register';
import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import axios from 'axios';
import PropTypes from 'prop-types';

const JoinNow = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
    });

    const { username, email, password,role } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        // props.register({ username, email, password, role });
       const newUser = { username, email, password, role }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        
            const body = JSON.stringify(newUser);
            const res = await axios.post('http://ec2-18-191-239-173.us-east-2.compute.amazonaws.com:9000/users', body, config);
            console.log(res.data);
        } catch (err) {
            console.log(err.response.data);
        }; 
    };
    return (
        <div className="container">
                <div className="container2">
                    <h3 className="home1">Welcome to the world's first US based online consulting services for all US education needs. </h3>
                    <h3 className="home1">We are delighted to see you showing intrest in joining our GlobusJuvo family.</h3>
                    <h3 className="home1">Let's get you started with a free call with our US resident advisor or interact with our social community. Once you sign-up below.</h3>
                    <h1>CREATE AN ACCOUNT</h1>
                    <form onSubmit = {e => onSubmit(e)}>
                    <div className="row">
                        <input 
                        className="input1" 
                        type="text" 
                        placeholder="&nbsp; Role" 
                        name='role' 
                        value={role}
                        onChange= {e => onChange(e)}
                        required>
                        </input>
                    </div>
                    <div className="row">
                        <input 
                        className="input1" 
                        type="text" 
                        placeholder="&nbsp; Username" 
                        name='username' 
                        value={username} 
                        onChange= {e => onChange(e)}
                        required>
                        </input>
                    </div>
                    <div className="row">
                        <input 
                         className="input1" 
                         type="text" 
                         placeholder="&nbsp; Email address" 
                         name='email'
                         value={email} 
                         onChange= {e => onChange(e)}
                         >
                         </input>
                    </div>
                    <div className="row">
                        <input 
                        className="input1" 
                        type="text" 
                        placeholder="&nbsp; Password" 
                        name='password'
                        value={password} 
                        onChange= {e => onChange(e)}
                        ></input>
                    </div>
                    <div className='row'>
                    <button type="submit" className="button1" value='JoinNow'>Sign Up</button>
                    </div>
                    </form>
                    
                </div>
            {/* </div> */}
        </div>
    )
}

export default connect(null,{ setAlert, register } )(JoinNow);