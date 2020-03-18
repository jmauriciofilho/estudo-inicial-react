import React, {Component} from "react";

class Event extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
        };
    }

    clickMethod = () => {
        console.log('clicked');
        this.setState({
            clicked: this.state.clicked + 1
        });
    };

    render() {
        const {clicked} = this.state;
        return (
            <div>
                <button onClick={this.clickMethod} type="button">Click Me</button>
                <p>{clicked}</p>
            </div>
        );
    }

}

export default Event;