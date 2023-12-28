import { LeftOutline } from 'antd-mobile-icons';
import { useGoTo, useMatchedRoute } from '@/hooks';
import style from './index.module.less';

/**
*
*/
const Header = () => {
  const route = useMatchedRoute();
  const { back } = useGoTo();
  const onClickHandler = () => {
    back();
  };
  if (route?.hideHeader) {
    return null;
  }
  return (
    <div className={style.container}>
      {
        !route?.isMenu && (
        <LeftOutline
          className={style.back}
          onClick={onClickHandler}
        />
        )
      }
      <div className={style.title}>
        {route?.name}
      </div>
    </div>
  );
};

export default Header;
