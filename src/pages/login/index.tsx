import { Button } from "antd-mobile";
import "./index.less";

export default function Login() {
  const login = () => {

  };
  return (
    <div className='login'>
      <p>登录页</p>
      <Button color="primary" onClick={login}>企业微信快速登录</Button>
    </div>
  );
}
