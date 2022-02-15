import React from 'react';
import Button from './Button';

export const Question = ({prompt, handleChange}) => {
  return (
    <div className="question">
        {prompt}
        <input
            type="text"
            // value={this.state.value}
         />
         <Button text="Submit" color="green" onClick={handleChange} />
    </div>
  )
};

export default Question;