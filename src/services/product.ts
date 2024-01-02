import { GET_PRODUCTS, GET_PRODUCT_TYPES } from '@/graphql/product';
import { DEFAULT_PAGE_SIZE } from '@/utils/constants';
import { TProductTypeQuery, TProductsQuery } from '@/utils/types';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useEffect } from 'react';

export const useProductTypes = () => {
  const { data, loading } = useQuery<TProductTypeQuery>(GET_PRODUCT_TYPES);
  return {
    data: data?.getProductTypes.data || [],
    loading,
  };
};
/**
 * 获取商品列表
 * @param pageNum
 * @param pageSize
 * @param type
 */
export const useProducts = (
  pageNum = 1,
  pageSize = DEFAULT_PAGE_SIZE,
  type = '',
) => {
  const [get, { data }] = useLazyQuery<TProductsQuery>(GET_PRODUCTS);
  useEffect(() => {
    get({
      variables: {
        type,
        page: {
          pageNum,
          pageSize,
        },
      },
    });
  }, []);
  return {
    data: data?.getProductsForH5.data,
  };
};
