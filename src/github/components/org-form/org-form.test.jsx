import React from 'react';
import {shallow} from 'enzyme';
import {OrgForm} from './org-form';

describe('<OrgForm>', () => {

    beforeEach(() => {
        this.onChangeOrgName = sinon.spy();
        this.onSubmitForm = sinon.spy();
        this.wrapper = shallow(
            <OrgForm
                orgName=""
                loading={false}
                error={false}
                onChangeOrgName={this.onChangeOrgName}
                onSubmitForm={this.onSubmitForm}
            />
        );
    });

    it('should render the orgInput element and the loadRepos button', () => {
        expect(this.wrapper.find('[data-element="orgInput"]')).to.have.length(1);
        expect(this.wrapper.find('[data-action="loadRepos"]')).to.have.length(1);
    });


    it('should invoke the onChangeOrgName handler when orgInput is changed', () => {

        this.wrapper.find('[data-element="orgInput"]')
            .simulate('change', {
                target: {
                    value: 'facebook'
                }
            });

        expect(this.onChangeOrgName.called).to.equal(true);
        expect(this.onChangeOrgName.getCall(0).args[0].target.value).to.equal('facebook');
    });

});
