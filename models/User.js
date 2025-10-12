module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
        },

        email: {
            type: DataTypes.STRING,
            unique: true,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        otp: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        expireTime: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        tableName: 'users'
    })


    return User
}
