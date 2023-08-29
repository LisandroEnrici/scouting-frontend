import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScoutCard from './ScoutCard.component';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: 'inherit',
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
                    <ScoutCard scout={scout} key={scout.id} />
                )
            })}
        </Box>
    )
}