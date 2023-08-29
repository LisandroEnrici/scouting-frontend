import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LimitedTypography from '../common/LimitedTypography.component';
import LocationTag from '../common/LocationTag.component';
import MailIcon from '@material-ui/icons/Mail';
import { IconButton } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const DESCRIPTION_LIMIT = 160

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '300px',
    height: '450px'
  },
  media: {
    height: '200px',
    width: '100%'
  },
  content: {
    padding: '16px 16px 0 16px'
  },
  actions: {
    display: 'flex',
    justifyContent: 'end'
  }
});

export default function ScoutCard({ scout }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://cdn5.vectorstock.com/i/1000x1000/19/89/male-profile-icon-white-on-the-blue-background-vector-3451989.jpg'
          title='Profile photo'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h5' component='h2'>
            {scout?.name}
          </Typography>
          <LimitedTypography variant='body2' color='textSecondary' component='p' limit={DESCRIPTION_LIMIT}>
            {scout?.description}
          </LimitedTypography>
          <LocationTag location={scout?.location} />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
      <IconButton aria-label='add to My Scouts' color='secondary'>
        <PersonAddIcon />
      </IconButton>
        <Button color='primary' variant='contained' endIcon={<MailIcon/>}>
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}
