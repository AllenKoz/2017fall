import * as $ from 'jquery';

export class Quote {
    text: string
}

export class Player {
    name: string = "";
    quotes: Quote[] = [];
    score: number = 0;

    drawQuotes(){
        $("#my-quotes").html(
            this.quotes.map( x => `<li class="list-group-item">${x.text}</li>` ).join("")
        );
    }
}

export class Room {
    players: Player[] = [new Player(), new Player()];
    dealer: Player;
    picture: string;
    quotes: Quote[] = [];

    drawPicture() {
        $("#picture").attr("src", this.picture);
    }
    drawQuotes(){
        $("#played-quotes").html(
            this.quotes.map( x => `<li class="list-group-item">${x.text}</li>` ).join("")
        );
    }
    drawPlayers(){
        $("#players").html(
            this.players.map( x => `<li class="list-group-item">${x.name}</li>` ).join("")
        );
    }
}

export class Game {
    players: Player[] = [];
    pictures: string[] = [];
    quotes: Quote[] = [];

        
    init() {
       return $.when(
            $.getJSON("/game/pictures").done( data => {
                this.pictures = data;
            }),
            $.getJSON("/game/quotes").done( data => {
                this.quotes = data;

            })
        );

    }
}

// Controller
const game = new Game();
const room = new Room();
const me = new Player();
var i = 0;

game.init().done(() => {
    room.picture = game.pictures[i];
    room.drawPicture();
    room.drawQuotes();
    room.drawPlayers();
    
    me.quotes = game.quotes;
    me.drawQuotes();
});



$("#cmd-flip").click(function(e){
    e.preventDefault();
    i++;
    room.picture = game.pictures[i];
    room.drawPicture();
})