import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import { ROUTES_CONSTANTS } from "./config/constants";
import Login from "./pages/Login";
import NotFound from "./pages/errors/404";
import AppLayout from "./layout";
import Signup from "./pages/Signup";
import PublicLayout from "./layout/PublicLayout";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

const Dashboard = Loadable(lazy(() => import("./pages/Dashboard")));
const Error = Loadable(lazy(() => import("./pages/errors/404")));
const Carriers = Loadable(lazy(() => import("./pages/Carriers")));
const Contact = Loadable(lazy(() => import("./pages/Contact")));
const Listing = Loadable(lazy(() => import("./pages/Listing")));
const Blog = Loadable(lazy(() => import("./pages/Blog")));
const About = Loadable(lazy(() => import("./pages/About")));

export const publicRoutes = [
  {
    key: `${ROUTES_CONSTANTS.LOGIN}`,
    path: "/",
    element: <Navigate to={ROUTES_CONSTANTS.LOGIN} />,
  },
  {
    key: `${ROUTES_CONSTANTS.MAIN_LAYOUT}`,
    path: "/",
    element: (
      <PublicLayout />
    ),
    children: [
      {
        key: `${ROUTES_CONSTANTS.LOGIN}`,
        path: `${ROUTES_CONSTANTS.LOGIN}`,
        element: <Login />,
      },
      {
        key: `${ROUTES_CONSTANTS.SIGNUP}`,
        path: `${ROUTES_CONSTANTS.SIGNUP}`,
        element: <Signup />,
      },
      {
        key: `${ROUTES_CONSTANTS.NotFound}`,
        path: `${ROUTES_CONSTANTS.NotFound}`,
        element: <NotFound />,
      },
    ],
  },
];

const managerRoutes = [
  {
    key: `${ROUTES_CONSTANTS.MAIN}`,
    path: "/",
    element: <Navigate to={ROUTES_CONSTANTS.DASHBOARD} />,
  },
  {
    key: `${ROUTES_CONSTANTS.MAIN_LAYOUT}`,
    path: "/",
    element: (
      <AppLayout />
    ),
    children: [
      {
        key: `${ROUTES_CONSTANTS.DASHBOARD}`,
        path: `${ROUTES_CONSTANTS.DASHBOARD}`,
        element: <Dashboard />,
      },
      {
        key: `${ROUTES_CONSTANTS.BLOG}`,
        path: `${ROUTES_CONSTANTS.BLOG}`,
        element: <Blog />,
      },
      {
        key: `${ROUTES_CONSTANTS.LISTING}`,
        path: `${ROUTES_CONSTANTS.LISTING}`,
        element: <Listing />,
      },
      {
        key: `${ROUTES_CONSTANTS.CARRIERS}`,
        path: `${ROUTES_CONSTANTS.CARRIERS}`,
        element: <Carriers />,
      },
      {
        key: `${ROUTES_CONSTANTS.CONTACT}`,
        path: `${ROUTES_CONSTANTS.CONTACT}`,
        element: <Contact />,
      },
      {
        key: `${ROUTES_CONSTANTS.ABOUT}`,
        path: `${ROUTES_CONSTANTS.ABOUT}`,
        element: <About />,
      },
    ],
  },
  {
    key: `${ROUTES_CONSTANTS.ERROR_PAGE}`,
    path: "*",
    element: <Error />,
  },
];

export const privateRoutes = [
  {
    key: `${ROUTES_CONSTANTS.DASHBOARD}`,
    path: `${ROUTES_CONSTANTS.DASHBOARD}`,
    element: <Dashboard />,
  },
];

const ROLES_ROUTES: any = {
  PUBLIC: publicRoutes,
  PRIVATE: privateRoutes,
  Manager: managerRoutes,
};

export const getRoutes = (role: any) => {
  return ROLES_ROUTES[role];
};
