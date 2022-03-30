import { Router } from "express";
import pool from '../db.js'


const router = Router();
const bcrypt = require("bcrypt");

router.get("/", async (req, res) =>
{
	res.send("users info");
})

router.post("/register", async  (req, res) => {

	const { firstName, lastName, email, password } = req.body;
		console.log("register", firstName, lastName, email, password);
	let errors = [];


router.post('/users/register', async  (req, res) =>
{ 
	const { first_name, last_name, email, password } = req.body;
	if (!firstName||!lastName||!email||!password ){
		console.log("third");
		errors.push({ msg: "please enter all fields" });
	}

	if(password.length < 8 ){
		console.log("second");


if (!first_name||!last_name||!email||!password ||!password2)
{ 
	error.push({msg: 'please enter all fields'});
	}

		errors.push({ msg: "password should be at least 8 characters" });


	}

	if(errors.length > 0) {
		console.log("first");
		res.status(400).json({ errors, firstName, lastName, email, password });

	} else {


Pool.query (
	`SELECT * FROM users WHERE email = $1`, [email], (error, results)=> {
	if (error){
		throw error;
	}
	console.log (results.rows);

	if(results.rows.length > 0){
		errors.push({msg: "Email already registered"});
		res.render('register', { errors });
	}else {
			Pool. query (
				`INSERT INTO user (first_name, last_name, email, password) VALUE($1, $2, $3, $4)RETURNING id, password`, [first_name, last_name, email, hashedPassword], (error, results) =>
			    {
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

		const hashedPassword  = await bcrypt.hash(password, 10);


		pool.query (`SELECT * FROM users WHERE email = $1`, [email], (error, results)=> {
			if (error){
				throw error;
			}
			console.log (results.rows);

			if(results.rows.length > 0){
				errors.push({ msg: "Email already registered" });
				res.status(400).json({ errors });
			} else {
				const currentDate = new Date();

				pool.query (`INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6) RETURNING id, password`, [firstName, lastName, email, hashedPassword, currentDate, currentDate], (error, results) =>{
					if (error){
						throw error;
					}

					console.log(results.rows);

					res.status(201).json({ msg: "You are now registered. Please log in" });
				});
			}
		});
	}
});


export default router;
