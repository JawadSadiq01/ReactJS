import React, { FC } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;
import './style.scss'

type HeaderProps = {
  collapsed: boolean;
  sidebarToggler: () => void;
  handleLogout: any;
};

const AppHeader: FC<HeaderProps> = () => {
  return (
    <Header>
      <div className="ikd-logo">
        <Link to="/">
          Boiler Plate
        </Link>
      </div>
    </Header>
  )
}
export default AppHeader;