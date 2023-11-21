/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable max-len */
import { Input, Form, Button } from 'antd-mobile';
import { useMutation } from '@apollo/client';
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons';
import * as md5 from 'md5';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { STUDENT_LOGIN } from '../../graphql/user';
import style from './index.module.less';
import { showFail, showSuccess } from '../../utils';

interface IValue {
  account: string;
  password: string;
}
/**
*
*/
const Login = () => {
  const [form] = Form.useForm();
  const [visiable, setVisiable] = useState(false);
  const [login, { loading }] = useMutation(STUDENT_LOGIN);
  const nav = useNavigate();
  const loginHandler = async (values: IValue) => {
    const res = await login({
      variables: {
        password: md5(values.password),
        // password: values.password,
        account: values.account,
      },
    });
    if (res.data.studentLogin.code === 200) {
      showSuccess(res.data.studentLogin.message);
      nav('/');
      return;
    }
    showFail(res.data.studentLogin);
  };
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src="https://healthflex.oss-cn-beijing.aliyuncs.com/images/logo.jpg" alt="" />
      </div>
      <Form
        form={form}
        layout="horizontal"
        footer={(
          <Button block type="submit" color="primary" size="large" loading={loading}>
            登录
          </Button>
        )}
        onFinish={loginHandler}
      >
        <Form.Item
          rules={[{
            required: true,
            message: '用户名不能为空',
          }, {
            pattern: /^(?![0-9]+$)(?![a-z]+$)[a-z0-9]{6,10}$/,
            message: '有且只能包含小写字母和数字，长度大于 6，小于 10',
          }]}
          label="用户名"
          name="account"
        >
          <Input placeholder="请输入用户名" clearable />
        </Form.Item>
        <Form.Item
          label="输入密码"
          name="password"
          rules={[{
            required: true,
            message: '密码不能为空',
          }, {
            pattern: /^(?![0-9]+$)(?![a-z]+$)[a-z0-9]{6,}$/,
            message: '有且只能包含小写字母和数字，长度大于 6',
          }]}
          extra={(
            <div className={style.eye}>
              {
                !visiable ? (<EyeInvisibleOutline onClick={() => setVisiable(true)} />) : <EyeOutline onClick={() => setVisiable(false)} />
              }
            </div>
          )}
        >
          <Input placeholder="请输入密码" clearable type={visiable ? 'text' : 'password'} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
