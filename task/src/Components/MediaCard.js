import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActions } from "@material-ui/core";
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card} >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.opp.cover_photo_urls}
            title={props.opp.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.opp.title}
            </Typography>
            <Typography component="p">
              <h3> Partner : {props.opp.branch.name}</h3>
              <h4 align="left"> Location : {props.opp.branch.location} </h4>
              <h4 align="right"> Duration : {props.opp.branch.duration}</h4>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
