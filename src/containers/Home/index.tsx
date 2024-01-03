import { SearchBar } from 'antd-mobile';

import { useProducts } from '@/services/product';
import { useState } from 'react';
import style from './index.module.less';
import TypeSelect from './components/TypeSelect';
import ProductList from './components/ProductList';

/**
*
*/
const Home = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const onSearchHandler = (val: string) => {
    setName(val);
  };
  const onTypeChangeHandler = (key: string) => {
    setType(key);
  };
  useProducts();
  return (
    <div className={style.container}>
      <SearchBar placeholder="请搜索课程" onSearch={onSearchHandler} />
      <TypeSelect onChange={onTypeChangeHandler} />
      <ProductList name={name} type={type} />
    </div>
  );
};

export default Home;
