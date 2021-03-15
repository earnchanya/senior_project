import ForestBack from '../assets/photo/forest.jpg'
import { SearchIcon } from './Icon'
import { Box, Typography, TextField, InputAdornment } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import usePassQuery from '../common/hooks/usePassQuery';

const useStyles = makeStyles((theme) => ({
     container: {
          position: "relative"
     },
     background: {
          width: "100vw",
          height: "75vh",
          opacity: "0.75",
     },
     boxContainer: {
          position: "absolute",
          width: "40%",
          top: "35%",
          left: "26%",
     },
     textContainer: {
          fontSize: "28px",
          color: "white",
          margin: "1%",
     },
     margin: {
          margin: theme.spacing(1),
     },
     button: {
          margin: theme.spacing(1),
     },
     serachIcon: {
          heigth: "20px",
          width: "20px",
          marginLeft: "8px"   
     },
}));

const ValidationTextField = withStyles({
     root: {
       '& input:valid + fieldset': {
         borderColor: 'white',
         borderWidth: 3,
       },
       '& input:invalid + fieldset': {
         borderColor: 'white',
         borderWidth: 3,
       },
     //   '& input:valid:focus + fieldset': {
     //     borderLeftWidth: 6,
     //     padding: '4px !important', // override inline-style
     //   },
     },
   })(TextField);

   
function Banner()  {
     const classes = useStyles()
     const parseQuery = usePassQuery()

     const handleKeyDown = (event) => {
     if (event.key === "Enter") {
          const category = event.target.value
          parseQuery({ params: {category}, targetUrl: '/results' })
          }
     };
     return (
          <Box className={classes.container}>
               <img className={classes.background} width="100px" alt="background" src={ForestBack}/>
               <Box className={classes.boxContainer}>
                    <Box className={classes.textContainer} >
                         <Typography variant="h4" component="h">
                              Explore
                         </Typography>
                         <Typography variant="h5" component="p">
                              The travel blog reviews from Blue Planet Pantip!
                         </Typography>
                    </Box>
                    <Box className={classes.root}>
                         <ValidationTextField 
                              fullWidth className={classes.margin} id="outlined-basic" variant="outlined" 
                              InputProps={{
                              startAdornment: (
                              <InputAdornment position="start">
                                   <img className={classes.serachIcon} alt="search-icon" src={SearchIcon}/>
                              </InputAdornment>
                              ),
                         }}
                              onKeyDown={handleKeyDown}
                         />
                         {/* <Button
                              variant="contained"
                              color="default"
                              className={classes.button}
                              startIcon={<CloudUpload/>}
                              >s
                              Upload
                         </Button> */}
                    </Box>
               </Box>
          </Box>
     );
}
export default Banner;