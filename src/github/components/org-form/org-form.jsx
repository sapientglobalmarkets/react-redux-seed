import React from 'react';
import {connect} from 'react-redux';

import s from './org-form.css';
import {changeOrgName, fetchRepos} from '../../actions';
import {getOrgName, getLoading, getError} from '../../selectors';

let OrgForm = ({orgName, loading, error, onChangeOrgName, onSubmitForm}) => (
    <div>
        <form className={s.orgForm} onSubmit={onSubmitForm}>
            <input
                data-element="input"
                placeholder="Organization Name (e.g. facebook)"
                value={orgName}
                onChange={onChangeOrgName}
            />
            <button
                className={s.showRepos}
                data-action="loadRepos"
                type="submit">
                Show Repos
            </button>
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
    return {
        orgName: getOrgName(state),
        loading: getLoading(state),
        error: getError(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeOrgName: (event) => dispatch(changeOrgName(event.target.value)),
        onSubmitForm: (event) => {
            if (event !== undefined && event.preventDefault) event.preventDefault();
            dispatch(fetchRepos());
        }
    };
};

export {OrgForm};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrgForm);
