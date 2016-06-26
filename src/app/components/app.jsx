import React from 'react';

import { Toolbar } from './toolbar';
import { Navbar } from './navbar';
import { GithubPage } from '../../github';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Toolbar />
                <Navbar />
                <GithubPage />
            </div>
        );
    }
}
