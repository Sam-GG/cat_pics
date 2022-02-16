import React from 'react'
import ReactWordcloud from 'react-wordcloud';
const words = [
    {text: 'John', value: 30},
    {text: 'Paul', value: 25},
    {text: 'George', value: 50},
    {text: 'Ringo', value: 70},
];

const options = {
    rotations: 2,
    rotationAngles: [-20, 20],
    fontFamily: "impact",
    fontSizes: [14, 50],
    scale: "linear"
};

export const NamesDemo = () => {
    return (
        <div className="names-demo">
            <ReactWordcloud words={words} options={options} />
        </div>
    );
}

export default NamesDemo;