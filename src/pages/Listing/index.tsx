import { theme } from "antd";

function Listing() {
  const { useToken } = theme;
  const { token } = useToken();

  return (

    <div className="bg-blue-500 text-white p-5">
      Hello, From Listing!
    </div>
  )
}
export default Listing;