import Button from './Button';
import Question from './Question';
import React, {useState} from 'react';
import NamesDemo from './NamesDemo';

export const Cat = () => {
    var catUrl = "https://cataas.com/cat";
    
    const [verdict, updateVerdict] = useState("Cat or Brat?");
    const [name, updateName] = useState(<Question prompt="What would you call this cat?" handleChange={function(e){submitName(e)}}/>);


    function handleClick(value){
        updateVerdict(value);
    }

    function submitName(name){
        console.log(name);
        // updateName(<NamesDemo/>);
    }


    return (
        <div className="cat">
            <img src={catUrl} className="catPhoto" alt="cat" />
            <p>
                {verdict}
            </p>
            <Button text="Cat" color="green" onClick={function(e){handleClick("Cat")}}/>
            <Button text="Brat" color="red" onClick={function(e){handleClick("Brat")}}/>
            {name}
            <Question prompt="What is this cat's favourite movie?" handleChange={console.log("changed")}/>
            <NamesDemo/>
        </div>
    )
};

export default Cat;