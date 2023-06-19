import { FC, useEffect, useState } from "react";
import "./style.scss";
import type { MenuProps } from "antd";
import { Avatar, Typography, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeState } from "../../../store/Theme";
// import getUserRoleLable from "../../../helpers/roleLabel";
const { Sider } = Layout;

type SidebarProps = {
  collapsed: boolean;
  collapsedWidth: number;
  onBreakpoint: any;
};

const AppSidebar: FC<SidebarProps> = ({ collapsed, collapsedWidth, onBreakpoint }) => {
  /* VARIABLE DECLARATION
  -------------------------------------------------------------------------------------*/
  const navigate = useNavigate();
  const location = useLocation();
  const { useToken } = theme;
  const { token } = useToken();
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const [sideBarColor, setSideBarColor] = useState(token.colorPrimary);

  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);

  // const {role } =useCurrentUserRole()

  /* EVENT LISTENERS
  -------------------------------------------------------------------------------------*/
  useEffect(() => {

  }, []);

  /* EVENT FUNCTIONS
  -------------------------------------------------------------------------------------*/
  const handleMenuClick: MenuProps["onClick"] = (item) => {
    if (item.key) {
      setSelectedKey(item.key);
      navigate(item.key, { state: { from: location.pathname } });
    }
  };
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      collapsedWidth={collapsedWidth}
      style={{ backgroundColor: sideBarColor }}
      breakpoint="md"
      onBreakpoint={onBreakpoint}
    >
      <div className="sidebar-user-profile">
        <Avatar size={48}>
          HA
        </Avatar>
        <div className="sidebar-user-profile-content">
          <Typography.Title level={4}>Haider Ali</Typography.Title>
          <div className="sidebar-user-profile-role">Manager</div>
        </div>
      </div>
      {/* <Menu
        items={menuSwitcher(role)}
        onClick={handleMenuClick}
        defaultSelectedKeys={[selectedKey]}
        mode="inline"
        theme="dark"
        style={{ backgroundColor: currentTheme.colorPrimary }}
      /> */}
    </Sider>
  );
};

export default AppSidebar;
