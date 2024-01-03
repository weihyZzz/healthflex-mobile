import { useProducts } from '@/services/product';
import { ErrorBlock, Grid, PullToRefresh } from 'antd-mobile';
import style from './index.module.less';
import ProductCard from '../ProductCard';

interface IProps {
  name: string; // 搜索的关键字
  type: string; // 商品分类
}
/**
 * 商品列表页
 */
const ProductList = ({
  name,
  type,
}: IProps) => {
  const { onRefresh, data } = useProducts(name, type);
  if (data && data.length === 0) {
    return <ErrorBlock status="empty" />;
  }
  return (
    <div className={style.container}>
      <PullToRefresh onRefresh={onRefresh}>
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
      </PullToRefresh>
    </div>
  );
};

export default ProductList;
