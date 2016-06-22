import React from 'react';

import s from './org-form.css';

let OrgForm = () => (
    <div>
        <form className={s.orgForm}>
            <input placeholder="Organization Name (e.g. facebook)" />
            <button type="submit">Show Repos</button>
        </form>

        <div className={s.error}>This is an error</div>
    </div>
);

export default OrgForm;
