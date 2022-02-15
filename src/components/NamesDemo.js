import React from 'react'
import ReactWordcloud from 'react-wordcloud';
const words = [
    {text: 'John', value: 10},
    {text: 'Paul', value: 5},
    {text: 'George', value: 25},
    {text: 'Ringo', value: 40},
];
export const NamesDemo = () => {
    return (<ReactWordcloud words={words} />);
}

export default NamesDemo;