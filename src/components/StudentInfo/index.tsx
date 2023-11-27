import { connect, useGetStudent } from '@/hooks/userHooks';
import { IPropChild } from '@/utils/types';
import { DotLoading } from 'antd-mobile';

const StudentInfo = ({ children }: IPropChild) => {
  const { loading } = useGetStudent();
  if (loading) {
    return <DotLoading />;
  }
  return (
    <div style={{ height: '100vh' }}>
      {children}
    </div>
  );
};
export default connect(StudentInfo);
