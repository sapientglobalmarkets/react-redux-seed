import React from 'react';
import { connect } from 'react-redux';

import s from './org-form.css';
import { changeOrgName, fetchRepos } from '../../actions';

let OrgForm = ({orgName, loading, error, onChangeOrgName, onSubmitForm}) => (
    <div>
        <form className={s.orgForm} onSubmit={onSubmitForm}>
            <input
                placeholder="Organization Name (e.g. facebook)"
                value={orgName}
                onChange={onChangeOrgName}
            />
            <button type="submit">Show Repos</button>
        </form>

        <div>
            {(loading) ? (<span>Loading...</span>) : null}
            {(error) ? (<span className={s.error}>{error.message}</span>) : null}
            {(!loading && !error) ? '\u00a0' : null}
        </div>


    </div>
);

OrgForm.propTypes = {
    orgName: React.PropTypes.string,
    loading: React.PropTypes.bool.isRequired,
    error: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
    ]),
    onChangeOrgName: React.PropTypes.func.isRequired,
    onSubmitForm: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {

    let feature1 = state.feature1;

    return {
        orgName: feature1.orgName,
        loading: feature1.loading,
        error: feature1.error
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
