import { Router } from "express";
import { Pool } from "pg";
import { errorMonitor } from "pg/lib/query";
import app from "../app";

const router = Router();
const bcrypt = require("bcrypt");

const flash = require ("express-flash");


app.use (flash ());
// current user detail
router.get("/", async (req, res) => {
	res.send("users info")
})

// Register Page
router.post("/register", async (req, res) => {
	res.send("register new user");
})

//Register Handle
router.post('/users/register', async  (req, res) => { 
	const { name, email, password} = req.body;

	let errors = [];
	// Check required fields 
	if (!first_name||last_name||!email||!password ||!password2) { 
		error.push({msg: 'please enter all fields'});
	}
	// Check password match 
	if(password !== password2){
		errors.push({
		msg: 'password do not match'});
	}
	//Check password length
	if(password.length <6){
		error.push({msg: 'password should be at least 6 characters'});
	}
	if(errors.length > 0) {
	res.render('register', { errors, first_name, last_name, email, password, password2,});
	} else {
		//Form validation has passed ( already done in auth.js)

		let hashedPassword  = await bcrypt.hash(password, 10);

		// Query database

		Pool.query (
			`SELECT * FROM users WHERE email = $1`, [email], (error, results)=> {
				if (error){
				throw error;
				}
				console.log (results.rows);

				if(results.rows.length > 0){
					errors.push({msg: "Email already registered"});
					res.render('register', {errors});
				} // whereby there is no user database
				else {
					Pool. query (
						`INSERT INTO user (first_name, last_name, email, password)
						VALUE($1, $2, $3, $4)
						RETURNING id, password`, [first_name, lastname, email, hashedPassword], (error, results) =>{
							if (error){
								throw error;
							}
							console.log(result.rows);
							req.flash('success_msg', "You are now registered. Please log in", );
							res.redirect("/users/login")

						}
					);

				}



			}
		);
	}


})


export default router;
