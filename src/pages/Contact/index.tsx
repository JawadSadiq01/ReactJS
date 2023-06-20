import { theme } from "antd";

function Contact() {
  const { useToken } = theme;
  const { token } = useToken();

  return (

    <div className="bg-blue-500 text-white p-5">
      Hello, From Contact!
    </div>
  )
}
export default Contact;