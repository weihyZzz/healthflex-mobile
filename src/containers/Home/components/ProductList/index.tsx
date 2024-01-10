import { useProducts } from '@/services/product';
import {
  ErrorBlock, Grid, InfiniteScroll, PullToRefresh,
} from 'antd-mobile';
import { useGoTo } from '@/hooks';
import { ROUTE_KEY } from '@/routes/menus';
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
  const { go } = useGoTo();
  const {
    onRefresh, data, hasMore, loadMore,
  } = useProducts(name, type);
  if (data && data.length === 0) {
    return <ErrorBlock status="empty" />;
  }
  const goProductInfo = (id: string) => {
    go(ROUTE_KEY.PRODUCT_INFO, { id });
  };
  return (
    <div className={style.container}>
      <PullToRefresh onRefresh={onRefresh}>
        <Grid
          columns={2}
          gap={10}
        >
          {data?.map((item) => (
            <Grid.Item key={item.id} onClick={() => goProductInfo(item.id)}>
              <ProductCard data={item} />
            </Grid.Item>
          ))}
        </Grid>
      </PullToRefresh>
      <InfiniteScroll hasMore={hasMore} loadMore={loadMore} />
    </div>
  );
};

export default ProductList;
