import React, {Component} from "react";

class Clock extends Component{
    render() {
        const clock = () => {
            return new Date()
                .toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })
        };

        return (
            <h1>
                {clock()}
            </h1>
        );
    }
}

export default Clock;