import Home from '@/containers/Home';
import My from '@/containers/My';
import OrgInfo from '@/containers/OrgInfo';
import ProductInfo from '@/containers/ProductInfo';
import { ROUTE_KEY } from './menus';

export const ROUTE_COMPONENT = {
  [ROUTE_KEY.HOME]: Home,
  [ROUTE_KEY.MY]: My,
  [ROUTE_KEY.ORG_INFO]: OrgInfo,
  [ROUTE_KEY.PRODUCT_INFO]: ProductInfo,
};
