import React from 'react';

import s from './toolbar.css';

let Toolbar = () => (
    <div className={s.toolbar}>
        <h1 className={s.title}>React Redux Seed</h1>
        <a className={s.githubLink} href="https://github.com/sapientglobalmarkets/react-redux-seed" />
    </div>
);

export default Toolbar;
