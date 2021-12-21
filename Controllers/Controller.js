const { application } = require('express');
const Room = require('../Models/RoomModel');


var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'room'
});
connection.connect(function(error) { if (error) console.log(error); })

let express = require('express');
let app = express();



exports.Room = function(req, res) {
    res.render('RoomForm.ejs');
};
exports.getRoom = function(req, res) {
    let Name = req.body.Room;
    let Width = req.body.Width;
    let Length = req.body.Length;

    let NewRoom = new Room(Name, Width, Length);
    var l = NewRoom.Width;
    var L = NewRoom.Width;
    var S = l * L;
    let AddRoom = { "Name": NewRoom.Name, "Width": l, "Length": L, "Surface": S };
    connection.query("INSERT INTO roomlist SET ? ", AddRoom, function(err, result) {
        if (err) console.log(err);
        res.render('RoomForm.ejs');
    });
};

exports.Appartement = function(req, res) {
    connection.query("select * from room;", function(error, result) {
        if (error) console.log(error);
        res.render('Appartement.ejs');
    });
};