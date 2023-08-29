import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LogoImg from '../../assets/logo.png'

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
    },
    logoImg: {
        height: '100%'
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Toolbar className={classes.toolBar} >
                <img src={LogoImg} alt="scoutingLogo"/>
            </Toolbar>
        </AppBar>
    );
}