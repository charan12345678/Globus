import React from 'react'
import "./signUp.css"
import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function SignUp() {
    return (
        // <div>
        //     <div className="container">
        //         <div className="container2">
        //             <h3 className="home1">Welcome Back.</h3>
        //             <h3 className="home1">We are delighted to see you use our services</h3>
        //             <div className="signup__container">
        //                 <div className="row">
        //                     <input className="input11" type="text" placeholder="&nbsp; Username" required></input>
        //                 </div>
        //                 <div className="row">
        //                     <input className="input11" type="text" placeholder="&nbsp; Password"></input>
        //                 </div>
        //                 <div className="signup-login">
        //                     <div>
        //                         <button>Login</button>
        //                     </div>
        //                     <div>
        //                         <a>Forgot password</a>
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <h5>New User - <a>Sign Up for an account</a></h5>
        //                 </div>
        //             </div>

        //         </div>
                
        //         <div>
                    
        //         </div>

        //     </div>
        // </div>
        <div className="signUp">
            <div>
                <h3 className="home1">Welcome Back.</h3>
                <h3 className="home1">We are delighted to see you use our services</h3>
            </div>
            <div className="signup__main">
                <div className="signup__row">
                    <input className="signup__input" type="text" placeholder="&nbsp; Username"></input>
                </div>
                <div className="signup__row">
                    <input className="signup__input" type="text" placeholder="&nbsp; Password"></input>
                </div>
            </div>
            

        </div>
    )
}

export default SignUp
