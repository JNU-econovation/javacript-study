const models = require('../../models');

const create = (req, res) => {
    const name = req.body.text;
    const title = req.body.text;
    const content = req.body.text;
    const imagePath = `${req.file.filename}`;
        
    models.Memo.create({name, title, content, imagePath})
        .then(memo => {
            res.status(201).redner('pages/result.html');
        }) 
        .catch(err => {
            if(err.name === 'SequelizeUniqueConstraintError') {
                return res.status(409).end();
            }
            res.status(500).end();
        });
}

module.exports = {
    create,
};