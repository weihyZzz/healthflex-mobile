import { IProduct } from '@/utils/types';
import { Grid } from 'antd-mobile';
import { PhoneFill } from 'antd-mobile-icons';
import { useUserContext } from '@/hooks/userHooks';
import style from './index.module.less';

interface IProps {
  data: IProduct
}
/**
* 购买课程的底部bar
*/
const BuyBottom = ({
  data,
}: IProps) => {
  const { store } = useUserContext();
  return (
    <Grid columns={10} className={style.container}>
      <Grid.Item span={4}>
        <span className={style.preferentialPrice}>
          ￥
          {data.preferentialPrice}
        </span>
        <span className={style.originalPrice}>
          ￥
          {data.originalPrice}
        </span>
      </Grid.Item>
      <Grid.Item span={2} className={style.tel}>
        <a href={`tel:${store.tel}`}>
          <PhoneFill />
        </a>
      </Grid.Item>
      <Grid.Item span={4} className={style.buyButton}>
        立即抢购
      </Grid.Item>
    </Grid>
  );
};

export default BuyBottom;
