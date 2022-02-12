import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  
} from "@mui/material";
const Header = () => {
  return (
    
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Advisor App
          </Typography>
          <Box display="flex">
            
            <Typography variant="h6" className={classes.title}>
              Explore new places
            </Typography>
            <Autocomplete>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
