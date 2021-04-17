import React from 'react'
import "./Homes.css"
import Product from './Product'
import {Product2,Product3,Product4} from './Product2'




import { Link } from "react-router-dom";
import College from './College';
// import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

function Homes() {
    return (
        <div className="homes">
            <div className="homes__container">
                <h1 className="heading1">OUR PARTNERS</h1>
                 <div className="home__row">
                    <a href="https://www.google.com/"></a>
                    <Product title="Northwest State Missouri University"
                    image='data:image/png;base64,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' 
                    describe='Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'
                    links="https://abhinavreddy2703.wixsite.com/mysite"/>
                
                
                    <Product title="Harvard University"
                    image='https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png'  href="https://stackoverflow.com/questions/51533178/click-an-image-for-outside-url-react-js/51533282"
                    describe='Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'
                    links=""/>
                    <Product title="Missouri Western State University"
                    image='https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Missouri_Western_State_University_seal.svg/1200px-Missouri_Western_State_University_seal.svg.png' 
                    describe='Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'
                    links=""/>
                
                </div> 
                {/* <College/> */}
                 <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div> 

                <h1 className="heading1">OUR COLLABORATIONS</h1>
                 <div className="home__row">
                    <Product2/>
                    <Product3/>
                    <Product4/>
                    <Product2/>
                    
                </div> 
            {/* <a href="https://www.google.com/">
                        <button className="btn1">Visa Process</button>
                        </a>    */}
            </div>
        </div>
    )
}

export default Homes
