const   express    = require("express"),
        app        = express(),
        hbs        = require("hbs"),
        bodyParser = require("body-parser"),
        path       = require("path");

// SETUP
const PORT = process.env.PORT || 3006;
const MONGODB_URI = process.env.MONGODB_URI ||"mongodb://127.0.0.1:27017/about-me";

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
// .then(() => console.log("MongoDB Connected Successfully"))
// .catch((err) => console.log(`Failed To Connect To MongoDB: \n${err}`));

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.get("/", (req, res) => {
    res.status(200)
    .render("index");
})

//error route
app.get("*", (req, res) => {
    res.status(404)
    .render("error");
})



// SERVER START
app.listen(PORT, () => {
    console.log(`Server has started on PORT: ${PORT}`);
});


/// Details About Myself 
// const aboutMe = {
//     name: "nicholas ristagno",
//     age: 25,
//     likes: [
//         "programming", 
//         "books", 
//         "hiking", 
//         "politics", 
//         "warm weather"
//     ],
//     previousHome: "Browns Mills, NJ",
//     currentLocation: "Salt Lake City, UT",
//     previousJob: "Operating Room Pharmacy Tech",
//     isLookingForNewJob: true,
// };

// const nickRistagno = new Developer(aboutMe);

// Firm.hire(nickRistagno)
// .then((satisfaction) => console.log(`Success: ${satisfaction}`))
// .catch((err) => console.log(`Something Went Wrong: ${err}`));

//Maps Portfolio API KEY
//AIzaSyCzBCE_cIVEImQjC5DEsznG_XTgnHfmGcA