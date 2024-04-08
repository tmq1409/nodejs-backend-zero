const express = require('express');
const { getHomePage, getABC, getDaddy, postCreateUser,
    getCreatePage, getUpdatePage, postUpdateUser,
    getDelete, postDelete } = require('../controller/homeController');
const router = express.Router();

//khai bao route
router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/daddy', getDaddy);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

router.get('/update/:id', getUpdatePage);

router.post('/update/:id', postUpdateUser);

router.get('/delete/:id', getDelete);

router.post('/delete/:id', postDelete);

module.exports = router;