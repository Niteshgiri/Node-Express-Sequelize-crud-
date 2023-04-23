module.exports = (sequelize, DataTypes) => {

    const Employee = sequelize.define("employee", {
      
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        }
    
    })

    return Employee

}