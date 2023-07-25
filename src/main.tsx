import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/index";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd-mobile";
import zhCH from "antd-mobile/es/locales/zh-CN";

// 配置 MobX
configure({ enforceActions: "observed" });

// 创建和配置您的 MobX Store
const store = {
  // 定义您的 MobX Store
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCH}>
      <Provider {...store}>
        <Router>
          <Index />
        </Router>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
