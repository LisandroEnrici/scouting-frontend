import { Box, makeStyles } from '@material-ui/core';
import React from 'react'
import scoutingBG from '../../assets/scoutingBG.jpeg'
import Header from './Header.component';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${scoutingBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'white',
        overflowY: 'scroll',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: 'white',
        height: '100%'
    }
}));

export default function Layout({
    children,
    header,
}) {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            {header ? <Header /> : null}
            <Box className={classes.contentContainer}>
                {children}
            </Box>
        </Box>
    );
}
