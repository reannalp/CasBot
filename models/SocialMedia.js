module.exports = (sequelize, DataTypes) => {
    return sequelize.define('social_media', {
        ao3: {
            type: DataTypes.STRING,
            unqiue: true,
        },
        twitter: {
            type: DataTypes.STRING,
            unqiue: true,
        },
        tumblr: {
            type: DataTypes.STRING,
            unqiue: true,
        },
        instagram: {
            type: DataTypes.STRING,
            unqiue: true,
        },
        other: {
            type: DataTypes.STRING,
            unqiue: true,
        },
    }, {
        timestamps: false,
    })
}