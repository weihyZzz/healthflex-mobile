import _ from 'lodash';
import { useEffect, useState } from 'react';

const OFFSET = 90;
export const useDownLoad = ({
  hasMore = false,
  loadMore = () => {},
}) => {
  const [tips, setTips] = useState('');
  useEffect(() => {
    window.scroll = _.debounce(async () => {
      // clientHeight 表示用户当前可见的视口高度，
      // scrollTop 表示用户在垂直方向上的滚动距离
      // scrollHeight 表示整个文档内容的总高度
      const { clientHeight, scrollTop } = document.documentElement;
      const { scrollHeight } = document.body;
      if (hasMore && (scrollTop + clientHeight >= scrollHeight - OFFSET)) {
        setTips('加载中...');
        await loadMore();
        setTips('加载完成...');
        setTimeout(() => {
          setTips('');
        }, 1000);
      }
    }, 500);
    return () => {
      window.onscroll = null;
    };
  }, [hasMore]);
  return { tips };
};
