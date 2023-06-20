import React from "react";
import { Layout, Breadcrumb } from "antd";
import Header from "../components/Header";
import Sider from "../components/Sider";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Header />

      <Layout>
        <Sider />

        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>My Drive</Breadcrumb.Item>
            <Breadcrumb.Item>Files</Breadcrumb.Item>
          </Breadcrumb>

          <Layout.Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
