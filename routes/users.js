const express = require('express');
const router = express.Router();

/* GET users list. */
router.get('/', (req, res) => {
	const db = req.db;
	db.collection('userlist').find().toArray((err, items) => {
		res.json(items);
	});
});

router.post('/', (req, res) => {
	const db = req.db;
	db.collection('userlist').insert(req.body, (err, result)=> {
		res.send(
			(err === null) ? { msg: '' } : { msg:err }
		);
	});
});

//Delete a user
router.delete('/:id', (req, res) => {
	const db = req.db;
	const userToDelete = req.params.id;
	db.collection('userlist').removeById(userToDelete, (err, result) => {
		res.send((result === 1)? { msg: '' } : { msg:err });
	});
});

module.exports = router;
