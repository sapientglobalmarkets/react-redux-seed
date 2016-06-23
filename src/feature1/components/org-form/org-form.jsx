import React from 'react';
import { connect } from 'react-redux';

import s from './org-form.css';
import { changeOrgName, fetchRepos } from '../../actions';

let OrgForm = ({orgName, onChangeOrgName, onSubmitForm}) => (
    <div>
        <form className={s.orgForm} onSubmit={onSubmitForm}>
            <input
                placeholder="Organization Name (e.g. facebook)"
                value={orgName}
                onChange={onChangeOrgName}
            />
            <button type="submit">Show Repos</button>
        </form>

        <div className={s.error}>This is an error</div>
    </div>
);

OrgForm.propTypes = {
    orgName: React.PropTypes.string,
    onChangeOrgName: React.PropTypes.func.isRequired,
    onSubmitForm: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {

    let feature1 = state.feature1;

    return {
        orgName: feature1.orgName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeOrgName: (event) => dispatch(changeOrgName(event.target.value)),
        onSubmitForm: (event) => {
            if (event !== undefined && event.preventDefault) event.preventDefault();
            dispatch(fetchRepos());
        }
    }
};

OrgForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrgForm);

export default OrgForm;
