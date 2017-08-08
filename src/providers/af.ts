import {Injectable} from "@angular/core";
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import * as firebase from 'firebase/app';
@Injectable()
export class AF {
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;

  constructor(public af: AngularFireAuth, public db: AngularFireDatabase) {
      this.messages = this.db.list('messages');
  }
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    // return this.af.auth.login({
    //   provider: AuthProviders.Google,
    //   method: AuthMethods.Popup,
    // });
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.signOut();
  }
  /**
  * Saves a message to the Firebase Realtime Database
  * @param text
  */
  sendMessage(text){
      var message = {
          message: text,
          displayName: this.displayName,
          email: this.email,
          timestamp: Date.now()
      };
      this.messages.push(message);
  }
}
