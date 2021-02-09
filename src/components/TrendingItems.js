import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import {  ThreadContainer } from '../assets/css/TrendingStyled'
import {
     Card,
     // CardGroup,
     // CardImg,
     // CardBlock,
     CardTitle,
     // CardSubtitle,
     // CardText,
     Button,
   } from '../../node_modules/@bootstrap-styled/v4';
// import Sea1 from '../assets/photo/sea6424.jpg'
import axios from 'axios'

const DEFAULT_SEARCH = '?filters=0'

function TrendingItems () {
     const height = '310px';
     const width = '500px';
     const {search} = useLocation()
     const [threads, setThread] = useState([])

     useEffect(() => {
          const basePath = "http://localhost:8080"
          const path = `${basePath}${search ||DEFAULT_SEARCH}`

          axios
          .get(path)
          .then((res) => {
               if(!res.data?.threads) 
                    return
               
               setThread(res.data.threads)
               console.log(res.data)
          });
     }, [search]);

     return (
          <ThreadContainer>
               {(threads).map(thread => 
                    <Card>
                         {/* <img height={height} width={width} src={window.location.origin +'image_backend/forest01.jpg'} alt="Card image cap" /> */}
                         <img height={height} width={width} src="https://f.ptcdn.info/060/067/000/q1m3bm383BbYpZn4Y7W-o.png" alt="Card image cap" />
                         <CardTitle>{thread.title}</CardTitle>
                         {console.log(thread.images_path[0])}
                         <a target="_blank" href={thread.permalink}>
                              <Button>Click</Button>
                         </a>
                    </Card>
               )}
          </ThreadContainer>
     )
}

export default TrendingItems;