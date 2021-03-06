const fs = require('fs');
const path = require('path');

// prints something to the console
// console.log clutters the test-output otherwise
function print(s) {
	if (process.env.NODE_ENV !== 'test')
		console.log(s);
}
module.exports.print = print;

// clear all session objects
function clearSessions() {
	const directory = 'sessions';

	if (fs.existsSync(directory)) {
		fs.readdir(directory, (err, files) => {
			if (err) throw err;

			for (const file of files) {
				fs.unlink(path.join(directory, file), err => {
					if (err) throw err;
				});
			}
		});
	}

}
module.exports.clearSessions = clearSessions;

// check, if a visitor is logged in
function isLoggedIn(req) {
	return req.session.user ? true : false;
}
module.exports.isLoggedIn = isLoggedIn;

// print error & redirect
// TODO: decide what to do here
function error(req, res, err) {
	console.error(err);
	res.redirect('/');
}
module.exports.error = error;
