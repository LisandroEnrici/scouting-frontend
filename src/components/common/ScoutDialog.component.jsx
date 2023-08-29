import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import { Box, Divider, Grid, Typography, makeStyles } from '@material-ui/core';
import LocationTag from './LocationTag.component';
import defaultImg from '../../assets/defaultProfilePicture.png'
import SkillTag from './SkillTag.component';

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        display: 'flex',
        height: '50px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px 0 20px',
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


export default function ScoutDialog({ scout, open, handleClose, handleClickContact }) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="scoutDialog"
        >
            <Box className={classes.titleContainer}>
                <Typography variant='h6'>
                    {scout?.name}
                </Typography>
                <SkillTag relocatable={scout?.relocatable} videoanalytic={scout?.videoanalytic} />
            </Box>
            <Divider />
            <Grid container justifyContent='center' alignItems='center' className={classes.contentContainer}>
                <Grid item className={classes.column} alignItems='center' md={4} xs={12}>
                    <img
                        src={scout.image || defaultImg}
                        alt='Profile'
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
                <Button color='primary' variant='contained' endIcon={<MailIcon />} onClick={handleClickContact}>
                    Contact
                </Button>
            </DialogActions>
        </Dialog>
    );
}
