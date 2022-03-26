import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

const List = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(" ");

  const onChange = (e) => {
    setType(e.target.value);
    setRating(e.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.typo} variant="h4">
        Restaurants, Hotels & Attraction around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={onChange}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={onChange}>
          <MenuItem value={0}>All Ratings</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
