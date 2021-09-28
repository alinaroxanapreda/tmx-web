import React from 'react';

class Greet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {val : "awesome written by Alina"}
    }

    changeValue = () => {
        this.setState({val: "wonderful from Alina"})
    }
    render() {
        return(
            <div>
                <h1>Hello says {this.state.val} World</h1>
                <button type="button" onClick={this.changeValue}>Change value</button>
                </div>

        );
    }
}