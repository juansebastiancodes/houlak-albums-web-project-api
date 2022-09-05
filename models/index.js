require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD,
    {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        omitNull: true,
        /* eslint-disable-next-line no-console */
        logging: process.env.NODE_ENV === 'production' ? false : console.log,
        define: {
            timestamps: false,
        },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        },
    },
);

const models = {
    requestInfo: require('./requestInfo').init(sequelize, Sequelize),
};

for (const model of Object.values(models)) {
    if ('associate' in model && typeof model.associate === 'function') {
        model.associate(models);
    }
}

module.exports = { models, sequelize };
