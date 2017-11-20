const express = require("express");
const game = require("./gameObject");

const router = express.Router();

router
    .get("/pictures", (req, res) => res.send(game.pictures))
    .get("/quote", (req, res) => res.send(game.getNextQuote()))
    .get("/quotes", (req, res) => res.send( Array(7).fill().map( () => game.getNextQuote() )))
    .get("/room/", (req, res) => res.send(game.room))
    .post("/room/picture",(req, res) => {
        game.room.picture = game.getNextPicture();
        res.status(201).send(game.room.picture);
    })
    .post("/room/quotes",(req, res) => {
        game.room.quotes.push(req.body);
        res.status(201).send(game.getNextQuote());
    })
    .post("/room/players",(req, res) => {
        if(req.body.password == "password"){
            const player = { name: req.body.name, id: game.room.players.length };
            game.room.players.push(player);
            res.status(201).send(player);    
        }
        else{
            res.status(403).send("Invaid Password");                
        }
    })

module.exports.router = router;