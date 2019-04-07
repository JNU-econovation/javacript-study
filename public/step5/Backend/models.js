const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false // default => console.log
});

const Memo = sequelize.define('memo', {
    name: {
        type:Sequelize.STRING,
    },
    title: {
        type:Sequelize.STRING,
    },
    content: {
        type:Sequelize.STRING,
    },
    image: {
        type:Sequelize.STRING,
    },
});

module.exports = { Sequelize, sequelize, Memo };


