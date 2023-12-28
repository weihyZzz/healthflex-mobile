interface IRoute {
  path: string;
  name: string;
  icon?: React.ReactNode;
  hideInMenu?: boolean;
}

export const ROUTE_KEY = {
  HOME: 'home',
  MY: 'my',
};

export const ROUTE_CONFIG: Record<string, IRoute> = {
  [ROUTE_KEY.HOME]: {
    path: '',
    name: '首页',
  },
  [ROUTE_KEY.MY]: {
    path: 'my',
    name: '个人信息',
  },
};

export const routes = Object.keys(ROUTE_CONFIG).map((key) => ({ ...ROUTE_CONFIG[key], key }));

export const getRouteByKey = (key: string) => ROUTE_CONFIG[key];