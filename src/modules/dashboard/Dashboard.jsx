import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";
// import { MenuIcon } from '@material-ui/icons';
import MenuIcon from "@material-ui/icons/Menu";
import User from "../../components/user";
import style from "../../components/style";

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" className>
            News
          </Typography> */}
            <Link to="/list">
              <Button color="white" className={classes.btnText}>
                View Trainee
              </Button>
            </Link>
            {/* <Button color="inherit" >View Trainee</Button> */}
          </Toolbar>
        </AppBar>
        <User />
      </div>
    );
  }
}

export default withStyles(style)(Dashboard);
