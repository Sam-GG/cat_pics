

export const Cat = () => {
    var catUrl = "https://cataas.com/cat";
    var verdict = "Good or Bad?";
    return (
        <div className="cat">
            <img src={catUrl} className="App-logo" alt="logo" />
            <p>
                {verdict}
            </p>
            <button onclick={verdict = "Good Cat"}>
            good cat
            </button>
            <button onclick={verdict = "Bad Cat"}>
            bad cat
            </button>
        </div>
    )
};

export default Cat;