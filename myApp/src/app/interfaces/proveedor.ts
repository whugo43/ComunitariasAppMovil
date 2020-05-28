export interface Proveedor {
    id?:string;
    razonsocial:string;
    direccion: string;
    telefono:string;
    email:string;
    contactperson:string;
    donacion:string;
    state?:string;
    createdAt?:string;
    createdBy:string;
}
export interface Proveedor{
    proveedor: Array<Proveedor>
 }