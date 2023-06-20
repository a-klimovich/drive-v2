import React from "react";
import { Layout, Col, Row } from "antd";
import UserPopover from "../UserPopover/Index";

const Header: React.FC = () => {
  return (
    <Layout.Header
      style={{
        color: "#fff",
        height: "100px",
      }}
    >
      <Row
        gutter={{ xs: 8, sm: 16, md: 24 }}
        wrap={false}
        style={{
          height: "100%",
          alignItems: "center",
        }}
      >
        <Col flex="0 0 200px">Logo</Col>

        <Col flex="1 0 auto">
          <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={false}>
            <Col flex="auto">Search</Col>

            <Col flex="none">
              <UserPopover />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
