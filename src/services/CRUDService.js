const connection = require("../config/database");

const getAllUsers = async () => {
    // let users = [];
    // // A simple SELECT query
    // connection.query(
    //     'select * from Users u',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log(">>>> results = ", results); // results contains rows returned by server
    //         console.log("check users:", users);
    //         res.send(JSON.stringify(users))
    //     }
    // );
    let [results, fields] = await connection.query(
        'select * from Users u',
    );
    return results;
}

const deleteUser = async (id) => {
    let [results, fields] = await connection.query(
        'delete from Users where id = ?', [id]
    );
}

module.exports = {
    getAllUsers, deleteUser
}