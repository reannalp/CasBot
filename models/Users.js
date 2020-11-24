module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        user_id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        birthday: DataTypes.DATE,
        pronouns: DataTypes.STRING,
        timezone: DataTypes.STRING,
    }, {
        timestamps: false,
    });
};
