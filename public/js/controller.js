// modifying file for test purposes 
import { MDL } from "./models/model.js";
import { VIEW } from "./views/view.js";
import { state } from "./state.js";
import { elements } from "./elements.js";


const CTRL = (function(MDL, VIEW, state, elements) {

       const initializePages = () => {
        VIEW.appendAboutMeResponse();
    };

    return {
        initializePages,
    };
} (MDL, VIEW, state, elements) );


console.log(CTRL);
CTRL.initializePages();