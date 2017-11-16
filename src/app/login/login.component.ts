import { Component, OnInit } from '@angular/core';
import { GameService } from '../models/game.service';
import { Player } from '../models/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginr',
  templateUrl: './loginr.component.html',
  styleUrls: ['./loginr.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private game: GameService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.game.me = new Player();
    this.router.navigate(['/play']);
  }

}
