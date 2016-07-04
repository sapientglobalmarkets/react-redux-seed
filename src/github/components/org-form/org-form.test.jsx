import React from 'react';
import {shallow, mount} from 'enzyme';
import {OrgForm} from './org-form';

describe('<OrgForm>', () => {

    it('should render correctly', () => {
        const dom = shallow(
            <OrgForm />
        );
        expect(dom).to.have.length(1);
    });

    it('should contain the necessary elements', () => {
        const dom = mount(
            <OrgForm/>
        );
        expect(dom.find('[data-action="loadRepos"]')).to.have.length(1);
        expect(dom.find('[data-element="input"]')).to.have.length(1);

    });

    describe('when <input> is given', () => {
        let dom, spy;

        beforeEach(() => {
            const props = {
                onChangeOrgName(event){}
            };

            spy = sinon.spy(props, 'onChangeOrgName');

            dom = mount(
                <OrgForm {...props}/>
            );

            dom.find('[data-element="input"]')
                .simulate('change', {
                    target: {
                        value: 'sape'
                    }
                });
        });

        afterEach(() => {
            spy.restore();
        });

        it('should invoke the change handler', () => {
            expect(spy.called).to.equal(true);
            expect(spy.getCall(0).args[0].target.value).to.equal('sape');
        });
    });

});
