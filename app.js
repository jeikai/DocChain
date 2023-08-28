var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const ggv = require("./routes/ggVison");
const esign = require("./routes/esign");
const verify = require("./routes/verify");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("./client/build"));
}

app.use("/v1", indexRouter);
app.use("/v1/users", usersRouter);
app.use("/v1/ggVision", ggv);
app.use("/v1/esign", esign);
app.use("/v1/verify", verify);

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

module.exports = app;