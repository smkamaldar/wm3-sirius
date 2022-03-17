import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import pool from "./db"

const initializePassport = (passport)=>{
    const authenticateUser =(email, password, done)=>{

       
            pool.query("SELECT * FROM users WHERE email = $1", [email])
            .then(async (result)=>{
                const user = result.rows[0]
                if(!user){
                    return done(null, false, { message: 'Incorrect username or password.' }); 
                }
                try {
                    if( await bcrypt.compare(password, user.password)){
                        return done(null, user)
                    }else{
                        return done(null, false, { message: 'Incorrect username or password.' });
                    }
                } catch (error) {
                    done(error)
                    
                }
        
            }).catch(error=> done(error))
    }

    passport.use(new LocalStrategy({ usernameField: "email"}, authenticateUser))
    passport.serializeUser((user, done) => {
        return done(null, {id: user.id, firstName: user.first_name, lastName: user.last_name, email: user.email})})
    passport.deserializeUser((id, done) => {
      return done(null, {})
    })

}

export default initializePassport;