import { useParams } from 'react-router-dom';
import { useProductInfo } from '@/services/product';
import Hr from '@/components/Hr';
import { Grid, Stepper } from 'antd-mobile';
import { useState } from 'react';
import { useUserContext } from '@/hooks/userHooks';
import style from './index.module.less';

/**
*   购买信息页面
*/
const Buy = () => {
  const { id } = useParams();
  const { data } = useProductInfo(id);
  const [count, setCount] = useState(1);
  const { store } = useUserContext();
  console.log('data', data);
  const buyHandler = () => {
    if (!store.openid) {
      window.location.href = `/wx/login?userId=${store.id}&url=${window.location.href}`;
      return;
    }
    // 微信支付流程
    console.log();
  };
  if (!data) {
    return null;
  }
  return (
    <div className={style.container}>
      <div className={style.organization}>
        <div className={style.logo}>
          <img src={data?.org.logo} alt="" className={style.logoImg} />
        </div>
        <div className={style.orgName}>{data?.org.name}</div>
      </div>
      <Hr />
      <div className={style.title}>{data?.name}</div>
      <div className={style.desc}>{data?.desc}</div>
      <Hr />
      <div className={style.count}>
        购买数量
        <Stepper
          className={style.step}
          min={0}
          value={count}
          onChange={(value) => {
            setCount(value);
          }}
        />
      </div>
      <div className={style.price}>
        小计：￥
        {data.preferentialPrice * count}
        <span className={style.originalPrice}>
          ￥
          {data.originalPrice * count}
        </span>
      </div>
      <Hr />
      <div className={style.user}>
        <span className={style.telLabel}>手机号</span>
        <span className={style.tel}>{store.tel}</span>
      </div>
      <Grid
        columns={2}
        className={style.buyContainer}
      >
        <Grid.Item>
          <span className={style.preferentialPrice}>
            ￥
            {data.preferentialPrice * count}
          </span>
          <span className={style.originalPrice}>
            ￥
            {data.originalPrice * count}
          </span>
        </Grid.Item>
        <Grid.Item
          className={style.buyButton}
          onClick={buyHandler}
        >
          {store.openid ? '提交订单' : '去微信授权'}
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default Buy;
