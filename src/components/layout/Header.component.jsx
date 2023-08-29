import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(() => ({
    appBar: {
        alignItems: 'center',
        background: '#ffffff',
    },
    toolBar: {
        width: '100%',
        maxWidth: '1000px',
        height: '45px',
        minHeight: 'unset'       
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Toolbar className={classes.toolBar} >
                <img src={'Logo'} alt="scoutingLogo"/>
            </Toolbar>
        </AppBar>
    );
}