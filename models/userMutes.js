module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_mutes', {
        user_id: DataTypes.STRING,
        mute_end: DataTypes.DATE,
    });
};