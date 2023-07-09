import React, { FC, useState } from "react";
import { Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import './style.scss'
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import Search from "./Components/search";

type HeaderProps = {
  collapsed: boolean;
  sidebarToggler: () => void;
  handleLogout: any;
};

type INavlinks = {
  id: number,
  title: string,
  url: string
};

const navLinks: INavlinks[] = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Blog', url: '/blog' },
  { id: 3, title: 'Listing', url: '/listing' },
  { id: 4, title: 'Carriers', url: '/carriers' },
  { id: 5, title: 'About Us', url: '/about' },
  { id: 6, title: 'Contact', url: '/contact' },
];

const AppHeader: FC<HeaderProps> = (props) => {
  const { handleLogout } = props;
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (url: string) => {
    navigate(url);
  };

  const LogoutPress = () => {
    handleLogout();
  };

  const items: MenuProps['items'] = [
    {
      label: (<a target="_blank" rel="noopener noreferrer">Profile</a>),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: (<a target="_blank" rel="noopener noreferrer" >Settings</a>),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (<a onClick={LogoutPress} target="_blank" rel="noopener noreferrer" >Logout</a>),
      key: '2',
    },
  ];

  return (
    <nav className="layout-header  w-full bg-white shadow">
      <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="ikd-logo">
              <Link to="/">
                Logo Here
              </Link>
            </div>
            <div className="md:hidden">
              <Button className="nav-buttons" onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <CloseOutlined className="nav-responsive-icon" />
                ) : (
                  <MenuOutlined className="nav-responsive-icon" />
                )}
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-2  md:flex md:space-x-1 md:space-y-0">
              {navLinks.map((navLink: INavlinks) => (
                <li key={navLink.id} className="list-none">
                  <Button className="nav-buttons" onClick={() => handleNavigation(navLink.url)}>{navLink.title}</Button>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
        <div className="flex flex-row space-x-5">
          <Search />
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar className="bg-orange-600">H</Avatar>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </nav >
  );
}
export default AppHeader;