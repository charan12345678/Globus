import React,{ useState, useRef, useEffect }from 'react'
import "./carousel.css"
import ImgComp from './ImgComp';
import { Link } from "react-router-dom";

function Carousel() {
    let sliderArr = [<ImgComp src={'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'}
    describe='Welcome to GlobusJuvo'
    describe2='The one stop solution to all your abroad education needs 
    Talk to our best advisors to make your college application process seamless !!!'
    />,
    <ImgComp src={'https://image.shutterstock.com/image-photo/beautiful-landscape-mountain-layer-morning-260nw-753385105.jpg'}/>,
    <ImgComp src={'http://wallup.net/wp-content/uploads/2017/03/29/479103-Philipp_Zieger-mountains-nature-forest-mist-Switzerland.jpg'}/>,
    <ImgComp src={'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg'}/>,
<ImgComp src={'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg'}/>];
    const[x,setX]= useState(0)
    const goLeft=()=>{
        console.log(x);
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    

    const goRight=()=>{
        console.log(x);
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }

    useEffect(() => {
        const intro = setInterval(() => {
          goRight();
        }, 3000);
        return () => {
          clearInterval(intro);
        };
      });

    return (
        <div>
            
        <div className="slider">
            <h1 className="describe">Welcome to GlobusJuvo</h1>
            <h2 className="describe2">The one stop solution to all your abroad education needs .Talk to our best advisors to make your college application process seamless !!!</h2>
            <button className="button22">Join Now</button>
            {
                sliderArr.map((item,index)=>{
                    return(
                        <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>
                
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button id="goRight" onClick={goRight}>

                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>
        </div>
    )
}

export default Carousel
