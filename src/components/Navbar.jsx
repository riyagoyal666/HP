import React from 'react'
import {Menu,Typography,Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined,BulbOutlined,FundOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="medium"/>
            <Typography.Title level={3} className='logo'>
                <Link to="/">Digi Coin</Link>
            </Typography.Title>   
        </div>
        
          <Menu theme='dark' mode="horizontal">
                  <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/"> Home</Link>
                  </Menu.Item>
                  <Menu.Item icon={<FundOutlined/>}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                  </Menu.Item>
                  <Menu.Item icon={<BulbOutlined/>}>
                    <Link to="/news">News</Link>
                  </Menu.Item>
          </Menu>
        
        
    </div>
  )
}

export default Navbar