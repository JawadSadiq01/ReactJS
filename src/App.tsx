import { useEffect, useMemo } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ConfigProvider } from "antd";
import { useRecoilState } from "recoil";
import { getRoutes } from "./routes";
import { themeState } from "./store/Theme";
import { ErrorFallback } from "./pages/errors/errorBoundary";
import constants from "./config/constants";
import { AccessTokenState, currentUserState } from "./store/Signin";
import "./App.scss";

function App() {

  /* VARIABLE DECLARATION
-------------------------------------------------------------------------------------*/
  const contextValue = useMemo(() => ({ name: 'Student Help Squad' }), []);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  // const accessToken = localStorage.getItem("accessToken");
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);
  console.log(accessToken);
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
            getRoutes(constants.Manager)
            // getRoutes(currentUser.role).concat(getRoutes(constants.PUBLIC))
          )
          : useRoutes(getRoutes(constants.PUBLIC))
        }
      </ErrorBoundary>
    </ConfigProvider>
  )
}

export default App