import React, { useEffect, useState } from "react";
import "./style.scss";
import { Layout } from "antd";
import AppFooter from "./components/footer";
import { Outlet, useNavigate } from "react-router-dom";

const { Content } = Layout;

function PublicLayout() {
  /* VARIABLE DECLARATION
  -------------------------------------------------------------------------------------*/
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState(94);

  /* RENDER APP
  -------------------------------------------------------------------------------------*/
  return (
    <Content>
      <Outlet />
      <AppFooter collapsed={collapsed} collapsedWidth={collapsedWidth} />
    </Content>
  );
}
export default PublicLayout;