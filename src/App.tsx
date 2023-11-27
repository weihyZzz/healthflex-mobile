/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from '@apollo/client';
import './App.css';
import {
  Button, Form, ImageUploader, Input,
} from 'antd-mobile';
import { useEffect } from 'react';
import { useUploadOss } from './hooks/useUploadOSS';
import { UPDATE } from './graphql/demo';

const App = () => {
  const uploadHandler = useUploadOss();
  const [update] = useMutation(UPDATE);
  // useEffect(() => {
  //   document.documentElement.setAttribute(
  //     'data-prefers-color-scheme',
  //     'dark',
  //   );
  // }, []);
  const onClickHandler = (v: any) => {
    update({
      variables: {
        id: '22820297-e288-42ba-aadf-3a4062c5c3cb',
        params: {
          ...v,
        },
      },
    });
  };
  return (
    <div>
      <ImageUploader
        upload={uploadHandler}
      />
      <Form
        layout="horizontal"
        onFinish={onClickHandler}
        footer={(
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        )}
      >
        <Form.Item
          name="name"
          label="姓名"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="desc"
          label="描述"
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
