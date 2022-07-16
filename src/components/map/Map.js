import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import useStyles from './styles';


const Map = ({places,setClicked}) => {
    const classes = useStyles();

      console.log(places);

    return(
        <div className="row">
        {places?.length && places?.map((place, i) => (
          <div className="col-lg-2 col-md-3 col-sm-4" key={i}  onClick={(e) => setClicked(i)}>
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
          </div>
        ))}
        </div>
    );
}

export default Map;
