import axios from "axios";
import React from "react";

const getPlacesData = async () => {
  try {
      const response = await axios.get('')
  } catch (error) {
    console.log(">>>", error);
  }
};
