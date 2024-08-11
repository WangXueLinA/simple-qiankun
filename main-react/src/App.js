import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './App.css';
import { useLocation } from 'react-router'

import Main from './Content';

const { Sider } = Layout;

const App = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState(location?.pathname?.replace(/[/\\]/g, '') || 'app-react');
  
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" selectedKeys={[activeKey]} mode="inline" onClick={({key})=> {setActiveKey(key)}}>
          <Menu.Item key="app-react" icon={<DesktopOutlined />}>
            <Link to="/app-react">React应用</Link>
          </Menu.Item>
          <Menu.Item key="app-vue2" icon={<PieChartOutlined />}>
             <Link to="/app-vue2">Vue2应用</Link>
          </Menu.Item>
          <Menu.Item key="app-vue3" icon={<PieChartOutlined />}>
             <Link to="/app-vue3">Vue3应用</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Main activeKey={activeKey} />
    </Layout>
  );
}

export default App;




