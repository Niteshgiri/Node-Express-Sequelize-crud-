module.exports = (sequelize, DataTypes) => {

    const Leave = sequelize.define("leave", {
        LeavesDates: {
            type: DataTypes.STRING
        },
        LeaveReason: {
            type: DataTypes.STRING
        }
    })

    return Leave

}