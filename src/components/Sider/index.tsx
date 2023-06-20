import { Layout, Menu } from "antd";

const { SubMenu } = Menu;

import { UserOutlined, LaptopOutlined } from "@ant-design/icons";

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
};

const Sider = () => {
  return (
    <Layout.Sider style={siderStyle}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="My Drive">
          <Menu.Item key="1">Files</Menu.Item>
          <Menu.Item key="2">Shared with me</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Computers">
          <Menu.Item key="3">Desktop</Menu.Item>
          <Menu.Item key="4">Documents</Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
