import { GET_STUDENT_INFO } from '@/graphql/user';
import { connectFactory, useAppContext } from '@/utils/contextFactory';
import { IStudent } from '@/utils/types';
import { useQuery } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';

const KEY = 'studentInfo';
const DEFAULT_VALUE = {

};

export const useUserContext = () => useAppContext(KEY);
export const connect = connectFactory(KEY, DEFAULT_VALUE);

export const useGetStudent = () => {
  const { setStore } = useUserContext();
  const nav = useNavigate();
  const location = useLocation();
  const { loading, refetch } = useQuery<{ getStudentInfo: { data: IStudent } }>(GET_STUDENT_INFO, {
    onCompleted: (data) => {
      if (data.getStudentInfo) {
        console.log('userHooks: data.getStudentInfo.data', data.getStudentInfo.data);
        const {
          id, name, tel, avatar,
        } = data.getStudentInfo.data;
        setStore({
          id, name, tel, avatar, refetchHandler: refetch,
        });
        // 当前在登录页面，且已经登录，就跳到首页
        if (location.pathname === '/login') {
          nav('/');
        }
        return;
      }
      setStore({ refetchHandler: refetch });
      // 不在登录页面，且没登录，直接跳到登录页面
      if (location.pathname !== '/login' && location.pathname !== '/register') {
        nav(`/login?orgUrl=${location.pathname}`);
      }
    },
    onError: () => {
      setStore({ refetchHandler: refetch });
      //   不在登录页面，但是登录异常，也跳到登录页面
      if (location.pathname !== '/login' && location.pathname !== '/register') {
        nav(`/login?orgUrl=${location.pathname}`);
      }
    },
  });
  return { loading };
};
