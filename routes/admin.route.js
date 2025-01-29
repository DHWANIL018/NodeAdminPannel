const router=require('express').Router()
const Admin=require('../controller/admin.controller')

router.post('/register',Admin.register)
router.post('/login',Admin.login)

module.exports=router