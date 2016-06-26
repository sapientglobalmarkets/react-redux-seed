import React from 'react';
import { connect } from 'react-redux';

import s from './clock-page.css';
import { changeDate } from '../actions';
import { getTime } from '../selectors';

// Note that we are exporting our presentational component as well as
// the container component. The presentational component is exported
// so that we can test it independently of the container component.
// Testing the container componet is harder because we would have to
// mock the Redux environment.
export class ClockPage extends React.Component {

    componentDidMount() {
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick() {
        const { dispatch } = this.props;
        dispatch(changeDate(new Date()));
    }

    render() {
        return (
            <div className={s.clockPage}>
                <span>The time is</span>
                <h2>{this.props.time}</h2>
            </div>
        );
    }
}

ClockPage.propTypes = {
    time: React.PropTypes.string.isRequired,
    dispatch: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        time: getTime(state)
    };
};

export default connect(
    mapStateToProps
)(ClockPage);
