const db = require('../models')

// model
const Leave = db.leaves

// functions

//1. Add Leave

const addLeave = async (req, res) => {

    const id = req.params.id

    let data = {
        employee_id: id,
        LeavesDates: req.body.LeavesDates,
        LeaveReason: req.body.LeaveReason
    }

    const data2 = await Leave.create(data)
    res.status(200).send(data2)

}

// 2. Get All Leave

const getAllLeave = async (req, res) => {

    const data = await Leave.findAll({})
    res.status(200).send(data)

}

module.exports = {
    addLeave,
    getAllLeave
}