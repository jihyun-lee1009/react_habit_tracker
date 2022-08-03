import React, { Component } from 'react';

class test extends Component {
    state = {
        count: 0,
    };
    render() {
        return (
            <>
                <span>{this.state.count}</span>
                <button
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 });
                    }}>
                    Click
                </button>
            </>
        );
    }
}

export default test;