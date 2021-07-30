const restController = require('../controllers/restController.js')
const adminController = require('../controllers/adminController.js')
const userController = require('../controllers/userController.js')


module.exports = (app) => {
  //使用者頁面
  app.get('/', (req, res) => {
    res.redirect('/restaurants')
  })

  app.get('/restaurants', restController.getRestaurants)

  //管理者頁面
  app.get('/admin', (req, res) => {
    res.redirect('/admin/restaurants')
  })

  app.get('/admin/restaurants', adminController.getRestaurants)

  //註冊頁面
  app.get('/signup', userController.signUpPage)

  app.post('/signup', userController.signUp)
}
