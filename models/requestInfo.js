const { Model, DataTypes } = require('sequelize');

module.exports = class RequestInfo extends Model {

    static init(sequelize, dataTypes) {
        return super.init({
            id: {
                key: 'id',
                primaryKey: true,
                autoincrement: true,
                unsigned: true,
                type: DataTypes.INTEGER,
            },
            artist_name: {
                key: 'artist_name',
                type: DataTypes.TEXT,
                allowNull: false,
            },
            date: {
                key: 'date',
                type: DataTypes.DATE,
                allowNull: false,
            },
            ip: {
                key: 'ip',
                type: DataTypes.TEXT,
                allowNull: false,
            },
        }, { tableName: 'requests_information', modelName: 'RequestInfo', sequelize });
    }
};
