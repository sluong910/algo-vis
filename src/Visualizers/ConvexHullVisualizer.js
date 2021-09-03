import React from 'react';

export default class ConvexHullVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        // this.resetArray();
    }


    render() {
        const {array} = this.state;

        return (
            <div></div>
        );
    }
}