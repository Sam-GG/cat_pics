import React from 'react';

export const Question = ({prompt, handleChange}) => {
  return (
    <div className="question">
        {prompt}
        <input
            type="text"
            // value={this.state.value}
            onChange={handleChange}
         />
    </div>
  )
};

export default Question;