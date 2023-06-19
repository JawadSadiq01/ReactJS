import React, { FC, useEffect, useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Footer } = Layout;

type FooterProps = {
  collapsed: boolean;
  collapsedWidth: number;
};

const AppFooter: FC<FooterProps> = () => {

  function currentYear() {
    return new Date().getFullYear();
  }

  const footerMenu = [
    { title: 'Cookies Policy', navigateTo: '' },
    { title: 'Privacy Policy', navigateTo: '' },
    { title: 'Terms & Conditions', navigateTo: '' },
  ]

  return (
    <Footer>
      <div className='footer-menu'>
        <ul>
          {footerMenu.map((item: any, index: number) => (
            <Link to={item.navigateTo} key={index} className=''>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='footer-copyright'>
        Copyrights &copy; {currentYear()} All Rights Reserved
      </div>
    </Footer>
  )
}

export default AppFooter