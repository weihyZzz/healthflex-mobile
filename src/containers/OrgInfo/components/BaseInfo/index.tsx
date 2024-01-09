import { useState, useEffect } from 'react';

import { IOrganization } from '@/utils/types';
import { CheckShieldOutline, EnvironmentOutline, PhoneFill } from 'antd-mobile-icons';
import { Swiper, Image, Grid } from 'antd-mobile';
import style from './index.module.less';

interface IProps {
  data: IOrganization
}
/**
*
*/
const BaseInfo = ({
  data,
}: IProps) => {
  const [state, setState] = useState();
  useEffect(() => {
    console.log(state, setState);
  }, []);
  return (
    <div className={style.container}>
      <div className={style.title}>
        <img src={data.logo} alt="logo" className={style.logo} />
        {data.name}
      </div>
      <div className={style.tags}>
        {
            data.tags?.split(',').map((item) => (
              <span className={style.tagSpan}>
                <CheckShieldOutline />
                <span className={style.tagName}>
                  {item}
                </span>
              </span>
            ))
        }
      </div>
      <div className={style.imgSwiper}>
        <Swiper
          loop
          autoplay
        >
          {
            [...(data.orgFrontImg || []), ...(data.orgRoomImg || [])].map(
              (item) => (
                <Swiper.Item>
                  <Image
                    src={item.url}
                    alt="门店图片"
                    fit="contain"
                  />
                </Swiper.Item>
              ),
            )
            }
        </Swiper>
      </div>
      <div className={style.address}>
        <Grid columns={24}>
          <Grid.Item span={20}>
            <EnvironmentOutline className={style.addressIcon} />
            <a href={`http://api.map.baidu.com/marker?location=${data.latitude},${data.longitude}&title=${data.address}&output=html&content=${data.name}`}>
              <span className={style.addressText}>
                {data.address}
              </span>
            </a>
          </Grid.Item>
          <Grid.Item span={4}>
            <a href={`tel:${data.tel}`}>
              <PhoneFill className={style.phoneIcon} />
            </a>
          </Grid.Item>
        </Grid>
      </div>
    </div>
  );
};

export default BaseInfo;
