import { useState, useEffect } from 'react';

import { useProducts } from '@/services/product';
import { Grid } from 'antd-mobile';
import style from './index.module.less';
import ProductCard from '../ProductCard';

/**
 *
 */
const ProductList = () => {
  const [state, setState] = useState();
  const { data } = useProducts();
  useEffect(() => {
    console.log(state, setState);
  }, []);
  return (
    <div className={style.container}>
      <Grid
        columns={2}
        gap={10}
      >
        {data?.map((item) => (
          <Grid.Item key={item.id}>
            <ProductCard data={item} />
          </Grid.Item>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
