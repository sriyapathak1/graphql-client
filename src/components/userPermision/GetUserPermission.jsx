import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_PERMISSION } from '../../graphql/query';
import CardTable from './CardTable';

class UserTable extends Component {
    render() {
        return (
           <Query query = {GET_PERMISSION}>
               {
                   ({loading, error, data}) => 
                   {
                       if(error) {
                           return "error while loading data"
                       } if(loading) {
                         return <h1>Loading............</h1>
                       }
                       if(data){
                       console.log('-------data---', data);
                       }
                       return (
                           <CardTable>data </CardTable>
                       )
                       
                   }
               }
           </Query>
        );
    }
}

export default UserTable;