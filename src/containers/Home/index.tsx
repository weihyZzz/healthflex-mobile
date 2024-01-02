import { SearchBar } from 'antd-mobile';

import { useProducts } from '@/services/product';
import style from './index.module.less';
import TypeSelect from './components/TypeSelect';
import ProductList from './components/ProductList';

/**
*
*/
const Home = () => {
  const onSearchHandler = (val: string) => {
    console.log('val', val);
  };
  const onTypeChangeHandler = (key: string) => {
    console.log('key', key);
  };
  useProducts();
  return (
    <div className={style.container}>
      <SearchBar placeholder="请搜索课程" onSearch={onSearchHandler} />
      <TypeSelect onChange={onTypeChangeHandler} />
      <ProductList />
    </div>
  );
};

export default Home;
