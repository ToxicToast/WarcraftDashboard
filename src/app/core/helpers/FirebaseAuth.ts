import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseAuth {
    private error : boolean = false;
    private errorMessage : string|undefined;

    constructor(
        private afAuth : AngularFireAuth
    ) {
        
    }

    createUser(email : string, password : string, nickname : string) {
        console.log('User Registered', email, password);
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    updateUser(uid, updateData) : void {}
    deleteUser(uid) : void  {}
    signInUser(email : string, password : string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
    signInAnonymous() {
        return this.afAuth.auth.signInAnonymously();
    }
    signOutUser() {
        return this.afAuth.auth.signOut();
    }
    currentUser() {
        return this.afAuth.auth.currentUser;
    }

    private sendUserVerification(email) : void  {}
}