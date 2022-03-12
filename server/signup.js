const express = require("express");
const app = express();

const { send } = require("express/lib/response");
const { Pool } = require("pg");

app.listen(3000, function () {
	console.log("server is listening on port 3000. Ready to accept request");
});
app.use(express.json());

const pool = new Pool({
	user: "postgres", // should it be my laptop username?
	host: "localhost",
	database: "sirius", // yet to create a database for Sirius
	password: "",
	port: 5432,
});

/* Create Signup Table */
app.post("signup", function (req, res) {
	const id = req.body.id; /* unsure if required*/
	const email = req.body.email;
	const name = req.body.name;
	const password = req.body.postcode;

	/*  Validate email format */
	const emailvalidator = require("email-validator");
	validator.validate("test@email.com");

	/* Validate name - to make sure it is not empty */

	/* validate password - can not be empty. Password format  at least 8 character, 1 uppercase, 1 lowercase*/

	const query =
		"INSERT INTO signup (id INT, email VARCHAR (30), name VARCHAR (20), password VARCHAR (12))";

	pool
		.query(query, [id, email, name, password])
		.then(() => res.send("signup created"))
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});
/* Read Signup Table */

/* Update Signup Table -- For example change password */

/* Delete Signup Table -- to delete an account (Maybe not be an important feature)*/

/*  Validate email format */

/* Validate name - to make sure it is not empty */

/* validate password - can not be empty. Password format  at least 8 character, 1 uppercase, 1 lowercase*/

/*  */
