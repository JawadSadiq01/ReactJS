import { theme } from "antd";

function Blog() {
  const { useToken } = theme;
  const { token } = useToken();

  return (

    <div className="bg-blue-500 text-white p-5">
      Hello, From Blog!
    </div>
  )
}
export default Blog;