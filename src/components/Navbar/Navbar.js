import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { menuItems } from './MenuItems';
import { Anchor, Drawer, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className='container-fluid'>
            <div className='header'>
                <div className='logo'>
                    <Link to='/'><img src="https://image.flaticon.com/icons/png/64/3004/3004703.png" alt='logo' width='60px' height='60px' /></Link>
                </div>
                <div className='mobileHidden'>
                    <Anchor targetOffset='65'>
                        {menuItems.map(item => (
                            <Link className='link' key={item.id} to={item.to}>{item.title} </Link>
                        ))}
                    </Anchor>
                </div>
                <div className='mobileVisible'>
                    <Button type="primary" onClick={showDrawer}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <Drawer
                        title="Menu"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        {menuItems.map(item => (
                            <Link className='link' key={item.id} to={item.to}>{item.title} </Link>
                        ))}
                    </Drawer>
                </div>
            </div>
        </div>
    )
}