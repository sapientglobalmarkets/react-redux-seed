import React from 'react';

import s from './feature1-page.css';
import { OrgForm } from './org-form';
import { RepoList } from './repo-list';

let Feature1Page = () => (
    <div className={s.feature1}>
        <OrgForm />
        <RepoList />
    </div>
);

export default Feature1Page;