// const config = require('../config-test.json');
const config = require('./config.js');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
// const env = process.env.NODE_ENV || 'development';
// const config = require('./config.js')[env];
module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist

    const { host, port, user, password, database } = config.development;
    const connection = await mysql.createConnection({ host, port, user, password });

    // const { username, password, database, host, port } = config.development;
    // const connection = await mysql.createConnection({ username, password, host, port  });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.Account = require('../accounts/account.model')(sequelize);
    db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);

    // define relationships
    db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
    db.RefreshToken.belongsTo(db.Account);
    
    // sync all models with database
    await sequelize.sync();
}