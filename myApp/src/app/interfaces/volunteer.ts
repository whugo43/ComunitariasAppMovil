export interface Volunteer {
    id?:string;
    nombre:string;
    telefono:string;
    redsocial:string;
    state?:string;
    createdAt?:string;
    createdBy:string;
}
export interface Volunteer{
    proveedor: Array<Volunteer>
 }