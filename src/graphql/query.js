import gql from 'graphql-tag';
// import gql from 'apollo-boost';

export const GET_USER = gql`
query{
  getUser{
    data{
      trainee
      reviewer
    }
  }
}
`;
export const GET_ROLE = gql`
query getPermission($role:String){
  getPermission(role:$role){
    accessRole{
     role
    }
  }
}
`;



