import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseAuth {
    private error : boolean = false;
    private errorMessage : string|undefined;

    constructor() {
        
    }

    createUser(email : string, password : string) : void  {
        console.log('User Registered', email, password);

    }
    updateUser(uid, updateData) : void {}
    deleteUser(uid) : void  {}
    signInUser(email : string, password : string) : void  {}
    signInAnonymous() : void  {}
    signOutUser() : void {}
    currentUser() {}

    private sendUserVerification(email) : void  {}
}