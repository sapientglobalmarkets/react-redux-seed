import React from 'react';
import {shallow, mount} from 'enzyme';

import {ClockPage} from './clock-page';

describe('<Clock>', () => {

    it('should render the time in <h2>', () => {
        const dispatch = function() {}
        const wrapper = shallow(
            <ClockPage time='09:00:00' dispatch={dispatch} />
        );

        expect(wrapper.find('h2').text()).to.equal('09:00:00');
    });

});
