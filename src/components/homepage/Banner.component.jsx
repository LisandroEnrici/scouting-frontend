import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import bannerImg from '../../assets/bannerImage.png'


const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
    },
    img: {
        margin: '0 0 30px 0',
        width: '100%',
        borderRadius: '0 0 20px 20px',
    }
}))

export default function Banner() {
    const classes = useStyles()

    return (
        <Box className={classes.main}>
            <img src={bannerImg} alt='Scouting.com' className={classes.img} />
        </Box>
    )
}