import React, { Component } from 'react';
import { Select, MenuItem, FormControl, FormLabel, Typography, withStyles } from '@material-ui/core';
import style from '../style';

const rOption = [
    { value: 'trainee', label: 'Trainee'},
    { value: 'reviewer', label: 'Reviewer'},
    { value: 'headTrainee', label: 'Head-Trainee'},
  ];

class UserPermission extends Component {
    constructor(props) {
        super(props)
        this.state = {
          role: '',
          currentValue: '',
          error: '',
          dataStore: 'validation',
        }
      }
      handleChange = name => (event) => {
        console.log('inside HandleChange----', this.state);
         this.setState({
           [name]: event.target.value,
         });
       };

    render() {
        const { classes } = this.props;
        const { currentValue } = this.state;
        return (
            <div>
                <FormControl className={classes.formStyle}>
                  <FormLabel component="legend">Select role :</FormLabel>
            <br />
            <FormControl variant="outlined" className={classes.formControl}>
            <Select
            value={currentValue}
            name="xyz"
            onChange={this.handleChange('currentValue')}
            >
            {rOption.map(field => (
              <MenuItem value={field.value}>
                {field.label}
              </MenuItem>
          ))}
          </Select>
        </FormControl>
        </FormControl>
            </div>
        );
    }
}

export default withStyles(style)(UserPermission);