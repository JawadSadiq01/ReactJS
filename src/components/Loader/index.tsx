import React, { FC } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import './style.scss'
import { Spin } from 'antd';


export const Loader = () => {
  return (
    <div className="spinner-container">
      <Spin indicator={<LoadingOutlined className="text-red-500" spin />} />
    </div>
  )
}

export default Loader;