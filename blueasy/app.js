const 	express = require("express"),
		app = express();

app.use(express.static("./assets"));

app.listen(8000);

