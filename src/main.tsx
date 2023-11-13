import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import './index.css';
import { client } from './utils/applo';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ConfigProvider>,
);
