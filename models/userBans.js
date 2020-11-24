module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_bans', {
        user_id: DataTypes.STRING,
        ban_end: DataTypes.DATE,
    });
};