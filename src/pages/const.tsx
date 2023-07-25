import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

export const PATH_TO_TITLE = {
  "/": "首页",
  "/create": "新建投票",
  "/record": "投票记录",
  "/my": "个人中心",
};

export const TABS = [
  {
    key: "/",
    title: "首页",
    icon: <AppOutline />,
  },
  {
    key: "/record",
    title: "记录",
    icon: <UnorderedListOutline />,
  },
  {
    key: "/my",
    title: "我的",
    icon: <UserOutline />,
  },
];
