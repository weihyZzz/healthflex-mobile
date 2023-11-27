import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { client } from './utils/applo';
import Home from './containers/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import My from './containers/My';
import StudentInfo from './components/StudentInfo';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <StudentInfo>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my" element={<My />} />
          </Routes>
        </StudentInfo>
      </BrowserRouter>
    </ApolloProvider>
  </ConfigProvider>,
);
