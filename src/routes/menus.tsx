import courseSvg from '@/assets/course.svg';
import mySvg from '@/assets/my.svg';

interface IRoute {
  path: string;
  name: string;
  icon?: string;
  isMenu?: boolean;
  hideHeader?: boolean; // 是否隐藏 header
}

export const ROUTE_KEY = {
  HOME: 'home',
  MY: 'my',
};

export const ROUTE_CONFIG: Record<string, IRoute> = {
  [ROUTE_KEY.HOME]: {
    path: '',
    name: '精品课程',
    isMenu: true,
    icon: courseSvg,
  },
  [ROUTE_KEY.MY]: {
    path: 'my',
    name: '我的',
    isMenu: true,
    icon: mySvg,
  },
};

export const routes = Object.keys(ROUTE_CONFIG).map((key) => ({ ...ROUTE_CONFIG[key], key }));

export const getRouteByKey = (key: string) => ROUTE_CONFIG[key];
