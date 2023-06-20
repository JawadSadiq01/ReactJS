export default {
  APP_URL: import.meta.env.VITE_APP_URL,
  MEDIA_URL: import.meta.env.VITE_APP_MEDIA_URL,
  PUBLIC: 'PUBLIC',
  Manager: 'Manager'
};

export const ROUTES_CONSTANTS: any = {
  LOGIN: "login",
  SIGNUP: "signup",
  ERROR_PAGE: "error-page",
  DASHBOARD: "dashboard",
  CARRIERS: "carriers",
  BLOG: "blog",
  ABOUT: "about",
  LISTING: "listing",
  CONTACT: "contact",
  NotFound: "*"
};