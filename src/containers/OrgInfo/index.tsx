import { useParams } from 'react-router-dom';
import { useOrganization } from '@/services/org';
import { Result } from 'antd-mobile';
import Hr from '@/components/Hr';
import style from './index.module.less';
import BaseInfo from './components/BaseInfo';
import DescInfo from './components/DescInfo';
import RecommendProducts from './components/RecommendProducts';

/**
*
*/
const OrgInfo = () => {
  const { id } = useParams();
  console.log('id', id);
  const { data } = useOrganization(id || '');
  console.log('data', data);
  if (!data) {
    return <Result status="warning" title="提示" description="没有该门店信息" />;
  }
  return (
    <div className={style.container}>
      <BaseInfo data={data} />
      <Hr />
      <DescInfo data={data} />
      <Hr />
      <RecommendProducts orgId={id || ''} />
    </div>
  );
};

export default OrgInfo;
