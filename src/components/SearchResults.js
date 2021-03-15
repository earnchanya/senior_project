import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Box, Grid, Card, CardActionArea, CardActions, 
     CardContent, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'

const useStyles = makeStyles({
     box: {
          marginTop: '100px',
     },
     gridContainer: {
          direction: "column",
     },
     cardContent: {
          height: "100px",
          display: 'flex',
     },
     root: {
          width: '400px',
          marginBottom: '10px',
          marginLeft: '20px',
          alignItems: "center",
     },
     media: {
          height: '210px',
          display: 'block',
          maxWidth: 400,
          overflow: 'hidden',
          width: '100%',
     },
     buttonText: {
          fontSize: '20px',
          // color: 'black'
     },
     button: {
          marginInline: 'auto',
     },
     imageContainer: {
          maxWidth: '400px',
          flexGrow: 1,
     },
})

function SearchResults () {
     const classes = useStyles()
     const {search} = useLocation()
     const [threads, setThread] = useState([])

     useEffect(() => {
          const basePath = "http://localhost:8020/results"
          const path = `${ basePath }${ search }`

          axios
          .get(path)
          .then((res) => {
               if(!res.data?.threads) 
                    return
               setThread(res.data.threads)
          });
     }, [search]);
     
     return (
          <Box className={classes.box} paddingX={3}>
               <Grid className={classes.gridContainer} container >
                    <Grid container item xs={12} spacing={50} justify="center">
                         {(threads).map((thread) => 
                         <Card className={classes.root}>
                              <CardActionArea>
                                   <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                             {thread.title}
                                        </Typography>
                                   </CardContent>
                                   <SwipeableViews enableMouseEvents>
                                        { thread.images.map((image, index) => {
                                             return (
                                                  <img
                                                       className={classes.media}
                                                       key={index}
                                                       src={image}
                                                       alt="card-props"
                                                  />
                                             )
                                        })}
                                   </SwipeableViews>
                              </CardActionArea>
                              <CardActions>
                                   <Button className={classes.button} varient="outlined" size="large" color="secondary" href={thread.permalink}>
                                        <Typography className={classes.buttonText}>
                                             Read more
                                        </Typography>
                                   </Button>
                              </CardActions>
                         </Card>
                         )}
                    </Grid>
               </Grid>
          </Box>
     )
}

export default SearchResults;