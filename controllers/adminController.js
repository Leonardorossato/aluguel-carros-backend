const Admin = require('../models/Admin')

class AdminController{
    static createAdmin = async(req, res) => {
        const newAdmin = new Admin({
            email : req.body.email,
            password : req.body.password
        })
        try {
            const adimCreated  = await Admin.create(newAdmin)
            return res.status(201).json(adimCreated)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
}

module.exports = AdminController