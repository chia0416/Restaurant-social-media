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
    categoryService.putCategory(req, res, (data) => {
      if (data.status === 'error') {
        req.flash('error_message', data.message)
        return res.redirect('back')
      } else {
        return res.redirect('/admin/categories')
      }
    })
  },

  // 刪除分類
  deleteCategory: (req, res) => {
    categoryService.deleteCategory(req, res, (data) => {
      if (data.status === 'success') {
        return res.redirect('/admin/categories')
      }
    })
  }
}

module.exports = categoryController
