import { SearchBar } from 'antd-mobile';

import style from './index.module.less';
import TypeSelect from './components/TypeSelect';

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
  return (
    <div className={style.container}>
      <SearchBar placeholder="请搜索课程" onSearch={onSearchHandler} />
      <TypeSelect onChange={onTypeChangeHandler} />
    </div>
  );
};

export default Home;
