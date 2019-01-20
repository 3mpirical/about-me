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


// ROUTES
app.get("/", (req, res) => {
    res.status(200)
    .render("index");
});


app.get("/skills", (req, res) => {
    res.status(200)
    .render("skills");
});


//error route
app.get("*", (req, res) => {
    res.status(404)
    .render("error");
});



// SERVER START
app.listen(PORT, () => {
    console.log(`Server has started on PORT: ${PORT}`);
});



//Maps Portfolio API KEY
//AIzaSyCzBCE_cIVEImQjC5DEsznG_XTgnHfmGcA