const db = require('../models')
const Restaurant = db.Restaurant

const adminController = {
  //瀏覽頁面
  getRestaurants: (req, res) => {
    return Restaurant.findAll({raw: true}).then(restaurants => {
      return res.render('admin/restaurants', {restaurants: restaurants})
    })
  },
  //新增資料
  createRestaurant: (req, res) => {
    return res.render('admin/create')
  },
  postRestaurant: (req, res) => {
    const { name, tel, address, opening_hours, description} = req.body
    if (!name) {
      req.flash('error_messages', '請填寫餐廳名稱!')
      return res.redirect('back')
    }
    return Restaurant.create({
      name,
      tel,
      address,
      opening_hours,
      description
    })
    .then((restaurant) => {
      req.flash('success_messages', '已成功建立餐廳名單')
      res.redirect('/admin/restaurants')
    })
  },
  //瀏覽餐廳
  getRestaurant: (req, res) => {
    return Restaurant.findByPk(req.params.id, {raw:true}).then(restaurant => {
      return res.render('admin/restaurant', {
        restaurant
      })
    })
  },
  //編輯餐廳
  editRestaurant: (req, res) => {
    return Restaurant.findByPk(req.params.id, {raw:true}).then(restaurant =>{
      return res.render('admin/create', { restaurant })
    })
  },
  putRestaurant: (req, res) => {
    const { name, tel, address, opening_hours, description} = req.body
    if (!name) {
      req.flash('error_messages', '請填寫餐廳名稱!')
      return res.redirect('back')
    }
    return Restaurant.findByPk(req.params.id)
    .then((restaurant) => {
      restaurant.update({
        name,
        tel,
        address,
        opening_hours,
        description
      })
      .then((restaurant) => {
        req.flash('success_messages', '已成功建立餐廳名單')
        res.redirect('/admin/restaurants')
      })
    })  
  },
  //刪除餐廳
  deleteRestaurant: (req, res) => {
    return Restaurant.findByPk(req.params.id)
    .then((restaurant) => {
      restaurant.destroy()
      .then((restaurant) => {
        res.redirect('/admin/restaurants')
      })
    })
  }
}

module.exports = adminController