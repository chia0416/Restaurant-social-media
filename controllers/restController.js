const db  = require('../models')
const Restaurant = db.Restaurant
const Category = db.Category

const restController = {
  getRestaurants: (req, res) => {
    Restaurant.findAll({
      include: Category
    })
      .then(restaurants => {
        //將restaurants 內部資料展開一一傳入data
        const data = restaurants.map (r => ({
          ...r.dataValues,
          description: r.dataValues.description.substring(0, 50),
          categoryName: r.Category.name  //如果類別為空則跳BUG
        }))
        return res.render('restaurants', {
          restaurants: data
        })
      })
  }
}
module.exports = restController