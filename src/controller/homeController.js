const connection = require('../config/database');
const { getAllUsers, deleteUser } = require('../services/CRUDService');


const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getDaddy = (req, res) => {
    //res.send('<h1>Check abc</h1>')
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let [results, fields] = await connection.query('select * from Users u where id = ?', [userId]);
    console.log(">>> check results = ", results);
    let user = results && results.length > 0 ? results[0] : {};
    res.render('edit.ejs', { userEdit: user })
}

const postCreateUser = async (req, res) => {
    //let {email, name, city} = req.body

    // connection.query(
    //     `INSERT INTO Users(email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send('create a new user successfully!!!')
    //     }
    // );
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(">>> email = ", email, " name = ", name, " city = ", city);

    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES (?, ?, ?)`, [email, name, city],
    );
    console.log(">>> check result: ", results);
    res.redirect('/');
}

const postUpdateUser = async (req, res) => {
    const userId = req.params.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(">>> email = ", email, " name = ", name, " city = ", city);
    let [results, fields] = await connection.query(
        `UPDATE Users set email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, userId],
    );
    res.redirect('/');
}

const getDelete = async (req, res) => {
    const userId = req.params.id;
    let [results, fields] = await connection.query('select * from Users u where id = ?', [userId]);
    console.log(">>> check results = ", results);
    let user = results && results.length > 0 ? results[0] : {};
    res.render('delete.ejs', { userDelete: user })
}

const postDelete = async (req, res) => {
    const userId = req.params.id;
    await deleteUser(userId);
    res.redirect('/');
}



module.exports = {
    getHomePage, getABC, getDaddy,
    postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, getDelete, postDelete
}