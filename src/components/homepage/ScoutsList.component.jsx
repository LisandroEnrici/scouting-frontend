import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        padding: '30px',
        borderRadius: '20px 20px 0 0',
        background: 'white'
    }
}))

export default function ScoutsList({ scoutsList }) {
    const classes = useStyles()
    console.log(scoutsList)

    return (
        <Box className={classes.main}>
            {scoutsList.map((scout) => {
            return (
            <Typography >
                {scout.name}
            </Typography>
            )
        })}
        </Box>
    )
}