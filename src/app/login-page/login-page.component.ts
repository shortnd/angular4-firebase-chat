import { Component } from '@angular/core';
import {AF} from '../../providers/af';
import {Router} from '@angular/router';
// import {AngularFireAuth} from 'angularfire2/auth'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
  // providers: [AngularFireAuth]
})
export class LoginPageComponent {
    constructor(public afService: AF, private router: Router) {}

    login() {
        this.afService.loginWithGoogle().then((data) => {
            this.router.navigate(['']);
        })
    }
}
