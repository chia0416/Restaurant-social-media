const db = require('../models')
const Restaurant = db.Restaurant

const adminController = {
  getRestaurants: (req, res) => {
    return Restaurant.findAll({raw: true}).then(restaurants => {
      return res.render('admin/restaurants', {restaurants: restaurants})
    })
  },

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

  getRestaurant: (req, res) => {
    return Restaurant.findByPk(req.params.id, {raw:true}).then(restaurant => {
      return res.render('admin/restaurant', {
        restaurant
      })
    })
  }
}
module.exports = adminController