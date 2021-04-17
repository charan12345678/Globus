// import React from 'react'
// import "./Product2.css"

// function Product2({title2, image, describe2}) {
//     return (
//         <div className="product2">
//             <div className="product2__info">
//                 <h2>{title2}</h2>
//                 <img 
//                 src={image}/>
//                 <p>{describe2}</p>
//             </div>
//         </div>
//     )
// }

// export default Product2

import React from 'react'
import "./Product2.css"
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

function Product2({title, image, describe}){
    return(
        <div className="product2">
            {/* <div className="product2__info">
                <h2>Hello</h2>
            </div> */}
            <img className="image1"
                // src={image}
                src="/images/one.PNG"
                />
                <h2 className="head1">STUDENT LOANS</h2>
                <p className="para1">I’m a paragraph. Double click me or click Edit Text, it's easy.</p>
                {/* <EmojiObjectsIcon className="pic1"/> */}
            <p className="describe1">{describe}</p>
        </div>
    )
}

function Product3({title,image,describe}){
    return(
        <div className="product3">
            <img 
                // src={image}
                src="/images/two.PNG"
                />
                <h2 className="head1">STUDENT LOANS</h2>
                <p className="para1">I’m a paragraph. Double click me or click Edit Text, it's easy.</p>
                
            <p className="describe1">{describe}</p>
        
        </div>
    )
}

function Product4({title,image,describe}){
    return(
        <div className="product4">
            <img 
                // src={image}
                src="/images/three.PNG"
                />
                <h2 className="head1">STUDENT LOANS</h2>
                <p className="para1">I’m a paragraph. Double click me or click Edit Text, it's easy.</p>
                
            <p className="describe1">{describe}</p>
        
        </div>
    )
}

export {Product2,Product3,Product4}
