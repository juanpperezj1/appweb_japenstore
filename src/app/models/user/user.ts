export class User {
    public _id? : string;
    public username : string;
    public pass : string;
    public lastname : string;
    public email : string;
    public rol : string;
    public boleta : number;
    public idx? : number;

   constructor(_id : string, pass : string, username : string, lastname : string, email : string, rol : string, boleta : number) {
        this._id = _id;
        this.pass = pass;
        this.username = username;
        this.lastname = lastname;
        this.email = email;
        this.rol = rol;
        this.boleta = boleta;
   }
}
    



