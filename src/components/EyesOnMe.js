// Code EyesOnMe Component Here
function EyesOnMe(){
    const handleFocus=() =>{
        console.log("Good!");
    };
    const handleBur=() =>{
        console.log("Hey! Eyes on me!");
    };

    return(
        <button onFocus={handleFocus} onBlur={handleBur}>
            Eyes on me
        </button>
    );
}

export default EyesOnMe;