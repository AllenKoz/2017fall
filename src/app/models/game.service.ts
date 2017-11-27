import { Injectable } from '@angular/core';
import { Player } from './game';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

declare

@Injectable()
export class GameService {

    apiRoot = "//localhost:3001"    
    me: Player;

    constructor(private http: Http, private router: Router) {
        //this.login("Barak Obama");
    }

    loginFB(){
        FB.login((response: any) => {
            if (response.authResponse) {
             console.log('Welcome!  Fetching your information.... ');
             FB.api('/me', (response: any) =>{
               console.log('Good to see you, ' + response.name + '.');
               this.login(response.name, 'password')
             });
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        });
    }

    login(name: string, password: string){
        this.http.post(this.apiRoot + "/game/room/players", { name, password }).subscribe(
            data => {
                this.me = data.json();
                this.http.get(this.apiRoot + "/game/quotes").subscribe( data =>{
                    this.me.quotes = data.json();
                });
                this.router.navigate(['/play']);
            },
            err => {
                console.log(err);
            },
            () => {}
        )
        
    }

}