/* eslint-disable max-len */
import { useState, useEffect } from 'react';

import { TabBar } from 'antd-mobile';
import { routes } from '@/routes/menus';
import { useGoTo, useMatchedRoute } from '@/hooks';
import style from './index.module.less';
import SvgWrapper from '../SvgWrapper';

/**
 *
 */
const Bottom = () => {
  const [state, setState] = useState();
  useEffect(() => {
    console.log(state, setState);
  }, []);
  const route = useMatchedRoute();
  const { go } = useGoTo();
  const onTabChangeHandler = (key: string) => {
    go(key);
  };
  // 只有isMenu为true的页面才展示底部菜单栏
  if (!route?.isMenu) {
    return null;
  }
  const iconRender = (is: boolean, icon?: string) => (
    <SvgWrapper src={icon} color={is ? '#01979a' : '#999999'} />
  );
  return (
    <div className={style.container}>
      <TabBar onChange={onTabChangeHandler} activeKey={route?.key}>
        {routes
          .filter((it) => it.isMenu)
          .map((item) => (
            <TabBar.Item
              key={item.key}
              title={item.name}
              icon={(is) => iconRender(is, item.icon)}
            />
          ))}
      </TabBar>
    </div>
  );
};

export default Bottom;
