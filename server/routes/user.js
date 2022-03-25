import { Router } from "express";
import { Pool } from "pg";
import { errorMonitor } from "pg/lib/query";
import app from "../app";

const router = Router();
const bcrypt = require("bcrypt");

const flash = require ("express-flash");


app.use (flash ());

router.get("/", async (req, res) => 
{
	res.send("users info")
})


router.post("/register", async (req, res) =>
 {
	res.send("register new user");
})


router.post('/users/register', async  (req, res) => 
{ 
	const { first_name, last_name, email, password} = req.body;

let errors = [];

if (!first_name||last_name||!email||!password ||!password2) 
{ 
	error.push({msg: 'please enter all fields'});
	}

if(password !== password2){
	errors.push({
	msg: 'password do not match'});
	}

if(password.length < 8 ){
	error.push({msg: 'password should be at least 8 characters'});
	}

if(errors.length > 0) {
	res.render('register', { errors, first_name, last_name, email, password, password2,});
	} else {
		
let hashedPassword  = await bcrypt.hash(password, 10);


Pool.query (
	`SELECT * FROM users WHERE email = $1`, [email], (error, results)=> {
	if (error){
		throw error;
	}
	console.log (results.rows);

	if(results.rows.length > 0){
		errors.push({msg: "Email already registered"});
		res.render('register', {errors});
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


export default router;
