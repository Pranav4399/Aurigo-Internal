import { useState } from "react";

const AddURL = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [buildURL, setBuildURL] = useState("");
    const [buildUser, setBuildUser] = useState("");
    const [buildPass, setBuildPass] = useState("");
    let flag = 0;

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
        var x = document.getElementById("buildPass");
        showPassword === false ? x.type = "text" : x.type = "password";
    }

    const saveBuildDetail = (e) => {
        e.preventDefault();
        const data = {
            url: buildURL,
            username: buildUser,
            password: buildPass
        }
        
        //Duplicates Check
        if(Object.keys(localStorage).length !== 0){
            for(var i=0; i<localStorage.length; i++){
                if(JSON.stringify(data) === localStorage.getItem(i))
                {
                    alert("Data already exists");
                    flag = 1;
                    break;
                }
            }
        }

        if(flag === 0 || Object.keys(localStorage).length === 0){
            localStorage.setItem(localStorage.length, JSON.stringify(data));
        }        
    }

    return (
        <form id="addURLContainer" onSubmit={saveBuildDetail}>
            <input type="url" id="buildURL" required name="buildURL" placeholder="Build URL" onChange={(e) => setBuildURL(e.target
                .value)}></input>

            <input type="text" id="buildUser" required name="buildUsername" placeholder="Build Username" onChange={(e) => setBuildUser(e.target
                .value)}></input>

            <input type="password" id="buildPass" required name="buildPass" placeholder="Build Password" onChange={(e) => setBuildPass(e.target
                .value)}></input>

            <label htmlFor="showPassword">Show Password </label>
            <input type="checkbox" id="showPassword" onChange={() => toggleShowPassword()}></input>

            <button id="submitBtn">Submit</button>
        </form>
    )
}

export default AddURL;