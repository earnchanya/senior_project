import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     box: {
          marginTop: '100px',
          marginLeft: '50%',
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
     },
     content: {
          padding: theme.spacing(1, 1, 1, 0),
          marginBottom: 5,
     },
}))

export default function NotFound() {
     const classes = useStyles();
     return (
          <div className={classes.box}>
               <Typography className={classes.content} variant="h5">
                    No results
               </Typography>
          </div>
     );
}