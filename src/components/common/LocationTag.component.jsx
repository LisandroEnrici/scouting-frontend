import { Box, Typography } from "@material-ui/core";
import React from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function LocationTag({ location }) {
    return (
        <Box style={{display: 'flex', alignItems: 'center', padding: '4px 0 4px 0'}}>
            <LocationOnIcon style={{color: 'grey'}} />
            <Typography style={{color: 'grey'}} >
                {location}
            </Typography>
        </Box>
    )
}