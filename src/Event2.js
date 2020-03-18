import React, {Component} from "react";

class Event2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handlerChange = (event) => {
        this.setState({
            name: event.target.value
        });

        console.log(this.state.name);
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    onChange={this.handlerChange}
                />
                <button type="button">Ok</button>
            </div>
        );
    }
}

export default Event2;