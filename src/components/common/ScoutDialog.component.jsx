import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import LocationTag from './LocationTag.component';
import defaultImg from '../../assets/defaultProfilePicture.png'

const useStyles = makeStyles((theme) => ({

    dialogContent: {
        display: 'flex'
    },
    img: {
        maxHeight: '150px',
        maxWidth: '150px',
        borderRadius: '5px'
    },
    contentContainer: {
        [theme.breakpoints.down('md')]: {
            height: '-webkit-fill-available'
        }
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px',
        [theme.breakpoints.down('md')]: {
            padding: '20px'
        }
    },
    description: {
        [theme.breakpoints.up('md')]: {
            maxHeight: '300px',
            overflow: 'auto'
        }
    }
}))


export default function ScoutDialog({ scout, open, handleClose }) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="scoutDialog"
            className={classes.main}
        >
            <DialogTitle id="scoutDialog">{scout?.name}</DialogTitle>
            <Divider />
            <Grid container justifyContent='center' alignItems='center' className={classes.contentContainer}>
                <Grid item className={classes.column} alignItems='center' md={4} xs={12}>
                    <img
                        src={scout.image || defaultImg}
                        alt='Profile photo'
                        className={classes.img}
                    />
                </Grid>
                <Grid item className={classes.column} md={8} xs={12}>
                    <DialogContentText className={classes.description} >
                        {scout?.description}
                    </DialogContentText>
                    <LocationTag location={scout?.location} />
                </Grid>
            </Grid>
            <Divider />
            <DialogActions>
                <Button color='secondary' variant='contained' onClick={handleClose}>
                    Close
                </Button>
                <Button color='primary' variant='contained' endIcon={<MailIcon />}>
                    Contact
                </Button>
            </DialogActions>
        </Dialog>
    );
}
