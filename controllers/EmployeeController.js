const db = require('../models')


// create main Model
const Employee = db.employees
const Leave = db.leaves

// main work

// create employee

const addEmployee = async (req, res) => {

    let info = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        address: req.body.address 
    }

    const data = await Employee.create(info)
    res.status(200).send(data)
    console.log(data)

}



//  get all employee

const getAllEmployee = async (req, res) => {

    let data = await Employee.findAll({})
    res.status(200).send(data)

}

//  get single employee

const getOneEmployee = async (req, res) => {

    let id = req.params.id
    let data = await Employee.findOne({ where: { id: id }})
    res.status(200).send(data)

}

//  update employee

const updateEmployee = async (req, res) => {

    let id = req.params.id

    const data = await Employee.update(req.body, { where: { id: id }})

    res.status(200).send(data)
   

}

//  delete employee by id

const deleteEmployee = async (req, res) => {

    let id = req.params.id
    
    await Employee.destroy({ where: { id: id }} )

    res.status(200).send('Product is deleted !')

}



//  connect one to many relation employee and leave

const getEmployeeLeave =  async (req, res) => {

    const id = req.params.id

    const data = await Employee.findOne({
        include: [{
            model: Leave,
            as: 'leave'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}

const getAllEmployeeLeave =  async (req, res) => {

    const data = await Employee.findAll({
        include: [{
            model: Leave,
            as: 'leave'
        }]
       // where: { id: id }
    })

    res.status(200).send(data)



}





module.exports = {
    addEmployee,
    getAllEmployee,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeLeave,
    getAllEmployeeLeave
}