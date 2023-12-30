import { SpinLoading, Tabs } from 'antd-mobile';
import { useProductTypes } from '@/services/product';

import style from './index.module.less';

interface IProps {
  onChange: (key: string) => void;
}
/**
 *
 */
const TypeSelect = ({ onChange }: IProps) => {
  const { data, loading } = useProductTypes();
  if (loading && data.length === 0) {
    return <SpinLoading />;
  }
  return (
    <Tabs
      className={style.tabs}
      defaultActiveKey={data[0].key}
      onChange={onChange}
    >
      {data.map((item) => (
        <Tabs.Tab title={item.title} key={item.key} />
      ))}
    </Tabs>
  );
};

export default TypeSelect;
