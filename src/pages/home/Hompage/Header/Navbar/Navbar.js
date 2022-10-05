import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navBar } from '../../../../../data/navBar';

import styled from './Navbar.module.css';
import classNames from 'classnames/bind';

import { useState } from 'react';
const cx = classNames.bind(styled);


function NabarFont() {
    const [border,setBorder] = useState(true)
 
    return (
      <nav className={cx('navbar')}>
<ul className={cx('links')}>
    {navBar.map((item, index) => (
        <li key={index}
         className={ border === item.active ? cx('border') : ''}
         >
            <FontAwesomeIcon icon={item.icon} />
             {` ${item.type}`}
        </li>
    ))}
</ul>
</nav>
       
    );
}

export default NabarFont;
