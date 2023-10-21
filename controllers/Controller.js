const { Todo } = require('../models')


class Controller {

    static home(req, res){
        res.send("<h1>Homework Week 11 -Unit Testing & Deployment </h1>")
    }

    static async showAllTodo(req, res){
        try {
            const data = await Todo.findAll()

            const result = {
                message : 'OK', 
                data : data
            }
            res.status(200).json(result)
        } catch (err) {
            res.status(500)
            console.log(err, `Can't Find All Data`)
        }
    }

    static async getTodoById(req,res){
        try {
            const  id = req.params.id
            const data = await Todo.findByPk(id)
            
            if (data === null || undefined){
                return res.status(404).json({
                    status :'Failed',
                    message : `Data With Id ${id} Not Found`
                })
            }

            const result = {
                message : 'OK', 
                data : data
            }
            res.status(200).json(result)
        } catch (err) {
            res.status(500)
            console.log(err, `Can't Find All Data`)
        }
    }

    static async createNewTodo(req, res){
        try {
            const { title } =  req.body
            const newData = await Todo.create({ title: title })

            const result = {
                message : 'New Data Created', 
                data : newData
            }
            res.status(201).json(result)
        } catch (err) {
            res.status(500)
            console.log(err, `Error Can't Create New Data`)
        }
    }

    static async deleteTodo(req, res){
        try{
            const id = req.params.id
            const data = await Todo.findByPk(id)
            
            if (data === null || undefined){
                return res.status(404).json({
                    status :'Failed',
                    message : `Data With Id ${id} Not Found`
                })
            }

            await Todo.destroy({
                where: {
                    id: id
                }
            })

            const result = {
                message : `Data With Id ${id} Successfully Deleted (Soft Delete)`, 
            }
            res.status(202).json(result)
        } catch {
            res.status(500)
            console.log(err, `Error Can't delete Data`)
        }
    }

    static async updateTodo(req,res){
        try {
            const id = req.params.id
            const { title } =  req.body

            const data = await Todo.findByPk(id)
            
            if (!data){
                return res.status(404).json({
                    status :'Failed',
                    message : `Data With Id ${id} Is Not Exists`
                })
            }

            data.title = title
            data.save()
            const result = {
                message : 'OK', 
                data : data
            }
            res.status(200).json(result)
        } catch {
            res.status(500)
            console.log(err, `Error Can't Update Data`)
        }
    }


}

module.exports = Controller