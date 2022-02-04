import Button from './Button';

export const Cat = () => {
    var catUrl = "https://cataas.com/cat";
    var verdict = "Good or Bad?";

    const handleClick = (value) => {
        verdict = value;
        console.log(value);
    };

    return (
        <div className="cat">
            <img src={catUrl} className="App-logo" alt="logo" />
            <p>
                {verdict}
            </p>
            <Button text="Good Cat" color="green" onClick={function(e){handleClick("Good")}}/>
            <Button text="Brat Cat" color="red" onClick={function(e){handleClick("Bad")}}/>
        </div>
    )
};

export default Cat;