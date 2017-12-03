import { Injectable } from '@angular/core';

import { FirebaseAuth } from '../helpers/FirebaseAuth';

@Injectable()
export class AuthService {

  constructor(
    private fbAuth : FirebaseAuth
  ) { }

  registerUser(email : string, password : string, nickname : string) {
    return this.fbAuth.createUser(email, password, nickname);
  }

  loginUser(email : string, password : string) {
    return this.fbAuth.signInUser(email, password);
  }

  currentUser() {
    return this.fbAuth.currentUser();
  }

}
