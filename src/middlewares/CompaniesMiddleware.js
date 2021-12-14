exports.checkTextParam = (req, res, next) => {
	if(req.query.text) {
		next();
	} else {
		res.status(400).send();
	}
}