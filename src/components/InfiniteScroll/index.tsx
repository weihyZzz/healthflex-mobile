import style from './index.module.less';
import { useDownLoad } from './hooks';

interface IProps {
  hasMore: boolean; // 是否有更多的数据
  loadMore: () => Promise<unknown>;
}
/**
* 无限滚动组件
*/
const InfiniteScroll = ({
  hasMore,
  loadMore,
}: IProps) => {
  const { tips } = useDownLoad({
    hasMore,
    loadMore,
  });
  console.log('tips', tips);
  return (
    <div className={style.container}>
      { hasMore ? tips : '没有更多数据了' }
    </div>
  );
};

export default InfiniteScroll;
