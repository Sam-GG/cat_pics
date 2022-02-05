import Button from './Button';
import Question from './Question';
import React, {useState} from 'react';

export const Cat = () => {
    var catUrl = "https://cataas.com/cat";
    
    const [verdict, updateVerdict] = useState("Cat or Brat?");

    function handleClick(value){
        updateVerdict(value);
    }

    return (
        <div className="cat">
            <img src={catUrl} className="catPhoto" alt="cat" />
            <p>
                {verdict}
            </p>
            <Button text="Cat" color="green" onClick={function(e){handleClick("Cat")}}/>
            <Button text="Brat" color="red" onClick={function(e){handleClick("Brat")}}/>
            <Question prompt="What would you call this cat?" handleChange={console.log("changed")}/>
            <Question prompt="What is this cat's favourite movie?" handleChange={console.log("changed")}/>
        </div>
    )
};

export default Cat;