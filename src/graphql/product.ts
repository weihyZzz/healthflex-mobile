import { gql } from '@apollo/client';

export const GET_PRODUCT_TYPES = gql`
query getProductTypes{
  getProductTypes{
    data {
      key
      title
    }
  }
}
`;
export const GET_PRODUCTS = gql`
  query getProductsForH5($page: PageInput!,$latitude: Float!, $longitude: Float!, $name: String, $type: String) {
    getProductsForH5(page: $page,latitude: $latitude, longitude: $longitude, name: $name, type: $type){
      code
      message
      page {
        total
        pageNum
        pageSize
      }
      data {
        id
        limitBuyNumber
        name
        coverUrl
        bannerUrl
        desc
        originalPrice
        stock
        status
        distance
        preferentialPrice
        org {
          id
          name
        }
      }
    }
  }
`;
