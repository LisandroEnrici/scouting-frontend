import React from "react";
import { Box, Tooltip, makeStyles } from "@material-ui/core";
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        heihgt: '100%',
        alignItems: 'center',
        gap: '30px'
    },
    relocatable: {
        color: 'green'
    },
    videoanalytic: {
        color: 'blue'
    }
}))

export default function SkillTag({ relocatable, videoanalytic }) {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            {relocatable ?
                <Tooltip title="Relocatable">
                    <FlightTakeoffIcon className={classes.relocatable} />
                </Tooltip>
                : null}
            {videoanalytic ?
                <Tooltip title="Video analytic">
                    <OndemandVideoIcon className={classes.videoanalytic} />
                </Tooltip>
                : null}
        </Box>
    )
}