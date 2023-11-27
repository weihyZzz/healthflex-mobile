/* eslint-disable no-empty-pattern */

import { useNavigate } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { useUserContext } from '@/hooks/userHooks';
import style from './index.module.less';

/**
*
*/
const Home = ({}) => {
  const nav = useNavigate();
  const { store } = useUserContext();
  return (
    <div className={style.container}>
      <Button onClick={() => {
        nav('/my');
      }}
      >
        去编辑个人信息
        {' '}
        {store.id}
      </Button>
    </div>
  );
};

export default Home;
