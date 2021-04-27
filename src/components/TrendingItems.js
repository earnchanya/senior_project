import React, { useState, useEffect, lazy } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Box, Grid, Card, CardActionArea, CardActions, 
         CardContent, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'

const DEFAULT_SEARCH = '?filters=0'
const useStyles = makeStyles({
     box: {
          marginTop: '20px',
     },
     gridContainer: {
          overflowX: "scroll",
     },
     cardContent: {
          height: "100px",
          display: 'flex',
          alignItems: 'center',
     },
     root: {
          width: '400px',
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
     },
     button: {
          marginInline: 'auto',
     },
     imageContainer: {
          maxWidth: '400px',
          flexGrow: 1,
     },
})

function TrendingItems () {
     const {search} = useLocation()
     const [threads, setThread] = useState([])
     const classes = useStyles()

     useEffect(() => {
          const basePath = "http://localhost:8020"
          const path = `${ basePath }${ search || DEFAULT_SEARCH }`

          axios
          .get(path)
          .then((res) => {
               if(!res.data?.threads) 
                    return
               setThread(res.data.threads)
               // console.log(res.data.threads)
               // console.log(res.data)
          });
     }, [search]);

     return (
          <Box className={classes.box} paddingX={3}>
               <Grid className={classes.gridContainer} container spacing={3} wrap="nowrap">
                    {(threads).map((thread) => 
                         <Grid item>
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
                                                            src={`https://aoyztzpfum.cloudimg.io/cdno/n/webp/${image}`}
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
                         </Grid>
                    )}
               </Grid>
          </Box>
     )
}

export default TrendingItems;