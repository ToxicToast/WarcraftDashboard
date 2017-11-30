import { Injectable } from '@angular/core';

import { FirebaseAuth } from '../helpers/FirebaseAuth';

@Injectable()
export class AuthService {

  constructor(
    private fbAuth : FirebaseAuth
  ) { }

  registerUser(email : string, password : string) {
    this.fbAuth.createUser(email, password);
  }

}
