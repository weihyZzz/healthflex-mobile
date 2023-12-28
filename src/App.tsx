import { Outlet } from 'react-router-dom';

import styles from './App.module.less';

/**
 * 公共组件，用于处理 header 和 bottom
 * @returns
 */
const App = () => (
  <div className={styles.container}>
    <Outlet />
  </div>
);

export default App;
