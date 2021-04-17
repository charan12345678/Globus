import React from 'react'
import "./carousel.css"
import { Link } from "react-router-dom";

function Clip__path() {
    return (
        <div>
            <div className="clip__path">
               <p className="orange">Join Our Social Hub to interact with people around the world about Universities, Study guides, Rooms and many more...</p>
               <Link to="joinnow">
                    <a className="orange2">Click here</a>
               </Link>
               
            </div>
        </div>
    )
}

export default Clip__path