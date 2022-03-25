import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import pool from "./db"

const initializePassport = (passport) => {
    const authenticateUser = (email, password, done) => {
        pool.query("SELECT * FROM users WHERE email = $1", [email])
            .then(async (result) => {
                const user = result.rows[0]
                if (!user) {
                    return done(null, false, { message: 'Incorrect username or password.' });
                }
                try {
                    if (await bcrypt.compare(password, user.password)) {
                        return done(null, user)
                    } else {
                        return done(null, false, { message: 'Incorrect username or password.' });
                    }
                } catch (error) {
                    done(error)
                }
            }).catch(error => done(error))
    }

    passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser))
    passport.serializeUser((user, done) => {
        return done(null, user.id)
    })
    // when we need to grab the user from session.
    passport.deserializeUser(async (id, done) => {
        try {
            const result = await pool.query('SELECT id, first_name, last_name, email FROM users WHERE id = $1', [id])
            const user = result.rows[0];
            if (user) {
                done(null, user)
            }
        } catch (error) {
            done(error)
        }
    })

}

export default initializePassport;