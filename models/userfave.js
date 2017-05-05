'use strict';
module.exports = function(sequelize, DataTypes) {
    var userFave = sequelize.define('userFave', {
        userId: DataTypes.INTEGER,
        quoteId: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return userFave;
};
