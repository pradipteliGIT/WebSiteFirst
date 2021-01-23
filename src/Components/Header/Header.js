import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import { getMenus } from './Menus'
const Menus=getMenus();
const Header = () => {
    const [selectedPath,selectPath]=React.useState('Home');
    const History= useHistory();
    const redirect=(path)=>{
      selectPath(path);
      History.push(`/${path}`);      
    };
    return <div className="app-header">
        <div className="app-header-logo">Logo</div>
        <div className="app-header-title">Om Consultancy & Services</div>
        <div className="app-header-links">
            {Menus.map(menu => {
                return <li className={`${selectedPath===menu.url?'selected':''}`} key={menu.name} onClick={()=>redirect(menu.url)}>{menu.name}</li>
            })}
        </div>
    </div>
};

export default React.memo(Header);