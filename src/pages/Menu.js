import React from 'react';
import {MenuList} from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/menu.css';


const Menu = () => {
    return (
        <div className='menu'>
            <h1 className="menuTitle">Menu</h1>
            <div className="menu-list">
                {MenuList.map((menuItem, key) => {
                    return <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}  />
                })}
            </div>
        </div>
    )
}

export default Menu
