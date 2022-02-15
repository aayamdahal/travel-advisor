import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  title: {
    display: "none",
  },
  search: {
    position: "relative",
    borderRadius: "10px",
    backgroundColor: "#ccccc",
    "&:hover": { backgroundColor: "#f6f6f6" },
    marginRight: "10px",
    marginLeft: 0,
    width: "100%",
  },
  searchIcon: {
    padding: "10px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: "1rem",
    paddingLeft: "1rem",
    width: "100%",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
