import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/index";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ConfigProvider } from "antd-mobile";
import zhCH from "antd-mobile/es/locales/zh-CN";
import NoMatch from "./pages/notMatch";
import Layout from "./pages/layout";
import Create from "./pages/create";
import Record from "./pages/record";
import My from "./pages/my";

import "./common/styles/index.less";

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
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Index />} />
              <Route path='create' element={<Create />} />
              <Route path='record' element={<Record />} />
              <Route path='my' element={<My />} />
              <Route path='*' element={<NoMatch />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
