export interface Volunteer {
    id?:string;
    name?:string;
    telefono?: string;
    redsocial?:string;
}
export interface Volunteers{
    volunteers: Array<Volunteer>
 }