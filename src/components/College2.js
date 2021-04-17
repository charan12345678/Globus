import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import"./College.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 500,
    height:550,
    paddingLeft:'10px'
  },
  media: {           // this is the`className` passed to `CardMedia` later
  //height: 100,     // as an example I am modifying width and height
  width: '100%',
  height: 350,
  paddingLeft:'10px'
},

});


function College2(props){
const classes = useStyles();
const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 824 },
      items: 3,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className="college">
    <h1 className="college__head">OUR PARTNERS</h1>
  <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    infinite={true}
    keyBoardControl={true}
    customTransition="transform 1000ms ease-in-out"
    transitionDuration={1000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    <div><Card className={classes.root}>
    <CardActionArea>
        <CardMedia
        // className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            height="385"
            image="https://scholarship-positions.com/wp-content/uploads/2020/07/Northwest-International-Achievement-Scholarship-USA-1024x597.png"
            title="Contemplative Reptile"
        />
    <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Northwest State Missouri University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
        across all continents except Antarctica
        </Typography>
    </CardContent>
    </CardActionArea>
    {/* <Link to="College-details"> */}
        <a href="https://abhinavreddy2703.wixsite.com/mysite" ><button className="college__details">Details</button></a>
    {/* </Link> */}
    
</Card></div>
    <div style={{paddingLeft: '20px'}}><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      // className={classes.media}
        component="img"
        alt="Harvard University"
        height="395"
        image="https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Harvard University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h3">
          {/* <h3> */}
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          {/* </h3> */}
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <a href="https://abhinavreddy2703.wixsite.com/mysite" ><button className="college__details">Details</button></a>
  </Card></div>
    <div style={{paddingLeft: '20px'}}><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      className={classes.media11}
        component="img"
        alt="Missouri Western State University"
        height="395"
        image="https://jonessign.com/wp-content/uploads/2016/07/mwsu_logo.svg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Missouri Western State University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
    <div style={{paddingLeft: '20px'}}><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      className={classes.media11}
        component="img"
        alt="Missouri Western State University"
        height="395"
        image="https://jonessign.com/wp-content/uploads/2016/07/mwsu_logo.svg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Missouri Western State University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
    <div style={{paddingLeft: '20px'}}><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      className={classes.media11}
        component="img"
        alt="Missouri Western State University"
        height="395"
        image="https://jonessign.com/wp-content/uploads/2016/07/mwsu_logo.svg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Missouri Western State University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
    <div style={{paddingLeft: '20px'}}><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      className={classes.media11}
        component="img"
        alt="Missouri Western State University"
        height="395"
        image="https://jonessign.com/wp-content/uploads/2016/07/mwsu_logo.svg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Missouri Western State University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
    <div><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      className={classes.media11}
        component="img"
        alt="Missouri Western State University"
        height="395"
        image="https://jonessign.com/wp-content/uploads/2016/07/mwsu_logo.svg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Missouri Western State University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
    <div><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      className={classes.media11}
        component="img"
        alt="Missouri Western State University"
        height="395"
        image="https://jonessign.com/wp-content/uploads/2016/07/mwsu_logo.svg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Missouri Western State University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
    <div><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      className={classes.media11}
        component="img"
        alt="Missouri Western State University"
        height="395"
        image="https://jonessign.com/wp-content/uploads/2016/07/mwsu_logo.svg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Missouri Western State University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
    <div><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      className={classes.media11}
        component="img"
        alt="Missouri Western State University"
        height="395"
        image="https://jonessign.com/wp-content/uploads/2016/07/mwsu_logo.svg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Missouri Western State University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
    <div><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      className={classes.media11}
        component="img"
        alt="Missouri Western State University"
        height="395"
        image="https://jonessign.com/wp-content/uploads/2016/07/mwsu_logo.svg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Missouri Western State University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
    <div><Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      className={classes.media11}
        component="img"
        alt="Missouri Western State University"
        height="395"
        image="https://jonessign.com/wp-content/uploads/2016/07/mwsu_logo.svg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Missouri Western State University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
    <div><Card className={classes.root}>
    <CardActionArea>
        <CardMedia
        // className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            height="385"
            image="https://scholarship-positions.com/wp-content/uploads/2020/07/Northwest-International-Achievement-Scholarship-USA-1024x597.png"
            title="Contemplative Reptile"
        />
    <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Northwest State Missouri University
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
        across all continents except Antarctica
        </Typography>
    </CardContent>
    </CardActionArea>
    {/* <Link to="College-details"> */}
        <a href="https://abhinavreddy2703.wixsite.com/mysite" ><button className="college__details">Details</button></a>
    {/* </Link> */}
    
</Card></div>
  </Carousel>
  </div>
  )
}

export default College2