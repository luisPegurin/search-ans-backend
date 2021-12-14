const connection = require ('../services/connection');

exports.search = async (text) => {
	try {
		con = await connection();
		
		text =  '%' + text.toUpperCase() + '%'
		const query = {
			text:"select registro_ans, razao_social from operadoras where razao_social like $1",
			values: [text]
		}

		const now = await con.query(query);
		con.end();
		return now.rows;
	}
	catch(err) {
		throw err;
	}
}