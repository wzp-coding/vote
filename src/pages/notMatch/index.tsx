import { ErrorBlock } from "antd-mobile";
import "./index.less";

export default function NoMatch() {
  return (
    <div className='no-match'>
      <ErrorBlock
        status='empty'
        description='404 Not Found'
        title='找不到页面，请检查网址是否正确'
      />
    </div>
  );
}
