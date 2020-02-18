import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { GET_ROLE } from '../../graphql/query';
import * as yup from 'yup';
import { TextField, withStyles, Card, Button, FormLabel, Typography, MenuItem, FormControl,
  Select } from '@material-ui/core';
import style from './style';
// import UserPermission from "../userPermision/UserPermission";

const rOption = [
  { value: 'trainee', label: 'Trainee'},
  { value: 'reviewer', label: 'Reviewer'},
  { value: 'headTrainee', label: 'Head-Trainee'},
];
const errorMsg = {
  email: 'Email is required',
  role:'Role is required',
}
const Schema = yup.object().shape({
  // emailAddress: yup.string().email(errorMsg.email).required(),
  emailAddress: yup
      .string()
      .email()
      .required(),
      // role: yup.string().required(errorMsg.role),
});
 class User extends Component {

  constructor(props) {
    super(props)
    this.state = {
      role: '',
      currentValue: 'choose...',
      emailAddress: '',
      error: '',
      dataStore: 'validation',
      disabled:'disabled',
      redirect:false
    }
  }
  
  handleChange = field => (event) => {
    console.log('----email-validation && check value-----', event.target);
    
    this.setState({[field]:event.target.value},
        () => this.handleValidate((field)));
}
handleStore = () => {
  const { dataStore } = this.state;
  if(dataStore){

  }
}
handleValidate = (e) => {
    const { emailAddress, role, dataStore, disabled } = this.state;
    console.log('------email state====', this.state);
    if(dataStore === 'validation' ){
    Schema.validate(
        {emailAddress},
        {abortEarly:false},
    )
    .then(() => {
      this.setState({
        role: '',
        currentValue: '',
        emailAddress: '',
        error: '',
        dataStore: '',
      })
        console.log('success');
        this.setState({disabled:''});
    })
    .catch((error) => {
        console.log('email is not valid ', error);
        this.setState({disabled:'disabled'});
    });
  } else{
    console.log('function -failed===/// ');
    
  }
  }

  onChangeRolo(e) {
    this.setState({ role: e.target.value })
    console.log('selected role is --', e.target);
    
  }

handleSubmit = evt => {
  // const { emailAddress } = this.state;
  // if (!this.canBeSubmitted()) {
  //   evt.preventDefault();
  //   return;
  // }
  

};

canBeSubmitted() {
  const { emailAddress} = this.state;
  return emailAddress.length > 0 ;
}
postData = async () => {
  const { currentValue } = this.state;
  const { client } = this.props;
  console.log('------role isssssssssssss', currentValue)
  console.log('------CLIENT isssssssssssss', this.props)

  const { data, error, loading } = await client.query({
  query: GET_ROLE,
  variables:  {
    role: "head-trainer",
  },
  })

  console.log(data,'>>>>>>>>>>>>>>data');

  this.setState({data})
  this.setState({redirect:true});
  }
  render() {
    const { classes } = this.props;
    const { currentValue, value, error, emailAddress,disabled,redirect } = this.state;
    const isEnabled = this.canBeSubmitted();
    console.log('=====isEnabled----', isEnabled);
    

    return (<div className={classes.desc}>
       <Card className={classes.root}>
        <form className={classes.formStyle} action="">
          <TextField id="outlined-basic" label="Email"
          variant="outlined"
          onBlur={this.handleValidate.emailAddress}
          // error={error.incudes(errorMsg.email)}
          required="required"
          helperText={<p>{error.includes(errorMsg) ? errorMsg: ''  }</p>}
          // value
          onChange={this.handleChange('emailAddress')}
          //  value={this.state.email} onChange={this.onChangeStudentEmail} 
           />
           <Typography>{}</Typography>
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
          {/* <UserPermission /> */}
          {/* <Link to="/viewrole"> */}
          <Button className={classes.btnText}
           variant="contained" color="secondary" 
           disabled={disabled}
           onClick={this.postData}>
            Submit
          </Button>
              {redirect && <Redirect to="/viewrole" /> }
            {/* </Link> */}

        </form>
      </Card>
        </div>);
  }
}
export default withApollo(withStyles(style)(User));