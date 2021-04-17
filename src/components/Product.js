
import { Card } from '@material-ui/core'
import React from 'react'
import "./Product.css"

function Product({title, image, describe, rating,links}){
    return(
        <Card className="product">
            <div className="product__info">
                <h2>{title}</h2>
            </div>
            <img
                src={image} 
            />
            
            <p className="describe1">{describe}</p>
            <a className="links" href={links}>
                <button className="button1">Details</button>
            </a>
        </Card>
    )
}

export default Product