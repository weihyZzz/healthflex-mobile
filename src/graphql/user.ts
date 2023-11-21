import { gql } from '@apollo/client';

export const STUDENT_REGISTER = gql`
mutation studentRegister($account: String!,$password: String!) {
    studentRegister(account: $account,password: $password){
      code
      message
    }
  }
`;
