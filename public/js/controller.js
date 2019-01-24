// modifying file for test purposes 
import { MDL } from "./models/model.js";
import { VIEW } from "./views/view.js";
import { state } from "./state.js";
import { elements } from "./elements.js";
import { terminal } from "./terminal/terminalInstance";
import { initTerminalRoutes } from "./terminal/terminalRoutes";

///// CONTROLLER MODULE /////
const CTRL = (function(MDL, VIEW, state, elements) {

    const initializePages = () => {
        // VIEW.appendAboutMeResponse();
    };

    const handleTerminalSubmit = () => {
        if(state.inputWaiting.isTrue) {
            terminal.emitEvent(`${state.inputWaiting.getEvent()} ${elements.terminalInput.value}`);
            elements.terminalInput.value = "";
    
        } else {
            const input = elements.terminalInput.value;
            terminal.emitEvent(input);
            elements.terminalInput.value = "";
        }
    };

    return {
        initializePages,
        handleTerminalSubmit,
    };
} (MDL, VIEW, state, elements) );



///// EXECUTION & LISTENERS /////
initTerminalRoutes(terminal);
CTRL.initializePages();

/// terminal input submission handling
elements.terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    CTRL.handleTerminalSubmit();
});

// when terminal display is clicked, focus on terminal input
elements.terminalDisplay.addEventListener("click", (event) => {
    elements.terminalInput.focus();
});

// terminal toggling up/down when get-in-touch button is clicked
elements.getInTouch.addEventListener("click", (event) => {
    elements.terminalBlock.classList.toggle("terminal-toggle-up");
    if(document.querySelector(".terminal-toggle-up")) elements.terminalInput.focus();
});
