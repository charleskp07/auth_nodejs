module.exports = (sequelize, DataTypes) => {

    const UserData = sequelize.define('user_datas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        profile_picture: {
            type: DataTypes.STRING,
        },

    }, {
        tableName: 'user_datas'
    })


    return UserData
}
