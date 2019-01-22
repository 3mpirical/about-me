import { elements } from "../../../elements";
import { state } from "../../../state";
import { UTIL } from "../../terminalUtilities";

///// FUNCTIONS /////
const askGrewUp = (event) => {
    UTIL()
        .createManyPs(
            ' ',
            'Where did you grow up?',
            'I grew up in in Browns Mills, NJ, until I was 23 years old. It\'s a small town',
            'in the middle of the pine barrens (a massive forest of pine trees). You could drive',
            'to the beach in 40 minutes, and get to Philadelphia in an hour. Browns Mills is cozy,', 'but you won\'t find much opportunity there.')
        .mapClasses("purple")
        .asyncAppendArr(elements.terminalDisplay);
};

const askAge = (event) => {
    UTIL()
    .createManyPs(
        ' ',
        'How old am I?',
        "I'm 25 years old as of January 14th. I know.. I'm getting old right?")
    .mapClasses("purple")
    .asyncAppendArr(elements.terminalDisplay);
};

const askCoding = (event) => {
    UTIL()
    .createManyPs(
        ' ',
        'How did I start coding?',
        'I first learned what programming was all about from Khan Academy. I had used',
        'their website as a mathematics reference, but I randomly stumbled upon their',
        'Javascript section. From there I studied Javascript for a year and a half on Udemy',
        '(and I bought hundreds of dolars of courses), but I could only learn so quickly',
        'with a full time job. I made the decision to study at DevPoint Labs with the',
        'University of Utah, and now I am looking to be hired.')
    .mapClasses("purple")
    .asyncAppendArr(elements.terminalDisplay);
};

const askMove = (event) => {
    UTIL()
    .createManyPs(
        ' ',
        'Why did I move to Salt Lake City?',
        'I moved to Utah in May of 2017, and I\'m really enjoying my time here. In New Jersey',
        'I didn\'nt really have the money to afford an education, but the colleges are much',
        'cheaper in Salt Lake City, and they have great programs in computer science,',
        'economics, and statistics, all of which I\'m interested in. Salt Lake City also',
        'has a lot of hospitals, and having been a hospital pharmacy tech, I knew it would',
        'be easy to find a job when I arrived. This city is my best chance at being successful',
        'academically, professionally, and financially. It also happens to be one of the most',
        'beautiful places I have ever seen.')
    .mapClasses("purple")
    .asyncAppendArr(elements.terminalDisplay);
};


///// ROUTES /////
const askRoutes = (terminal) => {
    //grew up
    terminal.addListener("ask --grew-up", askGrewUp);
    terminal.addListener("ask grew-up", askGrewUp);
    terminal.addListener("ask grewup", askGrewUp);
    terminal.addListener("ask -gu", askGrewUp);

    //age
    terminal.addListener("ask --age", askAge);
    terminal.addListener("ask age", askAge);
    terminal.addListener("ask -a", askAge);

    //coding
    terminal.addListener("ask --coding", askCoding);
    terminal.addListener("ask coding", askCoding);
    terminal.addListener("ask -c", askCoding);

    //move
    terminal.addListener("ask --move", askMove);
    terminal.addListener("ask move", askMove);
    terminal.addListener("ask -m", askMove);

};


export { askRoutes };