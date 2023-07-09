import { theme } from "antd";

function About() {
  const { useToken } = theme;
  const { token } = useToken();

  return (

    <div className="bg-blue-500 text-white p-5">
      Hello, From About!
    </div>
  )
}
export default About;