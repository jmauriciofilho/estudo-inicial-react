import React, {Component} from "react";

class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time: this.getHourNow()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.updateClock(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updateClock() {
        this.setState({
            time: this.getHourNow()
        })
    }

    getHourNow() {
        return new Date()
            .toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
    }

    render() {
        const {time} = this.state;

        return (
            <div>
                <h1>{time}</h1>
            </div>

        );
    }
}

export default Clock;