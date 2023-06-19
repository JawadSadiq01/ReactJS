import { ConfigProvider } from "antd";
import { ErrorBoundary } from "react-error-boundary";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { getRoutes } from "./routes";
import { useRecoilState } from "recoil";
import { themeState } from "./store/Theme";
import { ErrorFallback } from "./pages/errors/errorBoundary";
import "./App.scss";
import constants from "./config/constants";
import { currentUserState } from "./store/Signin";

function App() {

  /* VARIABLE DECLARATION
-------------------------------------------------------------------------------------*/
  const contextValue = useMemo(() => ({ name: 'Student Help Squad' }), []);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const accessToken = localStorage.getItem("accessToken");
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  useEffect(() => {
    // if (accessToken && pathname === (`/${ROUTES_CONSTANTS.LOGIN}`)) {
    //   navigate(`/${ROUTES_CONSTANTS.DASHBOARD}`);
    // }
    // else if (!accessToken && pathname != (`/${ROUTES_CONSTANTS.SIGNUP}`)) {
    //   navigate(`/${ROUTES_CONSTANTS.LOGIN}`);
    // }
  }, [pathname]);

  return (
    <ConfigProvider theme={currentTheme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {accessToken
          ? useRoutes(
            getRoutes(currentUser.role).concat(getRoutes(constants.PUBLIC))
          )
          : useRoutes(getRoutes(constants.Manager))}
      </ErrorBoundary>
    </ConfigProvider>
  )
}
export default App