import {Injectable} from "@angular/core";
import {AngularFireAuth} from 'angularfire2/auth';

import * as firebase from 'firebase/app';
@Injectable()
export class AF {
  constructor(public af: AngularFireAuth) {}
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
}
