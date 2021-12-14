const CompaniesController = require('../controllers/CompaniesController');
const CompaniesMiddleware = require('../middlewares/CompaniesMiddleware');

module.exports = (app) => {
    app.get('/search',[
    	CompaniesMiddleware.checkTextParam,
    	CompaniesController.search
    ]);
}