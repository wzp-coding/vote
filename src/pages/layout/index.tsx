import { Outlet, useLocation } from "react-router-dom";
import { NavBar, TabBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { PATH_TO_TITLE, TABS } from "../const";

import "./index.less";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className='layout'>
      <div className='header'>
        <NavBar onBack={() => navigate(-1)} backArrow={pathname !== "/"}>
          {/* @ts-ignore */}
          {PATH_TO_TITLE[pathname] ?? null}
        </NavBar>
      </div>
      <div className='content'>
        <Outlet />
      </div>
      <div className='footer'>
        <TabBar activeKey={pathname} onChange={value => navigate(value)}>
          {TABS.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
}
