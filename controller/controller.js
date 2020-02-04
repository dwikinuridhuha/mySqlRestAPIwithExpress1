// let response = require('../res');
let conneting = require('../connDB');

exports.users = (req, res, next) => {
    conneting.query('select * from person', (err, rows, fields) => {
       if(err) {
           console.log(err);
       } else {
           let data = {
            'status': 200,
            'values': rows
            };
            res.json(data);
            res.end();
       }
    });
}

exports.index = (req, res, next) => {
    let data = {
        'status': 200,
        'values': 'express running'
        };
        res.json(data);
        res.end();
}

exports.findUser = (req, res, next) => {
    let userId = req.params.userId;

    conneting.query("select * from person where id = ?", [userId], (err, rows, fields) => { 
        if(err) {
            console.log(err);
        } else {
            let data = {
                'status': 200,
                'values': rows
            }
            res.json(data);
            res.end();
        }
    });
}

exports.createUser = (req, res) => {
    let namaDepan = req.body.namaDepan;
    let namaBelakang = req.body.namaBelakang;

    conneting.query("insert into person (namaDepan, namaBelakang) values(?, ?)", [namaDepan, namaBelakang], (err, rows, fields) => {
        if(err) {
            console.log(err);
        } else {
            let data = {
                'status': 200,
                'values': "berhasil input"
            };
            res.json(data);
            res.end();
        }
    });
}

exports.updateUser = (req, res, next) => {
    let userId = req.body.userId;
    let namaDepan = req.body.namaDepan;
    let namaBelakang = req.body.namaBelakang;

    conneting.query("update person set namaDepan = ?, namaBelakang = ? where id = ?", [namaDepan, namaBelakang, userId], (err, rows, fields) => {
        if(err) {
            console.log(err);
        } else {
            let data = {
                'status': 200,
                'values': "berhasil diUpdate"
            };
            res.json(data);
            res.end();
        }
    });
}

exports.deleteUser = (req, res, next) => {
    let userId = req.body.userId;
    conneting.query("delete from person where id = ?", [userId], (err, rows, fields) => {
        if(err) {
            console.log(err)
        } else {
            let data = {
                'status': 200,
                'values': "berhasil di hapus"
            }
            res.json(data);
            res.end();
        }
    });
}