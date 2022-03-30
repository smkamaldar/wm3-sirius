import express from "express";
import morgan from "morgan";
import path from "path";
require('dotenv').config();
import initializePassport from "./passport-config.js";
import passport from "passport";
import session from "express-session";
import cors from "cors";

// categorising APIs
import userRoute from "./routes/user";
import starRoute from "./routes/star";
import authRoute from "./routes/auth";

import {
	configuredHelmet,
	httpsOnly,
	logErrors,
	pushStateRouting,
} from "./middleware";

const staticDir = path.join(__dirname, "static");

const app = express();
app.use(session({
	secret: process.env.SECRET,
	resave: true,
	saveUninitialized: true
}))
initializePassport(passport);
// everytime we load routes they run
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(configuredHelmet());
app.use(morgan("dev"));
app.use(cors());
if (app.get("env") === "production") {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

// using middleware in order to routing
app.use("/api/user", userRoute);
app.use("/api/stars", starRoute)
app.use("/api/auth", authRoute)

app.use(express.static(staticDir));
app.use(pushStateRouting("/api", staticDir));

app.use(logErrors());

export default app;
