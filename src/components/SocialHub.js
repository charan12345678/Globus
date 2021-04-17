import React from 'react'
import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter  } from "react-router-dom";
import { Link } from "react-router-dom";
import "./socialhub.css"
import Visa1  from "./Visa1"
import SocialHubHeader from "./SocialHubHeader"
import CreatePost from "./CreatePost"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Select, { Option, ReactSelectProps } from 'react-select';

function SocialHub(props) {
    let topics = [{'src':'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$','topic':'General Discussions'},
    {'src':'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80','topic':'Growing your own food'},
    {'src':'https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg','topic':'Indoor Plants'},
    {'src':'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80','topic':'Pests and pesticides'} ];
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
    const handleChange = (e) => {
      props.history.push(`/${e.target.value}`);
    };
      const classes = useStyles();
      const bull = <span className={classes.bullet}>•</span>;
    
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
        <span>  </span>
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
                <select onChange = {handleChange}>
                  <option>Create a New Post</option>
                  <option value="createpost">Start a discussion</option>
                  <option value="">Ask a question</option>
                </select>
                </div>
                <div className="mar">
                <SocialHubHeader/>
                {topics.map((item,index)=>{
                  return(
                    <div className="fle">
                    <div>
                    <Link to="/">
                    <img className="imager" src={item.src} alt="slide-img"></img>
                    </Link>
                    </div>
                    <div style={{ width: '700px' }}> 
                    <Link to="/" style={{ textDecoration: 'none' }}>
                    <h4 className="new"> {item.topic}</h4>
                    </Link>
                    <span className="new1">Describe your forum category. Engage your aud...</span>
                    </div>
                    <Link to="/visa" style={{ textDecoration: 'none' }}>
                    <div className="cont3"> Follow</div>
                    </Link>
                    </div>
                  )
                })
              }
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

export default withRouter(SocialHub)
