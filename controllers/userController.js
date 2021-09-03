const bcrypt = require('bcryptjs')
const db = require('../models')
const User = db.User

const userController = {
  //登入註冊頁面
  signUpPage: (req, res) => {
    return res.render('signup')
  },

  signUp: (req, res) => {
    if (req.body.passwordCheck !== req.body.password) {
      req.flash('error_messages', '兩次密碼輸入不同！')
      return res.redirect('/signup')
    } else {
      // confirm unique user
      User.findOne({ where: { email: req.body.email } }).then(user => {
        if (user) {
          req.flash('error_messages', '信箱重複！')
          return res.redirect('/signup')
        } else {
          User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
          }).then(user => {
            // req.flash('success_messages', '成功註冊帳號!')
            return res.redirect(307, '/signin')
          })
        }
      })
    }
  },

  signInPage: (req, res) => {
    return res.render('signin')
  },

  signIn: (req, res) => {
    req.flash('success_messages', '成功登入!')
    res.redirect('/restaurants')
  },

  logout: (req, res) => {
    req.flash('success_messages', '成功登出!')
    req.logout()
    res.redirect('/signin')
  },

  //Profile頁面
  getUser: (req, res) => {
    // prevent access to other user profile
    if (req.user.id !== Number(req.params.id)) {
      return res.redirect(`/users/${req.user.id}`)
    }
    return User.findByPk(req.params.id)
      .then(user => {
        return res.render('profile', { user: user.toJSON() })
      })
  },
}

module.exports = userController
