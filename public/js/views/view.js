import { MDL } from "../models/model.js";
import { state } from "../state.js";
import { elements } from "../elements.js";

const aboutMeText = "I lived in Browns Mills, New Jersey up until May of 2017, and moved to Salt Lake City to study. Before Devpoint Labs, I was an Operating Room Pharmacy Tech at Primary Children's Hospital and a student at Rowan College.";

const asyncAppend = (string, parentNode, delay = 30) => {
    return new Promise((resolve, reject) => {
        if(parentNode !== null) {

            const timeoutAppend = (stringArr) => {
                setTimeout(() => {
                    if(stringArr[0] !== undefined) {
                        const node = document.createElement("span");
                        node.textContent = stringArr[0];
                        parentNode.appendChild(node);
                        stringArr.shift();
                        timeoutAppend(stringArr);
                    } 
                }, delay);
            };

            timeoutAppend([...string]);
            resolve("Success");
        }
            resolve("Parent Node Not Found");
    });
};

const VIEW = {

    appendAboutMeResponse: () => {
        asyncAppend(aboutMeText, elements.aboutMeResponse, 45)
    },

};


export { VIEW };
