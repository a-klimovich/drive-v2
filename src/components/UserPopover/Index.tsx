import React from "react";
import {
  Avatar,
  Popover,
  Button,
  ConfigProvider,
  theme,
  Row,
  Col,
  Space,
  Typography,
} from "antd";

const { Text } = Typography;

const UserPopover: React.FC = () => {
  const name = "User";

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <Popover
        placement="bottomRight"
        title={
          <Row gutter={10} wrap={false}>
            <Col flex={"auto"}>
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 80 }}
                style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
              >
                {name}
              </Avatar>
            </Col>
            <Col flex="auto">
              <Space direction="vertical" size={0}>
                <Text>{name}</Text>
                <Text type="secondary">abc@gmail.com</Text>
              </Space>
            </Col>
          </Row>
        }
        content={
          <Row
            gutter={20}
            wrap={true}
            style={{
              marginTop: "2rem",
            }}
          >
            <Col flex="auto">
              <Button>Settings</Button>
            </Col>

            <Col>
              <Button type="primary" danger={true}>
                Exit
              </Button>
            </Col>
          </Row>
        }
        trigger="click"
      >
        <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>
          {name}
        </Avatar>
      </Popover>
    </ConfigProvider>
  );
};

export default UserPopover;
