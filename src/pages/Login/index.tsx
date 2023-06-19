import { theme } from "antd";

function Login() {
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <div style={{ backgroundColor: token.colorSuccess }}>
      login
    </div>
  )
}
export default Login;