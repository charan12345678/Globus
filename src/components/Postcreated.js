import React from 'react'
import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter  } from "react-router-dom";
import { Link } from "react-router-dom";
import "./socialhub.css"
import Visa1  from "./Visa1"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./socialhub.css"
import CardMedia from '@material-ui/core/CardMedia';
import Select, { Option, ReactSelectProps } from 'react-select';
import {useLocation} from 'react-router-dom'

function Postcreated(props) {
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
          height: 950,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 2,
        },
      })
      const classes = useStyles();
      const bull = <span className={classes.bullet}>•</span>;
      // const abcd = props.location.state;
      const { data } = props.location.state ;
    
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
         <Link to="/" style={{ textDecoration: 'none' }}> <button className="btn2">Social Hub</button> </Link>
         </div>
         <div className="cont">
         <Link to="/" style={{ textDecoration: 'none' }}> <button className="btn2">About Us</button> </Link>
         </div>
         <div className="cont">
         <Link to="/" style={{ textDecoration: 'none' }}> <button className="btn2">Log In</button> </Link>
         </div>
        </div>
        </div>
        <div id ="wrapper">
        <h1 className="head1">
        <span> </span>
        </h1>
        <div>
            <h2>
            <span></span>
            </h2>
        </div>
           <div className="card">
                <Card className={classes.root}>
                <CardContent>
                <Typography variant="h5" component="h2">
                <div className="newStyles">
                {data}
                </div>
                </Typography>
                </CardContent>
                </Card>
          </div>
        <div id="a" className="bimage">
        </div>
        <div id="b" className="box1">
        <h1> </h1>
        </div>
        </div>
        </div>
    )
}

export default Postcreated
