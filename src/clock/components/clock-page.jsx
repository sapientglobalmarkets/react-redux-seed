import React from 'react';
import { connect } from 'react-redux';

import s from './clock-page.css';
import { changeDate } from '../actions';
import { getTime } from '../selectors';

class Clock extends React.Component {

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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

Clock.propTypes = {
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
)(Clock);
