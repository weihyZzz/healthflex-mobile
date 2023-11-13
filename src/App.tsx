import { useMutation, useQuery } from '@apollo/client';
import './App.css';
import {
  Button, Calendar, Form, Input,
} from 'antd-mobile';
import { useEffect } from 'react';
import { FIND, UPDATE } from './graphql/demo';

const App = () => {
  const { loading, data } = useQuery(FIND, {
    variables: {
      id: '22820297-e288-42ba-aadf-3a4062c5c3cb',
    },
  });
  const [update] = useMutation(UPDATE);
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      'dark',
    );
  }, []);
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
      <Calendar
        selectionMode="single"
      />
      <p>
        data:
        {' '}
        {JSON.stringify(data)}
      </p>
      <p>{`${loading}`}</p>
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
