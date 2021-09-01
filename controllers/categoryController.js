const db = require('../models')
const Category = db.Category

let categoryController = {
    getCategories: (req, res) => {
        return Category.findAll({
            rew: true,
            nest: true
        }).then(categories => {
            return res.render('admin/categories', { categories: categories })
        })
    }
}

module.exports = categoryController