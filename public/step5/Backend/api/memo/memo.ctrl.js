const models = require('../../models');
const SequelizeUniqueConstraintError = 'SequelizeUniqueConstraintError';

const create = (req, res) => {
    const text = req.body.text;
    const checked = 0;
    
    if(!text)
        return res.status(400).end();
        
    models.Todo.create({text, checked})
        .then(todo => {
            console.log(text);
            res.status(201).json(todo);
        }) 
        .catch(err => {
           if(err.name === SequelizeUniqueConstraintError) {
               return res.status(409).end();
           }
           res.status(500).end();
        });
}

module.exports = {
    create,
};