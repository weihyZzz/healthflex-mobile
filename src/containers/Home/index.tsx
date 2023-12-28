import { Button } from 'antd-mobile';
import { useGoTo } from '@/hooks';
import { ROUTE_KEY } from '@/routes/menus';

import style from './index.module.less';

/**
*
*/
const Home = () => {
  const { go } = useGoTo();
  return (
    <div className={style.container}>
      <Button onClick={() => {
        go(ROUTE_KEY.MY);
      }}
      >
        去编辑个人信息
      </Button>
    </div>
  );
};

export default Home;
