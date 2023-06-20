import { Button, ConfigProvider, theme } from "antd";
import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import BaseLayout from "./layout/BaseLayout";

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>Some problem!</div>}>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <BaseLayout>
          <h1>Vite + React</h1>

          <p>Click on the Vite and React logos to learn more</p>

          <Button>Hello im Button</Button>
        </BaseLayout>
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export default App;
