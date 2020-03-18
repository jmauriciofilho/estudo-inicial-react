import React, {Component} from "react";
import Painel from "./Painel";

class Props extends Component{
    constructor(props) {
        super(props);
        const {attr, attr2} = this.props;
        console.log(attr, attr2)
    }

    render() {
        return (
            <div>
                <h1>Props</h1>
                <Painel headerColor="red" headerText="This is a header." data="School of net" />
            </div>
        );
    }
}

export default Props;