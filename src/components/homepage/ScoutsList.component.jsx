import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScoutCardContainer from '../../containers/homepage/ScoutCard.container';

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
    const classes = useStyles();

    return (
        <Box className={classes.main}>
            <Grid container justifyContent='center' spacing={3} >
                {scoutsList.map((scout) => {
                    return (
                        <Grid item style={{ display: 'flex', justifyContent: 'center' }} md={4} sm={6} xs={12}>
                            <ScoutCardContainer scout={scout} key={scout.id} />
                        </Grid>
                    )
                })
                }
            </Grid>
        </Box>
    )
}