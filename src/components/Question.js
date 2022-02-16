import React from 'react';
import Button from './Button';

export const Question = ({prompt, handleChange}) => {
  return (
    <div className="question">
        {prompt}
        <input
            type="text"
         />
         <Button text="Submit" color="rgb(152, 132, 175)" onClick={handleChange} />
    </div>
  )
};

export default Question;