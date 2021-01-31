const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/facebook', passport.authenticate('facebook', { //留給Facebook按鈕的，開啟臉書登入
  scope: ['email', 'public_profile'] //告訴臉書我需要申請甚麼資料
}))

router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

module.exports = router