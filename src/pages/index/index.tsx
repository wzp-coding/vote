import { useNavigate } from "react-router-dom";
import "./index.less";
import { Button } from "antd-mobile";

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className='index'>
      <p>首页</p>
      <Button color='primary' onClick={() => navigate("/create")}>
        创建页
      </Button>
    </div>
  );
}
