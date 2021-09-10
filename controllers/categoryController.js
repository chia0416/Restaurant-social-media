const db = require('../models')
const categoryService = require('../services/categoryService')
const Category = db.Category

const categoryController = {

  // 瀏覽目錄
  getCategories: (req, res) => {
    categoryService.getCategories(req, res, (data) =>{
      return res.render('admin/categories', data)
    })
  },

  // 新增分類名稱
  postCategory: (req, res) => {
    categoryService.postCategory(req, res, (data) => {
      if (data.status === 'error') {
        req.flash('error_message', data.message)
        return res.redirect('back')
      } else {
        return res.redirect('/admin/categories')
      }
    })
  },

  // 編輯分類名稱
  putCategory: (req, res) => {
    if (!req.body.name) {
      req.flash('error_message', '請輸入分類名稱')
      return res.redirect('back')
    } else {
      return Category.findByPk(req.params.id)
        .then((category) => {
          category.update(req.body)
            .then(() => {
              res.redirect('/admin/categories')
            })
        })
    }
  },

  // 刪除分類
  deleteCategory: (req, res) => {
    return Category.findByPk(req.params.id)
      .then((category) => {
        category.destroy()
          .then((category) => {
            res.redirect('/admin/categories')
          })
      })
  }
}

module.exports = categoryController
