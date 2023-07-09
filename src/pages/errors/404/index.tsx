import { theme, Button } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const { useToken } = theme;
  const { token } = useToken();


  const navigate = useNavigate()
  const handlClick = () => {
    navigate("/")
  }

  return (
    <div className="error-page p-16" style={{ background: token.colorPrimary }}>
      <center>
        {/* <img src={Page_404} alt="404" /> */}
        <p className="text-3xl lg:text-5xl font-medium primary-color pb-16 pt-2">Page Not Found</p>
        <div className="">
          <Button
            className="back-to-home-btn primary-bg-color white-color rounded-lg font-semibold text-base" onClick={handlClick}>
            Back to Home
          </Button>
        </div>
      </center>
    </div>
  )
}
export default NotFound;