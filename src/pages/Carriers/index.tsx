import { theme } from "antd";

function Carriers() {
  const { useToken } = theme;
  const { token } = useToken();

  return (

    <div className="bg-blue-500 text-white p-5">
      Hello, From Carriers!
    </div>
  )
}
export default Carriers;