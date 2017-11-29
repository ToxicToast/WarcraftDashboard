class FirebaseAuth {
    private error : boolean = false;
    private errorMessage : string|undefined;

    createUser(email : string, password : string) : void  {}
    updateUser(uid, updateData) : void {}
    deleteUser(uid) : void  {}
    signInUser(email : string, password : string) : void  {}
    signInAnonymous() : void  {}
    signOutUser() : void {}
    currentUser() {}

    private sendUserVerification(email) : void  {}
}
export default FirebaseAuth;