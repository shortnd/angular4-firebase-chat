import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {AF} from '../providers/af';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';

export const firebaseConfig = {
    apiKey: "AIzaSyB05OsMVx14S3bHNG4cHnRFSP3xMXftqhc",
    authDomain: "textchat-6830d.firebaseapp.com",
    databaseURL: "https://textchat-6830d.firebaseio.com",
    projectId: "textchat-6830d",
    storageBucket: "textchat-6830d.appspot.com",
    messagingSenderId: "498627878852"
}

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'login', component: LoginPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AF, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
