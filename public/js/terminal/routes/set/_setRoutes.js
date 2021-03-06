import { elements } from "../../../elements";
import { state } from "../../../state";
import { UTIL } from "../../terminalUtilities";

///// FUNCTION /////
const setEmail = (event) => {
    const email = event.value;
    state.userEmail = email;

    UTIL().createAppendP(
        elements.terminalDisplay,
        `Email Set Successfully: ${email}`,
        "green"
    );
};

const setName = (event) => {
    const name = event.value;
    state.userName = name;

    UTIL().createAppendP(
        elements.terminalDisplay,
        `Name Set Successfully: ${name}`,
        "green"
    );
};

const setMessage = (event) => {
    const message = event.value;
    state.userMessage = message;

    UTIL().createAppendP(
        elements.terminalDisplay,
        `Message Set Successfully: ${message}`,
        "green"
    );
};

///// ROUTES /////



const setRoutes = (terminal) => {
    
    //set email
    terminal.addListener("set --email", setEmail);
    terminal.addListener("set -email", setEmail);
    terminal.addListener("set email", setEmail);
    terminal.addListener("set -e", setEmail);
    
    //set name
    terminal.addListener("set --name", setName);
    terminal.addListener("set -name", setName);
    terminal.addListener("set name", setName);
    terminal.addListener("set -n", setName);

    //set message
    terminal.addListener("set --message", setMessage);
    terminal.addListener("set -message", setMessage);
    terminal.addListener("set message", setMessage);
    terminal.addListener("set -m", setMessage);

};


export { setRoutes };