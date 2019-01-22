import { elements } from "../../../elements";
import { state } from "../../../state";
import { UTIL } from "../../terminalUtilities";

///// FUNCTIONS /////
const askGrewUp = (event) => {
    return new Promise((resolve, reject) => {
        UTIL()
        .createAppendP(elements.terminalDisplay, ' ')
        .createAppendP(elements.terminalDisplay, 'Where did I grow up?', "purple")
        .createManyPs(
            'I grew up in in Browns Mills, NJ, until I was 23 years old. It\'s a small town',
            'in the middle of the pine barrens (a massive forest of pine trees). You could drive',
            'to the beach in 40 minutes, and get to Philadelphia in an hour. Browns Mills is cozy,', 'but you won\'t find much opportunity there.')
        .asyncAppendArr(elements.terminalDisplay)
        .then((data) => resolve(data));
    });
};

const askAge = (event) => {
    return new Promise((resolve, reject) => {
        UTIL()
        .createAppendP(elements.terminalDisplay, ' ')
        .createAppendP(elements.terminalDisplay, 'How old am I?', "purple")
        .createManyPs(
            "I'm 25 years old as of January 14th. I know.. I'm getting old right?")
        .asyncAppendArr(elements.terminalDisplay)
        .then((data) => resolve(data));
    });
};

const askCoding = (event) => {
    return new Promise((resolve, reject) => {
        UTIL()
        .createAppendP(elements.terminalDisplay, ' ')
        .createAppendP(elements.terminalDisplay, 'How did I start coding?', "purple")
        .createManyPs(
            'I first learned what programming was all about from Khan Academy. I had used',
            'their website as a mathematics reference, but I randomly stumbled upon their',
            'Javascript section. From there I studied Javascript for a year and a half on Udemy',
            '(and I bought hundreds of dolars of courses), but I could only learn so quickly',
            'with a full time job. I made the decision to study at DevPoint Labs with the',
            'University of Utah, and now I am looking to be hired.')
        .asyncAppendArr(elements.terminalDisplay)
        .then((data) => resolve(data));
    });
};

const askMove = (event) => {
    return new Promise((resolve, reject) => {
        UTIL()
        .createAppendP(elements.terminalDisplay, ' ')
        .createAppendP(elements.terminalDisplay, 'Why did I move to Salt Lake City?', "purple")
        .createManyPs(
            'I moved to Utah in May of 2017, and I\'m really enjoying my time here. In New Jersey',
            'I didn\'nt really have the money to afford an education, but the colleges are much',
            'cheaper in Salt Lake City, and they have great programs in computer science,',
            'economics, and statistics, all of which I\'m interested in. Salt Lake City also',
            'has a lot of hospitals, and having been a hospital pharmacy tech, I knew it would',
            'be easy to find a job when I arrived. This city is my best chance at being successful',
            'academically, professionally, and financially. It also happens to be one of the most',
            'beautiful places I have ever seen.')
        .asyncAppendArr(elements.terminalDisplay)
        .then((data) => resolve(data));
    });
};


//----- put all other functions in here -----
const askEverything = (event) => {
    askAge(event)
    .then(askGrewUp)
    .then(askMove)
    .then(askCoding);
};



///// ROUTES /////
const askRoutes = (terminal) => {
    //grew up
    terminal.addListener("ask --grew-up", askGrewUp);
    terminal.addListener("ask -grew-up", askGrewUp);
    terminal.addListener("ask grew-up", askGrewUp);
    terminal.addListener("ask grewup", askGrewUp);
    terminal.addListener("ask -gu", askGrewUp);

    //age
    terminal.addListener("ask --age", askAge);
    terminal.addListener("ask -age", askAge);
    terminal.addListener("ask age", askAge);
    terminal.addListener("ask -a", askAge);

    //coding
    terminal.addListener("ask --coding", askCoding);
    terminal.addListener("ask -coding", askCoding);
    terminal.addListener("ask coding", askCoding);
    terminal.addListener("ask -c", askCoding);

    //move
    terminal.addListener("ask --move", askMove);
    terminal.addListener("ask -move", askMove);
    terminal.addListener("ask move", askMove);
    terminal.addListener("ask -m", askMove);

    //everything
    terminal.addListener("ask everything", askEverything);
    terminal.addListener("ask --everything", askEverything);
    terminal.addListener("ask -everything", askEverything);
    terminal.addListener("ask -e", askEverything);

};


export { askRoutes };