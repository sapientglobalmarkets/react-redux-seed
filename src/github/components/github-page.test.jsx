import React from 'react';
import {shallow, mount} from 'enzyme';

import GithubPage from './github-page';
import {OrgForm} from './org-form';
import {RepoList} from './repo-list';

describe('<GithubPage>', () => {

    it('should render an <OrgForm /> and a <RepoList />', () => {
        const wrapper = shallow(<GithubPage />);
        expect(wrapper.find(OrgForm)).to.have.length(1);
        expect(wrapper.find(RepoList)).to.have.length(1);
    });

});
