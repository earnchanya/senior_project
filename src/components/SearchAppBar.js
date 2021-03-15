import React from 'react';
import { AppBar, Toolbar, InputBase, Button } from '@material-ui/core/';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import usePassQuery from '../common/hooks/usePassQuery';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
     root: {
          flexGrow: 1,
     },
     homeIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
     },
     search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
               backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
               marginLeft: theme.spacing(1),
               width: 'auto',
          },
     },
     searchIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
     },
     inputRoot: {
          color: 'inherit',
     },
     inputInput: {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
               width: '15ch',
               '&:focus': {
               width: '50ch',
               },
          },
          },
}));

export default function SearchAppBar() {
     const classes = useStyles();
     const parseQuery = usePassQuery()
     const handleKeyDown = (event) => {
     if (event.key === "Enter") {
          const category = event.target.value
          console.log(category)
          if (category !== "mountain" && category !== "forest" && category !== "sea") {
               parseQuery({ params: {category}, targetUrl: '/NotFound' })
          }
          else {
               parseQuery({ params: {category}, targetUrl: '/results' })
          }
          }
     };

     return (
          <div className={classes.root}>
               <AppBar position="fixed">
                    <Toolbar>
                         <Button className={classes.homeIcon} component={ Link } to="/">
                              <HomeIcon />
                         </Button>
                         <div className={classes.search}>
                              <div className={classes.searchIcon}>
                                   <SearchIcon />
                              </div>
                              <InputBase
                                   placeholder="Search"
                                   classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                   }}
                                   inputProps={{ 'aria-label': 'search' }}
                                   onKeyDown={handleKeyDown}
                              />
                         </div>         
                    </Toolbar>
               </AppBar>
          </div>
     );
}