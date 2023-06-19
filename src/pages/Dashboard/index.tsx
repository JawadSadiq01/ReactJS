import { theme } from "antd";

function Dashboard() {
  const { useToken } = theme;
  const { token } = useToken();

  return (

    <div className="bg-blue-500 text-white p-5">
      Hello, From DASHBOARD!
    </div>
  )
}
export default Dashboard;