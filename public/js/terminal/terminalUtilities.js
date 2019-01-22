import { elements } from "../elements";


const UTIL = function(nodeArr) {

    const updateScroll = (element) => {
        element.scrollTop = element.scrollHeight;
    };

    const createAppendP = (parentNode, text, ...classes) => {
        let node = document.createElement("p");
        node.textContent = text;

        if(classes.length > 0) classes.forEach((item) => node.classList.add(item));

        parentNode.appendChild(node);
        updateScroll(elements.terminalDisplay);
    };


    ///// CODE THAT CHAINS STARTS HERE /////
    const createManyPs = ( ...text) => {
        const newArr = text.map((item, index, arr) => {
            let node = document.createElement("p");
            node.textContent = item;
            return node;
        });

        return UTIL(newArr);
    };

    const mapClasses = (...classes) => {
        const newArr = nodeArr.map((nodeItem, index, arr) => {
            classes.forEach((classItem) => {
                nodeItem.classList.add(classItem);
            });
            return nodeItem;
        });
        return UTIL(newArr);
    };

    const asyncAppendArr = (parentNode, delay = 30) => {
        return new Promise((resolve, reject) => {
            if(parentNode !== null) {
                
                const timeoutAppend = () => {
                    setTimeout(() => {
                        if(nodeArr[0] !== undefined) {
                            parentNode.appendChild(nodeArr[0]);
                            nodeArr.shift();
                            updateScroll(parentNode);
                            timeoutAppend(nodeArr[0]);
                        }
                    }, delay);
                };
                timeoutAppend(nodeArr);
                resolve("Success");
            }
                resolve("Parent Node Not Found");
        });
    };

    return {
        updateScroll,
        createAppendP,

        createManyPs,
        asyncAppendArr,
        mapClasses,
    };
};


export { UTIL };