// import controllers Leave, Employee
const employeeController = require('../controllers/EmployeeController.js')
const leaveController = require('../controllers/LeaveController.js')


// router
const router = require('express').Router()


// use routers
router.post('/',  employeeController.addEmployee)

router.get('/', employeeController.getAllEmployee)


// Review Url and Controller

router.get('/allLeave', leaveController.getAllLeave)
router.post('/:id', leaveController.addLeave)

// get one employee  all leaves
router.get('/getLeave/:id', employeeController.getEmployeeLeave)

// get all employee  all leaves
router.get("/all",employeeController.getAllEmployeeLeave)

// employee router
router.get('/:id', employeeController.getOneEmployee)

// update employee by id
router.put('/:id', employeeController.updateEmployee)

//delete by id
router.delete('/:id', employeeController.deleteEmployee)

module.exports = router