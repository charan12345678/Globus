// import React from 'react';
// import"./College.css"
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//       minWidth: 500,
//       height:500
//     },
//   });

// function College() {
//     const classes = useStyles();
//     return (
//         <div>

        
//         <div className="cards">
//             <div className="card">
//                 <Card className={classes.root}>
//                     <CardActionArea>
//                         <CardMedia
//                             component="img"
//                             alt="Contemplative Reptile"
//                             height="350"
//                             image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
//                             title="Contemplative Reptile"
//                         />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="h2">
//                         Lizard
//                         </Typography>
//                         <Typography variant="body2" color="textSecondary" component="p">
//                         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                         across all continents except Antarctica
//                         </Typography>
//                     </CardContent>
//                     </CardActionArea>
//             </Card>
//             </div>

//             <div className="card">
//             <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             alt="Contemplative Reptile"
//             height="350"
//             image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//               across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//             </div>

//             <div className="card">
//             <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             alt="Contemplative Reptile"
//             height="350"
//             image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//               across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//             </div>

//             <div className="card">
//             <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             alt="Contemplative Reptile"
//             height="350"
//             image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//               across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//             </div>

//             <div className="card">
//             <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             alt="Contemplative Reptile"
//             height="350"
//             image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//               across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//             </div>

//             <div className="card">
//             <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             alt="Contemplative Reptile"
//             height="350"
//             image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//               across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//             </div>
        
//         </div>
//         <h1>hello</h1>
//         </div>
//     )
// }

// export default College

import React from 'react';
import"./College.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Carousel from './Carousel';
import {Link} from "react-router-dom"

const useStyles = makeStyles({
    root: {
      minWidth: 500,
      height:550
    },
    media: {           // this is the`className` passed to `CardMedia` later
    //height: 100,     // as an example I am modifying width and height
    width: '100%',
    height: 350,
  },
  

  });

function College() {
    const classes = useStyles();
    return (
        <div className="college">
        {/* <Carousel/> */}

        <h1 className="college__head">OUR PARTNERS</h1>
        <div className="cards">
          
            <div className="card">
                <Card className={classes.root}>
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
                    
            </Card>
            </div>

            <div className="card">
            <Card className={classes.root}>
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
      </Card>
            </div>

            <div className="card">
            <Card className={classes.root}>
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
      </Card>
            </div>

            <div className="card">
            <Card className={classes.root}>
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
      </Card>
            </div>
            <div className="card">
            <Card className={classes.root}>
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
      </Card>
            </div>
            <div className="card">
            <Card className={classes.root}>
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
      </Card>
            </div>
            <div className="card">
            <Card className={classes.root}>
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
      </Card>
            </div>
            <div className="card">
            <Card className={classes.root}>
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
      </Card>
            </div>

            

            
        
        </div>
        {/* <h1>hello</h1> */}
        
        
        </div>
    )
}

export default College