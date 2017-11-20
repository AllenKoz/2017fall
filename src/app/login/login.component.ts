import { Component, OnInit } from '@angular/core';
import { GameService } from '../models/game.service';
import { Player } from '../models/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
