import React from 'react';

import s from './navbar.css';

let Navbar = () => (
    <nav>
        <a className={s.active}>GITHUB</a>
        <a>ABOUT</a>
    </nav>
);

export default Navbar;
