const express = require("express");
const PORT = process.env.PORT || 3000;

var app = express();
// middleware
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(
    session({
        secret: 'This is a major secret!',
        resave: false,
        saveUninitialized: false
    })
);

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

const routes = require("./controllers/blog-controllers");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on PORT" + PORT)
});