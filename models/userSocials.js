module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_social', {
        user_id: DataTypes.STRING,
        social_id: DataTypes.STRING,
    }, {
        timestamps: false,
    });
};