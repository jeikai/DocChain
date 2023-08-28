const createError = require("http-errors");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const serverless = require("serverless-http");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const ggv = require("./routes/ggVison");
const esign = require("./routes/esign");
const verify = require("./routes/verify");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("./client/build"));
}

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/ggVision", ggv);
app.use("/api/esign", esign);
app.use("/api/verify", verify);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err,
	});
});

app.listen(process.env.PORT || 5000, () => {
	console.log("server is running on port 5000");
});

module.exports.handler = serverless(app);
