import React from 'react'
import "./Home.css"
import "./socialhub.css"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="flex2">
                <div>
                    <h1 className="cont2">GlobusJuvo</h1>
                </div>
                    <div id= "body1">
                        <div className="cont"> 
                           <Link to="/visa"> <button className="btn2">Visa Process</button> </Link>
                        </div>
                        <div className="cont">
                           <Link to="/socialhub" style={{ textDecoration: 'none' }}> <button className="btn2">Social Hub</button> </Link>
                        </div>
                        <div className="cont">
                            <Link to="/" style={{ textDecoration: 'none' }}> <button className="btn2">About Us</button> </Link>
                        </div>
                        <div className="cont">
                            <Link to="/" style={{ textDecoration: 'none' }}> <button className="btn2">Log In</button> </Link>
                        </div>
                    </div>
            </div> 
        </div>
    )
}

export default Home