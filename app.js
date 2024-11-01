require("dotenv").config();
const express = require("express");
const path = require("path");
// const { connectToMongoDB } = require('./connect');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');


const URL = require('./models/url');

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 8001;

// mongodb://127.0.0.1:27017/short-url
// mongoose
//     .connect(process.env.MONGO_URL)
//     .then((e) => console.log("MongoDB Connected"));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB Atlas!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB Atlas:", error);
    });

const { restrictToLoggedinUserOnly, checkAuth } = require('./middlewares/auth')

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    },
    );
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));