const CompaniesModel = require('../models/CompaniesModel');

exports.search = (req,res) => { 
	CompaniesModel.search(req.query.text).then((data)=> {
		res.status(200).send(data)
	}).catch((err)=> {  
		res.status(500).send()
	})
}