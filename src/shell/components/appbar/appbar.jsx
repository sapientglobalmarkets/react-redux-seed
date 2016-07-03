import React from 'react';
import {Link} from 'react-router';

import s from './appbar.css';

export default () => (
    <div className={s.appbar}>
        <Link to="/" className={s.title}>React Redux Seed</Link>
        <a className={s.githubLink} href="https://github.com/sapientglobalmarkets/react-redux-seed" />
    </div>
);
