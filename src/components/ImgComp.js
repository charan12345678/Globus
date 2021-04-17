import React from 'react'
import "./carousel.css"

function ImgComp( {src,describe,describe2} ) {
    let imgStyles={
        width: 100+"%",
        height: "auto"
    }
    return (
        <div className="hello11">
            {/* <h1 className="describe">{describe}</h1>
            <h2 className="describe2">{describe2}</h2> */}

            {/* <h1 className="describe">Welcome to GlobusJuvo</h1>
            <h2 className="describe2">The one stop solution to all your abroad education needs .Talk to our best advisors to make your college application process seamless !!!</h2> */}
            
            <img className="image11" src={src} alt="slide-img" style={imgStyles}></img>
            {/* <h1>{describe}</h1> */}
            
        </div>
    )
    // return <img src={src} alt="slide-img" style={imgStyles}></img>
}

export default ImgComp


