import React, { Component } from 'react';
import { Paper, Button, withStyles } from '@material-ui/core';
import style from '../../components/style';

class ViewRole extends Component {
    render() {
      const {classes} = this.props;
        return (
            <div>
                 <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} className={classes.paperStyle} >
          <Button variant="contained" color="primary">
            Read
          </Button>
          <Button variant="contained" color="primary">
            Write
          </Button>
          <Button variant="contained" disabled>
            Delete
          </Button>
      </Paper>
            </div>
        );
    }
}

export default withStyles(style)(ViewRole);