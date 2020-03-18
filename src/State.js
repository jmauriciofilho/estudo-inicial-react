import React, {Component} from "react";

class State extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mauricio',
            age: 30
        };
        console.log(this.state);
    }

    render() {
        const {name, age} = this.state;
        return (
            <div>
                <p>State</p>
                <p>{name}</p>
                <p>{age}</p>
            </div>
        );
    }
}

export default State;