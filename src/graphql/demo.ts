import { gql } from '@apollo/client';

export const FIND = gql`
query find($id: String!){
    find(id: $id){
          name
      desc
    }
  }
`;
export const UPDATE = gql`
mutation update($id: String!,$params: UserInput!){
    update(id: $id, params: $params)
  }
`;
