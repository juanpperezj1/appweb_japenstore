export class Product {
    public _id : string;
    public nombre : string;
    public categoryid : string;
    public cantidad : string;
    public precio : string;
    public img : number;
    public descripcion : string;
    public idx? : number;

   constructor(_id : string, nombre : string, categoryid : string, cantidad : string, precio : string, img : number, descripcion : string) {
        this._id = _id;
        this.nombre = nombre;
        this.categoryid = categoryid;
        this.cantidad = cantidad;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
   }
}
    



