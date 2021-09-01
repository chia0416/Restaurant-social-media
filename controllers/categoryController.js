const db = require('../models')
const Category = db.Category

let categoryController = {
    //瀏覽目錄
    getCategories: (req, res) => {
        return Category.findAll({
            raw: true,
            nest: true
        }).then(categories => {
            return res.render('admin/categories', { categories: categories })
        })
    },
    
    //新增分類名稱
    postCategory: (req, res) => {
        if(!req.body.name) {
            req.flash('error_message', '請輸入分類名稱')
            return res.redirect('back')
        } else {
            return Category.create({
                name: req.body.name
            })
            .then(() => {
                res.redirect('/admin/categories')
            })
        }
    }
}

module.exports = categoryController