module.exports = (sequelize, DataTypes) => {
    return sequelize.define('prompt', {
        body: {
            type: DataTypes.TEXT,
            unique: true,
        },
        promptby: DataTypes.STRING,
    })
}