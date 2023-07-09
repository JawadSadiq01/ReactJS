import { FC, useState } from "react";
import "./style.scss";
import { Avatar, Typography, Layout, theme } from "antd";
const { Sider } = Layout;

type SidebarProps = {
  collapsed: boolean;
  collapsedWidth: number;
  onBreakpoint: any;
};

const AppSidebar: FC<SidebarProps> = ({ collapsed, collapsedWidth, onBreakpoint }) => {
  /* VARIABLE DECLARATION
  -------------------------------------------------------------------------------------*/
  const { useToken } = theme;
  const { token } = useToken();
  const [sideBarColor, setSideBarColor] = useState(token.colorPrimary);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      collapsedWidth={collapsedWidth}
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
    </Sider>
  );
};

export default AppSidebar;
