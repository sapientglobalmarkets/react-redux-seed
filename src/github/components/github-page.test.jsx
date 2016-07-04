import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import GithubPage from './github-page';

describe('<GithubPage>', () => {

    describe('with a default store', () => {
        beforeEach(() => {
            this.store = {
                github: {orgName: '', repos: []},
                subscribe(){
                },
                getState() {
                    return {...this};
                },
                dispatch(action){}
            };
        });

        it('should render correctly', () => {
            const dom = shallow(
                <Provider store={this.store}>
                    <GithubPage />
                </Provider>
            );
            expect(dom).to.have.length(1);
        });

        it('should contain the necessary elements', () => {
            const dom = mount(
                <Provider store={this.store}>
                    <GithubPage/>
                </Provider>
            );
            expect(dom.find('[data-action="loadRepos"]')).to.have.length(1);
            expect(dom.find('[data-element="input"]')).to.have.length(1);

        });
    });

});
