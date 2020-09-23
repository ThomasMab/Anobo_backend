//ORM pour manipuler la BD postgres 
//en simulant une base de données orientée objet dans le serveur. 
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

module.exports = sequelize;