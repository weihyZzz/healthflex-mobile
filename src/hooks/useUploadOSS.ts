import { useQuery } from '@apollo/client';
import { GET_OSS_INFO } from '../graphql/oss';

export const useUploadOss = () => {
  // 1.获取签名信息
  const { data: d } = useQuery(GET_OSS_INFO);
  console.log('data:', d);
  //   2.执行fetch post请求，将参数传递到服务端
  const uploadHandler = async (file: File) => {
    const formData = new FormData();
    const data = d.getOSSInfo;
    const key = `images/${file.name}`;
    formData.append('key', key);
    formData.append('policy', data.policy);
    formData.append('OSSAccessKeyId', data.accessId);
    formData.append('success_action_status', '200');
    formData.append('signature', data.signature);
    formData.append('file', file);
    const res = await fetch(data.host, {
      method: 'POST',
      body: formData,
    });
    return { url: res.url + key };
  };
  return uploadHandler;
};
