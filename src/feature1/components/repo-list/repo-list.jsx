import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import s from './repo-list.css';

let RepoList = ({}) => (
    <table  className={classNames(s.repoList, 'mintable')}>
        <thead>
        <tr>
            <th>Repository</th>
            <th className="pull-right">Stars</th>
            <th className="pull-right">Forks</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>repo.name</td>
            <td className="pull-right">repo.stargazers_count</td>
            <td className="pull-right">repo.forks_count</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td colSpan="3"><em>repos.length repositories retrieved</em></td>
        </tr>
        </tfoot>
    </table>
);

RepoList.propTypes = {
};

const mapStateToProps = (state) => {

    let module1State = state.module1;

    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

RepoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(RepoList);

export default RepoList;
