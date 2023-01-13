// Code Keypad Component Here

function Keypad (){
    const {name, setName} = useState("name")
    return (
        <div>
            <input type="password" value = {name} onChange = {
                (e) => setName(e.target.console.log("Entering password..."))
            } ></input>
        </div>
    )
}

export default Keypad;