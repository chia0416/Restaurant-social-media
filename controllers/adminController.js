const db = require('../models')
const Restaurant = db.Restaurant
const fs = require('fs')

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
    const { file } = req
    if (!name) {
      req.flash('error_messages', '請填寫餐廳名稱!')
      return res.redirect('back')
    }

    if(file){
      fs.readFile(file.path, (err,data) => {
        if (err) console.log('Error: ', err)
        fs.writeFile(`upload/${file.originalname}`, data, () => {
          return Restaurant.create({
            name,
            tel,
            address,
            opening_hours,
            description,
            image: file ? `/upload/${file.originalname}` : null
          })
          .then((restaurant) => {
            req.flash('success_messages', '已成功建立餐廳名單')
            res.redirect('/admin/restaurants')
          })
        })
      })
    } else {
      return Restaurant.create({
        name,
        tel,
        address,
        opening_hours,
        description,
        image: null
      })
      .then((restaurant) => {
        req.flash('success_messages', '已成功建立餐廳名單')
        res.redirect('/admin/restaurants')
      })
    }
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
    const { file } = req
    if (!name) {
      req.flash('error_messages', '請填寫餐廳名稱!')
      return res.redirect('back')
    }
    if(file){
      fs.readFile(file.path, (err,data) => {
        if (err) console.log('Error: ', err)
        fs.writeFile(`upload/${file.originalname}`, data, () => {
          return Restaurant.findByPk(req.params.id)
            .then((restaurant) => {
              restaurant.update({
                name,
                tel,
                address,
                opening_hours,
                description,
                image: file ? `/upload/${file.originalname}` : restaurant.image
              })
              .then((restaurant) => {
                req.flash('success_messages', '已成功建立餐廳名單')
                res.redirect('/admin/restaurants')
              })
           })
        })
      })
    } else {
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
    }
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