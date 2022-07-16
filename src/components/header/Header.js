import React from "react";
import { Button} from '@material-ui/core'
import {AppBar, Toolbar, Typography, Box} from '@material-ui/core';

import useStyles from './styles';
const Header = ({ onPlaceChanged }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore new places
                </Typography>
                    <div className={classes.search}>
                        <input placeholder="Search.."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className={{ root: classes.inputRoot, input: classes.inputInput}} />
                        <Button size="small" color="primary" onClick={() =>{onPlaceChanged(value)}}>
                          submit
                        </Button>
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
