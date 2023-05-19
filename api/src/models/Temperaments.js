const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Temperaments', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};