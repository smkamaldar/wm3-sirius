import helmet from "helmet";
import path from "path";


export const configuredHelmet = () =>
	helmet({
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'self'"],
				objectSrc: ["'none'"],
				scriptSrc: ["'self'", "unpkg.com", "polyfill.io"],
				styleSrc: ["'self'", "https: 'unsafe-inline'"],
				imgSrc: ["'self'", "data:", "i.ibb.co"],
				upgradeInsecureRequests: [],
			},
		},
		crossOriginEmbedderPolicy: false,

	});

export const httpsOnly = () => (req, res, next) => {
	if (!req.secure) {
		return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
	}
	next();
};

export const logErrors = () => (err, _, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	console.error(err);
	res.sendStatus(500);
};

export const pushStateRouting = (apiRoot, staticDir) => (req, res, next) => {
	if (req.method === "GET" && !req.url.startsWith(apiRoot)) {
		return res.sendFile(path.join(staticDir, "index.html"));
	}
	next();
};

export const isAuth = (req, res, next)=>{
	// will return true if user is logged in
	if(req.isAuthenticated()){
		next();
	}else {
		res.status(401).json({ msg:"You are not authorized"})
	}
} 
