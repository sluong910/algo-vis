import React from 'react';
import './ConvexHullVisualizer.css';

const NUMBER_OF_POINTS = 10;

const WIDTH = 500;
const HEIGHT = 500;

export default class ConvexHullVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            points: [],
        };
    }

    componentDidMount() {
        this.randomizePoints();
    }

    randomizePoints() {
        const points = [];
        for (let i = 0; i < NUMBER_OF_POINTS; i++) {
            points.push([randInt(100,WIDTH), randInt(100,HEIGHT)]);
        }
        this.setState({points});
    }


    render() {
        const {points} = this.state;

        return (
            <div className="visual-container">
                {points.map((p, idx) => (
                    <div
                        className="points"
                        key={idx}
                        style={{
                            left: `${p[0]}px`,
                            top: `${p[1]}px`,
                        }}>
                    </div>
                ))}
            </div>
        );
    }
}

function randInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}