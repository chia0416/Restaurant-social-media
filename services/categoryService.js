const db = require('../models')
const Restaurant = db.Restaurant
const Category = db.Category

const categoryService = {
  getCategories: (req, res, callback) => {
    return Category.findAll({
      raw: true,
      nest: true
    }).then(categories => {
      if (req.params.id) {
        Category.findByPk(req.params.id)
          .then((category) => {
            callback({
              categories: categories,
              category: category.toJSON()
            })
          })
      } else {
        callback({ categories })
      }
    })
  },

  postCategory: (req, res, callback) => {
    if (!req.body.name) {
      callback({ status: 'error', message: '請輸入分類名稱'})
      // req.flash('error_message', '請輸入分類名稱')
      // return res.redirect('back')
    } else {
      return Category.create({
        name: req.body.name
      })
        .then(() => {
          callback({ status: 'success', message: ''})
          // res.redirect('/admin/categories')
        })
    }
  },
}

module.exports = categoryService