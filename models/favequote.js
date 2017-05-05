'use strict';
module.exports = function(sequelize, DataTypes) {
    var favequote = sequelize.define('favequote', {
        quote: DataTypes.STRING,
        author: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                models.favequote.belongsToMany(models.user, { through: "userFave" })
            }
        }
    });
    return favequote;
};
