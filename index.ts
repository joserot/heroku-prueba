import * as express from "express";
import * as cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	}),
);

const dev = process.env.NODE_ENV == "development";
const port = process.env.PORT || 3500;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/env", (req, res) => {
	res.json({
		environment: process.env.NODE_ENV,
	});
});

app.get("/hello", (req, res) => {
	res.json({
		message: "hello, how are you?",
	});
});
