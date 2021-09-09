const db = require('../models')
const Restaurant = db.Restaurant
const Category = db.Category

const adminService = {
  // 瀏覽全部餐廳
  getRestaurants: (req, res, callback) => {
    return Restaurant.findAll({
      raw: true,
      nest: true,
      include: [Category]
    }).then(restaurants => {
      callback({ restaurants })
    })
  },
  // 瀏覽個別餐廳
  getRestaurant: (req, res, callback) => {
    return Restaurant.findByPk(req.params.id, {
      include: [Category]
    }).then(restaurant => {
      callback({ restaurant: restaurant.toJSON() })
      })
  },

  deleteRestaurant: (req, res, callback) => {
    return Restaurant.findByPk(req.params.id)
      .then((restaurant) => {
        restaurant.destroy()
          .then((restaurant) => {
           callback({ status:'success', message:'' })
          })
      })
  },

}

module.exports = adminService