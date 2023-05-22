const express = require('express');
const router = express.Router();
const adminController =require('../controllers/admin-controller')

router.get('/',adminController.getUsers)
router.post('/login',adminController.postAdmin)
router.put('/delete-user/:id',adminController.deleteUser)

module.exports = router